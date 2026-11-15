import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Youtube, Play } from 'lucide-react';

// Custom crisp X icon SVG
function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Hero() {
  const cards = [
    {
      id: 0,
      src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792659933/SaveClip.App_730776720_18603078757038355_1645653747830791162_n_ylkrob.jpg",
      tag: "Asherkine"
    },
    {
      id: 1,
      src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792598412/SaveClip.App_483922207_18493230637038355_569899759290741135_n_vdedko.jpg",
      tag: "Asherkine"
    }
  ];

  // Active top card index (0 or 1)
  const [activeCard, setActiveCard] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    // Preload both images immediately
    cards.forEach((c) => {
      const img = new Image();
      img.src = c.src;
    });

    // Initial shuffle on load after card finishes entrance animation
    const initialTimer = setTimeout(() => {
      triggerShuffle();
    }, 1800);

    // Shuffle repeatedly every 3 seconds
    const interval = setInterval(() => {
      triggerShuffle();
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerShuffle = () => {
    setIsShuffling(true);

    // Halfway through the slide-out (at 350ms), swap which card is on top
    setTimeout(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 350);

    // Complete the shuffle motion
    setTimeout(() => {
      setIsShuffling(false);
    }, 700);
  };

  // Exactly 24 intersections (6 cols x 4 rows)
  const xCols = [10, 26, 42, 58, 74, 90];
  const yRows = [14, 34, 56, 78];

  const intersections = yRows.flatMap((y, rowIdx) =>
    xCols.map((x, colIdx) => ({
      id: `${rowIdx}-${colIdx}`,
      x,
      y,
      isAccent: (rowIdx + colIdx) % 3 === 0,
    }))
  );

  return (
    <section 
      className="relative min-h-[96vh] lg:min-h-screen pt-16 sm:pt-20 pb-8 px-6 lg:px-12 flex flex-col justify-between overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #062D1B 0%, #0B0809 100%)' }}
    >
      
      {/* Background ambient lighting */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_70%)] pointer-events-none" 
      />

      {/* FAINT GRID WITH 24 DIAMONDS AT LINE INTERSECTIONS */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          {/* Vertical Grid Lines */}
          {xCols.map((x) => (
            <line
              key={`v-${x}`}
              x1={`${x}%`}
              y1="0%"
              x2={`${x}%`}
              y2="100%"
              stroke="rgba(16, 185, 129, 0.45)"
              strokeWidth="0.75"
            />
          ))}
          {/* Horizontal Grid Lines */}
          {yRows.map((y) => (
            <line
              key={`h-${y}`}
              x1="0%"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="rgba(16, 185, 129, 0.45)"
              strokeWidth="0.75"
            />
          ))}
        </svg>

        {/* 24 Diamonds at Intersection Centers */}
        {intersections.map((pt) => (
          <div
            key={pt.id}
            style={{
              left: `${pt.x}%`,
              top: `${pt.y}%`,
              transform: 'translate(-50%, -50%) rotate(45deg)',
            }}
            className={`absolute w-2 h-2 border ${
              pt.isAccent
                ? 'border-[#E6FF00]/80 bg-[#E6FF00]/40 shadow-[0_0_8px_rgba(230,255,0,0.5)]'
                : 'border-emerald-400/50 bg-emerald-400/25 shadow-[0_0_6px_rgba(16,185,129,0.3)]'
            }`}
          />
        ))}
      </motion.div>

      {/* VERTICAL SOCIAL ICONS (Upper Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-24 right-6 lg:right-12 z-40 flex flex-col items-center gap-3"
      >
        <div className="w-px h-6 bg-emerald-700/30" />
        {/* 1. IG First */}
        <a
          href="https://instagram.com/asherkine"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-950/60 hover:bg-[#E6FF00] text-zinc-300 hover:text-zinc-950 border border-emerald-800/40 hover:border-[#E6FF00] transition-all hover:scale-110 shadow-lg backdrop-blur-sm"
        >
          <Instagram className="w-4 h-4" />
        </a>

        {/* 2. Official X Icon */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="X (formerly Twitter)"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-950/60 hover:bg-[#E6FF00] text-zinc-300 hover:text-zinc-950 border border-emerald-800/40 hover:border-[#E6FF00] transition-all hover:scale-110 shadow-lg backdrop-blur-sm"
        >
          <XIcon className="w-3.5 h-3.5" />
        </a>

        {/* 3. YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-950/60 hover:bg-[#E6FF00] text-zinc-300 hover:text-zinc-950 border border-emerald-800/40 hover:border-[#E6FF00] transition-all hover:scale-110 shadow-lg backdrop-blur-sm"
        >
          <Youtube className="w-4 h-4" />
        </a>
        <div className="w-px h-6 bg-emerald-700/30" />
      </motion.div>

      {/* MAIN HERO CONTENT */}
      <div className="max-w-7xl w-full mx-auto relative flex-1 flex flex-col justify-between pt-2">
        
        {/* TOP ROW: "WAGWAN" on left, "Culture. Impact. Influence." (NO CIRCLE, NO BACKGROUND) on right */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 z-30">
          
          {/* Top Left: WAGWAN */}
          <motion.div
            initial={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none">
              WAGWAN
            </h1>
          </motion.div>

          {/* Top Right: "Culture. Impact. Influence." (NO pulsing circle, NO background) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pr-16"
          >
            <p className="text-xs sm:text-sm font-black tracking-widest text-[#E6FF00] uppercase">
              Culture. Impact. Influence.
            </p>
          </motion.div>

        </div>

        {/* CENTER OF VIEW HEIGHT: Strictly Middle-Aligned Shuffling Card Deck */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={triggerShuffle}
            title="Click to shuffle card"
            className="pointer-events-auto relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] cursor-pointer group shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
            style={{ transformOrigin: 'center center' }}
          >
            {/* STACK OF 2 CARDS WITH PHYSICAL SHUFFLE MOTION */}
            {cards.map((card, idx) => {
              const isCurrentTop = activeCard === idx;
              // Card being flicked out during shuffle
              const isFlicking = isShuffling && !isCurrentTop;

              return (
                <motion.div
                  key={card.id}
                  animate={
                    isFlicking
                      ? {
                          x: [0, 115, 0],
                          y: [0, -28, 0],
                          rotate: [-25, -10, -25],
                          scale: [1, 1.06, 0.97],
                          zIndex: [30, 30, 5],
                        }
                      : {
                          x: 0,
                          y: 0,
                          rotate: -25,
                          scale: isCurrentTop ? 1 : 0.98,
                          zIndex: isCurrentTop ? 20 : 10,
                        }
                  }
                  transition={{
                    duration: 0.65,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute inset-0 w-full h-full"
                  style={{ transformOrigin: 'center center' }}
                >
                  {/* The photo frame */}
                  <div className="relative w-full h-full bg-zinc-900 border-2 border-emerald-500/40 group-hover:border-[#E6FF00] transition-colors duration-300 overflow-hidden shadow-2xl">
                    <img
                      src={card.src}
                      alt={card.tag}
                      className="w-full h-full object-cover object-center grayscale-[8%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />

                    {/* Subtle vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none z-20" />

                    {/* Bottom tag: Asherkine */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-30">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6FF00] bg-zinc-950/80 backdrop-blur-sm px-2.5 py-0.5 border border-emerald-900/40">
                        {card.tag}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#E6FF00] text-zinc-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Subtle electric corner markers */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#E6FF00] pointer-events-none" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#E6FF00] pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* BOTTOM ROW: Left has Body Copy + One-line Buttons, Right has GANG! + Lagos Abuja line */}
        <div className="relative pt-6 pb-2 z-30 flex flex-col lg:flex-row items-end justify-between gap-6">
          
          {/* Bottom Left: Regular weight copy + One-line buttons aligned to end on the baseline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start max-w-[340px] sm:max-w-[380px] md:max-w-[420px]"
          >
            {/* Description copy: regular font weight (font-normal), 14px/16px */}
            <p className="text-zinc-300 text-[14px] sm:text-[16px] font-normal leading-relaxed mb-6">
              Transforming everyday people’s lives through radical generosity, street giveaways, and sustainable grassroots projects across Africa.
            </p>

            {/* Two Distinct CTAs: one line, no arrow in book a campaign */}
            <div className="flex flex-row items-center gap-3 w-auto flex-wrap">
              {/* Primary Button: Book a Campaign (One line, NO arrow) */}
              <a
                href="#partner"
                className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3.5 bg-[#E6FF00] hover:bg-white text-zinc-950 font-black uppercase tracking-widest text-xs shadow-[0_0_25px_rgba(230,255,0,0.45)] hover:shadow-[0_0_35px_rgba(230,255,0,0.7)] transition-all cursor-pointer"
              >
                <span>Book a Campaign</span>
              </a>

              {/* Secondary Button: Watch Latest (One line) */}
              <a
                href="#media"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-emerald-500/50 hover:border-[#E6FF00] hover:text-[#E6FF00] text-zinc-200 font-extrabold uppercase tracking-widest text-xs backdrop-blur-sm transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Latest</span>
              </a>
            </div>
          </motion.div>

          {/* Bottom Right: "GANG!" + Lagos • Abuja line */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end text-right shrink-0"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#E6FF00] leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none">
              GANG!
            </h2>
            <div className="mt-2 text-xs font-mono uppercase tracking-widest text-emerald-400/80">
              Lagos &bull; Abuja &bull; Accra &bull; Continental Movement
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
