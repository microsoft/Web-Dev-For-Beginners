<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T06:45:58+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "fr"
}
-->
# Devoir Pratique HTML : Créez une Maquette de Blog

## Objectifs d'apprentissage

Mettez en pratique vos connaissances en HTML en concevant et en codant une structure complète de page d'accueil de blog. Ce devoir pratique renforcera vos compétences sur les concepts HTML sémantiques, les meilleures pratiques d'accessibilité, et l'organisation professionnelle du code que vous utiliserez tout au long de votre parcours de développement web.

**En réalisant ce devoir, vous allez :**
- Pratiquer la planification de mises en page web avant de coder
- Appliquer correctement les éléments HTML sémantiques
- Créer un balisage accessible et bien structuré
- Développer des habitudes de codage professionnelles avec des commentaires et une organisation

## Exigences du projet

### Partie 1 : Planification du design (Maquette visuelle)

**Créez une maquette visuelle de votre page d'accueil de blog incluant :**
- En-tête avec le titre du site et la navigation
- Zone de contenu principal avec au moins 2-3 aperçus d’articles de blog
- Barre latérale avec des informations supplémentaires (section à propos, articles récents, catégories)
- Pied de page avec les informations de contact ou des liens

**Options de création de maquette :**
- **Croquis à la main** : utilisez du papier et un crayon, puis photographiez ou scannez votre design
- **Outils numériques** : Figma, Adobe XD, Canva, PowerPoint ou toute application de dessin
- **Outils de wireframe** : Balsamiq, MockFlow ou logiciel similaire de wireframing

**Étiquetez les sections de votre maquette** avec les éléments HTML que vous prévoyez d’utiliser (par exemple, "En-tête - `<header>`", "Articles de blog - `<article>`").

### Partie 2 : Planification des éléments HTML

**Créez une liste associant chaque section de votre maquette à des éléments HTML spécifiques :**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Éléments obligatoires à inclure :**
Votre HTML doit contenir au moins 10 éléments sémantiques différents issus de cette liste :
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Partie 3 : Implémentation HTML

**Codez votre page d'accueil de blog en respectant ces standards :**

1. **Structure du document** : inclure les éléments DOCTYPE, html, head, et body corrects
2. **Balisage sémantique** : utiliser les éléments HTML pour leur usage prévu
3. **Accessibilité** : inclure un texte alternatif approprié pour les images et un texte de lien significatif
4. **Qualité du code** : utiliser une indentation cohérente et des commentaires pertinents
5. **Contenu** : inclure un contenu de blog réaliste (vous pouvez utiliser du texte factice)

**Structure HTML exemple :**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```


### Partie 4 : Réflexion

**Rédigez une brève réflexion (3-5 phrases) abordant :**
- Quels éléments HTML maîtrisiez-vous le mieux ?
- Quels défis avez-vous rencontrés lors de la planification ou du codage ?
- Comment le HTML sémantique a-t-il aidé à organiser votre contenu ?
- Que feriez-vous différemment dans votre prochain projet HTML ?

## Liste de vérification avant soumission

**Avant de soumettre, assurez-vous d’avoir :**
- [ ] Maquette visuelle avec éléments HTML étiquetés
- [ ] Fichier HTML complet avec une structure de document correcte
- [ ] Au moins 10 éléments HTML sémantiques différents utilisés à bon escient
- [ ] Commentaires pertinents expliquant la structure de votre code
- [ ] Syntaxe HTML valide (testée dans un navigateur)
- [ ] Réflexion écrite répondant aux questions posées

## Grille d’évaluation

| Critères | Exemplaire (4) | Compétent (3) | En développement (2) | Débutant (1) |
|----------|----------------|---------------|---------------------|--------------|
| **Planification & Design** | Maquette détaillée et bien étiquetée montrant une compréhension claire de la mise en page et de la structure sémantique HTML | Maquette claire avec la plupart des sections étiquetées correctement | Maquette basique avec quelques étiquetages, montre une compréhension générale | Maquette minimale ou peu claire, identification des sections insuffisante |
| **Utilisation du HTML sémantique** | Utilise plus de 10 éléments sémantiques de façon appropriée, démontre une compréhension approfondie de la structure HTML et de l’accessibilité | Utilise 8-9 éléments sémantiques correctement, bonne compréhension du balisage sémantique | Utilise 6-7 éléments sémantiques, confusion partielle sur l’utilisation appropriée | Utilise moins de 6 éléments ou mauvaise utilisation des éléments sémantiques |
| **Qualité & organisation du code** | Code exceptionnellement bien organisé, indentation correcte, commentaires complets, syntaxe HTML parfaite | Code bien organisé avec bonne indentation, commentaires utiles, syntaxe valide | Code généralement organisé avec quelques commentaires, petites erreurs de syntaxe | Mauvaise organisation, commentaires minimaux, nombreuses erreurs de syntaxe |
| **Accessibilité & bonnes pratiques** | Excellentes considérations d’accessibilité, textes alternatifs significatifs, hiérarchie correcte des titres, suit toutes les meilleures pratiques HTML actuelles | Bonnes caractéristiques d’accessibilité, utilisation appropriée des titres et textes alternatifs, suit la plupart des bonnes pratiques | Considérations d’accessibilité partielles, textes alternatifs et structure des titres basiques | Accessibilité limitée, mauvaise structure des titres, ne suit pas les bonnes pratiques |
| **Réflexion & apprentissage** | Réflexion pertinente montrant une compréhension approfondie des concepts HTML et une analyse réfléchie du processus d’apprentissage | Bonne réflexion montrant la compréhension des concepts clés et un certain niveau de conscience du processus d’apprentissage | Réflexion basique avec peu d’insights sur les concepts HTML ou le processus d’apprentissage | Réflexion minimale ou absente, peu de compréhension des concepts appris |

## Ressources d’apprentissage

**Références essentielles :**
- [MDN Référence des éléments HTML](https://developer.mozilla.org/docs/Web/HTML/Element) – Guide complet de tous les éléments HTML
- [Éléments sémantiques HTML5](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) – Comprendre le balisage sémantique
- [Directives d’accessibilité web](https://www.w3.org/WAI/WCAG21/quickref/) – Créer du contenu web accessible
- [Validateur HTML](https://validator.w3.org/) – Vérifiez la syntaxe de votre HTML

**Conseils professionnels pour réussir :**
- Commencez par votre maquette avant d’écrire le code
- Utilisez les outils développeur du navigateur pour inspecter votre structure HTML
- Testez votre page sur différentes tailles d’écran (même sans CSS)
- Lisez votre HTML à haute voix pour vérifier la logique de la structure
- Pensez à comment un lecteur d’écran interpréterait la structure de votre page

> 💡 **Rappel** : Ce devoir se concentre sur la structure et la sémantique HTML. Ne vous inquiétez pas du style visuel – c’est le rôle du CSS ! Votre page peut sembler simple, mais elle doit être bien structurée et pertinente.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous fassions de notre mieux pour garantir l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue native doit être considéré comme la source faisant foi. Pour les informations critiques, il est recommandé de faire appel à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d’interprétations erronées résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->