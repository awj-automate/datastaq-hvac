'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SplitText from '@/components/SplitText';
import TiltCard from '@/components/TiltCard';
import { staggerContainer, fadeUp } from '@/lib/animations/variants';
import { Snowflake, Puzzle, Repeat, Shield, Pin, Stopwatch } from '@/components/Icons';

const CARDS = [
  {
    icon: Snowflake,
    title: 'Built for HVAC, not generic',
    body: 'It triages by system type, urgency, and service category. It knows a no-cool emergency from a routine tune-up, and routes each one correctly.',
    anim: { rotate: [0, -12, 12, 0] },
    dur: 3,
  },
  {
    icon: Puzzle,
    title: 'Direct dispatch integration',
    body: 'Jobs land on your ServiceTitan, Housecall Pro, or Jobber board in real time. No email transcripts to re-key, no dropped handoffs.',
    anim: { rotate: [0, 14, 0], scale: [1, 1.08, 1] },
    dur: 3.2,
  },
  {
    icon: Repeat,
    title: 'Database reactivation included',
    body: 'Most competitors stop at inbound. We also call your past customers for maintenance, tune-ups, and replacements, at no extra cost.',
    anim: { rotate: [0, 360] },
    dur: 5,
  },
  {
    icon: Shield,
    title: '60-day guarantee',
    body: '20 qualified appointments in 60 days or a full refund. Most competitors hide behind 90-plus-day terms. We put ours in writing.',
    anim: { scale: [1, 1.1, 1] },
    dur: 2.8,
  },
  {
    icon: Pin,
    title: 'US-based team',
    body: 'A real American team builds, monitors, and tunes your AI every week. You always have an actual person to call.',
    anim: { y: [0, -5, 0] },
    dur: 2.4,
  },
  {
    icon: Stopwatch,
    title: 'Never a missed call',
    body: 'Every call answered in under 15 seconds, 24/7/365, including nights, weekends, and the busiest week of peak season.',
    anim: { rotate: [0, -10, 10, 0] },
    dur: 3,
  },
];

function Card({ card, index }) {
  const Icon = card.icon;
  return (
    <motion.div variants={fadeUp}>
      <TiltCard max={11} className="group relative h-full rounded-[22px]">
        <div className="gradient-border h-full rounded-[22px]">
          <div className="relative h-full rounded-[20px] bg-white/85 p-7 backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-[0_24px_55px_rgba(201,162,39,0.22)]">
            <span
              className="pointer-events-none absolute right-5 top-3 font-jakarta text-5xl font-extrabold text-ds-primary/[0.07]"
              style={{ letterSpacing: '-0.05em' }}
            >
              0{index + 1}
            </span>

            <div className="mb-5 inline-flex">
              <span
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                style={{
                  background: 'radial-gradient(58% 64% at 50% 8%, #E5C463, #C9A227)',
                  boxShadow: '0 10px 26px rgba(201,162,39,0.35)',
                }}
              >
                {index === 4 && (
                  <span className="pulse-ring absolute inset-0 rounded-2xl bg-ds-primary/40" />
                )}
                <motion.span
                  className="relative"
                  animate={card.anim}
                  transition={{
                    duration: card.dur,
                    repeat: Infinity,
                    ease: index === 2 ? 'linear' : 'easeInOut',
                  }}
                >
                  <Icon size={26} />
                </motion.span>
              </span>
            </div>

            <h3
              className="mb-2 font-jakarta text-lg font-extrabold text-ds-heading"
              style={{ letterSpacing: '-0.03em' }}
            >
              {card.title}
            </h3>
            <p
              className="font-jakarta text-sm text-ds-muted"
              style={{ letterSpacing: '-0.01em', lineHeight: '1.6' }}
            >
              {card.body}
            </p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Differentiation() {
  return (
    <section id="why" className="relative overflow-hidden bg-ds-bg py-20 lg:py-28">
      <div
        className="blob pointer-events-none absolute left-[8%] top-[20%] h-[340px] w-[340px]"
        style={{
          background: 'linear-gradient(96deg, #C9A227, #E5C463)',
          filter: 'blur(120px)',
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">
          <div className="mb-14 text-center lg:mb-20">
            <Reveal>
              <div className="sub-title mx-auto mb-6">
                <span className="sub-title-dot" />
                Why Contractors Choose This
              </div>
            </Reveal>
            <h2
              className="mx-auto max-w-3xl font-jakarta text-4xl font-extrabold text-ds-heading sm:text-5xl lg:text-[3.5rem]"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              <SplitText text="Not another" mode="char" />{' '}
              <span className="gradient-text-flow">answering service</span>
            </h2>
            <Reveal delay={0.1}>
              <p
                className="mx-auto mt-5 max-w-2xl font-jakarta text-lg text-ds-muted"
                style={{ letterSpacing: '-0.02em' }}
              >
                Six reasons this beats a generic AI receptionist, a call center,
                or another front-desk hire.
              </p>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CARDS.map((c, i) => (
              <Card key={c.title} card={c} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
}
