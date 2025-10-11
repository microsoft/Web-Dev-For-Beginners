<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:12:54+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "fr"
}
-->
# Projet d'extension de navigateur Partie 3 : Découvrez les tâches en arrière-plan et les performances

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduction

Dans les deux dernières leçons de ce module, vous avez appris à créer un formulaire et une zone d'affichage pour les données récupérées depuis une API. C'est une méthode très courante pour établir une présence sur le web. Vous avez même appris à gérer la récupération de données de manière asynchrone. Votre extension de navigateur est presque terminée.

Il reste à gérer certaines tâches en arrière-plan, comme le rafraîchissement de la couleur de l'icône de l'extension. C'est donc le moment idéal pour parler de la manière dont le navigateur gère ce type de tâche. Réfléchissons à ces tâches dans le contexte des performances de vos ressources web pendant leur développement.

## Bases des performances web

> "Les performances d'un site web concernent deux choses : la vitesse de chargement de la page et la rapidité d'exécution du code." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Le sujet de l'optimisation des performances des sites web pour qu'ils soient extrêmement rapides sur tous types d'appareils, pour tous types d'utilisateurs, dans toutes sortes de situations, est, sans surprise, vaste. Voici quelques points à garder à l'esprit lorsque vous développez un projet web classique ou une extension de navigateur.

La première chose à faire pour garantir l'efficacité de votre site est de collecter des données sur ses performances. Le premier endroit pour cela est dans les outils de développement de votre navigateur web. Dans Edge, vous pouvez sélectionner le bouton "Paramètres et plus" (l'icône des trois points en haut à droite du navigateur), puis naviguer vers Plus d'outils > Outils de développement et ouvrir l'onglet Performances. Vous pouvez également utiliser les raccourcis clavier `Ctrl` + `Shift` + `I` sur Windows ou `Option` + `Command` + `I` sur Mac pour ouvrir les outils de développement.

L'onglet Performances contient un outil de profilage. Ouvrez un site web (essayez, par exemple, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) et cliquez sur le bouton 'Enregistrer', puis actualisez le site. Arrêtez l'enregistrement à tout moment, et vous pourrez voir les routines générées pour 'script', 'render' et 'paint' le site :

![Profiler Edge](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.fr.png)

✅ Consultez la [documentation Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) sur le panneau Performances dans Edge.

> Astuce : pour obtenir une lecture précise du temps de démarrage de votre site, videz le cache de votre navigateur.

Sélectionnez des éléments de la chronologie du profil pour zoomer sur les événements qui se produisent pendant le chargement de votre page.

Obtenez un aperçu des performances de votre page en sélectionnant une partie de la chronologie du profil et en regardant le panneau de résumé :

![Aperçu du profiler Edge](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.fr.png)

Vérifiez le panneau du journal des événements pour voir si un événement a pris plus de 15 ms :

![Journal des événements Edge](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.fr.png)

✅ Familiarisez-vous avec votre profiler ! Ouvrez les outils de développement sur ce site et voyez s'il y a des goulots d'étranglement. Quel est l'actif qui se charge le plus lentement ? Le plus rapidement ?

## Vérifications de profilage

En général, il existe des "zones problématiques" que tout développeur web devrait surveiller lors de la création d'un site pour éviter les mauvaises surprises au moment de la mise en production.

**Tailles des ressources** : Le web est devenu plus "lourd", et donc plus lent, ces dernières années. Une partie de ce poids est liée à l'utilisation des images.

✅ Parcourez l'[Internet Archive](https://httparchive.org/reports/page-weight) pour une vue historique du poids des pages et plus encore.

Une bonne pratique consiste à s'assurer que vos images sont optimisées et livrées à la bonne taille et résolution pour vos utilisateurs.

**Traversées du DOM** : Le navigateur doit construire son modèle d'objet de document (DOM) en fonction du code que vous écrivez. Il est donc dans l'intérêt de bonnes performances de page de garder vos balises minimales, en utilisant et en stylisant uniquement ce dont la page a besoin. À ce propos, le CSS excessif associé à une page pourrait être optimisé ; les styles qui doivent être utilisés uniquement sur une page n'ont pas besoin d'être inclus dans la feuille de style principale, par exemple.

