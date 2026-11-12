import Link from "next/link";
import type { Metadata } from "next";
import { ROADMAPS } from "@/lib/roadmaps";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import Reveal from "@/components/inner/Reveal";
import CTABand from "@/components/inner/CTABand";

export const metadata: Metadata = {
  title: "Free Career Roadmaps — Step2ITCareer-AI",
  description: "Step-by-step roadmaps for AI Engineer, Data Analyst, MERN, Java full stack, mobile, cybersecurity and digital marketing careers, with free official resources.",
};

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-soft">
      <PageHero
        eyebrow={<><Icon.Route size={12} /> Free career roadmaps</>}
        title={<>Where do I even start? <span className="grad-text">Here.</span></>}
        description="Pick a career. Follow the steps in order, with a free official resource for each one. Tick them off as you go."
      />
      <section className="overlap-up pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-brand mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ROADMAPS.map((r, i) => (
            <Reveal key={r.slug} delay={Math.min(i, 5) * 0.05} className="h-full">
              <Link href={`/resources/roadmaps/${r.slug}`} className="group h-full flex flex-col bg-white rounded-[20px] overflow-hidden border border-[#E6E3F7] card-lift lift">
                <div className="h-[5px]" style={{ background: r.color }} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: r.color }}>{r.steps.length} steps · {r.total}</div>
                  <h2 className="mt-1.5 text-[20px] font-extrabold text-ink tracking-[-0.02em]">{r.role}</h2>
                  <p className="mt-2 text-[13.5px] text-muted leading-relaxed flex-1">{r.intro}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-extrabold text-primary">Open roadmap <Icon.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand title="Rather follow it with a mentor?" sub="Every roadmap matches one of our career programs, step for step. Ask us which fits you." />
    </div>
  );
}
