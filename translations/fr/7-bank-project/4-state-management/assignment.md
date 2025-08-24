<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-24T00:15:20+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "fr"
}
-->
# Implémenter la boîte de dialogue "Ajouter une transaction"

## Instructions

Notre application bancaire manque encore d'une fonctionnalité essentielle : la possibilité d'ajouter de nouvelles transactions.
En utilisant tout ce que vous avez appris dans les quatre leçons précédentes, implémentez une boîte de dialogue "Ajouter une transaction" :

- Ajoutez un bouton "Ajouter une transaction" sur la page du tableau de bord
- Créez soit une nouvelle page avec un modèle HTML, soit utilisez JavaScript pour afficher/masquer le HTML de la boîte de dialogue sans quitter la page du tableau de bord (vous pouvez utiliser la propriété [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) pour cela, ou des classes CSS)
- Assurez-vous de gérer [l'accessibilité au clavier et aux lecteurs d'écran](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) pour la boîte de dialogue
- Implémentez un formulaire HTML pour recevoir les données d'entrée
- Créez des données JSON à partir des données du formulaire et envoyez-les à l'API
- Mettez à jour la page du tableau de bord avec les nouvelles données

Consultez les [spécifications de l'API serveur](../api/README.md) pour voir quelle API vous devez appeler et quel format JSON est attendu.

Voici un exemple de résultat après avoir terminé l'exercice :

![Capture d'écran montrant un exemple de boîte de dialogue "Ajouter une transaction"](../../../../7-bank-project/4-state-management/images/dialog.png)

## Grille d'évaluation

| Critères | Exemplaire                                                                                       | Adéquat                                                                                                                | À améliorer                                 |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | L'ajout d'une transaction est entièrement implémenté en suivant toutes les bonnes pratiques vues dans les leçons. | L'ajout d'une transaction est implémenté, mais ne suit pas les bonnes pratiques vues dans les leçons, ou fonctionne seulement partiellement. | L'ajout d'une transaction ne fonctionne pas du tout. |

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.