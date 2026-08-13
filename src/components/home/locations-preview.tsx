import Link from "next/link";
import { OUTLETS, OUTLETS_ARE_PLACEHOLDER } from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import { Mark } from "@/components/site/ornament";

/**
 * Layout family: hairline list with a right aligned status column.
 *
 * A register again, but a shorter one, so the two reads rhyme without repeating
 * the master and detail structure.
 */
export function LocationsPreview() {
  const open = OUTLETS.filter((o) => o.status === "open");
  const opening = OUTLETS.filter((o) => o.status === "opening");

  return (
    <section id="locations" className="relative bg-bone-100 py-24 sm:py-32 lg:py-36">
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-[22ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Where the kitchen is open.
          </h2>
          <Link
            href="/locations"
            className="label link-brass inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[0.625rem] text-ink-700"
          >
            All locations and hours
            <Mark name="arrowRight" size={14} className="text-brass-600" />
          </Link>
        </div>

        <div className="mt-14">
          <div className="rule-bottom rule-brass grid grid-cols-[1fr_auto] gap-4 pb-3 sm:grid-cols-[1.6fr_1fr_auto]">
            <p className="label text-[0.625rem] text-granite-400">Outlet</p>
            <p className="label hidden text-[0.625rem] text-granite-400 sm:block">
              City
            </p>
            <p className="label text-right text-[0.625rem] text-granite-400">Hours</p>
          </div>

          <ul>
            {open.map((outlet, i) => (
              <li
                key={outlet.id}
                data-reveal="rule"
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="rule-bottom grid grid-cols-[1fr_auto] items-baseline gap-4 py-6 sm:grid-cols-[1.6fr_1fr_auto]"
              >
                <div className="min-w-0">
                  <p className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink-800">
                    <ScriptMorph
                      native={outlet.nameNative}
                      latin={outlet.name}
                      script={outlet.script}
                      mode="hover"
                    />
                  </p>
                  <p className="mt-1.5 text-[0.9375rem] leading-snug text-granite-500">
                    {outlet.addressLines.join(", ")}
                  </p>
                  {outlet.flagship && (
                    <p className="label mt-2.5 text-[0.625rem] text-brass-700">
                      Flagship
                    </p>
                  )}
                </div>
                <p className="hidden text-[1.0625rem] text-ink-700 sm:block">
                  {outlet.city}
                </p>
                <p className="data text-right text-[0.9375rem] text-granite-500">
                  {outlet.hours}
                </p>
              </li>
            ))}
          </ul>

          {/* Cities that are coming, stated as coming and nothing more. */}
          <div className="rule-bottom flex flex-wrap items-center gap-x-8 gap-y-4 py-7">
            <p className="label text-[0.625rem] text-granite-400">Opening next</p>
            <ul className="flex flex-wrap items-baseline gap-x-7 gap-y-3">
              {opening.map((outlet) => (
                <li key={outlet.id} className="flex items-baseline gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rotate-45 bg-brass-500"
                  />
                  <span
                    className={`${outlet.script} text-[1.0625rem] text-ink-700`}
                    lang={outlet.script}
                  >
                    {outlet.nameNative}
                  </span>
                  <span className="text-[0.9375rem] text-granite-400">
                    {outlet.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {OUTLETS_ARE_PLACEHOLDER && (
            <p className="label mt-6 inline-block border border-kumkum-600/45 px-4 py-3 text-[0.625rem] leading-relaxed text-kumkum-700">
              Sample outlet entries. Addresses, telephone numbers, hours and opening dates are all pending from the owner.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
