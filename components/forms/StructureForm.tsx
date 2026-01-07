"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StructureNeed } from "@/lib/types";

const SECTORS = [
  { id: "insertion", label: "Insertion professionnelle" },
  { id: "environnement", label: "Environnement" },
  { id: "culture", label: "Culture" },
  { id: "sante", label: "Santé" },
  { id: "education", label: "Éducation" },
  { id: "solidarite", label: "Solidarité" },
  { id: "sport", label: "Sport" },
  { id: "droits", label: "Droits et libertés" },
];

const SKILLS_NEEDED = [
  { id: "business-model", label: "Modèle économique" },
  { id: "strategic-planning", label: "Stratégie" },
  { id: "project-management", label: "Gestion de projet" },
  { id: "social-media", label: "Réseaux sociaux" },
  { id: "public-relations", label: "Relations presse" },
  { id: "copywriting", label: "Rédaction" },
  { id: "branding", label: "Design/Branding" },
  { id: "fundraising", label: "Levée de fonds" },
  { id: "accounting", label: "Comptabilité" },
  { id: "financial-analysis", label: "Analyse financière" },
  { id: "association-law", label: "Droit des associations" },
  { id: "gdpr", label: "RGPD" },
  { id: "recruitment", label: "Recrutement/RH" },
  { id: "governance", label: "Gouvernance" },
  { id: "impact-measurement", label: "Mesure d'impact" },
  { id: "website", label: "Site web" },
  { id: "digital-tools", label: "Outils numériques" },
  { id: "cybersecurity", label: "Cybersécurité" },
  { id: "business-continuity", label: "Plan de continuité" },
  { id: "crisis-communication", label: "Communication de crise" },
];

const URGENCY_OPTIONS = [
  { id: "immediate", label: "Immédiat", description: "Dans le mois" },
  { id: "3_months", label: "3 mois", description: "Dans les 3 prochains mois" },
  { id: "planned", label: "Planifié", description: "Pas de deadline strict" },
];

interface StructureFormProps {
  onComplete: (need: StructureNeed) => void;
}

