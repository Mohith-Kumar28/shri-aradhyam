# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) with TypeScript and Tailwind. Chosen by the user in the original brief ("Ship a single Next.js page"), extended to a small multi-page site because the brief also requires a Locations page and a Unit Franchise page. No deploy target was stated, so nothing in the build may assume a server runtime beyond static export capability.

## Users

Two distinct audiences on one site.

1. **Diners.** Urban South Indian families and working professionals, roughly 28 to 45, in the outlet's city. They are choosing where to eat today or where to take visiting relatives this weekend. They arrive from a search, a maps listing, or an Instagram post, usually on a phone, often standing outside or already in a car. Their job: decide within about thirty seconds whether this place is worth the trip, see what is on the board and what it costs, and find out when it opens.
2. **Prospective unit franchisees.** Investors and first-time F&B operators evaluating a brand to buy into. They want commercials, format, area requirement, and support structure, fast, with no marketing detour. They arrive directly on the franchise page from a referral or an ad.

## Product Purpose

Shri Aradhyam is a pure-vegetarian South Indian restaurant brand. The site is an advertisement and brand-story surface, not an ordering or reservation system. Success is: a diner understanding the brand's premise and choosing to visit, and a serious franchise enquiry arriving with the right expectations already set.

## Positioning

**One roof, four states.** A premium pure vegetarian South Indian quick service
kitchen carrying the repertoires of Karnataka, Tamil Nadu, Andhra Pradesh and
Kerala on one board, with every dish naming the town it is claimed from:
Chikkamagaluru filter coffee, Mysore mavinkayi chithrana, Thanjavur ghee pongal,
Godhavari gongura rice. The provenance is the mechanism, not a garnish.

The board is fixed rather than rotating. Its sections are the ones the storefront
signage itself lists: **Udupi Meals, Thanjavur Meals, Rice Bowls, Dosa, Coffee.**

**Correction of record.** An earlier version of this document described a seven
day city rotation across five states (Monday Udupi, Tuesday Madurai, and so on,
including Telangana). That was wrong. The brand deck and the in store menu board
both describe four states and a fixed board. The rotation premise, and every
surface built on it, has been removed.

**City Launch** is the campaign that replaces it: one city's repertoire opened at
a time, cooked the way that city cooks it, run for a season and then retired.
Madurai (jigarthanda, bun parotta, ghee podi idli) and Godhavari (pesarattu,
gongura pachadi rice bowl, pesarattu upma) are the two authored so far. Its
line: "Not a product launch. A city launch."

Kerala is named on the signage and currently has no dish on the board. The site
states that plainly and says Kerala arrives with a City Launch, rather than
inventing an appam to fill the gap.

The brand is positioned as the premium tier of its category, above the
Rameshwaram Cafe class of quick service South Indian, which the owner named as
the benchmark to visibly out class.

**Launch status.** The brand has not traded yet. The first outlet opens at
Kathriguppe, Bengaluru, in the first week of September 2026, and every diner
surface is written from that position. `isPreOpening()` in `src/lib/today.ts` is
the single switch that retires the pre opening framing once the date passes.

## Operating Context

- Physical outlets are counter-forward: separate live stations (idly and dosa, annapoorna) visible from the dining floor, digital menu screens, granite-topped tables, low wooden stools, an in-store deity niche with a fresh marigold garland.
- Food is prepared fresh each day rather than held. Batter is ground the night before, and the decoction is not kept past its hour.
- Diners mostly reach the site on mobile, in short sessions, with the immediate question of what is cooking today.
- Franchise evaluation happens on desktop, in longer sessions, comparing several brands side by side.

## Capabilities and Constraints

