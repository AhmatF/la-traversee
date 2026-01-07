// ============================================
// TYPES FOR RÉSILIENCE CONNECT
// ============================================

// Skills taxonomy
export type SkillCategory =
  | "strategy"
  | "communication"
  | "finance"
  | "legal"
  | "hr"
  | "impact"
  | "digital"
  | "resilience";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

// Pre-defined skills
export const SKILLS: Skill[] = [
  // Strategy
  { id: "business-model", name: "Modèle économique", category: "strategy" },
  { id: "strategic-planning", name: "Planification stratégique", category: "strategy" },
  { id: "project-management", name: "Gestion de projet", category: "strategy" },
  { id: "development", name: "Développement", category: "strategy" },

  // Communication
  { id: "social-media", name: "Réseaux sociaux", category: "communication" },
  { id: "public-relations", name: "Relations presse", category: "communication" },
  { id: "copywriting", name: "Rédaction", category: "communication" },
  { id: "branding", name: "Identité visuelle", category: "communication" },

  // Finance
  { id: "fundraising", name: "Levée de fonds", category: "finance" },
  { id: "accounting", name: "Comptabilité", category: "finance" },
  { id: "financial-analysis", name: "Analyse financière", category: "finance" },
  { id: "grant-writing", name: "Dossiers de subvention", category: "finance" },

  // Legal
  { id: "association-law", name: "Droit des associations", category: "legal" },
  { id: "gdpr", name: "RGPD / Protection des données", category: "legal" },
  { id: "contracts", name: "Contrats", category: "legal" },
  { id: "compliance", name: "Conformité", category: "legal" },

  // HR / Organization
  { id: "recruitment", name: "Recrutement", category: "hr" },
  { id: "governance", name: "Gouvernance", category: "hr" },
  { id: "training", name: "Formation", category: "hr" },
  { id: "processes", name: "Processus internes", category: "hr" },

  // Impact
  { id: "impact-measurement", name: "Mesure d'impact", category: "impact" },
  { id: "sroi", name: "SROI", category: "impact" },
  { id: "reporting", name: "Reporting ESG", category: "impact" },
  { id: "evaluation", name: "Évaluation", category: "impact" },

  // Digital
  { id: "website", name: "Site web", category: "digital" },
  { id: "digital-tools", name: "Outils numériques", category: "digital" },
  { id: "automation", name: "Automatisation", category: "digital" },
  { id: "cybersecurity", name: "Cybersécurité", category: "digital" },

  // Resilience
  { id: "business-continuity", name: "Plan de continuité", category: "resilience" },
  { id: "crisis-communication", name: "Communication de crise", category: "resilience" },
  { id: "vulnerability-audit", name: "Audit de vulnérabilité", category: "resilience" },
  { id: "financial-diversification", name: "Diversification financière", category: "resilience" },
];

// Volunteer profile
export interface VolunteerProfile {
  id: string;
  name: string;
  email?: string;
  type: "student" | "professional";
  school?: string;
  company?: string;
  jobTitle?: string;
  skills: string[]; // Skill IDs
  availability: {
    hoursPerWeek: number;
    durationMonths: number;
    startDate?: string;
  };
  interests: string[];
  motivations: string;
  preferences?: {
    sectors?: string[];
    missionTypes?: string[];
    remote?: boolean;
  };
  createdAt: number;
}

// Structure (ESS organization) need
export interface StructureNeed {
  id: string;
  structureName: string;
  contactName?: string;
  contactEmail?: string;
  sector: string;
  description: string;
  skillsNeeded: string[]; // Skill IDs
  category: SkillCategory;
  tags: string[];
  urgency: "immediate" | "3_months" | "planned";
  capacity: {
    canHost: boolean;
    supervisionLevel: "high" | "medium" | "autonomous";
  };
  location?: string;
  remote?: boolean;
  createdAt: number;
}

// Match result
export interface MatchResult {
  id: string;
  volunteerId: string;
  volunteer: VolunteerProfile;
  needId: string;
  need: StructureNeed;
  scores: {
    skills: number;      // 0-100
    availability: number;
    motivation: number;
    experience: number;
    total: number;
  };
  explanation: string;
  warnings?: string[];
  createdAt: number;
}

// Chat message types
export interface StoredMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: number;
}

export interface ChatSession {
  id: string;
  type: "volunteer" | "structure";
  messages: StoredMessage[];
  profile?: VolunteerProfile | StructureNeed;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

// Conversion config
export interface ConversionConfig {
  type: "calendly" | "whatsapp";
  calendlyUrl?: string;
  whatsappNumber?: string;
}

// Category display info
export const CATEGORY_INFO: Record<SkillCategory, { label: string; color: string; icon: string }> = {
  strategy: { label: "Stratégie", color: "bg-blue-100 text-blue-800", icon: "Target" },
  communication: { label: "Communication", color: "bg-purple-100 text-purple-800", icon: "Megaphone" },
  finance: { label: "Finance", color: "bg-green-100 text-green-800", icon: "TrendingUp" },
  legal: { label: "Juridique", color: "bg-amber-100 text-amber-800", icon: "Scale" },
  hr: { label: "RH / Organisation", color: "bg-pink-100 text-pink-800", icon: "Users" },
  impact: { label: "Impact", color: "bg-teal-100 text-teal-800", icon: "BarChart3" },
  digital: { label: "Numérique", color: "bg-indigo-100 text-indigo-800", icon: "Laptop" },
  resilience: { label: "Résilience", color: "bg-orange-100 text-orange-800", icon: "Shield" },
};
