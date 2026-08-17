"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND, OPENING } from "@/lib/site-data";
import { ScriptCycle } from "@/components/site/script-cycle";
import { Mark } from "@/components/site/ornament";

/**
 * Layout family: a held threshold, walked through.
 *
 * The page opens on one thing only: a torana standing in an unlit hall. As the
 * reader scrolls, the stone rushes at them and the room behind it barely moves,
 * which is what a doorway does when you walk at it. The words arrive inside the
 * opening while it is still an opening. By the time the arch has left the frame
 * on all four sides, the dining room is up and the words have settled into the
 * hero they were always going to be.
 *
 * The script writes exactly one thing, `--p`, the section's scroll progress
 * from 0 to 1. Every scale, fade and drift is derived from it in CSS. That
 * keeps the frame budget to a single custom property write and leaves the
 * compositor to do the rest.
 */
export function ArchHero({
  preOpening,
  days,
}: {
  preOpening: boolean;
  days: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    // A passage is a journey, and the reduced motion reader has opted out of
    // journeys. The stylesheet already holds the arch open for them, so the
    // script must not touch `--p` at all or it would close it again.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const travel = section.offsetHeight - window.innerHeight;
      if (travel <= 0) return;
      const p = -section.getBoundingClientRect().top / travel;
      section.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
    };

    const queue = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, []);

  return (
    <section ref={ref} className="arch-hero" aria-label={BRAND.name}>
      {/* Without a script there is no passage to scroll through, so the arch is
          held at the frame where the doorway is already open. Written as a
          parse time style rather than a hydration effect, so it never flashes. */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.arch-hero{--p:.62;height:100dvh}' +
              '.script-cycle>*{opacity:0;filter:none;transform:none}' +
              '.script-cycle>:last-child{opacity:1}',
          }}
        />
      </noscript>

      <div className="arch-stage">
        {/* Beyond the doorway: the room itself, held back in the dark until the
            reader is nearly through the stone. */}
        <div className="arch-room" aria-hidden="true">
          <Image
            src="/brand/dining-floor.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[42%_48%]"
          />
          {/* The room is deepest at the moment it first shows through the
              opening, and lifts as the reader arrives in it. */}
          <div className="arch-scrim" />
        </div>

        <div className="arch-glow" aria-hidden="true" />
        <div className="arch-pool" aria-hidden="true" />

        {/* The words, sitting in the opening. They are behind the stone in the
            stacking order, which is what puts them inside the arch rather than
            on top of it. */}
        <div className="arch-content">
          {/* The name alone in the opening. The emblem is already on the board
              directly above it, and a second one here reads as a speck rather
              than a mark. */}
          {/* Four states under one roof, said the shortest way there is: the
              same name in each of their scripts, arriving at English last. All
              readings share one grid cell, so the name is one unbreakable
              object as wide as its widest script. A portrait viewport gets a
              size that fits that whole rather than one that would run off the
              side of the phone. */}
          <h1 className="arch-in-name font-display text-[2.4em] font-semibold leading-[0.94] tracking-[-0.035em] text-bone-100 md:text-[4.2em]">
            <ScriptCycle readings={BRAND.nameInScripts} latin={BRAND.name} />
          </h1>

          {/* Held to a short measure on a portrait screen so it breaks into
              lines that stand inside the opening, rather than one long line
              running out across both pillars. */}
          <p className="arch-in-line mx-auto mt-[0.9em] max-w-[24ch] text-balance md:max-w-[32ch] font-display text-[1.55em] font-normal leading-[1.3] tracking-[-0.02em] text-bone-300">
            Four states of South India, under{" "}
            <span className="text-brass-400">one roof</span>.
          </p>

          <div className="arch-in-act mt-[2.2em] flex flex-col items-center justify-center gap-[1em] sm:flex-row sm:gap-[2em]">
            <Link
              href="/menu"
              className="label group relative inline-flex items-center justify-center overflow-hidden bg-bone-100 px-[2.6em] py-[1.4em] text-[0.66em] text-ink-900"
            >
              <span className="absolute inset-0 -translate-x-full bg-brass-400 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
              <span className="relative">Read the menu</span>
            </Link>
            <Link
              href="/locations"
              className="label link-brass inline-flex shrink-0 items-center gap-[0.6em] whitespace-nowrap py-[1.4em] text-[0.66em] text-bone-300"
            >
              Find an outlet
              <Mark name="arrowRight" size={13} className="text-brass-400" />
            </Link>
          </div>

          {/* The opening, stated once and quietly. It was a struck brass plate
              before, which is a lot of furniture to put beside a doorway. */}
          <p className="arch-in-mark mt-[2.4em] text-[0.78em] leading-relaxed text-bone-300">
            <span className="text-brass-300">
              {preOpening ? "Opening" : "Now open"}
            </span>
            <span aria-hidden="true" className="mx-[0.7em] text-brass-500">
              &middot;
            </span>
            {OPENING.outlet}, {OPENING.city}
            <span aria-hidden="true" className="mx-[0.7em] text-brass-500">
              &middot;
            </span>
            {preOpening && days > 0 ? (
              <>
                {OPENING.dateLabel}
                <span aria-hidden="true" className="mx-[0.7em] text-brass-500">
                  &middot;
                </span>
                <span className="data text-brass-300">{days}</span>
                {days === 1 ? " day to go" : " days to go"}
              </>
            ) : (
              OPENING.dateLabel
            )}
          </p>
        </div>

        {/* The stone. */}
        <Image
          src="/brand/torana-arch.webp"
          alt="A carved stone torana, its opening facing the reader"
          width={2600}
          height={2491}
          priority
          sizes="(max-width: 767px) 210vw, 140vw"
          className="arch-frame"
        />

        {/* Over the stone, because at the middle of the passage the stone is
            the brightest thing under the lettering. */}
        <div className="arch-veil" aria-hidden="true" />

        <div className="arch-cue absolute inset-x-0 bottom-6 flex flex-col items-center gap-3">
          <span className="label text-[0.625rem] text-bone-500">Scroll</span>
          <span
            aria-hidden="true"
            className="h-10 w-px bg-[linear-gradient(180deg,rgba(201,162,39,0.7)_0%,rgba(201,162,39,0)_100%)]"
          />
        </div>
      </div>
    </section>
  );
}
