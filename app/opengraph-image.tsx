import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #1c1917 0%, #292524 45%, #d6b98b 100%)",
          color: "#f7f4ee",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "32px",
            padding: "44px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#f0ddbb",
            }}
          >
            Claude Code Guide
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 840,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 68,
                lineHeight: 1.08,
                fontWeight: 700,
              }}
            >
              A professional workflow for AI-assisted research and learning.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.45,
                color: "#e7dfd1",
              }}
            >
              Structured documentation, cleaner presentation, and stronger public
              signal.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 26,
              color: "#f5ecdd",
            }}
          >
            <div style={{ display: "flex" }}>Next.js 16 + TypeScript</div>
            <div style={{ display: "flex" }}>Applied AI workflow design</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
