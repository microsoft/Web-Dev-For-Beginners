<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "30f8903a1f290e3d438dc2c70fe60259",
  "translation_date": "2025-08-23T22:29:10+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "fr"
}
-->
# Projet Terrarium Partie 3 : Manipulation du DOM et une Closure

![DOM et une closure](../../../../sketchnotes/webdev101-js.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Conférence

[Quiz pré-conférence](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/19)

### Introduction

Manipuler le DOM, ou "Document Object Model", est un aspect clé du développement web. Selon [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction), "Le Document Object Model (DOM) est la représentation des données des objets qui composent la structure et le contenu d'un document sur le web." Les défis liés à la manipulation du DOM sur le web ont souvent conduit à l'utilisation de frameworks JavaScript plutôt que du JavaScript pur pour gérer le DOM, mais nous allons nous débrouiller seuls !

De plus, cette leçon introduira l'idée d'une [closure JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures), que vous pouvez considérer comme une fonction incluse dans une autre fonction, permettant ainsi à la fonction interne d'accéder au scope de la fonction externe.

> Les closures en JavaScript sont un sujet vaste et complexe. Cette leçon aborde l'idée la plus basique : dans le code de ce terrarium, vous trouverez une closure : une fonction interne et une fonction externe construites de manière à permettre à la fonction interne d'accéder au scope de la fonction externe. Pour beaucoup plus d'informations sur le fonctionnement de cela, veuillez consulter la [documentation détaillée](https://developer.mozilla.org/docs/Web/JavaScript/Closures).

Nous utiliserons une closure pour manipuler le DOM.

Pensez au DOM comme à un arbre, représentant toutes les façons dont un document de page web peut être manipulé. Diverses API (Interfaces de Programmation d'Applications) ont été écrites pour que les programmeurs, utilisant leur langage de programmation préféré, puissent accéder au DOM et le modifier, le changer, le réorganiser et le gérer autrement.

![Représentation de l'arbre DOM](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)

> Une représentation du DOM et du balisage HTML qui y fait référence. De [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

Dans cette leçon, nous terminerons notre projet de terrarium interactif en créant le JavaScript qui permettra à un utilisateur de manipuler les plantes sur la page.

### Prérequis

Vous devriez avoir construit le HTML et le CSS de votre terrarium. À la fin de cette leçon, vous serez capable de déplacer les plantes dans et hors du terrarium en les faisant glisser.

### Tâche

Dans votre dossier terrarium, créez un nouveau fichier appelé `script.js`. Importez ce fichier dans la section `<head>` :

```html
	<script src="./script.js" defer></script>
```

> Note : utilisez `defer` lors de l'importation d'un fichier JavaScript externe dans le fichier HTML afin de permettre au JavaScript de s'exécuter uniquement après que le fichier HTML a été entièrement chargé. Vous pourriez également utiliser l'attribut `async`, qui permet au script de s'exécuter pendant que le fichier HTML est en cours de traitement, mais dans notre cas, il est important que les éléments HTML soient entièrement disponibles pour le glissement avant que nous permettions au script de glissement de s'exécuter.
---

## Les éléments du DOM

La première chose à faire est de créer des références aux éléments que vous souhaitez manipuler dans le DOM. Dans notre cas, ce sont les 14 plantes actuellement en attente dans les barres latérales.

### Tâche

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

Que se passe-t-il ici ? Vous faites référence au document et parcourez son DOM pour trouver un élément avec un Id particulier. Rappelez-vous dans la première leçon sur le HTML que vous avez donné des Ids individuels à chaque image de plante (`id="plant1"`). Maintenant, vous allez utiliser cet effort. Après avoir identifié chaque élément, vous passez cet élément à une fonction appelée `dragElement` que vous allez construire dans un instant. Ainsi, l'élément dans le HTML est maintenant activé pour le glissement, ou le sera bientôt.

✅ Pourquoi fait-on référence aux éléments par Id ? Pourquoi pas par leur classe CSS ? Vous pourriez vous référer à la leçon précédente sur le CSS pour répondre à cette question.

---

## La Closure

Vous êtes maintenant prêt à créer la closure `dragElement`, qui est une fonction externe qui inclut une ou plusieurs fonctions internes (dans notre cas, nous en aurons trois).

Les closures sont utiles lorsque une ou plusieurs fonctions doivent accéder au scope de la fonction externe. Voici un exemple :

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

Dans cet exemple, la fonction `displayCandy` entoure une fonction qui ajoute un nouveau type de bonbon à un tableau qui existe déjà dans la fonction. Si vous exécutez ce code, le tableau `candy` serait indéfini, car il est une variable locale (locale à la closure).

✅ Comment pouvez-vous rendre le tableau `candy` accessible ? Essayez de le déplacer en dehors de la closure. De cette façon, le tableau devient global, plutôt que de rester uniquement disponible dans le scope local de la closure.

### Tâche

Sous les déclarations d'éléments dans `script.js`, créez une fonction :

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement` obtient son objet `terrariumElement` à partir des déclarations en haut du script. Ensuite, vous définissez certaines positions locales à `0` pour l'objet passé à la fonction. Ce sont les variables locales qui seront manipulées pour chaque élément lorsque vous ajoutez la fonctionnalité de glisser-déposer dans la closure à chaque élément. Le terrarium sera peuplé par ces éléments glissés, donc l'application doit garder une trace de leur emplacement.

De plus, l'élément `terrariumElement` qui est passé à cette fonction est assigné à un événement `pointerdown`, qui fait partie des [API web](https://developer.mozilla.org/docs/Web/API) conçues pour aider à la gestion du DOM. `onpointerdown` se déclenche lorsqu'un bouton est pressé, ou dans notre cas, lorsqu'un élément glissable est touché. Ce gestionnaire d'événements fonctionne à la fois sur les [navigateurs web et mobiles](https://caniuse.com/?search=onpointerdown), avec quelques exceptions.

✅ Le [gestionnaire d'événements `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) a beaucoup plus de support inter-navigateurs ; pourquoi ne pas l'utiliser ici ? Réfléchissez au type exact d'interaction écran que vous essayez de créer ici.

---

## La fonction Pointerdrag

L'élément `terrariumElement` est prêt à être déplacé ; lorsque l'événement `onpointerdown` est déclenché, la fonction `pointerDrag` est invoquée. Ajoutez cette fonction juste sous cette ligne : `terrariumElement.onpointerdown = pointerDrag;` :

### Tâche 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

Plusieurs choses se produisent. Tout d'abord, vous empêchez les événements par défaut qui se produisent normalement sur pointerdown en utilisant `e.preventDefault();`. De cette façon, vous avez plus de contrôle sur le comportement de l'interface.

> Revenez à cette ligne lorsque vous aurez complètement construit le fichier script et essayez sans `e.preventDefault()` - que se passe-t-il ?

Ensuite, ouvrez `index.html` dans une fenêtre de navigateur et inspectez l'interface. Lorsque vous cliquez sur une plante, vous pouvez voir comment l'événement 'e' est capturé. Explorez l'événement pour voir combien d'informations sont collectées par un seul événement pointerdown !

Ensuite, notez comment les variables locales `pos3` et `pos4` sont définies sur e.clientX. Vous pouvez trouver les valeurs `e` dans le panneau d'inspection. Ces valeurs capturent les coordonnées x et y de la plante au moment où vous cliquez dessus ou la touchez. Vous aurez besoin d'un contrôle précis sur le comportement des plantes lorsque vous cliquez et les faites glisser, donc vous gardez une trace de leurs coordonnées.

✅ Cela devient-il plus clair pourquoi toute cette application est construite avec une grande closure ? Si ce n'était pas le cas, comment maintiendriez-vous le scope pour chacune des 14 plantes glissables ?

Complétez la fonction initiale en ajoutant deux autres manipulations d'événements pointer sous `pos4 = e.clientY` :

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
Vous indiquez maintenant que vous souhaitez que la plante soit déplacée avec le pointeur lorsque vous le déplacez, et que le geste de glissement s'arrête lorsque vous désélectionnez la plante. `onpointermove` et `onpointerup` font tous partie de la même API que `onpointerdown`. L'interface générera des erreurs maintenant car vous n'avez pas encore défini les fonctions `elementDrag` et `stopElementDrag`, alors construisez-les ensuite.

## Les fonctions elementDrag et stopElementDrag

Vous allez compléter votre closure en ajoutant deux autres fonctions internes qui géreront ce qui se passe lorsque vous faites glisser une plante et arrêtez de la faire glisser. Le comportement souhaité est que vous puissiez déplacer n'importe quelle plante à tout moment et la placer n'importe où sur l'écran. Cette interface est assez flexible (il n'y a pas de zone de dépôt par exemple) pour vous permettre de concevoir votre terrarium exactement comme vous le souhaitez en ajoutant, supprimant et repositionnant des plantes.

### Tâche

Ajoutez la fonction `elementDrag` juste après l'accolade fermante de `pointerDrag` :

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```
Dans cette fonction, vous modifiez beaucoup les positions initiales 1-4 que vous avez définies comme variables locales dans la fonction externe. Que se passe-t-il ici ?

Pendant que vous faites glisser, vous réattribuez `pos1` en le rendant égal à `pos3` (que vous avez défini plus tôt comme `e.clientX`) moins la valeur actuelle de `e.clientX`. Vous effectuez une opération similaire sur `pos2`. Ensuite, vous réinitialisez `pos3` et `pos4` aux nouvelles coordonnées X et Y de l'élément. Vous pouvez observer ces changements dans la console pendant que vous faites glisser. Ensuite, vous modifiez le style CSS de la plante pour définir sa nouvelle position en fonction des nouvelles positions de `pos1` et `pos2`, en calculant les coordonnées X et Y de la plante en haut et à gauche en comparant son décalage avec ces nouvelles positions.

> `offsetTop` et `offsetLeft` sont des propriétés CSS qui définissent la position d'un élément en fonction de celle de son parent ; son parent peut être n'importe quel élément qui n'est pas positionné comme `static`. 

Tous ces recalculs de positionnement vous permettent d'affiner le comportement du terrarium et de ses plantes.

### Tâche 

La tâche finale pour compléter l'interface est d'ajouter la fonction `stopElementDrag` après l'accolade fermante de `elementDrag` :

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

Cette petite fonction réinitialise les événements `onpointerup` et `onpointermove` afin que vous puissiez soit redémarrer le déplacement de votre plante en commençant à la faire glisser à nouveau, soit commencer à déplacer une nouvelle plante.

✅ Que se passe-t-il si vous ne définissez pas ces événements sur null ?

Vous avez maintenant terminé votre projet !

🥇Félicitations ! Vous avez terminé votre magnifique terrarium. ![terrarium terminé](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)

---

## 🚀Défi

Ajoutez un nouveau gestionnaire d'événements à votre closure pour faire quelque chose de plus avec les plantes ; par exemple, double-cliquez sur une plante pour la mettre au premier plan. Soyez créatif !

## Quiz Post-Conférence

[Quiz post-conférence](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/20)

## Révision & Auto-Étude

Bien que déplacer des éléments sur l'écran semble trivial, il existe de nombreuses façons de le faire et de nombreux pièges, selon l'effet que vous recherchez. En fait, il existe une [API de glisser-déposer](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) entière que vous pouvez essayer. Nous ne l'avons pas utilisée dans ce module car l'effet que nous voulions était quelque peu différent, mais essayez cette API sur votre propre projet et voyez ce que vous pouvez accomplir.

Trouvez plus d'informations sur les événements de pointeur dans les [docs W3C](https://www.w3.org/TR/pointerevents1/) et sur les [docs web MDN](https://developer.mozilla.org/docs/Web/API/Pointer_events).

Vérifiez toujours les capacités des navigateurs en utilisant [CanIUse.com](https://caniuse.com/).

## Devoir

[Travaillez un peu plus avec le DOM](assignment.md)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.