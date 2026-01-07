"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const histoires = [
  {
    pays: "Pologne",
    titre: "La société civile a tenu",
    histoire: "Après huit années de gouvernement illibéral, les associations qui avaient survécu, diversifié leurs ressources, tissé des alliances larges, étaient prêtes quand le vent a tourné en 2023.",
    highlight: "Les femmes mobilisées contre l'interdiction de l'avortement ont été le fer de lance de l'alternance.",
  },
  {
    pays: "Brésil",
    titre: "La bataille de la vérité",
    histoire: "Les ONG environnementales ont produit leurs propres données, forçant le monde entier à voir ce que le gouvernement tentait de cacher.",
    highlight: "Face à la désinformation, la rigueur scientifique comme arme.",
  },
  {
    pays: "États-Unis",
    titre: "S'organiser pour protéger",
    histoire: "Face aux rafles et à l'assaut sur les droits reproductifs, des communautés entières se sont organisées. Elles n'ont pas tout empêché — mais elles ont ralenti, documenté, maintenu l'espoir.",
    highlight: "Les réseaux d'entraide continuent malgré la répression.",
  },
  {
    pays: "Hongrie",
    titre: "Tenir sans l'État",
    histoire: "Malgré quinze ans de pouvoir autoritaire, des ONG tiennent encore. Elles ont appris à mobiliser des citoyens ordinaires, à construire des coalitions improbables.",
    highlight: "Elles préparent l'après.",
  },
];

export default function HistoiresResistance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-[#FFFDF8]"
      aria-labelledby="histoires-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4">
            Ils l'ont fait
          </p>
          <h2
            id="histoires-title"
            className="text-4xl md:text-5xl font-black text-stone-900 leading-tight mb-6"
          >
            Histoires de résistance
          </h2>
          <p className="text-xl text-stone-600 mb-16 max-w-2xl">
            Partout dans le monde, des sociétés civiles ont tenu face à l'autocratisation.
          </p>

          {/* Stories grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {histoires.map((histoire, index) => (
              <motion.article
                key={histoire.pays}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t-2 border-stone-200 pt-6"
              >
                <p className="text-sm uppercase tracking-wider text-stone-400 mb-2">
                  {histoire.pays}
                </p>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {histoire.titre}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {histoire.histoire}
                </p>
                <p className="text-emerald-700 font-medium text-sm border-l-2 border-emerald-400 pl-4">
                  {histoire.highlight}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Bottom insight */}
          <div className="mt-16 p-6 bg-stone-900 text-white">
            <p className="text-lg md:text-xl">
              <span className="text-amber-400 font-semibold">La Pologne et le Brésil</span> nous montrent qu'avec une société civile mobilisée, l'alternance reste possible.
            </p>
          </div>

          {/* CTA to case studies */}
          <div className="mt-8">
            <Link
              href="/exemples-internationaux"
              className="inline-flex items-center gap-2 text-stone-700 font-semibold hover:text-stone-900 transition-colors"
            >
              Découvrir les études de cas détaillées
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
