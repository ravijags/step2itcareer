import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30-Day Coding Challenge — Step2ITCareer-AI",
  description: "Master Java or Python with 2,000+ coding problems in 30 days. Live mentorship, daily tasks, placement prep. ₹10,000.",
};

const curriculum = [
  { week: "Week 1", title: "Foundations", topics: ["Variables & Data Types", "Conditional Statements", "Loops & Iterations", "Functions & Methods", "Input/Output Operations"] },
  { week: "Week 2", title: "Core Concepts", topics: ["Arrays & Strings", "Object-Oriented Programming", "Exception Handling", "File Handling", "Collections & Libraries"] },
  { week: "Week 3", title: "Data Structures", topics: ["Lists, Stacks & Queues", "Linked Lists Basics", "Sorting Algorithms", "Searching Algorithms", "Time & Space Complexity"] },
  { week: "Week 4", title: "Interview Prep", topics: ["Competitive Coding Patterns", "300+ Practice Problems", "Mock Coding Rounds", "Resume & GitHub Setup", "Interview Readiness"] },
];

const stats = [
  { value: "2,000+", label: "Coding Problems" },
  { value: "30", label: "Days" },
  { value: "5", label: "Max Students" },
  { value: "100%", label: "Hands-on" },
];

const faqs = [
  { q: "Do I need prior coding experience?", a: "No. This challenge is designed for complete beginners and those with basic exposure. We start from fundamentals." },
  { q: "Java or Python — which should I choose?", a: "Both are in-demand. Java is preferred for enterprise/Android roles. Python is better for data/AI/automation. Our mentor will guide you based on your career goal." },
  { q: "Are the classes live or recorded?", a: "All sessions are live and interactive with direct mentor access. Recordings are available for revision." },
  { q: "What happens after 30 days?", a: "You get a certificate, portfolio of solved problems, and placement assistance. Many students join our full career programs after." },
];

export default function ThirtyDaysPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#060D1F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #FF7A3D, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="max-w-brand mx-auto px-6 py-16 md:py-24 relative">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a href="/internship" className="text-white/40 hover:text-white/70 text-sm transition-colors">Internship</a>
            <span className="text-white/20">›</span>
            <span className="text-white/60 text-sm">30-Day Coding Challenge</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-6">
            ⚡ 30 Days · ₹10,000 · Starts Any Monday
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            30-Day Coding<br />
            <span style={{ background: "linear-gradient(90deg, #FF7A3D, #FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Challenge
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Master Java or Python through 2,000+ structured problems, live mentorship, and daily coding sessions — built to make you interview-ready in 30 days flat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919936609430" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] shadow-lg shadow-green-900/30 hover:bg-green-700 transition-colors">
              💬 Enroll via WhatsApp
            </a>
            <a href="tel:+919936609430" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px] hover:bg-white/15 transition-colors">
              📞 Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary">
        <div className="max-w-brand mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-white/60 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Overview + Quick Facts */}
      <section className="py-14 md:py-20 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Program Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">What is this Challenge?</h2>
                <p className="text-muted leading-relaxed mb-4">An intense, structured 30-day program where you solve 2,000+ coding problems in Java or Python under live mentor supervision. Every day has a plan. Every week has a milestone.</p>
                <p className="text-muted leading-relaxed">Designed for students who want to break into tech or sharpen their coding skills before placements — with real accountability and no fluff.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🎯", title: "Goal-Based Learning", desc: "Each week targets a specific skill milestone, not just random topics." },
                  { icon: "👨‍💻", title: "Live Doubt Sessions", desc: "Direct access to your mentor every day for doubt-clearing and code reviews." },
                  { icon: "📊", title: "Progress Tracking", desc: "Daily performance dashboard so you always know where you stand." },
                  { icon: "🏆", title: "Completion Certificate", desc: "Industry-recognized certificate + GitHub portfolio of solved problems." },
                ].map((item) => (
                  <div key={item.title} className="bg-white p-5 rounded-brand border border-line">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-extrabold text-ink text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-brand border border-line p-6 shadow-card sticky top-24">
                <div className="text-3xl font-extrabold text-ink mb-1">₹10,000</div>
                <div className="text-sm text-muted mb-5">One-time · All inclusive</div>
                <div className="space-y-3 mb-6">
                  {[
                    ["Duration", "30 Days"],
                    ["Language", "Java or Python"],
                    ["Batch Size", "Max 5 Students"],
                    ["Mode", "Live Interactive"],
                    ["Starts", "Every Monday"],
                    ["Certificate", "Yes — on completion"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center py-2.5 border-b border-line last:border-0">
                      <span className="text-xs text-muted font-semibold">{k}</span>
                      <span className="text-xs font-extrabold text-ink">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/919936609430" className="flex items-center justify-center gap-2 w-full py-4 bg-[#16A34A] text-white font-bold rounded-xl text-sm hover:bg-green-700 transition-colors">
                  💬 Enroll via WhatsApp
                </a>
                <a href="tel:+919936609430" className="flex items-center justify-center w-full py-3.5 mt-2 bg-soft text-ink font-bold rounded-xl text-sm hover:bg-line transition-colors border border-line">
                  📞 +91 99366 09430
                </a>
                <p className="text-[11px] text-muted text-center mt-4">EMI options available · Free trial class first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Curriculum */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Curriculum</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">4-Week Breakdown</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {curriculum.map((week, i) => (
              <div key={week.week} className="bg-soft rounded-brand border border-line p-5 hover:border-primary hover:shadow-card transition-all duration-200">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center">{i + 1}</div>
                  <div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider">{week.week}</div>
                    <div className="text-sm font-extrabold text-ink">{week.title}</div>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {week.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-xs text-muted">
                      <span className="text-[#16A34A] mt-0.5 shrink-0">✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-14 md:py-20 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">Who Should Join?</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🎓", title: "Final-Year Students", desc: "Preparing for campus placements and coding rounds at top companies." },
              { icon: "💼", title: "Fresh Graduates", desc: "Want to strengthen coding fundamentals before job applications." },
              { icon: "🔄", title: "Career Switchers", desc: "Transitioning into tech from a non-coding background." },
              { icon: "📈", title: "Working Professionals", desc: "Upskilling for better roles or moving into software development." },
              { icon: "🏆", title: "Competitive Coders", desc: "Building problem-solving speed for hackathons and coding competitions." },
              { icon: "🚀", title: "Ambitious Beginners", desc: "Ready to commit 30 days to build a real, tangible coding skill." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-brand border border-line hover:border-accent hover:shadow-card transition-all duration-200">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-ink text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">Frequently Asked</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-soft rounded-brand border border-line p-5">
                <h3 className="font-extrabold text-ink text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-[#060D1F] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-brand mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Ready for the Challenge?</h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">30 days. 2,000+ problems. One mentor. Join Monday. Get interview-ready.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] hover:bg-green-700 transition-colors">
              💬 WhatsApp to Enroll
            </a>
            <a href="tel:+919936609430" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px] hover:bg-white/15 transition-colors">
              📞 Call +91 99366 09430
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
