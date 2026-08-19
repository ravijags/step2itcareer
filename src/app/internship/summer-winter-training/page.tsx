import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer & Winter Training Internship — Step2ITCareer-AI",
  description: "Build industry-ready skills with live projects, expert mentorship and placement support. 4–8 week programs in 14+ tech tracks. ₹6,000.",
};

const tracks = [
  { name: "Python Programming", icon: "🐍", category: "Programming" },
  { name: "Java Programming", icon: "☕", category: "Programming" },
  { name: "Data Analytics with AI", icon: "📊", category: "Data" },
  { name: "Data Engineering", icon: "🔧", category: "Data" },
  { name: "Artificial Intelligence", icon: "🧠", category: "AI" },
  { name: "Machine Learning", icon: "🤖", category: "AI" },
  { name: "Full Stack Development", icon: "💻", category: "Web" },
  { name: "Web Development", icon: "🌐", category: "Web" },
  { name: "Cyber Security", icon: "🛡️", category: "Security" },
  { name: "SQL & Database Management", icon: "🗄️", category: "Data" },
  { name: "Power BI & Tableau", icon: "📈", category: "Analytics" },
  { name: "AWS Cloud Computing", icon: "☁️", category: "Cloud" },
  { name: "Microsoft Azure", icon: "🔷", category: "Cloud" },
  { name: "Generative AI & Prompt Engineering", icon: "✨", category: "AI" },
];

const timeline = [
  { phase: "Week 1–2", title: "Foundations & Setup", desc: "Technology overview, development environment setup, core concepts, guided hands-on exercises." },
  { phase: "Week 3–4", title: "Core Skills & Projects", desc: "Deep-dive into chosen track, real mini-projects, code reviews, practical assessments." },
  { phase: "Week 5–6", title: "Advanced & Industry Tools", desc: "Industry-grade tools, live project work, team collaboration, mentor reviews." },
  { phase: "Week 7–8", title: "Capstone & Placement Prep", desc: "Capstone project completion, resume & LinkedIn, mock interviews, placement drive." },
];

