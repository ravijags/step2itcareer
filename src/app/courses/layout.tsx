import type { Metadata } from "next";

/* /courses is a client page, so its title lives here. */
export const metadata: Metadata = {
  title: "IT & AI Courses, Online and in Noida — Step2ITCareer-AI",
  description: "7 career programs and 8 short courses in AI, data, full stack, Java, mobile apps, cybersecurity and digital marketing. Live classes in batches of 5.",
  alternates: { canonical: "/courses" },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
