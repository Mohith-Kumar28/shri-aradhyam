import Link from "next/link";
import { REGIONS } from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import { Mark } from "@/components/site/ornament";

/**
 * Layout family: staggered mosaic in five weights.
 *
 * The places do not deserve five identical cards. Each gets its own ground, its
 * own size and its own place on the grid, so the section reads as a territory
 * rather than a product list. Every name carries the script it is written in at
 * home, and hovering one turns it back into that script.
 */
const PLACEMENT = [
  {
    grid: "lg:col-span-7 lg:row-start-1",
    ground: "bg-ink-800",
    ink: "text-bone-100",
    body: "text-bone-400",
    accent: "text-brass-400",
    lattice: "jaali-brass opacity-[0.16]",
    pad: "px-8 py-12 sm:px-11 sm:py-14",
    scale: "text-[clamp(2.3rem,4.8vw,3.4rem)]",
  },
  {
    grid: "lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-16",
    ground: "bg-bone-100",
    ink: "text-ink-800",
    body: "text-granite-500",
    accent: "text-kumkum-600",
    lattice: "opacity-[0.22]",
    pad: "px-8 py-11 sm:px-10 sm:py-13",
    scale: "text-[clamp(1.9rem,3.6vw,2.5rem)]",
  },
  {
    grid: "lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:-mt-2",
    ground: "granite",
    ink: "text-bone-100",
    body: "text-bone-300",
    accent: "text-brass-300",
    lattice: "jaali-brass opacity-[0.18]",
    pad: "px-8 py-11 sm:px-10 sm:py-13",
    scale: "text-[clamp(1.9rem,3.6vw,2.5rem)]",
  },
  {
    grid: "lg:col-span-4 lg:col-start-5 lg:row-start-2 lg:mt-10",
    ground: "bg-bone-300",
    ink: "text-ink-800",
    body: "text-granite-500",
    accent: "text-kumkum-700",
    lattice: "opacity-[0.26]",
    pad: "px-8 py-11 sm:px-10 sm:py-13",
    scale: "text-[clamp(1.9rem,3.6vw,2.5rem)]",
  },
  {
    grid: "lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:mt-2",
    ground: "bg-palm-700",
    ink: "text-bone-100",
    body: "text-bone-300",
    accent: "text-brass-300",
    lattice: "jaali-brass opacity-[0.2]",
    pad: "px-8 py-11 sm:px-10 sm:py-13",
    scale: "text-[clamp(1.9rem,3.6vw,2.5rem)]",
  },
];

export function Traditions() {
  return (
    <section
      id="traditions"
      className="relative overflow-hidden bg-bone-200 py-24 sm:py-28 lg:py-32"
    >
      <div className="paper absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label text-[0.5625rem] text-brass-700">
              Countless traditions
            </p>
            <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              The same grain, cooked differently in every place it belongs to.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            <p className="text-[1.0625rem] leading-relaxed text-granite-500">
              Rice, lentil, coconut, chilli, tamarind. The list barely changes
              across the south. What changes is the hand, the city and the
              recipe it has been kept in.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-12 lg:gap-7">
          {REGIONS.map((region, i) => {
            const p = PLACEMENT[i];
            const onDark = p.ink === "text-bone-100";

            return (
              <article
                key={region.name}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className={`relative overflow-hidden ${p.grid} ${p.ground}`}
              >
                <div
                  aria-hidden="true"
                  className={`jaali absolute inset-0 ${p.lattice}`}
                />
                <div className={`relative ${p.pad}`}>
                  <h3
                    className={`font-display font-semibold leading-[1.08] tracking-[-0.025em] ${p.scale} ${p.ink}`}
                  >
                    <ScriptMorph
                      native={region.native}
                      latin={region.name}
                      script={region.script}
                      mode="hover"
                    />
                  </h3>

                  <p className={`label mt-4 text-[0.5625rem] ${p.accent}`}>
                    {region.places.join(" · ")}
                  </p>

                  <p
                    className={`mt-5 max-w-[36ch] text-[1.0625rem] leading-relaxed ${p.body}`}
                  >
                    {region.line}
                  </p>

                  <span
                    aria-hidden="true"
                    className={`mt-7 block h-px w-14 ${
                      onDark ? "bg-brass-500/60" : "bg-ink-700/25"
                    }`}
                  />

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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
