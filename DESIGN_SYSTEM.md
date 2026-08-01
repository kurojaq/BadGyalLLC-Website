# BadGyalLLC Design System

Complete design language and component library for luxury nail artistry platform.

## Overview

The BadGyalLLC design system is built on principles of **luxury, clarity, and elegance**. It combines a sophisticated color palette, refined typography, and intentional spacing to create an experience that feels premium and intentional.

**View the live design system:** Navigate to `/design-system` in the app.

## Design Principles

### 1. Luxury Through Restraint
- Elegant minimalism with gold accents
- Negative space as a design element
- Quality over quantity in visual elements
- Timeless over trendy

### 2. Clarity First
- Clear visual hierarchy
- Accessible color contrasts
- Intuitive interaction patterns
- Self-documenting components

### 3. Intentional Beauty
- Every visual element has purpose
- Consistent application of tokens
- Premium motion and transitions
- Responsive at all breakpoints

## Color System

### Primary Palette
**Neutrals** - Dark luxury foundation (900-500)
- `#0a0a0a` — Primary-900 (Darkest)
- `#1a1a1a` — Primary-800
- `#2a2a2a` — Primary-700
- `#3a3a3a` — Primary-600
- `#4a4a4a` — Primary-500

**Accents** - Gold luxury (900-100)
- `#c9a961` — Accent-600 (Primary brand color)
- `#e8d4b0` — Accent-400 (Light variant)
- `#f0e4d0` — Accent-300
- Gradient range from deep bronze to pale champagne

### Semantic Colors
- **Success:** `#10b981` — Green
- **Warning:** `#f59e0b` — Amber
- **Error:** `#ef4444` — Red
- **Info:** `#3b82f6` — Blue

### Usage
```css
/* Use tokens, never hardcoded colors */
color: var(--color-accent-600);
background: var(--color-bg-primary);
```

## Typography

### Font Stack
- **Serif (Display/Headings):** System serif fonts
- **Sans (Body/UI):** Apple system stack (native on each OS)
- **Mono (Code):** SF Mono / Monaco / Consolas

### Scale (Modular 1.125)
```
Display 1  → 72px (4.5rem)
Display 2  → 60px (3.75rem)
Heading 1  → 48px (3rem)
Heading 2  → 36px (2.25rem)
Heading 3  → 30px (1.875rem)
Heading 4  → 24px (1.5rem)
Heading 5  → 20px (1.25rem)
Heading 6  → 18px (1.125rem)
Large      → 18px (1.125rem)
Base       → 16px (1rem) — DEFAULT
Small      → 14px (0.875rem)
XS         → 12px (0.75rem)
```

### Font Weights
- **300** — Light (sparingly)
- **400** — Normal (body text)
- **500** — Medium (emphasis)
- **600** — Semibold (labels, subheadings)
- **700** — Bold (headings)
- **800** — Extra Bold (rare, impact)

### Line Heights
- **1.2** — Tight (headings)
- **1.375** — Snug (subheadings)
- **1.5** — Normal (body)
- **1.625** — Relaxed (descriptive text)
- **2.0** — Loose (sparse content)

## Spacing Scale

Modular scale using 1.5 ratio for consistent rhythm:

```css
--space-0  → 0
--space-1  → 4px
--space-2  → 8px
--space-3  → 12px
--space-4  → 16px (base unit)
--space-5  → 24px
--space-6  → 32px
--space-7  → 48px
--space-8  → 64px
--space-9  → 96px
--space-10 → 128px
--space-12 → 192px
--space-16 → 256px
```

### Spacing Guidelines
- Use consistent spacing to create rhythm
- Breathing room around interactive elements
- Margins > Padding for separation
- Padding inside containers for safety

## Border Radius

```css
--radius-none   → 0
--radius-xs     → 4px    (small buttons)
--radius-sm     → 8px    (input fields)
--radius-md     → 12px   (cards)
--radius-lg     → 16px   (large cards)
--radius-xl     → 24px   (hero sections)
--radius-2xl    → 32px   (rare, special)
--radius-full   → 9999px (circles)
```

### Usage
- Buttons: `--radius-sm` (8px)
- Inputs: `--radius-sm` (8px)
- Cards: `--radius-lg` (16px)
- Avatars: `--radius-full` (circle)

## Shadows

### Depth Scale
```css
--shadow-xs  → Subtle (1px, 0.05 opacity)
--shadow-sm  → Light (2px, 0.1 opacity)
--shadow-md  → Medium (6px, 0.1 opacity)
--shadow-lg  → Elevated (15px, 0.1 opacity)
--shadow-xl  → Deep (25px, 0.1 opacity)
--shadow-2xl → Maximum (50px, 0.25 opacity)
```

### Luxury Shadows
For premium elevated components:
```css
--shadow-luxury-sm  → 0 2px 8px rgba(0,0,0,0.08)
--shadow-luxury-md  → 0 4px 16px rgba(0,0,0,0.12)
--shadow-luxury-lg  → 0 8px 32px rgba(0,0,0,0.16)
```

## Motion & Transitions

### Duration Scale
```css
--duration-75    → 75ms   (instant)
--duration-100   → 100ms  (quick)
--duration-150   → 150ms  (fast)
--duration-200   → 200ms  (normal)
--duration-300   → 300ms  (base)
--duration-500   → 500ms  (slow)
--duration-700   → 700ms  (slower)
--duration-1000  → 1000ms (slowest)
```

### Easing Functions
```css
--easing-linear   → linear (constant speed)
--easing-in       → cubic-bezier(0.4, 0, 1, 1) (accelerate)
--easing-out      → cubic-bezier(0, 0, 0.2, 1) (decelerate)
--easing-in-out   → cubic-bezier(0.4, 0, 0.2, 1) (both)
--easing-smooth   → cubic-bezier(0.34, 1.56, 0.64, 1) (elastic)
```

