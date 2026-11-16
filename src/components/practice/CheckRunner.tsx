"use client";
/* The Job-Ready Check: 10 "catch the AI's mistake" questions, a score per skill, and the weak spots
   linked to the free cheat sheets and roadmaps. A new set every Monday, so a retake measures you, not memory. */
import { useEffect, useState } from "react";
import Link from "next/link";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { Icon } from "@/components/Icons";
import { CHECK_MIX, SKILLS, checkSet, type Skill } from "@/lib/daily";
import { bestCheck, milestoneReached, recordCheck, usePractice, useToday } from "@/lib/practice";
import { MilestoneCard, QuestionCard, ShareRow, Skeleton, WA_NUMBER } from "./PracticeUI";

type Stage = "intro" | "run" | "done";

function verdict(score: number) {
  if (score >= 9) return { title: "Job-ready on the basics.", line: "You check AI work like someone who's done the job. Next: prove it with a real project." };
  if (score >= 7) return { title: "Close. Very close.", line: "A couple of gaps, and they're fixable in a week or two. Start with the weak spots below." };
  if (score >= 4) return { title: "Good start.", line: "You can read AI output, but it still fools you sometimes. The weak spots below are where to begin." };
  return { title: "Everyone starts here.", line: "Right now the AI could fool you in an interview. The free roadmap below fixes that step by step." };
}

