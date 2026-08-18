import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schooling Programs — Step2ITCareer-AI",
  description: "Coding programs for Class 6-12 students. Build future-ready skills with practical, project-based learning.",
};

const programs = [
  {
    class: "Class 6–8",
    fee: "₹5,000",
    title: "Empower Young Minds with Future-Ready Coding Skills",
    desc: "Introduces students to the exciting world of technology through fun, interactive, and project-based learning.",
    color: "#3B5BFF",
    topics: ["Computer Fundamentals", "Coding Logic & Thinking", "Flowcharts & Algorithms", "Block-Based Programming", "Introduction to Python", "Game & Animation Development", "AI & Technology Awareness", "Mini Coding Projects", "Internet Safety & Digital Skills", "Creative Problem Solving"],
    highlights: ["Beginner-Friendly Curriculum", "Interactive Live Classes", "Hands-on Coding Activities", "Weekly Coding Challenges", "Fun Games & Creative Projects", "Small Batch Size", "Individual Mentor Support", "Progress Tracking & Parent Feedback", "Certificate of Completion"],
    skills: ["Logical Thinking", "Critical Thinking", "Creativity & Innovation", "Problem-Solving Skills", "Analytical Reasoning", "Digital Literacy"],
    for: ["Class 6 Students", "Class 7 Students", "Class 8 Students", "Beginners with No Coding Experience"],
  },
  {
    class: "Class 8–10",
    fee: "₹10,000",
    title: "Don't Just Use Technology. Learn to Build It.",
    desc: "The right time to start coding is not when a student enters college. Class 8–10 is the perfect stage to build the thinking skills that technology careers demand.",
    color: "#7C3AED",
    topics: ["Programming Fundamentals", "Variables & Data Types", "Conditions & Loops", "Functions", "Strings & Lists", "Problem Solving", "Basic Data Structures", "Debugging", "OOP Basics", "Coding Challenges", "Mini Projects", "Introduction to AI"],
    highlights: ["One-to-One Online Training", "Skill-Level Based Learning", "Practical Coding Sessions", "Handwritten Coding Practice", "Regular Coding Challenges", "Project-Based Learning", "Personal Doubt Support", "Future-Oriented Technology Exposure"],
    skills: ["Logic", "Coding", "Creativity", "Confidence", "Problem Solving", "Debugging"],
    for: ["Class 8 Students", "Class 9 Students", "Class 10 Students", "Beginners with Some Exposure"],
  },
  {
    class: "Class 10–12",
    fee: "₹10,000",
    title: "From Student to Future Tech Professional",
    desc: "Bridge the gap between school education and real-world technology skills through practical learning, projects and industry-relevant tools.",
    color: "#FF7A3D",
    topics: ["Python & Java", "SQL & Databases", "Git & GitHub", "HTML, CSS & JavaScript", "Data Structures & Algorithms", "AI Fundamentals", "Generative AI & Prompt Engineering", "APIs & Web Services", "Application Development", "Deployment Fundamentals"],
    highlights: ["One-to-One Online Training", "Practical + Project Based", "Industry Technologies", "Real-World Projects", "GitHub Portfolio Building", "AI & GenAI Exposure", "Career Preparation", "Interview Preparation"],
    skills: ["Problem Solving", "Logical Thinking", "Version Control", "AI Productivity", "Project Development", "Technical Communication"],
    for: ["Class 10 Students", "Class 11 Students", "Class 12 Students", "Pre-College Students"],
  },
];

export default function SchoolingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0D1330] py-16 px-6 text-center">
        <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Schooling Programs</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Give Your Child a Head Start</h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">Coding programs designed specifically for school students — Class 6 to Class 12. Build skills that matter for the future.</p>
      </div>

      {/* Programs */}
      {programs.map((prog, idx) => (
        <section key={prog.class} className={`py-16 px-6 ${idx % 2 === 0 ? "bg-soft" : "bg-white"} border-t border-line`}>
          <div className="max-w-brand mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 text-white text-xs font-bold rounded-full" style={{ background: prog.color }}>{prog.class}</span>
                  <span className="text-2xl font-extrabold text-ink">{prog.fee}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">{prog.title}</h2>
                <p className="text-muted leading-relaxed mb-6">{prog.desc}</p>

                <h3 className="font-extrabold text-ink mb-3">What Students Will Learn</h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {prog.topics.map((t) => (
                    <div key={t} className="px-3 py-2 bg-white border border-line rounded-lg text-xs font-semibold text-ink">{t}</div>
                  ))}
                </div>

                <a href="https://wa.me/919936609430"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold rounded-full hover:opacity-90 transition-opacity"
                  style={{ background: prog.color }}>
                  💬 Enroll via WhatsApp
                </a>
              </div>

              <div>
                <h3 className="font-extrabold text-ink mb-4">Program Highlights</h3>
                <div className="space-y-2 mb-6">
                  {prog.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-line text-sm font-semibold text-ink">
                      <span className="font-bold" style={{ color: prog.color }}>✓</span>{h}
                    </div>
                  ))}
                </div>

                <h3 className="font-extrabold text-ink mb-3">Skills Developed</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {prog.skills.map((s) => (
                    <span key={s} className="px-3 py-1.5 text-white text-xs font-bold rounded-full" style={{ background: `${prog.color}CC` }}>{s}</span>
                  ))}
                </div>

                <div className="p-5 rounded-brand text-white" style={{ background: prog.color }}>
                  <h4 className="font-extrabold mb-3">Perfect For</h4>
                  <ul className="space-y-1">
                    {prog.for.map((f) => (
                      <li key={f} className="text-sm text-white/80 flex items-center gap-2">
                        <span className="text-white">→</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-12 px-6 bg-primary text-center">
        <h2 className="text-2xl font-extrabold text-white mb-4">Help Your Child Discover the Joy of Coding</h2>
        <p className="text-white/70 mb-6">Learn • Think • Create • Innovate</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/919936609430" className="px-8 py-4 bg-white text-primary font-bold rounded-full">💬 WhatsApp to Enroll</a>
          <a href="tel:+919936609430" className="px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full">📞 Call Us</a>
        </div>
      </section>
    </div>
  );
}
