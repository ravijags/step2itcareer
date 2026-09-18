"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, type PanInfo } from "framer-motion";
import { courses } from "@/lib/courses";
import { Icon, IconTile } from "@/components/Icons";
import { Grain, Slashes, CornerSlash } from "@/components/Decor";
import Magnetic from "@/components/Magnetic";
import CourseArt from "@/components/CourseArt";

function openPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ───────────────────────── DATA ───────────────────────── */
const PLACEMENTS = [
  { initials: "RS", name: "Rohit S.", location: "Delhi", batch: "Batch 7 · 2024", track: "Data Science & ML", company: "Microsoft", companyColor: "#00A4EF", pkg: "₹18 LPA", quote: "Didn't think I'd make it to Microsoft. The mock interviews here were brutal — exactly what the real ones were like." },
  { initials: "PA", name: "Priya A.", location: "Noida", batch: "Batch 6 · 2024", track: "Generative AI", company: "TCS", companyColor: "#CC0000", pkg: "₹14 LPA", quote: "5 students per batch sounds small but that's exactly why it works. My mentor knew every single gap I had." },
  { initials: "AK", name: "Arjun K.", location: "Bangalore", batch: "Batch 5 · 2023", track: "Full Stack Engineering", company: "Infosys", companyColor: "#007CC3", pkg: "₹12 LPA", quote: "Placed before the program ended. The projects I built here got me shortlisted directly — no cold applying." },
  { initials: "SM", name: "Sneha M.", location: "Mumbai", batch: "Batch 6 · 2024", track: "Cloud & DevOps", company: "Wipro", companyColor: "#341C5C", pkg: "₹11 LPA", quote: "Career switch at 26 with no CS degree. They mapped exactly what I needed and skipped everything I didn't." },
];

export default function HomePage() {
  return (
    <>
      <div className="relative z-10 cut-bottom bg-ink2">
        <HeroSection />
        <SocialProofTicker />
      </div>
      <AlumniMarquee />
      <StatsRow />
      <FeaturedCourses />
      <MicroBatchUSP />
      <PlacementPath />
      <CareerOutcomes />
      <RecentPlacements />
      <FAQSection />
      <FinalCTA />
      <MobileStickyBar />
    </>
  );
}

