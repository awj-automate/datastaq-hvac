import { DM_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Analytics from '@/components/Analytics';
import { SITE_URL } from '@/lib/constants';

/* Face is DM Sans; the CSS variable keeps the `--font-jakarta`
   token name so design tokens stay shared with datastaq-agency-offer. */
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const TITLE =
  '20 HVAC Appointments in 60 Days | AI Receptionist by DataStaq AI';
const DESCRIPTION =
  'An AI receptionist for HVAC contractors that answers every inbound call 24/7 and reactivates your past-customer database. 20 qualified appointments in 60 days, or you don\'t pay. $2,500/mo, live in 2 weeks.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'HVAC AI receptionist',
    'HVAC call answering service',
    'HVAC missed call solution',
    'ServiceTitan integration',
    'HVAC database reactivation',
    'HVAC appointment setting',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'DataStaq AI',
    title: TITLE,
    description: DESCRIPTION,
    // TODO: add /public/og-image.png (1200x630) before launch
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DataStaq AI: AI Receptionist for HVAC Contractors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-jakarta antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
