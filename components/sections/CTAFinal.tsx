"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { STATS } from "@/lib/constants";

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-stone-900"
      aria-labelledby="cta-title"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Overline */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-6">
            Il ne manque plus que vous
          </p>

          {/* Title */}
          <h2
            id="cta-title"
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-8"
          >
            Prêt à traverser ?
          </h2>

          <p className="text-xl text-stone-400 max-w-xl mx-auto mb-12">
            Rejoignez les citoyens qui se mobilisent.
            Chaque compétence compte.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <div>
              <span className="text-2xl font-bold text-amber-400">{STATS.regle35.pourcentage}%</span>
              <span className="text-stone-500 ml-2">pour réussir</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">{STATS.regle35.label}</span>
              <span className="text-stone-500 ml-2">de Français</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-emerald-400">198</span>
              <span className="text-stone-500 ml-2">méthodes</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/je-veux-aider"
              className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 hover:bg-stone-100 transition-colors"
            >
              Je veux aider
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/jai-besoin"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 border-2 border-stone-700 hover:border-stone-500 transition-colors"
            >
              J'ai besoin d'aide
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
