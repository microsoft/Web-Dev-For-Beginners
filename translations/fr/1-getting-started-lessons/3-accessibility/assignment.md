<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2026-01-06T06:54:47+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "fr"
}
-->
# Audit complet de l'accessibilité d'un site web

## Instructions

Dans ce devoir, vous réaliserez un audit d'accessibilité de niveau professionnel d'un site web réel, en appliquant les principes et techniques que vous avez appris. Cette expérience pratique approfondira votre compréhension des barrières et solutions en matière d'accessibilité.

Choisissez un site web qui semble présenter des problèmes d'accessibilité — cela vous offrira davantage d'opportunités d'apprentissage que d'analyser un site déjà parfait. Les bons candidats incluent les sites plus anciens, les applications web complexes, ou les sites avec un contenu multimédia riche.

### Phase 1 : Évaluation manuelle stratégique

Avant de recourir aux outils automatisés, effectuez une évaluation manuelle complète. Cette approche centrée sur l'humain révèle souvent des problèmes que les outils ne détectent pas et vous aide à mieux comprendre l'expérience utilisateur réelle.

**🔍 Critères essentiels d'évaluation :**

**Navigation et structure :**
- Pouvez-vous naviguer sur tout le site en utilisant uniquement le clavier (Tab, Maj+Tab, Entrée, Espace, flèches) ?
- Les indicateurs de focus sont-ils clairement visibles sur tous les éléments interactifs ?
- La structure des titres (H1-H6) crée-t-elle un plan logique du contenu ?
- Existe-t-il des liens permettant de passer directement au contenu principal ?

**Accessibilité visuelle :**
- Le contraste des couleurs est-il suffisant sur l’ensemble du site (minimum 4,5:1 pour le texte normal) ?
- Le site utilise-t-il uniquement la couleur pour transmettre des informations importantes ?
- Toutes les images disposent-elles d’un texte alternatif approprié ?
- La mise en page reste-t-elle fonctionnelle lorsqu’on zoome à 200 % ?

**Contenu et communication :**
- Y a-t-il des liens avec un texte du type « cliquez ici » ou ambigu ?
- Pouvez-vous comprendre le contenu et les fonctionnalités sans indices visuels ?
- Les champs de formulaire sont-ils bien étiquetés et regroupés ?
- Les messages d’erreur sont-ils clairs et utiles ?

**Éléments interactifs :**
- Tous les boutons et contrôles de formulaire fonctionnent-ils uniquement au clavier ?
- Les changements de contenu dynamiques sont-ils annoncés aux lecteurs d’écran ?
- Les dialogues modaux et widgets complexes respectent-ils les modèles d’accessibilité appropriés ?

📝 **Documentez vos observations** avec des exemples spécifiques, captures d’écran et URL des pages. Notez tant les problèmes que les points positifs.

### Phase 2 : Tests automatisés approfondis

Maintenant, validez et complétez vos observations manuelles avec des outils standards d’évaluation d’accessibilité. Chaque outil a ses forces, utiliser plusieurs d’entre eux garantit une couverture complète.

**🛠️ Outils de test requis :**

1. **Audit d'accessibilité Lighthouse** (intégré dans Chrome/Edge DevTools)
   - Exécutez l’audit sur plusieurs pages
   - Concentrez-vous sur des métriques et recommandations spécifiques
   - Notez votre score d'accessibilité et les violations détectées

2. **axe DevTools** (extension de navigateur – standard industriel)
   - Détection d’incidents plus détaillée que Lighthouse
   - Fournit des exemples de code précis pour les corrections
   - Teste selon les critères WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (extension de navigateur)
   - Représentation visuelle des fonctionnalités d’accessibilité
   - Met en évidence erreurs et points positifs
   - Idéal pour comprendre la structure de la page

4. **Analyseurs de contraste des couleurs**
   - WebAIM Contrast Checker pour des paires de couleurs spécifiques
   - Extensions de navigateur pour analyse globale de la page
   - Testez selon les normes WCAG AA et AAA

