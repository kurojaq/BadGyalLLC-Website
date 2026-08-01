# BadGyalLLC Website — Status

Last verified: 2026-08-01, against a running dev server (Vite 5.4.21, Node 24).

## What is actually verified working

Each item below was exercised in a real browser, not just written.

| Area | Evidence |
|---|---|
| All 9 routes render | Route sweep: every route produced a heading + content, 0 JS errors |
| 404 fallback | `/nope-404` renders the 404 page |
| Booking flow | Stepped 1→2→3→confirmation programmatically; summary read `Manicure / Thursday, August 20 / 1:00 PM / 60 min / $65` |
| Booking validation | Empty date blocked at step 2; `bad-email` blocked at step 3; both surfaced inline errors |
| Shop filters | `care` filter reduced 8 cards → 3 |
| Cart math | 2 items → `$77.38` ( $73 subtotal + 6% tax ), matches store logic |
| 3D engine | WebGL context acquired, 815×606 canvas, geometry drawn |
| 3D customization | Pixel readback: nail sample went `113,94,52` (gold) → `145,0,45` after setting `#ff0055` |
| Code splitting | Three.js absent from homepage network log; loads only on `/atelier` |
| Mobile layout | No horizontal overflow on any of 9 routes at 375×812 |
| Production build | `vite build` succeeds, 27 modules, no warnings |

## Bundle sizes

```
index.html                 3.25 kB │ gzip:   1.12 kB
assets/index.css          34.44 kB │ gzip:   6.88 kB
assets/index.js           68.01 kB │ gzip:  14.25 kB   ← entry
assets/three-d-engine.js 456.07 kB │ gzip: 114.96 kB   ← lazy, /atelier only
```

Entry payload is **14 kB gzipped**. Three.js is deferred behind a dynamic
`import()` so homepage visitors never download it.

## Defects found and fixed during verification

These were all present in the first five phases and none of them had ever been run:

1. **`package.json` had `"three": "^r128"`** — not valid npm semver. `npm install`
   failed outright. → pinned to `^0.160.0`.
2. **Router never rendered anything.** `currentPath` was initialised to `'/'`, so
   the opening `navigate('/')` hit the `if (this.currentPath === path) return`
   guard and bailed. The site was blank on load. → initialise to `null`.
3. **Every link would have 404'd.** The click handler passed `link.href`
   (`http://localhost:5173/about`) where a pathname was expected. → use
   `new URL(...).pathname`, plus guards for external hosts, modified clicks,
   `target`/`download`, and in-page `#anchors`.
4. **`typography.css` used `@extend`** (a Sass directive) 8 times. Invalid CSS is
   dropped, so `h1`–`h6`, `p`, and `small` had *zero* typography. → rewritten as
   shared selector lists.
5. **`interactions.css` used `&`-nesting** 18 times, written for a preprocessor
   that isn't in the toolchain. → flattened to plain CSS.
6. **Booking Next/Back buttons were dead.** Their handlers lived in a `<script>`
   tag injected via `innerHTML`; scripts inserted that way never execute, and the
   `onclick="nextStep(this)"` attributes referenced globals that never existed.
   → rewritten with real `addEventListener` wiring and validation.
7. **Shop category filter was dead** for the same reason. → rewritten, and the
   cart now actually talks to the store.
8. **Two competing token systems** — 143 `var(--spacing-*)` references against
   142 `var(--space-*)`, with `--radius/shadow/transition/z-*` defined twice in
   two files and the later import silently winning. → `design-tokens.css` is now
   the single source; `theme.css` is a thin alias layer.
9. **Fixed 72px display type overflowed mobile.** "BadGyalLLC" at `--text-7xl`
   is 372px wide, wider than a 375px viewport, forcing horizontal page scroll.
   → display sizes are now fluid `clamp()`.
10. **`/design-system` hardcoded `repeat(9, 1fr)`** swatch grids that could not
    collapse. → `repeat(auto-fit, minmax(...))`.
11. **3D updates depended on `requestAnimationFrame`.** With rAF throttled
    (backgrounded tab, hidden pane) colour/finish/length changes never repainted.
    → every mutator now calls `render()` directly.
12. **`/atelier` had no `h1`** — broken heading hierarchy. → added.
13. **Footer linked to `/faq`, `/contact`, `/privacy`, `/terms`** — all 404.
    → repointed at real routes; social links got `rel="noopener noreferrer"`.

## Known gaps — not yet built

- **No backend.** `api.js` exists but nothing calls it. Booking and cart state
  live in memory and vanish on refresh.
- **No persistence.** No database, no session, no auth.
- **No payments.** Deposits, checkout, and refunds are unimplemented.
- **Account and Dashboard pages are static mockups** — hardcoded rows, no data.
- **3D model is placeholder geometry.** Boxes, not anatomical hand/nail meshes.
  Shape selection (`oval`/`almond`/`square`) records state but does not change
  geometry yet.
- **No tests.** Verification above was manual browser exercise, not automated.
- **`npm audit` reports 2 vulnerabilities** (1 moderate, 1 high) in the dev
  dependency tree. Not triaged.
- **No legal pages.** Privacy policy and terms are required before any real
  launch and were removed from the footer rather than faked.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

```bash
npm run build && npm run preview
```