export default function SummerWinterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#060D1F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #3B5BFF, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="max-w-brand mx-auto px-6 py-16 md:py-24 relative">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a href="/internship" className="text-white/40 hover:text-white/70 text-sm transition-colors">Internship</a>
            <span className="text-white/20">›</span>
            <span className="text-white/60 text-sm">Summer & Winter Training</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 text-primary text-xs font-bold rounded-full uppercase tracking-widest mb-6">
            🎓 4–8 Weeks · ₹6,000 · 14+ Tech Tracks
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            Summer & Winter<br />
            <span style={{ background: "linear-gradient(90deg, #3B5BFF, #7B8FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Training Internship
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Build industry-ready skills during your college break. Work on live projects, get 1:1 mentorship, and earn a certificate that actually counts — across 14+ in-demand tech tracks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919936609430" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full text-[15px] shadow-lg shadow-primary/30 hover:bg-primary-deep transition-colors">
              💬 Apply via WhatsApp
            </a>
            <a href="tel:+919936609430" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px]">
              📞 Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-primary">
        <div className="max-w-brand mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "4–8", label: "Weeks" },
            { value: "14+", label: "Tech Tracks" },
            { value: "₹6,000", label: "Program Fee" },
            { value: "1:1", label: "Mentorship" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-white/60 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Overview + Enrollment Card */}
      <section className="py-14 md:py-20 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">Transform Your Break into a Career Head-Start</h2>
                <p className="text-muted leading-relaxed mb-4">Most internships are about watching. Ours are about doing. You'll work on real live projects in your chosen tech track, review code with a senior mentor, and leave with a portfolio piece and a placement-ready profile.</p>
                <p className="text-muted leading-relaxed">Available every summer and winter — so whether you're in your 2nd year or preparing for campus placements, there's a right time to join.</p>
              </div>

              <div>
                <h3 className="font-extrabold text-ink mb-4">What You Get</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: "🏗️", text: "Live industry project (not a dummy project)" },
                    { icon: "👨‍🏫", text: "Dedicated mentor — same person, every session" },
                    { icon: "📋", text: "Daily structured tasks and weekly milestones" },
                    { icon: "🎖️", text: "Internship completion certificate" },
                    { icon: "📝", text: "Resume and LinkedIn profile optimization" },
                    { icon: "🎤", text: "Mock technical and HR interview rounds" },
                    { icon: "🤝", text: "Placement assistance and referrals" },
                    { icon: "🔁", text: "Lifetime access to alumni community" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-line">
                      <span className="text-lg shrink-0">{item.icon}</span>
                      <span className="text-sm font-semibold text-ink">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div>
              <div className="bg-white rounded-brand border border-line p-6 shadow-card sticky top-24">
                <div className="text-3xl font-extrabold text-ink mb-1">₹6,000</div>
                <div className="text-sm text-muted mb-5">One-time · All inclusive</div>
                <div className="space-y-3 mb-6">
                  {[
                    ["Duration", "4–8 Weeks"],
                    ["Batch Size", "Max 5 Students"],
                    ["Mode", "Online + Classroom"],
                    ["Mentorship", "1:1 Personalized"],
                    ["Certificate", "Yes"],
                    ["Placement Help", "Yes"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center py-2.5 border-b border-line last:border-0">
                      <span className="text-xs text-muted font-semibold">{k}</span>
                      <span className="text-xs font-extrabold text-ink">{v}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/919936609430" className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-deep transition-colors">
                  💬 Apply via WhatsApp
                </a>
                <a href="tel:+919936609430" className="flex items-center justify-center w-full py-3.5 mt-2 bg-soft text-ink font-bold rounded-xl text-sm hover:bg-line transition-colors border border-line">
                  📞 +91 99366 09430
                </a>
                <p className="text-[11px] text-muted text-center mt-4">Free orientation class · No advance required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14 Tech Tracks */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Choose Your Track</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">14+ Internship Tracks</h2>
            <p className="text-muted text-sm mt-2">Pick the technology that matches your career goal</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {tracks.map((track) => (
              <div key={track.name} className="bg-soft rounded-xl border border-line p-4 text-center hover:border-primary hover:shadow-card transition-all duration-200 cursor-default">
                <div className="text-2xl mb-2">{track.icon}</div>
                <div className="text-xs font-extrabold text-ink leading-snug">{track.name}</div>
                <div className="text-[10px] text-primary font-semibold mt-1">{track.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 md:py-20 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Program Flow</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">8-Week Journey</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t, i) => (
              <div key={t.phase} className="bg-white p-5 rounded-brand border border-line relative hover:border-primary hover:shadow-card transition-all duration-200">
                <div className="w-8 h-8 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center mb-4">{i + 1}</div>
                <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{t.phase}</div>
                <h3 className="font-extrabold text-ink text-sm mb-2">{t.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">Who Can Join?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["B.Tech / M.Tech Students", "BCA / MCA Students", "Diploma Students", "Fresh Graduates", "Job Seekers", "Working Professionals"].map((who) => (
              <div key={who} className="bg-soft rounded-xl border border-line p-4 text-center">
                <div className="text-2xl mb-2">
                  {who.includes("B.Tech") ? "🎓" : who.includes("BCA") ? "📚" : who.includes("Diploma") ? "📜" : who.includes("Fresh") ? "🌱" : who.includes("Job") ? "🔍" : "💼"}
                </div>
                <div className="text-xs font-bold text-ink leading-snug">{who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-[#060D1F] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-brand mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Make This Break Count</h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">Build real skills. Ship a real project. Get placement-ready. Apply today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919936609430" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full text-[15px] hover:bg-primary-deep transition-colors">
              💬 Apply via WhatsApp
            </a>
            <a href="tel:+919936609430" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px]">
              📞 Call +91 99366 09430
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
