"use client";

import { useState } from "react";
import { ROTATION_BY_WEEK, type CityDay } from "@/lib/site-data";
import { ScriptMorph } from "@/components/site/script-morph";
import { RuleDiamond } from "@/components/site/ornament";

/**
 * Layout family: ruled register with a master and detail reading.
 *
 * This is the panchangam page. Seven ruled entries, one per day, today's entry
 * marked in kumkum red the way an almanac marks the day that matters. Choosing
 * an entry opens what that kitchen actually cooks.
 */
export function Register({ todayIndex }: { todayIndex: number }) {
  // The marked day comes from the server, computed in Indian Standard Time and
  // refreshed by this route's revalidate window, so the client never has to
  // second guess it and the hero and the register can never disagree.
  const [selected, setSelected] = useState<number>(todayIndex);
  const clientToday = todayIndex;

  const active: CityDay =
    ROTATION_BY_WEEK.find((d) => d.dayIndex === selected) ?? ROTATION_BY_WEEK[0];

  return (
    <section id="register" className="paper relative bg-bone-200 py-24 sm:py-32 lg:py-40">
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        {/* Masthead. The Kannada sits in the margin, beside the heading. */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="hidden lg:col-span-2 lg:block">
            <p
              className="kn text-[1.6rem] leading-tight text-brass-700"
              lang="kn"
            >
              ವಾರದ
              <br />
              ಪಟ್ಟಿ
            </p>
            <p className="label mt-3 text-[0.625rem] text-granite-400">
              The week&rsquo;s list
            </p>
          </div>
          <div className="lg:col-span-10">
            <h2 className="max-w-[24ch] font-display text-[clamp(2.1rem,5vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Seven days, seven cities, one kitchen.
            </h2>
            <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-granite-500">
              Nothing repeats across the week. The grinding, the podi, the tempering
              and the sweet all change with the city, and the city changes at dawn.
            </p>
          </div>
        </div>

        <RuleDiamond className="mt-14" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* The register */}
          <div>
            {/* Column heading row, as ruled on a printed register. */}
            <div className="rule-bottom rule-brass grid grid-cols-[3.2rem_1fr_auto] items-end gap-4 pb-3 sm:grid-cols-[4.5rem_1fr_auto]">
              <p className="label text-[0.625rem] text-granite-400">Day</p>
              <p className="label text-[0.625rem] text-granite-400">City and state</p>
              <p className="label text-[0.625rem] text-granite-400">The plate</p>
            </div>

            <ul>
              {ROTATION_BY_WEEK.map((entry, i) => {
                const isToday = entry.dayIndex === clientToday;
                const isSelected = entry.dayIndex === selected;
                return (
                  <li key={entry.day}>
                    <button
                      type="button"
                      onClick={() => setSelected(entry.dayIndex)}
                      aria-pressed={isSelected}
                      data-reveal="rule"
                      style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                      className="rule-bottom group grid w-full grid-cols-[3.2rem_1fr_auto] items-center gap-4 py-5 text-left transition-colors duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-bone-300/55 sm:grid-cols-[4.5rem_1fr_auto] sm:py-6"
                    >
                      {/* Day gutter, with the day marker for today. */}
                      <span className="flex items-center gap-2">
                        {isToday ? (
                          <svg
                            viewBox="0 0 10 10"
                            width="7"
                            height="7"
                            className="shrink-0 text-kumkum-600"
                            aria-hidden="true"
                          >
                            <path d="M5 0 10 5 5 10 0 5Z" fill="currentColor" />
                          </svg>
                        ) : (
                          <span className="w-[7px] shrink-0" aria-hidden="true" />
                        )}
                        <span
                          className={`data text-[0.6875rem] uppercase tracking-[0.16em] ${
                            isToday ? "text-kumkum-600" : "text-granite-400"
                          }`}
                        >
                          {entry.dayShort}
                        </span>
                      </span>

                      {/* City */}
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span
                            className={`font-display text-[clamp(1.35rem,2.6vw,1.85rem)] leading-tight tracking-[-0.02em] transition-colors duration-500 ${
                              isSelected ? "text-ink-900" : "text-ink-700 group-hover:text-ink-900"
                            }`}
                          >
                            <ScriptMorph
                              native={entry.cityNative}
                              latin={entry.city}
                              script={entry.script}
                              mode="hover"
                            />
                          </span>
                          <span className="label text-[0.625rem] text-granite-400">
                            {entry.state}
                          </span>
                          {isToday && (
                            <span className="label bg-kumkum-600 px-2 py-1 text-[0.625rem] text-bone-100">
                              Today
                            </span>
                          )}
                        </span>
                        <span className="mt-1.5 block max-w-[42ch] text-[0.9375rem] leading-snug text-granite-500">
                          {entry.character}
                        </span>
                      </span>

                      {/* Anchor dish */}
                      <span className="hidden max-w-[17ch] text-right text-sm leading-snug text-granite-500 md:block">
                        {entry.anchor}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <p className="label mt-6 text-[0.625rem] text-granite-400">
              Choose a day to read its plate
            </p>
          </div>

          {/* The detail: what that kitchen cooks. */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="paper lift-panel relative overflow-hidden bg-bone-100">
              <div
                aria-hidden="true"
                className="jaali jaali-dense absolute inset-x-0 top-0 h-6 opacity-45"
              />
              <div className="relative px-7 pb-9 pt-12 sm:px-10 sm:pb-11 sm:pt-14">
                <div className="rule-bottom rule-brass flex items-baseline justify-between gap-4 pb-3">
                  <p className="label text-[0.625rem] text-brass-700">{active.day}</p>
                  <p className="label text-[0.625rem] text-granite-400">
                    {active.scriptName}
                  </p>
                </div>

                <p
                  className={`${active.script} mt-6 font-display text-[2.6rem] leading-[1.1] text-ink-800`}
                  lang={active.script}
                >
                  {active.cityNative}
                </p>
                <p className="font-display text-[1.35rem] tracking-[-0.02em] text-kumkum-600">
                  {active.city}
                  <span className="ml-2.5 align-middle text-[0.9375rem] font-normal text-granite-400">
                    {active.state}
                  </span>
                </p>

                {/* Real photography of the day's plate, when the kitchen
                    supplies it. Nothing invented stands in for it. */}
                {active.image && (
                  <div className="relative mt-7 aspect-3/2 overflow-hidden bg-bone-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={active.image.src}
                      alt={active.image.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                )}

                <p className="mt-6 text-[1.0625rem] italic leading-relaxed text-granite-500">
                  {active.note}
                </p>

                <div className="rule-top rule-brass mt-8 pt-7">
                  <p className="label text-[0.625rem] text-granite-400">
                    On the counter
                  </p>
                  <ul className="mt-5 space-y-0">
                    {active.dishes.map((dish) => (
                      <li
                        key={dish}
                        className="rule-bottom flex items-baseline gap-4 py-3.5 last:border-b-0"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-brass-500"
                        />
                        <span className="text-[1.0625rem] leading-snug text-ink-700">
                          {dish}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-granite-400">
              Dish lists are the kitchen&rsquo;s standing repertoire for each city and
              shift with the season and the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
