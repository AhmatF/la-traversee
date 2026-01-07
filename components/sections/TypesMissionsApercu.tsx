"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { TYPES_MISSIONS } from "@/lib/constants";

export default function TypesMissionsApercu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const missionsArray = Object.values(TYPES_MISSIONS);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-stone-50"
      aria-labelledby="missions-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4">
            Types de missions
          </p>
          <h2
            id="missions-title"
            className="text-4xl md:text-5xl font-black text-stone-900 leading-tight mb-6"
          >
            Comment contribuer
          </h2>
          <p className="text-xl text-stone-600 mb-16 max-w-2xl">
            Six façons de mettre vos compétences au service de la société civile.
          </p>

          {/* Missions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {missionsArray.map((mission, index) => (
              <motion.div
                key={mission.code}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-t border-stone-200 pt-4"
              >
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {mission.nom}
                </h3>
                <p className="text-stone-600 text-sm mb-3 line-clamp-2">
                  {mission.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {mission.competences.slice(0, 3).map((comp) => (
                    <span
                      key={comp}
                      className="text-xs px-2 py-0.5 bg-stone-100 text-stone-500"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/missions"
            className="inline-flex items-center gap-2 text-stone-700 font-semibold hover:text-stone-900 transition-colors"
          >
            Découvrir toutes les missions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
