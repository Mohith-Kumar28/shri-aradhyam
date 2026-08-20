"use client";

import { useEffect, useRef, useState } from "react";
import type { ScriptKey } from "@/lib/site-data";

const LANG: Record<ScriptKey, string> = {
  kn: "kn",
  ta: "ta",
  te: "te",
  ml: "ml",
};

/**
 * One slot, two readings.
 *
 * The Indic script is the resting state. In "settle" mode the word arrives in
 * its own script and then resolves into Latin a beat later, which is the whole
 * argument of the brand in one gesture. Hovering brings the script back.
 * In "hover" mode the script stays and the Latin reading is on demand.
 * In "cycle" mode the two readings trade places on a slow interval, so the
 * signage says the name in both languages the way the building does. It holds
 * each reading long enough to be read, and stops for reduced motion.
 *
 * Both readings stay in the DOM with correct lang attributes, so the meaning
 * never depends on the animation.
 */
export function ScriptMorph({
  native,
  latin,
  script,
  mode = "settle",
  delay = 1100,
  interval = 10_000,
  className,
  nativeClassName,
  latinClassName,
}: {
  native: string;
  latin: string;
  script: ScriptKey;
  mode?: "settle" | "hover" | "cycle";
  delay?: number;
  /** Cycle mode only: how long each reading is held, in milliseconds. */
  interval?: number;
  className?: string;
  nativeClassName?: string;
  latinClassName?: string;
}) {
  const holder = useRef<HTMLSpanElement>(null);

  /* Cycle mode opens on the Latin reading: it is the one every visitor can
     read, and the script arriving after it is the gesture worth having. */
  const [flipped, setFlipped] = useState(mode === "cycle");

  useEffect(() => {
    if (mode !== "cycle") return;

    // Nothing here is load bearing, so an opt out simply leaves the Latin
    // reading standing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(
      () => setFlipped((was) => !was),
      Math.max(2000, interval),
    );
    return () => window.clearInterval(timer);
  }, [mode, interval]);

  useEffect(() => {
    if (mode !== "settle") return;

    const node = holder.current;
    if (!node) return;

    // Reduced motion is handled in CSS, which locks a settling word to its
    // Latin reading without a render pass.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          timer = window.setTimeout(() => setFlipped(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, [mode, delay]);

  return (
    <span
      ref={holder}
      className={`morph-holder ${className ?? ""}`}
      tabIndex={mode === "hover" ? 0 : undefined}
    >
      <span
        className="morph"
        data-mode={mode}
        data-flipped={flipped ? "true" : "false"}
      >
        <span
          className={`morph-native ${script} ${nativeClassName ?? ""}`}
          lang={LANG[script]}
        >
          {native}
        </span>
        <span className={`morph-latin ${latinClassName ?? ""}`} lang="en">
          {latin}
        </span>
      </span>
    </span>
  );
}
