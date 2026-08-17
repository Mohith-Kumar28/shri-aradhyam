import Link from "next/link";
import { FRANCHISE_SUPPORT } from "@/lib/site-data";
import { EaveCourse, LotusRoundel, Mark } from "@/components/site/ornament";

/**
 * Layout family: split band on the dark ground, with a marked support column.
 *
 * The second audience arrives here. The tone changes deliberately: fewer
 * adjectives, more structure, and the action is unmistakable.
 */
export function FranchiseInvite() {
  return (
    <section id="franchise" className="relative overflow-hidden bg-ink-900">
      <EaveCourse className="absolute inset-x-0 top-0" height={16} color="#faf5ec" flip />

      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-y-0 left-0 w-[22vw] opacity-[0.18]"
      />

      <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <LotusRoundel className="text-brass-500" size={40} />

            <h2 className="mt-8 max-w-[22ch] font-display text-[clamp(2.1rem,4.8vw,3.7rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-bone-100">
              Open a Shri Aradhyam in your city.
            </h2>

            <p className="mt-7 max-w-[48ch] text-[1.0625rem] leading-relaxed text-bone-400">
              We are opening unit franchises, one outlet at a time, to owners who
              will stand at the counter themselves. You get the drawings, the
              kitchen, the training and the supply chain. The recipe cards come
              with it, and they are audited like the brand they are.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="/franchise#enquiry"
                className="label group relative inline-flex items-center justify-center overflow-hidden bg-brass-500 px-8 py-4.5 text-[0.625rem] text-ink-900"
              >
                <span className="absolute inset-0 -translate-x-full bg-brass-300 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                <span className="relative">Start a franchise enquiry</span>
              </Link>
              <Link
                href="/franchise"
                className="label link-brass inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap py-4.5 text-[0.625rem] text-bone-300"
              >
                Read the full offer
                <Mark name="arrowRight" size={14} className="text-brass-400" />
              </Link>
            </div>
          </div>

          {/* What comes with it, as a ruled list rather than six boxes. */}
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="label rule-bottom border-bone-500/30 pb-3 text-[0.625rem] text-brass-500">
              What comes with the unit
            </p>
            <ul>
              {FRANCHISE_SUPPORT.map((item, i) => (
                <li
                  key={item.title}
                  data-reveal="rule"
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                  className="rule-bottom flex items-baseline gap-5 border-bone-500/22 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-brass-500"
                  />
                  <span className="text-[1.0625rem] leading-snug text-bone-200">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
