"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroTraversee() {
  return (
    <section
      className="min-h-screen flex items-center bg-[#FFFDF8]"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Overline */}
          <motion.p
            variants={item}
            className="text-[11px] uppercase tracking-[0.35em] text-stone-400 font-medium mb-8"
          >
            Un mouvement citoyen
          </motion.p>

          {/* Main title */}
          <motion.h1
            id="hero-title"
            variants={item}
            className="text-[clamp(3rem,10vw,7rem)] font-black text-stone-900 leading-[0.9] tracking-[-0.03em] mb-10"
          >
            La Traversée
            <br />
            <span className="text-amber-500">commence.</span>
          </motion.h1>

          {/* Quote */}
          <motion.blockquote
            variants={item}
            className="max-w-2xl border-l-[3px] border-amber-400/80 pl-6 mb-12"
          >
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed">
              <span className="italic">"L'histoire des résistances enseigne une leçon constante :</span>
              <span className="font-semibold text-stone-800 not-italic block mt-2">
                ceux qui se préparent avant la tempête traversent mieux."
              </span>
            </p>
          </motion.blockquote>

          {/* Timeline */}
          <motion.div
            variants={item}
            className="flex items-baseline gap-4 mb-12"
          >
            <span className="text-[clamp(5rem,12vw,8rem)] font-black text-amber-500 leading-none tracking-[-0.04em]">
              18
            </span>
            <div className="pb-3">
              <span className="text-2xl md:text-3xl font-bold text-stone-900 tracking-[-0.02em]">
                mois
              </span>
              <p className="text-stone-500 mt-1">
                pour préparer l'ESS française.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/je-veux-aider"
              className="group inline-flex items-center justify-center gap-3 bg-stone-900 text-white font-semibold text-[15px] px-8 py-4 transition-all duration-300 hover:bg-stone-800"
            >
              Rejoindre le mouvement
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              className="inline-flex items-center justify-center gap-2 text-stone-700 font-semibold text-[15px] px-8 py-4 border-2 border-stone-200 transition-all duration-300 hover:border-stone-400 hover:text-stone-900"
            >
              Comprendre la situation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
