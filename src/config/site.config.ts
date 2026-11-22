export interface SiteConfig {
  siteName: string;
  siteDomain: string;
  tagline: string;
  description: string;
  contactEmail: string;
  // Métadonnées SEO prioritaires (optimisation mot-clé "Meilleur", sans branding)
  primaryKeyword?: string;
  homeSeoTitle?: string;
  homeH1?: string;
  homeTagline?: string;
  homeDescription?: string;
  affiliate: {
    amazonTag: string;
    disclaimer: string;
  };
  theme: {
    primaryColor: string;
    primaryHoverColor: string;
    accentColor: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "AutoDiag Pro",
  siteDomain: "https://meilleur-valise-diagnostic-auto-multimarque.fr",
  tagline: "Le guide de référence indépendant pour choisir votre valise de diagnostic multimarque",
  description: "Trouvez la meilleure valise diagnostic auto multimarque adaptée à vos besoins. Comparatifs indépendants, tests d'outils OBD2 et sélections d'experts.",
  contactEmail: "contact@meilleur-valise-diagnostic-auto-multimarque.fr",
  primaryKeyword: "Meilleur valise diagnostic auto multimarque",
  homeSeoTitle: "Meilleur valise diagnostic auto multimarque : Comparatif, Tests & Guide",
  homeH1: "Meilleur valise diagnostic auto multimarque",
  homeTagline: "Le guide de référence indépendant pour choisir votre valise de diagnostic multimarque",
  homeDescription: "Trouvez la meilleure valise diagnostic auto multimarque adaptée à vos besoins. Comparatifs indépendants, tests d'outils OBD2 et sélections d'experts.",
  affiliate: {
    amazonTag: "amazonwp0b-21",
    disclaimer: "En tant que Partenaire Amazon, ce site réalise un bénéfice sur les achats remplissant les conditions requises."
  },
  theme: {
    primaryColor: "#1E3A8A",
    primaryHoverColor: "#172554",
    accentColor: "#F97316"
  }
};
