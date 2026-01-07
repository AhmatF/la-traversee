"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge, Card, Counter, Button, IconBox } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { STATS } from "@/lib/constants";

export default function ComprendrePage() {
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
              <Badge variant="urgence" pulse className="mb-6">
                Analyse de la situation
              </Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              Comprendre la situation
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              L'espace civique français traverse une crise sans précédent. Voici les faits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CIVICUS Downgrade */}
      <section className="section-padding bg-[var(--urgency-surface)]">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-4xl mx-auto"
          >
            <Card variant="urgence" className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-[var(--urgency-red)]/20 flex items-center justify-center">
                    <span className="text-5xl font-black text-[var(--urgency-red)]">
                      !
                    </span>
                  </div>
                </div>
                <div>
                  <Badge variant="urgence" className="mb-4">
                    {STATS.civicus.dateDowngrade}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    La France dégradée par CIVICUS
                  </h2>
                  <p className="text-white/70 mb-4">
                    L'observatoire international des libertés civiques a rétrogradé la France
                    de la catégorie <span className="text-white font-semibold">"Rétréci"</span> à{" "}
                    <span className="text-[var(--urgency-red)] font-bold">"Obstrué"</span>.
                  </p>
                  <p className="text-white/60 text-sm">
                    Cela place la France au même niveau que des pays comme la Hongrie ou la Pologne
                    sous le gouvernement PiS, où les libertés fondamentales sont significativement entravées.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              Les chiffres de la crise
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div variants={staggerItem}>
                <Card variant="urgence" className="text-center h-full">
                  <div className="urgence-stat text-5xl mb-4">
                    <Counter
                      end={STATS.coupeBudgetaire.montant}
                      decimals={2}
                      suffix=" Mds€"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Coupes budgétaires
                  </h3>
                  <p className="text-white/60 text-sm">
                    Prévues pour l'Économie Sociale et Solidaire en 2025, affectant
                    directement les associations, mutuelles et coopératives.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Card variant="urgence" className="text-center h-full">
                  <div className="urgence-stat text-5xl mb-4">
                    <Counter end={STATS.emploisMenaces.nombre} separator=" " />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Emplois menacés
                  </h3>
                  <p className="text-white/60 text-sm">
                    Dans le secteur ESS, soit des postes essentiels pour l'aide aux
                    plus vulnérables, la culture, et l'action sociale.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Card variant="urgence" className="text-center h-full">
                  <div className="urgence-stat text-5xl mb-4">
                    <Counter end={STATS.interpellations.nombre} suffix="+" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Interpellations
                  </h3>
                  <p className="text-white/60 text-sm">
                    Lors de manifestations pacifiques en 2023, témoignant d'un
                    durcissement sécuritaire préoccupant.
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CER Explanation */}
      <section className="section-padding bg-[var(--urgency-surface)]">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Le Contrat d'Engagement Républicain
              </h2>
              <p className="text-white/60">
                Un outil de contrôle qui pèse sur la liberté associative
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-6"
            >
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
                <motion.div key={index} variants={staggerItem}>
                  <Card hover className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[var(--urgency-red)]/20 flex items-center justify-center">
                        <span className="text-[var(--urgency-red)] font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Et maintenant ?
            </h2>
            <p className="text-white/70 mb-8">
              Ces constats sont alarmants, mais l'histoire nous montre que la mobilisation
              citoyenne peut inverser la tendance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/exemples-internationaux">
                Voir les exemples internationaux
              </Button>
              <Button href="/plan-action" variant="secondary">
                Découvrir notre plan d'action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
