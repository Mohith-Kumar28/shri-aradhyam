---
name: Shri Aradhyam
description: A South Indian daily almanac rendered as a website: bone paper, chocolate ink, granite plinths, one brass metal.
colors:
  bone-50: "#fdfaf4"
  bone-100: "#faf5ec"
  bone-200: "#f2eadc"
  bone-300: "#e7dcc8"
  bone-400: "#d8c9ae"
  bone-500: "#c4b294"
  ink-900: "#1f1109"
  ink-800: "#26150d"
  ink-700: "#3a2318"
  ink-600: "#4e3325"
  granite-700: "#3f3c39"
  granite-600: "#4a4744"
  granite-500: "#575149"
  granite-400: "#635d54"
  brass-700: "#785c0f"
  brass-600: "#a8811a"
  brass-500: "#c9a227"
  brass-400: "#dcbb54"
  brass-300: "#ecd9a0"
  brass-plate-face: "#a98b28"
  brass-plate-high: "#b9972e"
  brass-plate-shade: "#8f7418"
  kumkum-700: "#7d1f1b"
  kumkum-600: "#9e2b25"
  kumkum-500: "#b8443c"
  rule: "#d8c9ae"
  rule-strong: "#b9a482"
typography:
  display:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(2.6rem, 7.4vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.8vw, 3.9rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  subhead:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  entry:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  indic-entry:
    fontFamily: "Noto Serif Kannada / Tamil / Telugu / Malayalam, Alegreya, serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1.2
  seal-display:
    fontFamily: "Noto Serif Kannada / Tamil / Telugu / Malayalam, Eczar, serif"
    fontSize: "2.35rem"
    fontWeight: 600
    lineHeight: 1.2
  lead:
    fontFamily: "Eczar, Georgia, serif"
    fontSize: "clamp(1.4rem, 3vw, 2.15rem)"
    fontWeight: 400
    lineHeight: 1.24
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-small:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.19em"
  label-small:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.19em"
  data:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    letterSpacing: "0.16em"
    fontFeature: "tabular-nums"
  indic:
    fontFamily: "Noto Serif Kannada / Tamil / Telugu / Malayalam, Alegreya, serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.25
rounded:
  base: "0.125rem"
  sm: "0.075rem"
  md: "0.1rem"
  lg: "0.125rem"
  xl: "0.175rem"
spacing:
  gutter-mobile: "1.25rem"
  gutter-desktop: "2rem"
  container: "88rem"
  section-y: "6rem"
  section-y-sm: "8rem"
  section-y-lg: "10rem"
  panel-pad: "1.75rem"
  panel-pad-lg: "3rem"
  field-gap-x: "2.5rem"
  field-gap-y: "2.25rem"
components:
  button-primary:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.bone-100}"
    typography: "{typography.label-small}"
    rounded: "0"
    padding: "1.125rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.kumkum-700}"
    textColor: "{colors.bone-100}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-800}"
    typography: "{typography.label-small}"
    rounded: "0"
    padding: "0.875rem 1.5rem"
  button-outline-hover:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.bone-100}"
  link-brass:
    backgroundColor: "transparent"
    textColor: "{colors.ink-700}"
    typography: "{typography.label}"
  card-leaf:
    backgroundColor: "{colors.bone-100}"
    textColor: "{colors.ink-700}"
    rounded: "0"
    padding: "3.5rem 4rem 3.5rem 5rem"
  card-panel:
    backgroundColor: "{colors.bone-100}"
    textColor: "{colors.ink-700}"
    rounded: "0"
    padding: "3rem 2.5rem 2.75rem"
  brass-plate:
    backgroundColor: "{colors.brass-plate-face}"
    textColor: "{colors.ink-900}"
    rounded: "0"
    padding: "2.25rem"
  input-ruled:
    backgroundColor: "transparent"
    textColor: "{colors.ink-800}"
    typography: "{typography.body}"
    rounded: "0"
    padding: "0.5rem 0 0.75rem"
  input-ruled-focus:
    backgroundColor: "transparent"
    textColor: "{colors.ink-800}"
  input-ruled-error:
    backgroundColor: "transparent"
    textColor: "{colors.ink-800}"
  chip-today:
    backgroundColor: "{colors.kumkum-600}"
    textColor: "{colors.bone-100}"
    typography: "{typography.label-small}"
    rounded: "0"
    padding: "0.25rem 0.5rem"
  notice-provisional:
    backgroundColor: "transparent"
    textColor: "{colors.kumkum-700}"
    typography: "{typography.label-small}"
    rounded: "0"
    padding: "0.75rem 1rem"
  mark:
    textColor: "{colors.brass-600}"
    size: "14px"
  masthead-band:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.bone-300}"
    typography: "{typography.label-small}"
    height: "3rem"
