import { Hero } from "@/components/home/hero";
import { Assurances } from "@/components/home/assurances";
import { Register } from "@/components/home/register";
import { Offering } from "@/components/home/offering";
import { Threshold } from "@/components/home/threshold";
import { KitchenDay } from "@/components/home/kitchen-day";
import { FiveStates } from "@/components/home/five-states";
import { TheRoom } from "@/components/home/the-room";
import { LocationsPreview } from "@/components/home/locations-preview";
import { FranchiseInvite } from "@/components/home/franchise-invite";
import { istDayIndex } from "@/lib/today";

/** The rotation turns at dawn, so the page refreshes itself every five minutes. */
export const revalidate = 300;

export default function Home() {
  return (
    <>
      <Hero />
      <Assurances />
      <Register todayIndex={istDayIndex()} />
      <Offering />
      <Threshold />
      <KitchenDay />
      <FiveStates />
      <TheRoom />
      <LocationsPreview />
      <FranchiseInvite />
    </>
  );
}
