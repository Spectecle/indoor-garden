import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { fetchAndSaveProducts } from "@/lib/product-fetcher";

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { categories = ["all"], maxPerCategory = 8 } = await request.json().catch(() => ({}));

    const result = await fetchAndSaveProducts(
      Array.isArray(categories) ? categories : ["all"],
      maxPerCategory
    );

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
