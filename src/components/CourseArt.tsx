/* On-brand abstract header art for course cards — no photos, no external requests. */
import { Grain, Slashes } from "@/components/Decor";

const HUES: Record<string, { hue: string; at: string }> = {
  "AI & Data": { hue: "rgba(123,91,255,0.55)", at: "70% 30%" },
  "Engineering": { hue: "rgba(59,91,255,0.5)", at: "30% 60%" },
  "Business": { hue: "rgba(255,122,61,0.42)", at: "60% 70%" },
  "Security": { hue: "rgba(74,222,128,0.35)", at: "40% 40%" },
  "Signature": { hue: "rgba(255,94,122,0.4)", at: "65% 60%" },
};
const BY_SLUG: Record<string, { hue: string; at: string }> = {
  "generative-ai-multi-agent": { hue: "rgba(123,91,255,0.55)", at: "70% 30%" },
  "data-science-ml-ai": { hue: "rgba(59,91,255,0.5)", at: "30% 60%" },
  "cpep-customized-professional-excellence": { hue: "rgba(255,122,61,0.42)", at: "60% 70%" },
};

export default function CourseArt({ slug, category, title, height = "h-[150px] md:h-[170px]", badge = true }: {
  slug: string; category?: string; title: string; height?: string; badge?: boolean;
}) {
  const a = BY_SLUG[slug] ?? HUES[category ?? ""] ?? { hue: "rgba(59,91,255,0.5)", at: "50% 50%" };
  return (
    <div className={`relative ${height} overflow-hidden bg-[#0A1428]`}>
      <Grain />
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at ${a.at}, ${a.hue}, transparent 60%)` }} />
      <Slashes side="right" tone="white" opacity={0.1} height={280} />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "22px 22px", opacity: 0.35 }} />
      {badge && (
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full text-white" style={{ background: "var(--grad-primary)" }}>Max 5</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full text-[#4ADE80] border border-[#4ADE80]/35 bg-[#4ADE80]/15"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />Live</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-10" style={{ background: "linear-gradient(to top, rgba(10,20,40,0.95), transparent)" }}>
        <h3 className="text-white font-extrabold text-[15px] md:text-[16px] leading-snug">{title}</h3>
      </div>
    </div>
  );
}
