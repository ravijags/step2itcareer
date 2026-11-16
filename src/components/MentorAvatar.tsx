/* Mentor avatar: the real photo once SITE.mentor.photo is set, otherwise initials inside a brand-gradient ring. */
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function MentorAvatar({ className = "" }: { className?: string }) {
  const m = SITE.mentor;
  return (
    <div className={`relative shrink-0 rounded-full p-[3px] ${className}`}
      style={{ background: "conic-gradient(from 210deg, #3B5BFF, #7B5BFF, #FF7A3D, #3B5BFF)", boxShadow: "0 18px 40px rgba(59,91,255,0.35)" }}>
      <div className="relative w-full h-full rounded-full overflow-hidden bg-ink2 flex items-center justify-center ring-2 ring-ink2">
        {m.photo
          ? <Image src={m.photo} alt={m.name} fill sizes="120px" className="object-cover" />
          : <span className="font-extrabold tracking-[-0.02em] text-white" aria-label={m.name}>{m.initials}</span>}
      </div>
    </div>
  );
}
