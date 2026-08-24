import type { Metadata } from "next";
import Image from "next/image";
import {
  BEVERAGES,
  BRAND,
  DOSA,
  MENU_FOOTER,
  RICE_BOWLS,
  STORE,
} from "@/lib/site-data";
import {
  Corbel,
  EaveCourse,
  JaaliBand,
  RuleDiamond,
} from "@/components/site/ornament";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, menuSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Menu",
  path: "/menu",
  description:
    "Bengaluru and Chennai style dosa, benne dosa and pesarattu, five regional rice bowls from Mysore to Thanjavur, and Chikkamagaluru filter coffee. One hundred percent pure vegetarian.",
  keywords: [
    "benne dosa Bangalore",
    "masala dosa Banashankari",
    "bisi bele bath Bengaluru",
    "ghee pongal Bangalore",
    "pesarattu Bangalore",
    "filter coffee Bengaluru",
    "pure veg menu Bangalore",
  ],
});

/** The plate that a group label is struck on. */
const PLATE = {
  palm: "bg-palm-700 text-bone-100",
  kumkum: "bg-kumkum-700 text-bone-100",
  brass: "bg-brass-600 text-ink-900",
} as const;

/**
 * The board, as it hangs in the restaurant: one printed sheet on a stone
 * ground, four columns, read all at once. No filters, no cards, no prices — a
 * board does not ask you to click anything.
 */
/** The four sections of the board, handed to a crawler in its own format. */
const MENU_SCHEMA = menuSchema([
  ...DOSA.groups.map((group) => ({
    name: `${DOSA.title} — ${group.label}`,
    description: DOSA.note,
    items: [...group.items],
  })),
  {
    name: RICE_BOWLS.title,
    description: RICE_BOWLS.note,
    items: [
      ...RICE_BOWLS.items.map((item) => `${item.name} (${item.place})`),
      `${RICE_BOWLS.combo.name} — ${RICE_BOWLS.combo.detail}`,
    ],
  },
  {
    name: BEVERAGES.title,
    description: BEVERAGES.note,
    items: [...BEVERAGES.items],
  },
]);