---

# Design System: Shri Aradhyam

## Overview

**Creative North Star: "The Panchangam"**

The whole system is a South Indian daily almanac: a bone paper page with hairline ruling, one entry per day, the day that matters struck in red, and the important announcement pressed into brass. The building supplies the materials rather than a mood board: chocolate signage ink, granite plinths, brass lettering, the diamond jaali screen, the lotus roundel, the temple corbel and the lotus-bud eave course. Everything decorative in this world is structural somewhere in the storefront first, and every mark, ornament and interface control alike, is authored in one stroke language.

Density is editorial, not promotional. Long prose measures (46 to 62ch), generous section rhythm (6/8/10rem vertical), and ruled registers instead of card grids. The page argues in sentences and hairlines; it never sells in tiles. Colour is nearly absent by volume: bone ground, ink type, granite for anything muted, and two marks: brass for the metal, kumkum red for the day. There is one locked light theme with no dark variant and no toggle; dark passages exist as ink-800 grounds inside the light world, never as an alternate skin.

The signature gesture is bilingual: a word arrives in its own Indic script and resolves into Latin a beat later, and hovering brings the script back. Motion elsewhere is arrival only, content is legible before any script runs, and reveals add the arrival rather than gate the content. Confirmed rejections: the category-default dark full-bleed food hero with a centred sans headline over a grid of dish cards; kickers and eyebrows above headings; decorative section numbering; gradient text; glass as decoration; borrowed icon sets, icon fonts and text glyphs standing in for icons.

**Key Characteristics:**
- Bone almanac paper with a laid tooth under every flat fill, so no ground reads as screen
- Brass with a brushed grain, sitting at real signage tones rather than as saturated yellow paint
- Effectively square corners (0.125rem) and hairline ruling instead of boxes
- One metal (brass), one festival mark (kumkum red), no second accent
- Three type registers only: Eczar display, Alegreya prose, Archivo label and data
- Every ornament and every interface mark authored as SVG in one 1.25 stroke language
- Warm ink-tinted shadows with offset and soft blur; never neutral black, never a CSS bevel
- One locked light theme by design

## Colors

A four-role warm palette (paper, ink, stone, metal) with a single red reserved for marking the day.

### Primary
- **Signage Brass** (`brass-500`): the single metal as a flat token. Hairline rules, diamond marks, the growing underline on links, jaali lattice lines. Never body text.
- **Small-Text Brass** (`brass-700`): the only brass permitted on text at label or body size. It exists so `brass-500`/`brass-600` can stay on marks, rules and icons without ever being asked to carry a sentence.
- **Deep Brass** (`brass-600`): the interface marks, the select caret, the focus outline, and brass labels at 0.625rem and above on bone-100.
- **Lamp Brass / Pale Brass** (`brass-400`, `brass-300`): brass type and marks on ink grounds (masthead, dark bands), and the selection highlight.
- **Plate Brass** (`--brass-plate-light` → `--brass-plate-base` → `--brass-plate-shade` → `--brass-plate-edge`, a 166° four-stop raking gradient): the metal as a *surface* rather than a colour. These tones are darker and less saturated than the flat token on purpose, sheet brass in daylight, not gold paint. Only the plate material uses them.

### Secondary
- **Kumkum Red** (`kumkum-600`): the festival mark. Today's diamond in the register, the "Today" chip, the required-field bullet, field-error text and hairline. It marks; it is never a section ground.
- **Deep Kumkum** (`kumkum-700`): the wipe that fills a primary button on hover, and the text of a provisional notice.

