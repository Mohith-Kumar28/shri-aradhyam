import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FRANCHISE_TERMS,
  FRANCHISE_SUPPORT,
  FRANCHISE_LOOKING_FOR,
  FRANCHISE_STEPS,
  FRANCHISE_FAQ,
  CONTACT,
  TBD,
} from "@/lib/site-data";
import { EnquiryForm } from "@/components/franchise/enquiry-form";
import { FaqRegister } from "@/components/franchise/faq-register";
import {
  JaaliBand,
  RuleDiamond,
  LotusRoundel,
  Corbel,
  Mark,
} from "@/components/site/ornament";

export const metadata: Metadata = {
  title: "Unit Franchise | Shri Aradhyam",
  description:
    "Open a Shri Aradhyam unit franchise: the format, what comes with the unit, what we look for in a partner, the process from enquiry to opening, and the enquiry form.",
};

export default function FranchisePage() {
  return (
    <>
      {/* Page head */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <Image
          src="/brand/storefront.webp"
          alt="The Shri Aradhyam storefront with brass signage under a carved stone eave"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_42%] opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(96deg,rgba(31,17,9,0.95)_0%,rgba(31,17,9,0.78)_46%,rgba(31,17,9,0.45)_100%)]"
        />
        <JaaliBand className="absolute inset-x-0 bottom-0 opacity-22" height={40} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-44">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <LotusRoundel className="text-brass-500" size={40} />
              <h1 className="mt-8 max-w-[22ch] font-display text-[clamp(2.5rem,6.2vw,4.75rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-bone-100">
                A unit franchise, one outlet at a time.
              </h1>
              <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-relaxed text-bone-400">
                Shri Aradhyam is a pure vegetarian South Indian format built on a
                rotation that no competitor can copy without rebuilding their
                kitchen. We are opening franchise owned and franchise operated
                units to partners who will run them personally.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                <Link
                  href="#enquiry"
                  className="label group relative inline-flex items-center justify-center overflow-hidden bg-brass-500 px-8 py-4.5 text-[0.625rem] text-ink-900"
                >
                  <span className="absolute inset-0 -translate-x-full bg-brass-300 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                  <span className="relative">Send an enquiry</span>
                </Link>
                <Link
                  href="#terms"
                  className="label link-brass inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap py-4.5 text-[0.625rem] text-bone-300"
                >
                  See the format
                  <Mark name="arrowDown" size={14} className="text-brass-400" />
                </Link>
              </div>
            </div>

            {/* The one thing a franchisee is buying. */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border border-brass-500/40 bg-ink-800/70 px-8 py-9 backdrop-blur-[2px]">
                <div className="rule-bottom flex items-baseline justify-between gap-4 border-brass-500/35 pb-3">
                  <p className="font-display text-[1.6rem] leading-tight text-bone-100">
                    Unit Franchise
                  </p>
                  <p className="label text-[0.625rem] text-brass-400">The format</p>
                </div>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-bone-400">
                  Franchise owned, franchise operated. Exclusive catchment agreed
                  at signing.
                </p>
                <span aria-hidden="true" className="my-6 block h-px w-full bg-brass-500/30" />
                <p className="text-[0.9375rem] leading-relaxed text-bone-400">
                  Commercials are shared after the location study, because fit out
                  cost moves with the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms register. Every unconfirmed number is a visible blank. */}
      <section id="terms" className="relative bg-bone-200 py-24 sm:py-32">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                The commercial sheet.
              </h2>
              <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-granite-500">
                We publish the structure and hold the numbers until we have seen
                your site. Nothing on this page is an estimate dressed as a fact.
              </p>
              <p className="label mt-8 inline-block border border-kumkum-600/45 px-4 py-3 text-[0.625rem] leading-relaxed text-kumkum-700">
                Values marked {TBD} are pending from the brand owner
              </p>
            </div>

            <div className="lg:col-span-7">
              <dl className="rule-top rule-brass">
                {FRANCHISE_TERMS.map((row, i) => (
                  <div
                    key={row.term}
                    data-reveal="rule"
                    style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                    className="rule-bottom grid grid-cols-[1fr_1.3fr] items-baseline gap-6 py-5"
                  >
                    <dt className="label text-[0.625rem] text-granite-500">
                      {row.term}
                    </dt>
                    <dd
                      className={`text-[1.0625rem] leading-snug ${
                        row.confirmed ? "text-ink-800" : "text-granite-400"
                      }`}
                    >
                      {row.confirmed ? (
                        row.value
                      ) : (
                        <span className="flex flex-wrap items-baseline gap-2">
                          <span
                            aria-hidden="true"
                            className="inline-block h-[1px] w-14 translate-y-[-0.2em] bg-granite-400"
                          />
                          <span className="label text-[0.625rem] text-kumkum-600">
                            {row.value}
                          </span>
                          {row.unit && (
                            <span className="label text-[0.625rem] text-granite-400">
                              {row.unit}
                            </span>
                          )}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Why the format holds. */}
      <section className="relative overflow-hidden bg-ink-800 py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="jaali jaali-brass absolute inset-y-0 right-0 w-[24vw] opacity-[0.16]"
        />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-bone-100">
                What you are actually buying.
              </h2>
            </div>
            <div className="space-y-7 text-[1.0625rem] leading-[1.78] text-bone-400 lg:col-span-6 lg:col-start-7">
              <p>
                Most South Indian formats compete on the same twelve dishes, so
                they end up competing on price and on speed. A rotation changes
                the question. A guest who came on Tuesday has a reason to come
                back on Friday, because Friday is a different kitchen.
              </p>
              <p>
                That is harder to run, which is the point. It needs a written
                calendar, trained hands and a supply chain that can put Byadagi
                chilli and gongura leaf in the same week. We have built all
                three, and a franchisee inherits them rather than inventing them.
              </p>
              <p>
                The kitchen is pure vegetarian without exception, which keeps the
                format open to the whole family, to festivals, and to every
                catchment in the south.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What comes with the unit. */}
      <section className="relative bg-bone-100 py-24 sm:py-32">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="max-w-[24ch] font-display text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            What comes with the unit.
          </h2>

          <div className="mt-14">
            {FRANCHISE_SUPPORT.map((item, i) => (
              <article
                key={item.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="rule-top grid gap-5 py-9 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-1" aria-hidden="true">
                  <span className="mt-3 block h-1.5 w-1.5 rotate-45 bg-brass-500" />
                </div>
                <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink-800 lg:col-span-4">
                  {item.title}
                </h3>
                <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-granite-500 lg:col-span-7">
                  {item.line}
                </p>
              </article>
            ))}
            <div className="rule-top" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Who we look for, on granite. */}
      <section className="granite relative py-24 sm:py-32">
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <h2 className="max-w-[22ch] font-display text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-bone-100">
            Who we are looking for.
          </h2>

          <div className="mt-14 grid gap-x-12 gap-y-0 lg:grid-cols-2">
            {FRANCHISE_LOOKING_FOR.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="border-t border-bone-300/25 py-8"
              >
                <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-bone-100">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[1.0625rem] leading-relaxed text-bone-300">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The process, as a stepped rail. */}
      <section className="relative bg-bone-200 py-24 sm:py-32">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              From enquiry to opening.
            </h2>
            <p className="max-w-[34ch] text-[1.0625rem] leading-relaxed text-granite-500">
              Six steps. We are on site for the launch week and the first full
              rotation cycle.
            </p>
          </div>

          <ol className="mt-16 grid gap-y-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {FRANCHISE_STEPS.map((step, i) => (
              <li
                key={step.step}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="relative border-t border-bone-400 py-8 lg:pr-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[3px] left-0 h-[5px] w-[5px] rotate-45 bg-kumkum-600"
                />
                <p className="data text-[0.625rem] text-brass-700">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-[1.5rem] leading-tight tracking-[-0.02em] text-ink-800">
                  {step.step}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[1.0625rem] leading-relaxed text-granite-500">
                  {step.line}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Questions */}
      <section className="relative bg-bone-100 py-24 sm:py-32">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Questions we are asked.
              </h2>
              <Corbel className="mt-10 hidden h-16 w-9 text-bone-400 lg:block" />
            </div>
            <div className="lg:col-span-8">
              <FaqRegister items={FRANCHISE_FAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* The form */}
      <section id="enquiry" className="relative overflow-hidden bg-bone-300 py-24 sm:py-32">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[72rem] px-5 sm:px-8">
          <RuleDiamond className="mx-auto max-w-sm" />
          <h2 className="mx-auto mt-10 max-w-[24ch] text-center font-display text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Tell us about your city.
          </h2>
          <p className="mx-auto mt-6 max-w-[54ch] text-center text-[1.0625rem] leading-relaxed text-granite-500">
            The more you can tell us about the catchment and the site, the more
            useful our first reply will be.
          </p>

          <div className="mt-14">
            <EnquiryForm />
          </div>

          {/* Office */}
          <div className="mt-16 grid gap-8 text-center sm:grid-cols-3 sm:text-left">
            <div>
              <p className="label text-[0.625rem] text-granite-400">Franchise desk</p>
              <a
                href={`mailto:${CONTACT.franchiseEmail}`}
                className="link-brass mt-2 inline-block text-[1.0625rem] text-ink-700"
              >
                {CONTACT.franchiseEmail}
              </a>
            </div>
            <div>
              <p className="label text-[0.625rem] text-granite-400">Telephone</p>
              <p className="data mt-2 text-[1.0625rem] text-ink-700">
                {CONTACT.phone}
              </p>
            </div>
            <div>
              <p className="label text-[0.625rem] text-granite-400">Office</p>
              <address className="mt-2 text-[0.9375rem] not-italic leading-relaxed text-granite-500">
                {CONTACT.office.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
