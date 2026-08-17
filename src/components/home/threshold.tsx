import { Kolam } from "@/components/site/ornament";

/**
 * Layout family: centred statement standing on a drawn doorstep.
 *
 * The quiet passage of the page. A kolam is drawn on a South Indian threshold
 * before the day starts, in one continuous line, and it is erased by evening.
 *
 * It used to be scaled up behind the paragraph as a watermark, which was wrong
 * twice over. Wrong to look at, because at that size the loops are wider than
 * the lines of type and read as stray ellipses lying across the words rather
 * than as a figure. And wrong to mean, because a kolam is not a background: it
 * is drawn on the ground, at the entrance, and you step over it to come in. So
 * it is on the floor of the section now, at a size where the pattern and its
 * dot grid can actually be read, and the words stand above it.
 */
export function Threshold() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-ink-800/12 bg-bone-300 pb-0 pt-24 sm:pt-28 lg:pt-32"
      data-reveal
    >
      <div className="paper absolute inset-0" aria-hidden="true" />

      {/* A lamp above a doorway. Without it the ground is a flat field of bone
          and the section reads as a gap between two other sections. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_46%_at_50%_-4%,rgba(201,162,39,0.16)_0%,rgba(201,162,39,0)_72%)]"
      />

      <div className="relative mx-auto max-w-[52rem] px-6 text-center">
        {/* The transliteration leads as an eyebrow rather than trailing as a
            caption, so the reader is told what they are looking at before they
            are asked to look at it. */}
        <p className="label text-[0.625rem] text-brass-700">Annadana</p>

        <p
          className="kn mt-4 font-display text-[clamp(2.5rem,6.2vw,4.2rem)] leading-[1.12] text-ink-800"
          lang="kn"
        >
          ಅನ್ನದಾನ
        </p>

        <span
          aria-hidden="true"
          className="mx-auto mt-9 block h-px w-14 bg-ink-800/22"
        />

        <p className="mx-auto mt-9 max-w-[30ch] text-balance font-display text-[clamp(1.55rem,3.3vw,2.4rem)] font-normal leading-[1.32] tracking-[-0.022em] text-ink-800">
          The giving of food is the one gift that is finished the moment it is
          received, and given again tomorrow.
        </p>

        <p className="mx-auto mt-8 max-w-[50ch] text-balance text-[1.0625rem] leading-relaxed text-granite-500">
          A kolam is drawn at the doorstep before dawn in a single unbroken
          line, and wiped away by evening. Our menu keeps the same discipline.
        </p>
      </div>

      {/* The doorstep. The stone band gives the kolam something to be drawn on,
          and closes the section on an edge instead of on empty ground. */}
      <div className="relative mt-12 sm:mt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,rgba(58,35,24,0)_0%,rgba(58,35,24,0.055)_100%)]"
        />
        <div className="relative flex justify-center">
          <Kolam className="w-[min(20rem,62vw)] text-ink-700/50" size={320} />
        </div>
      </div>
    </section>
  );
}
