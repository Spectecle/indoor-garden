"use client";

import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatDistanceToNow } from "date-fns";
import { MousePointerClick, Brain, Mail } from "lucide-react";

interface Props {
  chartData: { day: string; views: number }[];
  clicksChart: { day: string; clicks: number }[];
  subsChart: { day: string; subs: number }[];
  quizResults: { slug: string; count: number }[];
  recentClicks: { productName: string; createdAt: string }[];
}

const tooltipStyle = {
  contentStyle: { background: "#111611", border: "1px solid #1a221a", borderRadius: 8, fontSize: 12 },
  labelStyle: { color: "#b5c9a5" },
};

export default function AnalyticsClient({ chartData, clicksChart, subsChart, quizResults, recentClicks }: Props) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Analytics</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">Last 30 days</p>
      </div>

      {/* Page views chart */}
      <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6 mb-6">
        <h2 className="text-white font-semibold text-sm mb-5">Page views — 30 days</h2>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="pvGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7AA95C" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7AA95C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a221a" />
            <XAxis dataKey="day" tick={{ fill: "#4a5e4a", fontSize: 10 }} axisLine={false} tickLine={false} interval={4} />
            <YAxis tick={{ fill: "#4a5e4a", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip {...tooltipStyle} itemStyle={{ color: "#7AA95C" }} />
            <Area type="monotone" dataKey="views" stroke="#7AA95C" strokeWidth={2} fill="url(#pvGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Two charts row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Affiliate clicks */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <MousePointerClick size={13} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Affiliate clicks — 30 days</h2>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={clicksChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a221a" />
              <XAxis dataKey="day" tick={{ fill: "#4a5e4a", fontSize: 10 }} axisLine={false} tickLine={false} interval={6} />
              <YAxis tick={{ fill: "#4a5e4a", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip {...tooltipStyle} itemStyle={{ color: "#7AA95C" }} />
              <Bar dataKey="clicks" fill="#2C5F2E" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Newsletter signups */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Mail size={13} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Newsletter signups — 30 days</h2>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={subsChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a221a" />
              <XAxis dataKey="day" tick={{ fill: "#4a5e4a", fontSize: 10 }} axisLine={false} tickLine={false} interval={6} />
              <YAxis tick={{ fill: "#4a5e4a", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip {...tooltipStyle} itemStyle={{ color: "#7AA95C" }} />
              <Bar dataKey="subs" fill="#7AA95C" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quiz results + recent clicks */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Brain size={13} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Top quiz results (30d)</h2>
          </div>
          {quizResults.length === 0 ? (
            <p className="text-[#3a4e3a] text-sm text-center py-8">No completions yet</p>
          ) : (
            <div className="space-y-2">
              {quizResults.map((r, i) => (
                <div key={r.slug} className="flex items-center gap-3 py-2 border-b border-[#141c14] last:border-0">
                  <span className="text-[#2a3e2a] text-xs font-mono w-4">{i + 1}</span>
                  <span className="flex-1 text-[#7a8e7a] text-xs font-mono truncate">{r.slug}</span>
                  <span className="text-[#b5c9a5] text-xs font-semibold">{r.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <MousePointerClick size={13} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Recent affiliate clicks</h2>
          </div>
          {recentClicks.length === 0 ? (
            <p className="text-[#3a4e3a] text-sm text-center py-8">No clicks yet</p>
          ) : (
            <div className="space-y-2">
              {recentClicks.map((c, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-[#141c14] last:border-0">
                  <span className="flex-1 text-[#7a8e7a] text-xs truncate">{c.productName}</span>
                  <span className="text-[#3a4e3a] text-[11px]">
                    {formatDistanceToNow(new Date(c.createdAt), { addSuffix: true })}
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
