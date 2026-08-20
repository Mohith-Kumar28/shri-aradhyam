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
export const ROOM = [
  {
    src: "/brand/kathriguppe-night.webp",
    alt: "The outlet lit at night: brass signage glowing under a stone eave, garlanded columns and a lamp course along the awning",
    title: "The threshold",
    caption:
      "The signage lights, the thoranam hangs across the awning, and the lamp course runs the length of the eave.",
  },
  {
    src: "/brand/dining-floor.webp",
    alt: "The dining floor: granite topped tables, low wooden stools, live counters at the far end and a lit deity niche with a marigold garland",
    title: "The floor",
    caption:
      "Granite tops, low stools, planted dividers, and two live counters so you watch the dosa leave the griddle.",
  },
  {
    src: "/brand/interior-wall.webp",
    alt: "The dining wall carrying the promise in Kannada and English above a row of drawn assurance marks",
    title: "The wall",
    caption:
      "The promise is painted where you eat, in Kannada and in English, with the seven marks under it.",
  },
  {
    src: "/brand/kathriguppe-day.webp",
    alt: "The storefront by day: stone columns, the Kannada and Latin lockup on the fascia and a board naming the menu sections",
    title: "The elevation",
    caption:
      "By daylight, with the board outside naming what is inside: Udupi meals, Thanjavur meals, rice bowls, dosa, coffee.",
  },
] as const;

/* ---------------------------------------------------------------------------
   Our story
   --------------------------------------------------------------------------- */

export const STORY = {
  heading: "Our story",
  paragraphs: [
    "Shri Aradhyam create a place where the diversity of South Indian vegetarian food could be experienced under one roof — while staying true to where every dish comes from.",
    "Not one generic version of South Indian food.",
    "But authentic recipes rooted in their regions, cities and traditions.",
    "From Bengaluru's familiar favourites to the food traditions of Udupi and Mysuru.",
    "From Madurai and Coimbatore to Thanjavur.",
    "From Andhra's Pesarattu and Gongura traditions to the distinctive flavours of Telangana.",
    "From Kerala's Appam and Puttu traditions to many more regional discoveries.",
    "Every place has something worth preserving.",
    "And something worth discovering.",
    "That is why we created Shri Aradhyam.",
  ],
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
    image: {
      src: "/brand/kathriguppe-night.webp",
      alt: "The Banashankari storefront lit at night",
    },
  },
  {
    name: "Sarjapur",
    native: "ಸರ್ಜಾಪುರ",
    status: "Coming soon",
  },
];

/* ---------------------------------------------------------------------------
   Gallery
   --------------------------------------------------------------------------- */

export const GALLERY: { src: string; alt: string; wide?: boolean }[] = [
  {
    src: "/brand/kathriguppe-day.webp",
    alt: "The Banashankari storefront by day, stone columns under brass signage",
    wide: true,
  },
  {
    src: "/brand/interior-wall.webp",
    alt: "Granite tables along the dining room wall, under the lettered wall panel",
  },
  {
    src: "/dishes/dosa-masala.webp",
    alt: "Masala dosa with chutney and sambar on a banana leaf",
  },
  {
    src: "/brand/dining-floor.webp",
    alt: "The dining floor, carved screens and a lit shrine beyond the counter",
    wide: true,
  },
  {
    src: "/dishes/thali-udupi.webp",
    alt: "An Udupi meal laid out in small bowls around rice",
  },
  {
    src: "/brand/storefront.webp",
    alt: "The entrance under the awning, with the lotus emblem lit above the doors",
  },
  {
    src: "/dishes/coffee-filter.webp",
    alt: "Filter coffee poured into a steel tumbler and dabara",
  },
  {
    src: "/brand/kathriguppe-night.webp",
    alt: "The storefront lit at night, the signage and lamp course glowing",
    wide: true,
  },
  {
    src: "/dishes/thali-thanjavur.webp",
    alt: "A Thanjavur meal with ghee pongal at the centre",
  },
  {
    src: "/dishes/dosa-pesarattu.webp",
    alt: "Pesarattu, the green gram crepe, with coconut chutney",
  },
  {
    src: "/dishes/rice-vegetable-pulav.webp",
    alt: "Vegetable pulao in a steel bowl",
  },
  {
    src: "/dishes/rice-tomato-bath.webp",
    alt: "Tomato rice in a steel bowl",
  },
];

/* ---------------------------------------------------------------------------
   Partner with us
   --------------------------------------------------------------------------- */

export const PARTNER = {
  heading: "Partner with us",
  line: "We are opening more Shri Aradhyam kitchens across Bengaluru. If you would like to partner with us, write to us and we will get back to you.",
} as const;
