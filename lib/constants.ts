/**
 * La Traversée - Constantes du rapport
 * Source: "Face à l'Autocratisation" V3
 */

// ============================
// CHIFFRES CLÉS - SITUATION
// ============================

export const STATS = {
  // Coupes budgétaires ESS
  coupeBudgetaire: {
    montant: 8.26, // Milliards d'euros
    label: "8,26 Mds€",
    description: "de coupes prévues dans l'ESS",
  },

  // Impact emploi
  emploisMenaces: {
    nombre: 186000,
    label: "186 000",
    description: "emplois directement menacés",
  },

  // Répression
  interpellations: {
    nombre: 540,
    label: "540+",
    description: "interpellations lors de manifestations (2023)",
  },

  // CIVICUS
  civicus: {
    note: "Obstructed",
    dateDowngrade: "Décembre 2025",
    description: "La France dégradée de 'Rétréci' à 'Obstrué'",
  },

  // Règle des 3,5%
  regle35: {
    pourcentage: 3.5,
    populationFrance: 68000000,
    nombreNecessaire: 2380000, // 68M * 3.5%
    label: "2,3 millions",
    description: "de Français = succès garanti d'un mouvement pacifique",
    source: "Erica Chenoweth, Harvard",
  },

  // Méthodes Gene Sharp
  methodesSharp: {
    nombre: 198,
    label: "198",
    description: "méthodes d'action non-violente documentées",
    source: "Gene Sharp, From Dictatorship to Democracy",
  },
};

// ============================
// EXEMPLES INTERNATIONAUX
// ============================

export const EXEMPLES_PAYS = {
  russie: {
    nom: "Russie",
    drapeau: "🇷🇺",
    titre: "De la démocratie fragile à l'autocratie",
    periode: "2000-2024",
    resume:
      "Sous Poutine: loi sur les 'agents étrangers' (2012), dissolution de Memorial (2021), contrôle total des médias.",
    lecons: [
      "Les lois visant les ONG sont un premier signe",
      "Le contrôle des médias précède la répression",
      "L'isolement des voix critiques est progressif",
    ],
    timeline: [
      { annee: 2000, evenement: "Arrivée de Poutine au pouvoir" },
      { annee: 2012, evenement: "Loi sur les 'agents étrangers'" },
      { annee: 2021, evenement: "Dissolution de Memorial" },
      { annee: 2022, evenement: "Guerre en Ukraine, répression totale" },
    ],
  },

  hongrie: {
    nom: "Hongrie",
    drapeau: "🇭🇺",
    titre: "Capture de l'État au sein de l'UE",
    periode: "2010-2024",
    resume:
      "Orbán a méthodiquement affaibli les contre-pouvoirs: médias, justice, universités, ONG.",
    lecons: [
      "L'autocratisation peut se faire dans un cadre légal",
      "Les élections continuent mais ne sont plus équitables",
      "L'UE a des moyens limités pour intervenir",
    ],
    timeline: [
      { annee: 2010, evenement: "Victoire du Fidesz, majorité des 2/3" },
      { annee: 2011, evenement: "Nouvelle constitution, contrôle des médias" },
      { annee: 2018, evenement: "Loi 'Stop Soros' contre les ONG" },
      { annee: 2024, evenement: "Illibéralisme assumé" },
    ],
  },

  pologne: {
    nom: "Pologne",
    drapeau: "🇵🇱",
    titre: "Résistance et alternance possible",
    periode: "2015-2023",
    resume:
      "Le PiS a attaqué l'État de droit, mais la société civile et les élections ont permis un retournement.",
    lecons: [
      "La mobilisation citoyenne peut inverser la tendance",
      "Les élections restent un outil démocratique",
      "Les femmes ont joué un rôle crucial",
    ],
    timeline: [
      { annee: 2015, evenement: "Victoire du PiS" },
      { annee: 2016, evenement: "Crise du Tribunal constitutionnel" },
      { annee: 2020, evenement: "Grèves des femmes (Strajk Kobiet)" },
      { annee: 2023, evenement: "Victoire de l'opposition, Tusk PM" },
    ],
    exemple_positif: true,
  },

  usa: {
    nom: "États-Unis",
    drapeau: "🇺🇸",
    titre: "Fragilité des institutions établies",
    periode: "2016-2025",
    resume:
      "La première présidence Trump a révélé la vulnérabilité des normes non-écrites. Le retour au pouvoir pose de nouveaux risques.",
    lecons: [
      "Les normes informelles peuvent être ignorées",
      "Les institutions doivent être défendues activement",
      "La polarisation affaiblit les contre-pouvoirs",
    ],
    timeline: [
      { annee: 2016, evenement: "Élection de Trump" },
      { annee: 2021, evenement: "Assaut du Capitole" },
      { annee: 2024, evenement: "Réélection de Trump" },
      { annee: 2025, evenement: "Project 2025 en cours" },
    ],
  },

  bresil: {
    nom: "Brésil",
    drapeau: "🇧🇷",
    titre: "Alternance et reconstruction",
    periode: "2019-2024",
    resume:
      "Bolsonaro a affaibli les protections environnementales et attaqué les institutions, mais Lula a été réélu.",
    lecons: [
      "Les mouvements sociaux restent essentiels",
      "La reconstruction démocratique prend du temps",
      "Les dégâts environnementaux sont difficiles à réparer",
    ],
    timeline: [
      { annee: 2019, evenement: "Bolsonaro président" },
      { annee: 2022, evenement: "Élection de Lula" },
      { annee: 2023, evenement: "Tentative de coup d'État" },
      { annee: 2024, evenement: "Reconstruction en cours" },
    ],
    exemple_positif: true,
  },
};

