"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertTriangle,
  TrendingDown,
  Users,
  FileWarning,
  Shield,
  MapPin,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100 }
  }
};

// Stat Card Component
function StatCard({
  number,
  label,
  sublabel,
  icon: Icon,
  color = "orange",
  delay = 0
}: {
  number: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  color?: "orange" | "red" | "blue" | "green";
  delay?: number;
}) {
  const colorClasses = {
    orange: "from-orange-500 to-amber-600 text-orange-50",
    red: "from-red-600 to-rose-700 text-red-50",
    blue: "from-blue-600 to-indigo-700 text-blue-50",
    green: "from-emerald-600 to-teal-700 text-emerald-50"
  };

  const iconBgClasses = {
    orange: "bg-orange-400/30",
    red: "bg-red-400/30",
    blue: "bg-blue-400/30",
    green: "bg-emerald-400/30"
  };

  return (
    <motion.div
      variants={scaleIn}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${colorClasses[color]} p-8 shadow-2xl`}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-black/10 blur-xl" />

      <div className={`mb-4 inline-flex rounded-2xl ${iconBgClasses[color]} p-3`}>
        <Icon className="h-6 w-6" />
      </div>

      <div className="relative">
        <motion.p
          className="text-5xl font-black tracking-tight md:text-6xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2, type: "spring" }}
          viewport={{ once: true }}
        >
          {number}
        </motion.p>
        <p className="mt-2 text-lg font-semibold opacity-90">{label}</p>
        {sublabel && (
          <p className="mt-1 text-sm opacity-70">{sublabel}</p>
        )}
      </div>
    </motion.div>
  );
}

// Timeline Event Component
function TimelineEvent({
  date,
  title,
  description,
  isLast = false
}: {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-8"
    >
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 h-full w-0.5 bg-gradient-to-b from-orange-400 to-transparent" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-orange-500 bg-white shadow-lg" />

      <div className="pb-8">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">
          {date}
        </span>
        <h4 className="mt-2 text-lg font-bold text-gray-900">{title}</h4>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

// Municipality Card Component
function MunicipalityCard({
  city,
  examples
}: {
  city: string;
  examples: string[];
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:border-red-300 hover:shadow-xl"
    >
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-red-50 transition-transform group-hover:scale-150" />

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-red-500" />
          <h4 className="text-xl font-bold text-gray-900">{city}</h4>
        </div>
        <ul className="space-y-2">
          {examples.map((example, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              {example}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ConstatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-orange-300"
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Rapport 2025</span>
            </motion.div>

            <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
              <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                L'espace civique
              </span>
              <br />
              <span className="text-orange-400">en danger</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
              Les constats alarmants sur le rétrécissement de l'espace civique en France
              et ses impacts sur le monde associatif.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <ChevronDown className="mx-auto h-8 w-8 animate-bounce text-orange-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CIVICUS Alert */}
      <section className="relative -mt-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center justify-center bg-red-600 p-8 md:w-1/3">
                <div className="text-center text-white">
                  <p className="text-sm font-bold uppercase tracking-wider opacity-80">CIVICUS Monitor</p>
                  <p className="mt-2 text-4xl font-black">Décembre 2025</p>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-red-700">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-bold">ALERTE</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  La France rétrogradée en espace civique « Obstrué »
                </h3>
                <p className="mt-3 text-gray-600">
                  Pour la première fois, la France rejoint le groupe des pays où les libertés
                  fondamentales d'association et de manifestation sont significativement entravées.
                </p>
                <a
                  href="https://monitor.civicus.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Voir le rapport CIVICUS
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Stats Grid */}
      <section className="px-6 py-24">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black text-gray-900 md:text-5xl"
            >
              Les chiffres qui alarment
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
            >
              Des coupes budgétaires massives qui menacent le tissu associatif français
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <StatCard
              number="8,26 Mds€"
              label="de coupes budgétaires"
              sublabel="affectant les associations"
              icon={TrendingDown}
              color="red"
              delay={0}
            />
            <StatCard
              number="186 000"
              label="emplois menacés"
              sublabel="dans le secteur associatif"
              icon={Users}
              color="orange"
              delay={0.1}
            />
            <StatCard
              number="CER"
              label="Contrat d'Engagement Républicain"
              sublabel="conditionnant les subventions"
              icon={FileWarning}
              color="blue"
              delay={0.2}
            />
          </motion.div>
        </div>
      </section>

      {/* Protest Repression Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-24 text-white">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">
                <Shield className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Répression des manifestations</span>
              </div>
              <h2 className="text-4xl font-black md:text-5xl">
                Liberté de manifester <span className="text-orange-400">sous pression</span>
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                variants={scaleIn}
                className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 p-8"
              >
                <p className="text-6xl font-black md:text-7xl">540</p>
                <p className="mt-2 text-xl font-semibold opacity-90">interpellations</p>
                <p className="mt-4 text-orange-100">
                  10 septembre 2025 — Manifestations contre les politiques d'austérité
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 p-8"
              >
                <p className="text-6xl font-black md:text-7xl">309</p>
                <p className="mt-2 text-xl font-semibold opacity-90">interpellations</p>
                <p className="mt-4 text-red-100">
                  18 septembre 2025 — Mobilisations pour les libertés associatives
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-center text-lg text-slate-400"
            >
              Des niveaux de répression inédits pour des manifestations pacifiques,
              témoignant d'un durcissement sécuritaire préoccupant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CER Explanation */}
      <section className="px-6 py-24">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
                Le <span className="text-orange-500">CER</span> : un outil de contrôle
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12"
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Contrat d'Engagement Républicain
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Conditionnalité des subventions</h4>
                    <p className="mt-1 text-gray-600">
                      Toute subvention publique est désormais conditionnée à la signature
                      d'un engagement dont les contours restent flous et arbitraires.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Effet dissuasif (chilling effect)</h4>
                    <p className="mt-1 text-gray-600">
                      La menace de perdre les financements pousse les associations
                      à l'auto-censure et limite leur capacité de plaidoyer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Application arbitraire</h4>
                    <p className="mt-1 text-gray-600">
                      Des associations sont ciblées de manière sélective,
                      notamment celles qui portent un discours critique.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* RN Municipalities */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 py-24">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
                Laboratoires du <span className="text-red-600">rétrécissement</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Les municipalités RN préfigurent les restrictions à venir au niveau national
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              <MunicipalityCard
                city="Hayange (57)"
                examples={[
                  "Suppression des subventions aux associations de solidarité",
                  "Entraves aux événements culturels",
                  "Contrôle accru des activités associatives"
                ]}
              />
              <MunicipalityCard
                city="Hénin-Beaumont (62)"
                examples={[
                  "Fin du soutien aux associations d'aide aux migrants",
                  "Restrictions sur les salles municipales",
                  "Surveillance des activités militantes"
                ]}
              />
              <MunicipalityCard
                city="Béziers (34)"
                examples={[
                  "Coupes dans le budget culturel associatif",
                  "Refus de subventions pour motifs politiques",
                  "Pressions sur les associations LGBT+"
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-24">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
                Chronologie d'une <span className="text-orange-500">dégradation</span>
              </h2>
            </motion.div>

            <div className="relative">
              <TimelineEvent
                date="2021"
                title="Loi Séparatisme"
                description="Introduction du Contrat d'Engagement Républicain (CER) conditionnant les subventions publiques."
              />
              <TimelineEvent
                date="2023"
                title="Dissolution de collectifs"
                description="Vague de dissolutions administratives touchant des organisations écologistes et militantes."
              />
              <TimelineEvent
                date="2024"
                title="Coupes budgétaires"
                description="Annonce de 8,26 milliards d'euros de réductions affectant le secteur associatif."
              />
              <TimelineEvent
                date="Décembre 2025"
                title="Rétrogradation CIVICUS"
                description="La France passe en espace civique 'Obstrué' selon le monitoring international."
                isLast
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] to-[#0a3a63] px-6 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/2 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container relative mx-auto text-center"
        >
          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Face à ces constats,<br />
            <span className="text-orange-400">agissons ensemble</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
            La Traversée connecte les volontaires engagés avec les structures de l'ESS
            pour renforcer leur résilience face à ces défis.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/je-veux-aider"
              className="group flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition-all hover:bg-orange-400 hover:shadow-xl"
            >
              Je veux aider
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/jai-besoin"
              className="group flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              J'ai besoin d'aide
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Sources */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-6 text-lg font-bold text-gray-700">Sources</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="https://monitor.civicus.org" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                CIVICUS Monitor
              </a>
              <span>•</span>
              <span>Rapport La Traversée 2025</span>
              <span>•</span>
              <a href="https://www.hrw.org" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                Human Rights Watch
              </a>
              <span>•</span>
              <span>Le Mouvement Associatif</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
