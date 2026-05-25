export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";
import { subDays, format, startOfDay } from "date-fns";

async function getDashboardData() {
  const now = new Date();
  const thirtyDaysAgo = subDays(now, 30);
  const sevenDaysAgo = subDays(now, 7);
  const yesterday = subDays(now, 1);

  const [
    pageViews,
    pageViewsYesterday,
    affiliateClicks,
    affiliateClicksYesterday,
    subscribers,
    subscribersThisWeek,
    quizCompletions,
    totalPlants,
    totalProducts,
    totalPosts,
    recentPageViews,
    topPages,
    recentClicks,
    topProducts,
  ] = await Promise.all([
    prisma.pageView.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.pageView.count({ where: { createdAt: { gte: yesterday, lt: now } } }),
    prisma.affiliateClick.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.affiliateClick.count({ where: { createdAt: { gte: yesterday, lt: now } } }),
    prisma.newsletterSubscriber.count({ where: { active: true } }),
    prisma.newsletterSubscriber.count({ where: { createdAt: { gte: sevenDaysAgo }, active: true } }),
    prisma.quizCompletion.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.plant.count({ where: { published: true } }),
    prisma.product.count({ where: { published: true } }),
    prisma.blogPost.count({ where: { published: true } }),
    // Page views by day for last 14 days
    prisma.pageView.groupBy({
      by: ["createdAt"],
      _count: true,
      where: { createdAt: { gte: subDays(now, 14) } },
    }),
    // Top pages
    prisma.pageView.groupBy({
      by: ["path"],
      _count: { path: true },
      where: { createdAt: { gte: thirtyDaysAgo } },
      orderBy: { _count: { path: "desc" } },
      take: 8,
    }),
    // Recent affiliate clicks
    prisma.affiliateClick.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { product: { select: { name: true, slug: true } } },
    }),
    // Top clicked products
    prisma.affiliateClick.groupBy({
      by: ["productId"],
      _count: { productId: true },
      where: { createdAt: { gte: thirtyDaysAgo } },
      orderBy: { _count: { productId: "desc" } },
      take: 5,
    }),
  ]);

  // Build daily page views chart data for last 14 days
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = subDays(now, 13 - i);
    return format(d, "MMM d");
  });

  const pvByDay: Record<string, number> = {};
  for (const pv of recentPageViews) {
    const key = format(new Date(pv.createdAt), "MMM d");
    pvByDay[key] = (pvByDay[key] || 0) + pv._count;
  }

  const chartData = days.map((day) => ({ day, views: pvByDay[day] || 0 }));

  // Enrich top products with product info
  const productIds = topProducts.map((p) => p.productId);
  const productNames = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, name: true },
  });
  const productMap = Object.fromEntries(productNames.map((p) => [p.id, p.name]));
  const topProductsData = topProducts.map((p) => ({
    name: productMap[p.productId] ?? "Unknown",
    clicks: p._count.productId,
  }));

  return {
    stats: {
      pageViews,
      pageViewsYesterday,
      affiliateClicks,
      affiliateClicksYesterday,
      subscribers,
      subscribersThisWeek,
      quizCompletions,
      totalPlants,
      totalProducts,
      totalPosts,
    },
    chartData,
    topPages: topPages.map((p) => ({ path: p.path, views: p._count.path })),
    recentClicks: recentClicks.map((c) => ({
      productName: c.product.name,
      productSlug: c.product.slug,
      createdAt: c.createdAt.toISOString(),
    })),
    topProducts: topProductsData,
  };
}

export default async function AdminDashboardPage() {
  const data = await getDashboardData();
  return <AdminDashboardClient data={data} />;
}
