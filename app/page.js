/*
  ═══════════════════════════════════════════════════════════════════════
  PAGE — HVAC AI Receptionist landing page ("/")
  ───────────────────────────────────────────────────────────────────────
  Server component: renders SEO metadata (see app/layout.js) + JSON-LD,
  then composes the section components. All animation lives inside the
  client components below.

  ⚠️  BEFORE LAUNCH
    • Set NEXT_PUBLIC_FB_PIXEL_ID + NEXT_PUBLIC_GA4_ID in Vercel (see .env.example)
    • Swap demo phone / demo app / dashboard / calendar — lib/constants.js
    • /public/og-image.png (1200x630) — referenced in app/layout.js
    • Wire the real scheduler embed in components/FinalCTA.jsx
    • Add real case studies in components/Results.jsx
    • Search the repo for "TODO"
  ═══════════════════════════════════════════════════════════════════════
*/

import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Process from '@/components/Process';
import SectionDivider from '@/components/SectionDivider';
import Demo from '@/components/Demo';
import Differentiation from '@/components/Differentiation';
import Results from '@/components/Results';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { faqs } from '@/lib/faqData';
import { SITE_URL, OFFER } from '@/lib/constants';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'DataStaq AI',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
    },
    {
      '@type': 'Service',
      name: 'AI Receptionist for HVAC Contractors',
      serviceType:
        'AI receptionist and customer database reactivation for HVAC companies',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'US',
      description:
        'An AI receptionist for HVAC contractors that answers every inbound call 24/7, triages by system type and urgency, and books jobs directly into ServiceTitan, Housecall Pro, or Jobber. Includes outbound reactivation of the past-customer database for maintenance, tune-ups, and replacements.',
      offers: {
        '@type': 'Offer',
        price: String(OFFER.price),
        priceCurrency: 'USD',
        description:
          '$2,500 per month, month-to-month, no setup fee. 60-day guarantee: 20 qualified appointments or a full refund.',
      },
      audience: {
        '@type': 'BusinessAudience',
        name: 'HVAC contractors in the US doing $1M+ in annual revenue',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a.replace(/\s*\[TODO[^\]]*\]/g, ''),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <Process />
        <SectionDivider topColor="#FFFFFF" fill="#14110B" />
        <Demo />
        <SectionDivider topColor="#14110B" fill="#F5F0E1" />
        <Differentiation />
        <Results />
        <Pricing />
        <FAQ />
        <SectionDivider topColor="#FFFFFF" fill="#14110B" />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
