import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";
import { BRAND, OPENING } from "@/lib/site-data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${BRAND.name} — ${BRAND.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="Pure vegetarian"
        title="All of South India. One roof."
        subtitle="Udupi and Thanjavur meals, dosa from two cities, regional rice bowls and filter coffee — each cooked the way its own place cooks it."
        footnote={`${OPENING.outlet} · ${OPENING.dateLabel}`}
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
