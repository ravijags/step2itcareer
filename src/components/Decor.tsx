/* The rising slash from the logo, as a decorative system.
   <Slashes /> drops two rotated bars + a dot behind any section.
   <Grain /> adds film texture to dark surfaces. Both are pointer-events:none. */

export function Grain() {
  return <div className="grain" aria-hidden />;
}

export function Slashes({
  tone = "primary", side = "left", opacity = 0.08, height = 520, dot = false, className = "",
}: {
  tone?: "primary" | "white" | "accent"; side?: "left" | "right";
  opacity?: number; height?: number; dot?: boolean; className?: string;
}) {
  const c = tone === "white" ? "#FFFFFF" : tone === "accent" ? "#FF7A3D" : "#3B5BFF";
  const c2 = tone === "white" ? "#FFFFFF" : "#8BA4FF";
  const pos = side === "left" ? { left: -24 } : { right: -24 };
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div style={{ position: "absolute", top: -40, ...pos, width: 34, height, background: c, opacity, transform: "rotate(22deg)", borderRadius: 18 }} />
      <div style={{ position: "absolute", top: -40, ...(side === "left" ? { left: 34 } : { right: 34 }), width: 22, height, background: c2, opacity: opacity * 0.7, transform: "rotate(22deg)", borderRadius: 14 }} />
      {dot && (
        <div style={{ position: "absolute", bottom: 60, ...(side === "left" ? { left: 120 } : { right: 120 }), width: 14, height: 14, borderRadius: 999, background: "#FF7A3D", opacity: Math.min(0.5, opacity * 4) }} />
      )}
    </div>
  );
}

/* Tiny corner slash for cards */
export function CornerSlash({ tone = "primary" }: { tone?: "primary" | "accent" }) {
  return (
    <div aria-hidden style={{
      position: "absolute", right: -6, top: -10, width: 8, height: 46,
      background: tone === "accent" ? "#FF7A3D" : "#3B5BFF", opacity: 0.09,
      transform: "rotate(22deg)", borderRadius: 4, pointerEvents: "none",
    }} />
  );
}
