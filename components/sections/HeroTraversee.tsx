"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroTraversee() {
  return (
    <section
      className="min-h-screen flex items-center bg-[#FFFDF8]"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Overline */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-8">
            Un mouvement citoyen
          </p>

          {/* Main title */}
          <h1
            id="hero-title"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-stone-900 leading-[0.9] tracking-tight mb-8"
          >
            La Traversée
            <br />
            <span className="text-amber-500">commence.</span>
          </h1>

          {/* Quote */}
          <blockquote className="max-w-2xl border-l-4 border-amber-400 pl-6 my-12">
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light italic">
              "L'histoire des résistances enseigne une leçon constante :
              <strong className="font-semibold not-italic"> ceux qui se préparent avant la tempête traversent mieux.</strong>"
            </p>
          </blockquote>

          {/* Timeline */}
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-7xl md:text-8xl font-black text-amber-500">18</span>
            <div>
              <span className="text-2xl md:text-3xl font-bold text-stone-900">mois</span>
              <p className="text-stone-500 mt-1">pour préparer l'ESS française.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/je-veux-aider"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-semibold px-8 py-4 hover:bg-stone-800 transition-colors"
            >
              Rejoindre le mouvement
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/comprendre"
              className="inline-flex items-center justify-center gap-2 text-stone-700 font-semibold px-8 py-4 border-2 border-stone-300 hover:border-stone-400 transition-colors"
            >
              Comprendre la situation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