export default function StructureForm({ onComplete }: StructureFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    structureName: "",
    sector: "",
    size: "",
    location: "",
    description: "",
    context: "",
    skillsNeeded: [] as string[],
    urgency: "3_months",
    remote: true,
    supervisionLevel: "medium" as "high" | "medium" | "autonomous",
  });

  const totalSteps = 4;

  const updateField = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skillId: string) => {
    setFormData((prev) => ({
      ...prev,
      skillsNeeded: prev.skillsNeeded.includes(skillId)
        ? prev.skillsNeeded.filter((s) => s !== skillId)
        : [...prev.skillsNeeded, skillId],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.structureName && formData.sector;
      case 2:
        return formData.description.length >= 20;
      case 3:
        return formData.skillsNeeded.length >= 1;
      case 4:
        return formData.urgency;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    const need: StructureNeed = {
      id: crypto.randomUUID(),
      structureName: formData.structureName,
      sector: formData.sector,
      description: formData.description,
      skillsNeeded: formData.skillsNeeded,
      category: "strategy",
      tags: formData.skillsNeeded,
      urgency: formData.urgency as "immediate" | "3_months" | "planned",
      capacity: {
        canHost: !formData.remote,
        supervisionLevel: formData.supervisionLevel,
      },
      location: formData.location || undefined,
      remote: formData.remote,
      createdAt: Date.now(),
    };
    onComplete(need);
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
        {/* Step 1: Structure */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-6">
              Votre structure
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                  Nom de la structure *
                </label>
                <input
                  type="text"
                  value={formData.structureName}
                  onChange={(e) => updateField("structureName", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all"
                  placeholder="Ex: Association Exemple"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                  Secteur d'activité *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SECTORS.map((sector) => (
                    <button
                      key={sector.id}
                      type="button"
                      onClick={() => updateField("sector", sector.id)}
                      className={`p-3 rounded-xl border-2 text-left text-sm transition-all ${
                        formData.sector === sector.id
                          ? "border-[var(--sunset-orange)] bg-[var(--sunset-orange)]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {sector.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                    Taille
                  </label>
                  <select
                    value={formData.size}
                    onChange={(e) => updateField("size", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all"
                  >
                    <option value="">Sélectionner</option>
                    <option value="1-5">1-5 personnes</option>
                    <option value="6-20">6-20 personnes</option>
                    <option value="21-50">21-50 personnes</option>
                    <option value="50+">Plus de 50</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                    Localisation
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all"
                    placeholder="Ex: Paris"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Besoin */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-2">
              Votre besoin
            </h2>
            <p className="text-[var(--ocean-midnight)]/60 mb-6">
              Décrivez le plus précisément possible ce sur quoi vous avez besoin d'aide
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                  Description du besoin *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all resize-none"
                  rows={5}
                  placeholder="Ex: Nous cherchons quelqu'un pour nous aider à restructurer notre modèle économique et diversifier nos sources de financement..."
                />
                <p className="mt-2 text-sm text-[var(--ocean-midnight)]/50">
                  Minimum 20 caractères ({formData.description.length}/20)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-2">
                  Contexte (optionnel)
                </label>
                <textarea
                  value={formData.context}
                  onChange={(e) => updateField("context", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--sunset-orange)] focus:ring-2 focus:ring-[var(--sunset-orange)]/20 outline-none transition-all resize-none"
                  rows={3}
                  placeholder="Pourquoi maintenant ? Quel est le contexte de cette demande ?"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Compétences */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-2">
              Compétences recherchées
            </h2>
            <p className="text-[var(--ocean-midnight)]/60 mb-6">
              Sélectionnez les compétences dont vous avez besoin (au moins 1)
            </p>

            <div className="flex flex-wrap gap-2">
              {SKILLS_NEEDED.map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => toggleSkill(skill.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.skillsNeeded.includes(skill.id)
                      ? "bg-[var(--sunset-orange)] text-white"
                      : "bg-gray-100 text-[var(--ocean-midnight)]/70 hover:bg-gray-200"
                  }`}
                >
                  {skill.label}
                </button>
              ))}
            </div>

            {formData.skillsNeeded.length > 0 && (
              <p className="mt-4 text-sm text-[var(--hope-emerald)]">
                {formData.skillsNeeded.length} compétence
                {formData.skillsNeeded.length > 1 ? "s" : ""} sélectionnée
                {formData.skillsNeeded.length > 1 ? "s" : ""}
              </p>
            )}
          </motion.div>
        )}

        {/* Step 4: Modalités */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold text-[var(--ocean-midnight)] mb-6">
              Modalités
            </h2>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-4">
                  Urgence *
                </label>
                <div className="space-y-3">
                  {URGENCY_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => updateField("urgency", option.id)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        formData.urgency === option.id
                          ? "border-[var(--sunset-orange)] bg-[var(--sunset-orange)]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="block font-semibold text-[var(--ocean-midnight)]">
                        {option.label}
                      </span>
                      <span className="text-sm text-[var(--ocean-midnight)]/60">
                        {option.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-4">
                  Préférence de travail
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
                      Distanciel OK
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
                      Présentiel requis
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--ocean-midnight)] mb-4">
                  Niveau d'encadrement possible
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "high", label: "Élevé" },
                    { id: "medium", label: "Modéré" },
                    { id: "autonomous", label: "Autonomie" },
                  ].map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => updateField("supervisionLevel", level.id)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        formData.supervisionLevel === level.id
                          ? "border-[var(--sunset-orange)] bg-[var(--sunset-orange)]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-sm font-medium text-[var(--ocean-midnight)]">
                        {level.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
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
            Envoyer ma demande
          </button>
        )}
      </div>
    </div>
  );
}
