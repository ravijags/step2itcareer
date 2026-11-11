"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, type PanInfo } from "framer-motion";
import { courses } from "@/lib/courses";
import { Icon, IconTile } from "@/components/Icons";
import { Grain, Slashes } from "@/components/Decor";
import { HERO_PROGRAMS, HeroStories, HeroDeck } from "@/components/HeroPrograms";
import Magnetic from "@/components/Magnetic";
import CourseArt from "@/components/CourseArt";
import WorkshopButton from "@/components/inner/WorkshopButton";
import SkillIcon from "@/components/inner/SkillIcon";
import { workshops } from "@/lib/workshops";

function openPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MotionLink = motion.create(Link);

/* ───────────────────────── DATA ───────────────────────── */
/* Sample stories — fresher-level companies and packages, kept believable. Names changed for privacy. */
const PLACEMENTS = [
  { initials: "RS", name: "Rohit S.", location: "Delhi", tag: "B.Com → Analyst", track: "Data Analytics", company: "Accenture", companyColor: "#A100FF", pkg: "₹7 LPA", quote: "I came from B.Com and thought analytics wasn't for me. The mock interviews were tougher than the real one." },
  { initials: "PA", name: "Priya A.", location: "Noida", tag: "Fresher", track: "Generative AI", company: "TCS", companyColor: "#CC0000", pkg: "₹5.5 LPA", quote: "5 students per batch sounds small but that's exactly why it works. My mentor knew every single gap I had." },
  { initials: "AK", name: "Arjun K.", location: "Ghaziabad", tag: "Final-year student", track: "Full Stack (MERN)", company: "Infosys", companyColor: "#007CC3", pkg: "₹6 LPA", quote: "Got my offer before the program ended. The projects I built here got me shortlisted — no cold applying." },
  { initials: "SM", name: "Sneha M.", location: "Gurugram", tag: "Career switch at 26", track: "Cloud & DevOps", company: "Wipro", companyColor: "#341C5C", pkg: "₹9 LPA", quote: "Career switch at 26 with no CS degree. They mapped exactly what I needed and skipped everything I didn't." },
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
      <InternshipsAndWorkshops />
      <MicroBatchUSP />
      <MentorSection />
      <PlacementPath />
      <CareerOutcomes />
      <RecentPlacements />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

/* ───────────────────────── PRIMITIVES ───────────────────────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px 120px 0px" }}
      transition={{ duration: 0.4, delay, ease: EASE }}
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

  const [prog, setProg] = useState(0);
  const role = HERO_PROGRAMS[prog].role;

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
    <section ref={sectionRef} className="hero-h relative flex items-center overflow-hidden" style={{ paddingTop: 56 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <Grain />
      <Slashes side="left" tone="primary" opacity={0.09} height={760} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, transparent 45%, rgba(7,11,24,0.55) 100%)" }} />

      <div className="relative max-w-brand mx-auto px-6 w-full py-7 md:py-16 lg:py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
        {/* Left — copy */}
        <motion.div style={{ y, opacity }} className="text-center lg:text-left">
          <motion.div data-rise style={{ "--d": "0s", "--ry": "10px" } as React.CSSProperties}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.16em] uppercase mb-4 md:mb-6">
            <Icon.Bolt size={12} /> Live · Mentor-led · Max 5 per batch
          </motion.div>

          <motion.h1 data-rise style={{ "--d": "0.08s", "--ry": "18px" } as React.CSSProperties}
            className="text-[40px] sm:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-1">
            Get Hired<span className="-ml-[0.04em]">.</span>
          </motion.h1>
          <motion.h1 data-rise style={{ "--d": "0.14s", "--ry": "18px" } as React.CSSProperties}
            className="text-[40px] sm:text-6xl lg:text-[72px] font-extrabold leading-[1.02] tracking-[-0.03em] mb-4 md:mb-5">
            <span className="text-white/45 font-light">Not just </span>
            <span className="grad-text">Trained<span className="-ml-[0.04em]">.</span></span>
          </motion.h1>

          {/* Kinetic role pill — synced with the program cards */}
          <motion.div data-rise style={{ "--d": "0.3s", "--ry": "0px" } as React.CSSProperties}
            className="flex items-center justify-center lg:justify-start gap-2 mb-4 md:mb-5 flex-nowrap">
            <span className="text-white/60 text-[14px] font-medium whitespace-nowrap">Train for roles like</span>
            <div className="relative h-8 min-w-[200px] flex items-center justify-start overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span key={role}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute text-[14px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ background: `${HERO_PROGRAMS[prog].color}33`, color: "#fff", border: `1px solid ${HERO_PROGRAMS[prog].color}88` }}>
                  {role}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p data-rise style={{ "--d": "0.22s", "--ry": "10px" } as React.CSSProperties}
            className="hidden md:block text-[16px] text-white/55 max-w-md mx-auto lg:mx-0 mb-7 leading-relaxed">
            Live, mentor-led IT programs with AI built into every course. 5 learners per batch, real projects, and placement support.
          </motion.p>

          {/* Phones: program stories sit right under the headline */}
          <motion.div data-rise style={{ "--d": "0.26s", "--ry": "10px" } as React.CSSProperties} className="lg:hidden mb-5">
            <HeroStories index={prog} setIndex={setProg} />
          </motion.div>

          {/* CTAs */}
          <motion.div data-rise style={{ "--d": "0.3s", "--ry": "10px" } as React.CSSProperties}
            className="flex gap-3 justify-center lg:justify-start mb-5">
            <Magnetic className="flex-1 sm:flex-none max-w-[200px]">
              <Link href="/courses" className="btn-grad tap block w-full sm:w-auto sm:min-w-[170px] px-4 sm:px-7 py-3.5 sm:py-4 text-white font-extrabold rounded-full text-[14px] sm:text-[15px] text-center whitespace-nowrap">Explore programs</Link>
            </Magnetic>
            <Magnetic className="flex-1 sm:flex-none max-w-[200px]">
              <button onClick={openPopup} className="btn-ghost-dark tap block w-full sm:w-auto sm:min-w-[170px] px-4 sm:px-7 py-3.5 sm:py-4 text-white font-bold rounded-full text-[14px] sm:text-[15px] whitespace-nowrap">Free counseling</button>
            </Magnetic>
          </motion.div>

          {/* "I'm a…" — one tap sorts the catalogue for your situation */}
          <motion.div data-rise style={{ "--d": "0.4s", "--ry": "0px" } as React.CSSProperties}
            className="flex items-center justify-start sm:justify-center lg:justify-start gap-1.5 overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            <span className="shrink-0 text-[12px] text-white/50 font-semibold whitespace-nowrap mr-0.5">I&apos;m a…</span>
            {AUDIENCE_CHIPS.map((a) => (
              <Link key={a.key} href={`/courses?for=${a.key}`}
                className="tap shrink-0 text-[12px] font-bold px-2.5 sm:px-3 py-1.5 rounded-full text-white/80 bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.12] hover:text-white transition-colors">
                {a.label}
              </Link>
            ))}
          </motion.div>
          <motion.p data-rise style={{ "--d": "0.46s", "--ry": "0px" } as React.CSSProperties}
            className="hidden md:block mt-5 text-[12.5px] text-white/40">New batches every month · 5 seats each · <button onClick={openPopup} className="underline underline-offset-2 hover:text-white">Book a free counseling call →</button></motion.p>
        </motion.div>

        {/* Right — program deck (desktop) */}
        <div className="hidden lg:block"><HeroDeck index={prog} setIndex={setProg} /></div>
      </div>
    </section>
  );
}

