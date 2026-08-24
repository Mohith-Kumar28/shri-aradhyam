import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Shri Aradhyam Banashankari, Bengaluru";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="Banashankari"
        title="South Indian food on Outer Ring Road."
        subtitle="221 Outer Ring Road, opposite KEB, Kathreguppe, Banashankari 3rd Stage. Pure vegetarian."
        footnote="Opening September 2026"
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
