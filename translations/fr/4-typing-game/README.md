# Programmation Événementielle - Créez un Jeu de Dactylographie

```mermaid
journey
    title Votre parcours de développement de jeu de frappe
    section Fondation
      Planifier la structure du jeu: 3: Student
      Concevoir l'interface utilisateur: 4: Student
      Configurer les éléments HTML: 4: Student
    section Fonctionnalité
      Gérer la saisie utilisateur: 4: Student
      Suivre le temps: 5: Student
      Calculer la précision: 5: Student
    section Fonctionnalités
      Ajouter un retour visuel: 5: Student
      Implémenter la logique du jeu: 5: Student
      Peaufiner l'expérience: 5: Student
```
## Introduction

Voici quelque chose que tout développeur sait mais dont on parle rarement : taper vite est un super pouvoir ! 🚀 Pensez-y - plus vous pouvez transférer rapidement vos idées de votre cerveau à votre éditeur de code, plus votre créativité peut s'exprimer. C'est comme avoir un canal direct entre vos pensées et l'écran.

```mermaid
pie title Fonctionnalités du jeu
    "Retour en temps réel" : 25
    "Suivi des performances" : 20
    "Interface interactive" : 20
    "Système de minuterie" : 15
    "Gestion des citations" : 10
    "Affichage des résultats" : 10
```
Vous voulez savoir l'un des meilleurs moyens pour améliorer cette compétence ? Vous avez deviné - nous allons créer un jeu !

