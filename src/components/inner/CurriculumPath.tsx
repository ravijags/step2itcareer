"use client";
/* The ascent, vertical: phases are nodes on a rising line that lights up as you scroll. */
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function CurriculumPath({ items }: { items: { phase: string; title: string; description: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [lit, setLit] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", v => setLit(Math.min(items.length, Math.floor(v * (items.length + 0.999)))));
  return (
    <div ref={ref} className="relative pl-12">
      <div className="absolute left-[15px] top-3 bottom-3 w-[3px] rounded bg-[#DDDAF0]" />
      <motion.div className="absolute left-[15px] top-3 bottom-3 w-[3px] rounded origin-top" style={{ scaleY: scale, background: "var(--grad-primary)" }} />
      <div className="space-y-8">
        {items.map((it, i) => {
          const on = i < lit;
          return (
            <div key={i} className="relative">
              <motion.div
                className="absolute -left-12 top-0 w-[33px] h-[33px] rounded-full flex items-center justify-center text-[12px] font-extrabold"
                animate={{ background: on ? "linear-gradient(135deg,#3B5BFF,#7B5BFF)" : "#FFFFFF", color: on ? "#fff" : "#8B8BA0", borderColor: on ? "transparent" : "#C9C6E0", scale: on ? 1 : 0.92 }}
                transition={{ duration: 0.35 }} style={{ border: "2px solid" }}>
                {i + 1}
              </motion.div>
              <div className="text-[11px] font-extrabold text-primary tracking-[0.18em] uppercase mb-1">{it.phase}</div>
              <h4 className="text-[16px] md:text-[17px] font-extrabold text-ink mb-1 tracking-tight">{it.title}</h4>
              <p className="text-[14px] text-muted leading-relaxed">{it.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
