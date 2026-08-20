import Link from "next/link";
import { BRAND, NAV } from "@/lib/site-data";
import { Kolam, LotusRoundel, Mark, RuleDiamond } from "@/components/site/ornament";

export const metadata = {
  title: "Page not found",
};

/** A missing page is a doorway with nothing behind it, so it gets the kolam. */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-bone-200 py-24 sm:py-32">
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[44rem] px-5 text-center sm:px-8">
        <LotusRoundel className="mx-auto text-ink-700" size={38} />

        <Kolam
          size={300}
          className="mx-auto mt-10 w-[min(60vw,16rem)] text-ink-700/25"
        />

        <p className="label mt-10 text-[0.5625rem] text-kumkum-600">404</p>

        <h1 className="display-caps mt-5 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold text-ink-900">
          Nothing is served at this door.
        </h1>

        <p className="mt-7 text-[1.0625rem] leading-relaxed text-granite-500">
          The page you asked for is not here. {BRAND.tagline}
        </p>

        <RuleDiamond className="mx-auto mt-11 w-[min(18rem,64%)]" />

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {NAV.map((item) => (
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
      </div>
    </section>
  );
}
