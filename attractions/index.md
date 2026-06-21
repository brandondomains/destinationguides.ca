---
layout: default
title: Attractions
description: Attraction guides: access, tickets, timing, and nearby planning.
permalink: /attractions/
breadcrumbs:
  - label: Attractions
---

<section class="hero">
  <div class="heroMedia" aria-hidden="true"><div class="heroImg"></div><div class="heroOverlay"></div></div>
  <div class="wrap heroInner">
    {% include crumbs.html items=page.breadcrumbs %}
    <h1 class="title">Attractions</h1>
    <p class="dek">Attraction guides: access, tickets, timing, and nearby planning.</p>
    <div class="searchPanel">
      <div class="searchBar"><span aria-hidden="true">⌕</span><input data-search-input placeholder="Search Attractions…" autocomplete="off"></div>
      <div class="searchHint small">Search is site-wide; results include all guide types.</div>
    </div>
  </div>
</section>

<main class="wrap layout">
  <article class="article">
    <section class="section" id="browse">
      <h2>Browse</h2>
      <div class="relatedGrid">
        {% assign items = site.attractions | sort: "title" %}
        {% for it in items %}
          <a class="relCard" href="{{ it.url | relative_url }}">
            <div class="relMeta">{{ it.guide_type }}</div>
            <div class="relTitle">{{ it.title }}</div>
            <p class="relSub">{{ it.dek }}</p>
          </a>
        {% endfor %}
      </div>
    </section>
  </article>
</main>

<script>window.__dg_search_index_url = "{{ '/assets/search-index.json' | relative_url }}";</script>
