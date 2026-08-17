import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND, STATES, MENU, OPENING } from "@/lib/site-data";
import { MenuBrowser } from "@/components/menu/menu-browser";
import { ThaliInvite } from "@/components/home/thali-invite";
import { ScriptMorph } from "@/components/site/script-morph";
import { JaaliBand, Mark, HangingDiya } from "@/components/site/ornament";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Dosa from Bengaluru and Chennai, rice bowls from four states, Udupi and Thanjavur meals, and filter coffee from Chikkamagaluru. Prices, photographs and each dish's own town.",
};

export const revalidate = 3600;

export default function MenuPage() {
  return (
    <>
      {/* Page head: the dining floor, held well back behind the type. */}
      <section className="relative isolate overflow-hidden bg-ink-800">
        <Image
          src="/brand/dining-floor.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[45%_58%] opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(104deg,rgba(31,17,9,0.94)_0%,rgba(31,17,9,0.78)_46%,rgba(31,17,9,0.55)_100%)]"
        />
        <HangingDiya
          height={104}
          className="absolute right-[8%] top-0 hidden text-brass-400/80 lg:block"
        />
        <JaaliBand className="absolute inset-x-0 bottom-0 opacity-25" height={40} />

        <div className="relative mx-auto max-w-[88rem] px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-40">
          <h1 className="max-w-[20ch] font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-bone-100">
            <ScriptMorph
              native="ಊಟ"
              latin="The Menu"
              script="kn"
              mode="settle"
              delay={1200}
            />
          </h1>

          <p className="mt-7 max-w-[50ch] text-[1.0625rem] leading-relaxed text-bone-400">
            {BRAND.tagline} Every dish below carries the town it is claimed
            from, because the town is the reason it tastes the way it does.
          </p>

          {/* The four states on one ruled row, each in its own script. */}
          <ul className="rule-top mt-12 flex flex-wrap gap-x-10 gap-y-4 border-bone-500/30 pt-7">
            {STATES.map((state) => (
              <li key={state.name} className="leading-tight">
                <span
                  className={`${state.script} block text-[1.35rem] text-brass-400`}
                  lang={state.script}
                >
                  {state.native}
                </span>
                <span className="label mt-1.5 block text-[0.625rem] text-bone-500">
                  {state.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The thali led the home page for a while, which put the highest ticket
          item in front of a reader who had not yet been told what the house is.
          Here it opens the board, where a reader is already reading prices. */}
      <ThaliInvite />

      <MenuBrowser />

      {/* Close: what the menu cannot tell you. */}
      <section className="relative overflow-hidden bg-bone-300 py-20 sm:py-24">
        <div className="paper absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="max-w-[20ch] font-display text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink-800">
                The board is not the whole kitchen.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-[1.0625rem] leading-relaxed text-granite-500">
                A City Launch opens one city&rsquo;s repertoire at a time,
                cooked the way that city cooks it and run for a season. It is
                how Kerala reaches the counter, and how Madurai and the
                Godhavari delta already have.
              </p>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-granite-500">
                {MENU.length} sections, served at {OPENING.outlet},{" "}
                {OPENING.city} from {OPENING.dateLabel.toLowerCase()}.
              </p>
              <Link
                href="/locations"
                className="label link-brass mt-8 inline-flex items-center gap-2.5 text-[0.625rem] text-ink-700"
              >
                Find the kitchen
                <Mark name="arrowRight" size={14} className="text-brass-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
