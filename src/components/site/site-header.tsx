import { daysUntilOpening, isPreOpening } from "@/lib/today";
import { HeaderShell } from "./header-shell";

/**
 * The date arithmetic stays on the server so the masthead cannot disagree with
 * the hero, and so a visitor's own clock never decides what the kitchen says.
 */
export function SiteHeader() {
  return (
    <HeaderShell
      preOpening={isPreOpening()}
      daysUntilOpening={daysUntilOpening()}
    />
  );
}
