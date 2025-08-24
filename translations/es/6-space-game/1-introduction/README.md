<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-24T12:39:59+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "es"
}
-->
# Construir un Juego Espacial Parte 1: Introducción

![video](../../../../6-space-game/images/pewpew.gif)

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Herencia y Composición en el desarrollo de juegos

En lecciones anteriores, no había mucha necesidad de preocuparse por la arquitectura de diseño de las aplicaciones que construiste, ya que los proyectos eran muy pequeños en alcance. Sin embargo, cuando tus aplicaciones crecen en tamaño y alcance, las decisiones arquitectónicas se vuelven una preocupación mayor. Hay dos enfoques principales para crear aplicaciones más grandes en JavaScript: *composición* o *herencia*. Ambos tienen ventajas y desventajas, pero vamos a explicarlos en el contexto de un juego.

✅ Uno de los libros de programación más famosos jamás escritos tiene que ver con [patrones de diseño](https://en.wikipedia.org/wiki/Design_Patterns).

En un juego tienes `objetos del juego`, que son objetos que existen en una pantalla. Esto significa que tienen una ubicación en un sistema de coordenadas cartesianas, caracterizado por tener una coordenada `x` y `y`. A medida que desarrollas un juego, notarás que todos tus objetos del juego tienen una propiedad estándar, común para cada juego que creas, a saber, elementos que son:

- **basados en ubicación** La mayoría, si no todos, los elementos del juego están basados en ubicación. Esto significa que tienen una ubicación, un `x` y un `y`.
- **móviles** Estos son objetos que pueden moverse a una nueva ubicación. Normalmente son un héroe, un monstruo o un NPC (un personaje no jugador), pero no, por ejemplo, un objeto estático como un árbol.
- **autodestructivos** Estos objetos solo existen por un período de tiempo determinado antes de prepararse para su eliminación. Por lo general, esto se representa mediante un booleano `muerto` o `destruido` que indica al motor del juego que este objeto ya no debe ser renderizado.
- **tiempo de espera** 'Tiempo de espera' es una propiedad típica entre objetos de corta duración. Un ejemplo típico es un texto o efecto gráfico como una explosión que solo debe verse durante unos pocos milisegundos.

✅ Piensa en un juego como Pac-Man. ¿Puedes identificar los cuatro tipos de objetos mencionados anteriormente en este juego?

### Expresando comportamiento

Todo lo que describimos anteriormente son comportamientos que los objetos del juego pueden tener. Entonces, ¿cómo codificamos eso? Podemos expresar este comportamiento como métodos asociados a clases u objetos.

**Clases**

La idea es usar `clases` junto con `herencia` para lograr agregar un cierto comportamiento a una clase.

✅ La herencia es un concepto importante para entender. Aprende más en [el artículo de MDN sobre herencia](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Expresado en código, un objeto del juego típicamente puede verse así:

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

✅ Tómate unos minutos para imaginar un héroe de Pac-Man (Inky, Pinky o Blinky, por ejemplo) y cómo se escribiría en JavaScript.

**Composición**

Una forma diferente de manejar la herencia de objetos es utilizando *Composición*. Entonces, los objetos expresan su comportamiento de esta manera:

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

**¿Qué patrón debería usar?**

Depende de ti qué patrón elijas. JavaScript admite ambos paradigmas.

--

Otro patrón común en el desarrollo de juegos aborda el problema de manejar la experiencia del usuario y el rendimiento del juego.

## Patrón Pub/Sub

✅ Pub/Sub significa 'publicar-suscribirse'

Este patrón aborda la idea de que las partes dispares de tu aplicación no deberían conocerse entre sí. ¿Por qué es eso? Hace que sea mucho más fácil ver lo que está sucediendo en general si varias partes están separadas. También facilita cambiar repentinamente el comportamiento si es necesario. ¿Cómo logramos esto? Lo hacemos estableciendo algunos conceptos:

- **mensaje**: Un mensaje suele ser una cadena de texto acompañada de una carga útil opcional (un dato que aclara de qué trata el mensaje). Un mensaje típico en un juego puede ser `KEY_PRESSED_ENTER`.
- **publicador**: Este elemento *publica* un mensaje y lo envía a todos los suscriptores.
- **suscriptor**: Este elemento *escucha* mensajes específicos y realiza alguna tarea como resultado de recibir este mensaje, como disparar un láser.

La implementación es bastante pequeña en tamaño, pero es un patrón muy poderoso. Aquí está cómo puede implementarse:

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

Para usar el código anterior, podemos crear una implementación muy pequeña:

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

Arriba conectamos un evento de teclado, `ArrowLeft` y enviamos el mensaje `HERO_MOVE_LEFT`. Escuchamos ese mensaje y movemos al `hero` como resultado. La fortaleza de este patrón es que el listener del evento y el héroe no se conocen entre sí. Puedes reasignar la tecla `ArrowLeft` a la tecla `A`. Además, sería posible hacer algo completamente diferente en `ArrowLeft` haciendo algunos cambios en la función `on` del eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

A medida que las cosas se complican cuando tu juego crece, este patrón mantiene la misma complejidad y tu código permanece limpio. Realmente se recomienda adoptar este patrón.

---

## 🚀 Desafío

Piensa en cómo el patrón pub-sub puede mejorar un juego. ¿Qué partes deberían emitir eventos y cómo debería reaccionar el juego ante ellos? Ahora es tu oportunidad de ser creativo, pensando en un nuevo juego y cómo podrían comportarse sus partes.

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Repaso y Estudio Personal

Aprende más sobre Pub/Sub [leyendo sobre ello](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tarea

[Diseña un juego](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.