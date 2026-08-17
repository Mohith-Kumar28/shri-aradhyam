import Link from "next/link";
import { BRAND, NAV } from "@/lib/site-data";
import { Kolam, LotusRoundel, Mark, RuleDiamond } from "@/components/site/ornament";

export const metadata = {
  title: "Page not found",
};

/**
 * Layout family: centred full bleed statement, borrowed from the threshold.
 *
 * A missing page is a doorway with nothing behind it, so it gets the kolam and
 * a way back in rather than a stack trace.
 */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-bone-200 py-28 sm:py-36 lg:py-44">
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-5 text-center sm:px-8">
        <LotusRoundel className="mx-auto text-ink-700" size={40} />

        <Kolam
          size={300}
          className="mx-auto mt-10 w-[min(64vw,18rem)] text-ink-700/20"
        />

        <p className="data mt-10 text-[0.625rem] tracking-[0.22em] text-kumkum-600">
          404
        </p>

        <h1 className="mx-auto mt-5 max-w-[24ch] font-display text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink-800">
          Nothing is being served at this door.
        </h1>

        <p className="mx-auto mt-7 max-w-[46ch] text-[1.0625rem] leading-relaxed text-granite-500">
          The page you asked for is not here. {BRAND.tagline}
        </p>

        <RuleDiamond className="mx-auto mt-12 max-w-xs" />

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {NAV.filter((item) => item.href !== "/").map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="label link-brass inline-flex items-center gap-2 text-[0.625rem] text-ink-700"
              >
                {item.label}
                <Mark name="arrowRight" size={13} className="text-brass-600" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            href="/"
            className="label group relative inline-flex items-center justify-center overflow-hidden bg-ink-800 px-8 py-4.5 text-[0.625rem] text-bone-100"
          >
            <span className="absolute inset-0 -translate-x-full bg-kumkum-700 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
            <span className="relative">Back to the front</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
