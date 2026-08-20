import type { Metadata } from "next";
import Image from "next/image";
import {
  BEVERAGES,
  BRAND,
  DOSA,
  MENU_FOOTER,
  RICE_BOWLS,
} from "@/lib/site-data";
import {
  Corbel,
  EaveCourse,
  JaaliBand,
  Kolam,
  LotusRoundel,
  RuleDiamond,
} from "@/components/site/ornament";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Dosa from two cities, rice bowls from many regions, and traditional South Indian beverages. Served with devotion.",
};

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
export default function MenuPage() {
  return (
    <section className="relative overflow-hidden bg-ink-800 py-14 sm:py-20">
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

          {/* The drawings the board carries in its corners, and a kolam under
              the middle of the sheet. */}
          <Image
            src="/art/gopuram.webp"
            alt=""
            aria-hidden="true"
            width={308}
            height={632}
            className="drawn pointer-events-none absolute left-5 top-10 hidden w-[5.5rem] opacity-60 lg:block"
          />
          <Image
            src="/art/tharavad.webp"
            alt=""
            aria-hidden="true"
            width={820}
            height={896}
            className="drawn pointer-events-none absolute right-5 top-10 hidden w-[9rem] opacity-55 lg:block"
          />
          <Kolam
            className="pointer-events-none absolute bottom-16 left-1/2 hidden w-[18rem] -translate-x-1/2 text-ink-700/[0.07] lg:block"
            size={300}
          />

          <div className="relative px-5 py-14 sm:px-10 sm:py-16">
            {/* Masthead */}
            <header className="relative text-center">
              <LotusRoundel className="mx-auto text-ink-700" size={32} />
              <p className="kn mt-4 font-display text-lg text-ink-700" lang="kn">
                {BRAND.nameKannada}
              </p>
              <h1 className="mt-1 font-display text-[2.25rem] font-semibold tracking-[-0.02em] text-ink-900 sm:text-[3rem]">
                {BRAND.name}
              </h1>
              <p className="label mt-4 text-[0.5625rem] text-brass-700">
                {BRAND.devotion}
              </p>
              <RuleDiamond className="mx-auto mt-6 w-[min(22rem,80%)]" />
            </header>

            {/* The sheet's four columns. */}
            <div className="relative mt-12 grid gap-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-12 lg:gap-x-8">
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

              {/* The plates, standing in the middle of the sheet as they do on
                  the board. Every dish they show is named in a column. */}
              <div className="space-y-3 md:order-last lg:order-none lg:col-span-3 lg:border-l lg:border-bone-400/70 lg:pl-8">
                {[
                  {
                    src: "/dishes/dosa-masala.webp",
                    alt: "Masala dosa served with chutney and sambar on a banana leaf",
                  },
                  {
                    src: "/dishes/dosa-pesarattu.webp",
                    alt: "Pesarattu, the green gram crepe, with coconut chutney",
                  },
                ].map((plate) => (
                  <div key={plate.src} className="relative">
                    <Image
                      src={plate.src}
                      alt={plate.alt}
                      width={900}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="aspect-square w-full object-cover"
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
                    src="/dishes/coffee-filter.webp"
                    alt="Filter coffee poured into a steel tumbler and dabara"
                    width={900}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="aspect-square w-full object-cover"
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
