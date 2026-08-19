"use client";

import { useState, useEffect } from "react";

// Global trigger — any page can call this
export function openLeadPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

export default function LeadPopup({
  submitted, onSubmit, onClose,
}: {
  submitted: boolean;
  onSubmit: () => void;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", program: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) onSubmit();
      else setError("Something went wrong. WhatsApp us directly.");
    } catch {
      setError("Something went wrong. WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-6" role="dialog" aria-modal="true" aria-label="Book free counseling">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-[560px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white transition-colors text-sm font-bold"
          aria-label="Close">✕</button>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-ink mb-2">You're on the list!</h3>
            <p className="text-muted text-sm mb-6">Our advisor will call you back within a few hours. Or reach us directly right now.</p>
            <a href="https://wa.me/919936609430" className="btn-whatsapp">
              💬 WhatsApp Us Now
            </a>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row min-h-[440px]">
            {/* Left panel */}
            <div className="sm:w-[44%] shrink-0 relative overflow-hidden flex flex-col justify-between p-8"
              style={{ background: "linear-gradient(160deg, #0D1330 0%, #1a1f4e 100%)" }}>
              {/* Dot grid bg */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #FF7A3D, transparent 70%)", transform: "translate(30%, -30%)" }} />

              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-[10px] font-extrabold uppercase tracking-widest mb-5">
                  ⚡ Free · No Obligation
                </div>
                <h3 className="text-[22px] font-extrabold text-white leading-snug mb-6">
                  Get Job-Ready.<br />
                  <span className="text-primary" style={{ background: "linear-gradient(90deg,#7B8FFF,#3B5BFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                    Get Hired.
                  </span>
                </h3>
                <ul className="space-y-3.5">
                  {[
                    { icon: "🎯", text: "Expert 1:1 Career Consultation" },
                    { icon: "👥", text: "Max 5 students per batch" },
                    { icon: "🏆", text: "Placement support until offer" },
                    { icon: "💸", text: "EMI & scholarship options" },
                  ].map(item => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                      <span className="text-sm text-white/70 font-medium leading-snug">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-6 pt-5 border-t border-white/10">
                <p className="text-[11px] text-white/40 font-semibold uppercase tracking-wider mb-1">Talk directly to</p>
                <p className="text-sm font-extrabold text-white">Ashvani Srivastava</p>
                <p className="text-xs text-white/50">Founder & CEO · +91 99366 09430</p>
              </div>
            </div>

            {/* Right panel */}
            <div className="flex-1 p-7 flex flex-col justify-center">
              <h3 className="text-[20px] font-extrabold text-ink mb-1">Book Free Counseling</h3>
              <p className="text-muted text-sm mb-6">We'll call you back — usually within 2 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input required type="text" placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft"/>
                </div>
                <div>
                  <input required type="tel" placeholder="WhatsApp Number *"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft"/>
                </div>
                <div>
                  <input type="email" placeholder="Email Address (optional)"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft"/>
                </div>
                <div>
                  <select value={formData.program}
                    onChange={e => setFormData({...formData, program: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft appearance-none">
                    <option value="">Which program interests you?</option>
                    <option>Generative AI & Multi-Agent Systems Engineering</option>
                    <option>Data Science, ML & AI Engineering</option>
                    <option>Data Analytics & Business Intelligence</option>
                    <option>Business Analyst & Product Management</option>
                    <option>Full Stack Software Engineering</option>
                    <option>Cloud, DevOps & Platform Engineering</option>
                    <option>Cybersecurity & Cloud Security</option>
                    <option>Software Testing & QA Automation Engineering</option>
                    <option>CPEP™ — Customized Excellence Program</option>
                    <option>AI Automation & No-Code Solutions</option>
                    <option>Digital Marketing & Growth Analytics</option>
                    <option>System Design & Software Architecture</option>
                    <option>Internship Program</option>
                    <option>Schooling Program (Class 6–12)</option>
                    <option>Not sure — need guidance</option>
                  </select>
                </div>

                {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-primary text-white font-extrabold rounded-xl text-sm transition-all hover:bg-primary-deep disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: "0 4px 20px rgba(59,91,255,0.35)" }}>
                  {loading ? "Sending..." : "Request Free Callback →"}
                </button>

                <p className="text-center text-[11px] text-muted">
                  Or{" "}
                  <a href="https://wa.me/919936609430" className="text-[#16A34A] font-bold hover:underline">
                    WhatsApp us directly
                  </a>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
