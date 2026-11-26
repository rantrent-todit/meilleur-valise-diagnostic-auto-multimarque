/**
 * Formate algorithmiquement un slug de catégorie en libellé français propre sans tirets.
 * Exemples :
 * - "convertisseur-12v-220v-pur-sinus" -> "Convertisseur 12V 220V Pur Sinus"
 * - "poste-a-souder-mig-mag" -> "Poste A Souder MIG MAG"
 * - "decoupeur-plasma-cnc" -> "Decoupeur Plasma CNC"
 */
export function formatCategoryLabel(slug: string): string {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => {
      // Unités et termes techniques à mettre en majuscules
      if (/^\d+(v|w|va|a|mm|ah)$/i.test(word) || /^(mig|mag|tig|mma|obd|obd2|usb|led|lcd|ip\d+|dj|cnc|hf)$/i.test(word)) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .replace(/\bCamping Car\b/gi, 'Camping-Car')
    .replace(/\bSous Marin\b/gi, 'Sous-Marin');
}
