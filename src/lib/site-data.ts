/**
 * Shri Aradhyam content.
 *
 * Two kinds of value live in here and they are not the same:
 *
 *  1. Brand truth taken from the storefront and the in store wall copy. Safe.
 *  2. Illustrative content authored for the build, marked below, which the
 *     owner should confirm or replace: the daily dish lists, the sample
 *     outlets, and every franchise commercial (all rendered as TBD tokens).
 *
 * Nothing in here invents a review, an award, an outlet count or a number.
 */

export const BRAND = {
  name: "Shri Aradhyam",
  nameKannada: "ಶ್ರೀ ಆರಾಧ್ಯಂ",
  tagline: "Five States. One Roof. Endless Flavours.",
  devotion: "Served with devotion",
  devotionKannada: "ಭಕ್ತಿಯಿಂದ ಬಡಿಸಲಾಗಿದೆ",
  meaning:
    "Aradhyam is the one who is worshipped. A plate carried to your table is an offering before it is a meal.",
} as const;

/* ---------------------------------------------------------------------------
   The rotation. This is the product's mechanism and the site's spine.
   Day order matches JavaScript getDay(), Sunday first.
   Dish lists are illustrative and awaiting the kitchen's confirmation.
   --------------------------------------------------------------------------- */

export type ScriptKey = "kn" | "ta" | "te" | "ml";

export type CityDay = {
  dayIndex: number;
  day: string;
  dayShort: string;
  city: string;
  cityNative: string;
  script: ScriptKey;
  scriptName: string;
  state: string;
  stateNative: string;
  /** One line on what the day tastes like. */
  character: string;
  /** The register entry: what the kitchen is known for on this day. */
  dishes: string[];
  /** The single dish that anchors the day. */
  anchor: string;
  /** Longer prose for the expanded reading. */
  note: string;
  /**
   * Real photography of this city's plate, once the owner supplies it. Put the
   * file in /public/dishes and fill this in; the register detail renders it
   * automatically. Deliberately empty: no stock or generated food image stands
   * in for a dish this kitchen actually cooks.
   */
  image?: { src: string; alt: string };
};

