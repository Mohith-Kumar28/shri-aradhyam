"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Arms the reveal system after hydration.
 *
 * Everything is visible in the server HTML. Only once JS is running do we hide
 * the elements that are still below the fold and let them arrive. A visitor
 * with JS off, or with reduced motion on, gets the whole page immediately.
 *
 * The invisible state is treated as a hazard, not a default. Three things make
 * it impossible for content to get stranded:
 *
 *  1. showing an element REMOVES its armed attribute, so the hidden rule can no
 *     longer match it whatever happens later;
 *  2. a failsafe sweep unarms anything still armed once the page has settled,
 *     which covers a dropped observer callback;
 *  3. the sweep also runs on resize, which covers a viewport change large
 *     enough to bring everything into view at once.
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const show = (el: HTMLElement) => {
      el.dataset.shown = "true";
      delete el.dataset.armed;
    };

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).filter((n) => n.dataset.shown !== "true");

    const viewportH = window.innerHeight;

    for (const node of nodes) {
      node.dataset.armed = "true";
      // Already in the opening view: let it arrive at once rather than waiting
      // for a scroll that may never come.
      if (node.getBoundingClientRect().top < viewportH * 0.92) show(node);
    }

    const pending = nodes.filter((n) => n.dataset.shown !== "true");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    for (const node of pending) observer.observe(node);

    /** Anything armed and already within reach of the viewport is shown. */
    const sweep = () => {
      const h = window.innerHeight;
      for (const node of pending) {
        if (node.dataset.armed !== "true") continue;
        if (node.getBoundingClientRect().top < h) {
          show(node);
          observer.unobserve(node);
        }
      }
    };

    const settle = window.setTimeout(sweep, 1200);
    window.addEventListener("resize", sweep, { passive: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(settle);
      window.removeEventListener("resize", sweep);
    };
  }, [pathname]);

  return <>{children}</>;
}
