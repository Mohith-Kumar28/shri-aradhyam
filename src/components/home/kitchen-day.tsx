import { DAY_PARTS } from "@/lib/site-data";

/**
 * Layout family: a vertical schedule with a time gutter.
 *
 * The rotation is what changes; this is what does not. The kitchen runs four
 * shifts and the page reads them the way a service sheet reads them, down a
 * clock in the left margin.
 */
export function KitchenDay() {
  return (
    <section id="kitchen" className="relative bg-bone-200 py-24 sm:py-32 lg:py-40">
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="max-w-[26ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              The whole South Indian day, from the first coffee to the last dosa.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[1.0625rem] leading-relaxed text-granite-500">
              Breakfast, a full midday plate, an afternoon fry counter and dosa
              until close. The city of the day sits inside this timetable, it
              does not replace it.
            </p>
            <p className="label mt-6 text-[0.625rem] leading-relaxed text-granite-400">
              Shift windows below are the intended pattern and are being
              confirmed
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          {DAY_PARTS.map((part, i) => (
            <article
              key={part.name}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className="rule-top group grid gap-6 py-10 sm:py-12 lg:grid-cols-12 lg:gap-8"
            >
              {/* Time gutter */}
              <div className="lg:col-span-3">
                <p className="data text-[1.0625rem] tracking-[0.06em] text-kumkum-600">
                  {part.window}
                </p>
                <p className="label mt-2 text-[0.625rem] text-granite-400">
                  Shift {String(i + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Name and line */}
              <div className="lg:col-span-4">
                <h3
                  className={`${part.script} font-display text-[1.65rem] leading-tight text-ink-800`}
                  lang="kn"
                >
                  {part.native}
                </h3>
                <p className="mt-1 font-display text-[1.35rem] tracking-[-0.02em] text-ink-700">
                  {part.name}
                </p>
                <p className="mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-granite-500">
                  {part.line}
                </p>
              </div>

              {/* What is on */}
              <ul className="lg:col-span-5">
                {part.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-bone-400/55 py-3 last:border-b-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-brass-500"
                    />
                    <span className="text-[1.0625rem] leading-snug text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          {/* Closing rule, so the schedule is ruled top and bottom. */}
          <div className="rule-top" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
