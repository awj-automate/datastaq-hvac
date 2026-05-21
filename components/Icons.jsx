/*
  Shared real-estate + product icon set. All icons are stroke-based,
  inherit `currentColor`, and accept { size, className }. Used across
  particles, cards, process steps, and the demo UI.
*/

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
});

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function House({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 10.5 12 3l9 7.5" {...stroke} />
      <path d="M5 9.5V20h14V9.5" {...stroke} />
      <path d="M10 20v-5h4v5" {...stroke} />
    </svg>
  );
}

export function Key({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="8" cy="8" r="4.5" {...stroke} />
      <path d="M11.2 11.2 20 20M17 17l2-2M14.5 14.5l2.2-2.2" {...stroke} />
    </svg>
  );
}

export function Pin({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" {...stroke} />
      <circle cx="12" cy="10" r="2.6" {...stroke} />
    </svg>
  );
}

export function Calendar({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" {...stroke} />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" {...stroke} />
      <path d="M7.5 13.5h3M13.5 13.5h3M7.5 17h3M13.5 17h3" {...stroke} />
    </svg>
  );
}

export function Phone({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M6.5 3.5h3l1.4 4-2 1.4a13 13 0 0 0 6.2 6.2l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"
        {...stroke}
      />
    </svg>
  );
}

export function Stopwatch({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="13.5" r="7.5" {...stroke} />
      <path d="M12 13.5V9M9.5 2.5h5M12 2.5v3M18.5 7l1.5-1.5" {...stroke} />
    </svg>
  );
}

export function Cabinet({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="5" y="3" width="14" height="18" rx="2" {...stroke} />
      <path d="M5 12h14M10 7h4M10 16.5h4" {...stroke} />
    </svg>
  );
}

export function Ghost({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M5 20V11a7 7 0 0 1 14 0v9l-2.3-1.6L14.4 20 12 18.4 9.6 20 7.3 18.4 5 20Z"
        {...stroke}
      />
      <path d="M9.5 10h.01M14.5 10h.01" {...stroke} strokeWidth="2.4" />
    </svg>
  );
}

export function Shield({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3 5 6v5.5c0 5 3.2 8.3 7 9.5 3.8-1.2 7-4.5 7-9.5V6l-7-3Z" {...stroke} />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" {...stroke} />
    </svg>
  );
}

export function Brain({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 5.5a3 3 0 0 0-5.7-1.3A3 3 0 0 0 4 9a3 3 0 0 0 1.5 5.4A3 3 0 0 0 12 18.5Z" {...stroke} />
      <path d="M12 5.5a3 3 0 0 1 5.7-1.3A3 3 0 0 1 20 9a3 3 0 0 1-1.5 5.4A3 3 0 0 1 12 18.5Z" {...stroke} />
      <path d="M12 5.5v13" {...stroke} />
    </svg>
  );
}

export function Chart({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 20h16M7 20v-6M12 20V9M17 20v-9" {...stroke} />
      <path d="m5 11 5-4 4 2.5 6-6" {...stroke} />
      <path d="M20 3.5v3.5h-3.5" {...stroke} />
    </svg>
  );
}

export function Puzzle({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M9.5 4a1.6 1.6 0 0 1 3 0c0 .9.6 1.4 1.5 1.4H17v3c0 .9.5 1.5 1.4 1.5a1.6 1.6 0 0 1 0 3c-.9 0-1.4.6-1.4 1.5V19h-3c-.9 0-1.5.5-1.5 1.4a1.6 1.6 0 0 1-3 0c0-.9-.6-1.4-1.5-1.4H5v-3.1c-.9 0-1.4-.6-1.4-1.4H5c.9 0 1.5-.6 1.5-1.5V8.4H9c.9 0 1.5-.5 1.5-1.4Z"
        {...stroke}
      />
    </svg>
  );
}

export function Repeat({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5" {...stroke} />
      <path d="M20 3.5v5h-5" {...stroke} />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5" {...stroke} />
      <path d="M4 20.5v-5h5" {...stroke} />
    </svg>
  );
}

export function Phoenix({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 21c-3.5-1.5-6-4.6-6-8.6 0 0 2 1 3.4.4C8 11 7.5 8.5 9 6c.3 2 1.6 2.8 2.2 3.4C11 6.5 12 4 14.5 3c-.7 2 .2 3.2 1 4.5 1.2 1.9 1.8 3.3 1 5.6 1.2.2 2.4-.6 2.5-1.7.5 4.3-2.4 8.3-7 9.6Z" {...stroke} />
      <path d="M12 21v-5" {...stroke} />
    </svg>
  );
}

