---
layout: default
title: Search
description: Search countries, regions, cities, attractions, and practical modules.
permalink: /search/
breadcrumbs:
  - label: Search
---

<section class="hero">
  <div class="heroMedia" aria-hidden="true">
    <div class="heroImg"></div>
    <div class="heroOverlay"></div>
  </div>
  <div class="wrap heroInner">
    {% include crumbs.html items=page.breadcrumbs %}
    <h1 class="title">Search</h1>
    <p class="dek">Search across all guides. Results are instant and run entirely in the browser.</p>
    <div class="searchPanel">
      <div class="searchBar"><span aria-hidden="true">⌕</span><input data-search-input placeholder="Search: Toronto, Japan, Louvre, tipping…" autocomplete="off"></div>
      <div class="searchHint small">Tip: try a place name, landmark, or planning term.</div>
    </div>
  </div>
</section>

<main class="wrap layout">
  <article class="article">
    <section class="section">
      <div class="searchResults" data-search-results></div>
    </section>
  </article>
</main>

<script>window.__dg_search_index_url = "{{ '/assets/search-index.json' | relative_url }}";</script>
