import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Frequently asked questions about Shri Aradhyam";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="Good to know"
        title="Questions, answered."
        subtitle="What we serve, where we stand, when we open, and what pure vegetarian means in this kitchen."
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
