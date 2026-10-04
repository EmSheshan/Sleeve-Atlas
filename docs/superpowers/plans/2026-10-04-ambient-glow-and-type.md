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
  filter: blur(3px);
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
  opacity: 0.95;
}

.tp-glow {
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%, rgba(23, 20, 15, 0) 20%,
    var(--wash, var(--accent)) 55%, rgba(23, 20, 15, 0) 85%);
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
    rgba(23, 20, 15, 0) 0%, rgba(23, 20, 15, 0) 20%,
    var(--plate) 55%, rgba(23, 20, 15, 0) 85%);
}

.album-card:hover .card-glow,
.album-card:focus-within .card-glow {
  opacity: 0.9;
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
    rgba(23, 20, 15, 0) 0%, rgba(23, 20, 15, 0) 20%,
    var(--plate) 55%, rgba(23, 20, 15, 0) 85%);
}
.modal-glow-2 {
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%, rgba(23, 20, 15, 0) 24%,
    var(--plate) 50%, rgba(23, 20, 15, 0) 82%);
  animation-delay: -7s;
  opacity: 0.6;
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
