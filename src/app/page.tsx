"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence, type PanInfo } from "framer-motion";
import { courses } from "@/lib/courses";
import { Icon } from "@/components/Icons";
import { Grain, Slashes } from "@/components/Decor";
import Magnetic from "@/components/Magnetic";
import CourseArt from "@/components/CourseArt";
import { STORIES, SITE, SHOW_STORIES } from "@/lib/site";
import Image from "next/image";
import DailyTile from "@/components/practice/DailyTile";

function openPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MotionLink = motion.create(Link);

/* ───────────────────────── DATA ───────────────────────── */
const PLACEMENTS = STORIES;

export default function HomePage() {
  return (
    <>
      {/* Six sections, each answering one question a first-time visitor has:
          what is this · is it for me · why them · can I trust them · (not ready? start free) · what now */}
      <div className="relative z-10 cut-bottom bg-ink2">
        <HeroSection />
      </div>
      <FeaturedCourses />
      <WhyUs />
      {SHOW_STORIES && <RecentPlacements />}
      <StartFree />
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
    <span className={`inline-block px-4 py-1.5 text-[11px] font-extrabold rounded-full uppercase tracking-[0.18em] ${dark ? "bg-accent/10 text-[#FF9A6C] border border-accent/30" : "bg-primary/10 text-primary"}`}>
      {children}
    </span>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function HeroSection() {
  const reduce = useReducedMotion();
  return (
    /* One soft spotlight, one message, one button. The bright 5 against a struck-out 500 says it all.
       Centred and balanced: two lines on desktop, three on phones; full stops hang so the words sit on centre. */
    <section className="relative min-h-[82svh] md:min-h-[100svh] bg-[#060915] overflow-hidden flex items-center pt-16">
      <Grain />
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(75,95,255,0.30), transparent 72%)" }} />
      <div className="relative max-w-[1100px] mx-auto px-6 w-full text-center flex flex-col items-center py-6">
        <div data-rise style={{ "--d": "0s", "--ry": "10px" } as React.CSSProperties}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A3D]" /> Job-ready IT courses · Live
        </div>

        <h1 data-rise style={{ "--d": "0.08s", "--ry": "16px" } as React.CSSProperties}
          className="mt-6 md:mt-8 text-[52px] sm:text-[72px] lg:text-[96px] font-extrabold leading-[0.98] tracking-[-0.045em] text-white">
          <span className="lg:hidden">Learn in a<br /></span><span className="hidden lg:inline">Learn in a </span>batch of&nbsp;<span className="grad-text" style={{ filter: "drop-shadow(0 0 24px rgba(91,107,255,0.55))" }}>5</span><span className="inline-block w-0 overflow-visible">.</span>
          <br />
          <span className="inline-block" style={{ marginRight: "-0.25em" }} aria-label="Not 500">
            <span className="text-white/25" aria-hidden>Not </span>
            <span aria-hidden className="relative inline-block text-white/25">500
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute left-[-6%] top-[22%] w-[112%] h-[60%] overflow-visible">
                <defs><linearGradient id="hero-strike" x1="0" x2="1"><stop offset="0" stopColor="#FF7A3D" /><stop offset="1" stopColor="#FF5E7A" /></linearGradient></defs>
                <motion.path d="M4 42 C 50 28, 120 32, 196 14" fill="none" stroke="url(#hero-strike)" strokeWidth="10" strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.75, duration: 0.55, ease: [0.65, 0, 0.35, 1] }} />
              </svg>
            </span>
            <span className="text-white/25" aria-hidden>.</span>
          </span>
        </h1>

        <p data-rise style={{ "--d": "0.2s", "--ry": "10px" } as React.CSSProperties}
          className="mt-5 md:mt-7 text-[17px] md:text-[22px] font-medium text-white/70">
          Live IT &amp; AI courses with a personal mentor.
        </p>

        <div data-rise style={{ "--d": "0.32s", "--ry": "10px" } as React.CSSProperties} className="mt-8 w-full flex flex-col items-center">
          <Magnetic className="w-full max-w-[360px] sm:w-auto">
            <Link href="/courses" className="btn-grad tap flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[260px] px-9 py-[18px] text-white font-extrabold rounded-full text-[17px] whitespace-nowrap transition-[filter] hover:brightness-110">
              Find your course <Icon.ArrowRight size={18} />
            </Link>
          </Magnetic>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-[13px] font-semibold text-white/55">
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5"><Icon.Star size={13} className="text-[#FFB547]" /> 4.8 · 350+ learners</span>
              <span className="text-white/20" aria-hidden>|</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_0_4px_rgba(74,222,128,0.15)]" /> Live classes</span>
            </span>
            <span className="hidden sm:inline text-white/20" aria-hidden>|</span>
            <span>Max 5 per batch</span>
          </div>
        </div>
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

