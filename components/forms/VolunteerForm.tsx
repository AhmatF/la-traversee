"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Button, Badge } from "@/components/ui";
import type { VolunteerProfile } from "@/lib/types";

const SKILLS_OPTIONS = [
  { id: "business-model", label: "Modèle économique", category: "strategy" },
  { id: "strategic-planning", label: "Planification stratégique", category: "strategy" },
  { id: "project-management", label: "Gestion de projet", category: "strategy" },
  { id: "social-media", label: "Réseaux sociaux", category: "communication" },
  { id: "public-relations", label: "Relations presse", category: "communication" },
  { id: "copywriting", label: "Rédaction", category: "communication" },
  { id: "branding", label: "Design/Branding", category: "communication" },
  { id: "fundraising", label: "Levée de fonds", category: "finance" },
  { id: "accounting", label: "Comptabilité", category: "finance" },
  { id: "financial-analysis", label: "Analyse financière", category: "finance" },
  { id: "association-law", label: "Droit des associations", category: "legal" },
  { id: "gdpr", label: "RGPD", category: "legal" },
  { id: "contracts", label: "Contrats", category: "legal" },
  { id: "recruitment", label: "Recrutement", category: "hr" },
  { id: "governance", label: "Gouvernance", category: "hr" },
  { id: "impact-measurement", label: "Mesure d'impact", category: "impact" },
  { id: "website", label: "Site web", category: "digital" },
  { id: "digital-tools", label: "Outils numériques", category: "digital" },
  { id: "cybersecurity", label: "Cybersécurité", category: "digital" },
  { id: "business-continuity", label: "Plan de continuité", category: "resilience" },
  { id: "crisis-communication", label: "Communication de crise", category: "resilience" },
];

const INTERESTS = [
  { id: "insertion", label: "Insertion professionnelle" },
  { id: "environnement", label: "Environnement" },
  { id: "culture", label: "Culture" },
  { id: "sante", label: "Santé" },
  { id: "education", label: "Éducation" },
  { id: "solidarite", label: "Solidarité" },
  { id: "sport", label: "Sport" },
  { id: "droits", label: "Droits et libertés" },
];

interface VolunteerFormProps {
  onComplete: (profile: VolunteerProfile) => void;
}