export const ROTATION: CityDay[] = [
  {
    dayIndex: 1,
    day: "Monday",
    dayShort: "Mon",
    city: "Udupi",
    cityNative: "ಉಡುಪಿ",
    script: "kn",
    scriptName: "Kannada",
    state: "Karnataka",
    stateNative: "ಕರ್ನಾಟಕ",
    character: "Temple kitchen restraint. Coconut, jaggery, curry leaf.",
    dishes: [
      "Kotte Kadubu steamed in jackfruit leaf",
      "Goli Baje",
      "Udupi Sambar with jaggery",
      "Sajjige",
      "Pathrode",
    ],
    anchor: "Kotte Kadubu",
    note: "Udupi cooking came out of the Krishna temple kitchen, which is why it leans on coconut and jaggery and refuses onion and garlic. The week opens quietly, the way a temple morning does.",
  },
  {
    dayIndex: 2,
    day: "Tuesday",
    dayShort: "Tue",
    city: "Madurai",
    cityNative: "மதுரை",
    script: "ta",
    scriptName: "Tamil",
    state: "Tamil Nadu",
    stateNative: "தமிழ்நாடு",
    character: "Night market heat. Black pepper, sesame oil, tamarind.",
    dishes: [
      "Paruppu Urundai Kuzhambu",
      "Idiyappam with vellam and coconut milk",
      "Ennai Kathirikai",
      "Kambu Koozh",
      "Jigarthanda",
    ],
    anchor: "Paruppu Urundai Kuzhambu",
    note: "Madurai eats late and eats hot. The city's food is built on sesame oil and pepper, and its answer to the heat is a tumbler of jigarthanda thick with almond gum.",
  },
  {
    dayIndex: 3,
    day: "Wednesday",
    dayShort: "Wed",
    city: "Guntur",
    cityNative: "గుంటూరు",
    script: "te",
    scriptName: "Telugu",
    state: "Andhra Pradesh",
    stateNative: "ఆంధ్రప్రదేశ్",
    character: "Chilli country. Gongura sourness, sesame, raw heat.",
    dishes: [
      "Gongura Pachadi",
      "Pesarattu with Upma",
      "Punugulu",
      "Guntur Karam Podi",
      "Bobbatlu",
    ],
    anchor: "Gongura Pachadi",
    note: "Guntur is the chilli capital, and its cooking is unapologetic about it. The sourness of gongura leaf is what keeps the heat honest rather than merely loud.",
  },
  {
    dayIndex: 4,
    day: "Thursday",
    dayShort: "Thu",
    city: "Hyderabad",
    cityNative: "హైదరాబాద్",
    script: "te",
    scriptName: "Telugu",
    state: "Telangana",
    stateNative: "తెలంగాణ",
    character: "Deccan court cooking. Tamarind, sesame, slow gravies.",
    dishes: [
      "Bagara Baingan",
      "Mirchi ka Salan",
      "Sarva Pindi",
      "Irani Chai with Osmania",
      "Double ka Meetha",
    ],
    anchor: "Bagara Baingan",
    note: "Hyderabad's vegetarian table is the quiet half of a famous kitchen: gravies ground from sesame, peanut and coconut, thickened by patience rather than cream.",
  },
  {
    dayIndex: 5,
    day: "Friday",
    dayShort: "Fri",
    city: "Thrissur",
    cityNative: "തൃശ്ശൂർ",
    script: "ml",
    scriptName: "Malayalam",
    state: "Kerala",
    stateNative: "കേരളം",
    character: "Coconut milk and steam. Soft, sweet, unhurried.",
    dishes: [
      "Puttu with Kadala curry",
      "Appam with Vegetable Ishtu",
      "Avial",
      "Olan",
      "Palada Pradhaman",
    ],
    anchor: "Appam with Vegetable Ishtu",
    note: "Thrissur cooks with the first and the second pressing of coconut milk, and knows the difference. Nothing here is fried when it can be steamed.",
  },
  {
    dayIndex: 6,
    day: "Saturday",
    dayShort: "Sat",
    city: "Mangaluru",
    cityNative: "ಮಂಗಳೂರು",
    script: "kn",
    scriptName: "Kannada",
    state: "Karnataka",
    stateNative: "ಕರ್ನಾಟಕ",
    character: "Coastal ghee roast. Byadagi chilli, coconut, tamarind.",
    dishes: [
      "Neer Dosa",
      "Mangaluru Buns",
      "Kadle Manoli",
      "Mushroom Ghee Roast",
      "Halasina Happala",
    ],
    anchor: "Neer Dosa",
    note: "The coast keeps its chilli red rather than hot: Byadagi gives Mangaluru cooking its colour and its ghee roast its shine. Saturday is the loudest plate of the week.",
  },
  {
    dayIndex: 0,
    day: "Sunday",
    dayShort: "Sun",
    city: "Kumbakonam",
    cityNative: "கும்பகோணம்",
    script: "ta",
    scriptName: "Tamil",
    state: "Tamil Nadu",
    stateNative: "தமிழ்நாடு",
    character: "Degree coffee and temple town Sundays. Pepper, ghee, cardamom.",
    dishes: [
      "Kadappa with Idli",
      "Ven Pongal",
      "Milagu Kuzhambu",
      "Ashoka Halwa",
      "Kumbakonam Degree Coffee",
    ],
    anchor: "Kumbakonam Degree Coffee",
    note: "Degree coffee takes its name from the pure first draw of milk it demands. Sunday is built around it, and around the ghee that Kumbakonam does not measure.",
  },
];

/** Reading order for the register: the week as people read a week. */
export const ROTATION_BY_WEEK = [1, 2, 3, 4, 5, 6, 0].map(
  (i) => ROTATION.find((r) => r.dayIndex === i)!,
);

export const STATES = [
  {
    name: "Karnataka",
    native: "ಕರ್ನಾಟಕ",
    script: "kn" as ScriptKey,
    line: "Coconut, jaggery and curry leaf. The temple kitchen's restraint.",
    cities: ["Udupi", "Mangaluru"],
  },
  {
    name: "Tamil Nadu",
    native: "தமிழ்நாடு",
    script: "ta" as ScriptKey,
    line: "Sesame oil, black pepper and tamarind. Heat with a sour spine.",
    cities: ["Madurai", "Kumbakonam"],
  },
  {
    name: "Andhra Pradesh",
    native: "ఆంధ్రప్రదేశ్",
    script: "te" as ScriptKey,
    line: "Gongura and Guntur chilli. Nothing hidden, nothing softened.",
    cities: ["Guntur"],
  },
  {
    name: "Telangana",
    native: "తెలంగాణ",
    script: "te" as ScriptKey,
    line: "Ground sesame and peanut. Deccan gravies built on patience.",
    cities: ["Hyderabad"],
  },
  {
    name: "Kerala",
    native: "കേരളം",
    script: "ml" as ScriptKey,
    line: "Two pressings of coconut milk, and steam instead of oil.",
    cities: ["Thrissur"],
  },
];

