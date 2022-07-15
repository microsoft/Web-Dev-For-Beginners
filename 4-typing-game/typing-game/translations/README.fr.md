# Créer un jeu à l'aide d'événements

## Quiz préalable

[Quiz préalable](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/21?loc=fr)

## La programmation événementielle

Lors de la création d'une application basée sur un navigateur, nous fournissons une interface utilisateur graphique (GUI) que l'utilisateur peut utiliser lorsqu'il interagit avec ce que nous avons construit. La façon la plus courante d'interagir avec le navigateur consiste à cliquer et à saisir divers éléments. Le défi auquel nous sommes confrontés en tant que développeur est que nous ne savons pas quand ils vont effectuer ces opérations!

[La programmation événementielle](https://en.wikipedia.org/wiki/Event-driven_programming) est le nom du type de programmation que nous devons faire pour créer notre interface graphique. Si nous décomposons un peu cette phrase, nous voyons que le mot clé ici est **événement**. [L'événement](https://www.merriam-webster.com/dictionary/event), selon le Merriam-Webster, est défini comme "quelque chose qui arrive". Cela décrit parfaitement notre situation. Nous savons qu'il va se passer quelque chose pour lequel nous voulons exécuter du code en réponse, mais nous ne savons pas quand cela se produira.

La façon dont nous marquons une section de code que nous voulons exécuter consiste à créer une fonction. Lorsque nous pensons à la [programmation procédurale](https://en.wikipedia.org/wiki/Procedural_programming), les fonctions sont appelées dans un ordre spécifique. La même chose va être vraie avec la programmation événementielle. La différence est **comment** les fonctions seront appelées.

Pour gérer les événements (clic sur un bouton, saisie, etc.), nous enregistrons des **écouteurs d'événements**("event listeners" en anglais). Un écouteur d'événement est une fonction qui attend qu'un événement se produise et s'exécute en réponse. Les écouteurs d'événement peuvent mettre à jour l'interface utilisateur, passer des appels au serveur ou faire tout ce qui doit être fait en réponse à l'action de l'utilisateur. Nous ajoutons un écouteur d'événement en utilisant [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), et en fournissant une fonction à exécuter.

> **REMARQUE:** Il convient de souligner qu'il existe de nombreuses façons de créer des écouteurs d'événement. Vous pouvez utiliser des fonctions anonymes ou en créer des nommées. Vous pouvez utiliser divers raccourcis, comme définir la propriété `click` ou utiliser `addEventListener`. Dans notre exercice, nous allons nous concentrer sur `addEventLister` et les fonctions anonymes, car c'est probablement la technique la plus couramment utilisée par les développeurs Web. C'est aussi le plus flexible, car `addEventListener` fonctionne pour tous les événements et le nom de l'événement peut être fourni en tant que paramètre.

### Les événements courants

Il y a [des dizaines d'événements](https://developer.mozilla.org/docs/Web/Events) que vous pouvez écouter lors de la création d'une application. Fondamentalement, tout ce qu'un utilisateur fait sur une page déclenche un événement, ce qui vous donne beaucoup de pouvoir pour vous assurer qu'il obtient l'expérience que vous désirez. Heureusement, vous n'aurez normalement besoin que d'une petite poignée d'événements. En voici quelques-uns courants (y compris les deux que nous utiliserons lors de la création de notre jeu) :

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): L'utilisateur a cliqué sur quelque chose, généralement un bouton ou un lien hypertexte
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): The user clicked the right mouse button
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): 
L'utilisateur a surligné du texte
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): The user input some text

## Création du jeu

Nous allons créer un jeu pour explorer le fonctionnement des événements en JavaScript. Notre jeu va tester la compétence de frappe d'un joueur, qui est l'une des compétences les plus sous-estimées que tous les développeurs devraient avoir. Nous devrions tous nous entraîner à saisir ! Le déroulement général du jeu ressemblera à ceci :

