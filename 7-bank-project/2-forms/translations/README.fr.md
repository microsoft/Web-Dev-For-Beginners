# Créer une application bancaire Partie 2: Créer un formulaire de connexion et d'inscription

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/43?loc=fr)

### Introduction

Dans presque toutes les applications Web modernes, vous pouvez créer un compte pour avoir votre propre espace privé. Comme plusieurs utilisateurs peuvent accéder à une application Web en même temps, vous avez besoin d'un mécanisme pour stocker les données personnelles de chaque utilisateur séparément et sélectionner les informations à afficher. Nous n'expliquerons pas comment gérer [l'identité de l'utilisateur en toute sécurité](https://en.wikipedia.org/wiki/Authentication) car il s'agit d'un sujet étendu en soi, mais nous veillerons à ce que chaque utilisateur puisse créer un (ou plusieurs) compte bancaire sur notre application.

Dans cette partie, nous utiliserons des formulaires HTML pour ajouter une connexion et une inscription à notre application Web. Nous verrons comment envoyer les données à une API serveur par programmation, et finalement comment définir des règles de validation de base pour les entrées utilisateur.

### Prérequis

Vous devez avoir terminé les [modèles HTML et routage](../../1-template-route/translations/README.fr.md) d'une application Web pour cette leçon. Vous devez également installer [Node.js](https://nodejs.org/fr) et [exécuter l'API du serveur](../../api/translations/README.fr.md) localement afin de pouvoir envoyer des données pour créer des comptes.

**Prenez note**
Vous aurez deux terminaux fonctionnant en même temps comme indiqué ci-dessous.
1. Pour l'application bancaire principale, nous avons intégré la leçon [Modèles HTML et routage](../../1-template-route/translations/README.fr.md)
2. Pour l'[API du serveur Bank APP](../../api/translations/README.fr.md), que nous avons configuré ci-dessus.

Vous avez besoin que les deux serveurs soient opérationnels pour suivre le reste de la leçon. Ils écoutent sur différents ports (port `3000` et port `5000`) donc tout devrait bien fonctionner.

Vous pouvez tester que le serveur fonctionne correctement en exécutant cette commande dans un terminal :

```sh
curl http://localhost:5000/api
# -> devrait renvoyer "Bank API v1.0.0" comme résultat
```

---

## Formulaire et contrôles

L'élément `<form>` encapsule une section d'un document HTML où l'utilisateur peut saisir et soumettre des données avec des contrôles interactifs. Il existe toutes sortes de contrôles d'interface utilisateur (UI) qui peuvent être utilisés dans un formulaire, les plus courants étant les éléments `<input>` et `<button>`.

