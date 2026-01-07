"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Counter } from "@/components/ui";
import { STATS } from "@/lib/constants";

export default function ComprendrePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Analyse de la situation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-6">
              Comprendre la situation
            </h1>
            <p className="text-xl text-stone-600">
              L'espace civique français traverse une crise sans précédent. Voici les faits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CIVICUS Downgrade */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-red-500 pl-6 md:pl-8"
          >
            <p className="text-sm text-red-600 font-medium mb-2">
              {STATS.civicus.dateDowngrade}
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4">
              La France dégradée par CIVICUS
            </h2>
            <p className="text-stone-600 mb-4 text-lg">
              L'observatoire international des libertés civiques a rétrogradé la France
              de la catégorie <span className="font-semibold">"Rétréci"</span> à{" "}
              <span className="text-red-600 font-bold">"Obstrué"</span>.
            </p>
            <p className="text-stone-500">
              Cela place la France au même niveau que des pays comme la Hongrie ou la Pologne
              sous le gouvernement PiS, où les libertés fondamentales sont significativement entravées.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section ref={ref} className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-12">
              Les chiffres de la crise
            </h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-t-2 border-red-500 pt-6"
              >
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2 tabular-nums">
                  <Counter
                    end={STATS.coupeBudgetaire.montant}
                    decimals={2}
                    suffix=" Mds€"
                  />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Coupes budgétaires
                </h3>
                <p className="text-stone-600 text-sm">
                  Prévues pour l'Économie Sociale et Solidaire en 2025, affectant
                  directement les associations, mutuelles et coopératives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-t-2 border-amber-500 pt-6"
              >
                <div className="text-4xl md:text-5xl font-black text-amber-600 mb-2 tabular-nums">
                  <Counter end={STATS.emploisMenaces.nombre} separator=" " />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Emplois menacés
                </h3>
                <p className="text-stone-600 text-sm">
                  Dans le secteur ESS, soit des postes essentiels pour l'aide aux
                  plus vulnérables, la culture, et l'action sociale.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-t-2 border-stone-400 pt-6"
              >
                <div className="text-4xl md:text-5xl font-black text-stone-700 mb-2 tabular-nums">
                  <Counter end={STATS.interpellations.nombre} suffix="+" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Interpellations
                </h3>
                <p className="text-stone-600 text-sm">
                  Lors de manifestations pacifiques en 2023, témoignant d'un
                  durcissement sécuritaire préoccupant.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CER Explanation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Le Contrat d'Engagement Républicain
            </h2>
            <p className="text-stone-500 mb-12">
              Un outil de contrôle qui pèse sur la liberté associative
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Conditionnalité des subventions",
                  description:
                    "Toute subvention publique est désormais conditionnée à la signature d'un engagement dont les contours restent flous et arbitraires.",
                },
                {
                  title: "Effet dissuasif (chilling effect)",
                  description:
                    "La menace de perdre les financements pousse les associations à l'auto-censure et limite leur capacité de plaidoyer.",
                },
                {
                  title: "Application arbitraire",
                  description:
                    "Des associations sont ciblées de manière sélective, notamment celles qui portent un discours critique sur les politiques publiques.",
                },
              ].map((item, index) => (
                <div key={index} className="border-t border-stone-200 pt-6">
                  <div className="flex gap-4">
                    <span className="text-amber-500 font-black text-xl">{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                      <p className="text-stone-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              Et maintenant ?
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Ces constats sont alarmants, mais l'histoire nous montre que la mobilisation
              citoyenne peut inverser la tendance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/exemples-internationaux"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 hover:bg-stone-100 transition-colors"
              >
                Voir les exemples internationaux
              </Link>
              <Link
                href="/plan-action"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 border-2 border-stone-700 hover:border-stone-500 transition-colors"
              >
                Découvrir notre plan d'action
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
