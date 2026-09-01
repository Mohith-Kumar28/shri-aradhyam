/**
 * Shri Aradhyam content.
 *
 * Every string the site renders lives here so the pages stay composition only.
 * Nothing in here is invented: the menu is the printed board with the prices
 * left off, the wall lines are the ones painted in the dining room, and the two
 * locations are the two the owner has announced.
 */

export type ScriptKey = "kn" | "ta" | "te" | "ml";

/** A reading of a word: the Latin one, or one of the four southern scripts. */
export type ReadingKey = ScriptKey | "en";
export type Reading = { script: ReadingKey; text: string };

export const BRAND = {
  name: "Shri Aradhyam",
  nameKannada: "ಶ್ರೀ ಆರಾಧ್ಯಂ",
  /**
   * The name as the signage says it: English first, because it is the reading
   * every visitor can take, then the four scripts of the south in the order the
   * house names them. The masthead and the colophon cycle this whole list, so
   * the board says the name in all five the way the building would.
   */
  nameReadings: [
    { script: "en", text: "Shri Aradhyam" },
    { script: "kn", text: "ಶ್ರೀ ಆರಾಧ್ಯಂ" },
    { script: "te", text: "శ్రీ ఆరాధ్యం" },
    { script: "ta", text: "ஸ்ரீ ஆராத்யம்" },
    { script: "ml", text: "ശ്രീ ആരാധ്യം" },
  ] as Reading[],
  tagline: "All of South India. One roof. Endless flavours.",
  devotion: "Served with devotion",
  devotionKannada: "ಭಕ್ತಿಯಿಂದ ಸೇವೆ",
  meaning:
    "Aradhyam is the one who is worshipped. A plate carried to your table is an offering before it is a meal.",
  /** The framed line on the dining room wall. */
  creed: "Tradition on our plates. Devotion in our hearts.",
  creedKannada: "ತಟ್ಟೆಯಲ್ಲಿ ಸಂಪ್ರದಾಯ. ಹೃದಯದಲ್ಲಿ ಭಕ್ತಿ.",
  /** The product architecture, exactly as the storefront signage lists it. */
  signage: ["Udupi Meals", "Thanjavur Meals", "Rice Bowls", "Dosa", "Coffee"],
} as const;

/**
 * The four script readings alone, without the Latin one. This is what the
 * Restaurant schema hands a search engine as `alternateName`, so somebody
 * searching the name in their own script lands on this house.
 */
export const NAME_IN_SCRIPTS: Reading[] = BRAND.nameReadings.filter(
  (reading) => reading.script !== "en",
);

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/partner", label: "Partner With Us" },
] as const;

/**
 * Pages the header does not carry but the footer should: the long regional
 * read, the outlet's own page, and the questions. Kept out of NAV so the
 * masthead stays six items wide, and listed here so they are still linked from
 * every page on the site.
 */
export const NAV_MORE = [
  { href: "/traditions", label: "The Regions" },
  { href: "/locations/banashankari", label: "Banashankari" },
  { href: "/faq", label: "Questions" },
] as const;

/**
 * The accounts the masthead links out to, and the same three URLs the
 * Restaurant schema declares as `sameAs` — which is how a search engine ties a
 * profile to this business rather than to a business with a similar name.
 *
 * The handle is assumed to be the brand name unhyphenated. Confirm each URL
 * against the live account before this goes out: a social link is the one thing
 * on the site that can land a visitor on somebody else's page.
 */
