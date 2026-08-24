import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, CONTACT, FAQ, OPENING } from "@/lib/site-data";
import {
  Diamond,
  EaveCourse,
  JaaliBand,
  Kolam,
  Mark,
  RuleDiamond,
  Thoranam,
} from "@/components/site/ornament";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Questions",
  path: "/faq",
  description:
    "Where Shri Aradhyam is, when it opens, what pure vegetarian means in this kitchen, which regions are on the board, and how to partner with us. Answered plainly.",
  shareTitle: "Questions, answered | Shri Aradhyam",
  keywords: [
    "Shri Aradhyam opening date",
    "Shri Aradhyam Banashankari address",
    "pure vegetarian restaurant Bengaluru",
    "South Indian restaurant FAQ Bangalore",
  ],
});

/**
 * The questions, as an ordinary numbered list of headings and answers.
 *
 * No accordion. A collapsed answer is one more click between a visitor and the
 * thing they came to find out, and the whole page is shorter than the menu.
 * The same ten pairs are emitted as FAQPage structured data, so the answers a
 * search result quotes are the answers on the page.
 */
export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Questions", path: "/faq" }])} />
      <JsonLd data={faqSchema(FAQ)} />

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
          <p className="label text-[0.5625rem] text-brass-500">Good to know</p>
          <h1 className="display-caps mt-4 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold text-bone-100">
            Questions
          </h1>
          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-bone-400">
            What we can answer today, answered. Anything that depends on the
            doors being open — hours, the counter timings — goes up here the
            week we open, and not before.
          </p>
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
          <dl className="grid gap-x-12 gap-y-12 lg:grid-cols-2">
            {FAQ.map((entry, index) => (
              <div key={entry.q} data-reveal>
                <dt className="flex items-baseline gap-4">
                  <span className="label pt-1.5 text-[0.5625rem] text-brass-700 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[1.35rem] leading-snug tracking-[-0.02em] text-ink-900">
                    {entry.q}
                  </h2>
                </dt>
                <dd className="mt-4 max-w-[62ch] pl-11 text-[1.0625rem] leading-relaxed text-ink-700">
                  {entry.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Anything not answered above. */}
      <section className="relative isolate overflow-hidden bg-bone-300 pt-20 sm:pt-24">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_46%_at_50%_-4%,rgba(201,162,39,0.16)_0%,rgba(201,162,39,0)_72%)]"
        />

        <div className="relative mx-auto max-w-[46rem] px-6 text-center">
          <p className="mx-auto max-w-[24ch] text-balance font-display text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.3] tracking-[-0.022em] text-ink-800">
            Something we have not answered?
          </p>
          <RuleDiamond className="mx-auto mt-8 w-[min(16rem,60%)]" />
          <p className="mx-auto mt-8 max-w-[48ch] text-[1.0625rem] leading-relaxed text-ink-700">
            Write to us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="link-brass text-ink-900">
              {CONTACT.email}
            </a>
            . {BRAND.name} opens at {OPENING.outlet}, {OPENING.city} —{" "}
            {OPENING.dateLabel}.
          </p>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
            {[
              { href: "/menu", label: "The menu board" },
              { href: "/traditions", label: "The five regions" },
              { href: "/locations/banashankari", label: "Banashankari" },
            ].map((link) => (
              <li key={link.href} className="flex items-baseline gap-3">
                <Diamond className="text-brass-600" size={6} />
                <Link
                  href={link.href}
                  className="label link-brass inline-flex items-center gap-2.5 pt-1 text-[0.625rem] text-ink-800"
                >
                  {link.label}
                  <Mark name="arrowRight" size={13} className="text-brass-600" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-12 flex justify-center sm:mt-14">
          <Kolam className="w-[min(20rem,62vw)] text-ink-700/50" size={320} />
        </div>

        <JaaliBand className="relative opacity-30" height={26} color="#3a2318" />
      </section>
    </>
  );
}
