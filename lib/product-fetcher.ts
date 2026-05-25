import { prisma } from "./prisma";
import { searchAmazonProducts, CATEGORY_KEYWORDS, type PAAPIProduct } from "./amazon-pa-api";
import { slugify } from "./utils";

export type FetchCategory = keyof typeof CATEGORY_KEYWORDS | "all";

export interface FetchResult {
  fetched: number;
  added: number;
  skipped: number;  // already in DB
  errors: string[];
  products: { name: string; asin: string; status: "added" | "skipped" }[];
}

function buildSlug(name: string): string {
  return slugify(name).slice(0, 80);
}

function inferShortDescription(name: string, brand: string): string {
  return `${brand} — ${name.slice(0, 100)}`;
}

/**
 * Fetch products for one or more categories, deduplicate against DB, save as drafts.
 */
export async function fetchAndSaveProducts(
  categories: string[],
  maxPerCategory = 8
): Promise<FetchResult> {
  const result: FetchResult = { fetched: 0, added: 0, skipped: 0, errors: [], products: [] };

  const categoriesToFetch = categories.includes("all")
    ? Object.keys(CATEGORY_KEYWORDS)
    : categories;

  for (const category of categoriesToFetch) {
    const keywords = CATEGORY_KEYWORDS[category] ?? [category];

    let products: PAAPIProduct[] = [];
    try {
      products = await searchAmazonProducts(keywords, category, maxPerCategory);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      result.errors.push(`${category}: ${msg}`);
      continue;
    }

    result.fetched += products.length;

    for (const product of products) {
      try {
        // Check for duplicates by ASIN or slug
        const slug = buildSlug(product.title);
        const existing = await prisma.product.findFirst({
          where: {
            OR: [
              { amazonAsin: product.asin },
              { slug },
            ],
          },
        });

        if (existing) {
          result.skipped++;
          result.products.push({ name: product.title, asin: product.asin, status: "skipped" });
          continue;
        }

        await prisma.product.create({
          data: {
            slug: slug + "-" + product.asin.toLowerCase().slice(-4),
            name: product.title,
            brand: product.brand || "Amazon",
            description: `${product.title} by ${product.brand || "Amazon"}. Highly rated by indoor plant enthusiasts. Check current pricing and availability on Amazon.`,
            shortDescription: inferShortDescription(product.title, product.brand),
            image: product.image || "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
            category,
            priceRange: product.price || "Check Amazon",
            rating: product.rating,
            reviewCount: product.reviewCount,
            tags: JSON.stringify([category, product.brand].filter(Boolean)),
            amazonUrl: product.affiliateUrl,
            amazonAsin: product.asin,
            affiliateTag: process.env.AMAZON_PA_PARTNER_TAG || "indoorgarden-20",
            featured: false,
            bestSeller: product.reviewCount > 5000 && product.rating >= 4.5,
            published: false, // Draft — requires admin review
          },
        });

        result.added++;
        result.products.push({ name: product.title, asin: product.asin, status: "added" });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        result.errors.push(`Save "${product.title}": ${msg}`);
      }
    }
  }

  return result;
}
