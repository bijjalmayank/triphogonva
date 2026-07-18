# Triphogonva

Heritage + luxury travel showcase site. Static React/Vite frontend, no
backend — enquiries are collected via [Web3Forms](https://web3forms.com).

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · ShadCN (Radix) · Framer
Motion · GSAP (hero only) · React Router · React Icons · Leaflet +
OpenStreetMap · Web3Forms

## Getting started

```bash
npm install
cp .env.example .env   # add your Web3Forms access key
npm run dev
```

Get a free Web3Forms access key at https://web3forms.com and put it in
`.env` as `VITE_WEB3FORMS_ACCESS_KEY`. Without it, the enquiry form on
`/contact` and the homepage will submit but fail server-side.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — typecheck + production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — oxlint

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — framework preset `Vite`, no config needed.
3. Add `VITE_WEB3FORMS_ACCESS_KEY` as an environment variable in the
   Vercel project settings.
4. Deploy.

## Content & branding

- `BRANDING.md` — full brand system (logo, palette, type, motion,
  design tokens) — the source of truth for `src/index.css`'s `@theme`.
- `src/constants/trips.ts` — all destination/trip content. Add a trip
  here and it appears everywhere (home, listings, detail page, map).
- `src/assets/hampi/CREDITS.md` — placeholder photography is real Hampi
  photography from Wikimedia Commons, used until real Triphogonva
  photography is available. Attribution required for the CC BY / CC
  BY-SA images — see that file before shipping to production.
- `src/constants/media.ts` — swap placeholder images here; nothing else
  needs to change.

## Known gaps / notes for next session

- `swiper` is installed (per the original tech spec) but not currently
  wired up — the resolved `swiper@14` had a layout bug (Trending Trips
  carousel blew out to ~33M px wide when combined with fractional
  `slidesPerView` and `h-auto` slides). Replaced with a native
  CSS-scroll-snap carousel in `TrendingTripsSection.tsx`, which is more
  predictable anyway. Revisit if a stable Swiper version is preferred.
- Hero currently uses a static image; `HeroSection` accepts a
  `videoSrc` prop to swap in an MP4 background whenever one is ready.
- Product/OG image (`public/og-cover.jpg`) is a placeholder Hampi photo.
