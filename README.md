# DataStaq · HVAC AI Receptionist — Landing Page

A high-conversion, animation-dense landing page for an AI receptionist service
targeted at HVAC contractors. Shares the DataStaq brand + animation system with
`datastaq-realestate` and `datastaq-agency-offer`.

The offer: **20 qualified HVAC appointments in 60 days, or you don't pay** — an
AI receptionist that answers every inbound call 24/7 and reactivates the
past-customer database. $2,500/mo, month-to-month, no setup fee, live in 2
weeks. For HVAC companies doing $1M+ in revenue.

## Stack

- **Next.js 14** (App Router) · JavaScript
- **Tailwind CSS 3** — design tokens shared with the sibling DataStaq sites
- **Framer Motion** — primary animation library
- **Lenis** — smooth scroll
- Canvas 2D — particle fields
- Deploy target: **Vercel**

```bash
pnpm install
pnpm dev     # local preview
pnpm build   # production build
```

## Page sections (`app/page.js`)

Hero · marquee · Problem (missed calls) · two-pronged Solution · 3-step Process
· live Demo · Differentiation · Results · Pricing & Guarantee · FAQ · final CTA.

## Conversion tracking

- `components/Analytics.jsx` loads **Meta Pixel** + **GA4** via `next/script`.
  IDs come from env vars (see `.env.example`); if unset, nothing loads.
- `lib/tracking.js` → `track(event, params)` fires to both `fbq` and `gtag`.
- CTA clicks fire `Lead` (Book a Call) and `Contact` (Hear the Demo / call the
  demo line).

Set these in **Vercel → Project → Settings → Environment Variables**:

```
NEXT_PUBLIC_FB_PIXEL_ID = <Meta Pixel ID>
NEXT_PUBLIC_GA4_ID      = G-XXXXXXXXXX
```

## Before launch — swap the placeholders

All external values live in **`lib/constants.js`** (search `TODO` repo-wide):

- `DEMO_PHONE` / `DEMO_PHONE_TEL` — the live demo line a prospect can call
- `DEMO_APP_URL` — hosted demo app (once set to an `https://` URL, the Demo
  section renders it as a live `<iframe>` instead of a placeholder panel)
- `DASHBOARD_URL` — "See the dashboard" link
- `BOOK_URL` — currently the on-page `#book` section; swap for a real scheduler
- Scheduler embed — `components/FinalCTA.jsx`, "CALENDAR EMBED SLOT"
- `NEXT_PUBLIC_FB_PIXEL_ID` / `NEXT_PUBLIC_GA4_ID` — see above
- `/public/og-image.png` (1200x630) — referenced in `app/layout.js`
- Real case studies — `components/Results.jsx` (currently illustrative slots)
- Confirm the missed-call stats in `components/Problem.jsx`

## Tuning animation intensity

- `ParticleField` — pass `density={0.5}` or lower; auto-reduces on mobile
- `lib/animations/variants.js` — shared easings, durations, stagger steps
- `SmoothScroll.jsx` — Lenis config, or remove the wrapper to disable
- `prefers-reduced-motion` is fully respected (Lenis off, static canvas frame,
  looping demos jump to their finished state)

## Performance

The page is statically prerendered. Particle counts scale down on mobile,
animation loops clean up on unmount, and the demo `<iframe>` is lazy-loaded.
No new dependencies beyond the shared DataStaq stack.
