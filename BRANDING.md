# Triphogonva — Brand System

## 1. Brand Essence
Heritage + Luxury + Aesthetics. The feeling of opening an expensive travel
magazine, not scrolling a booking app. Warm, editorial, unhurried, cinematic.

**Voice:** Evocative, understated, confident. Short sentences. No exclamation
marks, no "Book Now!!" energy. Think Aman Resorts copywriting, not OTA
copywriting.

## 2. Logo Concept
Wordmark-led, not icon-led (icon-led travel logos read as generic — compass/
plane/globe clichés). Primary mark:

- **Wordmark:** "Triphogonva" set in Playfair Display, small caps or all
  lowercase, wide letter-spacing (tracking ~0.05em), Deep Forest Green on
  light backgrounds / Warm White on dark.
- **Monogram (for favicon, app icon, mobile nav):** a single custom
  glyph — a stylized "T" whose crossbar terminates in a thin arc, evoking a
  horizon line / compass sweep without being a literal compass icon. Royal
  Gold stroke on transparent, or Deep Forest Green fill.
- **Lockup rule:** wordmark + monogram never both appear at the same scale.
  Nav bar = monogram + wordmark side by side. Favicon/app icon = monogram
  alone. Footer = wordmark alone, larger, centered.

### Usage Guidelines
- Minimum clear space around the mark = height of the "T" in Triphogonva.
- Never stretch, rotate, add drop shadows, or recolor outside the palette.
- On photography, always place the mark inside a subtle glass chip
  (background blur + 8–12% white/black fill) for legibility — never raw
  text directly on busy imagery.
- Do not pair the wordmark with a tagline inline; taglines sit beneath, in
  Inter, uppercase, letter-spaced, at 40% the wordmark's size.

## 3. Color Palette

| Token | Name | Hex | Use |
|---|---|---|---|
| `--color-primary` | Deep Forest Green | `#1B3A2F` | Primary CTAs, nav, headings on light bg, dark sections |
| `--color-secondary` | Sand Beige | `#E8DCC8` | Section backgrounds, card fills, dividers |
| `--color-accent` | Royal Gold | `#C6A15B` | Highlights, active states, ratings, hover accents, borders |
| `--color-background` | Warm White | `#FBF8F3` | Page background |
| `--color-foreground` | Dark Charcoal | `#232323` | Body text |
| `--color-card` | Card White | `#FFFFFF` | Card surfaces (with soft shadow) |
| `--color-primary-hover` | Forest 700 | `#122A21` | Primary button hover |
| `--color-muted` | Sand 400 | `#F1EAE0` | Subtle fills, skeletons, input backgrounds |
| `--color-border` | Hairline | `#E4DCCB` | 1px borders, dividers |
| `--color-success` | Sage | `#4C7A5A` | Form success states |
| `--color-error` | Clay | `#B3543E` | Form error states |

Usage ratio guideline: **60% Warm White, 25% Sand Beige, 10% Deep Forest
Green, 5% Royal Gold.** Gold is a seasoning, never a base — overuse reads
cheap instead of premium.

Dark sections (footer, some heroes) invert: Deep Forest Green background,
Warm White text, Royal Gold accents at reduced opacity (80%) to avoid glare.

## 4. Typography

- **Headings:** Playfair Display (serif). Weights 500/600 only — avoid the
  Black weight, it reads heavy/cheap at large sizes.
  - H1: 56–72px desktop / 36–44px mobile, line-height 1.05, tracking -0.01em
  - H2: 36–44px / 28–32px, line-height 1.1
  - H3: 24–28px, line-height 1.2
- **Body:** Inter. Weights 400/500.
  - Body: 16–18px, line-height 1.6
  - Small/meta: 13–14px, letter-spaced uppercase for labels (e.g. "DURATION",
    "STARTING FROM")
- **Numerals** (prices, stats, counters): Inter, tabular-nums, 500 weight —
  never Playfair for numbers, serif digits look inconsistent in a grid.

## 5. Icon Style
Line icons only, 1.5px stroke, rounded caps/joins, no fill except on active/
selected state where fill switches to Royal Gold at 15% opacity behind the
icon. Use `react-icons` (Feather/Phosphor style sets — `Fi*` or `Pi*`
families) for consistency; never mix icon families in the same view.

