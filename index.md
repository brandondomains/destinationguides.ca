---
layout: default
title: DestinationGuides.ca
description: Content-first destination guides with a Canadian traveler lens.
permalink: /
---

<section class="hero">
  <div class="heroMedia" aria-hidden="true"><div class="heroImg"></div><div class="heroOverlay"></div></div>
  <div class="wrap heroInner">
    <h1 class="title">DestinationGuides.ca</h1>
    <p class="dek">A clean, publication-grade destination reference for Canadian travelers — optimized for planning, not selling.</p>
    <div class="searchPanel">
      <div class="searchBar"><span aria-hidden="true">⌕</span><input data-search-input placeholder="Search: Canada, Paris, Tokyo, CN Tower, tipping…" autocomplete="off"></div>
      <div class="searchHint small">Instant results. No tracking scripts in this starter build.</div>
    </div>
  </div>
</section>

<main class="wrap layout">
  <article class="article">
    <section class="section" id="results">
      <h2>Search results</h2>
      <div class="searchResults" data-search-results></div>
    </section>

    <section class="section" id="browse">
      <h2>Browse</h2>
      <div class="relatedGrid">
        <a class="relCard" href="{{ '/countries/' | relative_url }}"><div class="relMeta">Browse</div><div class="relTitle">Countries</div><p class="relSub">Entry basics, seasons, and planning logic.</p></a>
        <a class="relCard" href="{{ '/regions/' | relative_url }}"><div class="relMeta">Browse</div><div class="relTitle">Regions</div><p class="relSub">States/provinces/regions as planning units.</p></a>
        <a class="relCard" href="{{ '/cities/' | relative_url }}"><div class="relMeta">Browse</div><div class="relTitle">Cities</div><p class="relSub">Neighborhood strategy and itineraries.</p></a>
      </div>
    </section>

    <section class="section" id="starter">
      <h2>Starter picks</h2>
      <p class="muted">Seeded content to prove the structure. Replace and expand with your real publication plan.</p>
      <div class="relatedGrid">
        {% assign picks = site.cities | where: "featured", true | slice: 0, 9 %}
        {% for p in picks %}
          <a class="relCard" href="{{ p.url | relative_url }}">
            <div class="relMeta">{{ p.guide_type }}</div>
            <div class="relTitle">{{ p.title }}</div>
            <p class="relSub">{{ p.dek }}</p>
          </a>
        {% endfor %}
      </div>
    </section>
  </article>
</main>

<script>window.__dg_search_index_url = "{{ '/assets/search-index.json' | relative_url }}";</script>
