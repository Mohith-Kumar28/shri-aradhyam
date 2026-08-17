import Image from "next/image";
import Link from "next/link";
import { BRAND, OPENING } from "@/lib/site-data";
import { daysUntilOpening, isPreOpening } from "@/lib/today";
import { ScriptMorph } from "@/components/site/script-morph";
import { LotusRoundel, Mark } from "@/components/site/ornament";

/**
 * Layout family: full bleed photograph with an inset almanac leaf.
 *
 * The building carries the atmosphere, the leaf carries the argument, and the
 * announcement is pressed over the join as a brass seal.
 */
export function Hero() {
  const preOpening = isPreOpening();
  const days = daysUntilOpening();

  return (
    <section className="relative isolate overflow-hidden bg-ink-800">
      <Image
        src="/brand/kathriguppe-night.webp"
        alt="The Kathriguppe storefront lit at night, brass signage under a stone eave with garlanded columns and jaali screens"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_44%]"
      />

      {/* Scrim: the leaf has to sit on stone, not on a photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(102deg,rgba(31,17,9,0.92)_0%,rgba(31,17,9,0.74)_38%,rgba(31,17,9,0.28)_66%,rgba(31,17,9,0.5)_100%)]"
      />
      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-y-0 right-0 w-[26vw] opacity-25"
      />

      <div className="relative mx-auto flex min-h-[93dvh] max-w-[88rem] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:min-h-[94dvh] lg:pb-24 lg:pt-36">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          {/* The leaf */}
          <div
            className="paper lift-leaf relative overflow-hidden bg-bone-100 lg:col-span-8 xl:col-span-7"
            data-reveal="wipe"
          >
            <div
              aria-hidden="true"
              className="jaali absolute inset-y-0 left-0 w-7 opacity-60 sm:w-9"
            />
            <div className="relative pb-9 pl-12 pr-7 pt-9 sm:pb-12 sm:pl-16 sm:pr-12 sm:pt-12 lg:pb-14 lg:pl-20 lg:pr-16 lg:pt-14">
              <LotusRoundel className="text-ink-700" size={32} />

              <h1 className="mt-6 font-display text-[clamp(2.6rem,7.4vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink-800">
                <ScriptMorph
                  native={BRAND.nameKannada}
                  latin={BRAND.name}
                  script="kn"
                  mode="settle"
                  delay={1400}
                />
              </h1>

              <p className="mt-6 font-display text-[clamp(1.4rem,3vw,2.15rem)] font-normal leading-[1.24] tracking-[-0.02em] text-ink-700">
                Four states of South India, under{" "}
                <span className="text-kumkum-600">one roof</span>.
              </p>

              <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-granite-500">
                Karnataka, Tamil Nadu, Andhra Pradesh and Kerala, each dish
                carrying the town it is claimed from. Ground and steamed that
                morning, and never held over to the next day.
              </p>

              {/* Actions sit on a ruled baseline, like entries on a page, with
                  the brand's own line closing the row. */}
              <div className="rule-top mt-10 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:gap-6">
                <Link
                  href="/menu"
                  className="label group relative inline-flex items-center justify-center overflow-hidden bg-ink-800 px-8 py-4.5 text-[0.625rem] text-bone-100"
                >
                  <span className="absolute inset-0 -translate-x-full bg-kumkum-700 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                  <span className="relative">Read the menu</span>
                </Link>
                <Link
                  href="/locations"
                  className="label link-brass inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap py-4.5 text-[0.625rem] text-ink-700"
                >
                  Find an outlet
                  <Mark name="arrowRight" size={14} className="text-brass-600" />
                </Link>
              </div>

              {/* The brand's own line closes the leaf, below the actions, where
                  it reads as a colophon rather than a label above the heading.
                  Two readings: stacked on a phone, one line once there is room,
                  so the Latin phrase is never broken. */}
              <p className="label mt-8 text-[0.625rem] text-granite-400">
                <span
                  className="kn block normal-case tracking-normal text-granite-500 sm:inline"
                  lang="kn"
                >
                  {BRAND.devotionKannada}
                </span>
                <span aria-hidden="true" className="mx-2.5 hidden text-brass-600 sm:inline">
                  &middot;
                </span>
                <span className="mt-1.5 block whitespace-nowrap sm:mt-0 sm:inline">
                  {BRAND.devotion}
                </span>
              </p>
            </div>
          </div>

          {/* The seal: the opening struck into a brass plate. */}
          <div className="lg:col-span-4 xl:col-span-5 lg:pb-6">
            <div
              className="brass-plate relative ml-auto w-full max-w-[19rem] px-9 py-9 text-center lg:max-w-[17.5rem]"
              data-reveal="seal"
              style={{ ["--reveal-delay" as string]: "900ms" }}
            >
              {/* The plate's engraved inner frame. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[7px] border border-ink-900/22"
              />

              <div className="relative">
                {/* The plate's ruled top row: the mark on one side, the day
                    engraved opposite it, so the day is register furniture
                    rather than a label stacked over the city. */}
                <div className="flex items-center justify-between gap-4 border-b border-ink-900/25 pb-3">
                  <svg
                    viewBox="0 0 14 14"
                    width="8"
                    height="8"
                    className="text-ink-900/50"
                    aria-hidden="true"
                  >
                    <path d="M7 0.5 13.5 7 7 13.5 0.5 7Z" fill="currentColor" />
                  </svg>
                  <p className="data text-[0.625rem] uppercase tracking-[0.22em] text-ink-800">
                    {preOpening ? "Opening" : "Now open"}
                  </p>
                </div>

                <p
                  className="kn struck mt-7 font-display text-[2.35rem] leading-tight text-ink-900"
                  lang="kn"
                >
                  {OPENING.outletNative}
                </p>
                <p className="font-display text-xl tracking-[-0.02em] text-ink-800">
                  {OPENING.outlet}, {OPENING.city}
                </p>

                <span
                  aria-hidden="true"
                  className="mx-auto my-5 block h-px w-12 bg-ink-900/25"
                />

                <p className="text-[0.9375rem] leading-relaxed text-ink-800">
                  {OPENING.dateLabel}
                </p>
                {preOpening && days > 0 ? (
                  <p className="data mt-5 text-[0.625rem] tracking-[0.14em] text-ink-800">
                    {days} {days === 1 ? "day" : "days"} to go
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
