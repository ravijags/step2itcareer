"use client";
/* Interactive roadmap: tap a step to open it, tick it off when done. Progress is saved in this
   browser only (localStorage, wrapped in try/catch so private mode never breaks the page). */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Roadmap } from "@/lib/roadmaps";
import { Icon } from "@/components/Icons";

export default function RoadmapView({ r }: { r: Roadmap }) {
  const key = `s2it-roadmap-${r.slug}`;
  const [done, setDone] = useState<number[]>([]);
  const [open, setOpen] = useState<number | null>(0);

  // Saved progress lives in this browser only, so it's read after mount (not during server render).
  useEffect(() => {
    try {
      const v = localStorage.getItem(key);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (v) setDone(JSON.parse(v));
    } catch { /* private mode or blocked storage: start fresh */ }
  }, [key]);
  const toggle = (i: number) => {
    const next = done.includes(i) ? done.filter((d) => d !== i) : [...done, i];
    setDone(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* ignore */ }
  };
  const pct = Math.round((done.length / r.steps.length) * 100);

  return (
    <div>
      <div className="mb-6 rounded-[16px] bg-white border border-[#E6E3F7] px-4 py-3.5 flex items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between text-[12.5px] font-bold text-ink mb-1.5"><span>Your progress</span><span>{done.length} of {r.steps.length} steps</span></div>
          <div className="h-2 rounded-full bg-[#EEEBF8] overflow-hidden"><div className="h-full rounded-full transition-all duration-300" style={{ width: `${pct}%`, background: r.color }} /></div>
        </div>
      </div>

      <ol className="relative pl-10">
        <span aria-hidden className="absolute left-[15px] top-3 bottom-3 w-[3px] rounded bg-[#DDDAF0]" />
        {r.steps.map((s, i) => {
          const isDone = done.includes(i);
          const isOpen = open === i;
          return (
            <li key={s.title} className="relative mb-3">
              <button type="button" onClick={() => toggle(i)} aria-label={isDone ? `Mark "${s.title}" not done` : `Mark "${s.title}" done`}
                className="absolute -left-10 top-3 w-[33px] h-[33px] rounded-full flex items-center justify-center text-[12px] font-extrabold transition-colors"
                style={isDone ? { background: r.color, color: "#fff" } : { background: "#fff", color: "#8B8BA0", border: "2px solid #C9C6E0" }}>
                {isDone ? <Icon.Check size={16} strokeWidth={2.6} /> : i + 1}
              </button>
              <div className={`rounded-[16px] bg-white border transition-colors ${isOpen ? "border-primary/40" : "border-[#E6E3F7]"}`}>
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left">
                  <span className="min-w-0">
                    <span className={`block text-[15px] font-extrabold leading-snug ${isDone ? "text-muted line-through decoration-2" : "text-ink"}`}>{s.title}</span>
                    <span className="block text-[12px] text-muted mt-0.5">{s.time} · in our course: {s.month}</span>
                  </span>
                  <Icon.ChevronDown size={18} className="shrink-0 text-primary transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "none" }} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <div className="px-4 pb-4 -mt-1">
                        <p className="text-[14px] text-[#4B5563] leading-relaxed">{s.what}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.free && (
                            <a href={s.free.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12.5px] font-bold px-3 py-1.5 rounded-full bg-primary/[0.08] text-primary hover:bg-primary/[0.14]">
                              <Icon.Book size={14} /> Free: {s.free.label} <Icon.ArrowUpRight size={12} />
                            </a>
                          )}
                          <button type="button" onClick={() => toggle(i)} className="inline-flex items-center gap-1.5 text-[12.5px] font-bold px-3 py-1.5 rounded-full border border-[#E6E3F7] text-ink hover:border-primary">
                            <Icon.Check size={14} /> {isDone ? "Mark not done" : "Mark done"}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-2 text-[12px] text-muted">Progress is saved on this device only.</p>
    </div>
  );
}
