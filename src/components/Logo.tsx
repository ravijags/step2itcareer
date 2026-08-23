interface LogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

export default function Logo({ size = "md", theme = "light" }: LogoProps) {
  const cfg = {
    sm: { mark: 26, gap: 6,  wm: 13, ai: 5.5 },
    md: { mark: 30, gap: 8,  wm: 15, ai: 6.5 },
    lg: { mark: 42, gap: 12, wm: 20, ai: 8   },
  }[size];

  const slash1   = theme === "dark" ? "#8BA4FF" : "#9DB4FF";
  const inkColor = theme === "dark" ? "#FFFFFF" : "#0E1526";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: cfg.gap,
        lineHeight: 1,
      }}
      aria-label="Step2ITCareer-AI"
    >
      {/* ── MARK — floating free, no container ── */}
      <svg
        width={cfg.mark}
        height={cfg.mark}
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0, display: "block" }}
      >
        <path d="M22 78 L46 18" stroke={slash1}   strokeWidth="12" strokeLinecap="round" />
        <path d="M44 78 L68 18" stroke="#3B5BFF"  strokeWidth="16" strokeLinecap="round" />
        <circle cx="78" cy="74" r="11" fill="#FF7A3D" />
      </svg>

      {/* ── WORDMARK ── */}
      <span
        style={{
          fontSize: cfg.wm,
          fontWeight: 800,
          letterSpacing: "-0.4px",
          lineHeight: 1,
          color: inkColor,
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        <span style={{ color: inkColor }}>Step</span>
        <span style={{ color: "#3B5BFF", fontStyle: "italic" }}>2</span>
        <span style={{ color: inkColor }}>IT</span>
        <span style={{ color: "#3B5BFF" }}>Career</span>
        {/* AI badge — small tight superscript */}
        <span
          style={{
            fontSize: cfg.ai,
            fontWeight: 800,
            background: "#FF7A3D",
            color: "white",
            padding: "1px 3.5px",
            borderRadius: 3,
            marginLeft: 2,
            verticalAlign: "super",
            lineHeight: 1.5,
            letterSpacing: "0.3px",
            fontStyle: "normal",
            flexShrink: 0,
          }}
        >
          AI
        </span>
      </span>
    </div>
  );
}
