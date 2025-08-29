<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T13:44:16+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "fr"
}
-->
# Créer un jeu en utilisant des événements

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/21)

## Programmation orientée événements

Lors de la création d'une application basée sur un navigateur, nous fournissons une interface utilisateur graphique (GUI) pour permettre à l'utilisateur d'interagir avec ce que nous avons construit. La manière la plus courante d'interagir avec le navigateur est de cliquer et de taper dans divers éléments. Le défi auquel nous sommes confrontés en tant que développeur est que nous ne savons pas quand l'utilisateur va effectuer ces opérations !

La [programmation orientée événements](https://fr.wikipedia.org/wiki/Programmation_%C3%A9v%C3%A9nementielle) est le type de programmation que nous devons utiliser pour créer notre GUI. Si nous décomposons cette expression, nous voyons que le mot clé ici est **événement**. Un [événement](https://www.merriam-webster.com/dictionary/event), selon Merriam-Webster, est défini comme "quelque chose qui se produit". Cela décrit parfaitement notre situation. Nous savons que quelque chose va se produire et que nous voulons exécuter du code en réponse, mais nous ne savons pas quand cela aura lieu.

La manière dont nous marquons une section de code à exécuter est en créant une fonction. Lorsque nous pensons à la [programmation procédurale](https://fr.wikipedia.org/wiki/Programmation_proc%C3%A9durale), les fonctions sont appelées dans un ordre spécifique. Cela reste vrai pour la programmation orientée événements. La différence réside dans **comment** les fonctions seront appelées.

Pour gérer les événements (clics sur des boutons, saisie, etc.), nous enregistrons des **écouteurs d'événements**. Un écouteur d'événement est une fonction qui attend qu'un événement se produise et s'exécute en réponse. Les écouteurs d'événements peuvent mettre à jour l'interface utilisateur, effectuer des appels au serveur ou tout autre action nécessaire en réponse à l'action de l'utilisateur. Nous ajoutons un écouteur d'événement en utilisant [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) et en fournissant une fonction à exécuter.

> **NOTE:** Il est important de souligner qu'il existe de nombreuses façons de créer des écouteurs d'événements. Vous pouvez utiliser des fonctions anonymes ou en créer des nommées. Vous pouvez utiliser divers raccourcis, comme définir la propriété `click`, ou utiliser `addEventListener`. Dans notre exercice, nous allons nous concentrer sur `addEventListener` et les fonctions anonymes, car c'est probablement la technique la plus courante utilisée par les développeurs web. C'est également la plus flexible, car `addEventListener` fonctionne pour tous les événements, et le nom de l'événement peut être fourni en tant que paramètre.

### Événements courants

Il existe [des dizaines d'événements](https://developer.mozilla.org/docs/Web/Events) disponibles pour écouter lors de la création d'une application. En gros, tout ce qu'un utilisateur fait sur une page déclenche un événement, ce qui vous donne beaucoup de pouvoir pour garantir qu'il bénéficie de l'expérience que vous souhaitez. Heureusement, vous n'aurez généralement besoin que d'une petite poignée d'événements. Voici quelques-uns des plus courants (y compris les deux que nous utiliserons pour créer notre jeu) :

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event) : L'utilisateur a cliqué sur quelque chose, généralement un bouton ou un lien hypertexte
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event) : L'utilisateur a cliqué avec le bouton droit de la souris
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event) : L'utilisateur a sélectionné du texte
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event) : L'utilisateur a saisi du texte

## Créer le jeu

Nous allons créer un jeu pour explorer le fonctionnement des événements en JavaScript. Notre jeu va tester la vitesse de frappe d'un joueur, une compétence souvent sous-estimée que tous les développeurs devraient maîtriser. Nous devrions tous pratiquer notre frappe ! Le déroulement général du jeu sera le suivant :

- Le joueur clique sur un bouton de démarrage et se voit présenter une citation à taper
- Le joueur tape la citation aussi vite que possible dans une zone de texte
  - À mesure que chaque mot est terminé, le suivant est mis en surbrillance
  - Si le joueur fait une faute de frappe, la zone de texte devient rouge
  - Lorsque le joueur termine la citation, un message de succès s'affiche avec le temps écoulé

Construisons notre jeu et apprenons les événements !

### Structure des fichiers

Nous aurons besoin de trois fichiers au total : **index.html**, **script.js** et **style.css**. Commençons par les configurer pour nous faciliter la tâche.

- Créez un nouveau dossier pour votre travail en ouvrant une console ou une fenêtre de terminal et en exécutant la commande suivante :

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Ouvrez Visual Studio Code

