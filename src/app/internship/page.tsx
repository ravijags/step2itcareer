import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Programs — Step2ITCareer-AI",
  description: "30-Day Coding Challenge and Summer/Winter Training Internship programs. Live mentorship, real projects, placement support.",
};

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#060D1F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="max-w-brand mx-auto px-6 py-16 md:py-24 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 text-primary text-xs font-bold rounded-full uppercase tracking-widest mb-6">
            🎓 Internship Programs
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Build Real Skills.<br />
            <span style={{ background: "linear-gradient(90deg, #3B5BFF, #7B8FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Get Real Experience.
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Intensive programs designed to give students, freshers, and career-switchers hands-on experience with live projects, expert mentorship, and placement support.
          </p>
        </div>
      </div>

      {/* Program Cards */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <a href="/internship/30-days-coding-challenge"
              className="bg-white rounded-2xl border border-line shadow-card hover:-translate-y-1 hover:shadow-deep transition-all duration-300 overflow-hidden group flex flex-col">
              <div className="h-3 w-full" style={{ background: "linear-gradient(90deg, #FF7A3D, #FFB347)" }} />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full mb-3" style={{ background: "#FFF3EC", color: "#FF7A3D" }}>
                      Program 1 · Coding Intensive
                    </span>
                    <h2 className="text-xl md:text-2xl font-extrabold text-ink leading-snug">30-Day Coding Challenge</h2>
                  </div>
                  <div className="text-3xl shrink-0">⚡</div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Master Java or Python with 2,000+ coding problems. Daily tasks, live doubt sessions, coding round prep — get interview-ready in 30 days.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[["Duration", "30 Days"], ["Fee", "₹10,000"], ["Language", "Java / Python"], ["Batch", "Max 5 Students"]].map(([k, v]) => (
                    <div key={k} className="bg-soft rounded-xl p-3 border border-line">
                      <div className="text-[10px] text-muted font-semibold mb-0.5">{k}</div>
                      <div className="text-sm font-extrabold text-ink">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-line">
                  <div className="text-2xl font-extrabold text-ink">₹10,000</div>
                  <span className="inline-flex items-center gap-1.5 px-5 py-2.5 text-white text-sm font-bold rounded-full group-hover:opacity-90 transition-opacity" style={{ background: "#FF7A3D" }}>
                    View Program →
                  </span>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/internship/summer-winter-training"
              className="bg-white rounded-2xl border border-line shadow-card hover:-translate-y-1 hover:shadow-deep transition-all duration-300 overflow-hidden group flex flex-col">
              <div className="h-3 w-full" style={{ background: "linear-gradient(90deg, #3B5BFF, #7B8FFF)" }} />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full mb-3" style={{ background: "#EEF2FF", color: "#3B5BFF" }}>
                      Program 2 · Training Internship
                    </span>
                    <h2 className="text-xl md:text-2xl font-extrabold text-ink leading-snug">Summer & Winter Training</h2>
                  </div>
                  <div className="text-3xl shrink-0">🎓</div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Build industry-ready skills during your college break. Live projects, 1:1 mentorship, and a completion certificate across 14+ tech tracks.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[["Duration", "4–8 Weeks"], ["Fee", "₹6,000"], ["Tracks", "14+ Available"], ["Batch", "Max 5 Students"]].map(([k, v]) => (
                    <div key={k} className="bg-soft rounded-xl p-3 border border-line">
                      <div className="text-[10px] text-muted font-semibold mb-0.5">{k}</div>
                      <div className="text-sm font-extrabold text-ink">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-line">
                  <div className="text-2xl font-extrabold text-ink">₹6,000</div>
                  <span className="inline-flex items-center gap-1.5 px-5 py-2.5 text-white text-sm font-bold rounded-full group-hover:opacity-90 transition-opacity" style={{ background: "#3B5BFF" }}>
                    View Program →
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 bg-white">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "👥", title: "Max 5 Students", desc: "Every student gets personal attention" },
              { icon: "🏗️", title: "Real Projects", desc: "Not dummy assignments — actual live work" },
              { icon: "👨‍🏫", title: "Dedicated Mentor", desc: "Same mentor throughout your program" },
              { icon: "🎖️", title: "Certificate + Portfolio", desc: "Proof of skills that employers respect" },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 bg-soft rounded-brand border border-line">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-ink text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-primary text-center">
        <h2 className="text-2xl font-extrabold text-white mb-4">Not sure which program fits you?</h2>
        <p className="text-white/70 mb-6">Talk to our mentor for free — no pressure, just clarity.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/919936609430" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-soft transition-colors">💬 WhatsApp Us</a>
          <a href="tel:+919936609430" className="w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors">📞 Call Us</a>
        </div>
      </section>
    </div>
  );
}
