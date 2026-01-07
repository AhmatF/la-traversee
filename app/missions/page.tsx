"use client";

import { motion } from "framer-motion";
import { Badge, Card, Button, IconBox } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { TYPES_MISSIONS, PILIERS } from "@/lib/constants";

const missionIcons: Record<string, React.ReactNode> = {
  A: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  B: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  C: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  D: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  E: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  F: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

const urgenceLabels: Record<string, { label: string; color: string }> = {
  haute: { label: "Urgence haute", color: "var(--urgency-red)" },
  moyenne: { label: "Urgence moyenne", color: "var(--pilier-contenir)" },
  planifiée: { label: "Planifiée", color: "var(--hope-emerald)" },
};

export default function MissionsPage() {
  const missionsArray = Object.values(TYPES_MISSIONS);

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
              <Badge variant="info" className="mb-6">
                Types de missions
              </Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              Comment contribuer
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Six façons de mettre vos compétences au service de la société civile,
              selon votre profil et vos disponibilités.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Urgency Levels */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-3xl mx-auto"
          >
            <Card variant="glass" className="p-6">
              <div className="flex flex-wrap justify-center gap-6">
                {Object.entries(urgenceLabels).map(([key, { label, color }]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-white/70 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Missions Grid */}
      <section className="section-padding bg-[var(--urgency-surface)]">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {missionsArray.map((mission) => (
              <motion.div key={mission.code} variants={staggerItem}>
                <Card hover className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <IconBox
                        variant={`mission-${mission.code.toLowerCase()}` as any}
                        size="lg"
                      >
                        {missionIcons[mission.code]}
                      </IconBox>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-sm font-bold px-2 py-0.5 rounded text-white"
                            style={{ backgroundColor: mission.couleur }}
                          >
                            Type {mission.code}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {mission.nom}
                        </h3>
                      </div>
                    </div>

                    <p className="text-white/70 mb-6 flex-1">
                      {mission.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white/50 text-xs uppercase tracking-wider mb-2">
                          Compétences recherchées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {mission.competences.map((comp) => (
                            <span
                              key={comp}
                              className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/70"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: urgenceLabels[mission.urgence].color,
                            }}
                          />
                          <span className="text-white/50 text-sm">
                            {urgenceLabels[mission.urgence].label}
                          </span>
                        </div>
                        <span className="text-white/40 text-sm">
                          {mission.duree}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Link to Piliers */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-4xl mx-auto"
          >
            <Card variant="glass" className="p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Missions par pilier
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[PILIERS.proteger, PILIERS.contenir, PILIERS.preparer].map(
                  (pilier) => (
                    <div key={pilier.id} className="text-center">
                      <h4
                        className="font-bold mb-2"
                        style={{ color: pilier.couleur }}
                      >
                        {pilier.nom}
                      </h4>
                      <p className="text-white/50 text-sm mb-2">
                        {pilier.sousTitre}
                      </p>
                      <p className="text-white/70">
                        Types {pilier.missions.join(" et ")}
                      </p>
                    </div>
                  )
                )}
              </div>
            </Card>
          </motion.div>
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
              Trouvez votre mission
            </h2>
            <p className="text-white/70 mb-8">
              Répondez à quelques questions et nous vous proposerons les missions
              les plus adaptées à votre profil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/je-veux-aider">
                Je veux m'engager
              </Button>
              <Button href="/ressources" variant="secondary">
                Consulter les ressources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
