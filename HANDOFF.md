# What to replace with real material

Everything on this list is either a placeholder or authored illustrative content.
The site is built so each item drops in without touching layout. Nothing here is
presented to a visitor as confirmed fact: each one renders either as a visible
TBD token or under an on-page notice.

Ordered by how much it holds the site back.

## 1. Photography of the food

**Nothing on this site shows a dish.** That is the single biggest gap, and it is
deliberate: no stock or generated food image stands in for a plate this kitchen
actually cooks, because a visitor would read it as a photograph of your food.

The slot already exists. In `src/lib/site-data.ts`, every entry in `ROTATION`
accepts an optional `image`:

```ts
{
  dayIndex: 4,
  city: "Hyderabad",
  // ...
  image: {
    src: "/dishes/hyderabad.webp",
    alt: "Bagara baingan with sesame gravy, served on a granite table",
  },
}
```

Put the files in `public/dishes/` and fill in the field. The register detail
panel renders the photograph automatically. Seven photographs, one per city, is
the minimum that makes the rotation legible.

Worth shooting at the same time: the counter mid-service, the deity niche with
its garland, and a full midday plate in courses. Those three would carry the
"premium" argument further than anything left in CSS.

## 2. Outlet addresses, telephone numbers and hours

In `src/lib/site-data.ts`:

- Replace the entries in `OUTLETS` with the real outlets.
- Set `OUTLETS_ARE_PLACEHOLDER = false`. The notice on the home locator and the
  banner on the Locations page both disappear on their own.
- Set `HOURS_CONFIRMED = false` to `true` and replace `HOURS_PLACEHOLDER` with
  the real service hours on each outlet.
- `CONTACT.phone`, `CONTACT.email`, `CONTACT.franchiseEmail` and
  `CONTACT.office` are all placeholders.
- The header masthead currently says "Open all seven days" with no time, and the
  footer says "Times to be confirmed". Both can carry real hours once confirmed.

Seat counts and the "site confirmed" status for Mysuru were removed rather than
guessed. Add them back only as real figures.

## 3. Franchise commercials

In `src/lib/site-data.ts`, every row of `FRANCHISE_TERMS` with
`confirmed: false` renders as a ruled blank plus a "To be confirmed" mark:
total investment, franchise fee, carpet area, seating, royalty, payback period,
agreement term and setup timeline.

Replace the `value` and set `confirmed: true` on each. The two rows already
marked `confirmed: true` (the Unit Franchise format and the exclusive catchment)
are the only commercial facts stated as settled.

The FAQ answers are written so they stay true while the numbers are pending:
they say the commercial sheet is shared after the location study. If you publish
the figures on the page, revisit `FRANCHISE_FAQ` so the two do not contradict.

## 4. The enquiry form has no backend

`src/components/franchise/enquiry-form.tsx` validates the form, then composes
the enquiry in the visitor's own mail application addressed to
`CONTACT.franchiseEmail`. It never claims to have sent anything, and a note
under the form says so.

To wire a real endpoint: set `MODE` to `"api"` at the top of that file and
replace the body of `send` with your POST. The idle, sending, handed-off and
failed states already exist and are already styled.

## 5. Menu content to confirm with the kitchen

Authored from the real regional repertoire of each city, and plausible, but not
confirmed as your menu:

- The five dishes and the anchor dish for each of the seven cities in `ROTATION`.
- The four service shifts and their windows in `DAY_PARTS`. The page currently
  states these are the intended pattern and are being confirmed.
- The per-city prose in `note` and the one-line `character` for each day.

## 6. Facts the site deliberately never claims

These were left out because there was no source, and they should only be added
as real material:

- Founding year, founder names, chef names.
- Outlet count, covers served, any growth figure.
- Customer testimonials, review scores, ratings.
- Awards, press coverage, certifications beyond the pure vegetarian mark.

If you want any of these on the page, send the real detail and it can be placed.

## Brand truth already on the site

For reference, these are taken from your storefront and your in-store wall copy
and are treated as settled: the name and its Kannada wordmark, the tagline
"Five States. One Roof. Endless Flavours.", "Served with devotion", and the
seven assurances (freshly prepared every day, premium ingredients, authentic
recipes, no preservatives, no artificial colours, no artificial flavours, one
hundred percent pure vegetarian).

The three architectural renders in `public/brand/` are your images and are used
as the storefront, the dining floor and the wall.
