# Améliorer le Routage

## Instructions

Maintenant que vous avez construit un système de routage de base, il est temps de l'améliorer avec des fonctionnalités professionnelles qui améliorent l'expérience utilisateur et offrent de meilleurs outils pour les développeurs. Les applications réelles nécessitent plus que de simples changements de modèle – elles exigent des titres de page dynamiques, des hooks de cycle de vie, et des architectures extensibles.

Dans cet exercice, vous allez étendre votre implémentation de routage avec deux fonctionnalités essentielles que l'on retrouve couramment dans les applications web en production. Ces améliorations rendront votre application bancaire plus soignée et fourniront une base pour des fonctionnalités futures.

La déclaration des routes contient actuellement uniquement l'ID du template à utiliser. Mais lorsqu'on affiche une nouvelle page, un peu plus est parfois nécessaire. Améliorons notre implémentation de routage avec deux fonctionnalités additionnelles :

### Fonctionnalité 1 : Titres de Pages Dynamiques
**Objectif :** Donner des titres à chaque template et mettre à jour le titre de la fenêtre avec ce nouveau titre lorsque le template change.

**Pourquoi c'est important :**
- **Améliore** l'expérience utilisateur en affichant des titres descriptifs dans les onglets du navigateur  
- **Renforce** l'accessibilité pour les lecteurs d'écran et les technologies d'assistance  
- **Fournit** un meilleur repérage dans les favoris et l'historique du navigateur  
- **Suit** les meilleures pratiques professionnelles du développement web

**Approche d'implémentation :**
- **Étendre** l'objet routes pour inclure l'information du titre pour chaque route  
- **Modifier** la fonction `updateRoute()` pour mettre à jour dynamiquement `document.title`  
- **Tester** que les titres changent correctement lors de la navigation entre les écrans  

### Fonctionnalité 2 : Hooks de Cycle de Vie de Route  
**Objectif :** Ajouter une option pour exécuter du code après que le template a changé. Nous voulons afficher `'Dashboard is shown'` dans la console développeur à chaque fois que la page du tableau de bord est affichée.

**Pourquoi c'est important :**
- **Permet** l'exécution de logique personnalisée lors du chargement de routes spécifiques  
- **Offre** des hooks pour l'analyse, la journalisation ou du code d'initialisation  
- **Crée** une base pour des comportements de routes plus complexes  
- **Démontre** le pattern observateur dans le développement web  

**Approche d'implémentation :**
- **Ajouter** une propriété fonction callback optionnelle aux configurations de route  
- **Exécuter** la fonction callback (si elle est présente) après que le rendu du template soit terminé  
- **S'assurer** que la fonctionnalité fonctionne pour toute route avec un callback défini  
- **Tester** que le message dans la console apparaît lors de la visite du tableau de bord  

## Grille d'Évaluation

| Critères | Exemplaire                                                                                                                        | Adéquat                                                                                                                                                                                   | À Améliorer                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Les deux fonctionnalités sont implémentées et fonctionnent. Le titre et l'ajout de code fonctionnent également pour une nouvelle route ajoutée dans la déclaration `routes`. | Les deux fonctionnalités fonctionnent, mais le comportement est codé en dur et non configurable via la déclaration `routes`. L'ajout d'une troisième route avec titre et ajout de code ne fonctionne pas ou fonctionne partiellement. | Une des fonctionnalités est manquante ou ne fonctionne pas correctement. |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer la précision, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant autorité. Pour les informations critiques, il est recommandé de faire appel à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d’interprétations erronées résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->