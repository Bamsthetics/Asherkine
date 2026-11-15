import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, CheckCircle } from 'lucide-react';

export function FeaturedBrands() {
  const brands = [
    { name: 'Flutterwave', category: 'Fintech Sponsor', note: 'Funded 200 Market Women Accounts' },
    { name: 'MTN Pulse', category: 'Telecommunications', note: 'Data & Tech Apprentice Grants' },
    { name: 'PiggyVest', category: 'Savings & Investment', note: 'Seed Capital for Hawkers' },
    { name: 'Chipper Cash', category: 'Cross-Border Payments', note: 'Diaspora Aid Campaign' },
    { name: 'OPay Africa', category: 'Digital Banking', note: 'Street Merchant POS Drive' },
    { name: 'Indomie Relish', category: 'Consumer Goods', note: '50,000 School Lunch Boxes' },
  ];

  return (
    <section className="py-20 bg-zinc-950 relative border-b border-emerald-950/40 overflow-hidden">
      {/* Subtle deep green background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(6,78,59,0.25),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 text-[#E6FF00]" />
              Strategic brand partners
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Brands driving <span className="text-emerald-400">real action</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
            Collaborating with leading brands to turn marketing budgets and CSR funds into verifiable, emotionally unforgettable street impact.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-5 bg-zinc-900/40 hover:bg-emerald-950/40 border border-emerald-950/60 hover:border-emerald-600/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-zinc-500 group-hover:text-emerald-400 transition-colors uppercase tracking-wider mb-2">
                  {brand.category}
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white group-hover:text-[#E6FF00] transition-colors mb-3">
                  {brand.name}
                </h3>
              </div>
              <div className="pt-3 border-t border-emerald-950/40 text-[11px] text-zinc-400 flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-[#E6FF00] shrink-0" />
                <span className="line-clamp-2">{brand.note}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Metrics Trust Banner */}
        <div className="mt-8 p-4 bg-emerald-950/30 border border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2 text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-[#E6FF00]" />
            <span>100% Raw Video Audit for Every Sponsored Naira</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>₦180M+ Deployed</span>
            <span className="text-zinc-600">&bull;</span>
            <span>45M+ Combined Organic Views</span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-emerald-400 font-bold">Zero Overhead Leaks</span>
          </div>
        </div>

      </div>
    </section>
  );
}
