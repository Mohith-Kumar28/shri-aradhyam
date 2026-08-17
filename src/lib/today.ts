import { OPENING } from "./site-data";

/**
 * Dates on this site are the kitchen's, not the visitor's. Everything here
 * resolves in Indian Standard Time wherever the page is read from.
 */

export function istDateLine(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
}

/** Midnight IST on the given YYYY-MM-DD, as a UTC instant. IST is UTC+5:30. */
function istMidnight(isoDate: string): number {
  return Date.parse(`${isoDate}T00:00:00+05:30`);
}

/**
 * Whole days from now until the opening, floored at zero.
 *
 * Counted in whole IST days rather than in elapsed hours, so the number a
 * visitor sees changes at midnight in Bengaluru and not at some hour that
 * depends on when the page happened to be built.
 */
export function daysUntilOpening(now: Date = new Date()): number {
  const today = istMidnight(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(now),
  );
  const target = istMidnight(OPENING.date);
  const days = Math.round((target - today) / 86_400_000);
  return days > 0 ? days : 0;
}

/**
 * Whether the first outlet is still ahead of us. Every diner surface is
 * written from the pre opening position, and this is the single switch that
 * retires that framing once the date passes.
 */
export function isPreOpening(now: Date = new Date()): boolean {
  return daysUntilOpening(now) > 0;
}
