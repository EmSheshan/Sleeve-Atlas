# Expanded glow effects — design

## Problem

The "abstract blurred colors" treatment currently exists in exactly one place: Today's Pick's two morphing glow blobs (`.glow`/`.glow::before`, `glow-morph`/`glow-morph-2` keyframes in `public/styles.css`), colored from the current album's own sampled palette. The user wants the same visual language extended to three more places, each with a different color source appropriate to what it's behind.

## Shared architecture (reused, not duplicated)

All three additions below reuse the existing `.glow`/`.glow::before` blob shape + blur + `mix-blend-mode: multiply` + `glow-morph`/`glow-morph-2` animation machinery as-is. None of the three need new keyframes or new blob shapes — only new color sources and new placement/sizing per context. `prefers-reduced-motion` already disables the morph animations at the shared `.glow::before` level (`public/styles.css` line ~117), so all three inherit that for free.

## 1. Album modal background

**Technique:** A single enlarged, heavily blurred copy of the *actual* cover photo — not the tiled-repeat technique `.tp-tile` uses, and not color-sampled at all. This is a direct CSS blur of the real image.

**Markup:** Inside `openModal()` (`public/app.js`), add one `<img>` (or background-image div) as the first child of `.modal-card`, before `.modal-card::before`'s color band and before `.modal-body`. Reuses the same cover URL already fetched for `.modal-art img` — no new network request.

**Styling (new `.modal-bg` class):**
- `position: absolute; inset: 0; z-index: 0;`
- `object-fit: cover; width: 100%; height: 100%;` (if an `<img>`) so it fills the card regardless of the cover's aspect ratio
- `filter: blur(40px) saturate(1.3);` — enlarged + blurred, no repeat/tile
- A scrim layer on top (new `.modal-bg-wash`, reusing the `.tp-wash` pattern: a translucent `--paper-3`-toned overlay) so body text, the rating row, and reviews stay legible regardless of how bright or saturated the source cover is
- `.modal-body` gets `position: relative; z-index: 1;` so it renders above both

**Fallback:** Before the image loads, `.modal-card` keeps its current flat `--paper-3` background (already its default) — no placeholder flash to engineer here, since the blurred layer simply isn't painted yet.

**Scope:** Only the main album detail modal. Does not touch the account modal (which shares the `.modal-card` class but has its own distinct content).

## 2. Stats hero glow

**Technique:** One or two `.glow` blobs (reusing `.tp-glow-1`/`-2`'s size/position ratios or a similarly-proportioned new pair) positioned behind `.hero-row` (the albums-rated / average-rating / complete numbers at the top of the Stats view). Colored with **fixed** gradient stops, not sampled from any image:

```css
.stats-glow::before {
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%,
    hsl(0, 72%, 38%) 20%,    /* red, same value ratingColor(1) computes */
    hsl(45, 72%, 40%) 50%,   /* amber, same value ratingColor(3) computes */
    hsl(130, 62%, 32%) 80%,  /* green, same value ratingColor(5) computes */
    rgba(23, 20, 15, 0) 98%);
}
```

These three HSL values are copied from `ratingColor()` in `public/app.js` (the single function already driving every rating bar, star, and average-rating color on the site) evaluated at rating 1, 3, and 5 — not re-derived or eyeballed separately, so if `ratingColor()`'s formula ever changes these should be revisited to match.

**Placement:** `.hero-row` needs `position: relative` (if not already) with the glow absolutely positioned behind it and `.hero-row`'s own content given `z-index: 1`. `.hero-row` currently has no background color set (`background-color: transparent`), which stays — the glow shows through it.

**Not reactive:** Fixed colors, same on every visit, not tied to the signed-in user's actual rating distribution. (If this later feels like it should reflect the user's real rating skew, that's a separate follow-up, not part of this pass.)

## 3. Site-wide ambient glow

**Technique:** One `.glow` blob, `position: fixed; inset: 0; z-index: -1; pointer-events: none;`, rendered once at the `<body>` level (added directly in `public/index.html`, not per-view, so it persists across List/Stats/Map without re-mounting). Very low opacity (target `0.12`–`0.18`, tuned visually rather than fixed in the spec — see Testing below).

**Colors:** mostly neutral, a little chromatic:

```css
#site-glow::before {
  background: radial-gradient(circle,
    rgba(23, 20, 15, 0) 0%,
    var(--ink) 15%,
    var(--paper-3) 45%,
    var(--accent-soft) 70%,
    rgba(23, 20, 15, 0) 98%);
}
```

`--accent-soft` (`#c76ba0`, the muted pink already defined in `:root` but — per a grep of the current stylesheet — not actually used anywhere yet) is the one chromatic stop; everything else is ink/paper neutrals already in the palette.

**Scope:** Sits behind every page (List, Stats, Map) and the masthead. Must not interfere with the masthead's own dark slab background (`.site-header`'s `background: var(--slab)` is opaque, so it already fully occludes anything behind it — the glow will only be visible over the lighter `--paper` body area below the header, which is the intended effect).

## Explicit non-goals

- No new keyframes, no new blob shapes — all three reuse the existing `glow-morph`/`glow-morph-2` + clip-path architecture.
- Stats glow and site-wide glow are not color-sampled from any image; only the modal background touches image data, and it does so via a plain CSS blur, not the canvas-based palette extraction (`dominantPalette`/`sampledRadialGradient`) that Today's Pick uses.
- No changes to Today's Pick itself or to the album-card hover wash — both are reused as reference patterns, neither is modified.
- The account modal (which also uses `.modal-card`) does not get the blurred-art background — it has no associated album/cover to source one from.

## Testing

No automated test framework in this repo (confirmed in prior plans). Verification is visual, via the running dev server:
1. Open several different album modals and confirm the blurred cover background renders behind legible content, with the scrim keeping text readable across a range of bright/dark/saturated covers.
2. Load the Stats view and confirm the red→amber→green glow sits behind the hero numbers without reducing their legibility.
3. Confirm the site-wide glow is visible-but-subtle on the List/Stats/Map views' lighter paper areas, and doesn't show through or clash with the dark masthead.
4. Confirm `prefers-reduced-motion: reduce` stops all three from animating (inherited from the existing shared rule — verify it actually still matches once these are added, since they're new elements with the same classes).
