import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The Shri Aradhyam menu board";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="The board"
        title="Dosa, meals, rice bowls, coffee."
        subtitle="Bengaluru and Chennai style dosa, Udupi and Thanjavur meals, five regional rice bowls, and Chikkamagaluru filter coffee."
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