/* ───────────────────────── PRIMITIVES ───────────────────────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-block px-4 py-1.5 text-[11px] font-extrabold rounded-full uppercase tracking-[0.18em] ${dark ? "bg-white/[0.07] text-white/70 border border-white/10" : "bg-primary/10 text-primary"}`}>
      {children}
    </span>
  );
}

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 1100;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

/* ───────────────────────── HERO ───────────────────────── */
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 60]);
  const opacity = useTransform(scrollY, [160, 760], [1, 0]);

  const outcomes = ["Microsoft", "₹18 LPA", "TCS Digital", "Infosys", "₹14 LPA", "their dream job", "6 months"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setIdx(i => (i + 1) % outcomes.length), 2400);
    return () => clearInterval(iv);
  }, []);

  const batchDate = useRef(new Date(Date.now() + 3 * 86400000 + 4 * 3600000 + 22 * 60000));
  const [cd, setCd] = useState({ d: 3, h: 4, m: 22, s: 0 });
  useEffect(() => {
    const iv = setInterval(() => {
      const diff = batchDate.current.getTime() - Date.now();
      if (diff <= 0) return;
      setCd({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");

  /* Mesh gradient canvas — paused when off-screen, off entirely for reduced motion */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current, section = sectionRef.current;
    if (!canvas || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0, t = 0, visible = true;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const draw = () => {
      if (!visible) return;
      t += 0.004;
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const blob = (cx: number, cy: number, r: number, col: string) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, col); g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      };
      blob(w * (0.18 + 0.1 * Math.sin(t * 0.7)), h * (0.28 + 0.08 * Math.cos(t * 0.5)), w * 0.6, "rgba(59,91,255,0.22)");
      blob(w * (0.82 + 0.08 * Math.cos(t * 0.6)), h * (0.7 + 0.1 * Math.sin(t * 0.4)), w * 0.5, "rgba(255,122,61,0.13)");
      blob(w * (0.55 + 0.16 * Math.sin(t * 0.35 + 1)), h * (0.12 + 0.06 * Math.cos(t * 0.8)), w * 0.4, "rgba(123,91,255,0.16)");
      raf = requestAnimationFrame(draw);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
    }, { threshold: 0.05 });
    io.observe(section);
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex items-center overflow-hidden" style={{ minHeight: "100svh", paddingTop: 56 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <Grain />
      <Slashes side="left" tone="primary" opacity={0.09} height={760} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(7,11,24,0.75) 100%)" }} />

      <div className="relative max-w-brand mx-auto px-6 w-full py-12 md:py-20 lg:py-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* Left — copy */}
        <motion.div style={{ y, opacity }} className="text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase mb-6">
            <Icon.Bolt size={12} /> Live bootcamps · Max 5 students
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="text-[44px] sm:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-1">
            Get Hired.
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.14, ease: EASE }}
            className="text-[44px] sm:text-6xl lg:text-[76px] font-extrabold leading-[1.02] tracking-[-0.03em] mb-5">
            <span className="text-white/30 font-light">Not just </span>
            <span className="grad-text">Trained.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex items-center justify-center lg:justify-start gap-2 mb-5 flex-nowrap">
            <span className="text-white/40 text-[14px] font-medium whitespace-nowrap">Our students land at</span>
            <div className="relative h-8 min-w-[130px] flex items-center justify-center lg:justify-start overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span key={idx}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="absolute text-[14px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, rgba(59,91,255,0.28), rgba(123,91,255,0.28))", color: "#A9B8FF", border: "1px solid rgba(123,91,255,0.4)" }}>
                  {outcomes[idx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
            className="text-[14px] md:text-[16px] text-white/50 max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed">
            Live, mentor-led IT career programs. Micro-batches of max 5 students. Real placement support until your offer letter.
          </motion.p>

          {/* Duotone chips */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7">
            {[{ I: Icon.Video, l: "Live classes" }, { I: Icon.Users, l: "1:1 mentor" }, { I: Icon.Briefcase, l: "Placement support" }].map(({ I, l }) => (
              <span key={l} className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full text-[12px] font-semibold text-white/65 bg-white/[0.05] border border-white/[0.09]">
                <span className="w-6 h-6 rounded-lg bg-primary/20 text-[#8BA4FF] flex items-center justify-center"><I size={13} /></span>{l}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="flex gap-3 justify-center lg:justify-start mb-6">
            <Magnetic className="flex-1 sm:flex-none max-w-[200px]">
              <a href="/courses" className="btn-grad tap block w-full sm:w-auto sm:min-w-[170px] px-4 sm:px-7 py-4 text-white font-extrabold rounded-full text-[14px] sm:text-[15px] text-center whitespace-nowrap">Explore courses</a>
            </Magnetic>
            <Magnetic className="flex-1 sm:flex-none max-w-[200px]">
              <button onClick={openPopup} className="btn-ghost-dark tap block w-full sm:w-auto sm:min-w-[170px] px-4 sm:px-7 py-4 text-white font-bold rounded-full text-[14px] sm:text-[15px] whitespace-nowrap">Free counseling</button>
            </Magnetic>
          </motion.div>

          {/* Countdown + seats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.44 }}
            className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="text-[11px] text-white/40 font-semibold whitespace-nowrap">Batch in</span>
              {[{ v: cd.d, l: "d" }, { v: cd.h, l: "h" }, { v: cd.m, l: "m" }, { v: cd.s, l: "s" }].map((t, i) => (
                <span key={t.l} className={`items-baseline gap-0.5 ${t.l === "s" ? "hidden sm:flex" : "flex"}`}>
                  {i > 0 && <span className="text-white/20 text-xs">:</span>}
                  <span className="text-white font-extrabold text-[14px] tabular-nums">{pad(t.v)}</span>
                  <span className="text-white/30 text-[10px]">{t.l}</span>
                </span>
              ))}
            </div>
            <span className="btn-grad-accent text-[11px] text-white font-extrabold uppercase tracking-wide px-3.5 py-2 rounded-full">2 seats left</span>
          </motion.div>
        </motion.div>

        {/* Right — fanned proof stack (desktop only) */}
        <div className="hidden lg:block"><HeroCardStack /></div>
      </div>
    </section>
  );
}

function HeroCardStack() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setI(v => (v + 1) % PLACEMENTS.length), 3200);
    return () => clearInterval(iv);
  }, []);
  const order = [0, 1, 2].map(k => PLACEMENTS[(i + k) % PLACEMENTS.length]);
  return (
    <div className="relative h-[300px] w-full max-w-[400px] mx-auto">
      <AnimatePresence initial={false}>
        {order.map((p, k) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, y: 40, scale: 0.9, rotate: 0 }}
            animate={{ opacity: k === 0 ? 1 : 0.9 - k * 0.25, y: k * 18, scale: 1 - k * 0.05, rotate: k === 0 ? 0 : k === 1 ? 2.5 : -3 }}
            exit={{ opacity: 0, y: -60, scale: 0.95, rotate: -6 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="absolute inset-x-0 top-0 rounded-[20px] bg-white p-6 card-lift"
            style={{ zIndex: 10 - k, boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}>
            <CornerSlash />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full text-white font-extrabold text-[14px] flex items-center justify-center" style={{ background: "var(--grad-primary)" }}>{p.initials}</div>
              <div><div className="font-extrabold text-ink text-[15px] leading-tight">{p.name}</div><div className="text-[12px] text-muted">{p.location} · {p.batch}</div></div>
              <Icon.Quote size={24} className="ml-auto text-primary/25" />
            </div>
            <p className="text-[13px] text-[#4B5563] leading-relaxed mb-4">{p.quote}</p>
            <div className="border-t border-line pt-3 flex items-center justify-between">
              <div><div className="text-[11px] text-muted">{p.track}</div><div className="text-[13px] font-extrabold" style={{ color: p.companyColor }}>→ {p.company}</div></div>
              <div className="text-[20px] font-extrabold grad-text">{p.pkg}</div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ───────────────────────── TICKER ───────────────────────── */
function SocialProofTicker() {
  const events = [
    { I: Icon.Confetti, c: "#FF9A6C", t: "Rahul from Delhi just enrolled in Generative AI" },
    { I: Icon.Check, c: "#4ADE80", t: "Priya from Noida placed at TCS — ₹14 LPA" },
    { I: Icon.Flame, c: "#FF7A3D", t: "Batch 9 starts in 3 days — 2 seats left" },
    { I: Icon.Confetti, c: "#FF9A6C", t: "Arjun from Bangalore placed at Infosys — ₹12 LPA" },
    { I: Icon.Check, c: "#4ADE80", t: "Sneha from Mumbai completed Cloud & DevOps" },
    { I: Icon.Sparkle, c: "#8BA4FF", t: "Vikram from Hyderabad enrolled in Data Science" },
    { I: Icon.Confetti, c: "#FF9A6C", t: "Ananya from Pune placed at Wipro — ₹11 LPA" },
    { I: Icon.Flame, c: "#FF7A3D", t: "Free counseling slots filling fast" },
    { I: Icon.Check, c: "#4ADE80", t: "Karan from Chennai placed at Accenture — ₹13 LPA" },
  ];
  return (
    <div className="relative border-t border-white/[0.06] overflow-hidden py-3 pb-12 md:pb-16">
      <div className="flex animate-ticker whitespace-nowrap items-center">
        {[...events, ...events].map((e, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-7 text-[12px] font-semibold text-white/55">
            <e.I size={14} className="shrink-0" style={{ color: e.c }} />{e.t}<span className="ml-7 text-white/15">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── ALUMNI ───────────────────────── */
function AlumniMarquee() {
  const L = (name: string, color: string, extra?: string) => (
    <span key={name} className={`inline-flex items-center mx-10 text-[18px] md:text-[22px] font-extrabold ${extra ?? ""}`} style={{ color }}>{name}</span>
  );
  const logos = [
    <span key="google" className="inline-flex items-center mx-10 text-[18px] md:text-[22px] font-extrabold">
      <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
    </span>,
    <span key="microsoft" className="inline-flex items-center gap-2 mx-10">
      <span className="grid grid-cols-2 gap-[2px] w-[18px] h-[18px]"><span style={{ background: "#F25022" }} /><span style={{ background: "#7FBA00" }} /><span style={{ background: "#00A4EF" }} /><span style={{ background: "#FFB900" }} /></span>
      <span className="text-[18px] md:text-[22px] font-semibold text-gray-700">Microsoft</span>
    </span>,
    L("IBM", "#1F70C1", "tracking-[0.15em]"), L("Infosys", "#007CC3"), L("TCS", "#CC0000"), L("wipro", "#341C5C"),
    L("Accenture>", "#A100FF"), L("Capgemini", "#0070AD"), L("Deloitte.", "#86BC25"), L("Cognizant", "#1A4CA1"), L("HCLTech", "#0076C0"),
  ];
  return (
    <section className="relative overlap-up bg-soft pt-16 md:pt-24 pb-10 md:pb-14 overflow-hidden">
      <Reveal>
        <p className="text-center text-[11px] font-extrabold text-primary uppercase tracking-[0.25em] mb-2">Our alumni work here</p>
        <div className="w-8 h-[3px] mx-auto mb-8 rounded" style={{ background: "var(--grad-primary)", transform: "skewX(-20deg)" }} />
      </Reveal>
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to right, #F7F6FF, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to left, #F7F6FF, transparent)" }} />
        <div className="flex animate-marquee whitespace-nowrap items-center opacity-90">{[...logos, ...logos]}</div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */
function StatsRow() {
  const stats = [
    { I: Icon.School, raw: 1200, suffix: "+", label: "Students trained", sub: "since 2021", tone: "primary" as const },
    { I: Icon.Briefcase, raw: 800, suffix: "+", label: "Placements", sub: "across 60+ companies", tone: "primary" as const },
    { I: Icon.Trend, raw: 94, suffix: "%", label: "Placement rate", sub: "within 6 months", tone: "primary" as const },
    { I: Icon.Trophy, display: "₹18 LPA", label: "Highest package", sub: "FY 2024", tone: "primary" as const },
    { I: Icon.Star, display: "4.9", label: "Student rating", sub: "from 800+ reviews", tone: "accent" as const },
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <motion.div whileHover={{ y: -5, boxShadow: "0 18px 40px -10px rgba(59,91,255,0.18), inset 0 1px 0 #fff" }} transition={{ duration: 0.2 }}
                className="relative overflow-hidden p-5 rounded-[18px] bg-soft border border-[#E6E3F7] card-lift tap cursor-default">
                <CornerSlash tone={s.tone} />
                <IconTile tone={s.tone} size={36}><s.I size={17} /></IconTile>
                <div className={`mt-3 text-[26px] md:text-[30px] font-extrabold tracking-[-0.03em] leading-none ${s.tone === "accent" ? "grad-text-accent" : "grad-text"}`}>
                  {"raw" in s && s.raw !== undefined ? <Counter target={s.raw} suffix={s.suffix} /> : s.display}
                </div>
                <div className="mt-1.5 text-[13px] font-bold text-ink">{s.label}</div>
                <div className="text-[12px] text-muted">{s.sub}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── COURSES ───────────────────────── */
function FeaturedCourses() {
  const featured = courses.filter(c => ["generative-ai-multi-agent", "data-science-ml-ai", "cpep-customized-professional-excellence"].includes(c.slug));
  const [active, setActive] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const h = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0, bd = Infinity;
      kids.forEach((k, i) => { const d = Math.abs(k.offsetLeft + k.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = i; } });
      setActive(best);
    };
    el.addEventListener("scroll", h, { passive: true });
    return () => el.removeEventListener("scroll", h);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-soft overflow-hidden">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel>Our programs</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Career-launching tech programs</h2>
          <p className="mt-3 text-muted text-[14px] md:text-[16px] max-w-xl mx-auto">12 industry-aligned programs with live mentorship, real projects, and placement support until your offer.</p>
        </Reveal>
      </div>

      {/* Mobile: snap carousel with peek + active glow · Desktop: 3-up grid */}
      <div ref={rowRef} className="snap-row flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-2 md:hidden" style={{ scrollPaddingInline: 24 }}>
        {featured.map((course, i) => (
          <a key={course.slug} href={`/courses/${course.slug}`}
            className="tap shrink-0 w-[82vw] max-w-[340px] bg-white rounded-[20px] overflow-hidden transition-all duration-300"
            style={{ boxShadow: active === i ? "0 0 0 1.5px rgba(59,91,255,0.55), 0 18px 44px rgba(59,91,255,0.22)" : "0 2px 12px rgba(14,21,38,0.06)", transform: active === i ? "scale(1)" : "scale(0.96)", opacity: active === i ? 1 : 0.75 }}>
            <CourseArt slug={course.slug} category={course.category} title={course.title} />
            <div className="p-4 flex items-center justify-between card-lift">
              <div><div className="text-[18px] font-extrabold text-ink tracking-tight">{course.feeDisplay}</div><div className="text-[12px] text-muted">{course.duration} · live</div></div>
              <span className="btn-grad text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
            </div>
          </a>
        ))}
      </div>
      <div className="flex md:hidden justify-center gap-1.5 mt-4">
        {featured.map((_, i) => (
          <motion.div key={i} animate={{ width: active === i ? 20 : 5, opacity: active === i ? 1 : 0.3 }} transition={{ duration: 0.25 }} className="h-[5px] rounded-full" style={{ background: "var(--grad-primary)" }} />
        ))}
      </div>

      <div className="hidden md:grid max-w-brand mx-auto px-6 grid-cols-3 gap-6">
        {featured.map((course, i) => (
          <Reveal key={course.slug} delay={i * 0.08}>
            <motion.a href={`/courses/${course.slug}`}
              whileHover={{ y: -8, boxShadow: "0 0 0 1.5px rgba(59,91,255,0.5), 0 28px 56px -12px rgba(59,91,255,0.28)" }}
              transition={{ duration: 0.28, ease: EASE }}
              className="group block bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(14,21,38,0.06)" }}>
              <div className="transition-transform duration-500 group-hover:scale-[1.03] origin-center"><CourseArt slug={course.slug} category={course.category} title={course.title} /></div>
              <div className="p-5 flex items-center justify-between card-lift bg-white relative">
                <div><div className="text-[20px] font-extrabold text-ink tracking-tight">{course.feeDisplay}</div><div className="text-[12px] text-muted">{course.duration} · live</div></div>
                <span className="btn-grad text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center mt-10">
        <Magnetic><a href="/courses" className="btn-grad tap inline-flex items-center gap-2 px-8 py-4 text-white font-extrabold rounded-full text-[15px]">View all 12 courses <Icon.ArrowRight size={16} /></a></Magnetic>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── USP ───────────────────────── */
function MicroBatchUSP() {
  const features = [
    { I: Icon.Users, tone: "primary" as const, title: "Max 5 students per batch", desc: "You're not a number. Real 1:1 attention from day one." },
    { I: Icon.Route, tone: "primary" as const, title: "Personalized roadmap", desc: "Built around your goals and background, not a template." },
    { I: Icon.Calendar, tone: "primary" as const, title: "Weekly 1:1 mentor reviews", desc: "Direct feedback every week — not once a month." },
    { I: Icon.Trophy, tone: "primary" as const, title: "Guaranteed capstone", desc: "Ship a real, portfolio-worthy project before graduating." },
    { I: Icon.Refresh, tone: "primary" as const, title: "Free re-attendance", desc: "Attend any future batch for free if you need more time." },
    { I: Icon.Target, tone: "accent" as const, title: "Placement until hired", desc: "We don't stop until your first offer letter is in hand." },
  ];
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel>Our difference</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Micro-batch career accelerator</h2>
          <p className="mt-3 text-muted text-[14px] md:text-[16px] max-w-xl mx-auto">Not a classroom. Not a MOOC. A focused, high-accountability program built for real outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <motion.div whileHover={{ y: -5, boxShadow: "0 18px 40px -10px rgba(59,91,255,0.16), inset 0 1px 0 #fff" }} transition={{ duration: 0.22 }}
                className="relative overflow-hidden h-full p-4 md:p-6 rounded-[18px] bg-soft border border-[#E6E3F7] card-lift tap">
                <CornerSlash tone={f.tone} />
                <IconTile tone={f.tone} size={40}><f.I size={19} /></IconTile>
                <h3 className="mt-3 text-[13px] md:text-[15px] font-extrabold text-ink leading-snug">{f.title}</h3>
                <p className="mt-1.5 text-[12px] md:text-[14px] text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PLACEMENT PATH — the ascent ───────────────────────── */
function PlacementPath() {
  const steps = ["Resume building", "Placement training", "Interview questions", "Internships under experts", "Real-time live projects", "Aptitude preparation", "Personality development", "Mock interviews", "Scheduling interviews", "Offer letter"];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end 55%"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [lit, setLit] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", v => setLit(Math.min(10, Math.floor(v * 10.999))));

  // Diagonal from bottom-left to top-right; labels alternate sides
  const W = 360, H = 470;
  const pts = steps.map((_, i) => ({ x: 34 + (i * (W - 68)) / 9, y: H - 34 - (i * (H - 70)) / 9 }));
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");

  return (
    <section className="py-16 md:py-24 bg-soft relative overflow-hidden">
      <Slashes side="right" tone="primary" opacity={0.05} height={700} dot={false} />
      <div className="relative max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-6 md:mb-10">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Your 10-step climb to the offer</h2>
          <p className="mt-3 text-muted text-[14px] md:text-[16px] max-w-xl mx-auto">Engineered to get you hired, not just trained. Scroll — the path lights up.</p>
        </Reveal>
        <div ref={ref} className="mx-auto max-w-[560px]">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Ten-step placement process drawn as a rising path">
            <defs>
              <linearGradient id="ascent" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#3B5BFF" /><stop offset="1" stopColor="#7B5BFF" /></linearGradient>
              <linearGradient id="ascentGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FF7A3D" /><stop offset="1" stopColor="#FF5E7A" /></linearGradient>
            </defs>
            <path d={d} fill="none" stroke="#DDDAF0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <motion.path d={d} fill="none" stroke="url(#ascent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ pathLength }} />
            {pts.map((p, i) => {
              const on = i < lit;
              const goal = i === 9;
              const right = i < 5;
              const label = steps[i];
              return (
                <g key={i}>
                  {goal && on && <circle cx={p.x} cy={p.y} r="24" fill="none" stroke="#FF7A3D" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 4" />}
                  <motion.circle cx={p.x} cy={p.y} r={goal ? 17 : 13}
                    animate={{ fill: on ? (goal ? "url(#ascentGoal)" : "url(#ascent)") : "#FFFFFF", stroke: on ? "transparent" : "#C9C6E0", scale: on ? 1 : 0.92 }}
                    transition={{ duration: 0.35, ease: EASE }} strokeWidth="2" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
                  <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize={goal ? 12 : 11} fontWeight="800" fill={on ? "#fff" : "#8B8BA0"} style={{ fontFamily: "inherit" }}>{i + 1}</text>
                  <text x={right ? p.x + 20 : p.x - 20} y={p.y + 4} textAnchor={right ? "start" : "end"} fontSize="12" fontWeight="700"
                    fill={on ? (goal ? "#FF7A3D" : "#0E1526") : "#A5A3B8"} style={{ fontFamily: "inherit", transition: "fill 300ms" }}>{label}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CAREER OUTCOMES — dark ───────────────────────── */
function CareerOutcomes() {
  const rows = [
    { from: "₹4L", to: "₹8L", role: "Entry level → Junior", c: "#8BA4FF", bg: "rgba(59,91,255,0.1)", bd: "rgba(59,91,255,0.25)", I: Icon.ArrowUpRight, ml: "mr-10 md:mr-0", goal: false },
    { from: "₹8L", to: "₹15L", role: "Junior → Mid level", c: "#FF9A6C", bg: "rgba(255,122,61,0.1)", bd: "rgba(255,122,61,0.25)", I: Icon.ArrowUpRight, ml: "mx-5 md:mx-0", goal: false },
    { from: "₹15L", to: "₹30L", role: "Mid → Senior level", c: "#4ADE80", bg: "rgba(74,222,128,0.08)", bd: "rgba(74,222,128,0.5)", I: Icon.Trophy, ml: "ml-10 md:ml-0", goal: true },
  ];
  return (
    <section className="relative z-10 cut-both overlap-up bg-ink2 pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden">
      <Grain />
      <Slashes side="left" tone="primary" opacity={0.08} height={720} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.2) 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.25 }} />
      <div className="relative max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel dark>Career outcomes</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-white tracking-[-0.03em] leading-[1.08]">Your salary growth roadmap</h2>
          <p className="mt-3 text-white/45 text-[14px] md:text-[16px] max-w-xl mx-auto">From your first IT job to senior-level packages.</p>
        </Reveal>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-6">
          {rows.map((r, i) => (
            <motion.div key={r.role}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6, boxShadow: `0 28px 60px -14px ${r.c}55, inset 0 1px 0 rgba(255,255,255,0.08)` }}
              className={`relative rounded-[18px] p-5 md:p-8 card-lift-dark flex items-center justify-between ${r.ml} ${r.goal ? "md:mt-0" : ""}`}
              style={{ background: r.bg, border: `${r.goal ? 1.5 : 1}px solid ${r.bd}`, boxShadow: r.goal ? "0 0 40px rgba(74,222,128,0.12), inset 0 1px 0 rgba(255,255,255,0.08)" : undefined }}>
              {r.goal && <span className="absolute -top-2.5 right-4 text-[10px] font-extrabold tracking-[0.15em] px-2.5 py-1 rounded-full text-[#062B12] bg-[#4ADE80]">GOAL</span>}
              <div>
                <div className="text-[12px] text-white/40 mb-1">{r.role}</div>
                <div className={`font-extrabold tracking-[-0.03em] leading-none ${r.goal ? "text-[30px] md:text-[44px]" : "text-[24px] md:text-[34px]"}`} style={{ color: r.c }}>{r.from} → {r.to}</div>
              </div>
              <r.I size={r.goal ? 26 : 22} className="shrink-0" style={{ color: r.c }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PLACEMENTS — deck on mobile, grid on desktop ───────────────────────── */
function PlacementCard({ p, className = "", style }: { p: typeof PLACEMENTS[number]; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative bg-white rounded-[20px] p-5 md:p-6 card-lift overflow-hidden ${className}`} style={style}>
      <CornerSlash />
      <div className="flex items-center gap-3 mb-3.5">
        <div className="w-11 h-11 rounded-full text-white font-extrabold text-[14px] flex items-center justify-center shrink-0" style={{ background: "var(--grad-primary)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }}>{p.initials}</div>
        <div className="min-w-0"><div className="font-extrabold text-ink text-[15px] leading-tight">{p.name}</div><div className="text-[12px] text-muted">{p.location} · {p.batch}</div></div>
        <Icon.Quote size={24} className="ml-auto text-primary/25 shrink-0" />
      </div>
      <p className="text-[13px] md:text-[14px] text-[#4B5563] leading-relaxed mb-4" style={{ minHeight: 84 }}>{p.quote}</p>
      <div className="border-t border-line pt-3 flex items-center justify-between">
        <div><div className="text-[11px] text-muted">{p.track}</div><div className="text-[13px] font-extrabold" style={{ color: p.companyColor }}>→ {p.company}</div></div>
        <div className="text-[20px] font-extrabold grad-text tracking-tight">{p.pkg}</div>
      </div>
    </div>
  );
}

function RecentPlacements() {
  const [i, setI] = useState(0);
  const n = PLACEMENTS.length;
  const next = () => setI(v => (v + 1) % n);
  const prev = () => setI(v => (v - 1 + n) % n);
  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70 || info.velocity.x < -500) next();
    else if (info.offset.x > 70 || info.velocity.x > 500) prev();
  };
  const order = [0, 1, 2].map(k => PLACEMENTS[(i + k) % n]);

  return (
    <section className="relative overlap-up bg-soft pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-8 md:mb-14">
          <SectionLabel>Success stories</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Recent placements</h2>
          <p className="mt-2 text-[12px] text-muted">Names changed for privacy · Real outcomes</p>
        </Reveal>

        {/* Mobile deck */}
        <div className="md:hidden">
          <div className="relative h-[290px] mx-3">
            <AnimatePresence initial={false}>
              {order.map((p, k) => (
                <motion.div key={p.name}
                  drag={k === 0 ? "x" : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.6} onDragEnd={onDragEnd}
                  initial={{ opacity: 0, scale: 0.86, y: 30 }}
                  animate={{ opacity: k === 0 ? 1 : 0.85 - k * 0.3, scale: 1 - k * 0.06, y: k * 12, rotate: k === 0 ? 0 : k === 1 ? 2 : -3, x: 0 }}
                  exit={{ opacity: 0, x: -140, rotate: -10, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-x-0 top-0" style={{ zIndex: 10 - k, touchAction: "pan-y" }}>
                  {k === 0 ? (
                    <PlacementCard p={p} style={{ boxShadow: "0 16px 40px rgba(14,21,38,0.14), inset 0 1px 0 #fff", border: "1px solid #E6E3F7" }} />
                  ) : (
                    <div className="h-[262px] rounded-[20px] bg-white" style={{ border: "1px solid #E6E3F7", boxShadow: "inset 0 1px 0 #fff" }} aria-hidden />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-[12px] text-muted"><Icon.Hand size={15} /> Swipe · {i + 1} of {n}</div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {PLACEMENTS.map((p, k) => (
            <Reveal key={p.name} delay={k * 0.06}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: EASE }} className="h-full">
                <PlacementCard p={p} className="h-full flex flex-col" style={{ border: "1px solid #E6E3F7", boxShadow: "0 2px 12px rgba(14,21,38,0.05), inset 0 1px 0 #fff" }} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(1);
  const faqs = [
    { q: "Are the classes live or recorded?", a: "100% live. Every session is taught in real time by your mentor. Recordings are shared within 24 hours if you miss a class — but attendance is expected. This is not a pre-recorded course." },
    { q: "What if I don't get placed after completing the course?", a: "We keep supporting you until you get placed. No time limit. Future batches free, mock interview sessions, resume reviews — all included until you land an offer." },
    { q: "Can I pay in EMI or after getting placed?", a: "Yes on both. 0% EMI options are available, and eligible candidates can choose Pay After Placement where you pay only after your first salary." },
    { q: "How many hours per week does the course require?", a: "Roughly 15–20 hours — three live sessions of 1.5 hours each, plus assignments, projects and self-study. It's intensive by design." },
    { q: "I have no prior coding experience. Can I still join?", a: "Yes. Most programs start from fundamentals. Many of our placed students had zero coding background when they started — commitment is the only requirement." },
    { q: "What makes this different from Udemy or YouTube?", a: "Live mentorship, accountability and placement support. With max 5 students per batch, your mentor knows your name, your gaps, and follows up when you're stuck." },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Questions students ask</h2>
          <p className="mt-3 text-muted text-[14px]">Real answers. No marketing fluff.</p>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <motion.div onClick={() => setOpen(on ? null : i)}
                  className="relative rounded-[16px] overflow-hidden cursor-pointer tap transition-all duration-300"
                  style={{ background: on ? "#fff" : "#F7F6FF", border: on ? "1.5px solid #3B5BFF" : "1px solid #E6E3F7", boxShadow: on ? "0 12px 32px rgba(59,91,255,0.12)" : "inset 0 1px 0 #fff" }}>
                  {on && <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: "var(--grad-primary)" }} />}
                  <div className="flex items-center justify-between px-5 py-4 md:py-5">
                    <span className="font-bold text-ink text-[14px] md:text-[15px] pr-4 leading-snug">{f.q}</span>
                    <motion.span animate={{ rotate: on ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-primary shrink-0"><Icon.ChevronDown size={18} /></motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div key="a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                        <div className="px-5 pb-5 text-[13px] md:text-[14px] text-[#4B5563] leading-relaxed">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="text-center mt-9">
          <p className="text-[14px] text-muted mb-3">Still have questions?</p>
          <Magnetic><button onClick={openPopup} className="btn-grad tap inline-flex items-center gap-2 px-7 py-3.5 text-white font-extrabold rounded-full text-[14px]">Talk to a counselor <Icon.ArrowRight size={15} /></button></Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA() {
  return (
    <section className="relative z-10 cut-top overlap-up pt-24 md:pt-36 pb-20 md:pb-28 overflow-hidden" style={{ background: "var(--grad-primary)" }}>
      <Grain />
      <Slashes side="right" tone="white" opacity={0.09} height={640} dot={false} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.5 }} />
      <div className="relative max-w-brand mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-[30px] md:text-[48px] font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-4">Ready to take<br className="md:hidden" /> the next step?</h2>
          <p className="text-white/70 text-[14px] md:text-[16px] mb-8">Free 1:1 counseling · EMI and scholarships · Pay after placement · Lifetime placement support</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic className="w-full sm:w-auto"><button onClick={openPopup} className="tap w-full sm:w-auto px-8 py-4 bg-white text-primary font-extrabold rounded-full text-[15px]" style={{ boxShadow: "0 14px 36px rgba(0,0,0,0.2)" }}>Book free counseling</button></Magnetic>
            <Magnetic className="w-full sm:w-auto"><a href="https://wa.me/919936609430" className="tap w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] inline-flex items-center justify-center gap-2" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 12px 30px rgba(0,0,0,0.18)" }}><Icon.WhatsApp size={18} /> WhatsApp now</a></Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── STICKY BAR ───────────────────────── */
function MobileStickyBar() {
  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md flex"
      style={{ paddingBottom: "env(safe-area-inset-bottom)", boxShadow: "0 -1px 0 #E6E3F7, 0 -12px 30px rgba(14,21,38,0.08)" }}>
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--grad-primary)", opacity: 0.6 }} />
      <a href="https://wa.me/919936609430" className="tap flex-1 py-2.5 text-[11px] font-bold text-[#16A34A] border-r border-line flex flex-col items-center justify-center gap-0.5"><Icon.WhatsApp size={20} /><span>WhatsApp</span></a>
      <button onClick={openPopup} className="flex-1 py-2.5 text-[13px] font-extrabold text-white" style={{ background: "var(--grad-primary)" }}>Apply now</button>
      <a href="tel:+919936609430" className="tap flex-1 py-2.5 text-[11px] font-bold text-ink border-l border-line flex flex-col items-center justify-center gap-0.5"><Icon.Phone size={18} /><span>Call</span></a>
    </motion.div>
  );
}