### Predefined Transitions
```css
--transition-fast    → 100ms ease-out
--transition-base    → 200ms ease-out (most common)
--transition-slow    → 300ms ease-out
--transition-luxury  → 500ms smooth (special effects)
```

### Usage
```css
/* Standard interaction */
button {
  transition: all var(--transition-base);
}

/* Luxury effect */
.card:hover {
  transition: all var(--transition-luxury);
}
```

## Component Patterns

### Buttons
- **Primary:** Dark background, white text
- **Secondary:** Light background, dark border
- **Accent:** Gold background, white text
- **Sizes:** `btn-sm`, `btn` (default), `btn-lg`
- **States:** hover, active, disabled, focus

### Cards
- Subtle shadow with 16px border radius
- Hover state: shadow-lg + subtle lift (translateY -2px)
- Padding: 24px (--space-6)
- Border: 1px solid --color-border-light

### Forms
- Input height: 40px (padding + border)
- Border: 1px --color-border-medium
- Focus: 3px ring of focus color
- Labels: small caps, 12px, medium weight
- Help text: 12px, tertiary color

### Navigation
- Sticky header with background + border-bottom
- Links have underline-on-hover effect
- Mobile menu toggles below 768px
- Active state: bold weight + accent color

## Accessibility

### Color Contrast
- **AAA Level:** 7:1 (excellent)
- **AA Level:** 4.5:1 (minimum for text)
- **AAA for Large Text:** 3:1

All text meets AA standards minimum. Critical UI meets AAA.

### Focus Management
- All interactive elements focusable via keyboard
- Focus visible: 2px solid --color-focus + 2px offset
- Focus ring color updates in dark mode
- Tab order follows visual hierarchy

### Reduced Motion
- Animations disabled when `prefers-reduced-motion: reduce`
- All transitions set to 0ms instantly
- No parallax or scroll effects in reduced motion mode

### Screen Readers
- Semantic HTML (nav, main, section, article)
- ARIA labels for icons and complex components
- Hidden skip-to-content link
- Form labels always associated with inputs

## Responsive Breakpoints

```css
--breakpoint-xs   → 320px  (small mobile)
--breakpoint-sm   → 640px  (large mobile)
--breakpoint-md   → 768px  (tablet)
--breakpoint-lg   → 1024px (desktop)
--breakpoint-xl   → 1280px (large desktop)
--breakpoint-2xl  → 1536px (extra large)
```

### Mobile-First Strategy
1. Build mobile layout first (320px+)
2. Add breakpoints at 640px, 768px, 1024px
3. Desktop gets enhanced experience, not duplicate
4. Test at real device sizes

## Component Library

### Implemented Components
- ✅ Buttons (primary, secondary, accent, sizes)
- ✅ Forms (inputs, selects, checkboxes, radios)
- ✅ Cards (basic, hover states)
- ✅ Alerts (success, warning, error, info)
- ✅ Navigation (header, mobile menu)
- ✅ Badges
- ✅ Modals (structure)
- ✅ Tables
- ✅ Pagination
- ✅ Grid layouts

### In Progress
- [ ] Tooltips
- [ ] Dropdowns
- [ ] Date pickers
- [ ] File uploads
- [ ] Progress bars
- [ ] Tabs
- [ ] Accordions

## Usage Examples

### Using Design Tokens
```html
<!-- Colors -->
<div style="color: var(--color-accent-600)">Gold text</div>
<div style="background: var(--color-bg-primary)">White background</div>

<!-- Typography -->
<h1 class="heading-1">Large heading</h1>
<p class="body-base">Normal paragraph</p>

<!-- Spacing -->
<div style="padding: var(--space-6); margin-bottom: var(--space-4);">
  Content with consistent spacing
</div>

<!-- Transitions -->
<button style="transition: all var(--transition-base);">
  Smooth hover effect
</button>
```

### Component Usage
```html
<!-- Button -->
<button class="btn btn-primary btn-lg">Click me</button>

<!-- Card -->
<div class="card">
  <h3>Card title</h3>
  <p>Card content</p>
</div>

<!-- Alert -->
<div class="alert alert-success">
  <span>✓</span>
  <span>Success message</span>
</div>
```

## Dark Mode Support

All components support dark mode via `prefers-color-scheme: dark` media query.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #0a0a0a;
    --color-text-primary: #f0f0f0;
  }
}
```

## Performance

### CSS File Organization
- `design-tokens.css` — 350 lines (all variables)
- `typography.css` — 300 lines (type scales)
- `interactions.css` — 250 lines (states/hover)
- `components.css` — 400 lines (UI components)
- `pages.css` — 350 lines (layout/sections)
- **Total:** ~1,650 lines, ~45KB minified

### File Size Targets
- CSS: < 50KB
- Fonts: 0 (system fonts only)
- Icons: Emoji/SVG inline
- Images: Lazy load with progressive enhancement

## Contributing

When adding new components:

1. **Define tokens first** (colors, spacing, sizing)
2. **Build in CSS** (progressive enhancement)
3. **Document in design-system.js** (showcase page)
4. **Test accessibility** (keyboard, screen reader, contrast)
5. **Validate responsive** (mobile, tablet, desktop)
6. **Write semantic HTML** (meaningful elements)

## Version History

- **v0.1.0** — Initial design system (Phase 2)
  - 70+ design tokens
  - Typography scale (12-72px)
  - Color palette (neutrals + accent)
  - 10 core components
  - Accessibility foundations

---

**Questions?** Check the app's `/design-system` page or review the CSS files in `src/styles/`.

**Last Updated:** 2026-08-01  
**Maintainer:** BadGyalLLC Design Team
