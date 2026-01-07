"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { ChoiceIA, StructureForm } from "@/components/forms";
import type { StructureNeed } from "@/lib/types";

type Mode = "choice" | "ai" | "form";

export default function JaiBesoinPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("choice");
  const [need, setNeed] = useState<StructureNeed | null>(null);

  const handleChoice = (choice: "ai" | "form") => {
    setMode(choice);
  };

  const handleNeedComplete = (completedNeed: StructureNeed) => {
    setNeed(completedNeed);
    localStorage.setItem("structure_need", JSON.stringify(completedNeed));
    setTimeout(() => {
      router.push("/matching?type=structure");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col pt-20">
      {/* Header with back button */}
      <div className="flex-shrink-0 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden sm:inline">Retour</span>
            </Link>

            {mode !== "choice" && (
              <button
                onClick={() => setMode("choice")}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Changer de méthode
              </button>
            )}

            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="flex-shrink-0 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--sunset-orange)] to-[var(--ocean-deep)] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">J'ai besoin d'aide</h1>
              <p className="text-gray-500">
                {mode === "choice"
                  ? "Choisissez comment nous décrire vos besoins"
                  : mode === "ai"
                  ? "Discussion avec notre assistant"
                  : "Remplissez le formulaire"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full">
        {need ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full p-8 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--hope-emerald)]/20 flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-[var(--hope-emerald)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Besoin enregistré !
            </h2>
            <p className="text-gray-600 mb-4">
              Nous recherchons les meilleurs volontaires pour {need.structureName}...
            </p>
            <div className="animate-pulse text-[var(--sunset-orange)]">
              Redirection en cours...
            </div>
          </motion.div>
        ) : mode === "choice" ? (
          <ChoiceIA onChoice={handleChoice} variant="structure" />
        ) : mode === "ai" ? (
          <ChatContainer
            type="structure"
            onNeedComplete={handleNeedComplete}
            className="h-full"
          />
        ) : (
          <StructureForm onComplete={handleNeedComplete} />
        )}
      </div>
    </div>
  );
}
