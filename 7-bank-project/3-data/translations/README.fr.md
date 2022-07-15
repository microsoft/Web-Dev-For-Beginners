# Créer une application bancaire Partie 3: Méthodes de récupération et d'utilisation des données

## Quiz préalable

[Quiz préalable](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/45?loc=fr)

### Introduction

Au cœur de chaque application Web, il y a des *données*. Les données peuvent prendre de nombreuses formes, mais leur objectif principal est toujours d'afficher des informations pour l'utilisateur. Les applications Web devenant de plus en plus interactives et complexes, la manière dont l'utilisateur accède aux informations et interagit avec elles est désormais un élément clé du développement Web.

Dans cette leçon, nous verrons comment récupérer des données d'un serveur de manière asynchrone et utiliser ces données pour afficher des informations sur une page Web sans recharger le code HTML.

### Prérequis

Vous devez avoir créé la partie [Formulaire de connexion et d'inscription](../../2-forms/translations/README.fr.md) de l'application Web pour cette leçon. Vous devez également installer [Node.js](https://nodejs.org) et [exécuter l'API du serveur](../../api/translations/README.fr.md) localement afin d'obtenir les données de compte.

Vous pouvez tester que le serveur fonctionne correctement en exécutant cette commande dans un terminal:

```sh
curl http://localhost:5000/api
# -> devrait renvoyer "Bank API v1.0.0" comme résultat
```

---

## AJAX et la récupération de données

Les sites Web traditionnels mettent à jour le contenu affiché lorsque l’utilisateur sélectionne un lien ou soumet des données à l’aide d’un formulaire, en rechargeant la page HTML complète. Chaque fois que de nouvelles données doivent être chargées, le serveur Web renvoie une toute nouvelle page HTML qui doit être traitée par le navigateur, interrompant l’action actuelle de l’utilisateur et limitant les interactions pendant le rechargement. Ce flux de travail est également appelé *Application multipage* ou *AMP*.

![Mettre à jour le flux de travail dans une application multipage](../images/mpa.png)

Lorsque les applications Web ont commencé à devenir plus complexes et interactives, une nouvelle technique appelée [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) a émergé. Cette technique permet aux applications Web d’envoyer et de récupérer des données à partir d’un serveur de manière asynchrone à l’aide de JavaScript, sans avoir à recharger la page HTML, ce qui se traduit par des mises à jour plus rapides et des interactions utilisateur plus fluides. Lorsque de nouvelles données sont reçues du serveur, la page HTML actuelle peut également être mise à jour avec JavaScript à l’aide de l’API [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). Au fil du temps, cette approche a évolué pour devenir ce qu’on appelle maintenant une [*Application d’une seule page* ou *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Mettre à jour le flux de travail dans une application d’une seule page](../images/spa.png)

Lors de l’introduction d’AJAX, la seule API disponible pour récupérer des données de manière asynchrone était [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Mais les navigateurs modernes implémentent désormais également [l’API `Fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API) plus pratique et plus puissante, qui utilise des promesses et est mieux adaptée à la manipulation des données JSON.

> Bien que tous les navigateurs modernes prennent en charge l’API Fetch, si vous souhaitez que votre application Web fonctionne sur des navigateurs hérités ou anciens, il est toujours judicieux de vérifier d’abord le [tableau de compatibilité sur caniuse.com](https://caniuse.com/fetch).

### Tâche

Dans [la leçon précédente](../../2-forms/translations/README.fr.md) nous avons implémenté le formulaire d’inscription pour créer un compte. Nous allons maintenant ajouter du code pour vous connecter à l’aide d’un compte existant et récupérer ses données. Ouvrez le fichier `app.js` et ajoutez une nouvelle fonction `login`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Ici, nous commençons par récupérer l’élément de formulaire avec `getElementById()`, puis nous obtenons le nom d’utilisateur à partir de l’entrée avec `loginForm.user.value`. Chaque contrôle de formulaire est accessible par son nom (défini dans le code HTML à l’aide de l’attribut `name`) en tant que propriété du formulaire.

De la même manière que nous avons fait pour l’enregistrement, nous allons créer une autre fonction pour effectuer une demande de serveur, mais cette fois pour récupérer les données du compte:

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

Nous utilisons l’API `fetch` pour demander les données de manière asynchrone au serveur, mais cette fois, nous n’avons pas besoin de paramètres supplémentaires autres que l’URL à appeler, car nous n’interrogeons que des données. Par défaut, `fetch` crée une requête HTTP [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), ce que nous recherchons ici.

✅ `encodeURIComponent()` est une fonction qui échappe les caractères spéciaux pour URL. Quels problèmes pourrions-nous avoir si nous n’appelons pas cette fonction et n’utilisons pas directement la valeur `user` dans l’URL?

Mettons maintenant à jour notre fonction `login` pour utiliser `getAccount`:

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

Tout d’abord, comme `getAccount` est une fonction asynchrone, nous devons la faire correspondre avec le mot-clé `await` pour attendre le résultat du serveur. Comme pour toute demande de serveur, nous devons également traiter les cas d’erreur. Pour l’instant, nous allons seulement ajouter un message de journal pour afficher l’erreur, et y revenir plus tard.

Ensuite, nous devons stocker les données quelque part afin de pouvoir les utiliser plus tard pour afficher les informations du tableau de bord. Étant donné que la variable `account` n’existe pas encore, nous allons créer une variable globale pour elle en haut de notre fichier:

```js
let account = null;
```

Une fois les données utilisateur enregistrées dans une variable, nous pouvons naviguer de la page *login* au *dashboard* en utilisant la fonction `navigate()` que nous avons déjà.

Enfin, nous devons appeler notre fonction `login` lorsque le formulaire de login est soumis, en modifiant le HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Vérifiez que tout fonctionne correctement en enregistrant un nouveau compte et en essayant de vous connecter à l’aide du même compte.

Avant de passer à la partie suivante, nous pouvons également compléter la fonction `register` en ajoutant ceci au bas de la fonction:

```js
account = result;
navigate('/dashboard');
```

✅ Saviez-vous que par défaut, vous ne pouvez appeler les API du serveur qu’à partir du *même domaine et port* que la page Web que vous consultez? Il s’agit d’un mécanisme de sécurité appliqué par les navigateurs. Mais attendez, notre application web s’exécute sur 'localhost:3000' alors que l’API du serveur s’exécute sur `localhost:3000`, pourquoi cela fonctionne-t-il? En utilisant une technique appelée [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), il est possible d’effectuer des requêtes HTTP inter-origines si le serveur ajoute des en-têtes spéciaux à la réponse, ce qui permet des exceptions pour des domaines spécifiques.

> En savoir plus sur les API en suivant cette [leçon](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art?WT.mc_id=academic-13441-cxa)

## Mettre à jour le code HTML pour afficher les données

Maintenant que nous avons les données utilisateur, nous devons mettre à jour le code HTML existant pour l’afficher. Nous savons déjà comment récupérer un élément du DOM en utilisant par exemple `document.getElementById()`. Une fois que vous avez un élément de base, voici quelques API que vous pouvez utiliser pour le modifier ou y ajouter des éléments enfants:

- En utilisant la propriété [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent), vous pouvez modifier le texte d’un élément. Notez que la modification de cette valeur supprime tous les enfants de l’élément (le cas échéant) et le remplace par le texte fourni. En tant que tel, c’est aussi une méthode efficace pour supprimer tous les enfants d’un élément donné en lui attribuant une chaîne vide `''` à celui-ci.

- En utilisant [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) avec la méthode [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append), vous pouvez créer et attacher un ou plusieurs nouveaux éléments enfants.

✅ En utilisant la propriété [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) d’un élément, il est également possible de modifier son contenu HTML, mais celui-ci doit être évité car il est vulnérable aux attaques [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting).

### Tâche

Avant de passer à l’écran du tableau de bord, il y a encore une chose que nous devrions faire sur la page *connexion*. Actuellement, si vous essayez de vous connecter avec un nom d’utilisateur qui n’existe pas, un message s’affiche dans la console, mais pour un utilisateur normal, rien ne change et vous ne savez pas ce qui se passe.

Ajoutons un élément d’espace réservé dans le formulaire de connexion où nous pouvons afficher un message d’erreur si nécessaire. Un bon endroit serait juste avant la connexion `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Cet élément `<div>` est vide, ce qui signifie que rien ne sera affiché à l’écran tant que nous n’y aurons pas ajouté du contenu. Nous lui donnons également un `id` afin que nous puissions le récupérer facilement avec JavaScript.

Revenez au fichier `app.js` et créez une nouvelle fonction d’assistance `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Celui-ci est assez simple: selon un élément *id* et *text*, il mettra à jour le contenu textuel de l’élément DOM avec l'`id` correspondant. Utilisons cette méthode à la place du message d’erreur précédent dans la fonction `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Maintenant, si vous essayez de vous connecter avec un compte non valide, vous devriez voir quelque chose comme ceci:

![Capture d’écran montrant le message d’erreur affiché lors de la connexion](../images/login-error.png)

Maintenant, nous avons un texte d’erreur qui apparaît visuellement, mais si vous l’essayez avec un lecteur d’écran, vous remarquerez que rien n’est annoncé. Pour que le texte ajouté dynamiquement à une page soit annoncé par les lecteurs d’écran, il devra utiliser quelque chose appelé [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Ici, nous allons utiliser un type spécifique de région en direct (live region) appelée alerte:

```html
<div id="loginError" role="alert"></div>
```

Implémentez le même comportement pour les erreurs de la fonction `register` (n’oubliez pas de mettre à jour le code HTML).

## Afficher les informations sur le tableau de bord

En utilisant les mêmes techniques que nous venons de voir, nous nous occuperons également d’afficher les informations du compte sur la page du tableau de bord.

Voici à quoi ressemble un objet de compte reçu du serveur:

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

> Remarque: pour vous faciliter la vie, vous pouvez utiliser le compte `test` préexistant qui est déjà rempli de données.

### Tâche

Commençons par remplacer la section "Balance" dans le code HTML pour ajouter des éléments d’espace réservé:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Nous ajouterons également une nouvelle section juste en dessous pour afficher la description du compte:

```html
<h2 id="description"></h2>
```

✅ Étant donné que la description du compte fonctionne comme un titre pour le contenu en dessous, elle est marquée sémantiquement comme un en-tête. Apprenez-en davantage sur l’importance de [structure de titre](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) pour l’accessibilité, et jetez un coup d’œil critique à la page pour déterminer ce qui pourrait être un autre titre.

Ensuite, nous allons créer une nouvelle fonction dans `app.js` pour remplir l’espace réservé:

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

Tout d’abord, nous vérifions que nous avons les données de compte dont nous avons besoin avant d’aller plus loin. Ensuite, nous utilisons la fonction `updateElement()` que nous avons créée précédemment pour mettre à jour le code HTML.

> Pour rendre l’affichage de la balance plus joli, nous utilisons la méthode [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) pour forcer l’affichage de la valeur avec 2 chiffres après la virgule.

Maintenant, nous devons appeler notre fonction `updateDashboard()` chaque fois que le tableau de bord est chargé. Si vous avez déjà terminé le [devoir de la leçon 1](../../1-template-route/translations/README.fr.md) cela devrait être simple, sinon vous pouvez utiliser l’implémentation suivante.

Ajoutez ce code à la fin de la fonction `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Et mettez à jour la définition des itinéraires avec:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Avec ce changement, chaque fois que la page du tableau de bord est affichée, la fonction `updateDashboard()` est appelée. Après une connexion, vous devriez alors être en mesure de voir le solde du compte, la devise et la description.

## Créer dynamiquement des lignes de tableau avec des modèles HTML

Dans la [première leçon](../../1-template-route/translations/README.fr.md) nous avons utilisé des modèles HTML avec la méthode [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) pour implémenter la navigation dans notre application. Les modèles peuvent également être plus petits et utilisés pour remplir dynamiquement des parties répétitives d’une page.

Nous utiliserons une approche similaire pour afficher la liste des transactions dans le tableau HTML.

### Tâche

Ajoutez un nouveau modèle dans le code HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Ce modèle représente une seule ligne de tableau, avec les 3 colonnes que nous voulons remplir: *date*, *object* et *amount* d’une transaction.

Ensuite, ajoutez cette propriété `id` à l’élément `<tbody>` du tableau dans le modèle de tableau de bord pour faciliter la recherche à l’aide de JavaScript:

```html
<tbody id="transactions"></tbody>
```

Notre HTML est prêt, passons au code JavaScript et créons une nouvelle fonction `createTransactionRow`:

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

Cette fonction fait exactement ce que ses noms impliquent: en utilisant le modèle que nous avons créé précédemment, elle crée une nouvelle ligne de tableau et remplit son contenu à l’aide de données de transaction. Nous l’utiliserons dans notre fonction `updateDashboard()` pour remplir la table:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Ici, nous utilisons la méthode [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) qui crée un nouveau fragment DOM sur lequel nous pouvons travailler, avant de finalement l’attacher à notre tableau HTML.

Il reste encore une chose à faire avant que ce code puisse fonctionner, car notre fonction `updateElement()` ne prend actuellement en charge que le contenu texte. Changeons un peu son code:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Nous utilisons la méthode [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) car elle permet d’attacher du texte ou des [nœuds DOM](https://developer.mozilla.org/docs/Web/API/Node) à un élément parent, ce qui est parfait pour tous nos cas d’utilisation.

Si vous essayez d’utiliser le compte `test` pour vous connecter, vous devriez maintenant voir une liste de transactions sur le tableau de bord 🎉.

---

## 🚀 Challenge

Travaillez ensemble pour que la page du tableau de bord ressemble à une véritable application bancaire. Si vous avez déjà stylisé votre application, essayez d'utiliser des [requêtes multimédias](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) pour créer un [design réactif](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) qui fonctionne bien sur les ordinateurs de bureau et les appareils mobiles.

Voici un exemple de page de tableau de bord stylisée:

![Capture d'écran d'un exemple de résultat du tableau de bord après le style](../../images/screen2.png)

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/46?loc=fr)

## Affectation

[Refactorisez et commentez votre code](assignment.fr.md)
