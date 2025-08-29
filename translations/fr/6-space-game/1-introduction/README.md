<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T13:38:55+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "fr"
}
-->
# Construire un jeu spatial Partie 1 : Introduction

![video](../../../../6-space-game/images/pewpew.gif)

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/29)

### Héritage et composition dans le développement de jeux

Dans les leçons précédentes, il n'était pas nécessaire de se préoccuper de l'architecture des applications que vous avez créées, car les projets étaient de petite envergure. Cependant, lorsque vos applications grandissent en taille et en portée, les décisions architecturales deviennent plus importantes. Il existe deux approches principales pour créer des applications plus grandes en JavaScript : *composition* ou *héritage*. Ces deux approches ont leurs avantages et inconvénients, mais expliquons-les dans le contexte d'un jeu.

✅ L'un des livres les plus célèbres sur la programmation traite des [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

Dans un jeu, vous avez des `objets de jeu`, qui sont des objets présents à l'écran. Cela signifie qu'ils ont une position dans un système de coordonnées cartésiennes, caractérisée par des coordonnées `x` et `y`. En développant un jeu, vous remarquerez que tous vos objets de jeu ont des propriétés standard, communes à chaque jeu que vous créez, notamment des éléments qui sont :

- **basés sur la localisation** La plupart, sinon tous, les éléments de jeu sont basés sur la localisation. Cela signifie qu'ils ont une position, un `x` et un `y`.
- **mobiles** Ce sont des objets qui peuvent se déplacer vers une nouvelle position. Il s'agit généralement d'un héros, d'un monstre ou d'un PNJ (personnage non joueur), mais pas, par exemple, d'un objet statique comme un arbre.
- **auto-destructeurs** Ces objets n'existent que pendant une période définie avant de se préparer à être supprimés. Cela est généralement représenté par un booléen `dead` ou `destroyed` qui indique au moteur de jeu que cet objet ne doit plus être rendu.
- **temps de recharge** Le 'temps de recharge' est une propriété typique des objets de courte durée. Un exemple typique est un morceau de texte ou un effet graphique comme une explosion qui ne doit être visible que pendant quelques millisecondes.

✅ Pensez à un jeu comme Pac-Man. Pouvez-vous identifier les quatre types d'objets mentionnés ci-dessus dans ce jeu ?

### Exprimer des comportements

Tout ce que nous avons décrit ci-dessus représente des comportements que les objets de jeu peuvent avoir. Alors, comment les encoder ? Nous pouvons exprimer ces comportements sous forme de méthodes associées à des classes ou des objets.

**Classes**

L'idée est d'utiliser des `classes` en conjonction avec l'`héritage` pour ajouter un certain comportement à une classe.

✅ L'héritage est un concept important à comprendre. Apprenez-en davantage grâce à [l'article de MDN sur l'héritage](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Exprimé en code, un objet de jeu peut ressembler à ceci :

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Prenez quelques minutes pour imaginer un héros de Pac-Man (Inky, Pinky ou Blinky, par exemple) et comment il serait écrit en JavaScript.

**Composition**

Une autre façon de gérer l'héritage des objets est d'utiliser la *composition*. Les objets expriment alors leur comportement comme ceci :

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Quel modèle devrais-je utiliser ?**

C'est à vous de choisir le modèle que vous préférez. JavaScript prend en charge ces deux paradigmes.

--

Un autre modèle courant dans le développement de jeux traite du problème de gestion de l'expérience utilisateur et des performances du jeu.

## Modèle Pub/Sub

✅ Pub/Sub signifie 'publish-subscribe' (publier-s'abonner)

Ce modèle repose sur l'idée que les différentes parties de votre application ne devraient pas se connaître. Pourquoi cela ? Cela rend beaucoup plus facile de comprendre ce qui se passe en général si les différentes parties sont séparées. Cela permet également de modifier soudainement un comportement si nécessaire. Comment y parvenir ? En établissant certains concepts :

- **message** : Un message est généralement une chaîne de texte accompagnée d'une charge utile optionnelle (un morceau de données qui clarifie le sujet du message). Un message typique dans un jeu peut être `KEY_PRESSED_ENTER`.
- **éditeur** : Cet élément *publie* un message et l'envoie à tous les abonnés.
- **abonné** : Cet élément *écoute* des messages spécifiques et exécute une tâche en réponse à la réception de ce message, comme tirer un laser.

L'implémentation est assez petite en taille mais c'est un modèle très puissant. Voici comment il peut être implémenté :

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Pour utiliser le code ci-dessus, nous pouvons créer une implémentation très simple :

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Dans l'exemple ci-dessus, nous connectons un événement clavier, `ArrowLeft`, et envoyons le message `HERO_MOVE_LEFT`. Nous écoutons ce message et déplaçons le `hero` en conséquence. La force de ce modèle réside dans le fait que l'écouteur d'événements et le héros ne se connaissent pas. Vous pouvez remapper la touche `ArrowLeft` à la touche `A`. De plus, il serait possible de faire quelque chose de complètement différent sur `ArrowLeft` en apportant quelques modifications à la fonction `on` de l'eventEmitter :

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

À mesure que les choses deviennent plus complexes lorsque votre jeu grandit, ce modèle reste constant en termes de complexité et votre code reste propre. Il est fortement recommandé d'adopter ce modèle.

---

## 🚀 Défi

Réfléchissez à la manière dont le modèle pub-sub peut améliorer un jeu. Quelles parties devraient émettre des événements, et comment le jeu devrait-il y réagir ? C'est le moment de faire preuve de créativité en imaginant un nouveau jeu et le comportement de ses différentes parties.

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/30)

## Révision et étude personnelle

Apprenez-en davantage sur le modèle Pub/Sub en [lisant à ce sujet](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Devoir

[Créez une maquette de jeu](assignment.md)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.