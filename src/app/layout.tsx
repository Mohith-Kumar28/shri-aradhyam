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
import { RevealProvider } from "@/components/site/reveal-provider";
import { daysUntilOpening, isPreOpening } from "@/lib/today";
import { SiteFooter } from "@/components/site/site-footer";
import { JsonLd } from "@/components/site/json-ld";
import { BRAND, OPENING } from "@/lib/site-data";
import {
  CORE_KEYWORDS,
  RESTAURANT_SCHEMA,
  SITE_NAME,
  SITE_URL,
  WEBSITE_SCHEMA,
} from "@/lib/seo";

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
  weight: ["400", "600"],
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | All of South India. One roof. Endless flavours.`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Shri Aradhyam brings together the authentic vegetarian food traditions of South India — Udupi and Thanjavur meals, dosa from two cities, regional rice bowls and filter coffee. Opening at Banashankari, Bengaluru.",
  applicationName: SITE_NAME,
  keywords: CORE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Restaurant",
  alternates: { canonical: SITE_URL },
  /* An address on a page is an address, not a number to be turned into a
     call button by a phone browser. */
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    title: `${SITE_NAME} — ${BRAND.tagline}`,
    description:
      `Authentic South Indian vegetarian food from the regions it belongs to. Opening at ${OPENING.outlet}, ${OPENING.city} — ${OPENING.dateLabel}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${BRAND.tagline}`,
    description:
      `Authentic South Indian vegetarian food from the regions it belongs to. Opening at ${OPENING.outlet}, ${OPENING.city}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
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
      <body className="flex min-h-dvh flex-col bg-bone-200 text-ink-700 antialiased">
        <JsonLd data={[RESTAURANT_SCHEMA, WEBSITE_SCHEMA]} />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-ink-800 focus:px-4 focus:py-3 focus:text-bone-100"
        >
          Skip to content
        </a>
        <RevealProvider>
          <SiteHeader
            preOpening={isPreOpening()}
            daysUntilOpening={daysUntilOpening()}
          />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </RevealProvider>
      </body>
    </html>
  );
}
