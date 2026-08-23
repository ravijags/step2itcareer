interface LogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

export default function Logo({ size = "md", theme = "light" }: LogoProps) {
  const cfg = {
    //          mark  gap   wm text size   ai badge  tagline
    sm: { mark: 28,  gap: 8,  wm: 14,  ai: 6  },
    md: { mark: 34,  gap: 10, wm: 16,  ai: 7  },
    lg: { mark: 48,  gap: 14, wm: 22,  ai: 9  },
  }[size];

  const slash1   = theme === "dark" ? "#8BA4FF" : "#9DB4FF";
  const inkColor = theme === "dark" ? "#FFFFFF" : "#0E1526";
  const careerOpacity = theme === "dark" ? "0.55" : "1";

  return (
    <div
      className="flex items-center"
      style={{ gap: cfg.gap }}
      aria-label="Step2ITCareer-AI"
    >
      {/* ── MARK — two slashes + orange dot, no container ── */}
      <svg
        width={cfg.mark}
        height={cfg.mark}
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Slash 1 — lighter, thinner */}
        <path d="M22 78 L46 18" stroke={slash1} strokeWidth="12" strokeLinecap="round" />
        {/* Slash 2 — electric blue, bolder */}
        <path d="M44 78 L68 18" stroke="#3B5BFF" strokeWidth="16" strokeLinecap="round" />
        {/* Orange dot — the job offer */}
        <circle cx="78" cy="74" r="11" fill="#FF7A3D" />
      </svg>

      {/* ── WORDMARK ── */}
      <div style={{ lineHeight: 1 }}>
        <span
          style={{
            fontSize: cfg.wm,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            color: inkColor,
            lineHeight: 1,
          }}
        >
          Step
          <span style={{ color: "#3B5BFF", fontStyle: "italic" }}>2</span>
          IT
          <span style={{ color: "#3B5BFF", opacity: careerOpacity }}>Career</span>
          {/* AI badge — small, tight superscript */}
          <span
            style={{
              fontSize: cfg.ai,
              fontWeight: 800,
              background: "#FF7A3D",
              color: "white",
              padding: "1px 4px",
              borderRadius: 3,
              marginLeft: 2,
              verticalAlign: "super",
              lineHeight: 1.6,
              letterSpacing: "0.4px",
              display: "inline-block",
              fontStyle: "normal",
            }}
          >
            AI
          </span>
        </span>
      </div>
    </div>
  );
}
