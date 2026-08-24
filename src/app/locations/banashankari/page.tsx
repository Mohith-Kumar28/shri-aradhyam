import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ASSURANCES,
  BANASHANKARI,
  BRAND,
  CONTACT,
  LOCATIONS,
  OPENING,
  STORE,
} from "@/lib/site-data";
import {
  Diamond,
  EaveCourse,
  JaaliBand,
  Kolam,
  Mark,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, outletSchema, pageMeta } from "@/lib/seo";

const OUTLET = LOCATIONS[0];

export const metadata: Metadata = pageMeta({
  title: "Banashankari",
  path: "/locations/banashankari",
  description:
    "Shri Aradhyam Banashankari: 221 Outer Ring Road, opposite KEB, Kathreguppe, Banashankari 3rd Stage, Bengaluru 560085. Pure vegetarian South Indian food, basement parking, opening the last week of September.",
  shareTitle: "Shri Aradhyam, Banashankari — Outer Ring Road, Kathreguppe",
  keywords: [
    "South Indian restaurant Banashankari",
    "pure veg restaurant Kathreguppe",
    "restaurant Outer Ring Road Banashankari 3rd Stage",
    "vegetarian restaurant near KEB Kathreguppe",
    "best dosa Banashankari",
    "meals Banashankari Bengaluru",
    "restaurant 560085",
  ],
});

/** A search on a phone ends in a map, so the address is handed to one. */
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BRAND.name}, ${OUTLET.address}`,
)}`;

/**
 * The local landing page.
 *
 * `/locations` compares the two outlets; this page is about one of them, for
 * the visitor who searched a neighbourhood rather than a brand. It repeats the
 * address in full — in the copy, in an `<address>` element, and in the outlet's
 * structured data — because that repetition is the whole job of the page.
 */
