"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { VolunteerProfile, StructureNeed, MatchResult, CATEGORY_INFO } from "@/lib/types";

// Demo data for matches
const DEMO_VOLUNTEER_MATCHES: MatchResult[] = [
  {
    id: "1",
    volunteerId: "v1",
    volunteer: {} as VolunteerProfile,
    needId: "n1",
    need: {
      id: "n1",
      structureName: "Restos du Coeur - Antenne Paris 11",
      sector: "insertion",
      description: "Besoin d'aide pour restructurer notre stratégie de communication digitale et nos réseaux sociaux",
      skillsNeeded: ["social-media", "copywriting", "branding"],
      category: "communication",
      tags: ["communication", "digital", "réseaux sociaux"],
      urgency: "3_months",
      capacity: { canHost: true, supervisionLevel: "medium" },
      location: "Paris 11e",
      remote: true,
      createdAt: Date.now(),
    },
    scores: { skills: 92, availability: 85, motivation: 88, experience: 75, total: 87 },
    explanation: "Cette mission correspond parfaitement à tes compétences en communication digitale. L'équipe des Restos du Coeur recherche quelqu'un pour moderniser leur présence en ligne.",
    createdAt: Date.now(),
  },
  {
    id: "2",
    volunteerId: "v1",
    volunteer: {} as VolunteerProfile,
    needId: "n2",
    need: {
      id: "n2",
      structureName: "Emmaüs Solidarité",
      sector: "insertion",
      description: "Accompagnement sur la mise en place d'un plan de continuité d'activité",
      skillsNeeded: ["business-continuity", "strategic-planning", "project-management"],
      category: "resilience",
      tags: ["résilience", "stratégie", "organisation"],
      urgency: "planned",
      capacity: { canHost: true, supervisionLevel: "high" },
      location: "Paris",
      remote: false,
      createdAt: Date.now(),
    },
    scores: { skills: 78, availability: 90, motivation: 82, experience: 70, total: 80 },
    explanation: "Mission stratégique au sein d'Emmaüs. Ton profil analytique serait un atout pour les aider à construire leur résilience organisationnelle.",
    createdAt: Date.now(),
  },
  {
    id: "3",
    volunteerId: "v1",
    volunteer: {} as VolunteerProfile,
    needId: "n3",
    need: {
      id: "n3",
      structureName: "La Cimade",
      sector: "solidarité internationale",
      description: "Aide juridique pour la mise en conformité RGPD et audit des pratiques de collecte de données",
      skillsNeeded: ["gdpr", "compliance", "association-law"],
      category: "legal",
      tags: ["juridique", "RGPD", "conformité"],
      urgency: "immediate",
      capacity: { canHost: false, supervisionLevel: "autonomous" },
      location: "Lyon",
      remote: true,
      createdAt: Date.now(),
    },
    scores: { skills: 65, availability: 75, motivation: 90, experience: 60, total: 72 },
    explanation: "La Cimade a besoin d'expertise juridique. Bien que tu sois en développement sur ce sujet, ta motivation pour les causes sociales serait un plus.",
    warnings: ["Sujet technique, formation interne disponible"],
    createdAt: Date.now(),
  },
];

const DEMO_STRUCTURE_MATCHES = [
  {
    id: "1",
    name: "Marie Dupont",
    type: "student" as const,
    school: "Sciences Po Paris",
    skills: ["social-media", "copywriting", "strategic-planning"],
    availability: { hoursPerWeek: 10, durationMonths: 4 },
    score: 92,
    explanation: "Étudiante en Master Communication, Marie a déjà réalisé une mission similaire et dispose d'excellentes références.",
  },
  {
    id: "2",
    name: "Thomas Martin",
    type: "professional" as const,
    company: "Accenture",
    jobTitle: "Consultant Senior",
    skills: ["strategic-planning", "project-management", "financial-analysis"],
    availability: { hoursPerWeek: 8, durationMonths: 3 },
    score: 85,
    explanation: "10 ans d'expérience en conseil stratégique. Thomas souhaite mettre ses compétences au service de l'ESS.",
  },
  {
    id: "3",
    name: "Léa Bernard",
    type: "student" as const,
    school: "HEC Paris",
    skills: ["fundraising", "accounting", "grant-writing"],
    availability: { hoursPerWeek: 12, durationMonths: 6 },
    score: 78,
    explanation: "Spécialisée en finance sociale, Léa prépare un mémoire sur le financement des associations.",
  },
];

