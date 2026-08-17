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
 * The invisible state is treated as a hazard, not a default. Four things make
 * it impossible for content to get stranded:
 *
 *  1. showing an element REMOVES its armed attribute, so the hidden rule can no
 *     longer match it whatever happens later;
 *  2. the scan re-runs whenever the DOM changes, so revealable content rendered
 *     by a client component after this effect has already run still gets armed,
 *     observed and shown. Without this, anything a client component renders
 *     below the fold is armed by the first scan and then never observed, and it
 *     stays at opacity 0 forever;
 *  3. a failsafe sweep shows anything still armed once the page has settled,
 *     which covers a dropped observer callback. It re-queries the document
 *     rather than trusting a snapshot taken at mount;
 *  4. the sweep also runs on resize and on load, which covers a viewport change
 *     or a late layout shift that brings everything into view at once.
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const show = (el: HTMLElement) => {
      el.dataset.shown = "true";
      delete el.dataset.armed;
    };

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

    /**
     * Arm anything not yet shown, show whatever is already in the opening
     * view, and observe the rest.
     *
     * The selector deliberately keys off `data-shown` alone and NOT off
     * `data-armed`. This effect can run more than once for the same DOM: React
     * invokes it twice in development, and a route change re-runs it. On the
     * second run every element is already armed, so a scan that skipped armed
     * nodes would find nothing to observe and would leave every below the fold
     * element stuck at opacity 0 behind a disconnected observer. Re-observing a
     * node that is already observed is a no-op, so scanning wide is safe and
     * self healing, and only `data-shown` is allowed to end the cycle.
     */
    const scan = () => {
      const viewportH = window.innerHeight;
      const nodes = document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not([data-shown])",
      );
      for (const node of nodes) {
        node.dataset.armed = "true";
        if (node.getBoundingClientRect().top < viewportH * 0.92) {
          show(node);
        } else {
          observer.observe(node);
        }
      }
    };

    /**
     * Anything armed and already within reach of the viewport is shown.
     *
     * This is what covers content the observer cannot reach on its own: a card
     * parked off screen horizontally inside a snap rail is vertically in view
     * but never intersects, so without this it stays at opacity 0 until the
     * reader happens to drag the rail. Showing it here still plays the arrival,
     * because the stagger lives in each element's `--reveal-delay`.
     */
    const sweep = () => {
      const h = window.innerHeight;
      const armed = document.querySelectorAll<HTMLElement>(
        '[data-reveal][data-armed="true"]',
      );
      for (const node of armed) {
        if (node.getBoundingClientRect().top < h) {
          show(node);
          observer.unobserve(node);
        }
      }
    };

    let sweepQueued = 0;
    const queueSweep = () => {
      if (sweepQueued) return;
      sweepQueued = window.requestAnimationFrame(() => {
        sweepQueued = 0;
        sweep();
      });
    };

    scan();

    // Client components mount their subtrees after this effect has run, so the
    // scan has to follow the DOM rather than only sample it once.
    let queued = 0;
    const mutations = new MutationObserver(() => {
      if (queued) return;
      queued = window.requestAnimationFrame(() => {
        queued = 0;
        scan();
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    const settle = window.setTimeout(sweep, 1200);
    window.addEventListener("resize", queueSweep, { passive: true });
    window.addEventListener("scroll", queueSweep, { passive: true });
    window.addEventListener("load", sweep);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      if (queued) window.cancelAnimationFrame(queued);
      if (sweepQueued) window.cancelAnimationFrame(sweepQueued);
      window.clearTimeout(settle);
      window.removeEventListener("resize", queueSweep);
      window.removeEventListener("scroll", queueSweep);
      window.removeEventListener("load", sweep);
    };
  }, [pathname]);

  return <>{children}</>;
}
