import type { Metadata } from "next";
import Link from "next/link";
import { workshops, type Workshop } from "@/lib/workshops";
import { getCourseBySlug } from "@/lib/courses";
import PageHero from "@/components/inner/PageHero";
import SectionLabel from "@/components/inner/SectionLabel";
import SkillIcon from "@/components/inner/SkillIcon";
import Reveal from "@/components/inner/Reveal";
import CTABand from "@/components/inner/CTABand";
import WorkshopButton from "@/components/inner/WorkshopButton";
import { CornerSlash } from "@/components/Decor";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Workshops — Step2ITCareer-AI",
  description: "Free live workshops and weekend certificate workshops in AI, apps, web development, data and cybersecurity. Join online or in Noida.",
};

function WorkshopCard({ w }: { w: Workshop }) {
  const free = w.kind === "free";
  const next = w.next ? getCourseBySlug(w.next) : undefined;
  return (
    <div className="relative overflow-hidden flex flex-col bg-white rounded-[20px] p-5 md:p-6 border border-[#E6E3F7] card-lift" style={{ boxShadow: "0 2px 12px rgba(14,21,38,0.06)" }}>
      <CornerSlash tone={free ? "primary" : "accent"} />
      <div className="flex items-start justify-between gap-3 mb-4">
        <SkillIcon emoji={w.icon} size={44} tone={free ? "primary" : "accent"} />
        <span className={`text-[10.5px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full ${free ? "bg-[#16A34A]/10 text-[#16A34A]" : "bg-accent/10 text-accent"}`}>
          {free ? "Free" : "Certificate"}
        </span>
      </div>
      <h3 className="text-[18px] md:text-[19px] font-extrabold text-ink leading-snug tracking-[-0.01em] mb-2">{w.title}</h3>
      <p className="text-[13.5px] text-muted leading-relaxed mb-4">{w.blurb}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] font-semibold text-ink mb-4">
        <span className="inline-flex items-center gap-1.5"><Icon.Calendar size={14} className="text-primary" />{w.schedule}</span>
        <span className="inline-flex items-center gap-1.5"><Icon.Bolt size={14} className="text-primary" />{w.duration}</span>
        <span className="inline-flex items-center gap-1.5"><Icon.Video size={14} className="text-primary" />{w.mode}</span>
      </div>
      <ul className="space-y-1.5 mb-5 flex-1">
        {w.outcomes.map((o) => (
          <li key={o} className="flex gap-2 text-[13px] text-ink"><Icon.Check size={15} className="text-[#16A34A] shrink-0 mt-0.5" />{o}</li>
        ))}
      </ul>
      <WorkshopButton title={w.title} kind={w.kind}
        className={`tap w-full py-3.5 rounded-full font-extrabold text-[14px] text-white ${free ? "btn-grad" : "btn-grad-accent"}`}>
        {free ? "Reserve free seat" : "Register now"}
      </WorkshopButton>
      {next && (
        <Link href={`/courses/${next.slug}`} className="mt-3 text-center text-[12px] font-bold text-primary hover:underline">
          Loved it? Continue with {next.title} →
        </Link>
      )}
    </div>
  );
}

export default function WorkshopsPage() {
  const free = workshops.filter((w) => w.kind === "free");
  const paid = workshops.filter((w) => w.kind === "paid");
  return (
    <div className="min-h-screen bg-soft">
      <PageHero
        eyebrow={<><Icon.Sparkle size={12} /> Workshops</>}
        title={<>Try it live. <span className="grad-text">Free.</span></>}
        description="Short, hands-on workshops where you build something real in a few hours — free sessions every week, and weekend certificate workshops every month."
        chips={["Live online", "Noida classroom", "Build something real", "Certificate on weekend workshops"]}
      />

      <div className="max-w-brand mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-24 space-y-16 md:space-y-20">
        <Reveal>
          <SectionLabel>Free workshops</SectionLabel>
          <h2 className="mt-3 mb-2 text-[26px] md:text-[34px] font-extrabold text-ink tracking-[-0.03em]">Every week, free, live</h2>
          <p className="text-muted text-[14px] mb-7">No experience needed. Bring a laptop — or just your phone for the app workshop.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {free.map((w) => <WorkshopCard key={w.slug} w={w} />)}
          </div>
        </Reveal>

        <Reveal>
          <SectionLabel>Weekend certificate workshops</SectionLabel>
          <h2 className="mt-3 mb-2 text-[26px] md:text-[34px] font-extrabold text-ink tracking-[-0.03em]">Two days. One real skill. A certificate.</h2>
          <p className="text-muted text-[14px] mb-7">Small batches of max 5 — online or in our Noida classroom. Fee shared on WhatsApp when you register.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paid.map((w) => <WorkshopCard key={w.slug} w={w} />)}
          </div>
        </Reveal>

        <Reveal>
          <SectionLabel>How it works</SectionLabel>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { n: "1", t: "Reserve your seat", d: "Tap a workshop and leave your WhatsApp number — takes 20 seconds." },
              { n: "2", t: "Get the joining link", d: "We WhatsApp you the link or classroom details and a reminder before it starts." },
              { n: "3", t: "Build something real", d: "Leave with a working project — and a certificate on weekend workshops." },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-[18px] p-5 border border-[#E6E3F7] card-lift">
                <span className="w-9 h-9 rounded-full btn-grad text-white font-extrabold flex items-center justify-center mb-3">{s.n}</span>
                <div className="text-[15px] font-extrabold text-ink mb-1">{s.t}</div>
                <p className="text-[13px] text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <CTABand title="Want more than a workshop?" sub="Turn a few hours into a career — free 1:1 counseling to pick the right course." />
    </div>
  );
}
