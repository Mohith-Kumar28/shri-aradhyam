import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BRAND,
  STATES,
  ASSURANCES,
  TEAM,
  CHANNELS,
  OPENING,
} from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import {
  AssuranceIcon,
  Corbel,
  Gopuram,
  HangingDiya,
  JaaliBand,
  Kolam,
  LotusRoundel,
  Mark,
  RuleDiamond,
} from "@/components/site/ornament";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Aradhyam means the one who is worshipped. A pure vegetarian South Indian kitchen bringing four states under one roof, and the people building it.",
};

export const revalidate = 3600;

const PACKAGING = [
  { src: "/dishes/coffee-filter.webp", alt: "A Shri Aradhyam filter coffee cup beside a brass davara set", name: "Filter coffee cup" },
  { src: "/dishes/pack-bag.webp", alt: "A kraft carry bag printed with the gopuram and a lotus band", name: "Kraft carry bag" },
  { src: "/dishes/pack-mealbox.webp", alt: "A moulded meal box holding rice, sambar, curd, palya and appalam on a banana leaf", name: "Meal box" },
  { src: "/dishes/pack-dosabox.webp", alt: "A long kraft dosa box holding a rolled dosa and chutney", name: "Dosa box" },
];

export default function StoryPage() {
  return (
    <>
      {/* Layout family: centred full bleed statement on a dark ground. */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div aria-hidden="true" className="jaali jaali-brass absolute inset-0 opacity-[0.15]" />
        <HangingDiya
          height={112}
          className="absolute left-[10%] top-0 hidden text-brass-400/80 sm:block"
        />
        <HangingDiya
          height={112}
          className="absolute right-[10%] top-0 hidden text-brass-400/80 sm:block"
        />
        <JaaliBand className="absolute inset-x-0 bottom-0 opacity-25" height={40} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-24 pt-28 text-center sm:px-8 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-44">
          <LotusRoundel className="mx-auto text-brass-500" size={44} />

          <h1 className="mx-auto mt-10 max-w-[16ch] font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-bone-100">
            <ScriptMorph
              native={BRAND.nameKannada}
              latin={BRAND.name}
              script="kn"
              mode="settle"
              delay={1200}
            />
          </h1>

          <p className="mx-auto mt-8 max-w-[42ch] font-display text-[clamp(1.4rem,3vw,2.15rem)] font-normal leading-[1.28] tracking-[-0.02em] text-brass-300">
            {BRAND.meaning}
          </p>

          <p className="label mt-10 text-[0.625rem] text-bone-500">
            <span className="kn normal-case tracking-normal text-bone-400" lang="kn">
              {BRAND.devotionKannada}
            </span>
            <span aria-hidden="true" className="mx-2.5 text-brass-600">
              &middot;
            </span>
            {BRAND.devotion}
          </p>
        </div>
      </section>

      {/* Layout family: editorial asymmetric split, the wall in its own words. */}
      <section className="relative overflow-hidden bg-bone-100 py-24 sm:py-32 lg:py-36">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <figure
              className="relative aspect-4/5 overflow-hidden lg:col-span-5"
              data-reveal="wipe"
            >
              <Image
                src="/brand/interior-wall.webp"
                alt="The dining room wall carrying the Shri Aradhyam lockup and the kitchen's promises in Kannada and English"
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
              <Corbel className="absolute -bottom-1 -left-1 h-16 w-10 text-bone-100" />
            </figure>

            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="max-w-[22ch] font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink-800">
                Food is an offering before it is a meal.
              </h2>

              <blockquote className="rule-brass mt-10 pt-8">
                <p className="font-display text-[clamp(1.35rem,2.4vw,1.75rem)] font-normal italic leading-[1.38] tracking-[-0.02em] text-ink-800">
                  &ldquo;Every plate at Shri Aradhyam reflects our belief that
                  food is an offering, not just a meal. Prepared fresh each day
                  with premium ingredients and authentic recipes, our dishes are
                  free from preservatives, artificial colours, and artificial
                  flavours. We proudly serve pure vegetarian South Indian food
                  that is rooted in tradition and made with devotion.&rdquo;
                </p>
                <footer className="label mt-6 text-[0.625rem] text-granite-400">
                  From the wall of the restaurant
                </footer>
              </blockquote>

              <ul className="mt-12 grid gap-x-8 sm:grid-cols-2">
                {ASSURANCES.map((item, i) => (
                  <li
                    key={item.en}
                    data-reveal="rule"
                    style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                    className="rule-bottom flex items-center gap-4 py-4"
                  >
                    <AssuranceIcon
                      name={item.icon}
                      size={24}
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
            </div>
          </div>
        </div>
      </section>

      {/* Layout family: hairline list of the four states, each in its own script. */}
      <section className="relative overflow-hidden bg-bone-200 py-24 sm:py-28 lg:py-32">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <Gopuram
          size={300}
          className="pointer-events-none absolute -left-16 bottom-0 hidden text-ink-700/[0.06] lg:block"
        />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 className="max-w-[20ch] font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink-800 lg:col-span-6">
              {BRAND.tagline}
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-granite-500 lg:col-span-4 lg:col-start-9 lg:pt-3">
              One kitchen, four repertoires, and no house style flattening them
              into each other. The town a dish comes from stays printed beside
              it.
            </p>
          </div>

          <ul className="mt-16">
            {STATES.map((state, i) => (
              <li
                key={state.name}
                data-reveal="rule"
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="rule-top grid gap-x-8 gap-y-3 py-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-3">
                  <p
                    className={`${state.script} text-[1.65rem] leading-snug text-ink-800`}
                    lang={state.script}
                  >
                    {state.native}
                  </p>
                  <p className="label mt-2 text-[0.625rem] text-brass-700">
                    {state.name}
                  </p>
                </div>
                <p className="text-[1.0625rem] leading-relaxed text-granite-500 lg:col-span-6">
                  {state.line}
                </p>
                <p className="label text-[0.625rem] leading-relaxed text-granite-400 lg:col-span-3">
                  {state.cities.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
          <div className="rule-top" aria-hidden="true" />
        </div>
      </section>

      {/* Layout family: three ruled portrait panels. The first real people here. */}
      <section id="team" className="relative overflow-hidden bg-bone-100 py-24 sm:py-28 lg:py-32">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="max-w-[24ch] font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink-800">
            Founder led, and built by operators.
          </h2>

          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {TEAM.map((person, i) => (
              <article
                key={person.name}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="paper lift-panel relative overflow-hidden bg-bone-200"
              >
                <div aria-hidden="true" className="jaali jaali-dense h-5 opacity-45" />
                <div className="px-7 pb-8 pt-7">
                  <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-ink-800">
                    {person.name}
                  </h3>
                  <p className="label mt-2.5 text-[0.625rem] text-brass-700">
                    {person.role}
                  </p>
                  <ul className="mt-6">
                    {person.lines.map((line) => (
                      <li
                        key={line}
                        className="rule-top flex items-baseline gap-3 py-4 text-[0.9375rem] leading-relaxed text-granite-500"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-brass-500"
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Layout family: horizontal packaging rail on a dark ground. */}
      <section className="relative overflow-hidden bg-ink-800 py-24 sm:py-28 lg:py-32">
        <div aria-hidden="true" className="jaali jaali-brass absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-bone-100 lg:col-span-6">
              A plate should survive the journey to your table.
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-bone-400 lg:col-span-5 lg:col-start-8 lg:pt-3">
              Whether the table is ours or yours. The box is moulded so a thali
              arrives as a thali and not as one dish, and the gopuram is printed
              on it because it is printed on the building.
            </p>
          </div>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGING.map((pack, i) => (
              <li
                key={pack.name}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-ink-900">
                  <Image
                    src={pack.src}
                    alt={pack.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-500/25"
                  />
                </div>
                <p className="label mt-4 text-[0.625rem] text-bone-400">
                  {pack.name}
                </p>
              </li>
            ))}
          </ul>

          <ul className="mt-20 grid gap-x-10 lg:grid-cols-3">
            {CHANNELS.map((channel, i) => (
              <li
                key={channel.title}
                data-reveal="rule"
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="rule-brass py-7"
              >
                <h3 className="font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-bone-100">
                  {channel.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-bone-400">
                  {channel.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Layout family: the quiet passage. The kolam draws itself on arrival. */}
      <section className="relative overflow-hidden bg-bone-300 py-24 sm:py-28 lg:py-32" data-reveal>
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 text-center sm:px-8">
          <Kolam
            size={320}
            className="mx-auto w-[min(72vw,22rem)] text-ink-700/22"
          />
          <RuleDiamond className="mx-auto mt-10 max-w-xs" />
          <p className="mx-auto mt-10 max-w-[26ch] font-display text-[clamp(1.8rem,4vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink-800">
            {BRAND.creed}
          </p>
          <p className="mx-auto mt-8 max-w-[46ch] text-[1.0625rem] leading-relaxed text-granite-500">
            The first kitchen opens at {OPENING.outlet}, {OPENING.city}, in the{" "}
            {OPENING.dateLabel.toLowerCase()}.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href="/menu"
              className="label group relative inline-flex items-center justify-center overflow-hidden bg-ink-800 px-8 py-4.5 text-[0.625rem] text-bone-100"
            >
              <span className="absolute inset-0 -translate-x-full bg-kumkum-700 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
              <span className="relative">Read the menu</span>
            </Link>
            <Link
              href="/locations"
              className="label link-brass inline-flex items-center gap-2.5 text-[0.625rem] text-ink-700"
            >
              Find the kitchen
              <Mark name="arrowRight" size={14} className="text-brass-600" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
