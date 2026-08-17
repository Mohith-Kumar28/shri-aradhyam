import * as React from "react";

/**
 * The ornament set. Every mark here is drawn, in one stroke language, from the
 * building itself: the lotus roundel on the signage, the corbel brackets under
 * the eave, the lotus bud eave course, the diamond jaali screen, and the kolam
 * that gets drawn on a South Indian threshold at dawn.
 *
 * No glyph, no emoji, no icon font.
 */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * The signage emblem: a lotus cradled in two open hands, inside a filled
 * roundel.
 *
 * The hands are the emblem. An earlier drawing here had petals over a plain
 * rule, which reads as a lotus on a shelf rather than as an offering being
 * held up, and it is not the mark on the building. The petals are drawn as
 * solid shapes rather than outlines so the emblem holds at 24px in the header.
 */
export function LotusRoundel({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Shri Aradhyam emblem: a lotus held in two open hands"
    >
      <circle cx="24" cy="24" r="23" fill="currentColor" />
      {/* The bloom: one upright petal with a pair leaning off it at 34
          degrees. The side petals are written out at their rotated
          coordinates rather than wrapped in a transform, so a page holding
          several emblems never depends on a shared id or a transform origin. */}
      <g fill="var(--color-bone-100)">
        <path d="M24 7.2C26.4 11.8 27.6 15.5 27.6 18.3C27.6 20.6 26.4 22.6 24 24.1C21.6 22.6 20.4 20.6 20.4 18.3C20.4 15.5 21.6 11.8 24 7.2Z" />
        <path d="M14.38 10.14C18.94 12.61 22.01 15.01 23.57 17.33C24.86 19.24 24.98 21.57 23.83 24.15C21 24.25 18.89 23.26 17.6 21.36C16.04 19.03 14.96 15.3 14.38 10.14Z" />
        <path d="M33.62 10.14C33.04 15.3 31.96 19.03 30.4 21.36C29.11 23.26 27 24.25 24.17 24.15C23.02 21.57 23.14 19.24 24.43 17.33C25.99 15.01 29.06 12.61 33.62 10.14Z" />
      </g>
      {/* Two open palms cupped beneath it, holding the bloom up rather than
          standing it on a shelf. */}
      <g fill="var(--color-bone-100)">
        <path d="M11.6 27.2c-.9 5.1.5 9.1 4.1 11.9 2.3 1.8 5.1 2.8 8.3 3.1v-3.3c-2.6-.3-4.8-1.1-6.5-2.5-2.7-2.2-3.8-5.5-3.2-9.7Z" />
        <path d="M36.4 27.2c.9 5.1-.5 9.1-4.1 11.9-2.3 1.8-5.1 2.8-8.3 3.1v-3.3c2.6-.3 4.8-1.1 6.5-2.5 2.7-2.2 3.8-5.5 3.2-9.7Z" />
      </g>
    </svg>
  );
}

/* A single temple corbel bracket, as seen under the awning. */
export function Corbel({
  className,
  flip = false,
  ...rest
}: React.SVGProps<SVGSVGElement> & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 64"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      {...rest}
    >
      <path
        d="M40 0H26c0 7.6-1.6 12-5 15.6C17.2 19.6 14 23.4 14 30c0 6.2 3 9.4 6 12.4 2.8 2.8 4.6 5.4 4.6 9.6 0 5-2.6 8.6-7.4 12H40Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * The lotus bud eave course that runs along the top of the storefront awning.
 *
 * Tiled as a background at a fixed size rather than stretched as one SVG: a
 * stretched pattern flattens each bud into a smear at wide viewports, which is
 * the opposite of carved stone.
 */
export function EaveCourse({
  className,
  height = 16,
  color = "#3a2318",
  flip = false,
}: {
  className?: string;
  height?: number;
  color?: string;
  flip?: boolean;
}) {
  const bud = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22"><path d="M10 22c-5 0-8-3.4-8-8 0-4.2 2.6-6.6 4.4-8.6C7.9 3.8 8.6 2 8.6 0h2.8c0 2 .7 3.8 2.2 5.4C15.4 7.4 18 9.8 18 14c0 4.6-3 8-8 8Z" fill="${color}"/></svg>`,
  );

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height,
        backgroundImage: `url("data:image/svg+xml,${bud}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `18px ${height}px`,
        backgroundPosition: "left top",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    />
  );
}

/**
 * The diamond jaali screen as a band divider. Tiled at a fixed size for the
 * same reason as the eave course.
 */
export function JaaliBand({
  className,
  height = 40,
  color = "#c9a227",
  size = 40,
}: {
  className?: string;
  height?: number;
  color?: string;
  size?: number;
}) {
  const tile = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="${color}" stroke-width="1.1" stroke-linejoin="round"><path d="M20 3 37 20 20 37 3 20Z"/><path d="M20 11.5 28.5 20 20 28.5 11.5 20Z" opacity=".6"/><path d="M0 20h3M37 20h3M20 0v3M20 37v3" opacity=".45"/></svg>`,
  );

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height,
        backgroundImage: `url("data:image/svg+xml,${tile}")`,
        backgroundRepeat: "repeat",
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: "center",
      }}
    />
  );
}

