import { ImageResponse } from "next/og";

export const alt = "DealScope — Discover better deals. Shop smarter.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0f3d3a 0%, #115e59 45%, #134e4a 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          DealScope
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 650,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Discover better deals. Shop smarter.
        </div>
        <div style={{ marginTop: 24, fontSize: 28, opacity: 0.85, maxWidth: 800 }}>
          Independent product discovery across online marketplaces.
        </div>
      </div>
    ),
    { ...size }
  );
}
