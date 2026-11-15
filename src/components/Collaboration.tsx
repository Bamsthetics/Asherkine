import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Target, Camera, TrendingUp, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export function Collaboration() {
  const steps = [
    {
      step: '01',
      title: 'Target Scope & Beneficiary Mapping',
      desc: 'We identify vetted open markets, trade communities, or pediatric hospitals that match your brand values, CSR mandate, or personal philanthropic mission.',
      badge: 'Discovery & Vetting',
    },
    {
      step: '02',
      title: 'Direct Handover & Live Production',
      desc: 'Asherkine personally visits the streets with our production crew. Funds, goods, and grants are disbursed directly to recipient hands with zero leaks.',
      badge: 'Transparent Execution',
    },
    {
      step: '03',
      title: 'Cinematic Amplification & Audit',
      desc: 'High-retention video stories are edited and published across millions of engaged followers, followed by full accounting receipts and community impact reports.',
      badge: 'Verified Impact',
    },
  ];

  return (
    <section id="collaboration" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden border-b border-emerald-950/40">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(6,78,59,0.35),rgba(4,24,15,0.15)_50%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Handshake className="w-3.5 h-3.5 text-[#E6FF00]" />
            Partnership framework
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            How we <span className="text-emerald-400">collaborate</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A battle-tested 3-stage process designed for corporate institutions, international foundations, and creator collectives seeking authentic street credibility and profound human results.
          </p>
        </div>

        {/* 3 Step Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-zinc-900/60 border border-emerald-950/70 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#E6FF00]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 bg-emerald-950/60 px-2.5 py-1 border border-emerald-900/40">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="w-full h-1 bg-zinc-950 group-hover:bg-[#E6FF00] transition-colors rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Call to Collaboration Banner */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-emerald-950/70 via-zinc-900 to-zinc-950 border border-emerald-900/50 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2 block">
              Direct access
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Ready to co-create a <span className="text-[#E6FF00]">movement?</span>
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl">
              Whether you want to sponsor 100 hospital discharges or buy out an entire night market in your brand’s name, we handle logistics, security, verification, and cinema-grade production.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href="#partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E6FF00] hover:bg-white text-zinc-950 font-black uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(230,255,0,0.4)] transition-all cursor-pointer"
            >
              <span>Submit Campaign Brief</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
