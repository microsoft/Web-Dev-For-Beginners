<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T13:40:53+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "fr"
}
-->
# Les bases de JavaScript : Tableaux et Boucles

![Les bases de JavaScript - Tableaux](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.fr.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz avant le cours
[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/13)

Cette leçon couvre les bases de JavaScript, le langage qui permet d'ajouter de l'interactivité sur le web. Dans cette leçon, vous apprendrez à utiliser les tableaux et les boucles, qui servent à manipuler les données.

[![Tableaux](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Tableaux")

[![Boucles](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Boucles")

> 🎥 Cliquez sur les images ci-dessus pour des vidéos sur les tableaux et les boucles.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Tableaux

Travailler avec des données est une tâche courante dans tous les langages, et cela devient beaucoup plus simple lorsque les données sont organisées dans un format structuré, comme les tableaux. Avec les tableaux, les données sont stockées dans une structure similaire à une liste. Un avantage majeur des tableaux est que vous pouvez y stocker différents types de données.

✅ Les tableaux sont partout autour de nous ! Pouvez-vous penser à un exemple réel de tableau, comme un ensemble de panneaux solaires ?

La syntaxe d'un tableau est une paire de crochets.

```javascript
let myArray = [];
```

Ceci est un tableau vide, mais les tableaux peuvent être déclarés déjà remplis de données. Les différentes valeurs d'un tableau sont séparées par une virgule.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Les valeurs du tableau sont associées à un numéro unique appelé **index**, un nombre entier attribué en fonction de leur position depuis le début du tableau. Dans l'exemple ci-dessus, la chaîne de caractères "Chocolate" a un index de 0, et l'index de "Rocky Road" est 4. Utilisez l'index avec des crochets pour récupérer, modifier ou insérer des valeurs dans le tableau.

✅ Cela vous surprend-il que les tableaux commencent à l'index zéro ? Dans certains langages de programmation, les index commencent à 1. Il y a une histoire intéressante à ce sujet que vous pouvez [lire sur Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Vous pouvez utiliser l'index pour modifier une valeur, comme ceci :

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

Et vous pouvez insérer une nouvelle valeur à un index donné comme ceci :

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Une méthode plus courante pour ajouter des valeurs à un tableau est d'utiliser des opérateurs comme array.push()

Pour savoir combien d'éléments se trouvent dans un tableau, utilisez la propriété `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Essayez par vous-même ! Utilisez la console de votre navigateur pour créer et manipuler un tableau de votre propre création.

## Boucles

Les boucles nous permettent d'effectuer des tâches répétitives ou **itératives**, et elles peuvent faire gagner beaucoup de temps et réduire le code. Chaque itération peut varier en termes de variables, valeurs et conditions. Il existe différents types de boucles en JavaScript, qui ont toutes de petites différences, mais qui accomplissent essentiellement la même chose : parcourir des données.

### Boucle For

La boucle `for` nécessite 3 éléments pour itérer :
- `counter` Une variable généralement initialisée avec un nombre qui compte le nombre d'itérations
- `condition` Une expression utilisant des opérateurs de comparaison pour arrêter la boucle lorsque la condition devient `false`
- `iteration-expression` S'exécute à la fin de chaque itération, généralement utilisée pour modifier la valeur du compteur
  
```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Exécutez ce code dans la console de votre navigateur. Que se passe-t-il lorsque vous modifiez légèrement le compteur, la condition ou l'expression d'itération ? Pouvez-vous le faire fonctionner à l'envers, en créant un compte à rebours ?

### Boucle While

Contrairement à la syntaxe de la boucle `for`, les boucles `while` nécessitent uniquement une condition qui arrêtera la boucle lorsque la condition devient `false`. Les conditions dans les boucles dépendent généralement d'autres valeurs comme les compteurs, et doivent être gérées pendant la boucle. Les valeurs initiales des compteurs doivent être créées en dehors de la boucle, et toutes les expressions nécessaires pour répondre à une condition, y compris la modification du compteur, doivent être maintenues à l'intérieur de la boucle.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Pourquoi choisiriez-vous une boucle for plutôt qu'une boucle while ? 17 000 utilisateurs ont posé la même question sur StackOverflow, et certaines opinions [pourraient vous intéresser](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Boucles et Tableaux

Les tableaux sont souvent utilisés avec des boucles car la plupart des conditions nécessitent la longueur du tableau pour arrêter la boucle, et l'index peut également servir de valeur de compteur.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Expérimentez en parcourant un tableau de votre propre création dans la console de votre navigateur.

---

## 🚀 Défi

Il existe d'autres façons de parcourir des tableaux en dehors des boucles for et while. Il y a [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), et [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Réécrivez votre boucle de tableau en utilisant l'une de ces techniques.

## Quiz après le cours
[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/14)

## Révision et Étude personnelle

Les tableaux en JavaScript possèdent de nombreuses méthodes qui sont extrêmement utiles pour manipuler les données. [Renseignez-vous sur ces méthodes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) et essayez-en quelques-unes (comme push, pop, slice et splice) sur un tableau de votre création.

## Devoir

[Parcourir un tableau](assignment.md)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de faire appel à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.