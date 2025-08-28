<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-24T12:40:15+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "de"
}
-->
# Baue ein Weltraumspiel Teil 1: Einführung

![video](../../../../6-space-game/images/pewpew.gif)

## Quiz vor der Vorlesung

[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/29)

### Vererbung und Komposition in der Spieleentwicklung

In den vorherigen Lektionen war es nicht notwendig, sich Gedanken über die Architektur der Apps zu machen, da die Projekte sehr klein waren. Wenn jedoch deine Anwendungen größer werden, werden architektonische Entscheidungen immer wichtiger. Es gibt zwei Hauptansätze, um größere Anwendungen in JavaScript zu erstellen: *Komposition* oder *Vererbung*. Beide haben Vor- und Nachteile, aber wir erklären sie im Kontext eines Spiels.

✅ Eines der bekanntesten Programmierbücher aller Zeiten beschäftigt sich mit [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns).

In einem Spiel gibt es `Spielobjekte`, die Objekte sind, die auf einem Bildschirm existieren. Das bedeutet, dass sie eine Position in einem kartesischen Koordinatensystem haben, charakterisiert durch `x`- und `y`-Koordinaten. Während du ein Spiel entwickelst, wirst du feststellen, dass alle deine Spielobjekte eine Standard-Eigenschaft haben, die für jedes Spiel, das du erstellst, gleich ist. Diese Elemente sind:

- **positionsbasiert** Die meisten, wenn nicht alle, Spielelemente sind positionsbasiert. Das bedeutet, dass sie eine Position haben, ein `x` und ein `y`.
- **beweglich** Dies sind Objekte, die sich an eine neue Position bewegen können. Typischerweise handelt es sich um einen Helden, ein Monster oder einen NPC (einen Nicht-Spieler-Charakter), aber nicht z. B. um ein statisches Objekt wie einen Baum.
- **selbstzerstörend** Diese Objekte existieren nur für eine bestimmte Zeit, bevor sie sich selbst zur Löschung vorbereiten. Dies wird normalerweise durch ein `dead`- oder `destroyed`-Boolean dargestellt, das der Spiel-Engine signalisiert, dass dieses Objekt nicht mehr gerendert werden soll.
- **Abklingzeit** 'Abklingzeit' ist eine typische Eigenschaft von kurzlebigen Objekten. Ein typisches Beispiel ist ein Textstück oder ein grafischer Effekt wie eine Explosion, die nur für ein paar Millisekunden sichtbar sein soll.

✅ Denke an ein Spiel wie Pac-Man. Kannst du die vier oben genannten Objekttypen in diesem Spiel identifizieren?

### Verhalten ausdrücken

Alles, was wir oben beschrieben haben, sind Verhaltensweisen, die Spielobjekte haben können. Aber wie kodieren wir diese? Wir können dieses Verhalten als Methoden ausdrücken, die entweder Klassen oder Objekten zugeordnet sind.

**Klassen**

Die Idee ist, `Klassen` in Verbindung mit `Vererbung` zu verwenden, um einer Klasse ein bestimmtes Verhalten hinzuzufügen.

✅ Vererbung ist ein wichtiges Konzept, das es zu verstehen gilt. Erfahre mehr im [MDN-Artikel über Vererbung](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

In Code ausgedrückt, könnte ein Spielobjekt typischerweise so aussehen:

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

✅ Nimm dir ein paar Minuten Zeit, um dir einen Pac-Man-Helden (z. B. Inky, Pinky oder Blinky) vorzustellen und wie er in JavaScript geschrieben werden könnte.

**Komposition**

Ein anderer Ansatz zur Handhabung von Objektvererbung ist die Verwendung von *Komposition*. Dabei drücken Objekte ihr Verhalten so aus:

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

**Welches Muster sollte ich verwenden?**

Es liegt an dir, welches Muster du wählst. JavaScript unterstützt beide Paradigmen.

--

Ein weiteres Muster, das in der Spieleentwicklung häufig vorkommt, befasst sich mit der Benutzererfahrung und der Leistung des Spiels.

## Pub/Sub-Muster

✅ Pub/Sub steht für 'Publish-Subscribe' (Veröffentlichen-Abonnieren)

Dieses Muster behandelt die Idee, dass die verschiedenen Teile deiner Anwendung nichts voneinander wissen sollten. Warum? Es macht es viel einfacher, den Überblick zu behalten, wenn die verschiedenen Teile getrennt sind. Außerdem wird es einfacher, das Verhalten bei Bedarf plötzlich zu ändern. Wie erreichen wir das? Indem wir einige Konzepte einführen:

- **Nachricht**: Eine Nachricht ist normalerweise ein Textstring, begleitet von einer optionalen Nutzlast (ein Datenstück, das klärt, worum es bei der Nachricht geht). Eine typische Nachricht in einem Spiel könnte `KEY_PRESSED_ENTER` sein.
- **Publisher**: Dieses Element *veröffentlicht* eine Nachricht und sendet sie an alle Abonnenten.
- **Subscriber**: Dieses Element *hört* auf bestimmte Nachrichten und führt als Reaktion auf den Empfang dieser Nachricht eine Aufgabe aus, z. B. das Abfeuern eines Lasers.

Die Implementierung ist recht klein, aber es ist ein sehr mächtiges Muster. So kann es implementiert werden:

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

Um den obigen Code zu verwenden, können wir eine sehr kleine Implementierung erstellen:

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

Oben verbinden wir ein Tastaturereignis, `ArrowLeft`, und senden die Nachricht `HERO_MOVE_LEFT`. Wir hören auf diese Nachricht und bewegen den `Helden` als Ergebnis. Die Stärke dieses Musters liegt darin, dass der Event-Listener und der Held nichts voneinander wissen. Du kannst `ArrowLeft` auf die Taste `A` umlegen. Außerdem wäre es möglich, bei `ArrowLeft` etwas völlig anderes zu tun, indem du ein paar Änderungen an der `on`-Funktion des EventEmitters vornimmst:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Wenn dein Spiel wächst und komplexer wird, bleibt dieses Muster gleich in seiner Komplexität und dein Code bleibt sauber. Es wird wirklich empfohlen, dieses Muster zu übernehmen.

---

## 🚀 Herausforderung

Überlege, wie das Pub-Sub-Muster ein Spiel verbessern kann. Welche Teile sollten Ereignisse auslösen, und wie sollte das Spiel darauf reagieren? Jetzt hast du die Chance, kreativ zu werden und dir ein neues Spiel auszudenken, sowie das Verhalten seiner Teile zu planen.

## Quiz nach der Vorlesung

[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/30)

## Rückblick & Selbststudium

Erfahre mehr über Pub/Sub, indem du [darüber liest](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Aufgabe

[Entwirf ein Spiel](assignment.md)

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.