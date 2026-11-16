import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icons";
import PracticeShell from "@/components/practice/PracticeShell";
import DailyPlayer from "@/components/practice/DailyPlayer";
import { SKILLS, questionFor } from "@/lib/daily";

/* Older daily questions keep their own link, so a Reel or a WhatsApp share always opens the same question.
   Pages are built the first time someone opens them. */
export const dynamicParams = true;
export function generateStaticParams() { return []; }

const parse = (s: string) => (/^\d{1,4}$/.test(s) && Number(s) >= 1 ? Number(s) : null);

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const n = parse((await params).n);
  if (!n) return {};
  const q = questionFor(n);
  return {
    title: `Daily #${n}: Catch the AI's ${SKILLS[q.skill].name} mistake — Step2ITCareer-AI`,
    description: `${q.task} The AI got something wrong. Can you spot it in 30 seconds?`,
  };
}

export default async function DailyNumberPage({ params }: { params: Promise<{ n: string }> }) {
  const n = parse((await params).n);
  if (!n) notFound();
  return (
    <PracticeShell
      eyebrow={<><Icon.Bolt size={12} /> Daily #{n}</>}
      title={<>Catch the <span className="grad-text-accent">AI&apos;s mistake.</span></>}
      sub="Spot what the AI got wrong. Sometimes it's right. That's part of the test."
    >
      <DailyPlayer n={n} />
    </PracticeShell>
  );
}
