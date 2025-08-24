<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-24T00:06:14+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "fr"
}
-->
# Refactorisez et commentez votre code

## Instructions

À mesure que votre base de code grandit, il est important de refactoriser fréquemment votre code pour le rendre lisible et facile à maintenir sur le long terme. Ajoutez des commentaires et refactorisez votre `app.js` afin d'améliorer la qualité du code :

- Extrayez les constantes, comme l'URL de base de l'API du serveur
- Factorisez le code similaire : par exemple, vous pouvez créer une fonction `sendRequest()` pour regrouper le code utilisé dans `createAccount()` et `getAccount()`
- Réorganisez le code pour le rendre plus facile à lire, et ajoutez des commentaires

## Barème

| Critères | Exemplaire                                                                                                                                                     | Adéquat                                                                                          | À améliorer                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Le code est commenté, bien organisé en différentes sections et facile à lire. Les constantes sont extraites et une fonction factorisée `sendRequest()` a été créée. | Le code est propre mais pourrait être amélioré avec plus de commentaires, l'extraction de constantes ou la factorisation. | Le code est désordonné, non commenté, les constantes ne sont pas extraites et le code n'est pas factorisé. |

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.