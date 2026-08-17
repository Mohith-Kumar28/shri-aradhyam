import { ROADMAP, OPENING } from "@/lib/site-data";
import { Mark } from "@/components/site/ornament";

/**
 * Layout family: two ruled columns on a dark ground, split by a hairline.
 *
 * The announced pipeline. These are intentions rather than signed sites, and
 * the section says so in its own words rather than in a footnote.
 */
export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-ink-800 py-20 sm:py-24 lg:py-32"
    >
      <div aria-hidden="true" className="jaali jaali-brass absolute inset-0 opacity-[0.14]" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-bone-100">
          {ROADMAP.headline}
        </h2>
        <p
          className="kn mt-4 max-w-[26ch] text-[1.35rem] leading-snug text-brass-400"
          lang="kn"
        >
          {ROADMAP.headlineNative}
        </p>

        <p className="mt-8 max-w-[48ch] text-[1.0625rem] leading-relaxed text-bone-400">
          {ROADMAP.line} Every name below is a city we intend to open in, not a
          site we have signed. Only {OPENING.outlet} carries a date.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label rule-brass pb-4 text-[0.625rem] text-brass-400">
              Bengaluru first &middot; next 24 months
            </p>
            <ul className="mt-1">
              {ROADMAP.bengaluru.map((place, i) => {
                const isFirst = place === OPENING.outlet;
                return (
                  <li
                    key={place}
                    data-reveal="rule"
                    style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                    className="flex items-baseline justify-between gap-4 border-b border-bone-500/20 py-4"
                  >
                    <span className="flex items-baseline gap-3">
                      <Mark
                        name="pin"
                        size={13}
                        className={isFirst ? "text-brass-400" : "text-bone-500"}
                      />
                      <span
                        className={`font-display text-[1.35rem] font-semibold tracking-[-0.02em] ${
                          isFirst ? "text-bone-100" : "text-bone-300"
                        }`}
                      >
                        {place}
                      </span>
                    </span>
                    {isFirst ? (
                      <span className="data shrink-0 bg-brass-600 px-2 py-1 text-[0.625rem] tracking-[0.16em] text-ink-900">
                        Opening {OPENING.dateLabel.replace("First week of ", "")}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="label rule-brass pb-4 text-[0.625rem] text-brass-400">
              India next &middot; beyond Bengaluru
            </p>
            <ul className="mt-1">
              {ROADMAP.india.map((place, i) => (
                <li
                  key={place}
                  data-reveal="rule"
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                  className="flex items-baseline gap-3 border-b border-bone-500/20 py-4"
                >
                  <Mark name="pin" size={13} className="text-bone-500" />
                  <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-bone-300">
                    {place}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[38ch] text-[0.9375rem] leading-relaxed text-bone-500">
              If one of these is your city and you want to run the kitchen
              there, the franchise page is the place to start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
