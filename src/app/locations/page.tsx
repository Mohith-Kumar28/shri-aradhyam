import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, LOCATIONS, OPENING } from "@/lib/site-data";
import {
  Corbel,
  Diamond,
  EaveCourse,
  JaaliBand,
  Mark,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Locations",
  path: "/locations",
  description:
    "Shri Aradhyam opens on Outer Ring Road at Kathreguppe, Banashankari 3rd Stage, Bengaluru, the last week of September — with Sarjapur to follow.",
  keywords: [
    "South Indian restaurant Banashankari",
    "restaurant Outer Ring Road Kathreguppe",
    "veg restaurant Banashankari 3rd Stage",
    "restaurant Sarjapur Road Bengaluru",
  ],
});

/**
 * Two entries on one ground.
 *
 * Both kitchens are the same house, so both cards are the same card: the same
 * ink panel, the same jaali behind it, the same brass rule and the same brass
 * status line. What separates them is what is known about each — the first has
 * an address and a date, the second has neither yet — and that difference is
 * left to the words, not staged with a second colour scheme that would read as
 * two different businesses.
 *
 * No render on either. An address and a date is all a visitor needs here.
 */
export default function LocationsPage() {
  const [first, next] = LOCATIONS;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Locations", path: "/locations" }])} />
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
            Locations
          </h1>
          <p className="mt-6 max-w-[40ch] text-[1.0625rem] leading-relaxed text-bone-400">
            Namma Bengaluru first. The kitchen opens at Banashankari, and
            Sarjapur follows.
          </p>
        </div>

        <EaveCourse
          className="absolute inset-x-0 bottom-0"
          height={16}
          color="#f2eadc"
          flip
        />
      </section>

      <section className="relative overflow-hidden bg-bone-200 py-20 sm:py-24">
        <div className="paper absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            {/* The first outlet. Everything that is known about it. */}
            <article
              data-reveal
              className="relative flex flex-col overflow-hidden bg-ink-800"
            >
              <div
                aria-hidden="true"
                className="jaali jaali-brass absolute inset-0 opacity-[0.16]"
              />

              <div className="relative flex flex-1 flex-col px-8 py-10 sm:px-11 sm:py-12">
                <p className="label text-[0.5625rem] text-brass-400">
                  {first.status}
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold tracking-[-0.025em] text-bone-100">
                  <span className="kn block text-[1.2rem] font-normal text-brass-300" lang="kn">
                    {first.native}
                  </span>
                  {first.name}
                </h2>

                <RuleDiamond className="mt-7 max-w-[18rem]" />

                <address className="mt-7 max-w-[34ch] text-[1.0625rem] not-italic leading-relaxed text-bone-300">
                  {first.address}
                </address>

                <ul className="mt-8 space-y-2.5">
                  {["Basement parking", "Pure vegetarian kitchen"].map((note) => (
                    <li
                      key={note}
                      className="flex items-baseline gap-4 text-[0.9375rem] text-bone-400"
                    >
                      <Diamond className="mt-2 shrink-0 text-brass-500" size={6} />
                      {note}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-9 gap-y-4 pt-10">
                  <Link
                    href="/locations/banashankari"
                    className="label link-brass inline-flex w-fit items-center gap-2.5 pt-1 text-[0.625rem] text-bone-200"
                  >
                    About this outlet
                    <Mark name="arrowRight" size={13} className="text-brass-400" />
                  </Link>
                  <Link
                    href="/menu"
                    className="label link-brass inline-flex w-fit items-center gap-2.5 pt-1 text-[0.625rem] text-bone-200"
                  >
                    See the menu
                    <Mark name="arrowRight" size={13} className="text-brass-400" />
                  </Link>
                </div>
              </div>

              <div
                className="relative flex justify-between px-3 text-bone-100/15"
                aria-hidden="true"
              >
                <Corbel className="h-7 w-4" />
                <Corbel className="h-7 w-4" flip />
              </div>
            </article>

            {/* The next one. The same card, with nothing invented in it. */}
            <article
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
              className="relative flex flex-col overflow-hidden bg-ink-800"
            >
              <div
                aria-hidden="true"
                className="jaali jaali-brass absolute inset-0 opacity-[0.16]"
              />

              <div className="relative flex flex-1 flex-col px-8 py-10 sm:px-11 sm:py-12">
                <p className="label text-[0.5625rem] text-brass-400">{next.status}</p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold tracking-[-0.025em] text-bone-100">
                  <span className="kn block text-[1.2rem] font-normal text-brass-300" lang="kn">
                    {next.native}
                  </span>
                  {next.name}
                </h2>

                <RuleDiamond className="mt-7 max-w-[18rem]" />

                <p className="mt-7 max-w-[34ch] text-[1.0625rem] leading-relaxed text-bone-300">
                  The second kitchen. The address will be published here once the
                  site is signed.
                </p>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="label link-brass mt-auto inline-flex w-fit items-center gap-2.5 pt-10 text-[0.625rem] text-bone-200"
                >
                  Ask us about it
                  <Mark name="arrowRight" size={13} className="text-brass-400" />
                </a>
              </div>

              <div
                className="relative flex justify-between px-3 text-bone-100/15"
                aria-hidden="true"
              >
                <Corbel className="h-7 w-4" />
                <Corbel className="h-7 w-4" flip />
              </div>
            </article>
          </div>

          <p className="label mt-14 text-center text-[0.5625rem] text-granite-400">
            {OPENING.dateLabel} &nbsp;&middot;&nbsp; {CONTACT.city}
          </p>
        </div>

        <JaaliBand className="relative mt-16 opacity-30" height={26} color="#3a2318" />
      </section>
    </>
  );
}
