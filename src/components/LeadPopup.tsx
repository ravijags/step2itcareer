"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { courses } from "@/lib/courses";
import { Icon } from "@/components/Icons";
import { Grain, Slashes } from "@/components/Decor";

export default function LeadPopup({ submitted, onSubmit, onClose }: {
  submitted: boolean;
  onSubmit: () => void;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", program: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) { setError("Name and WhatsApp number are required."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) onSubmit(); else setError("Something went wrong. WhatsApp us directly.");
    } catch { setError("Something went wrong. WhatsApp us directly."); }
    finally { setLoading(false); }
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 110 || info.velocity.y > 600) onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-6">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0"
          style={{ background: "rgba(7,11,24,0.62)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
          onClick={onClose}
        />

        <motion.div
          initial={{ y: "100%", opacity: 0.6 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 36 }}
          drag="y" dragConstraints={{ top: 0, bottom: 0 }} dragElastic={{ top: 0, bottom: 0.55 }} onDragEnd={onDragEnd}
          className="relative w-full sm:max-w-[440px] bg-white rounded-t-[26px] sm:rounded-[26px] overflow-hidden flex flex-col"
          style={{ maxHeight: "92dvh", boxShadow: "0 -16px 60px rgba(0,0,0,0.35)", paddingBottom: "env(safe-area-inset-bottom)" }}
          role="dialog" aria-modal="true" aria-label="Book free counseling"
        >
          <div className="relative bg-ink2 px-6 pt-3 pb-5 shrink-0 overflow-hidden">
            <Grain />
            <Slashes side="right" tone="primary" opacity={0.12} height={260} dot={false} />
            <div className="relative mx-auto mb-3 w-9 h-1 rounded-full bg-white/25 sm:hidden" aria-hidden />
            <button onClick={onClose} aria-label="Close"
              className="absolute top-3 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10">
              <Icon.Close size={16} />
            </button>
            <div className="relative flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#FF9A6C] mb-1.5">
              <span className="relative inline-block w-2 h-2 rounded-full bg-[#4ADE80] pulse-ring text-[#4ADE80]" />
              3 counselors online
            </div>
            <h3 className="relative text-[22px] font-extrabold text-white tracking-tight leading-tight">Get job-ready. Get hired.</h3>
            <p className="relative text-[13px] text-white/50 mt-1">We call back within 2 hours · Free · No obligation</p>
          </div>

          <div className="overflow-y-auto">
            {submitted ? (
              <div className="px-6 py-12 text-center">
                <div className="mx-auto mb-5 w-[76px] h-[76px] rounded-full flex items-center justify-center" style={{ background: "var(--grad-primary)", boxShadow: "0 16px 40px rgba(59,91,255,0.35)" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <motion.path d="M5 12l4.5 4.5L19 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} />
                  </svg>
                </div>
                <h4 className="text-[22px] font-extrabold text-ink tracking-tight mb-2">You're on the list</h4>
                <p className="text-[14px] text-muted mb-7">Ashvani's team will call you back within a few hours.</p>
                <a href="https://wa.me/919936609430" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#16A34A] text-white font-bold rounded-full text-[14px] tap">
                  <Icon.WhatsApp size={18} /> WhatsApp us directly
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 sm:px-6 pt-5 pb-6 flex flex-col gap-3">
                <div className="fl">
                  <input id="lp-name" placeholder=" " value={form.name} onChange={set("name")} autoComplete="name" required />
                  <label htmlFor="lp-name">Full name</label>
                </div>
                <div className="fl">
                  <input id="lp-phone" placeholder=" " value={form.phone} onChange={set("phone")} inputMode="tel" autoComplete="tel" required />
                  <label htmlFor="lp-phone">WhatsApp number</label>
                </div>
                <div className="fl">
                  <input id="lp-email" placeholder=" " value={form.email} onChange={set("email")} inputMode="email" autoComplete="email" />
                  <label htmlFor="lp-email">Email (optional)</label>
                </div>
                <div className="fl">
                  <select id="lp-program" value={form.program} onChange={set("program")} className={form.program ? "has-value" : ""}>
                    <option value=""></option>
                    {courses.map(c => <option key={c.slug} value={c.title}>{c.title}</option>)}
                    <option value="Internship">Internship</option>
                    <option value="Schooling Program">Schooling program</option>
                  </select>
                  <label htmlFor="lp-program">Interested program (optional)</label>
                  <Icon.ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>

                {error && <p className="text-[13px] text-red-600 font-semibold -mt-1">{error}</p>}

                <button type="submit" disabled={loading}
                  className="btn-grad tap mt-1 w-full py-4 rounded-full text-white font-extrabold text-[15px] flex items-center justify-center gap-2 disabled:opacity-70">
                  {loading ? "Sending…" : <>Request free callback <Icon.ArrowRight size={16} /></>}
                </button>
                <p className="text-center text-[13px] text-muted">
                  or <a href="https://wa.me/919936609430" className="text-[#16A34A] font-bold">WhatsApp us directly</a>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
