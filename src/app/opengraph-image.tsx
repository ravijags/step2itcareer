import { ImageResponse } from "next/og";

export const alt = "Step2ITCareer-AI — Get Hired. Not just Trained.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg,#070B18 0%,#0E1526 55%,#1B2466 100%)", color: "white", fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", right: -80, top: -120, width: 220, height: 900, background: "linear-gradient(180deg,#3B5BFF,#7B5BFF)", opacity: 0.35, transform: "rotate(22deg)", display: "flex" }} />
        <div style={{ position: "absolute", right: 180, top: -160, width: 90, height: 900, background: "#FF7A3D", opacity: 0.55, transform: "rotate(22deg)", display: "flex" }} />
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
          <span>Step</span><span style={{ color: "#FF7A3D" }}>2</span><span>ITCareer</span><span style={{ color: "#8BA4FF" }}>{"-AI"}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 800, letterSpacing: -4, lineHeight: 1.02 }}>Get Hired.</div>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 800, letterSpacing: -4, lineHeight: 1.02, color: "#8BA4FF" }}>Not just Trained.</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "rgba(255,255,255,0.72)" }}>
          Live mentor-led IT bootcamps · Max 5 students · Noida
        </div>
      </div>
    ),
    size
  );
}