function MatchingContent() {
  const searchParams = useSearchParams();
  const matchType = searchParams.get("type") || "volunteer";
  const isVolunteer = matchType === "volunteer";

  const [profile, setProfile] = useState<VolunteerProfile | null>(null);
  const [need, setNeed] = useState<StructureNeed | null>(null);

  useEffect(() => {
    // Load from localStorage
    if (isVolunteer) {
      const stored = localStorage.getItem("volunteer_profile");
      if (stored) setProfile(JSON.parse(stored));
    } else {
      const stored = localStorage.getItem("structure_need");
      if (stored) setNeed(JSON.parse(stored));
    }
  }, [isVolunteer]);

  const matches = isVolunteer ? DEMO_VOLUNTEER_MATCHES : DEMO_STRUCTURE_MATCHES;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href={isVolunteer ? "/je-veux-aider" : "/jai-besoin"}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Retour</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">Résilience Connect</span>
            </div>

            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2">
            <Sparkles className="w-4 h-4" />
            Résultats du matching IA
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isVolunteer
              ? `${matches.length} missions correspondent à ton profil`
              : `${matches.length} volontaires correspondent à votre besoin`}
          </h1>
          <p className="text-gray-600">
            {isVolunteer
              ? "Voici les structures qui ont besoin de tes compétences"
              : "Voici les profils les plus adaptés à votre demande"}
          </p>
        </motion.div>

        {/* Matches Grid */}
        <div className="space-y-6">
          {isVolunteer
            ? DEMO_VOLUNTEER_MATCHES.map((match, index) => (
                <MatchCardVolunteer key={match.id} match={match} index={index} />
              ))
            : DEMO_STRUCTURE_MATCHES.map((match, index) => (
                <MatchCardStructure key={match.id} match={match} index={index} />
              ))}
        </div>
      </main>
    </div>
  );
}

function MatchCardVolunteer({ match, index }: { match: MatchResult; index: number }) {
  const urgencyColors = {
    immediate: "bg-red-100 text-red-700",
    "3_months": "bg-yellow-100 text-yellow-700",
    planned: "bg-green-100 text-green-700",
  };
  const urgencyLabels = {
    immediate: "Urgent",
    "3_months": "Dans 3 mois",
    planned: "Planifié",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {match.need.structureName}
              </h3>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {match.need.location}
                </span>
                {match.need.remote && (
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
                    Télétravail possible
                  </span>
                )}
              </div>
            </div>
            <span className={cn("px-3 py-1 rounded-full text-xs font-medium", urgencyColors[match.need.urgency])}>
              {urgencyLabels[match.need.urgency]}
            </span>
          </div>

          <p className="text-gray-600 mb-4">{match.need.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {match.need.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                #{tag}
              </span>
            ))}
          </div>

          <div className="p-4 bg-blue-50 rounded-xl">
            <div className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">{match.explanation}</p>
            </div>
            {match.warnings && match.warnings.length > 0 && (
              <p className="text-xs text-blue-600 mt-2 pl-7">
                ⚠️ {match.warnings.join(", ")}
              </p>
            )}
          </div>
        </div>

        {/* Right: Score & CTA */}
        <div className="lg:w-48 flex flex-col items-center justify-between py-2">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-blue-600 mb-1">{match.scores.total}%</div>
            <div className="text-sm text-gray-500">Compatibilité</div>
          </div>

          <div className="w-full space-y-2">
            <a
              href={`https://wa.me/33612345678?text=${encodeURIComponent(
                `Bonjour ! Je suis intéressé(e) par la mission "${match.need.description.slice(0, 50)}..." chez ${match.need.structureName}. Je vous contacte via Résilience Connect.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://calendly.com/alteractions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Prendre RDV
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MatchCardStructure({
  match,
  index,
}: {
  match: (typeof DEMO_STRUCTURE_MATCHES)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                {match.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{match.name}</h3>
                <p className="text-gray-500">
                  {match.type === "student"
                    ? `Étudiant(e) - ${match.school}`
                    : `${match.jobTitle} - ${match.company}`}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {match.availability.hoursPerWeek}h/semaine
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {match.availability.durationMonths} mois
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {match.skills.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs">
                {skill}
              </span>
            ))}
          </div>

          <div className="p-4 bg-orange-50 rounded-xl">
            <div className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-orange-800">{match.explanation}</p>
            </div>
          </div>
        </div>

        {/* Right: Score & CTA */}
        <div className="lg:w-48 flex flex-col items-center justify-between py-2">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-orange-500 mb-1">{match.score}%</div>
            <div className="text-sm text-gray-500">Compatibilité</div>
          </div>

          <div className="w-full space-y-2">
            <a
              href={`https://wa.me/33612345678?text=${encodeURIComponent(
                `Bonjour ${match.name} ! Nous avons vu votre profil sur Résilience Connect et aimerions discuter d'une mission avec vous.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://calendly.com/alteractions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Prendre RDV
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MatchingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
      <MatchingContent />
    </Suspense>
  );
}
