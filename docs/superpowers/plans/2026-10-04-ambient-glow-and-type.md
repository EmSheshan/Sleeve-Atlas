# Ambient Glow + Type Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat, static `.aura` background with an organic, grain-textured, album-colour-reactive glow system, and replace `Inter`/`IBM Plex Mono` with less generic type.

**Architecture:** Two independent pieces touching `public/index.html`, `public/styles.css`, and `public/app.js`. No build tooling or test framework exists in this repo (`package.json` has no test script, no `*.test.*` files anywhere) — every task's verification step is a manual check against the running dev server instead of an automated test, matching how the rest of this codebase is validated.

**Tech Stack:** Vanilla HTML/CSS/JS, no framework, no build step beyond `scripts/build-static.mjs` (copies/bundles `public/` into `dist/`, which `server/index.js` serves).

## Global Constraints

- No test framework in this repo — verify every task by running `npm start` (rebuilds `dist/` from `public/` and serves it) and checking the result in a browser, not with an automated test.
- `prefers-reduced-motion: reduce` must disable every new animation, matching the existing pattern already in `public/styles.css` (search `prefers-reduced-motion` for the current convention).
- New animated properties must stay on `transform`/`opacity`/`border-radius` (no animating `width`/`height`/`top`/`left`), matching the compositor-only discipline the current `.aura` already follows.
- Don't touch anything outside the glow system and the three `--font-*` custom properties — no other palette, layout, or component changes.

---

## Task 1: Type swap — Literata + Martian Mono

**Files:**
- Modify: `public/index.html:13` (Google Fonts `<link>`)
- Modify: `public/styles.css:29-31` (`--font-display`/`--font-body`/`--font-mono`)

**Interfaces:** None — every consumer already references `var(--font-display)`/`var(--font-body)`/`var(--font-mono)`, so no selector changes are needed anywhere else.

- [ ] **Step 1: Confirm the exact font axes before wiring the link**

