import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Globe, Users, ShoppingBag, GraduationCap, Stethoscope, ArrowRight, CheckCircle2, Play, X, ExternalLink } from 'lucide-react';

export function Mission() {
  const [activeVideo, setActiveVideo] = useState<{ title: string; desc: string; url: string; views: string } | null>(null);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerForm, setPartnerForm] = useState({ name: '', org: '', email: '', message: '' });

  const initiatives = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-emerald-400" />,
      tag: 'DIRECT COMMERCE',
      title: 'Market Sweeps & Vendor Grants',
      description: 'Buying out entire stalls of elderly roadside market mamas and street hawkers, injecting capital straight into family livelihoods.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      tag: 'YOUTH FUTURES',
      title: 'Tuition & Trade Apprenticeships',
      description: 'Clearing school debt and funding vocational training for brilliant young youths who were forced out of classrooms by poverty.'
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-emerald-400" />,
      tag: 'HEALTH FIRST',
      title: 'Emergency Medical Clearances',
      description: 'Settling urgent hospital bills for stranded mothers and emergency surgery patients in public general hospitals.'
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      tag: 'MOVEMENT',
      title: 'Continental Ripple Effect',
      description: 'Empowering local community chapters to replicate kind surprises in their own cities, turning generosity into a culture.'
    }
  ];

  const featuredStories = [
    {
      title: 'Lagos Supermarket Clearance Spree',
      category: 'Surprise Giveaway',
      desc: 'Walking into a local neighborhood supermarket with 10 random mothers and paying for every single grocery cart in full.',
      views: '4.2M views',
      duration: '06:12',
      thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      url: 'https://www.youtube.com'
    },
    {
      title: 'Elderly Cobbler Gets A Life Upgrade',
      category: 'Micro-Enterprise',
      desc: 'Meeting Pa Gabriel who worked at the same junction for 34 years with broken tools. We gifted him modern machinery and an apartment rent grant.',
      views: '6.8M views',
      duration: '08:45',
      thumbnail: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
      url: 'https://www.youtube.com'
    },
    {
      title: 'Street Hawker University Scholarship',
      category: 'Education Grant',
      desc: 'Surprising a young girl selling plantain chips to sponsor her remaining 3 years of electrical engineering degree.',
      views: '5.1M views',
      duration: '05:30',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      url: 'https://www.youtube.com'
    }
  ];

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
    setTimeout(() => {
      setPartnerSubmitted(false);
      setPartnerForm({ name: '', org: '', email: '', message: '' });
    }, 4500);
  };

  return (
    <>
      {/* 1. About / Story Section (Matching the editorial about section in reference) */}
      <section id="story" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden border-b border-emerald-950/40">
        {/* Deep green atmospheric ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_10%_30%,rgba(6,78,59,0.35),rgba(4,24,15,0.15)_50%,transparent_80%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo & Frame (Editorial style like reference) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] bg-zinc-900 border border-emerald-900/50 p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80"
                  alt="Street philanthropy impact"
                  className="w-full h-full object-cover grayscale-[25%] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-mono text-[#E6FF00] uppercase tracking-widest mb-1">
                    Authentic On-Ground Action
                  </div>
                  <div className="text-white text-lg font-bold leading-tight">
                    "When you bless people in secret, you heal their hearts. When you share it, you multiply the movement."
                  </div>
                </div>
              </div>
              {/* Subtle backplate offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-emerald-500/20 pointer-events-none -z-10" />
            </div>

            {/* Right Editorial Story / Manifesto */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E6FF00]" />
                About Asherkine Philanthropy
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-[1.05]">
                We’re turning everyday street encounters into <span className="text-emerald-400">radical moments</span> of grace.
              </h2>

              <p className="text-zinc-300 text-lg leading-relaxed mb-6 font-normal">
                Born out of a simple belief that ordinary people deserve unexpected joy, Asherkine roams African streets, open-air markets, and neglected communities to deliver immediate financial, educational, and medical breakthroughs.
              </p>

              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                What began as individual acts of generosity has grown into a continental phenomenon called the <strong className="text-white">Wagwan Gang</strong>—proving that authentic giving doesn't require bureaucratic red tape, just genuine love and swift execution.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-emerald-950/40 text-left">
                <div>
                  <div className="text-2xl font-black text-white font-mono">100%</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Direct To People</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-mono">0%</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Hidden Cut</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#E6FF00] font-mono">24/7</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">Movement Energy</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Initiatives Section */}
      <section id="initiatives" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
        {/* Deep green ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_90%_40%,rgba(6,78,59,0.3),rgba(4,24,15,0.1)_50%,transparent_80%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-emerald-950/40 pb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2 block">
                How we make change
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Core <span className="text-emerald-400">initiatives</span>
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
              Targeted programs crafted to meet immediate survival needs while planting seeds for multi-generational independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * index }}
                className="group relative bg-zinc-900/60 border border-emerald-950/60 hover:border-emerald-500/60 p-8 sm:p-10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-emerald-950/90 border border-emerald-800/40 flex items-center justify-center group-hover:bg-[#E6FF00] group-hover:text-zinc-950 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400/80 bg-emerald-950/40 px-2.5 py-1 border border-emerald-900/30">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E6FF00] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Media / Video Vault (Selected Stories) */}
      <section id="media" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden border-t border-emerald-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,78,59,0.35),rgba(4,25,16,0.15)_45%,transparent_75%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-emerald-950/40 pb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2 block">
                Unfiltered street footage
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Selected <span className="text-emerald-400">street stories</span>
              </h2>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E6FF00] hover:text-white transition-colors"
            >
              Watch Full YouTube Vault
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story, i) => (
              <div
                key={i}
                onClick={() => setActiveVideo(story)}
                className="group cursor-pointer bg-zinc-900/50 border border-emerald-950/60 hover:border-[#E6FF00] transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <img
                    src={story.thumbnail}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#E6FF00] text-zinc-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-zinc-950/80 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                    {story.duration}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                      <span>{story.category}</span>
                      <span className="text-zinc-500">{story.views}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#E6FF00] transition-colors mb-2">
                      {story.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {story.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-emerald-950/40 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white">
                    <span>Watch Story</span>
                    <ArrowRight className="w-4 h-4 text-[#E6FF00]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partner With Us / Brand Collabs */}
      <section id="partner" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden border-t border-emerald-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_100%,rgba(6,78,59,0.4),rgba(4,24,15,0.2)_40%,transparent_80%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-gradient-to-br from-emerald-950/60 via-zinc-950 to-zinc-900 border border-emerald-800/40 p-8 sm:p-14 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2 block">
                Brand collaborations & sponsorships
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Partner with <span className="text-[#E6FF00]">Wagwan Gang</span>
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                Are you a company, international foundation, or visionary brand looking to sponsor life-changing giveaways with genuine proof and authentic community celebration? Let's join forces.
              </p>
            </div>

            {partnerSubmitted ? (
              <div className="p-8 bg-emerald-950/80 border border-[#E6FF00] flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#E6FF00] shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white uppercase">Message Sent Successfully!</h4>
                  <p className="text-sm text-zinc-300">Asherkine’s direct partnership team will review your proposal and respond within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                    placeholder="e.g. Samuel Adekunle"
                    className="w-full bg-zinc-950 border border-emerald-900/60 focus:border-[#E6FF00] px-4 py-3 text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Brand / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerForm.org}
                    onChange={(e) => setPartnerForm({ ...partnerForm, org: e.target.value })}
                    placeholder="e.g. Flutterwave, MTN, Foundation"
                    className="w-full bg-zinc-950 border border-emerald-900/60 focus:border-[#E6FF00] px-4 py-3 text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    placeholder="contact@brand.com"
                    className="w-full bg-zinc-950 border border-emerald-900/60 focus:border-[#E6FF00] px-4 py-3 text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Partnership Concept / Budget Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    placeholder="Tell us what you'd like to fund (e.g. 500 Market Women Seed Fund, University Tuition drive, Medical clinic outreach)..."
                    className="w-full bg-zinc-950 border border-emerald-900/60 focus:border-[#E6FF00] px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#E6FF00] hover:bg-white text-zinc-950 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors cursor-pointer"
                  >
                    Send Partnership Proposal
                  </button>
                  <span className="text-xs font-mono text-zinc-500">
                    Direct inquiries: partner@asherkine.org
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div className="relative w-full max-w-3xl bg-zinc-900 border border-emerald-900 shadow-2xl p-6">
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full bg-black mb-6 relative flex items-center justify-center border border-zinc-800">
                <img
                  src={activeVideo.thumbnail || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-[#E6FF00] flex items-center justify-center text-zinc-950 mb-3 shadow-[0_0_30px_rgba(230,255,0,0.5)]">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-white">
                    Streaming Official Cut &bull; {activeVideo.views}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-black uppercase text-white mb-2">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                {activeVideo.desc}
              </p>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-widest"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
