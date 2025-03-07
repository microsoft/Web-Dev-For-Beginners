# Refactorisez et commentez votre code

## Instructions

Au fur et à mesure que votre base de code se développe, il est important de refactorisez votre code fréquemment pour qu'il reste lisible et maintenable dans le temps. Ajoutez des commentaires et refactorisez votre `app.js` pour améliorer la qualité du code :

- Extrayez des constantes, telles que l'URL de base de l'API du serveur.
- Factorisez tout code similaire : par exemple, vous pouvez créer une fonction `sendRequest()` pour regrouper le code utilisé dans les fonctions `createAccount()` et `getAccount()`.
- Réorganisez le code pour le rendre plus facile à lire, et ajoutez des commentaires.

## Rubrique

| Critères | Exemplaire                                                                                                                                               | Adéquat                                                                                                                     | Besoin d'amélioration                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|          | Le code est commenté, bien organisé en différentes sections et facile à lire. Les constantes sont extraites et une fonction `sendRequest()` a été créée. | Le code est propre mais peut encore être amélioré avec plus de commentaires, d'extraction de constantes ou de factorisation.| Le code est désordonné, non commenté, les constantes ne sont pas extraites et le code n'est pas factorisé.|
