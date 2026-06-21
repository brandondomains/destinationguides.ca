---
title: Île-de-France
slug: ile-de-france
description: 'Île-de-France: major bases, day-trip clusters, and practical planning
  notes.'
dek: 'Île-de-France: major bases, day-trip clusters, and practical planning notes.'
updated: '2026-02-21'
guide_type: Region
tags:
- Region
section_nav:
- id: overview
  label: Overview
- id: bases
  label: Where to base
- id: cities
  label: Cities
- id: itineraries
  label: Itineraries
- id: checklist
  label: Checklist
facts:
- k: Type
  v: Province
- k: Typical stay
  v: 3–7 days
- k: Best windows
  v: May–Oct (Verify)
- k: Transport
  v: Transit + driving mix
- k: Planning style
  v: Base + clusters
breadcrumbs:
- label: Regions
  url: /regions/
- label: Île-de-France
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
country_slug: france
overview: Île-de-France works best when you choose one primary base and build day
  loops by geography.
cities_intro: Use cities as bases, not checkboxes. Pick what reduces transfers and
  maximizes coherent days.
itineraries:
- title: 4–5 days
  tag: Short
  steps:
  - One base
  - 2–3 day loops
  - One flexible day
- title: 7–10 days
  tag: Deep
  steps:
  - One base + optional second
  - 3–6 loops
  - One buffer day
checklist:
- Verify seasonal closures and weather constraints
- Verify transit schedules and last departures
- Verify timed ticket rules for anchors
bases:
- title: Primary base
  tag: Start here
  desc: Best-connected hub for arrivals and day loops.
- title: Secondary base (optional)
  tag: If time
  desc: Add only if it unlocks distinct geography without extra backtracking.
---

<section class="section" id="overview"><h2>Overview</h2><p>{{ page.overview }}</p></section>
<section class="section" id="bases"><h2>Where to base</h2><div class="areas">{% for b in page.bases %}
  <div class="area"><div class="areaHead"><h3>{{ b.title }}</h3><span class="pill">{{ b.tag }}</span></div><p class="muted">{{ b.desc }}</p><ul class="micro">{% for x in b.bullets %}<li>{{ x }}</li>{% endfor %}</ul></div>
{% endfor %}</div></section>
<section class="section" id="cities"><h2>Cities</h2><p>{{ page.cities_intro }}</p>
  <div class="relatedGrid">{% assign cts = site.cities | where: "region_slug", page.slug | where: "country_slug", page.country_slug | sort: "title" %}{% for c in cts %}
    <a class="relCard" href="{{ c.url | relative_url }}"><div class="relMeta">City</div><div class="relTitle">{{ c.title }}</div><p class="relSub">{{ c.dek }}</p></a>
  {% endfor %}</div>
</section>
<section class="section" id="itineraries"><h2>Itineraries</h2><div class="itins">{% for itin in page.itineraries %}
  <div class="itin"><div class="itinHead"><h3>{{ itin.title }}</h3><span class="pill">{{ itin.tag }}</span></div><ol class="micro">{% for step in itin.steps %}<li>{{ step }}</li>{% endfor %}</ol></div>
{% endfor %}</div></section>
<section class="section" id="checklist"><h2>Checklist</h2><div class="check">{% for c in page.checklist %}<label class="checkItem"><input type="checkbox"> {{ c }}</label>{% endfor %}</div></section>
