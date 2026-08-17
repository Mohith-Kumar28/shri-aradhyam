import type { ScriptKey } from "@/lib/site-data";

/**
 * One name, read in every script that claims it, resolved by scrolling.
 *
 * The brand's whole argument is four states under one roof, and the name is the
 * shortest possible way to say it: the same word written four ways, arriving at
 * English last. That is a statement, not decoration, so it is not on a timer
 * and it does not depend on hovering. It is a function of how far the reader
 * has walked into the arch.
 *
 * Every reading sits in one grid cell with its own `lang`, so all of them are
 * in the accessibility tree and the meaning survives with no CSS at all. The
 * crossing itself is done entirely in CSS off `--p` and each reading's own
 * index: see `.script-cycle` in globals.css. Nothing here runs at runtime,
 * which is why this is a server component.
 */
export function ScriptCycle({
  readings,
  latin,
  className,
}: {
  readings: { script: ScriptKey; text: string }[];
  latin: string;
  className?: string;
}) {
  const all = [
    ...readings.map((r) => ({ lang: r.script, cls: r.script, text: r.text })),
    { lang: "en", cls: "", text: latin },
  ];

  return (
    <span
      className={`script-cycle ${className ?? ""}`}
      style={{ ["--n" as string]: all.length - 1 }}
    >
      {all.map((r, i) => (
        <span
          key={r.lang}
          className={r.cls}
          lang={r.lang}
          style={{ ["--i" as string]: i }}
        >
          {r.text}
        </span>
      ))}
    </span>
  );
}
