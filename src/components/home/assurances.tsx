import { ASSURANCES } from "@/lib/site-data";
import { AssuranceIcon } from "@/components/site/ornament";

/**
 * Layout family: a moving brass rail.
 *
 * These seven lines are painted on the wall of the restaurant in Kannada and
 * English, so on the page they travel as one continuous band rather than
 * sitting in seven identical boxes.
 */
export function Assurances() {
  const items = [...ASSURANCES, ...ASSURANCES];

  return (
    <section
      aria-label="What the kitchen commits to"
      className="rail-holder relative overflow-hidden border-y border-brass-500/35 bg-ink-800 py-7"
    >
      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-0 opacity-[0.14]"
      />

      {/* Fades so the rail leaves the frame rather than stopping at it. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,#26150d_0%,rgba(38,21,13,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,#26150d_0%,rgba(38,21,13,0)_100%)]"
      />

      <div className="relative flex w-max">
        <ul className="rail-track flex w-max items-center">
          {items.map((item, i) => (
            <li
              key={`${item.en}-${i}`}
              className="flex shrink-0 items-center gap-4 px-9"
              aria-hidden={i >= ASSURANCES.length}
            >
              <AssuranceIcon
                name={item.icon}
                size={30}
                className="shrink-0 text-brass-500"
              />
              <span className="flex flex-col leading-tight">
                <span className="kn text-[1.0625rem] text-bone-200" lang="kn">
                  {item.kn}
                </span>
                <span className="label mt-1.5 text-[0.625rem] text-brass-400">
                  {item.en}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="ml-5 h-1.5 w-1.5 rotate-45 bg-brass-500/55"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
