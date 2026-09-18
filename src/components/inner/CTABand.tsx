import { Grain, Slashes } from "@/components/Decor";
import { Icon } from "@/components/Icons";
import CounselButton from "@/components/inner/CounselButton";

export default function CTABand({ title, sub, primary = "Book free counseling" }: { title: string; sub?: string; primary?: string }) {
  return (
    <section className="relative z-10 cut-top overlap-up pt-24 md:pt-32 pb-20 md:pb-24 overflow-hidden" style={{ background: "var(--grad-primary)" }}>
      <Grain />
      <Slashes side="right" tone="white" opacity={0.09} height={560} />
      <div className="relative max-w-brand mx-auto px-6 text-center">
        <h2 className="text-[28px] md:text-[44px] font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-3">{title}</h2>
        {sub && <p className="text-white/70 text-[14px] md:text-[16px] mb-8 max-w-xl mx-auto">{sub}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <CounselButton className="tap w-full sm:w-auto px-8 py-4 bg-white text-primary font-extrabold rounded-full text-[15px]" >{primary}</CounselButton>
          <a href="https://wa.me/919936609430" className="tap w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white font-bold rounded-full text-[15px] inline-flex items-center justify-center gap-2"><Icon.WhatsApp size={18} /> WhatsApp now</a>
        </div>
      </div>
    </section>
  );
}