export const SOCIAL = [
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/shriaradhyam/" },
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/shriaradhyam" },
  { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/@shriaradhyam" },
] as const;

export const CONTACT = {
  email: "management@shriaradhyam.com",
  city: "Bengaluru, Karnataka",
} as const;

/** The first outlet, and the date the masthead counts down to. */
export const OPENING = {
  outlet: "Banashankari",
  outletNative: "ಬನಶಂಕರಿ",
  city: "Bengaluru",
  cityNative: "ಬೆಂಗಳೂರು",
  /** Last week of September 2026. */
  date: "2026-09-24",
  dateLabel: "Last week of September 2026",
} as const;

/* ---------------------------------------------------------------------------
   The seven lines painted on the dining room wall, in Kannada and English.
   --------------------------------------------------------------------------- */

export const ASSURANCES = [
  { en: "Freshly prepared every day", kn: "ಪ್ರತಿದಿನ ತಾಜಾ", icon: "steam" },
  { en: "Premium ingredients", kn: "ಉತ್ತಮ ಸಾಮಗ್ರಿಗಳು", icon: "mortar" },
  { en: "Authentic recipes", kn: "ಸಾಂಪ್ರದಾಯಿಕ ಪಾಕವಿಧಾನ", icon: "leaf" },
  { en: "No preservatives", kn: "ಸಂರಕ್ಷಕಗಳಿಲ್ಲ", icon: "drop" },
  { en: "No artificial colours", kn: "ಕೃತಕ ಬಣ್ಣಗಳಿಲ್ಲ", icon: "flask" },
  { en: "No artificial flavours", kn: "ಕೃತಕ ಸುವಾಸನೆಗಳಿಲ್ಲ", icon: "flower" },
  { en: "One hundred percent pure vegetarian", kn: "ಸಂಪೂರ್ಣ ಸಸ್ಯಾಹಾರಿ", icon: "veg" },
] as const;

/* ---------------------------------------------------------------------------
   The regions. One South India, and the places inside it that cook
   differently. Each carries the script it is written in at home.
   --------------------------------------------------------------------------- */

export const REGIONS: {
  name: string;
  native: string;
  script: ScriptKey;
  places: string[];
  line: string;
}[] = [
  {
    name: "Bengaluru",
    native: "ಬೆಂಗಳೂರು",
    script: "kn",
    places: ["Benne dosa", "Bisi bele bath", "Filter coffee"],
    line: "The city's familiar favourites, cooked the way it expects them — and the benne it will not eat a dosa without.",
  },
  {
    name: "Udupi and Mysuru",
    native: "ಉಡುಪಿ ಮತ್ತು ಮೈಸೂರು",
    script: "kn",
    places: ["Udupi meals", "Mavinkayi chithrana"],
    line: "Coconut, jaggery and curry leaf. The temple kitchen's restraint, kept exactly as restrained as it is at home.",
  },
  {
    name: "Madurai to Thanjavur",
    native: "மதுரை முதல் தஞ்சாவூர்",
    script: "ta",
    places: ["Chennai dosa", "Ghee pongal", "Tomato rice"],
    line: "Sesame oil, black pepper and tamarind. Heat with a sour spine, and the ghee pongal of the delta.",
  },
  {
    name: "Andhra and Telangana",
    native: "ఆంధ్ర మరియు తెలంగాణ",
    script: "te",
    places: ["Pesarattu", "Guntur pesarattu", "Gongura"],
    line: "Guntur chilli and gongura. Nothing hidden and nothing softened, on a green gram crepe ground that morning.",
  },
  {
    name: "Kerala",
    native: "കേരളം",
    script: "ml",
    places: ["Appam", "Puttu"],
    line: "Two pressings of coconut milk, and steam instead of oil. The quietest of the traditions, and the next to arrive.",
  },
];

/* ---------------------------------------------------------------------------
   The store renders. The only photography on the site: the shopfront and
   twelve views inside the Banashankari outlet. Every page draws its pictures
   from here, so there is one place to swap a render and no dummy image can
   creep back in.
   --------------------------------------------------------------------------- */

export type StoreRender = { src: string; alt: string };

export const STORE = {
  /** The only view of the building from outside, and the one that has to come
      first anywhere the outlet is shown: the whole shopfront, its signage in
      both scripts, the awning and the steps up off the street. */
  storefront: {
    src: "/brand/kathriguppe-day.webp",
    alt: "The Banashankari shopfront on Outer Ring Road: the signed awning in Kannada and English over stone columns, the menu pylon at the kerb and the steps up from the street",
  },
  entrance: {
    src: "/store/entrance.webp",
    alt: "The entrance, looking in past stone columns and hanging brass lamps to the host desk and the lotus water bowl",
  },
  shrine: {
    src: "/store/shrine.webp",
    alt: "The carved wooden shrine inside the door, a stone deity lit between two hanging lamps, with the ordering kiosks either side",
  },
  promiseWall: {
    src: "/store/promise-wall.webp",
    alt: "The promise painted on the dining room wall in Kannada and English, with the seven assurance marks beneath it",
  },
  liveCounters: {
    src: "/store/live-counters.webp",
    alt: "The live counters under a copper fascia: Meals, Idly and Dosa, and Annaporna",
  },
  beverageCounter: {
    src: "/store/beverage-counter.webp",
    alt: "The juice and coffee counter, brass lettering on a carved fascia over a granite top",
  },
  diningHall: {
    src: "/store/dining-hall.webp",
    alt: "The dining hall under its coffered ceiling, planted dividers running between the granite tables",
  },
  hall: {
    src: "/store/hall.webp",
    alt: "The length of the hall, the lettered wall on one side and the counters on the other",
  },
  floor: {
    src: "/store/floor.webp",
    alt: "The dining floor: granite tops, low cane stools and ferns along the bench backs",
  },
  tables: {
    src: "/store/tables.webp",
    alt: "Round granite tables on the open floor, with the counters at the far end",
  },
  room: {
    src: "/store/room.webp",
    alt: "The room seen across the juice counter, the jaali screen and the counters beyond",
  },
  verandah: {
    src: "/store/verandah.webp",
    alt: "The covered verandah, stone columns and a jaali screen open to the street",
  },
  washCounter: {
    src: "/store/wash-counter.webp",
    alt: "The hand wash and R.O. water station set into stone, against a coloured glass jaali screen",
  },
} as const satisfies Record<string, StoreRender>;

/* ---------------------------------------------------------------------------
   Home
   --------------------------------------------------------------------------- */

export const HOME = {
  eyebrow: "One roof",
  heading: ["One South India.", "Countless traditions."],
  /** The wall sets one of its own small drawings against each reading. */
  lines: [
    {
      text: "Every state cooks differently.",
      icon: { src: "/art/icon-gopuram.webp", width: 138, height: 138 },
    },
    {
      text: "Every region has its own traditions.",
      icon: { src: "/art/icon-palms.webp", width: 150, height: 126 },
    },
    {
      text: "Every city has its own favourites.",
      icon: { src: "/art/icon-house.webp", width: 138, height: 108 },
    },
    { text: "Every recipe has a place it belongs to.", icon: null },
  ],
  /** Rendered as "At <brand>, {body}" so the name can carry its own weight. */
  body:
    "we bring together the authentic vegetarian food traditions of South India — celebrating the recipes, flavours and stories of the places they come from.",
  close: ["All of South India. One roof.", "Endless flavours."],
} as const;

/** The renders that run as a rail through the dark band of the home page. */
export const ROOM: (StoreRender & { title: string; caption: string })[] = [
  {
    ...STORE.entrance,
    title: "The threshold",
    caption:
      "Stone columns, brass lamps overhead, and the lotus bowl set on the floor where you come in.",
  },
  {
    ...STORE.shrine,
    title: "The shrine",
    caption:
      "The deity is lit inside the door, before the counters. A plate is an offering before it is a meal.",
  },
  {
    ...STORE.liveCounters,
    title: "The counters",
    caption:
      "Meals, idly and dosa, and Annaporna — each named on the fascia, each cooked in front of you.",
  },
  {
    ...STORE.floor,
    title: "The floor",
    caption:
      "Granite tops, low cane stools, and ferns planted along the bench backs the length of the room.",
  },
];

/* ---------------------------------------------------------------------------
   Our story
   --------------------------------------------------------------------------- */

export const STORY = {
  heading: "Our story",
  /** The opening line, read first, beside the wall's creed. */
  lead:
    "Shri Aradhyam was created to be a place where the diversity of South Indian vegetarian food could be experienced under one roof — while staying true to where every dish comes from.",
  /** The argument, in two paragraphs rather than a register of one-liners, so
      the whole of it is read without scrolling. */
  body: [
    "Not one generic version of South Indian food, but authentic recipes rooted in the regions, cities and traditions they belong to.",
    "From Bengaluru's familiar favourites to the food traditions of Udupi and Mysuru; from Madurai and Coimbatore to Thanjavur; from Andhra's pesarattu and gongura to the distinctive flavours of Telangana; and from Kerala's appam and puttu to many more regional discoveries.",
  ],
  /** The close, set large over the kolam. */
  closing: [
    "Every place has something worth preserving.",
    "And something worth discovering.",
  ],
  close: "That is why we created Shri Aradhyam.",
} as const;

/* ---------------------------------------------------------------------------
   The menu, as the board prints it. No prices on the site.
   --------------------------------------------------------------------------- */

export type MenuAccent = "palm" | "kumkum" | "brass";
export type MenuGroup = { label: string; accent: MenuAccent; items: string[] };

/**
 * The dosa column.
 *
 * The board prints the same five dosas twice, once under each city, because the
 * two lists are the same list — Bengaluru and Chennai are two ways of making
 * one dosa, not two menus. So the name is printed once and the city is offered
 * as a choice against it, which is the choice you actually make at the counter.
 * The special dosas belong to no city and keep their own group.
 */
export const DOSA: {
  title: string;
  note: string;
  /** The two cities, each with what its griddle actually does differently. */
  styles: { label: string; accent: MenuAccent; note: string }[];
  items: string[];
  special: MenuGroup;
} = {
  title: "Dosa",
  note: "Two Cities. One Tradition.",
  styles: [
    {
      label: "Bengaluru Style",
      accent: "palm",
      note: "Butter on the griddle rather than oil. Soft in the middle, lacquered at the edge.",
    },
    {
      label: "Chennai Style",
      accent: "kumkum",
      note: "Thinner and crisper, browned evenly across. Made to be eaten with sambar.",
    },
  ],
  items: ["Plain Dosa", "Masala Dosa", "Ghee Dosa", "Rawa Dosa", "Rawa Masala Dosa"],
  special: {
    label: "Special Dosas",
    accent: "brass",
    items: [
      "Benne Dosa",
      "Khali Dosa",
      "Vegetable Oothapam",
      "Multi-millet Dosa",
      "Andhra Pesarattu or Guntur Pesarattu",
    ],
  },
};

export const RICE_BOWLS = {
  title: "Rice Bowls",
  note: "Many Regions. One Tradition.",
  items: [
    { place: "Bengaluru", name: "Vegetable Pulao" },
    { place: "Coimbatore", name: "Tomato Rice" },
    { place: "Mysore", name: "Mavinkayi Chithrana" },
    { place: "Thanjavur", name: "Ghee Pongal" },
    { place: "Karnataka", name: "Bisi Bele Bath" },
  ],
  combo: {
    label: "Combo",
    name: "Anna Prasadam",
    detail: "Sakkare Pongal + Thanjavur Ghee Pongal",
  },
} as const;

export const BEVERAGES = {
  title: "Beverages",
  note: "Traditional Sips. Timeless Taste.",
  items: [
    "Chikkamagaluru Filter Coffee",
    "Black Coffee",
    "Ginger Tea",
    "Tea",
    "Kadai Milk",
    "Majjige (Buttermilk)",
    "Hot Badam Milk",
    "Cold Badam Milk",
  ],
} as const;

export const MENU_FOOTER = "All of South India. One roof. Endless flavours.";

/* ---------------------------------------------------------------------------
   Locations. Two, and only two.

   No render on either one. The page says which two kitchens there are and when
   they open, and a picture of the first would answer a question nobody asked
   here while leaving the second looking like it did not exist. The gallery is
   where the building is looked at.
   --------------------------------------------------------------------------- */

export type Location = {
  name: string;
  native: string;
  status: string;
  address?: string;
};

export const LOCATIONS: Location[] = [
  {
    name: "Banashankari",
    native: "ಬನಶಂಕರಿ",
    status: "Opening the last week of September",
    address:
      "221, Outer Ring Rd, opp. KEB, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  },
  {
    name: "Sarjapur",
    native: "ಸರ್ಜಾಪುರ",
    status: "Opening soon",
  },
];

/* ---------------------------------------------------------------------------
   Gallery
   --------------------------------------------------------------------------- */

/**
 * Five views, and no more.
 *
 * A dozen renders of one room is a contact sheet, not a gallery: past the
 * fourth or fifth the visitor stops looking and starts scrolling, and every
 * view after that costs the ones before it. So the page carries the building
 * from outside and then the four things actually worth walking in for — the
 * threshold, the shrine, the counters, the hall — and stops.
 *
 * The first entry is the whole shopfront, run full width. Everything else
 * pairs off underneath it.
 */
export const GALLERY: (StoreRender & { title: string })[] = [
  { ...STORE.storefront, title: "The building" },
  { ...STORE.entrance, title: "The threshold" },
  { ...STORE.shrine, title: "The shrine" },
  { ...STORE.liveCounters, title: "The counters" },
  { ...STORE.diningHall, title: "The hall" },
];

/* ---------------------------------------------------------------------------
   Partner with us
   --------------------------------------------------------------------------- */

export const PARTNER = {
  heading: "Partner with us",
  line: "We are opening more Shri Aradhyam kitchens across Bengaluru. If you would like to partner with us, write to us and we will get back to you.",
} as const;

/* ---------------------------------------------------------------------------
   Editorial copy.

   Everything above this line is transcribed — from the board, the walls, the
   signage. Everything below it is written: long-form copy for the pages that
   exist so a search engine has something to read and a first-time visitor has
   something to be persuaded by. It is descriptive of real regional cooking and
   of facts already stated elsewhere on this site, and it invents no hours, no
   prices and no phone number.
   --------------------------------------------------------------------------- */

/**
 * The regions, at length. The short `line` in REGIONS is what the home page
 * has room for; this is what the traditions page has room for.
 */
export const REGION_NOTES: {
  /** Matches REGIONS[].name, so the two are read as one record. */
  region: string;
  heading: string;
  paragraphs: string[];
  /** The specific things this region is known for, named plainly. */
  markers: { name: string; note: string }[];
}[] = [
  {
    region: "Bengaluru",
    heading: "The city's own taste",
    paragraphs: [
      "Bengaluru has a palate of its own, and it is not the palate of anywhere else in the south. It likes its dosa soft in the middle and lacquered at the edge, it likes butter on the griddle rather than oil, and it will forgive a great many things before it forgives a thin, under-brewed coffee.",
      "The city's benne dosa is the clearest case. Butter goes on the griddle before the batter does and again after, so the crust fries rather than toasts and the underside comes up the colour of dark honey. It is served with a potato palya and a coconut chutney that is ground fine and kept white — not the coarse, chilli-flecked chutney of the coast.",
      "Bisi bele bath belongs to the same table. Rice, toor dal and vegetables cooked into one pot with a masala that carries cinnamon, clove and dry copra, finished with ghee and a handful of fried cashew. It is not a khichdi and it is not a pulao; it is its own dish, and Karnataka is precise about it.",
    ],
    markers: [
      { name: "Benne dosa", note: "Butter on the griddle before and after the batter." },
      { name: "Bisi bele bath", note: "Rice, toor dal and vegetables in one pot, finished with ghee." },
      { name: "Filter coffee", note: "Decoction drawn slowly, met with hot milk, pulled between two tumblers." },
    ],
  },
  {
    region: "Udupi and Mysuru",
    heading: "The temple kitchen's restraint",
    paragraphs: [
      "Udupi cooking came out of a temple kitchen, and it still behaves like one. It is vegetarian by definition rather than by choice, it leans on coconut and jaggery rather than on chilli, and it treats restraint as a technique rather than as an absence. A great Udupi sambar is sweet, sour and hot in that order, and none of the three is allowed to shout.",
      "A meals plate from this tradition is a sequence, not a spread. Rice at the centre, and around it a palya, a kootu, a sambar, a rasam, a majjige huli and a payasa — each eaten with the rice in turn rather than all at once. The order is the recipe.",
      "Mysuru sits half a day's road away and cooks a little richer. Mavinkayi chithrana — raw mango grated into tempered rice with turmeric, peanut and curry leaf — is the dish that carries the difference: sharper, brighter, and unmistakably from a season rather than from a menu.",
    ],
    markers: [
      { name: "Udupi meals", note: "Rice at the centre, and the sequence of small vessels around it." },
      { name: "Mavinkayi chithrana", note: "Raw mango grated into tempered rice, peanut and curry leaf." },
      { name: "Coconut chutney", note: "Ground fine, kept white, tempered with mustard and curry leaf." },
    ],
  },
  {
    region: "Madurai to Thanjavur",
    heading: "Sesame oil, pepper and tamarind",
    paragraphs: [
      "Travel east into Tamil Nadu and the fat changes. Sesame oil replaces coconut, and with it the whole register of the food shifts — nuttier, heavier, and more willing to carry heat. Black pepper does work here that chilli does elsewhere, and tamarind runs underneath almost everything as a sour spine.",
      "Thanjavur is delta country, and delta country means rice and means ghee. Ghee pongal is the dish that proves it: raw rice and moong dal cooked soft together, then finished with ghee, whole black pepper, cumin, ginger and cashew. It is temple food, festival food and breakfast, and the same recipe serves all three.",
      "The Chennai style dosa is the other half of this tradition — thinner than Bengaluru's, crisper, more evenly browned, and made to be eaten with sambar rather than in spite of it. Two cities, one batter, and two entirely different ideas of what a dosa is for.",
    ],
    markers: [
      { name: "Ghee pongal", note: "Rice and moong dal, black pepper, cumin, ginger and cashew." },
      { name: "Chennai style dosa", note: "Thinner and crisper, made to be eaten with sambar." },
      { name: "Tomato rice", note: "Coimbatore's, sour and tempered rather than sweet." },
    ],
  },
  {
    region: "Andhra and Telangana",
    heading: "Nothing hidden, nothing softened",
    paragraphs: [
      "Andhra food does not hedge. The Guntur chilli that defines it is grown a few hours from the coast and used without apology, and the region's cooking is built to carry it — sour, salty and hot all at full strength, with rice as the only thing standing between you and it.",
      "Pesarattu is the region's great breakfast. Whole green gram, soaked and ground the same morning with green chilli, ginger and cumin, then spread thin on the griddle. It is not a dosa with the batter changed: there is no rice in it and no fermentation, so it tastes green and fresh in a way a dosa never does. Guntur pesarattu takes the same crepe and puts the chilli back in.",
      "Gongura — sorrel leaf — is the other marker. It is sour in a way tamarind is not: leafier, sharper, almost metallic, and once you have eaten it properly you can find it blindfolded. Telangana cooks it drier and hotter than the coast does, and both are correct.",
    ],
    markers: [
      { name: "Pesarattu", note: "Green gram ground that morning. No rice, no fermentation." },
      { name: "Guntur pesarattu", note: "The same crepe with the Guntur chilli left in." },
      { name: "Gongura", note: "Sorrel leaf — sour in a way tamarind is not." },
    ],
  },
  {
    region: "Kerala",
    heading: "Two pressings of coconut milk",
    paragraphs: [
      "Kerala cooks the quietest food in the south, and the most technical. Coconut is not an ingredient here so much as a method: the first pressing of the grated flesh is thick and goes in at the end, the second is thin and goes in at the start, and a cook who confuses the two has made a different dish.",
      "Appam is fermented rice batter with coconut milk in it, cooked in a curved pan so the centre stays soft and spongy while the rim goes lace-thin and crisp. Puttu is the opposite discipline — rice flour and grated coconut steamed in a cylinder, no oil anywhere near it, eaten with kadala or with banana and jaggery.",
      "It is the tradition that most rewards patience and the one that travels least well, which is precisely why it is worth carrying carefully. Kerala is the next of the five to arrive at Shri Aradhyam.",
    ],
    markers: [
      { name: "Appam", note: "Soft in the centre, lace-thin at the rim." },
      { name: "Puttu", note: "Rice flour and coconut steamed in a cylinder. No oil." },
      { name: "Coconut milk", note: "First pressing at the end, second at the start." },
    ],
  },
];

/**
 * The questions a first-time visitor actually asks, and the answers this house
 * can give today. No hours and no phone number: the outlet has not opened, and
 * an answer invented here would be a wrong answer printed in a search result.
 */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Where is Shri Aradhyam?",
    a: "The first Shri Aradhyam is at 221, Outer Ring Road, opposite KEB, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085. A second outlet at Sarjapur is opening after it.",
  },
  {
    q: "When does Shri Aradhyam open?",
    a: "The Banashankari outlet opens in the last week of September 2026. The Sarjapur outlet is opening soon after.",
  },
  {
    q: "Is Shri Aradhyam pure vegetarian?",
    a: "Yes. Shri Aradhyam is one hundred percent pure vegetarian, and it is vegetarian by definition rather than as an option on a larger menu. The kitchen also commits to no preservatives, no artificial colours and no artificial flavours.",
  },
  {
    q: "What kind of South Indian food does Shri Aradhyam serve?",
    a: "Regional South Indian vegetarian food, kept regional. Udupi and Thanjavur meals, dosa in both the Bengaluru and the Chennai style, special dosas including benne dosa and Andhra pesarattu, five regional rice bowls, and traditional beverages led by Chikkamagaluru filter coffee.",
  },
  {
    q: "Which regions of South India are on the menu?",
    a: "Five: Bengaluru; Udupi and Mysuru; Madurai through Coimbatore to Thanjavur; Andhra and Telangana; and Kerala. Each dish is cooked the way the place it comes from cooks it, rather than flattened into one generic South Indian style.",
  },
  {
    q: "What does the name Shri Aradhyam mean?",
    a: "Aradhyam is the one who is worshipped. A plate carried to your table is an offering before it is a meal — which is why the house line is 'Served with devotion', and why the shrine stands inside the door before the counters do.",
  },
  {
    q: "Does Shri Aradhyam serve filter coffee?",
    a: "Yes. Chikkamagaluru filter coffee is on the beverage board, alongside black coffee, ginger tea, tea, kadai milk, majjige, and badam milk hot or cold.",
  },
  {
    q: "Are the dosas made to order?",
    a: "Yes. The dosa and idly counter is a live counter, as are the meals counter and Annaporna. Each is named on the fascia and each cooks in front of you.",
  },
  {
    q: "Can I open a Shri Aradhyam outlet?",
    a: `We are opening more Shri Aradhyam kitchens across Bengaluru and are open to partners. Write to ${CONTACT.email} through the Partner With Us page and we will get back to you.`,
  },
  {
    q: "Is there parking at the Banashankari outlet?",
    a: "Yes. The Banashankari outlet has basement parking. It stands on Outer Ring Road at Kathreguppe, opposite KEB.",
  },
];

