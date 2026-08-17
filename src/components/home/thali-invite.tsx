import Image from "next/image";
import Link from "next/link";
import { MENU, STATE_INK } from "@/lib/site-data";
import { Mark, Thoranam } from "@/components/site/ornament";

/**
 * Layout family: centred full bleed statement over a two up of photographs.
 *
 * The thali is the highest ticket item on the board and the clearest premium
 * signal the brand has, so it gets a section on the home page rather than a
 * line in a list. The full register of what lands on the leaf lives on /menu;
 * here it is the two meals, their prices, and nothing else.
 */
export function ThaliInvite() {
  const thali = MENU.find((s) => s.id === "thali");
  if (!thali) return null;

  return (
    <section className="relative overflow-hidden bg-bone-300 py-24 sm:py-28 lg:py-32">
      <div className="paper absolute inset-0" aria-hidden="true" />
      <Thoranam
        className="absolute inset-x-0 top-0 opacity-60"
        height={26}
        color="#a8811a"
        leaf="#785c0f"
      />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        {/* The measures sit on the elements they constrain. A ch measure on a
            body sized wrapper is measured in body ch, which breaks a 3.6rem
            display line after three or four words. */}
        <div className="text-center">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink-800">
            A meal on a leaf, in courses.
          </h2>
          <p className="mx-auto mt-5 max-w-[26ch] font-display text-[clamp(1.2rem,2.4vw,1.7rem)] font-normal italic leading-snug tracking-[-0.02em] text-kumkum-600">
            {thali.tagline}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-8">
          {thali.items.map((item, i) => (
            <article
              key={item.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className="group"
            >
              {item.image ? (
                <div className="lift-panel relative aspect-4/3 overflow-hidden bg-bone-200">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
              ) : null}

              <div className="rule-top mt-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-6">
                <h3 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold leading-tight tracking-[-0.025em] text-ink-800">
                  {item.name}
                </h3>
                <span className="data text-[0.9375rem] tracking-[0.06em] text-ink-800">
                  &#8377;{item.price}
                </span>
              </div>

              {item.city && item.state ? (
                <p className={`label mt-2.5 text-[0.625rem] ${STATE_INK[item.state]}`}>
                  {item.city} &middot; {item.state}
                </p>
              ) : null}

              <p className="mt-4 font-display text-[1.35rem] font-normal italic leading-snug tracking-[-0.02em] text-granite-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/menu#thali"
            className="label link-brass inline-flex items-center gap-2.5 text-[0.625rem] text-ink-700"
          >
            See what lands on the leaf
            <Mark name="arrowRight" size={14} className="text-brass-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
