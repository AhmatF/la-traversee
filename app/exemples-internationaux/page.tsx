"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge, Card, Button } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { EXEMPLES_PAYS } from "@/lib/constants";

function PaysSection({
  pays,
  index,
}: {
  pays: (typeof EXEMPLES_PAYS)[keyof typeof EXEMPLES_PAYS];
  index: number;
}) {
  const isPositive = "exemple_positif" in pays && pays.exemple_positif;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      className={`section-padding ${
        index % 2 === 0 ? "bg-[var(--urgency-bg)]" : "bg-[var(--urgency-surface)]"
      }`}
    >
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Info */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{pays.drapeau}</span>
                <div>
                  <h2 className="text-3xl font-bold text-white">{pays.nom}</h2>
                  <p className="text-white/60">{pays.periode}</p>
                </div>
              </div>

              {isPositive && (
                <Badge variant="espoir" className="mb-4">
                  Exemple positif
                </Badge>
              )}

              <h3 className="text-xl font-bold text-white mb-4">{pays.titre}</h3>
              <p className="text-white/70 mb-6">{pays.resume}</p>

              <div className="space-y-3">
                <h4 className="text-white font-semibold">Leçons pour la France</h4>
                {pays.lecons.map((lecon, i) => (
                  <div key={i} className="flex gap-3 text-white/60 text-sm">
                    <span
                      className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                        isPositive ? "bg-[var(--hope-emerald)]" : "bg-[var(--urgency-red)]"
                      }`}
                    />
                    {lecon}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="lg:w-1/2">
              <Card hover={false} className="p-6">
                <h4 className="text-white font-semibold mb-6">Chronologie</h4>
                <div className="space-y-4">
                  {pays.timeline.map((event, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-16">
                        <span
                          className={`text-sm font-bold ${
                            isPositive && i === pays.timeline.length - 1
                              ? "text-[var(--hope-emerald)]"
                              : "text-[var(--sunset-orange)]"
                          }`}
                        >
                          {event.annee}
                        </span>
                      </div>
                      <div className="flex-1 pb-4 border-b border-white/10 last:border-0">
                        <p className="text-white/70 text-sm">{event.evenement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ExemplesInternationauxPage() {
  const paysArray = Object.values(EXEMPLES_PAYS);

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
                Leçons internationales
              </Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              Ce qui se passe ailleurs
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              L'autocratisation n'est pas une fatalité. Voici ce que d'autres pays nous apprennent
              — les erreurs à éviter et les succès à reproduire.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-3xl mx-auto"
          >
            <Card variant="glass" className="p-6 text-center">
              <p className="text-white/80">
                🇵🇱 <span className="font-semibold">La Pologne</span> et 🇧🇷{" "}
                <span className="font-semibold">le Brésil</span> montrent qu'avec une société
                civile mobilisée, l'alternance démocratique reste possible même après des
                années de recul.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Countries */}
      {paysArray.map((pays, index) => (
        <PaysSection key={pays.nom} pays={pays} index={index} />
      ))}

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
              La France peut éviter le pire
            </h2>
            <p className="text-white/70 mb-8">
              Ces exemples montrent qu'il est encore temps d'agir. Notre plan d'action
              s'inspire des stratégies qui ont fonctionné ailleurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/plan-action">
                Découvrir notre plan d'action
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
