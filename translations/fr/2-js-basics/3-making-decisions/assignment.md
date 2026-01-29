# Prise de décisions : Traitement des notes des étudiants

## Objectifs d'apprentissage

Dans cet exercice, vous pratiquerez les concepts de prise de décision de cette leçon en construisant un programme qui traite les notes des étudiants provenant de différents systèmes de notation. Vous utiliserez les instructions `if...else`, les opérateurs de comparaison et les opérateurs logiques pour déterminer quels étudiants réussissent leurs cours.

## Le défi

Vous travaillez pour une école qui a récemment fusionné avec une autre institution. Vous devez maintenant traiter les notes des étudiants issues de deux systèmes de notation totalement différents et déterminer quels étudiants réussissent. C’est une excellente occasion de pratiquer la logique conditionnelle !

### Comprendre les systèmes de notation

#### Premier système de notation (numérique)
- Les notes sont données sous forme de nombres de 1 à 5
- **Note de passage** : 3 et plus (3, 4 ou 5)
- **Note d’échec** : moins de 3 (1 ou 2)

#### Deuxième système de notation (lettres)
- Les notes utilisent des lettres : `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Notes de passage** : `A`, `A-`, `B`, `B-`, `C`, `C-` (toutes les notes listées sont des notes de passage)
- **Remarque** : Ce système n’inclut pas de notes d’échec comme `D` ou `F`

### Votre tâche

Étant donné le tableau `allStudents` représentant tous les étudiants et leurs notes, construisez un nouveau tableau `studentsWhoPass` contenant tous les étudiants qui réussissent selon leur système de notation respectif.

```javascript
let allStudents = [
  'A',    // Note en lettres - réussite
  'B-',   // Note en lettres - réussite
  1,      // Note numérique - échec
  4,      // Note numérique - réussite
  5,      // Note numérique - réussite
  2       // Note numérique - échec
];

let studentsWhoPass = [];
```

### Approche étape par étape

1. **Mettez en place une boucle** pour parcourir chaque note dans le tableau `allStudents`
2. **Vérifiez le type de note** (est-ce un nombre ou une chaîne de caractères ?)
3. **Appliquez les règles appropriées du système de notation** :
   - Pour les nombres : vérifiez si la note est >= 3
   - Pour les chaînes : vérifiez si c’est l’une des notes valides de passage
4. **Ajoutez les notes de passage** au tableau `studentsWhoPass`

### Techniques de code utiles

Utilisez ces concepts JavaScript abordés dans la leçon :

- **Opérateur typeof** : `typeof grade === 'number'` pour vérifier si c’est une note numérique
- **Opérateurs de comparaison** : `>=` pour comparer les notes numériques
- **Opérateurs logiques** : `||` pour vérifier plusieurs conditions de notes en lettres
- **Instructions if...else** : pour gérer les différents systèmes de notation
- **Méthodes de tableau** : `.push()` pour ajouter les notes de passage à votre nouveau tableau

### Résultat attendu

Quand vous exécutez votre programme, `studentsWhoPass` devrait contenir : `['A', 'B-', 4, 5]`

**Pourquoi ces notes passent :**
- `'A'` et `'B-'` sont des notes valides en lettres (toutes les notes en lettres de ce système sont des notes de passage)
- `4` et `5` sont des notes numériques >= 3
- `1` et `2` échouent car ce sont des notes numériques < 3

## Tester votre solution

Testez votre code avec différents scénarios :

```javascript
// Test avec différentes combinaisons de notes
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Votre solution doit fonctionner avec n'importe quelle combinaison de notes valides
```

## Défis bonus

Une fois l’exercice de base terminé, essayez ces extensions :

1. **Ajoutez une validation** : vérifiez les notes invalides (comme les nombres négatifs ou les lettres non valides)
2. **Comptez les statistiques** : calculez combien d’étudiants réussissent versus échouent
3. **Conversion des notes** : convertissez toutes les notes en un seul système numérique (A=5, B=4, C=3, etc.)

## Grille d’évaluation

| Critère | Exemplaire (4) | Compétent (3) | En développement (2) | Débutant (1) |
|----------|----------------|---------------|---------------------|--------------|
| **Fonctionnalité** | Programme identifie correctement toutes les notes de passage des deux systèmes | Programme fonctionne avec quelques problèmes mineurs ou cas particuliers | Programme fonctionne partiellement mais présente des erreurs logiques | Programme a des erreurs importantes ou ne fonctionne pas |
| **Structure du code** | Code propre, bien organisé avec une logique if...else appropriée | Bonne structure avec des instructions conditionnelles adaptées | Structure acceptable avec quelques problèmes organisationnels | Structure pauvre, logique difficile à suivre |
| **Utilisation des concepts** | Utilise efficacement les opérateurs de comparaison, opérateurs logiques et instructions conditionnelles | Bonne utilisation des concepts de la leçon avec quelques lacunes mineures | Utilisation partielle des concepts avec des éléments manquants | Utilisation limitée des concepts de la leçon |
| **Résolution de problèmes** | Montre une compréhension claire du problème et une approche élégante de la solution | Bonne approche de résolution avec une logique solide | Résolution adéquate mais avec un peu de confusion | Approche peu claire, ne démontre pas la compréhension |

## Instructions de soumission

1. **Testez votre code** soigneusement avec les exemples fournis
2. **Ajoutez des commentaires** expliquant votre logique, en particulier pour les instructions conditionnelles
3. **Vérifiez que la sortie** correspond aux résultats attendus : `['A', 'B-', 4, 5]`
4. **Prenez en compte les cas particuliers** comme les tableaux vides ou les types de données inattendus

> 💡 **Astuce de pro** : Commencez simple ! Faites fonctionner la fonctionnalité de base d’abord, puis ajoutez des fonctionnalités plus sophistiquées. N’oubliez pas, l’objectif est de pratiquer la logique de prise de décision avec les outils appris dans cette leçon.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour les informations critiques, une traduction professionnelle réalisée par un humain est recommandée. Nous déclinons toute responsabilité en cas de malentendus ou d’interprétations erronées résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->