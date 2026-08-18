"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
        {popupOpen && (
          <LeadPopup
            submitted={submitted}
            onSubmit={() => setSubmitted(true)}
            onClose={() => { setPopupOpen(false); setSubmitted(false); }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── REVEAL WRAPPER ────────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────── */
function HeroSection({ onOpenLead }: { onOpenLead: () => void }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#060D1F] overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #3B5BFF, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #FF7A3D, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: i % 2 === 0 ? "#3B5BFF" : "#FF7A3D",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="relative max-w-brand mx-auto px-6 py-20 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-8"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >⚡</motion.span>
          Live Cohort-Based Bootcamps
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          From Learning to{" "}
          <motion.span
            className="text-primary inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            style={{
              background: "linear-gradient(90deg, #3B5BFF, #7B8FFF, #3B5BFF)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Landing the Job
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Live, mentor-led IT career transition programs engineered for outcomes.
          Learn in micro-batches of max 5 students and secure your future.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-primary text-white font-bold rounded-full text-[15px] shadow-lg shadow-primary/30"
          >
            Explore Courses
          </motion.a>
          <motion.button
            onClick={onOpenLead}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[15px] backdrop-blur-sm"
          >
            Book Free Counseling
          </motion.button>
          <motion.a
            href="https://wa.me/919936609430"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] flex items-center gap-2 shadow-lg shadow-green-900/30"
          >
            💬 WhatsApp Us
          </motion.a>
        </motion.div>

        {/* Stat chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["🎥 Live Classes", "👨‍🏫 1:1 Mentorship", "💼 Real Projects", "🏆 Placement Support"].map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="px-4 py-2 bg-white/10 text-white/80 text-sm font-semibold rounded-full border border-white/10 backdrop-blur-sm"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
    </section>
  );
}

/* ─── ALUMNI MARQUEE ────────────────────────────────────────────────────── */
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
      <Reveal>
        <p className="text-center text-[11px] font-extrabold text-primary uppercase tracking-[0.25em] mb-2">
          Our Alumni Work Here
        </p>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-12" />
      </Reveal>
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, #F6F8FC, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, #F6F8FC, transparent)" }} />
        <div className="flex animate-marquee whitespace-nowrap items-center">{doubled}</div>
      </div>
    </section>
  );
}

/* ─── STATS ROW ─────────────────────────────────────────────────────────── */
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
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-brand bg-soft border border-line hover:border-primary hover:shadow-card transition-all duration-300">
                <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted font-semibold">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-muted mt-4">Stats are illustrative and will be updated with verified data before launch</p>
      </div>
    </section>
  );
}

