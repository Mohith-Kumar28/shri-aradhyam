/**
 * Shri Aradhyam content.
 *
 * Every string the site renders lives here so the pages stay composition only.
 * Nothing in here is invented: the menu is the printed board with the prices
 * left off, the wall lines are the ones painted in the dining room, and the two
 * locations are the two the owner has announced.
 */

export type ScriptKey = "kn" | "ta" | "te" | "ml";

export const BRAND = {
  name: "Shri Aradhyam",
  nameKannada: "ಶ್ರೀ ಆರಾಧ್ಯಂ",
  /** The name in the four scripts of the south, in the brand's order. */
  nameInScripts: [
    { script: "kn", text: "ಶ್ರೀ ಆರಾಧ್ಯಂ" },
    { script: "ta", text: "ஸ்ரீ ஆராத்யம்" },
    { script: "te", text: "శ్రీ ఆరాధ్యం" },
    { script: "ml", text: "ശ്രീ ആരാധ്യം" },
  ] as { script: ScriptKey; text: string }[],
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

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/partner", label: "Partner With Us" },
] as const;

export const CONTACT = {
  email: "hello@shriaradhyam.com",
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
   The store renders. The only photography on the site: twelve views of the
   Banashankari outlet. Every page draws its pictures from here, so there is one
   place to swap a render and no dummy image can creep back in.
   --------------------------------------------------------------------------- */

export type StoreRender = { src: string; alt: string };

export const STORE = {
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

export type MenuGroup = { label: string; accent: "palm" | "kumkum" | "brass"; items: string[] };

export const DOSA: { title: string; note: string; groups: MenuGroup[] } = {
  title: "Dosa",
  note: "Two Cities. One Tradition.",
  groups: [
    {
      label: "Bengaluru Style",
      accent: "palm",
      items: ["Plain Dosa", "Masala Dosa", "Ghee Dosa", "Rawa Dosa", "Rawa Masala Dosa"],
    },
    {
      label: "Chennai Style",
      accent: "kumkum",
      items: ["Plain Dosa", "Masala Dosa", "Ghee Dosa", "Rawa Dosa", "Rawa Masala Dosa"],
    },
    {
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
  ],
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
   --------------------------------------------------------------------------- */

export type Location = {
  name: string;
  native: string;
  status: string;
  address?: string;
  image?: { src: string; alt: string };
};

export const LOCATIONS: Location[] = [
  {
    name: "Banashankari",
    native: "ಬನಶಂಕರಿ",
    status: "Opening the last week of September",
    address:
      "221, Outer Ring Rd, opp. KEB, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
    image: STORE.entrance,
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
 * The gallery is laid as a collage rather than a contact sheet, so the tiles
 * come in three sizes:
 *
 *   hero  — two columns by two rows, cropped square. The symmetrical views.
 *   wide  — two columns by one row, a panoramic strip. The horizontal views:
 *           a counter, a wall, a colonnade, all of which read well as a band.
 *   small — one cell. The busier views, which carry at a glance.
 *
 * The order is the order you walk the room, and the sizes are chosen so the
 * twelve tiles tile a four column grid exactly: 4 heroes + 4 wides + 4 smalls
 * is 28 cells, which is seven full rows with no holes. The one exception is the
 * last pair, which relies on dense flow to back-fill the final row — see the
 * comment on the grid in the gallery page.
 */
export type GalleryTile = StoreRender & { size: "hero" | "wide" | "small" };

export const GALLERY: GalleryTile[] = [
  { ...STORE.entrance, size: "hero" },
  { ...STORE.shrine, size: "hero" },
  { ...STORE.promiseWall, size: "wide" },
  { ...STORE.liveCounters, size: "wide" },
  { ...STORE.hall, size: "hero" },
  { ...STORE.washCounter, size: "small" },
  { ...STORE.diningHall, size: "small" },
  { ...STORE.beverageCounter, size: "wide" },
  { ...STORE.floor, size: "small" },
  { ...STORE.tables, size: "small" },
  { ...STORE.room, size: "hero" },
  { ...STORE.verandah, size: "wide" },
];

/* ---------------------------------------------------------------------------
   Partner with us
   --------------------------------------------------------------------------- */

export const PARTNER = {
  heading: "Partner with us",
  line: "We are opening more Shri Aradhyam kitchens across Bengaluru. If you would like to partner with us, write to us and we will get back to you.",
} as const;