## 6. Illustration / Imagery Style
No stock-photo-generic travel imagery (no couples-jumping-on-beach clichés).
Photography should be:
- Warm-toned, slightly desaturated grade (add a subtle sepia/forest color
  grade via CSS `filter` or pre-processed assets) so mixed-source images feel
  unified.
- Wide, cinematic aspect ratios (21:9 or 16:9) for heroes; 4:5 for cards.
- Always paired with a gradient overlay (`from-black/60 via-black/20
  to-transparent`) when text sits on top.
No custom illustration set for MVP — photography + line icons carry the
brand. (Flag: if budget allows later, a single hand-drawn map/route motif in
Royal Gold could reinforce "heritage" — not required for MVP.)

## 7. Button Styles
- **Primary:** Deep Forest Green fill, Warm White text, radius 999px (pill),
  padding 14px/32px, subtle scale(1.02) + brightness on hover, 200ms ease-out.
- **Secondary:** transparent fill, 1.5px Deep Forest Green border, same
  radius, fills solid on hover.
- **Ghost/tertiary (on dark imagery):** glass background
  (`backdrop-blur-md bg-white/10 border border-white/25`), Warm White text.
- **Icon buttons** (wishlist heart, share): circular, glass background,
  24px icon, scale-bounce on tap (Framer Motion `whileTap`).
- All buttons: no harsh drop shadow — use a soft, warm-tinted shadow
  (`shadow-[0_8px_24px_-8px_rgba(27,58,47,0.35)]`), never pure black shadow.

## 8. Card Styles
- Radius: 24px (system-wide, see §10).
- Background: Card White, 1px hairline border in `--color-border`.
- Shadow: soft warm shadow, resting state subtle, hover state lifts
  (translateY(-4px) + shadow intensifies) — 250ms ease.
- Image: top, rounded to match card radius, zoom(1.05) on hover with
  overflow-hidden clip.
- Content padding: 20–24px.
- Tags: small pill chips, Sand Beige fill, Dark Charcoal text, 12px.

## 9. Spacing System
8px base unit, Tailwind default scale kept as-is (no custom scale needed):
`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Section vertical padding: 96–128px
desktop, 48–64px mobile. Never break the 8px grid for ad-hoc spacing.

## 10. Border Radius System
| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8px | inputs, chips, small buttons |
| `--radius-md` | 16px | secondary containers |
| `--radius-lg` | 24px | cards, images, primary containers (brand signature radius) |
| `--radius-full` | 999px | pill buttons, avatars, nav |

## 11. Shadow System
Warm-tinted, never neutral-gray/black:
- `--shadow-sm`: `0 2px 8px -2px rgba(27,58,47,0.12)`
- `--shadow-md`: `0 8px 24px -8px rgba(27,58,47,0.18)`
- `--shadow-lg`: `0 20px 48px -12px rgba(27,58,47,0.25)`
- `--shadow-glow` (gold, for active/selected states only):
  `0 0 0 3px rgba(198,161,91,0.25)`

## 12. Motion Guidelines
- Duration: 200–300ms for micro-interactions (buttons, hovers), 400–600ms
  for section reveals, 800ms+ only for hero entrance (GSAP).
- Easing: `ease-out` for entrances, `ease-in-out` for hovers/loops. No
  bounce/elastic easing anywhere — it reads playful/cheap, not luxury.
- Scroll reveals: fade + translateY(24px→0), staggered 60–80ms per item,
  trigger once (no re-animating on scroll-back).
- Page transitions: 300ms crossfade, no slide/wipe.
- Respect `prefers-reduced-motion`: fall back to opacity-only transitions.

## 13. Design Tokens (implementation reference)
These map directly to Tailwind CSS variables / `tailwind.config.ts` theme
extension in the Design System module (next deliverable):

```
colors:  primary, primary-hover, secondary, accent, background,
         foreground, card, muted, border, success, error
radius:  sm(8) md(16) lg(24) full(999)
shadow:  sm md lg glow
font:    heading(Playfair Display) body(Inter)
spacing: Tailwind default (8px base)
motion:  duration-fast(200) duration-base(300) duration-slow(600)
```

---
This system is the single source of truth for all visual decisions going
forward. Next module: project scaffold + Tailwind/ShadCN design system
implementing these tokens.