### Neutral
- **Almanac Bone** (`bone-200`): the default page ground and body background.
- **Leaf Bone** (`bone-100`): every raised paper surface, the hero leaf, panels, forms, the mobile sheet, the signage band at 97% opacity.
- **Bone Ruling** (`bone-400` / `--rule`): the hairline that rules the entire system, and the resting border of every input.
- **Bone Wash** (`bone-300`): recessed and hover grounds inside registers.
- **Chocolate Ink** (`ink-800`, `ink-700`): headings (`ink-800`), body copy (`ink-700`), the primary button ground, the masthead band, and dark full-bleed passages.
- **Deep Ink** (`ink-900`): scrims, the plate's engraved frame and rules, and the source hue of every shadow.
- **Granite** (`granite-500` / `granite-400`): muted prose and secondary labels on bone. `granite-600`/`granite-700` are plinth and table grounds.

### Material Stops

A separate token layer, declared in `:root` under the comment `Material stops`. These are **not palette colours.** They are the gradient stops and texture alphas that make brass read as metal, granite as stone and bone as paper, and they sit deliberately between the palette's steps.

- **Plate** (`--brass-plate-light`, `--brass-plate-base`, `--brass-plate-shade`, `--brass-plate-edge`): the four stops of the seal's raking gradient. `--brass-struck-highlight` is the `.struck` engraving highlight.
- **Lattice and rule** (`--jaali-ink`, `--jaali-brass`, `--rule-brass-line`): the jaali line alphas on bone and on ink, and the brass-tinted hairline.
- **Granite speckle** (`--granite-speck-light-a`, `--granite-speck-light-b`, `--granite-speck-dark-a`, `--granite-speck-dark-b`): the four radial stops that make a plinth read as stone.
- **Shadow stops** (`--shadow-ink-soft`, `--shadow-ink-mid`, `--shadow-ink-deep`, `--shadow-ink-panel-a`, `--shadow-ink-panel-b`, `--shadow-ink-plate-a`, `--shadow-ink-plate-b`): every layer of every shadow, all tinted from `ink-900`.

**The Material Stop Rule.** A material stop is never applied to text and never used as a fill. It exists only inside a gradient, a texture or a shadow. `--brass-plate-base` as a text colour would break the 4.5:1 rule, and the flat `brass-*` ramp exists precisely so nobody has to reach for one.

**The No Literal Colour Rule.** No CSS rule in `globals.css` contains a literal hex or `rgba()`. Colours live in `@theme` (palette) or in `:root` under Material stops (materials); rules reference tokens only. The two `data:` URI textures are the sole exception, since an SVG filter cannot read a custom property. Audit test: grep the stylesheet's rules for `#` or `rgba(` and expect nothing.

### Named Rules
**The Single Metal Rule.** Brass is the only metal in this world. No silver, no copper, no second accent hue. If something needs to feel valuable, it becomes brass or it becomes ruled, it does not become a new colour.

**The Two Brasses Rule.** Brass exists twice: as a flat token (`brass-300` to `brass-700`) for rules, marks and type, and as a plate material (the raking gradient plus brushed grain) for the seal. Never fill a surface with the flat token and call it metal, and never take type colour off the plate tones.

**The Brass-700 Floor Rule.** Brass on text below 0.875rem must be `brass-700`. `brass-500` and `brass-600` are for marks, hairlines, carets and interface strokes. This is why the brass ramp has five steps instead of three.

**The 4.5:1 Worst-Ground Rule.** Every text-on-ground pair is chosen to clear 4.5:1 against the worst bone ground it can land on (`bone-300`), not against the lightest. Audit test: pick the darkest bone a component can sit on and re-check the muted tone.

**The Kumkum Marks Rule.** Kumkum red marks the day, the required field, and the error. It never becomes a surface fill larger than a chip, and it never competes with brass for ornament.

**The Locked Light Rule.** One theme. There is no `.dark` block and no toggle by design. Contrast passages are built as `ink-800` grounds inside the light world.

## Typography

**Display Font:** Eczar (with Georgia, serif)
**Body Font:** Alegreya (with Georgia, serif)
**Label/Data Font:** Archivo (with system-ui, sans-serif)
**Indic Faces:** Noto Serif Kannada, Tamil, Telugu, Malayalam (each falling back to Alegreya)

**Character:** Eczar is an Indic-rooted Latin display face with high-contrast wedge serifs, it carries the temple-signage weight without costume. Alegreya reads long and warm underneath it, and Archivo's wide-tracked uppercase supplies the printed-register voice for labels, days and figures.