/**
 * The hanging brass oil lamp that hangs at the entrance and along the dining
 * wall. Drawn as a full drop, chain included, so it can be hung from the top
 * edge of a dark band the way it hangs from a beam.
 *
 * The flame carries `lamp-glow`, the breathing keyframe that has been declared
 * in globals.css since the first build and never had anything to animate. It
 * is stopped by the existing prefers-reduced-motion block.
 */
export function HangingDiya({
  className,
  height = 96,
  flame = true,
}: {
  className?: string;
  height?: number;
  flame?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 32 96"
      height={height}
      width={(height / 96) * 32}
      className={className}
      aria-hidden="true"
    >
      {/* Chain, its links, and the three arms that carry the bowl. */}
      <g {...STROKE}>
        <path d="M16 0v33" />
        <circle cx="16" cy="11" r="2.1" />
        <circle cx="16" cy="21" r="2.1" />
        <path d="M16 35 6.8 44.4M16 35l9.2 9.4M16 35v9.4" />
      </g>
      {/* The oil bowl, with a flared lip either side and a drop finial. */}
      <g fill="currentColor">
        <path d="M2.6 44.6h26.8c0 7.6-2.7 12.5-7.1 14.6-1.9.9-4 1.3-6.3 1.3s-4.4-.4-6.3-1.3c-4.4-2.1-7.1-7-7.1-14.6Z" />
        <path d="M2.6 44.6c-2.5.4-3.8 1-3.8 1.8s1.3 1.4 3.8 1.8Zm26.8 0c2.5.4 3.8 1 3.8 1.8s-1.3 1.4-3.8 1.8Z" />
        <path d="M16 61c1.5 0 2.5 1.1 2.5 3S17 68.4 16 70.8c-1-2.4-2.5-4.9-2.5-6.8s1-3 2.5-3Z" />
      </g>
      {/* The flame, rising off the left lip. */}
      {flame ? (
        <path
          className="lamp-glow"
          fill="currentColor"
          d="M1.6 43.9c-1.8-2.5-2.4-4.9-1.8-7 .5 1.3 1.1 2.2 1.9 2.7-.4-3.1.4-5.6 2.3-7.6-.3 2.5.2 4.5 1.4 6 1.1 1.5 1.4 2.9.7 4.2-.5 1-1.6 1.5-3.3 1.8-.4 0-.8-.1-1.2-.1Z"
        />
      ) : null}
    </svg>
  );
}

/**
 * The thoranam: the mango leaf and marigold garland strung across the awning
 * in every render of the storefront.
 *
 * Tiled as a background at a fixed size, for the same reason as the eave
 * course: a stretched swag turns each leaf into a smear.
 */
