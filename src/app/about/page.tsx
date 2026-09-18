import { Grain, Slashes } from "@/components/Decor";
import SkillIcon from "@/components/inner/SkillIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Step2ITCareer-AI",
  description: "Meet the team behind Step2ITCareer-AI. EdTech leaders, technology professionals, educators, and career mentors.",
};

const leadership = [
  { name: "Ashvani Srivastava", role: "Founder & CEO", exp: "10+ Years", expertise: "EdTech Strategy • Technology Education • Business Growth • Career Development", initial: "A" },
  { name: "Ankita Srivastava", role: "Co-Founder & COO", exp: "5+ Years", expertise: "EdTech Operations • Learning Delivery • Student Experience • Business Operations", initial: "A" },
  { name: "Ravi Jaglan", role: "Chief Technology Officer (CTO)", exp: "6+ Years", expertise: "Software Architecture • Cloud • AI Platforms • Technology Strategy", initial: "R" },
  { name: "Anupam", role: "Lead Investor & Finance Advisor", exp: "14+ Years", expertise: "Corporate Finance • Fundraising • Financial Strategy • Investment", initial: "A" },
];

const teams = [
  {
    title: "Academic & Curriculum Team",
    color: "#3B5BFF",
    members: [
      { name: "Neha Verma", role: "Head of Curriculum & Learning Design", exp: "9+ Years", expertise: "Curriculum Design • Instructional Design • Project-Based Learning", initial: "N" },
      { name: "Rohan Gupta", role: "Program Director – Technology", exp: "11+ Years", expertise: "IT Programs • Technical Training • Program Management", initial: "R" },
      { name: "Meera Joshi", role: "Learning Experience Designer", exp: "7+ Years", expertise: "Learner Experience • Microlearning • Interactive Content", initial: "M" },
    ],
  },
  {
    title: "AI & Technology Team",
    color: "#7C3AED",
    members: [
      { name: "Aditya Singh", role: "Head of AI & Generative AI", exp: "10+ Years", expertise: "Generative AI • LLMs • AI Applications • Prompt Engineering", initial: "A" },
      { name: "Dr. Sameer Khan", role: "AI & Machine Learning Mentor", exp: "9+ Years", expertise: "Machine Learning • Deep Learning • NLP • Computer Vision", initial: "S" },
      { name: "Kunal Bhatia", role: "Head of Software Engineering", exp: "13+ Years", expertise: "Software Architecture • Python • Java • APIs • Web Technologies", initial: "K" },
      { name: "Dev Sharma", role: "Cloud & DevOps Lead", exp: "9+ Years", expertise: "Cloud Computing • AWS • Azure • DevOps • CI/CD", initial: "D" },
      { name: "Pooja Nair", role: "Cyber Security Lead", exp: "8+ Years", expertise: "Cyber Security • Network Security • Ethical Hacking", initial: "P" },
    ],
  },
  {
    title: "Data & Analytics Team",
    color: "#FF7A3D",
    members: [
      { name: "Rohit Mehra", role: "Head of Data & Analytics", exp: "11+ Years", expertise: "Data Analytics • Business Intelligence • SQL • Power BI • Python", initial: "R" },
      { name: "Isha Kapoor", role: "Data Science & ML Mentor", exp: "8+ Years", expertise: "Data Science • Statistics • Machine Learning • Python", initial: "I" },
      { name: "Nikhil Arora", role: "Data Engineering Lead", exp: "10+ Years", expertise: "Data Engineering • SQL • ETL • Data Pipelines • Cloud", initial: "N" },
    ],
  },
  {
    title: "Career & Industry Team",
    color: "#16A34A",
    members: [
      { name: "Arjun Malhotra", role: "Chief Career Officer (CCO)", exp: "12+ Years", expertise: "Career Strategy • Employability • Talent Development", initial: "A" },
      { name: "Simran Khanna", role: "Head of Career Services", exp: "9+ Years", expertise: "Career Coaching • Resume Strategy • Interview Preparation", initial: "S" },
      { name: "Nandini Rao", role: "Placement & Employability Lead", exp: "7+ Years", expertise: "Placement Preparation • Hiring Trends • Mock Interviews", initial: "N" },
    ],
  },
  {
    title: "Student Success Team",
    color: "#0070AD",
    members: [
      { name: "Priya Kapoor", role: "Head of Student Success", exp: "8+ Years", expertise: "Learner Engagement • Student Experience • Mentoring", initial: "P" },
      { name: "Aman Verma", role: "Student Success Manager", exp: "5+ Years", expertise: "Learner Support • Progress Tracking • Mentoring", initial: "A" },
      { name: "Kavya Sharma", role: "Learning Community Manager", exp: "5+ Years", expertise: "Community Building • Student Engagement • Events", initial: "K" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative z-10 cut-bottom bg-ink2 overflow-hidden pb-24 md:pb-32 py-20 px-6 text-center">
        <Grain />
        <Slashes side="left" tone="primary" opacity={0.09} height={700} />
        <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 text-[#FF9A6C] text-[11px] font-extrabold rounded-full uppercase tracking-[0.16em] mb-4">About Us</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Meet Our Team</h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
          At Step2ITCareer-AI, education meets technology. Our team brings together EdTech leaders, technology professionals, educators, AI specialists, curriculum designers, career mentors, and student-success experts.
        </p>
      </div>

      {/* Mission */}
      <section className="py-16 px-6 bg-soft">
        <div className="max-w-brand mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🎯", title: "Our Mission", desc: "To make learners more skilled, confident and career-ready through practical, personalized, and industry-aligned education." },
              { icon: "👁️", title: "Our Vision", desc: "To build India's most outcome-focused IT career platform — where every student who walks in walks out job-ready." },
              { icon: "💡", title: "Our Approach", desc: "Learn → Build → Showcase → Get Hired. We combine education, technology, industry expertise, and career guidance in one ecosystem." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-brand border border-line">
                <SkillIcon emoji={item.icon} size={40} className="w-fit mb-3" />
                <h3 className="font-extrabold text-ink text-lg mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-brand mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[11px] font-extrabold rounded-full uppercase tracking-[0.18em] mb-4">Leadership</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((m) => (
              <div key={m.name} className="bg-soft rounded-[18px] border border-[#E6E3F7] card-lift tap p-6 text-center hover:border-primary hover:shadow-card transition-all duration-200">
                <div className="w-16 h-16 text-white font-extrabold text-2xl rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--grad-primary)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }}>{m.initial}</div>
                <h3 className="font-extrabold text-ink mb-1">{m.name}</h3>
                <p className="text-xs font-bold text-primary mb-1">{m.role}</p>
                <p className="text-xs text-muted mb-3">{m.exp}</p>
                <p className="text-xs text-muted leading-relaxed">{m.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team sections */}
      {teams.map((team) => (
        <section key={team.title} className="py-12 px-6 bg-soft border-t border-line">
          <div className="max-w-brand mx-auto">
            <h2 className="text-xl font-extrabold text-ink mb-8 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full inline-block" style={{ background: team.color }} />
              {team.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {team.members.map((m) => (
                <div key={m.name} className="bg-white rounded-[18px] border border-[#E6E3F7] card-lift tap p-5 hover:shadow-card transition-all duration-200 flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0"
                    style={{ background: team.color }}>{m.initial}</div>
                  <div>
                    <h3 className="font-extrabold text-ink text-sm mb-0.5">{m.name}</h3>
                    <p className="text-xs font-bold mb-1" style={{ color: team.color }}>{m.role}</p>
                    <p className="text-xs text-muted">{m.exp} • {m.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative z-10 cut-top overlap-up pt-24 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden text-center" style={{ background: "var(--grad-primary)" }}>
        <Grain />
        <Slashes side="right" tone="white" opacity={0.09} height={560} />
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">One Team. One Purpose.</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Different roles. Different expertise. One common objective — to make learners more skilled, confident and career-ready.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/919936609430" className="px-8 py-4 tap bg-white text-primary font-bold rounded-full">Book Free Counseling</a>
          <a href="/courses" className="px-8 py-4 tap bg-[#16A34A] text-white font-bold rounded-full">Explore Programs</a>
        </div>
      </section>
    </div>
  );
}
