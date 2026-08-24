import { ImageResponse } from "next/og";
import { OG_CONTENT_TYPE, OG_SIZE, ShareCard, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Gallery of the Shri Aradhyam dining room";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <ShareCard
        eyebrow="The room"
        title="Twelve views of the room."
        subtitle="The threshold, the shrine, the live counters and the dining hall at Banashankari — before a single plate has been carried out."
      />
    ),
    { ...size, fonts: ogFonts },
  );
}
