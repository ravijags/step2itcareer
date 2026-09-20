"use client";
/* Mobile action bar — the familiar app tab-bar shape, finished in the Ascent material:
   frosted white glass, a gradient hairline, plain icons on the sides, one gradient pill in the middle. */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icons";

function openPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

export default function MobileDock() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 900); return () => clearTimeout(t); }, []);

  return (
    <motion.nav
      initial={{ y: 90 }} animate={{ y: ready ? 0 : 90 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Quick actions"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden"
      style={{
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(18px) saturate(150%)", WebkitBackdropFilter: "blur(18px) saturate(150%)",
        boxShadow: "0 -10px 30px rgba(14,21,38,0.08)",
        paddingBottom: "max(10px, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-[1.5px]" style={{ background: "linear-gradient(90deg, rgba(59,91,255,0.35), rgba(123,91,255,0.55), rgba(59,91,255,0.35))" }} aria-hidden />
      <div className="grid grid-cols-[76px_1fr_76px] items-center px-3 pt-2.5">
        <a href="https://wa.me/919936609430" aria-label="WhatsApp us" className="tap flex flex-col items-center gap-1 py-1 text-[#16A34A]">
          <Icon.WhatsApp size={22} />
          <span className="text-[10px] font-bold tracking-wide text-[#16A34A]">WhatsApp</span>
        </a>
        <button onClick={openPopup}
          className="tap h-11 rounded-full text-white font-extrabold text-[14px] flex items-center justify-center gap-2"
          style={{ background: "var(--grad-primary)", boxShadow: "0 8px 22px rgba(59,91,255,0.35), inset 0 1px 0 rgba(255,255,255,0.28)" }}>
          <span className="relative inline-block w-2 h-2 rounded-full bg-[#4ADE80] pulse-ring text-[#4ADE80]" aria-hidden />
          Free counseling
        </button>
        <a href="tel:+919936609430" aria-label="Call us" className="tap flex flex-col items-center gap-1 py-1 text-ink">
          <Icon.Phone size={20} />
          <span className="text-[10px] font-bold tracking-wide text-ink/80">Call</span>
        </a>
      </div>
    </motion.nav>
  );
}
