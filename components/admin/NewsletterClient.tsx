"use client";

import { useState } from "react";
import { Mail, Users, TrendingUp, Search, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface Subscriber {
  id: string;
  email: string;
  source: string;
  active: boolean;
  createdAt: string;
}

interface Stats {
  total: number;
  active: number;
  thisMonth: number;
}

export default function NewsletterClient({
  subscribers: initial,
  stats,
}: {
  subscribers: Subscriber[];
  stats: Stats;
}) {
  const [subscribers] = useState(initial);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const filtered = subscribers.filter((s) => {
    const matchSearch = s.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "all" || (filter === "active" ? s.active : !s.active);
    return matchSearch && matchFilter;
  });

  function exportCSV() {
    const rows = [["email", "source", "status", "joined"], ...filtered.map((s) => [s.email, s.source, s.active ? "active" : "inactive", s.createdAt])];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Newsletter</h1>
          <p className="text-[#4a5e4a] text-sm mt-1">Email subscriber list</p>
        </div>
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 bg-[#1a2e1a] hover:bg-[#2a3e2a] border border-[#2a3e2a] text-[#7AA95C] text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <Download size={13} />
          Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total subscribers", value: stats.total, icon: Users },
          { label: "Active", value: stats.active, icon: Mail },
          { label: "This month", value: stats.thisMonth, icon: TrendingUp },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-5">
            <div className="w-8 h-8 bg-[#1a2e1a] border border-[#2a3e2a] rounded-xl flex items-center justify-center mb-3">
              <Icon size={14} className="text-[#7AA95C]" />
            </div>
            <p className="text-2xl font-bold text-white">{value.toLocaleString()}</p>
            <p className="text-[#4a5e4a] text-xs mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Filter + search */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3a4e3a]" />
          <input
            type="text"
            placeholder="Search emails..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0d120d] border border-[#1a221a] rounded-xl pl-9 pr-4 py-2.5 text-white text-sm placeholder-[#3a4e3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
          />
        </div>
        <div className="flex items-center bg-[#0d120d] border border-[#1a221a] rounded-xl p-1 gap-0.5">
          {(["all", "active", "inactive"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors",
                filter === f
                  ? "bg-[#1a2e1a] text-[#7AA95C]"
                  : "text-[#4a5e4a] hover:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[3fr_1fr_1fr_100px] px-5 py-3 border-b border-[#1a221a]">
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Email</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Source</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Joined</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-center">Status</span>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#3a4e3a]">
            <Mail size={28} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No subscribers found</p>
          </div>
        )}

        {filtered.map((sub) => (
          <div
            key={sub.id}
            className="grid grid-cols-[3fr_1fr_1fr_100px] px-5 py-3 border-b border-[#141c14] last:border-0 hover:bg-[#0f150f] transition-colors items-center"
          >
            <span className="text-white text-sm font-mono">{sub.email}</span>
            <span className="text-[#4a5e4a] text-xs capitalize">{sub.source}</span>
            <span className="text-[#4a5e4a] text-xs">{sub.createdAt}</span>
            <div className="flex justify-center">
              <span
                className={cn(
                  "text-[11px] font-semibold px-2 py-1 rounded-lg",
                  sub.active
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "bg-[#1a1a1a] text-[#4a4a4a]"
                )}
              >
                {sub.active ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#2a3e2a] text-xs mt-4">
        Showing {filtered.length} of {subscribers.length} subscribers
      </p>
    </div>
  );
}
