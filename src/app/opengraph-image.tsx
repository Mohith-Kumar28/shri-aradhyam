import { ImageResponse } from "next/og";
import { BRAND, OPENING } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${BRAND.name}. ${BRAND.tagline}`;

/**
 * The share card, built in the same materials as the site: bone ground, a
 * brass hairline, chocolate ink, and the emblem drawn rather than imported.
 *
 * No web font is loaded here on purpose. Fetching Eczar at edge render time is
 * one more thing that can fail and leave a blank card, and a share image that
 * does not render is worse than one set in a system serif.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2eadc",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="72" height="72" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="23" fill="#3a2318" />
            <g fill="#faf5ec">
              <path d="M24 7.2C26.4 11.8 27.6 15.5 27.6 18.3C27.6 20.6 26.4 22.6 24 24.1C21.6 22.6 20.4 20.6 20.4 18.3C20.4 15.5 21.6 11.8 24 7.2Z" />
              <path d="M14.38 10.14C18.94 12.61 22.01 15.01 23.57 17.33C24.86 19.24 24.98 21.57 23.83 24.15C21 24.25 18.89 23.26 17.6 21.36C16.04 19.03 14.96 15.3 14.38 10.14Z" />
              <path d="M33.62 10.14C33.04 15.3 31.96 19.03 30.4 21.36C29.11 23.26 27 24.25 24.17 24.15C23.02 21.57 23.14 19.24 24.43 17.33C25.99 15.01 29.06 12.61 33.62 10.14Z" />
              <path d="M11.6 27.2c-.9 5.1.5 9.1 4.1 11.9 2.3 1.8 5.1 2.8 8.3 3.1v-3.3c-2.6-.3-4.8-1.1-6.5-2.5-2.7-2.2-3.8-5.5-3.2-9.7Z" />
              <path d="M36.4 27.2c.9 5.1-.5 9.1-4.1 11.9-2.3 1.8-5.1 2.8-8.3 3.1v-3.3c2.6-.3 4.8-1.1 6.5-2.5 2.7-2.2 3.8-5.5 3.2-9.7Z" />
            </g>
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.19em",
              textTransform: "uppercase",
              color: "#635d54",
            }}
          >
            {BRAND.devotion}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#26150d",
            }}
          >
            {BRAND.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 44,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#3a2318",
            }}
          >
            {BRAND.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #c9a227",
            paddingTop: 28,
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#785c0f",
          }}
        >
          <div style={{ display: "flex" }}>
            {OPENING.outlet}, {OPENING.city}
          </div>
          <div style={{ display: "flex", color: "#9e2b25" }}>
            {OPENING.dateLabel}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
