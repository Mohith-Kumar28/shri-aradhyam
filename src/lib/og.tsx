import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND, LOCATIONS } from "@/lib/site-data";

/**
 * The share card.
 *
 * Every route renders the same card with a different title, so a link posted
 * to WhatsApp, X or a Slack channel reads as one house rather than as six
 * unrelated pages. The card is drawn in the building's materials: bone paper,
 * a brass rule, chocolate ink, and a dark plinth along the bottom the way the
 * signage sits on stone.
 *
 * The fonts are read off disk rather than fetched. `opengraph-image` routes are
 * static by default, so this happens once at build time; a share image that
 * fails to render because a font CDN was slow is worse than no share image at
 * all, and there is no network here to be slow.
 */

const FONT_DIR = join(process.cwd(), "assets/og");

const [eczarRegular, eczarSemiBold, notoKannada] = await Promise.all([
  readFile(join(FONT_DIR, "Eczar-Regular.ttf")),
  readFile(join(FONT_DIR, "Eczar-SemiBold.ttf")),
  readFile(join(FONT_DIR, "NotoSerifKannada-SemiBold.ttf")),
]);

/** Passed straight to `ImageResponse`. Exported so every route shares one set. */
export const ogFonts = [
  { name: "Eczar", data: eczarRegular, style: "normal" as const, weight: 400 as const },
  { name: "Eczar", data: eczarSemiBold, style: "normal" as const, weight: 600 as const },
  { name: "NotoKannada", data: notoKannada, style: "normal" as const, weight: 600 as const },
];

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const C = {
  bone100: "#faf5ec",
  bone200: "#f2eadc",
  bone300: "#e7dcc8",
  bone400: "#d8c9ae",
  ink900: "#1f1109",
  ink800: "#26150d",
  ink600: "#4e3325",
  brass700: "#785c0f",
  brass600: "#a8811a",
  brass500: "#c9a227",
  brass400: "#dcbb54",
};

export type ShareCard = {
  /** The small caps line above the title. Where you are in the house. */
  eyebrow: string;
  /** The one thing this page is. Set as large as it will go. */
  title: string;
  /**
   * One or two lines under the rule. Keep it under about 120 characters: a
   * third line runs the card into the plinth, and none of it is legible at the
   * size a chat client shows a preview at anyway.
   */
  subtitle: string;
  /** The right-hand line on the dark plinth. Defaults to the first outlet. */
  footnote?: string;
};

/**
 * Title sizes step down rather than scaling continuously: three sizes chosen so
 * a two word title fills the card and a six word title still sets on two lines
 * without touching the rule beneath it.
 */
function titleSize(title: string): number {
  if (title.length <= 16) return 100;
  if (title.length <= 30) return 76;
  if (title.length <= 46) return 64;
  return 54;
}

/**
 * The kolam, as the site draws it: eight teardrop petals around a centre, with
 * the pulli dots the line is drawn around. Ported here rather than imported
 * because the site's version is a React component with animation classes on it,
 * and satori renders neither.
 */
const KOLAM_PATH = (() => {
  const CX = 100;
  const CY = 100;
  const PETALS = 8;
  const f = (n: number) => n.toFixed(2);

  return Array.from({ length: PETALS }, (_, index) => {
    const t = (index * 2 * Math.PI) / PETALS;
    const tipX = CX + 72 * Math.cos(t);
    const tipY = CY + 72 * Math.sin(t);
    const nx = -Math.sin(t) * 46;
    const ny = Math.cos(t) * 46;
    return (
      `M${CX} ${CY}` +
      `Q${f(CX + nx)} ${f(CY + ny)} ${f(tipX)} ${f(tipY)}` +
      `Q${f(CX - nx)} ${f(CY - ny)} ${CX} ${CY}Z`
    );
  }).join("");
})();