- Le joueur clique sur le bouton de démarrage et se voit présenter une citation à saisir
- Le joueur tape la citation aussi rapidement qu'il le peut dans une zone de texte
  - Au fur et à mesure que chaque mot est complété, le suivant est mis en évidence
  - Si le joueur a une faute de frappe, la zone de texte est mise à jour en rouge
  - Lorsque le joueur complète la citation, un message de réussite s'affiche avec le temps écoulé

Développons notre jeu et apprenons-en plus sur les événements !

### Structure de fichier

Nous aurons besoin de trois fichiers au total : **index.html**, **script.js** et **style.css**. Commençons par les mettre en place pour nous faciliter un peu la tâche.

- Créez un nouveau dossier pour votre travail en ouvrant une console ou une fenêtre de terminal et en exécutant la commande suivante :

```bash
# Linux ou macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Ouvrez Visual Studio Code

```bash
code .
```

- Ajoutez trois fichiers au dossier dans Visual Studio Code avec les noms suivants:
  - index.html
  - script.js
  - style.css

## Créer l'interface utilisateur

Si nous explorons les exigences, nous savons que nous aurons besoin d'une poignée d'éléments sur notre page HTML. C'est un peu comme une recette, où nous avons besoin de quelques ingrédients :

- Quelque part pour afficher le texte que l'utilisateur doit saisir
- Un endroit pour afficher tous les messages, comme un message de réussite
- Une zone de texte pour la saisie
- Un bouton de démarrage

Chacun de ceux-ci aura besoin d'identifiants afin que nous puissions travailler avec eux dans notre JavaScript. Nous ajouterons également des références aux fichiers CSS et JavaScript que nous allons créer.

Créez un nouveau fichier nommé **index.html**. Ajoutez le code HTML suivant:

```html
<!-- A l'intrieur de index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- Ceci affichera notre citation -->
  <p id="message"></p> <!-- Ceci affichera chaque messages d'état -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- La zone de texte pour la saisie -->
    <button type="button" id="start">Start</button> <!-- Pour commencer le jeu -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Lancer l'application

Il est toujours préférable de développer itérativement pour voir à quoi ressemblent les choses. Lançons notre application. Il existe une merveilleuse extension pour Visual Studio Code appelée [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) qui hébergera votre application localement et actualisera le navigateur chaque fois que vous enregistrez.

