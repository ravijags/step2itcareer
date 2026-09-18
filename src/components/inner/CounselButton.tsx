"use client";

export default function CounselButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("openLeadPopup"))} className={className}>
      {children}
    </button>
  );
}
