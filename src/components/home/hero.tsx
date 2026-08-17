import { ArchHero } from "./arch-hero";
import { daysUntilOpening, isPreOpening } from "@/lib/today";

/**
 * The date facts are read on the server, where "today" is decided once an hour
 * by the page's own revalidation, and handed down to the client component that
 * needs the scroll. Same split the header uses.
 */
export function Hero() {
  return <ArchHero preOpening={isPreOpening()} days={daysUntilOpening()} />;
}
