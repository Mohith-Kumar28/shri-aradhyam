import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OUTLETS_ARE_PLACEHOLDER, ASSURANCES, OPENING } from "@/lib/site-data";
import { LocationFinder } from "@/components/locations/location-finder";
import { Roadmap } from "@/components/locations/roadmap";
import { JaaliBand, RuleDiamond, AssuranceIcon } from "@/components/site/ornament";

export const metadata: Metadata = {
  title: "Locations | Shri Aradhyam",
  description:
    "Where to find Shri Aradhyam. The first kitchen opens at Kathriguppe, Bengaluru, with the rest of the city to follow.",
};

export const revalidate = 3600;

export default function LocationsPage() {
  return (
    <>
      {/* Page head: the dining floor, held behind a granite band. */}
      <section className="relative isolate overflow-hidden bg-ink-800">
        <Image
          src="/brand/dining-floor.webp"
          alt="The Shri Aradhyam dining floor with granite tables, live counters and a lit deity niche"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[45%_55%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(31,17,9,0.93)_0%,rgba(31,17,9,0.7)_48%,rgba(31,17,9,0.4)_100%)]"
        />
        <JaaliBand className="absolute inset-x-0 bottom-0 opacity-25" height={40} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-44">
          <h1 className="max-w-[24ch] font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-bone-100">
            The first kitchen.
          </h1>
          <p className="mt-7 max-w-[48ch] text-[1.0625rem] leading-relaxed text-bone-400">
            Shri Aradhyam opens at{" "}
            <span className="kn text-brass-400" lang="kn">
              {OPENING.outletNative}
            </span>
            <span className="text-brass-400">
              {" "}
              {OPENING.outlet}, {OPENING.city}
            </span>
            , in the {OPENING.dateLabel.toLowerCase()}. Every outlet after it is
            built to the same drawings and cooks from the same recipe cards.
          </p>
        </div>
      </section>

      {OUTLETS_ARE_PLACEHOLDER && (
        <div className="border-b border-kumkum-600/35 bg-kumkum-600/8">
          <div className="mx-auto max-w-[88rem] px-5 py-4 sm:px-8">
            <p className="label text-[0.625rem] leading-relaxed text-kumkum-700">
              Every outlet detail on this page is sample data: addresses,
              telephone numbers, hours, seating and opening dates are all
              pending from the owner.
            </p>
          </div>
        </div>
      )}

      {/* The finder */}
      <section className="relative bg-bone-200 py-20 sm:py-24 lg:py-28">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <LocationFinder />
        </div>
      </section>

      <Roadmap />

      {/* What is true in every outlet. */}
      <section className="relative bg-bone-100 py-20 sm:py-24 lg:py-28">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <RuleDiamond className="mx-auto max-w-md" />

          <h2 className="mx-auto mt-12 max-w-[24ch] text-center font-display text-[clamp(1.8rem,3.8vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            Seven promises, and they travel with every kitchen we open.
          </h2>

          <ul className="mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {ASSURANCES.map((item, i) => (
              <li
                key={item.en}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                className="rule-bottom flex items-center gap-4 py-5"
              >
                <AssuranceIcon
                  name={item.icon}
                  size={26}
                  className="shrink-0 text-brass-600"
                />
                <span className="leading-tight">
                  <span className="kn block text-[1.0625rem] text-ink-800" lang="kn">
                    {item.kn}
                  </span>
                  <span className="label mt-1.5 block text-[0.625rem] text-granite-500">
                    {item.en}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <Link
              href="/franchise#enquiry"
              className="label group relative inline-flex items-center justify-center overflow-hidden border border-ink-700 px-8 py-4.5 text-[0.625rem] text-ink-800 transition-colors duration-700 hover:text-bone-100"
            >
              <span className="absolute inset-0 -translate-y-full bg-ink-800 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative">Bring one to your city</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
