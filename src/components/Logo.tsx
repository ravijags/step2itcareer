interface LogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

export default function Logo({ size = "md", theme = "light" }: LogoProps) {
  const sizes = {
    sm: { mark: 22, wm: "text-[13px]", ai: "text-[6px]", gap: "gap-[7px]" },
    md: { mark: 30, wm: "text-[15px]", ai: "text-[7px]", gap: "gap-[9px]" },
    lg: { mark: 44, wm: "text-[22px]", ai: "text-[9px]", gap: "gap-[13px]" },
  };

  const s = sizes[size];

  // Slash 1 colour slightly lighter on white bg
  const slash1 = theme === "dark" ? "#8BA4FF" : "#A8BFFF";
  const wordColor = theme === "dark" ? "text-white" : "text-ink";
  const careerColor = "text-primary";

  return (
    <div className={`flex items-center ${s.gap}`}>
      {/* ── The Mark — two slashes + orange dot, no container ── */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
      >
        {/* Slash 1 — lighter, thinner — "where you were" */}
        <path
          d="M22 78 L46 18"
          stroke={slash1}
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Slash 2 — electric blue, bolder — "where you are" */}
        <path
          d="M44 78 L68 18"
          stroke="#3B5BFF"
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Orange dot — the job offer, bottom right */}
        <circle cx="78" cy="74" r="11" fill="#FF7A3D" />
      </svg>

      {/* ── Wordmark ── */}
      <span
        className={`${s.wm} font-extrabold tracking-tight leading-none ${wordColor}`}
      >
        Step
        <span className="text-primary italic">2</span>
        IT
        <span className={careerColor}>Career</span>
        {/* AI badge — orange fill, white text, superscript */}
        <span
          className={`${s.ai} font-extrabold bg-accent text-white rounded-[3px] px-1 py-[1px] align-super leading-none ml-[2px] not-italic`}
          style={{ letterSpacing: "0.4px", lineHeight: 1.8 }}
        >
          AI
        </span>
      </span>
    </div>
  );
}
