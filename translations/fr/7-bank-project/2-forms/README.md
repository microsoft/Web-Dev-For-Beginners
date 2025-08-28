<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-23T23:58:30+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "fr"
}
-->
# Créer une application bancaire Partie 2 : Construire un formulaire de connexion et d'inscription

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/43)

### Introduction

Dans presque toutes les applications web modernes, vous pouvez créer un compte pour avoir votre propre espace privé. Comme plusieurs utilisateurs peuvent accéder à une application web en même temps, il est nécessaire de disposer d'un mécanisme pour stocker les données personnelles de chaque utilisateur séparément et sélectionner les informations à afficher. Nous ne couvrirons pas la gestion [sécurisée de l'identité utilisateur](https://en.wikipedia.org/wiki/Authentication), car c'est un sujet vaste en soi, mais nous nous assurerons que chaque utilisateur puisse créer un (ou plusieurs) compte(s) bancaire(s) sur notre application.

Dans cette partie, nous utiliserons des formulaires HTML pour ajouter une connexion et une inscription à notre application web. Nous verrons comment envoyer les données à une API serveur de manière programmatique, et finalement comment définir des règles de validation de base pour les entrées utilisateur.

### Prérequis

Vous devez avoir terminé la partie [Modèles HTML et routage](../1-template-route/README.md) de l'application web pour cette leçon. Vous devez également installer [Node.js](https://nodejs.org) et [exécuter l'API serveur](../api/README.md) localement afin de pouvoir envoyer des données pour créer des comptes.

**À noter**  
Vous aurez deux terminaux à exécuter en même temps comme indiqué ci-dessous :  
1. Pour l'application bancaire principale que nous avons construite dans la leçon [Modèles HTML et routage](../1-template-route/README.md)  
2. Pour l'[API serveur de l'application bancaire](../api/README.md) que nous venons de configurer ci-dessus.  

Vous devez avoir ces deux serveurs en fonctionnement pour suivre le reste de la leçon. Ils écoutent sur des ports différents (port `3000` et port `5000`), donc tout devrait bien fonctionner.

Vous pouvez tester si le serveur fonctionne correctement en exécutant cette commande dans un terminal :

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Formulaire et contrôles

L'élément `<form>` encapsule une section d'un document HTML où l'utilisateur peut saisir et soumettre des données à l'aide de contrôles interactifs. Il existe toutes sortes de contrôles d'interface utilisateur (UI) qui peuvent être utilisés dans un formulaire, les plus courants étant les éléments `<input>` et `<button>`.