**🎧 Tests avec technologies d’assistance réelles :**
- **Test avec lecteur d’écran** : utilisez NVDA (Windows), VoiceOver (Mac) ou TalkBack (Android)
- **Navigation uniquement au clavier** : débranchez la souris et naviguez sur tout le site
- **Test de zoom** : vérifiez la fonctionnalité à 200 % et 400 % de zoom
- **Test de commande vocale** : si disponible, essayez les outils de navigation vocale

**📊 Organisez vos résultats** en créant un tableau maître incluant :
- Description et localisation des problèmes
- Niveau de gravité (Critique/Élevé/Moyen/Faible)
- Critères de succès WCAG violés
- Outil ayant détecté l’incident
- Captures d’écran et preuves

### Phase 3 : Documentation complète des résultats

Créez un rapport professionnel d’audit d’accessibilité démontrant votre compréhension tant des problèmes techniques que de leur impact humain.

**📋 Sections requises du rapport :**

1. **Résumé exécutif** (1 page)
   - URL du site et brève description
   - Niveau global de maturité d’accessibilité
   - Top 3 des problèmes les plus critiques
   - Impact estimé sur les utilisateurs en situation de handicap

2. **Méthodologie** (½ page)
   - Approche et outils utilisés
   - Pages évaluées et combinaisons appareil/navigateur
   - Normes évaluées (WCAG 2.1 AA)

3. **Résultats détaillés** (2-3 pages)
   - Problèmes classés par principe WCAG (Perceptible, Utilisable, Compréhensible, Robuste)
   - Inclure captures d’écran et exemples spécifiques
   - Noter les fonctionnalités d’accessibilité positives identifiées
   - Recouper avec les résultats des outils automatisés

4. **Évaluation de l’impact utilisateur** (1 page)
   - Comment les problèmes affectent les utilisateurs avec différents handicaps
   - Scénarios décrivant des expériences utilisateur réelles
   - Impact commercial (risque légal, SEO, expansion de la base utilisateur)

**📸 Collecte des preuves :**
- Captures d’écran des violations d’accessibilité
- Enregistrements d’écran des parcours utilisateurs problématiques
- Rapports des outils (sauvegardés en PDF)
- Exemples de code illustrant les problèmes

### Phase 4 : Plan professionnel de remédiation

Élaborez un plan stratégique et priorisé pour corriger les problèmes d’accessibilité. Cela prouve votre capacité à penser comme un développeur web professionnel confronté à des contraintes réelles.

**🎯 Créez des recommandations détaillées d’amélioration (minimum 10 problèmes) :**

**Pour chaque problème identifié, fournissez :**

- **Description du problème** : Explication claire de l’erreur et pourquoi elle est problématique
- **Référence WCAG** : Critère de succès spécifique violé (ex. « 2.4.4 But du lien (dans le contexte) – niveau A »)
- **Impact utilisateur** : Comment cela affecte les personnes avec diverses déficiences
- **Solution** : Modifications précises de code, design ou processus
- **Niveau de priorité** : Critique (bloque usage basique) / Élevé (barrière significative) / Moyen (problème d’utilisabilité) / Faible (amélioration)
- **Effort de mise en œuvre** : Estimation temps/complexité (Gain rapide / Effort modéré / Refactorisation majeure)
- **Vérification du test** : Comment vérifier que la correction fonctionne

