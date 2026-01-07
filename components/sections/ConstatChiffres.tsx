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
    color: "border-red-500",
  },
  {
    value: STATS.emploisMenaces.nombre,
    suffix: "",
    decimals: 0,
    label: "Emplois menacés",
    description: "Dans le secteur associatif",
    color: "border-amber-500",
  },
  {
    value: STATS.interpellations.nombre,
    suffix: "+",
    decimals: 0,
    label: "Interpellations",
    description: "Lors de manifestations (2023)",
    color: "border-stone-400",
  },
];

export default function ConstatChiffres() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-stone-50"
      aria-labelledby="constat-title"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-stone-400 font-medium mb-4">
            Le constat
          </p>
          <h2
            id="constat-title"
            className="text-[clamp(2rem,5vw,3.5rem)] font-black text-stone-900 leading-[1.1] tracking-[-0.02em] mb-4"
          >
            Les chiffres parlent.
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
            La société civile française fait face à une pression sans précédent.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {statsCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`border-l-[3px] ${stat.color} pl-6`}
            >
              <div className="text-[clamp(2.5rem,7vw,4rem)] font-black text-stone-900 leading-none tracking-[-0.03em] tabular-nums mb-3">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  separator=" "
                />
              </div>
              <h3 className="text-base font-semibold text-stone-800 mb-1">
                {stat.label}
              </h3>
              <p className="text-[13px] text-stone-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/comprendre"
            className="group inline-flex items-center gap-2 text-stone-700 font-semibold text-[15px] hover:text-stone-900 transition-colors duration-300"
          >
            Comprendre en détail
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
        </motion.div>
      </div>
    </section>
  );
}
