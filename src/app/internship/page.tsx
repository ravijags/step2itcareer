import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Programs — Step2ITCareer-AI",
  description: "30-Day Coding Challenge and Summer/Winter Training Internship programs at Step2ITCareer-AI.",
};

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0D1330] py-16 px-6 text-center">
        <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Internship Programs</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Build Real Skills.<br />Get Real Experience.</h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">Intensive programs designed to give students, freshers, and career-switchers hands-on experience with live projects, expert mentorship, and placement support.</p>
      </div>

      {/* 30-Day Challenge */}
      <section className="py-16 px-6 bg-soft">
        <div className="max-w-brand mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent-tint text-accent text-xs font-bold rounded-full uppercase tracking-wider mb-4">Program 1</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">30-Day Coding Challenge</h2>
              <p className="text-muted leading-relaxed mb-6">Master Java or Python with 2,000+ Coding Practice Programs. An intensive program designed to build a strong programming foundation through structured daily learning and expert mentorship.</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Duration", value: "30 Days" },
                  { label: "Fee", value: "₹10,000" },
                  { label: "Language", value: "Java or Python" },
                  { label: "Mode", value: "Live Interactive" },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-4 rounded-xl border border-line">
                    <div className="text-xs text-muted mb-1">{item.label}</div>
                    <div className="font-extrabold text-ink">{item.value}</div>
                  </div>
                ))}
              </div>

              <h3 className="font-extrabold text-ink mb-4">Why Join?</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Practice 2,000+ competitive programming questions",
                  "Improve logical thinking and problem-solving skills",
                  "Build coding consistency with daily assignments",
                  "Get personalized mentor support and doubt-clearing",
                  "Work on real-world coding exercises and mini projects",
                  "Prepare for coding rounds and technical interviews",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-[#16A34A] font-bold mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/919936609430" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-deep transition-colors">
                💬 Enroll via WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-extrabold text-ink mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {["Programming Fundamentals", "Variables & Data Types", "Conditional Statements & Loops", "Functions & Methods", "Arrays & Strings", "Object-Oriented Programming", "Exception Handling", "File Handling", "Data Structures", "Sorting Algorithms", "Competitive Programming", "Interview Coding Questions"].map((topic) => (
                  <div key={topic} className="bg-white p-3 rounded-xl border border-line text-xs font-semibold text-ink">{topic}</div>
                ))}
              </div>

              <div className="bg-primary p-6 rounded-brand text-white">
                <h4 className="font-extrabold mb-4">Program Highlights</h4>
                <ul className="space-y-2">
                  {["2,000+ Programming Questions", "Daily Coding Tasks", "Hands-on Mini Projects", "1:1 Mentorship", "Resume Building Support", "Interview Preparation", "Completion Certificate"].map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="text-accent">⚡</span>{h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer/Winter Internship */}
      <section className="py-16 px-6 bg-white border-t border-line">
        <div className="max-w-brand mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Program 2</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">Summer & Winter Training Internship</h2>
              <p className="text-muted leading-relaxed mb-6">Build Industry-Ready Skills with Live Projects, Expert Mentorship & Placement Support. Transform academic knowledge into real-world expertise.</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Duration", value: "4–8 Weeks" },
                  { label: "Fee", value: "₹10,000" },
                  { label: "Mode", value: "Online & Classroom" },
                  { label: "Mentorship", value: "1:1 Personalized" },
                ].map((item) => (
                  <div key={item.label} className="bg-soft p-4 rounded-xl border border-line">
                    <div className="text-xs text-muted mb-1">{item.label}</div>
                    <div className="font-extrabold text-ink">{item.value}</div>
                  </div>
                ))}
              </div>

              <h3 className="font-extrabold text-ink mb-4">Internship Programs Available</h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {["Python Programming", "Java Programming", "Data Analytics with AI", "Data Engineering", "Artificial Intelligence", "Machine Learning", "Full Stack Development", "Web Development", "Cyber Security", "SQL & Database Management", "Power BI & Tableau", "AWS Cloud Computing", "Microsoft Azure", "Generative AI & Prompt Engineering"].map((prog) => (
                  <div key={prog} className="px-3 py-2 bg-soft border border-line rounded-lg text-xs font-semibold text-ink">{prog}</div>
                ))}
              </div>

              <a href="https://wa.me/919936609430" className="inline-flex items-center gap-2 px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                💬 Apply via WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-extrabold text-ink mb-4">Program Highlights</h3>
              <div className="space-y-3 mb-6">
                {["Live Industry Projects", "Hands-on Practical Sessions", "Daily Coding Challenges", "Project Mentorship", "Performance Assessments", "Internship Completion Certificate", "Placement Assistance", "Resume & LinkedIn Profile Development", "Mock Technical & HR Interviews"].map((h) => (
                  <div key={h} className="flex items-center gap-3 p-3 bg-soft rounded-xl border border-line text-sm font-semibold text-ink">
                    <span className="text-primary">✓</span>{h}
                  </div>
                ))}
              </div>

              <div className="bg-[#0D1330] p-6 rounded-brand text-white">
                <h4 className="font-extrabold mb-2">Who Can Join?</h4>
                <ul className="space-y-1">
                  {["B.Tech / M.Tech Students", "BCA / MCA Students", "Diploma Students", "Fresh Graduates", "Job Seekers", "Working Professionals"].map((w) => (
                    <li key={w} className="text-sm text-white/70 flex items-center gap-2">
                      <span className="text-accent">→</span>{w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-primary text-center">
        <h2 className="text-2xl font-extrabold text-white mb-4">Ready to Start Your Journey?</h2>
        <p className="text-white/70 mb-6">Join the internship program and gain the skills, experience, and confidence to excel in the IT industry.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/919936609430" className="px-8 py-4 bg-white text-primary font-bold rounded-full">💬 WhatsApp to Enroll</a>
          <a href="tel:+919936609430" className="px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full">📞 Call Us</a>
        </div>
      </section>
    </div>
  );
}