Open `https://fonts.google.com/specimen/Literata` and `https://fonts.google.com/specimen/Martian+Mono` in a browser. Confirm:
- Literata ships a variable weight range covering at least 400–700 (it does — Literata's variable range is 200–900, plus an `opsz` optical-size axis).
- Martian Mono ships a variable weight range covering at least 400–700 (it does — Martian Mono's variable range is 100–800, plus a `wdth` width axis).

If either is narrower than expected, substitute the closest static weights (e.g. `Literata:wght@400;600;700`) instead of the variable range in Step 2, and note the substitution in this task's commit message.

- [ ] **Step 2: Swap the font `<link>`**

In `public/index.html`, replace line 13:

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

with:

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Literata:opsz,wght@18..144,400..700&family=Martian+Mono:wght@400..700&display=swap" rel="stylesheet" />
```

- [ ] **Step 3: Swap the custom properties**

In `public/styles.css`, replace lines 29-31:

```css
  --font-display: "Archivo", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
```

with:

```css
  --font-display: "Archivo", sans-serif;
  --font-body: "Literata", serif;
  --font-mono: "Martian Mono", monospace;
```

- [ ] **Step 4: Verify**

Run:
```bash
npm start
```
Open `http://localhost:4001` in a browser. Confirm:
- Nav labels, buttons, stat figures, and card captions (previously `IBM Plex Mono`) now render in Martian Mono's geometric letterforms — open devtools, select a `.micro` or `.card-artist` element, and confirm Computed → `font-family` resolves to `"Martian Mono"`.
- An album card title or the album-sheet review text (previously `Inter`) now renders as a serif (Literata) — same devtools check on `.card-title`, confirm Computed → `font-family` resolves to `"Literata"`.
- The masthead/hero heading is unchanged (still Archivo).
- No FOUT/layout thrash worse than before — font-weight 400/600/700 should all render distinctly (check a stat-card heading at 700 vs. a caption at 400 — they should look visibly different in weight, not fall back to a single synthetic weight).

- [ ] **Step 5: Commit**

```bash
git add public/index.html public/styles.css
git commit -m "Type pass: Literata body, Martian Mono labels, Archivo unchanged"
```

---

## Task 2: Replace `.aura` with the ambient glow layer

> **Amendment (post-Task-4, live-tested against the real page):** the original `filter: blur(3px)` on `.glow` looked fine in the brainstorming mockups' small swatches but was nowhere near enough blur at real element scale (600px+ wide) — it rendered as a hard-edged, nearly-opaque disc rather than a soft glow, confirmed bad by the user looking at the real hover state. Fixed to `blur(40px)`, validated live via Playwright against both the today's-pick banner (~633px) and a grid-tile hover (~320px) before writing back here. The code block below already reflects the corrected value. Tasks 3 and 4 (already committed when this was found) needed a follow-up fix to their opacity and gradient-stop values too — see the amendment notes in those sections.

**Files:**
- Modify: `public/index.html:18-21` (the `.aura` div)
- Modify: `public/styles.css:34-72` (the `---------- Aura ----------` section)

**Interfaces:**
- Produces: a `.sw-grain` background-image data URI and a `.glow`/`.glow-ambient` blob pattern (asymmetric morphing `border-radius`, radial-gradient dark-core→ring→fade) that Tasks 3-5 reuse for the focus layer.

- [ ] **Step 1: Replace the aura markup**

In `public/index.html`, replace lines 18-21:

```html
<!-- Slow mesh gradient under everything. Fixed, heavily blurred and only
     lightly tinted, so the grey has some movement in it without ever becoming
     something you have to read through. -->
<div class="aura" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
```

with:

```html
<!-- Ambient glow: two slow, low-opacity, organically-morphing blobs plus a
     grain layer baked into the canvas. Replaces the old four-circle aura.
     Opacity stays low here on purpose — the same colour-and-motion mechanic
     goes full-strength at today's pick, an open album, and a hovered tile
     (see .glow-focus in styles.css), so this ambient layer should read as
     "the grey has a temperature," not compete with those. -->
<div class="ambient-glow" aria-hidden="true">
  <span class="glow glow-ambient glow-ambient-1"></span>
  <span class="glow glow-ambient glow-ambient-2"></span>
  <span class="grain"></span>
</div>
```

- [ ] **Step 2: Replace the Aura CSS section**

In `public/styles.css`, replace the entire block from line 34 (`/* ---------- Aura ---------- */`) through line 72 (the closing `}` of the `@media (prefers-reduced-motion: reduce)` block) with:

```css
/* ---------- Ambient glow ---------- */

/* Grain baked into the canvas via SVG turbulence, not a filter layered over
   a clean gradient — this is what makes the glow read as tactile rather
   than decorative. Reused by the focus-layer glows too (Tasks 3-5). */
.grain {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  mix-blend-mode: overlay;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Organic, not circular — asymmetric border-radius that slowly re-morphs,
   instead of a fixed-shape blurred circle. Each blob carries its own
   dark-core -> bright-ring -> transparent-fade gradient (a gradient-map
   style ramp), not a flat colour mixed with its neighbours via blend mode. */
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: glow-morph 20s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes glow-morph {
  0%   { border-radius: 42% 58% 61% 39% / 47% 44% 56% 53%; transform: scale(1) rotate(0deg); }
  50%  { border-radius: 58% 42% 38% 62% / 55% 60% 40% 45%; transform: scale(1.08) rotate(8deg); }
  100% { border-radius: 48% 52% 55% 45% / 40% 55% 45% 60%; transform: scale(1.02) rotate(-6deg); }
}

@media (prefers-reduced-motion: reduce) {
  .glow { animation: none; }
}

.ambient-glow {
  position: fixed;
  inset: -20vmax;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

/* Page-wide tier: low opacity, slow, a fixed neutral palette — there's no
   single "current album" for the whole page, so this one isn't
   album-reactive. The focus tier (Tasks 3-5) is what carries real colour. */
.glow-ambient {
  opacity: 0.22;
  animation-duration: 34s;
}

.glow-ambient-1 {
  width: 32vmax;
  height: 30vmax;
  top: -8vmax;
  left: 8vw;
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%, rgba(23, 20, 15, 0) 22%,
    #c23b1f 46%, #e8862e 64%, rgba(232, 134, 46, 0) 85%);
}

.glow-ambient-2 {
  width: 30vmax;
  height: 28vmax;
  bottom: -9vmax;
  right: 4vw;
  animation-delay: -14s;
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%, rgba(23, 20, 15, 0) 20%,
    #8c2a1a 42%, #d6361d 60%, rgba(214, 54, 29, 0) 86%);
}
```

- [ ] **Step 3: Verify**

Run:
```bash
npm start
```
Open `http://localhost:4001`. Confirm:
- Two soft, irregularly-shaped (not circular) glowing blobs are faintly visible behind the page content, slowly changing shape over ~20-30 seconds.
- The page reads as "subtle warmth," not a loud colour wash — nothing should pull focus from the album grid.
- In devtools, toggle `prefers-reduced-motion: reduce` (Rendering tab → Emulate CSS media feature) and confirm the blobs stop moving/morphing but stay visible (static).
- No console errors.

- [ ] **Step 4: Commit**

```bash
git add public/index.html public/styles.css
git commit -m "Replace flat aura with organic grain+glow ambient layer"
```

---

## Task 3: Focus glow — today's pick

> **Amendment (post-Task-4, live-tested):** `.glow-focus`'s `opacity: 0.95` plus `.tp-glow`'s flat colour plateau (`20%, COLOR 55%, 85%`) read as a solid dome, not a glow, at this element's real ~633px width. Fixed to `opacity: 0.55` and a single-peak gradient (`COLOR` at `42%` only, transparent at both `0%` and `100%`) — the code below reflects the fix. Depends on Task 2's corrected `blur(40px)`.

**Files:**
- Modify: `public/app.js:235-244` (`renderTodayPick`'s `innerHTML` template)
- Modify: `public/styles.css` (new rules in the `---------- Today's pick ----------` section, after line 448)

**Interfaces:**
- Consumes: `.glow`, `.grain` from Task 2 (`public/styles.css`).
- Consumes: the `--wash` custom property, already set by existing code at `public/app.js:250` (`todayPickEl.style.setProperty("--wash", css)`) — currently unused by any CSS rule; this task gives it a real consumer instead of adding new JS colour-extraction.

- [ ] **Step 1: Add focus-glow blobs to the today's-pick template**

In `public/app.js`, replace lines 235-244:

```javascript
  todayPickEl.innerHTML = `
    <div class="tp-tile" style="background-image: url('${art}')"></div>
    <div class="tp-wash"></div>
    <div class="tp-hatch"></div>
    <div class="tp-text">
      <p class="eyebrow">today&rsquo;s pick</p>
      <h3>${a.name}</h3>
      <p class="sub">${a.artist} &middot; ${a.releaseDate}</p>
    </div>
  `;
```

with:

```javascript
  todayPickEl.innerHTML = `
    <div class="tp-tile" style="background-image: url('${art}')"></div>
    <div class="tp-wash"></div>
    <div class="tp-hatch"></div>
    <span class="glow glow-focus tp-glow tp-glow-1"></span>
    <span class="glow glow-focus tp-glow tp-glow-2"></span>
    <div class="grain"></div>
    <div class="tp-text">
      <p class="eyebrow">today&rsquo;s pick</p>
      <h3>${a.name}</h3>
      <p class="sub">${a.artist} &middot; ${a.releaseDate}</p>
    </div>
  `;
```

- [ ] **Step 2: Add the focus-glow CSS**

In `public/styles.css`, after line 448 (the closing `}` of `.tp-tile`) and before `.tp-wash` (line 450), insert:

```css
/* Full-strength tier: real album colour, via the --wash custom property
   already set in app.js's renderTodayPick (previously unused by any CSS
   rule). A single sampled colour drives both blobs' ring stop; the
   transparent core/fade either side is what gives it the glow shape. */
.glow-focus {
  opacity: 0.55;
}

.tp-glow {
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%,
    var(--wash, var(--accent)) 42%,
    rgba(23, 20, 15, 0) 100%);
}

.tp-glow-1 { width: 55%; height: 90%; top: -30%; left: -12%; }
.tp-glow-2 { width: 50%; height: 85%; bottom: -35%; right: -8%; animation-delay: -6s; }
```

- [ ] **Step 3: Verify**

Run:
```bash
npm start
```
Open `http://localhost:4001`, click "sign in", and sign in with a real 1001 Albums Generator project (your own — e.g. `emsh`, per the README). Confirm:
- Today's pick panel shows a visible, warm-toned glow in the album's sampled colour, behind the text (not obscuring it).
- The glow colour changes if you reload with a different `currentAlbum` (or check in devtools: select `#today-pick`, confirm the `--wash` custom property under Styles has a real `rgb(...)` value, not falling back to `--accent`).
- Grain texture is visible within the panel (compare to how it looked before this task — it should look textured, not flat).

- [ ] **Step 4: Commit**

```bash
git add public/app.js public/styles.css
git commit -m "Focus glow on today's pick, driven by the existing --wash sample"
```

---

## Task 4: Focus glow — album grid, on hover

> **Amendment (live-tested):** same fix as Task 3 — `.card-glow`'s gradient plateau simplified to a single peak, and the hover-opacity target dropped from `0.9` to `0.55` to match the corrected `.glow-focus` baseline. The code below reflects the fix.

**Files:**
- Modify: `public/app.js:308-318` (`renderCards`'s per-card `innerHTML` template)
- Modify: `public/styles.css` (new rules in the `.album-card` section, after line 592)

**Interfaces:**
- Consumes: `.glow`, `.glow-focus`, `.grain` from Tasks 2-3.
- Consumes: the `--plate` custom property, already set per-card by existing code at `public/app.js:320-322` (`makeCoverImage(..., (css) => card.style.setProperty("--plate", css))`) — currently drives `.card-body`'s top border only; this task adds a second consumer, no new extraction.

- [ ] **Step 1: Add focus-glow blobs to the card template**

In `public/app.js`, replace lines 308-318:

```javascript
    card.innerHTML = `
      <div class="art-frame"></div>
      <div class="card-body">
        <p class="card-title" title="${album.name.replace(/"/g, "&quot;")}">${album.name}</p>
        <p class="card-artist">${album.artist}</p>
        <div class="card-meta">
          <span>${album.releaseDate}</span>
          <span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>
        </div>
      </div>
    `;
```

with:

```javascript
    card.innerHTML = `
      <div class="art-frame">
        <span class="glow glow-focus card-glow"></span>
        <div class="grain"></div>
      </div>
      <div class="card-body">
        <p class="card-title" title="${album.name.replace(/"/g, "&quot;")}">${album.name}</p>
        <p class="card-artist">${album.artist}</p>
        <div class="card-meta">
          <span>${album.releaseDate}</span>
          <span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>
        </div>
      </div>
    `;
```

