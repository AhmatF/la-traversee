import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Traversée | Agir pour l'espace civique",
  description:
    "Plateforme citoyenne de mise en relation entre volontaires et structures de l'Économie Sociale et Solidaire. Protégeons ensemble l'espace civique français.",
  keywords: [
    "espace civique",
    "démocratie",
    "ESS",
    "économie sociale et solidaire",
    "bénévolat",
    "engagement citoyen",
    "action collective",
    "société civile",
  ],
  openGraph: {
    title: "La Traversée | Agir pour l'espace civique",
    description:
      "L'espace civique français est menacé. Rejoignez le mouvement pour protéger nos libertés et renforcer la société civile.",
    type: "website",
    locale: "fr_FR",
    siteName: "La Traversée",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Traversée | Agir pour l'espace civique",
    description:
      "L'espace civique français est menacé. Rejoignez le mouvement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
