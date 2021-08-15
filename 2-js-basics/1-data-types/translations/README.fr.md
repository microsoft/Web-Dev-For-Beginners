# Bases de JavaScript: Types de Données

![Bases de JavaScript - Types de Données](/sketchnotes/webdev101-js-datatypes.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz préalable
[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/7?loc=fr)

Cette leçon couvre les bases de JavaScript, le language qui permet l'interactivité sur le web.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/en-us/learn/modules/web-development-101-variables/?WT.mc_id=academic-13441-cxa)!

[![Data types in JavaScript](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Data types in JavaScript")

> 🎥 Cliquez sur l'image ci-dessus pour voir une vidéo sur les types de données

Commençons par les variables et les types de données qui les composent!

## Variables

Les variables stockent des valeurs qui peuvent être utilisées et changées tout au long de votre code.

Créer et **déclarer** une variable se fait avec la syntaxe suivante **[mot-clé] [nom]**. Elle est composée de deux parties:

- **Mot-clé**. Le mot-clé peut être `let` ou `var`.  

   > Note: Le mot-clé `let` a été introduit par ES6 et donne à votre variable une _portée de bloc_. Il vous est recommandé d'utiliser `let` plutôt que `var`. Nous allons couvrir les portées de bloc de manière plus approfondie dans l'une des partie suivantes.
- **Le nom de la variable**. Ceci est un nom que vous choisissez.

### Tâche - travailler avec les variables

1. **Déclarer une variable**. Déclarons une variable en utilisant le mot-clé `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` a maintenant été déclarée en utilisant le mot-clé `let`. Elle n'a actuellement pas de valeur.

1. **Assigner une valeur**. Stocker une valeur dans une variable avec l'opérateur `=`, suivi de la valeur souhaitée.

    ```javascript
    myVariable = 123;
    ```

   > Note: L'utilisation de `=` dans cette leçon signifie que nous utilisons un "opérateur d'assignation", utilisé pour donner une valeur à une variable. Il ne dénote pas une égalité.

   `myVariable` a maintenant été *initialisée* avec la valeur 123.

1. **Refactoriser**. Remplacer votre code par l'instruction suivante.

    ```javascript
    let myVariable = 123;
    ```

    Ceci est appelé une _initialisation explicite_ lorsqu'une variable est déclarée et se voit assigner une valeur en même temps.

1. **Changer la valeur de la variable**. Changez la valeur de la variable de la façon suivante :

   ```javascript
   myVariable = 321;
   ```

   Après qu'une variable ait été déclarée, vous pouvez changer sa valeur à tout moment dans votre code avec l'opérateur `=` et la nouvelle valeur.

   ✅ Essayez ! Vous pouvez écrire du JavaScript directement dans votre navigateur. Ouvrez une fenêtre du navigateur et allez dans les Outils de Développement. Dans la console, vous trouverez une invite ; tapez `let myVariable = 123`, pressez la touche Retour Chariot, puis tapez `myVariable`. Que se passe-t-il ? Note: Vous en apprendrez plus sur ces concepts dans les leçons suivantes.

## Constantes

La déclaration et l'initialisation d'une constante suit les même concepts que pour une variable, à l'exception du mot-clé `const`. Les constantes sont généralement déclarées en majuscules.

```javascript
const MY_VARIABLE = 123;
```

Les constantes sont similaires aux variables, avec deux exceptions:

- **Doivent avoir une valeur**. Les constantes doivent être initialisées, ou une erreur se produira à l'exécution du code.
- **La référence ne peut pas être changée**. La référence d'une constante ne peut pas être changée une fois initialisée, ou une erreur se produira à l'exécution du code. Voyons deux exemples:
   - **Valeur simple**. Ceci N'EST PAS autorisé:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **La référence à un objet est protégée**. Ceci N'EST PAS autorisé:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **La valeur d'une objet n'est pas protégée**. Ceci EST autorisé:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Ci-dessus vous changez la valeur de l'objet mais pas la référence elle-même, ce qui rend le changement autorisé.

   > Note: Un `const` signifie que la référence est protégée contre une réassignation. La valeur n'est toutefois pas _immutable_ et peut changer, en particulier s'il s'agit d'une structure complexe telle qu'un objet.

## Types de Données

Les variables peuvent stocker différents types de valeurs, tels que des nombres et du texte. Ces différents types de valeurs sont connus sous le nom de **type de donnée**. Les types de données sont un composant important du développement logiciel car il aide les développeurs à décider comment le code devrait être écrit et comment le logiciel devrait s'exécuter. De plus, certains types de données viennent avec des fonctionnalités uniques qui aident à transformer ou extraire des informations supplémentaires d'une valeur.

✅ On fait aussi référence aux types de données sous le nom de primitives de données en JavaScript, puisqu'ils sont les types de données du plus bas niveau fournis par le langage. Il y a 6 types de données primitifs : string (chaîne de caractères), number (numérique), bigint (entier long), boolean (booléen), undefined (indéfini) et symbol (symbole). Prenez un instant pour visualiser ce que chacune de ces primitives peut représenter. Qu'est-ce qu'un `zèbre` ? Et `0` ? `true` ?

### Nombres

Dans la section précédente, la valeur de `myVariable` était de type numérique.

`let myVariable = 123;`

Les variables peuvent stocker tous les types de nombres, y compris les décimaux et les nombres négatifs. Les nombres peuvent également être utilisés en combinaison avec les opérateurs arithmétiques, couverts dans la [prochaine section](#opérateurs-arithmétiques).

### Opérateurs Arithmétiques

Il y a plusieurs types d'opérateurs à utiliser lors de l'exécution de fonctions arithmétiques, et certains sont listés ici :

| Symbol | Description                                                           | Example                               |
| ------ | --------------------------------------------------------------------- | ------------------------------------- |
| `+`    | **Addition**: Calcule la somme de deux nombres                        | `1 + 2 //la réponse attendue est 3`   |
| `-`    | **Soustraction**: Calcule la différence entre deux nombres            | `1 - 2 //la réponse attendue est -1`  |
| `*`    | **Multiplication**: Calcule le produit de deux nombres                | `1 * 2 //la réponse attendue est 2`   |
| `/`    | **Division**: Calcule le quotient de deux nombres                     | `1 / 2 //la réponse attendue est 0.5` |
| `%`    | **Reste**: Calcule le reste de la division entière entre deux nombres | `1 % 2 //la réponse attendue est 1`   |

✅ Essayez ! Essayez une opération arithmétique dans la console de votre navigateur. Les résultats vous surprennent-ils ?

### Chaînes de caractères

Les chaînes sont des séries de caractères qui résident entre une paire d'apostrophes ou de guillements.

- `'Ceci est une chaîne'`
- `"Ceci est également une chaîne"`
- `let myString = 'Ceci est une chaîne stockée dans une variable';`

Souvenez-vous d'utiliser guillements ou apostrophes en écrivant une chaîne, sinon JavaScript supposera qu'il s'agit du nom d'une variable.

### Formater les Chaînes

Les chaînes sont du texte, et vont nécessiter d'être mises en forme de temps à autres.

Pour **concatener** deux chaînes ou plus, ou pour les joindre, utilisez l'opérateur `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Pourquoi est-ce que `1 + 1 = 2` en JavaScript, mais `'1' + '1' = 11` ? Réflechissez-y. Et qu'en est-il de `'1' + 1` ?

Les **modèles littéraux** sont une autre façon de mettre en forme les chaînes, si ce n'est que l'accent grave est utilisé au lieu des guillements ou apostrophes. Tout ce qui n'est pas du texte brut doit être placé à l'intérieur d'une balise `${ }`. Ceci inclut toute variable qui soit une chaîne.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Vous pouvez atteindre vos buts de formatage avec l'une ou l'autre méthode, mais les modèles littéraux vont respecter tout espace et retour à la ligne.

✅ Quand utiliseriez-vous un modèle littéral plutôt qu'une chaîne brute ?

### Booléens

Les booléens n'ont que deux valeurs possibles : `true` (vrai) ou `false` (faux). Les booléens peuvent contribuer à décider quelles lignes de code devraient s'exécuter lorsque certaines conditions sont remplies. Dans de nombreux cas, des [opérateurs](#opérateurs-arithmétiques) aident à définir la valeur d'un booléen et vous rencontrerez et écrirez souvent des variables initialisées ou dont la valeur est mise à jour à l'aide d'un opérateur.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Une variable peut être considérée comme 'vraie' (truthy) si elle s'évalue comme `true` (vrai) en booléen. De façon intéressante, en JavaScript, [toute valeur est vraie à moins qu'elle ne soit explicitement définie comme fausse](https://developer.mozilla.org/fr/docs/Glossary/Truthy).

---

## 🚀 Défi

JavaScript est célèbre pour sa manière occasionnellement surprenante de gérer les types de données. Effectuez quelques recherches sur ces pièges. Par exemple : la sensibilité à la casse peut vous causer soucis ! Essayez ceci dans votre console : `let age = 1; let Age = 2; age == Age` (renvoie `false` (faux) -- pourquoi ?). Quels autres pièges pouvez-vous trouver ?

## Quiz de validation des connaissances
[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/8?loc=fr)

## Révision et auto-apprentissage

Regardez [cette liste d'exercices en JavaScript](https://css-tricks.com/snippets/javascript/) et essayez-en un. Qu'avez-vous appris ?

## Consigne

[Exercice sur les types de données](assignment.fr.md)
