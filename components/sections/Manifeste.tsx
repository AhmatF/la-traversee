"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const actions = [
  {
    action: "Accompagner une association à diversifier ses ressources",
    practical: "c'est de la bonne gestion",
    meaning: "c'est aussi un acte de résistance",
  },
  {
    action: "Former des étudiants à comprendre les mécanismes de l'autocratisation",
    practical: "c'est de la pédagogie",
    meaning: "c'est aussi préparer l'avenir",
  },
  {
    action: "Documenter l'impact des associations",
    practical: "c'est du reporting",
    meaning: "c'est aussi armer le plaidoyer",
  },
  {
    action: "Soutenir les associations qui défendent les droits des femmes et l'environnement",
    practical: "c'est défendre des causes",
    meaning: "c'est aussi défendre la démocratie elle-même",
  },
];

export default function Manifeste() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-stone-50"
      aria-labelledby="manifeste-title"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4">
            Notre engagement
          </p>
          <h2
            id="manifeste-title"
            className="text-4xl md:text-5xl font-black text-stone-900 leading-tight mb-6"
          >
            Ce qui dépend de nous
          </h2>
          <p className="text-xl text-stone-600 mb-16 max-w-2xl">
            Nous ne pouvons pas promettre que tout ira bien.
            Mais nous pouvons promettre ceci : <strong className="text-stone-900">nous ferons tout ce qui est en notre pouvoir.</strong>
          </p>

          {/* Actions */}
          <div className="space-y-12">
            {actions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-amber-400 pl-6"
              >
                <p className="text-lg md:text-xl text-stone-800 mb-2">
                  {item.action},
                </p>
                <p className="text-stone-500">
                  {item.practical} — <span className="text-emerald-600 font-medium">et {item.meaning}.</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <p className="text-2xl md:text-3xl font-semibold text-stone-900">
              Préparer l'ESS à traverser,
              <span className="text-emerald-600"> c'est déjà résister.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
