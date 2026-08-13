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

/* The signage emblem: a lotus inside a filled roundel. */
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
      aria-label="Shri Aradhyam lotus emblem"
    >
      <circle cx="24" cy="24" r="23" fill="currentColor" />
      <g
        fill="none"
        stroke="var(--color-bone-100)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* centre petal */}
        <path d="M24 33c0-6.4 0-9.6 0-16 3.4 3.2 5.1 6.4 5.1 9.6S27.4 31.4 24 33Z" />
        <path d="M24 33c0-6.4 0-9.6 0-16-3.4 3.2-5.1 6.4-5.1 9.6S20.6 31.4 24 33Z" />
        {/* outer petals */}
        <path d="M24 33c-4.6-4.5-8-6.2-11.9-6.4 1 4.1 4.2 6.7 11.9 6.4Z" />
        <path d="M24 33c4.6-4.5 8-6.2 11.9-6.4-1 4.1-4.2 6.7-11.9 6.4Z" />
        {/* stem base */}
        <path d="M15.5 34.6h17" />
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
 * A pulli kolam: dots first, then one continuous line looping around them.
 * The line is a single path so it can be drawn on scroll in one stroke, the
 * way it is actually drawn on a doorstep.
 */
export function Kolam({
  className,
  size = 320,
  dash = 2400,
}: {
  className?: string;
  size?: number;
  dash?: number;
}) {
  const dots: React.ReactElement[] = [];
  const counts = [3, 5, 7, 5, 3];
  counts.forEach((count, row) => {
    for (let i = 0; i < count; i += 1) {
      const x = 100 + (i - (count - 1) / 2) * 25;
      const y = 50 + row * 25;
      dots.push(
        <circle key={`${row}-${i}`} cx={x} cy={y} r="1.6" fill="currentColor" opacity="0.5" />,
      );
    }
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
      <g style={{ ["--dash" as string]: dash }}>
        {/* Outer loop, a rotated square with looped corners. */}
        <path
          className="kolam-path"
          d="M100 18c9 0 14 5 14 12s-5 12-12 12 34-3 40 3 9 11 9 20-3 14-9 20-40 3-40 3 4 0 12 0 12 5 12 12-5 12-14 12-14-5-14-12 5-12 12-12-34 3-40-3-9-11-9-20 3-14 9-20 40-3 40-3-4 0-12 0-12-5-12-12 5-12 14-12Z"
          {...STROKE}
          strokeWidth="1.4"
        />
        {/* Inner rosette. */}
        <path
          className="kolam-path"
          d="M100 66c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14Zm-26 8c6 6 6 14 0 20m52-20c-6 6-6 14 0 20"
          {...STROKE}
          strokeWidth="1.1"
          opacity="0.8"
          style={{ ["--dash" as string]: 900, animationDelay: "700ms" }}
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
