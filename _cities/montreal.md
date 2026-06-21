---
title: Montreal
slug: montreal
description: 'Montreal: production-grade planning logic and realistic pacing.'
dek: 'Montreal: production-grade planning logic and realistic pacing.'
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
  v: 4–6 days
- k: Planning unit
  v: Neighborhood days
- k: Pace
  v: Early starts
country_slug: canada
region_slug: quebec
overview: Montreal rewards borough clustering and separating Old Montreal from Plateau
  days.
payments: Cards widely accepted; small cafés may prefer debit.
connectivity: Strong metro grid; compact island geography.
arrival_tip: Stay near a metro line on the orange or green line.
arrival_verify: Late-night metro frequency changes.
getting_around: Metro + walking; avoid crossing island repeatedly.
things_intro: 'Win condition: 3–5 borough loops.'
itineraries:
- title: 3 days
  tag: Starter
  steps:
  - Old Montreal
  - Plateau + Mile End
  - Mount Royal + Museums
checklist:
- Verify museum days
- Avoid crossing river twice in one day
- Plan one lighter food-focused half-day
stay_areas:
- title: Old Montreal
  tag: Historic
  desc: Walkable core; compact.
- title: Plateau
  tag: Culture
  desc: Cafés, local feel.
arrival:
- option: YUL Airport
  best_for: Most arrivals
  notes: 747 bus or taxi; verify late service.
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
<section class="section" id="things"><h2>Things to do</h2><p class="muted">{{ page.things_intro }}</p></section>
<section class="section" id="itineraries"><h2>Itineraries</h2><div class="itins">{% for itin in page.itineraries %}
  <div class="itin"><div class="itinHead"><h3>{{ itin.title }}</h3><span class="pill">{{ itin.tag }}</span></div><ol class="micro">{% for step in itin.steps %}<li>{{ step }}</li>{% endfor %}</ol></div>
{% endfor %}</div></section>
<section class="section" id="checklist"><h2>Checklist</h2><div class="check">{% for c in page.checklist %}<label class="checkItem"><input type="checkbox"> {{ c }}</label>{% endfor %}</div></section>
