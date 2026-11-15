import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Megaphone, Coins, GraduationCap, Stethoscope, Video, ArrowUpRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#E6FF00]" />,
      number: '01',
      title: 'Street Giveaways & Supermarket Sweeps',
      desc: 'Rapid surprise raids in open-air markets and supermarkets where entire shopping trolleys and market inventory are purchased on the spot for hardworking citizens.',
      deliverables: ['100% on-camera transparency', 'Immediate relief', 'High emotional resonance'],
    },
    {
      icon: <Megaphone className="w-6 h-6 text-[#E6FF00]" />,
      number: '02',
      title: 'Brand-Sponsored Cause Marketing',
      desc: 'Partnering with forward-thinking enterprises to deploy marketing and CSR funds into authentic, positive cultural moments that generate millions of organic impressions.',
      deliverables: ['Custom brand narrative', 'Co-branded street activation', 'Multi-platform social distribution'],
    },
    {
      icon: <Coins className="w-6 h-6 text-[#E6FF00]" />,
      number: '03',
      title: 'Micro-Enterprise Seed Grants',
      desc: 'Funding street hawkers, roadside carpenters, cobblers, and hair stylists with capital grants and machinery to scale their everyday trades into sustainable family income.',
      deliverables: ['New commercial tools', 'Rent subsidies', 'Direct working capital'],
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#E6FF00]" />,
      number: '04',
      title: 'Tuition Rescue & Trade Apprenticeships',
      desc: 'Clearing accumulated school fees for impoverished students and enrolling ambitious youth into technical guilds and digital vocational apprenticeships.',
      deliverables: ['Direct school receipts', 'Full semester clearance', 'Vocational kit provision'],
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-[#E6FF00]" />,
      number: '05',
      title: 'Emergency Medical Bailouts',
      desc: 'Visiting public general hospital wards to settle urgent bills for detained mothers, newborn care, and emergency surgical interventions.',
      deliverables: ['Direct hospital payment', 'Immediate patient discharge', 'Follow-up medication grant'],
    },
    {
      icon: <Video className="w-6 h-6 text-[#E6FF00]" />,
      number: '06',
      title: 'Cinematic Impact Documentaries',
      desc: 'Bespoke high-definition cinematography and authentic African storytelling documenting the journey of everyday resilience, hope, and human triumph.',
      deliverables: ['4K multi-camera master', 'Vertical viral cuts', 'Raw archive footage'],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden border-b border-emerald-950/40">
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(6,78,59,0.3),rgba(4,24,15,0.1)_50%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-emerald-950/50 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2 block">
              What we deliver
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Our core <span className="text-emerald-400">services</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
            Bridging raw street reality with corporate resources to generate measurable change, unshakeable trust, and joyful viral storytelling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group p-8 bg-zinc-900/50 border border-emerald-950/70 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-emerald-950/90 border border-emerald-800/40 flex items-center justify-center group-hover:bg-[#E6FF00] group-hover:text-zinc-950 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                <div className="space-y-1.5 mb-6 pt-4 border-t border-emerald-950/40">
                  {item.deliverables.map((d, i) => (
                    <div key={i} className="text-[11px] font-mono text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#E6FF00] rounded-full inline-block" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#partner"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 group-hover:text-[#E6FF00] transition-colors"
                >
                  <span>Request activation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
