"use client";

import { useState } from "react";
import { courses } from "@/lib/courses";

const categories = [
  { key: "all", label: "All Programs" },
  { key: "AI & Data", label: "AI & Data" },
  { key: "Engineering", label: "Engineering" },
  { key: "Business", label: "Business" },
  { key: "Security", label: "Security" },
  { key: "Signature", label: "Signature" },
];

export default function CoursesPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? courses
    : courses.filter((c) => c.category === active);

  return (
    <div className="min-h-screen bg-soft">
      <div className="bg-[#0D1330] py-16 px-6 text-center">
        <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
          All Programs
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          12 Career-Launching Programs
        </h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">
          Live mentorship · Micro-batches of max 5 · Placement support until hired
        </p>
      </div>

      <div className="sticky top-[57px] z-30 bg-white border-b border-line">
        <div className="max-w-brand mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-all ${
                active === cat.key
                  ? "bg-primary text-white"
                  : "bg-soft text-muted hover:text-ink border border-line"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-brand mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
<a  
    key={course.slug}
    href={`/courses/${course.slug}`}
    className="bg-white rounded-2xl overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-deep transition-all duration-200 flex flex-col group"
  >
    <div className="h-52 relative overflow-hidden">
      <img
        src={getCourseImage(course.slug)}
        alt={course.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }} />
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: "rgba(59,91,255,0.85)", color: "#fff", backdropFilter: "blur(4px)" }}>
    Max 5 Students
  </span>
  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: "rgba(22,163,74,0.85)", color: "#fff", backdropFilter: "blur(4px)" }}>
    Live Mentorship
  </span>
</div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-extrabold text-[17px] leading-snug drop-shadow-lg">
          {course.title}
        </h3>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: `${course.categoryColor}18`, color: course.categoryColor }}
        >
          {course.category}
        </span>
        <span className="text-xs text-muted font-semibold">{course.duration}</span>
      </div>
      <p className="text-sm text-muted leading-relaxed mb-4 flex-1 line-clamp-2">
        {course.description}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-line">
        <span className="text-base font-extrabold text-ink">{course.feeDisplay}</span>
        <span className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-full group-hover:bg-primary-deep transition-colors">
          Explore
        </span>
      </div>
    </div>
  </a>
))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            No programs found in this category.
          </div>
        )}
      </div>

      <div className="bg-white border-t border-line py-12 px-6 text-center">
        <p className="text-ink font-bold text-lg mb-2">Not sure which program is right for you?</p>
        <p className="text-muted text-sm mb-6">Book a free 1:1 counseling session — no pressure, just clarity.</p>
        <a
          href="https://wa.me/919936609430"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#16A34A] text-white font-bold rounded-full hover:bg-green-700 transition-colors"
        >
          WhatsApp for Guidance
        </a>
      </div>
    </div>
  );
}

function getCourseImage(slug: string): string {
  const map: Record<string, string> = {
    "generative-ai-multi-agent": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    "data-science-ml-ai": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    "data-analytics-bi": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "business-analyst-product-management": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    "full-stack-software-engineering": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80",
    "cloud-devops-platform-engineering": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    "cybersecurity-cloud-security": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    "software-testing-qa-automation": "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80",
    "cpep-customized-professional-excellence": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    "ai-automation-no-code": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    "digital-marketing-growth-analytics": "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80",
    "system-design-software-architecture": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  };
  return map[slug] ?? "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80";
}

function getCourseEmoji(slug: string): string {
  const map: Record<string, string> = {
    "generative-ai-multi-agent": "🧠",
    "data-science-ml-ai": "📊",
    "data-analytics-bi": "📉",
    "business-analyst-product-management": "📋",
    "full-stack-software-engineering": "💻",
    "cloud-devops-platform-engineering": "☁️",
    "cybersecurity-cloud-security": "🛡️",
    "software-testing-qa-automation": "🧪",
    "cpep-customized-professional-excellence": "⭐",
    "ai-automation-no-code": "⚡",
    "digital-marketing-growth-analytics": "📱",
    "system-design-software-architecture": "🏗️",
  };
  return map[slug] ?? "📚";
}