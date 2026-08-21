"use client";

import { useState } from "react";

export default function LeadPopup({ submitted, onSubmit, onClose }: {
  submitted: boolean;
  onSubmit: () => void;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
  });

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

      if (res.ok) {
        onSubmit();
      } else {
        setError("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors text-lg font-bold"
        >
          ✕
        </button>

        {submitted ? (
          <div className="p-16 text-center">
            <div className="text-6xl mb-5">🎉</div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3">You are on the list!</h3>
            <p className="text-gray-500 mb-6">Our team will reach out within 24 hours. Check your WhatsApp!</p>
            <a
              href="https://wa.me/919936609430"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors"
            >
              WhatsApp Us Directly
            </a>
          </div>
        ) : (
          <div className="flex min-h-[420px]">
            <div className="hidden sm:flex flex-col justify-center w-[45%] shrink-0 bg-[#0D1330] p-10">
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Free Career Counseling</p>
              <h3 className="text-2xl font-extrabold text-white mb-6 leading-snug">
                Get Job-Ready.<br />Get Hired.
              </h3>
              <ul className="space-y-4">
                {[
                  "Expert 1:1 Career Consultation",
                  "Micro-Batch Mentorship (5 max)",
                  "Placement Support Until Offer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70 font-medium">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 p-10">
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">Book Free Counseling</h3>
              <p className="text-gray-500 text-sm mb-6">Share your details — an advisor will call you back.</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  required
                  type="tel"
                  placeholder="WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 focus:outline-none focus:border-blue-500 transition-colors bg-white"
                >
                  <option value="">Interested Program (optional)</option>
                  <option>Generative AI & Multi-Agent Systems Engineering</option>
                  <option>Data Science, Machine Learning & AI Engineering</option>
                  <option>Data Analytics & Business Intelligence</option>
                  <option>Business Analyst & Product Management</option>
                  <option>Full Stack Software Engineering</option>
                  <option>Cloud, DevOps & Platform Engineering</option>
                  <option>Cybersecurity & Cloud Security</option>
                  <option>Software Testing & QA Automation Engineering</option>
                  <option>CPEP - Customized Professional Excellence Program</option>
                  <option>AI Automation & No-Code Solutions</option>
                  <option>Digital Marketing & Growth Analytics</option>
                  <option>System Design & Software Architecture</option>
                  <option>Not sure yet — need guidance</option>
                </select>

                {error && (
                  <p className="text-red-500 text-xs font-semibold">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-deep transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Request Callback"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
