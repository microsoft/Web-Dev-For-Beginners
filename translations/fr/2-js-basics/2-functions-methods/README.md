<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T13:39:15+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "fr"
}
-->
# Les bases de JavaScript : Méthodes et fonctions

![Les bases de JavaScript - Fonctions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.fr.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz avant le cours
[Quiz avant le cours](https://ff-quizzes.netlify.app)

Quand nous pensons à écrire du code, nous voulons toujours nous assurer qu'il soit lisible. Bien que cela puisse sembler contre-intuitif, le code est lu beaucoup plus souvent qu'il n'est écrit. Un outil essentiel dans la boîte à outils d'un développeur pour garantir un code maintenable est la **fonction**.

[![Méthodes et fonctions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Méthodes et fonctions")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur les méthodes et fonctions.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Fonctions

Au cœur, une fonction est un bloc de code que nous pouvons exécuter à la demande. Cela est parfait pour les scénarios où nous devons effectuer la même tâche plusieurs fois ; plutôt que de dupliquer la logique à plusieurs endroits (ce qui rendrait les mises à jour difficiles), nous pouvons la centraliser en un seul endroit et l'appeler chaque fois que nous avons besoin d'exécuter l'opération - vous pouvez même appeler des fonctions depuis d'autres fonctions !

Tout aussi important est la capacité de nommer une fonction. Bien que cela puisse sembler trivial, le nom fournit un moyen rapide de documenter une section de code. Vous pouvez penser à cela comme une étiquette sur un bouton. Si je clique sur un bouton qui indique "Annuler le minuteur", je sais qu'il va arrêter le chronomètre.

## Créer et appeler une fonction

La syntaxe d'une fonction ressemble à ceci :

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Si je voulais créer une fonction pour afficher un message de salutation, cela pourrait ressembler à ceci :

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Chaque fois que nous voulons appeler (ou invoquer) notre fonction, nous utilisons le nom de la fonction suivi de `()`. Il est important de noter que notre fonction peut être définie avant ou après que nous décidions de l'appeler ; le compilateur JavaScript la trouvera pour vous.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Il existe un type spécial de fonction appelé **méthode**, que vous avez déjà utilisé ! En fait, nous avons vu cela dans notre démonstration ci-dessus lorsque nous avons utilisé `console.log`. Ce qui différencie une méthode d'une fonction, c'est qu'une méthode est attachée à un objet (`console` dans notre exemple), tandis qu'une fonction est indépendante. Vous entendrez souvent les développeurs utiliser ces termes de manière interchangeable.

### Bonnes pratiques pour les fonctions

Voici quelques bonnes pratiques à garder à l'esprit lors de la création de fonctions :

- Comme toujours, utilisez des noms descriptifs pour savoir ce que la fonction fera
- Utilisez le **camelCasing** pour combiner les mots
- Gardez vos fonctions concentrées sur une tâche spécifique

## Passer des informations à une fonction

Pour rendre une fonction plus réutilisable, vous voudrez souvent lui transmettre des informations. Si nous prenons notre exemple `displayGreeting` ci-dessus, il affichera uniquement **Hello, world!**. Pas la fonction la plus utile que l'on puisse créer. Si nous voulons la rendre un peu plus flexible, comme permettre à quelqu'un de spécifier le nom de la personne à saluer, nous pouvons ajouter un **paramètre**. Un paramètre (parfois aussi appelé **argument**) est une information supplémentaire envoyée à une fonction.

Les paramètres sont listés dans la partie définition entre parenthèses et sont séparés par des virgules comme ceci :

```javascript
function name(param, param2, param3) {

}
```

Nous pouvons mettre à jour notre `displayGreeting` pour accepter un nom et l'afficher.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Lorsque nous voulons appeler notre fonction et transmettre le paramètre, nous le spécifions entre parenthèses.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Valeurs par défaut

Nous pouvons rendre notre fonction encore plus flexible en ajoutant davantage de paramètres. Mais que faire si nous ne voulons pas exiger que chaque valeur soit spécifiée ? En restant sur notre exemple de salutation, nous pourrions laisser le nom comme obligatoire (nous devons savoir qui nous saluons), mais nous voulons permettre que la salutation elle-même soit personnalisée si désiré. Si quelqu'un ne souhaite pas la personnaliser, nous fournissons une valeur par défaut à la place. Pour fournir une valeur par défaut à un paramètre, nous la définissons de la même manière que nous définissons une valeur pour une variable - `parameterName = 'defaultValue'`. Pour voir un exemple complet :

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Lorsque nous appelons la fonction, nous pouvons alors décider si nous voulons définir une valeur pour `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Valeurs de retour

Jusqu'à présent, la fonction que nous avons construite affichera toujours un résultat dans la [console](https://developer.mozilla.org/docs/Web/API/console). Parfois, cela peut être exactement ce que nous recherchons, surtout lorsque nous créons des fonctions qui appelleront d'autres services. Mais que faire si je veux créer une fonction d'assistance pour effectuer un calcul et fournir la valeur afin que je puisse l'utiliser ailleurs ?

Nous pouvons le faire en utilisant une **valeur de retour**. Une valeur de retour est renvoyée par la fonction et peut être stockée dans une variable de la même manière que nous pourrions stocker une valeur littérale comme une chaîne ou un nombre.

Si une fonction retourne quelque chose, alors le mot-clé `return` est utilisé. Le mot-clé `return` attend une valeur ou une référence de ce qui est retourné comme ceci :

```javascript
return myVariable;
```  

Nous pourrions créer une fonction pour créer un message de salutation et renvoyer la valeur à l'appelant.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Lors de l'appel de cette fonction, nous stockerons la valeur dans une variable. C'est très similaire à la façon dont nous définirions une variable avec une valeur statique (comme `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Fonctions comme paramètres pour des fonctions

Au fur et à mesure que vous progressez dans votre carrière de programmation, vous rencontrerez des fonctions qui acceptent des fonctions comme paramètres. Ce petit truc est couramment utilisé lorsque nous ne savons pas quand quelque chose va se produire ou se terminer, mais nous savons que nous devons effectuer une opération en réponse.

Par exemple, considérez [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), qui démarre un minuteur et exécutera du code lorsqu'il se termine. Nous devons lui dire quel code nous voulons exécuter. Cela semble être un travail parfait pour une fonction !

Si vous exécutez le code ci-dessous, après 3 secondes, vous verrez le message **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Fonctions anonymes

Reprenons ce que nous avons construit. Nous créons une fonction avec un nom qui sera utilisée une seule fois. À mesure que notre application devient plus complexe, nous pouvons nous retrouver à créer beaucoup de fonctions qui ne seront appelées qu'une seule fois. Ce n'est pas idéal. En fait, nous n'avons pas toujours besoin de fournir un nom !

Lorsque nous passons une fonction comme paramètre, nous pouvons éviter de la créer à l'avance et la construire directement en tant que paramètre. Nous utilisons le même mot-clé `function`, mais nous la construisons en tant que paramètre.

Réécrivons le code ci-dessus pour utiliser une fonction anonyme :

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Si vous exécutez notre nouveau code, vous remarquerez que nous obtenons les mêmes résultats. Nous avons créé une fonction, mais n'avons pas eu besoin de lui donner un nom !

### Fonctions fléchées

Un raccourci courant dans de nombreux langages de programmation (y compris JavaScript) est la capacité d'utiliser ce qu'on appelle une **fonction fléchée** ou **fonction à flèche**. Elle utilise un indicateur spécial `=>`, qui ressemble à une flèche - d'où son nom ! En utilisant `=>`, nous pouvons éviter d'utiliser le mot-clé `function`.

Réécrivons notre code une fois de plus pour utiliser une fonction fléchée :

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Quand utiliser chaque stratégie

Vous avez maintenant vu que nous avons trois façons de passer une fonction comme paramètre et vous vous demandez peut-être quand utiliser chacune. Si vous savez que vous utiliserez la fonction plus d'une fois, créez-la normalement. Si vous ne l'utiliserez que pour un seul emplacement, il est généralement préférable d'utiliser une fonction anonyme. Que vous utilisiez une fonction fléchée ou la syntaxe plus traditionnelle `function` dépend de vous, mais vous remarquerez que la plupart des développeurs modernes préfèrent `=>`.

---

## 🚀 Défi

Pouvez-vous expliquer en une phrase la différence entre les fonctions et les méthodes ? Essayez !

## Quiz après le cours
[Quiz après le cours](https://ff-quizzes.netlify.app)

## Révision et auto-apprentissage

Il vaut la peine de [lire un peu plus sur les fonctions fléchées](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), car elles sont de plus en plus utilisées dans les bases de code. Pratiquez l'écriture d'une fonction, puis réécrivez-la avec cette syntaxe.

## Devoir

[Amusez-vous avec les fonctions](assignment.md)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de faire appel à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.