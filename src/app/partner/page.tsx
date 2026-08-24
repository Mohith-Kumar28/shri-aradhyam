import type { Metadata } from "next";
import { BRAND, CONTACT, LOCATIONS, OPENING, PARTNER } from "@/lib/site-data";
import { EnquiryForm } from "@/components/partner/enquiry-form";
import {
  Corbel,
  Diamond,
  EaveCourse,
  JaaliBand,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Partner With Us",
  path: "/partner",
  description:
    "Partner with Shri Aradhyam as we open more South Indian vegetarian kitchens across Bengaluru — the fit out standard, the audited recipe cards, counter and griddle training, and the supply chain.",
  keywords: [
    "restaurant franchise Bengaluru",
    "South Indian restaurant partnership",
    "food business opportunity Bangalore",
  ],
});

const WITH_US = [
  "The kitchen, the drawings and the fit out standard",
  "The recipe cards, audited like the brand they are",
  "Training for the counter and the griddle",
  "Supply chain and the coffee",
];

export default function PartnerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Partner With Us", path: "/partner" }])} />
      <section
        className="hero-dark relative isolate overflow-hidden bg-ink-900"
        style={{ marginTop: "calc(var(--header-h, 6.9rem) * -1)", zIndex: 0 }}
      >
        <div
          aria-hidden="true"
          className="jaali jaali-brass absolute inset-0 opacity-[0.16]"
        />
        <div style={{ height: "var(--header-h, 6.9rem)" }} aria-hidden="true" />
        <Thoranam className="relative opacity-75" height={28} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h1 className="display-caps text-[clamp(2rem,4.6vw,3.4rem)] font-semibold text-bone-100">
                {PARTNER.heading}
              </h1>
              <p className="mt-7 max-w-[44ch] text-[1.0625rem] leading-relaxed text-bone-400">
                {PARTNER.line}
              </p>
              <p className="mt-8 text-[0.9375rem] text-bone-500">
                <span className="kn" lang="kn">
                  {BRAND.devotionKannada}
                </span>
                <span className="mx-2 text-granite-400">/</span>
                {BRAND.devotion}
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <p className="label rule-bottom border-bone-500/30 pb-3 text-[0.625rem] text-brass-500">
                What comes with a kitchen
              </p>
              <ul>
                {WITH_US.map((item, i) => (
                  <li
                    key={item}
                    data-reveal="rule"
                    style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                    className="rule-bottom flex items-baseline gap-5 border-bone-500/22 py-4"
                  >
                    <Diamond className="mt-2 shrink-0 text-brass-500" size={6} />
                    <span className="text-[1.0625rem] leading-snug text-bone-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <EaveCourse
          className="absolute inset-x-0 bottom-0"
          height={16}
          color="#f2eadc"
          flip
        />
      </section>

      <section className="relative overflow-hidden bg-bone-200 py-20 sm:py-24">
        <div className="paper absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* The application, on paper. */}
            <div
              id="enquiry"
              className="relative overflow-hidden bg-bone-100 lg:col-span-7"
            >
              <div
                aria-hidden="true"
                className="jaali jaali-brass absolute inset-y-0 left-0 w-7 opacity-60"
              />
              <div className="relative px-7 py-10 sm:px-11 sm:py-12">
                <p className="label text-[0.5625rem] text-brass-700">Enquiry</p>
                <h2 className="mt-5 font-display text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold tracking-[-0.025em] text-ink-800">
                  Tell us about yourself.
                </h2>
                <RuleDiamond className="mt-7 max-w-[16rem]" />
                <EnquiryForm />
              </div>

              <div
                className="relative flex justify-between px-3 text-ink-800/20"
                aria-hidden="true"
              >
                <Corbel className="h-7 w-4" />
                <Corbel className="h-7 w-4" flip />
              </div>
            </div>

            {/* Where to reach the house. */}
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="relative overflow-hidden bg-ink-800 px-8 py-10">
                <div
                  aria-hidden="true"
                  className="jaali jaali-brass absolute inset-0 opacity-[0.16]"
                />
                <div className="relative">
                  <p className="label text-[0.5625rem] text-brass-400">Enquiries</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="link-brass mt-3 inline-block text-[1.0625rem] text-bone-100"
                  >
                    {CONTACT.email}
                  </a>

                  <span aria-hidden="true" className="mt-8 block h-px w-14 bg-brass-500/60" />

                  <p className="label mt-8 text-[0.5625rem] text-bone-500">First kitchen</p>
                  <p className="mt-2.5 text-[1.0625rem] text-bone-200">
                    {LOCATIONS[0].name}, {OPENING.city}
                  </p>
                  <p className="mt-1 text-sm text-bone-500">{OPENING.dateLabel}</p>

                  <p className="label mt-8 text-[0.5625rem] text-bone-500">Next</p>
                  <p className="mt-2.5 text-[1.0625rem] text-bone-200">
                    {LOCATIONS[1].name} &middot; {LOCATIONS[1].status.toLowerCase()}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[0.9375rem] leading-relaxed text-granite-500">
                {BRAND.meaning}
              </p>
            </aside>
          </div>
        </div>

        <JaaliBand className="relative mt-16 opacity-30" height={26} color="#3a2318" />
      </section>
    </>
  );
}
