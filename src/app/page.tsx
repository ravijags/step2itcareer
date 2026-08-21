"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { courses } from "@/lib/courses";

// Single function to open popup - fires the global event picked up by PopupController in layout
function openPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

export default function HomePage() {
  // Auto-show popup once per session via PopupController event
  useEffect(() => {
    const key = "s2ic_popup_v3";
    if (sessionStorage.getItem(key)) return;
    const t = setTimeout(() => {
      openPopup();
      sessionStorage.setItem(key, "1");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <HeroSection />
      <AlumniMarquee />
      <StatsRow />
      <FeaturedCourses />
      <MicroBatchUSP />
      <PlacementProcess />
      <CareerOutcomes />
      <RecentPlacements />
      <FinalCTA />
      <MobileStickyBar />
    </>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      }
    }, { threshold: 0.05 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center bg-[#060D1F] overflow-hidden">
      <motion.div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #3B5BFF, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #FF7A3D, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      {[...Array(12)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: Math.random() * 4 + 2, height: Math.random() * 4 + 2, background: i % 2 === 0 ? "#3B5BFF" : "#FF7A3D", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: Math.random() * 3 + 3, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }} />
      ))}
      <motion.div style={{ y, opacity }} className="relative max-w-brand mx-auto px-6 py-20 text-center w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-8">
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>⚡</motion.span>
          Live Cohort-Based Bootcamps
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          From Learning to{" "}
          <motion.span className="inline-block"
            style={{ background: "linear-gradient(90deg, #3B5BFF, #7B8FFF, #3B5BFF)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
            Landing the Job
          </motion.span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Live, mentor-led IT career transition programs engineered for outcomes. Learn in micro-batches of max 5 students and secure your future.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3 mb-10 w-full max-w-sm sm:max-w-none mx-auto">
          <div className="flex gap-3 w-full sm:w-auto">
            <motion.a href="/courses" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="flex-1 sm:flex-none px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white font-bold rounded-full text-[14px] sm:text-[15px] shadow-lg shadow-primary/30 text-center">
              Explore Courses
            </motion.a>
            <motion.button onClick={openPopup} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="flex-1 sm:flex-none px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[14px] sm:text-[15px] backdrop-blur-sm">
              Free Counseling
            </motion.button>
          </div>
          <motion.a href="https://wa.me/919936609430" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#16A34A] text-white font-bold rounded-full text-[14px] sm:text-[15px] flex items-center justify-center gap-2 shadow-lg shadow-green-900/30">
            💬 WhatsApp Us
          </motion.a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3">
          {["🎥 Live Classes", "👨‍🏫 1:1 Mentorship", "💼 Real Projects", "🏆 Placement Support"].map((chip, i) => (
            <motion.span key={chip} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="px-4 py-2 bg-white/10 text-white/80 text-sm font-semibold rounded-full border border-white/10 backdrop-blur-sm">
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to top, #ffffff08, transparent)" }} />
    </section>
  );
}

function AlumniMarquee() {
  const doubled = [1, 2].flatMap(() => [
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold tracking-tight">
        <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
      </span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center gap-2 mx-12 md:mx-16">
      <div className="grid grid-cols-2 gap-[2px] w-[18px] h-[18px] md:w-[22px] md:h-[22px] shrink-0">
        <div style={{ background: "#F25022" }} className="rounded-[1px]" />
        <div style={{ background: "#7FBA00" }} className="rounded-[1px]" />
        <div style={{ background: "#00A4EF" }} className="rounded-[1px]" />
        <div style={{ background: "#FFB900" }} className="rounded-[1px]" />
      </div>
      <span className="text-[18px] md:text-[22px] font-semibold text-gray-700 tracking-tight">Microsoft</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <div className="flex flex-col items-start leading-none">
        <span className="text-[18px] md:text-[22px] font-bold text-gray-900 tracking-tight">amazon</span>
        <svg viewBox="0 0 100 18" width="65" height="10" className="ml-1 mt-0.5">
          <path d="M5 8 Q50 20 95 8" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <polygon points="90,4 98,9 90,14" fill="#FF9900" />
        </svg>
      </div>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-extrabold tracking-[0.15em]" style={{ color: "#1F70C1" }}>IBM</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#007CC3" }}>Infosys</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#CC0000" }}>TCS</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#341C5C" }}>wipro</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#A100FF" }}>Accenture{">"}</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#0070AD" }}>Capgemini</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#86BC25" }}>Deloitte.</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#1A4CA1" }}>Cognizant</span>
    </div>,
    <div key={Math.random()} className="inline-flex items-center mx-12 md:mx-16">
      <span className="text-[18px] md:text-[22px] font-bold" style={{ color: "#0076C0" }}>HCL<span className="text-[10px] ml-0.5 align-super">Tech</span></span>
    </div>,
  ]);
  return (
    <section className="py-10 md:py-14 bg-soft overflow-hidden">
      <Reveal>
        <p className="text-center text-[11px] font-extrabold text-primary uppercase tracking-[0.25em] mb-2">Our Alumni Work Here</p>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-8 md:mb-12" />
      </Reveal>
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10" style={{ background: "linear-gradient(to right, #F6F8FC, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10" style={{ background: "linear-gradient(to left, #F6F8FC, transparent)" }} />
        <div className="flex animate-marquee whitespace-nowrap items-center">{doubled}</div>
      </div>
    </section>
  );
}

function StatsRow() {
  const stats = [
    { value: 1200, label: "Students Trained", suffix: "+" },
    { value: 800, label: "Placements", suffix: "+" },
    { value: 60, label: "Hiring Partners", suffix: "+" },
    { value: 20, label: "Expert Trainers", suffix: "+" },
    { value: 94, label: "Placement Rate", suffix: "%" },
  ];
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <motion.div whileHover={{ borderColor: "#3B5BFF", y: -4 }} transition={{ duration: 0.2 }}
                className="text-center p-4 md:p-6 rounded-brand bg-soft border border-line">
                <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs md:text-sm text-muted font-semibold">{s.label}</div>
              </motion.div>
            </Reveal>
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
  const images: Record<string, string> = {
    "generative-ai-multi-agent": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    "data-science-ml-ai": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    "cpep-customized-professional-excellence": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  };
  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Programs</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-4">Career-Launching Tech Programs</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">12 industry-aligned programs with live mentorship, real projects, and guaranteed placement support.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((course, i) => (
            <Reveal key={course.slug} delay={i * 0.06}>
              <motion.a href={`/courses/${course.slug}`} whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(59,91,255,0.2)" }}
                transition={{ duration: 0.3 }} className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col block">
                <div className="h-44 relative overflow-hidden">
                  <img src={images[course.slug]} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }} />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full" style={{ background: "rgba(59,91,255,0.85)", color: "#fff" }}>Max 5 Students</span>
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full" style={{ background: "rgba(22,163,74,0.85)", color: "#fff" }}>Live Mentorship</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-extrabold text-[15px] leading-snug drop-shadow-lg">{course.title}</h3>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-base font-extrabold text-ink">{course.feeDisplay}</span>
                  <span className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-full">Explore →</span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center">
          <motion.a href="/courses" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20">
            View All 12 Courses →
          </motion.a>
        </Reveal>
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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Difference</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-4">Micro-Batch Career Accelerator</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">Not a classroom. Not a MOOC. A focused, high-accountability program built for real outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <motion.div whileHover={{ y: -4, borderColor: "#3B5BFF" }} transition={{ duration: 0.2 }}
                className="p-5 md:p-6 rounded-brand bg-soft border border-line h-full">
                <motion.div className="text-3xl mb-4" whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>{f.icon}</motion.div>
                <h3 className="text-[14px] md:text-[15px] font-extrabold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacementProcess() {
  const steps = ["Resume Building", "Placement Training", "Interview Questions", "Internships Under Experts", "Real-time Live Projects", "Aptitude Preparation", "Personality Development", "Mock Interviews", "Scheduling Interviews", "Get Offer Letter 🎉"];
  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">How It Works</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-4">From Learning to Landing the Job</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">Our 10-step placement process is engineered to get you hired, not just trained.</p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4, borderColor: "#3B5BFF" }} className="relative p-4 md:p-5 bg-white rounded-brand border border-line text-center h-full flex flex-col items-center justify-center">
                <motion.div className="w-7 h-7 md:w-8 md:h-8 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center mb-2 md:mb-3"
                  whileHover={{ scale: 1.15, backgroundColor: "#FF7A3D" }} transition={{ duration: 0.2 }}>
                  {i + 1}
                </motion.div>
                <p className="text-[12px] md:text-[13px] font-bold text-ink leading-snug">{step}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerOutcomes() {
  const roadmaps = [
    { from: "₹4L", to: "₹8L", role: "Entry Level → Junior", color: "#3B5BFF" },
    { from: "₹8L", to: "₹15L", role: "Junior → Mid Level", color: "#FF7A3D" },
    { from: "₹15L", to: "₹30L", role: "Mid → Senior Level", color: "#16A34A" },
  ];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Career Outcomes</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-4">Your Salary Growth Roadmap</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">See where our programs take you — from your first IT job to senior-level packages.</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {roadmaps.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.06}>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}
                className="p-4 md:p-8 rounded-brand border border-line text-center" style={{ background: `${r.color}08` }}>
                <div className="text-lg md:text-4xl font-extrabold mb-1 md:mb-2 leading-tight" style={{ color: r.color }}>{r.from}<br className="md:hidden"/>→ {r.to}</div>
                <div className="text-[10px] md:text-sm font-semibold text-muted leading-snug">{r.role}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentPlacements() {
  const placements = [
    { name: "Priya S.", track: "Data Science & ML", company: "Microsoft", pkg: "₹18 LPA" },
    { name: "Rahul K.", track: "Full Stack Engineering", company: "Infosys", pkg: "₹12 LPA" },
    { name: "Anjali R.", track: "Generative AI", company: "TCS", pkg: "₹14 LPA" },
    { name: "Vikas M.", track: "Cloud & DevOps", company: "Wipro", pkg: "₹11 LPA" },
  ];
  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Success Stories</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-2">Recent Placements</h2>
          <p className="text-xs text-muted mt-2">Names and details are illustrative — real stories coming soon</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {placements.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,21,38,0.15)" }}
                transition={{ duration: 0.3 }} className="bg-white rounded-brand border border-line p-5 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-tint text-primary font-extrabold text-lg rounded-full flex items-center justify-center mb-4">{p.name[0]}</div>
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

function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <motion.div className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="max-w-brand mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6">Ready to Take the Next Leap?</h2>
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
            {["Free 1:1 Counseling", "EMI & Scholarships", "Pay After Placement", "Lifetime Placement Support"].map((item) => (
              <li key={item} className="text-xs md:text-sm font-semibold text-white/80 flex items-center gap-1">
                <span className="text-white/60">✓</span> {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button onClick={openPopup} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full text-[15px] shadow-xl">
              Book Free Counseling
            </motion.button>
            <motion.a href="https://wa.me/919936609430" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] shadow-xl text-center">
              💬 WhatsApp Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MobileStickyBar() {
  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-line flex"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href="https://wa.me/919936609430" className="flex-1 py-3.5 text-center text-xs font-bold text-[#16A34A] border-r border-line flex flex-col items-center justify-center gap-0.5">
        <span>💬</span><span>WhatsApp</span>
      </a>
      <button onClick={openPopup} className="flex-1 py-3.5 text-center text-xs font-bold text-white bg-primary border-r border-line">
        Apply Now
      </button>
      <a href="tel:+919936609430" className="flex-1 py-3.5 text-center text-xs font-bold text-ink flex flex-col items-center justify-center gap-0.5">
        <span>📞</span><span>Call</span>
      </a>
    </motion.div>
  );
}
