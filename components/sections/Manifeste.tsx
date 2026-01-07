"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const actions = [
  {
    action: "Accompagner une association à diversifier ses ressources",
    practical: "de la bonne gestion",
    meaning: "un acte de résistance",
  },
  {
    action: "Former des étudiants à comprendre l'autocratisation",
    practical: "de la pédagogie",
    meaning: "préparer l'avenir",
  },
  {
    action: "Documenter l'impact des associations",
    practical: "du reporting",
    meaning: "armer le plaidoyer",
  },
  {
    action: "Soutenir ceux qui défendent droits et environnement",
    practical: "défendre des causes",
    meaning: "défendre la démocratie",
  },
];

export default function Manifeste() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-white"
      aria-labelledby="manifeste-title"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Header */}
          <p className="text-[11px] uppercase tracking-[0.35em] text-stone-400 font-medium mb-4">
            Notre engagement
          </p>
          <h2
            id="manifeste-title"
            className="text-[clamp(2rem,5vw,3.5rem)] font-black text-stone-900 leading-[1.1] tracking-[-0.02em] mb-6"
          >
            Ce qui dépend de nous.
          </h2>
          <p className="text-lg text-stone-600 mb-16 leading-relaxed max-w-2xl">
            Nous ne pouvons pas promettre que tout ira bien.
            Mais nous ferons tout ce qui est en notre pouvoir.
          </p>

          {/* Actions */}
          <div className="space-y-10">
            {actions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="border-l-[3px] border-amber-400/80 pl-6"
              >
                <p className="text-[17px] md:text-lg text-stone-800 leading-snug mb-2">
                  {item.action},
                </p>
                <p className="text-[15px] text-stone-500">
                  c'est {item.practical}
                  <span className="mx-2 text-stone-300">—</span>
                  <span className="text-emerald-600 font-medium">et c'est aussi {item.meaning}.</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-stone-200"
          >
            <p className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-[-0.01em]">
              Préparer l'ESS à traverser,
              <span className="text-emerald-600"> c'est déjà résister.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
