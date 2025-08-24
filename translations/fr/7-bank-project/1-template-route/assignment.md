<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-24T00:10:03+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "fr"
}
-->
# Améliorer le routage

## Instructions

La déclaration des routes contient actuellement uniquement l'ID du modèle à utiliser. Mais lorsqu'une nouvelle page est affichée, il faut parfois un peu plus. Améliorons notre implémentation de routage avec deux fonctionnalités supplémentaires :

- Donner des titres à chaque modèle et mettre à jour le titre de la fenêtre avec ce nouveau titre lorsque le modèle change.
- Ajouter une option pour exécuter du code après le changement de modèle. Nous voulons afficher `'Dashboard is shown'` dans la console développeur chaque fois que la page du tableau de bord est affichée.

## Critères d'évaluation

| Critères | Exemplaire                                                                                                                          | Adéquat                                                                                                                                                                                   | À améliorer                                           |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|          | Les deux fonctionnalités sont implémentées et fonctionnent. L'ajout de titre et de code fonctionne également pour une nouvelle route ajoutée dans la déclaration `routes`. | Les deux fonctionnalités fonctionnent, mais le comportement est codé en dur et non configurable via la déclaration `routes`. Ajouter une troisième route avec titre et code additionnel ne fonctionne pas ou fonctionne partiellement. | Une des fonctionnalités manque ou ne fonctionne pas correctement. |

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.