/* ---------------------------------------------------------------------------
   The all day kitchen. Shri Aradhyam serves the full South Indian day,
   not only the rotating city plate.
   --------------------------------------------------------------------------- */

/**
 * The four service shifts. The windows are the intended pattern and are not yet
 * confirmed operating hours; the kitchen section states this on the page.
 */
export const DAY_PARTS = [
  {
    window: "7.00 to 11.30",
    name: "Morning tiffin",
    native: "ಬೆಳಗಿನ ತಿಂಡಿ",
    script: "kn" as ScriptKey,
    line: "The counter opens with steam. Batter ground the night before, first coffee drawn at seven.",
    items: [
      "Idli, Vada, Kharabath",
      "Set Dosa, Masala Dosa, Neer Dosa",
      "Ven Pongal with Kadappa",
      "Kesari Bath and Sajjige",
      "Filter coffee, Degree coffee, Byadagi rasam",
    ],
  },
  {
    window: "12.00 to 15.30",
    name: "Midday meals",
    native: "ಮಧ್ಯಾಹ್ನದ ಊಟ",
    script: "kn" as ScriptKey,
    line: "The day's city takes the table. A full plate, served in courses, refilled without asking.",
    items: [
      "The city plate of the day, in courses",
      "Rice, the day's kuzhambu or sambar, two palya",
      "Pachadi, kosambari, happala",
      "Payasa or the day's sweet",
      "Buttermilk with curry leaf and ginger",
    ],
  },
  {
    window: "16.00 to 19.00",
    name: "Evening tiffin",
    native: "ಸಂಜೆ ತಿಂಡಿ",
    script: "kn" as ScriptKey,
    line: "The fry counter. Everything leaves the oil and reaches the table in under a minute.",
    items: [
      "Goli Baje and Mangaluru Buns",
      "Punugulu and Mirchi Bajji",
      "Sundal and Masala Puri",
      "Jigarthanda and Badam Milk",
      "Irani Chai with Osmania",
    ],
  },
  {
    window: "19.00 to 22.30",
    name: "Night kitchen",
    native: "ರಾತ್ರಿ ಅಡುಗೆ",
    script: "kn" as ScriptKey,
    line: "Dosa till close. The last batter of the day goes on the griddle, never into tomorrow.",
    items: [
      "Dosa, Uttapam, Idiyappam",
      "Chapati with the day's kurma",
      "Rice plates and Bisi Bele Bath",
      "Appam with Vegetable Ishtu",
      "Ada Pradhaman and Bobbatlu",
    ],
  },
];

/* ---------------------------------------------------------------------------
   The assurances. Every line here is transcribed from the in store wall copy
   and is brand truth.
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
   Outlets.
   PLACEHOLDER DATA. The owner is supplying real addresses. Replace the entries
   in this array and set OUTLETS_ARE_PLACEHOLDER to false. The notice on the
   locations page is driven by that flag and disappears on its own.
   --------------------------------------------------------------------------- */

export const OUTLETS_ARE_PLACEHOLDER = true;

/**
 * Service hours have not been confirmed by the owner either. They are a
 * separate fact from the addresses, so they get their own flag and their own
 * placeholder token rather than riding on the address notice.
 */
export const HOURS_CONFIRMED = false;
export const HOURS_PLACEHOLDER = "Hours to be confirmed";

export type Outlet = {
  id: string;
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
};