function Kolam({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <path
        d={KOLAM_PATH}
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="100" r="26" fill="none" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

/** The signage emblem, drawn at whatever size the card needs it. */
function Emblem({ size, fill, petal }: { size: number; fill: string; petal: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="23" fill={fill} />
      <g fill={petal}>
        <path d="M24 7.2C26.4 11.8 27.6 15.5 27.6 18.3C27.6 20.6 26.4 22.6 24 24.1C21.6 22.6 20.4 20.6 20.4 18.3C20.4 15.5 21.6 11.8 24 7.2Z" />
        <path d="M14.38 10.14C18.94 12.61 22.01 15.01 23.57 17.33C24.86 19.24 24.98 21.57 23.83 24.15C21 24.25 18.89 23.26 17.6 21.36C16.04 19.03 14.96 15.3 14.38 10.14Z" />
        <path d="M33.62 10.14C33.04 15.3 31.96 19.03 30.4 21.36C29.11 23.26 27 24.25 24.17 24.15C23.02 21.57 23.14 19.24 24.43 17.33C25.99 15.01 29.06 12.61 33.62 10.14Z" />
        <path d="M11.6 27.2c-.9 5.1.5 9.1 4.1 11.9 2.3 1.8 5.1 2.8 8.3 3.1v-3.3c-2.6-.3-4.8-1.1-6.5-2.5-2.7-2.2-3.8-5.5-3.2-9.7Z" />
        <path d="M36.4 27.2c.9 5.1-.5 9.1-4.1 11.9-2.3 1.8-5.1 2.8-8.3 3.1v-3.3c2.6-.3 4.8-1.1 6.5-2.5 2.7-2.2 3.8-5.5 3.2-9.7Z" />
      </g>
    </svg>
  );
}

/** A brass hairline with a diamond struck through it, as on every page. */
function Rule({ width }: { width: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", width, marginTop: 30 }}>
      <div style={{ display: "flex", height: 1, flex: 1, background: C.brass500, opacity: 0.55 }} />
      <svg width="12" height="12" viewBox="0 0 14 14" style={{ margin: "0 14px" }}>
        <path d="M7 0.5 13.5 7 7 13.5 0.5 7Z" fill={C.brass600} />
      </svg>
      <div style={{ display: "flex", height: 1, flex: 1, background: C.brass500, opacity: 0.55 }} />
    </div>
  );
}

export function ShareCard({ eyebrow, title, subtitle, footnote }: ShareCard) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: C.bone200,
        fontFamily: "Eczar",
        position: "relative",
      }}
    >
      {/* The paper is not flat: a brass wash falls from the top edge the way
          the lamps light the storefront. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1200,
          height: 400,
          backgroundImage:
            "radial-gradient(58% 100% at 50% 0%, rgba(201,162,39,0.20) 0%, rgba(201,162,39,0) 72%)",
        }}
      />
      {/* A kolam drawn off the right edge, the way one is drawn on a
          threshold: half of it is always outside the frame. */}
      <div style={{ position: "absolute", top: 108, left: 962, display: "flex", opacity: 0.34 }}>
        <Kolam size={470} color={C.brass600} />
      </div>

      {/* The brass band across the head of the card. */}
      <div style={{ display: "flex", width: 1200, height: 9, background: C.brass500 }} />

      {/* Imprint. */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "44px 74px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Emblem size={64} fill={C.ink800} petal={C.bone100} />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "NotoKannada",
                fontWeight: 600,
                fontSize: 25,
                lineHeight: 1.5,
                color: C.brass700,
              }}
            >
              {BRAND.nameKannada}
            </div>
            <div
              style={{
                display: "flex",
                fontWeight: 600,
                fontSize: 27,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: C.ink800,
              }}
            >
              {BRAND.name}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 19,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: C.brass700,
          }}
        >
          {eyebrow}
        </div>
      </div>

      {/* The one thing this page is. */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          /* The vertical padding is the floor, not the layout: it keeps a two
             line title off the imprint above and the plinth below. */
          padding: "22px 74px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontWeight: 600,
            fontSize: titleSize(title),
            lineHeight: 1.06,
            letterSpacing: "-0.028em",
            color: C.ink900,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <Rule width={360} />

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 30,
            lineHeight: 1.4,
            color: C.ink600,
            maxWidth: 838,
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* The plinth the signage stands on. */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 104,
          padding: "0 74px",
          background: C.ink800,
          borderTop: `3px solid ${C.brass500}`,
          fontSize: 20,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex", color: C.bone400 }}>{BRAND.devotion}</div>
        <div style={{ display: "flex", color: C.brass400 }}>
          {footnote ?? `${LOCATIONS[0].name}, Bengaluru`}
        </div>
      </div>
    </div>
  );
}
