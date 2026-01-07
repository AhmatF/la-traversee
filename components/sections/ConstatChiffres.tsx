"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Counter } from "@/components/ui";
import { STATS } from "@/lib/constants";

const statsCards = [
  {
    value: STATS.coupeBudgetaire.montant,
    suffix: " Mds€",
    decimals: 2,
    label: "Coupes budgétaires",
    description: "Prévues pour l'ESS en 2025",
  },
  {
    value: STATS.emploisMenaces.nombre,
    suffix: "",
    decimals: 0,
    label: "Emplois menacés",
    description: "Dans le secteur associatif",
  },
  {
    value: STATS.interpellations.nombre,
    suffix: "+",
    decimals: 0,
    label: "Interpellations",
    description: "Lors de manifestations (2023)",
  },
];

export default function ConstatChiffres() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-white"
      aria-labelledby="constat-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4">
            Le constat
          </p>
          <h2
            id="constat-title"
            className="text-4xl md:text-5xl font-black text-stone-900 leading-tight mb-6"
          >
            Les chiffres parlent
          </h2>
          <p className="text-xl text-stone-600 mb-16 max-w-2xl">
            La société civile française fait face à une pression sans précédent.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {statsCards.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t-2 border-amber-400 pt-6"
              >
                <div className="text-4xl md:text-5xl font-black text-stone-900 mb-2 tabular-nums">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    separator=" "
                  />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-1">
                  {stat.label}
                </h3>
                <p className="text-stone-500 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/comprendre"
            className="inline-flex items-center gap-2 text-stone-700 font-semibold hover:text-stone-900 transition-colors"
          >
            Comprendre en détail
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
