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

The Demo section is a self-contained mock — an animated two-tab call simulation
(inbound call + database reactivation call). Nothing external to wire up.

## Before launch — swap the placeholders

Search the repo for `TODO`. Key items:

- `/public/og-image.png` (1200x630) — referenced in `app/layout.js`
- Real scheduler embed — `components/FinalCTA.jsx`, "CALENDAR EMBED SLOT"
- `BOOK_URL` in `lib/constants.js` — currently the on-page `#book` section;
  point it at a real scheduler URL if you prefer
- Real case studies — `components/Results.jsx` (currently illustrative slots)
- Confirm the missed-call stats in `components/Problem.jsx`

## Tuning animation intensity

- `ParticleField` — pass `density={0.5}` or lower; auto-reduces on mobile
- `lib/animations/variants.js` — shared easings, durations, stagger steps
- `SmoothScroll.jsx` — Lenis config, or remove the wrapper to disable
- `prefers-reduced-motion` is fully respected (Lenis off, static canvas frame,
  looping demos jump to their finished state)

## Performance

The page is statically prerendered. Particle counts scale down on mobile and
animation loops clean up on unmount. No dependencies beyond the shared DataStaq
stack.
