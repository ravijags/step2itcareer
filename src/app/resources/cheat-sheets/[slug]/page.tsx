import Link from "next/link";
import { notFound } from "next/navigation";
import { SHEETS, getSheet } from "@/lib/cheatsheets";
import { getCourseBySlug } from "@/lib/courses";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import { CopyButton, SaveButton, ShareWhatsApp } from "@/components/resources/ResourceTools";

export function generateStaticParams() {
  return SHEETS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSheet(slug);
  return s ? { title: `${s.title} Cheat Sheet (Free) — Step2ITCareer-AI`, description: s.blurb } : {};
}

export default async function SheetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSheet(slug);
  if (!s) notFound();
  const course = getCourseBySlug(s.course);
  return (
    <div className="min-h-screen bg-soft">
      <div className="print:hidden">
        <PageHero align="left"
          eyebrow={<><Icon.Clipboard size={12} /> Free cheat sheet</>}
          title={<>{s.title} <span className="grad-text">cheat sheet</span></>}
          description={s.blurb}
        >
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <SaveButton />
            <ShareWhatsApp text={`Free ${s.title} cheat sheet:`} />
          </div>
        </PageHero>
      </div>

      <div className="overlap-up pt-24 md:pt-32 pb-16 md:pb-24 print:pt-0 print:mt-0">
        <div className="max-w-brand mx-auto px-6">
          <h1 className="hidden print:block text-[22px] font-extrabold text-ink mb-4">{s.title} — Step2ITCareer-AI cheat sheet</h1>
          <div className="columns-1 md:columns-2 gap-5 [column-fill:_balance]">
            {s.sections.map((sec) => (
              <section key={sec.title} className="break-inside-avoid mb-5 rounded-[18px] bg-white border border-[#E6E3F7] p-4 md:p-5 card-lift">
                <h2 className="text-[13px] font-extrabold uppercase tracking-[0.14em] mb-3" style={{ color: s.color }}>{sec.title}</h2>
                <div className="space-y-3">
                  {sec.items.map((it) => (
                    <div key={it.code}>
                      <div className="flex items-start gap-2 rounded-[12px] bg-ink2 px-3.5 py-3">
                        <pre className="flex-1 min-w-0 overflow-x-auto text-[12.5px] leading-relaxed text-[#E6E8F5] font-mono whitespace-pre">{it.code}</pre>
                        <CopyButton text={it.code} />
                      </div>
                      <p className="mt-1.5 text-[12.5px] text-muted leading-snug">{it.note}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="print:hidden mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-white border border-[#E6E3F7] p-5 md:p-6">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-accent">Go beyond the cheat sheet</div>
              <div className="mt-1 text-[17px] font-extrabold text-ink">{course ? `${course.title} · ${course.duration}` : "Short courses"}</div>
            </div>
            <div className="flex gap-3">
              <Link href="/resources/cheat-sheets" className="tap px-5 py-3 rounded-full border border-[#E6E3F7] text-ink font-bold text-[14px]">All cheat sheets</Link>
              {course && <Link href={`/courses/${course.slug}`} className="tap btn-grad px-5 py-3 rounded-full text-white font-extrabold text-[14px]">See the course</Link>}
            </div>
          </div>
          <p className="hidden print:block mt-4 text-[11px] text-muted">step2itcareer.vercel.app/resources/cheat-sheets/{s.slug}</p>
        </div>
      </div>
    </div>
  );
}
