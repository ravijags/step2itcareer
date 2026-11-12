"use client";
/* Hero program showcase (v4.1).
   Phones: Instagram-style stories — progress bars, auto-advance, tap right/left, hold to pause.
   Desktop: a stacked card deck that slides (never crossfades), pauses on hover, with dots.
   Both read the same index from the hero, so the "Train for roles like …" pill stays in sync. */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCourseBySlug } from "@/lib/courses";
import { Icon } from "@/components/Icons";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const STORY_MS = 4500;

export type HeroProgram = {
  slug: string; role: string; hook: string; build: string[]; tools: string[]; range: string; color: string;
};

export const HERO_PROGRAMS: HeroProgram[] = [
  { slug: "ai-engineer-agents-automation", role: "AI Engineer", color: "#5B7BFF",
    hook: "Build AI agents that actually do the work",
    build: ["A chatbot that answers from your own documents", "A multi-agent research assistant", "An n8n automation for a real business"],
    tools: ["Python", "LangChain", "n8n"], range: "₹5–10 LPA" },
  { slug: "ai-powered-data-analyst", role: "Data Analyst", color: "#22B8D6",
    hook: "Turn messy data into decisions people trust",
    build: ["A live Power BI sales dashboard", "SQL analysis on real company data", "AI-drafted insight reports you verify"],
    tools: ["Excel", "SQL", "Power BI"], range: "₹3.5–7 LPA" },
  { slug: "mern-full-stack-ai", role: "Full Stack Developer", color: "#FF7A3D",
    hook: "Ship complete web apps, front to back",
    build: ["A full e-commerce app with payments", "A React dashboard on your own API", "An AI feature inside your app"],
    tools: ["React", "Node.js", "MongoDB"], range: "₹4–8 LPA" },
  { slug: "mobile-app-developer-ai", role: "App Developer", color: "#22C58B",
    hook: "Build apps people keep on their phones",
    build: ["An AI chat assistant app", "A food-ordering app with login", "Your own app on the Play Store"],
    tools: ["Flutter", "React Native", "Firebase"], range: "₹4–7 LPA" },
  { slug: "cybersecurity-ai-security", role: "Cybersecurity Analyst", color: "#F0569A",
    hook: "Catch attackers before they get in",
    build: ["A network scan and vulnerability report", "A web app penetration test (lab)", "A real SOC alert investigation"],
    tools: ["Kali Linux", "Wireshark", "Burp Suite"], range: "₹4–7 LPA" },
];

const duration = (slug: string) => getCourseBySlug(slug)?.duration.toLowerCase() ?? "";
const title = (slug: string) => getCourseBySlug(slug)?.title ?? "";

