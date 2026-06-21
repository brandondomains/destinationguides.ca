---
title: Madrid
slug: madrid-city
description: 'Madrid: transit strategy, neighborhood clustering, and realistic pacing.'
dek: 'Madrid: transit strategy, neighborhood clustering, and realistic pacing.'
updated: '2026-02-21'
guide_type: City
tags:
- City
section_nav:
- id: overview
  label: Overview
- id: needtoknow
  label: Need to know
- id: gettingthere
  label: Getting there
- id: gettingaround
  label: Getting around
- id: whereToStay
  label: Where to stay
- id: things
  label: Things to do
- id: itineraries
  label: Itineraries
- id: checklist
  label: Checklist
facts:
- k: Typical stay
  v: 3–5 days
- k: Getting around
  v: Transit + walking
- k: Planning unit
  v: Neighborhood days
- k: Pace
  v: Early starts
- k: Pace
  v: Late evenings
breadcrumbs:
- label: Cities
  url: /cities/
- label: Madrid
related:
- type: Search
  title: Search guides
  sub: Find destinations fast.
  url: /search/
- type: Countries
  title: Browse countries
  sub: Start with planning logic.
  url: /countries/
- type: Cities
  title: Browse cities
  sub: Neighborhood and transit strategy.
  url: /cities/
country_slug: spain
region_slug: community-of-madrid
featured: true
overview: Madrid rewards museum pacing and park/food buffers. The mistake is stacking
  three heavy museums in two days.
payments: Cards widely accepted; verify late-night dining payment patterns and reservations.
connectivity: Great coverage; offline maps help in stations and museum queueing.
arrival_tip: Stay near a simple line to Sol/Gran Vía or a major transfer station.
arrival_verify: Museum hours, closed days, and timed entry rules.
getting_around: Metro + walking. Separate museum/Retiro days from palace/center days.
things_intro: 'Win condition: 2–3 strong core loops + one lighter neighborhood day
  + one day trip if desired.'
itineraries:
- title: 3 days
  tag: Starter
  steps:
  - Centro core + Palacio area
  - Prado/Retiro day
  - Gran Vía + food neighborhoods
- title: 5 days
  tag: Balanced
  steps:
  - Centro day
  - Prado day
  - Reina Sofía + Lavapiés
  - Malasaña/Chueca loop
  - Day trip buffer (Toledo/Segovia)
checklist:
- Verify museum closed days before you commit a day
- Don’t stack Prado + Reina Sofía + Thyssen in one day
- Treat Retiro as a pacing tool, not a bonus
- Book day trips early and leave slack
stay_areas:
- title: Sol/Gran Vía
  tag: Base
  desc: Easiest for first trip; central.
- title: Retiro/Prado edge
  tag: Museums
  desc: Great if museums are priority.
- title: Malasaña/Chueca
  tag: Evenings
  desc: Food + nightlife; strong walk loops.
arrival:
- option: MAD (Barajas)
  best_for: Most arrivals
  notes: Metro/express bus; verify late-night options.
- option: Atocha/Chamartín
  best_for: Rail arrivals
  notes: Choose lodging with a simple metro line.
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
