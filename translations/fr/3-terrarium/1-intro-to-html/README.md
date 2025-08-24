<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46a0639e719b9cf1dfd062aa24cad639",
  "translation_date": "2025-08-23T22:25:11+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "fr"
}
-->
# Projet Terrarium Partie 1 : Introduction à HTML

![Introduction à HTML](../../../../sketchnotes/webdev101-html.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz avant le cours

[Quiz avant le cours](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/15)


> Regardez la vidéo

> 
> [![Vidéo sur les bases de Git et GitHub](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### Introduction

HTML, ou HyperText Markup Language, est le 'squelette' du web. Si CSS 'habille' votre HTML et que JavaScript lui donne vie, HTML est le corps de votre application web. La syntaxe de HTML reflète même cette idée, puisqu'elle inclut des balises "head", "body" et "footer".

Dans cette leçon, nous allons utiliser HTML pour structurer le 'squelette' de l'interface de notre terrarium virtuel. Il comportera un titre et trois colonnes : une colonne à gauche et une à droite où se trouveront les plantes déplaçables, et une zone centrale qui représentera le terrarium en verre. À la fin de cette leçon, vous pourrez voir les plantes dans les colonnes, mais l'interface aura un aspect un peu étrange ; ne vous inquiétez pas, dans la section suivante, vous ajouterez des styles CSS pour améliorer l'apparence de l'interface.

### Tâche

Sur votre ordinateur, créez un dossier appelé 'terrarium' et, à l'intérieur, un fichier nommé 'index.html'. Vous pouvez le faire dans Visual Studio Code après avoir créé votre dossier terrarium en ouvrant une nouvelle fenêtre VS Code, en cliquant sur 'ouvrir un dossier', et en naviguant vers votre nouveau dossier. Cliquez sur le petit bouton 'fichier' dans le volet Explorateur et créez le nouveau fichier :

![explorateur dans VS Code](../../../../3-terrarium/1-intro-to-html/images/vs-code-index.png)

Ou

Utilisez ces commandes dans votre terminal git bash :
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` ou `nano index.html`

> Les fichiers index.html indiquent à un navigateur qu'il s'agit du fichier par défaut dans un dossier ; des URL comme `https://anysite.com/test` peuvent être construites à partir d'une structure de dossier incluant un dossier appelé `test` avec `index.html` à l'intérieur ; `index.html` n'a pas besoin d'apparaître dans l'URL.

---

## Le DocType et les balises html

La première ligne d'un fichier HTML est son doctype. Il est un peu surprenant de devoir inclure cette ligne tout en haut du fichier, mais elle indique aux anciens navigateurs qu'ils doivent rendre la page en mode standard, en suivant la spécification HTML actuelle.

> Astuce : dans VS Code, vous pouvez survoler une balise pour obtenir des informations sur son utilisation à partir des guides de référence MDN.

La deuxième ligne doit être la balise d'ouverture `<html>`, suivie immédiatement de sa balise de fermeture `</html>`. Ces balises sont les éléments racines de votre interface.

### Tâche

Ajoutez ces lignes en haut de votre fichier `index.html` :

```HTML
<!DOCTYPE html>
<html></html>
```

✅ Il existe plusieurs modes qui peuvent être déterminés en définissant le DocType avec une chaîne de requête : [Mode Quirks et Mode Standards](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Ces modes étaient utilisés pour prendre en charge des navigateurs très anciens qui ne sont généralement plus utilisés aujourd'hui (Netscape Navigator 4 et Internet Explorer 5). Vous pouvez vous en tenir à la déclaration standard du doctype.

---

## Le 'head' du document

La zone 'head' du document HTML inclut des informations cruciales sur votre page web, également appelées [métadonnées](https://developer.mozilla.org/docs/Web/HTML/Element/meta). Dans notre cas, nous indiquons au serveur web auquel cette page sera envoyée pour être rendue, ces quatre éléments :

-   le titre de la page
-   les métadonnées de la page, y compris :
    -   le 'jeu de caractères', qui indique quel encodage de caractères est utilisé dans la page
    -   des informations sur le navigateur, y compris `x-ua-compatible` qui indique que le navigateur IE=edge est pris en charge
    -   des informations sur le comportement du viewport lorsqu'il est chargé. Définir le viewport avec une échelle initiale de 1 contrôle le niveau de zoom lorsque la page est chargée pour la première fois.

### Tâche

Ajoutez un bloc 'head' à votre document entre les balises d'ouverture et de fermeture `<html>`.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Que se passerait-il si vous définissiez une balise meta viewport comme ceci : `<meta name="viewport" content="width=600">` ? Lisez-en plus sur le [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

---

## Le `body` du document

### Balises HTML

En HTML, vous ajoutez des balises à votre fichier .html pour créer des éléments d'une page web. Chaque balise a généralement une balise d'ouverture et de fermeture, comme ceci : `<p>bonjour</p>` pour indiquer un paragraphe. Créez le corps de votre interface en ajoutant un ensemble de balises `<body>` à l'intérieur de la paire de balises `<html>` ; votre balisage ressemble maintenant à ceci :

### Tâche

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

Maintenant, vous pouvez commencer à construire votre page. Normalement, vous utilisez des balises `<div>` pour créer les différents éléments d'une page. Nous allons créer une série d'éléments `<div>` qui contiendront des images.

### Images

Une balise HTML qui n'a pas besoin de balise de fermeture est la balise `<img>`, car elle possède un élément `src` qui contient toutes les informations nécessaires à la page pour rendre l'élément.

Créez un dossier dans votre application appelé `images` et ajoutez-y toutes les images du [dossier source](../../../../3-terrarium/solution/images) ; (il y a 14 images de plantes).

### Tâche

Ajoutez ces images de plantes dans deux colonnes entre les balises `<body></body>` :

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> Note : Spans vs. Divs. Les Divs sont considérés comme des éléments 'block', et les Spans comme des éléments 'inline'. Que se passerait-il si vous transformiez ces divs en spans ?

Avec ce balisage, les plantes apparaissent maintenant à l'écran. Cela a un aspect assez mauvais, car elles ne sont pas encore stylées avec CSS, ce que nous ferons dans la prochaine leçon.

Chaque image possède un texte alternatif qui apparaîtra même si vous ne pouvez pas voir ou rendre une image. C'est un attribut important à inclure pour l'accessibilité. Vous en apprendrez davantage sur l'accessibilité dans les leçons futures ; pour l'instant, rappelez-vous que l'attribut alt fournit des informations alternatives pour une image si un utilisateur ne peut pas la voir (en raison d'une connexion lente, d'une erreur dans l'attribut src, ou si l'utilisateur utilise un lecteur d'écran).

✅ Avez-vous remarqué que chaque image a le même texte alternatif ? Est-ce une bonne pratique ? Pourquoi ou pourquoi pas ? Pouvez-vous améliorer ce code ?

---

## Balisage sémantique

En général, il est préférable d'utiliser des 'sémantiques' significatives lors de l'écriture de HTML. Qu'est-ce que cela signifie ? Cela signifie que vous utilisez des balises HTML pour représenter le type de données ou d'interaction pour lequel elles ont été conçues. Par exemple, le texte principal d'un titre sur une page devrait utiliser une balise `<h1>`.

Ajoutez la ligne suivante juste en dessous de votre balise d'ouverture `<body>` :

```html
<h1>My Terrarium</h1>
```

Utiliser un balisage sémantique, comme avoir des en-têtes en `<h1>` et des listes non ordonnées rendues en `<ul>`, aide les lecteurs d'écran à naviguer sur une page. En général, les boutons devraient être écrits comme `<button>` et les listes comme `<li>`. Bien qu'il soit _possible_ d'utiliser des éléments `<span>` spécialement stylés avec des gestionnaires de clics pour imiter des boutons, il est préférable pour les utilisateurs handicapés d'utiliser des technologies pour déterminer où se trouve un bouton sur une page et interagir avec lui, si l'élément apparaît comme un bouton. Pour cette raison, essayez d'utiliser autant que possible un balisage sémantique.

✅ Regardez un lecteur d'écran et [comment il interagit avec une page web](https://www.youtube.com/watch?v=OUDV1gqs9GA). Pouvez-vous comprendre pourquoi un balisage non sémantique pourrait frustrer l'utilisateur ?

## Le terrarium

La dernière partie de cette interface consiste à créer un balisage qui sera stylé pour créer un terrarium.

### Tâche :

Ajoutez ce balisage au-dessus de la dernière balise `</div>` :

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ Même si vous avez ajouté ce balisage à l'écran, vous ne voyez absolument rien s'afficher. Pourquoi ?

---

## 🚀Défi

Il existe des balises 'anciennes' amusantes en HTML qui sont encore intéressantes à expérimenter, bien que vous ne devriez pas utiliser des balises obsolètes comme [ces balises](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) dans votre balisage. Cependant, pouvez-vous utiliser l'ancienne balise `<marquee>` pour faire défiler horizontalement le titre h1 ? (si vous le faites, n'oubliez pas de la supprimer ensuite)

## Quiz après le cours

[Quiz après le cours](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/16)

## Révision et auto-apprentissage

HTML est le système de construction 'éprouvé' qui a aidé à construire le web tel qu'il est aujourd'hui. Apprenez un peu sur son histoire en étudiant des balises anciennes et nouvelles. Pouvez-vous comprendre pourquoi certaines balises ont été abandonnées et d'autres ajoutées ? Quelles balises pourraient être introduites à l'avenir ?

Apprenez-en davantage sur la création de sites pour le web et les appareils mobiles sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).


## Devoir

[Pratiquez votre HTML : Créez une maquette de blog](assignment.md)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.