/* ───────────── Phones: stories ───────────── */
export function HeroStories({ index, setIndex }: { index: number; setIndex: (i: number) => void }) {
  const n = HERO_PROGRAMS.length;
  const p = HERO_PROGRAMS[index];
  const [paused, setPaused] = useState(false);
  // A press only counts as a tap/hold while the finger stays put. Once it moves more than
  // 10px it's a scroll: unpause and ignore it, so scrolling past the card never skips a story.
  const press = useRef<{ x: number; y: number; at: number; moved: boolean } | null>(null);

  const go = (d: number) => setIndex((index + d + n) % n);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    press.current = { x: e.clientX, y: e.clientY, at: Date.now(), moved: false };
    setPaused(true);
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const p = press.current;
    if (p && !p.moved && Math.hypot(e.clientX - p.x, e.clientY - p.y) > 10) { p.moved = true; setPaused(false); }
  };
  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const p = press.current;
    press.current = null;
    setPaused(false);
    if (!p || p.moved || Date.now() - p.at > 280) return; // a scroll or a hold: no skip
    const r = e.currentTarget.getBoundingClientRect();
    go(e.clientX - r.left < r.width * 0.3 ? -1 : 1);
  };
  const onCancel = () => { press.current = null; setPaused(false); };

  return (
    <div
      className="relative w-full max-w-[420px] mx-auto rounded-[22px] overflow-hidden select-none text-left"
      style={{ touchAction: "pan-y", background: `linear-gradient(155deg, ${p.color}40 0%, rgba(16,22,48,0.92) 55%)`, border: "1px solid rgba(255,255,255,0.12)", boxShadow: `0 18px 44px -18px ${p.color}88, inset 0 1px 0 rgba(255,255,255,0.1)`, transition: "background 400ms ease, box-shadow 400ms ease" }}
      onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onCancel} onPointerCancel={onCancel}
      role="group" aria-roledescription="carousel" aria-label="Career programs"
    >
      {/* progress bars */}
      <div className="flex gap-1 px-4 pt-3">
        {HERO_PROGRAMS.map((_, i) => (
          <div key={i} className="h-[3px] flex-1 rounded-full bg-white/20 overflow-hidden">
            {i < index && <div className="h-full w-full bg-white" />}
            {i === index && (
              <div key={`f${index}`} className="story-fill h-full w-full bg-white" data-paused={paused}
                style={{ "--story-ms": `${STORY_MS}ms` } as React.CSSProperties} onAnimationEnd={() => go(1)} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div key={p.slug} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25, ease: EASE }} className="px-4 pt-3 pb-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em]" style={{ color: p.color }}>{p.role}</span>
            <span className="text-[11px] font-semibold text-white/55">{duration(p.slug)} · live · max 5</span>
          </div>
          <div className="mt-1.5 text-[19px] font-extrabold text-white leading-[1.2] tracking-[-0.01em] min-h-[46px]">{p.hook}</div>
          <div className="mt-2.5 flex gap-1.5">
            {p.tools.map((t) => (
              <span key={t} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/[0.08] border border-white/10 text-white/80">{t}</span>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11.5px] text-white/55">Starts around <span className="font-extrabold text-white">{p.range}</span></span>
            <Link href={`/courses/${p.slug}`} onPointerDown={(e) => e.stopPropagation()} onPointerUp={(e) => e.stopPropagation()}
              className="tap inline-flex items-center gap-1 text-[12.5px] font-extrabold text-white px-3 py-1.5 rounded-full bg-white/[0.12]">
              Explore <Icon.ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ───────────── Desktop: stacked deck ───────────── */
export function HeroDeck({ index, setIndex }: { index: number; setIndex: (i: number) => void }) {
  const n = HERO_PROGRAMS.length;
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !window.matchMedia("(min-width: 1024px)").matches) return;
    const t = setTimeout(() => setIndex((index + 1) % n), 5000);
    return () => clearTimeout(t);
  }, [index, paused, n, setIndex]);

  const order = [0, 1, 2].map((k) => HERO_PROGRAMS[(index + k) % n]);
  const front = order[0];

  return (
    <div className="relative w-full max-w-[420px] mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* colour glow follows the active program */}
      <div aria-hidden className="absolute -inset-16 pointer-events-none rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle at 50% 45%, ${front.color}55, transparent 62%)`, transition: "background 600ms ease" }} />

      <div className="relative h-[372px]">
        <AnimatePresence initial={false}>
          {order.map((p, k) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 36, scale: 0.9 }}
              animate={{ opacity: 1, y: k * 16, scale: 1 - k * 0.05, x: 0, rotate: k === 0 ? 0 : k === 1 ? 2 : -2.5 }}
              exit={{ opacity: 0, x: -70, rotate: -4, transition: { duration: 0.28, ease: EASE } }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-x-0 top-0 rounded-[22px] bg-white overflow-hidden"
              style={{ zIndex: 10 - k, boxShadow: k === 0 ? "0 28px 64px rgba(0,0,0,0.38)" : "0 10px 30px rgba(0,0,0,0.25)" }}>
              <div className="h-[5px]" style={{ background: p.color }} />
              {k === 0 ? <DeckFace p={p} /> : <div className="h-[340px]" aria-hidden />}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative mt-10 flex items-center justify-center gap-2">
        {HERO_PROGRAMS.map((p, i) => (
          <button key={p.slug} onClick={() => setIndex(i)} aria-label={`Show ${p.role}`}
            className="h-2 rounded-full transition-all duration-250"
            style={{ width: i === index ? 22 : 8, background: i === index ? p.color : "rgba(255,255,255,0.25)" }} />
        ))}
      </div>
    </div>
  );
}

function DeckFace({ p }: { p: HeroProgram }) {
  return (
    <div className="p-6 h-[340px] flex flex-col">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full" style={{ color: p.color, background: `${p.color}18` }}>{p.role}</span>
        <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />{duration(p.slug)} · live · max 5
        </span>
      </div>
      <div className="mt-3 text-[13px] font-bold text-muted truncate">{title(p.slug)}</div>
      <div className="mt-1 text-[21px] font-extrabold text-ink leading-[1.2] tracking-[-0.02em]">{p.hook}</div>
      <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-muted">You&apos;ll build</div>
      <ul className="mt-1.5 space-y-1.5">
        {p.build.map((b) => (
          <li key={b} className="flex gap-2 text-[13px] text-ink/80 font-semibold leading-snug">
            <Icon.Check size={15} className="shrink-0 mt-0.5" style={{ color: p.color }} />{b}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4 border-t border-line flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] text-muted">Typical starting range</div>
          <div className="text-[17px] font-extrabold text-ink tracking-tight">{p.range}</div>
        </div>
        <Link href={`/courses/${p.slug}`} className="btn-grad tap inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-white text-[12.5px] font-extrabold">
          Explore <Icon.ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
