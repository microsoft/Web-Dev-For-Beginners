# Créer une application bancaire Partie 1 : Modèles HTML et itinéraires dans une application Web

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/41?loc=fr)

### Introduction

Depuis l'avènement de JavaScript dans les navigateurs, les sites Web deviennent plus interactifs et complexes que jamais. Les technologies Web sont maintenant couramment utilisées pour créer des applications entièrement fonctionnelles qui s'exécutent directement dans un navigateur que nous appelons [applications Web](https://en.wikipedia.org/wiki/Web_application). Les applications Web étant hautement interactives, les utilisateurs ne souhaitent pas attendre un rechargement complet de la page à chaque fois qu'une action est effectuée. C'est pourquoi JavaScript est utilisé pour mettre à jour le HTML directement à l'aide du DOM, afin de fournir une expérience utilisateur plus fluide.

Dans cette leçon, nous allons poser les bases de la création d'une application Web bancaire, en utilisant des modèles HTML pour créer plusieurs écrans pouvant être affichés et mis à jour sans avoir à recharger toute la page HTML.

### Prérequis

Vous avez besoin d'un serveur Web local pour tester l'application Web que nous allons créer dans cette leçon. Si vous n'en avez pas, vous pouvez installer [Node.js](https://nodejs.org/fr) et utiliser la commande `npx lite-server` depuis le dossier de votre projet. Il créera un serveur Web local et ouvrira votre application dans un navigateur.

### Préparation

Sur votre ordinateur, créez un dossier nommé `bank` avec un fichier nommé `index.html` à l'intérieur. Nous allons commencer par ce code HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Modèles HTML

Si vous souhaitez créer plusieurs écrans pour une page Web, une solution serait de créer un fichier HTML pour chaque écran que vous souhaitez afficher. Cependant, cette solution présente quelques inconvénients :

- Vous devez recharger l'intégralité du code HTML lors du changement d'écran, ce qui peut être lent.
- Il est difficile de partager des données entre les différents écrans.

Une autre approche consiste à n'avoir qu'un seul fichier HTML et à définir plusieurs [modèles HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) à l'aide de l'élément `<template>`. Un modèle est un bloc HTML réutilisable qui n'est pas affiché par le navigateur et doit être instancié lors de l'exécution à l'aide de JavaScript.

### Tâche

Nous allons créer une application bancaire avec deux écrans : la page de connexion et le tableau de bord. Tout d'abord, ajoutons dans le corps HTML un élément d'espace réservé que nous utiliserons pour instancier les différents écrans de notre application :

```html
<div id="app">Loading...</div>
```

Nous lui donnons un `id` pour le rendre plus facile à localiser avec JavaScript plus tard.

> Astuce : puisque le contenu de cet élément sera remplacé, nous pouvons mettre un message de chargement ou un indicateur qui s'affichera pendant le chargement de l'application.

Ensuite, ajoutons ci-dessous le modèle HTML pour la page de connexion. Pour l'instant nous n'y mettrons qu'un titre et une section contenant un lien que nous utiliserons pour effectuer la navigation.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Ensuite, nous ajouterons un autre modèle HTML pour la page du tableau de bord. Cette page contiendra différentes sections :

- Une en-tête avec un titre et un lien de déconnexion
- Le solde courant du compte bancaire
- Une liste des transactions, affichée dans un tableau

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Astuce : lors de la création de modèles HTML, si vous voulez voir à quoi cela ressemblera, vous pouvez commenter les lignes `<template>` et `</template>` en les entourant de `<!-- -->`.

✅ Pourquoi pensez-vous que nous utilisons les attributs `id` sur les modèles ? Pourrions-nous utiliser autre chose comme des classes ?

## Afficher des modèles avec JavaScript

Si vous essayez votre fichier HTML actuel dans un navigateur, vous verrez qu'il reste bloqué en affichant `Loading...`. C'est parce que nous devons ajouter du code JavaScript pour instancier et afficher les modèles HTML.

L'instanciation d'un modèle se fait généralement en 3 étapes :

1. Récupérez l'élément du modèle dans le DOM, par exemple en utilisant [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).
2. Clonez l'élément de modèle à l'aide de [`cloneNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode).
3. Attachez-le au DOM sous un élément visible, par exemple en utilisant [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild).

✅ Pourquoi avons-nous besoin de cloner le modèle avant de l'attacher au DOM ? Que pensez-vous qu'il se passerait si nous sautions cette étape?

### Tâche

Créez un nouveau fichier nommé `app.js` dans votre dossier de projet et importez ce fichier dans la section `<head>` de votre code HTML :

```html
<script src="app.js" defer></script>
```

Maintenant dans `app.js`, nous allons créer une nouvelle fonction `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Ce que nous faisons ici est exactement les 3 étapes décrites ci-dessus. Nous instancions le modèle avec l'ID `templateId` et plaçons son contenu cloné dans notre espace réservé d'application. Notez que nous devons utiliser `cloneNode(true)` pour copier l'intégralité du sous-arbre du modèle.

Appelez maintenant cette fonction avec l'un des modèles et regardez le résultat.

```js
updateRoute('login');
```

✅ Quel est le but de ce code `app.innerHTML = '';` ? Que se passe-t-il sans ?

## Création de routes

Lorsque nous parlons d'une application Web, nous appelons *Routage* l'intention de mapper des **URL** sur des écrans spécifiques qui doivent être affichés. Sur un site Web avec plusieurs fichiers HTML, cela se fait automatiquement car les chemins d'accès aux fichiers sont reflétés sur l'URL. Par exemple, avec ces fichiers dans votre dossier de projet :

```
monsite/index.html
monsite/login.html
monsite/admin/index.html
```

Si vous créez un serveur Web avec `mywebsite` comme racine, le mappage d'URL sera:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Cependant, pour notre application Web, nous utilisons un seul fichier HTML contenant tous les écrans, ce comportement par défaut ne nous aidera donc pas. Nous devons créer cette carte manuellement et effectuer la mise à jour du modèle affiché à l'aide de JavaScript.

### Tâche

Nous utiliserons un objet simple pour implémenter une [carte](https://en.wikipedia.org/wiki/Associative_array) entre les chemins d'URL et nos modèles. Ajoutez cet objet en haut de votre fichier `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Modifions maintenant un peu la fonction `updateRoute`. Au lieu de passer directement le `templateId` comme argument, nous voulons le récupérer en regardant d'abord l'URL actuelle, puis en utilisant notre carte pour obtenir la valeur d'ID de modèle correspondante. Nous pouvons utiliser [`window.location.pathname`](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname) pour obtenir uniquement la section du chemin de l'URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Ici, nous avons mappé les routes que nous avons déclarées au modèle correspondant. Vous pouvez vérifier que celà fonctionne correctement en modifiant l'URL manuellement dans votre navigateur.

✅ Que se passe-t-il si vous saisissez un chemin inconnu dans l'URL ? Comment pourrions-nous résoudre cela?

## Ajout de navigation

La prochaine étape pour notre application consiste à ajouter la possibilité de naviguer entre les pages sans avoir à modifier l'URL manuellement. Cela implique deux choses :

  1. Mise à jour de l'URL actuelle
  2. Mise à jour du modèle affiché en fonction de la nouvelle URL

Nous nous sommes déjà occupés de la deuxième partie avec la fonction `updateRoute`, nous devons donc trouver comment mettre à jour l'URL actuelle.

Il va falloir utiliser JavaScript et plus précisément le [`history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) qui permet de mettre à jour l'URL et créer une nouvelle entrée dans l'historique de navigation, sans recharger le code HTML.

> Remarque : Bien que l'élément d'ancrage HTML [`<a href>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) puisse être utilisé seul pour créer des liens hypertexte à des URL différentes, il fera le navigateur recharger le HTML par défaut. Il est nécessaire d'empêcher ce comportement lors de la gestion du routage avec un javascript personnalisé, en utilisant la fonction preventDefault() sur l'événement click.

### Tâche

Créons une nouvelle fonction que nous pouvons utiliser pour naviguer dans notre application:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Cette méthode met d'abord à jour l'URL actuelle en fonction du chemin donné, puis met à jour le modèle. La propriété `window.location.origin` renvoie la racine de l'URL, nous permettant de reconstruire une URL complète à partir d'un chemin donné.

Maintenant que nous avons cette fonction, nous pouvons résoudre le problème que nous avons si un chemin ne correspond à aucun itinéraire défini. Nous modifierons la fonction `updateRoute` en ajoutant une solution de secours à l'une des routes existantes si nous ne trouvons pas de correspondance.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Si un itinéraire ne peut pas être trouvé, nous allons maintenant rediriger vers la page de `login`.

Créons maintenant une fonction pour obtenir l'URL lorsqu'un lien est cliqué et pour empêcher le comportement de lien par défaut du navigateur :

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Complétons le système de navigation en ajoutant des liens à nos liens *Login* et *Logout* dans le HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

L'objet `event` ci-dessus capture l'événement `click` et le transmet à notre fonction `onLinkClick`.

Utiliser l'attribut [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) lie l'événement `click` au code JavaScript, dans ce cas via l'appel à la fonction `navigate ()`.

Essayez de cliquer sur ces liens, vous devriez maintenant pouvoir naviguer entre les différents écrans de votre application.

✅ La méthode `history.pushState` fait partie de la norme HTML5 et est implémentée dans [tous les navigateurs modernes](https://caniuse.com/?search=pushState). Si vous créez une application Web pour les navigateurs plus anciens, il existe une astuce que vous pouvez utiliser à la place de cette API : en utilisant un [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) avant le chemin que vous pouvez implémenter un routage qui fonctionne avec la navigation d'ancrage standard et ne recharge pas la page, car son but était de créer des liens internes au sein d'une page.

## Gestion des boutons Précédent et Suivant du navigateur

L'utilisation de `history.pushState` crée de nouvelles entrées dans l'historique de navigation du navigateur. Vous pouvez vérifier qu'en maintenant enfoncé le *bouton de retour* de votre navigateur, il devrait afficher quelque chose comme ceci:

![Capture d'écran de l'historique de navigation](./history.png)

Si vous essayez de cliquer plusieurs fois sur le bouton Précédent, vous verrez que l'URL actuelle change et que l'historique est mis à jour, mais le même modèle reste affiché.

C'est parce que l'application ne sait pas que nous devons appeler `updateRoute()` chaque fois que l'historique change. Si vous jetez un oeil à [ `la documentation de history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState), vous pouvez voir que si l'état change - c'est que nous sommes passés à une URL différente - l'événement [ `popstate`](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event) est déclenché. Nous allons l'utiliser pour résoudre ce problème.

### Tâche

Pour nous assurer que le modèle affiché est mis à jour lorsque l'historique du navigateur change, nous allons attacher une nouvelle fonction qui appelle `updateRoute()`. Nous le ferons au bas de notre fichier `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Remarque : nous avons utilisé une [fonction fléchée](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ici pour déclarer notre gestionnaire d'événements `popstate` pour plus de concision, mais un la fonction normale fonctionnerait de la même manière.

Voici une vidéo de rappel sur les fonctions fléchées :

[![Fonctions fléchées](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Fonctions fléchées")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur les fonctions fléchées.

Essayez maintenant d'utiliser les boutons Précédent et Suivant de vos navigateurs, et vérifiez que la route affichée est bien mis à jour cette fois.

---

## 🚀 Défi


Ajoutez un nouveau modèle et une route pour une troisième page qui affiche les crédits de cette application.

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/42?loc=fr)

## Révision et étude personnelle

Le routage est l'une des parties étonnamment délicates du développement Web, d'autant plus que le Web passe des comportements d'actualisation des pages aux actualisations des pages d'application à page unique. En savoir plus sur [comment le service Azure Static Web App](https://docs.microsoft.com/en-us/azure/static-web-apps/routes?WT.mc_id=academic-13441-cxa) gère le routage . Pouvez-vous expliquer pourquoi certaines des décisions décrites dans ce document sont nécessaires?

## Affectation

[Améliorer le routage](assignment.fr.md)
