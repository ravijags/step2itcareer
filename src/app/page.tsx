"use client";

import { useEffect, useState } from "react";
import { courses } from "@/lib/courses";
import LeadPopup from "@/components/LeadPopup";

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("popupShown")) return;
    const t = setTimeout(() => {
      setPopupOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPopupOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <HeroSection onOpenLead={() => setPopupOpen(true)} />
      <AlumniMarquee />
      <StatsRow />
      <FeaturedCourses />
      <MicroBatchUSP />
      <PlacementProcess />
      <CareerOutcomes />
      <RecentPlacements />
      <FinalCTA onOpenLead={() => setPopupOpen(true)} />
      <MobileStickyBar onOpenLead={() => setPopupOpen(true)} />
      {popupOpen && (
        <LeadPopup
          submitted={submitted}
          onSubmit={() => setSubmitted(true)}
          onClose={() => { setPopupOpen(false); setSubmitted(false); }}
        />
      )}
    </>
  );
}

function HeroSection({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#0D1330] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(59,91,255,0.15) 0%, transparent 70%)" }} />
      <div className="relative max-w-brand mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-8">
          Live Cohort-Based Bootcamps
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          From Learning to <span className="text-primary">Landing the Job</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Live, mentor-led IT career transition programs engineered for outcomes. Learn in micro-batches of max 5 students and secure your future.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="/courses" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-deep transition-colors text-[15px]">
            Explore Courses
          </a>
          <button onClick={onOpenLead} className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20 text-[15px]">
            Book Free Counseling
          </button>
          <a href="https://wa.me/919936609430" className="px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors text-[15px] flex items-center gap-2">
            WhatsApp Us
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Live Classes", "1:1 Mentorship", "Real Projects", "Placement Support"].map((chip) => (
            <span key={chip} className="px-4 py-2 bg-white/10 text-white/80 text-sm font-semibold rounded-full border border-white/10">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlumniMarquee() {
  const doubled = [1, 2].flatMap(() => [
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold tracking-tight">
        <span style={{ color: "#4285F4" }}>G</span>
        <span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span>
        <span style={{ color: "#EA4335" }}>e</span>
      </span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center gap-2 mx-16">
      <div className="grid grid-cols-2 gap-[2px] w-[22px] h-[22px] shrink-0">
        <div style={{ background: "#F25022" }} className="rounded-[1px]" />
        <div style={{ background: "#7FBA00" }} className="rounded-[1px]" />
        <div style={{ background: "#00A4EF" }} className="rounded-[1px]" />
        <div style={{ background: "#FFB900" }} className="rounded-[1px]" />
      </div>
      <span className="text-[22px] font-semibold text-gray-700 tracking-tight">Microsoft</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <div className="flex flex-col items-start leading-none">
        <span className="text-[22px] font-bold text-gray-900 tracking-tight">amazon</span>
        <svg viewBox="0 0 100 18" width="80" height="12" className="ml-1 mt-0.5">
          <path d="M5 8 Q50 20 95 8" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <polygon points="90,4 98,9 90,14" fill="#FF9900" />
        </svg>
      </div>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-extrabold tracking-[0.15em]" style={{ color: "#1F70C1" }}>IBM</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#007CC3" }}>Infosys</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#CC0000" }}>TCS</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#341C5C" }}>wipro</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#A100FF" }}>Accenture</span>
      <span className="text-[22px] font-bold ml-0.5" style={{ color: "#A100FF" }}>{">"}</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#0070AD" }}>Capgemini</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#86BC25" }}>Deloitte.</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#1A4CA1" }}>Cognizant</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-16">
      <span className="text-[22px] font-bold" style={{ color: "#0076C0" }}>HCL</span>
      <span className="text-[10px] font-bold ml-0.5 align-super" style={{ color: "#0076C0" }}>Tech</span>
    </div>,
  ]);

  return (
    <section className="py-16 bg-soft overflow-hidden">
      <p className="text-center text-[11px] font-extrabold text-primary uppercase tracking-[0.25em] mb-2">
        Our Alumni Work Here
      </p>
      <div className="w-12 h-0.5 bg-primary mx-auto mb-12" />
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, #F6F8FC, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, #F6F8FC, transparent)" }} />
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {doubled}
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  const stats = [
    { value: "1,200+", label: "Students Trained" },
    { value: "800+", label: "Placements" },
    { value: "60+", label: "Hiring Partners" },
    { value: "20+", label: "Expert Trainers" },
    { value: "94%", label: "Placement Rate" },
  ];
  return (
    <section className="py-14 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-brand bg-soft border border-line">
              <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted mt-4">Stats are illustrative and will be updated with verified data before launch</p>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  const featured = courses.filter((c) =>
    ["generative-ai-multi-agent", "data-science-ml-ai", "cpep-customized-professional-excellence"].includes(c.slug)
  );
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Career-Launching Tech Programs</h2>
          <p className="text-muted text-base max-w-xl mx-auto">12 industry-aligned programs with live mentorship, real projects, and guaranteed placement support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((course) => (
            <a key={course.slug} href={`/courses/${course.slug}`} className="bg-white rounded-brand border border-line shadow-card hover:-translate-y-1.5 hover:shadow-deep transition-all duration-200 flex flex-col overflow-hidden">
              <div className="h-36 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${course.categoryColor}18, ${course.categoryColor}30)` }}>
                <span className="text-5xl">
                  {course.slug.includes("generative") ? "🧠" : course.slug.includes("data-science") ? "📊" : "⭐"}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${course.categoryColor}18`, color: course.categoryColor }}>
                    {course.category}
                  </span>
                  <span className="text-xs text-muted font-semibold">{course.duration}</span>
                </div>
                <h3 className="text-[15px] font-extrabold text-ink mb-3 leading-snug">{course.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-base font-extrabold text-ink">{course.feeDisplay}</span>
                  <span className="text-xs font-bold text-primary">Explore</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center">
          <a href="/courses" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-deep transition-colors">
            View All 12 Courses
          </a>
        </div>
      </div>
    </section>
  );
}

function MicroBatchUSP() {
  const features = [
    { icon: "👥", title: "Max 5 Students Per Batch", desc: "You're not a number. Every student gets real attention." },
    { icon: "🗺️", title: "Personalized Roadmap", desc: "Your learning path is built around your goals, not a template." },
    { icon: "📅", title: "Weekly 1:1 Mentor Reviews", desc: "Direct feedback every week, not once a month." },
    { icon: "🏆", title: "Guaranteed Capstone", desc: "Every student ships a real project before graduating." },
    { icon: "🔁", title: "Free Re-attendance", desc: "Attend future batches for free if you need more time." },
    { icon: "🎯", title: "Placement Until Hired", desc: "We don't stop until you have your first offer letter." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Difference</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Micro-Batch Career Accelerator</h2>
          <p className="text-muted text-base max-w-xl mx-auto">Not a classroom. Not a MOOC. A focused, high-accountability program built for real outcomes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-brand bg-soft border border-line">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-[15px] font-extrabold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacementProcess() {
  const steps = [
    "Resume Building", "Placement Training", "Interview Questions",
    "Internships Under Experts", "Real-time Live Projects", "Aptitude Preparation",
    "Personality Development", "Mock Interviews", "Scheduling Interviews", "Get Offer Letter",
  ];
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">From Learning to Landing the Job</h2>
          <p className="text-muted text-base max-w-xl mx-auto">Our 10-step placement process is engineered to get you hired, not just trained.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={step} className="relative p-5 bg-white rounded-brand border border-line text-center">
              <div className="w-8 h-8 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center mx-auto mb-3">
                {i + 1}
              </div>
              <p className="text-[13px] font-bold text-ink leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerOutcomes() {
  const salaryRoadmaps = [
    { from: "4L", to: "8L", role: "Entry Level to Junior", color: "#3B5BFF" },
    { from: "8L", to: "15L", role: "Junior to Mid Level", color: "#FF7A3D" },
    { from: "15L", to: "30L", role: "Mid to Senior Level", color: "#16A34A" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Career Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Your Salary Growth Roadmap</h2>
          <p className="text-muted text-base max-w-xl mx-auto">See where our programs take you — from your first IT job to senior-level packages.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salaryRoadmaps.map((r) => (
            <div key={r.role} className="p-8 rounded-brand border border-line text-center" style={{ background: `${r.color}08` }}>
              <div className="text-4xl font-extrabold mb-2" style={{ color: r.color }}>
                Rs.{r.from} to Rs.{r.to}
              </div>
              <div className="text-sm font-semibold text-muted">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentPlacements() {
  const placements = [
    { name: "Priya S.", track: "Data Science & ML", company: "Microsoft", pkg: "18 LPA" },
    { name: "Rahul K.", track: "Full Stack Engineering", company: "Infosys", pkg: "12 LPA" },
    { name: "Anjali R.", track: "Generative AI", company: "TCS", pkg: "14 LPA" },
    { name: "Vikas M.", track: "Cloud & DevOps", company: "Wipro", pkg: "11 LPA" },
  ];
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Recent Placements</h2>
          <p className="text-xs text-muted mt-2">Names and details are illustrative — real stories coming soon</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placements.map((p) => (
            <div key={p.name} className="bg-white rounded-brand border border-line p-6">
              <div className="w-12 h-12 bg-primary-tint text-primary font-extrabold text-lg rounded-full flex items-center justify-center mb-4">
                {p.name[0]}
              </div>
              <div className="font-extrabold text-ink mb-1">{p.name}</div>
              <div className="text-xs text-muted mb-3">{p.track}</div>
              <div className="text-xs font-bold text-[#16A34A]">Placed at {p.company}</div>
              <div className="text-lg font-extrabold text-ink mt-1">Rs.{p.pkg}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-brand mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Take the Next Leap?</h2>
        <ul className="flex flex-wrap justify-center gap-4 mb-10">
          {["Free 1:1 Counseling", "EMI & Scholarships", "Pay After Placement", "Lifetime Placement Support"].map((item) => (
            <li key={item} className="text-sm font-semibold text-white/80">{item}</li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onOpenLead} className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-soft transition-colors text-[15px]">
            Book Free Counseling
          </button>
          <a href="https://wa.me/919936609430" className="px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors text-[15px]">
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}

function MobileStickyBar({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-line flex">
      <a href="https://wa.me/919936609430" className="flex-1 py-3.5 text-center text-xs font-bold text-[#16A34A] border-r border-line">
        WhatsApp
      </a>
      <button onClick={onOpenLead} className="flex-1 py-3.5 text-center text-xs font-bold text-white bg-primary border-r border-line">
        Apply Now
      </button>
      <a href="tel:+919936609430" className="flex-1 py-3.5 text-center text-xs font-bold text-ink">
        Call Us
      </a>
    </div>
  );
}
