"use client";

import { useMemo, useState } from "react";
import { OUTLETS, type Outlet } from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import { Mark } from "@/components/site/ornament";

/**
 * Layout family: filtered register of outlets, each entry ruled and expanded.
 *
 * The filter is the page's only control, so it is drawn in the world's own
 * vocabulary: ruled tabs on a brass baseline, not a dropdown.
 */
export function LocationFinder() {
  const [state, setState] = useState<string>("All");

  const states = useMemo(() => {
    const set = new Set(OUTLETS.map((o) => o.state));
    return ["All", ...Array.from(set)];
  }, []);

  const shown = useMemo(
    () => (state === "All" ? OUTLETS : OUTLETS.filter((o) => o.state === state)),
    [state],
  );

  const open = shown.filter((o) => o.status === "open");
  const opening = shown.filter((o) => o.status === "opening");

  return (
    <div>
      {/* Filter */}
      <div
        className="flex flex-wrap items-end gap-x-8 gap-y-3 border-b pb-4"
        style={{ borderColor: "rgba(201,162,39,0.5)" }}
        role="group"
        aria-label="Filter outlets by state"
      >
        <p className="label mr-2 text-[0.625rem] text-granite-400">State</p>
        {states.map((s) => {
          const active = s === state;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setState(s)}
              aria-pressed={active}
              className={`label relative pb-1 text-[0.625rem] transition-colors duration-500 ${
                active ? "text-ink-900" : "text-granite-400 hover:text-ink-700"
              }`}
            >
              {s}
              <span
                aria-hidden="true"
                className="absolute -bottom-[0.3125rem] left-0 right-0 h-[2px] origin-left bg-kumkum-600 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
              />
            </button>
          );
        })}
        <p className="data w-full text-[0.6875rem] text-granite-400 sm:ml-auto sm:w-auto">
          {open.length} open
          {opening.length > 0 ? `, ${opening.length} on the way` : ""}
        </p>
      </div>

      {open.length === 0 && opening.length === 0 && (
        <p className="py-16 text-center text-[1.0625rem] text-granite-500">
          No outlet in this state yet. The nearest kitchen is listed under
          Karnataka.
        </p>
      )}

      {/* Open outlets */}
      <ul>
        {open.map((outlet, i) => (
          <OutletRow key={outlet.id} outlet={outlet} index={i} />
        ))}
      </ul>

      {/* On the way */}
      {opening.length > 0 && (
        <div className="mt-16">
          <p className="label rule-bottom rule-brass pb-3 text-[0.625rem] text-granite-400">
            Sites confirmed and under discussion
          </p>
          <ul className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {opening.map((outlet) => (
              <li
                key={outlet.id}
                className="rule-bottom flex items-baseline justify-between gap-4 py-5"
              >
                <span>
                  <span
                    className={`${outlet.script} font-display text-[1.35rem] text-ink-700`}
                    lang={outlet.script}
                  >
                    {outlet.nameNative}
                  </span>
                  <span className="ml-3 text-[1.0625rem] text-granite-500">
                    {outlet.name}
                  </span>
                  <span className="mt-1 block text-sm text-granite-400">
                    {outlet.addressLines[0]}
                  </span>
                </span>
                <span className="label shrink-0 text-[0.625rem] text-brass-700">
                  Soon
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function OutletRow({ outlet, index }: { outlet: Outlet; index: number }) {
  return (
    <li
      data-reveal
      style={{ ["--reveal-delay" as string]: `${index * 100}ms` }}
      className="rule-bottom grid gap-8 py-10 lg:grid-cols-12 lg:gap-8 lg:py-12"
    >
      {/* Name */}
      <div className="lg:col-span-4">
        <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.35rem)] leading-tight tracking-[-0.025em] text-ink-800">
          <ScriptMorph
            native={outlet.nameNative}
            latin={outlet.name}
            script={outlet.script}
            mode="hover"
          />
        </h2>
        {outlet.flagship && (
          <p className="label mt-3 inline-block bg-ink-800 px-3 py-1.5 text-[0.625rem] text-bone-100">
            Flagship
          </p>
        )}
        {outlet.seats && (
          <p className="mt-3 text-[0.9375rem] text-granite-500">{outlet.seats}</p>
        )}
      </div>

      {/* Address */}
      <div className="lg:col-span-4">
        <p className="label flex items-center gap-2 text-[0.625rem] text-granite-400">
          <Mark name="pin" size={13} className="text-brass-600" />
          Address
        </p>
        <address className="mt-3 text-[1.0625rem] not-italic leading-relaxed text-ink-700">
          {outlet.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.mapsQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="label link-brass mt-4 inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[0.625rem] text-ink-700"
        >
          Open in maps
          <Mark name="arrowUpRight" size={13} className="text-brass-600" />
        </a>
      </div>

      {/* Hours and phone */}
      <div className="lg:col-span-4">
        <p className="label flex items-center gap-2 text-[0.625rem] text-granite-400">
          <Mark name="clock" size={13} className="text-brass-600" />
          Hours
        </p>
        <p className="data mt-3 text-[1.0625rem] text-ink-700">{outlet.hours}</p>

        {outlet.phone && (
          <>
            <p className="label mt-7 flex items-center gap-2 text-[0.625rem] text-granite-400">
              <Mark name="phone" size={13} className="text-brass-600" />
              Telephone
            </p>
            <a
              href={`tel:${outlet.phone.replace(/\s/g, "")}`}
              className="data link-brass mt-3 inline-block text-[1.0625rem] text-ink-700"
            >
              {outlet.phone}
            </a>
          </>
        )}
      </div>
    </li>
  );
}
