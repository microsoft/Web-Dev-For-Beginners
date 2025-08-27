<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-26T22:06:07+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel Del 1: Introduktion

![video](../../../../6-space-game/images/pewpew.gif)

## Quiz före föreläsning

[Quiz före föreläsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Arv och komposition inom spelutveckling

I tidigare lektioner behövde du inte tänka så mycket på designarkitekturen för de appar du byggde, eftersom projekten var väldigt små. Men när dina applikationer växer i storlek och omfattning blir arkitektoniska beslut en större fråga. Det finns två huvudsakliga tillvägagångssätt för att skapa större applikationer i JavaScript: *komposition* eller *arv*. Båda har sina för- och nackdelar, men låt oss förklara dem inom kontexten av ett spel.

✅ En av de mest kända programmeringsböckerna någonsin handlar om [designmönster](https://en.wikipedia.org/wiki/Design_Patterns).

I ett spel har du `spelobjekt`, vilket är objekt som existerar på en skärm. Detta innebär att de har en plats i ett kartesiskt koordinatsystem, kännetecknat av att ha en `x`- och `y`-koordinat. När du utvecklar ett spel kommer du att märka att alla dina spelobjekt har en standardegenskap, gemensam för varje spel du skapar, nämligen element som är:

- **platsbaserade** De flesta, om inte alla, spelelement är platsbaserade. Detta innebär att de har en plats, en `x` och `y`.
- **rörliga** Dessa är objekt som kan flytta till en ny plats. Det är vanligtvis en hjälte, ett monster eller en NPC (en icke-spelbar karaktär), men inte till exempel ett statiskt objekt som ett träd.
- **självförstörande** Dessa objekt existerar bara under en viss tidsperiod innan de förbereder sig för att tas bort. Vanligtvis representeras detta av en `död` eller `förstörd` boolean som signalerar till spelmotorn att detta objekt inte längre ska renderas.
- **nedkylningsperiod** 'Nedkylningsperiod' är en typisk egenskap hos kortlivade objekt. Ett typiskt exempel är en textbit eller en grafisk effekt som en explosion som bara ska synas under några millisekunder.

✅ Tänk på ett spel som Pac-Man. Kan du identifiera de fyra objekttyperna som nämns ovan i detta spel?

### Att uttrycka beteende

Allt vi beskrev ovan är beteenden som spelobjekt kan ha. Så hur kodar vi dessa? Vi kan uttrycka detta beteende som metoder kopplade till antingen klasser eller objekt.

**Klasser**

Idén är att använda `klasser` i kombination med `arv` för att lägga till ett visst beteende till en klass.

✅ Arv är ett viktigt koncept att förstå. Läs mer i [MDN:s artikel om arv](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Uttryckt via kod kan ett spelobjekt typiskt se ut så här:

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

✅ Ta några minuter och föreställ dig en Pac-Man-hjälte (Inky, Pinky eller Blinky, till exempel) och hur den skulle skrivas i JavaScript.

**Komposition**

Ett annat sätt att hantera objektarv är att använda *komposition*. Då uttrycker objekt sitt beteende så här:

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

**Vilket mönster ska jag använda?**

Det är upp till dig vilket mönster du väljer. JavaScript stödjer båda dessa paradigmer.

--

Ett annat mönster som är vanligt inom spelutveckling hanterar problemet med att hantera spelets användarupplevelse och prestanda.

## Pub/sub-mönster

✅ Pub/Sub står för 'publish-subscribe'

Detta mönster hanterar idén att de olika delarna av din applikation inte ska känna till varandra. Varför är det så? Det gör det mycket enklare att förstå vad som händer i allmänhet om olika delar är separerade. Det gör det också enklare att plötsligt ändra beteende om det behövs. Hur uppnår vi detta? Vi gör det genom att etablera några koncept:

- **meddelande**: Ett meddelande är vanligtvis en textsträng åtföljd av en valfri nyttolast (en bit data som förtydligar vad meddelandet handlar om). Ett typiskt meddelande i ett spel kan vara `KEY_PRESSED_ENTER`.
- **utgivare**: Detta element *publicerar* ett meddelande och skickar det till alla prenumeranter.
- **prenumerant**: Detta element *lyssnar* på specifika meddelanden och utför en uppgift som resultat av att ha mottagit detta meddelande, som att skjuta en laser.

Implementationen är ganska liten i storlek men det är ett mycket kraftfullt mönster. Så här kan det implementeras:

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

För att använda koden ovan kan vi skapa en mycket liten implementation:

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

Ovan kopplar vi en tangentbordshändelse, `ArrowLeft`, och skickar meddelandet `HERO_MOVE_LEFT`. Vi lyssnar på det meddelandet och flyttar `hero` som ett resultat. Styrkan med detta mönster är att händelselyssnaren och hjälten inte känner till varandra. Du kan mappa om `ArrowLeft` till `A`-tangenten. Dessutom skulle det vara möjligt att göra något helt annat på `ArrowLeft` genom att göra några ändringar i eventEmitter's `on`-funktion:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

När saker blir mer komplicerade när ditt spel växer, förblir detta mönster lika enkelt och din kod förblir ren. Det rekommenderas verkligen att anta detta mönster.

---

## 🚀 Utmaning

Fundera på hur pub-sub-mönstret kan förbättra ett spel. Vilka delar bör skicka ut händelser, och hur ska spelet reagera på dem? Nu har du chansen att vara kreativ och tänka ut ett nytt spel och hur dess delar kan bete sig.

## Quiz efter föreläsning

[Quiz efter föreläsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Granskning & Självstudier

Lär dig mer om Pub/Sub genom att [läsa om det](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Uppgift

[Skissa upp ett spel](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.