**Exemple d’entrée d’amélioration :**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```
  
**📈 Phases stratégiques de mise en œuvre :**

- **Phase 1 (0-2 semaines)** : Problèmes critiques bloquant la fonctionnalité de base  
- **Phase 2 (1-2 mois)** : Améliorations prioritaires pour une meilleure expérience utilisateur  
- **Phase 3 (3-6 mois)** : Améliorations de priorité moyenne et optimisation des processus  
- **Phase 4 (Continu)** : Suivi et amélioration continue

## Grille d’évaluation

Votre audit d’accessibilité sera évalué à la fois sur la précision technique et la présentation professionnelle :

| Critères | Excellent (90-100 %) | Bon (80-89 %) | Satisfaisant (70-79 %) | À améliorer (<70 %) |
|----------|---------------------|---------------|------------------------|--------------------|
| **Profondeur des tests manuels** | Évaluation complète couvrant tous les principes POUR avec observations détaillées et scénarios utilisateurs | Bonne couverture des principales zones d’accessibilité avec constatations claires et analyse d’impact utilisateur | Évaluation basique couvrant les zones clés avec observations adéquates | Tests limités, observations superficielles, impact utilisateur peu considéré |
| **Utilisation et analyse des outils** | Utilisation efficace de tous les outils requis, recoupement des résultats, preuves claires, analyse des limites | Utilisation de la plupart des outils avec bonne documentation, certains recoupements et preuves suffisantes | Utilisation des outils requis avec documentation basique et quelques preuves | Utilisation minimale des outils, documentation faible, preuves manquantes |
| **Identification et catégorisation des problèmes** | Identification de 15+ problèmes spécifiques sur tous les principes WCAG, catégorisation précise par gravité, compréhension approfondie | Identification de 10-14 problèmes couvrant la plupart des principes, bonne catégorisation, compréhension solide | Identification de 7-9 problèmes avec couverture WCAG acceptable et catégorisation basique | Identification de moins de 7 problèmes, portée limitée ou mauvaise catégorisation |
| **Qualité et faisabilité des solutions** | 10+ solutions détaillées, exploitables avec références WCAG précises, plans de mise en œuvre réalistes et méthodes de vérification | 8-9 solutions bien développées avec références correctes et bonnes indications d’implémentation | 6-7 solutions basiques avec quelques détails et approches généralement réalistes | Moins de 6 solutions, détails insuffisants, plans irréalistes |
| **Communication professionnelle** | Rapport très bien organisé, écrit clairement, avec résumé exécutif, langage technique approprié, conforme aux standards business | Bien organisé, bonne qualité rédactionnelle, inclut la plupart des sections requises, ton approprié | Organisation acceptable, écriture convenable, inclut sections de base requises | Organisation faible, écriture peu claire ou sections clés manquantes |
| **Application pratique** | Montre compréhension de l’impact commercial, des aspects légaux, de la diversité utilisateur et des difficultés pratiques d’implémentation | Bonne compréhension des aspects pratiques avec un certain contexte commercial | Compréhension basique des applications dans le monde réel | Faible lien avec les applications pratiques |

## Options de défi avancé

**🚀 Pour les étudiants recherchant un défi supplémentaire :**

- **Analyse comparative** : Auditez 2-3 sites concurrents et comparez leur maturité en accessibilité  
- **Focalisation sur l’accessibilité mobile** : Analyse approfondie des problèmes d’accessibilité spécifiques au mobile avec TalkBack Android ou VoiceOver iOS  
- **Perspective internationale** : Recherchez et appliquez les normes d’accessibilité de différents pays (EN 301 549, Section 508, ADA)  
- **Revue de la déclaration d’accessibilité** : Évaluez la déclaration d’accessibilité existante du site (le cas échéant) par rapport à vos constats

## Livrables

Soumettez un rapport complet d’audit d’accessibilité démontrant une analyse professionnelle et une planification pratique de mise en œuvre :

**📄 Exigences du rapport final :**

1. **Résumé exécutif** (1 page)  
   - Aperçu du site et évaluation de la maturité d’accessibilité  
   - Résumé des points clés avec impact commercial  
   - Actions prioritaires recommandées

2. **Méthodologie et périmètre** (1 page)  
   - Approche de test, outils utilisés et critères d’évaluation  
   - Pages/sections évaluées et limitations éventuelles  
   - Cadre de conformité aux normes (WCAG 2.1 AA)

3. **Rapport détaillé des résultats** (3-4 pages)  
   - Observations des tests manuels avec scénarios utilisateurs  
   - Résultats des outils automatisés avec recoupement  
   - Problèmes organisés par principes WCAG avec preuves  
   - Fonctionnalités positives d’accessibilité identifiées

4. **Plan stratégique de remédiation** (3-4 pages)  
   - Recommandations d’amélioration priorisées (minimum 10)  
   - Calendrier de mise en œuvre avec estimations d’effort  
   - Indicateurs de succès et méthodes de vérification  
   - Stratégie de maintenance continue de l’accessibilité

5. **Preuves à l’appui** (Annexes)  
   - Captures d’écran des violations et des outils utilisés  
   - Exemples de code illustrant problèmes et solutions  
   - Rapports des outils et synthèses d’audit  
   - Notes ou enregistrements de tests avec lecteur d’écran

**📊 Exigences de format :**  
- **Format du document** : PDF (présentation professionnelle)  
- **Nombre de mots** : 2 500 - 3 500 mots (hors annexes et captures d’écran)  
- **Éléments visuels** : Inclure captures d’écran, diagrammes et exemples tout au long du rapport  
- **Références** : Citer les directives WCAG et ressources d’accessibilité de façon appropriée

**💡 Conseils pour l’excellence :**  
- Utilisez une mise en forme professionnelle avec des titres et styles cohérents  
- Incluez une table des matières pour faciliter la navigation  
- Équilibrez précision technique et langage clair adapté au milieu professionnel  
- Montrez votre compréhension de la mise en œuvre technique et de l’impact utilisateur

## Objectifs d’apprentissage

Après avoir réalisé cet audit complet d’accessibilité, vous aurez développé des compétences professionnelles essentielles :

**🎯 Compétences techniques :**  
- **Maîtrise des tests d’accessibilité** : Compétence dans les méthodes manuelles et automatisées reconnues par l’industrie  
- **Application des WCAG** : Expérience pratique de mise en œuvre des directives d’accessibilité web en contexte réel  
- **Compréhension des technologies d’assistance** : Expérience concrète des lecteurs d’écran et navigation clavier  
- **Cartographie problème-solution** : Capacité à identifier les barrières d’accessibilité et à proposer des stratégies de remédiation spécifiques et applicables

**💼 Compétences professionnelles :**  
- **Communication technique** : Expérience de rédaction de rapports professionnels d’accessibilité pour des parties prenantes diverses  
- **Planification stratégique** : Aptitude à prioriser les améliorations en fonction de l’impact utilisateur et de la faisabilité technique  
- **Assurance qualité** : Compréhension du rôle des tests d’accessibilité dans le cycle de développement  
- **Évaluation des risques** : Sensibilité aux implications juridiques, commerciales et éthiques liées à la conformité en accessibilité

**🌍 Esprit de design inclusif :**  
- **Empathie utilisateur** : Approche approfondie des besoins divers et interactions avec les technologies d’assistance  
- **Principes du design universel** : Reconnaissance que la conception accessible bénéficie à tous, pas seulement aux personnes handicapées  
- **Amélioration continue** : Cadre pour l’évaluation et le renforcement régulier de l’accessibilité  
- **Compétences de plaidoyer** : Confiance pour promouvoir les bonnes pratiques d’accessibilité dans vos futurs projets et équipes

**🚀 Préparation à la carrière :**  
Ce devoir reflète des projets réels de conseil en accessibilité, vous apportant une expérience valorisable pour votre portfolio, démontrant :  
- Une approche systématique de résolution de problèmes  
- Une attention aux détails techniques et à l’impact commercial  
- Une communication claire de concepts techniques complexes  
- Une compréhension des responsabilités légales et éthiques en développement web

Une fois terminé, vous serez prêt à contribuer de manière significative aux initiatives d’accessibilité dans n’importe quel rôle de développement web et à défendre des pratiques de design inclusives tout au long de votre parcours professionnel.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant autorité. Pour les informations critiques, il est recommandé de faire appel à une traduction professionnelle humaine. Nous déclinons toute responsabilité en cas de malentendus ou d’interprétations erronées découlant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->