/* ───────────────────────── COURSES ───────────────────────── */
function FeaturedCourses() {
  const featured = ["ai-engineer-agents-automation", "ai-powered-data-analyst", "java-full-stack-ai", "mern-full-stack-ai", "mobile-app-developer-ai", "cybersecurity-ai-security"]
    .map((slug) => courses.find((c) => c.slug === slug)!).filter(Boolean);
  const starters = ["ai-productivity", "ai-assisted-coding", "python-for-ai", "core-java", "build-your-first-app", "sql-excel"]
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
    <section className="py-14 md:py-24 bg-soft overflow-hidden">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <SectionLabel>Courses</SectionLabel>
          <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Pick a role. We&apos;ll get you there.</h2>
          <p className="mt-3 text-muted text-[15px] md:text-[16px] max-w-xl mx-auto">7 career programs with real projects, a certificate and an internship.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[13px] font-bold text-muted mr-0.5">I&apos;m a</span>
            {AUDIENCE_CHIPS.map((a) => (
              <Link key={a.key} href={`/courses?for=${a.key}`}
                className="tap text-[13px] font-bold px-3.5 py-2 rounded-full bg-white border border-[#E6E3F7] text-ink hover:border-primary hover:text-primary transition-colors">
                {a.label}
              </Link>
            ))}
          </div>
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
              <div className="min-w-0"><div className="text-[15px] font-extrabold text-ink tracking-tight">{course.duration} · live</div><div className="text-[12.5px] text-muted line-clamp-1"><span className="font-bold text-primary">Build:</span> {course.projects[0]}</div></div>
              <span className="btn-grad shrink-0 text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
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
                <div className="min-w-0"><div className="text-[16px] font-extrabold text-ink tracking-tight">{course.duration} · live</div><div className="text-[12.5px] text-muted line-clamp-1"><span className="font-bold text-primary">Build:</span> {course.projects[0]}</div></div>
                <span className="btn-grad shrink-0 text-[12px] font-bold text-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5">Explore <Icon.ArrowRight size={13} /></span>
              </div>
            </MotionLink>
          </Reveal>
        ))}
      </div>

      {/* Start small — short courses as the low-commitment front door */}
      <Reveal className="max-w-brand mx-auto px-6 mt-12 md:mt-16">
        <div className="relative overflow-hidden rounded-[20px] bg-white border border-[#E6E3F7] p-5 md:p-7" style={{ boxShadow: "0 18px 50px -24px rgba(59,91,255,0.25), inset 0 1px 0 #fff" }}>
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

