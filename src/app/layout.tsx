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
import { BRAND, CONTACT, LOCATIONS } from "@/lib/site-data";

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
  metadataBase: new URL("https://shriaradhyam.com"),
  title: {
    default: "Shri Aradhyam | All of South India. One roof. Endless flavours.",
    template: "%s | Shri Aradhyam",
  },
  description:
    "Shri Aradhyam brings together the authentic vegetarian food traditions of South India — the recipes, flavours and stories of the places they come from. Opening at Banashankari, Bengaluru.",
  openGraph: {
    title: "Shri Aradhyam",
    description: BRAND.tagline,
    type: "website",
    locale: "en_IN",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: BRAND.name,
  alternateName: BRAND.nameKannada,
  slogan: BRAND.tagline,
  servesCuisine: ["South Indian", "Vegetarian"],
  url: "https://shriaradhyam.com",
  hasMenu: "https://shriaradhyam.com/menu",
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: LOCATIONS[0].address,
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560085",
    addressCountry: "IN",
  },
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
      <body className="flex min-h-dvh flex-col bg-bone-200 text-ink-700 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
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
