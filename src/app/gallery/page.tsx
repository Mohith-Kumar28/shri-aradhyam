import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, GALLERY } from "@/lib/site-data";
import {
  EaveCourse,
  JaaliBand,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Twelve views of the Banashankari outlet: the threshold, the shrine, the counters and the room.",
};

/** The span each tile size claims on the grid. Identical at both column
 *  counts, so the collage re-tiles itself from four columns down to two
 *  without a second set of classes. */
const SPAN = {
  hero: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  small: "col-span-1 row-span-1",
} as const;

/** What each tile is worth telling the browser about its rendered width. */
const SIZES = {
  hero: "(max-width: 1024px) 100vw, 50vw",
  wide: "(max-width: 1024px) 100vw, 50vw",
  small: "(max-width: 1024px) 50vw, 25vw",
} as const;

/**
 * A collage of the outlet in three tile sizes, every view framed in a brass
 * hairline the way a drawing is framed on the wall. No captions and no
 * lightbox: the pictures are the page.
 */
export default function GalleryPage() {
  return (
    <>
      <section
        className="hero-dark relative isolate overflow-hidden bg-ink-900"
        style={{ marginTop: "calc(var(--header-h, 6.9rem) * -1)", zIndex: 0 }}
      >
        <div
          aria-hidden="true"
          className="jaali jaali-brass absolute inset-0 opacity-[0.16]"
        />
        <div style={{ height: "var(--header-h, 6.9rem)" }} aria-hidden="true" />
        <Thoranam className="relative opacity-75" height={28} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16">
          <h1 className="display-caps text-[clamp(2rem,4.6vw,3.4rem)] font-semibold text-bone-100">
            Gallery
          </h1>
          <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-bone-400">
            The threshold, the shrine, the counters and the room at
            Banashankari. {BRAND.tagline}
          </p>
        </div>

        <EaveCourse
          className="absolute inset-x-0 bottom-0"
          height={16}
          color="#f2eadc"
          flip
        />
      </section>

      <section className="relative overflow-hidden bg-bone-200 py-16 sm:py-20">
        <div className="paper absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          {/* The row height is set to about four fifths of a column, so a hero
              tile lands near square and a wide tile near 2:1 — both modest
              crops of a render that is natively 1.46:1. Dense flow is load
              bearing, not a safety net: the last wide tile is placed after the
              last hero in source order and has to fall back into the hole the
              hero leaves beside it. */}
          <div className="grid auto-rows-[37vw] grid-flow-row-dense grid-cols-2 gap-3 lg:auto-rows-[clamp(11rem,17vw,16rem)] lg:grid-cols-4 lg:gap-4">
            {GALLERY.map((image, i) => (
              <figure
                key={image.src}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}
                className={`group relative overflow-hidden bg-bone-300 ${SPAN[image.size]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={SIZES[image.size]}
                  preload={i < 4}
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border border-brass-600/30"
                />
              </figure>
            ))}
          </div>

          <RuleDiamond className="mx-auto mt-16 w-[min(22rem,70%)]" />
          <p className="label mt-6 text-center text-[0.5625rem] text-granite-400">
            Architectural renders of the Banashankari outlet
          </p>
        </div>

        <JaaliBand className="relative mt-14 opacity-30" height={26} color="#3a2318" />
      </section>
    </>
  );
}
