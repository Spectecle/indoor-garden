import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    const data = await request.json();
    const product = await prisma.product.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.slug && { slug: data.slug }),
        ...(data.brand && { brand: data.brand }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.shortDescription !== undefined && { shortDescription: data.shortDescription }),
        ...(data.image !== undefined && { image: data.image }),
        ...(data.category && { category: data.category }),
        ...(data.priceRange !== undefined && { priceRange: data.priceRange }),
        ...(data.rating !== undefined && { rating: parseFloat(data.rating) }),
        ...(data.reviewCount !== undefined && { reviewCount: parseInt(data.reviewCount) }),
        ...(data.tags !== undefined && { tags: JSON.stringify(data.tags) }),
        ...(data.amazonUrl !== undefined && { amazonUrl: data.amazonUrl }),
        ...(data.amazonAsin !== undefined && { amazonAsin: data.amazonAsin }),
        ...(data.affiliateTag !== undefined && { affiliateTag: data.affiliateTag }),
        ...(data.featured !== undefined && { featured: data.featured }),
        ...(data.bestSeller !== undefined && { bestSeller: data.bestSeller }),
        ...(data.published !== undefined && { published: data.published }),
      },
    });
    return NextResponse.json(product);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    await prisma.affiliateClick.deleteMany({ where: { productId: id } });
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
