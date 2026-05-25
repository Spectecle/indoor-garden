import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  try {
    await requireAuth();
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(products);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    const data = await request.json();
    const product = await prisma.product.create({
      data: {
        slug: data.slug,
        name: data.name,
        brand: data.brand,
        description: data.description,
        shortDescription: data.shortDescription,
        image: data.image,
        category: data.category,
        priceRange: data.priceRange,
        rating: parseFloat(data.rating) || 0,
        reviewCount: parseInt(data.reviewCount) || 0,
        tags: JSON.stringify(data.tags || []),
        amazonUrl: data.amazonUrl,
        amazonAsin: data.amazonAsin || null,
        affiliateTag: data.affiliateTag || "indoorgarden-20",
        featured: data.featured || false,
        bestSeller: data.bestSeller || false,
        published: data.published !== false,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
