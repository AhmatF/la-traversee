"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { PILIERS } from "@/lib/constants";

const pilierStyles = {
  proteger: { border: "border-red-500", text: "text-red-600" },
  contenir: { border: "border-amber-500", text: "text-amber-600" },
  preparer: { border: "border-emerald-500", text: "text-emerald-600" },
};

export default function TroisPiliers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const piliersArray = [PILIERS.proteger, PILIERS.contenir, PILIERS.preparer];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-stone-50"
      aria-labelledby="piliers-title"
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
            Notre stratégie
          </p>
          <h2
            id="piliers-title"
            className="text-[clamp(2rem,5vw,3.5rem)] font-black text-stone-900 leading-[1.1] tracking-[-0.02em] mb-4"
          >
            Trois piliers pour agir.
          </h2>
          <p className="text-lg text-stone-600 max-w-xl leading-relaxed">
            Une approche structurée sur 18 mois pour protéger, contenir et préparer l'avenir.
          </p>
        </motion.div>

        {/* Piliers Grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {piliersArray.map((pilier, index) => {
            const styles = pilierStyles[pilier.id as keyof typeof pilierStyles];
            return (
              <motion.div
                key={pilier.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`border-t-[3px] ${styles.border} pt-6`}
              >
                <h3 className={`text-xl font-black ${styles.text} mb-1 tracking-[-0.01em]`}>
                  {pilier.nom}
                </h3>
                <p className="text-[13px] text-stone-400 mb-4">{pilier.sousTitre}</p>
                <p className="text-[15px] text-stone-700 leading-relaxed mb-5">
                  {pilier.description}
                </p>

                <ul className="space-y-2">
                  {pilier.actions.slice(0, 3).map((action, actionIndex) => (
                    <li
                      key={actionIndex}
                      className="flex items-start gap-2 text-[13px] text-stone-500"
                    >
                      <svg
                        className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${styles.text}`}
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
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/plan-action"
            className="group inline-flex items-center gap-2 text-stone-700 font-semibold text-[15px] hover:text-stone-900 transition-colors duration-300"
          >
            Voir le plan d'action complet
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
