---
title: Catalonia
slug: catalonia
description: 'Catalonia: base selection and day-loop strategy.'
dek: 'Catalonia: base selection and day-loop strategy.'
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
- label: Catalonia
related:
- type: Countries
  title: Browse countries
  sub: Start with planning logic.
  url: /countries/
- type: Cities
  title: Browse cities
  sub: Neighborhood and transit strategy.
  url: /cities/
country_slug: spain
overview: Catalonia is strongest when you anchor in Barcelona and add one geography
  day trip, not three.
base_strategy: Barcelona is the base. Add a second base only if you want a distinct
  coast/mountains stretch for several days.
daytrip_logic: Montserrat is a clean day trip; Costa Brava works best as a separate
  overnight if you want beaches properly.
itineraries:
- title: 6–8 days
  tag: Balanced
  steps:
  - 3 Barcelona loops
  - Gaudí anchor mornings
  - Montserrat day
  - Beach/slow day
  - Buffer
checklist:
- Book Gaudí anchors early
- Treat beach as a half-day minimum
- Verify day-trip schedules
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
