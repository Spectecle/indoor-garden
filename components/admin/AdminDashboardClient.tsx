"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  Eye,
  MousePointerClick,
  Mail,
  Brain,
  Leaf,
  ShoppingBag,
  FileText,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface DashboardData {
  stats: {
    pageViews: number;
    pageViewsYesterday: number;
    affiliateClicks: number;
    affiliateClicksYesterday: number;
    subscribers: number;
    subscribersThisWeek: number;
    quizCompletions: number;
    totalPlants: number;
    totalProducts: number;
    totalPosts: number;
  };
  chartData: { day: string; views: number }[];
  topPages: { path: string; views: number }[];
  recentClicks: { productName: string; productSlug: string; createdAt: string }[];
  topProducts: { name: string; clicks: number }[];
}

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  trend,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  trend?: "up" | "down" | "neutral";
}) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-[#4a5e4a]";
  return (
    <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="w-9 h-9 bg-[#1a2e1a] border border-[#2a3e2a] rounded-xl flex items-center justify-center">
          <Icon size={15} className="text-[#7AA95C]" />
        </div>
        {trend && <TrendIcon size={14} className={trendColor} />}
      </div>
      <p className="text-2xl font-bold text-white mb-0.5">{value.toLocaleString()}</p>
      <p className="text-[#4a5e4a] text-xs">{label}</p>
      {sub && <p className="text-[#3a4e3a] text-[11px] mt-0.5">{sub}</p>}
    </div>
  );
}

export default function AdminDashboardClient({ data }: { data: DashboardData }) {
  const { stats, chartData, topPages, recentClicks, topProducts } = data;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">Last 30 days overview</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Page views (30d)"
          value={stats.pageViews}
          sub={`${stats.pageViewsYesterday} yesterday`}
          icon={Eye}
          trend={stats.pageViewsYesterday > 10 ? "up" : "neutral"}
        />
        <StatCard
          label="Affiliate clicks (30d)"
          value={stats.affiliateClicks}
          sub={`${stats.affiliateClicksYesterday} yesterday`}
          icon={MousePointerClick}
          trend={stats.affiliateClicks > 0 ? "up" : "neutral"}
        />
        <StatCard
          label="Email subscribers"
          value={stats.subscribers}
          sub={`+${stats.subscribersThisWeek} this week`}
          icon={Mail}
          trend={stats.subscribersThisWeek > 0 ? "up" : "neutral"}
        />
        <StatCard
          label="Quiz completions (30d)"
          value={stats.quizCompletions}
          icon={Brain}
          trend="neutral"
        />
      </div>

      {/* Content counts */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Plants in encyclopedia" value={stats.totalPlants} icon={Leaf} />
        <StatCard label="Products in shop" value={stats.totalProducts} icon={ShoppingBag} />
        <StatCard label="Blog posts" value={stats.totalPosts} icon={FileText} />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {/* Page views chart */}
        <div className="lg:col-span-2 bg-[#0d120d] border border-[#1a221a] rounded-2xl p-5">
          <h2 className="text-white font-semibold text-sm mb-4">Page views — last 14 days</h2>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7AA95C" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#7AA95C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a221a" />
              <XAxis dataKey="day" tick={{ fill: "#4a5e4a", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#4a5e4a", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#111611", border: "1px solid #1a221a", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#b5c9a5" }}
                itemStyle={{ color: "#7AA95C" }}
              />
              <Area type="monotone" dataKey="views" stroke="#7AA95C" strokeWidth={2} fill="url(#viewsGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top clicked products */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-5">
          <h2 className="text-white font-semibold text-sm mb-4">Top affiliate products (30d)</h2>
          {topProducts.length === 0 ? (
            <div className="h-[180px] flex items-center justify-center text-[#3a4e3a] text-sm">
              No clicks yet
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={topProducts} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1a221a" horizontal={false} />
                <XAxis type="number" tick={{ fill: "#4a5e4a", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fill: "#4a5e4a", fontSize: 10 }} axisLine={false} tickLine={false} width={80} />
                <Tooltip
                  contentStyle={{ background: "#111611", border: "1px solid #1a221a", borderRadius: 8, fontSize: 12 }}
                  itemStyle={{ color: "#7AA95C" }}
                />
                <Bar dataKey="clicks" fill="#2C5F2E" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top pages */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-5">
          <h2 className="text-white font-semibold text-sm mb-4">Top pages (30d)</h2>
          {topPages.length === 0 ? (
            <p className="text-[#3a4e3a] text-sm text-center py-8">No page views tracked yet</p>
          ) : (
            <div className="space-y-2">
              {topPages.map((page, i) => (
                <div key={page.path} className="flex items-center gap-3 py-2 border-b border-[#141c14] last:border-0">
                  <span className="text-[#2a3e2a] text-xs font-mono w-4">{i + 1}</span>
                  <span className="flex-1 text-[#7a8e7a] text-xs font-mono truncate">{page.path}</span>
                  <span className="text-[#b5c9a5] text-xs font-semibold">{page.views}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent affiliate clicks */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-5">
          <h2 className="text-white font-semibold text-sm mb-4">Recent affiliate clicks</h2>
          {recentClicks.length === 0 ? (
            <p className="text-[#3a4e3a] text-sm text-center py-8">No clicks tracked yet</p>
          ) : (
            <div className="space-y-2">
              {recentClicks.map((click, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-[#141c14] last:border-0">
                  <div className="w-6 h-6 bg-[#1a2e1a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MousePointerClick size={10} className="text-[#7AA95C]" />
                  </div>
                  <span className="flex-1 text-[#7a8e7a] text-xs truncate">{click.productName}</span>
                  <span className="text-[#3a4e3a] text-[11px]">
                    {formatDistanceToNow(new Date(click.createdAt), { addSuffix: true })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
