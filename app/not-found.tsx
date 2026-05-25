import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6">🌿</div>
          <h1 className="font-display text-5xl text-text-dark font-semibold mb-3">
            404
          </h1>
          <h2 className="font-display text-2xl text-text-body mb-4">
            This page got lost in the garden
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back to greener pastures.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest text-white hover:bg-forest-dark rounded-full font-semibold text-sm transition-all group"
            >
              <Leaf size={16} />
              Back to Home
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/encyclopedia"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-cream-border text-text-body hover:border-forest hover:text-forest rounded-full font-semibold text-sm transition-all"
            >
              Browse Plants
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
