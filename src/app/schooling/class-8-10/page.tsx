import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 8–10 Coding Program — Step2ITCareer-AI",
  description: "Build real coding skills in Class 8, 9 & 10. Python, problem solving, OOP and more with 1:1 mentorship. ₹10,000.",
};

export default function Class810Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1e0a4a 0%, #0D1330 60%, #060D1F 100%)" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", transform: "translate(30%, 30%)" }} />
        <div className="max-w-brand mx-auto px-6 py-16 md:py-24 relative text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a href="/schooling" className="text-white/40 hover:text-white/70 text-sm transition-colors">Schooling Programs</a>
            <span className="text-white/20">›</span>
            <span className="text-white/60 text-sm">Class 8–10</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full uppercase tracking-widest mb-6" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", color: "#A78BFA" }}>
            💡 Class 8, 9 & 10 · ₹10,000 · Build Real Code
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Don't Just Use Tech.<br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Learn to Build It.
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Class 8–10 is the perfect stage to build the thinking skills technology careers demand. Real Python. Real logic. Real projects. With a mentor who knows each student by name.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-full text-[15px] shadow-lg" style={{ background: "#7C3AED" }}>
              💬 Enroll via WhatsApp
            </a>
            <a href="tel:+919936609430" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px]">
              📞 Talk to a Mentor
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: "#7C3AED" }}>
        <div className="max-w-brand mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ value: "₹10,000", label: "Program Fee" }, { value: "1:1", label: "Mentorship" }, { value: "Max 5", label: "Students/Batch" }, { value: "Real", label: "Projects Built" }].map((s) => (
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
                <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">The Right Time to Start is Now</h2>
                <p className="text-muted leading-relaxed mb-4">Students who learn to code in Class 8–10 arrive at college with a 2-year head start. They understand how software works, they can build things, and they have a portfolio before their peers even know what Python is.</p>
                <p className="text-muted leading-relaxed">Our program is skill-level based — so whether your child knows nothing or already played with Scratch, they join at the right starting point.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🧪", title: "Skill-Level Based", desc: "Assess first, teach second. Every student starts where it makes sense for them." },
                  { icon: "✍️", title: "Handwritten Code Practice", desc: "We build the habit of writing code by hand — essential for competitive exams and interviews." },
                  { icon: "🔍", title: "Debugging Skills", desc: "Students learn to find and fix bugs — the most important real-world developer skill." },
                  { icon: "🚀", title: "Future-Oriented Exposure", desc: "AI, automation, and modern tools — students see where tech is heading." },
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
                <div className="text-3xl font-extrabold text-ink mb-1">₹10,000</div>
                <div className="text-sm text-muted mb-5">One-time · Complete program</div>
                <div className="space-y-3 mb-6">
                  {[["Class", "8th, 9th & 10th"], ["Mentorship", "1:1 Online"], ["Batch Size", "Max 5 Students"], ["Practice", "Handwritten Code"], ["Certificate", "Yes"], ["Level", "Skill-based entry"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center py-2.5 border-b border-line last:border-0">
                      <span className="text-xs text-muted font-semibold">{k}</span>
                      <span className="text-xs font-extrabold text-ink">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/919936609430" className="flex items-center justify-center gap-2 w-full py-4 font-bold rounded-xl text-sm text-white hover:opacity-90 transition-opacity" style={{ background: "#7C3AED" }}>
                  💬 Enroll via WhatsApp
                </a>
                <a href="tel:+919936609430" className="flex items-center justify-center w-full py-3.5 mt-2 bg-soft text-ink font-bold rounded-xl text-sm hover:bg-line transition-colors border border-line">
                  📞 +91 99366 09430
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">What They'll Learn</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Programming Fundamentals", "Variables & Data Types", "Conditions & Loops", "Functions", "Strings & Lists", "Problem Solving", "Basic Data Structures", "Debugging", "OOP Basics", "Coding Challenges", "Mini Projects", "Introduction to AI"].map((t) => (
              <div key={t} className="bg-soft p-3 rounded-xl border border-line text-center text-xs font-bold text-ink hover:border-[#7C3AED] transition-colors">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 bg-soft">
        <div className="max-w-brand mx-auto px-6 text-center">
          <h2 className="text-xl font-extrabold text-ink mb-6">Skills Built</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Logic", "Coding", "Creativity", "Confidence", "Problem Solving", "Debugging"].map((s) => (
              <span key={s} className="px-5 py-2.5 text-white text-sm font-bold rounded-full" style={{ background: "#7C3AED" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center relative overflow-hidden" style={{ background: "#7C3AED" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-brand mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Start Before College. Arrive Ahead.</h2>
          <p className="text-white/70 mb-8">Every year of coding practice before college = 1 year of career advantage.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto px-8 py-4 bg-white font-bold rounded-full text-[15px] hover:bg-soft transition-colors" style={{ color: "#7C3AED" }}>
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
