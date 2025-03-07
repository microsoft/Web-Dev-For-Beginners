# Les bases du JavaScript : Méthodes et fonctions

![Les bases de JavaScript - Fonctions](/sketchnotes/webdev101-js-functions.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz préalable
[Quiz préalable](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9?loc=fr)

Lorsque nous pensons à écrire du code, nous voulons toujours nous assurer que notre code est lisible. Bien que cela puisse paraître contre-intuitif, le code est lu bien plus souvent qu'il n'est écrit. Un outil essentiel dans la boîte à outils d'un développeur pour garantir un code maintenable est la **fonction**.

[![Méthodes et fonctions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 Cliquez sur l'image ci-dessus pour voir une vidéo sur les méthodes et les fonctions.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Fonctions

À la base, une fonction est un bloc de code que nous pouvons exécuter à la demande. C'est parfait pour les scénarios où nous devons effectuer la même tâche plusieurs fois; plutôt que de dupliquer la logique à plusieurs endroits (ce qui rendrait difficile la mise à jour le moment venu), nous pouvons la centraliser à un seul endroit et l'appeler chaque fois que nous avons besoin d'effectuer l'opération - vous pouvez même appeler des fonctions à partir d'autres fonctions !

La possibilité de nommer une fonction est tout aussi importante. Bien que cela puisse sembler trivial, le nom fournit un moyen rapide de documenter une section de code. On pourrait penser à l'étiquette d'un bouton. Si je clique sur un bouton qui indique "Annuler le chronomètre", je sais qu'il va arrêter le chronomètre.

## Créer et appeler une fonction

La syntaxe d'une fonction ressemble à ce qui suit :

```javascript
function nameOfFunction() { // Définition de la fonction
 // Code de la fonction
}
```

Si je voulais créer une fonction pour afficher une salutation, elle pourrait ressembler à ceci :

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Chaque fois que nous voulons appeler (ou invoquer) notre fonction, nous utilisons le nom de la fonction suivi de `()`. Il est important de noter que notre fonction peut être définie avant ou après que nous ayons décidé de l'appeler; le compilateur JavaScript la trouvera pour vous.

```javascript
// Appel de notre fonction
displayGreeting();
```

> **NOTE:** Il existe un type spécial de fonction appelé **méthode**, que vous avez déjà utilisé ! En fait, nous l'avons vu dans notre démonstration ci-dessus lorsque nous avons utilisé `console.log`. Ce qui différencie une méthode d'une fonction, c'est qu'une méthode est attachée à un objet (`console` dans notre exemple), alors qu'une fonction est flottante. Vous entendrez de nombreux développeurs utiliser ces termes de manière interchangeable.

### Bonnes pratiques des fonctions

Il existe une poignée de bonnes pratiques à garder à l'esprit lors de la création de fonctions

- Comme toujours, utilisez des noms descriptifs afin de savoir ce que fera la fonction.
- Utilisez le **camelCase** pour combiner les mots.
- Faites en sorte que vos fonctions se concentrent sur une tâche spécifique

## Transmettre des informations à une fonction

Pour rendre une fonction plus réutilisable, vous voudrez souvent lui passer des informations. Si nous considérons notre exemple `displayGreeting` ci-dessus, il affichera seulement **Hello, world!**. Ce n'est pas la fonction la plus utile que l'on puisse créer. Si on veut la rendre un peu plus flexible, comme permettre à quelqu'un de spécifier le nom de la personne à saluer, on peut ajouter un **paramètre**. Un paramètre (aussi parfois appelé **argument**), est une information supplémentaire envoyée à une fonction.

Les paramètres sont énumérés dans la partie définition entre parenthèses et sont séparés par des virgules comme suit :

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

Lorsque nous voulons appeler notre fonction et passer le paramètre, nous le spécifions dans la parenthèse.

```javascript
displayGreeting('Christopher');
// Affiche "Hello, Christopher!"
```

## Valeurs par défaut

Nous pouvons rendre notre fonction encore plus flexible en ajoutant d'autres paramètres. Mais que faire si nous ne voulons pas exiger que chaque valeur soit spécifiée ? Pour reprendre l'exemple de notre message d'accueil, nous pourrions laisser le nom comme paramètre obligatoire (nous devons savoir qui nous accueillons), mais nous voulons permettre à l'accueil lui-même d'être personnalisé à volonté. Si quelqu'un ne veut pas le personnaliser, nous fournissons une valeur par défaut à la place. Pour fournir une valeur par défaut à un paramètre, nous le définissons de la même manière que nous définissons une valeur pour une variable - `parameterName = 'defaultValue'`. Pour voir un exemple complet :

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Lorsque nous appelons la fonction, nous pouvons alors décider si nous voulons définir une valeur pour `salutation`.

```javascript
displayGreeting('Christopher');
// Affiche "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// Affiche "Hi, Christopher"
```

## Valeurs de retour

Jusqu'à présent, la fonction que nous avons créée s'affiche toujours dans la [console](https://developer.mozilla.org/docs/Web/API/console). Parfois, c'est exactement ce que nous recherchons, notamment lorsque nous créons des fonctions qui appelleront d'autres services. Mais que faire si je veux créer une fonction d'aide pour effectuer un calcul et renvoyer la valeur afin de pouvoir l'utiliser ailleurs ?

Nous pouvons le faire en utilisant une **valeur de retour**. Une valeur de retour est renvoyée par la fonction et peut être stockée dans une variable de la même manière qu'une valeur littérale telle qu'une chaîne ou un nombre.

Si une fonction renvoie quelque chose, le mot-clé `return` est utilisé. Le mot-clé `return` attend une valeur ou une référence de ce qui est retourné comme ceci :

```javascript
return myVariable;
```  

Nous pouvons créer une fonction pour créer un message d'accueil et renvoyer la valeur à l'appelant.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Lorsque nous appelons cette fonction, nous stockons la valeur dans une variable. C'est à peu près la même chose que de définir une variable à une valeur statique (comme `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Fonctions comme paramètres de fonctions

Au fur et à mesure que vous progressez dans votre carrière de programmeur, vous rencontrerez des fonctions qui acceptent des fonctions comme paramètres. Cette astuce est couramment utilisée lorsque nous ne savons pas quand quelque chose va se produire ou se terminer, mais que nous savons que nous devons effectuer une opération en réponse.

Prenons l'exemple de [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), qui lance une minuterie et exécute un code lorsqu'elle est terminée. Nous devons lui indiquer quel code nous voulons exécuter. C'est le travail idéal pour une fonction !

Si vous exécutez le code ci-dessous, après 3 secondes, vous verrez le message **3 secondes se sont écoulées**.

```javascript
function displayDone() {
  console.log('3 secondes se sont écoulées');
}
// Valeur du délai en millisecondes
setTimeout(displayDone, 3000);
```

### Fonctions anonymes

Regardons à nouveau ce que nous avons construit. Nous créons une fonction avec un nom qui ne sera utilisé qu'une seule fois. Au fur et à mesure que notre application devient plus complexe, nous pouvons nous voir créer un grand nombre de fonctions qui ne seront appelées qu'une seule fois. Ce n'est pas l'idéal. Il s'avère que nous n'avons pas toujours besoin de fournir un nom !

Lorsque nous passons une fonction en paramètre, nous pouvons éviter d'en créer une à l'avance et en construire une en tant que partie du paramètre. Nous utilisons le même mot-clé `function`, mais nous le construisons comme un paramètre.

Réécrivons le code ci-dessus pour utiliser une fonction anonyme :

```javascript
setTimeout(function() {
  console.log('3 secondes se sont écoulées');
}, 3000);
```

Si vous exécutez notre nouveau code, vous remarquerez que nous obtenons les mêmes résultats. Nous avons créé une fonction, mais nous n'avons pas eu besoin de lui donner un nom !

### Fonctions fléchées

Un raccourci commun à de nombreux langages de programmation (y compris JavaScript) est la possibilité d'utiliser ce que l'on appelle une fonction **fléchée**. Elle utilise un indicateur spécial, `=>`, qui ressemble à une flèche - d'où son nom ! En utilisant `=>`, nous sommes en mesure de sauter le mot-clé `function`.

Réécrivons notre code une fois de plus pour utiliser une fonction fléchée :

```javascript
setTimeout(() => {
  console.log('3 secondes se sont écoulées');
}, 3000);
```

### Quand utiliser chaque stratégie

Vous avez maintenant vu que nous avons trois façons de passer une fonction en paramètre et vous vous demandez peut-être quand utiliser chacune d'entre elles. Si vous savez que vous utiliserez la fonction plus d'une fois, créez-la normalement. Si vous ne l'utilisez qu'à un seul endroit, il est généralement préférable d'utiliser une fonction anonyme. C'est à vous de décider si vous utilisez une fonction fléchée ou la syntaxe plus traditionnelle `function`, mais vous remarquerez que la plupart des développeurs modernes préfèrent `=>`.

---

## 🚀 Défi

Pouvez-vous expliquer en une phrase la différence entre les fonctions et les méthodes ? Essayez de le faire !

## Quiz de validation des connaissances
[Quiz de validation des connaissances](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10?loc=fr)

## Révision et étude personnelle

Cela vaut la peine de [lire un peu plus sur les fonctions fléchées](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), car elles sont de plus en plus utilisées dans les bases de code. Entraînez-vous à écrire une fonction, puis à la réécrire avec cette syntaxe.

## Affectation

[S'amuser avec les fonctions](assignment.fr.md)
