/* One source for the menu links, shared by the desktop nav and the mobile drawer. */
import { careerPrograms } from "@/lib/courses";

export type NavItem = { name: string; href: string; note?: string };

export const courseLinks: NavItem[] = [
  ...careerPrograms.map((c) => ({ name: c.title, href: `/courses/${c.slug}` })),
  { name: "All 39 courses →", href: "/courses" },
];

export const internshipLinks: NavItem[] = [
  { name: "Internships: 4, 6 or 8 weeks", href: "/internship", note: "Real project + certificate" },
  { name: "30-Day Coding Challenge", href: "/internship/30-days-coding-challenge", note: "Java or Python, interview-ready" },
  { name: "Summer/Winter Training", href: "/internship/summer-winter-training", note: "For your college break" },
];

export const schoolingLinks: NavItem[] = [
  { name: "Class 6–8 Coding Program", href: "/schooling/class-6-8" },
  { name: "Class 8–10 Coding Program", href: "/schooling/class-8-10" },
  { name: "Class 10–12 Coding Program", href: "/schooling/class-10-12" },
];

export const resourceLinks: NavItem[] = [
  { name: "Blogs", href: "/resources/blogs" },
  { name: "Career", href: "/resources/career" },
  { name: "About Us", href: "/about" },
  { name: "Tutorials", href: "/resources/tutorials" },
  { name: "Tech Trends", href: "/resources/tech-trends" },
  { name: "Success Stories", href: "/resources/success-stories" },
];
