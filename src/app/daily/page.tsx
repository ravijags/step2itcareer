import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import PracticeShell from "@/components/practice/PracticeShell";
import DailyPlayer from "@/components/practice/DailyPlayer";

export const metadata: Metadata = {
  title: "Catch the AI's Mistake: Daily Challenge — Step2ITCareer-AI",
  description: "One 30-second question a day. The AI wrote some SQL, Excel, Python or a prompt. Can you spot what's wrong? Free, no sign-up.",
};

export default function DailyPage() {
  return (
    <PracticeShell
      eyebrow={<><Icon.Bolt size={12} /> Daily · 30 seconds</>}
      title={<>Catch the <span className="grad-text-accent">AI&apos;s mistake.</span></>}
      sub="AI writes the code now. The people who get hired are the ones who can tell when it's wrong. One question a day, free."
    >
      <DailyPlayer />
    </PracticeShell>
  );
}
