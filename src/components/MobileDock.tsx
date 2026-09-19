"use client";
/* Floating glass dock — the mobile conversion surface on every page.
   Same frosted-dark material as the nav, so the top and bottom of the screen book-end the page. */
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
    <motion.div
      initial={{ y: 120, opacity: 0 }} animate={ready ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-4 right-4 z-40 md:hidden"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
      role="navigation" aria-label="Quick actions"
    >
      <div
        className="relative flex items-center gap-1 p-1.5 rounded-full"
        style={{
          background: "rgba(10,15,32,0.84)",
          backdropFilter: "blur(18px) saturate(140%)", WebkitBackdropFilter: "blur(18px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 18px 50px rgba(3,6,20,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <a href="https://wa.me/919936609430" aria-label="WhatsApp us"
          className="tap flex flex-col items-center justify-center w-[64px] h-[52px] rounded-full gap-0.5">
          <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(22,163,74,0.18)", color: "#4ADE80" }}>
            <Icon.WhatsApp size={17} />
          </span>
          <span className="text-[9px] font-bold text-white/55 tracking-wide">WhatsApp</span>
        </a>

        <button onClick={openPopup}
          className="tap flex-1 h-[52px] rounded-full text-white font-extrabold text-[14px] flex items-center justify-center gap-2"
          style={{ background: "var(--grad-primary)", boxShadow: "0 10px 26px rgba(59,91,255,0.4), inset 0 1px 0 rgba(255,255,255,0.28)" }}>
          <span className="relative inline-block w-2 h-2 rounded-full bg-[#4ADE80] pulse-ring text-[#4ADE80]" aria-hidden />
          Free counseling
        </button>

        <a href="tel:+919936609430" aria-label="Call us"
          className="tap flex flex-col items-center justify-center w-[64px] h-[52px] rounded-full gap-0.5">
          <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}>
            <Icon.Phone size={15} />
          </span>
          <span className="text-[9px] font-bold text-white/55 tracking-wide">Call</span>
        </a>
      </div>
    </motion.div>
  );
}
