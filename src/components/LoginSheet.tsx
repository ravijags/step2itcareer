"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export const openLoginSheet = () => window.dispatchEvent(new CustomEvent("openLoginSheet"));

export default function LoginSheet() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const on = () => setOpen(true);
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("openLoginSheet", on);
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("openLoginSheet", on); window.removeEventListener("keydown", key); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!mounted) return null;
  const wa = `https://wa.me/919936609430?text=${encodeURIComponent("Please add me to the Step2ITCareer learner portal waitlist")}`;
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="b" className="fixed inset-0 z-[90] bg-ink2/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.div key="s" role="dialog" aria-modal="true" aria-label="Learner portal"
            className="fixed z-[91] inset-x-0 bottom-0 md:inset-auto md:left-1/2 md:top-1/2 md:w-[420px] md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-t-3xl md:rounded-3xl p-7 text-center shadow-deep"
            style={{ paddingBottom: "max(1.75rem, env(safe-area-inset-bottom))" }}
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mx-auto mb-5 w-10 h-1 rounded-full bg-line md:hidden" />
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-tint text-accent text-[11px] font-extrabold tracking-[0.14em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Launching soon
            </span>
            <h2 className="text-2xl font-extrabold text-ink mb-2">Learner portal</h2>
            <p className="text-sm text-muted leading-relaxed mb-6">Your classes, recordings, assignments and placement tracker in one place. Join the waitlist and we&apos;ll message you the day it opens.</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="tap flex items-center justify-center w-full py-3.5 bg-[#16A34A] text-white font-bold rounded-xl text-sm mb-2.5">Join waitlist on WhatsApp</a>
            <button onClick={() => setOpen(false)} className="tap w-full py-3 text-sm font-semibold text-muted">Maybe later</button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
