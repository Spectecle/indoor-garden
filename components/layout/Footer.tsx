import Link from "next/link";
import { Share2, Play, Mail, Leaf, ArrowRight } from "lucide-react";
import IndoorGardenLogo from "@/components/IndoorGardenLogo";

const footerLinks = {
  "Explore": [
    { label: "Plant Encyclopedia", href: "/encyclopedia" },
    { label: "Care Guides", href: "/blog?category=care-guides" },
    { label: "Plant Quiz", href: "/quiz" },
    { label: "All Articles", href: "/blog" },
  ],
  "Shop": [
    { label: "Planters & Pots", href: "/shop?category=planters" },
    { label: "Soil & Fertilizers", href: "/shop?category=soil" },
    { label: "Grow Lights", href: "/shop?category=lights" },
    { label: "Tools", href: "/shop?category=tools" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl text-white font-semibold">
                Weekly plant wisdom in your inbox
              </h3>
              <p className="text-white/60 mt-1 text-sm">
                Care guides, seasonal tips, and new plant profiles every Thursday.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-sage focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-sage hover:bg-sage-light transition-colors rounded-xl text-white font-medium text-sm flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <IndoorGardenLogo size="sm" variant="white" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Your complete guide to indoor plants. We help you choose, grow, and fall in love with the plants that transform your home into a living sanctuary.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Play size={16} />
              </a>
              <a
                href="mailto:hello@indoorgarden.com"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Indoor Garden. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center">
            <Leaf size={12} className="inline mr-1" />
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
