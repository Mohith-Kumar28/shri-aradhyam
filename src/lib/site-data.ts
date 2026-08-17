/**
 * Shri Aradhyam content.
 *
 * Three kinds of value live in here and they are not the same:
 *
 *  1. Brand truth taken from the storefront, the in store wall copy, the
 *     printed menu board and the brand deck. Safe to state as fact.
 *  2. Values still awaiting the owner, rendered as visible TBD tokens rather
 *     than plausible inventions: every franchise commercial, the street
 *     address, the telephone number and the service hours.
 *  3. Menu prices, which have two conflicting sources. See PRICES_CONFIRMED.
 *
 * Nothing in here invents a review, an award, an outlet count or a number.
 * No figure from the investor deck (investment, royalty, ROI, valuation,
 * equity) appears in this file or anywhere on the public site.
 */

export const BRAND = {
  name: "Shri Aradhyam",
  nameKannada: "ಶ್ರೀ ಆರಾಧ್ಯಂ",
  tagline: "One Roof. Four States. Endless Flavours.",
  devotion: "Served with devotion",
  devotionKannada: "ಭಕ್ತಿಯಿಂದ ಸೇವೆ",
  meaning:
    "Aradhyam is the one who is worshipped. A plate carried to your table is an offering before it is a meal.",
  /** The framed line on the dining room wall. */
  creed: "Tradition on our plates. Devotion in our hearts.",
  /** The product architecture, exactly as the storefront signage lists it. */
  signage: ["Udupi Meals", "Thanjavur Meals", "Rice Bowls", "Dosa", "Coffee"],
} as const;

export type ScriptKey = "kn" | "ta" | "te" | "ml";

export type StateName =
  | "Karnataka"
  | "Tamil Nadu"
  | "Andhra Pradesh"
  | "Kerala";

/* ---------------------------------------------------------------------------
   The four states. This is the brand's mechanism: one roof, four kitchens'
   worth of repertoire, every dish carrying the town it is claimed from.
   --------------------------------------------------------------------------- */

export const STATES: {
  name: StateName;
  native: string;
  script: ScriptKey;
  /** The regional key. See the colour rule in DESIGN.md. */
  accent: "palm" | "kumkum" | "brass" | "granite";
  line: string;
  cities: string[];
}[] = [
  {
    name: "Karnataka",
    native: "ಕರ್ನಾಟಕ",
    script: "kn",
    accent: "palm",
    line: "Coconut, jaggery and curry leaf. The temple kitchen's restraint, and the benne that Bengaluru will not eat a dosa without.",
    cities: ["Bengaluru", "Udupi", "Mysore", "Chikkamagaluru"],
  },
  {
    name: "Tamil Nadu",
    native: "தமிழ்நாடு",
    script: "ta",
    accent: "kumkum",
    line: "Sesame oil, black pepper and tamarind. Heat with a sour spine, and the ghee pongal of the Thanjavur delta.",
    cities: ["Chennai", "Thanjavur", "Coimbatore", "Madurai"],
  },
  {
    name: "Andhra Pradesh",
    native: "ఆంధ్రప్రదేశ్",
    script: "te",
    accent: "brass",
    line: "Gongura and Guntur chilli. Nothing hidden and nothing softened, on a green gram crepe ground that morning.",
    cities: ["Guntur", "Godhavari"],
  },
  {
    name: "Kerala",
    native: "കേരളം",
    script: "ml",
    accent: "granite",
    line: "Two pressings of coconut milk, and steam instead of oil. The quietest of the four, and the next to arrive.",
    cities: ["Thrissur"],
  },
];

/* ---------------------------------------------------------------------------
   The menu.

   PRICE SOURCES, and they disagree.

   a) The in store board photographed on 13 August 2026 ("TV 1"), which carries
      Dosa, Rice Bowls and Beverages.
   b) The brand deck menu page, which carries a higher tier of the same
      sections plus the Thali and the add ons, which the board does not show.

   Working rule, one edit to change: the board is treated as the operating
   menu for Dosa, Rice Bowls and Beverages, and the deck supplies the Thali,
   the add ons and the signature tier. Where the two name the same dish at two
   prices, the board wins.

   Kerala is named as one of the four states and has no dish on either source.
   That is left visible rather than filled with an invented appam.
   --------------------------------------------------------------------------- */

