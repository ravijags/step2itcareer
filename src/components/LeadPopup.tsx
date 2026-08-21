"use client";

import { useState } from "react";

export default function LeadPopup({ submitted, onSubmit, onClose }: {
  submitted: boolean;
  onSubmit: () => void;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", program: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
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
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: "90dvh" }}>

        {/* Close button */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white sm:text-gray-500 transition-colors text-sm font-bold">
          ✕
        </button>

        {submitted ? (
          <div className="p-10 sm:p-16 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink mb-2">You're on the list!</h3>
            <p className="text-muted text-sm mb-6">Our advisor will call you back within a few hours.</p>
            <a href="https://wa.me/919936609430"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors text-sm">
              💬 WhatsApp Us Directly
            </a>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row overflow-y-auto">

            {/* Mobile top banner (replaces left panel on mobile) */}
            <div className="sm:hidden bg-[#0D1330] px-6 py-5 shrink-0">
              <p className="text-accent text-[10px] font-extrabold uppercase tracking-widest mb-1">⚡ Free · No Obligation</p>
              <h3 className="text-lg font-extrabold text-white">Get Job-Ready. Get Hired.</h3>
              <p className="text-white/50 text-xs mt-1">Expert 1:1 Counseling · Max 5/Batch · Placement Support</p>
            </div>

            {/* Desktop left panel */}
            <div className="hidden sm:flex flex-col justify-center w-[44%] shrink-0 bg-[#0D1330] p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <p className="text-accent text-xs font-extrabold uppercase tracking-widest mb-3 relative">Free Career Counseling</p>
              <h3 className="text-2xl font-extrabold text-white mb-6 leading-snug relative">
                Get Job-Ready.<br />Get Hired.
              </h3>
              <ul className="space-y-4 relative">
                {["Expert 1:1 Career Consultation", "Micro-Batch Mentorship (5 max)", "Placement Support Until Offer", "EMI & Scholarship Options"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70 font-medium">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 relative">
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Talk directly to</p>
                <p className="text-sm font-extrabold text-white">Ashvani Srivastava</p>
                <p className="text-xs text-white/40">Founder & CEO · +91 99366 09430</p>
              </div>
            </div>

            {/* Form panel */}
            <div className="flex-1 p-6 sm:p-10 overflow-y-auto">
              <h3 className="text-lg sm:text-xl font-extrabold text-ink mb-1">Book Free Counseling</h3>
              <p className="text-muted text-sm mb-5">We'll call you back — usually within 2 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input required type="text" placeholder="Full Name *"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft" />
                <input required type="tel" placeholder="WhatsApp Number *"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft" />
                <input type="email" placeholder="Email Address (optional)"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft" />
                <select value={formData.program}
                  onChange={e => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-line text-sm font-medium text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-soft">
                  <option value="">Interested Program (optional)</option>
                  <option>Generative AI & Multi-Agent Systems Engineering</option>
                  <option>Data Science, Machine Learning & AI Engineering</option>
                  <option>Data Analytics & Business Intelligence</option>
                  <option>Business Analyst & Product Management</option>
                  <option>Full Stack Software Engineering</option>
                  <option>Cloud, DevOps & Platform Engineering</option>
                  <option>Cybersecurity & Cloud Security</option>
                  <option>Software Testing & QA Automation Engineering</option>
                  <option>CPEP - Customized Excellence Program</option>
                  <option>AI Automation & No-Code Solutions</option>
                  <option>Digital Marketing & Growth Analytics</option>
                  <option>System Design & Software Architecture</option>
                  <option>Internship Program</option>
                  <option>Schooling Program (Class 6–12)</option>
                  <option>Not sure yet — need guidance</option>
                </select>

                {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-primary text-white font-extrabold rounded-xl text-sm transition-all hover:bg-primary-deep disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: "0 4px 20px rgba(59,91,255,0.35)" }}>
                  {loading ? "Sending..." : "Request Free Callback →"}
                </button>

                <p className="text-center text-[11px] text-muted pt-1">
                  Or <a href="https://wa.me/919936609430" className="text-[#16A34A] font-bold hover:underline">WhatsApp us directly</a>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
