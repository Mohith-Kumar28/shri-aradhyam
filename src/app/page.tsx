import { Hero } from "@/components/home/hero";
import { Assurances } from "@/components/home/assurances";
import { Creed } from "@/components/home/creed";
import { TheRoom } from "@/components/home/the-room";
import { Invite } from "@/components/home/invite";

/** The countdown moves once a day, so the page refreshes itself hourly. */
export const revalidate = 3600;

/**
 * Reading order: the wall's argument, what the kitchen commits to, the line
 * framed in the dining room, the room itself, and then the street address. The
 * grounds alternate dark to light the whole way down, so no two sections merge
 * into one slab.
 *
 * The regions section (`Traditions`) is built and kept in the tree but is not
 * mounted here — it was pulled from the home page, not deleted.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Assurances />
      <Creed />
      <TheRoom />
      <Invite />
    </>
  );
}
