# Créer une application bancaire Partie 4: Concepts de gestion d'état

## Quiz préalable

[Quiz préalable](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/47?loc=fr)

### Introduction

Au fur et à mesure qu’une application Web se développe, il devient difficile de suivre tous les flux de données. Quel code obtient les données, quelle page les consomme, où et quand doit-il être mis à jour... il est facile de se retrouver avec un code désordonné et difficile à maintenir. Cela est particulièrement vrai lorsque vous devez partager des données entre différentes pages de votre application, par exemple des données utilisateur. Le concept de *gestion de l’état* a toujours existé dans toutes sortes de programmes, mais comme les applications Web ne cessent de croître en complexité, c’est maintenant un point clé à prendre en compte pendant le développement.

Dans cette dernière partie, nous examinerons l’application que nous avons créée pour repenser la façon dont l’état est géré, permettant la prise en charge de l’actualisation du navigateur à tout moment et la persistance des données entre les sessions utilisateur.

### Prérequis

Vous devez avoir terminé la [récupération des données](../../3-data/translations/README.fr.md) de l’application web pour cette leçon. Vous devez également installer [Node.js](https://nodejs.org) et [exécuter l’API du serveur](../../api/translations/README.fr.md) localement afin que vous puissiez gérer les données du compte.

Vous pouvez tester que le serveur fonctionne correctement en exécutant cette commande dans un terminal:

```sh
curl http://localhost:5000/api
# -> doit renvoyer "Bank API v1.0.0" comme résultat
```

---

## Repenser la gestion des états

Dans la [leçon précédente](../../3-data/translations/README.fr.md), nous avons introduit un concept basique d’état dans notre application avec la variable globale `account` qui contient les données bancaires de l’utilisateur actuellement connecté. Cependant, notre mise en œuvre actuelle présente certains défauts. Essayez d’actualiser la page lorsque vous êtes sur le tableau de bord. Que se passe-t-il?

Il y a 3 problèmes avec le code actuel:

- L’état n’est pas persistant, car une actualisation du navigateur vous ramène à la page de connexion.
- Il existe plusieurs fonctions qui modifient l’état. Au fur et à mesure que l’application se développe, il peut être difficile de suivre les modifications et il est facile d’oublier d’en mettre à jour une.
- L’état n’est pas nettoyé, donc lorsque vous cliquez sur *Logout* les données du compte sont toujours là même si vous êtes sur la page de connexion.

Nous pourrions mettre à jour notre code pour résoudre ces problèmes un par un, mais cela créerait plus de duplication de code et rendrait l’application plus complexe et difficile à maintenir. Ou nous pourrions faire une pause de quelques minutes et repenser notre stratégie.

> Quels problèmes essayons-nous vraiment de résoudre ici?

[La gestion de l’état](https://en.wikipedia.org/wiki/State_management) consiste à trouver une bonne approche pour résoudre ces deux problèmes particuliers:

- Comment rendre compréhensibles les flux de données dans une application?
- Comment garder les données d’état toujours synchronisées avec l’interface utilisateur (et vice versa)?

Une fois que vous vous êtes occupé de ceux-ci, tous les autres problèmes que vous pourriez avoir peuvent être déjà résolus ou sont devenus plus faciles à résoudre. Il existe de nombreuses approches possibles pour résoudre ces problèmes, mais nous opterons pour une solution commune qui consiste à **centraliser les données et les moyens de les modifier**. Les flux de données se dérouleraient comme suit:

![Schéma montrant les flux de données entre le code HTML, les actions de l’utilisateur et l’état](../images/data-flow.png)

> Nous ne couvrirons pas ici la partie où les données déclenchent automatiquement la mise à jour de la vue, car elle est liée à des concepts plus avancés de [Programmation réactive](https://en.wikipedia.org/wiki/Reactive_programming). C’est un bon sujet de suivi si vous êtes prêt à plonger profondément.

✅ Il existe de nombreuses bibliothèques avec différentes approches de la gestion des États, [Redux](https://redux.js.org) étant une option populaire. Jetez un coup d’œil aux concepts et aux modèles utilisés, car c’est souvent un bon moyen d’apprendre quels problèmes potentiels vous pouvez rencontrer dans les grandes applications Web et comment ils peuvent être résolus.

### Tâche

Nous allons commencer par un peu de refactorisation. Remplacer la déclaration `account`:

```js
let account = null;
```

Par:

```js
let state = {
  account: null
};
```

L’idée est de *centraliser* toutes nos données d’application dans un seul objet d’état. Nous n’avons que le `account` pour l’instant dans l’état, donc cela ne change pas beaucoup, mais cela crée un chemin pour les évolutions.

Nous devons également mettre à jour les fonctions en l’utilisant. Dans les fonctions `register()` et `login()`, remplacez `account = ...` par `state.account = ...`;

En haut de la fonction `updateDashboard()`, ajoutez cette ligne:

```js
const account = state.account;
```

Ce refactoring en lui-même n’a pas apporté beaucoup d’améliorations, mais l’idée était de jeter les bases des prochains changements.

## Suivre les modifications de données

Maintenant que nous avons mis en place l’objet `state` pour stocker nos données, l’étape suivante consiste à centraliser les mises à jour. L’objectif est de faciliter le suivi des changements et de leur moment.

Pour éviter que des modifications soient apportées à l’objet `state`, il est également recommandé de le considérer comme [*immuable*](https://en.wikipedia.org/wiki/Immutable_object), ce qui signifie qu’il ne peut pas être modifié du tout. Cela signifie également que vous devez créer un nouvel objet d’état si vous souhaitez y modifier quoi que ce soit. Ce faisant, vous créez une protection contre les [effets secondaires](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) potentiellement indésirables et ouvrez des possibilités de nouvelles fonctionnalités dans votre application, telles que la mise en œuvre de l’annulation/rétablissement, tout en facilitant le débogage. Par exemple, vous pouvez consigner chaque modification apportée à l’état et conserver un historique des modifications pour comprendre la source d’un bogue.

En JavaScript, vous pouvez utiliser [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) pour créer une version immuable d’un objet. Si vous essayez d’apporter des modifications à un objet immuable, une exception sera déclenchée.

✅ Connaissez-vous la différence entre un objet immuable *peu profond* et un objet immuable *profond*? Vous pouvez en apprendre plus sur ce sujet [ici](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Tâche

Créons une nouvelle fonction `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Dans cette fonction, nous créons un nouvel objet d’état et copions les données de l’état précédent à l’aide de [*l’opérateur spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Ensuite, nous remplaçons une propriété particulière de l’objet d’état par les nouvelles données en utilisant la [notation entre crochets](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` pour l’affectation. Enfin, nous verrouillons l’objet pour empêcher les modifications en utilisant `Object.freeze()`. Nous n’avons que la propriété `account` stockée dans l’état pour l’instant, mais avec cette approche, vous pouvez ajouter autant de propriétés que nécessaire dans l’état.

Nous allons également mettre à jour l’initialisation `state` pour nous assurer que l’état initial est également gelé:

```js
let state = Object.freeze({
  account: null
});
```

Après cela, mettez à jour la fonction `register` en remplaçant l’affectation `state.account = result;` par:

```js
updateState('account', result);
```

Faites de même avec la fonction `login`, en remplaçant `state.account = data;` par:

```js
updateState('account', data);
```

Nous allons maintenant saisir l’occasion de résoudre le problème des données de compte qui ne sont pas effacées lorsque l’utilisateur clique sur *Logout*.

Créez une nouvelle fonction `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Dans `updateDashboard()`, remplacez la redirection `return navigate('/login');` par `return logout()`;

Essayez d’enregistrer un nouveau compte, de vous déconnecter et de vous reconnecter pour vérifier que tout fonctionne toujours correctement.

> Conseil: vous pouvez jeter un coup d’œil à tous les changements d’état en ajoutant `console.log(state)` au bas de `updateState()` et en ouvrant la console dans les outils de développement de votre navigateur.

## Conserver l’état

La plupart des applications Web doivent conserver les données pour pouvoir fonctionner correctement. Toutes les données critiques sont généralement stockées dans une base de données et accessibles via une API de serveur, comme les données du compte utilisateur dans notre cas. Mais parfois, il est également intéressant de conserver certaines données sur l’application cliente qui s’exécute dans votre navigateur, pour une meilleure expérience utilisateur ou pour améliorer les performances de chargement.

Lorsque vous souhaitez conserver des données dans votre navigateur, vous devez vous poser quelques questions importantes:

- *Les données sont-elles sensibles?* Vous devez éviter de stocker des données sensibles sur le client, telles que les mots de passe des utilisateurs.
- *Pendant combien de temps devez-vous conserver ces données?* Prévoyez-vous d’accéder à ces données uniquement pour la session en cours ou souhaitez-vous qu’elles soient stockées pour toujours?

Il existe plusieurs façons de stocker des informations dans une application web, en fonction de ce que vous souhaitez réaliser. Par exemple, vous pouvez utiliser les URL pour stocker une requête de recherche et la rendre partageable entre les utilisateurs. Vous pouvez également utiliser des [cookies HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) si les données doivent être partagées avec le serveur, comme les informations d'[authentification](https://en.wikipedia.org/wiki/Authentication).

Une autre option consiste à utiliser l’une des nombreuses API de navigateur pour stocker des données. Deux d’entre eux sont particulièrement intéressants:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): un [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) permettant de conserver des données spécifiques au site web actuel sur différentes sessions. Les données qui y sont enregistrées n’expirent jamais.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): celui-ci fonctionne de la même manière que `localStorage` sauf que les données qui y sont stockées sont effacées à la fin de la session (lorsque le navigateur est fermé).

Notez que ces deux API autorisent uniquement le stockage de [chaînes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Si vous souhaitez stocker des objets complexes, vous devrez les sérialiser au format [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) à l’aide de [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Si vous souhaitez créer une application web qui ne fonctionne pas avec un serveur, il est également possible de créer une base de données sur le client à l’aide de [l’API `IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Celui-ci est réservé aux cas d’utilisation avancés ou si vous avez besoin de stocker une quantité importante de données, car il est plus complexe à utiliser.

### Tâche

Nous voulons que nos utilisateurs restent connectés jusqu’à ce qu’ils cliquent explicitement sur le bouton *Logout*, nous utiliserons donc `localStorage` pour stocker les données du compte. Tout d’abord, définissons une clé que nous utiliserons pour stocker nos données.

```js
const storageKey = 'savedAccount';
```

Ajoutez ensuite cette ligne à la fin de la fonction `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Avec cela, les données du compte utilisateur seront conservées et toujours à jour car nous avons centralisé précédemment toutes nos mises à jour d’état. C’est là que nous commençons à bénéficier de tous nos refactors précédents 🙂.

Au fur et à mesure que les données sont enregistrées, nous devons également nous occuper de les restaurer lorsque l’application est chargée. Puisque nous allons commencer à avoir plus de code d’initialisation, il peut être judicieux de créer une nouvelle fonction `init`, qui inclut également notre code précédent au bas de `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Notre précédent code d'initialisation
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Ici, nous récupérons les données enregistrées, et s’il y en a, nous mettons à jour l’état en conséquence. Il est important de le faire *avant* de mettre à jour l’itinéraire, car il peut y avoir du code s’appuyant sur l’état lors de la mise à jour de la page.

Nous pouvons également faire de la page *Dashboard* notre page par défaut de l’application, car nous conservons maintenant les données du compte. Si aucune donnée n’est trouvée, le tableau de bord se charge de rediriger vers la page *Login* de toute façon. Dans `updateRoute()`, remplacez le secours `return navigate('/login');` par `return navigate('/dashboard');`.

Maintenant, connectez-vous à l’application et essayez d’actualiser la page. Vous devez rester sur le tableau de bord. Avec cette mise à jour, nous avons résolu tous nos problèmes initiaux...

## Actualiser les données

... Mais nous pourrions aussi en avoir créé un nouveau. Oups!

Accédez au tableau de bord à l’aide du compte `test`, puis exécutez cette commande sur un terminal pour créer une nouvelle transaction:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Essayez d’actualiser la page du tableau de bord dans le navigateur maintenant. Que se passe-t-il? Voyez-vous la nouvelle transaction?

L’état est conservé indéfiniment grâce au `localStorage`, mais cela signifie également qu’il n’est jamais mis à jour tant que vous ne vous déconnectez pas de l’application et que vous ne vous connectez pas à nouveau!

Une stratégie possible pour résoudre ce problème consiste à recharger les données du compte chaque fois que le tableau de bord est chargé, afin d’éviter les données de blocage.

### Tâche

Créez une nouvelle fonction `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Cette méthode vérifie que nous sommes actuellement connectés puis recharge les données du compte à partir du serveur.

Créez une autre fonction nommée `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Celui-ci met à jour les données du compte, puis se charge de mettre à jour le code HTML de la page du tableau de bord. C’est ce que nous devons appeler lorsque l’itinéraire du tableau de bord est chargé. Mettez à jour la définition d’itinéraire avec:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Essayez de recharger le tableau de bord maintenant, il devrait afficher les données de compte mises à jour.

---

## 🚀 Challenge

Maintenant que nous rechargeons les données du compte chaque fois que le tableau de bord est chargé, pensez-vous que nous devons encore conserver *toutes les données du compte*?

Essayez de travailler ensemble pour modifier ce qui est enregistré et chargé à partir de `localStorage` pour n’inclure que ce qui est absolument nécessaire pour que l’application fonctionne.

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/48?loc=fr)

## Affectation

[Implémenter la boîte de dialogue "Ajouter une transaction"](assignment.fr.md)

Voici un exemple de résultat après avoir terminé l’affectation:

![Capture d’écran montrant un exemple de boîte de dialogue "Ajouter une transaction"](../images/dialog.png)