// ============================
// LES 3 PILIERS
// ============================

export const PILIERS = {
  proteger: {
    id: "proteger",
    nom: "PROTÉGER",
    sousTitre: "Court terme (0-6 mois)",
    couleur: "var(--pilier-proteger)",
    icon: "shield",
    description:
      "Défendre immédiatement les structures menacées et les libertés fondamentales.",
    actions: [
      "Veille juridique et alerte précoce",
      "Accompagnement des structures en difficulté",
      "Documentation des atteintes aux libertés",
      "Soutien psychologique aux équipes",
    ],
    missions: ["A", "B"],
  },

  contenir: {
    id: "contenir",
    nom: "CONTENIR",
    sousTitre: "Moyen terme (6-12 mois)",
    couleur: "var(--pilier-contenir)",
    icon: "barrier",
    description:
      "Renforcer les contre-pouvoirs et créer des alliances durables.",
    actions: [
      "Coalitions inter-sectorielles",
      "Plaidoyer coordonné",
      "Formation des acteurs",
      "Stratégies de communication",
    ],
    missions: ["C", "D"],
  },

  preparer: {
    id: "preparer",
    nom: "PRÉPARER",
    sousTitre: "Long terme (12-18 mois)",
    couleur: "var(--pilier-preparer)",
    icon: "seedling",
    description:
      "Construire les fondations d'une société civile résiliente pour l'avenir.",
    actions: [
      "Éducation populaire",
      "Innovation sociale",
      "Recherche-action",
      "Transmission intergénérationnelle",
    ],
    missions: ["E", "F"],
  },
};

// ============================
// TYPES DE MISSIONS
// ============================

export const TYPES_MISSIONS = {
  A: {
    code: "A",
    nom: "Accompagnement juridique",
    description: "Soutien aux structures face aux contraintes administratives et juridiques.",
    competences: ["Droit", "Juridique", "Administratif"],
    duree: "3-6 mois",
    urgence: "haute",
    couleur: "var(--mission-a)",
  },

  B: {
    code: "B",
    nom: "Soutien opérationnel",
    description: "Aide ponctuelle aux équipes en difficulté pour maintenir leur activité.",
    competences: ["Gestion", "Organisation", "RH"],
    duree: "1-3 mois",
    urgence: "haute",
    couleur: "var(--mission-b)",
  },

  C: {
    code: "C",
    nom: "Communication & Plaidoyer",
    description: "Amplifier les messages et sensibiliser le grand public.",
    competences: ["Communication", "Rédaction", "Réseaux sociaux", "Relations presse"],
    duree: "3-6 mois",
    urgence: "moyenne",
    couleur: "var(--mission-c)",
  },

  D: {
    code: "D",
    nom: "Stratégie & Conseil",
    description: "Accompagnement stratégique pour renforcer l'impact et la résilience.",
    competences: ["Stratégie", "Conseil", "Management"],
    duree: "6-12 mois",
    urgence: "moyenne",
    couleur: "var(--mission-d)",
  },

  E: {
    code: "E",
    nom: "Formation & Transmission",
    description: "Former les acteurs et transmettre les savoirs essentiels.",
    competences: ["Formation", "Pédagogie", "Animation"],
    duree: "6-12 mois",
    urgence: "planifiée",
    couleur: "var(--mission-e)",
  },

  F: {
    code: "F",
    nom: "Innovation & Recherche",
    description: "Développer de nouvelles approches et documenter les pratiques.",
    competences: ["Recherche", "Innovation", "Data", "Tech"],
    duree: "6-18 mois",
    urgence: "planifiée",
    couleur: "var(--mission-f)",
  },
};

