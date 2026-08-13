import Link from "next/link";
import { BRAND, CONTACT, NAV, STATES } from "@/lib/site-data";
import { LotusRoundel, JaaliBand, Corbel } from "./ornament";

/**
 * The colophon. An almanac closes by saying who printed it and where, so the
 * footer is a printer's imprint rather than a sitemap dump.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-800 text-bone-300">
      <JaaliBand className="absolute inset-x-0 top-0 opacity-25" height={40} />

      <div className="relative mx-auto max-w-[88rem] px-5 pb-14 pt-24 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr_1fr]">
          {/* Imprint */}
          <div>
            <div className="flex items-center gap-4">
              <LotusRoundel className="text-brass-500" size={44} />
              <div className="leading-tight">
                <p className="kn font-display text-2xl text-bone-100" lang="kn">
                  {BRAND.nameKannada}
                </p>
                <p className="font-display text-xl tracking-[-0.02em] text-bone-200">
                  {BRAND.name}
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
              <span className="kn" lang="kn">
                {BRAND.devotionKannada}
              </span>
              <span className="mx-2 text-granite-400">/</span>
              {BRAND.devotion}
            </p>
          </div>

          {/* Pages and states */}
          <div className="grid gap-12 sm:grid-cols-2 lg:contents">
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

            <div>
              <p className="label rule-bottom border-bone-500/30 pb-3 text-[0.625rem] text-bone-500">
                Five states
              </p>
              <ul className="mt-5 space-y-3.5">
                {STATES.map((state) => (
                  <li key={state.name} className="text-[0.9375rem] text-bone-300">
                    <span className={`${state.script} text-brass-400`} lang={state.script}>
                      {state.native}
                    </span>
                    <span className="ml-2.5 text-bone-400">{state.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact, ruled like a register footer */}
        <div className="rule-top mt-20 grid gap-8 border-bone-500/25 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label text-[0.625rem] text-bone-500">Kitchen hours</p>
            <p className="mt-2.5 text-[0.9375rem] text-bone-200">
              All seven days
            </p>
            <p className="mt-1 text-sm text-bone-500">Times to be confirmed</p>
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
          <div>
            <p className="label text-[0.625rem] text-bone-500">Franchise</p>
            <a
              href={`mailto:${CONTACT.franchiseEmail}`}
              className="link-brass mt-2.5 block text-[0.9375rem] text-bone-200"
            >
              {CONTACT.franchiseEmail}
            </a>
          </div>
          <div>
            <p className="label text-[0.625rem] text-bone-500">Office</p>
            <address className="mt-2.5 text-sm not-italic leading-relaxed text-bone-400">
              {CONTACT.office.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="rule-top mt-12 flex flex-col gap-4 border-bone-500/25 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-[0.625rem] text-bone-500">
            &copy; {new Date().getFullYear()} {BRAND.name} &nbsp;&middot;&nbsp; One hundred percent pure vegetarian
          </p>
          <p className="label text-[0.625rem] text-bone-500">
            Bengaluru, Karnataka
          </p>
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