export default function BanashankariPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Locations", path: "/locations" },
          { name: "Banashankari", path: "/locations/banashankari" },
        ])}
      />
      <JsonLd data={outletSchema(OUTLET)} />

      <section
        className="hero-dark relative isolate overflow-hidden bg-ink-900"
        style={{ marginTop: "calc(var(--header-h, 6.9rem) * -1)", zIndex: 0 }}
      >
        <Image
          src={STORE.entrance.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          preload
          className="-z-20 object-cover object-[50%_48%] opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 6%, rgba(201,162,39,0.14) 0%, rgba(31,17,9,0) 72%)," +
              "linear-gradient(180deg, rgba(24,13,7,0.88) 0%, rgba(24,13,7,0.48) 46%, rgba(24,13,7,0.92) 100%)",
          }}
        />

        <div style={{ height: "var(--header-h, 6.9rem)" }} aria-hidden="true" />
        <Thoranam className="relative opacity-75" height={28} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label text-[0.5625rem] text-brass-500">
                {OUTLET.status}
              </p>
              <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.028em] text-bone-100">
                <span className="kn mb-1 block text-[1.3rem] font-normal leading-normal text-brass-300" lang="kn">
                  {OUTLET.native}
                </span>
                {BANASHANKARI.heading}
              </h1>
              <RuleDiamond className="mt-7 max-w-[22rem]" />
              <p className="mt-7 max-w-[62ch] text-[1.125rem] leading-relaxed text-bone-300">
                {BANASHANKARI.lead}
              </p>
            </div>

            {/* The card a visitor screenshots. */}
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-10">
              <div className="border border-bone-500/25 bg-ink-900/40 px-7 py-7">
                <p className="label text-[0.5625rem] text-brass-400">
                  The address
                </p>
                <address className="mt-5 text-[1.0625rem] not-italic leading-relaxed text-bone-200">
                  {OUTLET.address}
                </address>

                <span aria-hidden="true" className="mt-6 block h-px w-14 bg-brass-500/60" />

                <ul className="mt-6 space-y-2.5">
                  {[
                    OPENING.dateLabel,
                    "Basement parking",
                    "One hundred percent pure vegetarian",
                  ].map((note) => (
                    <li
                      key={note}
                      className="flex items-baseline gap-4 text-[0.9375rem] text-bone-400"
                    >
                      <Diamond className="mt-2 shrink-0 text-brass-500" size={6} />
                      {note}
                    </li>
                  ))}
                </ul>

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label link-brass mt-8 inline-flex w-fit items-center gap-2.5 pt-1 text-[0.625rem] text-bone-200"
                >
                  Open in maps
                  <Mark name="arrowRight" size={13} className="text-brass-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <EaveCourse
          className="absolute inset-x-0 bottom-0"
          height={16}
          color="#f2eadc"
          flip
        />
      </section>

      {/* What is in the room, in the order you walk it. */}
      <section className="relative overflow-hidden bg-bone-200 py-20 sm:py-24">
        <div className="paper absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="display-caps text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-ink-900">
            Inside the outlet
          </h2>
          <RuleDiamond className="mt-6 max-w-[20rem]" />

          <div className="mt-12 grid gap-x-12 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
            {BANASHANKARI.inside.map((entry, index) => (
              <article key={entry.title} data-reveal>
                <p className="label text-[0.5625rem] text-brass-700 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-[1.3rem] leading-snug tracking-[-0.02em] text-ink-900">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[1rem] leading-relaxed text-ink-700">
                  {entry.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[STORE.entrance, STORE.liveCounters, STORE.diningHall].map(
              (render, index) => (
                <figure
                  key={render.src}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
                  className="relative aspect-4/3 overflow-hidden"
                >
                  <Image
                    src={render.src}
                    alt={render.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-500/30"
                  />
                </figure>
              ),
            )}
          </div>
        </div>
      </section>

      {/* The wall, restated so it is readable as text and not only as a render. */}
      <section className="relative overflow-hidden bg-ink-800 py-20 sm:py-24">
        <JaaliBand className="absolute inset-x-0 top-0 opacity-25" height={40} />
        <div
          aria-hidden="true"
          className="jaali jaali-brass absolute inset-y-0 right-0 w-[14vw] opacity-[0.16]"
        />

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="display-caps text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-bone-100">
                The promise on the wall
              </h2>
              <RuleDiamond className="mt-6 max-w-[16rem]" />
              <p className="mt-7 max-w-[46ch] text-[1.0625rem] leading-relaxed text-bone-300">
                {BANASHANKARI.promise}
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {ASSURANCES.map((assurance) => (
                <li key={assurance.en} className="flex items-baseline gap-4">
                  <Diamond className="mt-2 shrink-0 text-brass-500" size={6} />
                  <span>
                    <span className="block text-[1.0625rem] leading-snug text-bone-200">
                      {assurance.en}
                    </span>
                    <span className="kn mt-1 block text-[0.9375rem] text-bone-400" lang="kn">
                      {assurance.kn}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Onward. */}
      <section className="relative isolate overflow-hidden bg-bone-300 pt-20 sm:pt-24">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_46%_at_50%_-4%,rgba(201,162,39,0.16)_0%,rgba(201,162,39,0)_72%)]"
        />

        <div className="relative mx-auto max-w-[46rem] px-6 text-center">
          <p className="mx-auto max-w-[26ch] text-balance font-display text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.3] tracking-[-0.022em] text-ink-800">
            {BRAND.creed}
          </p>
          <RuleDiamond className="mx-auto mt-8 w-[min(16rem,60%)]" />
          <p className="mx-auto mt-8 max-w-[48ch] text-[1.0625rem] leading-relaxed text-ink-700">
            For anything else, write to{" "}
            <a href={`mailto:${CONTACT.email}`} className="link-brass text-ink-900">
              {CONTACT.email}
            </a>
            .
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { href: "/menu", label: "The menu board" },
              { href: "/gallery", label: "See the room" },
              { href: "/faq", label: "Questions" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label link-brass inline-flex w-fit items-center gap-2.5 pt-1 text-[0.625rem] text-ink-800"
              >
                {link.label}
                <Mark name="arrowRight" size={13} className="text-brass-600" />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mt-12 flex justify-center sm:mt-14">
          <Kolam className="w-[min(20rem,62vw)] text-ink-700/50" size={320} />
        </div>

        <JaaliBand className="relative opacity-30" height={26} color="#3a2318" />
      </section>
    </>
  );
}
