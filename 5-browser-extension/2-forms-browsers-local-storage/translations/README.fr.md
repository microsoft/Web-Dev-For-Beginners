# Projet d'extension de navigateur Partie 2: Appeler une API, utiliser le stockage local

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/25?loc=fr)

### Introduction

Dans cette leçon, vous allez appeler une API en soumettant le formulaire de votre extension de navigateur et afficher les résultats dans votre extension. De plus, vous apprendrez comment vous pouvez stocker des données dans le stockage local de votre navigateur pour des références et utilisations futures.

✅ Suivez les segments numérotés dans les fichiers appropriés pour savoir où placer votre code

### Paramétrez les éléments à manipuler dans l'extension :

À ce stade, vous avez créé le code HTML pour le formulaire et les résultats `<div>` pour l'extension de votre navigateur. A partir de maintenant, vous devrez travailler dans le fichier `/src/index.js` et construire votre extension au fur et à mesure. Reportez-vous à la [leçon précédente](../../1-about-browsers/translations/README.fr.md) sur la configuration de votre projet et sur le processus de génération.

En travaillant dans votre fichier `index.js`, commencez par créer des variables `const` pour contenir les valeurs associées aux différents champs:

```JavaScript
// champs de formulaire
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// résultats
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Tous ces champs sont référencés par leur classe CSS, comme vous l'avez configuré dans le code HTML de la leçon précédente.

### Ajouter des écouteurs

Ensuite, ajoutez des écouteurs d'événement au formulaire et le bouton d'effacement qui réinitialise le formulaire, de sorte que si un utilisateur soumet le formulaire ou clique sur ce bouton de réinitialisation, quelque chose se passe, et ajoutez l'appel pour initialiser l'application au bas du fichier:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Notez le raccourci utilisé pour écouter un événement de soumission ou de clic, et comment l'événement est transmis aux fonctions handleSubmit ou reset. Pouvez-vous écrire l'équivalent de ce raccourci dans un format plus long ? Lequel préfèrez-vous?

### Construisez la fonction init() et la fonction reset():

Vous allez maintenant construire la fonction qui initialise l'extension, qui s'appelle init():

```JavaScript
function init() {
	//si quelque chose est dans localStorage, choisissez-lep
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//définir l'icône pour qu'elle soit verte générique
    //à faire

	if (storedApiKey === null || storedRegion === null) {
		//si nous n'avons pas les clés, montrez le formulaire
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //si nous avons enregistré des clés/régions dans localStorage, afficher les résultats lorsqu'ils se chargent
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//effacer le stockage local pour la région uniquement
	localStorage.removeItem('regionName');
	init();
}

```
Dans cette fonction, il y a une logique intéressante. En le lisant, pouvez-vous voir ce qui se passe?

- deux `const` sont configurés pour vérifier si l'utilisateur a stocké une APIKey et un code de région dans le stockage local.
- si l'un de ceux-ci est nul, affiche le formulaire en changeant son style pour qu'il s'affiche en tant que 'block'
- masquer les résultats, le chargement et clearBtn et définir tout texte d'erreur sur une chaîne vide
- s'il existe une clé et une région, lancer une routine pour:
  - appeler l'API pour obtenir les données d'utilisation du carbone
  - masquer la zone de résultats
  - masquer le formulaire
  - afficher le bouton de réinitialisation

Avant de continuer, il est utile de se renseigner sur un concept très important disponible dans les navigateurs: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage est un moyen utile de stocker des chaînes dans le navigateur en tant que paire `key-value`. Ce type de stockage Web peut être manipulé par JavaScript pour gérer les données dans le navigateur. LocalStorage n'expire pas, tandis que SessionStorage, un autre type de stockage Web, est effacé lorsque le navigateur est fermé. Les différents types de stockage ont des avantages et des inconvénients à leur utilisation.

> Remarque - l'extension de votre navigateur dispose de son propre stockage local ; la fenêtre principale du navigateur est une instance différente et se comporte séparément.

Vous définissez votre APIKey pour qu'elle ait une valeur de chaîne, par exemple, et vous pouvez voir qu'elle est définie sur Edge en "inspectant" une page Web (vous pouvez cliquer avec le bouton droit sur un navigateur pour inspecter) et en accédant à l'onglet Applications pour voir le espace de rangement.

![Volet de stockage local](../images/localstorage.png)

✅ Pensez aux situations dans lesquelles vous ne voudriez PAS stocker certaines données dans LocalStorage. En général, placer des clés API dans LocalStorage est une mauvaise idée ! Pouvez-vous voir pourquoi? Dans notre cas, étant donné que notre application est purement destinée à l'apprentissage et ne sera pas déployée dans un magasin d'applications, nous utiliserons cette méthode.

Notez que vous utilisez l'API Web pour manipuler LocalStorage, soit en utilisant `getItem()`, `setItem()` ou `removeItem()`. Il est largement pris en charge sur tous les navigateurs.

Avant de développer la fonction `displayCarbonUsage()` qui est appelée dans `init()`, définissons la fonctionnalité pour gérer la soumission initiale du formulaire.

### Gérer la soumission du formulaire

Créez une fonction appelée `handleSubmit` qui accepte un argument d'événement `(e)`. Arrêtez la propagation de l'événement (dans ce cas, nous voulons arrêter le rafraîchissement du navigateur) et appelez une nouvelle fonction, `setUpUser`, en passant les arguments `apiKey.value` et `region.value`. De cette façon, vous utilisez les deux valeurs qui sont apportées via le formulaire initial lorsque les champs appropriés sont remplis.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Rafraîchissez votre mémoire - le HTML que vous avez configuré dans la dernière leçon a deux champs de saisie dont les `values` sont capturées via le `const` que vous avez configuré en haut du fichier, et ils sont tous les deux `required` pour que le navigateur arrête les utilisateurs de la saisie de valeurs nulles.

### Set up the user

Moving on to the `setUpUser` function, here is where you set local storage values for apiKey and regionName. Add a new function:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//faire un premier appel
	displayCarbonUsage(apiKey, regionName);
}
```
Cette fonction définit un message de chargement à afficher pendant l'appel de l'API. À ce stade, vous êtes arrivé à créer la fonction la plus importante de cette extension de navigateur!

### Afficher la consommation de carbone

Il est enfin temps d'interroger l'API !

Avant d'aller plus loin, nous devrions discuter des API. Les API, ou [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), sont un élément essentiel de la boîte à outils d'un développeur Web. Ils fournissent des moyens standard pour les programmes d'interagir et d'interagir les uns avec les autres. Par exemple, si vous créez un site Web qui doit interroger une base de données, quelqu'un peut avoir créé une API que vous pouvez utiliser. Bien qu'il existe de nombreux types d'API, l'une des plus populaires est l'[API REST](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Le terme 'REST' signifie 'Representational State Transfer' et utilise des URL configurées de différentes manières pour récupérer des données. Faites une petite recherche sur les différents types d'API disponibles pour les développeurs. Quel format vous séduit ?

Il y a des choses importantes à noter à propos de cette fonction. Remarquez d'abord le [mot-clé `async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). L'écriture de vos fonctions pour qu'elles s'exécutent de manière asynchrone signifie qu'elles attendent qu'une action, telle que le retour de données, soit terminée avant de continuer.

Voici une vidéo rapide sur `async`:

[![Async et Await pour la gestion des promesses](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async et Await pour la gestion des promesses")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur async/await.

Créez une nouvelle fonction pour interroger l'API C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

C'est une grande fonction. Que se passe t-il ici?

- en suivant les meilleures pratiques, vous utilisez un mot-clé `async` pour que cette fonction se comporte de manière asynchrone. La fonction contient un bloc `try/catch` car elle renverra une promesse lorsque l'API renverra des données. Étant donné que vous n'avez aucun contrôle sur la vitesse à laquelle l'API répondra (elle peut ne pas répondre du tout!), vous devez gérer cette incertitude en l'appelant de manière asynchrone.
- vous interrogez l'API co2signal pour obtenir les données de votre région, en utilisant votre clé API. Pour utiliser cette clé, vous devez utiliser un type d'authentification dans vos paramètres d'en-tête.
- une fois que l'API a répondu, vous affectez divers éléments de ses données de réponse aux parties de votre écran que vous avez configurées pour afficher ces données.
- s'il y a une erreur, ou s'il n'y a pas de résultat, vous affichez un message d'erreur.

✅ L'utilisation de modèles de programmation asynchrone est un autre outil très utile dans votre boîte à outils. Lisez les [différentes manières](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) de configurer ce type de code.

Toutes nos félicitations! Si vous compilez votre extension (`npm run build`) et l'actualisez dans votre volet d'extensions, vous avez une extension qui fonctionne ! La seule chose qui ne fonctionne pas est l'icône, et vous corrigerez cela dans la prochaine leçon.

---

## 🚀 Challenge

Nous avons discuté de plusieurs types d'API jusqu'à présent dans ces leçons. Choisissez une API Web et recherchez en profondeur ce qu'elle offre. Par exemple, jetez un œil aux API disponibles dans les navigateurs telles que l'[API HTML Drag and Drop](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). À votre avis, qu'est-ce qui fait une excellente API?

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/26?loc=fr)

## Révision et étude personnelle

Vous avez découvert LocalStorage et les API dans cette leçon, tous deux très utiles pour le développeur Web professionnel. Pouvez-vous imaginer comment ces deux choses fonctionnent ensemble ? Réfléchissez à l'architecture d'un site Web qui stockerait des éléments à utiliser par une API.

## Affectation

[Adoptez une API](assignment.fr.md)