export default function VolunteerForm({ onComplete }: VolunteerFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    type: "" as "student" | "professional" | "",
    school: "",
    company: "",
    jobTitle: "",
    skills: [] as string[],
    hoursPerWeek: 4,
    durationMonths: 3,
    interests: [] as string[],
    motivations: "",
    remote: true,
  });

  const totalSteps = 4;

  const updateField = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: "skills" | "interests", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.type;
      case 2:
        return formData.skills.length >= 1;
      case 3:
        return formData.hoursPerWeek >= 1;
      case 4:
        return formData.interests.length >= 1;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    const profile: VolunteerProfile = {
      id: crypto.randomUUID(),
      name: formData.name,
      type: formData.type as "student" | "professional",
      school: formData.type === "student" ? formData.school : undefined,
      company: formData.type === "professional" ? formData.company : undefined,
      jobTitle: formData.type === "professional" ? formData.jobTitle : undefined,
      skills: formData.skills,
      availability: {
        hoursPerWeek: formData.hoursPerWeek,
        durationMonths: formData.durationMonths,
      },
      interests: formData.interests,
      motivations: formData.motivations,
      preferences: {
        remote: formData.remote,
      },
      createdAt: Date.now(),
    };
    onComplete(profile);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[var(--ocean-midnight)]/60">
            Étape {step} sur {totalSteps}
          </span>
          <span className="text-sm font-medium text-[var(--ocean-midnight)]">
            {Math.round((step / totalSteps) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--sunset-orange)] to-[var(--hope-emerald)]"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Identité */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-6">
              Parlez-nous de vous
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                  Votre prénom *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all"
                  placeholder="Ex: Marie"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                  Vous êtes *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => updateField("type", "student")}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.type === "student"
                        ? "border-[var(--sunset-orange)] bg-[var(--sunset-orange)]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="block font-semibold text-[var(--ocean-midnight)]">
                      Étudiant·e
                    </span>
                    <span className="text-sm text-[var(--ocean-midnight)]/60">
                      En formation
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateField("type", "professional")}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.type === "professional"
                        ? "border-[var(--sunset-orange)] bg-[var(--sunset-orange)]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="block font-semibold text-[var(--ocean-midnight)]">
                      Professionnel·le
                    </span>
                    <span className="text-sm text-[var(--ocean-midnight)]/60">
                      En activité
                    </span>
                  </button>
                </div>
              </div>

              {formData.type === "student" && (
                <div>
                  <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                    École / Université
                  </label>
                  <input
                    type="text"
                    value={formData.school}
                    onChange={(e) => updateField("school", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all"
                    placeholder="Ex: Sciences Po Paris"
                  />
                </div>
              )}

              {formData.type === "professional" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all"
                      placeholder="Ex: Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                      Fonction
                    </label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => updateField("jobTitle", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all"
                      placeholder="Ex: Consultant·e"
                    />
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 2: Compétences */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-2">
              Vos compétences
            </h2>
            <p className="text-[var(--ocean-midnight)]/60 mb-6">
              Sélectionnez les domaines dans lesquels vous pouvez contribuer
              (au moins 1)
            </p>

            <div className="flex flex-wrap gap-2">
              {SKILLS_OPTIONS.map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => toggleArrayField("skills", skill.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.skills.includes(skill.id)
                      ? "bg-[var(--sunset-orange)] text-white"
                      : "bg-gray-100 text-[var(--ocean-midnight)]/70 hover:bg-gray-200"
                  }`}
                >
                  {skill.label}
                </button>
              ))}
            </div>

            {formData.skills.length > 0 && (
              <p className="mt-4 text-sm text-[var(--hope-emerald)]">
                {formData.skills.length} compétence{formData.skills.length > 1 ? "s" : ""}{" "}
                sélectionnée{formData.skills.length > 1 ? "s" : ""}
              </p>
            )}
          </motion.div>
        )}

        {/* Step 3: Disponibilité */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-6">
              Votre disponibilité
            </h2>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-4">
                  Heures par semaine : <span className="font-bold">{formData.hoursPerWeek}h</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={formData.hoursPerWeek}
                  onChange={(e) => updateField("hoursPerWeek", parseInt(e.target.value))}
                  className="w-full accent-[var(--sunset-orange)]"
                />
                <div className="flex justify-between text-xs text-[var(--ocean-midnight)]/50 mt-1">
                  <span>1h</span>
                  <span>20h</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-4">
                  Durée d'engagement : <span className="font-bold">{formData.durationMonths} mois</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={formData.durationMonths}
                  onChange={(e) => updateField("durationMonths", parseInt(e.target.value))}
                  className="w-full accent-[var(--sunset-orange)]"
                />
                <div className="flex justify-between text-xs text-[var(--ocean-midnight)]/50 mt-1">
                  <span>1 mois</span>
                  <span>12 mois</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-4">
                  Mode de travail préféré
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => updateField("remote", true)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.remote
                        ? "border-[var(--sunset-orange)] bg-[var(--sunset-orange)]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="block font-semibold text-[var(--ocean-midnight)]">
                      Distanciel
                    </span>
                    <span className="text-sm text-[var(--ocean-midnight)]/60">
                      Je travaille à distance
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateField("remote", false)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      !formData.remote
                        ? "border-[var(--sunset-orange)] bg-[var(--sunset-orange)]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="block font-semibold text-[var(--ocean-midnight)]">
                      Présentiel
                    </span>
                    <span className="text-sm text-[var(--ocean-midnight)]/60">
                      Je préfère me déplacer
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Motivations */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-2">
              Vos motivations
            </h2>
            <p className="text-[var(--ocean-midnight)]/60 mb-6">
              Quels secteurs vous intéressent ?
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {INTERESTS.map((interest) => (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => toggleArrayField("interests", interest.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.interests.includes(interest.id)
                      ? "bg-[var(--hope-emerald)] text-white"
                      : "bg-gray-100 text-[var(--ocean-midnight)]/70 hover:bg-gray-200"
                  }`}
                >
                  {interest.label}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                Pourquoi souhaitez-vous vous engager ? (optionnel)
              </label>
              <textarea
                value={formData.motivations}
                onChange={(e) => updateField("motivations", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all resize-none"
                rows={4}
                placeholder="Ce qui vous motive à vous engager auprès de structures ESS..."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${
            step === 1
              ? "opacity-0 pointer-events-none"
              : "text-[var(--ocean-midnight)]/70 hover:bg-gray-100"
          }`}
        >
          Retour
        </button>

        {step < totalSteps ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              canProceed()
                ? "bg-[var(--sunset-orange)] text-white hover:bg-[var(--sunset-dark)]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Suivant
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              canProceed()
                ? "bg-[var(--hope-emerald)] text-white hover:bg-[var(--hope-bright)]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Valider mon profil
          </button>
        )}
      </div>
    </div>
  );
}
