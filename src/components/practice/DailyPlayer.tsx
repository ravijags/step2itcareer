"use client";
/* One daily question. With no `n` it plays today's; with `n` it plays that day (older days are practice
   rounds, future days stay locked). Answers are saved in this browser only. */
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { BANK, SKILLS, isWeekend, questionFor } from "@/lib/daily";
import { milestoneReached, recordDay, streakOf, usePractice, useToday, type Practice } from "@/lib/practice";
import { Countdown, MilestoneCard, QuestionCard, ShareRow, Skeleton } from "./PracticeUI";

export default function DailyPlayer({ n: fixed }: { n?: number }) {
  const today = useToday();
  const p = usePractice();
  if (today === null || p === null) return <Skeleton />;

  const n = fixed ?? Math.max(1, today);
  if (n > today) {
    return (
      <div className="rounded-[24px] bg-white p-8 text-center border border-[#E6E3F7]">
        <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-muted">Daily #{n}</p>
        <p className="mt-2 text-[22px] font-extrabold text-ink">Not out yet.</p>
        <p className="mt-1 text-[14px] text-muted">It unlocks in {n - today} day{n - today === 1 ? "" : "s"}. Today&apos;s question is ready though.</p>
        <Link href="/daily" className="tap mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full btn-grad text-white font-extrabold text-[14px]">Play today&apos;s <Icon.ArrowRight size={15} /></Link>
      </div>
    );
  }

  const q = questionFor(n);
  const live = n === today;
  const ans = p.days[n];
  const picked = ans ? ans.p : null;
  const streak = streakOf(p, today);
  const milestone = milestoneReached(p, today);
  const label = live ? `Daily #${n} · today` : `Daily #${n} · practice`;

  const shareText = `Step2IT Daily #${n} · Catch the AI's mistake\n${ans?.ok ? "✅ Caught it" : "❌ The AI fooled me"}${streak > 1 ? ` · 🔥 ${streak}-day streak` : ""}\nCan you spot it in 30 seconds?`;

  return (
    <div className="space-y-4">
      <StreakStrip p={p} today={today} streak={streak} />
      <QuestionCard q={q} label={label} picked={picked} onPick={(i) => recordDay(n, i, i === q.answer)} />

      {ans && (
        <div className="rounded-[24px] bg-white/[0.05] border border-white/10 p-5 md:p-6 space-y-5">
          {live ? (
            <div>
              <p className="text-[20px] font-extrabold text-white leading-tight">
                {ans.ok ? "Nice catch." : "Now you know that one."} {streak > 0 && <span className="text-[#FF9A6C]">🔥 {streak}-day streak</span>}
              </p>
              <p className="mt-1 text-[14px] text-white/60">Next mistake drops in <Countdown className="font-extrabold text-white" /> · midnight India time.</p>
            </div>
          ) : (
            <p className="text-[14px] text-white/60">Practice round. Only today&apos;s question adds to your streak.{" "}
              <Link href="/daily" className="font-extrabold text-white underline underline-offset-4">Play today&apos;s</Link></p>
          )}
          <ShareRow dark text={shareText} path={`/daily/${n}`} />
          {milestone && <MilestoneCard kind={milestone} />}
          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <Link href="/check" className="tap flex items-center justify-between gap-3 rounded-[16px] bg-white/[0.06] border border-white/10 px-4 py-3.5 text-white">
              <span><span className="block text-[14px] font-extrabold">Job-Ready Check</span><span className="block text-[12.5px] text-white/55">10 questions · see your weak spots</span></span>
              <Icon.ArrowRight size={16} />
            </Link>
            <Link href={SKILLS[q.skill].roadmap} className="tap flex items-center justify-between gap-3 rounded-[16px] bg-white/[0.06] border border-white/10 px-4 py-3.5 text-white">
              <span><span className="block text-[14px] font-extrabold">{SKILLS[q.skill].roadmapName}</span><span className="block text-[12.5px] text-white/55">Free, step by step</span></span>
              <Icon.ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      <PastLinks n={n} today={today} answered={p.days} />
    </div>
  );
}

/* This week at a glance: done, missed, weekend (weekends never break the streak). */
function StreakStrip({ p, today, streak }: { p: Practice; today: number; streak: number }) {
  const days = Array.from({ length: 7 }, (_, i) => today - 6 + i).filter((d) => d >= 1);
  return (
    <div className="flex items-center justify-between gap-3 rounded-[18px] bg-white/[0.05] border border-white/10 px-4 py-3">
      <div className="flex items-center gap-2 text-white">
        <Icon.Flame size={18} className={streak > 0 ? "text-[#FF7A3D]" : "text-white/30"} />
        <span className="text-[15px] font-extrabold">{streak}</span>
        <span className="text-[12.5px] text-white/55">day streak</span>
      </div>
      <div className="flex items-center gap-1.5" aria-label="Last 7 days">
        {days.map((d) => {
          const a = p.days[d];
          const done = a?.live;
          const cls = done ? "bg-[#16A34A] border-[#16A34A]" : d === today ? "border-white/60 border-dashed" : isWeekend(d) ? "bg-white/10 border-transparent" : "border-white/20";
          return <span key={d} title={done ? "Done" : isWeekend(d) ? "Weekend (free pass)" : d === today ? "Today" : "Missed"} className={`w-3.5 h-3.5 rounded-full border ${cls}`} />;
        })}
      </div>
    </div>
  );
}

/* Older questions stay playable, which is also what the Reels link to. */
function PastLinks({ n, today, answered }: { n: number; today: number; answered: Record<string, unknown> }) {
  const past = Array.from({ length: Math.min(6, today - 1) }, (_, i) => today - 1 - i).filter((d) => d !== n && d <= BANK.length * 10);
  if (past.length === 0) return null;
  return (
    <div className="pt-2">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/45 mb-2.5">Missed one? Earlier questions</p>
      <div className="flex flex-wrap gap-2">
        {past.map((d) => (
          <Link key={d} href={`/daily/${d}`} className="tap inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[12.5px] font-bold text-white/80">
            #{d} · {SKILLS[questionFor(d).skill].short} {answered[d] ? <Icon.Check size={12} className="text-[#4ADE80]" /> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
