import { NextRequest, NextResponse } from "next/server";
import { fetchAndSaveProducts } from "@/lib/product-fetcher";

/**
 * Daily product fetch cron endpoint.
 *
 * SETUP OPTIONS:
 *
 * Option A — Vercel Cron (free on Vercel):
 *   Add to vercel.json:
 *   {
 *     "crons": [{ "path": "/api/cron/fetch-products", "schedule": "0 2 * * *" }]
 *   }
 *   Vercel calls this at 2am UTC daily with Authorization: Bearer $CRON_SECRET
 *
 * Option B — Any external cron (cron-job.org, EasyCron, GitHub Actions):
 *   Set up a daily HTTP POST to:
 *   https://your-domain.com/api/cron/fetch-products
 *   with header: Authorization: Bearer your-cron-secret
 *
 * Option C — Local cron (development / self-hosted):
 *   Add to your system crontab:
 *   0 2 * * * curl -X POST http://localhost:3001/api/cron/fetch-products \
 *     -H "Authorization: Bearer your-cron-secret"
 *
 * Add CRON_SECRET to .env to secure this endpoint.
 */
export async function GET(request: NextRequest) {
  return handleFetch(request);
}

export async function POST(request: NextRequest) {
  return handleFetch(request);
}

async function handleFetch(request: NextRequest) {
  // Verify cron secret
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");
    if (token !== cronSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    console.log("[cron] Starting daily product fetch...");
    const result = await fetchAndSaveProducts(["all"], 6);
    console.log(`[cron] Done: ${result.added} added, ${result.skipped} skipped, ${result.errors.length} errors`);
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[cron] Product fetch failed:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
