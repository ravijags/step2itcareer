/* Course card header: a real photo under the Ascent scrim + slash overlay, so it stays on-brand.
   Served through next/image (optimised, lazy, blur placeholder) so nothing pops in late. */
import Image from "next/image";
import { Slashes } from "@/components/Decor";

const PHOTOS: Record<string, string> = {
  "ai-engineer-agents-automation": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
  "agentic-ai": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80&auto=format",
  "ai-productivity": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format",
  "ai-assisted-coding": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format",
  "no-code-ai-automation": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80&auto=format",
  "ai-powered-data-analyst": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format",
  "data-scientist-ml-genai": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format",
  "power-bi": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&auto=format",
  "sql-excel": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&auto=format",
  "python-for-data": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format",
  "java-full-stack-ai": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format",
  "mern-full-stack-ai": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80&auto=format",
  "python-full-stack-ai": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80&auto=format",
  "advanced-python": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80&auto=format",
  "advanced-java": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&q=80&auto=format",
  "spring-boot": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format",
  "react": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80&auto=format",
  "node-express": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format",
  "system-design": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format",
  "python-programming": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80&auto=format",
  "core-java": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&q=80&auto=format",
  "web-basics": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80&auto=format",
  "git-github": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format",
  "mobile-app-developer-ai": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80&auto=format",
  "advanced-flutter": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format",
  "react-native": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format",
  "flutter-first-app": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80&auto=format",
  "android-kotlin": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format",
  "ios-swift": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80&auto=format",
  "qa-ai-testing-engineer": "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&q=80&auto=format",
  "selenium-automation": "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&q=80&auto=format",
  "manual-testing": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80&auto=format",
  "cloud-devops-engineer-ai": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80&auto=format",
  "devops-essentials": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format",
  "aws-basics": "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=80&auto=format",
  "cybersecurity-ai-security": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80&auto=format",
  "ethical-hacking-basics": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80&auto=format",
  "business-analyst-project-coordinator-ai": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format",
  "digital-marketing-ai": "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=900&q=80&auto=format",
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
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full text-[#4ADE80] border border-[#4ADE80]/35 bg-[#4ADE80]/25 backdrop-blur-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />Live</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-12" style={{ background: "linear-gradient(to top, rgba(10,20,40,0.96), rgba(10,20,40,0.6) 55%, transparent)" }}>
        <h3 className="text-white font-extrabold text-[15px] md:text-[16px] leading-snug drop-shadow">{title}</h3>
      </div>
    </div>
  );
}
