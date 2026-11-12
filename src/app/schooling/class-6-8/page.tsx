import type { Metadata } from "next";
import SchoolPage from "@/components/inner/SchoolPage";
import { getSchool } from "@/lib/schooling";

const s = getSchool("class-6-8");

export const metadata: Metadata = { title: `${s.band} Coding Program — Step2ITCareer-AI`, description: s.meta };

export default function Page() {
  return <SchoolPage s={s} />;
}
