import { PrismaClient } from "@prisma/client";
import { plants } from "../lib/data/plants";
import { products } from "../lib/data/products";
import { blogPosts } from "../lib/data/blog";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.affiliateClick.deleteMany();
  await prisma.plant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.blogPost.deleteMany();

  // Seed plants
  for (const plant of plants) {
    await prisma.plant.upsert({
      where: { slug: plant.slug },
      update: {},
      create: {
        id: plant.id,
        slug: plant.slug,
        name: plant.name,
        scientificName: plant.scientificName,
        tagline: plant.tagline,
        description: plant.description,
        image: plant.image,
        heroImage: plant.heroImage,
        category: plant.category,
        tags: JSON.stringify(plant.tags),
        careLevel: plant.careLevel,
        light: plant.light,
        water: plant.water,
        humidity: plant.humidity,
        temperature: plant.temperature,
        petSafe: plant.petSafe,
        airPurifying: plant.airPurifying,
        growthRate: plant.growthRate,
        maxHeight: plant.maxHeight,
        nativeRegion: plant.nativeRegion,
        careGuide: JSON.stringify(plant.careGuide),
        commonProblems: JSON.stringify(plant.commonProblems),
        proTips: JSON.stringify(plant.proTips),
        faqs: JSON.stringify(plant.faqs),
        featured: plant.featured,
        published: true,
      },
    });
  }
  console.log(`✓ Seeded ${plants.length} plants`);

  // Seed products
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        id: product.id,
        slug: product.slug,
        name: product.name,
        brand: product.brand,
        description: product.description,
        shortDescription: product.shortDescription,
        image: product.image,
        category: product.category,
        priceRange: product.priceRange,
        rating: product.rating,
        reviewCount: product.reviewCount,
        tags: JSON.stringify(product.tags),
        amazonUrl: product.amazonUrl,
        featured: product.featured,
        bestSeller: product.bestSeller,
        published: true,
      },
    });
  }
  console.log(`✓ Seeded ${products.length} products`);

  // Seed blog posts
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        image: post.image,
        category: post.category,
        tags: JSON.stringify(post.tags),
        author: post.author,
        authorAvatar: post.authorAvatar,
        publishedAt: new Date(post.publishedAt),
        readTime: post.readTime,
        featured: post.featured,
        published: true,
      },
    });
  }
  console.log(`✓ Seeded ${blogPosts.length} blog posts`);

  console.log("✅ Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
