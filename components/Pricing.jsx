'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SplitText from '@/components/SplitText';
import MagneticButton from '@/components/MagneticButton';
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/lib/animations/variants';
import { Check } from '@/components/Icons';
import { BOOK_URL } from '@/lib/constants';
import { track } from '@/lib/tracking';

const INCLUDED = [
  '24/7 inbound AI receptionist',
  'Past-customer database reactivation',
  'Direct dispatch integration (ServiceTitan, Housecall Pro, Jobber)',
  'HVAC-specific call triage and routing',
  'Weekly reporting and call tuning',
  'Dedicated US-based onboarding',
];

/* ── Rotating guarantee seal ───────────────────────────────── */
function Seal() {
  return (
    <div className="relative mx-auto h-[300px] w-[300px] sm:h-[340px] sm:w-[340px]">
      {/* pulsing glow */}
      <div
        className="animate-pulse-glow absolute inset-6 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,39,0.55), transparent 70%)',
          filter: 'blur(28px)',
        }}
      />

      {/* rotating circular text */}
      <svg
        viewBox="0 0 340 340"
        className="animate-spin-slower absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id="sealText"
            d="M170,170 m-138,0 a138,138 0 1,1 276,0 a138,138 0 1,1 -276,0"
          />
        </defs>
        <text
          className="font-jakarta"
          fontSize="14.5"
          fontWeight="800"
          letterSpacing="3"
          fill="#8C6F1E"
        >
          <textPath href="#sealText" startOffset="0">
            20 QUALIFIED APPOINTMENTS · 60 DAYS · OR A FULL REFUND ·
          </textPath>
        </text>
      </svg>

      {/* rotating conic ring */}
      <div className="absolute inset-[42px] rounded-full p-[3px]">
        <div className="conic-ring h-full w-full rounded-full" />
      </div>

      {/* inner seal */}
      <div
        className="absolute inset-[50px] flex flex-col items-center justify-center rounded-full text-center"
        style={{
          background: 'radial-gradient(70% 70% at 50% 25%, #2A2620, #14110B)',
          boxShadow:
            'inset 0 4px 20px rgba(201,162,39,0.25), 0 26px 50px rgba(0,0,0,0.35)',
        }}
      >
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
          <motion.circle
            cx="31"
            cy="31"
            r="27"
            stroke="#C9A227"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.path
            d="M19 32.5l8.5 8.5L44 22"
            stroke="#E5C463"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div
          className="mt-2 font-jakarta text-6xl font-extrabold leading-none text-white"
          style={{ letterSpacing: '-0.05em' }}
        >
          20
        </div>
        <div className="mt-1 font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] text-ds-primary-light">
          appointments
        </div>
        <div className="mt-0.5 font-jakarta text-[11px] font-semibold text-white/55">
          in 60 days, or a full refund
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-ds-bg py-20 lg:py-28">
      <div
        className="blob pointer-events-none absolute bottom-[8%] right-[6%] h-[360px] w-[360px]"
        style={{
          background: 'linear-gradient(96deg, #C9A227, #E5C463)',
          filter: 'blur(120px)',
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">
          <div className="mb-12 text-center lg:mb-16">
            <Reveal>
              <div className="sub-title mx-auto mb-6">
                <span className="sub-title-dot" />
                Pricing &amp; Guarantee
              </div>
            </Reveal>
            <h2
              className="mx-auto max-w-3xl font-jakarta text-4xl font-extrabold text-ds-heading sm:text-5xl lg:text-[3.5rem]"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              <SplitText text="Simple pricing." mode="char" />{' '}
              <span className="gradient-text-flow">Ironclad guarantee.</span>
            </h2>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {/* pricing card */}
            <Reveal variants={fadeLeft}>
              <div className="card relative h-full overflow-hidden p-8 sm:p-10">
                <div className="mb-6">
                  <div className="font-jakarta text-[11px] font-bold uppercase tracking-[0.16em] text-ds-primary-dark">
                    One plan, everything included
                  </div>
                  <div className="mt-3 flex items-end gap-2">
                    <span
                      className="font-jakarta text-6xl font-extrabold text-ds-heading sm:text-7xl"
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      $2,500
                    </span>
                    <span className="mb-2 font-jakarta text-lg font-bold text-ds-muted">
                      / month
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Month-to-month', 'No setup fee', 'Live in 2 weeks'].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-ds-primary/10 px-3 py-1 font-jakarta text-[11px] font-bold text-ds-primary-dark"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="section-divider mb-6" />

                <div className="mb-6 font-jakarta text-[11px] font-bold uppercase tracking-[0.14em] text-ds-subtle">
                  Everything included
                </div>
                <motion.ul
                  variants={staggerContainer(0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-8 space-y-3"
                >
                  {INCLUDED.map((item) => (
                    <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#22A559] text-white">
                        <Check size={12} />
                      </span>
                      <span
                        className="font-jakarta text-sm text-ds-text"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <MagneticButton
                  href={BOOK_URL}
                  className="btn-accent h-14 w-full justify-center text-base"
                  cursorText="Book it →"
                  onClick={() => track('Lead', { location: 'pricing' })}
                >
                  <span className="relative z-10">Book a Call</span>
                </MagneticButton>
                <p className="mt-3 text-center font-jakarta text-[11px] text-ds-subtle">
                  Cancel anytime. The 60-day guarantee starts the day you go live.
                </p>
              </div>
            </Reveal>

            {/* guarantee */}
            <Reveal variants={fadeRight}>
              <div className="card flex h-full flex-col items-center justify-center p-8 text-center sm:p-10">
                <Seal />
                <h3
                  className="mt-6 font-jakarta text-2xl font-extrabold text-ds-heading sm:text-3xl"
                  style={{ letterSpacing: '-0.035em' }}
                >
                  20 appointments in 60 days,{' '}
                  <span className="gradient-text">or you don&apos;t pay.</span>
                </h3>
                <p
                  className="mt-3 max-w-md font-jakarta text-[15px] text-ds-muted"
                  style={{ letterSpacing: '-0.02em', lineHeight: '1.6' }}
                >
                  If we do not book you 20 qualified appointments inside the
                  first 60 days, you get a full refund. No retainer trap, no
                  long contract, no risk on your side.
                </p>
                <div className="mt-5 flex items-center gap-2 rounded-full border border-ds-primary/25 bg-ds-primary/[0.07] px-4 py-2">
                  <Check size={14} className="text-ds-primary-dark" />
                  <span className="font-jakarta text-xs font-bold text-ds-primary-dark">
                    For HVAC companies doing $1M+ in annual revenue
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
}
