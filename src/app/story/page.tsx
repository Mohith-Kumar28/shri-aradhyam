import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, STORE, STORY } from "@/lib/site-data";
import {
  EaveCourse,
  JaaliBand,
  Kolam,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why Shri Aradhyam exists: one roof for the diversity of South Indian vegetarian food, staying true to where every dish comes from.",
};

/**
 * Two passages. The storefront you are standing outside, carrying the whole
 * argument in prose so it is read in the first screen rather than scrolled
 * through as a register — and the line the house closes on, drawn over a kolam.
 */
export default function StoryPage() {
  return (
    <>
      {/* Standing outside the building. */}
      <section
        className="hero-dark relative isolate overflow-hidden bg-ink-900"
        style={{ marginTop: "calc(var(--header-h, 6.9rem) * -1)", zIndex: 0 }}
      >
        <Image
          src={STORE.promiseWall.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          preload
          className="-z-20 object-cover object-[50%_42%] opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 6%, rgba(201,162,39,0.14) 0%, rgba(31,17,9,0) 72%)," +
              "linear-gradient(180deg, rgba(24,13,7,0.9) 0%, rgba(24,13,7,0.6) 42%, rgba(24,13,7,0.9) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="jaali jaali-brass absolute inset-y-0 right-0 -z-10 w-[16vw] opacity-[0.18]"
        />

        <div style={{ height: "var(--header-h, 6.9rem)" }} aria-hidden="true" />
        <Thoranam className="relative opacity-75" height={28} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-14 pt-8 sm:px-8 sm:pb-16 sm:pt-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label text-[0.5625rem] text-brass-500">
                {BRAND.tagline}
              </p>
              <h1 className="display-caps mt-4 text-[clamp(1.9rem,4.2vw,3rem)] font-semibold text-bone-100">
                {STORY.heading}
              </h1>
              <RuleDiamond className="mt-6 max-w-[20rem]" />
              <p className="mt-6 max-w-[62ch] text-[1.125rem] leading-relaxed text-bone-300">
                {STORY.lead}
              </p>
              {STORY.body.map((line) => (
                <p
                  key={line}
                  className="mt-5 max-w-[66ch] text-[1.0625rem] leading-relaxed text-bone-400"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
              <div className="border border-bone-500/25 px-7 py-7">
                <p className="label text-[0.5625rem] text-brass-400">On the wall</p>
                <p className="kn mt-5 font-display text-[1.35rem] leading-snug text-bone-100" lang="kn">
                  {BRAND.creedKannada}
                </p>
                <span aria-hidden="true" className="mt-5 block h-px w-14 bg-brass-500/60" />
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-bone-300">
                  {BRAND.creed}
                </p>
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

      {/* The close, standing on a drawn doorstep. */}
      <section className="relative isolate overflow-hidden bg-bone-300 pt-24 sm:pt-28">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_46%_at_50%_-4%,rgba(201,162,39,0.16)_0%,rgba(201,162,39,0)_72%)]"
        />

        <div className="relative mx-auto max-w-[46rem] px-6 text-center">
          {STORY.closing.map((line) => (
            <p
              key={line}
              className="mx-auto max-w-[26ch] text-balance font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.3] tracking-[-0.022em] text-ink-800"
            >
              {line}
            </p>
          ))}

          <RuleDiamond className="mx-auto mt-9 w-[min(16rem,60%)]" />

          <p className="mt-9 font-display text-[clamp(1.35rem,2.8vw,1.9rem)] text-ink-900">
            {STORY.close}
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,rgba(58,35,24,0)_0%,rgba(58,35,24,0.055)_100%)]"
          />
          <div className="relative flex justify-center">
            <Kolam className="w-[min(20rem,62vw)] text-ink-700/50" size={320} />
          </div>
        </div>

        <JaaliBand className="relative opacity-30" height={26} color="#3a2318" />
      </section>
    </>
  );
}
