/* Dark slash-motif band used at the top of every inner page. Server-safe. */
import { Grain, Slashes } from "@/components/Decor";

export default function PageHero({ eyebrow, title, description, chips, children, align = "center" }: {
  eyebrow?: React.ReactNode; title: React.ReactNode; description?: React.ReactNode;
  chips?: string[]; children?: React.ReactNode; align?: "center" | "left";
}) {
  const c = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <section className="relative z-10 cut-bottom bg-ink2 overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <Grain />
      <Slashes side="left" tone="primary" opacity={0.09} height={700} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,91,255,0.18) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.35 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(59,91,255,0.16), transparent 55%)" }} />
      <div className={`relative max-w-brand mx-auto px-6 flex flex-col ${c}`}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[#FF9A6C] text-[11px] font-extrabold tracking-[0.16em] uppercase mb-6">{eyebrow}</span>
        )}
        {chips && chips.length > 0 && (
          <div className={`flex flex-wrap gap-2 mb-5 ${align === "center" ? "justify-center" : ""}`}>
            {chips.map(ch => <span key={ch} className="px-3 py-1.5 text-[12px] font-bold rounded-full bg-white/[0.06] border border-white/10 text-white/75">{ch}</span>)}
          </div>
        )}
        <h1 className="text-[34px] sm:text-5xl md:text-[60px] font-extrabold text-white leading-[1.05] tracking-[-0.03em] max-w-3xl">{title}</h1>
        {description && <p className="mt-5 text-[15px] md:text-[17px] text-white/50 max-w-2xl leading-relaxed">{description}</p>}
        {children}
      </div>
    </section>
  );
}
