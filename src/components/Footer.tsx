import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, ArrowRight, Heart, Check } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-emerald-950/50 pt-20 pb-12 px-6 lg:px-12 overflow-hidden">
      {/* Deep green ambient gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(6,78,59,0.35),rgba(4,24,15,0.15)_50%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Newsletter / Community Banner */}
        <div className="mb-20 p-8 sm:p-12 bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-zinc-950 border border-emerald-900/40 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2 block">
              Join the Street Radar
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              Never Miss A <span className="text-[#E6FF00]">Drop or Surprise</span>
            </h3>
            <p className="text-zinc-400 text-sm max-w-md">
              Get notified when Asherkine lands in your city, nominates community heroes, or launches brand grants.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-900/60 text-[#E6FF00] px-4 py-3 border border-[#E6FF00] text-xs font-mono uppercase tracking-wider w-full">
                <Check className="w-4 h-4" />
                <span>You're in the Wagwan Gang Radar!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-950 border border-emerald-900/60 focus:border-[#E6FF00] text-sm text-white px-4 py-3 outline-none flex-1 placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  className="bg-[#E6FF00] hover:bg-white text-zinc-950 px-6 py-3 font-bold uppercase tracking-widest text-xs transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Join
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-emerald-950/40">
          
          <div className="md:col-span-5">
            <div className="text-3xl font-black tracking-tighter uppercase text-white mb-4">
              ASHER<span className="text-[#E6FF00]">KINE</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              Official humanitarian & creative platform of Asherkine. Spreading smiles everyday across Nigeria, Ghana, Kenya, and throughout Africa.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/asherkine"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-zinc-900/80 hover:bg-[#E6FF00] text-zinc-400 hover:text-zinc-950 border border-emerald-950 hover:border-[#E6FF00] flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-10 h-10 bg-zinc-900/80 hover:bg-[#E6FF00] text-zinc-400 hover:text-zinc-950 border border-emerald-950 hover:border-[#E6FF00] flex items-center justify-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 bg-zinc-900/80 hover:bg-[#E6FF00] text-zinc-400 hover:text-zinc-950 border border-emerald-950 hover:border-[#E6FF00] flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-4">
                Initiatives
              </h4>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li><a href="#initiatives" className="hover:text-emerald-300 transition-colors">Market Sweeps</a></li>
                <li><a href="#initiatives" className="hover:text-emerald-300 transition-colors">School Fees Drive</a></li>
                <li><a href="#initiatives" className="hover:text-emerald-300 transition-colors">Medical Bailouts</a></li>
                <li><a href="#initiatives" className="hover:text-emerald-300 transition-colors">Vendor Micro-Grants</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li><a href="#story" className="hover:text-emerald-300 transition-colors">Our Story</a></li>
                <li><a href="#impact" className="hover:text-emerald-300 transition-colors">Impact Numbers</a></li>
                <li><a href="#media" className="hover:text-emerald-300 transition-colors">Video Vault</a></li>
                <li><a href="#partner" className="hover:text-emerald-300 transition-colors">Partner With Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-4">
                Direct Contact
              </h4>
              <div className="text-sm text-zinc-400 space-y-2">
                <p className="text-white font-bold">partner@asherkine.org</p>
                <p className="text-xs text-zinc-500">Lagos &bull; Abuja &bull; Accra &bull; London</p>
                <div className="pt-2">
                  <a
                    href="#partner"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E6FF00] hover:underline uppercase"
                  >
                    Send Proposal <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Wagwan Gang &bull; Asherkine</span>
            <span className="text-zinc-700">|</span>
            <span className="flex items-center gap-1 text-zinc-400">
              Spreading Smiles Everyday <Heart className="w-3 h-3 text-red-500 fill-current" />
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Community Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Brand Assets</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
