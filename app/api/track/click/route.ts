import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();
    if (!productId) return NextResponse.json({ ok: false });

    await prisma.affiliateClick.create({ data: { productId } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