Il existe de nombreux [types](https://developer.mozilla.org/docs/Web/HTML/Element/input) de `<input>`. Par exemple, pour créer un champ où l'utilisateur peut entrer son nom d'utilisateur, vous pouvez utiliser :

```html
<input id="username" name="username" type="text">
```

L'attribut `name` sera utilisé comme nom de propriété lorsque les données du formulaire seront envoyées. L'attribut `id` est utilisé pour associer un `<label>` au contrôle du formulaire.

> Consultez la liste complète des [types de `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) et [autres contrôles de formulaire](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) pour avoir une idée de tous les éléments d'interface utilisateur natifs que vous pouvez utiliser pour construire votre interface.

✅ Notez que `<input>` est un [élément vide](https://developer.mozilla.org/docs/Glossary/Empty_element) auquel vous ne devez *pas* ajouter une balise de fermeture correspondante. Vous pouvez cependant utiliser la notation auto-fermante `<input/>`, mais ce n'est pas obligatoire.

L'élément `<button>` dans un formulaire est un peu spécial. Si vous ne spécifiez pas son attribut `type`, il soumettra automatiquement les données du formulaire au serveur lorsqu'il est pressé. Voici les valeurs possibles pour l'attribut `type` :

- `submit` : Par défaut dans un `<form>`, le bouton déclenche l'action de soumission du formulaire.
- `reset` : Le bouton réinitialise tous les contrôles du formulaire à leurs valeurs initiales.
- `button` : N'associe aucun comportement par défaut lorsque le bouton est pressé. Vous pouvez ensuite lui attribuer des actions personnalisées à l'aide de JavaScript.

### Tâche

Commençons par ajouter un formulaire au modèle `login`. Nous aurons besoin d'un champ pour le *nom d'utilisateur* et d'un bouton *Connexion*.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Si vous regardez de plus près, vous pouvez remarquer que nous avons également ajouté un élément `<label>` ici. Les éléments `<label>` sont utilisés pour ajouter un nom aux contrôles de l'interface utilisateur, comme notre champ de nom d'utilisateur. Les étiquettes sont importantes pour la lisibilité de vos formulaires, mais elles offrent également des avantages supplémentaires :

- En associant une étiquette à un contrôle de formulaire, cela aide les utilisateurs utilisant des technologies d'assistance (comme un lecteur d'écran) à comprendre quelles données ils doivent fournir.
- Vous pouvez cliquer sur l'étiquette pour mettre directement le focus sur le champ associé, ce qui le rend plus facile à atteindre sur les appareils à écran tactile.

> [L'accessibilité](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) sur le web est un sujet très important souvent négligé. Grâce aux [éléments HTML sémantiques](https://developer.mozilla.org/docs/Learn/Accessibility/HTML), il n'est pas difficile de créer du contenu accessible si vous les utilisez correctement. Vous pouvez [en savoir plus sur l'accessibilité](https://developer.mozilla.org/docs/Web/Accessibility) pour éviter les erreurs courantes et devenir un développeur responsable.

Ajoutons maintenant un deuxième formulaire pour l'inscription, juste en dessous du précédent :

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

En utilisant l'attribut `value`, nous pouvons définir une valeur par défaut pour un champ donné.  
Remarquez également que le champ pour le `balance` a le type `number`. Cela semble-t-il différent des autres champs ? Essayez d'interagir avec.

✅ Pouvez-vous naviguer et interagir avec les formulaires uniquement à l'aide d'un clavier ? Comment feriez-vous cela ?

## Soumettre des données au serveur

Maintenant que nous avons une interface utilisateur fonctionnelle, l'étape suivante consiste à envoyer les données au serveur. Faisons un test rapide avec notre code actuel : que se passe-t-il si vous cliquez sur le bouton *Connexion* ou *Inscription* ?

Avez-vous remarqué le changement dans la section URL de votre navigateur ?

![Capture d'écran du changement d'URL du navigateur après avoir cliqué sur le bouton Inscription](../../../../7-bank-project/2-forms/images/click-register.png)

L'action par défaut d'un `<form>` est de soumettre le formulaire à l'URL actuelle du serveur en utilisant la [méthode GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), en ajoutant directement les données du formulaire à l'URL. Cependant, cette méthode présente quelques inconvénients :

- Les données envoyées sont très limitées en taille (environ 2000 caractères).
- Les données sont directement visibles dans l'URL (pas idéal pour les mots de passe).
- Cela ne fonctionne pas avec les téléchargements de fichiers.

C'est pourquoi vous pouvez changer cela pour utiliser la [méthode POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5), qui envoie les données du formulaire au serveur dans le corps de la requête HTTP, sans les limitations précédentes.

> Bien que POST soit la méthode la plus couramment utilisée pour envoyer des données, [dans certains scénarios spécifiques](https://www.w3.org/2001/tag/doc/whenToUseGet.html), il est préférable d'utiliser la méthode GET, par exemple lors de l'implémentation d'un champ de recherche.

### Tâche

Ajoutez les propriétés `action` et `method` au formulaire d'inscription :

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Essayez maintenant de créer un nouveau compte avec votre nom. Après avoir cliqué sur le bouton *Inscription*, vous devriez voir quelque chose comme ceci :

![Une fenêtre de navigateur à l'adresse localhost:5000/api/accounts, affichant une chaîne JSON avec les données utilisateur](../../../../7-bank-project/2-forms/images/form-post.png)

Si tout se passe bien, le serveur devrait répondre à votre requête avec une réponse [JSON](https://www.json.org/json-en.html) contenant les données du compte qui a été créé.

✅ Essayez de vous inscrire à nouveau avec le même nom. Que se passe-t-il ?

## Soumettre des données sans recharger la page

Comme vous l'avez probablement remarqué, il y a un léger problème avec l'approche que nous venons d'utiliser : en soumettant le formulaire, nous quittons notre application et le navigateur redirige vers l'URL du serveur. Nous essayons d'éviter tous les rechargements de page avec notre application web, car nous créons une [application monopage (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Pour envoyer les données du formulaire au serveur sans forcer un rechargement de la page, nous devons utiliser du code JavaScript. Au lieu de mettre une URL dans la propriété `action` d'un élément `<form>`, vous pouvez utiliser n'importe quel code JavaScript précédé de la chaîne `javascript:` pour effectuer une action personnalisée. Cela signifie également que vous devrez implémenter certaines tâches qui étaient auparavant effectuées automatiquement par le navigateur :

- Récupérer les données du formulaire.
- Convertir et encoder les données du formulaire dans un format approprié.
- Créer la requête HTTP et l'envoyer au serveur.

### Tâche

Remplacez l'attribut `action` du formulaire d'inscription par :

```html
<form id="registerForm" action="javascript:register()">
```

Ouvrez `app.js` et ajoutez une nouvelle fonction nommée `register` :

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Ici, nous récupérons l'élément du formulaire à l'aide de `getElementById()` et utilisons l'assistant [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) pour extraire les valeurs des contrôles du formulaire sous forme de paires clé/valeur. Ensuite, nous convertissons les données en un objet régulier à l'aide de [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) et enfin, nous sérialisons les données en [JSON](https://www.json.org/json-en.html), un format couramment utilisé pour échanger des données sur le web.

Les données sont maintenant prêtes à être envoyées au serveur. Créez une nouvelle fonction nommée `createAccount` :

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Que fait cette fonction ? Tout d'abord, remarquez le mot-clé `async` ici. Cela signifie que la fonction contient du code qui s'exécutera de manière [**asynchrone**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Lorsqu'il est utilisé avec le mot-clé `await`, il permet d'attendre l'exécution du code asynchrone - comme attendre la réponse du serveur ici - avant de continuer.

Voici une courte vidéo sur l'utilisation de `async/await` :

[![Async et Await pour gérer les promesses](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async et Await pour gérer les promesses")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur async/await.

Nous utilisons l'API `fetch()` pour envoyer des données JSON au serveur. Cette méthode prend 2 paramètres :

- L'URL du serveur, donc nous remettons `//localhost:5000/api/accounts` ici.
- Les paramètres de la requête. C'est là que nous définissons la méthode sur `POST` et fournissons le `body` de la requête. Comme nous envoyons des données JSON au serveur, nous devons également définir l'en-tête `Content-Type` sur `application/json` pour que le serveur sache comment interpréter le contenu.

Comme le serveur répondra à la requête avec du JSON, nous pouvons utiliser `await response.json()` pour analyser le contenu JSON et retourner l'objet résultant. Notez que cette méthode est asynchrone, donc nous utilisons le mot-clé `await` ici avant de retourner pour nous assurer que toutes les erreurs lors de l'analyse sont également capturées.

Ajoutez maintenant du code à la fonction `register` pour appeler `createAccount()` :

```js
const result = await createAccount(jsonData);
```

Comme nous utilisons le mot-clé `await` ici, nous devons ajouter le mot-clé `async` avant la fonction register :

```js
async function register() {
```

Enfin, ajoutons quelques journaux pour vérifier le résultat. La fonction finale devrait ressembler à ceci :

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

C'était un peu long, mais nous y sommes arrivés ! Si vous ouvrez les [outils de développement de votre navigateur](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) et essayez de créer un nouveau compte, vous ne devriez voir aucun changement sur la page web, mais un message apparaîtra dans la console confirmant que tout fonctionne.

![Capture d'écran montrant un message de journal dans la console du navigateur](../../../../7-bank-project/2-forms/images/browser-console.png)

✅ Pensez-vous que les données sont envoyées au serveur de manière sécurisée ? Que se passerait-il si quelqu'un interceptait la requête ? Vous pouvez lire sur [HTTPS](https://en.wikipedia.org/wiki/HTTPS) pour en savoir plus sur la communication sécurisée des données.

## Validation des données

Si vous essayez de créer un nouveau compte sans définir un nom d'utilisateur au préalable, vous pouvez voir que le serveur retourne une erreur avec le code de statut [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Avant d'envoyer des données à un serveur, il est bon de [valider les données du formulaire](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) au préalable lorsque cela est possible, pour s'assurer que vous envoyez une requête valide. Les contrôles de formulaire HTML5 offrent une validation intégrée à l'aide de divers attributs :

- `required` : le champ doit être rempli, sinon le formulaire ne peut pas être soumis.
- `minlength` et `maxlength` : définissent le nombre minimum et maximum de caractères dans les champs texte.
- `min` et `max` : définissent la valeur minimale et maximale d'un champ numérique.
- `type` : définit le type de données attendu, comme `number`, `email`, `file` ou [d'autres types intégrés](https://developer.mozilla.org/docs/Web/HTML/Element/input). Cet attribut peut également modifier le rendu visuel du contrôle de formulaire.
- `pattern` : permet de définir un modèle [d'expression régulière](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) pour tester si les données saisies sont valides ou non.
> Astuce : vous pouvez personnaliser l'apparence de vos contrôles de formulaire en fonction de leur validité ou non en utilisant les pseudo-classes CSS `:valid` et `:invalid`.
### Tâche

Il y a 2 champs obligatoires pour créer un nouveau compte valide : le nom d'utilisateur et la devise, les autres champs étant facultatifs. Mettez à jour le HTML du formulaire en utilisant à la fois l'attribut `required` et du texte dans l'étiquette du champ pour cela :

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Bien que cette implémentation particulière du serveur n'impose pas de limites spécifiques sur la longueur maximale des champs, il est toujours recommandé de définir des limites raisonnables pour toute saisie de texte par l'utilisateur.

Ajoutez un attribut `maxlength` aux champs de texte :

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Maintenant, si vous appuyez sur le bouton *S'inscrire* et qu'un champ ne respecte pas une règle de validation que nous avons définie, vous devriez voir quelque chose comme ceci :

![Capture d'écran montrant l'erreur de validation lors de la tentative de soumission du formulaire](../../../../7-bank-project/2-forms/images/validation-error.png)

Une validation comme celle-ci, effectuée *avant* d'envoyer des données au serveur, est appelée validation **côté client**. Mais notez qu'il n'est pas toujours possible d'effectuer toutes les vérifications sans envoyer les données. Par exemple, nous ne pouvons pas vérifier ici si un compte existe déjà avec le même nom d'utilisateur sans envoyer une requête au serveur. Une validation supplémentaire effectuée sur le serveur est appelée validation **côté serveur**.

En général, les deux doivent être mises en œuvre, et bien que l'utilisation de la validation côté client améliore l'expérience utilisateur en fournissant un retour instantané, la validation côté serveur est essentielle pour garantir que les données utilisateur que vous manipulez sont fiables et sécurisées.

---

## 🚀 Défi

Affichez un message d'erreur dans le HTML si l'utilisateur existe déjà.

Voici un exemple de ce à quoi la page de connexion finale peut ressembler après un peu de stylisation :

![Capture d'écran de la page de connexion après ajout de styles CSS](../../../../7-bank-project/2-forms/images/result.png)

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/44)

## Révision & Auto-apprentissage

Les développeurs ont fait preuve de beaucoup de créativité dans leurs efforts de création de formulaires, notamment en ce qui concerne les stratégies de validation. Découvrez différents flux de formulaires en parcourant [CodePen](https://codepen.com) ; pouvez-vous trouver des formulaires intéressants et inspirants ?

## Devoir

[Stylisez votre application bancaire](assignment.md)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.