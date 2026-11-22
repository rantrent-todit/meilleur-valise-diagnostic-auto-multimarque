/**
 * Transforme le markdown inline (**texte**, *texte*) en HTML propre ou texte épuré.
 * Supprime absolument tous les astérisques résiduels pour éviter toute pollution visuelle.
 */
export function formatInlineText(rawText: string, strongClass: string = "font-extrabold text-slate-900"): string {
  if (!rawText) return "";
  
  return rawText
    // Convertir **texte** en <strong class="...">texte</strong>
    .replace(/\*\*(.*?)\*\*/g, `<strong class="${strongClass}">$1</strong>`)
    // Supprimer d'éventuels astérisques orphelins simples ou restants
    .replace(/\*/g, '')
    // Nettoyer les espaces multiples
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Version texte pur (sans aucune balise HTML ni astérisque)
 */
export function stripMarkdown(rawText: string): string {
  if (!rawText) return "";
  return rawText.replace(/\*/g, '').replace(/_/g, '').trim();
}
