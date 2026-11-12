"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses, LEVELS, TRACKS, type Level, type Track } from "@/lib/courses";
import { Grain, Slashes } from "@/components/Decor";
import { Icon } from "@/components/Icons";
import CourseArt from "@/components/CourseArt";
import CTABand from "@/components/inner/CTABand";

const MotionLink = motion.create(Link);
const LEVEL_TABS: Level[] = ["career", "short"];

/* "I'm a…" — one tap puts the most relevant courses first. It sorts, it doesn't decide. */
type Who = "student" | "fresher" | "working" | "switching";
const WHO: Record<Who, { label: string; you: string; level: Level; line: string; first?: string[] }> = {
  student: { label: "Student", you: "a student",  level: "short", line: "Start small: 4–6 week courses that fit around college." },
  fresher: { label: "Fresher", you: "a fresher",  level: "career", line: "Get job-ready: career programs with an internship and certificate." },
  working: { label: "Working pro", you: "a working professional",  level: "short", line: "Upskill on weekends: short AI and coding courses that fit around your job.",
    first: ["ai-productivity", "ai-assisted-coding", "no-code-ai-automation", "python-for-ai"] },
  switching: { label: "Switching to IT", you: "switching to IT",  level: "career", line: "No CS background needed: these tracks start from zero.",
    first: ["ai-powered-data-analyst", "digital-marketing-ai", "ai-engineer-agents-automation", "mern-full-stack-ai"] },
};

