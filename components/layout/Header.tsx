"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Comprendre", href: "/comprendre" },
  { name: "Exemples", href: "/exemples-internationaux" },
  { name: "Plan d'action", href: "/plan-action" },
  { name: "Missions", href: "/missions" },
  { name: "Ressources", href: "/ressources" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-900 font-bold text-xl tracking-tight hover:text-stone-700 transition-colors"
          >
            <span className="text-amber-500 font-black">LT</span>
            <span>La Traversée</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/jai-besoin"
              className="px-4 py-2 text-sm font-semibold text-stone-700 hover:text-stone-900 border border-stone-300 hover:border-stone-400 transition-colors"
            >
              J'ai besoin d'aide
            </Link>
            <Link
              href="/je-veux-aider"
              className="px-4 py-2.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors"
            >
              Je veux aider
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-stone-700 hover:text-stone-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-stone-200"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-stone-200 mt-4 px-4">
                  <Link
                    href="/jai-besoin"
                    className="block w-full px-4 py-3 text-center font-semibold text-stone-700 border border-stone-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    J'ai besoin d'aide
                  </Link>
                  <Link
                    href="/je-veux-aider"
                    className="block w-full px-4 py-3 text-center font-semibold text-white bg-stone-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Je veux aider
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