/** Flip to true once the kitchen signs off. The provisional note on /menu is driven by this. */
export const PRICES_CONFIRMED = false;

export type MenuItem = {
  id: string;
  name: string;
  nameNative?: string;
  script?: ScriptKey;
  /** The town the dish is claimed from. This is how four states reaches the plate. */
  city?: string;
  state?: StateName;
  price: number;
  description?: string;
  /** Sub grouping inside a section, taken from the board's own headings. */
  group?: string;
  signature?: boolean;
  /** A drawn mark from the ornament set, where the vessel is worth naming. */
  mark?: "cup" | "bowl" | "dosa";
  /** For the thali: what lands on the leaf. */
  includes?: string[];
  /**
   * Imagery. Absent is a supported state: the card degrades to a ruled
   * register row, so a real food shoot is additive and never breaks a layout.
   */
  image?: { src: string; alt: string };
};

export type MenuSection = {
  id: string;
  name: string;
  nameNative: string;
  script: ScriptKey;
  /** The board's own subtitle, verbatim. Do not invent a replacement. */
  tagline: string;
  note?: string;
  /** A plate that stands for the whole section, shown beside its introduction. */
  image?: { src: string; alt: string };
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "dosa",
    name: "Dosa",
    nameNative: "ದೋಸೆ",
    script: "kn",
    tagline: "Two Cities. One Tradition.",
    note: "Two griddles, two cities, one batter ground the night before. Bengaluru takes it soft and buttered, Chennai takes it thin and crisp.",
    image: {
      src: "/dishes/dosa-masala.webp",
      alt: "A rolled dosa on a banana leaf with sambar, coconut chutney and palya in steel bowls",
    },
    items: [
      {
        id: "dosa-blr-plain",
        name: "Plain Dosa",
        group: "Bengaluru Style",
        city: "Bengaluru",
        state: "Karnataka",
        price: 90,
      },
      { id: "dosa-blr-masala", name: "Masala Dosa", group: "Bengaluru Style", city: "Bengaluru", state: "Karnataka", price: 110 },
      { id: "dosa-blr-ghee", name: "Ghee Dosa", group: "Bengaluru Style", city: "Bengaluru", state: "Karnataka", price: 120 },
      { id: "dosa-blr-rawa", name: "Rawa Dosa", group: "Bengaluru Style", city: "Bengaluru", state: "Karnataka", price: 130 },
      { id: "dosa-blr-rawa-masala", name: "Rawa Masala Dosa", group: "Bengaluru Style", city: "Bengaluru", state: "Karnataka", price: 140 },

      { id: "dosa-chn-plain", name: "Plain Dosa", group: "Chennai Style", city: "Chennai", state: "Tamil Nadu", price: 90 },
      { id: "dosa-chn-masala", name: "Masala Dosa", group: "Chennai Style", city: "Chennai", state: "Tamil Nadu", price: 110 },
      { id: "dosa-chn-ghee", name: "Ghee Dosa", group: "Chennai Style", city: "Chennai", state: "Tamil Nadu", price: 120 },
      { id: "dosa-chn-rawa", name: "Rawa Dosa", group: "Chennai Style", city: "Chennai", state: "Tamil Nadu", price: 130 },
      { id: "dosa-chn-rawa-masala", name: "Rawa Masala Dosa", group: "Chennai Style", city: "Chennai", state: "Tamil Nadu", price: 140 },

      {
        id: "dosa-benne",
        name: "Benne Dosa",
        group: "Special Dosas",
        city: "Bengaluru",
        state: "Karnataka",
        price: 110,
        description: "Butter on the griddle and butter again at the table.",
      },
      { id: "dosa-khali", name: "Khali Dosa", group: "Special Dosas", city: "Chennai", state: "Tamil Nadu", price: 100 },
      { id: "dosa-oothapam", name: "Vegetable Oothapam", group: "Special Dosas", city: "Chennai", state: "Tamil Nadu", price: 150 },
      {
        id: "dosa-millet",
        name: "Multi Millet Dosa",
        group: "Special Dosas",
        city: "Bengaluru",
        state: "Karnataka",
        price: 120,
        description: "Ragi, jowar and bajra in the batter.",
      },
      {
        id: "dosa-pesarattu",
        name: "Andhra Pesarattu",
        nameNative: "పెసరట్టు",
        script: "te",
        group: "Special Dosas",
        city: "Guntur",
        state: "Andhra Pradesh",
        price: 120,
        description: "Green gram, ginger and green chilli. Andhra's own crepe, ground the same morning.",
        image: {
          src: "/dishes/dosa-pesarattu.webp",
          alt: "A folded pesarattu on a banana leaf with coconut chutney and sambar",
        },
      },
      {
        id: "dosa-andhra-karam",
        name: "Andhra Karam Dosa",
        group: "Signature",
        city: "Guntur",
        state: "Andhra Pradesh",
        price: 149,
        signature: true,
        description: "Guntur chilli paste spread edge to edge before it leaves the griddle.",
      },
      {
        id: "dosa-podi-ghee",
        name: "Podi Ghee Dosa",
        group: "Signature",
        city: "Chennai",
        state: "Tamil Nadu",
        price: 149,
        signature: true,
        description: "Milagai podi ground to our formula, and ghee poured over it warm.",
      },
    ],
  },
  {
    id: "rice-bowls",
    name: "Rice Bowls",
    nameNative: "ಅನ್ನದ ಬಟ್ಟಲು",
    script: "kn",
    tagline: "Four States. One Tradition.",
    note: "One bowl, one town. Each is cooked the way its own town cooks it, and not adjusted for a general palate.",
    items: [
      {
        id: "rice-pulao",
        name: "Vegetable Pulao",
        city: "Bengaluru",
        state: "Karnataka",
        price: 90,
        description: "Fragrant. Colourful. Wholesome.",
        image: {
          src: "/dishes/rice-vegetable-pulav.webp",
          alt: "A steel bowl of vegetable pulao with carrot, peas and cashew",
        },
      },
      {
        id: "rice-tomato",
        name: "Tomato Rice",
        city: "Coimbatore",
        state: "Tamil Nadu",
        price: 90,
        description: "Tangy. Spiced. Comforting.",
        image: {
          src: "/dishes/rice-tomato-bath.webp",
          alt: "A steel bowl of tomato rice with dried red chilli and curry leaf",
        },
      },
      {
        id: "rice-chithrana",
        name: "Mavinkayi Chithrana",
        nameNative: "ಮಾವಿನಕಾಯಿ ಚಿತ್ರಾನ್ನ",
        script: "kn",
        city: "Mysore",
        state: "Karnataka",
        price: 80,
        description: "Raw mango, groundnut and mustard. Sour before it is anything else.",
      },
      {
        id: "rice-ghee-pongal",
        name: "Ghee Pongal",
        city: "Thanjavur",
        state: "Tamil Nadu",
        price: 90,
        description: "Rice and moong cooked soft, black pepper cracked in, ghee last.",
      },
      {
        id: "rice-bisi-bele",
        name: "Bisi Bele Bath",
        nameNative: "ಬಿಸಿ ಬೇಳೆ ಬಾತ್",
        script: "kn",
        city: "Bengaluru",
        state: "Karnataka",
        price: 80,
        description: "The one dish Karnataka will not let anyone else cook.",
      },
      {
        id: "rice-gongura",
        name: "Gongura Rice",
        nameNative: "గోంగూర",
        script: "te",
        group: "Signature",
        city: "Godhavari",
        state: "Andhra Pradesh",
        price: 149,
        signature: true,
        description: "Bold. Tangy. Authentic.",
        image: {
          src: "/dishes/rice-gongura.webp",
          alt: "A steel bowl of gongura rice, deep green with sorrel leaf and red chilli",
        },
      },
      {
        id: "rice-prasadam",
        name: "Temple Prasadam Rice",
        group: "Signature",
        state: "Karnataka",
        price: 149,
        signature: true,
        description: "Served with devotion.",
      },
      {
        id: "rice-anna-prasadam",
        name: "Anna Prasadam",
        group: "Combo",
        city: "Thanjavur",
        state: "Tamil Nadu",
        price: 130,
        description: "Sakkare Pongal and Thanjavur Ghee Pongal on one plate, the sweet and the peppered together.",
      },
    ],
  },
  {
    id: "thali",
    name: "Thali",
    nameNative: "ಊಟ",
    script: "kn",
    tagline: "Two Regions. Two Traditions.",
    note: "A full meal on a leaf, in courses, refilled without being asked.",
    items: [
      {
        id: "thali-udupi",
        name: "Udupi Meals",
        nameNative: "ಉಡುಪಿ ಊಟ",
        script: "kn",
        city: "Udupi",
        state: "Karnataka",
        price: 199,
        description: "Simple. Wholesome. Sattvic.",
        includes: ["Rice", "Sambar", "Rasam", "Kosambari", "Palya", "Curd", "Appalam", "Sweet"],
        image: {
          src: "/dishes/thali-udupi.webp",
          alt: "An Udupi meals thali on a steel plate with rice, sambar, rasam, kosambari, palya, curd, appalam and a sweet",
        },
      },
      {
        id: "thali-thanjavur",
        name: "Thanjavur Meals",
        nameNative: "தஞ்சாவூர் உணவு",
        script: "ta",
        city: "Thanjavur",
        state: "Tamil Nadu",
        price: 229,
        description: "Rich. Traditional. Grand.",
        includes: ["Rice", "Sambar", "Rasam", "Kootu", "Poriyal", "Kuzhambu", "Curd", "Appalam", "Sweet"],
        image: {
          src: "/dishes/thali-thanjavur.webp",
          alt: "A Thanjavur meals thali on a steel plate with rice, kuzhambu, kootu, poriyal, curd, appalam and a sweet",
        },
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    nameNative: "ಪಾನೀಯಗಳು",
    script: "kn",
    tagline: "Traditional Sips. Timeless Taste.",
    note: "Coffee from a single roaster in Chikkamagaluru, drawn through a brass filter and pulled at the counter.",
    items: [
      {
        id: "bev-filter-coffee",
        name: "Chikkamagaluru Filter Coffee",
        nameNative: "ಫಿಲ್ಟರ್ ಕಾಫಿ",
        script: "kn",
        city: "Chikkamagaluru",
        state: "Karnataka",
        price: 30,
        mark: "cup",
        description: "Decoction drawn slow, milk boiled fresh, pulled between two tumblers.",
        image: {
          src: "/dishes/coffee-filter.webp",
          alt: "Filter coffee in a cup beside a brass davara set",
        },
      },
      { id: "bev-black-coffee", name: "Black Coffee", price: 30, mark: "cup" },
      { id: "bev-ginger-tea", name: "Ginger Tea", price: 30, mark: "cup" },
      { id: "bev-tea", name: "Tea", price: 30, mark: "cup" },
      { id: "bev-kadai-milk", name: "Kadai Milk", price: 25, mark: "cup" },
      {
        id: "bev-majjige",
        name: "Majjige",
        nameNative: "ಮಜ್ಜಿಗೆ",
        script: "kn",
        state: "Karnataka",
        price: 30,
        mark: "bowl",
        description: "Buttermilk with curry leaf, ginger and asafoetida.",
      },
      { id: "bev-hot-badam", name: "Hot Badam Milk", price: 35, mark: "cup" },
      { id: "bev-cold-badam", name: "Cold Badam Milk", price: 50, mark: "cup" },
    ],
  },
  {
    id: "add-ons",
    name: "Add Ons",
    nameNative: "ಜೊತೆಗೆ",
    script: "kn",
    tagline: "A little more.",
    items: [
      { id: "add-ghee", name: "Ghee", price: 20 },
      { id: "add-sweet", name: "Extra Sweet", price: 30 },
    ],
  },
];

/** Flat list, for the home rail and for any lookup by id. */
export const MENU_ITEMS: MenuItem[] = MENU.flatMap((s) => s.items);

/**
 * The regional key. Each state carries one of the world's existing marks, so a
 * dish's provenance is legible at a glance without a legend and without
 * introducing a fifth colour. These are the small text steps: anything below
 * 0.875rem has to sit on the darkest step of its ramp.
 */
export const STATE_INK: Record<StateName, string> = {
  Karnataka: "text-palm-700",
  "Tamil Nadu": "text-kumkum-700",
  "Andhra Pradesh": "text-brass-700",
  Kerala: "text-granite-500",
};

/** The same key on an ink ground. */
export const STATE_INK_ON_DARK: Record<StateName, string> = {
  Karnataka: "text-palm-400",
  "Tamil Nadu": "text-kumkum-500",
  "Andhra Pradesh": "text-brass-400",
  Kerala: "text-bone-400",
};

/** "Coimbatore, Tamil Nadu", or just the state where no town is claimed. */
export function provenance(item: MenuItem): string | null {
  if (item.city && item.state) return `${item.city}, ${item.state}`;
  return item.city ?? item.state ?? null;
}

/** The six plates that carry the brand on the home page. */
export const SIGNATURE_IDS = [
  "thali-udupi",
  "thali-thanjavur",
  "dosa-blr-plain",
  "rice-gongura",
  "dosa-pesarattu",
  "rice-tomato",
];

/* ---------------------------------------------------------------------------
   City Launch. Not a rotation and not a daily special: a campaign that opens
   one city's repertoire at a time, run for a season and then retired.
   --------------------------------------------------------------------------- */

export type CityLaunch = {
  id: string;
  city: string;
  cityNative: string;
  script: ScriptKey;
  state: StateName;
  accent: "kumkum" | "palm";
  character: string;
  note: string;
  dishes: { name: string; line: string }[];
  image?: { src: string; alt: string };
};

export const CITY_LAUNCH: CityLaunch[] = [
  {
    id: "madurai",
    city: "Madurai",
    cityNative: "மதுரை",
    script: "ta",
    state: "Tamil Nadu",
    accent: "kumkum",
    character: "Authentic. Traditional. Unforgettable.",
    note: "Madurai eats late and eats hot. The city's food is built on sesame oil and pepper, and its answer to the heat is a tumbler thick with almond gum.",
    dishes: [
      { name: "Jigarthanda", line: "The iconic drink of Madurai." },
      { name: "Bun Parotta", line: "Soft. Flaky. Legendary." },
      { name: "Ghee Podi Idli", line: "Simple. Soulful. Timeless." },
    ],
    image: {
      src: "/dishes/launch-madurai.webp",
      alt: "Jigarthanda in a brass tumbler beside a stack of bun parotta and ghee podi idli",
    },
  },
  {
    id: "godhavari",
    city: "Godhavari",
    cityNative: "గోదావరి",
    script: "te",
    state: "Andhra Pradesh",
    accent: "palm",
    character: "Rich. Vibrant. Rooted in Tradition.",
    note: "The delta cooks green. Sorrel, green gram and fresh chilli, with none of it toned down for a visitor.",
    dishes: [
      { name: "Pesarattu", line: "Andhra's iconic green gram crepe." },
      { name: "Gongura Pachadi Rice Bowl", line: "Tangy. Bold. Authentic." },
      { name: "Pesarattu Upma", line: "The legendary Andhra breakfast combination." },
    ],
    image: {
      src: "/dishes/launch-godhavari.webp",
      alt: "Pesarattu with chutney, a gongura pachadi rice bowl and pesarattu upma",
    },
  },
];

/**
 * Which campaign is running at go live. The owner confirms this; until then
 * the section presents both as the campaign format rather than claiming one
 * is currently on the counter.
 */
export const CURRENT_LAUNCH_ID: string | null = null;

/* ---------------------------------------------------------------------------
   The opening. The first outlet has not traded yet, and every diner surface
   is written from that position.
   --------------------------------------------------------------------------- */

export const OPENING = {
  outlet: "Kathriguppe",
  outletNative: "ಕಥಿರಾಗುಪ್ಪೆ",
  city: "Bengaluru",
  cityNative: "ಬೆಂಗಳೂರು",
  /** First week of September 2026, per the announcement artwork. */
  date: "2026-09-01",
  dateLabel: "First week of September 2026",
  headline: "ನಮ್ಮ ಮೊದಲ ಮಳಿಗೆ",
  headlineEnglish: "Our first store",
  confirmed: true,
} as const;

/* ---------------------------------------------------------------------------
   The assurances. Transcribed from the in store wall. The wall's mark row
   carries six; "premium ingredients" is stated in the wall paragraph and is
   kept here as the seventh.
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

/** How a plate reaches a guest. Dine in first, and the other two are stated plainly. */
export const CHANNELS = [
  {
    title: "Dine in",
    line: "Granite tables, a counter you can watch, and coffee pulled where you can see it. The room is the point.",
  },
  {
    title: "Delivery",
    line: "Listed on Swiggy and Zomato from opening week. The meal box is built so a thali travels without becoming one dish.",
  },
  {
    title: "Catering and events",
    line: "Celebrations, corporate lunches and bulk orders, cooked to the same recipe cards as the counter.",
  },
];

/* ---------------------------------------------------------------------------
   Outlets and the roadmap.
   One real outlet, not yet open. The announced pipeline is stated as a
   pipeline and never as trading locations.
   --------------------------------------------------------------------------- */

export const OUTLETS_ARE_PLACEHOLDER = false;

/** Service hours are still to be confirmed by the owner. */
export const HOURS_CONFIRMED = false;
export const HOURS_PLACEHOLDER = "Hours to be confirmed";

export type Outlet = {
  id: string;
  slug: string;
  name: string;
  nameNative: string;
  script: ScriptKey;
  addressLines: string[];
  city: string;
  state: string;
  hours: string;
  phone: string;
  mapsQuery: string;
  status: "open" | "opening";
  flagship?: boolean;
  seats?: string;
  /** Only set where it is true of that outlet. */
  notes?: string[];
  images?: { src: string; alt: string }[];
};

export const OUTLETS: Outlet[] = [
  {
    id: "kathriguppe",
    slug: "kathriguppe",
    name: "Kathriguppe",
    nameNative: "ಕಥಿರಾಗುಪ್ಪೆ",
    script: "kn",
    addressLines: ["[street address to be supplied]", "Kathriguppe", "Bengaluru, Karnataka"],
    city: "Bengaluru",
    state: "Karnataka",
    hours: HOURS_PLACEHOLDER,
    phone: "+91 XXXXX XXXXX",
    mapsQuery: "Kathriguppe, Bengaluru",
    status: "opening",
    flagship: true,
    notes: ["Basement parking", "Pure vegetarian kitchen"],
    images: [
      {
        src: "/brand/kathriguppe-day.webp",
        alt: "The Kathriguppe storefront by day, with stone columns, brass signage and a garlanded entrance",
      },
      {
        src: "/brand/kathriguppe-night.webp",
        alt: "The Kathriguppe storefront lit at night, signage and lamp course glowing",
      },
    ],
  },
];

/**
 * The announced pipeline, from the brand deck. These are intentions, not
 * signed sites, and every surface that renders them says so.
 */
export const ROADMAP = {
  bengaluru: [
    "Kathriguppe",
    "Sarjapur Road",
    "HSR Layout",
    "Koramangala",
    "JP Nagar",
    "Bannerghatta Road",
    "Rajajinagar",
    "Malleshwaram",
  ],
  india: ["Chennai", "Hyderabad", "Mumbai", "Pune", "Delhi NCR"],
  headline: "Namma Bengaluru First. India Next.",
  headlineNative: "ನಮ್ಮ ಬೆಂಗಳೂರು ಮೊದಲು. ಭಾರತ ಮುಂದಿನದು.",
  line: "From Bengaluru's food culture to India's dining tables.",
  lineNative: "ಬೆಂಗಳೂರಿನ ಆಹಾರ ಸಂಸ್ಕೃತಿಯಿಂದ ಭಾರತದ ಊಟದ ಮೇಜಿನವರೆಗೆ.",
} as const;

/* ---------------------------------------------------------------------------
   The people. Named in the brand deck, so they are stated plainly here.
   --------------------------------------------------------------------------- */

export const TEAM = [
  {
    name: "Divyashree B S",
    role: "Founder and Brand Visionary",
    lines: [
      "Building Aradhyam around the opportunity to organise South India's largest daily food habit.",
      "Creating a scalable premium South Indian kitchen without letting go of the recipe.",
    ],
  },
  {
    name: "Vikas Perumalsamy",
    role: "Operations Manager",
    lines: [
      "Daily operations, team management and process. The counter runs to a written standard, not to a memory.",
      "Focused on consistency and on what a guest experiences on an ordinary Tuesday.",
    ],
  },
  {
    name: "Abilash Bellur",
    role: "Mentor and Operating Advisor",
    lines: [
      "Co-Founder and COO at Beamer Brands, building multiple quick service brands across India.",
      "Brings the franchise, supply chain and operating systems the format is built on.",
    ],
  },
];

/* ---------------------------------------------------------------------------
   Franchise.
   Every commercial value is a TBD token by the owner's instruction. Do not
   replace a token with a plausible number; replace it with the real one.
   No investor deck figure belongs in this section.
   --------------------------------------------------------------------------- */

export const TBD = "To be confirmed";

export type FranchiseTerm = {
  term: string;
  value: string;
  unit?: string;
  confirmed: boolean;
};

export const FRANCHISE_TERMS: FranchiseTerm[] = [
  { term: "Format", value: "Unit Franchise, franchise owned and franchise operated", confirmed: true },
  { term: "Total investment", value: TBD, unit: "plus GST", confirmed: false },
  { term: "Franchise fee", value: TBD, confirmed: false },
  { term: "Carpet area", value: TBD, unit: "square feet", confirmed: false },
  { term: "Seating", value: TBD, unit: "covers", confirmed: false },
  { term: "Royalty", value: TBD, unit: "of gross sales", confirmed: false },
  { term: "Payback period", value: TBD, unit: "months", confirmed: false },
  { term: "Agreement term", value: TBD, unit: "years", confirmed: false },
  { term: "Setup timeline", value: TBD, unit: "weeks from signing", confirmed: false },
  { term: "Territory", value: "Exclusive catchment, radius agreed at signing", confirmed: true },
];

export const FRANCHISE_SUPPORT = [
  {
    title: "Site selection and outlet design",
    line: "We evaluate your catchment, footfall and frontage, then hand over the full outlet drawing set: the granite counters, the jaali screens, the corbel eave and the deity niche, built to the same specification as Kathriguppe.",
  },
  {
    title: "Kitchen commissioning",
    line: "Equipment list, layout for the live dosa and rice counters, exhaust and drainage. We commission the kitchen with our own team before you open.",
  },
  {
    title: "Recipe standardisation",
    line: "Recipe cards, standardised ingredients and portion control for every item on the board. A masala dosa in your outlet is the same masala dosa as ours, on a Tuesday and on a festival.",
  },
  {
    title: "Systems, not individuals",
    line: "The format is built so most of the menu is executed by trained staff rather than by a head chef. Daily checklists, simplified processes and written standards mean the business does not walk out when a cook does.",
  },
  {
    title: "Supply chain",
    line: "Central sourcing for the ingredients that decide the taste: Byadagi and Guntur chilli, sesame oil, jaggery, coffee from a single roaster in Chikkamagaluru, and the podi blends ground to our formula.",
  },
  {
    title: "Marketing and brand",
    line: "Launch campaign, signage and menu artwork, the City Launch campaign assets as each one opens, and listing management across delivery and maps.",
  },
  {
    title: "Audit and compliance",
    line: "Food safety, hygiene and mystery audits against a written checklist, with a central team on operations, finance and supply chain behind you.",
  },
];

export const FRANCHISE_LOOKING_FOR = [
  {
    title: "You will run it yourself",
    line: "This is an owner operated format. We partner with people who will be at the counter in the first year, not with absent investors.",
  },
  {
    title: "A location we both believe in",
    line: "Ground floor, visible frontage, residential catchment within walking distance, and parking that works at nine on a Sunday morning.",
  },
  {
    title: "Capital that is already in place",
    line: "Funds available without a pending sale or approval. We would rather wait a quarter than open a half finished outlet.",
  },
  {
    title: "Respect for a pure vegetarian kitchen",
    line: "No exceptions, no shared equipment, no separate section. It is the one condition that is never negotiated.",
  },
];

export const FRANCHISE_STEPS = [
  { step: "Enquiry", line: "You send the form below. We reply within three working days." },
  { step: "Conversation", line: "A call and then a visit to Kathriguppe during service, so you see the format at its busiest." },
  { step: "Location study", line: "We assess your proposed site or help you find one, then agree the catchment in writing." },
  { step: "Agreement", line: "Commercials, territory and term are signed. The full commercial sheet is shared at this stage." },
  { step: "Build and train", line: "Outlet build to our drawings while your team trains in our kitchen." },
  { step: "Opening", line: "We are on site for launch week and stay through the first full month of service." },
];

export const FRANCHISE_FAQ = [
  {
    q: "What is the total investment?",
    a: "The commercial sheet is shared once we have seen your location, because fit out cost moves with the site. Ask for it in the enquiry form and we will send the current figures.",
  },
  {
    q: "How much area do I need?",
    a: "The requirement is set per format and confirmed at the location study. Ground floor with visible frontage matters more to us than raw square footage.",
  },
  {
    q: "Do you offer master or state level franchise?",
    a: "Not at present. We are opening unit franchises only, one outlet at a time, so that the menu is cooked properly in each kitchen.",
  },
  {
    q: "Who runs the kitchen?",
    a: "You employ the team and we train them. Head cooks train with us and are signed off by our kitchen before the outlet opens.",
  },
  {
    q: "Can I change the menu for my city?",
    a: "The core board is fixed, since it is the brand. Additions are discussed at the annual review and approved centrally, and a City Launch campaign is the route we use to bring a new city's dishes onto the counter.",
  },
  {
    q: "Will you sell a second outlet in my city?",
    a: "Yes, but not inside your agreed catchment. The exclusive radius is written into the agreement at signing.",
  },
  {
    q: "Do you help with licences?",
    a: "We provide the checklist and the documentation we hold as brand owner, including FSSAI paperwork. Local licences are applied for in your name.",
  },
  {
    q: "How long from signing to opening?",
    a: "It depends on the site's condition and on local approvals. The working timeline is agreed in the build schedule and shared with the commercial sheet.",
  },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Our story" },
  { href: "/locations", label: "Locations" },
  { href: "/franchise", label: "Franchise" },
];

export const CONTACT = {
  email: "hello@shriaradhyam.com",
  franchiseEmail: "franchise@shriaradhyam.com",
  phone: "+91 XXXXX XXXXX",
  office: ["Shri Aradhyam", "[corporate address to be supplied]", "Bengaluru, Karnataka"],
};
