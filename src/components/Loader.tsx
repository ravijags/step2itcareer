"use client";

import { useEffect, useState } from "react";

const KEY = "s2it-loaded";

export default function Loader() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, "1");
    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const t1 = setTimeout(() => setLeaving(true), 900);
    const t2 = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
    }, 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); document.documentElement.style.overflow = ""; };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink2"
      style={{ opacity: leaving ? 0 : 1, transform: leaving ? "translateY(-12px)" : "none", transition: "opacity 400ms var(--ease-out), transform 400ms var(--ease-out)" }}
    >
      <div className="grain" />
      <svg width="64" height="62" viewBox="0 0 100 96" fill="none" className="relative">
        <path d="M22 78 L46 18" stroke="#8BA4FF" strokeWidth="12" strokeLinecap="round"
          style={{ strokeDasharray: 70, strokeDashoffset: 70, animation: "draw 520ms var(--ease-out) 60ms forwards" }} />
        <path d="M44 78 L68 18" stroke="#3B5BFF" strokeWidth="16" strokeLinecap="round"
          style={{ strokeDasharray: 70, strokeDashoffset: 70, animation: "draw 520ms var(--ease-out) 200ms forwards" }} />
        <circle cx="78" cy="74" r="11" fill="#FF7A3D"
          style={{ transformOrigin: "78px 74px", transform: "scale(0)", animation: "popIn 360ms var(--ease-out) 560ms forwards" }} />
      </svg>
      <div className="relative mt-6 w-[120px] h-[2px] rounded bg-white/10 overflow-hidden">
        <div className="h-full" style={{ background: "var(--grad-primary)", animation: "loaderBar 820ms var(--ease-out) forwards" }} />
      </div>
      <style>{`@keyframes popIn { to { transform: scale(1); } }`}</style>
    </div>
  );
}
