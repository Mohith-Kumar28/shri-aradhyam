import { Hero } from "@/components/home/hero";
import { Assurances } from "@/components/home/assurances";
import { Traditions } from "@/components/home/traditions";
import { Creed } from "@/components/home/creed";
import { TheRoom } from "@/components/home/the-room";
import { Invite } from "@/components/home/invite";

/** The countdown moves once a day, so the page refreshes itself hourly. */
export const revalidate = 3600;

/**
 * Reading order: the wall's argument, what the kitchen commits to, the places
 * the food comes from, the line framed in the dining room, the room itself, and
 * then the street address. The grounds alternate dark to light the whole way
 * down, so no two sections merge into one slab.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Assurances />
      <Traditions />
      <Creed />
      <TheRoom />
      <Invite />
    </>
  );
}
