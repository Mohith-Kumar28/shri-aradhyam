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
  className,
  nativeClassName,
  latinClassName,
}: {
  native: string;
  latin: string;
  script: ScriptKey;
  mode?: "settle" | "hover";
  delay?: number;
  className?: string;
  nativeClassName?: string;
  latinClassName?: string;
}) {
  const holder = useRef<HTMLSpanElement>(null);
  const [flipped, setFlipped] = useState(false);

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
    <span ref={holder} className={`morph-holder ${className ?? ""}`} tabIndex={0}>
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
