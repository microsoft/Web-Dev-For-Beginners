# Projet Terrarium Partie 1 : Introduction au HTML

![Introduction au HTML](/sketchnotes/webdev101-html.png)
> Sketchnote par [Tomomi Imura] (https://twitter.com/girlie_mac)

## Quiz pré-conférence

[Quizz pré-conférence](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/15)

### Introduction

HTML, ou HyperText Markup Language, est le « squelette » du Web. Si CSS 'habille' votre HTML et que JavaScript lui donne vie, HTML est le corps de votre application Web. La syntaxe HTML reflète même cette idée, car elle inclut les balises "diriger", "corps" et "footer".

Dans cette leçon, nous allons utiliser HTML pour mettre en page le « squelette » de l'interface de notre terrarium virtuel. Il aura un titre et trois colonnes : une colonne de droite et une colonne de gauche où vivent les plantees déplaçables, et une zone centrale qui sera le véritable terrarium en verre. À la fin de cette leçon, vous pourrez voir les plantees dans les colonnes, mais l'interface semblera un peu étrange ; ne vous inquiétez pas, dans la section suivante, vous ajouterez des styles CSS à l'interface pour la rendre plus belle.

### Tâche

Sur votre ordinateur, créez un dossier appelé « terrarium » et à l'intérieur, un fichier appelé « index.html ». Vous pouvez le faire dans Visual Studio Code après avoir créé votre dossier terrarium en ouvrant une nouvelle fenêtre VS Code, en cliquant sur « Ouvrir le dossier » et en accédant à votre nouveau dossier. Cliquez sur le petit bouton « fichier » dans le volet Explorateur et créez le nouveau fichier :

![explorateur dans VS Code](images/vs-code-index.png)

Ou

Utilisez ces commandes sur votre git bash :
* `terrarium mkdir`
* "cd terrarium"
* `touche index.html`
* `code index.html` ou `nano index.html`

> les fichiers index.html indiquent à un navigateur qu'il s'agit du fichier par défaut dans un dossier ; Les URL telles que « https://anysite.com/test » peuvent être créées en utilisant une structure de dossiers comprenant un dossier appelé « test » avec « index.html » à l’intérieur ; `index.html` n'a pas à apparaître dans une URL.

---

## Les balises DocType et html

La première ligne d'un fichier HTML est son doctype. Il est un peu surprenant que vous ayez besoin d'avoir cette ligne tout en haut du fichier, mais elle indique aux navigateurs plus anciens que le navigateur doit afficher la page en mode standard, conformément à la spécification HTML actuelle.

> Astuce : dans VS Code, vous pouvez survoler une balise et obtenir des informations sur son utilisation dans les guides de référence MDN.

La deuxième ligne devrait être la balise d'ouverture de la balise `<html>`, suivie maintenant de sa balise de fermeture `</html>`. Ces balises sont les éléments racines de votre interface.

### Tâche

Ajoutez ces lignes en haut de votre fichier `index.html` :

```HTML
<!DOCTYPE html>
<html></html>
```

✅ Il existe quelques modes différents qui peuvent être déterminés en définissant le DocType avec une chaîne de requête : [Quirks Mode et Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Ces modes supportaient de très vieux navigateurs qui ne sont normalement plus utilisés de nos jours (Netscape Navigator 4 et Internet Explorer 5). Vous pouvez vous en tenir à la déclaration doctype standard.

---

## La « tête » du document

La zone « tête » du document HTML comprend des informations cruciales sur votre page Web, également appelées [métadonnées] (https://developer.mozilla.org/docs/Web/HTML/Element/méta). Dans notre cas, nous indiquons au serveur Web auquel cette page sera envoyée pour être rendue, ces quatre choses :

- le titre de la page
- les métadonnées de la page comprenant :
    - le "jeu de caractères", indiquant quel encodage de caractères est utilisé dans la page
    - informations sur le navigateur, y compris « x-ua-compatible » qui indique que le navigateur IE=edge est pris en charge
    - des informations sur la façon dont la fenêtre doit se comporter lorsqu'elle est chargée. La définition de la fenêtre pour avoir une échelle initiale de 1 contrôle le niveau de zoom lorsque la page est chargée pour la première fois.

### Tâche

Ajoutez un bloc "diriger" à votre document entre les balises d'ouverture et de fermeture "<html>".

```html
<diriger>
    <title>Bienvenue dans mon terrarium virtuel</title>
    <méta charset="utf-8" />
    <méta http-equiv="X-UA-Compatible" content="IE=edge" />
    <méta name="viewport" content="width=device-width, initial-scale=1" />
</diriger>
```

✅ Que se passerait-il si vous définissiez une balise méta viewport comme celle-ci : `<méta name="viewport" content="width=600">` ? En savoir plus sur la [fenêtre](https://developer.mozilla.org/docs/Mozilla/Mobile/Viewport_méta_étiqueter).

---

## Le `corps` du document

### Balises HTML

En HTML, vous ajoutez des balises à votre fichier .html pour créer des éléments d'une page Web. Chaque balise a généralement une balise d'ouverture et de fermeture, comme celle-ci : `<p>bonjour</p>` pour indiquer un paragraphe. Créez le corps de votre interface en ajoutant un ensemble de balises `<corps>` à l'intérieur de la paire de balises `<html>` ; votre balisage ressemble maintenant à ceci :

### Tâche

```html
<!DOCTYPE html>
<html>
    <tête>
        <title>Bienvenue dans mon terrarium virtuel</title>
        <méta charset="utf-8" />
        <méta http-equiv="X-UA-Compatible" content="IE=edge" />
        <méta name="viewport" content="width=device-width, initial-scale=1" />
    </diriger>
    <corps></corps>
</html>
```

Maintenant, vous pouvez commencer à créer votre page. Normalement, vous utilisez les balises `<div>` pour créer les éléments séparés dans une page. Nous allons créer une série d'éléments `<div>` qui contiendront des images.

### Images

Une balise html qui n'a pas besoin de balise de fermeture est la balise `<img>`, car elle a un élément `src` qui contient toutes les informations dont la page a besoin pour rendre l'élément.

Créez un dossier dans votre application appelé « images » et ajoutez-y toutes les images dans le [dossier du code source](../solution/images); (il y a 14 images de plantees).

### Tâche

Ajoutez ces images de plantees dans deux colonnes entre les balises `<corps></corps>` Mots clés :

```html
<div id="page">
	<div id="left-container" classer="container">
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante1" src="./images/plante1.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante2" src="./images/plante2.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante3" src="./images/plante3.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante4" src="./images/plante4.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante5" src="./images/plante5.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante6" src="./images/plante6.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante7" src="./images/plante7.png" />
		</div>
	</div>
	<div id="right-container" classer="container">
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante8" src="./images/plante8.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante9" src="./images/plante9.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante10" src="./images/plante10.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante11" src="./images/plante11.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante12" src="./images/plante12.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante13" src="./images/plante13.png" />
		</div>
		<div classer="plante-holder">
			<img classer="plante" alt="plante" id="plante14" src="./images/plante14.png" />
		</div>
	</div>
</div>
```

> Remarque : Spans vs. Divs. Les divs sont considérés comme des éléments « bloquants » et les étendues sont « en ligne ». Que se passerait-il si vous transformiez ces divs en spans ?

Avec ce balisage, les plantees apparaissent maintenant à l'écran. Cela semble assez mauvais, car ils ne sont pas encore stylisés à l'aide de CSS, et nous le ferons dans la prochaine leçon.

Chaque image a un texte alternatif qui apparaîtra même si vous ne pouvez pas voir ou rendre une image. Il s'agit d'un attribut important à inclure pour l'accessibilité. En savoir plus sur l'accessibilité dans les prochaines leçons ; pour l'instant, rappelez-vous que l'attribut alt fournit des informations alternatives pour une image si un utilisateur pour une raison quelconque ne peut pas la visualiser (en raison d'une connexion lente, d'une erreur dans l'attribut src ou si l'utilisateur utilise un lecteur d'écran).

Avez-vous remarqué que chaque image a la même balise alt ? Est-ce une bonne pratique ? Pourquoi ou pourquoi pas? Pouvez-vous améliorer ce code ?

---

## Balisage sémantique

En général, il est préférable d'utiliser une 'sémantique' significative lors de l'écriture HTML. Qu'est-ce que ça veut dire? Cela signifie que vous utilisez des balises HTML pour représenter le type de données ou d'interaction pour lesquelles elles ont été conçues. Par exemple, le texte du titre principal d'une page doit utiliser une balise `<h1>` étiqueter.

Ajoutez la ligne suivante juste en dessous de votre balise d'ouverture `<corps>` étiqueter:

```html
<h1>Mon Terrarium</h1>
```

L'utilisation d'un balisage sémantique tel que le fait que les en-têtes soient `<h1>` et que les listes non ordonnées soient rendues comme `<ul>` aide les lecteurs d'écran à naviguer dans une page. En général, les boutons devraient être écrits comme `<bouton>` et les listes devraient être `<li>`. Bien qu'il soit _possible_ d'utiliser des éléments `<span>` spécialement stylisés avec des gestionnaires de clics pour simuler des boutons, il est préférable pour les utilisateurs handicapés d'utiliser des technologies pour déterminer où sur une page se trouve un bouton, et pour interagir avec lui, si l'élément apparaît comme un bouton. Pour cette raison, essayez d'utiliser autant que possible le balisage sémantique.

✅ Jetez un œil à un lecteur d'écran et [comment il interagit avec une page Web](https://www.youtube.com/watch?v=OUDV1gqs9GA). Pouvez-vous voir pourquoi un balisage non sémantique peut frustrer l'utilisateur ?

## Le terrarium

La dernière partie de cette interface consiste à créer un balisage qui sera stylisé pour créer un terrarium.

### Tâche:

Ajoutez ce balisage au-dessus de la dernière balise `</div>` étiqueter:

```html
<div id="terrarium">
	<div classer="jar-top"></div>
	<div classer="jar-walls">
		<div classer="jar-glossy-long"></div>
		<div classer="jar-glossy-short"></div>
	</div>
	<div classer="dirt"></div>
	<div classer="jar-bottom"></div>
</div>
```

✅ Même si vous avez ajouté ce balisage à l'écran, vous ne voyez absolument rien s'afficher. Pourquoi?

---

## 🚀Défi

Il existe des balises "anciennes" sauvages en HTML avec lesquelles il est toujours amusant de jouer, bien que vous ne devriez pas utiliser de balises obsolètes telles que [ces balises] (https://developer.mozilla.org/docs/Web/HTML/Element #Obsolete_and_deprecated_elements) dans votre balisage. Néanmoins, pouvez-vous utiliser l'ancienne balise `<marquee>` pour faire défiler le titre h1 horizontalement ? (si vous le faites, n'oubliez pas de l'enlever après)

## Quiz post-conférence

[Quizz post-conférence](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/16)

## Révision et auto-apprentissage

HTML est le système de blocs de construction « éprouvé et vrai » qui a contribué à faire du Web ce qu'il est aujourd'hui. Apprenez-en un peu sur son histoire en étudiant quelques anciennes et nouvelles balises. Pouvez-vous comprendre pourquoi certaines balises ont été dépréciées et d'autres ajoutées ? Quelles balises pourraient être introduites à l'avenir ?

En savoir plus sur la création de sites pour le Web et les appareils mobiles sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-13441-cxa).


## Mission

[Pratiquez votre HTML : créez une maquette de blog](assignment.md)