export default function MenuPage() {
  return (
    <section className="relative overflow-hidden bg-ink-800 py-14 sm:py-20">
      <JsonLd data={breadcrumbSchema([{ name: "Menu", path: "/menu" }])} />
      <JsonLd data={MENU_SCHEMA} />
      <JaaliBand className="absolute inset-x-0 top-0 opacity-25" height={40} />
      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-y-0 left-0 w-[12vw] opacity-[0.16]"
      />
      <div
        aria-hidden="true"
        className="jaali jaali-brass absolute inset-y-0 right-0 w-[12vw] opacity-[0.16]"
      />

      <div className="relative mx-auto max-w-[84rem] px-4 sm:px-8">
        {/* The sheet, laid on the stone. */}
        <div className="paper lift-leaf relative bg-bone-100">
          <EaveCourse className="absolute inset-x-0 top-0" height={13} color="#3a2318" />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 border border-brass-600/25"
          />

          {/* The drawings the board carries, moved down into the two corners
              the columns leave empty now that the masthead is gone. */}
          <Image
            src="/art/gopuram.webp"
            alt=""
            aria-hidden="true"
            width={308}
            height={632}
            className="drawn pointer-events-none absolute bottom-6 left-6 hidden w-[5rem] opacity-40 lg:block"
          />
          <Image
            src="/art/tharavad.webp"
            alt=""
            aria-hidden="true"
            width={820}
            height={896}
            className="drawn pointer-events-none absolute bottom-4 right-6 hidden w-[8rem] opacity-35 lg:block"
          />

          <div className="relative px-5 py-14 sm:px-10 sm:py-16">
            {/* The sheet's four columns. The board carries no masthead: the
                header above it already names the house. */}
            <h1 className="sr-only">Menu</h1>
            <div className="relative grid gap-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-12 lg:gap-x-8">
              {/* Dosa */}
              <div className="lg:col-span-3">
                <ColumnHead title={DOSA.title} note={DOSA.note} />
                <div className="mt-8 space-y-8">
                  {DOSA.groups.map((group) => (
                    <div key={group.label}>
                      <p
                        className={`label inline-block px-3.5 py-2 text-[0.5625rem] ${PLATE[group.accent]}`}
                      >
                        {group.label}
                      </p>
                      <ul className="mt-4">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rule-bottom py-2.5 text-[1.0625rem] text-ink-700 last:border-b-0"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* The counters the board is read from, standing in the middle of
                  the sheet as they do in the room. */}
              <div className="space-y-3 md:order-last lg:order-none lg:col-span-3 lg:border-l lg:border-bone-400/70 lg:pl-8">
                {[STORE.liveCounters, STORE.diningHall].map((view) => (
                  <div key={view.src} className="relative">
                    <Image
                      src={view.src}
                      alt={view.alt}
                      width={1439}
                      height={985}
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="aspect-4/3 w-full object-cover"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 border border-brass-600/35"
                    />
                  </div>
                ))}
              </div>

              {/* Rice bowls */}
              <div className="lg:col-span-3 lg:border-l lg:border-bone-400/70 lg:pl-8">
                <ColumnHead title={RICE_BOWLS.title} note={RICE_BOWLS.note} />
                <ul className="mt-8">
                  {RICE_BOWLS.items.map((item) => (
                    <li key={item.name} className="rule-bottom py-4 last:border-b-0">
                      <p className="label text-[0.5625rem] text-brass-700">
                        {item.place}
                      </p>
                      <p className="mt-1.5 text-[1.0625rem] text-ink-700">
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border border-bone-400 bg-bone-200/70 px-5 py-5">
                  <p
                    className={`label inline-block px-3 py-1.5 text-[0.5625rem] ${PLATE.kumkum}`}
                  >
                    {RICE_BOWLS.combo.label}
                  </p>
                  <p className="mt-3 font-display text-xl text-ink-800">
                    {RICE_BOWLS.combo.name}
                  </p>
                  <p className="mt-1 text-[0.9375rem] text-granite-500">
                    {RICE_BOWLS.combo.detail}
                  </p>
                </div>
              </div>

              {/* Beverages */}
              <div className="lg:col-span-3 lg:border-l lg:border-bone-400/70 lg:pl-8">
                <ColumnHead title={BEVERAGES.title} note={BEVERAGES.note} />
                <ul className="mt-8">
                  {BEVERAGES.items.map((item) => (
                    <li
                      key={item}
                      className="rule-bottom py-2.5 text-[1.0625rem] text-ink-700 last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8">
                  <Image
                    src={STORE.beverageCounter.src}
                    alt={STORE.beverageCounter.alt}
                    width={1439}
                    height={985}
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-brass-600/35"
                  />
                </div>
              </div>
            </div>

            {/* The closing line, as it runs along the foot of the board. */}
            <footer className="relative mt-14 text-center">
              <RuleDiamond className="mx-auto w-[min(26rem,86%)]" />
              <p className="label mt-6 text-[0.625rem] text-ink-700">{MENU_FOOTER}</p>
              <p className="mt-3 text-[0.9375rem] text-granite-500">
                <span className="kn" lang="kn">
                  {BRAND.devotionKannada}
                </span>
              </p>
            </footer>
          </div>

          {/* Corbels under the sheet, as under the awning. */}
          <div
            className="relative flex justify-between px-3 text-ink-800/25"
            aria-hidden="true"
          >
            <Corbel className="h-7 w-4" />
            <Corbel className="h-7 w-4" flip />
          </div>
        </div>

      
      </div>

    </section>
  );
}

function ColumnHead({ title, note }: { title: string; note: string }) {
  return (
    <div>
      <h2 className="display-caps text-[1.75rem] font-medium text-ink-900 sm:text-[2rem]">
        {title}
      </h2>
      <p className="mt-2 text-[0.9375rem] italic text-granite-500">{note}</p>
    </div>
  );
}
