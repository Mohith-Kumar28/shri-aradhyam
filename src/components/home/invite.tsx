import Link from "next/link";
import { BRAND, LOCATIONS, OPENING } from "@/lib/site-data";
import { EaveCourse, LotusRoundel, Mark } from "@/components/site/ornament";

/**
 * Layout family: split band on the dark ground, with a marked register beside
 * it. The page closes the way the building opens: the announcement, the street,
 * and the list of what is served inside.
 */
export function Invite() {
  const [first, next] = LOCATIONS;

  return (
    <section id="invite" className="relative overflow-hidden bg-ink-900">
      <EaveCourse
        className="absolute inset-x-0 top-0"
        height={16}
        color="#faf5ec"
        flip
      />
      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-y-0 left-0 w-[20vw] opacity-[0.18]"
      />

      <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <LotusRoundel className="text-brass-500" size={40} />

            <p className="label mt-8 text-[0.5625rem] text-brass-500">
              {OPENING.dateLabel}
            </p>

            <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-bone-100">
              Opening at {first.name},{" "}
              <span className="text-brass-400">{OPENING.city}</span>.
            </h2>

            <address className="mt-8 max-w-[36ch] text-[1.0625rem] not-italic leading-relaxed text-bone-400">
              {first.address}
            </address>

            <p className="mt-6 text-[0.9375rem] text-bone-500">
              {next.name} &middot; {next.status.toLowerCase()}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="/menu"
                className="label group relative inline-flex items-center justify-center overflow-hidden bg-brass-500 px-8 py-4.5 text-[0.625rem] text-ink-900"
              >
                <span className="absolute inset-0 -translate-x-full bg-brass-300 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                <span className="relative">See the menu</span>
              </Link>
              <Link
                href="/partner"
                className="label link-brass inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap py-4.5 text-[0.625rem] text-bone-300"
              >
                Partner with us
                <Mark name="arrowRight" size={14} className="text-brass-400" />
              </Link>
            </div>
          </div>

          {/* What the board outside names, as a ruled register. */}
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="label rule-bottom border-bone-500/30 pb-3 text-[0.625rem] text-brass-500">
              Served inside
            </p>
            <ul>
              {BRAND.signage.map((item, i) => (
                <li
                  key={item}
                  data-reveal="rule"
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                  className="rule-bottom flex items-baseline gap-5 border-bone-500/22 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-brass-500"
                  />
                  <span className="text-[1.0625rem] leading-snug text-bone-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[0.9375rem] leading-relaxed text-bone-500">
              <span className="kn" lang="kn">
                {BRAND.devotionKannada}
              </span>
              <span className="mx-2 text-granite-400">/</span>
              {BRAND.devotion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
