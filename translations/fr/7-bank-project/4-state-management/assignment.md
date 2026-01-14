<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2026-01-06T06:41:46+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "fr"
}
-->
# Implémenter la boîte de dialogue "Ajouter une transaction"

## Vue d'ensemble

Votre application bancaire dispose désormais d'une gestion d'état solide et d'une persistance des données, mais il lui manque une fonctionnalité cruciale dont les vraies applications bancaires ont besoin : la possibilité pour les utilisateurs d'ajouter leurs propres transactions. Dans cette tâche, vous allez implémenter une boîte de dialogue complète "Ajouter une transaction" qui s'intègre parfaitement avec votre système de gestion d'état existant.

Cette tâche rassemble tout ce que vous avez appris dans les quatre leçons bancaires : le templating HTML, la gestion des formulaires, l’intégration API et la gestion d’état.

## Objectifs d'apprentissage

En complétant cette tâche, vous allez :
- **Créer** une interface de dialogue conviviale pour la saisie des données
- **Implémenter** une conception de formulaire accessible avec support clavier et lecteur d'écran
- **Intégrer** les nouvelles fonctionnalités avec votre système de gestion d’état existant
- **Pratiquer** la communication API et la gestion des erreurs
- **Appliquer** des modèles modernes de développement web à une fonctionnalité réelle

## Instructions

### Étape 1 : Bouton Ajouter une transaction

**Créer** un bouton "Ajouter une transaction" sur votre page de tableau de bord que les utilisateurs peuvent facilement trouver et utiliser.

**Exigences :**
- **Placer** le bouton à un emplacement logique sur le tableau de bord
- **Utiliser** un texte clair et orienté action pour le bouton
- **Styliser** le bouton pour qu’il corresponde à votre design UI existant
- **Assurer** que le bouton soit accessible au clavier

### Étape 2 : Implémentation de la boîte de dialogue

Choisissez l’une de ces deux approches pour implémenter votre boîte de dialogue :

**Option A : Page séparée**
- **Créer** un nouveau template HTML pour le formulaire de transaction
- **Ajouter** une nouvelle route dans votre système de routage
- **Implémenter** la navigation vers et depuis la page du formulaire

