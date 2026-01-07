"use client";

import { motion } from "framer-motion";
import { Badge, Card, Button, IconBox } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const ressources = [
  {
    category: "Know Your Rights",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    description: "Guides pratiques sur vos droits en tant qu'association ou citoyen",
    items: [
      {
        title: "Liberté de manifester",
        description: "Vos droits lors des manifestations et en cas d'interpellation",
        type: "Guide PDF",
      },
      {
        title: "Contrat d'Engagement Républicain",
        description: "Ce que vous pouvez et ne pouvez pas faire, questions-réponses",
        type: "FAQ",
      },
      {
        title: "Protection des données associatives",
        description: "RGPD appliqué aux associations et protection de vos membres",
        type: "Guide PDF",
      },
    ],
  },
  {
    category: "Outils de résilience",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Méthodes et outils pour renforcer votre organisation",
    items: [
      {
        title: "Plan de Continuité d'Activité",
        description: "Template et guide pour préparer votre PCA",
        type: "Template",
      },
      {
        title: "Diversification financière",
        description: "Stratégies pour réduire la dépendance aux subventions",
        type: "Guide",
      },
      {
        title: "Communication de crise",
        description: "Préparer et gérer la communication en situation difficile",
        type: "Checklist",
      },
    ],
  },
  {
    category: "Formation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description: "Ressources pour se former et former ses équipes",
    items: [
      {
        title: "Action non-violente 101",
        description: "Introduction aux 198 méthodes de Gene Sharp",
        type: "Cours",
      },
      {
        title: "Plaidoyer efficace",
        description: "Techniques de plaidoyer pour influencer les décideurs",
        type: "Webinaire",
      },
      {
        title: "Mobilisation citoyenne",
        description: "Organiser et mobiliser autour de votre cause",
        type: "Guide",
      },
    ],
  },
  {
    category: "Veille et alertes",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    description: "Restez informé des évolutions législatives et politiques",
    items: [
      {
        title: "Newsletter mensuelle",
        description: "Veille sur l'espace civique français et européen",
        type: "Newsletter",
      },
      {
        title: "Alertes législatives",
        description: "Notifications sur les textes de loi impactant l'ESS",
        type: "Alertes",
      },
      {
        title: "Rapports CIVICUS",
        description: "Accès aux rapports de monitoring internationaux",
        type: "Liens externes",
      },
    ],
  },
];

export default function RessourcesPage() {
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
                Boîte à outils
              </Badge>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              Ressources
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Guides, outils et formations pour renforcer votre résilience
              et défendre vos droits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-16"
          >
            {ressources.map((category, catIndex) => (
              <motion.div key={category.category} variants={staggerItem}>
                <div className="flex items-center gap-4 mb-6">
                  <IconBox variant="default" size="md">
                    {category.icon}
                  </IconBox>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {category.category}
                    </h2>
                    <p className="text-white/60">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} hover className="h-full">
                      <div className="flex flex-col h-full">
                        <Badge variant="default" className="mb-3 self-start">
                          {item.type}
                        </Badge>
                        <h3 className="text-white font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/60 text-sm flex-1">
                          {item.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <button className="text-[var(--sunset-orange)] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                            Accéder
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gene Sharp */}
      <section className="section-padding bg-[var(--urgency-surface)]">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="max-w-4xl mx-auto"
          >
            <Card variant="espoir" className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 text-center">
                  <span className="text-6xl font-black text-[var(--hope-emerald)]">
                    198
                  </span>
                  <p className="text-[var(--ocean-midnight)]/70 mt-2">méthodes</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--ocean-midnight)] mb-2">
                    Les méthodes de Gene Sharp
                  </h3>
                  <p className="text-[var(--ocean-midnight)]/70 mb-4">
                    "From Dictatorship to Democracy" répertorie 198 méthodes
                    d'action non-violente testées dans le monde entier. De la
                    protestation symbolique à la non-coopération économique.
                  </p>
                  <a
                    href="https://www.aeinstein.org/free-resources/free-publications/english/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--hope-emerald)] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Télécharger le livre (gratuit)
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
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
              Besoin d'accompagnement ?
            </h2>
            <p className="text-white/70 mb-8">
              Nos volontaires peuvent vous aider à mettre en place ces outils
              et renforcer votre structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/jai-besoin">
                Demander de l'aide
              </Button>
              <Button href="/je-veux-aider" variant="secondary">
                Devenir volontaire
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
