"use client";

import { ShoppingBag, ExternalLink } from "lucide-react";

interface Props {
  href: string;
  productId: string;
  label?: string;
  className?: string;
}

export default function AffiliateButton({ href, productId, label = "Buy on Amazon", className }: Props) {
  function handleClick() {
    // Fire-and-forget click tracking
    fetch("/api/track/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    }).catch(() => {});
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={
        className ??
        "flex items-center gap-1.5 px-4 py-2 bg-forest text-white hover:bg-forest-dark rounded-xl text-xs font-semibold transition-colors group/btn"
      }
    >
      <ShoppingBag size={13} />
      {label}
      <ExternalLink size={11} className="opacity-70 group-hover/btn:opacity-100" />
    </a>
  );
}
