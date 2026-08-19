import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schooling Programs — Step2ITCareer-AI",
  description: "Coding programs for Class 6–12 students. Fun, project-based learning with expert mentors. Build future-ready skills early.",
};

const programs = [
  {
    class: "Class 6–8",
    fee: "₹5,000",
    href: "/schooling/class-6-8",
    color: "#3B5BFF",
    bg: "#EEF2FF",
    icon: "🎮",
    tagline: "Beginner Friendly",
    desc: "Fun, interactive coding using block-based programming and Python basics. Games, animations, and creative projects that make kids love technology.",
    highlights: ["Block-Based Programming", "Introduction to Python", "Games & Animations", "Mini Projects", "Parent Progress Reports"],
  },
  {
    class: "Class 8–10",
    fee: "₹10,000",
    href: "/schooling/class-8-10",
    color: "#7C3AED",
    bg: "#F5F3FF",
    icon: "💡",
    tagline: "Build Real Code",
    desc: "Skill-level based learning with real Python, OOP, data structures, and debugging. Students arrive at college with a 2-year head start.",
    highlights: ["1:1 Online Mentorship", "Skill-Level Assessment", "Python & OOP", "Handwritten Code Practice", "Mini Projects"],
  },
  {
    class: "Class 10–12",
    fee: "₹10,000",
    href: "/schooling/class-10-12",
    color: "#FF7A3D",
    bg: "#FFF3EC",
    icon: "🚀",
    tagline: "Pre-College Tech Prep",
    desc: "Python, Java, SQL, Git, GitHub, and AI tools — the full stack a Class 12 student needs to stand out in college and the job market.",
    highlights: ["Python & Java", "GitHub Portfolio", "AI & GenAI Tools", "Interview Prep", "Industry Projects"],
  },
];

export default function SchoolingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#060D1F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="max-w-brand mx-auto px-6 py-16 md:py-24 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 text-primary text-xs font-bold rounded-full uppercase tracking-widest mb-6">
            📚 School Coding Programs · Class 6 to 12
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Give Your Child<br />
            <span style={{ background: "linear-gradient(90deg, #3B5BFF, #7B8FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              a Head Start
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Coding programs designed for Class 6 to Class 12. Fun, interactive, project-based — with expert mentors in micro-batches of max 5 students.
          </p>
        </div>
      </div>

      {/* Program Cards */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="max-w-brand mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <a key={prog.class} href={prog.href}
                className="bg-white rounded-2xl border border-line shadow-card hover:-translate-y-1.5 hover:shadow-deep transition-all duration-300 overflow-hidden group flex flex-col">
                <div className="h-3 w-full" style={{ background: prog.color }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full mb-3" style={{ background: prog.bg, color: prog.color }}>
                        {prog.class} · {prog.tagline}
                      </span>
                      <h2 className="text-xl font-extrabold text-ink">{prog.class}</h2>
                      <p className="text-sm font-semibold" style={{ color: prog.color }}>{prog.tagline}</p>
                    </div>
                    <div className="text-3xl shrink-0">{prog.icon}</div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6">{prog.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {prog.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs font-semibold text-ink">
                        <span className="font-bold" style={{ color: prog.color }}>✓</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-line">
                    <div className="text-2xl font-extrabold text-ink">{prog.fee}</div>
                    <span className="inline-flex items-center gap-1.5 px-5 py-2.5 text-white text-sm font-bold rounded-full group-hover:opacity-90 transition-opacity" style={{ background: prog.color }}>
                      View Program →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 bg-white">
        <div className="max-w-brand mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">Why Parents Choose Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "👥", title: "Max 5 Students", desc: "Real individual attention, not a classroom of 30" },
              { icon: "👨‍🏫", title: "Expert Mentors", desc: "Industry professionals who love teaching kids" },
              { icon: "🏗️", title: "Project-Based", desc: "Kids build real things, not just read theory" },
              { icon: "📊", title: "Progress Updates", desc: "Weekly reports so parents stay informed" },
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
        <h2 className="text-2xl font-extrabold text-white mb-4">Help Your Child Discover the Joy of Coding</h2>
        <p className="text-white/70 mb-6">Learn · Think · Create · Innovate</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/919936609430" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-soft transition-colors">💬 WhatsApp to Enroll</a>
          <a href="tel:+919936609430" className="w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors">📞 Call Us</a>
        </div>
      </section>
    </div>
  );
}
