import Link from "next/link";
import { courses, getCourseBySlug, LEVELS, feeWhatsApp } from "@/lib/courses";
import CourseArt from "@/components/CourseArt";
import { notFound } from "next/navigation";
import { Grain, Slashes, CornerSlash } from "@/components/Decor";
import { Icon } from "@/components/Icons";
import SkillIcon from "@/components/inner/SkillIcon";
import SectionLabel from "@/components/inner/SectionLabel";
import Reveal from "@/components/inner/Reveal";
import CounselButton from "@/components/inner/CounselButton";
import CurriculumPath from "@/components/inner/CurriculumPath";
import CTABand from "@/components/inner/CTABand";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return { title: `${course.title} — Step2ITCareer-AI`, description: course.description };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const isCareer = course.level === "career";
  const facts: [string, string][] = [
    ["Level", LEVELS[course.level].label],
    ["Duration", course.duration],
    ["Mode", "Online / Offline / Hybrid"],
    ["Batch size", "5 learners max"],
    ["You get", isCareer ? "Certificate + internship" : "Certificate"],
  ];
  const stack = (course.stack ?? []).map(getCourseBySlug).filter((c): c is NonNullable<typeof c> => !!c);
  const upgrade = course.upgrade ? getCourseBySlug(course.upgrade) : undefined;
  const builtInto = courses.filter((c) => c.stack?.includes(course.slug));
  const fee = feeWhatsApp(course.title);

  return (
    <div className="min-h-screen bg-soft">
      {/* ── HERO BAND ── */}
      <section className="relative z-10 cut-bottom bg-ink2 overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
        <Grain />
        <Slashes side="right" tone="primary" opacity={0.1} height={720} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.35 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 20%, ${course.categoryColor}33, transparent 55%)` }} />
        <div className="relative max-w-brand mx-auto px-6">
          <Link href="/courses" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] font-semibold mb-7 transition-colors">
            <Icon.ArrowRight size={14} className="rotate-180" /> All courses
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 text-[12px] font-extrabold rounded-full text-white btn-grad">{LEVELS[course.level].label}</span>
            <span className="px-3 py-1.5 text-[12px] font-bold rounded-full text-white" style={{ background: `${course.categoryColor}55`, border: `1px solid ${course.categoryColor}88` }}>{course.category}</span>
            <span className="px-3 py-1.5 text-[12px] font-bold rounded-full bg-white/[0.06] border border-white/10 text-white/75">Online / Offline / Hybrid</span>
            <span className="px-3 py-1.5 text-[12px] font-bold rounded-full bg-white/[0.06] border border-white/10 text-white/75">{course.duration}</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold rounded-full text-[#4ADE80] border border-[#4ADE80]/35 bg-[#4ADE80]/12"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />Live</span>
          </div>
          <h1 className="text-[32px] sm:text-5xl md:text-[56px] font-extrabold text-white leading-[1.05] tracking-[-0.03em] max-w-3xl mb-5">{course.title}</h1>
          <p className="text-white/65 text-[15px] md:text-[17px] max-w-2xl leading-relaxed">{course.description}</p>

          {/* Mobile action strip */}
          <div className="lg:hidden mt-8 flex flex-col sm:flex-row gap-3">
            <a href={fee} target="_blank" rel="noopener noreferrer" className="tap flex-1 py-3.5 bg-[#16A34A] text-white font-extrabold rounded-full flex items-center justify-center gap-2 text-[14px]"><Icon.WhatsApp size={17} /> Get fee on WhatsApp</a>
            <CounselButton className="btn-ghost-dark tap flex-1 py-3.5 rounded-full text-white font-bold text-[14px]">Free counseling</CounselButton>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-brand mx-auto px-6 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
          <div className="space-y-16 md:space-y-20">

            {/* Who it's for + AI angle */}
            <Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative overflow-hidden bg-white rounded-[18px] p-5 md:p-6 border border-[#E6E3F7] card-lift">
                  <SectionLabel>Who it&apos;s for</SectionLabel>
                  <ul className="mt-4 space-y-2.5">
                    {course.audience.map((a) => (
                      <li key={a} className="flex gap-2.5 text-[14px] text-ink font-semibold leading-snug"><Icon.Check size={17} className="text-primary shrink-0 mt-0.5" />{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-[18px] p-5 md:p-6 text-white" style={{ background: "linear-gradient(135deg,#0E1526,#1B2466)" }}>
                  <Grain />
                  <CornerSlash />
                  <div className="relative">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#8BA4FF]"><Icon.Sparkle size={13} /> AI inside this course</span>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/85">{course.aiAngle}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Skills */}
            <Reveal>
              <SectionLabel>Skills covered</SectionLabel>
              <h2 className="mt-3 mb-6 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">What you'll be able to do</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {course.skills.map((skill, i) => (
                  <div key={skill.name} className="relative overflow-hidden bg-white rounded-[16px] p-4 md:p-5 border border-[#E6E3F7] card-lift tap">
                    <CornerSlash tone={i % 5 === 4 ? "accent" : "primary"} />
                    <SkillIcon emoji={skill.icon} size={38} tone={i % 5 === 4 ? "accent" : "primary"} className="mb-3" />
                    <div className="text-[13px] md:text-[14px] font-extrabold text-ink leading-snug">{skill.name}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Curriculum */}
            <Reveal>
              <SectionLabel>Curriculum</SectionLabel>
              <h2 className="mt-3 mb-2 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">How the program unfolds</h2>
              <p className="text-muted text-[14px] mb-8">Scroll — each phase lights up as you reach it.</p>
              <CurriculumPath items={course.curriculum} />
            </Reveal>

            {/* Projects */}
            <Reveal>
              <SectionLabel>Projects</SectionLabel>
              <h2 className="mt-3 mb-6 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">What you&apos;ll build</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.projects.map((pr, i) => (
                  <div key={pr} className="flex items-start gap-3 bg-white rounded-[16px] p-4 border border-[#E6E3F7] card-lift">
                    <span className="w-8 h-8 shrink-0 rounded-full btn-grad text-white text-[13px] font-extrabold flex items-center justify-center">{i + 1}</span>
                    <span className="text-[14px] font-bold text-ink leading-snug pt-1">{pr}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Stacking path */}
            {(stack.length > 0 || upgrade || builtInto.length > 0) && (
              <Reveal>
                <SectionLabel>{isCareer ? "Built from" : "Your next step"}</SectionLabel>
                <h2 className="mt-3 mb-2 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">{isCareer ? "Start small, or take the whole program" : "Upgrade anytime — pay only the difference"}</h2>
                <p className="text-muted text-[14px] mb-6">{isCareer ? "This program combines these courses with projects and an internship. Start with any one of them and upgrade later — you only pay the difference." : "Everything you learn here counts toward the full career program."}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(isCareer ? stack : upgrade ? [upgrade, ...builtInto.filter((b) => b.slug !== upgrade.slug)] : builtInto).map((c) => (
                    <Link key={c.slug} href={`/courses/${c.slug}`} className="tap group min-w-0 flex items-center gap-3 bg-white rounded-[16px] p-3 border border-[#E6E3F7] card-lift">
                      <div className="w-20 shrink-0 rounded-[12px] overflow-hidden"><CourseArt slug={c.slug} title="" badge={false} height="h-[56px]" /></div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10.5px] font-extrabold uppercase tracking-wide text-primary">{LEVELS[c.level].label} · {c.duration}</div>
                        <div className="text-[14px] font-extrabold text-ink leading-snug truncate">{c.title}</div>
                      </div>
                      <Icon.ArrowRight size={16} className="text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Tools */}
            <Reveal>
              <SectionLabel>Tools & technologies</SectionLabel>
              <h2 className="mt-3 mb-6 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">What you'll work with</h2>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2.5 bg-white border border-[#E6E3F7] rounded-full text-[13px] font-bold text-ink card-lift">{tool}</span>
                ))}
              </div>
            </Reveal>

            {/* Roles */}
            <Reveal>
              <SectionLabel>{isCareer ? "Career roles" : "Prepares you for"}</SectionLabel>
              <h2 className="mt-3 mb-6 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">Where this leads</h2>
              <div className="flex flex-wrap gap-2">
                {course.roles.map((role) => (
                  <span key={role} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-extrabold text-white" style={{ background: "var(--grad-primary)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}>
                    <Icon.ArrowUpRight size={14} /> {role}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── STICKY SIDEBAR ── */}
          <aside className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden bg-white rounded-[22px] p-6 md:p-7 border border-[#E6E3F7]" style={{ boxShadow: "0 24px 60px -20px rgba(59,91,255,0.25), inset 0 1px 0 #fff" }}>
              <CornerSlash />
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#FF7A3D] mb-5">
                <span className="relative inline-block w-2 h-2 rounded-full bg-[#FF7A3D] pulse-ring text-[#FF7A3D]" />
                Only 5 seats per batch
              </div>
              <div className="text-[24px] font-extrabold tracking-[-0.02em] leading-tight text-ink mb-1">Founding batch offer</div>
              <div className="text-[13px] text-muted mb-6">Fee, EMI and the next batch date — shared personally on WhatsApp in minutes.</div>
              <div className="mb-6">
                {facts.map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-[#EEEBF8] text-[14px]">
                    <span className="text-muted font-semibold">{label}</span>
                    <span className="font-extrabold text-ink text-right">{value}</span>
                  </div>
                ))}
              </div>
              <a href={fee} target="_blank" rel="noopener noreferrer" className="tap w-full py-4 mb-3 bg-[#16A34A] text-white font-extrabold rounded-full flex items-center justify-center gap-2 text-[15px]" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)" }}>
                <Icon.WhatsApp size={18} /> Get fee on WhatsApp
              </a>
              <CounselButton className="btn-grad tap w-full py-4 rounded-full text-white font-extrabold text-[15px]">Free counseling</CounselButton>
              <p className="mt-4 text-center text-[12px] text-muted">EMI available · No obligation</p>
            </div>
          </aside>
        </div>
      </div>

      <CTABand title={isCareer ? "Ready to start this program?" : "Ready to start this course?"} sub="Free 1:1 counseling with a mentor — we'll map the fastest route to your first offer." />
    </div>
  );
}
