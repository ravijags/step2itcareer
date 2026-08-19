import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 10–12 Coding Program — Step2ITCareer-AI",
  description: "Bridge school to tech career. Python, Java, SQL, GitHub, AI tools and real projects for Class 10, 11 & 12 students. ₹10,000.",
};

export default function Class1012Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0800 0%, #0D1330 60%, #060D1F 100%)" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #FF7A3D 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #FF7A3D, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        <div className="max-w-brand mx-auto px-6 py-16 md:py-24 relative text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a href="/schooling" className="text-white/40 hover:text-white/70 text-sm transition-colors">Schooling Programs</a>
            <span className="text-white/20">›</span>
            <span className="text-white/60 text-sm">Class 10–12</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full uppercase tracking-widest mb-6" style={{ background: "rgba(255,122,61,0.15)", border: "1px solid rgba(255,122,61,0.3)", color: "#FF9966" }}>
            🚀 Class 10, 11 & 12 · ₹10,000 · Pre-College Tech Prep
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            From Student to<br />
            <span style={{ background: "linear-gradient(90deg, #FF7A3D, #FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Future Tech Pro
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Bridge the gap between school education and real-world technology skills. Python, Java, SQL, GitHub, AI tools, and a portfolio — before you even step into college.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-full text-[15px] shadow-lg" style={{ background: "#FF7A3D" }}>
              💬 Enroll via WhatsApp
            </a>
            <a href="tel:+919936609430" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px]">
              📞 Talk to a Mentor
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: "#FF7A3D" }}>
        <div className="max-w-brand mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ value: "₹10,000", label: "Program Fee" }, { value: "GitHub", label: "Portfolio Built" }, { value: "AI Tools", label: "Industry Exposure" }, { value: "1:1", label: "Mentorship" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl md:text-2xl font-extrabold text-white">{s.value}</div>
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
                <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">The College-Ready Tech Stack</h2>
                <p className="text-muted leading-relaxed mb-4">Most Class 12 students arrive at college never having written a real program. Our students arrive knowing Python, Java, Git, SQL, and how to use AI tools — with a GitHub portfolio to prove it.</p>
                <p className="text-muted leading-relaxed">This program is built for pre-college students who want to stand out — in admissions, in internships, and in their first job hunt.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🐙", title: "GitHub Portfolio", desc: "Every student ships real projects and commits them to GitHub — a portfolio before college." },
                  { icon: "🤖", title: "AI & GenAI Exposure", desc: "Learn ChatGPT, Claude, GitHub Copilot — tools every modern developer uses daily." },
                  { icon: "💼", title: "Career Prep", desc: "Resume, LinkedIn, and interview basics — so you're ready to apply the day you graduate." },
                  { icon: "🌐", title: "Industry Technologies", desc: "Python, Java, SQL, HTML/CSS/JS, Git — the actual tools employers want." },
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
                <div className="text-sm text-muted mb-5">One-time · All inclusive</div>
                <div className="space-y-3 mb-6">
                  {[["Class", "10th, 11th & 12th"], ["Mentorship", "1:1 Online"], ["Batch Size", "Max 5 Students"], ["Portfolio", "GitHub profile built"], ["AI Tools", "Included"], ["Certificate", "Yes"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center py-2.5 border-b border-line last:border-0">
                      <span className="text-xs text-muted font-semibold">{k}</span>
                      <span className="text-xs font-extrabold text-ink">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/919936609430" className="flex items-center justify-center gap-2 w-full py-4 font-bold rounded-xl text-sm text-white hover:opacity-90 transition-opacity" style={{ background: "#FF7A3D" }}>
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">What You'll Learn</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {["Python & Java", "SQL & Databases", "Git & GitHub", "HTML, CSS & JavaScript", "Data Structures & Algorithms", "AI Fundamentals", "Generative AI & Prompt Engineering", "APIs & Web Services", "Application Development", "Deployment Fundamentals"].map((t) => (
              <div key={t} className="bg-soft p-4 rounded-xl border border-line text-center text-xs font-bold text-ink hover:border-[#FF7A3D] transition-colors">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 bg-soft">
        <div className="max-w-brand mx-auto px-6 text-center">
          <h2 className="text-xl font-extrabold text-ink mb-6">Skills You'll Graduate With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem Solving", "Logical Thinking", "Version Control", "AI Productivity", "Project Development", "Technical Communication"].map((s) => (
              <span key={s} className="px-5 py-2.5 text-white text-sm font-bold rounded-full" style={{ background: "#FF7A3D" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF7A3D 0%, #e05a1a 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-brand mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Arrive at College Ready to Build.</h2>
          <p className="text-white/70 mb-8">Not just study theory — but ship real projects from day one.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto px-8 py-4 bg-white font-bold rounded-full text-[15px] hover:bg-soft transition-colors" style={{ color: "#FF7A3D" }}>
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
