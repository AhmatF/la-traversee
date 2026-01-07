"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

type ChoiceType = "ai" | "form";

interface ChoiceIAProps {
  onChoice: (choice: ChoiceType) => void;
  variant?: "volunteer" | "structure";
}

export default function ChoiceIA({ onChoice, variant = "volunteer" }: ChoiceIAProps) {
  const isVolunteer = variant === "volunteer";

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full"
      >
        <motion.div variants={staggerItem} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--ocean-midnight)] mb-4">
            Comment souhaitez-vous procéder ?
          </h2>
          <p className="text-[var(--ocean-midnight)]/70">
            {isVolunteer
              ? "Deux façons de nous parler de vous et vos envies d'engagement"
              : "Deux façons de nous décrire votre structure et vos besoins"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Option AI */}
          <motion.div variants={staggerItem}>
            <button
              onClick={() => onChoice("ai")}
              className="w-full text-left h-full"
            >
              <Card
                hover
                className="h-full bg-white border-2 border-transparent hover:border-[var(--sunset-orange)] transition-all p-8"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--sunset-orange)] to-[var(--sunset-dark)] flex items-center justify-center mb-6">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--ocean-midnight)] mb-2">
                    Avec l'assistant IA
                  </h3>

                  <p className="text-[var(--ocean-midnight)]/60 mb-6 flex-1">
                    Une discussion naturelle avec notre assistant qui vous pose les bonnes
                    questions de manière personnalisée.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[var(--ocean-midnight)]/70">
                      <svg
                        className="w-4 h-4 text-[var(--hope-emerald)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Discussion naturelle et interactive
                    </div>
                    <div className="flex items-center gap-2 text-[var(--ocean-midnight)]/70">
                      <svg
                        className="w-4 h-4 text-[var(--hope-emerald)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Environ 5 minutes
                    </div>
                    <div className="flex items-center gap-2 text-[var(--ocean-midnight)]/70">
                      <svg
                        className="w-4 h-4 text-[var(--hope-emerald)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Utilise l'IA (Google Gemini)
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-[var(--sunset-orange)] font-semibold flex items-center gap-2">
                      Choisir cette option
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
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          </motion.div>

          {/* Option Formulaire */}
          <motion.div variants={staggerItem}>
            <button
              onClick={() => onChoice("form")}
              className="w-full text-left h-full"
            >
              <Card
                hover
                className="h-full bg-white border-2 border-transparent hover:border-[var(--ocean-deep)] transition-all p-8"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-dark)] flex items-center justify-center mb-6">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--ocean-midnight)] mb-2">
                    Formulaire classique
                  </h3>

                  <p className="text-[var(--ocean-midnight)]/60 mb-6 flex-1">
                    Un formulaire en 4 étapes avec des champs à compléter. Plus rapide,
                    sans utilisation de l'IA.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[var(--ocean-midnight)]/70">
                      <svg
                        className="w-4 h-4 text-[var(--hope-emerald)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Champs à remplir directement
                    </div>
                    <div className="flex items-center gap-2 text-[var(--ocean-midnight)]/70">
                      <svg
                        className="w-4 h-4 text-[var(--hope-emerald)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Environ 3 minutes
                    </div>
                    <div className="flex items-center gap-2 text-[var(--ocean-midnight)]/70">
                      <svg
                        className="w-4 h-4 text-[var(--hope-emerald)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Pas d'IA, données minimales
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-[var(--ocean-deep)] font-semibold flex items-center gap-2">
                      Choisir cette option
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
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          </motion.div>
        </div>

        {/* Privacy note */}
        <motion.p
          variants={staggerItem}
          className="text-center text-[var(--ocean-midnight)]/50 text-sm mt-8"
        >
          Vos données sont traitées de manière confidentielle et ne sont jamais vendues.
          <br />
          Dans les deux cas, vous pouvez revenir sur vos choix à tout moment.
        </motion.p>
      </motion.div>
    </div>
  );
}