Note: the `.art-frame` cover `<img>` is appended after this template is set (see `public/app.js:324`, `card.querySelector(".art-frame").appendChild(cover)`), so the glow/grain spans added here end up *behind* the cover image in paint order — confirm in Step 3 that the cover image still fully covers them at rest, and the glow/grain are only visible as a halo *outside* the image's edges (since `.art-frame` has `overflow: hidden` per line 578, the halo needs the blob to extend beyond `.art-frame`'s own bounds — see the `card-glow` sizing below, which deliberately overflows via negative inset).

- [ ] **Step 2: Add the focus-glow CSS**

In `public/styles.css`, after line 592 (the closing `}` of `.album-card img`'s `transition` rule) and before line 594 (`.album-card:hover img { ... }`), insert:

```css
/* Sits behind the cover at rest (opacity 0), bursts to full strength on
   hover — the per-tile analogue of today's-pick's glow, same --plate
   value the card-body border already uses. */
.card-glow {
  inset: -30%;
  width: auto;
  height: auto;
  opacity: 0;
  transition: opacity 0.4s ease;
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%,
    var(--plate) 42%,
    rgba(23, 20, 15, 0) 100%);
}

.album-card:hover .card-glow,
.album-card:focus-within .card-glow {
  opacity: 0.55;
}
```

`.art-frame` needs `overflow: visible` while a tile is hovered so the glow can bleed past the square image edge — but it also needs `overflow: hidden` at rest (that's what keeps the cover image's corners square, per the existing `border-radius: 0` design language). Add, directly after the `.album-card .art-frame` rule (ends line 579):

```css
.album-card:hover .art-frame,
.album-card:focus-within .art-frame {
  overflow: visible;
}
```

- [ ] **Step 3: Verify**

Run:
```bash
npm start
```
Open `http://localhost:4001`, sign in, and look at the album grid. Confirm:
- At rest, no glow is visible around any tile (just the existing square cover art).
- Hovering a tile fades in a warm glow bleeding softly past the tile's edges, in that album's sampled colour (compare two different-coloured covers — the glow hue should visibly differ between them).
- The glow doesn't clip at the tile's own square boundary (it should bleed outward, not stop sharply at the edge).
- Tabbing to a card with the keyboard (not just mouse hover) also shows the glow (`:focus-within`).
- Un-hovering fades the glow back out smoothly, not an abrupt cut.

- [ ] **Step 4: Commit**

```bash
git add public/app.js public/styles.css
git commit -m "Focus glow on grid tiles, driven by the existing --plate sample"
```

---

## Task 5: Focus glow — open album modal

> **Amendment (pre-emptive, before this task was ever implemented):** written with the single-peak gradient recipe from the start (see the Task 2/3/4 amendments above) — `.modal-glow-1`/`.modal-glow-2` below already reflect that fix, so this task never needs its own follow-up correction.

**Files:**
- Modify: `public/index.html:203-206` (`.modal-art`)
- Modify: `public/styles.css:716-722` (`.modal-art` section)

**Interfaces:**
- Consumes: `.glow`, `.glow-focus`, `.grain` from Tasks 2-4.
- Consumes: the `--plate` custom property, already set on `.modal-card` by existing code at `public/app.js:1150` (`modalCard.style.setProperty("--plate", css)`) — currently drives only the 4px `.modal-card::before` band; `--plate` cascades from `.modal-card` down into `.modal-art` since it's a descendant, so no new JS is needed.

- [ ] **Step 1: Add focus-glow blobs to the modal art panel**

In `public/index.html`, replace lines 203-206:

```html
      <div class="modal-side">
        <div class="modal-art">
          <img id="modal-cover" src="" alt="" />
        </div>
```

with:

```html
      <div class="modal-side">
        <div class="modal-art">
          <span class="glow glow-focus modal-glow modal-glow-1"></span>
          <span class="glow glow-focus modal-glow modal-glow-2"></span>
          <div class="grain"></div>
          <img id="modal-cover" src="" alt="" />
        </div>
```

- [ ] **Step 2: Add the focus-glow CSS**

In `public/styles.css`, replace lines 716-722:

```css
.modal-art {
  line-height: 0;
  border-radius: 0;
  overflow: hidden;
}

.modal-art img { width: 100%; display: block; }
```

with:

```css
.modal-art {
  position: relative;
  line-height: 0;
  border-radius: 0;
  overflow: visible;
}

.modal-art img { width: 100%; display: block; position: relative; z-index: 2; }

/* Unlike the grid tile, the modal is only ever on screen when "open" — no
   hover-gated opacity needed, the glow is just always present while the
   sheet is up. overflow: visible (above) lets it bleed past the square art
   panel; z-index on the img keeps the cover painting on top of it. */
.modal-glow { inset: -25%; width: auto; height: auto; z-index: 1; }
.modal-glow-1 {
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%,
    var(--plate) 42%,
    rgba(23, 20, 15, 0) 100%);
}
.modal-glow-2 {
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%,
    var(--plate) 38%,
    rgba(23, 20, 15, 0) 100%);
  animation-delay: -7s;
  opacity: 0.4;
}
```

- [ ] **Step 3: Verify**

Run:
```bash
npm start
```
Open `http://localhost:4001`, sign in, and click any album to open its sheet. Confirm:
- A soft glow in that album's sampled colour (the same colour as the 4px band at the top of the sheet) is visible behind/around the cover art, bleeding past its edge.
- The glow doesn't overlap or reduce legibility of the title/artist/rating text in `.modal-content`.
- Closing and opening a different album changes the glow colour to match.
- Scrolling the modal body (if content is long enough to scroll) doesn't cause the glow to scroll oddly or duplicate — it should stay pinned to the art panel.

- [ ] **Step 4: Commit**

```bash
git add public/index.html public/styles.css
git commit -m "Focus glow on the open album modal, reusing --plate"
```

---

## Task 6: Remove the obsolete `--shadow-sm`/`--shadow-md` if now unused, final pass

**Files:**
- Modify: `public/styles.css` (no specific lines known in advance — found during this task)

**Interfaces:** None.

- [ ] **Step 1: Grep for leftover references to the old aura classes**

```bash
grep -n "\.aura\b" public/styles.css public/index.html public/app.js
```

Expected: no matches (confirms Task 2 fully removed the old selectors, not just the opening markup).

- [ ] **Step 2: Full-page visual pass**

Run:
```bash
npm start
```
Open `http://localhost:4001` and walk all three views (your list / stats / map) plus the account modal. Confirm:
- No visual regressions in the stats or map views (this plan never touches them, but the removed `.aura` was global, so confirm nothing relied on it being present behind those views specifically).
- Page load has no console errors or 404s (check the Network tab for the two new font families actually loading — `Literata` and `Martian Mono` should appear, `Inter` and `IBM Plex Mono` should not).

- [ ] **Step 3: Commit (only if Step 1 found leftovers to remove)**

```bash
git add public/styles.css
git commit -m "Remove leftover .aura references"
```

If Step 1 found nothing, skip this commit — there's nothing to commit.

---

## Task 7: Replace the grid/modal blob glow with a multi-colour gradient line

> **Context (post-Task-6, user-directed pivot):** after seeing the live, recipe-fixed blob glow on grid tiles and the modal, the user rejected the circular-glow concept entirely for these two sites ("the big circular gradient blobs around the albums looks awful") — explicitly keeping today's pick's blob untouched ("today's pick looks great rn. dont touch it"). Explored four "more panache" shape directions (corner ribbon, tilted band, torn edge, corner flourish) via the visual companion; user rejected all four ("none of it") in favour of a much simpler idea: keep the EXISTING thin accent line (the grid card's `border-top` and the modal's 4px band, both already coloured via `--plate`) but make it a multi-colour gradient sampled from the sleeve, not a flat hue. Validated via a mockup comparing a smooth blend vs. a hard-edged swatch strip — user picked the smooth blend.

This task **removes** `.card-glow`, `.modal-glow-1`/`.modal-glow-2`, and their markup (shipped in Tasks 4-5) and replaces them with a `linear-gradient` on the existing thin line/band, sourced from a new multi-colour extraction function. Today's pick's `.tp-glow-1`/`.tp-glow-2` and the page-wide `.glow-ambient-1`/`.glow-ambient-2` are **not touched** — this task's scope is grid cards and the modal only.

**Files:**
- Modify: `public/app.js:122-166` (`dominantColor` — refactored to share scoring logic, same external behaviour/return value)
- Modify: `public/app.js` (new `scoredColorBuckets`/`dominantPalette`/`sampledGradient` functions, inserted near the existing colour-sampling functions)
- Modify: `public/app.js:194-217` (`makeCoverImage` — new optional 5th `onGradient` param)
- Modify: `public/app.js:304-330ish` (`renderCards` — remove blob markup, wire the new gradient callback)
- Modify: `public/app.js:1149-1158` (`openModal`/the cover `onload` handler — remove modal blob markup dependency, wire the new gradient callback)
- Modify: `public/index.html:210-216` (`.modal-art` — strip the blob/grain markup)
- Modify: `public/styles.css` (remove `.card-glow` and its hover rules, remove `.album-card:hover/:focus-within .art-frame` overflow rule, change `.card-body`'s border to a gradient border-image; remove `.modal-glow`/`.modal-glow-1`/`.modal-glow-2`, revert `.modal-art`/`.modal-art img` to their pre-blob simplicity, change `.modal-card::before`'s background to a gradient)

**Interfaces:**
- Produces: `dominantPalette(img, n)` — returns up to `n` distinct `{r,g,b}` swatches from the same scoring pass `dominantColor` already used, filtered so two buckets of the same hue don't both make the cut (minimum RGB distance 40 between picks).
- Produces: `sampledGradient(img, opts)` — mirrors the existing `sampledPlate(img, opts)`, returns a `linear-gradient(90deg, ...)` CSS string built from `dominantPalette`, cached in the existing `plateCache` (prefixed `"grad:"` so it doesn't collide with `sampledPlate`'s cache keys for the same image).
- Consumes/preserves: `dominantColor(img)`'s external signature and return value are UNCHANGED — today's pick (`--wash`), the grid card's existing `--plate`, and the modal's existing `--plate` all keep working exactly as before. This is a refactor-for-reuse, not a behaviour change to the single-colour path.

- [ ] **Step 1: Refactor `dominantColor` into a shared scorer, add `dominantPalette`**

In `public/app.js`, replace lines 122-166 (the `dominantColor` function, including its leading comment):

```javascript
// Picks the sleeve's signature colour: scores quantised colour buckets by
// area but weights vividness heavily, so a small block of saturated colour
// beats a large muddy one (the red title on a brown Beach Boys sleeve, say).
function dominantColor(img) {
  sampleCtx.clearRect(0, 0, SAMPLE, SAMPLE);
  sampleCtx.drawImage(img, 0, 0, SAMPLE, SAMPLE);
  const { data } = sampleCtx.getImageData(0, 0, SAMPLE, SAMPLE);

  const buckets = new Map();
  const fallback = { r: 0, g: 0, b: 0, n: 0 };

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (data[i + 3] < 200) continue;
    fallback.r += r; fallback.g += g; fallback.b += b; fallback.n += 1;

    const [, , l] = rgbToHsl(r, g, b);
    if (l < 0.22 || l > 0.88) continue;

    const key = `${r >> 4}-${g >> 4}-${b >> 4}`;
    const cur = buckets.get(key) || { r: 0, g: 0, b: 0, n: 0 };
    cur.r += r; cur.g += g; cur.b += b; cur.n += 1;
    buckets.set(key, cur);
  }

  let best = null;
  let bestScore = -1;
  for (const v of buckets.values()) {
    const r = v.r / v.n, g = v.g / v.n, b = v.b / v.n;
    const [, s, l] = rgbToHsl(r, g, b);
    // area x vividness, penalising colours pinned to the light/dark extremes
    const score = v.n * (0.08 + Math.pow(s, 2) * 4.5) * (1 - Math.abs(l - 0.5) * 0.9);
    if (score > bestScore) {
      bestScore = score;
      best = { r, g, b };
    }
  }

  if (!best && fallback.n) {
    best = { r: fallback.r / fallback.n, g: fallback.g / fallback.n, b: fallback.b / fallback.n };
  }
  if (!best) return null;

  return { r: Math.round(best.r), g: Math.round(best.g), b: Math.round(best.b) };
}
```

with:

```javascript
// Scores quantised colour buckets by area but weights vividness heavily, so
// a small block of saturated colour beats a large muddy one (the red title
// on a brown Beach Boys sleeve, say). Shared by dominantColor (top pick) and
// dominantPalette (top n, for the multi-colour gradient line).
function scoredColorBuckets(img) {
  sampleCtx.clearRect(0, 0, SAMPLE, SAMPLE);
  sampleCtx.drawImage(img, 0, 0, SAMPLE, SAMPLE);
  const { data } = sampleCtx.getImageData(0, 0, SAMPLE, SAMPLE);

  const buckets = new Map();
  const fallback = { r: 0, g: 0, b: 0, n: 0 };

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (data[i + 3] < 200) continue;
    fallback.r += r; fallback.g += g; fallback.b += b; fallback.n += 1;

    const [, , l] = rgbToHsl(r, g, b);
    if (l < 0.22 || l > 0.88) continue;

    const key = `${r >> 4}-${g >> 4}-${b >> 4}`;
    const cur = buckets.get(key) || { r: 0, g: 0, b: 0, n: 0 };
    cur.r += r; cur.g += g; cur.b += b; cur.n += 1;
    buckets.set(key, cur);
  }

  const scored = [];
  for (const v of buckets.values()) {
    const r = v.r / v.n, g = v.g / v.n, b = v.b / v.n;
    const [, s, l] = rgbToHsl(r, g, b);
    // area x vividness, penalising colours pinned to the light/dark extremes
    const score = v.n * (0.08 + Math.pow(s, 2) * 4.5) * (1 - Math.abs(l - 0.5) * 0.9);
    scored.push({ r, g, b, score });
  }
  scored.sort((a, b) => b.score - a.score);

  if (!scored.length && fallback.n) {
    scored.push({ r: fallback.r / fallback.n, g: fallback.g / fallback.n, b: fallback.b / fallback.n, score: 0 });
  }
  return scored;
}

function dominantColor(img) {
  const [best] = scoredColorBuckets(img);
  if (!best) return null;
  return { r: Math.round(best.r), g: Math.round(best.g), b: Math.round(best.b) };
}

// Top n distinct swatches from the same scoring pass, for the multi-colour
// gradient line. "Distinct" means far enough apart in RGB space that two
// buckets of the same hue don't both make the cut — otherwise a sleeve
// dominated by one colour would still show as a flat line.
function dominantPalette(img, n = 3) {
  const scored = scoredColorBuckets(img);
  const MIN_DIST = 40;
  const picked = [];
  for (const c of scored) {
    if (picked.length >= n) break;
    const tooClose = picked.some((p) => Math.hypot(p.r - c.r, p.g - c.g, p.b - c.b) < MIN_DIST);
    if (!tooClose) picked.push(c);
  }
  for (const c of scored) {
    if (picked.length >= n) break;
    if (!picked.includes(c)) picked.push(c);
  }
  return picked.map((c) => ({ r: Math.round(c.r), g: Math.round(c.g), b: Math.round(c.b) }));
}
```

- [ ] **Step 2: Add `sampledGradient`**

In `public/app.js`, immediately after the `sampledPlate` function (it ends with a closing `}` right before the `makeCoverImage` comment), insert:

```javascript

function sampledGradient(img, opts) {
  const cacheKey = "grad:" + img.src + JSON.stringify(opts || {});
  if (plateCache.has(cacheKey)) return plateCache.get(cacheKey);
  let css = null;
  try {
    const palette = dominantPalette(img, 3).map((rgb) => cssRgb(inkify(rgb, opts)));
    if (palette.length) css = `linear-gradient(90deg, ${palette.join(", ")})`;
  } catch {
    css = null; // tainted canvas — keep the default plate
  }
  plateCache.set(cacheKey, css);
  return css;
}
```

- [ ] **Step 3: Add the optional `onGradient` callback to `makeCoverImage`**

In `public/app.js`, replace the `makeCoverImage` function:

```javascript
function makeCoverImage(src, alt, onSampled, opts) {
  const img = document.createElement("img");
  img.alt = alt;
  img.crossOrigin = "anonymous";

  img.addEventListener("load", () => {
    const css = sampledPlate(img, opts);
    if (css) onSampled(css);
  });

  img.addEventListener(
    "error",
    () => {
      if (img.crossOrigin) {
        img.removeAttribute("crossorigin");
        img.src = src;
      }
    },
    { once: true }
  );

  img.src = src;
  return img;
}
```

with:

```javascript
function makeCoverImage(src, alt, onSampled, opts, onGradient) {
  const img = document.createElement("img");
  img.alt = alt;
  img.crossOrigin = "anonymous";

  img.addEventListener("load", () => {
    const css = sampledPlate(img, opts);
    if (css) onSampled(css);
    if (onGradient) {
      const grad = sampledGradient(img, opts);
      if (grad) onGradient(grad);
    }
  });

  img.addEventListener(
    "error",
    () => {
      if (img.crossOrigin) {
        img.removeAttribute("crossorigin");
        img.src = src;
      }
    },
    { once: true }
  );

  img.src = src;
  return img;
}
```

Today's pick's existing call to `makeCoverImage` passes only 4 arguments, so `onGradient` is `undefined` there and this is a no-op for that call site — today's pick's behaviour is unchanged.

- [ ] **Step 4: Strip the blob markup from the grid-card template and wire the gradient**

In `public/app.js`, find `renderCards` and replace:

```javascript
    card.innerHTML = `
      <div class="art-frame">
        <span class="glow glow-focus card-glow"></span>
        <div class="grain"></div>
      </div>
      <div class="card-body">
        <p class="card-title" title="${album.name.replace(/"/g, "&quot;")}">${album.name}</p>
        <p class="card-artist">${album.artist}</p>
        <div class="card-meta">
          <span>${album.releaseDate}</span>
          <span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>
        </div>
      </div>
    `;

    const cover = makeCoverImage(albumImage(album, 300), `${album.name} cover`, (css) =>
      card.style.setProperty("--plate", css)
    );
```

