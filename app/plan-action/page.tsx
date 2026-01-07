"use client";

import { motion } from "framer-motion";
import { Badge, Card, Counter, Button, IconBox } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { PILIERS, FEUILLE_DE_ROUTE, STATS } from "@/lib/constants";

const pilierIcons = {
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  barrier: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  seedling: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

const pilierVariants = {
  proteger: "pilier-proteger",
  contenir: "pilier-contenir",
  preparer: "pilier-preparer",
} as const;

export default function PlanActionPage() {
  const piliersArray = [PILIERS.proteger, PILIERS.contenir, PILIERS.preparer];

  return (
    <div className="min-h-screen bg-[var(--urgency-bg)]">
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={staggerItem}>
              <Badge variant="espoir" className="mb-6">
                Notre stratégie
              </Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              Plan d'action
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Une approche structurée sur 18 mois pour protéger, contenir et préparer
              la société civile face aux défis actuels.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3.5% Rule Reminder */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-4xl mx-auto"
          >
            <Card variant="espoir" className="p-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div>
                  <span className="text-5xl font-black text-[var(--hope-emerald)]">
                    {STATS.regle35.pourcentage}%
                  </span>
                  <p className="text-[var(--ocean-midnight)]/70 mt-2">
                    de la population
                  </p>
                </div>
                <div className="text-left max-w-md">
                  <p className="text-[var(--ocean-midnight)]">
                    <span className="font-bold">= {STATS.regle35.label} de Français</span>{" "}
                    mobilisés garantissent le succès d'un mouvement pacifique selon les
                    recherches d'Erica Chenoweth (Harvard).
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 3 Piliers */}
      <section className="section-padding bg-[var(--urgency-surface)]">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Les 3 piliers
            </motion.h2>
            <motion.p variants={staggerItem} className="text-white/60 max-w-2xl mx-auto">
              Une stratégie progressive qui s'adapte à l'urgence du moment.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid lg:grid-cols-3 gap-8"
          >
            {piliersArray.map((pilier) => (
              <motion.div key={pilier.id} variants={staggerItem}>
                <div className={`pilier-card ${pilierVariants[pilier.id as keyof typeof pilierVariants]} h-full`}>
                  <div className="flex items-center gap-4 mb-6">
                    <IconBox
                      variant={pilier.id as "proteger" | "contenir" | "preparer"}
                      size="lg"
                    >
                      {pilierIcons[pilier.icon as keyof typeof pilierIcons]}
                    </IconBox>
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: pilier.couleur }}
                      >
                        {pilier.nom}
                      </h3>
                      <p className="text-white/50">{pilier.sousTitre}</p>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6 text-lg">{pilier.description}</p>

                  <h4 className="text-white font-semibold mb-4">Actions clés</h4>
                  <ul className="space-y-3">
                    {pilier.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60">
                        <svg
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: pilier.couleur }}
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

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-white/40 text-sm">
                      Missions associées : Type {pilier.missions.join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feuille de Route */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Feuille de route 18 mois
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Un calendrier progressif pour déployer notre stratégie.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-8"
            >
              {FEUILLE_DE_ROUTE.map((phase, index) => {
                const pilier = PILIERS[phase.pilier as keyof typeof PILIERS];
                return (
                  <motion.div key={phase.phase} variants={staggerItem}>
                    <Card hover className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white"
                            style={{ backgroundColor: pilier.couleur }}
                          >
                            {phase.phase}
                          </div>
                        </div>
                        <div className="flex-1">
                          <Badge
                            variant={
                              phase.pilier === "proteger"
                                ? "pilier-proteger"
                                : phase.pilier === "contenir"
                                ? "pilier-contenir"
                                : "pilier-preparer"
                            }
                            className="mb-2"
                          >
                            {pilier.nom}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {phase.titre}
                          </h3>
                          <p className="text-white/50 text-sm mb-4">{phase.periode}</p>
                          <ul className="space-y-2">
                            {phase.objectifs.map((obj, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-white/70 text-sm"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                  style={{ backgroundColor: pilier.couleur }}
                                />
                                {obj}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-[var(--urgency-bg)] to-[var(--ocean-midnight)]">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Participez à ce plan
            </h2>
            <p className="text-white/70 mb-8">
              Chaque compétence compte. Découvrez comment vous pouvez contribuer
              selon vos disponibilités et expertises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/missions">
                Voir les types de missions
              </Button>
              <Button href="/je-veux-aider" variant="secondary">
                Je veux m'engager
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
