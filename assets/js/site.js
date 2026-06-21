(function(){
  const sections=[...document.querySelectorAll(".article .section[id]")];
  const secLinks=[...document.querySelectorAll(".secLink")];
  function setActive(id){secLinks.forEach(a=>a.classList.toggle("isOn",a.getAttribute("href")==="#"+id));}
  if(sections.length && secLinks.length){
    const obs=new IntersectionObserver((entries)=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) setActive(visible.target.id);
    },{rootMargin:"-25% 0px -65% 0px",threshold:[0.05,0.1,0.2,0.35,0.5]});
    sections.forEach(s=>obs.observe(s));
  }

  const copyBtn=document.getElementById("copyLinkBtn");
  if(copyBtn){
    copyBtn.addEventListener("click",async()=>{
      const canonical=document.querySelector('link[rel="canonical"]')?.href||window.location.href;
      try{
        await navigator.clipboard.writeText(canonical);
        const old=copyBtn.textContent;
        copyBtn.textContent="Copied";
        setTimeout(()=>copyBtn.textContent=old,900);
      }catch{
        window.prompt("Copy link:", canonical);
      }
    });
  }

  async function initSearch(){
    const box=document.querySelector("[data-search-input]");
    const results=document.querySelector("[data-search-results]");
    if(!box || !results) return;

    let index=[];
    try{
      const res=await fetch(window.__dg_search_index_url || (document.documentElement.dataset.baseurl || "") + "/assets/search-index.json");
      index=await res.json();
    }catch(e){
      results.innerHTML='<div class="muted">Search index not available.</div>';
      return;
    }

    function normalize(s){return (s||"").toLowerCase().replace(/\s+/g," ").trim();}
    function score(item,q){
      const t=normalize(item.title);
      const d=normalize(item.dek);
      const tags=(item.tags||[]).map(normalize).join(" ");
      let s=0;
      if(t.includes(q)) s+=8;
      if(d.includes(q)) s+=4;
      if(tags.includes(q)) s+=2;
      q.split(" ").forEach(tok=>{
        if(tok.length<2) return;
        if(t.includes(tok)) s+=2;
        if(d.includes(tok)) s+=1;
      });
      return s;
    }

    function render(list, q){
      if(!q){
        results.innerHTML = '<div class="muted">Type to search countries, regions, cities, attractions, and practical modules.</div>';
        return;
      }
      const top=list.slice(0,18);
      if(!top.length){
        results.innerHTML = '<div class="muted">No results. Try a country, city, or landmark name.</div>';
        return;
      }
      results.innerHTML = top.map(it => `
        <a class="resultCard" href="${it.url}">
          <div class="resultMeta">${it.type}</div>
          <div class="resultTitle">${it.title}</div>
          <p class="resultSub">${it.dek || ""}</p>
        </a>
      `).join("");
    }

    let last="";
    function run(){
      const q=normalize(box.value);
      if(q===last) return;
      last=q;
      const ranked=index
        .map(it => ({...it, _s: score(it,q)}))
        .filter(it => it._s>0)
        .sort((a,b)=>b._s-a._s);
      render(ranked,q);
    }
    box.addEventListener("input", run);
    run();
  }
  initSearch();
})();