### Hierarchy
- **Display** (600, `clamp(2.6rem, 7.4vw, 5.25rem)`, 0.95, -0.03em): the wordmark in the hero leaf. Once per page at most.
- **Headline** (600, `clamp(2.1rem, 4.8vw, 3.9rem)`, 1.02, -0.03em): section headings, capped at 22 to 26ch so they break as two or three balanced lines.
- **Title** (600, `clamp(1.7rem, 3.4vw, 2.4rem)`, tight, -0.025em): panel headings, form headings, card names.
- **Subhead** (600, 1.5rem, tight, -0.02em): the fixed upper step of the title tier. Franchise support headings, outlet names in the home locator, the wordmark from `sm` up.
- **Entry** (600, 1.35rem, snug, -0.02em): the fixed lower step, and the workhorse of every ruled register. Offering entries, plate titles in the rail, the day-part Latin name, the Latin city in the register detail, outlet names in the finder.
- **Indic Entry** (600, 1.65rem): an Entry set in an Indic script. One step larger than its Latin counterpart on purpose; see the Indic Optical Step Rule below.
- **Seal Display** (600, 2.35rem): the struck city on the brass plate. A one-off step for the single focal element, and the only fixed size in the display register.
- **Lead** (Eczar 400, `clamp(1.4rem, 3vw, 2.15rem)`, 1.24, -0.02em): the one-sentence statement under a display or headline. Regular weight, so it reads as prose set large rather than a second heading.
- **Body** (400, 1.0625rem, 1.7): all prose, held to a measure of 46 to 62ch.
- **Body Small** (400, 0.9375rem, 1.625): register row glosses, captions, secondary notes.
- **Label** (Archivo 600, 0.19em, uppercase): a two-step register, both steps live. 0.6875rem is the class default, used where a label stands alone; 0.625rem is the working step used by nav, buttons, column headings, ruled captions and margin glosses. There is no third step, nothing in this system sets uppercase 0.19em type below 0.625rem.
- **Data** (Archivo, tabular figures, 0.14 to 0.22em, uppercase, 0.625rem): days, dates, telephone numbers, anything that should align in a column.

### Named Rules
**The Three Register Rule.** Display, prose, label. Every string on the site belongs to exactly one, and an Indic string belongs to its own serif of the same register. There is no fourth voice and no system-UI display face.

**The Two-Step Label Rule.** The label register has exactly two live sizes, 0.6875rem and 0.625rem. 0.625rem is the floor: below it, 0.19em uppercase tracking stops being a register and becomes noise.

**The Component Layer Rule.** `.label`, `.data` and `.link-brass` are declared inside `@layer components`, so a `text-[…]` utility on the element wins. Any future component class declared in plain CSS after the Tailwind import silently outranks every utility on it and turns size overrides into dead code. Audit test: change one label's size utility and confirm the render moves.

**The Indic Optical Step Rule.** An Indic string set at the same hierarchy level as a Latin one takes the next step up: `1.65rem` Kannada against `1.35rem` Latin in the day-part headings, and the seal's `2.35rem` Telugu above its `1.25rem` Latin. Kannada, Tamil, Telugu and Malayalam carry taller glyph bodies and more internal detail than Latin at the same em, so matching the numbers makes the Indic reading look subordinate. This is optical compensation, not drift, and flattening the two to one number is the actual error.

**The Own Script Rule.** A city, the brand, and any devotional line carry their own Indic script with a real `lang` attribute, and both readings stay in the DOM. Script is never a decorative image of language.

**The No Faux Weight Rule.** `font-synthesis: none` on headings, labels and data. A synthesised bold inside a display line is the one type defect that reads as an error.

**The No Kicker Rule.** Nothing sits above a heading, no eyebrow, no label, no ordinal. Where a small line is needed it goes below the block as a colophon (see the hero leaf's devotional line), or beside the heading on a ruled row (see the brass seal's day). The only ordinals in the system are the franchise process steps, where the sequence is the information.

## Layout

One container, `88rem` max width, gutters `1.25rem` mobile / `2rem` from `sm`. Sections breathe on a three-step vertical rhythm: `6rem` mobile, `8rem` at `sm`, `10rem` at `lg`.

