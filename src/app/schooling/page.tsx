import Link from "next/link";
import type { Metadata } from "next";
import { SCHOOLS } from "@/lib/schooling";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import SkillIcon from "@/components/inner/SkillIcon";
import SectionLabel from "@/components/inner/SectionLabel";
import Reveal from "@/components/inner/Reveal";
import CounselButton from "@/components/inner/CounselButton";
import CTABand from "@/components/inner/CTABand";

export const metadata: Metadata = {
  title: "Coding for Class 6–12 — Step2ITCareer-AI",
  description: "Live coding programs for Class 6 to 12 in batches of 5: games and first Python, real code and debugging, and a college-ready stack with a GitHub portfolio.",
};

const WHY = [
  { icon: "👥", title: "Max 5 students", desc: "Real attention for your child, not a class of 30." },
  { icon: "🏗️", title: "Build, don't just watch", desc: "Every session ends with something your child made." },
  { icon: "👨‍👩‍👧", title: "Weekly parent updates", desc: "A short note on what they built and learned." },
  { icon: "🤖", title: "AI, used safely", desc: "How AI works and how to use it without letting it think for them." },
];

export default function SchoolingPage() {
  return (
    <div className="min-h-screen bg-soft">
      <PageHero
        eyebrow={<><Icon.School size={12} /> Coding for Class 6–12</>}
        title={<>Give your child <span className="grad-text">a head start.</span></>}
        description="Live coding classes in batches of 5 — from first games in Class 6 to a GitHub portfolio before college."
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <CounselButton className="btn-grad tap px-7 py-4 rounded-full text-white font-extrabold text-[15px]">Book a free demo class</CounselButton>
          <a href="https://wa.me/919936609430?text=Hi!%20I%27d%20like%20to%20know%20about%20the%20coding%20program%20for%20my%20child." target="_blank" rel="noopener noreferrer"
            className="tap inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#16A34A] text-white font-extrabold rounded-full text-[15px]"><Icon.WhatsApp size={18} /> Ask on WhatsApp</a>
        </div>
      </PageHero>

      <section className="overlap-up pt-24 md:pt-32 pb-14 md:pb-20">
        <div className="max-w-brand mx-auto px-6">
          <Reveal className="text-center mb-10">
            <SectionLabel>Pick your child&apos;s class</SectionLabel>
            <h2 className="mt-4 text-[28px] md:text-[40px] font-extrabold text-ink tracking-[-0.03em] leading-[1.08]">Three stages. <span className="grad-text">One clear path.</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {SCHOOLS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06} className="h-full">
                <Link href={`/schooling/${s.slug}`} className="group relative h-full flex flex-col bg-white rounded-[22px] overflow-hidden border border-[#E6E3F7] card-lift lift">
                  <div className="h-[5px]" style={{ background: s.color }} />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="self-start text-[11px] font-extrabold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full" style={{ color: s.color, background: `${s.color}14` }}>{s.accent}</span>
                    <h3 className="mt-3 text-[24px] font-extrabold text-ink tracking-[-0.02em]">{s.band}</h3>
                    <p className="mt-2 text-[14px] text-muted leading-relaxed">{s.card}</p>
                    <ul className="mt-4 mb-6 space-y-2">
                      {s.highlights.map((h) => <li key={h} className="flex gap-2 text-[13.5px] font-semibold text-ink"><Icon.Check size={16} className="shrink-0 mt-0.5" style={{ color: s.color }} />{h}</li>)}
                    </ul>
                    <span className="mt-auto pt-4 border-t border-line inline-flex items-center gap-2 text-[14px] font-extrabold text-primary">
                      See the program <Icon.ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-brand mx-auto px-6">
          <Reveal className="text-center mb-8">
            <SectionLabel>Why parents choose us</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {WHY.map((w) => (
              <div key={w.title} className="bg-white rounded-[18px] p-4 md:p-5 border border-[#E6E3F7] card-lift">
                <SkillIcon emoji={w.icon} size={40} className="mb-3" />
                <div className="text-[14px] font-extrabold text-ink leading-snug">{w.title}</div>
                <p className="mt-1 text-[12.5px] md:text-[13px] text-muted leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="See if your child enjoys it." sub="Book a free demo class — your child builds something small in the first session." primary="Book a free demo class" />
    </div>
  );
}
