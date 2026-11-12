/* Course card header: a real photo under the Ascent scrim + slash overlay, so it stays on-brand.
   v4.2: one distinct photo per course (15), so no two cards on a page share an image.
   Served through next/image (optimised, lazy, blur placeholder) so nothing pops in late. */
import Image from "next/image";
import { Slashes } from "@/components/Decor";

const PHOTOS: Record<string, string> = {
  "ai-engineer-agents-automation": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
  "ai-powered-data-analyst": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format",
  "mern-full-stack-ai": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80&auto=format",
  "java-full-stack-ai": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format",
  "mobile-app-developer-ai": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80&auto=format",
  "cybersecurity-ai-security": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80&auto=format",
  "digital-marketing-ai": "https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&q=80&auto=format",
  "ai-productivity": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format",
  "ai-assisted-coding": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format",
  "no-code-ai-automation": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80&auto=format",
  "python-for-ai": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80&auto=format",
  "core-java": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&q=80&auto=format",
  "sql-excel": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&auto=format",
  "build-your-first-app": "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80&auto=format",
  "react-native": "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=900&q=80&auto=format",
};
const FALLBACK = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&auto=format";
const BLUR = "data:image/svg+xml;base64," + Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5"><rect width="8" height="5" fill="#0A1428"/></svg>`
).toString("base64");

export default function CourseArt({ slug, title, height = "h-[150px] md:h-[170px]", badge = true, priority = false, tag = "Max 5" }: {
  slug: string; category?: string; title: string; height?: string; badge?: boolean; priority?: boolean; tag?: string;
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
          <span className="text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full text-white" style={{ background: "var(--grad-primary)" }}>{tag}</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full text-[#6EF0A0] border border-[#4ADE80]/40 backdrop-blur-sm" style={{ background: "rgba(7,11,24,0.72)" }}><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />Live</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-12" style={{ background: "linear-gradient(to top, rgba(10,20,40,0.96), rgba(10,20,40,0.6) 55%, transparent)" }}>
        <h3 className="text-white font-extrabold text-[15px] md:text-[16px] leading-snug drop-shadow">{title}</h3>
      </div>
    </div>
  );
}
