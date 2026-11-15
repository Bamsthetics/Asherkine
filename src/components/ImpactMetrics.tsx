import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'motion/react';
import { TrendingUp, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

interface CounterProps {
  key?: React.Key;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function Counter({ value, label, suffix = '', prefix = '' }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
    duration: 2500
  });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div className="relative group p-8 lg:p-10 bg-zinc-950/70 border border-emerald-950/60 hover:border-emerald-600/60 transition-all duration-300">
      {/* Corner indicator */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-600/40 group-hover:bg-[#E6FF00] transition-colors" />
      
      {/* Subtle green hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2 relative z-10 flex items-center">
        {prefix && <span className="text-[#E6FF00] mr-0.5">{prefix}</span>}
        {displayValue.toLocaleString()}
        <span className="text-[#E6FF00] ml-1">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm font-mono text-emerald-400/90 uppercase tracking-widest relative z-10">
        {label}
      </div>
    </div>
  );
}

export function ImpactMetrics() {
  const stats = [
    { value: 150, prefix: '₦', suffix: 'M+', label: 'Cash & Aid Distributed' },
    { value: 250, suffix: 'K+', label: 'Meals Provided' },
    { value: 500, suffix: '+', label: 'Vendors & Businesses Funded' },
    { value: 18, suffix: 'M+', label: 'Lives Reached & Inspired' },
  ];

  return (
    <section id="impact" className="py-24 sm:py-32 relative bg-zinc-950 overflow-hidden border-y border-emerald-950/40">
      {/* Deep green gradient atmospheric layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,78,59,0.3),rgba(4,28,18,0.15)_50%,transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,78,59,0.25),rgba(4,24,15,0.1)_45%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-emerald-950/50 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2 block">
              Audited street impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              The real <span className="text-emerald-400">numbers</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
            Every naira, food basket, and surprise grant goes directly to real people in open markets, bus stations, and vulnerable neighborhoods.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <Counter
              key={idx}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Impact Pillars Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-emerald-950/40">
          <div className="flex items-start gap-4 p-4 rounded-none bg-emerald-950/20 border border-emerald-900/30">
            <div className="p-2.5 bg-emerald-900/50 text-[#E6FF00]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Direct to Hands</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Zero administrative middlemen. Asherkine personally hands over support directly on camera.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-none bg-emerald-950/20 border border-emerald-900/30">
            <div className="p-2.5 bg-emerald-900/50 text-[#E6FF00]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Micro-Enterprise Growth</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Empowering market traders, street hawkers, and artisans with capital to expand.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-none bg-emerald-950/20 border border-emerald-900/30">
            <div className="p-2.5 bg-emerald-900/50 text-[#E6FF00]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Authentic Dignity</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">Preserving the respect and agency of every recipient while igniting continental pride.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
