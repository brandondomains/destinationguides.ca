---
title: Tokyo
slug: tokyo-city
description: "Tokyo: rail strategy, neighborhood clustering, and realistic pacing."
dek: "Tokyo: rail strategy, neighborhood clustering, and realistic pacing."
updated: 2026-02-21
guide_type: City
tags:
  - City
section_nav:
  -
    id: overview
    label: Overview
  -
    id: needtoknow
    label: Need to know
  -
    id: gettingthere
    label: Getting there
  -
    id: gettingaround
    label: Getting around
  -
    id: whereToStay
    label: Where to stay
  -
    id: things
    label: Things to do
  -
    id: itineraries
    label: Itineraries
  -
    id: checklist
    label: Checklist
facts:
  -
    k: Typical stay
    v: 4–6 days
  -
    k: Getting around
    v: Rail/metro
  -
    k: Best windows
    v: Varies
  -
    k: Planning unit
    v: Neighborhood days
  -
    k: Pace
    v: Early starts
breadcrumbs:
  -
    label: Cities
    url: /cities/
  -
    label: Tokyo
related:
  -
    type: Search
    title: Search guides
    sub: Find destinations fast.
    url: /search/
  -
    type: Countries
    title: Browse countries
    sub: Start with planning logic.
    url: /countries/
  -
    type: Cities
    title: Browse cities
    sub: Neighborhood and transit strategy.
    url: /cities/
country_slug: japan
region_slug: tokyo
featured: true
overview: Tokyo is easier when you commit to neighborhood days and resist constant cross-city detours.
payments: Cards work widely; transit cards simplify life. Verify cash needs for small eateries.
connectivity: Excellent coverage. Offline maps help in stations and underground passages.
arrival_tip: Pick lodging that minimizes transfers during your first 24 hours.
arrival_verify: Last train times and service changes.
getting_around: Rail + walking. Plan one station cluster per half-day and keep anchors near each other.
things_intro: The win condition is 4–6 excellent neighborhood loops, not ‘everything’.
itineraries:
  -
    title: 3 days
    tag: Starter
    steps:
      - West loop
      - Central loop
      - East loop
checklist:
  - Verify anchor attraction tickets
  - Avoid crossing the city twice in one day
  - Plan a rest half-day
stay_areas:
  -
    title: Shinjuku/Shibuya
    tag: Access
    desc: Great connectivity; busy.
  -
    title: Asakusa/Ueno
    tag: Culture
    desc: Museums, parks, classic Tokyo feel.
  -
    title: Tokyo Station area
    tag: Transfers
    desc: Best for Shinkansen days.
arrival:
  -
    option: Haneda
    best_for: Fast city access
    notes: Often the easiest airport for central access (Verify late trains).
  -
    option: Narita
    best_for: Some international routes
    notes: Budget extra time; verify express options.
  -
    option: Shinkansen
    best_for: Multi-city trips
    notes: Tokyo Station hub; pick lodging with a simple line.
---
<section class="section" id="overview"><h2>Overview</h2><p>{{ page.overview }}</p></section>
<section class="section" id="needtoknow"><h2>Need to know</h2><div class="twocol">
  <div><h3>Costs & payments</h3><p class="muted">{{ page.payments }}</p></div>
  <div><h3>Connectivity</h3><p class="muted">{{ page.connectivity }}</p></div>
</div></section>
<section class="section" id="gettingthere"><h2>Getting there</h2>
  <div class="module">
    <div class="moduleHead"><h3>Arrival options</h3><p class="muted">Choose based on where you’re staying and time of day.</p></div>
    <div class="tableWrap" role="region" aria-label="Arrival table" tabindex="0">
      <table class="table">
        <thead><tr><th>Option</th><th>Best for</th><th>Notes</th></tr></thead>
        <tbody>{% for row in page.arrival %}<tr><td><strong>{{ row.option }}</strong></td><td>{{ row.best_for }}</td><td>{{ row.notes }}</td></tr>{% endfor %}</tbody>
      </table>
    </div>
    <div class="noteRow">
      <div class="note"><div class="noteK">Tip</div><div class="noteV">{{ page.arrival_tip }}</div></div>
      <div class="note"><div class="noteK">Verify</div><div class="noteV">{{ page.arrival_verify }}</div></div>
    </div>
  </div>
</section>
<section class="section" id="gettingaround"><h2>Getting around</h2><p>{{ page.getting_around }}</p></section>
<section class="section" id="whereToStay"><h2>Where to stay</h2><div class="areas">{% for a in page.stay_areas %}
  <div class="area"><div class="areaHead"><h3>{{ a.title }}</h3><span class="pill">{{ a.tag }}</span></div><p class="muted">{{ a.desc }}</p></div>
{% endfor %}</div></section>
<section class="section" id="things"><h2>Things to do</h2><p class="muted">{{ page.things_intro }}</p>
  <div class="relatedGrid">{% assign ats = site.attractions | where: "city_slug", page.slug | where: "region_slug", page.region_slug | where: "country_slug", page.country_slug | sort: "title" %}{% for a in ats %}
    <a class="relCard" href="{{ a.url | relative_url }}"><div class="relMeta">Attraction</div><div class="relTitle">{{ a.title }}</div><p class="relSub">{{ a.dek }}</p></a>
  {% endfor %}</div>
</section>
<section class="section" id="itineraries"><h2>Itineraries</h2><div class="itins">{% for itin in page.itineraries %}
  <div class="itin"><div class="itinHead"><h3>{{ itin.title }}</h3><span class="pill">{{ itin.tag }}</span></div><ol class="micro">{% for step in itin.steps %}<li>{{ step }}</li>{% endfor %}</ol></div>
{% endfor %}</div></section>
<section class="section" id="checklist"><h2>Checklist</h2><div class="check">{% for c in page.checklist %}<label class="checkItem"><input type="checkbox"> {{ c }}</label>{% endfor %}</div></section>
