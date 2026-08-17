import { Hero } from "@/components/home/hero";
import { Assurances } from "@/components/home/assurances";
import { FourStates } from "@/components/home/four-states";
import { MenuPreview } from "@/components/home/menu-preview";
import { ThaliInvite } from "@/components/home/thali-invite";
import { Threshold } from "@/components/home/threshold";
import { CityLaunch } from "@/components/home/city-launch";
import { Offering } from "@/components/home/offering";
import { TheRoom } from "@/components/home/the-room";
import { LocationsPreview } from "@/components/home/locations-preview";
import { FranchiseInvite } from "@/components/home/franchise-invite";

/** The countdown moves once a day, so the page refreshes itself hourly. */
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <Assurances />
      <FourStates />
      <MenuPreview />
      <ThaliInvite />
      <Threshold />
      <CityLaunch />
      <Offering />
      <TheRoom />
      <LocationsPreview />
      <FranchiseInvite />
    </>
  );
}
