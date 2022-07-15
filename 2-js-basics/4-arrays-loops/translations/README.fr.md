# Principes de base de JavaScript : tableaux et boucles

![Principes de base de JavaScript - Les tableaux](/sketchnotes/webdev101-js-arrays.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz préalable
[Quiz préalable](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/13?loc=fr)

Cette leçon couvre les bases de JavaScript, le langage qui offre de l'interactivité sur le Web. Dans cette leçon, vous découvrirez les tableaux et les boucles, qui sont utilisés pour manipuler des données.

[![Les tableaux](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Les tableaux")
[![Les boucles](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Les boucles")
> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur les tableaux et les boucles.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-13441-cxa)!
## Les tableaux

Travailler avec des données est une tâche courante pour n'importe quel langage, et c'est une tâche beaucoup plus facile lorsque les données sont organisées dans un format structurel, tel que des tableaux. Avec les tableaux, les données sont stockées dans une structure similaire à une liste. L'un des principaux avantages des tableaux est que vous pouvez stocker différents types de données dans un seul tableau.

✅ Les tableaux sont partout autour de nous ! Pouvez-vous penser à un exemple réel d'un tableau, tel qu'un tableau de panneaux solaires ?

La syntaxe d'un tableau est une paire de crochets.

```javascript
let myArray = [];
```

Il s'agit d'un tableau vide, mais les tableaux peuvent être déclarés déjà remplis de données. Plusieurs valeurs d'un tableau sont séparées par une virgule.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Les valeurs du tableau se voient attribuer une valeur unique appelée **index**, un nombre entier attribué en fonction de sa distance depuis le début du tableau. Dans l'exemple ci-dessus, la valeur de chaîne "Chocolate" a un index de 0 et l'index de "Rocky Road" est de 4. Utilisez l'index avec des crochets pour récupérer, modifier ou insérer des valeurs de tableau.

✅ Cela vous surprend-il que les tableaux commencent à l'index zéro ? Dans certains langages de programmation, les index commencent à 1. Il y a une histoire intéressante à ce sujet, que vous pouvez [lire sur Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Vous pouvez utiliser l'index pour modifier une valeur, comme ceci :

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changement de "Rocky Road" par "Butter Pecan"
```

Et vous pouvez insérer une nouvelle valeur à un index donné comme ceci :

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Ajout de "Cookie Dough"
```

✅ Un moyen plus courant de pousser des valeurs vers un tableau consiste à utiliser des opérateurs de tableau tels que array.push()

Pour savoir combien d'éléments se trouvent dans un tableau, utilisez la propriété `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Essayez-le vous-même ! Utilisez la console de votre navigateur pour créer et manipuler un tableau de votre propre création.

## Les boucles

Les boucles permettent des tâches répétitives ou **itératives**, et peuvent économiser beaucoup de temps et de code. Chaque itération peut varier dans ses variables, valeurs et conditions. Il existe différents types de boucles en JavaScript, et elles ont de petites différences, mais font essentiellement la même chose : boucler sur des données.

### La boucle For

La boucle `for` nécessite 3 parties pour itérer :
    - `un compteur` Une variable qui est généralement initialisée avec un nombre qui compte le nombre d'itérations.
    - `une condition` Expression qui utilise des opérateurs de comparaison pour provoquer l'arrêt de la boucle lorsque `true`
    - `une expression d'itération` S'exécute à la fin de chaque itération, généralement utilisé pour modifier la valeur du compteur
  
```javascript
// Compter jusqu'à 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Exécutez ce code dans une console de navigateur. Que se passe-t-il lorsque vous apportez de petites modifications au compteur, à la condition ou à l'expression d'itération ? Pouvez-vous le faire fonctionner à l'envers, en créant un compte à rebours ?

### La boucle While

Contrairement à la syntaxe de la boucle `for`, les boucles `while` ne nécessitent qu'une condition qui arrête la boucle lorsqu'elle est `true` (vrai). Les conditions dans les boucles reposent généralement sur d'autres valeurs telles que les compteurs et doivent être gérées pendant la boucle. Les valeurs de départ des compteurs doivent être créées en dehors de la boucle, et toutes les expressions répondant à une condition, y compris la modification du compteur, doivent être conservées à l'intérieur de la boucle.

```javascript
//Compter jusqu'à 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Pourquoi choisiriez-vous une boucle for par rapport à une boucle while? 17K téléspectateurs ont eu la même question sur StackOverflow, et certaines des opinions [pourraient être intéressantes pour vous](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Les boucles et les tableaux

Les tableaux sont souvent utilisés avec des boucles car la plupart des conditions nécessitent la longueur du tableau pour arrêter la boucle, et l'index peut également être la valeur du compteur.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Se termine lorsque toutes les saveurs sont imprimées
```

✅ Exercez vous avec une boucle sur un tableau créé par vos soins dans la console de votre navigateur. 

---

## 🚀 Défi

Il existe d'autres façons d'itérer sur des tableaux autres que les boucles for et while. Il y a [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), et [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Réécrivez votre boucle de tableau en utilisant l'une de ces techniques.

## Quiz de validation des connaissances
[Quiz de validation des connaissances](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/14?loc=fr)


## Révision et étude personnelle

Les tableaux en JavaScript ont de nombreuses méthodes qui leur sont attachées, extrêmement utiles pour la manipulation de données. [Lisez ces méthodes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) et essayez certaines d'entre elles (comme push, pop, slice et splice) sur un tableau de votre création.

## Affectation

[Boucler un tableau](assignment.fr.md)
