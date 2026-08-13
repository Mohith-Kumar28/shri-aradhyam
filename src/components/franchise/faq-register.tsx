"use client";

import { useState } from "react";

/**
 * The questions, ruled like the rest of the site. The marker is the brand's
 * diamond rotating to an x, not a chevron borrowed from an icon set.
 */
export function FaqRegister({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="rule-top rule-brass">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="rule-bottom">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="group flex w-full items-start gap-6 py-7 text-left"
              >
                <span
                  aria-hidden="true"
                  className="mt-4 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass-500"
                />
                <span className="flex-1 font-display text-[clamp(1.2rem,2.4vw,1.6rem)] leading-snug tracking-[-0.02em] text-ink-800 transition-colors duration-500 group-hover:text-ink-900">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-2.5 shrink-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: isOpen ? "rotate(135deg)" : "rotate(0deg)" }}
                >
                  <svg viewBox="0 0 14 14" width="11" height="11" className="text-brass-600">
                    <path d="M7 0.5 13.5 7 7 13.5 0.5 7Z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className="grid transition-[grid-template-rows] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className="max-w-[62ch] pb-8 pl-12 text-[1.0625rem] leading-relaxed text-granite-500 transition-opacity duration-500"
                  style={{ opacity: isOpen ? 1 : 0 }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
