import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const produits = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/produits" }),
  schema: z.object({
    titre: z.string(),
    titre_h1: z.string().optional(),
    description_courte: z.string(),
    description_longue: z.string(),
    image_url: z.string(),
    lien_affiliation: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    categories: z.array(z.string()),
    avis_clients: z.array(z.object({
      auteur: z.string(),
      note: z.number().optional().default(5),
      titre: z.string().optional().default(""),
      commentaire: z.string(),
      usage: z.string().optional().default("Usage vérifié"),
      achat_verifie: z.boolean().optional().default(true),
      images: z.array(z.string()).optional(),
    })).optional(),
    satisfaction_globale: z.object({
      note_moyenne: z.number().optional().default(4.6),
      total_avis: z.number().optional().default(100),
      taux_positif: z.string().optional().default("88%"),
      points_forts_utilisateurs: z.array(z.string()).optional(),
      points_vigilance_utilisateurs: z.array(z.string()).optional(),
    }).optional(),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/categories" }),
  schema: z.object({
    titre_seo: z.string(),
    titre_h1: z.string().optional(),
    description_seo: z.string(),
    faq: z.array(z.object({
      q: z.string(),
      r: z.string(),
    })).optional(),
  }),
});

export const collections = { produits, categories };
