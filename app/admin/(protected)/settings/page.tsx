"use client";

import { useState } from "react";
import { Save, Eye, EyeOff, Shield, Tag, Globe } from "lucide-react";

export default function AdminSettingsPage() {
  const [affiliateTag, setAffiliateTag] = useState("indoorgarden-20");
  const [siteUrl, setSiteUrl] = useState("https://indoorgarden.com");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Settings</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">Site configuration and affiliate settings</p>
      </div>

      <div className="space-y-6">
        {/* Affiliate */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Tag size={14} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Amazon Affiliate</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">
                Affiliate tag
              </label>
              <input
                type="text"
                value={affiliateTag}
                onChange={(e) => setAffiliateTag(e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
              <p className="text-[#2a3e2a] text-xs mt-1.5">
                This tag is appended to all Amazon product URLs. Get yours at{" "}
                <span className="text-[#4a5e4a]">affiliate-program.amazon.com</span>
              </p>
            </div>
            <div className="bg-[#0a0f0a] border border-[#1a221a] rounded-xl p-4">
              <p className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider mb-2">Preview URL format</p>
              <p className="text-[#5a7a5a] text-xs font-mono break-all">
                https://www.amazon.com/dp/ASIN?tag=<span className="text-[#7AA95C]">{affiliateTag}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Site */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Globe size={14} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Site settings</h2>
          </div>
          <div>
            <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">
              Production URL
            </label>
            <input
              type="url"
              value={siteUrl}
              onChange={(e) => setSiteUrl(e.target.value)}
              className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-[#2C5F2E] transition-colors"
            />
          </div>
        </div>

        {/* Security */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Shield size={14} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Security</h2>
          </div>
          <p className="text-[#4a5e4a] text-sm">
            Admin password and JWT secret are managed in your{" "}
            <code className="text-[#7AA95C] bg-[#1a2e1a] px-1.5 py-0.5 rounded text-xs">.env</code> file:
          </p>
          <div className="mt-3 bg-[#0a0f0a] border border-[#1a221a] rounded-xl p-4 space-y-1">
            <p className="text-[#4a5e4a] text-xs font-mono">ADMIN_PASSWORD=&quot;your-password&quot;</p>
            <p className="text-[#4a5e4a] text-xs font-mono">JWT_SECRET=&quot;your-32-char-secret&quot;</p>
          </div>
          <p className="text-[#2a3e2a] text-xs mt-2">Restart the dev server after changing .env values.</p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-[#2C5F2E] hover:bg-[#3a7a3c] text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
        >
          <Save size={14} />
          {saved ? "Saved!" : "Save settings"}
        </button>
      </div>
    </div>
  );
}
