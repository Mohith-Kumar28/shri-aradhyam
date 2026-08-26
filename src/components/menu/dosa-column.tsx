"use client";

import { useState } from "react";
import { DOSA, type MenuAccent } from "@/lib/site-data";

/** The plate a style is struck on when it is the one chosen. */
const PLATE: Record<MenuAccent, string> = {
  palm: "border-palm-700 bg-palm-700 text-bone-100",
  kumkum: "border-kumkum-700 bg-kumkum-700 text-bone-100",
  brass: "border-brass-600 bg-brass-600 text-ink-900",
};

/**
 * One list of dosas, and the city it is made in.
 *
 * The printed board carries these five names twice, once under each city. They
 * are the same five names — Bengaluru and Chennai are two ways of making one
 * dosa, not two menus — so the name is set once and the city is offered against
 * it. The list does not change when the city does, and it should not: what
 * changes is the batter and the griddle, which is what the line underneath
 * says. Every name stays on the board whichever way you read it.
 */
export function DosaColumn() {
  const [style, setStyle] = useState(0);
  const chosen = DOSA.styles[style];

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Dosa style"
        className="mt-8 flex flex-wrap gap-2"
      >
        {DOSA.styles.map((option, i) => (
          <button
            key={option.label}
            type="button"
            role="radio"
            aria-checked={i === style}
            onClick={() => setStyle(i)}
            className={`label border px-3.5 py-2 text-[0.5625rem] transition-colors duration-500 ${
              i === style
                ? PLATE[option.accent]
                : "border-bone-400 text-granite-400 hover:border-ink-700 hover:text-ink-800"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* The one thing that actually differs between the two lists. Keyed on
          the label so it re-enters rather than cross-fading in place, which
          would read as a repaint rather than as an answer. */}
      <p
        key={chosen.label}
        className="style-note mt-4 min-h-[3.5em] text-[0.9375rem] leading-relaxed text-granite-500"
      >
        {chosen.note}
      </p>

      <ul className="mt-2">
        {DOSA.items.map((item) => (
          <li
            key={item}
            className="rule-bottom py-2.5 text-[1.0625rem] text-ink-700 last:border-b-0"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-9">
        <p className="label inline-block bg-brass-600 px-3.5 py-2 text-[0.5625rem] text-ink-900">
          {DOSA.special.label}
        </p>
        <ul className="mt-4">
          {DOSA.special.items.map((item) => (
            <li
              key={item}
              className="rule-bottom py-2.5 text-[1.0625rem] text-ink-700 last:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
