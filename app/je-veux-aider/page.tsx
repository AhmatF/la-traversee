"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { ChoiceIA, VolunteerForm } from "@/components/forms";
import type { VolunteerProfile } from "@/lib/types";

type Mode = "choice" | "ai" | "form";

export default function JeVeuxAiderPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("choice");
  const [profile, setProfile] = useState<VolunteerProfile | null>(null);

  const handleChoice = (choice: "ai" | "form") => {
    setMode(choice);
  };

  const handleProfileComplete = (completedProfile: VolunteerProfile) => {
    setProfile(completedProfile);
    localStorage.setItem("volunteer_profile", JSON.stringify(completedProfile));
    setTimeout(() => {
      router.push("/matching?type=volunteer");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] flex flex-col pt-20">
      {/* Header with back button */}
      <div className="flex-shrink-0 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
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
                className="text-sm text-stone-500 hover:text-stone-700"
              >
                Changer de méthode
              </button>
            )}

            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="flex-shrink-0 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-amber-500 flex items-center justify-center">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-black text-stone-900">Je veux aider</h1>
              <p className="text-stone-500">
                {mode === "choice"
                  ? "Choisissez comment nous parler de vous"
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
        {profile ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full p-8 text-center"
          >
            <div className="w-20 h-20 bg-emerald-100 flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-emerald-600"
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
            <h2 className="text-2xl font-black text-stone-900 mb-2">
              Profil complété !
            </h2>
            <p className="text-stone-600 mb-4">
              Super {profile.name} ! On cherche les meilleures missions pour toi...
            </p>
            <div className="animate-pulse text-amber-600">
              Redirection en cours...
            </div>
          </motion.div>
        ) : mode === "choice" ? (
          <ChoiceIA onChoice={handleChoice} variant="volunteer" />
        ) : mode === "ai" ? (
          <ChatContainer
            type="volunteer"
            onProfileComplete={handleProfileComplete}
            className="h-full"
          />
        ) : (
          <VolunteerForm onComplete={handleProfileComplete} />
        )}
      </div>
    </div>
  );
}
