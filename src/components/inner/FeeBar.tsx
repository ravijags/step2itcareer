"use client";
/* Phones only: once the hero's own buttons scroll away, a slim bar above the tab dock keeps
   "Get fee on WhatsApp" one thumb-tap away for this course. */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/Icons";

export default function FeeBar({ title, href }: { title: string; href: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const marker = document.getElementById("hero-actions-end");
    if (!marker) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(marker);
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed inset-x-3 z-30 flex items-center gap-3 rounded-[18px] pl-4 pr-1.5 py-1.5"
          style={{
            bottom: "calc(74px + env(safe-area-inset-bottom, 0px))",
            background: "rgba(12,19,40,0.95)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 14px 34px rgba(7,11,24,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/45">Fee + next batch</div>
            <div className="text-[13px] font-bold text-white truncate">{title}</div>
          </div>
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="tap shrink-0 inline-flex items-center gap-1.5 h-11 px-4 rounded-[14px] bg-[#16A34A] text-white text-[13px] font-extrabold">
            <Icon.WhatsApp size={16} /> Get fee
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
