import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS, SIGNATURE_IDS, STATE_INK_ON_DARK } from "@/lib/site-data";
import { JaaliBand, Mark } from "@/components/site/ornament";

/**
 * Layout family: horizontal plate rail on a dark ground.
 *
 * Six plates, scrolled sideways, each carrying its price and its town. It is a
 * trailer for /menu rather than a second menu: nothing here is the full board.
 */

const PLATES = SIGNATURE_IDS.map((id) => MENU_ITEMS.find((i) => i.id === id)!).filter(
  (item) => Boolean(item?.image),
);

export function MenuPreview() {
  return (
    <section id="plates" className="relative overflow-hidden bg-ink-800">
      <JaaliBand className="absolute inset-x-0 top-0 opacity-25" height={40} />

      <div className="relative py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 className="max-w-[20ch] font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-bone-100 lg:col-span-6">
              Six plates, and the towns they answer to.
            </h2>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
              <p className="text-[1.0625rem] leading-relaxed text-bone-400">
                A dosa griddled two ways, four rice bowls from four states, and
                a meal on a leaf. The whole board runs longer.
              </p>
              <Link
                href="/menu"
                className="label link-brass mt-7 inline-flex items-center gap-2.5 text-[0.625rem] text-bone-200"
              >
                Read the full menu
                <Mark name="arrowRight" size={14} className="text-brass-400" />
              </Link>
            </div>
          </div>
        </div>

        <div className="rail-holder mt-16 sm:mt-20">
          <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 [scrollbar-color:var(--color-brass-600)_transparent] sm:px-8">
            {PLATES.map((item, i) => (
              <li
                key={item.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                className="group w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] xl:w-[24rem]"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-ink-900">
                  <Image
                    src={item.image!.src}
                    alt={item.image!.alt}
                    fill
                    sizes="(min-width: 1280px) 24rem, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-500/30"
                  />
                </div>

                <div className="mt-6 flex items-baseline gap-2.5">
                  <span className="font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-bone-100">
                    {item.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="min-w-6 flex-1 translate-y-[-0.28em] border-b border-dotted border-bone-500/60"
                  />
                  <span className="data shrink-0 text-[0.9375rem] tracking-[0.06em] text-bone-100">
                    &#8377;{item.price}
                  </span>
                </div>

                {item.city || item.state ? (
                  <p
                    className={`label mt-2 text-[0.625rem] ${
                      item.state ? STATE_INK_ON_DARK[item.state] : "text-bone-400"
                    }`}
                  >
                    {item.city ?? item.state}
                    {item.city && item.state ? (
                      <span className="opacity-70"> &middot; {item.state}</span>
                    ) : null}
                  </p>
                ) : null}
              </li>
            ))}
            <li aria-hidden="true" className="w-2 shrink-0 sm:w-5" />
          </ul>
          <p className="label mx-auto mt-2 max-w-[88rem] px-5 text-[0.625rem] text-bone-500 sm:px-8">
            Scroll the rail
          </p>
        </div>
      </div>
    </section>
  );
}
