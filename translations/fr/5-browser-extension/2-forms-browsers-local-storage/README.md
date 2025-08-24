<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-23T23:39:20+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "fr"
}
-->
# Projet d'extension de navigateur Partie 2 : Appeler une API, utiliser le stockage local

## Quiz avant le cours

[Quiz avant le cours](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25)

### Introduction

Dans cette leçon, vous allez appeler une API en soumettant le formulaire de votre extension de navigateur et afficher les résultats dans votre extension. De plus, vous apprendrez à stocker des données dans le stockage local de votre navigateur pour une utilisation future.

✅ Suivez les segments numérotés dans les fichiers appropriés pour savoir où placer votre code.

### Configurez les éléments à manipuler dans l'extension :

À ce stade, vous avez construit le HTML pour le formulaire et la `<div>` des résultats de votre extension de navigateur. Désormais, vous devrez travailler dans le fichier `/src/index.js` et construire votre extension étape par étape. Référez-vous à la [leçon précédente](../1-about-browsers/README.md) pour configurer votre projet et comprendre le processus de construction.

En travaillant dans votre fichier `index.js`, commencez par créer quelques variables `const` pour contenir les valeurs associées à différents champs :

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Tous ces champs sont référencés par leur classe CSS, comme vous les avez configurés dans le HTML lors de la leçon précédente.

### Ajoutez des écouteurs d'événements

Ensuite, ajoutez des écouteurs d'événements au formulaire et au bouton de réinitialisation qui remet le formulaire à zéro, afin que si un utilisateur soumet le formulaire ou clique sur ce bouton, une action se produise. Ajoutez également l'appel pour initialiser l'application en bas du fichier :

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Remarquez la syntaxe abrégée utilisée pour écouter un événement de soumission ou de clic, et comment l'événement est transmis aux fonctions `handleSubmit` ou `reset`. Pouvez-vous écrire l'équivalent de cette syntaxe abrégée dans un format plus long ? Lequel préférez-vous ?

### Construisez les fonctions `init()` et `reset()` :

Vous allez maintenant construire la fonction qui initialise l'extension, appelée `init()` :

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

Dans cette fonction, il y a une logique intéressante. En la lisant, pouvez-vous voir ce qui se passe ?

- Deux constantes `const` sont définies pour vérifier si l'utilisateur a stocké une clé API (`APIKey`) et un code de région dans le stockage local.
- Si l'une de ces valeurs est nulle, affichez le formulaire en modifiant son style pour qu'il s'affiche en mode 'block'.
- Masquez les résultats, le chargement et le bouton de réinitialisation, et définissez tout texte d'erreur sur une chaîne vide.
- Si une clé et une région existent, lancez une routine pour :
  - Appeler l'API pour obtenir des données sur l'utilisation du carbone.
  - Masquer la zone des résultats.
  - Masquer le formulaire.
  - Afficher le bouton de réinitialisation.

Avant de continuer, il est utile d'apprendre un concept très important disponible dans les navigateurs : [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage est un moyen pratique de stocker des chaînes de caractères dans le navigateur sous forme de paires `clé-valeur`. Ce type de stockage web peut être manipulé par JavaScript pour gérer des données dans le navigateur. LocalStorage ne s'expire pas, tandis que SessionStorage, un autre type de stockage web, est effacé lorsque le navigateur est fermé. Les différents types de stockage ont leurs avantages et inconvénients.

> Note - votre extension de navigateur a son propre stockage local ; la fenêtre principale du navigateur est une instance différente et se comporte séparément.

Vous définissez votre clé API (`APIKey`) avec une valeur de chaîne, par exemple, et vous pouvez voir qu'elle est définie dans Edge en "inspectant" une page web (vous pouvez faire un clic droit sur un navigateur pour inspecter) et en allant dans l'onglet Applications pour voir le stockage.

![Volet de stockage local](../../../../5-browser-extension/2-forms-browsers-local-storage/images/localstorage.png)

✅ Réfléchissez à des situations où vous NE voudriez PAS stocker certaines données dans LocalStorage. En général, placer des clés API dans LocalStorage est une mauvaise idée ! Pouvez-vous comprendre pourquoi ? Dans notre cas, puisque notre application est purement éducative et ne sera pas déployée dans un magasin d'applications, nous utiliserons cette méthode.

Remarquez que vous utilisez l'API Web pour manipuler LocalStorage, soit en utilisant `getItem()`, `setItem()`, ou `removeItem()`. C'est largement pris en charge par les navigateurs.

Avant de construire la fonction `displayCarbonUsage()` appelée dans `init()`, construisons la fonctionnalité pour gérer la soumission initiale du formulaire.

### Gérez la soumission du formulaire