export function Search({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="11" cy="11" r="7" {...stroke} />
      <path d="m21 21-4.3-4.3" {...stroke} />
    </svg>
  );
}

export function Bolt({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M13 2 4 13.5h6L11 22l9-11.5h-6L13 2Z" {...stroke} />
    </svg>
  );
}

export function Check({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m5 12.5 4.5 4.5L19 6.5" {...stroke} />
    </svg>
  );
}

export function ArrowRight({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14M13 5l7 7-7 7" {...stroke} />
    </svg>
  );
}

export function Sparkle({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" {...stroke} strokeWidth="1.2" />
    </svg>
  );
}

export function Play({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" {...stroke} />
    </svg>
  );
}

export function Pause({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9 5v14M15 5v14" {...stroke} strokeWidth="2.2" />
    </svg>
  );
}

/* ── HVAC-specific glyphs ──────────────────────────────────── */

export function Snowflake({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 2v20M3.34 7 20.66 17M20.66 7 3.34 17" {...stroke} />
      <path d="M12 6 9.6 8.1M12 6l2.4 2.1M12 18l-2.4-2.1M12 18l2.4-2.1" {...stroke} />
      <path d="M6.7 8.6 4.2 8.1 4.6 5.6M17.3 8.6l2.5-.5-.4-2.5M6.7 15.4l-2.5.5.4 2.5M17.3 15.4l2.5.5-.4 2.5" {...stroke} />
    </svg>
  );
}

export function Flame({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 2.5c2.6 3.6 4.5 5.7 4.5 9a4.5 4.5 0 0 1-9 0c0-1.7.6-2.9 1.7-4C10.1 9 10.6 11 10.6 11s-.4-4.7 1.4-8.5Z" {...stroke} />
    </svg>
  );
}

export function Wrench({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20.5 4.5a4.2 4.2 0 0 1-5.4 5.4L6 19a2 2 0 0 1-2.9-2.9l9.1-9.1a4.2 4.2 0 0 1 5.4-5.4l-2.7 2.7.7 2.2 2.2.7 2.7-2.7Z" {...stroke} />
    </svg>
  );
}

export function Fan({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="2.1" {...stroke} />
      <path d="M12 9.9c-.9-2.9.1-5.8 1.6-6.9 1 1.9.6 4.9-1.6 6.9M14.1 12c2.9-.9 5.8.1 6.9 1.6-1.9 1-4.9.6-6.9-1.6M12 14.1c.9 2.9-.1 5.8-1.6 6.9-1-1.9-.6-4.9 1.6-6.9M9.9 12c-2.9.9-5.8-.1-6.9-1.6 1.9-1 4.9-.6 6.9 1.6" {...stroke} />
    </svg>
  );
}

export function Thermostat({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <circle cx="12" cy="12" r="5" {...stroke} />
      <path d="M12 12 14.6 9.4" {...stroke} />
      <path d="M12 1.6V3M12 21v1.4M1.6 12H3M21 12h1.4" {...stroke} />
    </svg>
  );
}

export function Headset({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" {...stroke} />
      <path d="M4 13.5A2 2 0 0 1 6 11.5h1V18H6a2 2 0 0 1-2-2v-2.5ZM20 13.5a2 2 0 0 0-2-2h-1V18h1a2 2 0 0 0 2-2v-2.5Z" {...stroke} />
      <path d="M20 16.5V18a3 3 0 0 1-3 3h-3" {...stroke} />
    </svg>
  );
}

export function Gauge({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3.6 17a9 9 0 1 1 16.8 0" {...stroke} />
      <path d="M12 14.6 16.2 9" {...stroke} />
      <circle cx="12" cy="14.6" r="1.7" {...stroke} />
    </svg>
  );
}

export function PhoneMissed({ size = 24, className = '' }) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 4h2.8l1.3 3.5-1.8 1.3a12 12 0 0 0 5.6 5.6l1.3-1.8L17.7 16v2.8A1.9 1.9 0 0 1 15.7 20.7 15.4 15.4 0 0 1 3.3 8.3 1.9 1.9 0 0 1 5 4Z" {...stroke} />
      <path d="M15 3.2 20 8.2M20 3.2 15 8.2" {...stroke} />
    </svg>
  );
}

