import Link from "next/link";
import type { Metadata } from "next";
import { GUIDES } from "@/lib/guides";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import Reveal from "@/components/inner/Reveal";
import CTABand from "@/components/inner/CTABand";

export const metadata: Metadata = {
  title: "Career Guides — Step2ITCareer-AI",
  description: "Short, honest guides for freshers: choosing a path, first resume, projects, DSA, internships and switching into IT.",
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-soft">
      <PageHero
        eyebrow={<><Icon.Book size={12} /> Career guides</>}
        title={<>Straight answers. <span className="grad-text">5 minutes or less.</span></>}
        description="The questions freshers actually ask — answered honestly, without the hype."
      />
      <section className="overlap-up pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-brand mx-auto px-6 grid md:grid-cols-2 gap-4 md:gap-5">
          {GUIDES.map((g, i) => (
            <Reveal key={g.slug} delay={Math.min(i, 5) * 0.05} className="h-full">
              <Link href={`/resources/guides/${g.slug}`} className="group h-full flex flex-col bg-white rounded-[20px] p-5 md:p-6 border border-[#E6E3F7] card-lift lift">
                <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em]">
                  <span className="text-primary">{g.tag}</span><span className="text-muted">· {g.minutes} min read</span>
                </div>
                <h2 className="mt-2 text-[18px] md:text-[20px] font-extrabold text-ink leading-snug tracking-[-0.01em]">{g.title}</h2>
                <p className="mt-2 text-[13.5px] text-muted leading-relaxed flex-1">{g.dek}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-extrabold text-primary">Read <Icon.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand title="Your question isn't here?" sub="Ask a mentor directly — a free 15-minute call, no pressure." />
    </div>
  );
}
