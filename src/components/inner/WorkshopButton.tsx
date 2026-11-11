"use client";
/* Opens the lead sheet tailored to one workshop, so the signup arrives tagged with its name. */
export default function WorkshopButton({ title, kind, className = "", children }: {
  title: string; kind: "free" | "paid"; className?: string; children: React.ReactNode;
}) {
  const open = () =>
    window.dispatchEvent(new CustomEvent("openLeadPopup", {
      detail: {
        program: `Workshop: ${title}`,
        heading: kind === "free" ? "Reserve your free seat" : "Register for this workshop",
        sub: title,
        cta: kind === "free" ? "Reserve my free seat" : "Register — fee on WhatsApp",
      },
    }));
  return <button type="button" onClick={open} className={className}>{children}</button>;
}
