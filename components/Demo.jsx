'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import SplitText from '@/components/SplitText';
import MagneticButton from '@/components/MagneticButton';
import { Headset, Repeat, Check, Play, Pause, Phone, ArrowRight } from '@/components/Icons';
import {
  DEMO_PHONE,
  DEMO_PHONE_TEL,
  DEMO_APP_URL,
  DASHBOARD_URL,
} from '@/lib/constants';
import { track } from '@/lib/tracking';

const HAS_EMBED = /^https?:\/\//.test(DEMO_APP_URL);

/* ── Conversation scripts ──────────────────────────────────── */
const CONVOS = {
  inbound: {
    accent: '#C9A227',
    caller: 'Inbound Caller',
    meta: 'Homeowner · no-cool call',
    age: 'answered in 11 seconds',
    icon: Headset,
    lines: [
      { from: 'ai', text: 'Thanks for calling Summit Heating and Air, this is the scheduling line. What is going on with your system today?' },
      { from: 'lead', text: 'My AC stopped cooling overnight. The house is already at 81.' },
      { from: 'ai', text: 'Got it, that is a no-cool call. Is the outdoor unit running at all, or completely off?' },
      { from: 'lead', text: 'It is running, but only blowing warm air.' },
      { from: 'ai', text: 'Okay. I have a technician who can be out today between 2 and 4 PM. Does that work for you?' },
      { from: 'lead', text: 'Yes, that would be great.' },
      { from: 'ai', text: 'You are booked for today, 2 to 4 PM. It is on the dispatch board and a confirmation text is on its way.' },
    ],
  },
  reactivation: {
    accent: '#8B6CF0',
    caller: 'Past Customer',
    meta: 'Maintenance follow-up · installed 2022',
    age: 'database lead · 19 months',
    icon: Repeat,
    lines: [
      { from: 'ai', text: 'Hi, this is Summit Heating and Air. We installed your system back in 2022 and I am reaching out about a maintenance check before summer.' },
      { from: 'lead', text: 'Oh, right. It has been a while, hasn’t it.' },
      { from: 'ai', text: 'It has. A tune-up keeps the warranty valid and catches small issues before they become a breakdown in a heat wave.' },
      { from: 'lead', text: 'That makes sense. The system has been a little louder lately, actually.' },
      { from: 'ai', text: 'Worth having a tech take a look. I can get someone out Thursday morning for the tune-up. Shall I book it?' },
      { from: 'lead', text: 'Yeah, let us do Thursday.' },
      { from: 'ai', text: 'Booked for Thursday morning. It is on the dispatch board and you will get a reminder. Thanks for being a long-time customer.' },
    ],
  },
};

