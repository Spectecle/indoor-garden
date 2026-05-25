import { prisma } from "@/lib/prisma";
import AnalyticsClient from "@/components/admin/AnalyticsClient";
import { subDays, format, startOfDay } from "date-fns";

export default async function AnalyticsPage() {
  const now = new Date();
  const thirtyDaysAgo = subDays(now, 30);

  const [pageViewsRaw, clicksRaw, quizRaw, subscribers] = await Promise.all([
    prisma.pageView.groupBy({
      by: ["createdAt"],
      _count: true,
      where: { createdAt: { gte: thirtyDaysAgo } },
    }),
    prisma.affiliateClick.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      include: { product: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.quizCompletion.groupBy({
      by: ["resultSlug"],
      _count: { resultSlug: true },
      where: { createdAt: { gte: thirtyDaysAgo } },
      orderBy: { _count: { resultSlug: "desc" } },
      take: 8,
    }),
    prisma.newsletterSubscriber.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
  ]);

  // Build daily chart (30 days)
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = subDays(now, 29 - i);
    return format(d, "MMM d");
  });
  const pvByDay: Record<string, number> = {};
  for (const pv of pageViewsRaw) {
    const key = format(new Date(pv.createdAt), "MMM d");
    pvByDay[key] = (pvByDay[key] || 0) + pv._count;
  }
  const chartData = days.map((day) => ({ day, views: pvByDay[day] || 0 }));

  // Clicks by day
  const clicksByDay: Record<string, number> = {};
  for (const c of clicksRaw) {
    const key = format(new Date(c.createdAt), "MMM d");
    clicksByDay[key] = (clicksByDay[key] || 0) + 1;
  }
  const clicksChart = days.map((day) => ({ day, clicks: clicksByDay[day] || 0 }));

  // Subscribers by day
  const subByDay: Record<string, number> = {};
  for (const s of subscribers) {
    if (new Date(s.createdAt) >= thirtyDaysAgo) {
      const key = format(new Date(s.createdAt), "MMM d");
      subByDay[key] = (subByDay[key] || 0) + 1;
    }
  }
  const subsChart = days.map((day) => ({ day, subs: subByDay[day] || 0 }));

  return (
    <AnalyticsClient
      chartData={chartData}
      clicksChart={clicksChart}
      subsChart={subsChart}
      quizResults={quizRaw.map((r) => ({ slug: r.resultSlug, count: r._count.resultSlug }))}
      recentClicks={clicksRaw.slice(0, 20).map((c) => ({
        productName: c.product.name,
        createdAt: c.createdAt.toISOString(),
      }))}
    />
  );
}