/* ───────────────────────── WHY US — the person and the batch ───────────────────────── */
function WhyUs() {
  const points = [
    { I: Icon.Users, t: "Batches of 5", d: "Small enough that nobody gets lost in the crowd." },
    { I: Icon.Video, t: "Live classes", d: "Learn live with a mentor, not from old recordings." },
    { I: Icon.Target, t: "Real projects", d: "Build projects you can show in interviews." },
  ];
  const m = SITE.mentor;
  return (
    <section className="relative z-10 cut-both bg-[#060915] overflow-hidden py-16 md:py-24">
      <Grain />
      <Slashes side="left" opacity={0.10} height={900} />
      <div aria-hidden className="absolute inset-0 pointer-events-none md:hidden" style={{ background: "radial-gradient(70% 30% at 50% 36%, rgba(75,95,255,0.32), transparent 72%)" }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none hidden md:block" style={{ background: "radial-gradient(40% 55% at 28% 48%, rgba(75,95,255,0.30), transparent 72%)" }} />
      <div className="relative max-w-brand mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-14 items-center">
        <Reveal>
          {/* Phones: the message first, then the face */}
          <div className="md:hidden text-center mb-6">
            <SectionLabel dark>Why us</SectionLabel>
            <h2 className="mt-4 text-[28px] font-extrabold text-white tracking-[-0.03em] leading-[1.08]">1 mentor. 5 students.<br /><span className="grad-text">That&apos;s the difference.</span></h2>
          </div>
          {/* No frame: he stands in the section's own spotlight and fades into the dark */}
          <div className="relative mx-auto w-full max-w-[300px] md:max-w-[440px] aspect-[4/5]">
            <Image src="/ashvani-portrait.webp" alt={`${m.name}, founder and mentor`} fill sizes="(min-width: 768px) 440px, 300px" className="object-contain object-bottom" style={{ maskImage: "linear-gradient(to bottom, #000 62%, transparent 98%)", WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 98%)" }} />
            <div className="absolute left-0 right-0 bottom-1 text-center">
              <div className="text-[17px] font-extrabold text-white leading-tight">{m.name}</div>
              <div className="mt-0.5 text-[13px] text-white/60">{m.role}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="hidden md:block"><SectionLabel dark>Why us</SectionLabel></div>
          <h2 className="hidden md:block mt-4 text-[28px] md:text-[42px] font-extrabold text-white tracking-[-0.03em] leading-[1.08]">1 mentor. 5 students.<br /><span className="grad-text">That&apos;s the difference.</span></h2>
          <p className="mt-3 text-white/65 text-[15px] md:text-[16px] leading-relaxed max-w-lg">&ldquo;I started Step2ITCareer so no one gets lost in a class of 500.&rdquo; <span className="text-white font-semibold">— {m.name.split(" ")[0]}, Founder</span></p>
          <div className="mt-6 space-y-4">
            {points.map((x) => (
              <div key={x.t} className="flex gap-3.5">
                <span className="w-10 h-10 shrink-0 rounded-[14px] bg-white/[0.07] text-[#8BA4FF] border border-white/10 flex items-center justify-center"><x.I size={19} /></span>
                <div>
                  <div className="text-[15.5px] font-extrabold text-white">{x.t}</div>
                  <div className="text-[14px] text-white/60 leading-relaxed">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi ${m.name.split(" ")[0]}, I'd like to know which course fits me.`)}`} target="_blank" rel="noopener noreferrer"
              className="tap inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#16A34A] text-white font-extrabold text-[15px]" style={{ boxShadow: "0 12px 30px rgba(22,163,74,0.3)" }}>
              <Icon.WhatsApp size={18} /> Message {m.name.split(" ")[0]}
            </a>
            <span className="text-[13px] text-white/55 text-center sm:text-left">Free · Usually replies within 2 hours</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── START FREE — side doors for people not ready to talk yet ───────────────────────── */
function StartFree() {
  const tiles = [
    { href: "/workshops", I: Icon.Calendar, t: "Free AI workshop", d: "Every Saturday · live online", c: "#3B5BFF" },
    { href: "/resources", I: Icon.Route, t: "Free roadmaps & cheat sheets", d: "Step by step · no sign-up", c: "#16A34A" },
  ];
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-8 md:mb-10">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.02em]">Not ready yet? <span className="grad-text">Start free.</span></h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-3 md:gap-5">
          <Reveal className="h-full"><DailyTile /></Reveal>
          {tiles.map((x, i) => (
            <Reveal key={x.href} delay={(i + 1) * 0.06} className="h-full">
              <Link href={x.href} className="group tap h-full flex items-center md:items-start md:flex-col gap-4 rounded-[20px] bg-white border border-[#E6E3F7] p-4 md:p-6 lift">
                <span className="w-11 h-11 shrink-0 rounded-[14px] flex items-center justify-center bg-primary-tint text-primary"><x.I size={20} /></span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[16px] font-extrabold text-ink">{x.t}</span>
                  <span className="block text-[13.5px] text-muted">{x.d}</span>
                </span>
                <Icon.ArrowRight size={17} className="shrink-0 text-primary md:hidden" />
              </Link>
            </Reveal>
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
    <section id="stories" className="relative bg-soft py-14 md:py-24 overflow-hidden scroll-mt-16">
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
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Are the classes live or recorded?", a: "100% live. Every session is taught in real time by your mentor, in a batch of max 5. If you miss a class, the recording is shared within 24 hours." },
    { q: "I have no coding experience. Can I still join?", a: "Yes. Programs start from the basics. Commitment is the only requirement — your mentor fills the gaps as you go." },
    { q: "Why isn't the fee on the website?", a: "It depends on the course, the level and any offer running when you join. Message us on WhatsApp and we'll share the exact fee, EMI options and the next batch date in about 2 minutes. No obligation." },
    { q: "Do I get a certificate and an internship?", a: "Every course comes with a certificate. Every career program also includes an internship with a real project — the experience most fresher job posts now ask for." },
    { q: "How is this different from YouTube or Udemy?", a: "A live mentor who knows your name, a batch of 5 that keeps you accountable, and help until you're hired: mock interviews, resume reviews and referrals." },
  ];
  return (
    <section className="py-14 md:py-24 bg-soft">
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
                  style={{ background: "#fff", border: on ? "1.5px solid #3B5BFF" : "1px solid #E6E3F7", boxShadow: on ? "0 12px 32px rgba(59,91,255,0.12)" : "inset 0 1px 0 #fff" }}>
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
          <Magnetic><button onClick={openPopup} className="btn-grad tap inline-flex items-center gap-2 px-7 py-3.5 text-white font-extrabold rounded-full text-[14px]">Free counseling <Icon.ArrowRight size={15} /></button></Magnetic>
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
          <h2 className="text-[30px] md:text-[48px] font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-4">Not sure which course?<br className="md:hidden" /> Let&apos;s talk.</h2>
          <p className="text-white/75 text-[14px] md:text-[16px] mb-8">A free 15-minute call. We&apos;ll suggest the right course and share the fee and EMI on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic className="w-full sm:w-auto"><button onClick={openPopup} className="tap w-full sm:w-auto px-8 py-4 bg-white text-primary font-extrabold rounded-full text-[15px]" style={{ boxShadow: "0 14px 36px rgba(0,0,0,0.2)" }}>Free counseling</button></Magnetic>
            <Magnetic className="w-full sm:w-auto"><a href="https://wa.me/919936609430" className="tap w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] inline-flex items-center justify-center gap-2" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 12px 30px rgba(0,0,0,0.18)" }}><Icon.WhatsApp size={18} /> WhatsApp us</a></Magnetic>
          </div>
          <p className="mt-5 text-[12.5px] font-semibold text-white/65">Free · No obligation · Replies in about 2 hours</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── MOBILE DOCK ─────────────────────────
   A floating frosted pill instead of a strip glued to the edge. Hides on scroll-down,
   returns on scroll-up (native-app behaviour), always visible near top and bottom. */
