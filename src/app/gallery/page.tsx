import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, GALLERY } from "@/lib/site-data";
import {
  EaveCourse,
  JaaliBand,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  path: "/gallery",
  description:
    "The Banashankari outlet: the signed shopfront on Outer Ring Road, the threshold and its brass lamps, the shrine inside the door, the live counters, and the dining hall under its coffered ceiling.",
  keywords: [
    "South Indian restaurant interior Bengaluru",
    "temple style restaurant Bangalore",
    "Banashankari restaurant photos",
  ],
});

/**
 * Five views of the outlet, each framed in a brass hairline the way a drawing
 * is framed on the wall. The shopfront runs the full width because it is the
 * one picture that has to be read before the others make sense — you are
 * outside the building, and then you are inside it. The four interiors pair off
 * beneath it. No lightbox: the pictures are the page.
 */
export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Gallery", path: "/gallery" }])} />
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
            The building on Outer Ring Road, and the threshold, the shrine, the
            counters and the hall inside it. {BRAND.tagline}
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
          {/* Outside, at full width. The render is natively about 2.44:1, so
              the desktop frame is cut to match it and the narrow frame crops in
              rather than shrinking the whole shopfront to a letterbox. */}
          <figure data-reveal className="group relative block bg-bone-300">
            <div className="relative aspect-4/3 sm:aspect-16/9 lg:aspect-[2.44/1]">
              <Image
                src={GALLERY[0].src}
                alt={GALLERY[0].alt}
                fill
                sizes="(max-width: 1408px) 100vw, 1408px"
                preload
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 border border-brass-600/30"
              />
            </div>
            <figcaption className="label mt-3.5 text-[0.5625rem] text-granite-400">
              {GALLERY[0].title}
            </figcaption>
          </figure>

          {/* And inside, two by two. */}
          <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6">
            {GALLERY.slice(1).map((image, i) => (
              <figure
                key={image.src}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}
                className="group relative block bg-bone-300"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 44vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-600/30"
                  />
                </div>
                <figcaption className="label mt-3.5 text-[0.5625rem] text-granite-400">
                  {image.title}
                </figcaption>
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
