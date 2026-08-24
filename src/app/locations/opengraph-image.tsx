import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Shri Aradhyam locations in Bengaluru";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="Where to find us"
        title="Banashankari, and Sarjapur next."
        subtitle="The first outlet opens on Outer Ring Road at Kathreguppe, Banashankari 3rd Stage, Bengaluru."
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
