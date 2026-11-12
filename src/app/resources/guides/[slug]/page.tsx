import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/lib/guides";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import { ReadingProgress, ShareWhatsApp } from "@/components/resources/ResourceTools";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  return g ? { title: `${g.title} — Step2ITCareer-AI`, description: g.dek } : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const more = GUIDES.filter((x) => x.slug !== g.slug).slice(0, 2);
  return (
    <div className="min-h-screen bg-soft">
      <ReadingProgress />
      <PageHero align="left"
        eyebrow={<><Icon.Book size={12} /> {g.tag} · {g.minutes} min read</>}
        title={g.title}
        description={g.dek}
      />
      <article className="overlap-up pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="rounded-[20px] p-5 md:p-6 border-2" style={{ borderColor: "rgba(59,91,255,0.35)", background: "#fff" }}>
            <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">TL;DR</div>
            <ul className="mt-3 space-y-2.5">
              {g.tldr.map((t) => <li key={t} className="flex gap-2.5 text-[15px] font-semibold text-ink leading-snug"><Icon.Check size={18} className="text-primary shrink-0 mt-0.5" />{t}</li>)}
            </ul>
          </div>

          <div className="mt-8 space-y-5">
            {g.body.map((b, i) => {
              if (b.t === "h") return <h2 key={i} className="pt-4 text-[21px] md:text-[24px] font-extrabold text-ink tracking-[-0.02em]">{b.text}</h2>;
              if (b.t === "p") return <p key={i} className="text-[16px] md:text-[17px] text-[#374151] leading-[1.75]">{b.text}</p>;
              if (b.t === "list") return (
                <ul key={i} className="space-y-2.5">
                  {b.items.map((it) => <li key={it} className="flex gap-3 text-[16px] text-[#374151] leading-relaxed"><span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{it}</li>)}
                </ul>
              );
              return (
                <div key={i} className="flex gap-3 rounded-[16px] bg-accent/[0.08] border border-accent/25 px-4 py-4">
                  <Icon.Bulb size={20} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-[15px] font-semibold text-ink leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-[22px] bg-ink2 text-white p-6 md:p-7">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#FF9A6C]">Your next step</div>
            <Link href={g.next.href} className="mt-2 inline-flex items-center gap-2 text-[19px] md:text-[21px] font-extrabold hover:text-[#8BA4FF]">{g.next.label} <Icon.ArrowRight size={18} /></Link>
            <div className="mt-5"><ShareWhatsApp text={`Worth a read: "${g.title}"`} /></div>
          </div>

          <div className="mt-10">
            <div className="text-[12px] font-extrabold uppercase tracking-[0.15em] text-muted mb-3">Read next</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {more.map((m) => (
                <Link key={m.slug} href={`/resources/guides/${m.slug}`} className="bg-white rounded-[16px] p-4 border border-[#E6E3F7] card-lift lift">
                  <div className="text-[11px] font-bold text-muted">{m.tag} · {m.minutes} min</div>
                  <div className="mt-1 text-[15px] font-extrabold text-ink leading-snug">{m.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
