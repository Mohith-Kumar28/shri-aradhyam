import Link from "next/link";
import { BRAND, CONTACT, LOCATIONS, NAV, OPENING } from "@/lib/site-data";
import { Corbel, JaaliBand, LotusRoundel } from "./ornament";
import { ScriptMorph } from "./script-morph";
import { SWAP } from "./site-header";

/**
 * The colophon. A printer's imprint rather than a sitemap dump: who cooks,
 * where, in which four states' scripts, and how to reach the house.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-800 text-bone-300">
      <JaaliBand className="absolute inset-x-0 top-0 opacity-25" height={40} />

      <div className="relative mx-auto max-w-[88rem] px-5 pb-14 pt-24 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          {/* Imprint */}
          <div>
            <div className="flex items-center gap-4">
              <LotusRoundel className="text-brass-500" size={44} />
              <div className="leading-tight">
                <p className="font-display text-2xl tracking-[-0.02em] text-bone-100">
                  <ScriptMorph
                    native={BRAND.nameKannada}
                    latin={BRAND.name}
                    script="kn"
                    mode="cycle"
                    interval={SWAP}
                  />
                </p>
              </div>
            </div>

            <p className="label mt-7 text-[0.625rem] text-brass-500">
              {BRAND.tagline}
            </p>

            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-bone-400">
              {BRAND.meaning}
            </p>

            <p className="mt-8 text-sm text-bone-500">
              <ScriptMorph
                native={BRAND.devotionKannada}
                latin={BRAND.devotion}
                script="kn"
                mode="cycle"
                interval={SWAP}
              />
            </p>
          </div>

          {/* Pages and states */}
          <div className="lg:justify-self-end">
            <nav aria-label="Footer">
              <p className="label rule-bottom border-bone-500/30 pb-3 text-[0.625rem] text-bone-500">
                Pages
              </p>
              <ul className="mt-5 space-y-3.5">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-brass text-[0.9375rem] text-bone-300 transition-colors duration-500 hover:text-bone-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>

        {/* The register footer: opening, the outlet that follows, and the one
            mailbox. */}
        <div className="rule-top mt-20 grid gap-8 border-bone-500/25 pt-10 sm:grid-cols-3">
          <div>
            <p className="label text-[0.625rem] text-bone-500">Opening</p>
            <p className="mt-2.5 text-[0.9375rem] text-bone-200">
              <span className="kn" lang="kn">
                {OPENING.outletNative}
              </span>
              <span className="mx-1.5 text-bone-500">/</span>
              {OPENING.outlet}, {OPENING.city}
            </p>
            <p className="mt-1 text-sm text-bone-500">{OPENING.dateLabel}</p>
          </div>
          <div>
            <p className="label text-[0.625rem] text-bone-500">Next</p>
            <p className="mt-2.5 text-[0.9375rem] text-bone-200">
              {LOCATIONS[1].name}, {OPENING.city}
            </p>
            <p className="mt-1 text-sm text-bone-500">{LOCATIONS[1].status}</p>
          </div>
          <div>
            <p className="label text-[0.625rem] text-bone-500">Enquiries</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-brass mt-2.5 block text-[0.9375rem] text-bone-200"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="rule-top mt-12 flex flex-col gap-4 border-bone-500/25 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-[0.625rem] text-bone-500">
            &copy; {new Date().getFullYear()} {BRAND.name}
            &nbsp;&middot;&nbsp; One hundred percent pure vegetarian
          </p>
          <p className="label text-[0.625rem] text-bone-500">{CONTACT.city}</p>
        </div>
      </div>

      {/* Corbels holding up the closing edge, as under the awning. */}
      <div className="relative flex justify-between px-4 text-ink-900/70" aria-hidden="true">
        <Corbel className="h-8 w-5" />
        <Corbel className="h-8 w-5" flip />
      </div>
    </footer>
  );
}
