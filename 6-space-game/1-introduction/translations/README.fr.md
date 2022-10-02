# Développez un jeu spatial, partie 1: Introduction

![video](../../images/pewpew.gif)

## Quiz préalable

[Quiz préalable](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29?loc=fr)

### Héritage et composition dans le développement de jeux

ans les leçons précédentes, il n'y avait pas vraiment besoin de s'inquiéter de l'architecture de conception des applications que vous avez créées, car les projets étaient de très petite portée. Cependant, lorsque vos applications augmentent en taille et en étendue, les décisions architecturales deviennent une préoccupation plus importante. Il existe deux approches principales pour créer des applications plus volumineuses en JavaScript: la *composition* ou l'*héritage*. Il y a des avantages et des inconvénients dans les deux cas, mais expliquons-les dans le contexte d'un jeu.

✅ L'un des livres de programmation les plus célèbres jamais écrits concerne les [modèles de conception](https://en.wikipedia.org/wiki/Design_Patterns).

Dans un jeu, vous avez des `game objects` qui sont des objets qui existent sur un écran. Cela signifie qu'ils ont un emplacement sur un système de coordonnées cartésien, caractérisé par une coordonnée `x` et `y`. Au fur et à mesure que vous développez un jeu, vous remarquerez que tous vos objets de jeu ont une propriété standard, commune à chaque jeu que vous créez, à savoir des éléments qui sont:

- **location-based** La plupart des éléments de jeu, sinon tous, sont basés sur l'emplacement. Cela signifie qu'ils ont un emplacement, un `x` et un `y`.
- **movable** Ce sont des objets qui peuvent se déplacer vers un nouvel emplacement. Il s'agit généralement d'un héros, d'un monstre ou d'un PNJ (un personnage non joueur), mais pas par exemple, d'un objet statique comme un arbre.
- **self-destructing** Ces objets n'existent que pendant une période définie avant d'être configurés pour être supprimés. Habituellement, cela est représenté par un booléen `dead` ou `destroyed` qui signale au moteur de jeu que cet objet ne doit plus être rendu.
- **cool-down** 'Cool-down' est une propriété typique parmi les objets à courte durée de vie. Un exemple typique est un morceau de texte ou un effet graphique comme une explosion qui ne devrait être vu que pendant quelques millisecondes.

✅ Pensez à un jeu comme Pac-Man. Pouvez-vous identifier les quatre types d'objets énumérés ci-dessus dans ce jeu?

### Exprimer le comportement

Tout ce que nous avons décrit ci-dessus est le comportement que les objets du jeu peuvent avoir. Alors comment les encoder? Nous pouvons exprimer ce comportement sous forme de méthodes associées à des classes ou à des objets.

**Classes**

L'idée est d'utiliser des `classes` en conjonction avec l'`héritage` pour accomplir l'ajout d'un certain comportement à une classe.

