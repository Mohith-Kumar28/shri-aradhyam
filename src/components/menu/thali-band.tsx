import Image from "next/image";
import { type MenuSection, STATE_INK_ON_DARK } from "@/lib/site-data";
import { Thoranam } from "@/components/site/ornament";

/**
 * Layout family: full bleed two up on a dark ground, each half a photograph
 * over a ruled register of what lands on the leaf.
 *
 * The thali is the most expensive thing on the board and the clearest premium
 * signal the brand has, so it is not a card in a grid. It gets the whole width
 * and the only dark ground on the page.
 */
export function ThaliBand({
  section,
  dimmedStates,
}: {
  section: MenuSection;
  dimmedStates: (state?: string) => boolean;
}) {
  return (
    <section
      id={section.id}
      className="relative scroll-mt-32 overflow-hidden bg-ink-800"
    >
      <div aria-hidden="true" className="jaali jaali-brass absolute inset-0 opacity-[0.14]" />
      <Thoranam className="absolute inset-x-0 top-0 opacity-70" height={28} />

      <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28 lg:py-36">
        {/* Each measure is expressed in the ch of the type it holds. */}
        <div>
          <h2 className="max-w-[16ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-bone-100">
            {section.name}
          </h2>
          <p className="mt-4 max-w-[26ch] font-display text-[clamp(1.2rem,2.4vw,1.7rem)] font-normal italic leading-snug tracking-[-0.02em] text-brass-400">
            {section.tagline}
          </p>
          {section.note ? (
            <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-bone-400">
              {section.note}
            </p>
          ) : null}
        </div>

        <div className="mt-16 grid gap-14 sm:mt-20 lg:grid-cols-2 lg:gap-10">
          {section.items.map((item, i) => {
            const ink = item.state ? STATE_INK_ON_DARK[item.state] : "text-bone-400";
            const dimmed = dimmedStates(item.state);

            return (
              <article
                key={item.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                className={`transition-[opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  dimmed ? "opacity-30 saturate-50" : "opacity-100"
                }`}
              >
                {item.image ? (
                  <div className="relative aspect-4/3 overflow-hidden bg-ink-900">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      className="object-cover"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 border border-brass-500/30"
                    />
                  </div>
                ) : null}

                <div className="mt-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                    <h3 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold leading-tight tracking-[-0.025em] text-bone-100">
                      {item.name}
                    </h3>
                    {/* The price struck on a small brass plate: the one figure
                        on the page that is worth the metal. */}
                    <span className="brass-plate relative px-4 py-2">
                      <span className="data relative text-[0.9375rem] tracking-[0.06em] text-ink-900">
                        &#8377;{item.price}
                      </span>
                    </span>
                  </div>

                  {item.nameNative && item.script ? (
                    <p
                      className={`${item.script} mt-3 text-[1.35rem] leading-snug ${ink}`}
                      lang={item.script}
                    >
                      {item.nameNative}
                    </p>
                  ) : null}

                  {item.description ? (
                    <p className="mt-4 font-display text-[1.35rem] font-normal italic leading-snug tracking-[-0.02em] text-brass-300">
                      {item.description}
                    </p>
                  ) : null}

                  {item.includes ? (
                    <ul className="rule-brass mt-8 grid grid-cols-2 gap-x-8 pt-6 sm:grid-cols-3 lg:grid-cols-2">
                      {item.includes.map((entry) => (
                        <li
                          key={entry}
                          className="flex items-baseline gap-2.5 border-b border-bone-500/20 py-2.5 text-[0.9375rem] text-bone-300"
                        >
                          <span
                            aria-hidden="true"
                            className="inline-block h-1.5 w-1.5 shrink-0 translate-y-[-0.15em] rotate-45 bg-brass-500"
                          />
                          {entry}
                        </li>
                      ))}
                    </ul>
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
