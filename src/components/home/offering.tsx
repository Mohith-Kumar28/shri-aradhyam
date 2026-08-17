import Image from "next/image";
import { BRAND } from "@/lib/site-data";
import { Corbel } from "@/components/site/ornament";

/**
 * Layout family: editorial asymmetric split, photograph against long prose,
 * with a pull quote taken verbatim from the wall of the restaurant.
 */
export function Offering() {
  return (
    <section id="story" className="relative overflow-hidden bg-bone-100">
      <div className="paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Photograph, held in a stone frame rather than a rounded card. */}
          <figure className="relative lg:col-span-5" data-reveal="wipe">
            <div className="relative aspect-4/5 overflow-hidden bg-granite-600">
              <Image
                src="/brand/interior-wall.webp"
                alt="The Shri Aradhyam wall, the brand's promise set in Kannada and English above a row of drawn assurance marks"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[38%_45%]"
              />
            </div>
            <Corbel
              className="absolute -bottom-1 -left-1 h-14 w-8 text-ink-700"
              aria-hidden="true"
            />
            <figcaption className="label mt-4 text-[0.625rem] text-granite-400">
              The wall, written twice so that neither reader is a guest
            </figcaption>
          </figure>

          {/* Prose */}
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="max-w-[26ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              An offering first, a meal second.
            </h2>

            {/* Three ruled entries rather than a wall of prose, so the section
                keeps the register grammar and stays readable on a phone. */}
            <div className="mt-9">
              <div className="rule-top py-7">
                <h3 className="font-display text-[1.35rem] leading-snug tracking-[-0.02em] text-ink-700">
                  <span className="kn" lang="kn">
                    ಆರಾಧ್ಯಂ
                  </span>{" "}
                  is the one who is worshipped.
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.78] text-granite-500">
                  The word was chosen deliberately. In a South Indian household
                  the first cooking of the day is not served, it is offered, and
                  only then does anyone eat. That order is the whole of our
                  kitchen&rsquo;s method.
                </p>
              </div>

              <div className="rule-top py-7">
                <h3 className="font-display text-[1.35rem] leading-snug tracking-[-0.02em] text-ink-700">
                  The correct way is the only one we repeat.
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.78] text-granite-500">
                  The batter is ground the night before rather than bought. The
                  podi is roasted in small weights, because a large weight goes
                  stale before it is finished. The coffee is drawn from a single
                  roaster and the decoction is not held past its hour. None of
                  this is efficient.
                </p>
              </div>

              <div className="rule-top rule-bottom py-7">
                <h3 className="font-display text-[1.35rem] leading-snug tracking-[-0.02em] text-ink-700">
                  And every dish still answers to a place.
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.78] text-granite-500">
                  Four states cook the same grain and the same lentil into
                  entirely different food. So a bowl is not simply rice: it is
                  Mysore&rsquo;s chithrana, or Thanjavur&rsquo;s ghee pongal, or
                  the Godhavari delta&rsquo;s gongura. The town stays on the
                  menu beside the dish, because it is the reason the dish tastes
                  the way it does.
                </p>
              </div>
            </div>

            {/* The wall's own words. */}
            <blockquote className="rule-top rule-brass mt-12 pt-9">
              <p className="font-display text-[clamp(1.35rem,2.6vw,1.9rem)] font-normal italic leading-[1.35] tracking-[-0.02em] text-ink-800">
                &ldquo;Every plate at Shri Aradhyam reflects our belief that food
                is an offering, not just a meal.&rdquo;
              </p>
              <footer className="label mt-5 text-[0.625rem] text-granite-400">
                From the wall of the restaurant
              </footer>
            </blockquote>

            <p className="mt-10 max-w-[48ch] text-[1.0625rem] leading-relaxed text-ink-700">
              {BRAND.meaning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