const AUDIENCE_CHIPS = [
  { key: "student", label: "Student" },
  { key: "fresher", label: "Fresher" },
  { key: "working", label: "Working pro" },
  { key: "switching", label: "Switching to IT" },
];

/* ───────────────────────── TICKER ───────────────────────── */
function SocialProofTicker() {
  const events = [
    { I: Icon.Sparkle, c: "#8BA4FF", t: "Free AI Agent workshop every Saturday" },
    { I: Icon.Medal, c: "#FF9A6C", t: "Every career program includes an internship + certificate" },
    { I: Icon.Bolt, c: "#FF7A3D", t: "New: AI Engineer — Agents & Automation" },
    { I: Icon.Users, c: "#4ADE80", t: "Max 5 learners per batch — your mentor knows your name" },
    { I: Icon.Layers, c: "#8BA4FF", t: "Start with a 4-week course, upgrade later and pay only the difference" },
    { I: Icon.Mobile, c: "#FF9A6C", t: "Build your first app in 2 hours — free, every Sunday" },
    { I: Icon.Video, c: "#4ADE80", t: "100% live classes — online, offline or hybrid" },
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
  // Companies a fresher can realistically join from a small batch. Uniform muted wordmarks, brand colour on hover.
  const logos: [string, string][] = [
    ["TCS", "#CC0000"], ["Infosys", "#007CC3"], ["Wipro", "#341C5C"], ["HCLTech", "#0076C0"],
    ["Cognizant", "#1A4CA1"], ["Accenture", "#A100FF"], ["Capgemini", "#0070AD"], ["Tech Mahindra", "#E31837"],
  ];
  const row = logos.map(([name, color]) => (
    <span key={name} className="alumni-logo inline-flex items-center mx-8 md:mx-12 text-[19px] md:text-[23px] font-extrabold tracking-[-0.01em] text-[#9A98B0] transition-colors duration-200 cursor-default"
      style={{ ["--brand" as string]: color } as React.CSSProperties}>{name}</span>
  ));
  return (
    <section className="relative overlap-up bg-soft pt-16 md:pt-24 pb-10 md:pb-14 overflow-hidden">
      <Reveal>
        <p className="text-center text-[11px] font-extrabold text-primary uppercase tracking-[0.25em] mb-2">Where our learners work</p>
        <div className="w-8 h-[3px] mx-auto mb-8 rounded" style={{ background: "var(--grad-primary)", transform: "skewX(-20deg)" }} />
      </Reveal>
      <div className="relative flex" style={{ maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)" }}>
        <div className="flex animate-marquee whitespace-nowrap items-center">{row}{row.map((el, i) => <span key={`d${i}`} aria-hidden>{el}</span>)}</div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */
function StatsRow() {
  const stats = [
    { I: Icon.School, raw: 350, suffix: "+", label: "Learners mentored", sub: "across all programs", tone: "primary" as const },
    { I: Icon.Briefcase, raw: 120, suffix: "+", label: "Placed", sub: "across 40+ companies", tone: "primary" as const },
    { I: Icon.Trophy, display: "₹9 LPA", label: "Highest package", sub: "career-switcher offer", tone: "primary" as const },
    { I: Icon.Star, display: "4.8", label: "Learner rating", sub: "from 200+ reviews", tone: "accent" as const },
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="relative overflow-hidden h-full p-5 rounded-[18px] bg-soft border border-[#E6E3F7] card-lift lift cursor-default">
                <IconTile tone={s.tone} size={36}><s.I size={17} /></IconTile>
                <div className={`mt-3 text-[26px] md:text-[30px] font-extrabold tracking-[-0.03em] leading-none ${s.tone === "accent" ? "grad-text-accent" : "grad-text"}`}>
                  {"raw" in s && s.raw !== undefined ? <Counter target={s.raw} suffix={s.suffix} /> : s.display}
                </div>
                <div className="mt-1.5 text-[13px] font-bold text-ink">{s.label}</div>
                <div className="text-[12px] text-muted">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── COURSES ───────────────────────── */
function FeaturedCourses() {
  const featured = ["ai-engineer-agents-automation", "ai-powered-data-analyst", "java-full-stack-ai", "mern-full-stack-ai", "mobile-app-developer-ai", "data-scientist-ml-genai"]
    .map((slug) => courses.find((c) => c.slug === slug)!).filter(Boolean);
  const starters = ["ai-productivity", "ai-assisted-coding", "python-programming", "core-java", "flutter-first-app", "sql-excel"]
    .map((slug) => courses.find((c) => c.slug === slug)!).filter(Boolean);
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
          <SectionLabel>AI-native programs</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Pick a role. We&apos;ll get you there.</h2>
          <p className="mt-3 text-muted text-[14px] md:text-[16px] max-w-xl mx-auto">AI is built into every course. Live mentors, max 5 per batch, real projects — and a certificate plus internship with every career program.</p>
        </Reveal>
      </div>

      {/* Mobile: snap carousel with peek + active glow · Desktop: 3-up grid */}
      <div ref={rowRef} className="snap-row flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-2 md:hidden" style={{ scrollPaddingInline: 24 }}>
        {featured.map((course, i) => (
          <Link key={course.slug} href={`/courses/${course.slug}`}
            className="tap shrink-0 w-[82vw] max-w-[340px] bg-white rounded-[20px] overflow-hidden transition-all duration-300"
            style={{ boxShadow: active === i ? "0 0 0 1.5px rgba(59,91,255,0.55), 0 18px 44px rgba(59,91,255,0.22)" : "0 2px 12px rgba(14,21,38,0.06)", transform: active === i ? "scale(1)" : "scale(0.96)", opacity: active === i ? 1 : 0.75 }}>
            <CourseArt slug={course.slug} category={course.category} title={course.title} priority={i === 0} tag={course.hot ? "Trending" : "Career"} />
            <div className="p-4 flex items-center justify-between card-lift">
              <div><div className="text-[15px] font-extrabold text-ink tracking-tight">{course.duration} · live</div><div className="text-[12px] text-muted">Certificate + internship</div></div>
              <span className="btn-grad text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex md:hidden justify-center gap-1.5 mt-4">
        {featured.map((_, i) => (
          <motion.div key={i} animate={{ width: active === i ? 20 : 5, opacity: active === i ? 1 : 0.3 }} transition={{ duration: 0.25 }} className="h-[5px] rounded-full" style={{ background: "var(--grad-primary)" }} />
        ))}
      </div>

      <div className="hidden md:grid max-w-brand mx-auto px-6 grid-cols-3 gap-6">
        {featured.map((course, i) => (
          <Reveal key={course.slug} delay={(i % 3) * 0.08}>
            <MotionLink href={`/courses/${course.slug}`}
              whileHover={{ y: -8, boxShadow: "0 0 0 1.5px rgba(59,91,255,0.5), 0 28px 56px -12px rgba(59,91,255,0.28)" }}
              transition={{ duration: 0.28, ease: EASE }}
              className="group block bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(14,21,38,0.06)" }}>
              <div className="transition-transform duration-500 group-hover:scale-[1.03] origin-center"><CourseArt slug={course.slug} category={course.category} title={course.title} priority={i === 0} tag={course.hot ? "Trending" : "Career"} /></div>
              <div className="p-5 flex items-center justify-between card-lift bg-white relative">
                <div><div className="text-[16px] font-extrabold text-ink tracking-tight">{course.duration} · live</div><div className="text-[12px] text-muted">Certificate + internship</div></div>
                <span className="btn-grad text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
              </div>
            </MotionLink>
          </Reveal>
        ))}
      </div>

      {/* Start small — short courses as the low-commitment front door */}
      <Reveal className="max-w-brand mx-auto px-6 mt-12 md:mt-16">
        <div className="relative overflow-hidden rounded-[22px] bg-white border border-[#E6E3F7] p-5 md:p-7" style={{ boxShadow: "0 18px 50px -24px rgba(59,91,255,0.25), inset 0 1px 0 #fff" }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-accent">Not ready to commit?</div>
              <h3 className="mt-1 text-[20px] md:text-[24px] font-extrabold text-ink tracking-[-0.02em]">Try 4 weeks first.</h3>
            </div>
            <p className="text-[13px] text-muted md:text-right">Upgrade to the full program later — pay only the difference.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {starters.map((c) => (
              <Link key={c.slug} href={`/courses/${c.slug}`} className="tap inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-soft border border-[#E6E3F7] text-[13px] font-bold text-ink hover:border-primary hover:text-primary transition-colors">
                <span className="whitespace-nowrap">{c.title.split(":")[0]}</span> <span className="text-muted font-semibold whitespace-nowrap">· {c.duration}</span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="text-center mt-10">
        <Magnetic><Link href="/courses" className="btn-grad tap inline-flex items-center gap-2 px-8 py-4 text-white font-extrabold rounded-full text-[15px]">See all {courses.length} courses <Icon.ArrowRight size={16} /></Link></Magnetic>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── INTERNSHIPS + WORKSHOPS ───────────────────────── */
function InternshipsAndWorkshops() {
  const internships = [
    { weeks: "4 weeks", title: "Starter Internship", desc: "One real project, mentor reviews and a certificate — perfect for a semester requirement.", I: Icon.Seedling },
    { weeks: "6 weeks", title: "Project Internship", desc: "Build and deploy a portfolio project with a team, Git workflow and weekly reviews.", I: Icon.Rocket, hot: true },
    { weeks: "8 weeks", title: "Industry Internship", desc: "A capstone-grade project, presentation and a letter of recommendation.", I: Icon.Trophy },
  ];
  const freeWs = workshops.filter((w) => w.kind === "free");
  return (
    <section className="relative py-16 md:py-24 bg-ink2 overflow-hidden">
      <Grain />
      <Slashes side="left" tone="primary" opacity={0.08} height={760} />
      <div className="relative max-w-brand mx-auto px-6">
        {/* Internships */}
        <Reveal className="text-center mb-10 md:mb-12">
          <SectionLabel dark>Internships + certificate</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-white tracking-[-0.03em] leading-[1.08]">&ldquo;No experience&rdquo;? <span className="grad-text">Let&apos;s fix that.</span></h2>
          <p className="mt-3 text-white/60 text-[14px] md:text-[16px] max-w-xl mx-auto">Most fresher job posts now ask for real project experience. Get yours with a mentor, in any track.</p>
        </Reveal>
        <div className="swipe-row md:grid-cols-3 md:gap-5">
          {internships.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="w-[80vw] max-w-[320px] md:w-auto md:max-w-none">
              <div className="relative h-full flex flex-col overflow-hidden rounded-[20px] p-5 md:p-6 card-lift-dark" style={{ background: "rgba(255,255,255,0.04)", border: it.hot ? "1px solid rgba(139,164,255,0.45)" : "1px solid rgba(255,255,255,0.09)" }}>
                {it.hot && <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full text-white btn-grad">Most chosen</span>}
                <IconTile tone="primary" size={44} dark><it.I size={21} /></IconTile>
                <div className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#8BA4FF]">{it.weeks}</div>
                <div className="mt-1 text-[19px] font-extrabold text-white tracking-[-0.01em]">{it.title}</div>
                <p className="mt-2 text-[13.5px] text-white/60 leading-relaxed">{it.desc}</p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  {["Real project", "Mentor", "Certificate"].map((b) => (
                    <span key={b} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/75">{b}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/internship" className="btn-grad tap inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-extrabold rounded-full text-[14px]">Explore internships <Icon.ArrowRight size={15} /></Link>
          <a href="https://wa.me/919936609430?text=Hi!%20I%27m%20interested%20in%20an%20internship%20with%20certificate." target="_blank" rel="noopener noreferrer" className="tap inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#16A34A] text-white font-bold rounded-full text-[14px]"><Icon.WhatsApp size={17} /> Ask on WhatsApp</a>
        </Reveal>

        {/* Workshops */}
        <div className="mt-16 md:mt-20">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <div>
              <SectionLabel dark>Free workshops</SectionLabel>
              <h3 className="mt-3 text-[24px] md:text-[32px] font-extrabold text-white tracking-[-0.03em] leading-[1.1]">Build something real this weekend. <span className="grad-text">Free.</span></h3>
            </div>
            <Link href="/workshops" className="text-[13px] font-bold text-[#8BA4FF] hover:text-white inline-flex items-center gap-1.5">All workshops, incl. weekend certificates <Icon.ArrowRight size={14} /></Link>
          </Reveal>
          <div className="snap-row flex md:grid md:grid-cols-3 gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 pb-1">
            {freeWs.map((w) => (
              <div key={w.slug} className="shrink-0 w-[80vw] max-w-[320px] md:w-auto md:max-w-none flex flex-col rounded-[20px] p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <SkillIcon emoji={w.icon} size={40} />
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A]">Free · {w.duration}</span>
                </div>
                <div className="text-[17px] font-extrabold text-ink leading-snug">{w.title}</div>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-muted"><Icon.Calendar size={14} className="text-primary" />{w.schedule} · {w.mode}</div>
                <p className="mt-2 text-[13px] text-muted leading-relaxed flex-1">{w.blurb}</p>
                <WorkshopButton title={w.title} kind="free" className="btn-grad tap mt-4 w-full py-3 rounded-full text-white font-extrabold text-[14px]">Reserve free seat</WorkshopButton>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    { I: Icon.Target, tone: "accent" as const, title: "Placement support", desc: "Mock interviews, referrals and resume reviews when you're ready to apply." },
  ];
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel>Our difference</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">5 people. 1 mentor. <span className="grad-text">No hiding at the back.</span></h2>
          <p className="mt-3 text-muted text-[14px] md:text-[16px] max-w-xl mx-auto">Not a classroom. Not a MOOC. A focused, high-accountability program built for real outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className="h-full">
              <div className="relative overflow-hidden h-full p-4 md:p-6 rounded-[18px] bg-soft border border-[#E6E3F7] card-lift lift">
                <IconTile tone={f.tone} size={40}><f.I size={19} /></IconTile>
                <h3 className="mt-3 text-[13px] md:text-[15px] font-extrabold text-ink leading-snug">{f.title}</h3>
                <p className="mt-1.5 text-[12px] md:text-[14px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MENTOR — the human behind the batch ───────────────────────── */
function MentorSection() {
  return (
    <section className="py-12 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] bg-ink2 p-6 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center card-lift-dark">
            <Grain />
            <Slashes side="right" tone="primary" opacity={0.1} height={460} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 15% 50%, rgba(59,91,255,0.22), transparent 55%)" }} />
            <div className="relative flex items-center gap-4 md:block">
              <div className="w-[72px] h-[72px] md:w-[96px] md:h-[96px] rounded-full flex items-center justify-center text-white font-extrabold text-[26px] md:text-[34px] shrink-0"
                style={{ background: "var(--grad-primary)", boxShadow: "0 0 0 4px rgba(255,255,255,0.08), 0 18px 40px rgba(59,91,255,0.4), inset 0 1px 0 rgba(255,255,255,0.3)" }}>AS</div>
              <div className="md:hidden">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FF9A6C]">Your mentor</div>
                <div className="text-[18px] font-extrabold text-white leading-tight">Ashvani Srivastava</div>
                <div className="text-[12px] text-white/50">Founder & CEO · 10+ years in EdTech</div>
              </div>
            </div>
            <div className="relative">
              <div className="hidden md:block mb-3">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FF9A6C] mb-1">Your mentor</div>
                <div className="text-[24px] font-extrabold text-white leading-tight tracking-tight">Ashvani Srivastava <span className="text-white/60 font-medium text-[15px] ml-2">Founder & CEO · 10+ years in EdTech</span></div>
              </div>
              <p className="text-[15px] md:text-[18px] text-white/80 leading-relaxed">
                <Icon.Quote size={22} className="inline-block text-primary/60 mr-2 -mt-1" />
                With five students in a batch, I know every name, every gap and every offer letter. I personally review each student's roadmap before the batch starts — and I stay on your case until you're placed.
              </p>
            </div>
            <div className="relative md:justify-self-end">
              <a href="https://wa.me/919936609430?text=Hi%20Ashvani%2C%20I%27d%20like%20to%20know%20more%20about%20the%20next%20batch."
                className="tap inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3.5 bg-[#16A34A] text-white font-extrabold rounded-full text-[14px]"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 12px 30px rgba(22,163,74,0.35)" }}>
                <Icon.WhatsApp size={18} /> Message Ashvani
              </a>
              <p className="mt-2 text-center md:text-right text-[11px] text-white/60">Replies personally · usually within 2 hours</p>
            </div>
          </div>
        </Reveal>
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
    <section className="pt-6 md:pt-8 pb-16 md:pb-24 bg-soft relative overflow-hidden">
      <Slashes side="right" tone="primary" opacity={0.05} height={700} dot={false} />
      <div className="relative max-w-brand mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-16 items-center">
        <Reveal className="text-center lg:text-left">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">From &ldquo;where do I even start?&rdquo; to <span className="grad-text">&ldquo;I got the offer.&rdquo;</span></h2>
          <p className="mt-3 text-muted text-[14px] md:text-[16px] max-w-md mx-auto lg:mx-0">Ten steps, one mentor, zero guesswork — from your first resume draft to the offer letter.</p>
        </Reveal>
        <div ref={ref} className="mx-auto w-full max-w-[460px]">
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
              const right = i < 4;
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
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-white tracking-[-0.03em] leading-[1.08]">Your first job is just <span className="grad-text">level 1.</span></h2>
          <p className="mt-3 text-white/45 text-[14px] md:text-[16px] max-w-xl mx-auto">Typical industry salary ranges in India as you grow — from first job to senior roles.</p>
        </Reveal>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-6">
          {rows.map((r, i) => (
            <motion.div key={r.role}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0, margin: "0px 0px 120px 0px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              whileHover={{ y: -6, boxShadow: `0 28px 60px -14px ${r.c}55, inset 0 1px 0 rgba(255,255,255,0.08)` }}
              className={`relative rounded-[18px] p-5 md:p-8 card-lift-dark flex items-center justify-between ${r.ml} ${r.goal ? "md:mt-0" : ""}`}
              style={{ background: r.bg, border: `${r.goal ? 1.5 : 1}px solid ${r.bd}`, boxShadow: r.goal ? "0 0 40px rgba(74,222,128,0.12), inset 0 1px 0 rgba(255,255,255,0.08)" : undefined }}>
              {r.goal && <span className="absolute -top-2.5 right-4 text-[10px] font-extrabold tracking-[0.15em] px-2.5 py-1 rounded-full text-[#062B12] bg-[#4ADE80]">GOAL</span>}
              <div>
                <div className="text-[12px] text-white/60 mb-1">{r.role}</div>
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
      <div className="flex items-center gap-3 mb-3.5">
        <div className="w-11 h-11 rounded-full text-white font-extrabold text-[14px] flex items-center justify-center shrink-0" style={{ background: "var(--grad-primary)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)" }}>{p.initials}</div>
        <div className="min-w-0"><div className="font-extrabold text-ink text-[15px] leading-tight">{p.name}</div><div className="text-[12px] text-muted">{p.location}</div></div>
        <Icon.Quote size={24} className="ml-auto text-primary/25 shrink-0" />
      </div>
      <span className="self-start inline-block mb-2.5 text-[11px] font-bold text-primary bg-primary/[0.08] px-2.5 py-1 rounded-full whitespace-nowrap">{p.tag}</span>
      <p className="text-[13px] md:text-[14px] text-[#4B5563] leading-relaxed mb-4 flex-1" style={{ minHeight: 84 }}>{p.quote}</p>
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
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">They were confused too. <span className="grad-text">Now they&apos;re hired.</span></h2>
          <p className="mt-2 text-[12px] text-muted">Names changed for privacy</p>
        </Reveal>

        {/* Mobile deck */}
        <div className="md:hidden">
          <div className="relative h-[322px] mx-3">
            <AnimatePresence initial={false}>
              {order.map((p, k) => (
                <motion.div key={p.name}
                  drag={k === 0 ? "x" : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.6} onDragEnd={onDragEnd}
                  initial={{ opacity: 0, scale: 0.86, y: 30 }}
                  animate={{ opacity: k === 0 ? 1 : 0.85 - k * 0.3, scale: 1 - k * 0.06, y: k * 12, rotate: k === 0 ? 0 : k === 1 ? 2 : -3, x: 0 }}
                  exit={{ opacity: 0, x: -48, scale: 0.96, transition: { duration: 0.18 } }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-x-0 top-0" style={{ zIndex: 10 - k, touchAction: "pan-y" }}>
                  {k === 0 ? (
                    <PlacementCard p={p} style={{ boxShadow: "0 16px 40px rgba(14,21,38,0.14), inset 0 1px 0 #fff", border: "1px solid #E6E3F7" }} />
                  ) : (
                    <div className="h-[294px] rounded-[20px] bg-white" style={{ border: "1px solid #E6E3F7", boxShadow: "inset 0 1px 0 #fff" }} aria-hidden />
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
            <Reveal key={p.name} delay={k * 0.06} className="h-full">
              <PlacementCard p={p} className="h-full flex flex-col lift" style={{ border: "1px solid #E6E3F7", boxShadow: "0 2px 12px rgba(14,21,38,0.05), inset 0 1px 0 #fff" }} />
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
    { q: "What happens after I finish the course?", a: "Placement support kicks in: mock interviews, resume and LinkedIn reviews, and referrals when you're ready to apply. You can also re-attend any future batch for free if you want more practice." },
    { q: "What's the difference between short courses, advanced courses and career programs?", a: "A short course (4–6 weeks) teaches one skill. An advanced course (6–8 weeks) takes one skill deeper. A career program (3–6 months) combines them with real projects, an internship and interview prep. They stack — start small and upgrade later by paying only the difference." },
    { q: "Why isn't the fee on the website?", a: "Because it depends on your course, level and the offer running when you join. Tap \"Get fee on WhatsApp\" on any course and we'll share the exact fee, EMI options and next batch date in minutes." },
    { q: "Do I get a certificate and an internship?", a: "Every course comes with a certificate. Every career program also includes an internship with a real project — the kind of experience most fresher job postings now ask for." },
    { q: "How many hours per week does the course require?", a: "Roughly 15–20 hours — three live sessions of 1.5 hours each, plus assignments, projects and self-study. It's intensive by design." },
    { q: "I have no prior coding experience. Can I still join?", a: "Yes. Most programs start from fundamentals. Many of our placed students had zero coding background when they started — commitment is the only requirement." },
    { q: "What makes this different from Udemy or YouTube?", a: "Live mentorship, accountability and placement support. With max 5 students per batch, your mentor knows your name, your gaps, and follows up when you're stuck." },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Stuff you&apos;re probably wondering</h2>
          <p className="mt-3 text-muted text-[14px]">Straight answers. No marketing fluff.</p>
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
          <p className="text-[14px] text-muted mb-3">Didn&apos;t see your question?</p>
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
          <h2 className="text-[30px] md:text-[48px] font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-4">Still scrolling?<br className="md:hidden" /> Let&apos;s just talk.</h2>
          <p className="text-white/70 text-[14px] md:text-[16px] mb-8">Free 1:1 counseling · Certificate + internship · EMI available · No pressure</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic className="w-full sm:w-auto"><button onClick={openPopup} className="tap w-full sm:w-auto px-8 py-4 bg-white text-primary font-extrabold rounded-full text-[15px]" style={{ boxShadow: "0 14px 36px rgba(0,0,0,0.2)" }}>Free counseling</button></Magnetic>
            <Magnetic className="w-full sm:w-auto"><a href="https://wa.me/919936609430" className="tap w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] inline-flex items-center justify-center gap-2" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 12px 30px rgba(0,0,0,0.18)" }}><Icon.WhatsApp size={18} /> WhatsApp now</a></Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── MOBILE DOCK ─────────────────────────
   A floating frosted pill instead of a strip glued to the edge. Hides on scroll-down,
   returns on scroll-up (native-app behaviour), always visible near top and bottom. */
