/* "Short course or career program?" — the two levels side by side, with the upgrade path
   between them (v4.3). Used on /courses and on short course pages. Server-safe. */
import Link from "next/link";
import { Icon } from "@/components/Icons";

const ROWS: { label: string; short: string; career: string }[] = [
  { label: "Length", short: "4–6 weeks", career: "3–6 months" },
  { label: "Goal", short: "Learn one skill", career: "Get job-ready" },
  { label: "Projects", short: "1–2 projects", career: "3–4 projects + capstone" },
  { label: "Internship", short: "—", career: "Included" },
  { label: "Interview prep", short: "—", career: "Mock interviews + resume" },
  { label: "Certificate", short: "Yes", career: "Yes" },
];

export default function LevelCompare({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "rounded-[22px] bg-white border border-[#E6E3F7] p-5 md:p-7 card-lift"}>
      <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-accent">Not sure which level?</div>
      <h3 className="mt-1 text-[20px] md:text-[24px] font-extrabold text-ink tracking-[-0.02em]">Short course or career program?</h3>

      <div className="mt-5 grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] text-[13px] md:text-[14px]">
        <div />
        <div className="px-2 pb-2 font-extrabold text-ink">Short course</div>
        <div className="px-2 pb-2 font-extrabold text-primary">Career program</div>
        {ROWS.map((r) => (
          <div key={r.label} className="contents">
            <div className="py-2.5 pr-2 border-t border-[#EEEBF8] text-muted font-semibold">{r.label}</div>
            <div className="py-2.5 px-2 border-t border-[#EEEBF8] text-ink font-semibold">{r.short}</div>
            <div className="py-2.5 px-2 border-t border-[#EEEBF8] text-ink font-bold bg-primary/[0.04]">{r.career}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-[16px] bg-soft border border-[#E6E3F7] px-4 py-3.5">
        <span className="w-9 h-9 shrink-0 rounded-full btn-grad text-white flex items-center justify-center"><Icon.Trend size={17} /></span>
        <p className="text-[13.5px] text-ink leading-snug flex-1">
          <span className="font-extrabold">Start short, upgrade later.</span> Everything in a short course counts toward its career program — you only pay the difference.
        </p>
        <Link href="/courses" className="shrink-0 text-[13px] font-extrabold text-primary">See all courses →</Link>
      </div>
    </div>
  );
}
