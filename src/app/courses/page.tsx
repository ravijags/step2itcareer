"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "@/lib/courses";
import { Grain, Slashes } from "@/components/Decor";
import { Icon } from "@/components/Icons";
import CourseArt from "@/components/CourseArt";
import CTABand from "@/components/inner/CTABand";

const categories = [
  { key: "all", label: "All programs" },
  { key: "AI & Data", label: "AI & Data" },
  { key: "Engineering", label: "Engineering" },
  { key: "Business", label: "Business" },
  { key: "Security", label: "Security" },
  { key: "Signature", label: "Signature" },
];

export default function CoursesPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? courses : courses.filter((c) => c.category === active);

  return (
    <div className="min-h-screen bg-soft">
      {/* Hero band */}
      <section className="relative z-10 cut-bottom bg-ink2 overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 text-center">
        <Grain />
        <Slashes side="left" tone="primary" opacity={0.09} height={700} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.35 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(59,91,255,0.16), transparent 55%)" }} />
        <div className="relative max-w-brand mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase mb-6"><Icon.Bolt size={12} /> All programs</span>
          <h1 className="text-[36px] sm:text-5xl md:text-[64px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-5">
            12 career-launching<br className="hidden sm:block" /> <span className="grad-text">programs</span>
          </h1>
          <p className="text-white/50 text-[15px] md:text-[17px] max-w-xl mx-auto">Live mentorship · Micro-batches of max 5 · Placement support until hired</p>
        </div>
      </section>

      {/* Filter pills — sticky under the nav */}
      <div className="sticky top-14 z-30 -mt-1" style={{ background: "rgba(247,246,255,0.85)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid #E6E3F7" }}>
        <div className="max-w-brand mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => {
            const on = active === cat.key;
            return (
              <button key={cat.key} onClick={() => setActive(cat.key)}
                className={`tap px-4 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-all ${on ? "text-white btn-grad" : "bg-white text-muted border border-[#E6E3F7] hover:text-ink"}`}>
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-brand mx-auto px-6 py-10 md:py-16">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <motion.a
                key={course.slug} layout href={`/courses/${course.slug}`}
                initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: "0 0 0 1.5px rgba(59,91,255,0.5), 0 28px 56px -12px rgba(59,91,255,0.28)" }}
                className="tap group flex flex-col bg-white rounded-[20px] overflow-hidden border border-[#E6E3F7]"
                style={{ boxShadow: "0 2px 12px rgba(14,21,38,0.06)" }}>
                <div className="transition-transform duration-500 group-hover:scale-[1.03] origin-center">
                  <CourseArt slug={course.slug} category={course.category} title={course.title} height="h-[170px] md:h-[190px]" />
                </div>
                <div className="p-5 flex flex-col flex-1 card-lift bg-white relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ background: `${course.categoryColor}18`, color: course.categoryColor }}>{course.category}</span>
                    <span className="text-[12px] text-muted font-semibold">{course.duration}</span>
                  </div>
                  <p className="text-[13.5px] text-muted leading-relaxed mb-4 flex-1 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#EEEBF8]">
                    <span className="text-[18px] font-extrabold text-ink tracking-tight">{course.feeDisplay}</span>
                    <span className="btn-grad text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && <div className="text-center py-20 text-muted">No programs found in this category.</div>}
      </div>

      <CTABand title="Not sure which program fits you?" sub="Book a free 1:1 counseling session — no pressure, just clarity." />
    </div>
  );
}
