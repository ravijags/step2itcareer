export default function Logo({ size = "md", theme = "light" }: { size?: "sm"|"md"|"lg"; theme?: "light"|"dark" }) {
  const scales = { sm: 28, md: 34, lg: 44 };
  const h = scales[size];
  const textColor = theme === "dark" ? "#ffffff" : "#0E1526";
  const subColor = theme === "dark" ? "rgba(255,255,255,0.5)" : "#5B6478";

  return (
    <a href="/" className="inline-flex items-center gap-2.5 group" aria-label="Step2ITCareer-AI Home">
      {/* SVG Icon Mark */}
      <svg width={h} height={h} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B5BFF"/>
            <stop offset="100%" stopColor="#6B82FF"/>
          </linearGradient>
          <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF7A3D"/>
            <stop offset="100%" stopColor="#FFB347"/>
          </linearGradient>
        </defs>
        {/* Rounded square background */}
        <rect width="40" height="40" rx="10" fill="url(#logoGrad)"/>
        {/* Staircase steps — 3 ascending blocks */}
        <rect x="7" y="26" width="7" height="7" rx="1.5" fill="white" opacity="0.35"/>
        <rect x="17" y="19" width="7" height="14" rx="1.5" fill="white" opacity="0.6"/>
        <rect x="27" y="12" width="6" height="21" rx="1.5" fill="white"/>
        {/* Orange accent arrow tip at top right */}
        <path d="M27 12 L33 7 L33 13" stroke="url(#accentGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Small dot at step 1 */}
        <circle cx="10.5" cy="23" r="1.5" fill="url(#accentGrad)"/>
      </svg>

      {/* Wordmark */}
      <div className="leading-none">
        <div className="flex items-baseline gap-0" style={{ lineHeight: 1 }}>
          <span style={{ fontSize: size === "sm" ? 13 : size === "lg" ? 18 : 15, fontWeight: 800, letterSpacing: "-0.02em", color: textColor }}>
            Step2IT
          </span>
          <span style={{ fontSize: size === "sm" ? 13 : size === "lg" ? 18 : 15, fontWeight: 800, letterSpacing: "-0.02em", color: "#3B5BFF" }}>
            Career
          </span>
          <sup style={{ fontSize: 8, fontWeight: 800, color: "#FF7A3D", marginLeft: 1, lineHeight: 1 }}>AI</sup>
        </div>
        {size === "lg" && (
          <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.12em", color: subColor, textTransform: "uppercase", marginTop: 3 }}>
            Empowering Careers
          </div>
        )}
      </div>
    </a>
  );
}
