"use client";

import {
  HeroTraversee,
  Manifeste,
  ConstatChiffres,
  ExemplesInternationaux,
  HistoiresResistance,
  EspoirAction,
  TroisPiliers,
  TypesMissionsApercu,
  CTAFinal,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero - La Traversée commence */}
      <HeroTraversee />

      {/* Section 2: Manifeste - Ce qui dépend de nous */}
      <Manifeste />

      {/* Section 3: Les chiffres clés */}
      <ConstatChiffres />

      {/* Section 4: Fiches pays - Ce qui se passe ailleurs */}
      <ExemplesInternationaux />

      {/* Section 5: Histoires de résistance - Ils l'ont fait */}
      <HistoiresResistance />

      {/* Section 6: Espoir et action - 3.5% + 198 méthodes */}
      <EspoirAction />

      {/* Section 7: Les 3 piliers de notre stratégie */}
      <TroisPiliers />

      {/* Section 8: Types de missions */}
      <TypesMissionsApercu />

      {/* Section 9: CTA Final - Prêt à traverser ? */}
      <CTAFinal />
    </>
  );
}