export default function CoursesPage() {
  const [level, setLevel] = useState<Level>("career");
  const [track, setTrack] = useState<Track | "all">("all");
  const [who, setWho] = useState<Who | null>(null);

  // Read ?for= without useSearchParams so the page stays statically rendered.
  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get("for") as Who | null;
    if (f && f in WHO) { setWho(f); setLevel(WHO[f].level); }
  }, []);
  const pickWho = (w: Who) => {
    const next = who === w ? null : w;
    setWho(next); setTrack("all");
    if (next) setLevel(WHO[next].level);
    const url = next ? `/courses?for=${next}` : "/courses";
    window.history.replaceState(null, "", url);
  };

  const inLevel = courses.filter((c) => c.level === level);
  const tracksHere = (Object.keys(TRACKS) as Track[]).filter((t) => inLevel.some((c) => c.track === t));
  const byTrack = track === "all" ? inLevel : inLevel.filter((c) => c.track === track);
  const first = who && WHO[who].level === level ? WHO[who].first ?? [] : [];
  const filtered = first.length
    ? [...byTrack].sort((a, b) => (first.indexOf(a.slug) + 1 || 99) - (first.indexOf(b.slug) + 1 || 99))
    : byTrack;

  const pickLevel = (l: Level) => { setLevel(l); setTrack("all"); };

  return (
    <div className="min-h-screen bg-soft">
      {/* Hero band */}
      <section className="relative z-10 cut-bottom bg-ink2 overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 text-center">
        <Grain />
        <Slashes side="left" tone="primary" opacity={0.09} height={700} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.35 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(59,91,255,0.16), transparent 55%)" }} />
        <div className="relative max-w-brand mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase mb-6"><Icon.Bolt size={12} /> Every course is AI-native</span>
          <h1 className="text-[36px] sm:text-5xl md:text-[64px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-5">
            Start small. <span className="grad-text">Go all the way.</span>
          </h1>
          <p className="text-white/60 text-[15px] md:text-[17px] max-w-xl mx-auto">Start with a short course, or go all the way with a career program. They stack, so you only ever pay the difference to upgrade.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-1.5">
            <span className="w-full sm:w-auto text-[12px] text-white/50 font-semibold whitespace-nowrap mr-0.5">I&apos;m a…</span>
            {(Object.keys(WHO) as Who[]).map((w) => (
              <button key={w} onClick={() => pickWho(w)}
                className={`tap shrink-0 text-[12.5px] font-bold px-3.5 py-1.5 rounded-full border transition-colors ${who === w ? "bg-white text-ink border-white" : "text-white/80 bg-white/[0.06] border-white/[0.14] hover:bg-white/[0.12]"}`}>
                {WHO[w].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Level tabs + track pills — sticky under the nav */}
      <div className="sticky top-14 z-30 -mt-1" style={{ background: "rgba(247,246,255,0.9)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid #E6E3F7" }}>
        <div className="max-w-brand mx-auto px-6 pt-3 pb-2">
          <div className="grid grid-cols-2 gap-1 p-1 rounded-full bg-white border border-[#E6E3F7] max-w-[340px]">
            {LEVEL_TABS.map((l) => {
              const on = level === l;
              return (
                <button key={l} onClick={() => pickLevel(l)} className="relative tap py-2 rounded-full text-[12.5px] sm:text-[13px] font-extrabold whitespace-nowrap">
                  {on && <motion.span layoutId="lvl" className="absolute inset-0 rounded-full btn-grad" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />}
                  <span className={`relative ${on ? "text-white" : "text-muted"}`}>{l === "career" ? "Career programs" : "Short courses"}</span>
                </button>
              );
            })}
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pt-2">
            {(["all", ...tracksHere] as (Track | "all")[]).map((tk) => {
              const on = track === tk;
              return (
                <button key={tk} onClick={() => setTrack(tk)}
                  className={`tap px-3.5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap transition-colors ${on ? "bg-ink text-white" : "bg-white text-muted border border-[#E6E3F7] hover:text-ink"}`}>
                  {tk === "all" ? "All" : TRACKS[tk].label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-brand mx-auto px-6 py-8 md:py-14">
        {who && WHO[who].level === level ? (
          <div className="mb-5 flex items-center justify-between gap-3 rounded-[14px] px-4 py-3 bg-white border border-[#E6E3F7]">
            <p className="text-[13.5px] text-ink"><span className="font-extrabold">If you&apos;re {WHO[who].you}:</span> {WHO[who].line}</p>
            <button onClick={() => pickWho(who)} className="shrink-0 text-[12px] font-bold text-primary">Clear</button>
          </div>
        ) : (
          <p className="text-[13px] text-muted mb-5"><span className="font-extrabold text-ink">{LEVELS[level].label}s</span> · {LEVELS[level].blurb}</p>
        )}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <MotionLink
                key={course.slug} layout href={`/courses/${course.slug}`}
                initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: "0 0 0 1.5px rgba(59,91,255,0.5), 0 28px 56px -12px rgba(59,91,255,0.28)" }}
                className="tap group flex flex-col bg-white rounded-[20px] overflow-hidden border border-[#E6E3F7]"
                style={{ boxShadow: "0 2px 12px rgba(14,21,38,0.06)" }}>
                <div className="transition-transform duration-500 group-hover:scale-[1.03] origin-center">
                  <CourseArt slug={course.slug} title={course.title} tag={course.hot ? "Trending" : LEVELS[course.level].short} height="h-[170px] md:h-[190px]" />
                </div>
                <div className="p-5 flex flex-col flex-1 card-lift bg-white relative">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full truncate" style={{ background: `${course.categoryColor}18`, color: course.categoryColor }}>{course.category}</span>
                    <span className="text-[12px] text-muted font-semibold whitespace-nowrap">{course.duration}</span>
                  </div>
                  <p className="text-[13.5px] text-muted leading-relaxed mb-3 line-clamp-3">{course.description}</p>
                  <p className="text-[12.5px] text-ink font-semibold leading-snug mb-4 flex-1"><span className="text-primary font-extrabold">You&apos;ll build:</span> {course.projects.slice(0, 2).join(" · ")}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#EEEBF8]">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-ink"><Icon.Medal size={14} className="text-primary" /> Certificate{course.level === "career" ? " + internship" : ""}</span>
                    <span className="btn-grad text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
                  </div>
                </div>
              </MotionLink>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CTABand title="Still deciding? Let's just talk." sub="A free 15-minute call with a mentor — we'll help you pick a course and level. No pressure." />
    </div>
  );
}
