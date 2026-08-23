interface LogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

export default function Logo({ size = "md", theme = "light" }: LogoProps) {
  const cfg = {
    //        mark  gap  wm    ai
    sm: { mark: 32, gap: 7,  wm: 14, ai: 6   },
    md: { mark: 38, gap: 9,  wm: 16, ai: 7   },
    lg: { mark: 52, gap: 13, wm: 22, ai: 9   },
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
      {/* ── MARK — no container, floating free ── */}
      <svg
        width={cfg.mark}
        height={cfg.mark}
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0, display: "block" }}
      >
        {/* Slash 1 — lighter, thinner — "where you were" */}
        <path d="M22 78 L46 18" stroke={slash1}  strokeWidth="12" strokeLinecap="round" />
        {/* Slash 2 — electric blue, bolder — "where you are" */}
        <path d="M44 78 L68 18" stroke="#3B5BFF" strokeWidth="16" strokeLinecap="round" />
        {/* Orange dot — the job offer */}
        <circle cx="78" cy="74" r="11" fill="#FF7A3D" />
      </svg>

      {/* ── WORDMARK ── */}
      <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>
        <span style={{
          fontSize: cfg.wm,
          fontWeight: 800,
          letterSpacing: "-0.5px",
          fontStyle: "normal",
          color: inkColor,
        }}>Step</span>

        {/* Italic blue 2 — more pronounced skew for visibility */}
        <span style={{
          fontSize: cfg.wm,
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "#3B5BFF",
          display: "inline-block",
          transform: "skewX(-14deg)",
          fontStyle: "italic",
        }}>2</span>

        <span style={{
          fontSize: cfg.wm,
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: inkColor,
        }}>IT</span>

        <span style={{
          fontSize: cfg.wm,
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "#3B5BFF",
        }}>Career</span>

        {/* AI badge — small tight superscript */}
        <span style={{
          fontSize: cfg.ai,
          fontWeight: 800,
          background: "#FF7A3D",
          color: "white",
          padding: "1px 4px",
          borderRadius: 3,
          marginLeft: 2,
          verticalAlign: "super",
          lineHeight: 1.5,
          letterSpacing: "0.3px",
          fontStyle: "normal",
          display: "inline-block",
          flexShrink: 0,
        }}>AI</span>
      </div>
    </div>
  );
}
