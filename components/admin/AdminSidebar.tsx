"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Leaf,
  LayoutDashboard,
  ShoppingBag,
  FileText,
  BarChart3,
  Mail,
  Settings,
  ExternalLink,
  LogOut,
  ChevronRight,
  Link2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Products", href: "/admin/products", icon: ShoppingBag },
  { label: "Plants", href: "/admin/plants", icon: Leaf },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Affiliate", href: "/admin/affiliate", icon: Link2 },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Newsletter", href: "/admin/newsletter", icon: Mail },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-[#0d120d] border-r border-[#1a221a] flex flex-col z-40">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-[#1a221a]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#2C5F2E] rounded-lg flex items-center justify-center flex-shrink-0">
            <Leaf size={14} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm leading-tight">Indoor Garden</p>
            <p className="text-[#4a5e4a] text-[11px] leading-tight">Admin Console</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const active = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                active
                  ? "bg-[#1a2e1a] text-[#7AA95C]"
                  : "text-[#5a6e5a] hover:text-[#b5c9a5] hover:bg-[#111611]"
              )}
            >
              <item.icon
                size={15}
                className={cn(active ? "text-[#7AA95C]" : "text-[#4a5e4a] group-hover:text-[#7AA95C]")}
              />
              <span className="flex-1">{item.label}</span>
              {active && <ChevronRight size={12} className="text-[#7AA95C]/50" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-[#1a221a] space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#4a5e4a] hover:text-[#b5c9a5] hover:bg-[#111611] transition-all group"
        >
          <ExternalLink size={15} className="group-hover:text-[#7AA95C]" />
          View site
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#4a5e4a] hover:text-red-400 hover:bg-red-400/5 transition-all group"
        >
          <LogOut size={15} className="group-hover:text-red-400" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
