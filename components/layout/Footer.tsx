"use client";

import Link from "next/link";

const footerLinks = {
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Comprendre", href: "/comprendre" },
    { name: "Exemples internationaux", href: "/exemples-internationaux" },
    { name: "Plan d'action", href: "/plan-action" },
    { name: "Missions", href: "/missions" },
    { name: "Ressources", href: "/ressources" },
  ],
  action: [
    { name: "Je veux aider", href: "/je-veux-aider" },
    { name: "J'ai besoin d'aide", href: "/jai-besoin" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "Accessibilité", href: "/accessibilite" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--urgency-bg)] border-t border-white/10" role="contentinfo">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M8 16C8 16 12 10 16 10C20 10 24 16 24 16C24 16 20 22 16 22C12 22 8 16 8 16Z"
                  stroke="var(--sunset-orange)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="16" cy="16" r="3" fill="var(--hope-green)" />
              </svg>
              <span>La Traversée</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Plateforme citoyenne de mise en relation entre volontaires et structures de l'Économie
              Sociale et Solidaire. Ensemble, protégeons l'espace civique.
            </p>
            <p className="text-white/40 text-xs">
              Site éco-conçu avec respect de l'accessibilité
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-white font-semibold mb-4">Navigation</h2>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h2 className="text-white font-semibold mb-4">Passer à l'action</h2>
            <ul className="space-y-2">
              {footerLinks.action.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/80 text-sm font-medium mb-2">
                3,5% de la population
              </p>
              <p className="text-white/50 text-xs">
                C'est tout ce qu'il faut pour réussir un changement pacifique.
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-white font-semibold mb-4">Informations</h2>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-white/40 text-xs mb-2">Contact</p>
              <a
                href="mailto:contact@la-traversee.org"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                contact@la-traversee.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} La Traversée. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="badge badge-espoir">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Éco-conçu
            </span>
            <span className="badge badge-info">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              RGAA AA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
