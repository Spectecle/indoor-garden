export type ProductCategory =
  | "Planters & Pots"
  | "Soil & Fertilizers"
  | "Tools & Accessories"
  | "Grow Lights"
  | "Books & Guides"
  | "Watering";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  description: string;
  shortDescription: string;
  image: string;
  category: ProductCategory;
  priceRange: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  amazonUrl: string;
  featured: boolean;
  bestSeller: boolean;
  relatedPlants: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "mkono-ceramic-planter-set",
    name: "MKONO Ceramic Planter Set",
    brand: "MKONO",
    description:
      "A beautifully designed set of 3 modern ceramic planters in matte finishes. These minimalist pots feature drainage holes and bamboo saucers, making them both functional and elegant. Perfect for succulents, pothos, and small statement plants. The neutral cream and sage color palette complements any interior.",
    shortDescription: "Set of 3 modern matte ceramic planters with drainage holes and bamboo saucers.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Planters & Pots",
    priceRange: "$25–$35",
    rating: 4.7,
    reviewCount: 2847,
    tags: ["Ceramic", "Set of 3", "Drainage", "Modern"],
    amazonUrl: "https://www.amazon.com/s?k=mkono+ceramic+planter+set&tag=indoorgarden-20",
    featured: true,
    bestSeller: true,
    relatedPlants: ["pothos", "snake-plant", "aloe-vera"],
  },
  {
    id: "2",
    slug: "fox-farm-ocean-forest-potting-soil",
    name: "FoxFarm Ocean Forest Potting Soil",
    brand: "FoxFarm",
    description:
      "The gold standard of premium potting soil for serious plant enthusiasts. This rich, organic mix contains Pacific Northwest sea-going fish and crab meal, forest humus, moss, and more. pH adjusted to 6.3–6.8, it's ideal for indoor plants that demand quality soil. Used and trusted by professionals and advanced home growers alike.",
    shortDescription: "Premium organic potting soil with ocean-based nutrients, pH balanced for indoor plants.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Soil & Fertilizers",
    priceRange: "$20–$30",
    rating: 4.8,
    reviewCount: 15234,
    tags: ["Organic", "Premium", "pH Balanced", "Indoor"],
    amazonUrl: "https://www.amazon.com/s?k=foxfarm+ocean+forest+potting+soil&tag=indoorgarden-20",
    featured: true,
    bestSeller: true,
    relatedPlants: ["monstera-deliciosa", "fiddle-leaf-fig", "rubber-plant"],
  },
  {
    id: "3",
    slug: "espoma-indoor-plant-food",
    name: "Espoma Organic Indoor! Plant Food",
    brand: "Espoma",
    description:
      "A complete, natural liquid fertilizer formulated specifically for indoor plants. This certified organic formula promotes lush green growth, stronger root systems, and overall plant vitality. It contains beneficial microbes that help plants absorb nutrients more efficiently. Safe for all indoor plants including edibles.",
    shortDescription: "Certified organic liquid fertilizer with beneficial microbes for all indoor plants.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Soil & Fertilizers",
    priceRange: "$12–$18",
    rating: 4.6,
    reviewCount: 8921,
    tags: ["Organic", "Liquid", "All Plants", "Microbes"],
    amazonUrl: "https://www.amazon.com/s?k=espoma+indoor+plant+food&tag=indoorgarden-20",
    featured: false,
    bestSeller: true,
    relatedPlants: ["monstera-deliciosa", "pothos", "peace-lily"],
  },
  {
    id: "4",
    slug: "spider-farmer-sf1000-grow-light",
    name: "Spider Farmer SF1000 LED Grow Light",
    brand: "Spider Farmer",
    description:
      "A professional-grade LED grow light that delivers a full spectrum of light mimicking natural sunlight. With Samsung LM301B diodes, it's highly energy-efficient while producing exceptional light output. Dimmable from 0–100%, it suits seedlings through mature plants. A genuine game-changer for plants in low-light apartments.",
    shortDescription: "Full-spectrum LED grow light with Samsung diodes — energy efficient and dimmable.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Grow Lights",
    priceRange: "$80–$110",
    rating: 4.8,
    reviewCount: 12456,
    tags: ["LED", "Full Spectrum", "Dimmable", "Energy Efficient"],
    amazonUrl: "https://www.amazon.com/s?k=spider+farmer+sf1000+led+grow+light&tag=indoorgarden-20",
    featured: true,
    bestSeller: false,
    relatedPlants: ["monstera-deliciosa", "fiddle-leaf-fig", "bird-of-paradise"],
  },
  {
    id: "5",
    slug: "haws-indoor-watering-can",
    name: "Haws Handy Indoor Watering Can",
    brand: "Haws",
    description:
      "The finest watering cans in the world, made in England since 1886. This 1-litre indoor can features a long, elegant copper-colored rose that delivers a gentle, precise stream perfect for delicate plants. The balanced design makes watering comfortable and splash-free. A beautiful tool that makes plant care feel like a ritual.",
    shortDescription: "Classic English copper-finish indoor watering can with gentle long-reach rose.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Watering",
    priceRange: "$35–$50",
    rating: 4.9,
    reviewCount: 3267,
    tags: ["Premium", "Copper", "Precise", "Beautiful"],
    amazonUrl: "https://www.amazon.com/s?k=haws+indoor+watering+can&tag=indoorgarden-20",
    featured: false,
    bestSeller: false,
    relatedPlants: ["peace-lily", "boston-fern", "spider-plant"],
  },
  {
    id: "6",
    slug: "trustbasket-terracotta-pots",
    name: "Classic Terracotta Pots with Saucers",
    brand: "TrustBasket",
    description:
      "Authentic terracotta pots in a set of 6 graduated sizes, each with matching saucers. Terracotta is the traditional planting medium for good reason — it's porous, allowing roots to breathe and excess moisture to evaporate, dramatically reducing overwatering risk. The warm earthy tones complement virtually any plant.",
    shortDescription: "Set of 6 classic terracotta pots with saucers in graduated sizes.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Planters & Pots",
    priceRange: "$30–$45",
    rating: 4.5,
    reviewCount: 5634,
    tags: ["Terracotta", "Set of 6", "Breathable", "Classic"],
    amazonUrl: "https://www.amazon.com/s?k=terracotta+pots+with+saucers+set&tag=indoorgarden-20",
    featured: false,
    bestSeller: true,
    relatedPlants: ["aloe-vera", "snake-plant", "zz-plant"],
  },
  {
    id: "7",
    slug: "fiskars-micro-tip-pruning-snips",
    name: "Fiskars Micro-Tip Pruning Snips",
    brand: "Fiskars",
    description:
      "Precision pruning snips with micro-tip blades for tight spaces and intricate cutting. The stainless steel blades stay sharp through years of use and make clean cuts that minimize plant stress. The spring-action design reduces hand fatigue during long pruning sessions. Essential for any plant collection.",
    shortDescription: "Precision micro-tip pruning snips with stainless steel blades for clean cuts.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Tools & Accessories",
    priceRange: "$15–$20",
    rating: 4.7,
    reviewCount: 7823,
    tags: ["Pruning", "Precision", "Steel", "Professional"],
    amazonUrl: "https://www.amazon.com/s?k=fiskars+micro+tip+pruning+snips&tag=indoorgarden-20",
    featured: false,
    bestSeller: true,
    relatedPlants: ["monstera-deliciosa", "rubber-plant", "fiddle-leaf-fig"],
  },
  {
    id: "8",
    slug: "the-new-plant-parent-book",
    name: "The New Plant Parent",
    brand: "Darryl Cheng",
    description:
      "The most practically useful houseplant book published in decades. Darryl Cheng (Instagram's @houseplantjournal) takes a science-based approach to understanding exactly why plants behave the way they do, teaching you to read your plant's signals rather than follow rigid rules. Beautifully photographed and written with genuine expertise.",
    shortDescription: "The science-based houseplant care book by Instagram's @houseplantjournal.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Books & Guides",
    priceRange: "$20–$30",
    rating: 4.8,
    reviewCount: 2156,
    tags: ["Book", "Science-Based", "Photography", "Expert"],
    amazonUrl: "https://www.amazon.com/s?k=the+new+plant+parent+darryl+cheng&tag=indoorgarden-20",
    featured: true,
    bestSeller: false,
    relatedPlants: [],
  },
  {
    id: "9",
    slug: "blumat-self-watering-stakes",
    name: "Blumat Drip System Watering Stakes",
    brand: "Blumat",
    description:
      "The original Austrian self-watering stakes used by professional plant nurseries worldwide. These clever terracotta stakes automatically water your plants at exactly the rate they need — watering more in hot, dry conditions and less in cool, humid ones. Set them up before a vacation and return to thriving plants.",
    shortDescription: "Professional Austrian self-watering stakes — perfect for vacations and busy schedules.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Watering",
    priceRange: "$25–$40",
    rating: 4.4,
    reviewCount: 1876,
    tags: ["Self-Watering", "Vacation", "Automatic", "Professional"],
    amazonUrl: "https://www.amazon.com/s?k=blumat+drip+watering+stakes&tag=indoorgarden-20",
    featured: false,
    bestSeller: false,
    relatedPlants: ["monstera-deliciosa", "fiddle-leaf-fig", "bird-of-paradise"],
  },
  {
    id: "10",
    slug: "moisture-meter-sonkir",
    name: "Sonkir 3-in-1 Soil Moisture Meter",
    brand: "Sonkir",
    description:
      "Eliminate guesswork from watering with this accurate 3-in-1 meter that measures soil moisture, pH, and light levels simultaneously. No batteries required — completely solar powered. An essential tool for beginners learning to read their plants and experienced growers managing large collections.",
    shortDescription: "3-in-1 meter measuring soil moisture, pH, and light — no batteries needed.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Tools & Accessories",
    priceRange: "$10–$15",
    rating: 4.3,
    reviewCount: 18934,
    tags: ["Beginner", "No Batteries", "Accurate", "Multi-use"],
    amazonUrl: "https://www.amazon.com/s?k=sonkir+soil+moisture+meter+3+in+1&tag=indoorgarden-20",
    featured: false,
    bestSeller: true,
    relatedPlants: [],
  },
  {
    id: "11",
    slug: "miracle-gro-moisture-control",
    name: "Miracle-Gro Moisture Control Potting Mix",
    brand: "Miracle-Gro",
    description:
      "The most popular potting mix in the US, Moisture Control is formulated to protect against both over and under-watering by absorbing up to 33% more water than standard potting soil, then releasing it slowly as plants need it. Includes fertilizer for immediate plant food.",
    shortDescription: "Popular moisture-control potting mix that protects against over and under-watering.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Soil & Fertilizers",
    priceRange: "$15–$25",
    rating: 4.5,
    reviewCount: 24567,
    tags: ["Moisture Control", "Popular", "Beginner", "With Fertilizer"],
    amazonUrl: "https://www.amazon.com/s?k=miracle+gro+moisture+control+potting+mix&tag=indoorgarden-20",
    featured: false,
    bestSeller: true,
    relatedPlants: ["pothos", "spider-plant", "peace-lily"],
  },
  {
    id: "12",
    slug: "hanging-macrame-plant-holder",
    name: "Mkono Macramé Plant Hangers Set",
    brand: "MKONO",
    description:
      "Handcrafted cotton macramé plant hangers that transform any hanging plant into a design statement. Set of 4 hangers in varying styles — including shelf-style, single pot, and cascade formats. The natural cotton rope complements both boho and modern interiors. Supports pots up to 7 inches in diameter.",
    shortDescription: "Set of 4 handcrafted cotton macramé plant hangers for indoor or outdoor use.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Planters & Pots",
    priceRange: "$18–$28",
    rating: 4.6,
    reviewCount: 9123,
    tags: ["Macramé", "Hanging", "Boho", "Natural Cotton"],
    amazonUrl: "https://www.amazon.com/s?k=macrame+plant+hangers+indoor+set&tag=indoorgarden-20",
    featured: false,
    bestSeller: false,
    relatedPlants: ["pothos", "spider-plant", "string-of-pearls", "boston-fern"],
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productCategories: ProductCategory[] = [
  "Planters & Pots",
  "Soil & Fertilizers",
  "Tools & Accessories",
  "Grow Lights",
  "Books & Guides",
  "Watering",
];
