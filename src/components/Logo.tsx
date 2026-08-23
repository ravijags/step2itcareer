interface LogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

export default function Logo({ size = "md", theme = "light" }: LogoProps) {
  const cfg = {
    //        mark  gap  wm    ai    skew  markShift
    sm: { mark: 30, gap: 5,  wm: 14, ai: 5,   skew: -14, shift: -3 },
    md: { mark: 36, gap: 8,  wm: 16, ai: 6,   skew: -14, shift: -3 },
    lg: { mark: 48, gap: 11, wm: 21, ai: 7.5, skew: -18, shift: -4 },
  }[size];

  const slash1   = theme === "dark" ? "#8BA4FF" : "#9DB4FF";
  const inkColor = theme === "dark" ? "#FFFFFF" : "#0E1526";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: cfg.gap,
      }}
      aria-label="Step2ITCareer-AI"
    >
      {/* ── MARK — shifted up to optically align with cap-height ── */}
      <svg
        width={cfg.mark}
        height={cfg.mark}
        viewBox="0 0 100 96"
        fill="none"
        aria-hidden="true"
        style={{
          flexShrink: 0,
          display: "block",
          marginTop: cfg.shift,
        }}
      >
        <path d="M22 78 L46 18" stroke={slash1}  strokeWidth="12" strokeLinecap="round" />
        <path d="M44 78 L68 18" stroke="#3B5BFF" strokeWidth="16" strokeLinecap="round" />
        <circle cx="78" cy="74" r="11" fill="#FF7A3D" />
      </svg>

      {/* ── WORDMARK ── */}
      <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>

        <span style={{ fontSize: cfg.wm, fontWeight: 800, letterSpacing: "-0.5px", color: inkColor }}>
          Step
        </span>

        <span style={{
          fontSize: cfg.wm,
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "#3B5BFF",
          display: "inline-block",
          fontStyle: "italic",
          transform: `skewX(${cfg.skew}deg)`,
        }}>
          2
        </span>

        <span style={{ fontSize: cfg.wm, fontWeight: 800, letterSpacing: "-0.5px", color: inkColor }}>
          IT
        </span>

        <span style={{ fontSize: cfg.wm, fontWeight: 800, letterSpacing: "-0.5px", color: "#3B5BFF" }}>
          Career
        </span>

        {/* AI badge — minimal padding, true superscript */}
        <span style={{
          fontSize: cfg.ai,
          fontWeight: 800,
          background: "#FF7A3D",
          color: "white",
          padding: "0px 2.5px",
          borderRadius: 3,
          marginLeft: 2,
          verticalAlign: "super",
          lineHeight: 1.6,
          letterSpacing: "0.3px",
          fontStyle: "normal",
          display: "inline-block",
          flexShrink: 0,
        }}>
          AI
        </span>

      </div>
    </div>
  );
}
