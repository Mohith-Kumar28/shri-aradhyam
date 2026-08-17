import Image from "next/image";
import { type MenuItem, STATE_INK } from "@/lib/site-data";
import { PriceRow, Provenance } from "./price-row";
import { Gopuram } from "@/components/site/ornament";

/**
 * A plate with a photograph. The image does the selling, the ruled price row
 * does the informing, and the town the dish is claimed from closes the block
 * as a colophon rather than sitting over the name as a kicker.
 *
 * `image` is optional throughout the menu data. Without one the card falls
 * back to a ruled block on the same grid, so real food photography drops in
 * later field by field and no layout moves.
 */
export function DishCard({
  item,
  dimmed = false,
  index = 0,
}: {
  item: MenuItem;
  dimmed?: boolean;
  index?: number;
}) {
  const ink = item.state ? STATE_INK[item.state] : "text-granite-500";

  return (
    <article
      data-reveal
      style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
      className={`paper lift-panel relative flex flex-col overflow-hidden bg-bone-100 transition-[opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        dimmed ? "opacity-30 saturate-50" : "opacity-100"
      }`}
    >
      {item.image ? (
        <div className="relative aspect-4/3 overflow-hidden bg-bone-300">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      ) : (
        /* No photograph yet: the gopuram watermark holds the slot at the same
           aspect so the grid never breaks a row. */
        <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-bone-300">
          <div aria-hidden="true" className="jaali absolute inset-0 opacity-40" />
          <Gopuram size={96} className="relative text-ink-700/20" />
        </div>
      )}

      <div className="relative flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7">
        {item.signature ? (
          <span className="label absolute right-0 top-0 bg-brass-600 px-2.5 py-1.5 text-[0.625rem] text-ink-900">
            Signature
          </span>
        ) : null}

        <PriceRow name={item.name} price={item.price} />

        {item.nameNative && item.script ? (
          <p
            className={`${item.script} mt-2 text-[1.0625rem] leading-snug text-granite-500`}
            lang={item.script}
          >
            {item.nameNative}
          </p>
        ) : null}

        <Provenance item={item} ink={ink} />

        {item.description ? (
          <p className="mt-3 text-[0.9375rem] italic leading-relaxed text-granite-500">
            {item.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
