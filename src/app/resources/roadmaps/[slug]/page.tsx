import Link from "next/link";
import { notFound } from "next/navigation";
import { ROADMAPS, getRoadmap } from "@/lib/roadmaps";
import { getCourseBySlug } from "@/lib/courses";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/inner/PageHero";
import RoadmapView from "@/components/resources/RoadmapView";
import { ShareWhatsApp } from "@/components/resources/ResourceTools";
import CTABand from "@/components/inner/CTABand";

export function generateStaticParams() {
  return ROADMAPS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRoadmap(slug);
  return r ? { title: `${r.role} Roadmap (Free) — Step2ITCareer-AI`, description: `${r.intro} ${r.steps.length} steps with free official resources.` } : {};
}

export default async function RoadmapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRoadmap(slug);
  if (!r) notFound();
  const course = getCourseBySlug(r.course);
  return (
    <div className="min-h-screen bg-soft">
      <PageHero align="left"
        eyebrow={<><Icon.Route size={12} /> Free roadmap · {r.total}</>}
        title={<>{r.role} <span className="grad-text">roadmap</span></>}
        description={r.intro}
      >
        <Link href="/resources/roadmaps" className="mt-6 inline-flex items-center gap-2 text-white/55 hover:text-white text-[13px] font-semibold">
          <Icon.ArrowRight size={14} className="rotate-180" /> All roadmaps
        </Link>
      </PageHero>
      <div className="overlap-up pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-brand mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
          <RoadmapView r={r} />
          <aside className="lg:sticky lg:top-24 space-y-4">
            {course && (
              <div className="rounded-[20px] bg-ink2 text-white p-6">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#FF9A6C]">Follow it with a mentor</div>
                <div className="mt-2 text-[19px] font-extrabold leading-snug">{course.title}</div>
                <p className="mt-2 text-[13.5px] text-white/60 leading-relaxed">This roadmap is the program, step for step — live, in a batch of 5, with projects and an internship.</p>
                <Link href={`/courses/${course.slug}`} className="tap mt-4 inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-full btn-grad text-white font-extrabold text-[14px]">See the program <Icon.ArrowRight size={14} /></Link>
              </div>
            )}
            <ShareWhatsApp text={`Free ${r.role} roadmap:`} className="w-full" />
          </aside>
        </div>
      </div>
      <CTABand title="Stuck on a step?" sub="Book a free 15-minute call. We'll tell you exactly what to learn next." />
    </div>
  );
}
