"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  MENU,
  STATES,
  STATE_INK,
  PRICES_CONFIRMED,
  type StateName,
} from "@/lib/site-data";
import { DishCard } from "./dish-card";
import { ThaliBand } from "./thali-band";
import { PriceRow } from "./price-row";
import { Gopuram, Mark, RuleDiamond } from "@/components/site/ornament";

type Filter = "All" | StateName;

/** Sections whose items are worth a photograph get cards; the rest stay ruled. */
const CARD_SECTIONS = new Set(["rice-bowls"]);

export function MenuBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState(MENU[0].id);

  const isDimmed = useMemo(
    () => (state?: string) => filter !== "All" && state !== filter,
    [filter],
  );

  const matches = useMemo(
    () =>
      filter === "All"
        ? Number.POSITIVE_INFINITY
        : MENU.flatMap((s) => s.items).filter((i) => i.state === filter).length,
    [filter],
  );

  /* Scroll spy. The rail marks the section the reader is actually in, rather
     than the last one they clicked, so the two can never disagree. */
  useEffect(() => {
    const sections = MENU.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* The rail. Sticky under the signage band, ruled on a brass baseline. */}
      <div
        className="sticky top-[4.4rem] z-40 border-b border-bone-400 bg-bone-100/97 backdrop-blur-[2px] lg:top-[4.9rem]"
      >
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <nav
            className="-mx-1 flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Menu sections"
          >
            {MENU.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={active === section.id ? "true" : undefined}
                className="label relative shrink-0 px-3 py-2 text-[0.625rem] text-granite-500 transition-colors duration-500 hover:text-ink-800 aria-[current]:text-ink-800"
              >
                {section.name}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-0 h-px origin-left bg-brass-500 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `scaleX(${active === section.id ? 1 : 0})` }}
                />
              </a>
            ))}
          </nav>

          {/* The regional axis. This is the tagline made navigable. */}
          <div
            role="group"
            aria-label="Filter the menu by state"
            className="rule-top -mx-1 flex items-center gap-1 overflow-x-auto border-bone-400/70 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {(["All", ...STATES.map((s) => s.name)] as Filter[]).map((name) => {
              const on = filter === name;
              const state = STATES.find((s) => s.name === name);
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(name)}
                  className={`label shrink-0 border px-3.5 py-2 text-[0.625rem] transition-colors duration-500 ${
                    on
                      ? "border-ink-700 bg-ink-800 text-bone-100"
                      : `border-bone-400 bg-transparent hover:border-brass-500 ${
                          state ? STATE_INK[state.name] : "text-granite-500"
                        }`
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {!PRICES_CONFIRMED ? (
        <div className="border-b border-kumkum-600/35 bg-kumkum-600/8">
          <div className="mx-auto max-w-[88rem] px-5 py-4 sm:px-8">
            <p className="label text-[0.625rem] leading-relaxed text-kumkum-700">
              Dishes and prices are taken from the in store board and are being
              confirmed with the kitchen before opening.
            </p>
          </div>
        </div>
      ) : null}

      {matches === 0 ? (
        <div className="mx-auto max-w-[88rem] px-5 pt-14 sm:px-8">
          <div className="border border-brass-500/45 px-6 py-6">
            <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-700">
              Nothing on the board comes from {filter} yet. It is named on our
              signage because it is one of the four states we cook, and its
              dishes arrive with a City Launch rather than being approximated in
              the meantime.
            </p>
          </div>
        </div>
      ) : null}

      {MENU.map((section) =>
        section.id === "thali" ? (
          <ThaliBand key={section.id} section={section} dimmedStates={isDimmed} />
        ) : (
          <section
            key={section.id}
            id={section.id}
            className="relative scroll-mt-32 overflow-hidden py-20 odd:bg-bone-200 even:bg-bone-100 sm:py-24 lg:py-28"
          >
            <div className="paper absolute inset-0" aria-hidden="true" />
            <Gopuram
              size={260}
              className="pointer-events-none absolute -right-10 top-10 hidden text-ink-700/[0.06] lg:block"
            />

            <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
              <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
                <div>
                  <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink-800">
                    {section.name}
                  </h2>
                  {/* The board's own subtitle, below the heading rather than
                      above it, so nothing reads as a kicker. */}
                  <p className="mt-3 font-display text-[clamp(1.2rem,2.4vw,1.7rem)] font-normal italic leading-snug tracking-[-0.02em] text-kumkum-600">
                    {section.tagline}
                  </p>
                </div>
                <p
                  className={`${section.script} text-[1.65rem] leading-snug text-brass-700`}
                  lang={section.script}
                >
                  {section.nameNative}
                </p>
              </div>

              {section.image ? (
                <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
                  <figure
                    className="lift-panel relative aspect-4/3 overflow-hidden bg-bone-300 lg:col-span-5"
                    data-reveal="wipe"
                  >
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 92vw"
                      className="object-cover"
                    />
                  </figure>
                  {section.note ? (
                    <p className="max-w-[46ch] text-[1.0625rem] leading-relaxed text-granite-500 lg:col-span-6 lg:col-start-7 lg:pt-2">
                      {section.note}
                    </p>
                  ) : null}
                </div>
              ) : section.note ? (
                <p className="mt-7 max-w-[54ch] text-[1.0625rem] leading-relaxed text-granite-500">
                  {section.note}
                </p>
              ) : null}

              <SectionBody section={section} isDimmed={isDimmed} />
            </div>
          </section>
        ),
      )}
    </>
  );
}

/**
 * Two body forms, chosen per section so no two adjacent sections share a
 * layout family: a photograph grid where the plates are worth showing, and the
 * board's own grouped price registers where they are variants of one dish.
 */
function SectionBody({
  section,
  isDimmed,
}: {
  section: (typeof MENU)[number];
  isDimmed: (state?: string) => boolean;
}) {
  const groups = useMemo(() => {
    const map = new Map<string, typeof section.items>();
    for (const item of section.items) {
      const key = item.group ?? "";
      map.set(key, [...(map.get(key) ?? []), item]);
    }
    return [...map.entries()];
  }, [section]);

  if (CARD_SECTIONS.has(section.id)) {
    return (
      <div className="mt-14 grid gap-7 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item, i) => (
          <DishCard
            key={item.id}
            item={item}
            index={i}
            dimmed={isDimmed(item.state)}
          />
        ))}
      </div>
    );
  }

  /* A dish earns a card by being a signature item, or by having both a
     photograph and something to say about it. A plain variant that merely
     happens to carry an image stays in the register where the board sets it,
     otherwise "Plain Dosa" gets lifted out of Bengaluru Style and the register
     silently loses its first row. */
  const featured = section.items.filter(
    (i) => i.signature || (i.image && i.description),
  );
  const featuredIds = new Set(featured.map((i) => i.id));
  const registerGroups = groups
    .map(([name, items]) => [name, items.filter((i) => !featuredIds.has(i.id))] as const)
    .filter(([, items]) => items.length > 0);

  return (
    <>
      {registerGroups.length > 0 ? (
        <div
          className={`mt-14 grid gap-x-12 gap-y-12 sm:mt-16 ${
            registerGroups.length > 1 ? "lg:grid-cols-2" : "lg:max-w-3xl"
          }`}
        >
          {registerGroups.map(([groupName, items]) => (
            <div key={groupName || section.id}>
              {groupName ? (
                <p className="label rule-brass pb-3 text-[0.6875rem] text-ink-800">
                  {groupName}
                </p>
              ) : null}
              <ul className={groupName ? "mt-1" : ""}>
                {items.map((item, i) => (
                  <li
                    key={item.id}
                    data-reveal="rule"
                    style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                    className={`rule-bottom py-4 transition-[opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isDimmed(item.state) ? "opacity-30 saturate-50" : "opacity-100"
                    }`}
                  >
                    <PriceRow
                      name={
                        item.mark ? (
                          <span className="inline-flex items-baseline gap-2.5">
                            <Mark
                              name={item.mark}
                              size={16}
                              className="translate-y-[0.1em] text-brass-600"
                            />
                            {item.name}
                          </span>
                        ) : (
                          item.name
                        )
                      }
                      price={item.price}
                    />
                    {item.description ? (
                      <p className="mt-1.5 text-[0.9375rem] italic leading-relaxed text-granite-500">
                        {item.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {featured.length > 0 ? (
        <>
          <RuleDiamond className="mx-auto mt-16 max-w-sm" />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, i) => (
              <DishCard
                key={item.id}
                item={item}
                index={i}
                dimmed={isDimmed(item.state)}
              />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
