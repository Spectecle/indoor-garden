import type { Metadata } from "next";
import "./globals.css";
import PageTracker from "@/components/PageTracker";

export const metadata: Metadata = {
  title: {
    default: "Indoor Garden — Grow Your World Indoors",
    template: "%s | Indoor Garden",
  },
  description:
    "Your complete guide to indoor plants. Browse our plant encyclopedia, shop curated products, and discover expert care guides to transform your home into a living garden.",
  keywords: ["indoor plants", "houseplants", "plant care", "indoor gardening", "plant encyclopedia"],
  openGraph: {
    title: "Indoor Garden — Grow Your World Indoors",
    description: "Your complete guide to indoor plants.",
    siteName: "Indoor Garden",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-text-dark">
        <PageTracker />
        {children}
      </body>
    </html>
  );
}
