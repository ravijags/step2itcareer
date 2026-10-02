import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCES } from "@/lib/resources";
import { Grain, Slashes } from "@/components/Decor";

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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            Get notified on WhatsApp
          </a>
          <Link href="/courses" className="btn-ghost-dark tap inline-flex items-center justify-center px-7 py-4 text-white font-bold rounded-full text-[15px]">Explore courses</Link>
        </div>
      </div>
    </section>
  );
}
