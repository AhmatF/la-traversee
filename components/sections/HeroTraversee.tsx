"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Jony Ive: Staggered reveal animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.4,
    },
  },
};

export default function HeroTraversee() {
  return (
    <section
      className="min-h-screen bg-[#FFFDF8] overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* 8px grid container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-screen items-center py-32 lg:py-0">

          {/* Content Column - 7 cols */}
          <motion.div
            className="lg:col-span-7 space-y-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Overline - subtle, precise */}
            <motion.p
              variants={item}
              className="text-[11px] uppercase tracking-[0.35em] text-stone-400 font-medium"
            >
              Un mouvement citoyen
            </motion.p>

            {/* Title - massive, precise letter-spacing */}
            <motion.h1
              id="hero-title"
              variants={item}
              className="text-[clamp(2.75rem,8vw,6rem)] font-black text-stone-900 leading-[0.92] tracking-[-0.03em]"
            >
              La Traversée
              <br />
              <span className="text-amber-500">commence.</span>
            </motion.h1>

            {/* Quote - refined border, perfect spacing */}
            <motion.blockquote
              variants={item}
              className="relative pl-6 border-l-[3px] border-amber-400/80"
            >
              <p className="text-[clamp(1.125rem,2.5vw,1.375rem)] text-stone-600 leading-[1.6] font-light">
                <span className="italic">"L'histoire des résistances enseigne une leçon constante :</span>
                <span className="font-medium text-stone-800 not-italic block mt-1">
                  ceux qui se préparent avant la tempête traversent mieux."
                </span>
              </p>
            </motion.blockquote>

            {/* Timeline - bold number, aligned baseline */}
            <motion.div
              variants={item}
              className="flex items-baseline gap-4"
            >
              <span className="text-[clamp(4rem,10vw,6.5rem)] font-black text-amber-500 leading-none tracking-[-0.04em]">
                18
              </span>
              <div className="pb-2">
                <span className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-stone-900 tracking-[-0.02em]">
                  mois
                </span>
                <p className="text-stone-500 text-sm mt-0.5 tracking-wide">
                  pour préparer l'ESS française.
                </p>
              </div>
            </motion.div>

            {/* CTAs - pixel-perfect sizing */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/je-veux-aider"
                className="group inline-flex items-center justify-center gap-3 bg-stone-900 text-white font-semibold text-[15px] px-8 py-4 transition-all duration-300 ease-out hover:bg-stone-800 hover:gap-4"
              >
                Rejoindre le mouvement
                <svg
                  className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/comprendre"
                className="inline-flex items-center justify-center gap-2 text-stone-700 font-semibold text-[15px] px-8 py-4 border-2 border-stone-200 transition-all duration-300 ease-out hover:border-stone-400 hover:text-stone-900"
              >
                Comprendre la situation
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column - 5 cols */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={imageReveal}
            initial="hidden"
            animate="visible"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full">
              {/* Subtle shadow frame */}
              <div className="absolute inset-0 bg-stone-900/[0.03] translate-x-4 translate-y-4" />

              {/* Image container */}
              <div className="relative bg-[#FFFDF8] overflow-hidden">
                <Image
                  src="/images/hero-traversee.png"
                  alt="Une foule diverse fait face au soleil levant - illustration style gravure"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Minimal caption */}
            <p className="text-[11px] text-stone-400 mt-6 tracking-wide text-center lg:text-left">
              Illustration : La Traversée, 2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
