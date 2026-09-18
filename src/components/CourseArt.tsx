/* Course card header: a real photo under the Ascent scrim + slash overlay, so it stays on-brand.
   Served through next/image (optimised, lazy, blur placeholder) so nothing pops in late. */
import Image from "next/image";
import { Slashes } from "@/components/Decor";

const PHOTOS: Record<string, string> = {
  "generative-ai-multi-agent": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
  "data-science-ml-ai": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format",
  "data-analytics-bi": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format",
  "business-analyst-product-management": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format",
  "full-stack-software-engineering": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80&auto=format",
  "cloud-devops-platform-engineering": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80&auto=format",
  "cybersecurity-cloud-security": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80&auto=format",
  "software-testing-qa-automation": "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&q=80&auto=format",
  "cpep-customized-professional-excellence": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format",
  "ai-automation-no-code": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80&auto=format",
  "digital-marketing-growth-analytics": "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=900&q=80&auto=format",
  "system-design-software-architecture": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format",
};
const FALLBACK = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&auto=format";
const BLUR = "data:image/svg+xml;base64," + Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5"><rect width="8" height="5" fill="#0A1428"/></svg>`
).toString("base64");

export default function CourseArt({ slug, title, height = "h-[150px] md:h-[170px]", badge = true, priority = false }: {
  slug: string; category?: string; title: string; height?: string; badge?: boolean; priority?: boolean;
}) {
  return (
    <div className={`relative ${height} overflow-hidden bg-[#0A1428]`}>
      <Image
        src={PHOTOS[slug] ?? FALLBACK} alt="" fill sizes="(max-width: 768px) 82vw, 400px"
        priority={priority} placeholder="blur" blurDataURL={BLUR}
        className="object-cover" style={{ filter: "saturate(1.1)" }}
      />
      {/* Brand tint + scrim so every photo sits in the same dark-blue world */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(59,91,255,0.28), rgba(10,20,40,0.15) 45%, rgba(10,20,40,0.55))" }} />
      <Slashes side="right" tone="white" opacity={0.12} height={280} />
      {badge && (
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full text-white" style={{ background: "var(--grad-primary)" }}>Max 5</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full text-[#4ADE80] border border-[#4ADE80]/35 bg-[#4ADE80]/25 backdrop-blur-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />Live</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-12" style={{ background: "linear-gradient(to top, rgba(10,20,40,0.96), rgba(10,20,40,0.6) 55%, transparent)" }}>
        <h3 className="text-white font-extrabold text-[15px] md:text-[16px] leading-snug drop-shadow">{title}</h3>
      </div>
    </div>
  );
}