At `lg` the page runs on a 12-column grid, and the recurring split is 2 + 10: a narrow left margin holding the Indic gloss (the section's Kannada title plus its English translation in the label register) against a 10-column text block. Two-pane sections use fractional columns rather than halves (`1.08fr 0.92fr` in the register) so a page never reads as a symmetrical two-up. Detail panes are `sticky` at `top-32` while their register scrolls.

Registers are the default list form: a ruled column-heading row with a brass-tinted hairline, then rows at `py-5`/`sm:py-6` each closed by a hairline, with a fixed day/figure gutter (`3.2rem`, `4.5rem` at `sm`). Prose is always measured (17 to 24ch for headings and pull statements, 34 to 46ch for leads, 46 to 62ch for body).

Bilingual pairs stack on a phone and set on one line once there is room, the hero colophon puts its Kannada reading in a block, hides the brass separator below `sm`, and keeps the Latin phrase `whitespace-nowrap` so it never breaks mid-phrase. Mobile otherwise collapses columns to a single stack; the desktop margin gloss is dropped rather than restacked.

Each section carries a declared layout family, and no two adjacent sections share one: full-bleed photograph with inset leaf, ruled register with master/detail, editorial asymmetric split, centred full-bleed statement, vertical schedule with a time gutter, staggered mosaic in five weights, horizontal plate rail, hairline list with a right-aligned status column, moving brass rail, and split band on a dark ground.

**The One Family Per Section Rule.** A section states its layout family in its file header and holds it. Repeating a family back-to-back is the failure this rule exists to prevent.

## Elevation & Depth

Depth is physical and warm: paper laid on stone casts a shadow, and a brass plate is seated into paper. Every shadow in the system is tinted from `ink-900` (`rgba(31,17,9,…)`), carries both an offset and a soft blur, and is stacked in two or three layers so the falloff reads as light rather than as a border. There are no bevels: nothing simulates an edge with an inset highlight. Depth comes from the shadow, and surface comes from grain.

### Shadow Vocabulary
- **Leaf** (`.lift-leaf`, three layers off `--shadow-ink-soft`, `--shadow-ink-mid` and `--shadow-ink-deep`): a sheet of paper laid over the building. Hero-scale surfaces on photography only.
- **Panel** (`.lift-panel`, two layers off `--shadow-ink-panel-a` and `--shadow-ink-panel-b`): a panel resting on paper. Detail panes, forms, cards.
- **Brass Plate** (`.brass-plate`, two layers off `--shadow-ink-plate-a` and `--shadow-ink-plate-b` over the 166° plate gradient): the seal, seated in the page. Two layers of seated shadow and nothing else, the plate is `isolate`d so its grain can sit behind its content.
- **Struck** (`.struck`, `text-shadow` off `--brass-struck-highlight`): type engraved into brass. **Display line only.** At label and data sizes the highlight stops reading as a struck edge and reads as haze, so small type on the plate stays flat ink.

### Surface Grain
Two authored `feTurbulence` overlays give the two materials their surface, and they are the reason no fill in this system reads as a screen colour:
- **Paper tooth** (`.paper::before`): isotropic fractal noise at `baseFrequency='0.82'`, 0.32 opacity, `multiply`. Under every large bone ground.
- **Brushed brass grain** (`.brass-plate::before`): directional fractal noise at `baseFrequency='0.02 1.4'`, fine across, stretched along, at 0.5 opacity, `overlay`, on a negative z-index behind the plate's content. It is the metal counterpart to the tooth, and it is what makes the plate read as rolled sheet rather than as a gradient.

Non-shadow depth does the rest: the jaali lattice as an edge band, granite speckle grounds, and hairline ruling as the primary separator.

### Named Rules
**The Warm Shadow Rule.** Shadows are tinted from the ink, never neutral black, and always carry both offset and blur. A hard offset shadow with no blur does not exist in this world.

**The No Bevel Rule.** A material earns its edge from a seated shadow and its surface from grain, never from an inset highlight-and-shade pair. If a surface needs to feel like a physical thing, give it grain, not a bevel.

**The Four Materials Rule.** Leaf, panel, plate, struck. If a new surface needs depth, it takes one of these four or it stays flat on the paper.

**The Grain Rule.** Any large flat fill gets its material's grain, tooth on bone, brushed grain on brass. A perfectly flat fill reads as a screen colour, and this world is a printed page with metal on it.

## Shapes

Effectively square-cornered: the radius token is `0.125rem` (2px), and the derived `sm`/`md`/`lg`/`xl` steps all land between 1 and 3px. Nothing in this system is rounded, and there are no pills or circular buttons, the only circle is the filled lotus roundel emblem.

The recurring geometry is the diamond: a 45°-rotated square as the day marker, the required-field bullet, the checkbox tick, the select caret, the rule-diamond divider, the head of the location pin, and, tiled at 30px (18px dense), the jaali lattice band that edges panels, forms and full-bleed sections. Borders are hairlines: 1px `bone-400` for structure, `rgba(201,162,39,0.55)` for a brass-tinted register heading rule, `rgba(31,17,9,0.25)` for a rule engraved into brass. Inputs are ruled blanks with a single bottom border, no box. The focus ring is a 2px `brass-600` outline at 3px offset with a 1px radius, applied globally.

All drawing is authored SVG in a single stroke language, 1.25 stroke width (1.4 for interface rules), round caps and joins, `currentColor`, across both families: the ornament set (LotusRoundel, Corbel, EaveCourse, JaaliBand, Kolam, AssuranceIcon, RuleDiamond) and the interface marks (see Components). Tiled ornament is repeated at a fixed pixel size rather than stretched, because a stretched bud is a smear and this is carved stone. The header hangs its eave course as a real silhouette below the signage band.

## Components

### Buttons
- **Shape:** square (0.125rem token; effectively 0 visible radius)
- **Primary:** ink-800 ground, bone-100 label type at 0.625rem/0.19em uppercase, `2rem` to `2.25rem` horizontal padding, `1.125rem` to `1.25rem` vertical. A kumkum-700 panel sits at `-100%` inside and wipes across on hover over 900ms on the shared ease. The label sits above the wipe.
- **Outline:** 1px ink-700 border on transparent, ink-800 label; an ink-800 panel wipes down from `-100%` on hover and the label turns bone-100. Used for the header's franchise action.
- **Ghost / Text:** the brass underline link, a 1px brass-500 rule under the label that grows from the left over 620ms on hover and focus-visible. Where it points somewhere, it carries an `arrowRight` mark in brass at 13 to 14px.
- **Focus:** the global 2px brass-600 outline at 3px offset. Buttons never lose it.
- **Disabled:** opacity 0.6, no colour change.

### Chips
- **Today chip:** kumkum-600 ground, bone-100 label at 0.625rem, `0.25rem 0.5rem`, square. Marks the current day inside a register row.
- **State:** there is no unselected chip variant, a chip's presence is the state.

### Cards / Containers
- **Corner Style:** square.
- **Background:** bone-100 with the paper tooth; dark variants use ink-800 or granite grounds.
- **Shadow Strategy:** `Leaf` for hero-scale surfaces over photography, `Panel` for everything else. Flat on the page ground is also valid.
- **Border:** none. A jaali band (`h-5` to `h-6`, opacity 0.45) along the top edge does the work a border would.
- **Internal Padding:** `1.75rem`/`2.5rem` to `3rem` at `sm`; leaves are asymmetric (a wider left inset, `pl-12` → `pl-20`, to clear the jaali edge band).

### Inputs / Fields
- **Style:** ruled blanks. No background, no box; a single 1px bone-400 bottom border, `pb-3 pt-2`, body-size ink-800 text, granite-400 placeholders. Labels are 0.625rem uppercase granite-500 above the blank, with a kumkum-600 diamond bullet when required.
- **Focus:** the bottom rule turns brass-500 over a 500ms colour transition. The global brass focus ring still applies.
- **Error:** the bottom rule turns kumkum-600 and a kumkum-600 label-register message appears below; the field is marked `data-field-error` so the first error can be scrolled to.
- **Select:** the same blank, `appearance-none`, with a brass-600 rotated-square caret at the baseline.
- **Checkbox:** a 1.125rem square granite-500 outline holding a rotated kumkum-600 square that fades in on check.

### Interface Marks (the icon system)
One component, `Mark`, holds the whole set: `menu`, `close`, `pin`, `clock`, `phone`, `arrowRight`, `arrowDown`, `arrowUpRight`. Each is drawn on a 24-unit grid in the ornament's own stroke language (1.25, raised to 1.4 for the menu and close rules), `currentColor`, `aria-hidden`, `shrink-0` by default, rendered at 13 to 14px beside label-register type and coloured brass-600 on bone or brass-400 on ink. The drawings are the world's, not a library's: `menu` is three of the almanac's rules rather than a hamburger, `pin` is the diamond on a stem rather than a teardrop, and the arrows are a hairline with a chevron so they match the ruling vocabulary. There is no icon font, no borrowed icon package in any rendered component, and no text glyph standing in for an icon.

**The Authored Mark Rule.** Every mark in the interface is drawn here, in this stroke language, from this world. A new control that needs a mark gets one added to `MARKS`, it does not get an import, an emoji, or an arrow glyph.

### Brass Seal Plate (signature)
The day's announcement as sheet brass seated in the page: the plate gradient with its brushed grain, the seated shadow, and an engraved inner frame inset 7px in `ink-900/22`. It opens with a ruled top row, the diamond mark at one end, the day in the data register engraved at the other, closed by an `ink-900/25` hairline, so the day is register furniture beside the city rather than a label stacked above it. Below the rule: the city in its own Indic script at 2.35rem display, `.struck`; the Latin city in display at `text-xl`, flat; a centred 3rem hairline; the anchor dish in body-small; and the IST date line in the data register. Only the Indic display line is struck.

### Provisional Notice
Owner data that has not landed yet is marked, never faked: a label-register line in kumkum-700 inside a 1px `kumkum-600/45` hairline box at `0.75rem 1rem`. The same material carries a failed form submission. Reuse it for any honest "not yet confirmed" statement.

### Script Morph (signature)
One `inline-grid` slot holding two readings of the same word: the Indic script and the Latin. In `settle` mode the word arrives in its own script and, once 40% visible, resolves to Latin after a per-instance delay (900 to 2300ms, staggered so the wordmark settles before the city); hovering or focusing the holder brings the script back. In `hover` mode the script rests and the Latin appears on demand. Each transition is 700ms on the shared ease, cross-fading with a 5px blur and a 0.16em vertical drift. Both readings stay in the DOM with correct `lang` attributes, and the holder is focusable with the brass focus ring drawn around the slot.

### Navigation
Two bands. A masthead band (ink-800, bone-300 label type, 3rem tall) states the day and its city the way an almanac states its date; it collapses to zero height and zero opacity on scroll past 56px over 700ms. Below it the signage band (bone-100 at 97% with a 2px backdrop blur) carries the lotus roundel, the wordmark, label-register links with the brass underline, and the outline franchise action; its vertical padding tightens from 1.15rem to 0.7rem when compact and the roundel shrinks 40 → 34px. The eave course hangs beneath it as an SVG silhouette. The mobile trigger is a bordered label button carrying the `menu` mark; the sheet is a bone-100 surface built in the same material, jaali edge band, ruled display-size links at `py-5`, `close` mark on the dismiss control, primary action at the foot, behind an ink-900/55 scrim, not a stock drawer.

### Motion System
One shared ease (`--ease-almanac`, `cubic-bezier(0.16, 1, 0.3, 1)`) and seven named keyframes: `rise` (900ms, the default reveal: 26px up, blur 6px → 0), `wipe-up` (1100ms, clip-path reveal for large leaves), `rule-draw` (1200ms, `scaleX` from the left for register rows and hairlines), `seal-press` (1200ms, the brass plate landing from 1.5× and -14°), `kolam-draw` (2600ms stroke-dashoffset), `lamp` (5.5s breathing glow) and `rail` (46s linear marquee, paused on hover or focus-within).

Reveals use a three-attribute protocol: authored content carries `data-reveal`, the provider adds `data-armed="true"` (hiding it) only once JS is running, then `data-shown="true"` to play. Content is therefore visible without JS, and a failsafe sweep shows anything left armed. Staggers are per-element `--reveal-delay` (70ms steps in registers). A full `prefers-reduced-motion` block flattens every reveal, stops the rail, lamp and kolam, cuts morph transitions to 1ms, and locks a settling morph to its Latin reading.

**The Arrival-Only Rule.** Motion adds the arrival; it never gates the content. If a reveal fails, the page is still complete and readable.

## Carried, and outside the system

`src/components/ui/` holds ten shadcn CLI generated primitives (accordion, badge, button, input, label, select, separator, sheet, tabs, textarea). **Nothing outside that directory imports any of them and no route renders one.** The world's own primitives were authored instead: ruled form fields on bone, the diamond-marker FAQ register, the `Mark` icon set, the filter tabs on a brass baseline.

They are recorded here rather than canonized, because they contradict the system in three ways: rounded radii above `0.125rem`, a `0.8rem` type step that is on no ramp here, and the last three `lucide-react` imports in the repo (`sheet`, `accordion`, `select`). None of it ships in a bundle, since nothing imports it.

If a shadcn primitive is ever adopted, it is restyled into this world first: square corners, hairline borders, the label register, and no borrowed chevrons. `components.json` is configured, so any primitive can be re-added on demand and the directory can equally be deleted without loss.

## Do's and Don'ts

### Do:
- **Do** put the paper tooth under any large bone fill and the brushed grain on any brass surface, so no flat fill reads as a screen colour.
- **Do** take metal surfaces from the plate material (166° gradient plus grain plus seated shadow) and metal lines and type from the flat brass token. They are two different things.
- **Do** rule lists as registers, hairline `bone-400` rows with a brass-tinted heading rule and a fixed figure gutter, instead of reaching for card grids.
- **Do** use `brass-700` for any brass text below 0.875rem, and keep `brass-500`/`brass-600` on marks, rules, carets and interface strokes.
- **Do** keep the label register to its two live steps, 0.6875rem and 0.625rem.
- **Do** declare any new component class inside `@layer components`, so size and colour utilities on the element still win.
- **Do** check every muted tone against the darkest bone ground it can land on (`bone-300`), not the lightest.
- **Do** take depth from exactly one of the four materials, leaf, panel, brass plate, struck, and leave everything else flat.
- **Do** confine `.struck` to display-size type on brass; small type on the plate stays flat ink.
- **Do** measure prose: 17 to 26ch for headings and pull statements, 34 to 46ch for leads, 46 to 62ch for body.
- **Do** give a section its own layout family, declared in the file header, and never repeat a family in adjacent sections.
- **Do** draw any new interface mark into `Mark`'s set, on the 24-unit grid, at 1.25 to 1.4 stroke, in `currentColor`.
- **Do** carry both readings of a bilingual word in the DOM with real `lang` attributes, so meaning never depends on the animation.
- **Do** stack a bilingual pair on a phone and set it on one line from `sm` up, keeping the Latin phrase unbroken.
- **Do** mark unconfirmed owner data with the provisional notice material rather than inventing plausible values.
- **Do** route every transition through `--ease-almanac` and one of the seven named keyframes.

### Don't:
- **Don't** add a dark theme, a `.dark` block, or a theme toggle. Dark passages are `ink-800` grounds inside the one locked light theme.
- **Don't** introduce a second metal or a second accent hue. Brass is the only metal; kumkum only marks.
- **Don't** let brass drift to saturated yellow. The plate tones are deliberately darker and less saturated than gold paint.
- **Don't** let kumkum red become a section ground, it stays on diamonds, chips, bullets, errors and the button hover wipe.
- **Don't** round corners past the `0.125rem` token. No pills, no circular buttons; the only circle is the lotus roundel.
- **Don't** ship a neutral-black shadow, a hard offset shadow with no blur, or an inset highlight-and-shade bevel.
- **Don't** set uppercase 0.19em label type below 0.625rem.
- **Don't** declare a component class outside `@layer components`; it will silently outrank every utility on the element and turn overrides into dead code.
- **Don't** place a kicker, eyebrow, label or ordinal above a heading. Small lines sit below the block as a colophon, or beside it on a ruled row.
- **Don't** number sections decoratively. The franchise process steps are the only ordinals, because there the sequence is the information.
- **Don't** use gradient text, or glass and blur as decoration. The header's 2px blur exists only to keep type legible over scrolling content on a 97%-opaque band.
- **Don't** import a third-party icon set, use an icon font or an emoji, or let a text glyph such as `→` stand in for an icon.
- **Don't** let a synthesised weight ship: keep `font-synthesis: none` on display, label and data type.
- **Don't** hide content behind a reveal. Authored markup is visible; the arming attribute is added by JS and swept clear on failure.
