# Projet d'extension de navigateur Partie 3 : En savoir plus sur les tâches et les performances en arrière-plan

## Quiz préalable

[Quiz préalable](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/27?loc=fr)

### Introduction

Dans les deux dernières leçons de ce module, vous avez appris à créer un formulaire et une zone d'affichage pour les données extraites d'une API. C'est un moyen très standard de créer des présences Web sur le Web. Vous avez même appris à gérer la récupération de données de manière asynchrone. Votre extension de navigateur est presque terminée.

Il reste à gérer certaines tâches en arrière-plan, dont le rafraîchissement de la couleur de l'icône de l'extension, c'est donc le moment idéal pour parler de la façon dont le navigateur gère ce genre de tâche. Pensons à ces tâches de navigateur dans le contexte des performances de vos ressources Web au fur et à mesure que vous les créez.

## Notions de base sur les performances Web

> "Les performances du site Web dépendent de deux choses : la vitesse à laquelle la page se charge et la vitesse à laquelle le code s'exécute dessus." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

La question de savoir comment rendre vos sites Web incroyablement rapides sur toutes sortes d'appareils, pour toutes sortes d'utilisateurs, dans toutes sortes de situations, est sans surprise vaste. Voici quelques points à garder à l'esprit lorsque vous créez un projet Web standard ou une extension de navigateur.

