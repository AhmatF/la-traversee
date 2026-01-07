"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { EXEMPLES_PAYS } from "@/lib/constants";

const paysApercu = [
  {
    ...EXEMPLES_PAYS.russie,
    accroche: "De « démocratique » à « non libre » en 20 ans",
    exemple_positif: false,
  },
  {
    ...EXEMPLES_PAYS.hongrie,
    accroche: "Autocratisation légale au sein de l'UE",
    exemple_positif: false,
  },
  {
    ...EXEMPLES_PAYS.pologne,
    accroche: "La résistance citoyenne a inversé la tendance",
    exemple_positif: true,
  },
  {
    ...EXEMPLES_PAYS.usa,
    accroche: "Les normes non-écrites peuvent être ignorées",
    exemple_positif: false,
  },
  {
    ...EXEMPLES_PAYS.bresil,
    accroche: "Alternance possible malgré les dégâts",
    exemple_positif: true,
  },
];

export default function ExemplesInternationaux() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-stone-900"
      aria-labelledby="exemples-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-4">
            Leçons internationales
          </p>
          <h2
            id="exemples-title"
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
          >
            Ce qui se passe ailleurs
          </h2>
          <p className="text-xl text-stone-400 mb-16 max-w-2xl">
            L'autocratisation n'est pas une fatalité. Voici ce que d'autres pays nous apprennent.
          </p>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {paysApercu.map((pays, index) => (
              <motion.div
                key={pays.nom}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`text-center p-4 border ${
                  pays.exemple_positif
                    ? "border-emerald-500/50"
                    : "border-stone-700"
                }`}
              >
                <span className="text-3xl mb-2 block" aria-hidden="true">
                  {pays.drapeau}
                </span>
                <h3 className="text-white font-bold text-sm mb-1">{pays.nom}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  {pays.accroche}
                </p>
                {pays.exemple_positif && (
                  <span className="inline-block mt-2 text-xs text-emerald-400 font-medium">
                    Exemple positif
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/exemples-internationaux"
            className="inline-flex items-center gap-2 text-stone-400 font-semibold hover:text-white transition-colors"
          >
            Découvrir les études de cas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
