import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 6–8 Coding Program — Step2ITCareer-AI",
  description: "Future-ready coding for Class 6, 7 & 8 students. Fun, interactive, project-based learning with expert mentors. ₹5,000.",
};

export default function Class68Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0533 0%, #0D1330 60%, #060D1F 100%)" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 w-[600px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #3B5BFF, transparent 70%)", transform: "translate(-50%, -40%)" }} />
        <div className="max-w-brand mx-auto px-6 py-16 md:py-24 relative text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a href="/schooling" className="text-white/40 hover:text-white/70 text-sm transition-colors">Schooling Programs</a>
            <span className="text-white/20">›</span>
            <span className="text-white/60 text-sm">Class 6–8</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#3B5BFF]/20 border border-[#3B5BFF]/40 text-[#7B8FFF] text-xs font-bold rounded-full uppercase tracking-widest mb-6">
            🎮 Class 6, 7 & 8 · ₹5,000 · Beginner Friendly
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Empower Young Minds<br />
            <span style={{ background: "linear-gradient(90deg, #3B5BFF, #7B8FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              with Coding
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Fun, interactive coding for Class 6–8 students. Build real projects, develop logical thinking, and get a head start on a future in technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3B5BFF] text-white font-bold rounded-full text-[15px] shadow-lg shadow-blue-900/30 hover:bg-blue-700 transition-colors">
              💬 Enroll via WhatsApp
            </a>
            <a href="tel:+919936609430" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px]">
              📞 Talk to a Mentor
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: "#3B5BFF" }}>
        <div className="max-w-brand mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ value: "₹5,000", label: "Program Fee" }, { value: "Max 5", label: "Students/Batch" }, { value: "Live", label: "Interactive Classes" }, { value: "100%", label: "Project-Based" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-white/60 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Overview + Card */}
      <section className="py-14 md:py-20 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">Why Start Coding in Class 6–8?</h2>
                <p className="text-muted leading-relaxed mb-4">Ages 11–14 are the golden window for building computational thinking. Students who learn to code at this age develop problem-solving habits that stay with them forever — in any career.</p>
                <p className="text-muted leading-relaxed">Our Class 6–8 program uses block-based programming, Python basics, and creative projects to make coding something kids look forward to every week.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🎮", title: "Games & Animations", desc: "Students build their own games and animations — making learning feel like play." },
                  { icon: "🧩", title: "Block-Based First", desc: "Scratch and block coding ease students into logic before text-based code." },
                  { icon: "🌱", title: "Zero Prerequisites", desc: "No prior computer experience needed. We start from absolute basics." },
                  { icon: "👨‍👩‍👧", title: "Parent Progress Reports", desc: "Weekly updates so parents stay informed and involved." },
                ].map((item) => (
                  <div key={item.title} className="bg-white p-5 rounded-brand border border-line">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-extrabold text-ink text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-brand border border-line p-6 shadow-card sticky top-24">
                <div className="text-3xl font-extrabold text-ink mb-1">₹5,000</div>
                <div className="text-sm text-muted mb-5">One-time · Complete program</div>
                <div className="space-y-3 mb-6">
                  {[["Class", "6th, 7th & 8th"], ["Batch Size", "Max 5 Students"], ["Mode", "Live Interactive"], ["Schedule", "Flexible weekends"], ["Certificate", "Yes"], ["Parent Updates", "Weekly"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center py-2.5 border-b border-line last:border-0">
                      <span className="text-xs text-muted font-semibold">{k}</span>
                      <span className="text-xs font-extrabold text-ink">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/919936609430" className="flex items-center justify-center gap-2 w-full py-4 font-bold rounded-xl text-sm text-white transition-colors hover:opacity-90" style={{ background: "#3B5BFF" }}>
                  💬 Enroll via WhatsApp
                </a>
                <a href="tel:+919936609430" className="flex items-center justify-center w-full py-3.5 mt-2 bg-soft text-ink font-bold rounded-xl text-sm hover:bg-line transition-colors border border-line">
                  📞 +91 99366 09430
                </a>
                <p className="text-[11px] text-muted text-center mt-4">Free demo class available · Talk to mentor first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What They Learn */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider mb-4" style={{ background: "#EEF2FF", color: "#3B5BFF" }}>Curriculum</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">What Students Will Learn</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {["Computer Fundamentals", "Coding Logic & Thinking", "Flowcharts & Algorithms", "Block-Based Programming", "Introduction to Python", "Game & Animation Dev", "AI & Tech Awareness", "Mini Coding Projects", "Internet Safety", "Creative Problem Solving"].map((t) => (
              <div key={t} className="bg-soft p-4 rounded-xl border border-line text-center text-xs font-bold text-ink hover:border-[#3B5BFF] transition-colors">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-14 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-ink text-center mb-8">Skills Your Child Develops</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Logical Thinking", "Critical Thinking", "Creativity & Innovation", "Problem-Solving", "Analytical Reasoning", "Digital Literacy"].map((s) => (
              <span key={s} className="px-5 py-2.5 text-white text-sm font-bold rounded-full" style={{ background: "#3B5BFF" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center relative overflow-hidden" style={{ background: "#3B5BFF" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-brand mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Give Your Child a Head Start</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">The future belongs to those who can think with technology. Start today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto px-8 py-4 bg-white font-bold rounded-full text-[15px] hover:bg-soft transition-colors" style={{ color: "#3B5BFF" }}>
              💬 WhatsApp to Enroll
            </a>
            <a href="tel:+919936609430" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/30 text-[15px]">
              📞 Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
