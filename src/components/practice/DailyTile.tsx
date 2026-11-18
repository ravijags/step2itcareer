"use client";
/* Homepage "Start free" tile for the daily question. New visitors see the pitch; returning visitors see
   their streak and whether today's question is done — the small "welcome back" that brings people back. */
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { streakOf, usePractice, useToday } from "@/lib/practice";

export default function DailyTile() {
  const today = useToday();
  const p = usePractice();
  const ready = today !== null && p !== null;
  const returning = ready && (Object.keys(p.days).length > 0 || p.checks.length > 0);
  const streak = ready ? streakOf(p, Math.max(1, today)) : 0;
  const doneToday = ready && !!p.days[Math.max(1, today)];

  const title = "Catch the AI's mistake";
  const line = !returning
    ? "1 question a day · 30 seconds"
    : doneToday
      ? `Today's done${streak > 0 ? ` · 🔥 ${streak}-day streak` : ""}`
      : streak > 0 ? `🔥 ${streak}-day streak · today's question is waiting` : "Today's question is waiting";

  return (
    <Link href="/daily" className="group tap h-full flex items-center md:items-start md:flex-col gap-4 rounded-[20px] bg-ink2 text-white p-4 md:p-6 lift relative overflow-hidden">
      <span aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(255,122,61,0.28), transparent 60%)" }} />
      <span className="relative w-11 h-11 shrink-0 rounded-[14px] flex items-center justify-center text-white" style={{ background: "var(--grad-accent)" }}><Icon.Bolt size={20} /></span>
      <span className="relative flex-1 min-w-0">
        <span className="block text-[16px] font-extrabold">{returning ? "Welcome back" : title}</span>
        <span className="block text-[13.5px] text-white/65">{line}</span>
      </span>
      <Icon.ArrowRight size={17} className="relative shrink-0 text-[#FF9A6C] md:hidden" />
    </Link>
  );
}
