import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Instagram, Youtube, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Services', href: '#services', tag: '01' },
    { name: 'Collaboration', href: '#collaboration', tag: '02' },
    { name: 'Initiatives', href: '#initiatives', tag: '03' },
    { name: 'Impact Numbers', href: '#impact', tag: '04' },
    { name: 'Our Story', href: '#story', tag: '05' },
    { name: 'Video Vault', href: '#media', tag: '06' },
    { name: 'Partner With Us', href: '#partner', tag: '07' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center px-4 sm:px-6">
        <div
          className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between ${
            isScrolled
              ? 'mt-2 w-[92%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl h-14 sm:h-16 px-6 sm:px-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-950/85 via-zinc-950/85 to-emerald-950/85 backdrop-blur-xl border border-emerald-500/25 shadow-[0_12px_35px_rgba(0,0,0,0.7)]'
              : 'mt-0 w-full max-w-7xl h-20 px-2 sm:px-6 bg-transparent border-transparent'
          }`}
        >
          {/* Logo / Brand (Reduced size) */}
          <a
            href="#"
            className="group flex items-center gap-1 text-sm sm:text-base font-extrabold tracking-widest uppercase text-white hover:opacity-90 transition-opacity"
          >
            <span>ASHER</span>
            <span className="text-[#E6FF00] group-hover:text-emerald-400 transition-colors">KINE</span>
          </a>

          {/* Hamburger Trigger (No Get In Touch button, transparent background) */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="group flex flex-col justify-center items-end gap-1.5 w-10 h-10 p-1 bg-transparent hover:bg-transparent border-0 transition-all cursor-pointer"
            >
              <span className="w-6 h-0.5 bg-white group-hover:bg-[#E6FF00] transition-all duration-300"></span>
              <span className="w-4 group-hover:w-6 h-0.5 bg-[#E6FF00] transition-all duration-300"></span>
              <span className="w-5 group-hover:w-6 h-0.5 bg-white group-hover:bg-[#E6FF00] transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex flex-col overflow-y-auto"
          >
            {/* Ambient deep green gradient in drawer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,78,59,0.3),rgba(4,24,16,0.1)_60%,transparent)] pointer-events-none" />

            {/* Top Bar inside Menu */}
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative z-10">
              <span className="text-base sm:text-lg font-black tracking-widest uppercase text-white">
                ASHER<span className="text-[#E6FF00]">KINE</span>
              </span>

              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Navigation Menu"
                className="w-11 h-11 flex items-center justify-center bg-zinc-900 hover:bg-emerald-950 border border-zinc-800 hover:border-emerald-600 text-zinc-300 hover:text-[#E6FF00] transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Body */}
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-between py-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Navigation Links */}
                <nav className="lg:col-span-8 flex flex-col divide-y divide-emerald-950/40">
                  {menuItems.map((item, idx) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      className="group py-5 md:py-7 flex items-baseline justify-between text-zinc-200 hover:text-white transition-colors"
                    >
                      <div className="flex items-baseline gap-4 md:gap-6">
                        <span className="text-xs md:text-sm font-mono text-[#E6FF00]/70 group-hover:text-[#E6FF00] transition-colors">
                          {item.tag}
                        </span>
                        <span className="text-3xl md:text-6xl font-black uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                          {item.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-[#E6FF00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </motion.a>
                  ))}
                </nav>

                {/* Side Content */}
                <div className="lg:col-span-4 flex flex-col gap-8 pt-4 lg:border-l lg:border-emerald-950/40 lg:pl-10">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#E6FF00] mb-2">
                      About Asherkine
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Transforming everyday people’s lives through radical generosity, street giveaways, and sustainable grassroots projects across Africa.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-emerald-950/50 to-zinc-950 border border-emerald-900/40">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#E6FF00] mb-1">
                      Direct Inquiries
                    </div>
                    <div className="text-lg font-bold text-white mb-2">
                      partner@asherkine.org
                    </div>
                    <p className="text-xs text-zinc-400">
                      Sponsorships, brand collaborations, and community nominations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                      Follow The Movement
                    </h4>
                    <div className="flex items-center gap-3">
                      {[
                        { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/asherkine', label: 'Instagram' },
                        { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com', label: 'YouTube' },
                        { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com', label: 'X' },
                      ].map((s, i) => (
                        <a
                          key={i}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={s.label}
                          className="w-10 h-10 flex items-center justify-center bg-zinc-900 hover:bg-[#E6FF00] text-zinc-400 hover:text-zinc-950 border border-zinc-800 hover:border-[#E6FF00] transition-all"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="pt-8 mt-8 border-t border-emerald-950/40 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest gap-4">
                <span>Wagwan Gang &bull; Asherkine Official</span>
                <span>Spreading Smiles Everyday &bull; {new Date().getFullYear()}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
