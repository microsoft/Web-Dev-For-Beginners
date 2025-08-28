<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0bb55e0b98600afab801eea115228873",
  "translation_date": "2025-08-23T23:43:29+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "fr"
}
-->
# Projet d'extension de navigateur Partie 1 : Tout sur les navigateurs

![Croquis de navigateur](../../../../sketchnotes/browser.jpg)
> Croquis par [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/23)

### Introduction

Les extensions de navigateur ajoutent des fonctionnalités supplémentaires à un navigateur. Mais avant d'en créer une, il est utile de comprendre un peu comment les navigateurs fonctionnent.

### À propos du navigateur

Dans cette série de leçons, vous apprendrez à créer une extension de navigateur qui fonctionnera sur les navigateurs Chrome, Firefox et Edge. Dans cette partie, vous découvrirez comment les navigateurs fonctionnent et vous préparerez les éléments de l'extension de navigateur.

Mais qu'est-ce qu'un navigateur exactement ? C'est une application logicielle qui permet à un utilisateur d'accéder à du contenu depuis un serveur et de l'afficher sur des pages web.

✅ Un peu d'histoire : le premier navigateur s'appelait 'WorldWideWeb' et a été créé par Sir Timothy Berners-Lee en 1990.

![premiers navigateurs](../../../../5-browser-extension/1-about-browsers/images/earlybrowsers.jpg)
> Quelques premiers navigateurs, via [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Lorsqu'un utilisateur se connecte à Internet en utilisant une adresse URL (Uniform Resource Locator), généralement via le protocole Hypertext Transfer Protocol avec une adresse `http` ou `https`, le navigateur communique avec un serveur web et récupère une page web.

À ce stade, le moteur de rendu du navigateur l'affiche sur l'appareil de l'utilisateur, qui peut être un téléphone mobile, un ordinateur de bureau ou un ordinateur portable.

Les navigateurs ont également la capacité de mettre en cache du contenu afin qu'il n'ait pas besoin d'être récupéré depuis le serveur à chaque fois. Ils peuvent enregistrer l'historique de navigation d'un utilisateur, stocker des 'cookies', qui sont de petits morceaux de données contenant des informations utilisées pour enregistrer l'activité d'un utilisateur, et bien plus encore.

Un point très important à retenir sur les navigateurs est qu'ils ne sont pas tous identiques ! Chaque navigateur a ses forces et ses faiblesses, et un développeur web professionnel doit comprendre comment rendre les pages web performantes sur différents navigateurs. Cela inclut la gestion des petits écrans comme ceux des téléphones mobiles, ainsi que des utilisateurs hors ligne.

Un site web très utile que vous devriez probablement ajouter à vos favoris dans le navigateur que vous préférez utiliser est [caniuse.com](https://www.caniuse.com). Lorsque vous créez des pages web, il est très utile d'utiliser les listes de technologies prises en charge par caniuse pour mieux répondre aux besoins de vos utilisateurs.

✅ Comment savoir quels navigateurs sont les plus populaires auprès des utilisateurs de votre site web ? Consultez vos analyses - vous pouvez installer divers outils d'analyse dans le cadre de votre processus de développement web, et ils vous indiqueront quels navigateurs sont les plus utilisés.

## Extensions de navigateur

Pourquoi voudriez-vous créer une extension de navigateur ? C'est un outil pratique à ajouter à votre navigateur lorsque vous avez besoin d'un accès rapide à des tâches que vous effectuez souvent. Par exemple, si vous avez besoin de vérifier les couleurs sur les différentes pages web que vous consultez, vous pourriez installer une extension de navigateur pour choisir les couleurs. Si vous avez du mal à vous souvenir de vos mots de passe, vous pourriez utiliser une extension de gestion des mots de passe.

Les extensions de navigateur sont également amusantes à développer. Elles ont tendance à gérer un nombre limité de tâches qu'elles exécutent efficacement.

✅ Quelles sont vos extensions de navigateur préférées ? Quelles tâches accomplissent-elles ?

### Installer des extensions

Avant de commencer à créer, examinez le processus de création et de déploiement d'une extension de navigateur. Bien que chaque navigateur varie légèrement dans la gestion de cette tâche, le processus est similaire sur Chrome et Firefox à cet exemple sur Edge :

![capture d'écran du navigateur Edge montrant la page edge://extensions ouverte et le menu des paramètres ouvert](../../../../5-browser-extension/1-about-browsers/images/install-on-edge.png)

> Note : Assurez-vous d'activer le mode développeur et de permettre les extensions provenant d'autres magasins.

En essence, le processus sera :

- créer votre extension en utilisant `npm run build` 
- naviguer dans le navigateur vers le panneau des extensions en utilisant le bouton "Paramètres et plus" (l'icône `...`) en haut à droite
- si c'est une nouvelle installation, choisir `load unpacked` pour télécharger une nouvelle extension depuis son dossier de construction (dans notre cas, il s'agit de `/dist`) 
- ou, cliquer sur `reload` si vous rechargez l'extension déjà installée

✅ Ces instructions concernent les extensions que vous créez vous-même ; pour installer des extensions qui ont été publiées dans le magasin d'extensions de navigateur associé à chaque navigateur, vous devez naviguer vers ces [magasins](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) et installer l'extension de votre choix.

### Commencer

Vous allez créer une extension de navigateur qui affiche l'empreinte carbone de votre région, montrant la consommation d'énergie de votre région et la source de cette énergie. L'extension comportera un formulaire qui collecte une clé API afin que vous puissiez accéder à l'API de CO2 Signal.

**Vous avez besoin de :**

- [une clé API](https://www.co2signal.com/) ; entrez votre email dans la boîte sur cette page et une clé vous sera envoyée
- le [code de votre région](http://api.electricitymap.org/v3/zones) correspondant à la [Electricity Map](https://www.electricitymap.org/map) (à Boston, par exemple, j'utilise 'US-NEISO').
- le [code de départ](../../../../5-browser-extension/start). Téléchargez le dossier `start` ; vous compléterez le code dans ce dossier.
- [NPM](https://www.npmjs.com) - NPM est un outil de gestion de paquets ; installez-le localement et les paquets listés dans votre fichier `package.json` seront installés pour être utilisés par votre projet web.

✅ Apprenez-en plus sur la gestion des paquets dans ce [module d'apprentissage excellent](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

Prenez un moment pour parcourir la base de code :

dist
    -|manifest.json (les paramètres par défaut sont ici)
    -|index.html (le balisage HTML du front-end est ici)
    -|background.js (le JS de fond est ici)
    -|main.js (JS compilé)
src
    -|index.js (votre code JS va ici)

✅ Une fois que vous avez votre clé API et le code de votre région à portée de main, conservez-les quelque part dans une note pour une utilisation future.

### Construire le HTML pour l'extension

Cette extension a deux vues. Une pour recueillir la clé API et le code de région :

![capture d'écran de l'extension terminée ouverte dans un navigateur, affichant un formulaire avec des champs pour le nom de la région et la clé API.](../../../../5-browser-extension/1-about-browsers/images/1.png)

Et la seconde pour afficher la consommation de carbone de la région :

![capture d'écran de l'extension terminée affichant les valeurs de consommation de carbone et le pourcentage de combustibles fossiles pour la région US-NEISO.](../../../../5-browser-extension/1-about-browsers/images/2.png)

Commençons par construire le HTML pour le formulaire et le styliser avec du CSS.

Dans le dossier `/dist`, vous allez construire un formulaire et une zone de résultats. Dans le fichier `index.html`, remplissez la zone de formulaire délimitée :

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
		<label for="region">Region Name</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Your API Key from tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```
C'est le formulaire où vos informations enregistrées seront saisies et sauvegardées dans le stockage local.

Ensuite, créez la zone de résultats ; sous la balise finale du formulaire, ajoutez quelques divs :

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```
À ce stade, vous pouvez essayer une construction. Assurez-vous d'installer les dépendances du paquet de cette extension :

```
npm install
```

Cette commande utilisera npm, le gestionnaire de paquets Node, pour installer webpack pour le processus de construction de votre extension. Webpack est un outil de regroupement qui gère la compilation du code. Vous pouvez voir le résultat de ce processus en regardant dans `/dist/main.js` - vous verrez que le code a été regroupé.

Pour l'instant, l'extension devrait se construire et, si vous la déployez dans Edge en tant qu'extension, vous verrez un formulaire affiché proprement.

Félicitations, vous avez fait les premiers pas vers la création d'une extension de navigateur. Dans les leçons suivantes, vous la rendrez plus fonctionnelle et utile.

---

## 🚀 Défi

Explorez un magasin d'extensions de navigateur et installez-en une dans votre navigateur. Vous pouvez examiner ses fichiers de manière intéressante. Qu'avez-vous découvert ?

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/24)

## Révision et étude personnelle

Dans cette leçon, vous avez appris un peu sur l'histoire du navigateur web ; profitez de cette occasion pour en apprendre davantage sur la façon dont les inventeurs du World Wide Web ont envisagé son utilisation en lisant davantage sur son histoire. Quelques sites utiles incluent :

[The History of Web Browsers](https://www.mozilla.org/firefox/browsers/browser-history/)

[History of the Web](https://webfoundation.org/about/vision/history-of-the-web/)

[Une interview avec Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Devoir 

[Re-stylisez votre extension](assignment.md)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.