Il existe de nombreux [types](https://developer.mozilla.org/docs/Web/HTML/Element/input) différents de `<input>`, par exemple pour créer un champ où l'utilisateur peut saisir son nom d'utilisateur vous pouvez utiliser:

```html
<input id="username" name="username" type="text">
```

L'attribut `name` sera utilisé comme nom de propriété lorsque les données du formulaire seront envoyées. L'attribut `id` est utilisé pour associer un `<label>` au contrôle de formulaire.

> Jetez un œil à la liste complète des [types `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) et aux [autres contrôles de formulaire](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) pour avoir une idée de tous les éléments d'interface utilisateur natifs que vous pouvez utiliser lors de la création de votre interface utilisateur.

✅ Notez que `<input>` est un [élément vide](https://developer.mozilla.org/docs/Glossary/Empty_element) sur lequel vous ne devez *pas* ajouter une balise de fermeture correspondante. Vous pouvez cependant utiliser la notation à fermeture automatique `<input/>`, mais ce n'est pas obligatoire.

L'élément `<button>` dans un formulaire est un peu spécial. Si vous ne spécifiez pas son attribut `type`, il soumettra automatiquement les données du formulaire au serveur lorsqu'il est pressé. Voici les valeurs de `type` possibles :

- `submit` : La valeur par défaut dans un `<form>`, le bouton déclenche l'action de soumission du formulaire.
- `reset` : Le bouton réinitialise tous les contrôles du formulaire à leurs valeurs initiales.
- `button` : n'attribue pas de comportement par défaut lorsque le bouton est enfoncé. Vous pouvez ensuite lui affecter des actions personnalisées à l'aide de JavaScript.

### Tâche

Commençons par ajouter un formulaire au modèle `login`. Nous aurons besoin d'un champ *nom d'utilisateur* et d'un bouton *Connexion*.

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

Si vous regardez de plus près, vous remarquerez que nous avons également ajouté un élément `<label>` ici. Les éléments `<label>` sont utilisés pour ajouter un nom aux contrôles de l'interface utilisateur, tels que notre champ de nom d'utilisateur. Les étiquettes sont importantes pour la lisibilité de vos formulaires, mais présentent également des avantages supplémentaires :

- En associant une étiquette à un contrôle de formulaire, il aide les utilisateurs utilisant des technologies d'assistance (comme un lecteur d'écran) à comprendre quelles données ils sont censés fournir.
- Vous pouvez cliquer sur l'étiquette pour mettre directement l'accent sur l'entrée associée, ce qui facilite l'accès sur les appareils à écran tactile.

> [Accessibilité](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) sur le Web est un sujet très important qui est souvent négligé. Grâce aux [éléments HTML sémantiques](https://developer.mozilla.org/docs/Learn/Accessibility/HTML), il n'est pas difficile de créer du contenu accessible si vous les utilisez correctement. Vous pouvez [en savoir plus sur l'accessibilité](https://developer.mozilla.org/docs/Web/Accessibility) pour éviter les erreurs courantes et devenir un développeur responsable.

Nous allons maintenant ajouter un deuxième formulaire pour l'inscription, juste en dessous du précédent:

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

En utilisant l'attribut `value`, nous pouvons définir une valeur par défaut pour une entrée donnée.
Notez également que l'entrée pour `balance` a le type `number`. Est-ce que ça a l'air différent des autres entrées ? Essayez d'interagir avec lui.

✅ Pouvez-vous naviguer et interagir avec les formulaires en utilisant uniquement un clavier ? Comment feriez-vous cela?

## Soumission des données au serveur

Maintenant que nous avons une interface utilisateur fonctionnelle, la prochaine étape consiste à envoyer les données à notre serveur. Faisons un test rapide avec notre code actuel : que se passe-t-il si vous cliquez sur le bouton *Connexion* ou *S'inscrire* ?

Avez-vous remarqué le changement dans la section URL de votre navigateur ?

![Capture d'écran du changement d'URL du navigateur après avoir cliqué sur le bouton S'inscrire](../images/click-register.png)

L'action par défaut pour un `<form>` consiste à soumettre le formulaire à l'URL du serveur actuel à l'aide de la [méthode GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3 ), en ajoutant les données du formulaire directement à l'URL. Cette méthode a cependant quelques défauts :

- Les données envoyées sont de taille très limitée (environ 2000 caractères)
- Les données sont directement visibles dans l'URL (pas génial pour les mots de passe)
- Cela ne fonctionne pas avec les téléchargements de fichiers

C'est pourquoi vous pouvez le modifier pour utiliser la [méthode POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) qui envoie les données du formulaire au serveur dans le corps de la requête HTTP, sans aucune des limitations précédentes.

> Alors que POST est la méthode la plus couramment utilisée pour envoyer des données, [dans certains scénarios spécifiques](https://www.w3.org/2001/tag/doc/whenToUseGet.html) il est préférable d'utiliser la méthode GET, lorsque l'on implémente un champ de recherche par exemple.

### Tâche

Ajoutez les propriétés `action` et `method` au formulaire d'inscription :

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Essayez maintenant d'enregistrer un nouveau compte avec votre nom. Après avoir cliqué sur le bouton *S'inscrire*, vous devriez voir quelque chose comme ceci :

![Une fenêtre de navigateur à l'adresse localhost:5000/api/accounts, affichant une chaîne JSON avec des données utilisateur](../images/form-post.png)

Si tout se passe bien, le serveur doit répondre à votre demande avec une réponse [JSON](https://www.json.org/json-fr.html) contenant les données de compte qui ont été créées.

✅ Essayez de vous enregistrer à nouveau avec le même nom. Que se produit'il?

## Soumettre des données sans recharger la page

Comme vous l'avez probablement remarqué, il y a un léger problème avec l'approche que nous venons d'utiliser : lors de la soumission du formulaire, nous sortons de notre application et le navigateur redirige vers l'URL du serveur. Nous essayons d'éviter tous les rechargements de pages avec notre application Web, car nous créons une [Application à page unique (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Pour envoyer les données du formulaire au serveur sans forcer le rechargement de la page, nous devons utiliser du code JavaScript. Au lieu de mettre une URL dans la propriété `action` d'un élément `<form>`, vous pouvez utiliser n'importe quel code JavaScript précédé de la chaîne `javascript:` pour effectuer une action personnalisée. L'utiliser signifie également que vous devrez implémenter certaines tâches qui étaient auparavant effectuées automatiquement par le navigateur :

- Récupérer les données du formulaire
- Convertir et encoder les données du formulaire dans un format approprié
- Créer la requête HTTP et l'envoyer au serveur

### Tâche

Remplacez le formulaire d'inscription `action` par :

```html
<form id="registerForm" action="javascript:register()">
```

Ouvrez `app.js` ajoutez une nouvelle fonction nommée `register` :

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Ici, nous récupérons l'élément de formulaire à l'aide de `getElementById()` et utilisons l'assistant [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) pour extraire les valeurs des contrôles de formulaire en tant qu'ensemble de paires clé/valeur. Ensuite, nous convertissons les données en un objet normal à l'aide de [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) et enfin sérialisons les données en [JSON](https://www.json.org/json-fr.html), un format couramment utilisé pour échanger des données sur le Web.

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

A quoi sert cette fonction ? Tout d'abord, notez le mot-clé `async` ici. Cela signifie que la fonction contient du code qui s'exécutera [**asynchrone**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Lorsqu'il est utilisé avec le mot-clé `await`, il permet d'attendre l'exécution du code asynchrone - comme attendre la réponse du serveur ici - avant de continuer.

Voici une vidéo rapide sur l'utilisation de `async/await` :

[![Async et Await pour la gestion des promesses](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async et Await pour la gestion des promesses")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur async/await.

Nous utilisons l'API `fetch()` pour envoyer des données JSON au serveur. Cette méthode prend 2 paramètres :

- L'URL du serveur, donc on remet `//localhost:5000/api/accounts` à ce niveau.
- Les paramètres de la requête. C'est là que nous définissons la méthode sur `POST` et fournissons le `body` de la requête. Comme nous envoyons des données JSON au serveur, nous devons également définir l'en-tête `Content-Type` sur `application/json` afin que le serveur sache comment interpréter le contenu.

Comme le serveur répondra à la demande avec JSON, nous pouvons utiliser `wait response.json()` pour analyser le contenu JSON et renvoyer l'objet résultant. Notez que cette méthode est asynchrone, nous utilisons donc le mot-clé `await` ici avant de revenir pour nous assurer que toutes les erreurs lors de l'analyse sont également détectées.

Ajoutez maintenant du code à la fonction `register` pour appeler `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Comme nous utilisons ici le mot-clé `await`, nous devons ajouter le mot-clé `async` avant la fonction register:

```js
async function register() {
```

Enfin, ajoutons quelques logs pour vérifier le résultat. La fonction finale devrait ressembler à ceci:

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

C'était un peu long mais nous y sommes arrivés ! Si vous ouvrez vos [outils de développement de navigateur](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) et essayez d'enregistrer un nouveau compte, vous ne devriez voir aucun changement sur la page Web, mais un message s'affichera. apparaissent dans la console confirmant que tout fonctionne.

![Capture d'écran montrant le message de journal dans la console du navigateur](../images/browser-console.png)

✅ Pensez-vous que les données sont envoyées au serveur en toute sécurité ? Et si quelqu'un était capable d'intercepter la demande ? Vous pouvez en savoir plus sur [HTTPS](https://fr.wikipedia.org/wiki/HTTPS) pour en savoir plus sur la communication de données sécurisée.

## La validation des données

Si vous essayez d'enregistrer un nouveau compte sans définir de nom d'utilisateur au préalable, vous pouvez voir que le serveur renvoie une erreur avec le code d'état [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Avant d'envoyer des données à un serveur, il est recommandé de [valider les données du formulaire](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) au préalable lorsque cela est possible, pour vous assurer d'envoyer une demande valide. Les contrôles de formulaires HTML5 fournissent une validation intégrée à l'aide de divers attributs :

- `required` : le champ doit être rempli sinon le formulaire ne peut pas être soumis.
- `minlength` et `maxlength` : définit le nombre minimum et maximum de caractères dans les champs de texte.
- `min` et `max` : définit la valeur minimum et maximum d'un champ numérique.
- `type` : définit le type de données attendu, comme `numéro`, `e-mail`, `fichier` ou [autres types intégrés](https://developer.mozilla.org/docs/Web/HTML/Element/input). Cet attribut peut également modifier le rendu visuel du contrôle de formulaire.
- `pattern` : permet de définir un pattern d'[expression régulière](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) pour tester si les données saisies sont valides ou non.

> Astuce : vous pouvez personnaliser l'apparence de vos contrôles de formulaire selon qu'ils sont valides ou non en utilisant les pseudo-classes CSS `:valid` et `:invalid`.

### Tâche

Il y a 2 champs obligatoires pour créer un nouveau compte valide, le nom d'utilisateur et la devise, les autres champs étant facultatifs. Mettez à jour le code HTML du formulaire, en utilisant à la fois l'attribut `required` et le texte du libellé du champ:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Bien que cette implémentation de serveur particulière n'impose pas de limites spécifiques sur la longueur maximale des champs, il est toujours recommandé de définir des limites raisonnables pour toute entrée de texte utilisateur.

Ajoutez un attribut `maxlength` aux champs de texte :

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Maintenant, si vous appuyez sur le bouton *S'inscrire* et qu'un champ ne respecte pas une règle de validation que nous avons définie, vous devriez voir quelque chose comme ceci :

![Capture d'écran montrant l'erreur de validation lors de la tentative de soumission du formulaire](../images/validation-error.png)

Une validation comme celle-ci effectuée *avant* l'envoi de données au serveur est appelée validation **côté client**. Mais notez qu'il n'est pas toujours possible d'effectuer toutes les vérifications sans envoyer les données. Par exemple, nous ne pouvons pas vérifier ici si un compte existe déjà avec le même nom d'utilisateur sans envoyer de requête au serveur. Une validation supplémentaire effectuée sur le serveur est appelée validation **côté serveur**.

Généralement, les deux doivent être implémentés, et bien que l'utilisation de la validation côté client améliore l'expérience utilisateur en fournissant un retour instantané à l'utilisateur, la validation côté serveur est cruciale pour s'assurer que les données utilisateur que vous manipulez sont saines et sûres.

---

## 🚀 Challenge

Afficher un message d'erreur dans le code HTML si l'utilisateur existe déjà.

Voici un exemple de ce à quoi peut ressembler la page de connexion finale après un peu de style :

![Capture d'écran de la page de connexion après l'ajout de styles CSS](../images/result.png)

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/44?loc=fr)

## Révision et étude personnelle

Les développeurs sont devenus très créatifs dans leurs efforts de création de formulaires, en particulier en ce qui concerne les stratégies de validation. Découvrez les différents flux de formulaires en parcourant [CodePen](https://codepen.com); pouvez-vous trouver des formulaires intéressants et inspirants ?

## Affectation

[Concevez votre application bancaire](assignment.fr.md)
