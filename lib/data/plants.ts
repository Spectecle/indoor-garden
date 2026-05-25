export type CareLevel = "Easy" | "Medium" | "Hard";
export type LightLevel = "Low" | "Medium" | "Bright indirect" | "Full sun";
export type WaterFrequency = "Once a week" | "Every 10 days" | "Every 2 weeks" | "Monthly" | "Every 5-7 days" | "Every 3-4 days";

export interface PlantFAQ {
  question: string;
  answer: string;
}

export interface Plant {
  id: string;
  slug: string;
  name: string;
  scientificName: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  category: string;
  tags: string[];
  careLevel: CareLevel;
  light: LightLevel;
  water: WaterFrequency;
  humidity: "Low" | "Medium" | "High";
  temperature: string;
  petSafe: boolean;
  airPurifying: boolean;
  growthRate: "Slow" | "Moderate" | "Fast";
  maxHeight: string;
  nativeRegion: string;
  careGuide: {
    watering: string;
    light: string;
    soil: string;
    fertilizing: string;
    repotting: string;
    pruning: string;
  };
  commonProblems: { problem: string; solution: string }[];
  proTips: string[];
  faqs: PlantFAQ[];
  featured: boolean;
}

export const plants: Plant[] = [
  {
    id: "1",
    slug: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    tagline: "The Swiss Cheese Plant — a statement piece for every home",
    description:
      "Monstera deliciosa is perhaps the most iconic houseplant of the modern era. Its dramatically split and perforated leaves — a natural phenomenon called fenestration — create architectural beauty that elevates any living space. Native to the tropical forests of southern Mexico and Central America, this plant is surprisingly forgiving and rewards consistent care with explosive growth.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=1200&q=85&auto=format&fit=crop",
    category: "Tropical",
    tags: ["Popular", "Statement", "Tropical", "Air Purifying"],
    careLevel: "Easy",
    light: "Bright indirect",
    water: "Every 10 days",
    humidity: "Medium",
    temperature: "65–85°F (18–29°C)",
    petSafe: false,
    airPurifying: true,
    growthRate: "Fast",
    maxHeight: "6–8 ft indoors",
    nativeRegion: "Central America",
    careGuide: {
      watering: "Water thoroughly when the top 2 inches of soil are dry. In summer, this is typically every 7–10 days; in winter, reduce to every 2–3 weeks. Always ensure pots have drainage holes — Monstera despises soggy roots.",
      light: "Thrives in bright, indirect light. A spot a few feet from a south or east-facing window is ideal. Direct afternoon sun will scorch the leaves; too little light slows growth and reduces leaf fenestration.",
      soil: "Use a well-draining potting mix. Combine standard potting soil with perlite (3:1 ratio) or use an aroid mix. Adding orchid bark improves aeration and mimics its natural epiphytic habitat.",
      fertilizing: "Feed monthly with a balanced liquid fertilizer (20-20-20) during spring and summer. Dilute to half strength. Skip fertilizing in fall and winter when growth naturally slows.",
      repotting: "Repot every 1–2 years when roots start emerging from drainage holes. Choose a pot only 2 inches larger than the current one. Spring is the ideal time to repot.",
      pruning: "Prune dead or damaged leaves at the base of the stem. To control size, cut stems back to a node. Use clean, sharp scissors and wear gloves — the sap can irritate skin.",
    },
    commonProblems: [
      {
        problem: "Yellow leaves",
        solution: "Most commonly caused by overwatering. Check the soil moisture before watering and ensure proper drainage. Yellow lower leaves can also indicate it's time to fertilize.",
      },
      {
        problem: "No leaf splits (fenestration)",
        solution: "Young leaves on juvenile plants are naturally unsplit. As the plant matures (usually at 3–4 years), splits develop with adequate light. Increase indirect light exposure.",
      },
      {
        problem: "Brown leaf tips",
        solution: "Low humidity is the primary cause. Mist the leaves, use a pebble tray with water, or run a humidifier nearby. Also caused by fluoride in tap water — use filtered water.",
      },
      {
        problem: "Leggy growth",
        solution: "Caused by insufficient light. Move closer to a window or supplement with a grow light. You can prune leggy stems to encourage bushier growth.",
      },
    ],
    proTips: [
      "Give your Monstera a moss pole or coco coir totem to climb — it will grow larger, more fenestrated leaves",
      "Wipe leaves with a damp cloth monthly to remove dust and improve light absorption",
      "Aerial roots can be tucked into the soil for extra nutrients, or left to hang naturally",
      "Rotate the pot quarterly for even growth on all sides",
    ],
    faqs: [
      {
        question: "Why does my Monstera sweat or drip water from leaves?",
        answer: "This is called guttation — the plant releasing excess moisture through its leaf tips. It's a sign of healthy, well-watered roots. It typically happens overnight and is nothing to worry about.",
      },
      {
        question: "Is Monstera toxic to cats and dogs?",
        answer: "Yes. Monstera contains calcium oxalate crystals that are toxic to pets and can cause oral irritation, excessive drooling, and vomiting if ingested. Keep it out of reach of curious animals.",
      },
      {
        question: "How do I propagate my Monstera?",
        answer: "The easiest method is stem cutting. Cut a stem just below a node (the bump where a leaf meets the stem) with at least one aerial root. Place it in water or moist soil. Roots appear in 2–4 weeks.",
      },
      {
        question: "Why are my Monstera leaves not splitting?",
        answer: "Leaf splits (fenestration) develop with maturity and sufficient light. Young plants produce whole leaves for the first 1–3 years. Ensure your plant gets bright indirect light and has a support to climb.",
      },
      {
        question: "How fast does Monstera grow?",
        answer: "In ideal conditions (bright light, warm temperatures, regular fertilizing), Monstera can grow 1–2 feet per year indoors. In the growing season you may see a new leaf every 2–4 weeks.",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "pothos",
    name: "Golden Pothos",
    scientificName: "Epipremnum aureum",
    tagline: "The unkillable trailing beauty — perfect for beginners",
    description:
      "Golden Pothos is rightfully called 'the devil's ivy' because it refuses to die. With its heart-shaped leaves splashed in gold, yellow, and green, it cascades beautifully from shelves, hangs in baskets, or climbs with support. NASA research has identified it as one of the top air-purifying plants. Pothos tolerates neglect, low light, and irregular watering better than almost any other houseplant.",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=1200&q=85&auto=format&fit=crop",
    category: "Trailing",
    tags: ["Beginner", "Air Purifying", "Trailing", "Low Light"],
    careLevel: "Easy",
    light: "Low",
    water: "Every 2 weeks",
    humidity: "Low",
    temperature: "60–80°F (15–27°C)",
    petSafe: false,
    airPurifying: true,
    growthRate: "Fast",
    maxHeight: "Trailing to 10 ft",
    nativeRegion: "Southeast Asia",
    careGuide: {
      watering: "Allow the top half of soil to dry out before watering. Pothos actually benefits from slight drought — overwatering is its only real weakness. In winter, water even less frequently.",
      light: "Adapts to almost any light condition. Grows fastest in bright, indirect light but tolerates dim rooms. Note: variegation (golden patterns) requires more light; in low light, leaves may revert to all-green.",
      soil: "Use standard potting mix. Pothos isn't picky, but ensure the pot has drainage. Adding perlite improves drainage and prevents root rot.",
      fertilizing: "Feed monthly during spring and summer with a balanced fertilizer. Pothos is a light feeder — once or twice a month is sufficient.",
      repotting: "Repot when roots circle the bottom of the pot or emerge from drainage holes, typically every 1–2 years. It actually doesn't mind being slightly rootbound.",
      pruning: "Prune leggy vines to encourage bushier growth. Cuttings can be immediately propagated in water. Pinch back stem tips to promote branching.",
    },
    commonProblems: [
      { problem: "Yellow leaves", solution: "Overwatering is the most common cause. Let the soil dry out more between waterings. Also check for root rot — remove any black, mushy roots." },
      { problem: "Loss of variegation", solution: "Insufficient light. Move the plant to a brighter spot and the new leaves will regain their golden patterns." },
      { problem: "Brown, crispy leaves", solution: "Too much direct sun, low humidity, or salt buildup from tap water. Move away from direct light and flush the soil monthly." },
    ],
    proTips: [
      "Pothos in water can live indefinitely — try a vase propagation as a stylish water feature",
      "Train it to climb a wall using small hooks or a moss pole for giant, more vibrant leaves",
      "Variegated varieties (Marble Queen, Neon, Manjula) need more light to maintain their patterns",
    ],
    faqs: [
      { question: "Can I grow Pothos in just water?", answer: "Absolutely. Pothos thrives in water indefinitely. Place cuttings in a clear vase, change the water weekly, and add a drop of liquid fertilizer monthly. Roots become a beautiful display element." },
      { question: "How long can Pothos survive without water?", answer: "Pothos can go 2–4 weeks without water in most conditions. It's one of the most drought-tolerant houseplants, making it ideal for travelers or forgetful plant owners." },
      { question: "Why is Pothos called devil's ivy?", answer: "Because it stays green even in the dark and is nearly impossible to kill — as if it has a deal with the devil. The name reflects its legendary resilience and ability to survive conditions that would kill other plants." },
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "snake-plant",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    tagline: "The bedroom guardian — purifies air while you sleep",
    description:
      "The Snake Plant (also called Mother-in-Law's Tongue) is the ultimate low-maintenance houseplant. Its rigid, sword-like leaves with distinctive green and yellow banding stand upright with architectural precision. Unlike most plants, it absorbs CO₂ and releases oxygen at night — making it exceptional for bedrooms. It survives drought, low light, and neglect with stoic grace.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=1200&q=85&auto=format&fit=crop",
    category: "Succulent",
    tags: ["Beginner", "Air Purifying", "Low Light", "Bedroom"],
    careLevel: "Easy",
    light: "Low",
    water: "Monthly",
    humidity: "Low",
    temperature: "60–80°F (15–27°C)",
    petSafe: false,
    airPurifying: true,
    growthRate: "Slow",
    maxHeight: "2–4 ft indoors",
    nativeRegion: "West Africa",
    careGuide: {
      watering: "Water only when the soil is completely dry — every 2–6 weeks depending on season and light. In winter, once a month or less is sufficient. Root rot from overwatering is the #1 cause of Snake Plant death.",
      light: "Tolerates almost any light condition from deep shade to bright indirect light. Brighter light speeds growth and intensifies leaf color. Avoid prolonged direct sun which can scorch the leaves.",
      soil: "Use cactus/succulent mix or add plenty of perlite and coarse sand to standard potting soil. Excellent drainage is critical. Terracotta pots work best as they wick moisture.",
      fertilizing: "Feed once or twice during spring and summer with a diluted balanced fertilizer. Never fertilize in fall or winter.",
      repotting: "Repot every 3–5 years. Snake plants are very tolerant of being rootbound and actually prefer slightly tight quarters. When roots push through drainage holes or crack the pot, it's time.",
      pruning: "Remove damaged or dead leaves at the base. To control height, cut leaf tips (though this will brown the cut edge). Propagate removed leaves in water or soil.",
    },
    commonProblems: [
      { problem: "Mushy, rotting base", solution: "Root rot from overwatering. Remove plant from soil, cut off rotted roots, let air dry for a day, then repot in fresh, dry soil. Water sparingly going forward." },
      { problem: "Wrinkled or curling leaves", solution: "Underwatering is rare but possible. Water thoroughly and the leaves should firm up within a day." },
      { problem: "Brown leaf tips", solution: "Common and usually cosmetic. Caused by inconsistent watering, low humidity, or fluoride in tap water. Use filtered water and maintain even moisture levels." },
    ],
    proTips: [
      "Group several plants of different sizes for a dramatic, architectural display",
      "The cylindrical Sansevieria cylindrica and the compact 'Hahnii' bird's nest variety offer great variety",
      "NASA studies rank it among the best air-purifying plants for formaldehyde removal",
    ],
    faqs: [
      { question: "Is Snake Plant good for bedrooms?", answer: "Yes — it's one of the best. Unlike most plants that release CO₂ at night, Snake Plant performs Crassulacean Acid Metabolism (CAM), absorbing CO₂ and releasing oxygen even in darkness. It's a natural bedroom air purifier." },
      { question: "How often should I really water my Snake Plant?", answer: "In summer, every 2–3 weeks. In winter, every 4–6 weeks. The rule: stick your finger 2 inches into the soil. If any moisture remains, wait. If bone dry, water thoroughly." },
      { question: "My Snake Plant is falling over — what's wrong?", answer: "Leaves collapse or lean from overwatering (soft, mushy base), root rot, or occasionally from becoming very top-heavy. Check the base for softness. If the roots are healthy, stake the leaves and ensure better drainage." },
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "peace-lily",
    name: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    tagline: "Elegant, droopy drama — and one of the best air purifiers",
    description:
      "The Peace Lily is one of the few flowering plants that thrives in low light conditions, making it invaluable for dim interiors. Its glossy dark-green leaves and elegant white spathes (often mistaken for flowers) create a serene, sophisticated look. NASA consistently ranks it among the most effective plants for removing common household toxins including ammonia, benzene, and formaldehyde.",
    image: "https://images.unsplash.com/photo-1588614978574-bc762e3f44a1?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1588614978574-bc762e3f44a1?w=1200&q=85&auto=format&fit=crop",
    category: "Flowering",
    tags: ["Air Purifying", "Flowering", "Low Light", "Beginner"],
    careLevel: "Easy",
    light: "Low",
    water: "Once a week",
    humidity: "High",
    temperature: "65–80°F (18–27°C)",
    petSafe: false,
    airPurifying: true,
    growthRate: "Moderate",
    maxHeight: "1–4 ft indoors",
    nativeRegion: "Tropical Americas",
    careGuide: {
      watering: "Water when the top inch of soil is dry, about once a week in summer. Peace Lily will dramatically droop to tell you it's thirsty — this is normal, not an emergency. Water thoroughly and it will perk up within hours.",
      light: "One of the best plants for low-light rooms. Tolerates shade but blooms best with bright, indirect light. Avoid direct sun which causes leaf burn and yellowing.",
      soil: "Rich, well-draining potting mix. Peat-based or moisture-retaining mixes work well as Peace Lily prefers slightly moist (but not wet) soil.",
      fertilizing: "Feed every 6 weeks in spring and summer with a balanced fertilizer. To encourage blooming, use a high-phosphorus fertilizer in spring.",
      repotting: "Repot every 1–2 years in spring. Peace Lily blooms more when slightly rootbound, so don't rush to size up.",
      pruning: "Remove spent flower spathes and yellowed leaves at the base. Keep the plant tidy and it will continue producing new growth and blooms.",
    },
    commonProblems: [
      { problem: "Drooping dramatically", solution: "Thirsty! Water immediately and it will recover within hours. If soil is moist and still drooping, check for root rot." },
      { problem: "Not blooming", solution: "Move to brighter (indirect) light and use a bloom-boosting fertilizer high in phosphorus. Peace Lilies also bloom more when slightly rootbound." },
      { problem: "Brown leaf tips", solution: "Very common — caused by fluoride in tap water, low humidity, or over-fertilizing. Switch to filtered water and mist regularly." },
    ],
    proTips: [
      "Place in bathrooms or kitchens where natural steam boosts humidity",
      "The dramatic droop is an excellent built-in watering indicator — more reliable than any moisture meter",
      "Wipe leaves with a damp cloth to keep them glossy and maximize air-purifying effectiveness",
    ],
    faqs: [
      { question: "How do I get my Peace Lily to bloom?", answer: "Ensure bright indirect light, use a balanced fertilizer in spring, keep slightly rootbound, and maintain temperatures above 65°F. Mimicking a slight drought stress (letting it droop slightly before watering) can trigger blooming." },
      { question: "Why do Peace Lily flowers turn green?", answer: "As the spathe ages, it naturally turns green then brown. This is normal. Simply cut off the spent spathe at the base to encourage new flowers to emerge." },
    ],
    featured: true,
  },
  {
    id: "5",
    slug: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    tagline: "The designer's darling — dramatic, architectural, worth the effort",
    description:
      "The Fiddle Leaf Fig has become the definitive statement plant of modern interior design. Its enormous, violin-shaped leaves in deep, waxy green create a sculptural presence that no other houseplant can match. Make no mistake — this plant has a reputation for drama. It dislikes change, demands consistency, and will punish neglect with spectacular leaf drops. But master its preferences and it will reward you with breathtaking beauty.",
    image: "https://images.unsplash.com/photo-1558618047-f8dbd7b54f2a?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1558618047-f8dbd7b54f2a?w=1200&q=85&auto=format&fit=crop",
    category: "Tropical",
    tags: ["Statement", "Designer", "Challenging", "Tropical"],
    careLevel: "Hard",
    light: "Bright indirect",
    water: "Once a week",
    humidity: "Medium",
    temperature: "65–75°F (18–24°C)",
    petSafe: false,
    airPurifying: false,
    growthRate: "Moderate",
    maxHeight: "6–10 ft indoors",
    nativeRegion: "Tropical West Africa",
    careGuide: {
      watering: "Water when the top 2 inches of soil are dry — about once a week in summer. Use room-temperature, filtered water. The Fiddle Leaf despises wet feet and is equally unhappy when bone dry. Consistency is key.",
      light: "Needs bright, indirect light for at least 6 hours daily. Place near a south or east-facing window but out of direct afternoon sun. This plant needs a permanent spot — moving it causes stress and leaf drop.",
      soil: "Fast-draining potting mix is essential. Use a mix designed for fiddle leaf figs, or combine standard potting soil with perlite and orchid bark (2:1:1).",
      fertilizing: "Feed monthly in spring and summer with a high-nitrogen liquid fertilizer. Fiddle Leaf Figs are moderate feeders. Never fertilize in fall or winter.",
      repotting: "Repot every 1–2 years in spring, going up just one pot size. Be gentle with roots. After repotting, place in bright light and avoid moving for several weeks.",
      pruning: "Prune to control height and encourage branching. Make cuts just above a leaf node. Notching (cutting a small groove above a bud) can encourage branching lower on the trunk.",
    },
    commonProblems: [
      { problem: "Brown spots on leaves", solution: "Brown spots with yellow edges = overwatering/root rot. Brown spots on edges = underwatering or low humidity. Brown spots in center = bacterial infection (more water needed but also improve airflow)." },
      { problem: "Dropping leaves suddenly", solution: "Stress from relocation, cold drafts, temperature change, or root disturbance. Choose a stable spot away from HVAC vents and don't move it unnecessarily." },
      { problem: "Slow or no growth", solution: "Usually insufficient light. Move closer to a bright window. Also check if rootbound — sometimes repotting into fresh soil restarts growth." },
    ],
    proTips: [
      "Find its forever spot before bringing it home — moving causes stress and leaf drop",
      "Dust leaves regularly with a damp cloth; dust blocks light absorption",
      "A wooden dowel inserted into soil and tapped against the trunk mimics forest wind, strengthening the trunk",
      "Buying a larger, more mature plant (4+ feet) is often more successful than a small one",
    ],
    faqs: [
      { question: "Why does my Fiddle Leaf Fig keep dropping leaves?", answer: "The three most common causes: (1) moving the plant or a change in environment, (2) root rot from overwatering, (3) cold drafts or dry heat from vents. Check all three and address accordingly. Stability is key." },
      { question: "Is Fiddle Leaf Fig hard to care for?", answer: "Compared to most houseplants, yes. It requires consistent care, stable conditions, and the right light. However, once it's settled in an ideal spot, it becomes much easier. The first year is usually the hardest." },
      { question: "How do I make my Fiddle Leaf Fig grow faster?", answer: "Ensure maximum indirect light, fertilize monthly in spring/summer, maintain temperatures of 65–75°F, keep humidity above 50%, and water consistently. Avoid moving it once it's established." },
    ],
    featured: true,
  },
  {
    id: "6",
    slug: "zz-plant",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    tagline: "The office survivalist — thrives on neglect, shines with attention",
    description:
      "The ZZ Plant is the plant that keeps on giving — even when you forget to give it water, light, or attention. Its waxy, almost artificial-looking deep green leaves grow in graceful arching stems. The plant stores water in its thick rhizomes (underground potato-like structures), making it extraordinarily drought-tolerant. Slow-growing but virtually indestructible, it's the perfect plant for busy lifestyles.",
    image: "https://images.unsplash.com/photo-1581578949510-fa7315c659b3?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581578949510-fa7315c659b3?w=1200&q=85&auto=format&fit=crop",
    category: "Tropical",
    tags: ["Beginner", "Low Light", "Office", "Drought Tolerant"],
    careLevel: "Easy",
    light: "Low",
    water: "Every 2 weeks",
    humidity: "Low",
    temperature: "60–75°F (15–24°C)",
    petSafe: false,
    airPurifying: true,
    growthRate: "Slow",
    maxHeight: "2–4 ft indoors",
    nativeRegion: "East Africa",
    careGuide: {
      watering: "Water every 2–3 weeks in summer, every 3–4 weeks in winter. The ZZ Plant's rhizomes store water, so drought conditions are actually preferable to overwatering. Always let the soil dry completely.",
      light: "Tolerates very low light but grows better with indirect medium to bright light. It's one of the few plants that can survive in windowless offices under fluorescent lighting alone.",
      soil: "Well-draining, sandy potting mix. Add perlite or cactus mix. The ZZ is adapted to poor, dry soils — rich moisture-retaining mixes will cause rot.",
      fertilizing: "Feed 2–3 times during the growing season with a diluted balanced fertilizer. The ZZ is a light feeder.",
      repotting: "Repot every 2–3 years when roots begin to emerge from drainage holes or the rhizomes push the plant out of the pot. The thick roots can crack plastic pots — choose sturdy ceramic or grow bags.",
      pruning: "Minimal pruning needed. Remove yellowed stems at the base. The plant naturally sheds older stems as it produces new ones.",
    },
    commonProblems: [
      { problem: "Yellow leaves throughout", solution: "Overwatering and poor drainage. Remove the plant from soil, allow to dry, trim any rotted roots, and repot in fresh, well-draining mix." },
      { problem: "Wrinkled or shriveled stems", solution: "Underwatering — rare but possible. Water thoroughly and the stems should plump back up within a week." },
      { problem: "Leggy, sparse growth", solution: "Insufficient light. Move to a brighter spot. Growth is naturally slow, but leggy stems indicate the plant is reaching for more light." },
    ],
    proTips: [
      "The Raven ZZ (dark purple-black leaves) is a stunning variety for dramatic interior design",
      "ZZ Plant sap can irritate skin and eyes — wear gloves when handling and wash hands after",
      "Perfect for offices, bathrooms, and dark corners where other plants struggle",
    ],
    faqs: [
      { question: "Is ZZ Plant toxic?", answer: "Yes, all parts of the ZZ Plant contain calcium oxalate crystals, which are toxic to both people and pets if ingested. Keep away from children and animals, and wash hands after handling." },
      { question: "How long can ZZ Plant go without water?", answer: "Up to 3–4 months in some cases, thanks to its water-storing rhizomes. While this is possible, it's not ideal. Regular watering every 2–3 weeks produces the best growth." },
    ],
    featured: false,
  },
  {
    id: "7",
    slug: "spider-plant",
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    tagline: "Prolific, cheerful, and safe for pets — a family favorite",
    description:
      "The Spider Plant is one of the most adaptable, easy-to-grow houseplants in existence. Its arching green and white striped leaves and cascading 'spiderettes' (baby plants on long runners) create a playful, living display. It's one of the few truly pet-safe houseplants, making it perfect for homes with curious cats or dogs. NASA rates it among the best air purifiers, removing up to 90% of toxins from indoor air.",
    image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=1200&q=85&auto=format&fit=crop",
    category: "Trailing",
    tags: ["Pet Safe", "Air Purifying", "Beginner", "Family Friendly"],
    careLevel: "Easy",
    light: "Medium",
    water: "Once a week",
    humidity: "Medium",
    temperature: "60–75°F (15–24°C)",
    petSafe: true,
    airPurifying: true,
    growthRate: "Fast",
    maxHeight: "Trailing to 3 ft",
    nativeRegion: "South Africa",
    careGuide: {
      watering: "Water once a week in summer, every 10–14 days in winter. Spider plants are moderately drought-tolerant and prefer to dry out slightly between waterings.",
      light: "Thrives in bright, indirect light but tolerates lower light conditions. Variegated varieties maintain their striping best with brighter light.",
      soil: "Well-draining standard potting mix. Spider plants aren't fussy about soil but dislike sitting in wet conditions.",
      fertilizing: "Feed monthly during the growing season with a balanced liquid fertilizer. Reduce to every 6–8 weeks in winter.",
      repotting: "Repot every 1–2 years. Spider plants can become very rootbound (the fleshy roots may even push out of drainage holes). Repotting into fresh soil re-energizes growth.",
      pruning: "Remove brown leaf tips with sharp scissors (cutting at an angle mimics the leaf's natural shape). Harvest spiderettes by cutting the runner and potting them individually.",
    },
    commonProblems: [
      { problem: "Brown leaf tips", solution: "The most common Spider Plant complaint. Caused by fluoride or salt buildup in tap water. Switch to filtered or distilled water, and flush the soil every few months." },
      { problem: "Pale or bleached leaves", solution: "Too much direct sun. Move to a spot with bright indirect light." },
      { problem: "No spiderettes", solution: "Spider plants produce babies when slightly rootbound and under mild stress. Ensure adequate light and reduce watering slightly." },
    ],
    proTips: [
      "Hang in a macramé basket — the cascading spiderettes create a stunning living curtain",
      "Give baby spiderettes to friends as gifts — they root readily in water or soil",
      "Spider plants are mildly hallucinogenic to cats (similar to catnip) — while non-toxic, cats may chew them enthusiastically",
    ],
    faqs: [
      { question: "Are Spider Plants safe for cats and dogs?", answer: "Yes! Spider Plant is non-toxic to cats and dogs according to the ASPCA. While cats are sometimes attracted to the plant (it contains compounds mildly similar to catnip), ingestion typically causes only mild stomach upset if they eat large amounts." },
      { question: "How do I propagate Spider Plant babies?", answer: "Cut the runner connecting the baby to the mother plant. Place the baby in a glass of water (roots usually emerge in 1–2 weeks) or press directly into moist potting soil and keep it slightly moist until established." },
    ],
    featured: false,
  },
  {
    id: "8",
    slug: "rubber-plant",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    tagline: "Bold, glossy statement leaves in burgundy, green, or variegated",
    description:
      "The Rubber Plant commands attention with its large, glossy leaves in rich shades of deep green, burgundy, or striking variegated patterns. It grows into an impressive indoor tree with a thick trunk and architectural structure. More forgiving than its cousin the Fiddle Leaf Fig, the Rubber Plant rewards consistent care with vigorous growth. Its dramatic foliage adds a tropical, luxurious feel to any space.",
    image: "https://images.unsplash.com/photo-1619158401201-8edb7e208e12?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1619158401201-8edb7e208e12?w=1200&q=85&auto=format&fit=crop",
    category: "Tropical",
    tags: ["Statement", "Tropical", "Low Light", "Bold Foliage"],
    careLevel: "Easy",
    light: "Bright indirect",
    water: "Every 10 days",
    humidity: "Medium",
    temperature: "60–75°F (15–24°C)",
    petSafe: false,
    airPurifying: true,
    growthRate: "Moderate",
    maxHeight: "6–10 ft indoors",
    nativeRegion: "Southeast Asia",
    careGuide: {
      watering: "Water when the top inch of soil is dry, approximately every 10 days in summer. Reduce in winter. The Rubber Plant tolerates dry spells much better than wet roots.",
      light: "Bright indirect light produces the best growth and leaf color. The burgundy 'Abidjan' variety needs more light to maintain its deep color. Tolerates lower light but grows slower.",
      soil: "Well-draining mix. Standard potting soil with added perlite works well. The Rubber Plant is adaptable but appreciates good drainage.",
      fertilizing: "Feed monthly in spring and summer with a balanced fertilizer. The Rubber Plant responds well to fertilizing with noticeably faster growth.",
      repotting: "Repot every 1–2 years. Choose a pot 2 inches larger and use fresh potting mix. The plant grows quickly and may need annual repotting in its first few years.",
      pruning: "Prune in spring to control height and encourage branching. Wear gloves when pruning — the white latex sap irritates skin and stains surfaces.",
    },
    commonProblems: [
      { problem: "Dropping lower leaves", solution: "Natural as the plant grows taller and redirects energy upward. Also caused by sudden changes in environment, overwatering, or cold drafts." },
      { problem: "Dull, matte leaves", solution: "Dust accumulation. Wipe each leaf with a damp cloth dipped in diluted milk or leaf shine solution for mirror-like glossiness." },
    ],
    proTips: [
      "The 'Tineke' (pink and cream variegation) and 'Ruby' (pink, cream, and green) varieties are spectacular",
      "Wipe leaves monthly with a damp cloth — the large, glossy surfaces are natural dust collectors",
      "Notch the trunk just above a dormant bud to encourage branching from lower on the plant",
    ],
    faqs: [
      { question: "How do I make my Rubber Plant branch?", answer: "Prune the top growth (at a node) to stimulate lateral branching. You can also 'notch' the trunk — cut a small wedge just above a dormant bud. This tricks the plant into breaking dormancy and producing a branch at that point." },
      { question: "The sap from my Rubber Plant stained my wall — what do I do?", answer: "The white latex sap dries quickly. For fresh stains, wipe immediately with a damp cloth. For dried stains on walls, rubbing alcohol or nail polish remover on a cloth usually removes it. Always prune over newspaper or a drop cloth." },
    ],
    featured: false,
  },
  {
    id: "9",
    slug: "boston-fern",
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    tagline: "Lush, billowing fronds for high-humidity sanctuaries",
    description:
      "The Boston Fern is the classic hanging plant, with its long, arching fronds of feathery, bright-green leaflets creating a lush, wild aesthetic. It's one of the best natural air humidifiers — as it transpires moisture through its leaves, it naturally raises room humidity. Bathrooms and kitchens are its natural habitat. While it requires more attention than many houseplants, its lush, cascading form is unmatched.",
    image: "https://images.unsplash.com/photo-1637776234034-5e84b6dfc2a8?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1637776234034-5e84b6dfc2a8?w=1200&q=85&auto=format&fit=crop",
    category: "Fern",
    tags: ["Humidity Loving", "Air Purifying", "Hanging", "Bathroom"],
    careLevel: "Medium",
    light: "Medium",
    water: "Every 5-7 days",
    humidity: "High",
    temperature: "65–75°F (18–24°C)",
    petSafe: true,
    airPurifying: true,
    growthRate: "Moderate",
    maxHeight: "Trailing to 3 ft",
    nativeRegion: "Tropical Americas",
    careGuide: {
      watering: "Keep soil consistently moist but never waterlogged. Water when the top inch of soil begins to dry. Boston Ferns are more sensitive to drying out than most plants — missing a watering can cause rapid browning.",
      light: "Bright, indirect light is ideal. Near a north or east-facing window works beautifully. Avoid direct sun, which scorches the delicate fronds.",
      soil: "Peat-based potting mix that retains some moisture while draining well. Adding peat moss or coco coir improves water retention.",
      fertilizing: "Feed every 2–3 weeks during spring and summer with a balanced liquid fertilizer at half strength. Boston Ferns are moderate feeders.",
      repotting: "Repot annually in spring into fresh, moisture-retaining potting mix. The dense root system depletes nutrients quickly.",
      pruning: "Remove brown or yellowed fronds at the base. Cut back leggy growth in early spring to stimulate fresh, lush growth.",
    },
    commonProblems: [
      { problem: "Brown, crispy fronds", solution: "Low humidity is the primary cause. Mist daily, use a pebble tray, or run a humidifier. Also check soil moisture — drying out causes rapid browning." },
      { problem: "Shedding leaflets constantly", solution: "Normal behavior, especially in winter or after relocation. Ensure humidity is adequate and avoid cold drafts and dry heat from vents." },
    ],
    proTips: [
      "Bathrooms with bright windows are the perfect natural habitat — steam from showers provides ideal humidity",
      "During winter, move to the most humid room in your home and increase misting frequency",
      "The Blue Bell Fern and Dallas Fern are lower-maintenance alternatives worth exploring",
    ],
    faqs: [
      { question: "Is Boston Fern safe for cats?", answer: "Yes! Boston Fern is non-toxic to cats and dogs according to the ASPCA, making it a great choice for pet-friendly homes." },
      { question: "Why do my Boston Fern leaves keep turning yellow?", answer: "Usually a combination of low humidity, inconsistent watering, or cold temperatures. Increase humidity to 60%+, water consistently, and keep away from cold drafts and air conditioning." },
    ],
    featured: false,
  },
  {
    id: "10",
    slug: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    tagline: "Nature's first aid kit — beautiful, useful, and nearly indestructible",
    description:
      "Aloe Vera is one of the most useful plants you can grow at home. Its thick, succulent leaves are filled with a clear gel with remarkable healing properties — a natural remedy for minor burns, skin irritation, and sunburn. As a plant, it requires almost no care: minimal water, lots of sun, and well-draining soil. Its sculptural rosette form is also genuinely beautiful, especially in terracotta pots.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1200&q=85&auto=format&fit=crop",
    category: "Succulent",
    tags: ["Medicinal", "Succulent", "Beginner", "Drought Tolerant"],
    careLevel: "Easy",
    light: "Full sun",
    water: "Every 2 weeks",
    humidity: "Low",
    temperature: "55–80°F (13–27°C)",
    petSafe: false,
    airPurifying: false,
    growthRate: "Moderate",
    maxHeight: "1–2 ft indoors",
    nativeRegion: "Arabian Peninsula",
    careGuide: {
      watering: "Water deeply but infrequently — every 2–3 weeks in summer, once a month in winter. The soil must dry completely between waterings. Water at the base, not over the leaves, to prevent rot.",
      light: "Needs lots of bright light — a sunny south or west-facing windowsill is ideal. At least 6 hours of direct or very bright indirect light. Insufficient light causes the plant to become leggy and pale.",
      soil: "Cactus or succulent mix is essential. Alternatively, mix potting soil with 50% perlite or coarse sand. Excellent drainage is non-negotiable — use terracotta pots for best results.",
      fertilizing: "Feed once in spring and once in summer with a diluted succulent fertilizer. Aloe is a light feeder; over-fertilizing causes leggy, weak growth.",
      repotting: "Repot every 2 years or when the plant outgrows its pot. Remove pups (offshoots) during repotting and pot them separately.",
      pruning: "Remove dead or damaged outer leaves at the base with clean scissors. Harvest lower leaves for gel by cutting at the base — never take more than 1/3 of the plant at once.",
    },
    commonProblems: [
      { problem: "Mushy, translucent leaves", solution: "Overwatering or poor drainage. Let dry completely, remove rotted areas, repot in fresh, gritty soil, and resume watering only when bone dry." },
      { problem: "Brown, dry leaf tips", solution: "Underwatering or too much direct intense sun. Water more consistently and provide morning sun rather than harsh afternoon sun." },
      { problem: "Leggy, leaning plant", solution: "Insufficient light. Move to a sunnier location or supplement with a grow light. The plant is reaching toward more light." },
    ],
    proTips: [
      "Keep a mature Aloe near the kitchen — snap off a leaf for instant first aid on minor burns",
      "The gel inside the leaves is also excellent as a natural hair mask or skin moisturizer",
      "Aloe pups (baby plants) that form at the base can be separated and gifted",
    ],
    faqs: [
      { question: "How do I use Aloe Vera gel from the plant?", answer: "Cut a mature outer leaf at the base. Trim the edges and tip. Slice lengthwise and scoop out the clear gel with a spoon. Apply directly to minor burns, sunburn, or skin irritation. Store unused gel in the refrigerator for up to a week." },
      { question: "Is Aloe Vera safe for pets?", answer: "No. Aloe Vera is toxic to cats and dogs. The saponins and anthraquinones in the plant can cause vomiting, diarrhea, and lethargy in pets. Keep out of reach of animals." },
    ],
    featured: false,
  },
  {
    id: "11",
    slug: "bird-of-paradise",
    name: "Bird of Paradise",
    scientificName: "Strelitzia reginae",
    tagline: "Tropical drama in a pot — leaves like brushstrokes of the jungle",
    description:
      "The Bird of Paradise is the ultimate tropical statement plant. Its enormous, banana-like leaves in vivid green split characteristically along their veins to create a natural, wind-swept sculpture. Indoors, it rarely blooms, but the foliage alone makes it one of the most striking plants available. It needs space, light, and patience — but rewards all three with spectacular growth.",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=1200&q=85&auto=format&fit=crop",
    category: "Tropical",
    tags: ["Statement", "Tropical", "Dramatic", "Large"],
    careLevel: "Medium",
    light: "Bright indirect",
    water: "Once a week",
    humidity: "Medium",
    temperature: "65–85°F (18–29°C)",
    petSafe: false,
    airPurifying: false,
    growthRate: "Moderate",
    maxHeight: "4–6 ft indoors",
    nativeRegion: "South Africa",
    careGuide: {
      watering: "Water when the top 2 inches of soil are dry, about once a week in summer. The Bird of Paradise tolerates drought better than waterlogging. In winter, reduce to every 10–14 days.",
      light: "Needs maximum light — a south-facing window with direct sun is ideal. Outdoor-quality light or a grow light supplement is needed for the best growth and any chance of blooming.",
      soil: "Rich, well-draining potting mix. A mix of potting soil, perlite, and compost (2:1:1) provides excellent drainage and nutrition.",
      fertilizing: "Feed monthly in spring and summer with a balanced or high-nitrogen liquid fertilizer. This is a hungry plant that grows vigorously with adequate nutrition.",
      repotting: "Repot every 2 years or when severely rootbound. The plant actually blooms more when somewhat rootbound. Choose a heavy pot — it becomes very top-heavy.",
      pruning: "Remove lower leaves as they age and brown. Split leaves are natural and normal — don't try to 'fix' them.",
    },
    commonProblems: [
      { problem: "Leaves won't split", solution: "Leaf splitting happens naturally from air currents and maturity. Ensure adequate light and don't worry — indoor leaves may split less than outdoor plants." },
      { problem: "Brown leaf edges", solution: "Low humidity, underwatering, or fluoride/salt buildup. Use filtered water and maintain 40–60% humidity." },
    ],
    proTips: [
      "One of few houseplants that actually benefits from direct sunlight — a south-facing window is its happy place",
      "The White Bird of Paradise (Strelitzia nicolai) grows larger leaves and has more tolerance for indoor conditions",
      "Repot only when necessary — being slightly rootbound actually encourages the rare indoor bloom",
    ],
    faqs: [
      { question: "Will my Bird of Paradise flower indoors?", answer: "Indoor blooming is rare but possible. It requires several years of maturity, maximum sunlight (preferably south-facing direct sun), and being slightly rootbound. Most indoor Bird of Paradise plants are grown purely for foliage." },
      { question: "Why do Bird of Paradise leaves split?", answer: "This is completely natural. The splits along leaf veins allow wind to pass through the leaves in its natural habitat without tearing them. The splitting is a sign of a healthy, mature plant — not damage." },
    ],
    featured: false,
  },
  {
    id: "12",
    slug: "string-of-pearls",
    name: "String of Pearls",
    scientificName: "Senecio rowleyanus",
    tagline: "A living necklace — tiny green spheres cascading in elegant rows",
    description:
      "String of Pearls is one of the most distinctive and whimsical succulents available. Its long, trailing stems are studded with round, pea-like leaves that look like a string of green pearls cascading from a hanging basket. The spherical leaves are an evolutionary adaptation to store water and minimize surface area exposed to heat. Fragrant white flowers bloom in spring.",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=1200&q=85&auto=format&fit=crop",
    category: "Succulent",
    tags: ["Trailing", "Unique", "Succulent", "Hanging"],
    careLevel: "Medium",
    light: "Bright indirect",
    water: "Every 2 weeks",
    humidity: "Low",
    temperature: "65–80°F (18–27°C)",
    petSafe: false,
    airPurifying: false,
    growthRate: "Fast",
    maxHeight: "Trailing to 2 ft",
    nativeRegion: "South Africa",
    careGuide: {
      watering: "Water deeply but infrequently — every 10–14 days in summer, every 3–4 weeks in winter. The 'pearls' should feel firm, not mushy or shriveled. Let the soil dry completely between waterings.",
      light: "Bright indirect light to some direct sun. An east-facing window with morning sun is ideal. Too little light causes weak, widely-spaced growth; too much direct afternoon sun causes shriveling.",
      soil: "Cactus or succulent mix with added perlite. The mix must drain fast — any moisture retention causes root rot.",
      fertilizing: "Feed monthly in spring and summer with a diluted succulent fertilizer. String of Pearls is a light feeder.",
      repotting: "Repot every 1–2 years or when the plant becomes extremely rootbound. Handle gently — the pearls detach easily.",
      pruning: "Trim leggy stems to encourage fuller growth. Pruned stems root readily in soil for propagation.",
    },
    commonProblems: [
      { problem: "Shriveled, wrinkled pearls", solution: "Underwatering. Water thoroughly and the pearls should plump back up within a few days." },
      { problem: "Mushy, brown pearls", solution: "Overwatering and root rot. Remove from soil, allow to dry, trim any rotted roots, and repot in fresh, dry succulent mix." },
    ],
    proTips: [
      "One of the fastest-draining soils possible is ideal — some growers use pure perlite",
      "Propagate by laying cuttings on top of dry soil — they'll root along the stem wherever nodes touch soil",
      "The Variegated String of Pearls has stunning cream and green 'pearls' but is harder to find",
    ],
    faqs: [
      { question: "Why are my String of Pearls shriveling?", answer: "Shriveled, wrinkly pearls indicate underwatering. Water thoroughly and the pearls should recover within a day or two. If the pearls are also mushy, you have the opposite problem — overwatering and potential root rot." },
    ],
    featured: false,
  },
];

export function getPlantBySlug(slug: string): Plant | undefined {
  return plants.find((p) => p.slug === slug);
}

export function getFeaturedPlants(): Plant[] {
  return plants.filter((p) => p.featured);
}

export function getPlantsByCategory(category: string): Plant[] {
  return plants.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(plants.map((p) => p.category))];
}

export function searchPlants(query: string): Plant[] {
  const q = query.toLowerCase();
  return plants.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.scientificName.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}
