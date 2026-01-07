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
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 border-t border-stone-800" role="contentinfo">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="text-amber-500 font-black">LT</span>
              <span>La Traversée</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Plateforme citoyenne de mise en relation entre volontaires et structures de l'Économie
              Sociale et Solidaire.
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
                    className="text-stone-400 hover:text-white text-sm transition-colors"
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
                    className="text-stone-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 border border-stone-700">
              <p className="text-white text-sm font-medium mb-1">
                3,5% de la population
              </p>
              <p className="text-stone-500 text-xs">
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
                    className="text-stone-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-stone-500 text-xs mb-2">Contact</p>
              <a
                href="mailto:contact@la-traversee.org"
                className="text-stone-400 hover:text-white text-sm transition-colors"
              >
                contact@la-traversee.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <p className="text-stone-500 text-sm">
            © {currentYear} La Traversée. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