```bash
code .
```

- Ajoutez trois fichiers au dossier dans Visual Studio Code avec les noms suivants :
  - index.html
  - script.js
  - style.css

## Créer l'interface utilisateur

Si nous examinons les exigences, nous savons que nous aurons besoin de quelques éléments sur notre page HTML. C'est un peu comme une recette, où nous avons besoin d'ingrédients :

- Un endroit pour afficher la citation que l'utilisateur doit taper
- Un endroit pour afficher les messages, comme un message de succès
- Une zone de texte pour la saisie
- Un bouton de démarrage

Chacun de ces éléments aura besoin d'IDs pour que nous puissions travailler avec eux dans notre JavaScript. Nous ajouterons également des références aux fichiers CSS et JavaScript que nous allons créer.

Créez un nouveau fichier nommé **index.html**. Ajoutez le HTML suivant :

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Lancer l'application

Il est toujours préférable de développer de manière itérative pour voir à quoi cela ressemble. Lançons notre application. Il existe une extension formidable pour Visual Studio Code appelée [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) qui hébergera votre application localement et actualisera le navigateur chaque fois que vous sauvegardez.

- Installez [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) en suivant le lien et en cliquant sur **Installer**
  - Le navigateur vous invitera à ouvrir Visual Studio Code, puis Visual Studio Code vous invitera à effectuer l'installation
  - Redémarrez Visual Studio Code si nécessaire
- Une fois installé, dans Visual Studio Code, cliquez sur Ctrl-Shift-P (ou Cmd-Shift-P) pour ouvrir la palette de commandes
- Tapez **Live Server: Open with Live Server**
  - Live Server commencera à héberger votre application
- Ouvrez un navigateur et naviguez vers **https://localhost:5500**
- Vous devriez maintenant voir la page que vous avez créée !

Ajoutons un peu de fonctionnalité.

## Ajouter le CSS

Avec notre HTML créé, ajoutons le CSS pour le style de base. Nous devons mettre en surbrillance le mot que le joueur doit taper et colorer la zone de texte si ce qu'il a tapé est incorrect. Nous ferons cela avec deux classes.

Créez un nouveau fichier nommé **style.css** et ajoutez la syntaxe suivante.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ En ce qui concerne le CSS, vous pouvez organiser votre page comme vous le souhaitez. Prenez un peu de temps pour rendre la page plus attrayante :

- Choisissez une police différente
- Ajoutez des couleurs aux en-têtes
- Redimensionnez les éléments

## JavaScript

Avec notre interface utilisateur créée, il est temps de nous concentrer sur le JavaScript qui fournira la logique. Nous allons diviser cela en plusieurs étapes :

