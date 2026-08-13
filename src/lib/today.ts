import { ROTATION, type CityDay } from "./site-data";

const SHORT_TO_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/**
 * The kitchen's day, not the visitor's. The rotation turns over in Indian
 * Standard Time wherever the page is read from.
 */
export function istDayIndex(now: Date = new Date()): number {
  const short = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
  }).format(now);
  return SHORT_TO_INDEX[short] ?? 1;
}

export function cityForDay(dayIndex: number): CityDay {
  return ROTATION.find((r) => r.dayIndex === dayIndex) ?? ROTATION[0];
}

export function todayCity(now: Date = new Date()): CityDay {
  return cityForDay(istDayIndex(now));
}

export function istDateLine(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
}
