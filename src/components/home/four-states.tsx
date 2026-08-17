import Link from "next/link";
import { STATES, MENU_ITEMS } from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import { Mark } from "@/components/site/ornament";

/**
 * Layout family: staggered mosaic in four weights.
 *
 * Four states do not deserve four identical cards. Each gets its own ground,
 * its own size and its own place on the grid, so the page reads as a territory
 * rather than a product list.
 */

const PLACEMENT = [
  {
    grid: "lg:col-span-7 lg:row-start-1",
    ground: "bg-ink-800",
    ink: "text-bone-100",
    body: "text-bone-400",
    accent: "text-brass-400",
    lattice: "jaali-brass opacity-[0.16]",
    pad: "px-8 py-12 sm:px-11 sm:py-16",
    scale: "text-[clamp(2.6rem,5.4vw,4rem)]",
  },
  {
    grid: "lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:mt-20",
    ground: "bg-bone-100",
    ink: "text-ink-800",
    body: "text-granite-500",
    accent: "text-kumkum-600",
    lattice: "opacity-[0.22]",
    pad: "px-8 py-11 sm:px-10 sm:py-14",
    scale: "text-[clamp(2.3rem,4.4vw,3.2rem)]",
  },
  {
    grid: "lg:col-span-5 lg:col-start-2 lg:row-start-2 lg:-mt-6",
    ground: "granite",
    ink: "text-bone-100",
    body: "text-bone-300",
    accent: "text-brass-300",
    lattice: "jaali-brass opacity-[0.18]",
    pad: "px-8 py-11 sm:px-10 sm:py-14",
    scale: "text-[clamp(2.3rem,4.4vw,3rem)]",
  },
  {
    grid: "lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:mt-10",
    ground: "bg-bone-300",
    ink: "text-ink-800",
    body: "text-granite-500",
    accent: "text-kumkum-700",
    lattice: "opacity-[0.26]",
    pad: "px-8 py-11 sm:px-10 sm:py-14",
    scale: "text-[clamp(2.3rem,4.4vw,3rem)]",
  },
];

/** Two dishes the board actually carries from that state, named. */
function dishesFrom(state: string): string[] {
  const seen = new Set<string>();
  for (const item of MENU_ITEMS) {
    if (item.state !== state) continue;
    if (item.description || item.signature) seen.add(item.name);
    if (seen.size === 2) break;
  }
  return [...seen];
}

export function FourStates() {
  return (
    <section id="states" className="relative overflow-hidden bg-bone-200 py-24 sm:py-32 lg:py-40">
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="max-w-[22ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              Four states that cook the same grain into different food.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[1.0625rem] leading-relaxed text-granite-500">
              Rice, lentil, coconut, chilli, tamarind. The list barely changes
              across the south. What changes is the hand.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-12 lg:gap-7">
          {STATES.map((state, i) => {
            const p = PLACEMENT[i];
            const dishes = dishesFrom(state.name);
            const onDark = p.ink === "text-bone-100";

            return (
              <article
                key={state.name}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className={`relative overflow-hidden ${p.grid} ${p.ground}`}
              >
                <div
                  aria-hidden="true"
                  className={`jaali absolute inset-0 ${p.lattice}`}
                />
                <div className={`relative ${p.pad}`}>
                  <h3
                    className={`font-display font-semibold leading-[1.06] tracking-[-0.025em] ${p.scale} ${p.ink}`}
                  >
                    <ScriptMorph
                      native={state.native}
                      latin={state.name}
                      script={state.script}
                      mode="hover"
                    />
                  </h3>

                  <p className={`label mt-4 text-[0.625rem] ${p.accent}`}>
                    {state.cities.join(" · ")}
                  </p>

                  <p className={`mt-5 max-w-[34ch] text-[1.0625rem] leading-relaxed ${p.body}`}>
                    {state.line}
                  </p>

                  <span
                    aria-hidden="true"
                    className={`mt-7 block h-px w-14 ${
                      onDark ? "bg-brass-500/60" : "bg-ink-700/25"
                    }`}
                  />

                  {dishes.length > 0 ? (
                    <p className={`mt-5 text-[0.9375rem] leading-relaxed ${p.body}`}>
                      On the board:{" "}
                      <span className={onDark ? "text-bone-100" : "text-ink-800"}>
                        {dishes.join(", ")}
                      </span>
                      .
                    </p>
                  ) : (
                    /* Kerala is named on the signage and has no dish on the board
                       yet. Stated plainly rather than filled with an invention. */
                    <p className={`mt-5 max-w-[32ch] text-[0.9375rem] leading-relaxed ${p.body}`}>
                      Not yet on the board. Kerala arrives with a City Launch.
                    </p>
                  )}

                  {dishes.length > 0 ? (
                    <Link
                      href="/menu"
                      className={`label link-brass mt-6 inline-flex items-center gap-2.5 text-[0.625rem] ${
                        onDark ? "text-bone-300" : "text-ink-700"
                      }`}
                    >
                      See the menu
                      <Mark
                        name="arrowRight"
                        size={13}
                        className={onDark ? "text-brass-400" : "text-brass-600"}
                      />
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
