import Image from "next/image";
import Link from "next/link";
import { BRAND, HOME, OPENING } from "@/lib/site-data";
import {
  Diamond,
  EaveCourse,
  HangingDiya,
  LotusRoundel,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";

/**
 * The threshold.
 *
 * The restaurant paints its argument on the plaster inside the door. So the
 * page opens on that panel — but hung where the wall actually hangs: in a lit
 * hall, under a garland, with the lamps either side and the night elevation
 * behind it. The panel is a leaf of plaster laid on the building, not a
 * photograph of a wall reproduced flat.
 *
 * The drawings are the wall's own, keyed off the photograph of it, and they
 * bleed off the leaf rather than sitting inside a frame. Nothing moves.
 */
export function Hero() {
  return (
    <section
      className="hero-dark relative isolate overflow-hidden bg-ink-900"
      style={{ marginTop: "calc(var(--header-h, 6.9rem) * -1)", zIndex: 0 }}
    >
      {/* The building, behind everything, held well back. */}
      <Image
        src="/brand/kathriguppe-night.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        preload
        className="-z-20 object-cover object-[50%_34%] opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 8%, rgba(201,162,39,0.16) 0%, rgba(31,17,9,0) 70%)," +
            "linear-gradient(180deg, rgba(24,13,7,0.92) 0%, rgba(24,13,7,0.8) 34%, rgba(24,13,7,0.94) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-y-0 left-0 -z-10 w-[14vw] opacity-[0.18]"
      />
      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-y-0 right-0 -z-10 w-[14vw] opacity-[0.18]"
      />

      <div style={{ height: "var(--header-h, 6.9rem)" }} aria-hidden="true" />

      {/* The garland across the awning, and a lamp hanging either side of it. */}
      <div className="relative">
        <Thoranam className="absolute inset-x-0 top-0 opacity-80" height={30} />
        <HangingDiya
          className="absolute left-[6vw] top-0 hidden text-brass-500/85 lg:block"
          height={104}
        />
        <HangingDiya
          className="absolute right-[6vw] top-0 hidden text-brass-500/85 lg:block"
          height={104}
        />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-5 pb-28 pt-20 sm:px-8 sm:pb-32 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* The leaf of plaster. */}
          <div
            data-reveal
            className="paper lift-leaf relative overflow-hidden bg-bone-100 lg:col-span-8"
          >
            <div
              aria-hidden="true"
              className="jaali absolute inset-y-0 left-0 w-7 opacity-30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-brass-600/25"
            />

            {/* The wall's drawings, bleeding off the leaf at both ends. */}
            <Image
              src="/art/gopuram.webp"
              alt=""
              aria-hidden="true"
              width={308}
              height={632}
              loading="eager"
              className="drawn pointer-events-none absolute -left-10 bottom-0 hidden w-[8rem] opacity-55 sm:block lg:w-[9.5rem]"
            />
            <Image
              src="/art/tharavad.webp"
              alt=""
              aria-hidden="true"
              width={820}
              height={896}
              loading="eager"
              className="drawn pointer-events-none absolute -right-12 -bottom-4 w-[12rem] opacity-50 sm:w-[15rem] lg:w-[19rem]"
            />

            <div className="relative px-7 py-12 sm:px-14 sm:py-16 lg:py-20">
              <div className="flex items-center gap-4">
                <LotusRoundel className="shrink-0 text-ink-700" size={34} />
                <span className="h-px flex-1 bg-brass-600/40" />
                <p className="label shrink-0 text-[0.5625rem] text-brass-700">
                  {HOME.eyebrow}
                </p>
              </div>

              <h1 className="mt-9">
                <span className="display-caps block text-[1.55rem] font-medium text-ink-700 sm:text-[2.1rem]">
                  {HOME.heading[0]}
                </span>
                <span className="display-caps mt-1.5 block text-[1.95rem] font-semibold text-ink-900 sm:text-[2.85rem]">
                  {HOME.heading[1]}
                </span>
              </h1>

              <RuleDiamond className="mt-9 max-w-[22rem]" />

              {/* The four readings, each against one of the wall's drawings. */}
              <ul className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {HOME.lines.map((line, i) => (
                  <li
                    key={line.text}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${120 + i * 90}ms` }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex w-7 shrink-0 justify-center">
                      {line.icon ? (
                        <Image
                          src={line.icon.src}
                          alt=""
                          aria-hidden="true"
                          width={line.icon.width}
                          height={line.icon.height}
                          loading="eager"
                          className="drawn h-7 w-auto"
                        />
                      ) : (
                        <Diamond className="text-brass-600" size={8} />
                      )}
                    </span>
                    <span className="text-[1.0625rem] leading-snug text-ink-700">
                      {line.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 max-w-[46ch] text-[1.0625rem] leading-relaxed text-granite-500">
                At <span className="font-medium text-ink-800">{BRAND.name}</span>,{" "}
                {HOME.body}
              </p>

              <p className="display-caps mt-11 text-[1.05rem] text-ink-700 sm:text-[1.3rem]">
                {HOME.close[0]}
                <span className="mt-1 block font-semibold text-ink-900">
                  {HOME.close[1]}
                </span>
              </p>
            </div>

            {/* The paneled dado the lettering stands above. */}
            <div aria-hidden="true" className="relative">
              <div
                className="h-9 border-t border-bone-400/70 bg-bone-200/70 sm:h-12"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(160,132,90,0.22) 0 1px, transparent 1px 9rem)",
                }}
              />
              <div className="h-2 bg-ink-900/85" />
            </div>
          </div>

          {/* The announcement, pressed into brass, and the name read four ways. */}
          <div className="lg:col-span-4 lg:pt-6">
            <div
              data-reveal="seal"
              className="brass-plate relative px-7 py-8 text-ink-900"
            >
              <p className="label text-[0.5625rem] text-ink-900/70">Opening</p>
              <p className="struck mt-3 font-display text-[1.6rem] font-semibold leading-tight">
                <span className="kn block text-[1.15rem] font-normal" lang="kn">
                  {OPENING.outletNative}
                </span>
                {OPENING.outlet}, {OPENING.city}
              </p>
              <span aria-hidden="true" className="mt-5 block h-px w-14 bg-ink-900/35" />
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-900/85">
                {OPENING.dateLabel}
              </p>
            </div>

            <div className="mt-8 border border-bone-500/25 px-7 py-7">
              <p className="label text-[0.5625rem] text-brass-400">
                The name, read four ways
              </p>
              <ul className="mt-5 space-y-3">
                {BRAND.nameInScripts.map((reading) => (
                  <li
                    key={reading.script}
                    className={`${reading.script} text-[1.15rem] text-bone-200`}
                    lang={reading.script}
                  >
                    {reading.text}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-bone-400">
                <span className="kn" lang="kn">
                  {BRAND.devotionKannada}
                </span>
                <span className="mx-2 text-granite-400">/</span>
                {BRAND.devotion}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/menu" className="label link-brass text-[0.625rem] text-bone-200">
                See the menu
              </Link>
              <Link
                href="/locations"
                className="label link-brass text-[0.625rem] text-bone-200"
              >
                Where to find us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* The section closes on the awning's own edge. */}
      <EaveCourse
        className="absolute inset-x-0 bottom-0"
        height={16}
        color="#f2eadc"
        flip
      />
    </section>
  );
}
