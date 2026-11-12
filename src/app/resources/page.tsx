import Link from "next/link";
import type { Metadata } from "next";
import { ROADMAPS } from "@/lib/roadmaps";
import { SHEETS } from "@/lib/cheatsheets";
import { GUIDES } from "@/lib/guides";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import Reveal from "@/components/inner/Reveal";
import CTABand from "@/components/inner/CTABand";

export const metadata: Metadata = {
  title: "Free Resources — Step2ITCareer-AI",
  description: "Free career roadmaps, one-page cheat sheets and honest career guides for students and freshers getting into IT.",
};

const SECTIONS = [
  { href: "/resources/roadmaps", title: "Career Roadmaps", count: `${ROADMAPS.length} roadmaps`, line: "Step-by-step paths for 7 IT careers. Tick off steps as you go.", I: Icon.Route, color: "#3B5BFF" },
  { href: "/resources/cheat-sheets", title: "Cheat Sheets", count: `${SHEETS.length} sheets`, line: "Python, SQL, Git, Excel, Java and AI prompting — one page each. Save as PDF.", I: Icon.Clipboard, color: "#FF7A3D" },
  { href: "/resources/guides", title: "Career Guides", count: `${GUIDES.length} guides`, line: "Straight answers to the questions freshers actually ask. 3–5 minute reads.", I: Icon.Book, color: "#16A34A" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-soft">
      <PageHero
        eyebrow={<><Icon.Sparkle size={12} /> Free · No sign-up</>}
        title={<>Free resources. <span className="grad-text">Zero fluff.</span></>}
        description="Roadmaps, cheat sheets and career guides to help you start — whether or not you ever join a course."
      />
      <section className="overlap-up pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-brand mx-auto px-6 grid md:grid-cols-3 gap-5 md:gap-6">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.href} delay={i * 0.06} className="h-full">
              <Link href={s.href} className="group h-full flex flex-col bg-white rounded-[22px] p-6 md:p-7 border border-[#E6E3F7] card-lift lift">
                <span className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white" style={{ background: s.color }}><s.I size={22} /></span>
                <div className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">{s.count}</div>
                <h2 className="mt-1 text-[22px] font-extrabold text-ink tracking-[-0.02em]">{s.title}</h2>
                <p className="mt-2 text-[14px] text-muted leading-relaxed flex-1">{s.line}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-extrabold text-primary">Open <Icon.ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand title="Want a mentor on the journey?" sub="A free 15-minute call — we'll point you to the right roadmap and next step." />
    </div>
  );
}
