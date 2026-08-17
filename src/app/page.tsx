import { Hero } from "@/components/home/hero";
import { Assurances } from "@/components/home/assurances";
import { Threshold } from "@/components/home/threshold";
import { FourStates } from "@/components/home/four-states";
import { Offering } from "@/components/home/offering";
import { MenuPreview } from "@/components/home/menu-preview";
import { CityLaunch } from "@/components/home/city-launch";
import { TheRoom } from "@/components/home/the-room";
import { LocationsPreview } from "@/components/home/locations-preview";
import { FranchiseInvite } from "@/components/home/franchise-invite";

/** The countdown moves once a day, so the page refreshes itself hourly. */
export const revalidate = 3600;

/**
 * Reading order: what the house is, then what it cooks.
 *
 * The page used to run three food sections back to back before it had said
 * anything, which reads as a menu board rather than a house. So the idea goes
 * first (Threshold's annadana, the four states, the wall's own words) and the
 * plates arrive at the middle, once there is a reason to care about them. The
 * thali moved to /menu, where a reader is already looking at prices.
 *
 * The grounds alternate the whole way down, dark to light, so no two sections
 * ever merge into one slab.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Assurances />
      <Threshold />
      <FourStates />
      <Offering />
      <MenuPreview />
      <CityLaunch />
      <TheRoom />
      <LocationsPreview />
      <FranchiseInvite />
    </>
  );
}
