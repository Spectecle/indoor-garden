import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  try {
    await requireAuth();
    const plants = await prisma.plant.findMany({ orderBy: { name: "asc" } });
    return NextResponse.json(plants);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    const data = await request.json();
    const plant = await prisma.plant.create({
      data: {
        slug: data.slug,
        name: data.name,
        scientificName: data.scientificName || "",
        tagline: data.tagline || "",
        description: data.description || "",
        image: data.image || "",
        heroImage: data.heroImage || data.image || "",
        category: data.category || "Foliage",
        tags: JSON.stringify(data.tags || []),
        careLevel: data.careLevel || "Easy",
        light: data.light || "Medium",
        water: data.water || "Once a week",
        humidity: data.humidity || "Medium",
        temperature: data.temperature || "60–80°F",
        petSafe: data.petSafe || false,
        airPurifying: data.airPurifying || false,
        growthRate: data.growthRate || "Moderate",
        maxHeight: data.maxHeight || "3 feet",
        nativeRegion: data.nativeRegion || "",
        careGuide: JSON.stringify(data.careGuide || {}),
        commonProblems: JSON.stringify(data.commonProblems || []),
        proTips: JSON.stringify(data.proTips || []),
        faqs: JSON.stringify(data.faqs || []),
        featured: data.featured || false,
        published: data.published !== false,
      },
    });
    return NextResponse.json(plant, { status: 201 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
