"use client";
/* The site's memory of a student: answers, streak and check scores, saved ONLY in this browser.
   No account and no server, so there is nothing to sign up for and nothing leaves the phone.
   Read with usePractice() (safe during static rendering), write with the record helpers. */
import { useMemo, useSyncExternalStore } from "react";
import { isWeekend, questionFor, todayNumber, type Skill } from "@/lib/daily";

const KEY = "s2it-practice-v1";
const EVT = "s2it-practice";

export type DayAnswer = { p: number; ok: boolean; live: boolean }; // live = answered on its own day
export type CheckResult = { w: number; at: number; score: number; by: Record<Skill, [number, number]> };
export type Practice = { days: Record<string, DayAnswer>; checks: CheckResult[]; milestoneDone?: boolean };

const EMPTY: Practice = { days: {}, checks: [] };

function read(): Practice {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const p = JSON.parse(raw) as Practice;
    return { days: p.days ?? {}, checks: p.checks ?? [], milestoneDone: p.milestoneDone };
  } catch { return { ...EMPTY }; }
}
function write(p: Practice) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* storage blocked: the page still works, it just won't remember */ }
  window.dispatchEvent(new Event(EVT));
}

/* ── writes ── */
export function recordDay(n: number, pick: number, ok: boolean) {
  const p = read();
  if (p.days[n]) return; // first answer counts; no retries for a better score
  p.days[n] = { p: pick, ok, live: n === todayNumber() };
  write(p);
}
export function recordCheck(r: CheckResult) {
  const p = read();
  p.checks = [...p.checks, r].slice(-20);
  write(p);
}
export function dismissMilestone() {
  const p = read();
  p.milestoneDone = true;
  write(p);
}

/* ── reads ── */
const subscribe = (cb: () => void) => {
  window.addEventListener(EVT, cb);
  window.addEventListener("storage", cb);
  return () => { window.removeEventListener(EVT, cb); window.removeEventListener("storage", cb); };
};
const snapshot = () => { try { return localStorage.getItem(KEY) ?? ""; } catch { return ""; } };

/** null while rendering on the server or before the page has loaded in the browser. */
export function usePractice(): Practice | null {
  const raw = useSyncExternalStore(subscribe, snapshot, () => null);
  return useMemo(() => {
    if (raw === null) return null;
    if (!raw) return { ...EMPTY };
    try { const p = JSON.parse(raw) as Practice; return { days: p.days ?? {}, checks: p.checks ?? [], milestoneDone: p.milestoneDone }; }
    catch { return { ...EMPTY }; }
  }, [raw]);
}

const tick = (cb: () => void) => { const t = setInterval(cb, 30000); return () => clearInterval(t); };
/** Today's day number in India time; null on the server. Updates itself after midnight. */
export function useToday(): number | null {
  return useSyncExternalStore(tick, () => todayNumber(), () => null);
}

/* ── derived numbers ── */
/** Days in a row, counting only days answered on the day itself. Missing a Saturday or Sunday never
    breaks it. If today isn't answered yet, the streak from yesterday still stands (it's not lost until tomorrow). */
export function streakOf(p: Practice, today: number): number {
  const played = (n: number) => p.days[n]?.live === true;
  let d = played(today) ? today : today - 1;
  let s = 0;
  while (d >= 1) {
    if (played(d)) s++;
    else if (!isWeekend(d)) break;
    d--;
  }
  return s;
}

export function skillStats(p: Practice): Record<Skill, [number, number]> {
  const st: Record<Skill, [number, number]> = { sql: [0, 0], python: [0, 0], excel: [0, 0], prompt: [0, 0] };
  for (const [n, a] of Object.entries(p.days)) {
    const s = questionFor(Number(n)).skill;
    st[s][1]++; if (a.ok) st[s][0]++;
  }
  for (const c of p.checks) for (const s of Object.keys(c.by) as Skill[]) { st[s][0] += c.by[s][0]; st[s][1] += c.by[s][1]; }
  return st;
}

/** The skill to work on: lowest hit rate among skills tried at least twice. */
export function weakestSkill(p: Practice): Skill | null {
  const st = skillStats(p);
  let best: Skill | null = null; let rate = 2;
  for (const s of Object.keys(st) as Skill[]) {
    const [r, t] = st[s];
    if (t >= 2 && r / t < rate) { rate = r / t; best = s; }
  }
  return best !== null && rate < 0.75 ? best : null;
}

export function bestCheck(p: Practice): CheckResult | null {
  return p.checks.reduce<CheckResult | null>((b, c) => (!b || c.score > b.score ? c : b), null);
}

/** The one moment we suggest a mentor: a 7-day streak, or 7+/10 on the check. Shown until dismissed or used. */
export function milestoneReached(p: Practice, today: number): "streak" | "check" | null {
  if (p.milestoneDone) return null;
  if (streakOf(p, today) >= 7) return "streak";
  const b = bestCheck(p);
  return b && b.score >= 7 ? "check" : null;
}
