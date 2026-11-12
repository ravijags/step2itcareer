import Link from "next/link";
import type { Metadata } from "next";
import { SHEETS } from "@/lib/cheatsheets";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import Reveal from "@/components/inner/Reveal";
import CTABand from "@/components/inner/CTABand";

export const metadata: Metadata = {
  title: "Free Cheat Sheets — Step2ITCareer-AI",
  description: "One-page cheat sheets for Python, SQL, Git, Excel formulas, Core Java and prompting AI tools. Copy snippets or save as PDF.",
};

export default function CheatSheetsPage() {
  return (
    <div className="min-h-screen bg-soft">
      <PageHero
        eyebrow={<><Icon.Clipboard size={12} /> Free cheat sheets</>}
        title={<>One page. <span className="grad-text">Everything you need.</span></>}
        description="Screenshot them, save them as PDF, share them with your batch. Every snippet has a copy button."
      />
      <section className="overlap-up pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-brand mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {SHEETS.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i, 5) * 0.05} className="h-full">
              <Link href={`/resources/cheat-sheets/${s.slug}`} className="group h-full flex flex-col rounded-[20px] p-5 md:p-6 bg-ink2 text-white card-lift-dark lift relative overflow-hidden">
                <div aria-hidden className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-30" style={{ background: s.color, filter: "blur(28px)" }} />
                <span className="relative self-start text-[11px] font-extrabold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full" style={{ background: `${s.color}33`, color: "#fff" }}>{s.tag}</span>
                <h2 className="relative mt-3 text-[18px] md:text-[21px] font-extrabold tracking-[-0.02em]">{s.title}</h2>
                <p className="relative mt-2 text-[13px] text-white/55 leading-relaxed flex-1 hidden sm:block">{s.blurb}</p>
                <span className="relative mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#8BA4FF] group-hover:text-white">Open <Icon.ArrowRight size={14} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand title="Want to go beyond the cheat sheet?" sub="Short courses take one of these skills from basics to a real project in 4–6 weeks." />
    </div>
  );
}
