"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ressources = [
  {
    category: "Know Your Rights",
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
              Boîte à outils
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-6">
              Ressources
            </h1>
            <p className="text-xl text-stone-600">
              Guides, outils et formations pour renforcer votre résilience
              et défendre vos droits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section ref={ref} className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {ressources.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-stone-900 mb-2">
                    {category.category}
                  </h2>
                  <p className="text-stone-500">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border border-stone-200 p-5"
                    >
                      <span className="text-xs font-medium text-amber-600 mb-2 inline-block">
                        {item.type}
                      </span>
                      <h3 className="text-stone-900 font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 text-sm mb-4">
                        {item.description}
                      </p>
                      <button className="text-stone-700 text-sm font-semibold flex items-center gap-1 hover:text-stone-900 transition-colors">
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
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gene Sharp */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-emerald-500 pl-6 md:pl-8"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <span className="text-5xl font-black text-emerald-600">198</span>
                <p className="text-stone-500 mt-1">méthodes</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Les méthodes de Gene Sharp
                </h3>
                <p className="text-stone-600 mb-4">
                  "From Dictatorship to Democracy" répertorie 198 méthodes
                  d'action non-violente testées dans le monde entier. De la
                  protestation symbolique à la non-coopération économique.
                </p>
                <a
                  href="https://www.aeinstein.org/free-resources/free-publications/english/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-semibold flex items-center gap-2 hover:text-emerald-700 transition-colors"
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
              Besoin d'accompagnement ?
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Nos volontaires peuvent vous aider à mettre en place ces outils
              et renforcer votre structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/jai-besoin"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 hover:bg-stone-100 transition-colors"
              >
                Demander de l'aide
              </Link>
              <Link
                href="/je-veux-aider"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 border-2 border-stone-700 hover:border-stone-500 transition-colors"
              >
                Devenir volontaire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