- Six surfaces: Home (the brand argument and the opening), Menu (the board, with photographs, prices and each dish's town), Our Story (meaning, the wall, the four states, the team, packaging), Locations (the first outlet plus the announced roadmap), an outlet page per outlet at `/locations/[slug]`, and Unit Franchise (offer plus enquiry form). Plus a branded 404, a sitemap, robots and a generated share card.
- No online ordering, no table reservation, no payment, no login, no CMS. Static content.
- The franchise enquiry form is the only real interaction that captures data. No form backend has been chosen, so the submit handler must be a clearly isolated stub with no fabricated success claim.
- **Undecided and must not be invented:** all franchise commercials (investment amount, area in square feet, payback period, margin percentage, royalty, agreement term). The user chose marked placeholders. Every such value must render as an obvious TBD token, never as a plausible number.
- **Pending from the owner:** the Kathriguppe street address, service hours and telephone number, and confirmation of menu prices. All are single edits in `src/lib/site-data.ts` and all render today as visible placeholders.
- **Menu prices have two conflicting sources** (the in store board and the deck menu page). The board is treated as current; see the comment above `MENU`.
- Format for franchise is Unit Franchise, franchise-owned and franchise-operated.

## Brand Commitments

- Name: Shri Aradhyam. Kannada wordmark ಶ್ರೀ ಆರಾಧ್ಯಂ used alongside the Latin lockup, as on the storefront signage.
- Tagline: "One Roof. Four States. Endless Flavours."
- Secondary line under the wordmark: "Served with devotion." Kannada: ಭಕ್ತಿಯಿಂದ ಸೇವೆ.
- Framed on the dining wall, and reusable: "Tradition on our plates. Devotion in our hearts."
- Existing brand claims taken from the in-store wall copy, all of which are true and reusable: freshly prepared each day, premium ingredients, authentic recipes, free from preservatives, no artificial colours, no artificial flavours, one hundred percent pure vegetarian.
- Identity assets visible in the renders and binding on the design: the lotus **cradled in two open hands** inside a roundel, brass and gold signage on dark ground, jaali lattice screens in a diamond motif, temple eave corbels, hanging brass oil lamps, the mango leaf and marigold thoranam across the awning, the gopuram line drawing printed on the packaging, granite and warm bone plaster surfaces.
- The brand uses a deep temple green alongside its maroon: the pure vegetarian mark, the Bengaluru style chip against a maroon Chennai style chip, and the deck's regional headings. The design system carries it as `palm`, a second mark rather than a second metal.
- Voice: devotional and unhurried, never jokey. "Aradhyam" means the one who is worshipped, and the food is framed as an offering.
- Language: Kannada is the primary accent script. Each featured city additionally carries its own script (Tamil, Telugu, Malayalam, Kannada) where that city is named.
- Typographic constraint from the user, binding on all copy in this repository: no em-dashes and no en-dashes anywhere.

## Evidence on Hand

- Three architectural renders supplied by the user: storefront elevation with signage, interior dining floor with counters and deity niche, and a close interior with the brand wall copy in Kannada and English. These are the only real brand imagery available.
- Real in-store wall copy in both Kannada and English, transcribable from the third render.
- Competitor structure researched: kanchifiltercoffee.com/unit-franchise (named by the user as the franchise reference; it carries a hero, an opportunity overview, four why-partner cards, five support pillars, four franchisee requirement cards, and a contact block, but no investment table, no area requirement, no process steps, no FAQ, and no enquiry form). Rameshwaram Cafe franchise sites publish the category norms of 500 to 1000 sq ft and roughly twenty to thirty lakh investment.
- **Absent and not to be fabricated:** customer testimonials, review scores, press coverage, awards, outlet count, founding year, founder names, chef names, photography of actual food, and any franchise financials.

## Product Principles

1. **Provenance is the story.** Every surface makes "four states, one roof" legible within one screen, and every dish carries its town. If a visitor leaves knowing only one thing, it is that a rice bowl here belongs to a specific place.
2. **Devotion over decoration.** Traditional South Indian references earn their place structurally (lattice, corbel, stone, script) and never as applied ornament or clipart.
3. **Two audiences, no blending.** Diner surfaces sell the visit; the franchise surface sells the business and leads with structure and numbers. Neither is diluted to serve the other.
4. **Truth or a visible gap.** Where a fact is missing, the site shows an obvious placeholder rather than a convincing invention. This applies especially to franchise commercials and outlet addresses.
5. **Premium is quiet.** Space, restraint, and slow motion carry the price signal. Nothing shouts.

## Accessibility & Inclusion

No product-specific standard was established. Baseline expectations apply: the script-morphing effect must not be the only carrier of meaning, must respect prefers-reduced-motion, and must keep both the Indic and the Latin text available to assistive technology.
