"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { EXEMPLES_PAYS } from "@/lib/constants";

function PaysSection({
  pays,
  index,
}: {
  pays: (typeof EXEMPLES_PAYS)[keyof typeof EXEMPLES_PAYS];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isPositive = "exemple_positif" in pays && pays.exemple_positif;

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{pays.drapeau}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-stone-900">{pays.nom}</h2>
                <p className="text-stone-500">{pays.periode}</p>
              </div>
            </div>

            {isPositive && (
              <span className="inline-block text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 mb-4">
                Exemple positif
              </span>
            )}

            <h3 className="text-xl font-bold text-stone-900 mb-4">{pays.titre}</h3>
            <p className="text-stone-600 mb-6">{pays.resume}</p>

            <div className="space-y-3">
              <h4 className="text-stone-900 font-semibold">Leçons pour la France</h4>
              {pays.lecons.map((lecon, i) => (
                <div key={i} className="flex gap-3 text-stone-600 text-sm">
                  <span
                    className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                      isPositive ? "bg-emerald-500" : "bg-red-500"
                    }`}
                  />
                  {lecon}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="border border-stone-200 p-6">
            <h4 className="text-stone-900 font-semibold mb-6">Chronologie</h4>
            <div className="space-y-4">
              {pays.timeline.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-16">
                    <span
                      className={`text-sm font-bold ${
                        isPositive && i === pays.timeline.length - 1
                          ? "text-emerald-600"
                          : "text-amber-600"
                      }`}
                    >
                      {event.annee}
                    </span>
                  </div>
                  <div className="flex-1 pb-4 border-b border-stone-200 last:border-0">
                    <p className="text-stone-600 text-sm">{event.evenement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ExemplesInternationauxPage() {
  const paysArray = Object.values(EXEMPLES_PAYS);

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
              Leçons internationales
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-6">
              Ce qui se passe ailleurs
            </h1>
            <p className="text-xl text-stone-600">
              L'autocratisation n'est pas une fatalité. Voici ce que d'autres pays nous apprennent
              — les erreurs à éviter et les succès à reproduire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-stone-900 p-6 text-center"
          >
            <p className="text-white text-lg">
              <span className="text-amber-400 font-semibold">La Pologne</span> et{" "}
              <span className="text-amber-400 font-semibold">le Brésil</span> montrent qu'avec une société
              civile mobilisée, l'alternance démocratique reste possible même après des
              années de recul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Countries */}
      {paysArray.map((pays, index) => (
        <PaysSection key={pays.nom} pays={pays} index={index} />
      ))}

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
              La France peut éviter le pire
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Ces exemples montrent qu'il est encore temps d'agir. Notre plan d'action
              s'inspire des stratégies qui ont fonctionné ailleurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/plan-action"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 hover:bg-stone-100 transition-colors"
              >
                Découvrir notre plan d'action
              </Link>
              <Link
                href="/je-veux-aider"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 border-2 border-stone-700 hover:border-stone-500 transition-colors"
              >
                Je veux m'engager
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