export function Thoranam({
  className,
  height = 30,
  color = "#c9a227",
  leaf = "#a8811a",
}: {
  className?: string;
  height?: number;
  color?: string;
  leaf?: string;
}) {
  const tile = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="30" viewBox="0 0 120 30" fill="none"><path d="M0 2Q30 24 60 2T120 2" stroke="${color}" stroke-width="1.25" stroke-linecap="round"/><g fill="${leaf}"><path d="M9 7.61C11.3 9.71 11.3 12.65 9 14.61C6.7 12.65 6.7 9.71 9 7.61ZM18 11.24C20.3 14.09 20.3 18.08 18 20.74C15.7 18.08 15.7 14.09 18 11.24ZM30 13C32.3 16.45 32.3 21.28 30 24.5C27.7 21.28 27.7 16.45 30 13ZM42 11.24C44.3 14.09 44.3 18.08 42 20.74C39.7 18.08 39.7 14.09 42 11.24ZM51 7.61C53.3 9.71 53.3 12.65 51 14.61C48.7 12.65 48.7 9.71 51 7.61ZM69 7.61C71.3 9.71 71.3 12.65 69 14.61C66.7 12.65 66.7 9.71 69 7.61ZM78 11.24C80.3 14.09 80.3 18.08 78 20.74C75.7 18.08 75.7 14.09 78 11.24ZM90 13C92.3 16.45 92.3 21.28 90 24.5C87.7 21.28 87.7 16.45 90 13ZM102 11.24C104.3 14.09 104.3 18.08 102 20.74C99.7 18.08 99.7 14.09 102 11.24ZM111 7.61C113.3 9.71 113.3 12.65 111 14.61C108.7 12.65 108.7 9.71 111 7.61Z"/></g><g fill="${color}"><circle cx="0" cy="2" r="1.6"/><circle cx="60" cy="2" r="1.6"/><circle cx="120" cy="2" r="1.6"/></g></svg>`,
  );

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height,
        backgroundImage: `url("data:image/svg+xml,${tile}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `120px ${height}px`,
        backgroundPosition: "left top",
      }}
    />
  );
}

/**
 * The gopuram the brand already prints on its cups, its carry bags and its
 * menu board. Used as a low opacity watermark behind a section heading, never
 * as a foreground graphic.
 */
export function Gopuram({
  className,
  size = 220,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 74"
      width={size}
      height={(size / 64) * 74}
      className={className}
      aria-hidden="true"
    >
      <g {...STROKE}>
        {/* Kalasha finial. */}
        <path d="M32 2c1.6 0 2.6 1.2 2.6 2.6S33.6 7 32 7.6C30.4 7 29.4 6 29.4 4.6S30.4 2 32 2Z" />
        <path d="M32 7.6V11M26 11h12" />
        {/* Five receding tiers. */}
        <path d="M24 18h16l-2-7H26Z" />
        <path d="M21 27h22l-3-9H24Z" />
        <path d="M17 37h30l-4-10H21Z" />
        <path d="M12 49h40l-5-12H17Z" />
        <path d="M7 63h50l-5-14H12Z" />
        <path d="M4 72h56v-9H4Z" />
        {/* The shrine door. */}
        <path d="M28 72v-8c0-2.2 1.8-4 4-4s4 1.8 4 4v8" />
        {/* Pilasters, one course per tier. */}
        <path d="M28 21v-3M32 21v-3M36 21v-3M25 30v-3M32 30v-3M39 30v-3M22 40v-3M32 40v-3M42 40v-3M18 52v-3M32 52v-3M46 52v-3" />
      </g>
    </svg>
  );
}

/**
 * A pulli kolam: dots first, then one continuous line looping around them.
 * The line is a single path so it can be drawn on scroll in one stroke, the
 * way it is actually drawn on a doorstep.
 */
/**
 * A kolam: the figure drawn in rice flour on a South Indian doorstep at dawn.
 *
 * Generated rather than hand written. The previous path was authored by eye and
 * was not actually symmetric, which does not show at watermark opacity but is
 * all you can see once it is drawn at a size worth looking at: it read as a
 * lopsided tangle. Eight petals placed at exact intervals cannot be lopsided,
 * and their crossings are the interlacing that makes a sikku kolam a kolam
 * rather than a flower.
 *
 * Every stroke carries pathLength={1}, so the draw-on animation is a fraction
 * of the figure rather than a length in user units that has to be guessed at
 * and re-guessed whenever the geometry changes.
 */
