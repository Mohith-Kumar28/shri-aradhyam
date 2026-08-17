import Image from "next/image";
import { CITY_LAUNCH, CURRENT_LAUNCH_ID } from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import { RuleDiamond } from "@/components/site/ornament";

/**
 * Layout family: ruled register with a detail panel per entry.
 *
 * This inherits the register form the daily rotation used to occupy, but the
 * entries are campaigns rather than weekdays. A City Launch opens one city's
 * repertoire, runs for a season and is retired, so the page speaks about the
 * format and only names a campaign as current when the owner has confirmed one.
 */
export function CityLaunch() {
  const current = CITY_LAUNCH.find((c) => c.id === CURRENT_LAUNCH_ID) ?? null;

  return (
    <section
      id="city-launch"
      className="relative overflow-hidden bg-bone-100 py-24 sm:py-32 lg:py-40"
    >
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="max-w-[22ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink-800">
              Not a product launch. A city launch.
            </h2>
            <p className="mt-6 font-display text-[clamp(1.2rem,2.4vw,1.7rem)] font-normal italic leading-snug tracking-[-0.02em] text-kumkum-600">
              Every city has a story. Every dish has a tradition.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[1.0625rem] leading-relaxed text-granite-500">
              Alongside the board, we open one city at a time: its own dishes,
              cooked the way that city cooks them, run for a season and then
              retired. It is how a fourth state reaches the counter without
              being approximated.
            </p>
            {current ? (
              <p className="label mt-6 inline-block bg-kumkum-600 px-2.5 py-1.5 text-[0.625rem] text-bone-100">
                Now on the counter: {current.city}
              </p>
            ) : (
              <p className="label mt-6 text-[0.625rem] leading-relaxed text-granite-400">
                The next campaign is announced ahead of opening.
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-8">
          {CITY_LAUNCH.map((launch, i) => {
            const accent =
              launch.accent === "palm" ? "text-palm-700" : "text-kumkum-700";
            const band =
              launch.accent === "palm" ? "bg-palm-700" : "bg-kumkum-700";

            return (
              <article
                key={launch.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                className="paper lift-panel relative flex flex-col overflow-hidden bg-bone-200"
              >
                {launch.image ? (
                  <div className="relative aspect-16/9 overflow-hidden bg-bone-300">
                    <Image
                      src={launch.image.src}
                      alt={launch.image.alt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="relative flex flex-1 flex-col px-7 pb-9 pt-8 sm:px-9">
                  <h3 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold leading-tight tracking-[-0.025em] text-ink-800">
                    <ScriptMorph
                      native={launch.cityNative}
                      latin={launch.city}
                      script={launch.script}
                      mode="hover"
                    />
                  </h3>

                  <p className={`label mt-3 text-[0.625rem] ${accent}`}>
                    {launch.state}
                  </p>

                  <p className="mt-5 font-display text-[1.35rem] font-normal italic leading-snug tracking-[-0.02em] text-granite-500">
                    {launch.character}
                  </p>

                  <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-relaxed text-granite-500">
                    {launch.note}
                  </p>

                  <ul className="rule-brass mt-8 pt-2">
                    {launch.dishes.map((dish) => (
                      <li
                        key={dish.name}
                        className="rule-bottom flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                      >
                        <span className="font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-ink-800">
                          {dish.name}
                        </span>
                        <span className="text-[0.9375rem] italic leading-snug text-granite-500">
                          {dish.line}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <span
                    aria-hidden="true"
                    className={`mt-8 block h-0.5 w-16 ${band}`}
                  />
                </div>
              </article>
            );
          })}
        </div>

        <RuleDiamond className="mx-auto mt-20 max-w-md" />
      </div>
    </section>
  );
}
