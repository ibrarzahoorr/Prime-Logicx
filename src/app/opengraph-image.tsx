import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 55%, #2b2b2b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 22,
            background: "linear-gradient(135deg, #ffffff, #d4d4d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a0a0a",
            fontSize: 46,
            fontWeight: 900,
            marginBottom: 36,
          }}
        >
          P
        </div>
        <div style={{ fontSize: 60, fontWeight: 800, color: "white", letterSpacing: -1.5 }}>Prime Logicx</div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,.7)", marginTop: 20, textAlign: "center", maxWidth: 820 }}>
          Web & App Development · AI Automation · Digital Marketing
        </div>
      </div>
    ),
    { ...size }
  );
}
