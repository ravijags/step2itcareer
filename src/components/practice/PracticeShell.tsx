/* Dark, compact page frame for the daily question and the check: the game sits near the top on phones. */
import { Grain, Slashes } from "@/components/Decor";

export default function PracticeShell({ eyebrow, title, sub, children }: {
  eyebrow: React.ReactNode; title: React.ReactNode; sub?: React.ReactNode; children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-ink2 overflow-hidden">
      <Grain />
      <Slashes side="left" tone="primary" opacity={0.08} height={700} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,91,255,0.20), transparent 60%)" }} />
      <div className="relative max-w-[680px] mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase">{eyebrow}</span>
        <h1 className="mt-4 text-[30px] sm:text-[40px] md:text-[48px] font-extrabold text-white leading-[1.05] tracking-[-0.03em]">{title}</h1>
        {sub && <p className="mt-3 text-[14.5px] md:text-[16px] text-white/60 leading-relaxed">{sub}</p>}
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </div>
  );
}
