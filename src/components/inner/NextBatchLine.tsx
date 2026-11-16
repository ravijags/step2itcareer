/* "Join the next batch" sub-line: shows the real start date once it's set in src/lib/site.ts. */
import { SITE } from "@/lib/site";

export default function NextBatchLine({ fallback }: { fallback: string }) {
  if (!SITE.nextBatch) return <div className="text-[13px] text-muted mb-6">{fallback}</div>;
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0FDF4] text-[#15803D] text-[13px] font-extrabold">
        <span className="w-2 h-2 rounded-full bg-[#16A34A]" aria-hidden /> Next batch starts {SITE.nextBatch}
      </div>
      <div className="mt-2 text-[13px] text-muted">Fee and EMI shared personally on WhatsApp in minutes.</div>
    </div>
  );
}