/** The local landing page for the first outlet. */
export const BANASHANKARI = {
  heading: "South Indian food on Outer Ring Road",
  lead:
    "The first Shri Aradhyam stands on Outer Ring Road at Kathreguppe, on the Banashankari 3rd Stage side, opposite KEB. It is a pure vegetarian house serving regional South Indian food across five traditions, with live counters for meals, for idly and dosa, and for Annaporna.",
  /** What is actually in the room, drawn from the renders rather than claimed. */
  inside: [
    {
      title: "A threshold, not a doorway",
      body: "Stone columns, brass lamps hung overhead, and a lotus bowl set on the floor where you come in. You arrive somewhere before you order anything.",
    },
    {
      title: "The shrine before the counters",
      body: "A carved wooden shrine stands inside the door, a stone deity lit between two hanging lamps. The ordering kiosks sit either side of it, which is the right way round.",
    },
    {
      title: "Three live counters",
      body: "Meals, Idly and Dosa, and Annaporna, each named in brass on a copper fascia. The juice and coffee counter runs alongside on a granite top.",
    },
    {
      title: "A hall to sit in",
      body: "Granite tops and low cane stools under a coffered ceiling, with planted dividers and ferns along the bench backs the length of the room.",
    },
  ],
  /** The seven lines painted on the dining room wall, restated for search. */
  promise:
    "The promise is painted on the wall in Kannada and in English: freshly prepared every day, premium ingredients, authentic recipes, no preservatives, no artificial colours, no artificial flavours, and one hundred percent pure vegetarian.",
} as const;
