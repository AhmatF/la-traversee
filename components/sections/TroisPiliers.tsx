"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { PILIERS } from "@/lib/constants";

const pilierColors = {
  proteger: {
    border: "border-red-500",
    text: "text-red-600",
    bg: "bg-red-50",
  },
  contenir: {
    border: "border-amber-500",
    text: "text-amber-600",
    bg: "bg-amber-50",
  },
  preparer: {
    border: "border-emerald-500",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
  },
};

export default function TroisPiliers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const piliersArray = [PILIERS.proteger, PILIERS.contenir, PILIERS.preparer];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-white"
      aria-labelledby="piliers-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4">
            Notre stratégie
          </p>
          <h2
            id="piliers-title"
            className="text-4xl md:text-5xl font-black text-stone-900 leading-tight mb-6"
          >
            Trois piliers pour agir
          </h2>
          <p className="text-xl text-stone-600 mb-16 max-w-2xl">
            Une approche structurée sur 18 mois pour protéger, contenir et préparer l'avenir.
          </p>

          {/* Piliers Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {piliersArray.map((pilier, index) => {
              const colors = pilierColors[pilier.id as keyof typeof pilierColors];
              return (
                <motion.div
                  key={pilier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-t-4 ${colors.border} pt-6`}
                >
                  <h3 className={`text-2xl font-black ${colors.text} mb-2`}>
                    {pilier.nom}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4">{pilier.sousTitre}</p>
                  <p className="text-stone-700 mb-6">{pilier.description}</p>

                  <ul className="space-y-2">
                    {pilier.actions.map((action, actionIndex) => (
                      <li
                        key={actionIndex}
                        className="flex items-start gap-2 text-stone-600 text-sm"
                      >
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {action}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 pt-4 border-t border-stone-200 text-stone-400 text-xs">
                    Missions type: {pilier.missions.join(", ")}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/plan-action"
            className="inline-flex items-center gap-2 text-stone-700 font-semibold hover:text-stone-900 transition-colors"
          >
            Voir le plan d'action complet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
