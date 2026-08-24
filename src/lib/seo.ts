import type { Metadata } from "next";
import { BRAND, CONTACT, LOCATIONS, OPENING } from "./site-data";

/**
 * One place for everything a crawler or a share sheet reads.
 *
 * The pages themselves only say what they are about; the shape of the metadata
 * — canonical URL, Open Graph block, Twitter card, robots directives — is
 * assembled here so no route can quietly ship without one of them.
 */

export const SITE_URL = "https://shriaradhyam.com";

export const SITE_NAME = BRAND.name;

/** Resolve a route to its absolute, canonical form. */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * The terms this house should actually be found on. Place first — nobody
 * searches for a restaurant without a neighbourhood — then the food.
 */
export const CORE_KEYWORDS = [
  "South Indian restaurant Bengaluru",
  "pure vegetarian restaurant Banashankari",
  "vegetarian restaurant Kathriguppe",
  "Udupi meals Bengaluru",
  "Thanjavur meals Bengaluru",
  "benne dosa Bangalore",
  "Andhra pesarattu Bangalore",
  "filter coffee Banashankari",
  "South Indian thali Bangalore",
  "Shri Aradhyam",
];

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, leading slash. Becomes the canonical and the og:url. */
  path: string;
  /** Added to the core set rather than replacing it. */
  keywords?: string[];
  /** Overrides the og:title when the tab title is too terse to share well. */
  shareTitle?: string;
};

/**
 * The metadata block for one page.
 *
 * `openGraph.images` is deliberately absent: each route colocates its own
 * `opengraph-image.tsx`, and Next fills the image tags — including the Twitter
 * ones — from that file.
 */
export function pageMeta({
  title,
  description,
  path,
  keywords = [],
  shareTitle,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...keywords, ...CORE_KEYWORDS],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url,
      title: shareTitle ?? `${title} | ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle ?? `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

/* ---------------------------------------------------------------------------
   Structured data.

   Search engines are told the same things a visitor is told, in their format:
   what this place is, where it stands, when it opens, and what it serves.
   --------------------------------------------------------------------------- */

const POSTAL = {
  "@type": "PostalAddress",
  streetAddress:
    "221, Outer Ring Road, opposite KEB, Kathreguppe, Banashankari 3rd Stage",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560085",
  addressCountry: "IN",
} as const;

/** The house itself. Rendered once, in the root layout. */
export const RESTAURANT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: BRAND.name,
  alternateName: [
    BRAND.nameKannada,
    ...BRAND.nameInScripts.map((entry) => entry.text),
  ],
  slogan: BRAND.tagline,
  description:
    "Shri Aradhyam brings the authentic vegetarian food traditions of South India under one roof — Udupi and Thanjavur meals, dosa from Bengaluru and Chennai, regional rice bowls and Chikkamagaluru filter coffee — each cooked the way the place it comes from cooks it.",
  url: SITE_URL,
  hasMenu: `${SITE_URL}/menu`,
  email: CONTACT.email,
  servesCuisine: ["South Indian", "Vegetarian", "Udupi", "Andhra", "Tamil", "Kerala"],
  address: POSTAL,
  areaServed: { "@type": "City", name: "Bengaluru" },
  /** Stated as a fact about the kitchen, not as a dietary label on a dish. */
  publicAccess: true,
  isAccessibleForFree: false,
  knowsLanguage: ["en", "kn", "ta", "te", "ml"],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Dietary",
      value: "One hundred percent pure vegetarian.",
    },
    {
      "@type": "PropertyValue",
      name: "Opening",
      value: OPENING.dateLabel,
    },
  ],
} as const;

/** The site, so a search result can carry the name rather than the domain. */
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BRAND.name,
  alternateName: BRAND.nameKannada,
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#restaurant` },
} as const;

/** A trail from the front door to the page being read. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      }),
    ),
  };
}

/** Questions and their answers, in the shape that earns a rich result. */
export function faqSchema(entries: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: { "@type": "Answer", text: entry.a },
    })),
  };
}

/** One outlet, for the local result. */
export function outletSchema(location: (typeof LOCATIONS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/locations/${location.name.toLowerCase()}#outlet`,
    name: `${BRAND.name} — ${location.name}`,
    parentOrganization: { "@id": `${SITE_URL}/#restaurant` },
    url: absoluteUrl(`/locations/${location.name.toLowerCase()}`),
    servesCuisine: ["South Indian", "Vegetarian"],
    hasMenu: `${SITE_URL}/menu`,
    email: CONTACT.email,
    ...(location.address ? { address: POSTAL } : {}),
  };
}

/**
 * The board, in schema.org's shape.
 *
 * No `offers` and no prices: the site does not print them, and a price emitted
 * only for a crawler is a price nobody has agreed to. Sections mirror the four
 * the board itself is set in.
 */
export function menuSchema(
  sections: { name: string; description?: string; items: string[] }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}/menu#menu`,
    name: `${BRAND.name} menu`,
    inLanguage: "en-IN",
    url: `${SITE_URL}/menu`,
    hasMenuSection: sections.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      ...(section.description ? { description: section.description } : {}),
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item,
        suitableForDiet: "https://schema.org/VegetarianDiet",
      })),
    })),
  };
}