- Installez [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en suivant le lien et en cliquant sur **Installer**
  - Vous serez invité par le navigateur à ouvrir Visual Studio Code, puis par Visual Studio Code pour effectuer l'installation
  - Redémarrez Visual Studio Code si vous y êtes invité
- Une fois installé, dans Visual Studio Code, cliquez sur Ctrl-Shift-P (ou Cmd-Shift-P) pour ouvrir la commande pallate
- Tapez **Live Server : Ouvrir avec Live Server**
  - Live Server commencera à héberger votre application
- Ouvrez un navigateur et accédez à **https://localhost:5500**
- Vous devriez maintenant voir la page que vous avez créée !

Ajoutons quelques fonctionnalités.

## Ajouter le CSS

Avec notre HTML créé, ajoutons le CSS pour le style de base. Nous devons mettre en évidence le mot que le joueur doit taper et colorer la zone de texte si ce qu'il a tapé est incorrect. Nous allons le faire avec deux classes.

Créez un nouveau fichier nommé **style.css** et ajoutez la syntaxe suivante.

```css
/* A l'intérieur de style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ En ce qui concerne CSS, vous pouvez mettre en page votre page comme vous le souhaitez. Prenez un peu de temps et rendez la page plus attrayante :

- Choisissez une police différente
- Colorier les en-têtes
- Redimensionner les éléments

## JavaScript

Avec notre interface utilisateur créée, il est temps de concentrer notre attention sur le JavaScript qui fournira la logique. Nous allons décomposer cela en une poignée d'étapes:

- [Créer les constantes](#ajouter-les-constantes)
- [Écouteur d'événement pour démarrer le jeu](#ajouter-une-logique-de-démarrage)
- [Écouteur d'événement de saisie](#ajouter-une-logique-de-frappe)

Mais d'abord, créez un nouveau fichier nommé **script.js**.

### Ajouter les constantes

Nous allons avoir besoin de quelques éléments pour nous faciliter la programmation. Encore une fois, comme pour une recette, voici ce dont nous aurons besoin :

- Tableau avec la liste de toutes les citations
- Tableau vide pour stocker tous les mots de la citation actuelle
- Espace pour stocker l'index du mot que le joueur est en train de taper
- L'heure à laquelle le joueur a cliqué sur démarrer

Nous allons également vouloir des références aux éléments de l'interface utilisateur :

- La zone de texte (**typed-value**)
- L'affichage de la citation (**quote**)
- Le message (**message**)

```javascript
// A l'intérieur de  script.js
// toutes nos citations
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// stocker la liste de mots et l'index du mot que le joueur est en train de taper
let words = [];
let wordIndex = 0;
// l'heure de début
let startTime = Date.now();
// éléments de page
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Allez-y et ajoutez plus de citations à votre jeu

> **REMARQUE:** Nous pouvons récupérer les éléments quand nous le voulons dans le code en utilisant `document.getElementById`. Du fait que nous allons nous référer régulièrement à ces éléments, nous allons éviter les fautes de frappe avec les littéraux de chaîne en utilisant des constantes. Des frameworks tels que [Vue.js](https://vuejs.org/) ou [React](https://reactjs.org/) peuvent vous aider à mieux gérer la centralisation de votre code.

Prenez une minute pour regarder une vidéo sur l'utilisation de `const`, `let` et `var`

[![Types de variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types de variables")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur les variables.

### Ajouter une logique de démarrage

Pour commencer le jeu, le joueur cliquera sur démarrer. Bien sûr, nous ne savons pas quand ils vont cliquer sur Démarrer. C'est là qu'un [écouteur d'événement](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) entre en jeu. Un écouteur d'événement nous permettra d'écouter si quelque chose se produit (un événement) et d'exécuter du code en réponse. Dans notre cas, nous voulons exécuter du code lorsque l'utilisateur clique sur démarrer.

Lorsque l'utilisateur clique sur **démarrer**, nous devons sélectionner un devis, configurer l'interface utilisateur et configurer le suivi pour le mot et la synchronisation actuels. Vous trouverez ci-dessous le JavaScript que vous devrez ajouter ; nous en discutons juste après le bloc de script.

```javascript
// à la fin de script.js
document.getElementById('start').addEventListener('click', () => {
  // obtenir une citation
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Mettre la citation dans un tableau de mots
  words = quote.split(' ');
  // réinitialiser l'index des mots pour le suivi
  wordIndex = 0;

  // Mises à jour de l'interface utilisateur
  // Crée un tableau d'éléments "span" afin que nous puissions définir une classe
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convertir en chaîne et définir comme innerHTML sur l'affichage de la citation
  quoteElement.innerHTML = spanWords.join('');
  // Met en surbrillance le premier mot
  quoteElement.childNodes[0].className = 'highlight';
  // Effacer tous les messages précédents
  messageElement.innerText = '';

  // Configurer la zone de texte
  // Efface la zone de texte
  typedValueElement.value = '';
  // définie le focus
  typedValueElement.focus();
  // définir le gestionnaire d'événements

  // Lancer le chronomètre
  startTime = new Date().getTime();
});
```

Décomposons le code !

- Configurer le suivi des mots
  - L'utilisation de [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) et [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nous permet de sélectionner au hasard une citation dans le tableau `quotes`
  - Nous convertissons la `quote` en un tableau de `words` afin que nous puissions suivre le mot que le joueur est en train de taper
  - `wordIndex` est mis à 0, puisque le lecteur commencera sur le premier mot
- Configurer l'interface utilisateur
  - Créez un tableau de `spanWords`, qui contient chaque mot à l'intérieur d'un élément `span`
    - Cela nous permettra de mettre en évidence le mot sur l'écran
  - Il `join` (rejoins) le tableau pour créer une chaîne que nous pouvons utiliser pour mettre à jour le `innerHTML` sur `quoteElement`
    - Cela affichera la citation au joueur
  - Définissez le `className` du premier élément `span` sur `highlight` pour le mettre en surbrillance en jaune
  - Vider le `messageElement` en définissant `innerText` sur `''`
- Configurer la zone de texte
  - Effacer la `value` actuelle sur `typedValueElement`
  - Définir `focus` sur `typedValueElement`
- Démarrez le chronomètre en appelant `getTime`

### Ajouter une logique de saisie

Au fur et à mesure que le joueur tape, un événement d'`input` sera déclenché. Cet écouteur d'événement vérifiera que le joueur tape correctement le mot et gérera l'état actuel du jeu. De retour à **script.js**, ajoutez le code suivant à la fin. Nous le décomposerons par la suite.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Obtenir le mot actuel
  const currentWord = words[wordIndex];
  // obtenir la valeur actuelle
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // fin de phrase
    // Afficher le succès
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // fin de mot
    // efface le typedValueElement pour le nouveau mot
    typedValueElement.value = '';
    // passer au mot suivant
    wordIndex++;
    // réinitialiser le nom de classe pour tous les éléments entre guillemets
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // mettre en évidence le nouveau mot
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // actuellement correct
    // surligner le mot suivant
    typedValueElement.className = '';
  } else {
    // état d'erreur
    typedValueElement.className = 'error';
  }
});
```

Décomposons le code ! Nous commençons par saisir le mot actuel et la valeur que le joueur a tapée jusqu'à présent. Ensuite, nous avons une logique en cascade, où nous vérifions si la citation est complète, le mot est complet, le mot est correct ou (enfin) s'il y a une erreur.

- La citation est complète, indiquée par `typedValue` étant égal à `currentWord`, et `wordIndex` étant égal à un de moins que la `length` de `words`
  - Calculez `elapsedTime` en soustrayant `startTime` de l'heure actuelle
  - Divisez `elapsedTime` par 1 000 pour convertir des millisecondes en secondes
  - Afficher un message de succès
- Le mot est complet, indiqué par `typedValue` se terminant par un espace (la fin d'un mot) et `typedValue` étant égal à `currentWord`
  - Définissez `value` de `typedElement` sur `''` pour permettre la saisie du mot suivant
  - Incrémentez `wordIndex` pour passer au mot suivant
  - Parcourez tous les `childNodes` de `quoteElement` pour définir `className` à `''` pour revenir à l'affichage par défaut
  - Définissez le `className` du mot actuel sur `highlight` pour le marquer comme le prochain mot à taper
- Le mot est actuellement tapé correctement (mais pas complet), indiqué par `currentWord` commencé par `typedValue`
  - Assurez-vous que `typedValueElement` est affiché par défaut en effaçant `className`
- Si nous sommes arrivés jusqu'ici, nous avons une erreur
  - Définissez `className` de `typedValueElement` à `error`

## Testez votre application

Vous êtes allé jusqu'au bout ! La dernière étape consiste à s'assurer que notre application fonctionne. Essayez la! Ne vous inquiétez pas s'il y a des erreurs ; **tous les développeurs** ont des erreurs. Examinez les messages et déboguez si nécessaire.

Cliquez sur **start** et commencez à taper ! Cela devrait ressembler un peu à l'animation que nous avons vue auparavant.

![Animation du jeu en action](../../../4-typing-game/images/demo.gif)

---

## 🚀 Challenge

Ajouter plus de fonctionnalités

- Désactivez l'écouteur d'événement `input` à la fin et réactivez-le lorsque le bouton est cliqué
- Désactivez la zone de texte lorsque le joueur termine la citation
- Afficher une boîte de dialogue modale avec le message de réussite
- Stockez les meilleurs scores à l'aide de [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/22?loc=fr)

## Révision et étude personnelle

Renseignez-vous sur [tous les événements disponibles](https://developer.mozilla.org/docs/Web/Events) pour le développeur via le navigateur Web et réfléchissez aux scénarios dans lesquels vous utiliseriez chacun.

## Affectation

[Créer un nouveau jeu de clavier](assignment.fr.md)
