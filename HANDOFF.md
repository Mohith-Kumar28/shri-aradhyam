# What to replace with real material

Everything on this list is either a placeholder or authored content awaiting your
confirmation. The site is built so each item drops in without touching layout,
and nothing here is presented to a visitor as confirmed fact: each one renders
either as a visible "to be confirmed" token or under an on page notice.

Ordered by how much it holds the site back.

## 1. Menu prices, and a conflict between your two sources

**This is the one thing to check first, because the whole menu page is built on
it.** Two of your own documents disagree:

| | In store board (TV 1, photographed 13 August 2026) | Brand deck menu page |
|---|---|---|
| Plain Dosa | ₹90, same both styles | ₹79 Bengaluru / ₹89 Chennai |
| Dosa range | ₹90 to ₹140, includes Rawa and Rawa Masala | ₹79 to ₹149, includes Ghee Masala |
| Vegetable Pulao | ₹90 | ₹139 |
| Rice bowls | Tomato Rice, Mavinkayi Chithrana, Ghee Pongal, Bisi Bele Bath | Tomato Bath, Gongura Rice, Sambar Rice, Temple Prasadam Rice |
| Thali | not shown (it is screen 1 of several) | Udupi ₹199, Thanjavur ₹229 |
| Filter coffee | ₹30 as a beverage | ₹39 as an add on |

**What the site currently does**, and it is one edit to change: the board is
treated as the operating menu for Dosa, Rice Bowls and Beverages; the deck
supplies the Thali, the add ons and a Signature tier. Where both name the same
dish at two prices, the board wins.

Everything lives in the `MENU` const in `src/lib/site-data.ts`. Correct the
numbers there, then set `PRICES_CONFIRMED = true` and the notice at the top of
`/menu` disappears on its own.

## 2. Kerala has no dish on the board

Your signage names four states. The board carries Karnataka, Tamil Nadu and
Andhra Pradesh. Rather than invent a Kerala dish, the site says so: filtering
`/menu` to Kerala shows a note that Kerala arrives with a City Launch, and the
Kerala card on the home page says the same.

Send a Kerala dish or two and the gap closes by itself.

## 3. Outlet details

In `src/lib/site-data.ts`, the `OUTLETS` entry for Kathriguppe still needs:

- the real street address (`addressLines` currently carries a bracketed placeholder)
- the telephone number (`CONTACT.phone` is `+91 XXXXX XXXXX`)
- service hours. Replace `HOURS_PLACEHOLDER` and set `HOURS_CONFIRMED = true`;
  the ruled blanks and the "to be confirmed" marks on `/locations/kathriguppe`
  clear themselves.
- `CONTACT.email`, `CONTACT.franchiseEmail` and `CONTACT.office` are placeholders.

The opening date is set in `OPENING` as 1 September 2026 with the label "First
week of September 2026". The countdown in the masthead and the hero seal both run
off it, and `isPreOpening()` retires the pre opening framing the day it passes.
If the date moves, change it in that one place.

## 4. Photography

**Every dish image on this site is a crop from your brand deck or your menu
board, not a photograph of plated food.** They are good enough to launch on and
they are not the real thing.

Files live in `public/dishes/`. Each is referenced from an `image` field in
`MENU`, `CITY_LAUNCH` or the `PACKAGING` list in `src/app/story/page.tsx`.
Every one of those fields is **optional**: remove it and the card degrades to a
ruled register row or a drawn gopuram placeholder, so a real shoot drops in field
by field and no layout moves.

Worth shooting, in rough order of value:

1. The two thalis on a real leaf. They carry the premium argument.
2. The dosas, all four styles, on the griddle and plated.
3. The counter mid service, and the deity niche with its garland.
4. Filter coffee being pulled between tumbler and davara.

`public/brand/kathriguppe-day.webp` and `kathriguppe-night.webp` are also deck
renders. The outlet page labels them as renders and says photographs follow once
the doors open.

## 5. Franchise commercials

In `src/lib/site-data.ts`, every row of `FRANCHISE_TERMS` with
`confirmed: false` renders as a ruled blank plus a "To be confirmed" mark: total
investment, franchise fee, carpet area, seating, royalty, payback period,
agreement term and setup timeline.

Replace the `value` and set `confirmed: true` on each. The two rows already
marked `confirmed: true` (the Unit Franchise format and the exclusive catchment)
are the only commercial facts stated as settled.

**Nothing from the investor deck is on the public site.** The investment figure,
the royalty percentage, the ROI, the six year projection, the enterprise
valuation and the equity slabs are all absent by decision, along with the
competitor revenue table. The FAQ answers are written so they stay true while the
numbers are pending: they say the commercial sheet follows the location study. If
you publish figures on the page, revisit `FRANCHISE_FAQ` so the two agree.

There is an automated check for this. See "Truth audit" below.

## 6. The enquiry form has no backend

`src/components/franchise/enquiry-form.tsx` validates the form, then composes the
enquiry in the visitor's own mail application addressed to
`CONTACT.franchiseEmail`. It never claims to have sent anything, and a note under
the form says so.

To wire a real endpoint: set `MODE` to `"api"` at the top of that file and
replace the body of `send` with your POST. The idle, sending, handed off and
failed states already exist and are already styled.

## 7. Which City Launch is live

`CITY_LAUNCH` holds Madurai and Godhavari, both taken from your campaign
artwork. `CURRENT_LAUNCH_ID` is `null`, so the home page presents City Launch as
the format rather than claiming one is on the counter. Set it to `"madurai"` or
`"godhavari"` and a kumkum "Now on the counter" chip appears.

## 8. Still missing, and deliberately never claimed

These were left out because there is no source, and they should only be added as
real material:

- Founding year, and any outlet count or covers figure.
- Customer testimonials, review scores, ratings.
- Awards, press coverage, certifications beyond the pure vegetarian mark.
- Swiggy and Zomato listing URLs, and social accounts. `/story` says you will be
  listed from opening week; it does not link anywhere yet.

Every competitor in this category leans on testimonials, awards and a "since
19XX" number. This site earns its premium from restraint instead. If you want any
of the above on the page, send the real detail and it can be placed.

## Brand truth already on the site

Taken from your storefront, your in store wall and your brand deck, and treated
as settled:

- The name, the Kannada wordmark ಶ್ರೀ ಆರಾಧ್ಯಂ, and ಭಕ್ತಿಯಿಂದ ಸೇವೆ.
- The tagline "One Roof. Four States. Endless Flavours."
- "Tradition on our plates. Devotion in our hearts."
- The seven assurances, and the wall paragraph quoted verbatim on `/story`.
- The four states, and each dish's town.
- The signage product list: Udupi Meals, Thanjavur Meals, Rice Bowls, Dosa, Coffee.
- Kathriguppe, Bengaluru, opening the first week of September 2026, with basement
  parking.
- The Bengaluru and India roadmap, stated as intentions rather than signed sites.
- Divyashree B S, Vikas Perumalsamy and Abilash Bellur, with their roles.
- The four packaging items.

## Truth audit

Two checks worth re running before any deploy, from the repo root after
`npm run build`:

```bash
# 1. No investor figure may reach a public page.
FILES=(.next/server/app/**/*.html)
grep -oih -E '100cr|valuation|equity|ROI|Lakhs|283\.5|royalty income' "${FILES[@]}" | wc -l   # expect 0

# 2. No em dashes or en dashes anywhere. This is a standing instruction.
grep -rn '[—–]' src/   # expect no output
```

Both pass as of this handoff.
