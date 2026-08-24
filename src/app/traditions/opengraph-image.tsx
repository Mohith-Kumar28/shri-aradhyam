import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The South Indian food traditions served at Shri Aradhyam";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="The regions"
        title="Five regions. One South India."
        subtitle="Bengaluru, Udupi, Thanjavur, Andhra and Kerala — what each one cooks, and why it tastes the way it does."
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
