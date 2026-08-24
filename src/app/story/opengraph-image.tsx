import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Our story — Shri Aradhyam";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="Our story"
        title="Every place has something worth preserving."
        subtitle="Not one generic South Indian menu, but recipes kept rooted in the regions, cities and traditions they belong to."
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
