/* Shared layout for the Class 6–12 pages (v4.3): the same system as course and internship pages,
   written for parents — dark cut hero, content column + sticky "Join the next batch" card. */
import Link from "next/link";
import type { School } from "@/lib/schooling";
import { schoolWa } from "@/lib/schooling";
import { Grain, Slashes } from "@/components/Decor";
import { Icon } from "@/components/Icons";
import SkillIcon from "@/components/inner/SkillIcon";
import SectionLabel from "@/components/inner/SectionLabel";
import Reveal from "@/components/inner/Reveal";
import CounselButton from "@/components/inner/CounselButton";
import CTABand from "@/components/inner/CTABand";
import FeeBar from "@/components/inner/FeeBar";

export default function SchoolPage({ s }: { s: School }) {
  const wa = schoolWa(s.band);
  return (
    <div className="min-h-screen bg-soft">
      <section className="relative z-10 cut-bottom bg-ink2 overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <Grain />
        <Slashes side="left" tone="primary" opacity={0.09} height={720} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.35 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 20%, ${s.color}33, transparent 55%)` }} />
        <div className="relative max-w-brand mx-auto px-6">
          <nav className="flex items-center gap-2 text-[13px] font-semibold text-white/50 mb-6">
            <Link href="/schooling" className="hover:text-white transition-colors">Schooling</Link>
            <span className="text-white/25">›</span><span className="text-white/70">{s.band}</span>
          </nav>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase mb-5">{s.eyebrow}</span>
          <h1 className="text-[36px] sm:text-5xl md:text-[60px] font-extrabold text-white leading-[1.03] tracking-[-0.03em] max-w-3xl">
            {s.title} <span className="grad-text">{s.titleAccent}</span>
          </h1>
          <p className="mt-4 text-[17px] md:text-[21px] font-bold text-white/85 max-w-2xl">{s.line}</p>
          <p className="mt-3 text-white/60 text-[15px] md:text-[17px] max-w-2xl leading-relaxed">{s.description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="tap inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#16A34A] text-white font-extrabold rounded-full text-[15px]"><Icon.WhatsApp size={18} /> Get fee on WhatsApp</a>
            <CounselButton className="btn-ghost-dark tap px-7 py-4 rounded-full text-white font-bold text-[15px]">Book a free demo class</CounselButton>
          </div>
          <div id="hero-actions-end" />
        </div>
      </section>

      <div className="max-w-brand mx-auto px-6 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
          <div className="space-y-16 md:space-y-20 min-w-0">
            <Reveal>
              <SectionLabel>For parents</SectionLabel>
              <h2 className="mt-3 mb-4 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">{s.why.title}</h2>
              <p className="text-[15px] md:text-[16px] text-[#4B5563] leading-relaxed max-w-2xl">{s.why.body}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 md:gap-4">
                {s.gets.map((g) => (
                  <div key={g.title} className="flex gap-3.5 bg-white rounded-[16px] p-4 md:p-5 border border-[#E6E3F7] card-lift">
                    <SkillIcon emoji={g.icon} size={40} className="shrink-0" />
                    <div><div className="text-[14.5px] font-extrabold text-ink leading-snug">{g.title}</div><p className="mt-1 text-[13px] text-muted leading-relaxed">{g.desc}</p></div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel>What they&apos;ll learn</SectionLabel>
              <h2 className="mt-3 mb-6 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">Topics, step by step</h2>
              <div className="flex flex-wrap gap-2">
                {s.learn.map((t) => <span key={t} className="px-4 py-2.5 bg-white border border-[#E6E3F7] rounded-full text-[13px] font-bold text-ink card-lift">{t}</span>)}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.skills.map((k) => (
                  <span key={k} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-extrabold text-white" style={{ background: "var(--grad-primary)" }}>
                    <Icon.Sparkle size={13} /> {k}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-3 mb-6 text-[24px] md:text-[32px] font-extrabold text-ink tracking-[-0.03em]">Questions parents ask</h2>
              <div className="space-y-3">
                {s.faqs.map((f) => (
                  <details key={f.q} className="group bg-white rounded-[16px] border border-[#E6E3F7] card-lift open:border-primary">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-bold text-ink text-[14px] md:text-[15px]">
                      {f.q}<Icon.ChevronDown size={18} className="text-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <p className="px-5 pb-5 -mt-1 text-[13.5px] text-[#4B5563] leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden bg-white rounded-[22px] p-6 md:p-7 border border-[#E6E3F7]" style={{ boxShadow: "0 24px 60px -20px rgba(59,91,255,0.25), inset 0 1px 0 #fff" }}>
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#FF7A3D] mb-5">
                <span className="relative inline-block w-2 h-2 rounded-full bg-[#FF7A3D] pulse-ring text-[#FF7A3D]" /> Only 5 students per batch
              </div>
              <div className="text-[24px] font-extrabold tracking-[-0.02em] leading-tight text-ink mb-1">Join the next batch</div>
              <div className="text-[13px] text-muted mb-6">Fee, schedule and the start date — shared on WhatsApp in minutes.</div>
              <div className="mb-6">
                {s.facts.map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center gap-4 py-3 border-b border-[#EEEBF8] text-[14px]">
                    <span className="text-muted font-semibold">{k}</span><span className="font-extrabold text-ink text-right">{v}</span>
                  </div>
                ))}
              </div>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="tap w-full py-4 mb-3 bg-[#16A34A] text-white font-extrabold rounded-full flex items-center justify-center gap-2 text-[15px]"><Icon.WhatsApp size={18} /> Get fee on WhatsApp</a>
              <CounselButton className="btn-grad tap w-full py-4 rounded-full text-white font-extrabold text-[15px]">Book a free demo class</CounselButton>
              <p className="mt-4 text-center text-[12px] text-muted">Talk to the mentor first · No obligation</p>
            </div>
          </aside>
        </div>
      </div>

      <CTABand title="See if your child enjoys it." sub="Book a free demo class — your child builds something small in the first session." primary="Book a free demo class" />
      <FeeBar title={`${s.band} coding program`} href={wa} />
    </div>
  );
}
