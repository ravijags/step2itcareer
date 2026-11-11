import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCES } from "@/lib/resources";
import { Grain, Slashes } from "@/components/Decor";
import { Icon } from "@/components/Icons";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = RESOURCES.find((x) => x.slug === slug);
  return { title: r ? `${r.title} — Step2ITCareer-AI` : "Step2ITCareer-AI" };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = RESOURCES.find((x) => x.slug === slug);
  if (!r) notFound();
  const wa = `https://wa.me/919936609430?text=${encodeURIComponent(r.wa)}`;
  return (
    <section className="relative bg-ink2 text-white overflow-hidden min-h-[100svh] flex items-center">
      <Grain />
      <Slashes side="right" tone="primary" opacity={0.1} height={700} />
      <div className="relative max-w-brand mx-auto px-6 pt-28 pb-24 w-full text-center md:text-left">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Launching soon
        </span>
        <h1 className="text-[44px] sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.03] mb-4">
          {r.title}<span className="grad-text">.</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold text-white/85 mb-4">{r.line}</p>
        <p className="text-[15px] md:text-base text-white/60 max-w-xl mx-auto md:mx-0 leading-relaxed mb-9">{r.blurb}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="tap inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#16A34A] text-white font-extrabold rounded-full text-[15px]">
            <Icon.WhatsApp size={18} />
            Get notified on WhatsApp
          </a>
          <Link href="/courses" className="btn-ghost-dark tap inline-flex items-center justify-center px-7 py-4 text-white font-bold rounded-full text-[15px]">Explore courses</Link>
        </div>
      </div>
    </section>
  );
}
