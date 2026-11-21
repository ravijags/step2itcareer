import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";
import { ROADMAPS } from "@/lib/roadmaps";
import { SHEETS } from "@/lib/cheatsheets";
import { GUIDES } from "@/lib/guides";

/* Every public page, so Google can find all of them. New pages added to the lib files appear here automatically. */
const BASE = "https://step2itcareer.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    "", "/courses", "/internship", "/internship/30-days-coding-challenge", "/internship/summer-winter-training",
    "/workshops", "/schooling", "/schooling/class-6-8", "/schooling/class-8-10", "/schooling/class-10-12",
    "/resources", "/resources/roadmaps", "/resources/cheat-sheets", "/resources/guides",
    "/daily", "/check", "/about", "/contact",
  ];
  const dynamic = [
    ...courses.map((c) => `/courses/${c.slug}`),
    ...ROADMAPS.map((r) => `/resources/roadmaps/${r.slug}`),
    ...SHEETS.map((s) => `/resources/cheat-sheets/${s.slug}`),
    ...GUIDES.map((g) => `/resources/guides/${g.slug}`),
  ];
  return [...fixed, ...dynamic].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: path === "/daily" ? "daily" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/courses") ? 0.9 : 0.6,
  }));
}