**JavaScript** : Tout développeur JavaScript devrait surveiller les scripts "bloquant le rendu" qui doivent être chargés avant que le reste du DOM puisse être traversé et peint dans le navigateur. Pensez à utiliser `defer` avec vos scripts inline (comme cela est fait dans le module Terrarium).

✅ Essayez quelques sites sur un [site de test de vitesse](https://www.webpagetest.org/) pour en savoir plus sur les vérifications courantes effectuées pour déterminer les performances d'un site.

Maintenant que vous avez une idée de la manière dont le navigateur rend les ressources que vous lui envoyez, examinons les dernières étapes nécessaires pour terminer votre extension :

### Créer une fonction pour calculer la couleur

Dans `/src/index.js`, ajoutez une fonction appelée `calculateColor()` après la série de variables `const` que vous avez définies pour accéder au DOM :

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

Que se passe-t-il ici ? Vous passez une valeur (l'intensité carbone) issue de l'appel API que vous avez complété dans la dernière leçon, puis vous calculez à quel point sa valeur est proche de l'indice présenté dans le tableau des couleurs. Ensuite, vous envoyez cette valeur de couleur la plus proche au runtime de Chrome.

Le chrome.runtime dispose [d'une API](https://developer.chrome.com/extensions/runtime) qui gère toutes sortes de tâches en arrière-plan, et votre extension en tire parti :

> "Utilisez l'API chrome.runtime pour récupérer la page d'arrière-plan, retourner les détails du manifeste et écouter et répondre aux événements du cycle de vie de l'application ou de l'extension. Vous pouvez également utiliser cette API pour convertir le chemin relatif des URL en URL entièrement qualifiées."

✅ Si vous développez cette extension de navigateur pour Edge, il pourrait vous surprendre d'utiliser une API Chrome. Les versions plus récentes du navigateur Edge fonctionnent sur le moteur de navigateur Chromium, ce qui vous permet de tirer parti de ces outils.

> Notez que si vous souhaitez profiler une extension de navigateur, lancez les outils de développement depuis l'extension elle-même, car elle constitue une instance de navigateur distincte.

### Définir une couleur d'icône par défaut

Maintenant, dans la fonction `init()`, définissez l'icône sur une couleur verte générique au départ en appelant à nouveau l'action `updateIcon` de Chrome :

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Appeler la fonction, exécuter l'appel

Ensuite, appelez cette fonction que vous venez de créer en l'ajoutant à la promesse retournée par l'API C02Signal :

```JavaScript
//let CO2...
calculateColor(CO2);
```

Et enfin, dans `/dist/background.js`, ajoutez l'écouteur pour ces appels d'action en arrière-plan :

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = new OffscreenCanvas(200, 200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
Dans ce code, vous ajoutez un écouteur pour tout message envoyé au gestionnaire de tâches en arrière-plan. Si le message s'appelle 'updateIcon', alors le code suivant est exécuté pour dessiner une icône de la couleur appropriée en utilisant l'API Canvas.

✅ Vous en apprendrez davantage sur l'API Canvas dans les [leçons sur le jeu spatial](../../6-space-game/2-drawing-to-canvas/README.md).

Maintenant, reconstruisez votre extension (`npm run build`), actualisez et lancez votre extension, et observez le changement de couleur. Est-ce le bon moment pour faire une course ou laver la vaisselle ? Maintenant, vous le savez !

Félicitations, vous avez créé une extension de navigateur utile et appris davantage sur le fonctionnement du navigateur et sur la manière de profiler ses performances.

---

## 🚀 Défi

Examinez certains sites web open source qui existent depuis longtemps et, en vous basant sur leur historique GitHub, voyez si vous pouvez déterminer comment ils ont été optimisés au fil des années pour les performances, si cela a été fait. Quel est le point de douleur le plus courant ?

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/28)

## Révision et étude personnelle

Envisagez de vous inscrire à une [newsletter sur les performances](https://perf.email/).

Explorez certaines des façons dont les navigateurs évaluent les performances web en examinant les onglets de performances dans leurs outils web. Trouvez-vous des différences majeures ?

## Devoir

[Analyser un site pour ses performances](assignment.md)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.