import type { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Shri Aradhyam is opening at Banashankari, Bengaluru, with Sarjapur to follow.",
};

/** Two entries. An address and a date is all a visitor needs. */
export default function LocationsPage() {
  const [first, next] = LOCATIONS;

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
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            {/* The first outlet, on the dark ground, with the elevation. */}
            <article
              data-reveal
              className="relative flex flex-col overflow-hidden bg-ink-800"
            >
              <div
                aria-hidden="true"
                className="jaali jaali-brass absolute inset-0 opacity-[0.16]"
              />
              {first.image ? (
                <div className="relative aspect-16/9">
                  <Image
                    src={first.image.src}
                    alt={first.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    preload
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-500/25"
                  />
                </div>
              ) : null}

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

                <Link
                  href="/menu"
                  className="label link-brass mt-9 inline-flex w-fit items-center gap-2.5 pt-1 text-[0.625rem] text-bone-200"
                >
                  See the menu
                  <Mark name="arrowRight" size={13} className="text-brass-400" />
                </Link>
              </div>
            </article>

            {/* The next one, on paper, with nothing invented. */}
            <article
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
              className="relative flex flex-col overflow-hidden bg-bone-100"
            >
              <div aria-hidden="true" className="jaali absolute inset-0 opacity-[0.22]" />
              <div className="relative flex flex-1 flex-col px-8 py-10 sm:px-10 sm:py-12">
                <p className="label text-[0.5625rem] text-kumkum-700">{next.status}</p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold tracking-[-0.025em] text-ink-800">
                  <span className="kn block text-[1.2rem] font-normal text-granite-500" lang="kn">
                    {next.native}
                  </span>
                  {next.name}
                </h2>

                <RuleDiamond className="mt-7 max-w-[18rem]" />

                <p className="mt-7 text-[1.0625rem] leading-relaxed text-granite-500">
                  The second kitchen. The address will be published here once the
                  site is signed.
                </p>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="label link-brass mt-auto inline-flex w-fit items-center gap-2.5 pt-9 text-[0.625rem] text-ink-700"
                >
                  Ask us about it
                  <Mark name="arrowRight" size={13} className="text-brass-600" />
                </a>
              </div>

              <div
                className="relative flex justify-between px-3 text-ink-800/20"
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