✅ L'héritage est un concept important à comprendre. En savoir plus sur l'[article de MDN sur l'héritage](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Exprimé via du code, un objet de jeu peut généralement ressembler à ceci:

```javascript

//configurer la classe GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//cette classe étendra les propriétés de classe inhérentes à GameObject
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//cet objet mobile peut être déplacé sur l'écran
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//il s'agit d'une classe spécifique qui étend la classe Movable, afin qu'elle puisse profiter de toutes les propriétés dont elle hérite
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//cette classe, en revanche, n'hérite que des propriétés de GameObject
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//un héros peut bouger...
const hero = new Hero();
hero.moveTo(5,5);

//mais un arbre ne le peut pas
const tree = new Tree();
```

✅ Prenez quelques minutes pour réimaginer un héros de Pac-Man (Inky, Pinky ou Blinky, par exemple) et comment il serait écrit en JavaScript.

**Composition**

Une autre manière de gérer l'héritage d'objet consiste à utiliser la *Composition*. Ensuite, les objets expriment leur comportement comme ceci:

```javascript
//créer un constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...et un constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//alors la constante mobileObject est composée du gameObject et des constantes mobiles
const movableObject = {...gameObject, ...movable};

//puis créez une fonction pour créer un nouveau héros qui hérite des propriétés mobileObject
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...et un objet statique qui hérite uniquement des propriétés de gameObject
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//créer le héros et le déplacer
const hero = createHero(10,10);
hero.moveTo(5,5);
//et créer un arbre statique qui ne se trouve que dans les environs
const tree = createStatic(0,0, 'Tree'); 
```

**Quel modèle dois-je utiliser?**

C'est à vous de décider quel modèle vous choisissez. JavaScript prend en charge ces deux paradigmes.

--

Un autre modèle courant dans le développement de jeux aborde le problème de la gestion de l'expérience utilisateur et des performances du jeu.

## Modèle Pub/sub

✅ Pub/Sub signifie  'publish-subscribe' (publier-s'abonner en français)

Ce modèle répond à l'idée que les parties disparates de votre application ne devraient pas se connaître. Pourquoi donc? Il est beaucoup plus facile de voir ce qui se passe en général si différentes parties sont séparées. Cela facilite également le changement soudain de comportement si vous en avez besoin. Comment accomplir cela? Pour ce faire, nous établissons quelques concepts:

- **message**: Un message est généralement une chaîne de texte accompagnée d'une charge utile facultative (une donnée qui clarifie le sujet du message). Un message typique dans un jeu peut être `KEY_PRESSED_ENTER`.
- **publisher**: Cet élément *publie* un message et l'envoie à tous les abonnés.
- **subscriber**: Cet élément *écoute* des messages spécifiques et exécute une tâche à la suite de la réception de ce message, comme tirer un laser.

L'implémentation est assez petite mais c'est un modèle très puissant. Voici comment cela peut être mis en œuvre:

```javascript
//configurer une classe EventEmitter qui contient des écouteurs
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//lorsqu'un message est reçu, laissez l'auditeur gérer sa charge utile
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//lorsqu'un message est envoyé, envoyez-le à un auditeur avec une charge utile
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Pour utiliser le code ci-dessus, nous pouvons créer une très petite implémentation:

```javascript
//mettre en place une structure de message
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoquez l'eventEmitter que vous avez configuré ci-dessus
const eventEmitter = new EventEmitter();
//définissez un héros
const hero = createHero(0,0);
//faites savoir à l'EventEmitter de surveiller les messages concernant le héros qui se déplace vers la gauche et agissez en conséquence
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//configurer la fenêtre pour écouter l'événement keyup, en particulier si la flèche gauche est touchée, émettre un message pour déplacer le héros vers la gauche
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Ci-dessus, nous connectons un événement de clavier, `ArrowLeft` et envoyons le message `HERO_MOVE_LEFT`. Nous écoutons ce message et faisons bouger le `hero` en conséquence. La force de ce modèle est que l'auditeur de l'événement et le héros ne se connaissent pas. Vous pouvez remapper la touche `ArrowLeft` sur la touche `A`. De plus, il serait possible de faire quelque chose de complètement différent sur `ArrowLeft` en apportant quelques modifications à la fonction `on` de l'eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Au fur et à mesure que les choses se compliquent lorsque votre jeu s'étend, ce modèle reste le même en complexité et votre code reste propre. Il est vraiment recommandé d'adopter ce modèle.

---

## 🚀 Challenge

Pensez à la façon dont le modèle pub-sub peut améliorer un jeu. Quelles parties doivent émettre des événements, et comment le jeu doit-il y réagir? C'est maintenant votre chance de faire preuve de créativité, en pensant à un nouveau jeu et à la façon dont ses parties pourraient se comporter.

## Quiz de validation des connaissances

[Quiz de validation des connaissancesz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30?loc=fr)

## Révision et étude personnelle

En savoir plus sur Pub/Sub en [lisant sur ce sujet](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber?WT.mc_id=academic-13441-cxa).

## Affectation

[Conception d'un jeu](assignment.fr.md)
