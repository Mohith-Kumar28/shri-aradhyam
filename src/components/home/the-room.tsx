import Image from "next/image";
import Link from "next/link";
import { ROOM } from "@/lib/site-data";
import { JaaliBand, Mark } from "@/components/site/ornament";

/**
 * Layout family: horizontal scroll rail of full plates.
 *
 * The room is the argument, so the renders get real width instead of being
 * cropped into a tidy three column grid. Each plate is framed in a brass
 * hairline, the way a drawing is framed on the wall.
 */
export function TheRoom() {
  return (
    <section
      id="room"
      className="relative overflow-hidden bg-ink-800 py-24 sm:py-28 lg:py-32"
    >
      <JaaliBand className="absolute inset-x-0 top-0 opacity-25" height={40} />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="label text-[0.5625rem] text-brass-500">The room</p>
            <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-bone-100">
              Built in stone, brass and jaali.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="label link-brass inline-flex items-center gap-2.5 text-[0.625rem] text-bone-300"
          >
            See the gallery
            <Mark name="arrowRight" size={14} className="text-brass-400" />
          </Link>
        </div>
      </div>

      {/* The rail keeps the section's own left margin, so the first plate
          starts where the heading starts rather than half out of the frame. It
          bleeds off the right edge, which is the side you scroll towards. */}
      <div className="relative mx-auto mt-12 max-w-[88rem] px-5 sm:mt-14 sm:px-8">
        <ul className="-mr-5 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pr-5 sm:-mr-8 sm:gap-8 sm:pr-8 [scrollbar-color:var(--color-brass-600)_transparent] [scrollbar-width:thin]">
          {ROOM.map((plate, i) => (
            <li
              key={plate.title}
              className="group w-[86vw] shrink-0 snap-start sm:w-[62vw] lg:w-[46rem]"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
            >
              <figure>
                <div className="relative aspect-16/10 overflow-hidden bg-granite-700">
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    fill
                    sizes="(max-width: 640px) 86vw, (max-width: 1280px) 62vw, 46rem"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-500/25"
                  />
                </div>
                <figcaption className="rule-top mt-5 border-bone-500/25 pt-5">
                  <h3 className="font-display text-[1.3rem] tracking-[-0.02em] text-bone-100">
                    {plate.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-bone-400">
                    {plate.caption}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="label text-[0.625rem] text-bone-500">
          Scroll the rail &nbsp;&middot;&nbsp; Architectural renders of the outlet
        </p>
      </div>
    </section>
  );
}
