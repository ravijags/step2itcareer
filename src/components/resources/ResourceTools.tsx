"use client";
/* Small client helpers for the Resources hub: copy-to-clipboard, save/print, WhatsApp share
   and a reading-progress bar. Kept tiny so the reading pages stay server-rendered and fast. */
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";

export function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1500); } catch { /* clipboard blocked: ignore */ }
  };
  return (
    <button type="button" onClick={copy} aria-label="Copy code"
      className="print:hidden shrink-0 text-[11px] font-bold px-2 py-1 rounded-md bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors">
      {done ? "Copied" : "Copy"}
    </button>
  );
}

export function SaveButton() {
  return (
    <button type="button" onClick={() => window.print()}
      className="print:hidden tap inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-grad text-white font-extrabold text-[14px]">
      Save as PDF
    </button>
  );
}

export function ShareWhatsApp({ text, className = "" }: { text: string; className?: string }) {
  // The page URL is read at tap time, so nothing is computed during render.
  const share = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${window.location.href}`)}`, "_blank", "noopener,noreferrer");
  };
  return (
    <button type="button" onClick={share}
      className={`print:hidden tap inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] text-white font-extrabold text-[14px] ${className}`}>
      <Icon.WhatsApp size={17} /> Share on WhatsApp
    </button>
  );
}

export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div aria-hidden className="fixed top-14 left-0 right-0 z-30 h-[3px] origin-left" style={{ transform: `scaleX(${p})`, background: "var(--grad-accent)" }} />;
}
