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
    const plant = await prisma.plant.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.slug && { slug: data.slug }),
        ...(data.scientificName !== undefined && { scientificName: data.scientificName }),
        ...(data.tagline !== undefined && { tagline: data.tagline }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.image !== undefined && { image: data.image }),
        ...(data.heroImage !== undefined && { heroImage: data.heroImage }),
        ...(data.category !== undefined && { category: data.category }),
        ...(data.tags !== undefined && { tags: JSON.stringify(data.tags) }),
        ...(data.careLevel !== undefined && { careLevel: data.careLevel }),
        ...(data.light !== undefined && { light: data.light }),
        ...(data.water !== undefined && { water: data.water }),
        ...(data.humidity !== undefined && { humidity: data.humidity }),
        ...(data.temperature !== undefined && { temperature: data.temperature }),
        ...(data.petSafe !== undefined && { petSafe: data.petSafe }),
        ...(data.airPurifying !== undefined && { airPurifying: data.airPurifying }),
        ...(data.growthRate !== undefined && { growthRate: data.growthRate }),
        ...(data.maxHeight !== undefined && { maxHeight: data.maxHeight }),
        ...(data.nativeRegion !== undefined && { nativeRegion: data.nativeRegion }),
        ...(data.careGuide !== undefined && { careGuide: JSON.stringify(data.careGuide) }),
        ...(data.commonProblems !== undefined && { commonProblems: JSON.stringify(data.commonProblems) }),
        ...(data.proTips !== undefined && { proTips: JSON.stringify(data.proTips) }),
        ...(data.faqs !== undefined && { faqs: JSON.stringify(data.faqs) }),
        ...(data.featured !== undefined && { featured: data.featured }),
        ...(data.published !== undefined && { published: data.published }),
      },
    });
    return NextResponse.json(plant);
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
    await prisma.plant.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