export default function CheckRunner() {
  const today = useToday();
  const p = usePractice();
  const [stage, setStage] = useState<Stage>("intro");
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState<number[]>([]);

  if (today === null || p === null) return <Skeleton h={420} />;

  const week = Math.max(1, Math.floor((Math.max(1, today) - 1) / 7) + 1);
  const qs = checkSet(week);
  const best = bestCheck(p);
  const thisWeek = p.checks.filter((c) => c.w === week).at(-1);

  const start = () => { setPicks([]); setI(0); setStage("run"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const by: Record<Skill, [number, number]> = { sql: [0, 0], python: [0, 0], excel: [0, 0], prompt: [0, 0] };
  picks.forEach((pk, k) => { const s = qs[k].skill; by[s][1]++; if (pk === qs[k].answer) by[s][0]++; });
  const score = picks.filter((pk, k) => pk === qs[k].answer).length;

  const finish = () => {
    recordCheck({ w: week, at: today, score, by });
    setStage("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── intro ── */
  if (stage === "intro") {
    return (
      <div className="rounded-[20px] bg-white border border-[#E6E3F7] card-lift shadow-deep p-6 md:p-8">
        <div className="grid grid-cols-3 gap-2.5 text-center">
          {[["10", "questions"], ["~4", "minutes"], ["0", "sign-ups"]].map(([a, b]) => (
            <div key={b} className="rounded-[16px] bg-soft py-4"><div className="text-[26px] font-extrabold text-ink leading-none">{a}</div><div className="mt-1 text-[12px] font-bold text-muted">{b}</div></div>
          ))}
        </div>
        <button type="button" onClick={start} className="tap mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-grad text-white font-extrabold text-[15px]">
          {thisWeek ? "Try this set again" : "Start the check"} <Icon.ArrowRight size={16} />
        </button>
        <p className="mt-6 text-[15px] text-ink leading-relaxed">Each question shows something an AI wrote: a SQL query, an Excel formula, Python code, or a prompt. Your job is to spot the mistake. Sometimes there isn&apos;t one.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {CHECK_MIX.map(([s, k]) => (
            <span key={s} className="px-3 py-1.5 rounded-full text-[12px] font-bold text-white" style={{ background: SKILLS[s].color }}>{SKILLS[s].name} × {k}</span>
          ))}
        </div>
        {(best || thisWeek) && (
          <p className="mt-5 text-[13.5px] text-muted">
            {thisWeek ? <>You scored <b className="text-ink">{thisWeek.score}/10</b> on this week&apos;s set. A new set unlocks Monday.</> : null}
            {best && !thisWeek ? <>Your best so far: <b className="text-ink">{best.score}/10</b>. This week&apos;s set is new.</> : null}
          </p>
        )}

        <p className="mt-3 text-[12px] text-muted">Your answers stay on this phone. Nothing is sent anywhere.</p>
      </div>
    );
  }

  /* ── questions ── */
  if (stage === "run") {
    const q = qs[i];
    const picked = picks[i] ?? null;
    const last = i === qs.length - 1;
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "var(--grad-accent)" }} animate={{ width: `${((i + (picked !== null ? 1 : 0)) / qs.length) * 100}%` }} transition={{ duration: 0.35 }} />
          </div>
          <span className="text-[13px] font-extrabold text-white tabular-nums">{i + 1}/{qs.length}</span>
        </div>
        <QuestionCard key={i} q={q} label={`Question ${i + 1} of ${qs.length}`} picked={picked}
          onPick={(k) => setPicks((ps) => { const n = [...ps]; n[i] = k; return n; })} />
        {picked !== null && (
          <button type="button" onClick={() => { if (last) finish(); else { setI(i + 1); window.scrollTo({ top: 0, behavior: "smooth" }); } }}
            className="tap w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-grad text-white font-extrabold text-[15px]">
            {last ? "See my result" : "Next question"} <Icon.ArrowRight size={16} />
          </button>
        )}
      </div>
    );
  }

  /* ── result ── */
  const v = verdict(score);
  const weak = (Object.keys(by) as Skill[]).filter((s) => by[s][1] > 0 && by[s][0] < by[s][1])
    .sort((a, b) => by[a][0] / by[a][1] - by[b][0] / by[b][1]).slice(0, 2);
  const squares = (Object.keys(by) as Skill[]).map((s) => `${SKILLS[s].short} ${"🟩".repeat(by[s][0])}${"🟥".repeat(by[s][1] - by[s][0])}`).join("\n");
  const waPlan = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi! I took the Job-Ready Check and scored ${score}/10 (${(Object.keys(by) as Skill[]).map((s) => `${SKILLS[s].short} ${by[s][0]}/${by[s][1]}`).join(", ")}). Can I get a free 2-week plan?`
  )}`;
  const milestone = milestoneReached(p, today);

  return (
    <div className="space-y-4">
      <div className="rounded-[20px] bg-white border border-[#E6E3F7] card-lift shadow-deep p-6 md:p-8">
        <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-muted">Your Job-Ready score</p>
        <div className="mt-2 flex items-end gap-2">
          <ScoreNumber score={score} />
          <span className="pb-2 text-[22px] font-extrabold text-muted">/10</span>
        </div>
        <p className="mt-3 text-[20px] font-extrabold text-ink">{v.title}</p>
        <p className="mt-1 text-[14.5px] text-muted leading-relaxed">{v.line}</p>

        <div className="mt-6 space-y-3">
          {(Object.keys(by) as Skill[]).map((s, k) => (
            <div key={s}>
              <div className="flex items-center justify-between text-[13.5px] font-bold text-ink"><span>{SKILLS[s].name}</span><span className="tabular-nums">{by[s][0]}/{by[s][1]}</span></div>
              <div className="mt-1.5 h-2.5 rounded-full bg-soft overflow-hidden">
                <motion.div className="h-full rounded-full" style={{ background: SKILLS[s].color }} initial={{ width: 0 }} animate={{ width: `${(by[s][0] / Math.max(1, by[s][1])) * 100}%` }} transition={{ duration: 0.6, delay: 0.15 + k * 0.08 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {weak.length > 0 && (
        <div className="rounded-[20px] bg-white border border-[#E6E3F7] p-6 md:p-7">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-accent">Fix these first</p>
          <div className="mt-3 grid gap-2.5">
            {weak.map((s) => (
              <div key={s} className="rounded-[16px] bg-soft p-4">
                <p className="text-[15px] font-extrabold text-ink">{SKILLS[s].name}: {by[s][0]}/{by[s][1]}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                  <Link href={SKILLS[s].sheet} className="inline-flex items-center gap-1.5 text-[13.5px] font-extrabold text-primary">1-page cheat sheet <Icon.ArrowRight size={13} /></Link>
                  <Link href={SKILLS[s].roadmap} className="inline-flex items-center gap-1.5 text-[13.5px] font-extrabold text-primary">{SKILLS[s].roadmapName} <Icon.ArrowRight size={13} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {milestone && <MilestoneCard kind={milestone} />}

      <div className="rounded-[20px] bg-white/[0.05] border border-white/10 p-5 md:p-6 space-y-4">
        <a href={waPlan} target="_blank" rel="noopener noreferrer" className="tap w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink font-extrabold text-[15px]">
          <Icon.WhatsApp size={18} className="text-[#16A34A]" /> Get my free 2-week plan
        </a>
        <ShareRow dark text={`My Job-Ready Check: ${score}/10\n${squares}\nCan you beat the AI?`} path="/check" />
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-[13.5px]">
          <button type="button" onClick={() => setStage("intro")} className="font-extrabold text-white/80 underline underline-offset-4">Back to start</button>
          <Link href="/daily" className="inline-flex items-center gap-1.5 font-extrabold text-white">Keep sharp: 1 question a day <Icon.ArrowRight size={14} /></Link>
        </div>
      </div>
    </div>
  );
}

/* The score counts up from 0, so the result lands as a moment instead of a static number. */
function ScoreNumber({ score }: { score: number }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(reduce ? score : 0);
  const shown = useTransform(mv, (v) => Math.round(v));
  useEffect(() => {
    if (reduce) return;
    const c = animate(mv, score, { duration: 0.9, ease: [0.22, 1, 0.36, 1] });
    return () => c.stop();
  }, [mv, score, reduce]);
  return <motion.span className="text-[64px] md:text-[76px] font-extrabold leading-none tracking-[-0.04em] grad-text tabular-nums">{shown}</motion.span>;
}
