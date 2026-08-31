"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { courses } from "@/lib/courses";

function openPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

export default function HomePage() {
  useEffect(() => {
    const t = setTimeout(() => openPopup(), 9000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <HeroSection />
      <SocialProofTicker />
      <AlumniMarquee />
      <StatsRow />
      <FeaturedCourses />
      <MicroBatchUSP />
      <PlacementProcess />
      <CareerOutcomes />
      <RecentPlacements />
      <FAQSection />
      <FinalCTA />
      <MobileStickyBar />
    </>
  );
}

/* ─── REVEAL ─── */
function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); }
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

/* ─── COUNTER ─── animated number on scroll into view ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1000;
        const steps = 40;
        const inc = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += inc;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

/* ─── ICONS ─── */
const Icons = {
  WhatsApp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  ),
  Phone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  Users: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  Map: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>),
  Calendar: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>),
  Trophy: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4a2 2 0 01-2-2V5h4"/><path d="M18 9h2a2 2 0 002-2V5h-4"/><path d="M6 5h12v6a6 6 0 01-12 0V5z"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>),
  Refresh: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>),
  Target: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>),
  ChevronDown: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>),
};

/* ════════════════════════════════════
   HERO — mesh gradient + kinetic type
════════════════════════════════════ */
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Kinetic typography — no visibility gap
  const outcomes = ["Microsoft", "₹18 LPA", "TCS Digital", "Infosys", "₹14 LPA", "Dream Job", "6 Months"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(i => (i + 1) % outcomes.length);
    }, 2400);
    return () => clearInterval(iv);
  }, []);

  // Countdown timer — next batch
  const batchDate = useRef(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000 + 22 * 60 * 1000));
  const [countdown, setCountdown] = useState({ d: 3, h: 4, m: 22, s: 0 });
  useEffect(() => {
    const iv = setInterval(() => {
      const diff = batchDate.current.getTime() - Date.now();
      if (diff <= 0) { clearInterval(iv); return; }
      setCountdown({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  // Canvas mesh gradient
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let t = 0;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      t += 0.004;
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      // Blue glow top-left
      const g1x = w * (0.15 + 0.12 * Math.sin(t * 0.7));
      const g1y = h * (0.25 + 0.08 * Math.cos(t * 0.5));
      const g1 = ctx.createRadialGradient(g1x, g1y, 0, g1x, g1y, w * 0.55);
      g1.addColorStop(0, "rgba(59,91,255,0.22)"); g1.addColorStop(1, "rgba(59,91,255,0)");
      ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h);
      // Orange glow bottom-right
      const g2x = w * (0.8 + 0.1 * Math.cos(t * 0.6));
      const g2y = h * (0.7 + 0.1 * Math.sin(t * 0.4));
      const g2 = ctx.createRadialGradient(g2x, g2y, 0, g2x, g2y, w * 0.45);
      g2.addColorStop(0, "rgba(255,122,61,0.14)"); g2.addColorStop(1, "rgba(255,122,61,0)");
      ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
      // Purple glow center-top
      const g3x = w * (0.5 + 0.18 * Math.sin(t * 0.35 + 1));
      const g3y = h * (0.12 + 0.06 * Math.cos(t * 0.8));
      const g3 = ctx.createRadialGradient(g3x, g3y, 0, g3x, g3y, w * 0.38);
      g3.addColorStop(0, "rgba(120,100,255,0.14)"); g3.addColorStop(1, "rgba(120,100,255,0)");
      ctx.fillStyle = g3; ctx.fillRect(0, 0, w, h);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative flex items-center bg-[#060D1F] overflow-hidden" style={{ minHeight: "calc(100svh - 56px)" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.5 }} />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(6,13,31,0.75) 100%)" }} />

      <motion.div style={{ y, opacity }} className="relative max-w-brand mx-auto px-6 text-center w-full py-14 md:py-24 lg:py-32">

        {/* Eyebrow — shorter for mobile */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-bold tracking-widest uppercase mb-6">
          <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>⚡</motion.span>
          Live Bootcamps · Max 5 Students
        </motion.div>

        {/* Headline */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-2">
            Get Hired.
          </h1>
          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.06] tracking-tight mb-5">
            <span className="text-white/40 font-light">Not just </span>
            <span style={{ background: "linear-gradient(135deg,#3B5BFF,#7B8FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Trained.
            </span>
          </h1>
        </motion.div>

        {/* Kinetic outcome — no blink, key-based swap */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6 flex-nowrap">
          <span className="text-white/40 text-sm font-medium whitespace-nowrap">Our students land at</span>
          <div className="relative h-8 min-w-[120px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-extrabold px-3 py-1 rounded-full whitespace-nowrap absolute"
                style={{ background: "rgba(59,91,255,0.2)", color: "#8BA4FF", border: "1px solid rgba(59,91,255,0.35)" }}>
                {outcomes[idx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[13px] md:text-[15px] text-white/50 max-w-md mx-auto mb-7 leading-relaxed">
          Live, mentor-led IT career programs. Micro-batches of max 5 students. Real placement support.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex gap-3 justify-center mb-8 flex-wrap">
          <motion.a href="/courses"
            whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(59,91,255,0.55)" }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 sm:flex-none min-w-[140px] max-w-[200px] px-6 py-3.5 bg-primary text-white font-bold rounded-full text-[14px] shadow-lg shadow-primary/40 text-center">
            Explore Courses
          </motion.a>
          <motion.button onClick={openPopup}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="flex-1 sm:flex-none min-w-[140px] max-w-[200px] px-6 py-3.5 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[14px] backdrop-blur-sm">
            Free Counseling
          </motion.button>
          <motion.a href="https://wa.me/919936609430"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-2 px-6 py-3.5 bg-[#16A34A] text-white font-bold rounded-full text-[14px] shadow-lg">
            <Icons.WhatsApp /> WhatsApp
          </motion.a>
        </motion.div>

        {/* Batch countdown + seats — single row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }}
          className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-[10px] text-white/40 font-semibold uppercase tracking-wider hidden sm:inline">Next batch in</span>
            <span className="text-[10px] text-white/40 font-semibold sm:hidden">Batch in</span>
            <span className="text-white/20 text-xs">→</span>
            {[{ v: countdown.d, l: "d" }, { v: countdown.h, l: "h" }, { v: countdown.m, l: "m" }, { v: countdown.s, l: "s" }].map((t, i) => (
              <span key={t.l} className="flex items-baseline gap-0.5">
                {i > 0 && <span className="text-white/20 text-xs">:</span>}
                <span className="text-white font-extrabold text-sm tabular-nums">{pad(t.v)}</span>
                <span className="text-white/30 text-[10px]">{t.l}</span>
              </span>
            ))}
          </div>
          <span className="text-[10px] text-white font-extrabold uppercase tracking-wide px-3 py-2 rounded-full"
            style={{ background: "#FF7A3D" }}>
            2 seats left
          </span>
        </motion.div>

        {/* Trust stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}
          className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {[{ n: 1200, s: "+", l: "Students Trained" }, { n: 94, s: "%", l: "Placement Rate" }, { n: 60, s: "+", l: "Hiring Partners" }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-lg md:text-2xl font-extrabold text-white">
                <Counter target={s.n} suffix={s.s} />
              </div>
              <div className="text-[10px] text-white/35 font-semibold tracking-wider uppercase mt-0.5">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to top, #F6F8FC, transparent)" }} />
    </section>
  );
}

/* ─── SOCIAL PROOF TICKER ─── */
function SocialProofTicker() {
  const events = [
    "🎉 Rahul from Delhi just enrolled in Generative AI",
    "✅ Priya from Noida placed at TCS — ₹14 LPA",
    "🔥 Batch 9 starts in 3 days — 2 seats left",
    "🎉 Arjun from Bangalore placed at Infosys — ₹12 LPA",
    "✅ Sneha from Mumbai completed Cloud & DevOps",
    "🚀 Vikram from Hyderabad enrolled in Data Science",
    "🎉 Ananya from Pune placed at Wipro — ₹11 LPA",
    "🔥 Free counseling slots filling fast — book now",
    "✅ Karan from Chennai placed at Accenture — ₹13 LPA",
    "🎉 Divya from Noida enrolled in Full Stack Engineering",
  ];
  return (
    <div className="bg-[#060D1F] border-t border-white/5 overflow-hidden py-2.5">
      <div className="flex animate-ticker whitespace-nowrap items-center">
        {[...events, ...events].map((e, i) => (
          <span key={i} className="inline-flex items-center mx-8 text-[11px] font-semibold text-white/55">
            {e}<span className="mx-8 text-white/15">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── ALUMNI MARQUEE ─── */
function AlumniMarquee() {
  const logos = [
    <span key="google" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold">
      <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
    </span>,
    <span key="microsoft" className="inline-flex items-center gap-2 mx-10">
      <span className="grid grid-cols-2 gap-[2px] w-[18px] h-[18px] shrink-0">
        <span style={{ background: "#F25022" }} className="rounded-[1px]" /><span style={{ background: "#7FBA00" }} className="rounded-[1px]" />
        <span style={{ background: "#00A4EF" }} className="rounded-[1px]" /><span style={{ background: "#FFB900" }} className="rounded-[1px]" />
      </span>
      <span className="text-[18px] md:text-[22px] font-semibold text-gray-700">Microsoft</span>
    </span>,
    <span key="amazon" className="inline-flex items-center mx-10">
      <span className="flex flex-col items-start leading-none">
        <span className="text-[18px] md:text-[22px] font-bold text-gray-900">amazon</span>
        <svg viewBox="0 0 100 18" width="60" height="9"><path d="M5 8 Q50 20 95 8" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round"/><polygon points="90,4 98,9 90,14" fill="#FF9900"/></svg>
      </span>
    </span>,
    <span key="ibm" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-extrabold tracking-[0.15em]" style={{ color: "#1F70C1" }}>IBM</span>,
    <span key="infosys" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#007CC3" }}>Infosys</span>,
    <span key="tcs" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#CC0000" }}>TCS</span>,
    <span key="wipro" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#341C5C" }}>wipro</span>,
    <span key="accenture" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#A100FF" }}>{"Accenture>"}</span>,
    <span key="capgemini" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#0070AD" }}>Capgemini</span>,
    <span key="deloitte" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#86BC25" }}>Deloitte.</span>,
    <span key="cognizant" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#1A4CA1" }}>Cognizant</span>,
    <span key="hcl" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-bold" style={{ color: "#0076C0" }}>HCL<span className="text-[10px] ml-0.5 align-super">Tech</span></span>,
  ];
  return (
    <section className="py-10 md:py-14 bg-soft overflow-hidden">
      <Reveal>
        <p className="text-center text-[11px] font-extrabold text-primary uppercase tracking-[0.25em] mb-2">Our Alumni Work Here</p>
        <div className="w-10 h-0.5 bg-primary mx-auto mb-8" />
      </Reveal>
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to right, #F6F8FC, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to left, #F6F8FC, transparent)" }} />
        <div className="flex animate-marquee whitespace-nowrap items-center">{[...logos, ...logos]}</div>
      </div>
    </section>
  );
}

/* ─── STATS with counter animation ─── */
function StatsRow() {
  const stats = [
    { raw: 1200, suffix: "+", label: "Students Trained", sub: "since 2021" },
    { raw: 800, suffix: "+", label: "Placements", sub: "across 60+ companies" },
    { raw: 94, suffix: "%", label: "Placement Rate", sub: "within 6 months" },
    { display: "₹18 LPA", label: "Highest Package", sub: "FY 2024" },
    { display: "4.9★", label: "Student Rating", sub: "from 800+ reviews" },
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <motion.div
                whileHover={{ borderColor: "#3B5BFF", y: -5, boxShadow: "0 16px 36px -8px rgba(59,91,255,0.14)" }}
                transition={{ duration: 0.2 }}
                className="text-center p-5 md:p-6 rounded-brand bg-soft border border-line cursor-default">
                <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">
                  {"raw" in s && s.raw !== undefined
                    ? <Counter target={s.raw} suffix={s.suffix ?? ""} />
                    : ("display" in s ? s.display : "")}
                </div>
                <div className="text-xs md:text-sm text-ink font-bold mb-0.5">{s.label}</div>
                <div className="text-[10px] text-muted">{s.sub}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURED COURSES ─── */
function FeaturedCourses() {
  const featured = courses.filter(c =>
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
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Programs</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-4">Career-Launching Tech Programs</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">12 industry-aligned programs with live mentorship, real projects, and guaranteed placement support.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {featured.map((course, i) => (
            <Reveal key={course.slug} delay={i * 0.08}>
              <motion.a href={`/courses/${course.slug}`}
                whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(59,91,255,0.22)", rotateX: 1, rotateY: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col block">
                <div className="h-36 md:h-44 relative overflow-hidden">
                  <img src={images[course.slug]} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-primary/90 text-white">Max 5 Students</span>
                    <span className="text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-green-600/90 text-white">Live Mentorship</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-extrabold text-[14px] leading-snug">{course.title}</h3>
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
          <motion.a href="/courses" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20">
            View All 12 Courses →
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── MICRO BATCH USP ─── */
function MicroBatchUSP() {
  const features = [
    { Icon: Icons.Users, title: "Max 5 Students Per Batch", desc: "You're not a number. Every student gets real 1:1 attention from day one." },
    { Icon: Icons.Map, title: "Personalized Roadmap", desc: "Your learning path is built around your goals and background, not a template." },
    { Icon: Icons.Calendar, title: "Weekly 1:1 Mentor Reviews", desc: "Direct feedback every single week — not once a month, not on a forum." },
    { Icon: Icons.Trophy, title: "Guaranteed Capstone", desc: "Every student ships a real, portfolio-worthy project before graduating." },
    { Icon: Icons.Refresh, title: "Free Re-attendance", desc: "Attend any future batch for free if you need more time to master a topic." },
    { Icon: Icons.Target, title: "Placement Until Hired", desc: "We don't stop supporting you until your first offer letter is in hand." },
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Our Difference</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-4">Micro-Batch Career Accelerator</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">Not a classroom. Not a MOOC. A focused, high-accountability program built for real outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -5, borderColor: "#3B5BFF", boxShadow: "0 16px 36px -8px rgba(59,91,255,0.12)", rotateX: 1 }}
                transition={{ duration: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-5 md:p-6 rounded-brand bg-soft border border-line h-full">
                <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center mb-3"><f.Icon /></div>
                <h3 className="text-[13px] md:text-[15px] font-extrabold text-ink mb-2 leading-snug">{f.title}</h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PLACEMENT PROCESS ─── */
function PlacementProcess() {
  const steps = ["Resume Building", "Placement Training", "Interview Questions", "Internships Under Experts", "Real-time Live Projects", "Aptitude Preparation", "Personality Development", "Mock Interviews", "Scheduling Interviews", "Get Offer Letter 🎉"];
  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">How It Works</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-4">Our 10-Step Placement Process</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">Engineered to get you hired, not just trained.</p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -5, borderColor: "#3B5BFF", boxShadow: "0 12px 28px -8px rgba(59,91,255,0.12)" }}
                className="relative p-4 md:p-5 bg-white rounded-brand border border-line text-center h-full flex flex-col items-center justify-center">
                <motion.div
                  className="w-8 h-8 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center mb-2 md:mb-3"
                  whileHover={{ backgroundColor: "#FF7A3D", scale: 1.1 }}
                  transition={{ duration: 0.2 }}>{i + 1}</motion.div>
                <p className="text-[12px] md:text-[13px] font-bold text-ink leading-snug">{step}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CAREER OUTCOMES — dark section for premium feel ─── */
function CareerOutcomes() {
  const roadmaps = [
    { from: "₹4L", to: "₹8L", role: "Entry Level → Junior", color: "#6B8AFF", featured: false },
    { from: "₹8L", to: "₹15L", role: "Junior → Mid Level", color: "#FF9A6C", featured: false },
    { from: "₹15L", to: "₹30L", role: "Mid → Senior Level", color: "#4ADE80", featured: true },
  ];
  return (
    <section className="py-16 md:py-20 bg-[#060D1F] relative overflow-hidden">
      {/* subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="max-w-brand mx-auto px-6 relative">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-xs font-bold rounded-full uppercase tracking-wider mb-4">Career Outcomes</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Your Salary Growth Roadmap</h2>
          <p className="text-white/45 text-sm md:text-base max-w-xl mx-auto">From your first IT job to senior-level packages.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {roadmaps.map((r, i) => (
            <motion.div key={r.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, boxShadow: `0 24px 48px -12px ${r.color}40` }}
              className={`rounded-brand border text-center relative overflow-hidden ${r.featured ? "p-8 md:p-12 border-2" : "p-6 md:p-10 border"}`}
              style={{ background: `${r.color}12`, borderColor: r.featured ? r.color : "rgba(255,255,255,0.08)" }}>
              {r.featured && (
                <div className="absolute top-3 right-3 text-[9px] font-extrabold uppercase px-2 py-1 rounded-full text-[#060D1F]"
                  style={{ background: r.color }}>Goal</div>
              )}
              <div className={`font-extrabold mb-2 leading-tight ${r.featured ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"}`}
                style={{ color: r.color }}>
                {r.from} → {r.to}
              </div>
              <div className="text-xs md:text-sm font-semibold text-white/45">{r.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PLACEMENT CARDS — colored initials, no broken photos ─── */
function RecentPlacements() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const placements = [
    { initials: "RS", color: "#3B5BFF", bg: "#EEF2FF", name: "Rohit S.", location: "Delhi", track: "Data Science & ML", company: "Microsoft", companyColor: "#00A4EF", pkg: "₹18 LPA", batch: "Batch 7 · 2024", quote: "Honestly didn't think I'd make it to Microsoft. The mock interviews here were brutal — exactly what real interviews are like." },
    { initials: "PA", color: "#CC0000", bg: "#FEF2F2", name: "Priya A.", location: "Noida", track: "Generative AI", company: "TCS", companyColor: "#CC0000", pkg: "₹14 LPA", batch: "Batch 6 · 2024", quote: "5 students per batch sounds small but that's exactly why it works. My mentor knew every single gap I had." },
    { initials: "AK", color: "#007CC3", bg: "#EFF8FF", name: "Arjun K.", location: "Bangalore", track: "Full Stack Engineering", company: "Infosys", companyColor: "#007CC3", pkg: "₹12 LPA", batch: "Batch 5 · 2023", quote: "Got placed before the program ended. The projects I built here got me shortlisted directly — no cold applying." },
    { initials: "SM", color: "#341C5C", bg: "#F5F3FF", name: "Sneha M.", location: "Mumbai", track: "Cloud & DevOps", company: "Wipro", companyColor: "#341C5C", pkg: "₹11 LPA", batch: "Batch 6 · 2024", quote: "Career switch at 26 with no CS degree. They mapped out exactly what I needed and didn't waste my time on things I didn't." },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = () => setActiveIdx(Math.round(el.scrollLeft / (el.scrollWidth / placements.length)));
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [placements.length]);

  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Success Stories</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-2">Recent Placements</h2>
          <p className="text-xs text-muted mt-2">Names changed for privacy · Real outcomes</p>
        </Reveal>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
          {placements.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className="snap-start shrink-0 w-[270px] md:w-auto">
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(14,21,38,0.15)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-brand border border-line p-5 flex flex-col h-full">
                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg shrink-0"
                    style={{ background: p.bg, color: p.color }}>
                    {p.initials}
                  </div>
                  <div>
                    <div className="font-extrabold text-ink text-[14px] leading-tight">{p.name}</div>
                    <div className="text-[11px] text-muted">{p.location} · {p.batch}</div>
                  </div>
                </div>
                {/* Quote — min-height ensures all cards same layout */}
                <p className="text-[12px] text-muted leading-relaxed mb-4 flex-1" style={{ minHeight: "80px" }}>"{p.quote}"</p>
                {/* Footer — always at bottom */}
                <div className="border-t border-line pt-3 mt-auto">
                  <div className="text-[11px] text-muted mb-1.5">{p.track}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold" style={{ color: p.companyColor }}>→ {p.company}</span>
                    <span className="text-[15px] font-extrabold text-ink">{p.pkg}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {placements.map((_, i) => (
            <motion.div key={i}
              animate={{ width: i === activeIdx ? 20 : 6, opacity: i === activeIdx ? 1 : 0.3 }}
              transition={{ duration: 0.25 }}
              className="h-1.5 rounded-full bg-primary" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Are the classes live or recorded?", a: "100% live. Every session is taught in real-time by your mentor via Google Meet or Zoom. Recordings are shared within 24 hours if you miss a class — but attendance is expected. This is not a pre-recorded course." },
    { q: "What if I don't get placed after completing the course?", a: "We keep supporting you until you get placed. No time limit. You can attend future batches for free, join mock interview sessions, and get resume reviews — all included, at no extra charge — until you land an offer." },
    { q: "Can I pay in EMI or after getting placed?", a: "Yes on both. We offer 0% EMI options through PayRupik and other partners. We also have a Pay After Placement option for eligible candidates where you pay only after you receive your first salary." },
    { q: "How many hours per week does the course require?", a: "Roughly 15–20 hours per week — 3 live sessions of 1.5 hours each, plus assignments, projects, and self-study. It's intensive by design. Half-commitment gives half-results." },
    { q: "I have no prior coding experience. Can I still join?", a: "Yes, most of our programs are designed for complete beginners. We start from fundamentals and build up. The only requirement is commitment and willingness to put in the hours. Many of our placed students had zero coding background when they started." },
    { q: "What makes this different from Udemy or YouTube courses?", a: "Live mentorship, accountability, and placement support. With max 5 students per batch, your mentor knows your name, your gaps, and follows up when you're stuck. We also connect you directly with hiring partners — YouTube won't do that." },
  ];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">FAQ</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-3">Questions Students Ask</h2>
          <p className="text-muted text-sm">Real answers. No marketing fluff.</p>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <motion.div
                whileHover={{ borderColor: open === i ? "#3B5BFF" : "#C4CAD6" }}
                className="border border-line rounded-brand overflow-hidden bg-soft cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex items-center justify-between px-5 py-4 md:py-5">
                  <span className="font-bold text-ink text-[14px] md:text-[15px] pr-4 leading-snug">{faq.q}</span>
                  <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-muted shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="px-5 pb-5 text-[13px] md:text-[14px] text-muted leading-relaxed border-t border-line pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-8">
          <p className="text-sm text-muted mb-3">Still have questions?</p>
          <motion.button onClick={openPopup} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full text-sm">
            Talk to a Counselor →
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
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
          <ul className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10">
            {["Free 1:1 Counseling", "EMI & Scholarships", "Pay After Placement", "Lifetime Placement Support"].map(item => (
              <li key={item} className="text-xs md:text-sm font-semibold text-white/80 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button onClick={openPopup} whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(255,255,255,0.3)" }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full text-[15px] shadow-xl">
              Book Free Counseling
            </motion.button>
            <motion.a href="https://wa.me/919936609430" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] shadow-xl text-center flex items-center justify-center gap-2">
              <Icons.WhatsApp /> WhatsApp Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── MOBILE STICKY BAR ─── */
function MobileStickyBar() {
  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-line flex"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href="https://wa.me/919936609430"
        className="flex-1 py-3 text-center text-[11px] font-bold text-[#16A34A] border-r border-line flex flex-col items-center justify-center gap-0.5">
        <Icons.WhatsApp /><span>WhatsApp</span>
      </a>
      <button onClick={openPopup} className="flex-1 py-3 text-center text-[11px] font-bold text-white bg-primary border-r border-line">
        Apply Now
      </button>
      <a href="tel:+919936609430"
        className="flex-1 py-3 text-center text-[11px] font-bold text-ink flex flex-col items-center justify-center gap-0.5">
        <Icons.Phone /><span>Call</span>
      </a>
    </motion.div>
  );
}
