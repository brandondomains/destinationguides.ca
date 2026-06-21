---
title: Norte
slug: norte
description: 'Norte: base selection and day-loop strategy.'
dek: 'Norte: base selection and day-loop strategy.'
updated: '2026-02-21'
guide_type: Region
tags:
- Region
section_nav:
- id: overview
  label: Overview
- id: needtoknow
  label: Need to know
- id: itineraries
  label: Itineraries
- id: checklist
  label: Checklist
facts:
- k: Planning unit
  v: Base + loops
- k: Pace
  v: Buffer day
breadcrumbs:
- label: Regions
  url: /regions/
- label: Norte
related:
- type: Countries
  title: Browse countries
  sub: Start with planning logic.
  url: /countries/
- type: Cities
  title: Browse cities
  sub: Neighborhood and transit strategy.
  url: /cities/
country_slug: portugal
overview: Norte rewards a Porto base plus one Douro day or a coastal loop—not a city-hopping
  checklist.
base_strategy: Porto is the natural hub. Add a second base only if you’re doing a
  longer coastal drive or multi-day Douro stay.
daytrip_logic: Douro is about trains/boats timing; treat it as a full day and keep
  your next morning light.
itineraries:
- title: 5–7 days
  tag: Balanced
  steps:
  - 2 Porto loops
  - Gaia/river day
  - Douro day
  - Coast buffer
  - Flex day
checklist:
- Verify Douro schedules
- Avoid stacking late nights before early trains
- Leave recovery time after long day trips
---

<section class="section" id="overview"><h2>Overview</h2><p>{{ page.overview }}</p></section>
<section class="section" id="needtoknow"><h2>Need to know</h2><div class="twocol">
  <div><h3>Base strategy</h3><p class="muted">{{ page.base_strategy }}</p></div>
  <div><h3>Day-trip logic</h3><p class="muted">{{ page.daytrip_logic }}</p></div>
</div></section>
<section class="section" id="itineraries"><h2>Itineraries</h2><div class="itins">{% for itin in page.itineraries %}
  <div class="itin"><div class="itinHead"><h3>{{ itin.title }}</h3><span class="pill">{{ itin.tag }}</span></div><ol class="micro">{% for step in itin.steps %}<li>{{ step }}</li>{% endfor %}</ol></div>
{% endfor %}</div></section>
<section class="section" id="checklist"><h2>Checklist</h2><div class="check">{% for c in page.checklist %}<label class="checkItem"><input type="checkbox"> {{ c }}</label>{% endfor %}</div></section>
