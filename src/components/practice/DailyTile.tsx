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
    /* Same tile as its neighbours; the gradient border and icon mark it as today's pick. */
    <Link href="/daily" className="group tap h-full block rounded-[20px] p-[1.5px] lift" style={{ background: "var(--grad-primary)" }}>
      <span className="h-full flex items-center md:items-start md:flex-col gap-4 rounded-[18.5px] bg-white p-4 md:p-6">
        <span className="w-11 h-11 shrink-0 rounded-[14px] flex items-center justify-center text-white" style={{ background: "var(--grad-primary)" }}><Icon.Bolt size={20} /></span>
        <span className="flex-1 min-w-0">
          <span className="block text-[16px] font-extrabold text-ink">{returning ? "Welcome back" : title}</span>
          <span className="block text-[13.5px] text-muted">{line}</span>
        </span>
        <Icon.ArrowRight size={17} className="shrink-0 text-primary md:hidden" />
      </span>
    </Link>
  );
}
