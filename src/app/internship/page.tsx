import Link from "next/link";
import type { Metadata } from "next";
import { INTERNSHIPS, PROGRAMS } from "@/lib/internships";
import { TRACKS, courses } from "@/lib/courses";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import SkillIcon from "@/components/inner/SkillIcon";
import SectionLabel from "@/components/inner/SectionLabel";
import Reveal from "@/components/inner/Reveal";
import CounselButton from "@/components/inner/CounselButton";
import CTABand from "@/components/inner/CTABand";

export const metadata: Metadata = {
  title: "Internships with certificate — Step2ITCareer-AI",
  description: "4, 6 or 8-week internships on a real project with a mentor, plus the 30-Day Coding Challenge and Summer/Winter Training. Max 5 learners per batch.",
};

const WA = "https://wa.me/919936609430?text=" + encodeURIComponent("Hi! I'm interested in an internship with certificate. Please share details.");

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-soft">
      <PageHero
        eyebrow={<><Icon.Medal size={12} /> Internships + certificate</>}
        title={<>&ldquo;No experience&rdquo;? <span className="grad-text">Let&apos;s fix that.</span></>}
        description="Most fresher job posts now ask for real project experience. Do yours with a mentor, in any track — 4, 6 or 8 weeks."
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="tap inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#16A34A] text-white font-extrabold rounded-full text-[15px]"><Icon.WhatsApp size={18} /> Ask on WhatsApp</a>
          <CounselButton className="btn-ghost-dark tap px-7 py-4 rounded-full text-white font-bold text-[15px]">Free counseling</CounselButton>
        </div>
      </PageHero>

      {/* The three internships */}
      <section className="overlap-up pt-24 md:pt-32 pb-14 md:pb-20">
        <div className="max-w-brand mx-auto px-6">
          <Reveal className="text-center mb-10">
            <SectionLabel>Pick your length</SectionLabel>
            <h2 className="mt-4 text-[28px] md:text-[40px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Same mentor. Real project. <span className="grad-text">Your pace.</span></h2>
          </Reveal>
          <div className="swipe-row md:grid-cols-3 md:gap-6">
            {INTERNSHIPS.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.06} className="w-[80vw] max-w-[320px] md:w-auto md:max-w-none">
                <div className="relative h-full flex flex-col bg-white rounded-[20px] p-6 border card-lift lift" style={{ borderColor: it.hot ? "rgba(59,91,255,0.45)" : "#E6E3F7" }}>
                  {it.hot && <span className="absolute top-5 right-5 text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full text-white btn-grad">Most chosen</span>}
                  <SkillIcon emoji={it.icon} size={44} />
                  <div className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-primary">{it.weeks}</div>
                  <div className="mt-1 text-[20px] font-extrabold text-ink tracking-[-0.01em]">{it.title}</div>
                  <p className="mt-2 text-[14px] text-muted leading-relaxed">{it.desc}</p>
                  <ul className="mt-4 mb-5 space-y-2">
                    {it.gets.map((g) => <li key={g} className="flex gap-2 text-[13.5px] font-semibold text-ink"><Icon.Check size={16} className="text-primary shrink-0 mt-0.5" />{g}</li>)}
                  </ul>
                  <a href={`https://wa.me/919936609430?text=${encodeURIComponent(`Hi! Please share the fee and next batch for the ${it.title} (${it.weeks}).`)}`} target="_blank" rel="noopener noreferrer"
                    className="tap mt-auto w-full py-3.5 rounded-full bg-[#16A34A] text-white font-extrabold text-[14px] inline-flex items-center justify-center gap-2"><Icon.WhatsApp size={16} /> Get fee on WhatsApp</a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="rounded-[20px] bg-white border border-[#E6E3F7] p-5 md:p-7">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-accent">Any track</div>
              <h3 className="mt-1 text-[19px] md:text-[22px] font-extrabold text-ink tracking-[-0.02em]">Do your internship in the field you want to work in</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.values(TRACKS).filter((t) => courses.some((c) => c.category === t.label)).map((t) => (
                  <span key={t.label} className="px-3.5 py-2 rounded-full text-[13px] font-bold" style={{ background: `${t.color}14`, color: t.color }}>{t.label}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two specialised programs */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-brand mx-auto px-6">
          <Reveal className="text-center mb-10">
            <SectionLabel>Two more ways in</SectionLabel>
            <h2 className="mt-4 text-[28px] md:text-[40px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Short on time? Try these.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                <Link href={`/internship/${p.slug}`} className="group relative h-full flex flex-col overflow-hidden rounded-[22px] bg-ink2 p-6 md:p-8 text-white card-lift-dark lift">
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 90% 0%, rgba(59,91,255,0.3), transparent 60%)" }} />
                  <div className="relative">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FF9A6C]">{p.eyebrow}</span>
                    <h3 className="mt-2 text-[24px] md:text-[28px] font-extrabold tracking-[-0.02em]">{p.title}</h3>
                    <p className="mt-1 text-[15px] font-bold text-white/80">{p.line}</p>
                    <p className="mt-3 text-[14px] text-white/55 leading-relaxed">{p.description}</p>
                  </div>
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {p.facts.slice(0, 3).map(([k, v]) => <span key={k} className="text-[12px] font-bold px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-white/80">{v}</span>)}
                  </div>
                  <span className="relative mt-6 pt-5 border-t border-white/10 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#8BA4FF] group-hover:text-white transition-colors">
                    See the program <Icon.ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Not sure which one fits?" sub="A free 15-minute call with a mentor — no pressure, just clarity." />
    </div>
  );
}
