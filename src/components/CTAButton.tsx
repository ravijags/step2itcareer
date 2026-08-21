"use client";

export default function CTAButton({
  label = "Book Free Counseling",
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
