import type { Metadata } from "next";
import ProgramPage from "@/components/inner/ProgramPage";
import { getProgram } from "@/lib/internships";

const p = getProgram("30-days-coding-challenge");

export const metadata: Metadata = { title: `${p.title} — Step2ITCareer-AI`, description: p.meta };

export default function Page() {
  return <ProgramPage p={p} />;
}
