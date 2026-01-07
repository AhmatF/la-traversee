"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Counter } from "@/components/ui";
import { PILIERS, FEUILLE_DE_ROUTE, STATS } from "@/lib/constants";

const pilierColors = {
  proteger: { border: "border-red-500", text: "text-red-600", bg: "bg-red-500" },
  contenir: { border: "border-amber-500", text: "text-amber-600", bg: "bg-amber-500" },
  preparer: { border: "border-emerald-500", text: "text-emerald-600", bg: "bg-emerald-500" },
};

export default function PlanActionPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const piliersArray = [PILIERS.proteger, PILIERS.contenir, PILIERS.preparer];

  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4">
              Notre stratégie
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-6">
              Plan d'action
            </h1>
            <p className="text-xl text-stone-600">
              Une approche structurée sur 18 mois pour protéger, contenir et préparer
              la société civile face aux défis actuels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3.5% Rule Reminder */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-50 border-l-4 border-emerald-500 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center">
                <span className="text-5xl font-black text-emerald-600">
                  {STATS.regle35.pourcentage}%
                </span>
                <p className="text-stone-600 mt-1">de la population</p>
              </div>
              <div>
                <p className="text-stone-700">
                  <span className="font-bold">= {STATS.regle35.label} de Français</span>{" "}
                  mobilisés garantissent le succès d'un mouvement pacifique selon les
                  recherches d'Erica Chenoweth (Harvard).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 Piliers */}
      <section ref={ref} className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Les 3 piliers
            </h2>
            <p className="text-stone-500 mb-12">
              Une stratégie progressive qui s'adapte à l'urgence du moment.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
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

                    <h4 className="text-stone-900 font-semibold mb-4">Actions clés</h4>
                    <ul className="space-y-3">
                      {pilier.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
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
                      Missions associées : Type {pilier.missions.join(", ")}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feuille de Route */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Feuille de route 18 mois
            </h2>
            <p className="text-stone-500 mb-12">
              Un calendrier progressif pour déployer notre stratégie.
            </p>

            <div className="space-y-6">
              {FEUILLE_DE_ROUTE.map((phase, index) => {
                const pilier = PILIERS[phase.pilier as keyof typeof PILIERS];
                const colors = pilierColors[phase.pilier as keyof typeof pilierColors];
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border border-stone-200 p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-14 h-14 flex items-center justify-center text-xl font-black text-white ${colors.bg}`}
                        >
                          {phase.phase}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className={`text-xs font-medium ${colors.text}`}>
                          {pilier.nom}
                        </span>
                        <h3 className="text-xl font-bold text-stone-900 mb-1">
                          {phase.titre}
                        </h3>
                        <p className="text-stone-500 text-sm mb-4">{phase.periode}</p>
                        <ul className="space-y-2">
                          {phase.objectifs.map((obj, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-stone-600 text-sm"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.bg}`}
                              />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-6">
              Participez à ce plan
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Chaque compétence compte. Découvrez comment vous pouvez contribuer
              selon vos disponibilités et expertises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/missions"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 hover:bg-stone-100 transition-colors"
              >
                Voir les types de missions
              </Link>
              <Link
                href="/je-veux-aider"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 border-2 border-stone-700 hover:border-stone-500 transition-colors"
              >
                Je veux m'engager
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