with:

```javascript
    card.innerHTML = `
      <div class="art-frame"></div>
      <div class="card-body">
        <p class="card-title" title="${album.name.replace(/"/g, "&quot;")}">${album.name}</p>
        <p class="card-artist">${album.artist}</p>
        <div class="card-meta">
          <span>${album.releaseDate}</span>
          <span class="stars" style="color: ${ratingColor(entry.rating)}">${starString(entry.rating)}</span>
        </div>
      </div>
    `;

    const cover = makeCoverImage(
      albumImage(album, 300),
      `${album.name} cover`,
      (css) => card.style.setProperty("--plate", css),
      undefined,
      (grad) => card.style.setProperty("--plate-grad", grad)
    );
```

(The line right after — `cover.loading = "lazy"; card.querySelector(".art-frame").appendChild(cover);` — is unchanged.)

- [ ] **Step 5: Wire the gradient into the modal, and clear it on close**

In `public/app.js`, in `openModal`, replace:

```javascript
  const modalCard = modal.querySelector(".modal-card");
  modalCard.style.removeProperty("--plate");
  modalCard.scrollTop = 0;
  modalCover.alt = `${album.name} cover`;
  modalCover.crossOrigin = "anonymous";
  modalCover.onload = () => {
    const css = sampledPlate(modalCover);
    if (css) modalCard.style.setProperty("--plate", css);
  };
```

