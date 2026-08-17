"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV, BRAND, OPENING } from "@/lib/site-data";
import { LotusRoundel, EaveCourse, Mark } from "./ornament";
import { ScriptMorph } from "./script-morph";

export function HeaderShell({
  preOpening,
  daysUntilOpening,
}: {
  preOpening: boolean;
  daysUntilOpening: number;
}) {
  const [compact, setCompact] = useState(false);
  const [over, setOver] = useState(false);
  const [open, setOpen] = useState(false);
  const shell = useRef<HTMLElement>(null);

  /**
   * The board publishes its own height.
   *
   * A hero that wants to run full bleed behind the board has to know how far to
   * reach up under it, and the board's height is not a constant: the masthead
   * collapses on scroll and the lettering reflows. Measuring it here and
   * writing it to the root means nothing downstream has to guess, or go stale
   * when this component's padding is next edited.
   */
  useEffect(() => {
    const el = shell.current;
    if (!el) return;

    /**
     * Only the full height is ever published. The compact height is a
     * transient the board passes through on the way down, and republishing it
     * would drag anything anchored to this value along with the scroll.
     */
    let last = 0;
    const publish = () => {
      if (el.dataset.compact === "true") return;
      const h = el.getBoundingClientRect().height;

      // The masthead collapses over 700ms, so the observer fires on every frame
      // of that transition. Writing to the root each time invalidates style for
      // the whole document sixty times a second, which is felt as a stutter in
      // whatever is scrolling. Only a real change is worth publishing.
      if (Math.abs(h - last) < 0.5) return;
      last = h;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    /**
     * A signage board in bone is right against the page, and wrong against a
     * hero that is meant to be an unlit hall with one lit doorway in it. So the
     * board drops its ground and reads in bone for as long as something dark is
     * passing behind it.
     *
     * Measured off the element rather than a remembered viewport multiple, so
     * it stays correct whatever the hero's height turns out to be.
     */
    let dark: Element | null = null;
    let frame = 0;

    const measure = () => {
      frame = 0;

      /**
       * Two thresholds, not one.
       *
       * Collapsing the masthead removes 3rem from a header that is in flow, so
       * everything below it moves up, and the scroll position moves with it. A
       * single threshold means a slow scroll parked near it gets flipped back
       * across it by its own collapse, and the board oscillates. The gap
       * between 80 and 24 is wider than the height it gives up, so it cannot
       * chase itself back over the line.
       */
      setCompact((was) => (was ? window.scrollY > 24 : window.scrollY > 80));

      // Re-queried only when the cached node has left the document, which is
      // what a client side route change does to it.
      if (!dark?.isConnected) dark = document.querySelector(".arch-hero");
      setOver(!!dark && dark.getBoundingClientRect().bottom > 80);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      ref={shell}
      data-compact={compact ? "true" : "false"}
      data-over={over ? "true" : "false"}
      className="sticky top-0 z-50"
    >
      {/* Masthead line: the announcement, stated the way an almanac states a date. */}
      <div
        className="masthead overflow-hidden bg-ink-800 text-bone-300 transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: compact ? 0 : "3rem",
          opacity: compact ? 0 : 1,
        }}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
          <p className="label flex items-center gap-2.5 text-[0.625rem] text-bone-400">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-brass-500" />
            {preOpening ? (
              <>
                <span className="text-bone-300">Opening</span>
                <span className="text-brass-400">
                  <span className="kn" lang="kn">
                    {OPENING.outletNative}
                  </span>
                  <span className="mx-1.5 text-bone-500">/</span>
                  {OPENING.outlet}, {OPENING.city}
                </span>
                <span className="hidden text-bone-500 sm:inline">
                  {OPENING.dateLabel}
                </span>
              </>
            ) : (
              <>
                <span className="text-bone-300">Now open</span>
                <span className="text-brass-400">
                  {OPENING.outlet}, {OPENING.city}
                </span>
              </>
            )}
          </p>
          <p className="label hidden text-[0.625rem] text-bone-500 md:block">
            {preOpening && daysUntilOpening > 0 ? (
              <>
                <span className="data text-bone-400">{daysUntilOpening}</span>
                {daysUntilOpening === 1 ? " day to go" : " days to go"}
                &nbsp;&middot;&nbsp;
              </>
            ) : null}
            Pure vegetarian
          </p>
        </div>
      </div>

      {/* The signage band. */}
      <div className="signage relative bg-bone-100/97 backdrop-blur-[2px]">
        <div
          className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8"
          style={{ paddingTop: compact ? "0.7rem" : "1.15rem", paddingBottom: compact ? "0.7rem" : "1.15rem" }}
        >
          <Link href="/" className="group flex items-center gap-3.5">
            <LotusRoundel className="shrink-0 text-ink-700 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[-8deg]" size={compact ? 34 : 40} />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-ink-800 sm:text-[1.5rem]">
                <ScriptMorph
                  native={BRAND.nameKannada}
                  latin={BRAND.name}
                  script="kn"
                  mode="settle"
                  delay={1500}
                />
              </span>
              <span className="label mt-1.5 hidden text-[0.625rem] text-granite-500 sm:block">
                Four states &middot; One roof
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label link-brass text-[0.6875rem] text-ink-700 transition-colors duration-500 hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/franchise#enquiry"
              className="btn-frame label group relative overflow-hidden border border-ink-700 px-6 py-3.5 text-[0.625rem] text-ink-800 transition-colors duration-700 hover:text-bone-100"
            >
              <span className="btn-fill absolute inset-0 -translate-y-full bg-ink-800 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative">Open a franchise</span>
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="label flex items-center gap-2 border border-bone-400 px-4 py-3 text-[0.625rem] text-ink-700 lg:hidden"
            aria-label="Open menu"
          >
            <Mark name="menu" size={14} />
            Menu
          </button>
        </div>

        {/* The awning edge. The header hangs like the storefront eave. */}
        <EaveCourse
          className="eave-line absolute inset-x-0 top-full"
          height={compact ? 11 : 15}
          color="#3a2318"
        />
      </div>

      {/* Mobile sheet, built in the same material rather than a stock drawer. */}
      <div
        className="fixed inset-0 z-60 lg:hidden"
        style={{ pointerEvents: open ? "auto" : "none" }}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-ink-900/55 transition-opacity duration-700"
          style={{ opacity: open ? 1 : 0 }}
        />
        <div
          className="paper absolute right-0 top-0 h-full w-[min(21rem,88vw)] overflow-y-auto bg-bone-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="jaali jaali-brass absolute inset-y-0 left-0 w-8 opacity-70" />
          <div className="relative px-8 py-8">
            <div className="flex items-center justify-between">
              <LotusRoundel className="text-ink-700" size={34} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="label flex items-center gap-2 text-[0.625rem] text-granite-500"
                aria-label="Close menu"
              >
                Close
                <Mark name="close" size={14} />
              </button>
            </div>

            <p className="label mt-10 text-[0.625rem] text-brass-700">
              {preOpening ? "Opening" : "Now open"} &middot; {OPENING.outlet},{" "}
              {OPENING.city}
            </p>

            <nav className="mt-6 flex flex-col" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rule-bottom py-5 font-display text-2xl text-ink-800"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/franchise#enquiry"
              onClick={() => setOpen(false)}
              className="label mt-8 block bg-ink-800 px-6 py-4.5 text-center text-[0.625rem] text-bone-100"
            >
              Open a franchise
            </Link>

            <p className="mt-10 text-sm text-granite-500">
              <span className="kn" lang="kn">
                {BRAND.devotionKannada}
              </span>
              <br />
              {BRAND.devotion}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
