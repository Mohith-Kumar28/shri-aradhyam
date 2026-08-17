"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-compact={compact ? "true" : "false"}
      className="sticky top-0 z-50"
    >
      {/* Masthead line: the announcement, stated the way an almanac states a date. */}
      <div
        className="overflow-hidden bg-ink-800 text-bone-300 transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
      <div className="relative bg-bone-100/97 backdrop-blur-[2px]">
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
              className="label group relative overflow-hidden border border-ink-700 px-6 py-3.5 text-[0.625rem] text-ink-800 transition-colors duration-700 hover:text-bone-100"
            >
              <span className="absolute inset-0 -translate-y-full bg-ink-800 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
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
          className="absolute inset-x-0 top-full"
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
