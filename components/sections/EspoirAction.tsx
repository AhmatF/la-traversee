"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Counter } from "@/components/ui";
import { STATS } from "@/lib/constants";

export default function EspoirAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-stone-50"
      aria-labelledby="espoir-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4">
            Raisons d'espérer
          </p>
          <h2
            id="espoir-title"
            className="text-4xl md:text-5xl font-black text-stone-900 leading-tight mb-6"
          >
            On n'est pas impuissants
          </h2>
          <p className="text-xl text-stone-600 mb-16 max-w-2xl">
            La recherche scientifique nous donne des raisons concrètes d'espérer et d'agir.
          </p>

          {/* Two Key Stats */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* 3.5% Rule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-emerald-500 pt-6"
            >
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4 tabular-nums">
                <Counter
                  end={STATS.regle35.pourcentage}
                  decimals={1}
                  suffix="%"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                La règle des 3,5%
              </h3>
              <p className="text-stone-600 mb-4">
                Aucun mouvement pacifique n'a échoué après avoir mobilisé cette part de la population.
              </p>
              <div className="bg-emerald-50 p-4 border-l-2 border-emerald-500">
                <p className="text-emerald-700 font-semibold">
                  = {STATS.regle35.label} de Français
                </p>
                <p className="text-stone-500 text-sm mt-1">
                  Source: Erica Chenoweth, Harvard
                </p>
              </div>
            </motion.div>

            {/* Gene Sharp Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-amber-400 pt-6"
            >
              <div className="text-5xl md:text-6xl font-black text-amber-500 mb-4 tabular-nums">
                <Counter end={STATS.methodesSharp.nombre} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Méthodes d'action non-violente
              </h3>
              <p className="text-stone-600 mb-4">
                Documentées et testées dans des dizaines de pays pour défendre la démocratie.
              </p>
              <div className="bg-amber-50 p-4 border-l-2 border-amber-400">
                <p className="text-amber-700 font-semibold">
                  De la protestation à la non-coopération
                </p>
                <p className="text-stone-500 text-sm mt-1">
                  Source: Gene Sharp
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <blockquote className="max-w-3xl border-l-4 border-stone-300 pl-6">
            <p className="text-xl md:text-2xl text-stone-700 italic">
              "La résistance civile non-violente est{" "}
              <span className="text-emerald-600 font-semibold not-italic">deux fois plus efficace</span>{" "}
              que les mouvements armés."
            </p>
            <cite className="block mt-4 text-stone-500 not-italic">
              — Erica Chenoweth, "Why Civil Resistance Works"
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
