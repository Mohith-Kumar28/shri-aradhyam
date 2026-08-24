import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND, REGIONS, REGION_NOTES, STORE } from "@/lib/site-data";
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
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "The Regions",
  path: "/traditions",
  description:
    "Five South Indian food traditions and what separates them: Bengaluru's benne and bisi bele bath, Udupi's temple restraint, Thanjavur's sesame oil and pepper, Andhra's Guntur chilli and gongura, and Kerala's two pressings of coconut milk.",
  shareTitle: "Five regions. One South India. | Shri Aradhyam",
  keywords: [
    "South Indian regional cuisine explained",
    "difference between Udupi and Andhra food",
    "Bengaluru benne dosa",
    "Thanjavur ghee pongal",
    "Andhra pesarattu gongura",
    "Kerala appam puttu",
    "regional South Indian restaurant Bengaluru",
  ],
});

/** REGIONS carries the script and the short line; REGION_NOTES carries the
 *  long copy. They are joined here rather than merged in the data file, so the
 *  home page keeps reading the short record it has always read. */
const TRADITIONS = REGIONS.map((region) => ({
  ...region,
  ...REGION_NOTES.find((note) => note.region === region.name)!,
}));

/**
 * The long-form regional page. It exists for the reader who wants to know why
 * a dosa in Bengaluru and a dosa in Chennai are not the same object — and,
 * plainly, so that a search for "difference between Udupi and Andhra food"
 * lands somewhere that answers it.
 */
export default function TraditionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "The Regions", path: "/traditions" }])}
      />

      <section
        className="hero-dark relative isolate overflow-hidden bg-ink-900"
        style={{ marginTop: "calc(var(--header-h, 6.9rem) * -1)", zIndex: 0 }}
      >
        <Image
          src={STORE.liveCounters.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          preload
          className="-z-20 object-cover object-[50%_46%] opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 6%, rgba(201,162,39,0.14) 0%, rgba(31,17,9,0) 72%)," +
              "linear-gradient(180deg, rgba(24,13,7,0.9) 0%, rgba(24,13,7,0.62) 44%, rgba(24,13,7,0.94) 100%)",
          }}
        />

        <div style={{ height: "var(--header-h, 6.9rem)" }} aria-hidden="true" />
        <Thoranam className="relative opacity-75" height={28} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14">
          <p className="label text-[0.5625rem] text-brass-500">
            {BRAND.tagline}
          </p>
          <h1 className="display-caps mt-4 max-w-[18ch] text-[clamp(2rem,4.6vw,3.4rem)] font-semibold text-bone-100">
            Five regions. One South India.
          </h1>
          <RuleDiamond className="mt-7 max-w-[22rem]" />
          <p className="mt-7 max-w-[64ch] text-[1.125rem] leading-relaxed text-bone-300">
            South India is not one cuisine. It is a coastline, a delta, a
            plateau and a hill range, each of which settled on a different fat,
            a different souring agent and a different idea of how much heat a
            plate should carry. Those decisions are what the words Udupi,
            Thanjavur, Guntur and Kerala actually mean on a menu.
          </p>
          <p className="mt-5 max-w-[64ch] text-[1.0625rem] leading-relaxed text-bone-400">
            Shri Aradhyam cooks each of them as itself. Nothing here is
            averaged into a single house style, because the differences are the
            point.
          </p>
        </div>

        <EaveCourse
          className="absolute inset-x-0 bottom-0"
          height={16}
          color="#f2eadc"
          flip
        />
      </section>

      {/* One region per band, alternating ground so the five read as five. */}
      <section className="relative overflow-hidden bg-bone-200">
        <div className="paper absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          {TRADITIONS.map((tradition, index) => (
            <article
              key={tradition.name}
              data-reveal
              className={`grid gap-10 border-t border-ink-700/12 py-16 lg:grid-cols-12 lg:gap-12 sm:py-20 ${
                index === 0 ? "border-t-0" : ""
              }`}
            >
              <header className="lg:col-span-4">
                <p className="label text-[0.5625rem] text-brass-700">
                  {`Region ${index + 1} of ${TRADITIONS.length}`}
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold tracking-[-0.025em] text-ink-900">
                  <span
                    className={`${tradition.script} block text-[1.15rem] font-normal text-brass-700`}
                    lang={tradition.script}
                  >
                    {tradition.native}
                  </span>
                  {tradition.name}
                </h2>
                <p className="mt-5 max-w-[34ch] text-[1.0625rem] italic leading-relaxed text-ink-600">
                  {tradition.heading}
                </p>

                <ul className="mt-8 space-y-4">
                  {tradition.markers.map((marker) => (
                    <li key={marker.name} className="flex items-baseline gap-4">
                      <Diamond className="mt-2 shrink-0 text-brass-600" size={6} />
                      <span>
                        <span className="font-display text-[1.0625rem] text-ink-800">
                          {marker.name}
                        </span>
                        <span className="mt-1 block text-[0.9375rem] leading-relaxed text-ink-600">
                          {marker.note}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </header>

              <div className="lg:col-span-7 lg:col-start-6">
                {tradition.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 max-w-[68ch] text-[1.0625rem] leading-relaxed text-ink-700 first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}

                <p className="mt-8 text-[0.9375rem] leading-relaxed text-ink-600">
                  <span className="label mr-3 text-[0.5625rem] text-brass-700">
                    On the board
                  </span>
                  {tradition.places.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Where the reading ends and the eating begins. */}
      <section className="relative isolate overflow-hidden bg-bone-300 pt-20 sm:pt-24">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_46%_at_50%_-4%,rgba(201,162,39,0.16)_0%,rgba(201,162,39,0)_72%)]"
        />

        <div className="relative mx-auto max-w-[46rem] px-6 text-center">
          <p className="mx-auto max-w-[26ch] text-balance font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.3] tracking-[-0.022em] text-ink-800">
            Every recipe has a place it belongs to.
          </p>
          <RuleDiamond className="mx-auto mt-8 w-[min(16rem,60%)]" />
          <p className="mx-auto mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-700">
            All five are on one board, under one roof, at Banashankari.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <Link
              href="/menu"
              className="label link-brass inline-flex w-fit items-center gap-2.5 pt-1 text-[0.625rem] text-ink-800"
            >
              See the menu
              <Mark name="arrowRight" size={13} className="text-brass-600" />
            </Link>
            <Link
              href="/locations/banashankari"
              className="label link-brass inline-flex w-fit items-center gap-2.5 pt-1 text-[0.625rem] text-ink-800"
            >
              Find the Banashankari outlet
              <Mark name="arrowRight" size={13} className="text-brass-600" />
            </Link>
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
