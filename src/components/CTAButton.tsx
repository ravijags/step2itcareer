"use client";

export default function CTAButton({ label = "Book Free Counseling", className = "", variant = "primary" }: {
  label?: string;
  className?: string;
  variant?: "primary" | "white" | "ghost";
}) {
  const base = "inline-flex items-center justify-center gap-2 font-bold rounded-full text-[14px] px-7 py-3.5 transition-all duration-200 cursor-pointer border-0";
  const styles = {
    primary: "bg-primary text-white hover:bg-primary-deep",
    white: "bg-white text-primary hover:bg-soft",
    ghost: "bg-white/10 text-white border border-white/25 backdrop-blur-sm hover:bg-white/20",
  };

  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("openLeadPopup"))}
      className={`${base} ${styles[variant]} ${className}`}
      style={variant === "primary" ? { boxShadow: "0 4px 20px rgba(59,91,255,0.35)" } : undefined}
    >
      {label}
    </button>
  );
}
