# Implémenter la boîte de dialogue "Ajouter une transaction"

## Instructions

Il manque encore à notre application bancaire une fonctionnalité importante: la possibilité de saisir de nouvelles transactions.
En utilisant tout ce que vous avez appris dans les quatre leçons précédentes, implémentez une boîte de dialogue « Ajouter une transaction » :

- Ajouter un bouton "Ajouter une transaction" dans la page du tableau de bord
- Créez une nouvelle page avec un modèle HTML ou utilisez JavaScript pour afficher/masquer le HTML de la boîte de dialogue sans quitter la page du tableau de bord (vous pouvez utiliser [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) pour celà, ou des classes CSS)
- Assurez-vous de gérer [l'accessibilité du clavier et du lecteur d'écran](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) pour la boîte de dialogue
- Implémenter un formulaire HTML pour recevoir les données d'entrée
- Créer des données JSON à partir des données du formulaire et les envoyer à l'API
- Mettre à jour la page du tableau de bord avec les nouvelles données

Consultez les [spécifications de l'API du serveur](./../../api/translations/README.fr.md) pour voir quelle API vous devez appeler et quel est le format JSON attendu.

Voici un exemple de résultat après avoir terminé le devoir :

![Capture d'écran montrant un exemple de boîte de dialogue "Ajouter une transaction"](../images/dialog.png)

## Rubrique

| Critères | Exemplaire                                                                                        | Adéquat                                                                                                                | Besoin d'amélioration                           |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | L'ajout d'une transaction est entièrement mis en œuvre en suivant toutes les meilleures pratiques vues dans les leçons. | L'ajout d'une transaction est implémenté, mais ne suit pas les meilleures pratiques vues dans les leçons, ou ne fonctionne que partiellement. | L'ajout d'une transaction ne fonctionne pas du tout. |