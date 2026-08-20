import { BRAND } from "@/lib/site-data";
import { Kolam, RuleDiamond } from "@/components/site/ornament";

/**
 * Layout family: centred statement standing on a drawn doorstep.
 *
 * The quiet passage of the page. The line framed on the dining room wall, read
 * first in Kannada and then in English, standing over a kolam — the figure
 * drawn in rice flour on a South Indian doorstep at dawn and wiped away by
 * evening. It is on the floor of the section because that is where a kolam is:
 * you step over it to come in.
 */
export function Creed() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-ink-800/12 bg-bone-300 pt-24 sm:pt-28 lg:pt-32"
      data-reveal
    >
      <div className="paper absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_46%_at_50%_-4%,rgba(201,162,39,0.16)_0%,rgba(201,162,39,0)_72%)]"
      />

      <div className="relative mx-auto max-w-[52rem] px-6 text-center">
        <p className="label text-[0.5625rem] text-brass-700">On the wall</p>

        <p
          className="kn mt-6 font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.3] text-ink-800"
          lang="kn"
        >
          {BRAND.creedKannada}
        </p>

        <RuleDiamond className="mx-auto mt-8 w-[min(16rem,60%)]" />

        <p className="mx-auto mt-8 max-w-[28ch] text-balance font-display text-[clamp(1.5rem,3.2vw,2.3rem)] leading-[1.28] tracking-[-0.022em] text-ink-800">
          {BRAND.creed}
        </p>

        <p className="mx-auto mt-8 max-w-[48ch] text-balance text-[1.0625rem] leading-relaxed text-granite-500">
          {BRAND.meaning}
        </p>
      </div>

      {/* The doorstep. */}
      <div className="relative mt-12 sm:mt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,rgba(58,35,24,0)_0%,rgba(58,35,24,0.055)_100%)]"
        />
        <div className="relative flex justify-center">
          <Kolam className="w-[min(20rem,62vw)] text-ink-700/50" size={320} />
        </div>
      </div>
    </section>
  );
}
