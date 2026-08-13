import { Kolam } from "@/components/site/ornament";

/**
 * Layout family: centred full bleed statement.
 *
 * The quiet passage of the page. A kolam is drawn on a South Indian threshold
 * before the day starts, in one continuous line, and it is erased by evening.
 * Here it draws itself as you arrive.
 */
export function Threshold() {
  return (
    <section
      className="relative isolate overflow-hidden bg-bone-300 py-28 sm:py-36 lg:py-44"
      data-reveal
    >
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <Kolam className="w-[min(78vw,40rem)] text-ink-700/22" size={640} dash={2600} />
      </div>

      <div className="relative mx-auto max-w-[52rem] px-6 text-center">
        <p className="kn font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.15] text-ink-800" lang="kn">
          ಅನ್ನದಾನ
        </p>
        <p className="label mt-4 text-[0.625rem] text-brass-700">Annadana</p>

        <p className="mx-auto mt-10 max-w-[38ch] font-display text-[clamp(1.5rem,3.2vw,2.35rem)] font-normal leading-[1.32] tracking-[-0.022em] text-ink-800">
          The giving of food is the one gift that is finished the moment it is
          received, and given again tomorrow.
        </p>

        <p className="mx-auto mt-8 max-w-[54ch] text-[1.0625rem] leading-relaxed text-granite-500">
          A kolam is drawn at the doorstep before dawn in a single unbroken line,
          and wiped away by evening. Our menu keeps the same discipline.
        </p>
      </div>
    </section>
  );
}
