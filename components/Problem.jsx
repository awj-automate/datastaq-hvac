'use client';

/*
  ── STATS (directional, from the brief) ──────────────────────────
   • 3-5 missed calls/day · $2K-5K per job · $200K-450K/year lost.
   [TODO: confirm or soften these figures before launch.]
  ─────────────────────────────────────────────────────────────────
*/

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SplitText from '@/components/SplitText';
import AnimatedCounter from '@/components/AnimatedCounter';
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '@/lib/animations/variants';
import { PhoneMissed, Stopwatch, Calendar, Flame, Wrench } from '@/components/Icons';

const PAIN = [
  {
    icon: Stopwatch,
    title: 'After-hours calls',
    body: 'Systems fail at night and before work. A 9 PM "no heat" call hits voicemail and the homeowner moves on.',
  },
  {
    icon: Calendar,
    title: 'Weekends',
    body: 'Saturday and Sunday emergencies go straight to whichever contractor actually picks up the phone.',
  },
  {
    icon: Flame,
    title: 'Peak-season overflow',
    body: 'Heat wave or cold snap and every line rings at once. Calls stack up, then drop.',
  },
  {
    icon: Wrench,
    title: 'Techs on the job',
    body: 'Your crew is in attics and crawlspaces, not by the phone. The calls still come in anyway.',
  },
];

/* ── Stacking missed calls ─────────────────────────────────── */
function MissedCallStack() {
  const rows = [
    { time: '7:42 PM', job: '$3,200 install quote' },
    { time: '6:15 AM', job: '$420 tune-up' },
    { time: 'Sat 1:03 PM', job: '$5,100 replacement' },
    { time: '8:58 PM', job: '$680 no-cool repair' },
    { time: '12:30 PM', job: '$2,400 job' },
  ];
  return (
    <motion.div
      variants={staggerContainer(0.13)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-2.5 rounded-2xl bg-ds-bg/60 p-4"
    >
      {rows.map((r) => (
        <motion.div
          key={r.time + r.job}
          variants={{
            hidden: { opacity: 0, y: -24, rotateZ: -3 },
            show: {
              opacity: 1,
              y: 0,
              rotateZ: 0,
              transition: { type: 'spring', stiffness: 200, damping: 18 },
            },
          }}
          className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white/70 px-3.5 py-3"
        >
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EF4444]/12 text-[#EF4444]">
            <PhoneMissed size={17} />
          </span>
          <div className="flex-1 leading-tight">
            <div className="font-jakarta text-xs font-bold text-ds-muted">
              Missed call · {r.time}
            </div>
            <div className="font-jakarta text-[10px] text-ds-subtle">{r.job}</div>
          </div>
          <span className="font-jakarta text-[10px] font-semibold uppercase tracking-wide text-[#EF4444]">
            Voicemail
          </span>
        </motion.div>
      ))}
      <p className="pt-1 text-center font-jakarta text-[11px] font-medium text-ds-subtle">
        ...and that is just one day
      </p>
    </motion.div>
  );
}

function Stat({ prefix, to, suffix, label }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#EF4444]/15 bg-[#EF4444]/[0.05] p-4">
      <div className="font-jakarta text-3xl font-extrabold text-[#EF4444] sm:text-4xl">
        {prefix}
        <AnimatedCounter to={to} duration={2} />
        {suffix}
      </div>
      <p className="font-jakarta text-[13px] font-medium text-ds-muted">{label}</p>
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">
          {/* heading */}
          <div className="mb-14 text-center lg:mb-16">
            <Reveal>
              <div className="sub-title mx-auto mb-6">
                <span className="sub-title-dot" />
                The Leak
              </div>
            </Reveal>
            <h2
              className="mx-auto max-w-3xl font-jakarta text-4xl font-extrabold text-ds-heading sm:text-5xl lg:text-[3.5rem]"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              <SplitText text="Every missed call is a job your" mode="char" />{' '}
              <span className="gradient-text-flow">competitor books</span>
            </h2>
            <Reveal delay={0.1}>
              <p
                className="mx-auto mt-5 max-w-2xl font-jakarta text-lg text-ds-muted"
                style={{ letterSpacing: '-0.02em' }}
              >
                The phone is your storefront. Every ring that goes unanswered is
                revenue walking next door, and it adds up faster than you think.
              </p>
            </Reveal>
          </div>

          {/* missed-call math panel */}
          <div className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
            <Reveal variants={fadeLeft}>
              <div className="mb-4 flex items-center gap-3">
                <span className="icon-box h-11 w-11 text-[#EF4444]">
                  <PhoneMissed size={22} />
                </span>
                <h3
                  className="font-jakarta text-xl font-extrabold text-ds-heading"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  A single day of missed calls
                </h3>
              </div>
              <MissedCallStack />
            </Reveal>

            <Reveal variants={fadeRight} className="flex flex-col justify-center">
              <div className="space-y-3">
                <Stat prefix="" to={3} suffix="-5" label="calls missed every single day" />
                <Stat prefix="$" to={2} suffix="K-5K" label="in revenue per HVAC job" />
                <Stat prefix="$" to={200} suffix="K-450K" label="lost every year, to voicemail" />
              </div>
              <p
                className="mt-5 font-jakarta text-base font-bold text-ds-heading"
                style={{ letterSpacing: '-0.02em' }}
              >
                That is a second service truck&apos;s worth of revenue, ringing
                out to voicemail.
              </p>
            </Reveal>
          </div>

          {/* pain points */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PAIN.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} variants={fadeUp} className="card group p-6">
                  <span className="icon-box mb-4 h-11 w-11 text-ds-muted">
                    <Icon size={22} />
                  </span>
                  <h3
                    className="mb-2 font-jakarta text-base font-extrabold text-ds-heading"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-jakarta text-[13px] text-ds-muted"
                    style={{ letterSpacing: '-0.01em', lineHeight: '1.6' }}
                  >
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* bridge line */}
          <Reveal variants={fadeUp} className="mt-12 text-center">
            <p
              className="mx-auto max-w-2xl font-jakarta text-xl font-bold text-ds-heading sm:text-2xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              One AI receptionist answers{' '}
              <span className="gradient-text">every call</span>, and never takes
              a day off.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 section-divider" />
    </section>
  );
}
