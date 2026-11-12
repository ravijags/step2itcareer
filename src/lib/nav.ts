/* One source for the menu links, shared by the desktop nav and the mobile drawer. */
import { careerPrograms, courses } from "@/lib/courses";

export type NavItem = { name: string; href: string; note?: string };

export const courseLinks: NavItem[] = [
  ...careerPrograms.map((c) => ({ name: c.title, href: `/courses/${c.slug}` })),
  { name: `All ${courses.length} courses →`, href: "/courses" },
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
  { name: "Career Roadmaps", href: "/resources/roadmaps", note: "Step-by-step paths, free" },
  { name: "Cheat Sheets", href: "/resources/cheat-sheets", note: "Python, SQL, Git, Excel and more" },
  { name: "Career Guides", href: "/resources/guides", note: "Honest answers, 5-minute reads" },
  { name: "About Us", href: "/about" },
];