export const OUTLETS: Outlet[] = [
  {
    id: "flagship",
    name: "Flagship outlet",
    nameNative: "ಪ್ರಧಾನ ಮಳಿಗೆ",
    script: "kn",
    addressLines: ["Ground floor, [street address to be supplied]", "[locality]", "Bengaluru 560 0XX"],
    city: "Bengaluru",
    state: "Karnataka",
    hours: HOURS_PLACEHOLDER,
    phone: "+91 XXXXX XXXXX",
    mapsQuery: "Shri Aradhyam Bengaluru",
    status: "open",
    flagship: true,
  },
  {
    id: "second",
    name: "Second outlet",
    nameNative: "ಎರಡನೇ ಮಳಿಗೆ",
    script: "kn",
    addressLines: ["[street address to be supplied]", "[locality]", "Bengaluru 560 0XX"],
    city: "Bengaluru",
    state: "Karnataka",
    hours: HOURS_PLACEHOLDER,
    phone: "+91 XXXXX XXXXX",
    mapsQuery: "Shri Aradhyam Bengaluru",
    status: "open",
  },
  {
    id: "opening-mysuru",
    name: "Mysuru",
    nameNative: "ಮೈಸೂರು",
    script: "kn",
    addressLines: ["Site under discussion"],
    city: "Mysuru",
    state: "Karnataka",
    hours: "Opening date to be announced",
    phone: "",
    mapsQuery: "Mysuru",
    status: "opening",
  },
  {
    id: "opening-chennai",
    name: "Chennai",
    nameNative: "சென்னை",
    script: "ta",
    addressLines: ["Site under discussion"],
    city: "Chennai",
    state: "Tamil Nadu",
    hours: "Opening date to be announced",
    phone: "",
    mapsQuery: "Chennai",
    status: "opening",
  },
  {
    id: "opening-hyderabad",
    name: "Hyderabad",
    nameNative: "హైదరాబాద్",
    script: "te",
    addressLines: ["Site under discussion"],
    city: "Hyderabad",
    state: "Telangana",
    hours: "Opening date to be announced",
    phone: "",
    mapsQuery: "Hyderabad",
    status: "opening",
  },
];

/* ---------------------------------------------------------------------------
   Franchise.
   Every commercial value is a TBD token by the owner's instruction. Do not
   replace a token with a plausible number; replace it with the real one.
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
  { term: "Royalty", value: TBD, unit: "of net sales", confirmed: false },
  { term: "Payback period", value: TBD, unit: "months", confirmed: false },
  { term: "Agreement term", value: TBD, unit: "years", confirmed: false },
  { term: "Setup timeline", value: TBD, unit: "weeks from signing", confirmed: false },
  { term: "Territory", value: "Exclusive catchment, radius agreed at signing", confirmed: true },
];

export const FRANCHISE_SUPPORT = [
  {
    title: "Site selection and outlet design",
    line: "We evaluate your catchment, footfall and frontage, then hand over the full outlet drawing set: the granite counters, the jaali screens, the corbel eave and the deity niche, built to the same specification as the flagship.",
  },
  {
    title: "Kitchen commissioning",
    line: "Equipment list, layout for the live idly and dosa counter, the annapoorna line, exhaust and drainage. We commission the kitchen with our own team before you open.",
  },
  {
    title: "Training at the flagship",
    line: "Your cooks train on our griddles. Batter ratios, grinding schedules, the rotation calendar and the plate order for each city, taught as a repeatable process rather than a recipe card.",
  },
  {
    title: "Supply chain",
    line: "Central sourcing for the ingredients that decide the taste: Byadagi and Guntur chilli, sesame oil, jaggery, coffee from a single roaster, and the podi blends ground to our formula.",
  },
  {
    title: "Marketing and brand",
    line: "Launch campaign, signage and menu artwork, the daily rotation calendar as social assets each month, and listing management across delivery and maps.",
  },
  {
    title: "Operations audit",
    line: "A monthly visit against a written checklist covering hygiene, portion, plate order and the rotation itself. The rotation is the brand, so it is audited like one.",
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
  { step: "Conversation", line: "A call and then a visit to the flagship during service, so you see the format at its busiest." },
  { step: "Location study", line: "We assess your proposed site or help you find one, then agree the catchment in writing." },
  { step: "Agreement", line: "Commercials, territory and term are signed. The full commercial sheet is shared at this stage." },
  { step: "Build and train", line: "Outlet build to our drawings while your team trains at the flagship kitchen." },
  { step: "Opening", line: "We are on site for the launch week and for the first rotation cycle." },
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
    a: "Not at present. We are opening unit franchises only, one outlet at a time, so that the rotation is cooked properly in each kitchen.",
  },
  {
    q: "Who runs the kitchen?",
    a: "You employ the team and we train them. Head cooks train at the flagship and are signed off by our kitchen before the outlet opens.",
  },
  {
    q: "Can I change the menu for my city?",
    a: "The rotation calendar is fixed, since it is the brand. Regional additions to the all day tiffin menu are discussed at the annual review and approved centrally.",
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
  { href: "/#register", label: "Today" },
  { href: "/#kitchen", label: "The kitchen" },
  { href: "/locations", label: "Locations" },
  { href: "/franchise", label: "Franchise" },
];

export const CONTACT = {
  email: "hello@shriaradhyam.com",
  franchiseEmail: "franchise@shriaradhyam.com",
  phone: "+91 XXXXX XXXXX",
  office: ["Shri Aradhyam", "[corporate address to be supplied]", "Bengaluru, Karnataka"],
};
