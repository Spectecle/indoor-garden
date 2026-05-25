export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  relatedPlants: string[];
  relatedProducts: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-low-light-plants-dark-apartments",
    title: "The 12 Best Low-Light Plants for Dark Apartments",
    excerpt:
      "You don't need a sun-drenched studio to have a thriving plant collection. These 12 species genuinely thrive in dim conditions — and some actually prefer it.",
    content: `
# The 12 Best Low-Light Plants for Dark Apartments

Living in a north-facing apartment or a basement flat doesn't mean you have to give up on indoor plants. While no plant can truly grow in total darkness, these 12 species have evolved to thrive in the filtered, low-light conditions of forest understories — and they'll do beautifully in your dimly-lit home.

## What "Low Light" Actually Means

Before we dive in, let's be clear about what low light means. If you can comfortably read a book without turning on a light during daytime, your space has enough light for these plants. If you need artificial light to see clearly during the day, supplement with a basic grow light.

## The 12 Best Choices

**1. ZZ Plant (Zamioculcas zamiifolia)**
The undisputed champion of neglect and low light. Its thick rhizomes store water and nutrients, and it's adapted to grow under the dense canopy of tropical East Africa. Will even survive under fluorescent office lighting.

**2. Snake Plant (Sansevieria trifasciata)**
Practically indestructible. Performs CAM photosynthesis, meaning it can function with remarkably little light. Place in the darkest corner of your home and water monthly.

**3. Pothos (Epipremnum aureum)**
The golden standard for low-light trailing plants. While it grows fastest in bright light, it genuinely thrives in low light. Note: variegation fades to all-green in dark conditions — but the plant remains healthy.

**4. Peace Lily (Spathiphyllum)**
One of the few plants that will actually flower in low light. Its white spathes bring elegance to dark corners. Also one of NASA's top-rated air purifiers.

**5. Cast Iron Plant (Aspidistra elatior)**
Named for its toughness. Tolerates not just low light but also drafts, temperature fluctuations, and irregular watering. Slow-growing but virtually immortal.

**6. Chinese Evergreen (Aglaonema)**
The more green the variety, the more shade it tolerates. The solid-green 'Green Lady' and 'Emerald Bay' are excellent choices. Beautiful patterned leaves add interest without requiring bright light.

**7. Heartleaf Philodendron (Philodendron hederaceum)**
Similar to Pothos in light requirements and trailing habit, but with more velvety, heart-shaped leaves. Grows well in lower light than most Philodendrons.

**8. Boston Fern (Nephrolepis exaltata)**
Prefers filtered, medium-low light. Bathrooms with a small window are ideal — the humidity helps enormously. Not quite as dark-tolerant as the others on this list, but worth including for its lush visual impact.

**9. Dracaena (Dracaena fragrans)**
The corn plant tolerates low light better than most, maintaining its striped foliage in dim conditions. Allow soil to dry between waterings.

**10. Lucky Bamboo (Dracaena sanderiana)**
Not actually bamboo, but a Dracaena that thrives in very low light and can grow in water alone. A nearly foolproof option.

**11. Nerve Plant (Fittonia)**
Small but stunning. The intricate silver or red veining on deep green leaves creates incredible texture. Thrives in terrariums and low-light vivariums.

**12. Parlor Palm (Chamaedorea elegans)**
The most shade-tolerant palm available. Brings a graceful tropical feel to dim rooms. Grow in a cluster for maximum impact.

## Pro Tips for Low-Light Spaces

- **Supplement with a grow light**: Even 2–4 hours of artificial light per day makes a significant difference
- **Keep leaves dust-free**: Clean leaves absorb light more efficiently — critical in low-light conditions
- **Use reflective surfaces**: White walls, mirrors, and glossy surfaces bounce light deeper into rooms
- **Rotate quarterly**: Ensure even growth on all sides of the plant
    `,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    category: "Care Guides",
    tags: ["Low Light", "Apartment", "Beginners", "Dark Rooms"],
    author: "Sophia Greene",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b02c?w=100&q=80&auto=format&fit=crop",
    publishedAt: "2025-03-15",
    readTime: 7,
    featured: true,
    relatedPlants: ["zz-plant", "snake-plant", "pothos", "peace-lily"],
    relatedProducts: ["spider-farmer-sf1000-grow-light", "moisture-meter-sonkir"],
  },
  {
    id: "2",
    slug: "how-to-save-overwatered-plant",
    title: "How to Save an Overwatered Plant (Before It's Too Late)",
    excerpt:
      "Overwatering kills more houseplants than any other cause. Here's exactly what to do — and when — to rescue a plant on the edge.",
    content: `
# How to Save an Overwatered Plant (Before It's Too Late)

Overwatering is the #1 killer of houseplants. The irony is it happens because we care too much. Here's how to identify it early, and how to rescue a plant that's on the edge.

## Signs Your Plant Is Overwatered

- **Yellow leaves** throughout the plant (not just lower leaves)
- **Mushy or soft stems** at the base
- **Soggy soil** that stays wet for more than a week
- **Fungus gnats** hovering around the soil (they breed in moist soil)
- **Mold** on the soil surface
- **Root rot**: brown, mushy roots that smell unpleasant

## Step-by-Step Rescue Protocol

### 1. Stop watering immediately
This sounds obvious, but the instinct when a plant looks sick is to water it more. Resist this.

### 2. Check the roots
Remove the plant from its pot. Healthy roots are white or tan and firm. Rotted roots are brown or black, mushy, and may smell bad.

### 3. Remove damaged roots
Using clean, sharp scissors, cut away all soft, discolored roots. Cutting into healthy tissue is better than leaving diseased roots that will continue to spread rot.

### 4. Allow roots to air dry
After cutting, let the root ball sit in open air for 1–2 hours. This helps dry out remaining moisture and allows cuts to callous slightly.

### 5. Treat with hydrogen peroxide (optional but recommended)
Mix 1 part 3% hydrogen peroxide with 2 parts water. Rinse the root ball gently. This kills fungal spores and bacteria that cause rot.

### 6. Repot in fresh, dry soil
Never reuse the old soil — it contains the fungal and bacterial pathogens that caused the rot. Use fresh, well-draining potting mix. Add extra perlite to improve drainage.

### 7. Place in bright, indirect light
Don't water for 3–5 days after repotting. This helps the damaged roots recover and dry out further.

### 8. Resume careful watering
When you do water, water less than normal. Check soil moisture with a finger or moisture meter before every watering.

## Prevention: Never Overwater Again

The golden rule: **never water on a schedule**. Instead, check the soil before every watering. Most plants should dry out to some degree between waterings. Always use pots with drainage holes.
    `,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop",
    category: "Troubleshooting",
    tags: ["Overwatering", "Root Rot", "Rescue", "Care"],
    author: "Marcus Fernandez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
    publishedAt: "2025-02-20",
    readTime: 6,
    featured: true,
    relatedPlants: ["monstera-deliciosa", "fiddle-leaf-fig", "snake-plant"],
    relatedProducts: ["moisture-meter-sonkir", "fox-farm-ocean-forest-potting-soil"],
  },
  {
    id: "3",
    slug: "bathroom-jungle-humidity-loving-plants",
    title: "Creating a Bathroom Jungle: 8 Plants That Love Humidity",
    excerpt:
      "Your bathroom's steam and moisture is wasted on humans. Here's how to turn it into a lush, spa-like sanctuary with plants that adore humidity.",
    content: `
# Creating a Bathroom Jungle: 8 Plants That Love Humidity

Your bathroom creates the perfect microclimate for an entire category of plants that struggle everywhere else in your home. The steam from showers, consistent warmth, and ambient moisture mimic the humid tropical understories these plants evolved in.

## Why Bathrooms Work So Well

Most tropical houseplants come from humid jungle environments where humidity regularly exceeds 70%. Most home interiors hover around 30–50% — fine for us, but stressful for these plants. Your bathroom naturally reaches 60–80% humidity after a shower, making it the ideal location.

## The 8 Best Bathroom Plants

**Boston Fern (Nephrolepis exaltata)**
The quintessential bathroom plant. Loves the steam, tolerates lower light, and rewards you with lush, billowing fronds that trail dramatically from shelves.

**Orchids (Phalaenopsis)**
Phalaenopsis orchids are natural bathroom residents. They need filtered light, warmth, and humidity — exactly what a bathroom near a window provides. They'll rebloom more reliably in bathrooms than anywhere else in the home.

**Air Plants (Tillandsia)**
No soil required. Mount on driftwood or in a glass globe and let the bathroom humidity do the watering. They absorb water and nutrients through their leaves.

**Spider Plant (Chlorophytum comosum)**
Pet-safe and vigorous. Hangs beautifully from bathroom shelves, producing cascading babies that multiply your collection effortlessly.

**Peace Lily (Spathiphyllum)**
Thrives in low-light, high-humidity conditions — the exact description of most bathrooms. Its white flowers add elegance.

**Pothos (Epipremnum aureum)**
Train it to drape from a high shelf and cascade down your shower wall for an immersive, natural effect. Incredibly forgiving and grows vigorously with bathroom humidity.

**Chinese Evergreen (Aglaonema)**
Its patterned foliage — silver, pink, red, or green — creates visual interest in a low-light bathroom. Among the most tolerant plants for warm, humid environments.

**Nerve Plant (Fittonia)**
The intricate veining on Fittonia leaves makes it one of the most beautiful small plants available. Normally finicky about humidity, it's practically care-free in a bathroom environment.

## Setup Tips

- **Rotate plants** out of the bathroom every 2–3 weeks if there's no natural window — alternate them with bright-spot plants
- **Use drainage saucers** on all pots to protect surfaces
- **Ventilate** after showers to prevent excessive humidity that can cause fungal issues on walls
- **Consider floating shelves** on the wall opposite your window for maximum light distribution
    `,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
    category: "Interior Design",
    tags: ["Bathroom", "Humidity", "Interior Design", "Tropical"],
    author: "Sophia Greene",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b02c?w=100&q=80&auto=format&fit=crop",
    publishedAt: "2025-01-10",
    readTime: 5,
    featured: false,
    relatedPlants: ["boston-fern", "peace-lily", "spider-plant", "pothos"],
    relatedProducts: ["mkono-ceramic-planter-set"],
  },
  {
    id: "4",
    slug: "propagation-101-free-plants",
    title: "Propagation 101: Growing an Entire Collection for Free",
    excerpt:
      "Why buy new plants when you can multiply the ones you already have? A complete beginner's guide to propagating houseplants by stem cuttings, division, and leaf.",
    content: `
# Propagation 101: Growing an Entire Collection for Free

Propagation — the art of creating new plants from parts of existing ones — is one of the most satisfying skills in indoor gardening. Once you understand the basics, you can exponentially grow your collection, share plants with friends, and never need to buy another pothos, monstera, or succulent again.

## The Three Main Methods

### 1. Stem Cuttings in Water

**Best for**: Pothos, Philodendron, Monstera, Tradescantia, Coleus, Impatiens

**How to**:
1. Cut a healthy stem 4–6 inches below a node (the bump where leaves meet the stem)
2. Remove lower leaves, leaving 2–3 at the tip
3. Place in clean water, ensuring the node is submerged but no leaves touch the water
4. Place in bright indirect light and change water every 5–7 days
5. When roots are 1–2 inches long, pot in fresh soil

**Tip**: Clear glass containers let you watch roots develop and look beautiful on windowsills.

### 2. Stem Cuttings in Soil

**Best for**: Succulents, ZZ Plant stems, Rubber Plant, Fiddle Leaf Fig, Begonias

**How to**:
1. Take a 4–6 inch cutting just below a node. For succulents, let the cut end callous for 24 hours first.
2. Dip the cut end in rooting hormone powder (optional but speeds rooting)
3. Insert 1–2 inches into moist, well-draining potting mix or perlite
4. Cover with a clear plastic bag or humidity dome to retain moisture
5. Keep in bright indirect light; roots typically develop in 3–6 weeks

### 3. Division

**Best for**: Spider Plants (spiderettes), Peace Lily, ZZ Plant, Boston Fern, Pothos

When repotting, simply separate the root ball into 2 or more sections, ensuring each division has healthy roots and foliage. Pot each section individually and care for it as a mature plant. This is the fastest way to get a full-sized new plant.

## Propagation Calendar

**Spring and summer** are the best seasons for propagation — plants are in active growth, have high energy, and root most quickly. Autumn propagation is possible but slower. Avoid propagating in winter except for tropical plants in warm conditions.

## Common Mistakes

- **Too little patience**: Most cuttings take 3–8 weeks to root. Don't disturb or test the cutting too early.
- **Overwatering propagating cuttings**: Keep the propagation medium moist, not wet.
- **Using dirty tools**: Always use clean, sharp scissors. Diseased stems or dirty tools introduce pathogens.
- **Taking cuttings from unhealthy plants**: Only propagate from healthy, vigorous growth.
    `,
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=800&q=80&auto=format&fit=crop",
    category: "Propagation",
    tags: ["Propagation", "Free Plants", "Water Propagation", "Cuttings"],
    author: "Marcus Fernandez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
    publishedAt: "2024-12-05",
    readTime: 8,
    featured: true,
    relatedPlants: ["pothos", "monstera-deliciosa", "rubber-plant"],
    relatedProducts: ["fox-farm-ocean-forest-potting-soil", "fiskars-micro-tip-pruning-snips"],
  },
  {
    id: "5",
    slug: "indoor-plant-pests-identify-eliminate",
    title: "Indoor Plant Pests: Identify, Treat, and Prevent the 7 Most Common Invaders",
    excerpt:
      "From fungus gnats to spider mites — a complete field guide to identifying and eliminating the most common houseplant pests using organic and chemical methods.",
    content: `
# Indoor Plant Pests: The Complete Guide

Even the most experienced plant parents face pests. The key is early identification and swift action. Here's everything you need to know about the 7 most common indoor plant pests.

## 1. Fungus Gnats

**Looks like**: Tiny, dark flies hovering around soil
**Damages**: Larvae feed on roots and organic matter in moist soil
**Best treatment**:
- Allow soil to dry out between waterings (larvae need moisture to survive)
- Yellow sticky traps for adults
- Hydrogen peroxide drench (1:4 ratio with water) kills larvae
- Beneficial nematodes (Steinernema feltiae) — organic, highly effective

## 2. Spider Mites

**Looks like**: Tiny white or red dots on undersides of leaves; fine webbing
**Damages**: Pierce leaf cells, causing stippled yellowing; serious infestations kill plants
**Best treatment**:
- Isolate immediately — spider mites spread fast
- Spray with strong water stream to knock off mites
- Neem oil spray (weekly for 3–4 weeks)
- Insecticidal soap spray

## 3. Mealybugs

**Looks like**: White, cottony clusters in leaf axils and on stems
**Damages**: Suck sap, secrete honeydew (sticky substance), weaken plants
**Best treatment**:
- Dab individual bugs with alcohol-soaked cotton swab
- Spray with 70% isopropyl alcohol diluted 50/50 with water
- Neem oil spray weekly

## 4. Scale

**Looks like**: Brown, shell-like bumps on stems and leaves
**Damages**: Suck sap; hard shell makes them resistant to sprays
**Best treatment**:
- Physically remove with a soft toothbrush dipped in soapy water
- Neem oil (must penetrate shell)
- Systemic insecticide for severe infestations

## 5. Aphids

**Looks like**: Tiny green, yellow, or black soft-bodied insects clustering on new growth
**Damages**: Suck sap from tender new shoots, causing distorted growth
**Best treatment**:
- Knock off with strong water spray
- Insecticidal soap spray
- Neem oil
- Introduce beneficial insects outdoors (ladybugs eat aphids)

## 6. Thrips

**Looks like**: Tiny, slender yellow or brown insects; silvery streaks or stippling on leaves
**Damages**: Rasp leaf tissue, spreading plant viruses
**Best treatment**:
- Blue sticky traps (thrips are attracted to blue)
- Spinosad spray (organic, highly effective)
- Neem oil spray

## 7. Root Mealybugs

**Looks like**: White waxy coating on roots (only visible during repotting)
**Damages**: Feed on roots, causing wilting and decline that resembles overwatering
**Best treatment**:
- Bare-root the plant and wash all soil from roots
- Submerge roots in insecticidal soap solution for 10 minutes
- Repot in fresh, sterile soil

## Universal Prevention

- **Inspect new plants** before bringing them home; quarantine for 2 weeks
- **Avoid overwatering** — moist soil attracts fungus gnats
- **Maintain airflow** — stagnant air encourages mites
- **Monthly neem oil spray** as a preventative on all plants
- **Keep plants healthy** — stressed plants attract pests
    `,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    category: "Pest Control",
    tags: ["Pests", "Fungus Gnats", "Spider Mites", "Organic"],
    author: "Sophia Greene",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b02c?w=100&q=80&auto=format&fit=crop",
    publishedAt: "2024-11-18",
    readTime: 9,
    featured: false,
    relatedPlants: ["monstera-deliciosa", "fiddle-leaf-fig", "pothos"],
    relatedProducts: ["moisture-meter-sonkir", "fiskars-micro-tip-pruning-snips"],
  },
  {
    id: "6",
    slug: "ultimate-repotting-guide",
    title: "The Ultimate Repotting Guide: When, How, and What Soil to Use",
    excerpt:
      "Repotting is the single most impactful thing you can do for an established houseplant. Here's exactly when to do it, how to do it right, and which soil to use.",
    content: `
# The Ultimate Repotting Guide

Repotting is one of the most transformative things you can do for an established houseplant. Fresh soil, more space, and removed pathogens can trigger explosive new growth from a plant that seemed stuck. Here's everything you need to know.

## When to Repot

**Signs your plant needs a new home**:
- Roots growing out of drainage holes
- Roots circling visibly around the soil surface
- Plant drying out much faster than normal (rootbound soil has less volume to hold moisture)
- Plant top-heavy and tipping over
- More than 2 years since last repotting
- Soil compaction (water runs straight through without absorbing)

**Best time**: Spring, as days lengthen and plants enter their growth phase. Second best: late summer. Avoid repotting in winter unless the plant is in crisis.

## Choosing the Right Pot

**Size**: Go up only 1–2 inches in diameter. Larger pots hold more moisture, which increases overwatering risk in the new, fresh soil.

**Material**:
- **Terracotta**: Best drainage, breathable walls, beautiful — slightly faster drying
- **Ceramic**: Decorative, heavier, retains moisture slightly longer
- **Plastic**: Lightweight, retains moisture well, fine for moisture-loving plants
- **Self-watering**: Good for consistent moisture needs (ferns, Peace Lily)

**Always** ensure drainage holes. No drainage = root rot.

## Step-by-Step Repotting

1. **Water 24 hours before** — moist soil holds together better and reduces transplant shock
2. **Prepare the new pot** with fresh potting mix in the bottom third
3. **Remove the plant** by tipping the pot and gently loosening the edges with a knife
4. **Examine the roots** — trim any circling, dead, or mushy roots with clean scissors
5. **Loosen the root ball** gently with your fingers to encourage outward growth
6. **Position in new pot** so the plant sits at the same depth as before
7. **Fill around the root ball** with fresh potting mix, tamping gently
8. **Water thoroughly** until it drains from the bottom
9. **Place in usual spot** — don't repot and then move to a new location simultaneously

## Choosing the Right Soil

| Plant Type | Best Soil Mix |
|------------|---------------|
| Tropical (Monstera, Pothos, Philodendron) | Potting mix + perlite (3:1) |
| Succulents & Cacti | Cactus mix or potting soil + 50% perlite |
| Ferns | Peat-based mix that retains moisture |
| Orchids | Orchid bark + perlite |
| Fiddle Leaf Fig / Rubber Plant | Well-draining mix + orchid bark |

## After Repotting

- **Don't fertilize** for 4–6 weeks — fresh soil contains enough nutrients and fertilizing stressed roots can burn them
- **Keep in usual light conditions** — avoid major environmental changes immediately after repotting
- **Monitor watering carefully** — fresh soil retains moisture differently than old compacted soil
- **Drooping is normal** for 1–2 weeks as the plant adjusts
    `,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
    category: "Care Guides",
    tags: ["Repotting", "Soil", "Pots", "Spring Care"],
    author: "Marcus Fernandez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
    publishedAt: "2024-10-22",
    readTime: 7,
    featured: false,
    relatedPlants: ["monstera-deliciosa", "fiddle-leaf-fig", "zz-plant"],
    relatedProducts: ["fox-farm-ocean-forest-potting-soil", "trustbasket-terracotta-pots", "fiskars-micro-tip-pruning-snips"],
  },
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getAllBlogCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}
