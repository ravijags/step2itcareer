"use client";

export default function CTAButton({
  label = "Free counseling",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("openLeadPopup"))}
      className={className}
    >
      {label}
    </button>
  );
}
