# Principes de base de JavaScript : Prendre des décisions

![Principes de base de JavaScript : Prendre des décisions](/sketchnotes/webdev101-js-decisions.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz préalable
[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/11?loc=fr)

Prendre des décisions et contrôler l'ordre dans lequel votre code s'exécute rend votre code réutilisable et robuste. Cette section couvre la syntaxe pour contrôler le flux de données dans JavaScript et sa signification lorsqu'elle est utilisée avec des types de données booléens

[![Prendre des décisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Prendre des décisions")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur la prise de décisions.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/fr-fr/learn/modules/web-development-101-if-else/?WT.mc_id=academic-13441-cxa)!
## Un bref récapitulatif sur les booléens

Les booléens ne peuvent avoir que deux valeurs : `true` ou `false`. Les booléens aident à prendre des décisions sur les lignes de code à exécuter lorsque certaines conditions sont remplies.

Définissez votre booléen sur vrai ou faux comme ceci :

`let myTrueBool = true`
`let myFalseBool = false`

✅ Les booléens tirent leur nom du mathématicien, philosophe et logicien anglais George Boole (1815-1864).

## Opérateurs de comparaison et booléens

Les opérateurs sont utilisés pour évaluer les conditions en effectuant des comparaisons qui créeront une valeur booléenne. Voici une liste d'opérateurs fréquemment utilisés.

| Symbole | Description                                                                                                                                                   | Exemple            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Inférieur à**: Compare deux valeurs et renvoie le type de données booléen `true` si la valeur à gauche est inférieure à la valeur à droite                              | `5 < 6 // true`    |
| `<=`   | **Inférieur ou égal à**: Compare deux valeurs et renvoie le type de données booléen `true` si la valeur à gauche est inférieure ou égale à celle de droite      | `5 <= 6 // true`   |
| `>`    | **Supérieur à**: Compare deux valeurs et renvoie le type de données booléen `true` si la valeur sur le côté gauche est plus grande que sur la droite                         | `5 > 6 // false`   |
| `>=`   | **Supérieur ou égal à**: Compare deux valeurs et renvoie le type de données booléen `true` si la valeur à gauche est supérieure ou égale à celle de droite | `5 >= 6 // false`  |
| `===`  | **Égalité stricte**: Compare deux valeurs et renvoie le type de données booléen `true` si les valeurs à droite et à gauche sont égales ET sont du même type de données.       | `5 === 6 // false` |
| `!==`  | **Inégalité**: Compare deux valeurs et renvoie la valeur booléenne opposée à ce qu'un opérateur d'égalité stricte retournerait                                    | `5 !== 6 // true`  |

✅ Vérifiez vos connaissances en écrivant quelques comparaisons dans la console de votre navigateur. Les données renvoyées vous surprennent-elles ?

## L'instruction If

L'instruction if exécutera le code entre ses blocs si la condition est vraie.

```javascript
if (condition){
    //La condition était vraie. Le code de ce bloc s'exécutera.
}
```

Les opérateurs logiques sont souvent utilisés pour former la condition.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //La condition était vraie. Le code de ce bloc s'exécutera.
    console.log("Getting a new laptop!");
}
```

## L'instruction If..Else

L'instruction `else` exécutera le code entre ses blocs lorsque la condition est fausse. C'est facultatif avec une instruction `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //La condition était vraie. Le code de ce bloc s'exécutera.
    console.log("Getting a new laptop!");
}
else{
    //La condition était vraie. Le code de ce bloc s'exécutera.
    console.log("Can't afford a new laptop, yet!");
}
```

✅ Testez votre compréhension de ce code et du code suivant en l'exécutant dans une console de navigateur. Modifiez les valeurs des variables currentMoney et laptopPrice pour modifier le `console.log()` renvoyé.

## Opérateurs logiques et booléens

Les décisions peuvent nécessiter plusieurs comparaisons et peuvent être associées à des opérateurs logiques pour produire une valeur booléenne.

| Symbole | Description                                                                                     | Exemple                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **ET logique** : compare deux expressions booléennes. Renvoie vrai **uniquement** si les deux côtés sont vrais | `(5 > 6) && (5 < 6 ) //Un côté est faux, l'autre est vrai. Renvoie false` |
| `\|\|` | **OU logique** : compare deux expressions booléennes. Renvoie vrai si au moins un côté est vrai | `(5 > 6) \|\| (5 < 6) //Un côté est faux, l'autre est vrai. Renvoie vrai` |
| `!` | **NON logique** : renvoie la valeur opposée d'une expression booléenne | `!(5 > 6) // 5 n'est pas supérieur à 6, mais "!" retournera vrai`         |

## Conditions et décisions avec opérateurs logiques

Les opérateurs logiques peuvent être utilisés pour former des conditions dans les instructions if..else.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Prix ​​de l'ordinateur portable à 20 pour cent de réduction

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //La condition était vraie. Le code de ce bloc s'exécutera.
    console.log("Getting a new laptop!");
}
else {
    //La condition était vraie. Le code de ce bloc s'exécutera.
    console.log("Can't afford a new laptop, yet!");
}
```

### Opérateur de négation

Vous avez vu jusqu'à présent comment vous pouvez utiliser une instruction `if...else` pour créer une logique conditionnelle. Tout ce qui est dans un `if` doit être évalué à vrai/faux. En utilisant l'opérateur `!` vous pouvez _négativiser_ l'expression. Cela ressemblerait à ceci :

```javascript
if (!condition) {
  // s'exécute si la condition est fausse
} else {
  // s'exécute si la condition est vraie
}
```

### Expressions ternaires

`if...else` n'est pas la seule façon d'exprimer la logique de décision. Vous pouvez également utiliser ce qu'on appelle un opérateur ternaire. La syntaxe pour cela ressemble à ceci:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Ci-dessous, un exemple plus concret :

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

✅ Prenez une minute pour lire ce code plusieurs fois. Comprenez-vous comment fonctionnent ces opérateurs ?

Le code précèdant indique que
- si `firstNumber` est plus grand que `secondNumber`
- alors attribuez `firstNumber` à `biggestNumber`
- sinon, attribuez `secondNumber`.
  
L'expression ternaire n'est qu'une manière compacte d'écrire le code ci-dessous :

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Challenge

Créez un programme écrit d'abord avec des opérateurs logiques, puis réécrivez-le à l'aide d'une expression ternaire. Quelle est votre syntaxe préférée ?

---
## Quiz de validation des connaissances
[Quiz de validation des connaissancesz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/12?loc=fr)

## Révision et étude personnelle

En savoir plus sur les nombreux opérateurs disponibles pour l'utilisateur [sur MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Parcourez le merveilleux [opérateur de recherche de Josh Comeau](https://joshwcomeau.com/operator-lookup/)!

## Affectation

[Les opérateurs](assignment.fr.md)
