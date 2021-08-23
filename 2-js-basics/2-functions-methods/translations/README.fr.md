# Principes de base de JavaScript : méthodes et fonctions

![Bases JavaScript - Fonctions](/sketchnotes/webdev101-js-functions.png)
> Sketchnote par [Tomomi Imura] (https://twitter.com/girlie_mac)

## Quiz pré-conférence
[Quiz pré-conférence](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/9)

Lorsque nous pensons à écrire du code, nous voulons toujours nous assurer que notre code est lisible. Bien que cela semble contre-intuitif, le code est lu beaucoup plus de fois qu'il n'est écrit. Un outil de base dans la boîte à outils d'un développeur pour garantir un code maintenable est la **fonction**.

[![Méthodes et fonctions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Méthodes et fonctions")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur les méthodes et les fonctions.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/en-us/learn/modules/web-development-101-functions/?WT.mc_id=academic-13441-cxa) !

## Les fonctions

À la base, une fonction est un bloc de code que nous pouvons exécuter à la demande. C'est parfait pour les scénarios où nous devons effectuer la même tâche plusieurs fois ; plutôt que de dupliquer la logique à plusieurs endroits (ce qui rendrait difficile la mise à jour le moment venu), nous pouvons la centraliser à un seul endroit et l'appeler chaque fois que nous avons besoin de l'opération effectuée - vous pouvez même appeler des fonctions à partir d'autres fonctions !.

La capacité de nommer une fonction est tout aussi importante. Bien que cela puisse sembler trivial, le nom fournit un moyen rapide de documenter une section de code. Vous pourriez penser à cela comme une étiquette sur un bouton. Si je clique sur un bouton indiquant « Annuler la minuterie », je sais que l'horloge va s'arrêter.

## Créer et appeler une fonction

La syntaxe d'une fonction ressemble à la suivante :

```javascript
function nameOfFunction() { // définition de la fonction
 // définition/corps de la fonction
}
```

Si je voulais créer une fonction pour afficher un message d'accueil, cela pourrait ressembler à ceci :

```javascript
fonction affichageSalutation() {
  console.log('Bonjour tout le monde !');
}
```

Chaque fois que nous voulons appeler (ou invoquer) notre fonction, nous utilisons le nom de la fonction suivi de `()`. Il convient de noter que notre fonction peut être définie avant ou après que nous décidions de l'appeler ; le compilateur JavaScript le trouvera pour vous.

```javascript
// appeler notre fonction
afficherSalutation();
```

> **REMARQUE :** Il existe un type spécial de fonction connu sous le nom de **méthode**, que vous avez déjà utilisé ! En fait, nous l'avons vu dans notre démo ci-dessus lorsque nous avons utilisé `console.log`. Ce qui différencie une méthode d'une fonction, c'est qu'une méthode est attachée à un objet (`console` dans notre exemple), tandis qu'une fonction est flottante. Vous entendrez de nombreux développeurs utiliser ces termes de manière interchangeable.

### Bonnes pratiques de la fonction

Il y a une poignée de bonnes pratiques à garder à l'esprit lors de la création de fonctions

- Comme toujours, utilisez des noms descriptifs pour savoir ce que la fonction fera
- Utilisez **camelCasing** pour combiner des mots
- Gardez vos fonctions concentrées sur une tâche spécifique

## Passer des informations à une fonction

Pour rendre une fonction plus réutilisable, vous souhaiterez souvent lui transmettre des informations. Si nous considérons notre exemple `displayGreeting` ci-dessus, il affichera uniquement **Hello, world!**. Pas la fonction la plus utile que l'on puisse créer. Si nous voulons le rendre un peu plus flexible, comme permettre à quelqu'un de spécifier le nom de la personne à saluer, nous pouvons ajouter un **paramètre**. Un paramètre (également parfois appelé **argument**) est une information supplémentaire envoyée à une fonction.

Les paramètres sont répertoriés dans la partie définition entre parenthèses et sont séparés par des virgules comme suit :

```javascript
nom de la fonction (param, param2, param3) {

}
```

Nous pouvons mettre à jour notre `displayGreeting` pour accepter un nom et l'afficher.

```javascript
fonction displaySalutation(nom) {
  const message = `Bonjour, ${nom}!`;
  console.log(message);
}
```

Lorsque nous voulons appeler notre fonction et passer le paramètre, nous le spécifions entre parenthèses.

```javascript
displayGreeting('Christopher');
// affiche "Bonjour, Christophe !" quand courir
```

## Les valeurs par défaut

Nous pouvons rendre notre fonction encore plus flexible en ajoutant plus de paramètres. Mais que se passe-t-il si nous ne voulons pas exiger que chaque valeur soit spécifiée ? Conformément à notre exemple de salutation, nous pourrions laisser le nom tel que requis (nous devons savoir qui nous saluons), mais nous voulons permettre à la salutation elle-même d'être personnalisée à votre guise. Si quelqu'un ne veut pas le personnaliser, nous fournissons une valeur par défaut à la place. Pour fournir une valeur par défaut à un paramètre, nous le définissons de la même manière que nous définissons une valeur pour une variable - `parameterName = 'defaultValue'`. Pour voir un exemple complet :

```javascript
function displayGreeting(nom, salutation='Bonjour') {
  console.log(`${salutation}, ${nom}`);
}
```

Lorsque nous appelons la fonction, nous pouvons alors décider si nous voulons définir une valeur pour « salutation ».

```javascript
displayGreeting('Christopher');
// affiche "Bonjour, Christophe"

displayGreeting('Christopher', 'Bonjour');
// affiche "Bonjour, Christophe"
```

## Valeurs de retour

Jusqu'à présent, la fonction que nous avons créée sortira toujours sur la [console](https://developer.mozilla.org/docs/Web/API/console). Parfois, cela peut être exactement ce que nous recherchons, en particulier lorsque nous créons des fonctions qui appelleront d'autres services. Mais que se passe-t-il si je veux créer une fonction d'assistance pour effectuer un calcul et fournir la valeur afin que je puisse l'utiliser ailleurs ?

Nous pouvons le faire en utilisant une **valeur de retour**. Une valeur de retour est renvoyée par la fonction et peut être stockée dans une variable de la même manière que nous pourrions stocker une valeur littérale telle qu'une chaîne ou un nombre.

Si une fonction renvoie quelque chose, le mot-clé « return » est utilisé. Le mot-clé `return` attend une valeur ou une référence de ce qui est renvoyé comme suit :

```javascript
retourner maVariable ;
```

Nous pourrions créer une fonction pour créer un message d'accueil et renvoyer la valeur à l'appelant

```javascript
fonction createGreetingMessage(nom) {
  const message = `Bonjour, ${nom}`;
  renvoyer le message ;
}
```

Lors de l'appel de cette fonction, nous allons stocker la valeur dans une variable. C'est à peu près de la même manière que nous définirions une variable sur une valeur statique (comme `const name = 'Christopher'`).

```javascript
const GreetingMessage = createGreetingMessage('Christopher');
```

## Fonctions comme paramètres de fonctions

Au fur et à mesure que vous progressez dans votre carrière de programmeur, vous rencontrerez des fonctions qui acceptent des fonctions comme paramètres. Cette astuce est couramment utilisée lorsque nous ne savons pas quand quelque chose va se produire ou se terminer, mais nous savons que nous devons effectuer une opération en réponse.

À titre d'exemple, considérons [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), qui démarre une minuterie et exécutera le code une fois terminé. Nous devons lui dire quel code nous voulons exécuter. Cela ressemble à un travail parfait pour une fonction !

Si vous exécutez le code ci-dessous, après 3 secondes, vous verrez le message **3 secondes se sont écoulées**.

```javascript
fonction displayTerminé() {
  console.log('3 secondes se sont écoulées');
}
// la valeur de la minuterie est en millisecondes
setTimeout(displayDone, 3000);
```

### Fonctions anonymes

Jetons un autre regard sur ce que nous avons construit. Nous créons une fonction avec un nom qui sera utilisé une fois. Au fur et à mesure que notre application se complexifie, on se voit créer beaucoup de fonctions qui ne seront appelées qu'une seule fois. Ce n'est pas idéal. Il s'avère que nous n'avons pas toujours besoin de fournir un nom !

Lorsque nous passons une fonction en tant que paramètre, nous pouvons éviter d'en créer une à l'avance et en créer une à la place dans le cadre du paramètre. Nous utilisons le même mot-clé `function`, mais à la place, nous le construisons en tant que paramètre.

Réécrivons le code ci-dessus pour utiliser une fonction anonyme :

```javascript
setTimeout(fonction() {
  console.log('3 secondes se sont écoulées');
}, 3000);
```

Si vous exécutez notre nouveau code, vous remarquerez que nous obtenons les mêmes résultats. Nous avons créé une fonction, mais nous n'avons pas eu besoin de lui donner de nom !

### Fonctions de la grosse flèche

Un raccourci courant dans de nombreux langages de programmation (y compris JavaScript) est la possibilité d'utiliser ce qu'on appelle une fonction **flèche** ou **flèche grasse**. Il utilise un indicateur spécial de `=>`, qui ressemble à une flèche - d'où le nom ! En utilisant `=>`, nous pouvons ignorer le mot-clé `function`.

Réécrivons notre code une fois de plus pour utiliser une fonction grosse flèche :

```javascript
setTimeout(() => {
  console.log('3 secondes se sont écoulées');
}, 3000);
```

### Quand utiliser chaque stratégie

Vous avez maintenant vu que nous avons trois façons de passer une fonction en tant que paramètre et vous vous demandez peut-être quand utiliser chacune. Si vous savez que vous utiliserez la fonction plus d'une fois, créez-la normalement. Si vous ne l'utilisez que pour un seul emplacement, il est généralement préférable d'utiliser une fonction anonyme. Que vous utilisiez ou non une grosse fonction de flèche ou la syntaxe plus traditionnelle de « fonction » dépend de vous, mais vous remarquerez que la plupart des développeurs modernes préfèrent « => ».

---

## 🚀 Défi

Pouvez-vous articuler en une phrase la différence entre les fonctions et les méthodes ? Essaie!

## Quiz post-conférence
[Quizz post-conférence](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/10)

## Révision et auto-apprentissage

Cela vaut la peine de [lire un peu plus sur les fonctions fléchées] (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), car elles sont de plus en plus utilisées dans les bases de code. Entraînez-vous à écrire une fonction, puis à la réécrire avec cette syntaxe.

## Mission

[Amusez-vous avec les fonctions](assignment.md)




