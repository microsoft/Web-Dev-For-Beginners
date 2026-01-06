<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2026-01-06T06:34:19+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "fr"
}
-->
# Stylisez votre application bancaire avec le CSS moderne

## Vue d'ensemble du projet

Transformez votre application bancaire fonctionnelle en une application web visuellement attrayante et professionnelle en utilisant des techniques CSS modernes. Vous créerez un système de design cohérent qui améliore l'expérience utilisateur tout en maintenant les principes d'accessibilité et de design responsive.

Cette tâche vous met au défi d'appliquer des modèles de design web contemporains, de mettre en œuvre une identité visuelle cohérente et de créer une interface que les utilisateurs trouveront à la fois attrayante et intuitive à utiliser.

## Instructions

### Étape 1 : Configurez votre feuille de styles

**Créez votre base CSS :**

1. **Créez** un nouveau fichier nommé `styles.css` à la racine de votre projet  
2. **Liez** la feuille de styles dans votre fichier `index.html` :  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
  
3. **Commencez** par une remise à zéro CSS et des valeurs par défaut modernes :  
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### Étape 2 : Exigences du système de design

**Mettez en œuvre ces éléments essentiels du design :**

#### Palette de couleurs
- **Couleur principale** : Choisissez une couleur professionnelle pour les boutons et les éléments importants  
- **Couleur secondaire** : Couleur complémentaire pour les accents et actions secondaires  
- **Couleurs neutres** : Gris pour le texte, les bordures et les arrière-plans  
- **Couleurs de succès/erreur** : Vert pour les états de succès, rouge pour les erreurs

#### Typographie
- **Hiérarchie des titres** : Distinction claire entre les éléments H1, H2, et H3  
- **Texte principal** : Taille de police lisible (minimum 16px) et hauteur de ligne appropriée  
- **Étiquettes de formulaire** : Style de texte clair et accessible

#### Mise en page et espaces
- **Espacement cohérent** : Utilisez une échelle d'espacement (8px, 16px, 24px, 32px)  
- **Système de grille** : Mise en page organisée pour les formulaires et sections de contenu  
- **Design responsive** : Approche mobile-first avec points de rupture

### Étape 3 : Style des composants

**Stylisez ces composants spécifiques :**

#### Formulaires
- **Champs de saisie** : Bordures professionnelles, états au focus, et styles de validation  
- **Boutons** : Effets au survol, états désactivés, et indicateurs de chargement  
- **Étiquettes** : Positionnement clair et indicateurs de champs obligatoires  
- **Messages d’erreur** : Style visible des erreurs et messages utiles

#### Navigation
- **En-tête** : Zone de navigation claire et brandée  
- **Liens** : États au survol clairs et indicateurs d’éléments actifs  
- **Logo/Titre** : Élément de marque distinctif

#### Zones de contenu
- **Sections** : Séparation visuelle claire entre différentes zones  
- **Cartes** : Si utilisation de mises en page en cartes, incluez ombres et bordures  
- **Arrière-plans** : Usage approprié de l’espace blanc et arrières-plans subtils

### Étape 4 : Fonctionnalités avancées (optionnel)

**Envisagez de mettre en œuvre ces fonctionnalités avancées :**
- **Mode sombre** : Basculer entre thèmes clair et sombre  
- **Animations** : Transitions subtiles et micro-interactions  
- **États de chargement** : Retour visuel pendant les soumissions de formulaires  
- **Images responsive** : Images optimisées pour différentes tailles d’écran

## Inspiration de design

**Caractéristiques des applications bancaires modernes :**
- **Design clair et minimaliste** avec beaucoup d’espace blanc  
- **Schémas de couleurs professionnelles** (bleus, verts, ou neutres sophistiqués)  
- **Hiérarchie visuelle claire** avec boutons d’appel à l’action bien mis en avant  
- **Contrastes accessibles** respectant les directives WCAG  
- **Mises en page responsive** fonctionnant sur tous les appareils

## Exigences techniques

### Organisation CSS  
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```


### Exigences d’accessibilité
- **Contraste de couleurs** : Assurez un ratio d’au moins 4.5:1 pour le texte normal  
- **Indicateurs de focus** : États de focus visibles pour la navigation clavier  
- **Étiquettes de formulaire** : Correctement associées aux champs  
- **Design responsive** : Utilisable sur des écrans de 320px à 1920px de largeur

## Grille d’évaluation

| Critère | Exemplaire (A) | Compétent (B) | En développement (C) | À améliorer (F) |
|----------|---------------|----------------|----------------|----------------------|
| **Système de design** | Met en œuvre un système complet avec des couleurs, typographies et espaces cohérents | Utilise un style cohérent avec des motifs clairs et bonne hiérarchie visuelle | Style basique appliqué avec quelques problèmes de cohérence ou éléments manquants | Style minimal avec choix incohérents ou contradictoires |
| **Expérience utilisateur** | Crée une interface intuitive, professionnelle avec excellente utilisabilité et attractivité visuelle | Offre une bonne expérience avec navigation claire et contenu lisible | Utilisabilité basique avec quelques améliorations UX nécessaires | Mauvaise utilisabilité, difficile à naviguer ou lire |
| **Implémentation technique** | Utilise des techniques CSS modernes, code organisé et suit les meilleures pratiques | Implémente efficacement le CSS avec bonne organisation et techniques appropriées | CSS fonctionnel mais peut manquer d’organisation ou de modernité | Implémentation CSS pauvre avec problèmes techniques ou de compatibilité |
| **Design responsive** | Design entièrement responsive fonctionnant parfaitement sur tous les appareils | Bon comportement responsive avec quelques légers problèmes sur certains écrans | Mise en œuvre responsive basique avec quelques problèmes de mise en page | Pas responsive ou problèmes significatifs sur mobile |
| **Accessibilité** | Respecte les directives WCAG avec excellente navigation clavier et support lecteur d’écran | Bonnes pratiques d’accessibilité avec contraste et indicateurs de focus adéquats | Considérations d’accessibilité basiques avec éléments manquants | Faible accessibilité, difficile pour les utilisateurs en situation de handicap |

## Consignes de soumission

**Incluez dans votre soumission :**  
- **styles.css** : votre feuille de styles complète  
- **HTML mis à jour** : toutes modifications HTML que vous avez effectuées  
- **Captures d’écran** : images montrant votre design sur desktop et mobile  
- **README** : description brève de vos choix de design et palette de couleurs

**Points bonus pour :**  
- **Propriétés CSS personnalisées** pour un thème maintenable  
- **Fonctionnalités CSS avancées** comme Grid, Flexbox ou animations CSS  
- **Considérations de performance** comme CSS optimisé et taille minimale de fichier  
- **Tests multi-navigateurs** garantissant la compatibilité sur différents navigateurs

> 💡 **Conseil pro** : Commencez par le design mobile, puis améliorez pour les écrans plus grands. Cette approche mobile-first garantit que votre application fonctionne bien sur tous les appareils et respecte les meilleures pratiques modernes du développement web.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avis de non-responsabilité** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforçons d’assurer l’exactitude, veuillez noter que les traductions automatisées peuvent comporter des erreurs ou des inexactitudes. Le document original dans sa langue native doit être considéré comme la source faisant foi. Pour toute information critique, une traduction professionnelle humaine est recommandée. Nous déclinons toute responsabilité en cas de malentendus ou de mauvaises interprétations résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->