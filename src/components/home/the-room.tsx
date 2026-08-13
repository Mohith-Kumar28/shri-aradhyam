import Image from "next/image";
import { JaaliBand } from "@/components/site/ornament";

/**
 * Layout family: horizontal scroll rail of full plates.
 *
 * The room is the argument for the price, so the photographs get real width
 * instead of being cropped into a tidy three column grid.
 */

const PLATES = [
  {
    src: "/brand/storefront.webp",
    alt: "The storefront at street level: a stone eave over brass signage, jaali screens flanking the entrance and a granite stair up to the door",
    title: "The eave",
    caption:
      "A stone eave carried on carved corbels, jaali screens either side, and the name in brass. The building announces itself the way a temple gate does.",
    aspect: "aspect-16/10",
  },
  {
    src: "/brand/dining-floor.webp",
    alt: "The dining floor: granite topped tables, low wooden stools, live counters at the far end and a lit deity niche with a marigold garland",
    title: "The floor",
    caption:
      "Granite tops, low stools, planted dividers. Two live counters run the length of the room so you watch the idly and the dosa leave the griddle.",
    aspect: "aspect-16/10",
  },
  {
    src: "/brand/interior-wall.webp",
    alt: "A close view of the dining area with the brand wall behind: the promise set in Kannada and English above a row of drawn assurance marks",
    title: "The wall",
    caption:
      "The promise is painted where you eat, in Kannada and in English, with the seven marks under it. Nothing about the kitchen is kept behind a door.",
    aspect: "aspect-16/10",
  },
];

export function TheRoom() {
  return (
    <section id="room" className="relative overflow-hidden bg-ink-800 py-24 sm:py-32 lg:py-36">
      <JaaliBand className="absolute inset-x-0 top-0 opacity-22" height={40} />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-[20ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-bone-100">
            Built in stone, brass and jaali.
          </h2>
          <p className="max-w-[34ch] text-[1.0625rem] leading-relaxed text-bone-400">
            Every outlet is built to the same drawings: the eave, the corbels,
            the lattice, the granite and the niche.
          </p>
        </div>
      </div>

      {/* The rail. Scrolls with snap, and keeps its left margin aligned. */}
      <div className="relative mt-14 sm:mt-16">
        <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 sm:gap-8 sm:px-8 [scrollbar-color:var(--color-brass-600)_transparent] [scrollbar-width:thin]">
          {PLATES.map((plate, i) => (
            <li
              key={plate.title}
              className="group w-[86vw] shrink-0 snap-start sm:w-[64vw] lg:w-[52vw] xl:w-[46rem]"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
            >
              <figure>
                <div className={`relative ${plate.aspect} overflow-hidden bg-granite-700`}>
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    fill
                    sizes="(max-width: 640px) 86vw, (max-width: 1280px) 64vw, 46rem"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-500/25"
                  />
                </div>
                <figcaption className="rule-top mt-5 border-bone-500/25 pt-5">
                  <h3 className="font-display text-[1.35rem] tracking-[-0.02em] text-bone-100">
                    {plate.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-bone-400">
                    {plate.caption}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
          <li aria-hidden="true" className="w-2 shrink-0 sm:w-6" />
        </ul>

        <p className="label mx-auto max-w-[88rem] px-5 text-[0.625rem] text-bone-500 sm:px-8">
          Scroll the rail &nbsp;&middot;&nbsp; Architectural renders of the outlet
        </p>
      </div>
    </section>
  );
}
