# Ambient glow + type pass

2026-10-04

## Why

Feedback on the current grey-archive redesign (landed earlier today in `46d6f71`/`85d18f2`) called out two things worth acting on, independent of the feedback's own flawed proposal (a generic dark-neon-glassmorphism mockup, rejected — see conversation): the page reads static for a 1001-album archive, and the type (`Inter` body, `IBM Plex Mono` everywhere else) reads as default/AI-tool-generated rather than something made for this subject specifically.

Worked through directions live with the user via the brainstorming visual companion (mockups persisted in `.superpowers/brainstorm/` — gitignored, reference only, not part of the build). Landed on two independent, both-approved pieces of work:

1. Replace the current ambient `.aura` with an organic, album-colour-reactive glow system.
2. Replace `Inter`/`IBM Plex Mono` with type that isn't a default pick.

## 1. Ambient glow system

### What it replaces

`index.html`'s `.aura` div (4 fixed-position circular radial-gradient blobs, flat single hue each, static positions, 38% opacity, `drift-*` keyframe translate/scale) and its CSS in `styles.css` (`---------- Aura ----------` section).

### Mechanic (validated in mockups)

- **Grain**: an SVG `feTurbulence` data-URI background, `mix-blend-mode: overlay`, on every blob-bearing surface. This is the "tactile" texture — baked into the canvas, not a filter laid over clean gradients.
- **Organic blobs**: `border-radius` animates through asymmetric values (e.g. `42% 58% 61% 39% / 47% 44% 56% 53%` → `58% 42% 38% 62% / 55% 60% 40% 45%`) instead of being circles. Slow (17–20s), `ease-in-out infinite alternate`.
- **Per-blob colour**: each blob is its own radial gradient with a dark/transparent core, a saturated ring, and a fade to transparent — a gradient-map-style ramp, not flat-colour circles mixed via `mix-blend-mode` between each other. (Technique confirmed against a user-supplied reference image during brainstorming — see conversation.)
- Respects `prefers-reduced-motion` (animations off). Only `transform`/`opacity`/`border-radius` animate — stays compositor-eligible the way the current aura's `translate3d`/`scale` does.

### Two intensity tiers

- **Ambient** (page-wide, replaces `.aura`'s role): ~22% opacity, slower (~34s), two blobs, a fixed neutral palette (not tied to any album — there's no single "current" record for the whole page). Lives where `.aura` lives now, same stacking-context discipline (grey/grain on `html`, not `body`, per the existing comment in `styles.css` about negative-z-index children).
- **Focus** (full opacity/saturation, album-coloured): triggered at three call sites —
  - **Today's pick** (`#today-pick` / `.today-pick`)
  - **Open album modal** (`#album-modal` / `.modal-art` area)
  - **Hovered grid tile** (`.album-card`, on `:hover`/`:focus-within`)

### Colour data flow

`app.js` already has `dominantColor(img)` (quantised-bucket scoring, vividness-weighted) → `inkify(rgb, opts)` (pushes into a printed-ink range) → currently feeds `--wash` on `#today-pick` only, via `sampledPlate()` with a `plateCache` keyed by `img.src + JSON.stringify(opts)`.

Extend this, don't replace it:
- Add a second derived pair of ring colours (e.g. `inkify(rgb, {vivid preset})` for the bright ring, a darker/desaturated variant for the fade) and set them as new custom properties (`--glow-1`, `--glow-2`) alongside `--wash`, at the same call sites `sampledPlate`/`dominantColor` already run.
- Today's pick: already computed on load, no new extraction cost.
- Album modal: new call site, same pipeline, runs when the modal opens.
- Grid tile hover: new call site, computed on `mouseenter`/`focus` (not eagerly for all ~275 covers), cached in the existing `plateCache` so re-hovering a tile is free.
- If extraction fails (tainted canvas, load race) or hasn't resolved yet, the focus blobs fall back to the ambient layer's neutral palette rather than showing nothing.

### Dropped

The vinyl-groove-ring overlay concept (explored, then explicitly rejected by the user — "bad idea").

### Files touched

`public/index.html` (swap `.aura` markup for the new ambient/focus structure), `public/styles.css` (new glow/grain CSS, remove the old `---------- Aura ----------` block), `public/app.js` (extend the color pipeline, add the modal and hover call sites).

## 2. Type pass

Current: `--font-display: Archivo`, `--font-body: Inter`, `--font-mono: IBM Plex Mono`.

`--font-mono` is the dominant voice on this page, not body — it's applied to nearly every label, nav item, button, and stat figure (grep count: ~30 declarations vs. 4 for `--font-body`). `IBM Plex Mono` specifically reads as "AI/dev-tool" right now (same family the external feedback's own rejected mockup reached for).

- **Display — `Archivo`, unchanged.** Doing real work via its variable width axis (genuine condensed cuts for the masthead/hero/stats); not part of the complaint; no reason to touch it.
- **Body/prose — `Literata`** (replaces `Inter`). Variable serif commissioned by Google for sustained e-reading. Applies to the ~4 explicit `--font-body` call sites (album-card titles, `.bullet-list strong`, review/insight prose) plus the `html`/`body` base.
- **Mono/labels — `Martian Mono`** (replaces `IBM Plex Mono`). Variable geometric mono with a wider, more technical/stamped character than Plex — reads closer to a catalogue or matrix-number stamp than a code editor. Needs to cover the weights actually in use: 400, 600, 700 (confirmed via grep of `font-weight` near `--font-mono` declarations).

**Before wiring up the `<link>` tag**: verify on fonts.google.com that Literata and Martian Mono's shipped axis ranges actually cover the weights/widths assumed above — pick the closest available values if not, and note any substitution here.

### Files touched

`public/index.html` (`<link>` font import), `public/styles.css` (the three `--font-*` custom properties only — no selector changes needed, since every consumer already references the variables).

## Out of scope

Nothing else about the current grey-archive palette, layout, or component structure changes. This is glow + type only.
