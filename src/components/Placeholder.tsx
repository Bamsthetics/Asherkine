import React from 'react';
import { motion } from 'motion/react';

export function Placeholder() {
  return (
    <div
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden text-zinc-100 selection:bg-[#E6FF00] selection:text-zinc-950"
      style={{
        backgroundColor: '#080A09',
        backgroundImage:
          'radial-gradient(circle at 50% 48%, rgba(16, 68, 42, 0.45) 0%, rgba(10, 34, 22, 0.24) 38%, rgba(8, 10, 9, 1) 76%)',
      }}
    >
      {/* Top optical balance spacer */}
      <div className="h-14 shrink-0" aria-hidden="true" />

      {/* Center Focal Lockup */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mx-auto flex flex-col items-center text-center"
        >
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#E6FF00]/25 bg-[#E6FF00]/[0.06] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6FF00]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#E6FF00] whitespace-nowrap">
              Official Website · In Development
            </span>
          </div>

          {/* Primary Wordmark */}
          <h1 className="font-garet text-[2.65rem] sm:text-[3.75rem] md:text-[4.25rem] font-bold tracking-[-0.02em] uppercase text-white leading-none select-none">
            ASHERKINE
          </h1>

          {/* Supporting Copy */}
          <p className="mt-5 max-w-[490px] text-[15px] sm:text-base font-normal leading-[1.65] text-zinc-400 text-balance">
            The official digital home for brand partnerships, media inquiries, and community releases is currently being engineered.
          </p>
        </motion.div>
      </main>

      {/* Quiet Bottom Credit */}
      <footer className="relative z-10 pb-8 pt-4 px-6 text-center shrink-0">
        <p className="text-xs sm:text-[13px] font-normal text-zinc-400 tracking-wide">
          Digital Infrastructure &amp; Design Engineering by{' '}
          <a
            href="https://design.bamsthetics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 font-medium border-b border-zinc-600/80 pb-0.5 hover:text-[#E6FF00] hover:border-[#E6FF00] focus-visible:outline-none focus-visible:text-[#E6FF00] focus-visible:border-[#E6FF00] transition-colors duration-200"
          >
            Bamsthetics Design
          </a>
        </p>
      </footer>
    </div>
  );
}
