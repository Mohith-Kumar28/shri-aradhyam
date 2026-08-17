import { type MenuItem } from "@/lib/site-data";

/**
 * The leader ruled price row, taken straight off the printed board: the name,
 * a run of dots, and the figure in the data register.
 *
 * The dots are a dotted bottom border on a flexible span rather than a string
 * of periods, so they never wrap, never read to a screen reader, and always
 * meet the price exactly.
 */
export function PriceRow({
  name,
  price,
  className = "",
  tone = "light",
}: {
  name: React.ReactNode;
  price: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  const ink = tone === "dark" ? "text-bone-100" : "text-ink-800";
  /* The leader has to be darker than a structural hairline or the dots blur
     into one faint line at reading size. bone-400 disappears entirely. */
  const rule = tone === "dark" ? "border-bone-500/60" : "border-granite-400/55";

  return (
    <span className={`flex items-baseline gap-2.5 ${className}`}>
      <span
        className={`font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] ${ink}`}
      >
        {name}
      </span>
      <span
        aria-hidden="true"
        className={`min-w-6 flex-1 translate-y-[-0.28em] border-b border-dotted ${rule}`}
      />
      {/* The price sits in the data register at the body-small step rather
          than the 0.625rem data step. A menu figure is primary information,
          not register furniture, and at 0.625rem it loses to the dish name.
          0.9375rem is an existing step on the ramp, so this widens where the
          data register may be set without adding a new size. */}
      <span className={`data shrink-0 text-[0.9375rem] tracking-[0.06em] ${ink}`}>
        &#8377;{price}
      </span>
    </span>
  );
}

/** The provenance colophon: the town a dish is claimed from, set below it. */
export function Provenance({
  item,
  ink,
  className = "",
}: {
  item: MenuItem;
  ink: string;
  className?: string;
}) {
  if (!item.city && !item.state) return null;
  return (
    <p className={`label mt-2 text-[0.625rem] ${ink} ${className}`}>
      {item.city ?? item.state}
      {item.city && item.state ? (
        <span className="opacity-70"> &middot; {item.state}</span>
      ) : null}
    </p>
  );
}
