"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Counter } from "@/components/ui";
import { STATS } from "@/lib/constants";

export default function EspoirAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-white"
      aria-labelledby="espoir-title"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-stone-400 font-medium mb-4">
            Raisons d'espérer
          </p>
          <h2
            id="espoir-title"
            className="text-[clamp(2rem,5vw,3.5rem)] font-black text-stone-900 leading-[1.1] tracking-[-0.02em] mb-6"
          >
            On n'est pas impuissants.
          </h2>
          <p className="text-lg text-stone-600 mb-16 leading-relaxed max-w-xl">
            La recherche scientifique nous donne des raisons concrètes d'espérer.
          </p>

          {/* Two Key Stats */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
            {/* 3.5% Rule */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-l-[3px] border-emerald-500 pl-6"
            >
              <div className="text-[clamp(3.5rem,10vw,5rem)] font-black text-emerald-600 leading-none tracking-[-0.04em] tabular-nums mb-4">
                <Counter
                  end={STATS.regle35.pourcentage}
                  decimals={1}
                  suffix="%"
                />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                La règle des 3,5%
              </h3>
              <p className="text-[15px] text-stone-600 mb-4 leading-relaxed">
                Aucun mouvement pacifique n'a échoué après avoir mobilisé cette part de la population.
              </p>
              <p className="text-emerald-700 font-semibold text-sm">
                = {STATS.regle35.label} de Français
              </p>
              <p className="text-stone-400 text-xs mt-1">
                Erica Chenoweth, Harvard
              </p>
            </motion.div>

            {/* Gene Sharp Methods */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-l-[3px] border-amber-400 pl-6"
            >
              <div className="text-[clamp(3.5rem,10vw,5rem)] font-black text-amber-500 leading-none tracking-[-0.04em] tabular-nums mb-4">
                <Counter end={STATS.methodesSharp.nombre} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Méthodes non-violentes
              </h3>
              <p className="text-[15px] text-stone-600 mb-4 leading-relaxed">
                Documentées et testées dans des dizaines de pays pour défendre la démocratie.
              </p>
              <p className="text-amber-700 font-semibold text-sm">
                De la protestation à la non-coopération
              </p>
              <p className="text-stone-400 text-xs mt-1">
                Gene Sharp
              </p>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-l-[3px] border-stone-300 pl-6"
          >
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              "La résistance civile non-violente est{" "}
              <span className="text-emerald-600 font-semibold">deux fois plus efficace</span>{" "}
              que les mouvements armés."
            </p>
            <cite className="block mt-3 text-sm text-stone-500 not-italic">
              — Erica Chenoweth, "Why Civil Resistance Works"
            </cite>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