// ============================
// FEUILLE DE ROUTE 18 MOIS
// ============================

export const FEUILLE_DE_ROUTE = [
  {
    phase: 1,
    titre: "Phase d'urgence",
    periode: "Janvier - Juin 2025",
    pilier: "proteger",
    objectifs: [
      "Identifier les 50 structures les plus menacées",
      "Mettre en place un réseau de veille",
      "Lancer les premières missions d'accompagnement",
    ],
  },
  {
    phase: 2,
    titre: "Phase de consolidation",
    periode: "Juillet - Décembre 2025",
    pilier: "contenir",
    objectifs: [
      "Créer 3 coalitions thématiques",
      "Former 200 personnes aux méthodes d'action",
      "Produire 10 outils de plaidoyer",
    ],
  },
  {
    phase: 3,
    titre: "Phase de construction",
    periode: "Janvier - Juin 2026",
    pilier: "preparer",
    objectifs: [
      "Lancer 5 programmes d'éducation populaire",
      "Documenter les bonnes pratiques",
      "Préparer l'après avec la nouvelle génération",
    ],
  },
];

// ============================
// PROMPTS NANO-BANANA
// ============================

export const IMAGE_PROMPTS = {
  hero: {
    prompt:
      "Abstract beam of golden light piercing through deep darkness, volumetric rays, hope emerging from shadows, no faces no text, dark navy blue and warm amber colors, minimalist, symbolic",
    aspectRatio: "16:9",
    section: "hero",
  },

  constat: {
    prompt:
      "Fragmented geometric shapes representing tension and instability, sharp angular forms, deep red and dark blue color palette, abstract, no text no faces, dramatic lighting",
    aspectRatio: "16:9",
    section: "constat",
  },

  espoir: {
    prompt:
      "Intertwined flowing lines representing unity and hope, warm amber transitioning to emerald green, no hands no faces, abstract organic shapes, peaceful and hopeful mood",
    aspectRatio: "16:9",
    section: "espoir",
  },

  pilierProteger: {
    prompt:
      "Abstract shield icon, crimson red angular protective geometric shape, minimalist, solid dark background, no text",
    aspectRatio: "1:1",
    section: "pilier-proteger",
  },

  pilierContenir: {
    prompt:
      "Abstract barrier icon, amber orange interlocking geometric shapes forming a wall, minimalist, solid dark background, no text",
    aspectRatio: "1:1",
    section: "pilier-contenir",
  },

  pilierPreparer: {
    prompt:
      "Abstract growth icon, emerald green germinating seed or sprouting plant, geometric minimalist style, solid dark background, no text",
    aspectRatio: "1:1",
    section: "pilier-preparer",
  },

  exemplesInternationaux: {
    prompt:
      "Connected geometric nodes representing a network across abstract world map, muted colors with occasional red warning points, no text no faces, conceptual illustration",
    aspectRatio: "16:9",
    section: "exemples",
  },

  missions: {
    prompt:
      "Six interconnected hexagonal shapes in different colors representing collaboration and diversity of action, abstract minimalist style, dark background, no text",
    aspectRatio: "16:9",
    section: "missions",
  },

  ctaFinal: {
    prompt:
      "Path of light leading forward into bright future, transition from dark to light, symbolic journey, no faces no text, warm hopeful colors amber and white",
    aspectRatio: "16:9",
    section: "cta",
  },
};

// ============================
// TEXTES UI
// ============================

export const UI_TEXTS = {
  cta: {
    jeVeuxAider: "Je veux aider",
    jAiBesoin: "J'ai besoin d'aide",
    enSavoirPlus: "En savoir plus",
    decouvrir: "Découvrir",
    agir: "Passer à l'action",
  },

  sections: {
    comprendre: "Comprendre la situation",
    exemples: "Ce qui se passe ailleurs",
    espoir: "On n'est pas impuissants",
    piliers: "Notre stratégie",
    missions: "Types de missions",
    ressources: "Boîte à outils",
  },
};
