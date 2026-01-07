"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge, Counter, Button } from "@/components/ui";
import { heroReveal, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { STATS } from "@/lib/constants";

export default function HeroUrgence() {
  return (
    <section
      className="relative min-h-screen flex items-center section-urgence overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--urgency-bg)] via-[var(--urgency-surface)] to-[var(--urgency-bg)]" />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Content */}
      <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge CIVICUS */}
          <motion.div variants={staggerItem} className="mb-6">
            <Badge variant="urgence" pulse>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {STATS.civicus.dateDowngrade} — CIVICUS
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            id="hero-title"
            variants={heroReveal}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            L'espace civique français
            <br />
            <span className="text-[var(--urgency-red)]">est en danger</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            La France vient d'être dégradée par CIVICUS de{" "}
            <span className="text-white font-semibold">"Rétréci"</span> à{" "}
            <span className="text-[var(--urgency-red)] font-bold">"Obstrué"</span>.
            <br className="hidden md:block" />
            Nos libertés sont menacées. Il est temps d'agir.
          </motion.p>

          {/* Key Stat */}
          <motion.div
            variants={staggerItem}
            className="inline-flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/5 border border-[var(--urgency-red)]/30 mb-10"
          >
            <span className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Coupes prévues dans l'ESS
            </span>
            <span className="urgence-stat text-5xl md:text-6xl">
              <Counter
                end={STATS.coupeBudgetaire.montant}
                decimals={2}
                suffix=" Mds€"
                separator=" "
              />
            </span>
            <span className="text-white/50 text-sm mt-2">
              = {STATS.emploisMenaces.label} emplois menacés
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/comprendre" size="lg">
              Comprendre la situation
            </Button>
            <Button href="/je-veux-aider" variant="secondary" size="lg">
              Je veux agir maintenant
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/40"
        >
          <span className="text-xs uppercase tracking-wider mb-2">Défiler</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
