<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-24T00:03:32+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "fr"
}
-->
# Créer une application bancaire Partie 3 : Méthodes pour récupérer et utiliser des données

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/45)

### Introduction

Au cœur de chaque application web se trouvent les *données*. Les données peuvent prendre de nombreuses formes, mais leur objectif principal est toujours d'afficher des informations à l'utilisateur. Avec des applications web devenant de plus en plus interactives et complexes, la manière dont l'utilisateur accède et interagit avec les informations est désormais un aspect clé du développement web.

Dans cette leçon, nous verrons comment récupérer des données d'un serveur de manière asynchrone et utiliser ces données pour afficher des informations sur une page web sans recharger le HTML.

### Prérequis

Vous devez avoir construit la partie [Formulaire de connexion et d'inscription](../2-forms/README.md) de l'application web pour cette leçon. Vous devez également installer [Node.js](https://nodejs.org) et [exécuter l'API du serveur](../api/README.md) localement pour obtenir les données de compte.

Vous pouvez tester que le serveur fonctionne correctement en exécutant cette commande dans un terminal :

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX et récupération de données

Les sites web traditionnels mettent à jour le contenu affiché lorsque l'utilisateur sélectionne un lien ou soumet des données via un formulaire, en rechargeant la page HTML complète. Chaque fois que de nouvelles données doivent être chargées, le serveur web renvoie une toute nouvelle page HTML qui doit être traitée par le navigateur, interrompant l'action en cours de l'utilisateur et limitant les interactions pendant le rechargement. Ce flux de travail est également appelé *Application Multi-Page* ou *MPA*.

![Flux de mise à jour dans une application multi-page](../../../../7-bank-project/3-data/images/mpa.png)

Lorsque les applications web ont commencé à devenir plus complexes et interactives, une nouvelle technique appelée [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) a émergé. Cette technique permet aux applications web d'envoyer et de récupérer des données d'un serveur de manière asynchrone en utilisant JavaScript, sans avoir à recharger la page HTML, ce qui entraîne des mises à jour plus rapides et des interactions utilisateur plus fluides. Lorsque de nouvelles données sont reçues du serveur, la page HTML actuelle peut également être mise à jour avec JavaScript en utilisant l'API [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). Avec le temps, cette approche a évolué pour devenir ce que l'on appelle aujourd'hui une [*Application Mono-Page* ou *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Flux de mise à jour dans une application mono-page](../../../../7-bank-project/3-data/images/spa.png)

Lorsque AJAX a été introduit pour la première fois, la seule API disponible pour récupérer des données de manière asynchrone était [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Mais les navigateurs modernes implémentent désormais l'API [`Fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API), plus pratique et puissante, qui utilise des promesses et est mieux adaptée pour manipuler des données JSON.

> Bien que tous les navigateurs modernes prennent en charge l'API `Fetch`, si vous souhaitez que votre application web fonctionne sur des navigateurs anciens ou obsolètes, il est toujours judicieux de vérifier d'abord le [tableau de compatibilité sur caniuse.com](https://caniuse.com/fetch).

### Tâche

Dans [la leçon précédente](../2-forms/README.md), nous avons implémenté le formulaire d'inscription pour créer un compte. Nous allons maintenant ajouter du code pour se connecter avec un compte existant et récupérer ses données. Ouvrez le fichier `app.js` et ajoutez une nouvelle fonction `login` :

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Ici, nous commençons par récupérer l'élément du formulaire avec `getElementById()`, puis nous obtenons le nom d'utilisateur à partir de l'entrée avec `loginForm.user.value`. Chaque contrôle de formulaire peut être accédé par son nom (défini dans le HTML à l'aide de l'attribut `name`) en tant que propriété du formulaire.

De manière similaire à ce que nous avons fait pour l'inscription, nous allons créer une autre fonction pour effectuer une requête au serveur, mais cette fois pour récupérer les données du compte :

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Nous utilisons l'API `fetch` pour demander les données de manière asynchrone au serveur, mais cette fois, nous n'avons pas besoin de paramètres supplémentaires autres que l'URL à appeler, car nous ne faisons que demander des données. Par défaut, `fetch` crée une requête HTTP [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), ce qui est exactement ce que nous recherchons ici.

✅ `encodeURIComponent()` est une fonction qui échappe les caractères spéciaux pour les URL. Quels problèmes pourrions-nous rencontrer si nous ne faisons pas appel à cette fonction et utilisons directement la valeur `user` dans l'URL ?

Mettons maintenant à jour notre fonction `login` pour utiliser `getAccount` :

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Tout d'abord, comme `getAccount` est une fonction asynchrone, nous devons l'associer au mot-clé `await` pour attendre le résultat du serveur. Comme pour toute requête serveur, nous devons également gérer les cas d'erreur. Pour l'instant, nous ajouterons simplement un message de journal pour afficher l'erreur et y reviendrons plus tard.

Ensuite, nous devons stocker les données quelque part pour pouvoir les utiliser plus tard pour afficher les informations du tableau de bord. Comme la variable `account` n'existe pas encore, nous allons créer une variable globale pour cela en haut de notre fichier :

```js
let account = null;
```

Une fois que les données utilisateur sont enregistrées dans une variable, nous pouvons naviguer de la page *login* à la page *dashboard* en utilisant la fonction `navigate()` que nous avons déjà.

Enfin, nous devons appeler notre fonction `login` lorsque le formulaire de connexion est soumis, en modifiant le HTML :

```html
<form id="loginForm" action="javascript:login()">
```

Testez que tout fonctionne correctement en enregistrant un nouveau compte et en essayant de vous connecter avec ce même compte.

Avant de passer à la partie suivante, nous pouvons également compléter la fonction `register` en ajoutant ceci à la fin de la fonction :

```js
account = result;
navigate('/dashboard');
```

✅ Saviez-vous que par défaut, vous ne pouvez appeler les API serveur que depuis le *même domaine et port* que la page web que vous consultez ? C'est un mécanisme de sécurité appliqué par les navigateurs. Mais attendez, notre application web fonctionne sur `localhost:3000` alors que l'API du serveur fonctionne sur `localhost:5000`, pourquoi cela fonctionne-t-il ? En utilisant une technique appelée [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), il est possible d'effectuer des requêtes HTTP inter-origines si le serveur ajoute des en-têtes spéciaux à la réponse, permettant des exceptions pour des domaines spécifiques.

> Apprenez-en davantage sur les API en suivant cette [leçon](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Mettre à jour le HTML pour afficher les données

Maintenant que nous avons les données utilisateur, nous devons mettre à jour le HTML existant pour les afficher. Nous savons déjà comment récupérer un élément du DOM en utilisant par exemple `document.getElementById()`. Une fois que vous avez un élément de base, voici quelques API que vous pouvez utiliser pour le modifier ou ajouter des éléments enfants :

- En utilisant la propriété [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent), vous pouvez changer le texte d'un élément. Notez que changer cette valeur supprime tous les enfants de l'élément (s'il y en a) et les remplace par le texte fourni. Ainsi, c'est également une méthode efficace pour supprimer tous les enfants d'un élément donné en lui assignant une chaîne vide `''`.

- En utilisant [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) avec la méthode [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append), vous pouvez créer et attacher un ou plusieurs nouveaux éléments enfants.

✅ En utilisant la propriété [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) d'un élément, il est également possible de changer son contenu HTML, mais cela doit être évité car c'est vulnérable aux attaques de [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting).

### Tâche

Avant de passer à l'écran du tableau de bord, il y a une chose de plus que nous devrions faire sur la page *login*. Actuellement, si vous essayez de vous connecter avec un nom d'utilisateur qui n'existe pas, un message est affiché dans la console, mais pour un utilisateur normal, rien ne change et vous ne savez pas ce qui se passe.

Ajoutons un élément de remplacement dans le formulaire de connexion où nous pourrons afficher un message d'erreur si nécessaire. Un bon endroit serait juste avant le bouton de connexion `<button>` :

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Cet élément `<div>` est vide, ce qui signifie que rien ne sera affiché à l'écran tant que nous n'y ajouterons pas du contenu. Nous lui donnons également un `id` pour pouvoir le récupérer facilement avec JavaScript.

Revenez au fichier `app.js` et créez une nouvelle fonction utilitaire `updateElement` :

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Celle-ci est assez simple : étant donné un *id* d'élément et un *texte*, elle mettra à jour le contenu texte de l'élément DOM correspondant à l'`id`. Utilisons cette méthode à la place du précédent message d'erreur dans la fonction `login` :

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Maintenant, si vous essayez de vous connecter avec un compte invalide, vous devriez voir quelque chose comme ceci :

![Capture d'écran montrant le message d'erreur affiché lors de la connexion](../../../../7-bank-project/3-data/images/login-error.png)

Nous avons maintenant un texte d'erreur qui s'affiche visuellement, mais si vous essayez avec un lecteur d'écran, vous remarquerez que rien n'est annoncé. Pour que le texte ajouté dynamiquement à une page soit annoncé par les lecteurs d'écran, il devra utiliser quelque chose appelé une [Région Active](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Ici, nous allons utiliser un type spécifique de région active appelé une alerte :

```html
<div id="loginError" role="alert"></div>
```

Implémentez le même comportement pour les erreurs de la fonction `register` (n'oubliez pas de mettre à jour le HTML).

## Afficher les informations sur le tableau de bord

En utilisant les mêmes techniques que nous venons de voir, nous allons également nous occuper d'afficher les informations du compte sur la page du tableau de bord.

Voici à quoi ressemble un objet compte reçu du serveur :

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Remarque : pour vous faciliter la tâche, vous pouvez utiliser le compte `test` préexistant qui est déjà rempli avec des données.

### Tâche

Commençons par remplacer la section "Balance" dans le HTML pour ajouter des éléments de remplacement :

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Nous ajouterons également une nouvelle section juste en dessous pour afficher la description du compte :

```html
<h2 id="description"></h2>
```

✅ Comme la description du compte fonctionne comme un titre pour le contenu en dessous, elle est balisée de manière sémantique comme un titre. Apprenez-en davantage sur l'importance de la [structure des titres](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) pour l'accessibilité et examinez de manière critique la page pour déterminer ce qui pourrait également être un titre.

Ensuite, nous allons créer une nouvelle fonction dans `app.js` pour remplir les éléments de remplacement :

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Tout d'abord, nous vérifions que nous avons les données du compte nécessaires avant d'aller plus loin. Ensuite, nous utilisons la fonction `updateElement()` que nous avons créée plus tôt pour mettre à jour le HTML.

> Pour rendre l'affichage du solde plus joli, nous utilisons la méthode [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) pour forcer l'affichage de la valeur avec 2 chiffres après la virgule.

Nous devons maintenant appeler notre fonction `updateDashboard()` chaque fois que le tableau de bord est chargé. Si vous avez déjà terminé l'[exercice de la leçon 1](../1-template-route/assignment.md), cela devrait être simple, sinon vous pouvez utiliser l'implémentation suivante.

Ajoutez ce code à la fin de la fonction `updateRoute()` :

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Et mettez à jour la définition des routes avec :

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Avec ce changement, chaque fois que la page du tableau de bord est affichée, la fonction `updateDashboard()` est appelée. Après une connexion, vous devriez alors pouvoir voir le solde du compte, la devise et la description.

## Créer dynamiquement des lignes de tableau avec des modèles HTML

Dans la [première leçon](../1-template-route/README.md), nous avons utilisé des modèles HTML avec la méthode [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) pour implémenter la navigation dans notre application. Les modèles peuvent également être plus petits et utilisés pour remplir dynamiquement des parties répétitives d'une page.

Nous allons utiliser une approche similaire pour afficher la liste des transactions dans le tableau HTML.

### Tâche

Ajoutez un nouveau modèle dans le `<body>` du HTML :

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Ce modèle représente une seule ligne de tableau, avec les 3 colonnes que nous voulons remplir : *date*, *objet* et *montant* d'une transaction.

Ensuite, ajoutez cette propriété `id` à l'élément `<tbody>` du tableau dans le modèle du tableau de bord pour le rendre plus facile à trouver avec JavaScript :

```html
<tbody id="transactions"></tbody>
```

Notre HTML est prêt, passons au code JavaScript et créons une nouvelle fonction `createTransactionRow` :

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

Cette fonction fait exactement ce que son nom implique : en utilisant le modèle que nous avons créé plus tôt, elle crée une nouvelle ligne de tableau et remplit son contenu avec les données de la transaction. Nous utiliserons cela dans notre fonction `updateDashboard()` pour remplir le tableau :

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Ici, nous utilisons la méthode [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) qui crée un nouveau fragment DOM sur lequel nous pouvons travailler, avant de l'attacher finalement à notre tableau HTML.

Il reste encore une chose à faire avant que ce code puisse fonctionner, car notre fonction `updateElement()` prend actuellement en charge uniquement le contenu texte. Modifions un peu son code :

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Nous utilisons la méthode [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) car elle permet d'attacher soit du texte, soit des [nœuds DOM](https://developer.mozilla.org/docs/Web/API/Node) à un élément parent, ce qui est parfait pour tous nos cas d'utilisation.
Si vous essayez d'utiliser le compte `test` pour vous connecter, vous devriez maintenant voir une liste de transactions sur le tableau de bord 🎉.

---

## 🚀 Défi

Travaillez ensemble pour rendre la page du tableau de bord semblable à une véritable application bancaire. Si vous avez déjà stylisé votre application, essayez d'utiliser [les media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) pour créer un [design responsive](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) qui fonctionne bien à la fois sur les appareils de bureau et mobiles.

Voici un exemple de page de tableau de bord stylisée :

![Capture d'écran d'un exemple de résultat du tableau de bord après stylisation](../../../../7-bank-project/images/screen2.png)

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/46)

## Devoir

[Refactorisez et commentez votre code](assignment.md)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.