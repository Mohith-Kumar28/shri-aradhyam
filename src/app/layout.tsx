import type { Metadata } from "next";
import {
  Eczar,
  Alegreya,
  Archivo,
  Noto_Serif_Kannada,
  Noto_Serif_Tamil,
  Noto_Serif_Telugu,
  Noto_Serif_Malayalam,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { RevealProvider } from "@/components/site/reveal-provider";
import { BRAND, TEAM } from "@/lib/site-data";

const eczar = Eczar({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eczar",
  display: "swap",
});

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const notoKannada = Noto_Serif_Kannada({
  subsets: ["kannada"],
  weight: ["400", "600"],
  variable: "--font-noto-kn",
  display: "swap",
});

const notoTamil = Noto_Serif_Tamil({
  subsets: ["tamil"],
  weight: ["400", "600"],
  variable: "--font-noto-ta",
  display: "swap",
});

const notoTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600"],
  variable: "--font-noto-te",
  display: "swap",
});

const notoMalayalam = Noto_Serif_Malayalam({
  subsets: ["malayalam"],
  weight: ["400", "600"],
  variable: "--font-noto-ml",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shriaradhyam.com"),
  title: {
    default: "Shri Aradhyam | One Roof. Four States. Endless Flavours.",
    template: "%s | Shri Aradhyam",
  },
  description:
    "A pure vegetarian South Indian kitchen bringing Karnataka, Tamil Nadu, Andhra Pradesh and Kerala under one roof. Dosa, rice bowls, Udupi and Thanjavur meals, and filter coffee from Chikkamagaluru. Opening at Kathriguppe, Bengaluru.",
  openGraph: {
    title: "Shri Aradhyam",
    description:
      "One Roof. Four States. Endless Flavours. A pure vegetarian South Indian kitchen, opening at Kathriguppe, Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
};

/**
 * The direction contract, emitted as a real HTML comment at the top of the
 * body. A JSX comment is stripped by the compiler and never reaches the built
 * markup, so this is written as markup on purpose: the contract has to survive
 * the production build to be worth anything.
 */
const DIRECTION_CONTRACT = `<!--
  THESIS: Shri Aradhyam puts four South Indian states under one roof, so the site
  is built as a panchangam, the South Indian daily almanac: bone paper, hairline
  ruling, one ruled entry at a time, and the announcement pressed into brass. It
  refuses the category default of a dark full bleed food hero with a centred
  sans headline over a grid of dish cards.
  OWN-WORLD: bone almanac paper with a laid tooth, chocolate ink, granite
  plinths, one brass metal, kumkum red and temple palm green as the two marks.
  Diamond jaali lattice, lotus bud eave courses, temple corbels, the hanging
  diya and the thoranam are structure rather than applique, because each is a
  real object in the building. Hairline ruling, ruled registers and brass seals
  throughout, Eczar display over Alegreya prose with Archivo data labels, and
  every city and state carrying its own Indic script.
  STORY: the visitor learns that one kitchen cooks Karnataka, Tamil Nadu, Andhra
  Pradesh and Kerala and that each dish names the town it comes from, believes
  the cooking is an offering rather than a service, and either waits for the
  Kathriguppe opening or opens the franchise enquiry.
  FIRST VIEWPORT: the Kathriguppe night elevation behind an inset bone almanac
  leaf; the Kannada wordmark settling into Latin at monumental scale on the
  left, the opening pressed as a brass seal on the right, two actions on the
  ruled baseline.
  FORM: panchangam daily register, candidate 5 of 7, seed key bbbdc06d.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, and DESIGN.md.
-->`;

const ORGANISATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: BRAND.name,
  alternateName: BRAND.nameKannada,
  slogan: BRAND.tagline,
  description:
    "A pure vegetarian South Indian kitchen bringing Karnataka, Tamil Nadu, Andhra Pradesh and Kerala under one roof.",
  servesCuisine: ["South Indian", "Vegetarian"],
  url: "https://shriaradhyam.com",
  hasMenu: "https://shriaradhyam.com/menu",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  founder: TEAM.filter((p) => p.role.startsWith("Founder")).map((p) => ({
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={[
        eczar.variable,
        alegreya.variable,
        archivo.variable,
        notoKannada.variable,
        notoTamil.variable,
        notoTelugu.variable,
        notoMalayalam.variable,
      ].join(" ")}
    >
      <body className="min-h-dvh bg-bone-200 text-ink-700 antialiased">
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        {/* Brand level structured data. The outlet's own Restaurant record,
            with its opening date, lives on the outlet page where it belongs. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANISATION_JSON_LD) }}
        />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-ink-800 focus:px-4 focus:py-3 focus:text-bone-100"
        >
          Skip to content
        </a>
        <RevealProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </RevealProvider>
      </body>
    </html>
  );
}
