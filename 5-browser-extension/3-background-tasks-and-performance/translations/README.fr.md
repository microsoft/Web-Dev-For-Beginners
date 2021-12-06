# Projet d'extension de navigateur Partie 3 : En savoir plus sur les tâches et les performances en arrière-plan

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/27?loc=fr)

### Introduction

Dans les deux dernières leçons de ce module, vous avez appris à créer un formulaire et une zone d'affichage pour les données extraites d'une API. C'est un moyen très standard de créer des présences Web sur le Web. Vous avez même appris à gérer la récupération de données de manière asynchrone. Votre extension de navigateur est presque terminée. 

Il reste à gérer certaines tâches en arrière-plan, dont le rafraîchissement de la couleur de l'icône de l'extension, c'est donc le moment idéal pour parler de la façon dont le navigateur gère ce genre de tâche. Pensons à ces tâches de navigateur dans le contexte des performances de vos ressources Web au fur et à mesure que vous les créez.

## Notions de base sur les performances Web

> "Les performances du site Web dépendent de deux choses : la vitesse à laquelle la page se charge et la vitesse à laquelle le code s'exécute dessus." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

La question de savoir comment rendre vos sites Web incroyablement rapides sur toutes sortes d'appareils, pour toutes sortes d'utilisateurs, dans toutes sortes de situations, est sans surprise vaste. Voici quelques points à garder à l'esprit lorsque vous créez un projet Web standard ou une extension de navigateur.

La première chose que vous devez faire pour vous assurer que votre site fonctionne efficacement est de collecter des données sur ses performances. Le premier endroit pour le faire est dans les outils de développement de votre navigateur Web. Dans Edge, vous pouvez sélectionner le bouton "Paramètres et plus" (l'icône à trois points en haut à droite du navigateur), puis accédez à Plus d'outils > Outils de développement et ouvrez l'onglet Performances. Vous pouvez également utiliser les raccourcis clavier `Ctrl` + `Maj` + `I` sur Windows, ou `Option` + `Commande` + `I` sur Mac pour ouvrir les outils de développement.

L'onglet Performance contient un outil de profilage. Ouvrez un site Web (essayez, par exemple, https://www.microsoft.com) et cliquez sur le bouton 'Record', puis actualisez le site. Arrêtez l'enregistrement à tout moment et vous pourrez voir les routines générées pour le 'script', le 'render' (rendu), et le 'paint' (l'affichage) du site:

![Edge profiler](../images/profiler.png)

✅ 
Consultez la [Documentation Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance?WT.mc_id=academic-13441-cxa) sur le panneau Performances dans Edge

> Astuce : pour avoir une vraie lecture de l'heure de démarrage de votre site web, videz le cache de votre navigateur

Sélectionnez des éléments de la chronologie du profil pour zoomer sur les événements qui se produisent pendant le chargement de votre page.

Get a snapshot of your page's performance by selecting a part of the profile timeline and looking at the summary pane:

![Edge profiler snapshot](./images/snapshot.png)

Check the Event Log pane to see if any event took longer than 15 ms:

![Edge event log](./images/log.png)

✅ Get to know your profiler! Open the developer tools on this site and see if there are any bottlenecks. What's the slowest-loading asset? The fastest?

## Profiling checks

In general there are some "problem areas" that every web developer should watch for when building a site, so as to avoid nasty surprises when it's time to deploy to production.

**Asset sizes**: The web has gotten 'heavier', and thus slower, over the past few years. Some of this weight has to do with the use of images.

✅ Look through the [Internet Archive](https://httparchive.org/reports/page-weight) for a historical view of page weight and more.

A good practice is to ensure that your images are optimized, delivered at the right size and resolution for your users.

**DOM traversals**: The browser has to build its Document Object Model based on the code you write, so it's in the interest of good page performance to keep your tags minimal, only using and styling what the page needs. To this point, excess CSS associated with a page could be optimized; styles that need to be used only on one page don't need to be included in the main style sheet, for example.

**JavaScript**: Every JavaScript developer should watch for 'render-blocking' scripts that must be loaded before the rest of the DOM can be traversed and painted to the browser. Consider using `defer` with your inline scripts (as is done in the Terrarium module).

✅ Try some sites on a [Site Speed Test website](https://www.webpagetest.org/) to learn more about the common checks that are done to determine site performance.

Now that you have an idea on how the browser renders the assets you send to it, let's look at the last few things you need to do to complete your extension:

### Create a function to calculate color

Working in `/src/index.js`, add a function called `calculateColor()` after the series of `const` variables you set to gain access to the DOM:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

What's going on here? You pass in a value (the carbon intensity) from the API call you completed in the last lesson, and then you calculate how close its value is to the index presented in colors array. Then you send that closest color value over to the chrome runtime.

The chrome.runtime has [an API](https://developer.chrome.com/extensions/runtime) that handles all kinds of background tasks, and your extension is leveraging that:

> "Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs."

✅ If you're developing this browser extension for Edge, it might surprise you that you're using a chrome API. The newer Edge  browser versions run on the Chromium browser engine, so you can leverage these tools.

> Note, if you want to profile a browser extension, launch the dev tools from within the extension itself, as it is its own separate browser instance.

### Set a default icon color

Now, in the `init()` function, set the icon to be generic green to start by again calling chrome's `updateIcon` action:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Call the function, execute the call

Next, call that function you just created by adding it to the promise returned by the C02Signal API:

```JavaScript
//let CO2...
calculateColor(CO2);
```

And finally, in `/dist/background.js`, add the listener for these background action calls:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
In this code, you are adding a listener for any messages coming to the backend task manager. If it's called 'updateIcon', then the next code is run, to draw an icon of the proper color using the Canvas API.

✅ You'll learn more about the Canvas API in the [Space Game lessons](../../6-space-game/2-drawing-to-canvas/README.md).

Now, rebuild your extension (`npm run build`), refresh and launch your extension, and watch the color change. Is it a good time to run an errand or wash the dishes? Now you know!

Congratulations, you've built a useful browser extension and learned more about how the browser works and how to profile its performance.

---

## 🚀 Challenge


Enquêtez sur certains sites Web open source qui existent depuis longtemps et, sur la base de leur historique GitHub, voyez si vous pouvez déterminer comment ils ont été optimisés au fil des ans pour les performances, le cas échéant. Quel est le point sensible le plus courant?

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/28?loc=fr)

## Révision et étude personnelle

Pensez à vous inscrire à une [newsletter sur les performances](https://perf.email/)

Étudiez certaines des façons dont les navigateurs évaluent les performances Web en consultant les onglets de performances de leurs outils Web. Trouvez-vous des différences majeures?

## Affectation

[Analyser un site par rapport à la performance](assignment.fr.md)

