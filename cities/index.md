---
layout: default
title: Cities
description: City guides: neighborhoods, transit strategy, and itineraries.
permalink: /cities/
breadcrumbs:
  - label: Cities
---

<section class="hero">
  <div class="heroMedia" aria-hidden="true"><div class="heroImg"></div><div class="heroOverlay"></div></div>
  <div class="wrap heroInner">
    {% include crumbs.html items=page.breadcrumbs %}
    <h1 class="title">Cities</h1>
    <p class="dek">City guides: neighborhoods, transit strategy, and itineraries.</p>
    <div class="searchPanel">
      <div class="searchBar"><span aria-hidden="true">⌕</span><input data-search-input placeholder="Search Cities…" autocomplete="off"></div>
      <div class="searchHint small">Search is site-wide; results include all guide types.</div>
    </div>
  </div>
</section>

<main class="wrap layout">
  <article class="article">
    <section class="section" id="browse">
      <h2>Browse</h2>
      <div class="relatedGrid">
        {% assign items = site.cities | sort: "title" %}
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
