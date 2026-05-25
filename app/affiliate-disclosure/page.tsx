import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Our affiliate disclosure policy for Amazon Associates links.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-4xl text-text-dark font-semibold mb-6">
            Affiliate Disclosure
          </h1>
          <div className="prose prose-sm max-w-none text-text-body space-y-4">
            <p className="text-lg leading-relaxed text-text-body">
              Indoor Garden is a participant in the Amazon Services LLC Associates
              Program, an affiliate advertising program designed to provide a means
              for sites to earn advertising fees by advertising and linking to
              Amazon.com.
            </p>
            <p className="leading-relaxed">
              When you click on links to Amazon products on our website and make a
              purchase, we may earn a small commission at no additional cost to you.
              This helps us maintain the website, create content, and continue
              providing free plant care resources to our community.
            </p>
            <p className="leading-relaxed">
              We only recommend products that we genuinely believe will benefit our
              readers. Our editorial decisions are independent of our affiliate
              relationships — we do not accept payment for positive reviews.
            </p>
            <p className="leading-relaxed">
              Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
              affiliates.
            </p>
            <p className="text-sm text-text-muted">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