**Option B : Boîte de dialogue modale (recommandé)**
- **Utiliser** JavaScript pour afficher/masquer la boîte de dialogue sans quitter le tableau de bord
- **Implémenter** en utilisant la [propriété `hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) ou des classes CSS
- **Créer** une expérience utilisateur fluide avec une gestion correcte du focus

### Étape 3 : Implémentation de l'accessibilité

**Assurer** que votre boîte de dialogue respecte les [normes d'accessibilité pour les dialogues modaux](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) :

**Navigation clavier :**
- **Supporter** la touche Échap pour fermer la boîte de dialogue
- **Piéger** le focus à l’intérieur de la boîte de dialogue lorsqu’elle est ouverte
- **Restaurer** le focus sur le bouton déclencheur lors de la fermeture

**Support lecteur d’écran :**
- **Ajouter** des labels et rôles ARIA appropriés
- **Annoncer** l’ouverture/fermeture de la boîte de dialogue aux lecteurs d’écran
- **Fournir** des étiquettes claires pour les champs de formulaire et les messages d’erreur

### Étape 4 : Création du formulaire

**Concevoir** un formulaire HTML qui collecte les données de transaction :

**Champs requis :**
- **Date** : Quand la transaction a eu lieu
- **Description** : À quoi correspond la transaction
- **Montant** : Valeur de la transaction (positive pour revenu, négative pour dépense)

**Fonctionnalités du formulaire :**
- **Valider** les entrées utilisateur avant la soumission
- **Fournir** des messages d’erreur clairs pour les données invalides
- **Inclure** des textes indicatifs et des étiquettes utiles
- **Styliser** de manière cohérente avec votre design existant

### Étape 5 : Intégration API

**Connecter** votre formulaire à l’API backend :

**Étapes d’implémentation :**
- **Consulter** les [spécifications de l’API serveur](../api/README.md) pour l’endpoint et le format des données corrects
- **Créer** des données JSON à partir des entrées du formulaire
- **Envoyer** les données à l’API avec gestion d’erreurs appropriée
- **Afficher** des messages de succès/échec à l’utilisateur
- **Gérer** proprement les erreurs réseau

### Étape 6 : Intégration avec la gestion d’état

**Mettre à jour** votre tableau de bord avec la nouvelle transaction :

**Exigences d’intégration :**
- **Actualiser** les données du compte après l’ajout réussi de la transaction
- **Mettre à jour** l’affichage du tableau de bord sans recharger la page
- **Faire apparaître** immédiatement la nouvelle transaction
- **Maintenir** la cohérence de l’état tout au long du processus

## Spécifications techniques

**Détails de l’endpoint API :**
Référez-vous à la [documentation API serveur](../api/README.md) pour :
- Le format JSON requis pour les données de transaction
- La méthode HTTP et l’URL de l’endpoint
- Le format de la réponse attendue
- La gestion des réponses d’erreur

**Résultat attendu :**
Après avoir réalisé cette tâche, votre application bancaire doit disposer d’une fonctionnalité "Ajouter une transaction" complètement fonctionnelle, professionnelle en apparence et en comportement :

![Capture d'écran montrant un exemple de boîte de dialogue "Ajouter une transaction"](../../../../translated_images/dialog.93bba104afeb79f1.fr.png)

## Tester votre implémentation

**Tests fonctionnels :**
1. **Vérifier** que le bouton "Ajouter une transaction" est clairement visible et accessible
2. **Tester** l’ouverture et la fermeture correcte de la boîte de dialogue
3. **Confirmer** que la validation du formulaire fonctionne pour tous les champs requis
4. **Vérifier** que les transactions réussies apparaissent immédiatement sur le tableau de bord
5. **S’assurer** que la gestion des erreurs fonctionne pour les données invalides et les problèmes réseau

**Tests d’accessibilité :**
1. **Naviguer** dans tout le processus uniquement au clavier
2. **Tester** avec un lecteur d’écran pour assurer une annonce correcte
3. **Vérifier** que la gestion du focus fonctionne correctement
4. **Contrôler** que tous les éléments du formulaire ont des étiquettes appropriées

## Grille d’évaluation

| Critères | Exemplaire | Adéquat | À améliorer |
| -------- | ---------- | ------- | ----------- |
| **Fonctionnalité** | La fonction d’ajout de transaction fonctionne parfaitement avec une excellente expérience utilisateur et suit toutes les bonnes pratiques des leçons | La fonction d’ajout de transaction fonctionne correctement mais peut ne pas suivre certaines bonnes pratiques ou comporter de petits problèmes d’utilisabilité | La fonction d’ajout de transaction est partiellement fonctionnelle ou présente des problèmes importants d’utilisabilité |
| **Qualité du code** | Le code est bien organisé, suit les modèles établis, inclut une bonne gestion des erreurs et s’intègre parfaitement avec la gestion d’état existante | Le code fonctionne mais peut avoir des problèmes d’organisation ou des modèles incohérents par rapport au code existant | Le code présente des problèmes structurels importants ou ne s’intègre pas bien avec les modèles existants |
| **Accessibilité** | Support complet de la navigation au clavier, compatibilité avec les lecteurs d’écran, et respect des directives WCAG avec une excellente gestion du focus | Fonctionnalités d’accessibilité de base implémentées mais peut manquer certaines options de navigation au clavier ou de support lecteur d’écran | Considérations d’accessibilité limitées ou inexistantes |
| **Expérience utilisateur** | Interface intuitive, soignée avec des retours clairs, des interactions fluides et une apparence professionnelle | Bonne expérience utilisateur avec quelques points à améliorer en termes de retour utilisateur ou design visuel | Mauvaise expérience utilisateur avec une interface confuse ou un manque de retours utilisateur |

## Défis supplémentaires (optionnel)

Une fois les exigences de base complétées, vous pouvez envisager ces améliorations :

**Fonctionnalités avancées :**
- **Ajouter** des catégories de transaction (alimentation, transports, loisirs, etc.)
- **Implémenter** une validation des entrées avec retour en temps réel
- **Créer** des raccourcis clavier pour les utilisateurs avancés
- **Ajouter** des fonctionnalités d’édition et de suppression de transactions

**Intégration avancée :**
- **Implémenter** une fonction d’annulation pour les transactions récemment ajoutées
- **Ajouter** l’importation massive de transactions depuis des fichiers CSV
- **Créer** des fonctionnalités de recherche et filtrage de transactions
- **Implémenter** l’export des données

Ces fonctionnalités optionnelles vous aideront à approfondir vos connaissances en développement web avancé et à créer une application bancaire plus complète !

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant autorité. Pour les informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous ne saurions être tenus responsables de toute mauvaise compréhension ou interprétation résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->