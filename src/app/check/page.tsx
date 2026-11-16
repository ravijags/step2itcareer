import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import PracticeShell from "@/components/practice/PracticeShell";
import CheckRunner from "@/components/practice/CheckRunner";

export const metadata: Metadata = {
  title: "Job-Ready Check: Can You Catch the AI? — Step2ITCareer-AI",
  description: "10 questions, 4 minutes, no sign-up. Spot the mistakes in AI-written SQL, Excel, Python and prompts, and see exactly what to fix.",
};

export default function CheckPage() {
  return (
    <PracticeShell
      eyebrow={<><Icon.Target size={12} /> Free · No sign-up</>}
      title={<>Can you work with AI, <span className="grad-text-accent">or just copy it?</span></>}
      sub="The Job-Ready Check. 10 real mistakes AI tools make. Find out where you stand and what to fix first."
    >
      <CheckRunner />
    </PracticeShell>
  );
}
