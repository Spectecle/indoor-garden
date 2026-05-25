"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import IndoorGardenLogo from "@/components/IndoorGardenLogo";

const navLinks = [
  { label: "Encyclopedia", href: "/encyclopedia" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Plant Quiz", href: "/quiz" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      transparent
        ? "bg-transparent"
        : "bg-cream/95 backdrop-blur-md border-b border-cream-border"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          <IndoorGardenLogo size="sm" variant={transparent ? "white" : "dark"} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                  transparent
                    ? "text-white/75 hover:text-white hover:bg-white/10"
                    : pathname.startsWith(link.href)
                      ? "text-forest bg-sage-pale"
                      : "text-text-muted hover:text-text-dark hover:bg-cream-dark"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              href="/quiz"
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]",
                transparent
                  ? "bg-white text-forest hover:bg-white/90"
                  : "bg-forest text-white hover:bg-forest-dark"
              )}
            >
              Find my plant
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                transparent ? "text-white hover:bg-white/10" : "text-text-muted hover:bg-cream-dark"
              )}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-cream-border">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-text-body hover:bg-cream-dark hover:text-forest transition-colors"
              >
                {link.label}
                <ChevronRight size={14} className="text-text-muted" />
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/quiz"
                className="block w-full text-center py-3 bg-forest text-white rounded-xl text-sm font-semibold"
              >
                Find my plant →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
