"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { TYPES_MISSIONS, PILIERS } from "@/lib/constants";

export default function MissionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const missionsArray = Object.values(TYPES_MISSIONS);

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
              Types de missions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-6">
              Comment contribuer
            </h1>
            <p className="text-xl text-stone-600">
              Six façons de mettre vos compétences au service de la société civile,
              selon votre profil et vos disponibilités.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missions Grid */}
      <section ref={ref} className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {missionsArray.map((mission, index) => (
              <motion.div
                key={mission.code}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-stone-200 p-6"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {mission.nom}
                </h3>
                <p className="text-stone-600 mb-4">
                  {mission.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-stone-500 text-xs uppercase tracking-wider mb-2">
                    Compétences recherchées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mission.competences.map((comp) => (
                      <span
                        key={comp}
                        className="text-xs px-2 py-1 bg-stone-100 text-stone-600"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-stone-400 text-sm">
                  Durée : {mission.duree}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Link to Piliers */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-black text-stone-900 mb-8">
              Missions par pilier
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[PILIERS.proteger, PILIERS.contenir, PILIERS.preparer].map(
                (pilier) => (
                  <div key={pilier.id} className="border-t-2 pt-4" style={{ borderColor: pilier.couleur }}>
                    <h4
                      className="font-bold text-lg mb-2"
                      style={{ color: pilier.couleur }}
                    >
                      {pilier.nom}
                    </h4>
                    <p className="text-stone-500 text-sm mb-2">
                      {pilier.sousTitre}
                    </p>
                    <p className="text-stone-700">
                      Types {pilier.missions.join(" et ")}
                    </p>
                  </div>
                )
              )}
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
              Trouvez votre mission
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Répondez à quelques questions et nous vous proposerons les missions
              les plus adaptées à votre profil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/je-veux-aider"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 hover:bg-stone-100 transition-colors"
              >
                Je veux m'engager
              </Link>
              <Link
                href="/ressources"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 border-2 border-stone-700 hover:border-stone-500 transition-colors"
              >
                Consulter les ressources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