export function Kolam({
  className,
  size = 320,
}: {
  className?: string;
  size?: number;
}) {
  const CX = 100;
  const CY = 100;
  const PETALS = 8;

  /** One teardrop from the centre out to a tip and back, closed. */
  const petal = (index: number, radius: number, width: number) => {
    const t = (index * 2 * Math.PI) / PETALS;
    const tipX = CX + radius * Math.cos(t);
    const tipY = CY + radius * Math.sin(t);
    // The control points sit either side of the axis, which is what opens the
    // loop out into a petal instead of collapsing it onto a line.
    const nx = -Math.sin(t) * width;
    const ny = Math.cos(t) * width;
    const f = (n: number) => n.toFixed(2);
    return (
      `M${CX} ${CY}` +
      `Q${f(CX + nx)} ${f(CY + ny)} ${f(tipX)} ${f(tipY)}` +
      `Q${f(CX - nx)} ${f(CY - ny)} ${CX} ${CY}Z`
    );
  };

  const bloom = Array.from({ length: PETALS }, (_, i) => petal(i, 72, 46)).join("");

  // Pulli, the dots the line is drawn around. One at the centre, and one in
  // each gap between the petal tips.
  const dots = Array.from({ length: PETALS }, (_, i) => {
    const t = (i * 2 * Math.PI) / PETALS + Math.PI / PETALS;
    return (
      <circle
        key={i}
        cx={(CX + 79 * Math.cos(t)).toFixed(2)}
        cy={(CY + 79 * Math.sin(t)).toFixed(2)}
        r="1.9"
        fill="currentColor"
        opacity="0.5"
      />
    );
  });

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {dots}
      <circle cx={CX} cy={CY} r="1.9" fill="currentColor" opacity="0.5" />

      <g style={{ ["--dash" as string]: 1 }}>
        <path className="kolam-path" d={bloom} pathLength={1} {...STROKE} strokeWidth="1.4" />
        <circle
          className="kolam-path"
          cx={CX}
          cy={CY}
          r="26"
          pathLength={1}
          {...STROKE}
          strokeWidth="1.2"
          opacity="0.85"
          style={{ animationDelay: "900ms" }}
        />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Assurance icons. One stroke weight, one grid, drawn from the wall.
   --------------------------------------------------------------------------- */

const ICONS: Record<string, React.ReactElement> = {
  steam: (
    <>
      <path d="M6 20h16" {...STROKE} />
      <path d="M8 20c0-3.6 2.4-5.6 6-5.6s6 2 6 5.6" {...STROKE} />
      <path d="M11 10.5c0-1.6 1.4-2 1.4-3.5S11 4 11 4M17 10.5c0-1.6 1.4-2 1.4-3.5S17 4 17 4" {...STROKE} />
    </>
  ),
  mortar: (
    <>
      <path d="M5 10h18" {...STROKE} />
      <path d="M7 10c0 5.4 2.4 9 7 9s7-3.6 7-9" {...STROKE} />
      <path d="M14 19v4" {...STROKE} />
      <path d="M16.5 9 21 3.5" {...STROKE} />
      <path d="M19.4 2 23 5.4" {...STROKE} />
    </>
  ),
  leaf: (
    <>
      <path d="M5 23C5 12.5 11.5 5 23 5c0 11.5-7.5 18-18 18Z" {...STROKE} />
      <path d="M9 19c3.5-4.6 6.6-7.6 11-10.5" {...STROKE} />
    </>
  ),
  drop: (
    <>
      <path d="M14 3.5c4 5 7 8.4 7 12.2A7 7 0 0 1 7 15.7C7 11.9 10 8.5 14 3.5Z" {...STROKE} />
      <path d="M4 4l20 20" {...STROKE} strokeWidth="1.6" />
    </>
  ),
  flask: (
    <>
      <path d="M11 3h6v6l4.6 10.4A2.4 2.4 0 0 1 19.4 23H8.6a2.4 2.4 0 0 1-2.2-3.6L11 9Z" {...STROKE} />
      <path d="M8.6 15h10.8" {...STROKE} />
      <path d="M4 4l20 20" {...STROKE} strokeWidth="1.6" />
    </>
  ),
  flower: (
    <>
      <circle cx="14" cy="14" r="3" {...STROKE} />
      <path d="M14 11c0-4 1.4-6 1.4-6S11 5 11 7.6 14 11 14 11Z" {...STROKE} />
      <path d="M17 14c4 0 6 1.4 6 1.4S23 11 20.4 11 17 14 17 14Z" {...STROKE} />
      <path d="M14 17c0 4-1.4 6-1.4 6S17 23 17 20.4 14 17 14 17Z" {...STROKE} />
      <path d="M11 14c-4 0-6-1.4-6-1.4S5 17 7.6 17 11 14 11 14Z" {...STROKE} />
      <path d="M4 4l20 20" {...STROKE} strokeWidth="1.6" />
    </>
  ),
  veg: (
    <>
      <rect x="3.5" y="3.5" width="21" height="21" rx="1" {...STROKE} />
      <circle cx="14" cy="14" r="5.5" fill="currentColor" />
    </>
  ),
};

export function AssuranceIcon({
  name,
  className,
  size = 28,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 28 28"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {ICONS[name] ?? ICONS.leaf}
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Interface marks. Drawn in the same stroke language as the ornament above, so
   the controls belong to this world rather than to a borrowed icon set.
   --------------------------------------------------------------------------- */

const MARKS: Record<string, React.ReactElement> = {
  // Three rules, the almanac's own ruling, standing in for a hamburger.
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" {...STROKE} strokeWidth="1.4" />
    </>
  ),
  close: (
    <>
      <path d="M5 5l14 14M19 5L5 19" {...STROKE} strokeWidth="1.4" />
    </>
  ),
  // A pin built from the world's diamond rather than a teardrop.
  pin: (
    <>
      <path d="M12 3l6 6-6 6-6-6Z" {...STROKE} />
      <path d="M12 15v6" {...STROKE} />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" {...STROKE} />
      <path d="M12 7v5.4l3.6 2.2" {...STROKE} />
    </>
  ),
  phone: (
    <>
      <path d="M8.4 3.5H5.6A2.1 2.1 0 0 0 3.5 5.8c0 8.1 6.6 14.7 14.7 14.7a2.1 2.1 0 0 0 2.3-2.1v-2.8l-4.6-1.5-2.1 2.1a16.4 16.4 0 0 1-5.5-5.5l2.1-2.1Z" {...STROKE} />
    </>
  ),
  // Arrows: a rule with a chevron, matching the hairline vocabulary.
  arrowRight: (
    <>
      <path d="M3.5 12h16" {...STROKE} />
      <path d="M14 6.5 19.5 12 14 17.5" {...STROKE} />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 3.5v16" {...STROKE} />
      <path d="M6.5 14 12 19.5 17.5 14" {...STROKE} />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M6 18 18 6" {...STROKE} />
      <path d="M9 6h9v9" {...STROKE} />
    </>
  ),
  // A tumbler and davara, the vessel filter coffee actually arrives in.
  cup: (
    <>
      <path d="M8.5 7h7l-.8 9.5a2.7 2.7 0 0 1-2.7 2.5 2.7 2.7 0 0 1-2.7-2.5Z" {...STROKE} />
      <path d="M5 21h14" {...STROKE} />
      <path d="M8.2 10.5h7.6" {...STROKE} />
    </>
  ),
  // A rice bowl on its footed base.
  bowl: (
    <>
      <path d="M3.5 10h17c0 5-3.8 8.5-8.5 8.5S3.5 15 3.5 10Z" {...STROKE} />
      <path d="M9 21h6" {...STROKE} />
      <path d="M12 18.5V21" {...STROKE} />
    </>
  ),
  // A rolled dosa on a plate.
  dosa: (
    <>
      <path d="M3 17.5c0-3.4 3.6-9 9-9s9 5.6 9 9" {...STROKE} />
      <path d="M2 17.5h20" {...STROKE} />
      <path d="M8.5 17.5c0-3 1.6-6.4 3.5-6.4s3.5 3.4 3.5 6.4" {...STROKE} />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5.5" width="17" height="15" {...STROKE} />
      <path d="M3.5 10h17M8 3.5v4M16 3.5v4" {...STROKE} />
    </>
  ),
  // Directions: the world's diamond, set travelling.
  direction: (
    <>
      <path d="M12 3.5 20.5 12 12 20.5 3.5 12Z" {...STROKE} />
      <path d="M9 13v-2.2a1 1 0 0 1 1-1h4.5" {...STROKE} />
      <path d="M12.8 7.6 15.4 9.8 12.8 12" {...STROKE} />
    </>
  ),
  share: (
    <>
      <circle cx="17.5" cy="6" r="2.6" {...STROKE} />
      <circle cx="6.5" cy="12" r="2.6" {...STROKE} />
      <circle cx="17.5" cy="18" r="2.6" {...STROKE} />
      <path d="m8.8 10.8 6.4-3.5M8.8 13.2l6.4 3.5" {...STROKE} />
    </>
  ),
};

export function Mark({
  name,
  size = 14,
  className,
}: {
  name: keyof typeof MARKS | string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`shrink-0 ${className ?? ""}`}
      aria-hidden="true"
    >
      {MARKS[name] ?? MARKS.arrowRight}
    </svg>
  );
}

/* A brass hairline with a diamond at its centre, the section separator. */
export function RuleDiamond({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-brass-500/45" />
        <svg viewBox="0 0 14 14" width="9" height="9" className="text-brass-600">
          <path d="M7 0.5 13.5 7 7 13.5 0.5 7Z" fill="currentColor" />
        </svg>
        <span className="h-px flex-1 bg-brass-500/45" />
      </div>
    </div>
  );
}
