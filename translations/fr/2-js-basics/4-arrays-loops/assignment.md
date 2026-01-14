<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2026-01-06T06:11:22+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "fr"
}
-->
# Devoir sur les Tableaux et les Boucles

## Instructions

Complétez les exercices suivants pour pratiquer le travail avec les tableaux et les boucles. Chaque exercice s'appuie sur des concepts de la leçon et vous encourage à appliquer différents types de boucles et méthodes de tableau.

### Exercice 1 : Générateur de motif numérique
Créez un programme qui liste chaque 3ᵉ nombre entre 1 et 20 et l'affiche dans la console.

**Exigences :**
- Utilisez une boucle `for` avec un incrément personnalisé
- Affichez les nombres dans un format convivial
- Ajoutez des commentaires descriptifs expliquant votre logique

**Sortie attendue :**
```
3, 6, 9, 12, 15, 18
```

> **Conseil :** Modifiez l'expression d'itération dans votre boucle for pour sauter des nombres.

### Exercice 2 : Analyse de tableau
Créez un tableau d'au moins 8 nombres différents et écrivez des fonctions pour analyser les données.

**Exigences :**
- Créez un tableau appelé `numbers` avec au moins 8 valeurs
- Écrivez une fonction `findMaximum()` qui retourne le nombre le plus élevé
- Écrivez une fonction `findMinimum()` qui retourne le nombre le plus bas  
- Écrivez une fonction `calculateSum()` qui retourne la somme de tous les nombres
- Testez chaque fonction et affichez les résultats

**Défi bonus :** Créez une fonction qui trouve le second plus grand nombre dans le tableau.

### Exercice 3 : Traitement d'un tableau de chaînes
Créez un tableau de vos films/livres/chansons préférés et pratiquez différents types de boucles.

**Exigences :**
- Créez un tableau avec au moins 5 valeurs chaîne
- Utilisez une boucle `for` traditionnelle pour afficher les éléments avec des numéros (1. Nom de l'élément)
- Utilisez une boucle `for...of` pour afficher les éléments en majuscules
- Utilisez la méthode `forEach()` pour compter et afficher le total des caractères

**Exemple de sortie :**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Exercice 4 : Filtrage de données (Avancé)
Créez un programme qui traite un tableau d'objets représentant des étudiants.

**Exigences :**
- Créez un tableau d'au moins 5 objets étudiants avec les propriétés : `name`, `age`, `grade`
- Utilisez des boucles pour trouver les étudiants âgés de 18 ans ou plus
- Calculez la moyenne des notes de tous les étudiants
- Créez un nouveau tableau contenant uniquement les étudiants ayant des notes supérieures à 85

**Structure d'exemple :**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Ajouter plus d'étudiants...
];
```

## Tester votre code

Testez vos programmes en :
1. Exécutant chaque exercice dans la console de votre navigateur
2. Vérifiant que les sorties correspondent aux résultats attendus
3. Testant avec différents ensembles de données
4. Vérifiant que votre code gère les cas limites (tableaux vides, éléments uniques)

## Consignes de soumission

Incluez les éléments suivants dans votre soumission :
- Code JavaScript bien commenté pour chaque exercice
- Captures d'écran ou sortie texte montrant vos programmes en fonctionnement
- Brève explication du type de boucle choisi pour chaque tâche et pourquoi

## Grille d'évaluation

| Critères | Exemplaire (3 points) | Suffisant (2 points) | À améliorer (1 point) |
| -------- | --------------------- | -------------------- | -------------------- |
| **Fonctionnalité** | Tous les exercices réalisés correctement avec les défis bonus | Tous les exercices requis fonctionnent correctement | Certains exercices incomplets ou comportant des erreurs |
| **Qualité du code** | Code propre, bien organisé avec des noms de variables explicites | Code fonctionne mais pourrait être plus propre | Code désordonné ou difficile à comprendre |
| **Commentaires** | Commentaires complets expliquant la logique et les décisions | Commentaires basiques présents | Peu ou pas de commentaires |
| **Utilisation des boucles** | Montre une bonne compréhension des différents types de boucles | Utilise correctement les boucles mais avec peu de variété | Utilisation incorrecte ou inefficace des boucles |
| **Tests** | Preuve de tests approfondis avec plusieurs scénarios | Tests basiques démontrés | Peu de preuves de tests |

## Questions de réflexion

Après avoir terminé les exercices, réfléchissez à :
1. Quel type de boucle vous a paru le plus naturel à utiliser et pourquoi ?
2. Quelles difficultés avez-vous rencontrées en travaillant avec les tableaux ?
3. Comment ces compétences pourraient-elles s'appliquer à des projets de développement web réels ?
4. Que feriez-vous différemment si vous deviez optimiser votre code pour les performances ?

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforçons d'assurer l'exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue native doit être considéré comme la source faisant foi. Pour les informations sensibles, une traduction professionnelle réalisée par un humain est recommandée. Nous ne sommes pas responsables des malentendus ou des mauvaises interprétations résultant de l'utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->