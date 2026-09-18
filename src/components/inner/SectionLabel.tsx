export default function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-block px-4 py-1.5 text-[11px] font-extrabold rounded-full uppercase tracking-[0.18em] ${dark ? "bg-white/[0.07] text-white/70 border border-white/10" : "bg-primary/10 text-primary"}`}>{children}</span>
  );
}
