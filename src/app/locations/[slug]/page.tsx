import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  OUTLETS,
  OPENING,
  BRAND,
  MENU,
  HOURS_CONFIRMED,
  CONTACT,
} from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import {
  JaaliBand,
  Mark,
  LotusRoundel,
  Thoranam,
} from "@/components/site/ornament";

export const revalidate = 3600;

export function generateStaticParams() {
  return OUTLETS.map((outlet) => ({ slug: outlet.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const outlet = OUTLETS.find((o) => o.slug === slug);
  if (!outlet) return {};

  return {
    title: `${outlet.name}, ${outlet.city}`,
    description: `Shri Aradhyam ${outlet.name}, ${outlet.city}. ${
      outlet.status === "opening"
        ? `Opening ${OPENING.dateLabel.toLowerCase()}.`
        : "Now open."
    } Pure vegetarian South Indian food from four states, under one roof.`,
    alternates: { canonical: `/locations/${outlet.slug}` },
  };
}

export default async function OutletPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const outlet = OUTLETS.find((o) => o.slug === slug);
  if (!outlet) notFound();

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    outlet.mapsQuery,
  )}`;

  /**
   * Restaurant structured data. `openingDate` is how a place that has not
   * traded yet surfaces in local search at all, so it is the one field worth
   * being careful about. Nothing unconfirmed is emitted: no hours, no
   * telephone, no rating, no price range we have not settled.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `${BRAND.name} ${outlet.name}`,
    description: `Pure vegetarian South Indian restaurant bringing Karnataka, Tamil Nadu, Andhra Pradesh and Kerala under one roof.`,
    servesCuisine: ["South Indian", "Vegetarian"],
    address: {
      "@type": "PostalAddress",
      addressLocality: outlet.city,
      addressRegion: outlet.state,
      addressCountry: "IN",
    },
    ...(outlet.status === "opening" ? { openingDate: OPENING.date } : {}),
    ...(HOURS_CONFIRMED ? { openingHours: outlet.hours } : {}),
    hasMenu: "/menu",
    slogan: BRAND.tagline,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Layout family: full bleed elevation with the outlet stated over it. */}
      <section className="relative isolate overflow-hidden bg-ink-800">
        {outlet.images?.[1] ? (
          <Image
            src={outlet.images[1].src}
            alt={outlet.images[1].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_48%]"
          />
        ) : null}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(31,17,9,0.93)_0%,rgba(31,17,9,0.72)_46%,rgba(31,17,9,0.42)_100%)]"
        />
        <JaaliBand className="absolute inset-x-0 bottom-0 opacity-25" height={40} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-40">
          <LotusRoundel className="text-brass-500" size={40} />

          <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-bone-100">
            <ScriptMorph
              native={outlet.nameNative}
              latin={outlet.name}
              script={outlet.script}
              mode="settle"
              delay={1200}
            />
          </h1>

          <p className="mt-6 font-display text-[clamp(1.4rem,3vw,2.15rem)] font-normal leading-[1.24] tracking-[-0.02em] text-brass-300">
            {outlet.city}, {outlet.state}
          </p>

          <div className="rule-top mt-12 flex flex-col gap-4 border-bone-500/30 pt-8 sm:flex-row sm:items-center sm:gap-7">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="label group relative inline-flex items-center justify-center gap-2.5 overflow-hidden bg-brass-500 px-8 py-4.5 text-[0.625rem] text-ink-900"
            >
              <span className="absolute inset-0 -translate-x-full bg-brass-300 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
              <span className="relative flex items-center gap-2.5">
                Get directions
                <Mark name="direction" size={14} />
              </span>
            </a>
            <Link
              href="/menu"
              className="label link-brass inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap py-4.5 text-[0.625rem] text-bone-200"
            >
              Read the menu
              <Mark name="arrowRight" size={14} className="text-brass-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* The facts, ruled as a register. Nothing unconfirmed is stated as fact. */}
      <section className="relative overflow-hidden bg-bone-200 py-20 sm:py-24 lg:py-28">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <dl className="grid gap-x-10 lg:grid-cols-4">
            <div
              data-reveal="rule"
              className="rule-top py-7"
              style={{ ["--reveal-delay" as string]: "0ms" }}
            >
              <dt className="label text-[0.625rem] text-granite-400">
                {outlet.status === "opening" ? "Opening" : "Status"}
              </dt>
              <dd className="mt-3 font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-palm-700">
                {outlet.status === "opening" ? OPENING.dateLabel : "Now open"}
              </dd>
            </div>

            <div
              data-reveal="rule"
              className="rule-top py-7"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <dt className="label text-[0.625rem] text-granite-400">Address</dt>
              <dd className="mt-3 text-[1.0625rem] leading-relaxed text-ink-800">
                {outlet.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>

            <div
              data-reveal="rule"
              className="rule-top py-7"
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              <dt className="label text-[0.625rem] text-granite-400">Hours</dt>
              <dd className="mt-3">
                {HOURS_CONFIRMED ? (
                  <span className="data text-[0.9375rem] text-ink-800">
                    {outlet.hours}
                  </span>
                ) : (
                  <span className="flex flex-col gap-2">
                    <span
                      aria-hidden="true"
                      className="block h-3.5 w-24 border-b border-bone-400"
                    />
                    <span className="label text-[0.625rem] text-kumkum-700">
                      To be confirmed
                    </span>
                  </span>
                )}
              </dd>
            </div>

            <div
              data-reveal="rule"
              className="rule-top py-7"
              style={{ ["--reveal-delay" as string]: "210ms" }}
            >
              <dt className="label text-[0.625rem] text-granite-400">Telephone</dt>
              <dd className="mt-3 flex flex-col gap-2">
                <span
                  aria-hidden="true"
                  className="block h-3.5 w-28 border-b border-bone-400"
                />
                <span className="label text-[0.625rem] text-kumkum-700">
                  To be confirmed
                </span>
              </dd>
            </div>
          </dl>

          {outlet.notes ? (
            <ul className="rule-top mt-4 flex flex-wrap gap-x-8 gap-y-3 pt-7">
              {outlet.notes.map((note) => (
                <li
                  key={note}
                  className="label flex items-baseline gap-2.5 text-[0.625rem] text-brass-700"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rotate-45 bg-brass-500"
                  />
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* What the sign lists, which is the fastest statement of the format. */}
      <section className="relative overflow-hidden bg-ink-800 py-20 sm:py-24 lg:py-28">
        <Thoranam className="absolute inset-x-0 top-0 opacity-70" height={26} />
        <div aria-hidden="true" className="jaali jaali-brass absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="max-w-[18ch] font-display text-[clamp(1.8rem,3.8vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-bone-100">
                What the sign outside lists.
              </h2>
              <p className="mt-6 max-w-[40ch] text-[1.0625rem] leading-relaxed text-bone-400">
                {BRAND.tagline}
              </p>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7">
              {BRAND.signage.map((line, i) => (
                <li
                  key={line}
                  data-reveal="rule"
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                  className="flex items-baseline justify-between gap-6 border-b border-bone-500/25 py-5"
                >
                  <span className="font-display text-[1.5rem] font-semibold leading-snug tracking-[-0.02em] text-bone-100">
                    {line}
                  </span>
                  <Mark name="arrowRight" size={14} className="text-brass-400" />
                </li>
              ))}
            </ul>
          </div>

          <p className="label mt-12 text-[0.625rem] text-bone-500">
            {MENU.length} sections on the board
          </p>
        </div>
      </section>

      {/* The elevations, day and night. */}
      {outlet.images && outlet.images.length > 0 ? (
        <section className="relative overflow-hidden bg-bone-100 py-20 sm:py-24 lg:py-28">
          <div className="paper absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
            <ul className="grid gap-7 lg:grid-cols-2">
              {outlet.images.map((image, i) => (
                <li
                  key={image.src}
                  data-reveal="wipe"
                  style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                >
                  <div className="lift-panel relative aspect-16/10 overflow-hidden bg-bone-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="label mt-4 text-[0.625rem] text-granite-500">
                    {i === 0 ? "By day" : "By night"}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-12 max-w-[52ch] text-[0.9375rem] leading-relaxed text-granite-500">
              Architectural renders of the outlet as it is being built. Photographs
              follow once the doors open.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/locations"
                className="label link-brass inline-flex items-center gap-2.5 text-[0.625rem] text-ink-700"
              >
                All locations and the roadmap
                <Mark name="arrowRight" size={14} className="text-brass-600" />
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="label link-brass inline-flex items-center gap-2.5 text-[0.625rem] text-ink-700"
              >
                Ask us anything
                <Mark name="arrowUpRight" size={14} className="text-brass-600" />
              </a>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