/* ── Soundwave ─────────────────────────────────────────────── */
function SoundWave({ active, color }) {
  return (
    <div className="flex h-8 items-center gap-[3px]">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="wave-bar"
          style={{
            background: `linear-gradient(180deg, ${color}, ${color}66)`,
            animationDelay: `${(i % 9) * 0.07}s`,
            animationDuration: `${0.6 + (i % 6) * 0.12}s`,
            animationPlayState: active ? 'running' : 'paused',
            opacity: active ? 1 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

/* ── One animated call ─────────────────────────────────────── */
function CallDemo({ convo }) {
  const { lines, accent } = convo;
  const [playing, setPlaying] = useState(true);
  const [st, setSt] = useState({ idx: 0, text: '', hold: 0, phase: 'typing' });
  const scrollRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setSt({ idx: lines.length, text: '', hold: 0, phase: 'finished' });
    }
  }, [lines.length]);

  useEffect(() => {
    if (!playing || st.phase === 'finished') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const id = setInterval(() => {
      setSt((prev) => {
        if (prev.phase === 'finished') return prev;
        const msg = lines[prev.idx];
        if (prev.phase === 'holding') {
          if (prev.hold > 1) return { ...prev, hold: prev.hold - 1 };
          const next = prev.idx + 1;
          if (next >= lines.length) return { ...prev, phase: 'finished' };
          return { idx: next, text: '', hold: 0, phase: 'typing' };
        }
        if (prev.text.length < msg.text.length) {
          return { ...prev, text: msg.text.slice(0, prev.text.length + 1) };
        }
        return { ...prev, phase: 'holding', hold: 16 };
      });
    }, 22);
    return () => clearInterval(id);
  }, [playing, st.phase, lines]);

  useEffect(() => {
    if (st.phase !== 'finished') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const t = setTimeout(
      () => setSt({ idx: 0, text: '', hold: 0, phase: 'typing' }),
      4200,
    );
    return () => clearTimeout(t);
  }, [st.phase]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [st]);

  const finished = st.phase === 'finished';
  const shown = finished ? lines : lines.slice(0, st.idx);
  const typing = !finished ? lines[st.idx] : null;
  const aiSpeaking = !finished && typing?.from === 'ai' && st.phase === 'typing';

  return (
    <div className="card-glass-dark overflow-hidden">
      {/* call header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full text-white"
            style={{ background: `radial-gradient(50% 58% at 50% 95%, ${accent}, ${accent}aa)` }}
          >
            <convo.icon size={20} />
          </div>
          <div className="leading-tight">
            <div className="font-jakarta text-sm font-bold text-white">{convo.caller}</div>
            <div className="font-jakarta text-[11px] text-ds-primary-light/80">{convo.meta}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22C55E]" />
            <span className="font-jakarta text-[11px] font-semibold text-[#22C55E]">
              AI on the line
            </span>
          </div>
          <div className="font-jakarta text-[10px] text-white/45">{convo.age}</div>
        </div>
      </div>

      {/* transcript */}
      <div
        ref={scrollRef}
        className="h-[330px] space-y-3 overflow-y-auto px-5 py-5"
        data-lenis-prevent
      >
        {shown.map((l, i) => (
          <Bubble key={i} line={l} accent={accent} />
        ))}
        {typing && (st.text || st.phase === 'typing') && (
          <Bubble line={{ ...typing, text: st.text }} accent={accent} caret />
        )}
        {finished && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            className="flex items-center gap-2.5 rounded-xl border border-[#22C55E]/30 bg-[#22C55E]/10 px-4 py-3"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] text-white">
              <Check size={15} />
            </span>
            <div>
              <div className="font-jakarta text-[12px] font-bold text-[#5BE498]">
                Job booked and synced to dispatch
              </div>
              <div className="font-jakarta text-[10px] text-white/50">
                Detailed call notes logged automatically
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* controls */}
      <div className="flex items-center gap-4 border-t border-white/10 px-5 py-4">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
          style={{ background: `radial-gradient(50% 58% at 50% 5%, ${accent}, ${accent}cc)` }}
          aria-label={playing ? 'Pause sample call' : 'Play sample call'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={playing ? 'pause' : 'play'}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
        <div className="flex-1">
          <SoundWave active={playing && aiSpeaking} color={accent} />
        </div>
        <span className="font-jakarta text-[11px] font-semibold text-white/55">
          {playing ? 'Sample call playing' : 'Sample call paused'}
        </span>
      </div>
    </div>
  );
}

function Bubble({ line, accent, caret }) {
  const isAI = line.from === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-[82%] ${isAI ? '' : 'text-right'}`}>
        <div
          className={`mb-1 font-jakarta text-[9px] font-bold uppercase tracking-[0.12em] ${
            isAI ? 'text-ds-primary-light/70' : 'text-white/40'
          }`}
        >
          {isAI ? 'AI Receptionist' : 'Caller'}
        </div>
        <div
          className={`rounded-2xl px-3.5 py-2.5 font-jakarta text-[12.5px] leading-snug ${
            isAI ? 'rounded-tl-sm text-white' : 'rounded-tr-sm text-white'
          }`}
          style={{
            background: isAI
              ? 'rgba(255,255,255,0.08)'
              : `linear-gradient(135deg, ${accent}, ${accent}99)`,
            border: isAI ? '1px solid rgba(255,255,255,0.1)' : 'none',
          }}
        >
          {line.text}
          {caret && (
            <span
              className="ml-0.5 inline-block h-[13px] w-[2px] -translate-y-[1px] align-middle"
              style={{ background: isAI ? '#E5C463' : '#fff', animation: 'twinkle 0.8s steps(1) infinite' }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Demo app embed ────────────────────────────────────────── */
function EmbedBlock() {
  return (
    <div className="card-glass-dark overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-jakarta text-[11px] font-semibold text-white/55">
          Live demo app
        </span>
      </div>
      {HAS_EMBED ? (
        <iframe
          src={DEMO_APP_URL}
          title="DataStaq HVAC demo app"
          loading="lazy"
          className="h-[420px] w-full border-0 bg-white"
        />
      ) : (
        <div className="flex h-[300px] flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ds-primary/15 text-ds-primary-light">
            <Headset size={26} />
          </span>
          <p className="font-jakarta text-sm font-semibold text-white/80">
            Interactive demo app embeds here
          </p>
          <p className="max-w-sm font-jakarta text-[12px] text-white/45">
            {/* TODO: set DEMO_APP_URL in lib/constants.js to the hosted demo
                app URL and this panel becomes a live embed. */}
            Set the demo app URL in lib/constants.js to drop in the live embed.
          </p>
        </div>
      )}
    </div>
  );
}

export default function Demo() {
  const [tab, setTab] = useState('inbound');
  const tabs = [
    { id: 'inbound', label: 'Inbound Call', icon: Headset },
    { id: 'reactivation', label: 'Reactivation Call', icon: Repeat },
  ];

  return (
    <section
      id="demo"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #14110B, #221C12 55%, #14110B)' }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,39,0.18), transparent 65%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">
          <div className="mb-10 text-center lg:mb-12">
            <Reveal>
              <div
                className="sub-title mx-auto mb-6"
                style={{ color: '#E5C463', background: 'rgba(201,162,39,0.12)' }}
              >
                <span className="sub-title-dot" />
                Hear It Live
              </div>
            </Reveal>
            <h2
              className="mx-auto max-w-3xl font-jakarta text-4xl font-extrabold text-white sm:text-5xl lg:text-[3.5rem]"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              <SplitText text="Don't take our word." mode="char" />{' '}
              <span className="gradient-text-flow">Call it yourself.</span>
            </h2>
          </div>

          {/* call-now card */}
          <Reveal variants={{ hidden: { opacity: 0, y: 36, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
            <div
              className="relative mx-auto mb-10 max-w-3xl overflow-hidden rounded-[24px] p-7 text-center sm:p-9"
              style={{
                background: 'radial-gradient(120% 130% at 50% 0%, #E5C463 0%, #C9A227 45%, #8C6F1E 100%)',
                boxShadow: '0 30px 60px rgba(201,162,39,0.3)',
              }}
            >
              <div className="relative">
                <div className="mb-1 font-jakarta text-[12px] font-bold uppercase tracking-[0.16em] text-white/80">
                  Call the demo line now
                </div>
                <a
                  href={DEMO_PHONE_TEL}
                  onClick={() => track('Contact', { location: 'demo_phone' })}
                  className="group inline-flex items-center gap-3 font-jakarta text-4xl font-extrabold text-white transition-transform hover:scale-[1.03] sm:text-5xl"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 sm:h-14 sm:w-14">
                    <Phone size={24} />
                  </span>
                  {DEMO_PHONE}
                </a>
                <p className="mt-3 font-jakarta text-sm font-medium text-white/85">
                  Talk to the AI receptionist yourself. Available 24/7, no signup.
                </p>
              </div>
            </div>
          </Reveal>

          {/* tabs */}
          <Reveal className="mb-7 flex justify-center">
            <div className="inline-flex flex-col gap-1.5 rounded-full border border-white/10 bg-white/[0.04] p-1.5 sm:flex-row">
              {tabs.map((t) => {
                const Icon = t.icon;
                const on = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className="relative flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-jakarta text-[13px] font-bold transition-colors"
                  >
                    {on && (
                      <motion.span
                        layoutId="demo-tab"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            'radial-gradient(62% 82% at 28% -10%, rgba(255,255,255,0.2), transparent), #C9A227',
                        }}
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                      />
                    )}
                    <span className={`relative z-10 flex items-center gap-2 ${on ? 'text-white' : 'text-white/55'}`}>
                      <Icon size={16} />
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* call panel */}
          <Reveal
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="mx-auto max-w-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                transition={{ duration: 0.35 }}
              >
                <CallDemo convo={CONVOS[tab]} />
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.1} className="mt-5 flex items-center justify-center gap-2 text-center">
            <Phone size={15} className="text-ds-primary-light" />
            <span className="font-jakarta text-sm text-white/55">
              On any call that needs a person, the AI warm-transfers to your
              team, live.
            </span>
          </Reveal>

          {/* embed + dashboard link */}
          <Reveal variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="mx-auto mt-12 max-w-3xl">
            <EmbedBlock />
            <div className="mt-5 text-center">
              <MagneticButton
                href={DASHBOARD_URL}
                className="btn-light h-12 px-7 text-sm"
                strength={0.3}
                onClick={() => track('Contact', { location: 'demo_dashboard' })}
              >
                <span className="flex items-center gap-2">
                  See the dashboard
                  <ArrowRight size={16} />
                </span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
