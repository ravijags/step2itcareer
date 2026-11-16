"use client";
/* Homepage block. New visitors see today's 30-second question as a teaser.
   Returning visitors get "welcome back": their streak, the skill that keeps tripping them, and their best check score.
   All of it is read from this browser only. */
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icons";
import { SKILLS, questionFor } from "@/lib/daily";
import { bestCheck, milestoneReached, skillStats, streakOf, usePractice, useToday, weakestSkill } from "@/lib/practice";
import { Countdown, MilestoneCard } from "./PracticeUI";

export default function HomeDaily() {
  const today = useToday();
  const p = usePractice();

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px 120px 0px" }} transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-[28px] bg-ink2 p-6 md:p-10 min-h-[300px]">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 0%, rgba(255,122,61,0.18), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(59,91,255,0.22), transparent 55%)" }} />
          <div className="relative">
            {today === null || p === null ? null : (Object.keys(p.days).length || p.checks.length) ? <Returning p={p} today={Math.max(1, today)} /> : <Teaser today={Math.max(1, today)} />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Teaser({ today }: { today: number }) {
  const q = questionFor(today);
  return (
    <div className="grid md:grid-cols-[1.15fr_1fr] gap-7 md:gap-10 items-center">
      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase"><Icon.Bolt size={12} /> Daily · 30 seconds</span>
        <h2 className="mt-4 text-[28px] md:text-[42px] font-extrabold text-white tracking-[-0.03em] leading-[1.06]">AI writes the code.<br /><span className="grad-text-accent">Can you catch its mistake?</span></h2>
        <p className="mt-3 text-[14.5px] md:text-[16px] text-white/60 max-w-md">One question a day. That&apos;s the skill companies hire for in 2026: checking what the AI got wrong.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/daily" className="tap whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-grad-accent text-white font-extrabold text-[15px]">Play today&apos;s question <Icon.ArrowRight size={16} /></Link>
          <Link href="/check" className="tap whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.06] text-white font-extrabold text-[15px]">Job-Ready Check</Link>
        </div>
      </div>
      <Link href="/daily" className="group block rounded-[20px] bg-white/[0.05] border border-white/10 p-4 md:p-5 lift" aria-label="Open today's question">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-[0.12em] text-white" style={{ background: SKILLS[q.skill].color }}>{SKILLS[q.skill].name}</span>
          <span className="text-[12px] font-bold text-white/50">Daily #{today}</span>
        </div>
        <p className="mt-3 text-[15px] font-bold text-white leading-snug">{q.task}</p>
        <pre className="mt-3 rounded-[14px] bg-black/30 px-3.5 py-3 text-[12.5px] leading-relaxed text-[#E6E8F5] font-mono whitespace-pre overflow-hidden max-h-[132px]">{q.code}</pre>
        <p className="mt-3 text-[14px] font-extrabold text-[#FF9A6C] inline-flex items-center gap-1.5">{q.ask} <Icon.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></p>
      </Link>
    </div>
  );
}

function Returning({ p, today }: { p: NonNullable<ReturnType<typeof usePractice>>; today: number }) {
  const streak = streakOf(p, today);
  const doneToday = !!p.days[today];
  const weak = weakestSkill(p);
  const st = skillStats(p);
  const best = bestCheck(p);
  const milestone = milestoneReached(p, today);
  const q = questionFor(today);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-white text-[13px] font-extrabold">
          <Icon.Flame size={15} className={streak > 0 ? "text-[#FF7A3D]" : "text-white/40"} /> {streak}-day streak
        </span>
        {best && <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-white text-[13px] font-extrabold"><Icon.Target size={15} className="text-[#7B8CFF]" /> Best check: {best.score}/10</span>}
      </div>

      <h2 className="text-[28px] md:text-[40px] font-extrabold text-white tracking-[-0.03em] leading-[1.06]">
        Welcome back. {doneToday ? <span className="grad-text-accent">Today&apos;s done.</span> : <span className="grad-text-accent">Today&apos;s mistake is waiting.</span>}
      </h2>

      <div className="grid md:grid-cols-2 gap-3">
        {doneToday ? (
          <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-5">
            <p className="text-[13px] font-bold text-white/55">Next question in</p>
            <Countdown className="mt-1 block text-[30px] font-extrabold text-white" />
            <p className="mt-1 text-[13px] text-white/50">Drops at midnight. Weekends never break your streak.</p>
          </div>
        ) : (
          <Link href="/daily" className="tap group rounded-[16px] bg-white/[0.05] border border-white/10 p-5 lift block">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-[0.12em] text-white" style={{ background: SKILLS[q.skill].color }}>{SKILLS[q.skill].name}</span>
            <p className="mt-3 text-[15px] font-bold text-white leading-snug">{q.task}</p>
            <p className="mt-3 text-[14px] font-extrabold text-[#FF9A6C] inline-flex items-center gap-1.5">{streak > 0 ? "Keep the streak going" : "Start a new streak"} <Icon.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></p>
          </Link>
        )}

        {weak ? (
          <Link href={SKILLS[weak].sheet} className="tap group rounded-[16px] bg-white/[0.05] border border-white/10 p-5 lift block">
            <p className="text-[13px] font-bold text-white/55">Your weak spot so far</p>
            <p className="mt-1 text-[20px] font-extrabold text-white">{SKILLS[weak].name} <span className="text-white/45 text-[15px] tabular-nums">· {st[weak][0]}/{st[weak][1]} right</span></p>
            <p className="mt-2 text-[14px] font-extrabold text-[#FF9A6C] inline-flex items-center gap-1.5">10-minute fix: the 1-page cheat sheet <Icon.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></p>
          </Link>
        ) : (
          <Link href="/check" className="tap group rounded-[16px] bg-white/[0.05] border border-white/10 p-5 lift block">
            <p className="text-[13px] font-bold text-white/55">{best ? "A new set every Monday" : "See where you stand"}</p>
            <p className="mt-1 text-[20px] font-extrabold text-white">{best ? "Beat your score" : "Take the Job-Ready Check"}</p>
            <p className="mt-2 text-[14px] font-extrabold text-[#FF9A6C] inline-flex items-center gap-1.5">10 questions · 4 minutes <Icon.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></p>
          </Link>
        )}
      </div>

      {milestone && <MilestoneCard kind={milestone} />}
    </div>
  );
}