Créez une fonction appelée `handleSubmit` qui accepte un argument événementiel `(e)`. Empêchez l'événement de se propager (dans ce cas, nous voulons empêcher le navigateur de se rafraîchir) et appelez une nouvelle fonction, `setUpUser`, en passant les arguments `apiKey.value` et `region.value`. De cette manière, vous utilisez les deux valeurs saisies via le formulaire initial lorsque les champs appropriés sont remplis.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Rafraîchissez votre mémoire - le HTML que vous avez configuré dans la dernière leçon contient deux champs de saisie dont les `values` sont capturées via les constantes que vous avez définies en haut du fichier, et ils sont tous deux `required`, donc le navigateur empêche les utilisateurs de saisir des valeurs nulles.

### Configurez l'utilisateur

Passons à la fonction `setUpUser`, où vous définissez les valeurs de stockage local pour `apiKey` et `regionName`. Ajoutez une nouvelle fonction :

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Cette fonction affiche un message de chargement pendant que l'API est appelée. À ce stade, vous êtes arrivé à la création de la fonction la plus importante de cette extension de navigateur !

### Affichez l'utilisation du carbone

Enfin, il est temps d'interroger l'API !

Avant d'aller plus loin, nous devrions discuter des API. Les API, ou [Interfaces de Programmation d'Applications](https://www.webopedia.com/TERM/A/API.html), sont un élément essentiel de la boîte à outils d'un développeur web. Elles fournissent des moyens standardisés pour que les programmes interagissent et communiquent entre eux. Par exemple, si vous construisez un site web qui doit interroger une base de données, quelqu'un pourrait avoir créé une API pour vous permettre de l'utiliser. Bien qu'il existe de nombreux types d'API, l'un des plus populaires est une [API REST](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Le terme 'REST' signifie 'Transfert d'État Représentationnel' et repose sur l'utilisation d'URL configurées de différentes manières pour récupérer des données. Faites quelques recherches sur les différents types d'API disponibles pour les développeurs. Quel format vous semble le plus intéressant ?

Il y a des points importants à noter à propos de cette fonction. Tout d'abord, remarquez le mot-clé [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Écrire vos fonctions pour qu'elles s'exécutent de manière asynchrone signifie qu'elles attendent qu'une action, comme le retour de données, soit terminée avant de continuer.

Voici une courte vidéo sur `async` :

[![Async et Await pour gérer les promesses](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async et Await pour gérer les promesses")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur async/await.

Créez une nouvelle fonction pour interroger l'API C02Signal :

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

C'est une grande fonction. Que se passe-t-il ici ?

- En suivant les bonnes pratiques, vous utilisez le mot-clé `async` pour que cette fonction se comporte de manière asynchrone. La fonction contient un bloc `try/catch` car elle retournera une promesse lorsque l'API renverra des données. Comme vous n'avez pas de contrôle sur la vitesse de réponse de l'API (elle peut ne pas répondre du tout !), vous devez gérer cette incertitude en l'appelant de manière asynchrone.
- Vous interrogez l'API co2signal pour obtenir les données de votre région, en utilisant votre clé API. Pour utiliser cette clé, vous devez utiliser un type d'authentification dans les paramètres d'en-tête.
- Une fois que l'API répond, vous assignez divers éléments de ses données de réponse aux parties de votre écran que vous avez configurées pour afficher ces données.
- S'il y a une erreur ou s'il n'y a pas de résultat, vous affichez un message d'erreur.

✅ Utiliser des modèles de programmation asynchrone est un autre outil très utile dans votre boîte à outils. Lisez [à propos des différentes manières](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) de configurer ce type de code.

Félicitations ! Si vous construisez votre extension (`npm run build`) et la rafraîchissez dans votre panneau d'extensions, vous avez une extension fonctionnelle ! La seule chose qui ne fonctionne pas est l'icône, et vous corrigerez cela dans la prochaine leçon.

---

## 🚀 Défi

Nous avons discuté de plusieurs types d'API jusqu'à présent dans ces leçons. Choisissez une API web et recherchez en profondeur ce qu'elle offre. Par exemple, examinez les API disponibles dans les navigateurs comme l'[API HTML Drag and Drop](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Qu'est-ce qui fait une excellente API selon vous ?

## Quiz après le cours

[Quiz après le cours](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26)

## Révision et auto-apprentissage

Vous avez appris à propos de LocalStorage et des API dans cette leçon, deux outils très utiles pour le développeur web professionnel. Pouvez-vous réfléchir à la manière dont ces deux éléments fonctionnent ensemble ? Pensez à la façon dont vous architectureriez un site web qui stockerait des éléments à utiliser par une API.

## Devoir

[Adoptez une API](assignment.md)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.