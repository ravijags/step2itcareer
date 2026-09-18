/* One icon voice for the entire site. Stroke 1.8, round caps, 24 viewBox.
   Use <Icon.Users size={18} className="text-primary" /> — colour comes from currentColor. */

type P = { size?: number; className?: string; strokeWidth?: number; style?: React.CSSProperties };

function base({ size = 20, className = "", strokeWidth = 1.8, style }: P) {
  return {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    className, style, "aria-hidden": true,
  };
}

export const Icon = {
  Users: (p: P) => (<svg {...base(p)}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  Route: (p: P) => (<svg {...base(p)}><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12"/></svg>),
  Calendar: (p: P) => (<svg {...base(p)}><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 15h2M14 15h2"/></svg>),
  Trophy: (p: P) => (<svg {...base(p)}><path d="M6 9H4a2 2 0 0 1-2-2V5h4"/><path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/><path d="M6 4h12v6a6 6 0 0 1-12 0V4z"/><path d="M12 16v4M8 21h8"/></svg>),
  Refresh: (p: P) => (<svg {...base(p)}><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>),
  Target: (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>),
  School: (p: P) => (<svg {...base(p)}><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v6"/></svg>),
  Briefcase: (p: P) => (<svg {...base(p)}><rect x="3" y="7" width="18" height="13" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>),
  Trend: (p: P) => (<svg {...base(p)}><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>),
  Star: (p: P) => (<svg {...base(p)}><path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 21l1.2-6.5L2.5 9.9l6.6-.9L12 3z"/></svg>),
  Video: (p: P) => (<svg {...base(p)}><rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 10l5-3v10l-5-3"/></svg>),
  Bolt: (p: P) => (<svg {...base(p)}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>),
  ArrowRight: (p: P) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  ArrowUpRight: (p: P) => (<svg {...base(p)}><path d="M7 17L17 7M9 7h8v8"/></svg>),
  ChevronDown: (p: P) => (<svg {...base(p)}><path d="M6 9l6 6 6-6"/></svg>),
  Check: (p: P) => (<svg {...base(p)}><path d="M5 12l4.5 4.5L19 7"/></svg>),
  Quote: (p: P) => (<svg {...base(p)} fill="currentColor" stroke="none"><path d="M6.5 11H4a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3h.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2.5zm11 0H15a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3h.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2.5z"/></svg>),
  Hand: (p: P) => (<svg {...base(p)}><path d="M8 13V5a1.5 1.5 0 0 1 3 0v6"/><path d="M11 11V4a1.5 1.5 0 0 1 3 0v7"/><path d="M14 11V6a1.5 1.5 0 0 1 3 0v8"/><path d="M8 13l-1.7-2.3a1.6 1.6 0 0 0-2.6 1.9L7 18a6 6 0 0 0 10 1.5V14"/></svg>),
  Flame: (p: P) => (<svg {...base(p)}><path d="M12 22c4 0 7-3 7-7 0-3.5-2.5-5.5-3.5-8.5C14 9 13 10 12.5 12c-1-2-1-4.5-.5-7C8 8 5 11 5 15c0 4 3 7 7 7z"/></svg>),
  Confetti: (p: P) => (<svg {...base(p)}><path d="M4 20l4-12 8 8-12 4z"/><path d="M14 4l1 2M19 6l-2 1M20 12l-2-1M9 4l.5 2"/></svg>),
  Phone: (p: P) => (<svg {...base(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>),
  WhatsApp: (p: P) => (<svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="currentColor" className={p.className} style={p.style} aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12.05 21.8h-.01a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 0 1-1.5-5.3c0-5.4 4.4-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.9-9.9 9.9zm8.4-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4z"/></svg>),
  Close: (p: P) => (<svg {...base(p)}><path d="M18 6L6 18M6 6l12 12"/></svg>),
  Brain: (p: P) => (<svg {...base(p)}><path d="M9.5 3a3 3 0 0 0-3 3v.5A3.5 3.5 0 0 0 4 10a3.5 3.5 0 0 0 1.5 5.9V17a3 3 0 0 0 6 0V6a3 3 0 0 0-2-3z"/><path d="M14.5 3a3 3 0 0 1 3 3v.5A3.5 3.5 0 0 1 20 10a3.5 3.5 0 0 1-1.5 5.9V17a3 3 0 0 1-6 0V6a3 3 0 0 1 2-3z"/></svg>),
  Link: (p: P) => (<svg {...base(p)}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>),
  Message: (p: P) => (<svg {...base(p)}><path d="M21 12a8 8 0 0 1-8 8H8l-4 3v-3.6A8 8 0 1 1 21 12z"/><path d="M8 11h8M8 14h5"/></svg>),
  ChartBar: (p: P) => (<svg {...base(p)}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>),
  Layers: (p: P) => (<svg {...base(p)}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>),
  Database: (p: P) => (<svg {...base(p)}><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>),
  Search: (p: P) => (<svg {...base(p)}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>),
  Clipboard: (p: P) => (<svg {...base(p)}><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h4"/></svg>),
  Code: (p: P) => (<svg {...base(p)}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>),
  Cloud: (p: P) => (<svg {...base(p)}><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7z"/></svg>),
  Robot: (p: P) => (<svg {...base(p)}><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="14" r="1.2" fill="currentColor"/><circle cx="15" cy="14" r="1.2" fill="currentColor"/><path d="M2 13v3M22 13v3"/></svg>),
  Rocket: (p: P) => (<svg {...base(p)}><path d="M12 15c-3 0-5-2-5-2s1-7 5-10c4 3 5 10 5 10s-2 2-5 2z"/><path d="M7 13l-3 3 3 1 1 3 3-3M12 8h.01"/></svg>),
  Ruler: (p: P) => (<svg {...base(p)}><path d="M3 17l14-14 4 4L7 21l-4-4z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/></svg>),
  Globe: (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>),
  Calculator: (p: P) => (<svg {...base(p)}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M12 12h2M16 12h0M8 16h2M12 16h2M16 16h0"/></svg>),
  Flask: (p: P) => (<svg {...base(p)}><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M8 15h8"/></svg>),
  Shield: (p: P) => (<svg {...base(p)}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>),
  Wrench: (p: P) => (<svg {...base(p)}><path d="M14 7a4 4 0 0 0 5.4 5.4L21 14l-7 7-1.6-1.6A4 4 0 0 0 7 14l-4-4 3-3 4 4a4 4 0 0 0 5.4-5.4L14 7z"/></svg>),
  Lock: (p: P) => (<svg {...base(p)}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>),
  Plug: (p: P) => (<svg {...base(p)}><path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8z"/><path d="M12 17v4"/></svg>),
  Mobile: (p: P) => (<svg {...base(p)}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>),
  Mail: (p: P) => (<svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>),
  Book: (p: P) => (<svg {...base(p)}><path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V4z"/></svg>),
  Coin: (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5a2.5 2.5 0 0 0-2.5-1.5c-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2a2.5 2.5 0 0 1-2.5-1.5M12 6v2M12 16v2"/></svg>),
  Palette: (p: P) => (<svg {...base(p)}><path d="M12 3a9 9 0 0 0 0 18h1a2 2 0 0 0 1.5-3.3 2 2 0 0 1 1.5-3.2H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3z"/><circle cx="7.5" cy="12" r="1" fill="currentColor"/><circle cx="10" cy="7.5" r="1" fill="currentColor"/><circle cx="15" cy="7.5" r="1" fill="currentColor"/></svg>),
  Atom: (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="1.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/></svg>),
  Settings: (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>),
  Box: (p: P) => (<svg {...base(p)}><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>),
  Eye: (p: P) => (<svg {...base(p)}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>),
  Bulb: (p: P) => (<svg {...base(p)}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.1 1 1.8V16h5v-.3c.1-.7.4-1.3 1-1.8A6 6 0 0 0 12 3z"/></svg>),
  Gamepad: (p: P) => (<svg {...base(p)}><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r="1" fill="currentColor"/><circle cx="18.5" cy="13.5" r="1" fill="currentColor"/></svg>),
  Puzzle: (p: P) => (<svg {...base(p)}><path d="M10 3a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v3h1a2 2 0 1 1 0 4h-1v3a2 2 0 0 1-2 2h-3v-1a2 2 0 1 0-4 0v1H5a2 2 0 0 1-2-2v-3h1a2 2 0 1 0 0-4H3V8a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2z"/></svg>),
  Seedling: (p: P) => (<svg {...base(p)}><path d="M12 21v-8"/><path d="M12 13c0-4 3-7 8-7 0 4-3 7-8 7z"/><path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z"/></svg>),
  Family: (p: P) => (<svg {...base(p)}><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="7" r="2.5"/><circle cx="12" cy="13" r="2"/><path d="M3 20v-2a3 3 0 0 1 3-3h2M21 20v-2a3 3 0 0 0-3-3h-2M9 21v-1a3 3 0 0 1 6 0v1"/></svg>),
  Medal: (p: P) => (<svg {...base(p)}><circle cx="12" cy="14" r="6"/><path d="M12 11v3l2 1"/><path d="M8 3l2 6M16 3l-2 6M8 3h8"/></svg>),
  Leaf: (p: P) => (<svg {...base(p)}><path d="M4 20c0-9 5-16 16-16 0 11-7 16-16 16z"/><path d="M4 20c4-4 8-8 12-12"/></svg>),
  Check2: (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 5-5"/></svg>),
  Sparkle: (p: P) => (<svg {...base(p)}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"/></svg>),
};

/* Duotone container: the icon sits in a rounded square with a soft gradient wash.
   tone="primary" | "accent" */
export function IconTile({ children, tone = "primary", size = 40, dark = false }: {
  children: React.ReactNode; tone?: "primary" | "accent"; size?: number; dark?: boolean;
}) {
  const isP = tone === "primary";
  const bg = dark
    ? isP ? "rgba(139,164,255,0.14)" : "rgba(255,154,108,0.16)"
    : isP ? "rgba(59,91,255,0.12)" : "rgba(255,122,61,0.14)";
  const wash = isP ? "rgba(59,91,255,0.22)" : "rgba(255,122,61,0.24)";
  const color = dark ? (isP ? "#8BA4FF" : "#FF9A6C") : (isP ? "#3B5BFF" : "#FF7A3D");
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.3, background: bg, color, position: "relative" }}
      className="flex items-center justify-center shrink-0">
      <div style={{ position: "absolute", inset: 0, borderRadius: size * 0.3, background: `linear-gradient(135deg, ${wash}, transparent 70%)` }} />
      <div className="relative">{children}</div>
    </div>
  );
}