La première chose que vous devez faire pour vous assurer que votre site fonctionne efficacement est de collecter des données sur ses performances. Le premier endroit pour le faire est dans les outils de développement de votre navigateur Web. Dans Edge, vous pouvez sélectionner le bouton "Paramètres et plus" (l'icône à trois points en haut à droite du navigateur), puis accédez à Plus d'outils > Outils de développement et ouvrez l'onglet Performances. Vous pouvez également utiliser les raccourcis clavier `Ctrl` + `Maj` + `I` sur Windows, ou `Option` + `Commande` + `I` sur Mac pour ouvrir les outils de développement.

L'onglet Performance contient un outil de profilage. Ouvrez un site Web (essayez, par exemple, https://www.microsoft.com) et cliquez sur le bouton 'Record', puis actualisez le site. Arrêtez l'enregistrement à tout moment et vous pourrez voir les routines générées pour le 'script', le 'render' (rendu), et le 'paint' (l'affichage) du site:

![Edge profiler](../images/profiler.png)

✅ Consultez la [Documentation Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance?WT.mc_id=academic-13441-cxa) à propos du panneau Performances dans Edge

> Astuce : pour avoir une vraie lecture de l'heure de démarrage de votre site web, videz le cache de votre navigateur

Sélectionnez des éléments de la chronologie du profil pour zoomer sur les événements qui se produisent pendant le chargement de votre page.

Obtenez un aperçu des performances de votre page en sélectionnant une partie de la chronologie du profil et en regardant le volet récapitulatif :

![Capture du profileur Edge](../images/snapshot.png)

Vérifiez le volet Journal des événements pour voir si un événement a pris plus de 15 ms:

![Journal des événements Edge](../images/log.png)

✅ Apprenez à connaître votre profileur! Ouvrez les outils de développement sur ce site et voyez s'il y a des goulots d'étranglement. Quel est l'élément le plus lent? Le plus rapide?

## Contrôles de profilage

En général, il existe des "zones à problèmes" que chaque développeur Web doit surveiller lors de la création d'un site, afin d'éviter les mauvaises surprises au moment du déploiement en production.

**Tailles des éléments**: Le Web est devenu 'plus lourd', et donc plus lent, au cours des dernières années. Une partie de ce poids est liée à l'utilisation d'images.

✅ Parcourez les [archives d'Internet](https://httparchive.org/reports/page-weight) pour une vue historique du poids des pages et plus encore.

Une bonne pratique consiste à vous assurer que vos images sont optimisées, livrées à la bonne taille et à la bonne résolution pour vos utilisateurs.

**Traversées du DOM**: Le navigateur doit construire son modèle objet de document en fonction du code que vous écrivez, il est donc dans l'intérêt d'une bonne performance de la page de garder vos balises minimales, en utilisant et en stylisant uniquement ce dont la page a besoin. À ce stade, l'excès de CSS associé à une page pourrait être optimisé ; les styles qui ne doivent être utilisés que sur une seule page n'ont pas besoin d'être inclus dans la feuille de style principale, par exemple.

**JavaScript**: Chaque développeur JavaScript doit surveiller les scripts 'bloquant le rendu' qui doivent être chargés avant que le reste du DOM puisse être parcouru et peint sur le navigateur. Pensez à utiliser `defer` avec vos scripts en ligne (comme cela se fait dans le module Terrarium).

✅ Essayez certains sites sur un [site Web de test de vitesse de site](https://www.webpagetest.org/) pour en apprendre plus sur les vérifications courantes qui sont effectuées pour déterminer les performances du site.

Maintenant que vous avez une idée de la façon dont le navigateur rend les ressources que vous lui envoyez, examinons les dernières choses que vous devez faire pour terminer votre extension:

### Créer une fonction pour calculer la couleur

En travaillant dans `/src/index.js`, ajoutez une fonction appelée `calculateColor()` après la série de variables `const` que vous avez définies pour accéder au DOM:

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

Que se passe t-il ici? Vous transmettez une valeur (l'intensité carbone) de l'appel d'API que vous avez terminé dans la dernière leçon, puis vous calculez à quel point sa valeur est proche de l'indice présenté dans le tableau de couleurs. Ensuite, vous envoyez la valeur de couleur la plus proche au moteur d'exécution Chrome.

Le chrome.runtime a [une API](https://developer.chrome.com/extensions/runtime) qui gère toutes sortes de tâches en arrière-plan, et votre extension en tire parti:

> "Utilisez l'API chrome.runtime pour récupérer la page d'arrière-plan, renvoyer des détails sur le manifeste, et écouter et répondre aux événements dans le cycle de vie de l'application ou de l'extension. Vous pouvez également utiliser cette API pour convertir le chemin relatif des URL en URL entièrement qualifiées."

✅ Si vous développez cette extension de navigateur pour Edge, vous pourriez être surpris d'utiliser une API Chrome. Les nouvelles versions du navigateur Edge s'exécutent sur le moteur de navigateur Chromium, vous pouvez donc tirer parti de ces outils.

> Notez que si vous souhaitez profiler une extension de navigateur, lancez les outils de développement à partir de l'extension elle-même, car il s'agit de sa propre instance de navigateur distincte.

### Définir une couleur d'icône par défaut

Maintenant, dans la fonction `init()`, définissez l'icône sur un vert générique pour commencer en appelant à nouveau l'action `updateIcon` de chrome:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Appeler la fonction, exécuter l'appel

Ensuite, appelez cette fonction que vous venez de créer en l'ajoutant à la promesse renvoyée par l'API C02Signal:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Et enfin, dans `/dist/background.js`, ajoutez l'écouteur pour ces appels d'action en arrière-plan:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//emprunté à l'extension energy lollipop, fonctionnalité intéressante !
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
Dans ce code, vous ajoutez un écouteur pour tous les messages arrivant au gestionnaire de tâches principal. S'il s'appelle 'updateIcon', le code suivant est exécuté pour dessiner une icône de la bonne couleur à l'aide de l'API Canvas.

✅ Vous en saurez plus sur l'API Canvas dans les [Cours sur le jeu spatial](../../../6-space-game/2-drawing-to-canvas/translations/README.fr.md).

Maintenant, recompiler votre extension (`npm run build`), actualisez et lancez la, et observez le changement de couleur. Est-ce le bon moment pour faire une course ou faire la vaisselle? Vous le savez maintenant!

Félicitations, vous avez créé une extension de navigateur utile et en avez appris davantage sur le fonctionnement du navigateur et sur la façon de profiler ses performances.

---

## 🚀 Challenge


Enquêtez sur certains sites Web open source qui existent depuis longtemps et, sur la base de leur historique GitHub, voyez si vous pouvez déterminer comment ils ont été optimisés au fil des ans pour les performances, le cas échéant. Quel est le point sensible le plus courant?

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/28?loc=fr)

## Révision et étude personnelle

Pensez à vous inscrire à une [newsletter sur les performances](https://perf.email/)

Étudiez certaines des façons dont les navigateurs évaluent les performances Web en consultant les onglets de performances de leurs outils Web. Trouvez-vous des différences majeures?

## Affectation

[Analyser un site par rapport à la performance](assignment.fr.md)

