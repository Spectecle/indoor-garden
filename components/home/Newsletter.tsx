"use client";

import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 bg-sage-pale rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={24} className="text-forest" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-text-dark font-semibold">
            Thursday Plant Notes
          </h2>
          <p className="mt-4 text-text-body leading-relaxed">
            Every Thursday, we send one beautifully written email with a plant profile,
            a seasonal care tip, and occasional product recommendations. No spam —
            just plants.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-3 p-5 bg-sage-pale rounded-2xl">
              <CheckCircle size={24} className="text-forest" />
              <div>
                <p className="font-semibold text-text-dark">You're in! 🌿</p>
                <p className="text-sm text-text-muted">First newsletter arrives this Thursday.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 bg-white border border-cream-border rounded-2xl text-text-dark placeholder-text-muted text-sm focus:outline-none focus:border-sage transition-all shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-forest text-white hover:bg-forest-dark rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-forest/20"
              >
                Subscribe
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-text-muted">
            Unsubscribe any time. We never share your email.
          </p>
        </div>
      </div>
    </section>
  );
}