```mermaid
flowchart LR
    A[Joueur commence le jeu] --> B[Citation aléatoire affichée]
    B --> C[Joueur tape les caractères]
    C --> D{Caractère correct ?}
    D -->|Oui| E[Surlignage vert]
    D -->|Non| F[Surlignage rouge]
    E --> G[Mise à jour de la précision]
    F --> G
    G --> H{Citation terminée ?}
    H -->|Non| C
    H -->|Oui| I[Calculer les MPM]
    I --> J[Afficher les résultats]
    J --> K[Rejouer ?]
    K -->|Oui| B
    K -->|Non| L[Jeu terminé]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Créons ensemble un jeu de dactylographie génial !

Prêt à mettre en pratique toutes ces compétences en JavaScript, HTML et CSS que vous avez apprises ? Nous allons construire un jeu de dactylographie qui vous mettra au défi avec des citations aléatoires du légendaire détective [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes). Le jeu suivra votre vitesse et votre précision de frappe - et croyez-moi, c'est plus addictif que vous ne le pensez !

```mermaid
mindmap
  root((Développement du Jeu de Dactylographie))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```
![demo](../../../4-typing-game/images/demo.gif)

## Ce Que Vous Devez Savoir

```mermaid
flowchart TD
    A[Action Utilisateur] --> B{Type d'Événement ?}
    B -->|Pression Touche| C[Événement Clavier]
    B -->|Clic Bouton| D[Événement Souris]
    B -->|Minuteur| E[Événement Temps]
    
    C --> F[Vérifier Caractère]
    D --> G[Démarrer/Réinitialiser Jeu]
    E --> H[Mettre à Jour Minuteur]
    
    F --> I{Correct ?}
    I -->|Oui| J[Surligner Vert]
    I -->|Non| K[Surligner Rouge]
    
    J --> L[Mettre à Jour Score]
    K --> L
    L --> M[Vérifier État Jeu]
    
    G --> N[Générer Nouvelle Citation]
    H --> O[Afficher Temps]
    
    M --> P{Jeu Terminé ?}
    P -->|Oui| Q[Afficher Résultats]
    P -->|Non| R[Continuer Jeu]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Avant de commencer, assurez-vous d'être à l'aise avec ces concepts (ne vous inquiétez pas si vous avez besoin d'un rafraîchissement rapide - nous sommes tous passés par là !) :

- Créer des contrôles de saisie de texte et de boutons
- CSS et définition de styles avec des classes  
- Notions de base en JavaScript
  - Créer un tableau
  - Générer un nombre aléatoire
  - Obtenir l'heure actuelle

Si certains de ces points vous semblent un peu rouillés, ce n’est pas grave du tout ! Parfois, la meilleure façon de consolider vos connaissances est de plonger dans un projet et de comprendre les choses en avançant.

### 🔄 **Bilan Pédagogique**
**Évaluation des Fondations** : Avant de commencer le développement, assurez-vous de comprendre :
- ✅ Comment fonctionnent les formulaires HTML et les éléments d'entrée
- ✅ Les classes CSS et le style dynamique
- ✅ Les écouteurs d'événements et gestionnaires en JavaScript
- ✅ La manipulation des tableaux et la sélection aléatoire
- ✅ La mesure du temps et les calculs associés

**Test Rapide** : Pouvez-vous expliquer comment ces concepts fonctionnent ensemble dans un jeu interactif ?
- **Les événements** se déclenchent lorsque les utilisateurs interagissent avec des éléments
- **Les gestionnaires** traitent ces événements et mettent à jour l'état du jeu
- **Le CSS** fournit un retour visuel aux actions de l'utilisateur
- **Le chronométrage** permet de mesurer les performances et la progression du jeu

```mermaid
quadrantChart
    title Développement des compétences dans le jeu de dactylographie
    x-axis Débutant --> Expert
    y-axis Statique --> Interactif
    quadrant-1 Jeux avancés
    quadrant-2 Applications en temps réel
    quadrant-3 Pages basiques
    quadrant-4 Sites interactifs
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Construisons Ce Projet !

[Créer un jeu de dactylographie en utilisant la programmation événementielle](./typing-game/README.md)

### ⚡ **Ce Que Vous Pouvez Faire Dans Les 5 Prochaines Minutes**
- [ ] Ouvrez la console de votre navigateur et essayez d'écouter les événements clavier avec `addEventListener`
- [ ] Créez une page HTML simple avec un champ de saisie et testez la détection de frappe
- [ ] Pratiquez la manipulation des chaînes en comparant le texte saisi avec le texte cible
- [ ] Expérimentez avec `setTimeout` pour comprendre les fonctions de temporisation

### 🎯 **Ce Que Vous Pouvez Accomplir Cette Heure**
- [ ] Complétez le quiz post-leçon et comprenez la programmation événementielle
- [ ] Construisez une version basique du jeu de dactylographie avec validation des mots
- [ ] Ajoutez un retour visuel pour les frappes correctes et incorrectes
- [ ] Implémentez un système de score simple basé sur la vitesse et la précision
- [ ] Stylisez votre jeu avec CSS pour le rendre visuellement attractif

### 📅 **Votre Développement de Jeu Sur Une Semaine**
- [ ] Terminez le jeu complet avec toutes ses fonctionnalités et la finition
- [ ] Ajoutez des niveaux de difficulté avec une complexité variable des mots
- [ ] Implémentez le suivi des statistiques utilisateur (Mots Par Minute, précision dans le temps)
- [ ] Créez des effets sonores et des animations pour une meilleure expérience utilisateur
- [ ] Rendez votre jeu responsive pour les appareils tactiles
- [ ] Partagez votre jeu en ligne et recueillez les retours des utilisateurs

### 🌟 **Votre Développement Interactif Sur Un Mois**
- [ ] Créez plusieurs jeux explorant différents modes d’interaction
- [ ] Apprenez les boucles de jeu, la gestion d’état, et l’optimisation des performances
- [ ] Contribuez à des projets open source de développement de jeux
- [ ] Maîtrisez les concepts avancés de chronométrage et animations fluides
- [ ] Constituez un portfolio présentant diverses applications interactives
- [ ] Devenez mentor pour d’autres intéressés par le développement de jeux et l’interaction utilisateur

## 🎯 Votre Chronologie de Maîtrise du Jeu de Dactylographie

```mermaid
timeline
    title Progression d'apprentissage du développement de jeux
    
    section Configuration (10 minutes)
        Structure du projet : Fondement HTML
                         : Configuration du style CSS
                         : Création du fichier JavaScript
        
    section Interface utilisateur (20 minutes)
        Éléments interactifs : Champs de saisie
                            : Contrôles de bouton
                            : Zones d'affichage
                            : Mise en page réactive
        
    section Gestion des événements (25 minutes)
        Interaction utilisateur : Événements clavier
                               : Événements souris
                               : Retour en temps réel
                               : Gestion d'état
        
    section Logique du jeu (30 minutes)
        Fonctionnalité principale : Génération de citations
                                : Comparaison de caractères
                                : Calcul de précision
                                : Implémentation du minuteries
        
    section Suivi des performances (35 minutes)
        Métriques & analyses : Calcul des MPM
                             : Suivi des erreurs
                             : Visualisation des progrès
                             : Affichage des résultats
        
    section Finition & amélioration (45 minutes)
        Expérience utilisateur : Retour visuel
                               : Effets sonores
                               : Animations
                               : Fonctionnalités d'accessibilité
        
    section Fonctionnalités avancées (1 semaine)
        Fonctionnalité étendue : Niveaux de difficulté
                              : Classements
                              : Citations personnalisées
                              : Options multijoueurs
        
    section Compétences professionnelles (1 mois)
        Développement de jeux : Optimisation des performances
                             : Architecture du code
                             : Stratégies de test
                             : Modèles de déploiement
```
### 🛠️ Résumé de Votre Boîte à Outils de Développement de Jeu

Après avoir terminé ce projet, vous aurez maîtrisé :
- **Programmation Événementielle** : Interfaces utilisateurs réactives aux entrées
- **Retour en Temps Réel** : Mises à jour visuelles et de performance instantanées
- **Mesure de Performance** : Systèmes précis de chronométrage et de score
- **Gestion de l’État du Jeu** : Contrôle du flux de l’application et de l’expérience utilisateur
- **Conception Interactive** : Création d’expériences addictives et engageantes
- **APIs Web Modernes** : Exploitation des capacités du navigateur pour des interactions riches
- **Patrons d’Accessibilité** : Design inclusif pour tous les utilisateurs

**Applications Réelles** : Ces compétences s’appliquent directement à :
- **Applications Web** : Toute interface interactive ou tableau de bord
- **Logiciels Éducatifs** : Plateformes d’apprentissage et outils d’évaluation des compétences
- **Outils de Productivité** : Éditeurs de texte, IDE et logiciels de collaboration
- **Industrie du Jeu** : Jeux sur navigateur et divertissement interactif
- **Développement Mobile** : Interfaces tactiles et gestion des gestes

**Niveau Suivant** : Vous êtes prêt à explorer des frameworks de jeu avancés, des systèmes multijoueurs en temps réel ou des applications interactives complexes !

## Crédits

Écrit avec ♥️ par [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’en assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des imprécisions. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour les informations critiques, une traduction professionnelle réalisée par un humain est recommandée. Nous déclinons toute responsabilité en cas de malentendus ou de mauvaises interprétations résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->