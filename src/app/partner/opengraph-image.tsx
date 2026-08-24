import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Partner with Shri Aradhyam";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="Partner with us"
        title="Open a Shri Aradhyam kitchen."
        subtitle="More kitchens across Bengaluru — with the drawings, the recipe cards, the training and the supply chain behind them."
        footnote="Enquiries open"
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