with:

```javascript
  const modalCard = modal.querySelector(".modal-card");
  modalCard.style.removeProperty("--plate");
  modalCard.style.removeProperty("--plate-grad");
  modalCard.scrollTop = 0;
  modalCover.alt = `${album.name} cover`;
  modalCover.crossOrigin = "anonymous";
  modalCover.onload = () => {
    const css = sampledPlate(modalCover);
    if (css) modalCard.style.setProperty("--plate", css);
    const grad = sampledGradient(modalCover);
    if (grad) modalCard.style.setProperty("--plate-grad", grad);
  };
```

- [ ] **Step 6: Strip the blob markup from the modal**

In `public/index.html`, replace:

```html
      <div class="modal-side">
        <div class="modal-art">
          <span class="glow glow-focus modal-glow modal-glow-1"></span>
          <span class="glow glow-focus modal-glow modal-glow-2"></span>
          <div class="grain"></div>
          <img id="modal-cover" src="" alt="" />
        </div>
```

with:

```html
      <div class="modal-side">
        <div class="modal-art">
          <img id="modal-cover" src="" alt="" />
        </div>
```

- [ ] **Step 7: CSS — grid card: remove the blob, gradient-ify the thin line**

In `public/styles.css`, remove the `.album-card:hover .art-frame, .album-card:focus-within .art-frame { overflow: visible; }` rule (directly follows `.album-card .art-frame`'s own rule) — `.art-frame` no longer needs to let anything bleed past it, so it can stay `overflow: hidden` always.

Remove the entire `.card-glow` block and its hover/focus-within opacity rule:

```css
/* Sits behind the cover at rest (opacity 0), bursts to full strength on
   hover — the per-tile analogue of today's-pick's glow, same --plate
   value the card-body border already uses. */
.card-glow {
  inset: -30%;
  width: auto;
  height: auto;
  opacity: 0;
  transition: opacity 0.4s ease;
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%,
    var(--plate) 42%,
    rgba(23, 20, 15, 0) 100%);
}

.album-card:hover .card-glow,
.album-card:focus-within .card-glow {
  opacity: 0.55;
}
```

Replace `.album-card .card-body`'s `border-top: 1px solid var(--plate);` — the whole rule becomes:

```css
.album-card .card-body {
  padding: 0.7rem 0 0.9rem;
  border-top: 2px solid transparent;
  border-image: var(--plate-grad, linear-gradient(90deg, var(--plate), var(--plate))) 1;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
```

(`border-image`'s fallback — a flat gradient between `--plate` and itself — means the line is never literally un-set before `--plate-grad` resolves; it just briefly shows as a flat colour, same as today.)

- [ ] **Step 8: CSS — modal: remove the blob, gradient-ify the band**

In `public/styles.css`, remove the `.modal-glow`, `.modal-glow-1`, `.modal-glow-2` rules entirely (including their explanatory comment).

Replace `.modal-art`/`.modal-art img`:

```css
.modal-art {
  position: relative;
  line-height: 0;
  border-radius: 0;
  overflow: visible;
}

.modal-art img { width: 100%; display: block; position: relative; z-index: 2; }
```

with:

```css
.modal-art {
  line-height: 0;
  border-radius: 0;
  overflow: hidden;
}

.modal-art img { width: 100%; display: block; }
```

Replace `.modal-card::before`'s background:

```css
.modal-card::before {
  content: "";
  display: block;
  height: 4px;
  background: var(--plate);
  border-radius: 0;
}
```

with:

```css
.modal-card::before {
  content: "";
  display: block;
  height: 4px;
  background: var(--plate-grad, var(--plate));
  border-radius: 0;
}
```

- [ ] **Step 9: Verify**

Run:
```bash
npm start
```
Open `http://localhost:4001`, sign in with project `emsh`. Confirm:
- **Today's pick is unchanged** — still shows the blob glow exactly as before this task (open devtools, confirm `.tp-glow-1`/`.tp-glow-2` still exist and render; this task shouldn't have touched any of that code).
- Grid cards: no more hover blob. Each card's thin line under the cover is now a smooth multi-colour gradient — compare two different-coloured covers side by side, the gradients should look visibly different and each should show at least 2 distinct hues blending, not a single flat colour.
- Open an album: the 4px band at the top of the modal sheet is now a gradient too, not a flat colour. Close and open a different album, confirm the gradient changes.
- In devtools, select a `.card-body` or inspect `.modal-card`'s computed `--plate-grad` — confirm it's a real `linear-gradient(90deg, rgb(...), rgb(...), rgb(...))` string, not empty/invalid.
- No console errors.
- Page-wide ambient glow (the two slow background blobs) is unaffected — this task never touched `.glow-ambient-*`.

- [ ] **Step 10: Commit**

```bash
git add public/app.js public/index.html public/styles.css
git commit -m "Replace grid/modal blob glow with a multi-colour gradient line

User rejected the circular glow (and four shape alternatives) for
grid tiles and the modal after seeing it live, keeping today's pick's
blob untouched. Replaces it with the existing thin accent line/band,
now a multi-colour gradient sampled from the sleeve via a new
dominantPalette() built on the existing scoring pass, instead of one
flat hue."
```