- [Créer les constantes](../../../../4-typing-game/typing-game)
- [Écouteur d'événement pour démarrer le jeu](../../../../4-typing-game/typing-game)
- [Écouteur d'événement pour la saisie](../../../../4-typing-game/typing-game)

Mais d'abord, créez un nouveau fichier nommé **script.js**.

### Ajouter les constantes

Nous aurons besoin de quelques éléments pour nous faciliter la programmation. Encore une fois, comme une recette, voici ce dont nous aurons besoin :

- Un tableau contenant la liste de toutes les citations
- Un tableau vide pour stocker tous les mots de la citation actuelle
- Un espace pour stocker l'index du mot que le joueur est en train de taper
- Le moment où le joueur a cliqué sur démarrer

Nous aurons également besoin de références aux éléments de l'interface utilisateur :

- La zone de texte (**typed-value**)
- L'affichage de la citation (**quote**)
- Le message (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Ajoutez plus de citations à votre jeu

> **NOTE:** Nous pouvons récupérer les éléments à tout moment dans le code en utilisant `document.getElementById`. Étant donné que nous allons nous référer régulièrement à ces éléments, nous allons éviter les fautes de frappe avec des littéraux de chaîne en utilisant des constantes. Des frameworks comme [Vue.js](https://vuejs.org/) ou [React](https://reactjs.org/) peuvent vous aider à mieux centraliser votre code.

Prenez une minute pour regarder une vidéo sur l'utilisation de `const`, `let` et `var`.

[![Types de variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types de variables")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur les variables.

### Ajouter la logique de démarrage

Pour commencer le jeu, le joueur cliquera sur démarrer. Bien sûr, nous ne savons pas quand il va cliquer sur démarrer. C'est là qu'un [écouteur d'événement](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) entre en jeu. Un écouteur d'événement nous permettra d'écouter quelque chose qui se produit (un événement) et d'exécuter du code en réponse. Dans notre cas, nous voulons exécuter du code lorsque l'utilisateur clique sur démarrer.

Lorsque l'utilisateur clique sur **démarrer**, nous devons sélectionner une citation, configurer l'interface utilisateur et configurer le suivi du mot actuel et du chronométrage. Voici le JavaScript que vous devez ajouter ; nous le détaillons juste après le bloc de script.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Décomposons le code !

- Configuration du suivi des mots
  - L'utilisation de [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) et [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nous permet de sélectionner aléatoirement une citation dans le tableau `quotes`
  - Nous convertissons la `quote` en un tableau de `words` pour pouvoir suivre le mot que le joueur est en train de taper
  - `wordIndex` est défini sur 0, car le joueur commencera par le premier mot
- Configuration de l'interface utilisateur
  - Créez un tableau de `spanWords`, qui contient chaque mot dans un élément `span`
    - Cela nous permettra de mettre en surbrillance le mot à l'écran
  - Utilisez `join` pour créer une chaîne que nous pouvons utiliser pour mettre à jour le `innerHTML` de `quoteElement`
    - Cela affichera la citation au joueur
  - Définissez la `className` du premier élément `span` sur `highlight` pour le mettre en surbrillance en jaune
  - Nettoyez le `messageElement` en définissant `innerText` sur `''`
- Configuration de la zone de texte
  - Effacez la `value` actuelle de `typedValueElement`
  - Définissez le `focus` sur `typedValueElement`
- Démarrez le chronomètre en appelant `getTime`

### Ajouter la logique de saisie

Lorsque le joueur tape, un événement `input` sera déclenché. Cet écouteur d'événement vérifiera si le joueur tape correctement le mot et gérera l'état actuel du jeu. Retournez dans **script.js** et ajoutez le code suivant à la fin. Nous le détaillerons ensuite.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Décomposons le code ! Nous commençons par récupérer le mot actuel et la valeur que le joueur a tapée jusqu'à présent. Ensuite, nous avons une logique en cascade, où nous vérifions si la citation est terminée, si le mot est terminé, si le mot est correct ou (enfin), s'il y a une erreur.

- La citation est terminée, indiquée par `typedValue` étant égal à `currentWord`, et `wordIndex` étant égal à un de moins que la `length` de `words`
  - Calculez `elapsedTime` en soustrayant `startTime` de l'heure actuelle
  - Divisez `elapsedTime` par 1 000 pour convertir les millisecondes en secondes
  - Affichez un message de succès
- Le mot est terminé, indiqué par `typedValue` se terminant par un espace (la fin d'un mot) et `typedValue` étant égal à `currentWord`
  - Définissez `value` sur `typedElement` sur `''` pour permettre de taper le mot suivant
  - Incrémentez `wordIndex` pour passer au mot suivant
  - Parcourez tous les `childNodes` de `quoteElement` pour définir `className` sur `''` afin de revenir à l'affichage par défaut
  - Définissez `className` du mot actuel sur `highlight` pour le marquer comme le prochain mot à taper
- Le mot est actuellement tapé correctement (mais pas terminé), indiqué par `currentWord` commençant par `typedValue`
  - Assurez-vous que `typedValueElement` est affiché par défaut en effaçant `className`
- Si nous sommes arrivés ici, il y a une erreur
  - Définissez `className` sur `typedValueElement` sur `error`

## Testez votre application

Vous êtes arrivé à la fin ! La dernière étape consiste à vérifier que notre application fonctionne. Essayez-la ! Ne vous inquiétez pas s'il y a des erreurs ; **tous les développeurs** en rencontrent. Examinez les messages et déboguez si nécessaire.

Cliquez sur **démarrer**, et commencez à taper ! Cela devrait ressembler un peu à l'animation que nous avons vue auparavant.

![Animation du jeu en action](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Défi

Ajoutez plus de fonctionnalités

- Désactivez l'écouteur d'événement `input` à la fin du jeu, et réactivez-le lorsque le bouton est cliqué
- Désactivez la zone de texte lorsque le joueur termine la citation
- Affichez une boîte de dialogue modale avec le message de succès
- Stockez les meilleurs scores en utilisant [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/22)

## Révision et auto-apprentissage

Lisez sur [tous les événements disponibles](https://developer.mozilla.org/docs/Web/Events) pour les développeurs via le navigateur web, et réfléchissez aux scénarios dans lesquels vous utiliseriez chacun d'eux.

## Devoir

[Créez un nouveau jeu de clavier](assignment.md)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de faire appel à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.