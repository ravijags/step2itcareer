"use client";
/* Shared pieces for the daily question and the Job-Ready Check. */
import { useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/Icons";
import { SKILLS, msToNext, type Question } from "@/lib/daily";
import { dismissMilestone } from "@/lib/practice";

const LETTERS = ["A", "B", "C", "D"];
export const WA_NUMBER = "919936609430";

/* ── The question: what you asked, what the AI wrote, and four answers. ── */
export function QuestionCard({ q, label, picked, onPick }: {
  q: Question; label: string; picked: number | null; onPick: (i: number) => void;
}) {
  const sk = SKILLS[q.skill];
  const done = picked !== null;
  const [fresh, setFresh] = useState(false); // answered just now (not a saved answer from earlier)
  const resultRef = useRef<HTMLDivElement>(null);
  const pick = (i: number) => {
    setFresh(true);
    onPick(i);
    // Glide down so the verdict and explanation are on screen, not just below the fold.
    setTimeout(() => {
      const el = resultRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      if (el.getBoundingClientRect().bottom > window.innerHeight - 90) window.scrollTo({ top, behavior: "smooth" });
    }, 180);
  };
  return (
    <div className="bg-white rounded-[20px] border border-[#E6E3F7] card-lift shadow-deep overflow-hidden">
      <div className="px-5 md:px-7 pt-5 md:pt-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-[0.12em] text-white" style={{ background: sk.color }}>{sk.name}</span>
          <span className="text-[12px] font-bold text-muted">{label}</span>
        </div>
        <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-muted">You asked the AI</p>
        <p className="mt-1 text-[16px] md:text-[17px] font-bold text-ink leading-snug">{q.task}</p>
      </div>

      <div className="mx-3 md:mx-5 mt-4 rounded-[16px] bg-ink2 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.07]">
          <Icon.Robot size={14} className="text-[#FF9A6C]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/50">The AI wrote</span>
        </div>
        <pre className="px-4 py-3.5 overflow-x-auto text-[13px] md:text-[13.5px] leading-relaxed text-[#E6E8F5] font-mono whitespace-pre">{q.code}</pre>
      </div>

      <div className="px-5 md:px-7 pt-5 pb-5 md:pb-6">
        <p className="text-[17px] md:text-[19px] font-extrabold text-ink tracking-[-0.01em] leading-snug">{q.ask}</p>
        <div className="mt-4 grid gap-2.5" role="group" aria-label="Answers">
          {q.options.map((o, i) => {
            const right = done && i === q.answer;
            const wrong = done && i === picked && i !== q.answer;
            return (
              <button key={o} type="button" disabled={done} onClick={() => pick(i)}
                className={`relative tap text-left flex items-start gap-3 w-full px-4 py-3.5 rounded-[14px] border-2 transition-colors ${
                  right ? "border-[#16A34A] bg-[#F0FDF4]" : wrong ? "border-[#EF4444] bg-[#FEF2F2]" : done ? "border-[#EEF0F6] bg-white opacity-60" : "border-[#E6E3F7] bg-white hover:border-primary/50 hover:bg-primary-tint"
                }`}>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-extrabold ${
                  right ? "bg-[#16A34A] text-white" : wrong ? "bg-[#EF4444] text-white" : "bg-soft text-ink"
                }`}>{right ? <Icon.Check size={14} /> : wrong ? <Icon.Close size={13} /> : LETTERS[i]}</span>
                <span className="pt-0.5 text-[14.5px] font-semibold text-ink leading-snug">{o}</span>
                {right && fresh && picked === q.answer && <Burst />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {done && (
            <motion.div ref={resultRef} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 rounded-[16px] bg-soft border border-[#E6E3F7] p-4 md:p-5">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.14em]" style={{ color: picked === q.answer ? "#16A34A" : "#EF4444" }}>
                {picked === q.answer ? "You caught it" : "The AI got you this time"}
              </p>
              <p className="mt-1.5 text-[14.5px] text-ink leading-relaxed">{q.why}</p>
              <Link href={sk.sheet} className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-extrabold text-primary">
                Free {sk.name} cheat sheet <Icon.ArrowRight size={14} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Share: WhatsApp first (that's where our students are), then the phone's own share sheet, then copy. ── */
export function ShareRow({ text, path, dark = false }: { text: string; path: string; dark?: boolean }) {
  const full = () => `${text}\n${window.location.origin}${path}`;
  const wa = () => window.open(`https://wa.me/?text=${encodeURIComponent(full())}`, "_blank", "noopener,noreferrer");
  const more = async () => {
    try {
      if (navigator.share) await navigator.share({ text: full() });
      else await navigator.clipboard.writeText(full());
    } catch { /* closed or blocked: nothing to do */ }
  };
  return (
    <div className="flex flex-col sm:flex-row gap-2.5">
      <button type="button" onClick={wa} className="tap inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] text-white font-extrabold text-[14px]">
        <Icon.WhatsApp size={17} /> Challenge a friend
      </button>
      <button type="button" onClick={more} className={`tap inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-[14px] border ${dark ? "border-white/15 text-white bg-white/[0.06]" : "border-[#E6E3F7] text-ink bg-white"}`}>
        <Icon.Link size={16} /> Share or copy
      </button>
    </div>
  );
}

/* ── Countdown to the next question (midnight, India time). ── */
const everySecond = (cb: () => void) => { const t = setInterval(cb, 1000); return () => clearInterval(t); };
export function Countdown({ className = "" }: { className?: string }) {
  const ms = useSyncExternalStore(everySecond, () => Math.floor(msToNext() / 1000), () => null);
  if (ms === null) return <span className={className}>--:--:--</span>;
  const h = Math.floor(ms / 3600), m = Math.floor((ms % 3600) / 60), s = ms % 60;
  const pad = (x: number) => String(x).padStart(2, "0");
  return <span className={`tabular-nums ${className}`}>{pad(h)}:{pad(m)}:{pad(s)}</span>;
}

/* ── The one moment we suggest a mentor. Honest copy, one tap, never shown again once used or closed. ── */
export function MilestoneCard({ kind }: { kind: "streak" | "check" }) {
  const open = () => {
    dismissMilestone();
    window.dispatchEvent(new CustomEvent("openLeadPopup", { detail: {
      program: "Free 2-week plan",
      heading: "Your free 2-week plan",
      sub: "A mentor looks at what you've practised and sends a plan on WhatsApp. No obligation.",
      cta: "Send my plan",
    } }));
  };
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
      className="relative rounded-[20px] p-5 md:p-6 text-white overflow-hidden" style={{ background: "var(--grad-primary)" }}>
      <button type="button" onClick={dismissMilestone} aria-label="Close" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center">
        <Icon.Close size={14} />
      </button>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/70">{kind === "streak" ? "7 days in a row" : "7+ on the Job-Ready Check"}</p>
      <p className="mt-1.5 text-[20px] md:text-[22px] font-extrabold leading-tight pr-8">You&apos;re putting in the work. Want a plan for what&apos;s next?</p>
      <p className="mt-1.5 text-[14px] text-white/75">A mentor turns your results into a free 2-week plan, sent on WhatsApp.</p>
      <button type="button" onClick={open} className="tap mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-extrabold text-[14px]">
        Get my free plan <Icon.ArrowRight size={15} />
      </button>
    </motion.div>
  );
}

export function Skeleton({ h = 520 }: { h?: number }) {
  return <div className="rounded-[20px] bg-white/[0.06] border border-white/10 animate-pulse" style={{ height: h }} aria-hidden />;
}

/* A small confetti burst from the right answer. 18 pieces, under a second, skipped for reduced motion. */
const BURST_COLORS = ["#3B5BFF", "#7B5BFF", "#FF7A3D", "#FF5E7A", "#16A34A", "#FACC15"];
function Burst() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <span aria-hidden className="pointer-events-none absolute left-7 top-1/2 z-10">
      {Array.from({ length: 18 }, (_, k) => {
        const a = (k / 18) * Math.PI * 2 + (k % 3) * 0.2;
        const r = 46 + (k % 4) * 16;
        return (
          <motion.span key={k} className="absolute block rounded-[2px]"
            style={{ width: k % 2 ? 6 : 8, height: k % 2 ? 10 : 6, background: BURST_COLORS[k % BURST_COLORS.length] }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
            animate={{ x: Math.cos(a) * r, y: Math.sin(a) * r + 18, opacity: 0, rotate: (k % 2 ? 1 : -1) * 220, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} />
        );
      })}
    </span>
  );
}