/* ─── FEATURED COURSES ──────────────────────────────────────────────────── */
function FeaturedCourses() {
  const featured = courses.filter((c) =>
    ["generative-ai-multi-agent", "data-science-ml-ai", "cpep-customized-professional-excellence"].includes(c.slug)
  );
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Career-Launching Tech Programs</h2>
          <p className="text-muted text-base max-w-xl mx-auto">12 industry-aligned programs with live mentorship, real projects, and guaranteed placement support.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((course, i) => (
            <Reveal key={course.slug} delay={i * 0.15}>
              <motion.a
                href={`/courses/${course.slug}`}
                whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(59,91,255,0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-brand border border-line shadow-card flex flex-col overflow-hidden block"
              >
                <div className="h-36 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${course.categoryColor}18, ${course.categoryColor}30)` }}>
                  <span className="text-5xl">{course.slug.includes("generative") ? "🧠" : course.slug.includes("data-science") ? "📊" : "⭐"}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${course.categoryColor}18`, color: course.categoryColor }}>{course.category}</span>
                    <span className="text-xs text-muted font-semibold">{course.duration}</span>
                  </div>
                  <h3 className="text-[15px] font-extrabold text-ink mb-3 leading-snug">{course.title}</h3>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-base font-extrabold text-ink">{course.feeDisplay}</span>
                    <span className="text-xs font-bold text-primary">Explore →</span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center">
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20"
          >
            View All 12 Courses
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── MICRO BATCH USP ───────────────────────────────────────────────────── */
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
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Difference</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Micro-Batch Career Accelerator</h2>
          <p className="text-muted text-base max-w-xl mx-auto">Not a classroom. Not a MOOC. A focused, high-accountability program built for real outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: "#3B5BFF" }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-brand bg-soft border border-line cursor-default"
              >
                <motion.div
                  className="text-3xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {f.icon}
                </motion.div>
                <h3 className="text-[15px] font-extrabold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PLACEMENT PROCESS ─────────────────────────────────────────────────── */
function PlacementProcess() {
  const steps = [
    "Resume Building", "Placement Training", "Interview Questions",
    "Internships Under Experts", "Real-time Live Projects", "Aptitude Preparation",
    "Personality Development", "Mock Interviews", "Scheduling Interviews", "Get Offer Letter",
  ];
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">From Learning to Landing the Job</h2>
          <p className="text-muted text-base max-w-xl mx-auto">Our 10-step placement process is engineered to get you hired, not just trained.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, borderColor: "#3B5BFF" }}
                className="relative p-5 bg-white rounded-brand border border-line text-center"
              >
                <motion.div
                  className="w-8 h-8 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.15, backgroundColor: "#FF7A3D" }}
                  transition={{ duration: 0.2 }}
                >
                  {i + 1}
                </motion.div>
                <p className="text-[13px] font-bold text-ink leading-snug">{step}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CAREER OUTCOMES ───────────────────────────────────────────────────── */
function CareerOutcomes() {
  const salaryRoadmaps = [
    { from: "₹4L", to: "₹8L", role: "Entry Level to Junior", color: "#3B5BFF" },
    { from: "₹8L", to: "₹15L", role: "Junior to Mid Level", color: "#FF7A3D" },
    { from: "₹15L", to: "₹30L", role: "Mid to Senior Level", color: "#16A34A" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Career Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Your Salary Growth Roadmap</h2>
          <p className="text-muted text-base max-w-xl mx-auto">See where our programs take you — from your first IT job to senior-level packages.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salaryRoadmaps.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-brand border border-line text-center cursor-default"
                style={{ background: `${r.color}08` }}
              >
                <div className="text-4xl font-extrabold mb-2" style={{ color: r.color }}>
                  {r.from} → {r.to}
                </div>
                <div className="text-sm font-semibold text-muted">{r.role}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── RECENT PLACEMENTS ─────────────────────────────────────────────────── */
function RecentPlacements() {
  const placements = [
    { name: "Priya S.", track: "Data Science & ML", company: "Microsoft", pkg: "₹18 LPA" },
    { name: "Rahul K.", track: "Full Stack Engineering", company: "Infosys", pkg: "₹12 LPA" },
    { name: "Anjali R.", track: "Generative AI", company: "TCS", pkg: "₹14 LPA" },
    { name: "Vikas M.", track: "Cloud & DevOps", company: "Wipro", pkg: "₹11 LPA" },
  ];
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Recent Placements</h2>
          <p className="text-xs text-muted mt-2">Names and details are illustrative — real stories coming soon</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placements.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,21,38,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-brand border border-line p-6"
              >
                <div className="w-12 h-12 bg-primary-tint text-primary font-extrabold text-lg rounded-full flex items-center justify-center mb-4">
                  {p.name[0]}
                </div>
                <div className="font-extrabold text-ink mb-1">{p.name}</div>
                <div className="text-xs text-muted mb-3">{p.track}</div>
                <div className="text-xs font-bold text-[#16A34A]">Placed at {p.company}</div>
                <div className="text-lg font-extrabold text-ink mt-1">{p.pkg}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─────────────────────────────────────────────────────────── */
function FinalCTA({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className="max-w-brand mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Take the Next Leap?</h2>
          <ul className="flex flex-wrap justify-center gap-4 mb-10">
            {["Free 1:1 Counseling", "EMI & Scholarships", "Pay After Placement", "Lifetime Placement Support"].map((item) => (
              <li key={item} className="text-sm font-semibold text-white/80 flex items-center gap-1">
                <span className="text-white/60">✓</span> {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={onOpenLead}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white text-primary font-bold rounded-full text-[15px] shadow-xl"
            >
              Book Free Counseling
            </motion.button>
            <motion.a
              href="https://wa.me/919936609430"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] shadow-xl"
            >
              💬 WhatsApp Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── MOBILE STICKY BAR ─────────────────────────────────────────────────── */
function MobileStickyBar({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-line flex"
    >
      <a href="https://wa.me/919936609430" className="flex-1 py-3.5 text-center text-xs font-bold text-[#16A34A] border-r border-line">
        💬 WhatsApp
      </a>
      <button onClick={onOpenLead} className="flex-1 py-3.5 text-center text-xs font-bold text-white bg-primary border-r border-line">
        Apply Now
      </button>
      <a href="tel:+919936609430" className="flex-1 py-3.5 text-center text-xs font-bold text-ink">
        📞 Call Us
      </a>
    </motion.div>
  );
}
