<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-26T22:06:25+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "da"
}
-->
# Byg et rumspil del 1: Introduktion

![video](../../../../6-space-game/images/pewpew.gif)

## Quiz før forelæsning

[Quiz før forelæsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Arv og komposition i spiludvikling

I tidligere lektioner var der ikke meget behov for at bekymre sig om designarkitekturen i de apps, du byggede, da projekterne var meget små i omfang. Men når dine applikationer vokser i størrelse og omfang, bliver arkitektoniske beslutninger en større bekymring. Der er to hovedtilgange til at skabe større applikationer i JavaScript: *komposition* eller *arv*. Begge har fordele og ulemper, men lad os forklare dem inden for konteksten af et spil.

✅ En af de mest berømte programmeringsbøger nogensinde handler om [designmønstre](https://en.wikipedia.org/wiki/Design_Patterns).

I et spil har du `spilobjekter`, som er objekter, der findes på en skærm. Det betyder, at de har en placering i et kartesisk koordinatsystem, karakteriseret ved at have en `x` og `y` koordinat. Når du udvikler et spil, vil du bemærke, at alle dine spilobjekter har en standardegenskab, fælles for hvert spil, du skaber, nemlig elementer, der er:

- **positionsbaserede** De fleste, hvis ikke alle, spilelementer er positionsbaserede. Det betyder, at de har en placering, en `x` og `y`.
- **bevægelige** Dette er objekter, der kan flytte sig til en ny placering. Typisk er det en helt, et monster eller en NPC (en ikke-spilbar karakter), men ikke for eksempel et statisk objekt som et træ.
- **selvdestruerende** Disse objekter eksisterer kun i en bestemt periode, før de sætter sig selv op til sletning. Normalt er dette repræsenteret af en `dead` eller `destroyed` boolean, der signalerer til spilmotoren, at dette objekt ikke længere skal vises.
- **nedkøling** 'Nedkøling' er en typisk egenskab blandt kortvarige objekter. Et typisk eksempel er et stykke tekst eller en grafisk effekt som en eksplosion, der kun skal ses i nogle få millisekunder.

✅ Tænk på et spil som Pac-Man. Kan du identificere de fire objekttyper, der er nævnt ovenfor, i dette spil?

### Udtryk adfærd

Alt det, vi beskrev ovenfor, er adfærd, som spilobjekter kan have. Så hvordan koder vi dem? Vi kan udtrykke denne adfærd som metoder, der er knyttet til enten klasser eller objekter.

**Klasser**

Ideen er at bruge `klasser` i kombination med `arv` for at tilføje en bestemt adfærd til en klasse.

✅ Arv er et vigtigt koncept at forstå. Læs mere i [MDN's artikel om arv](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Udtrykt via kode kan et spilobjekt typisk se sådan ud:

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

✅ Brug et par minutter på at forestille dig en Pac-Man helt (Inky, Pinky eller Blinky, for eksempel) og hvordan det ville blive skrevet i JavaScript.

**Komposition**

En anden måde at håndtere objektarv på er ved at bruge *komposition*. Her udtrykker objekter deres adfærd som følger:

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

**Hvilket mønster skal jeg bruge?**

Det er op til dig, hvilket mønster du vælger. JavaScript understøtter begge paradigmer.

--

Et andet mønster, der er almindeligt i spiludvikling, adresserer problemet med at håndtere spillets brugeroplevelse og ydeevne.

## Pub/sub-mønster

✅ Pub/Sub står for 'publish-subscribe'

Dette mønster adresserer ideen om, at de forskellige dele af din applikation ikke bør kende til hinanden. Hvorfor er det sådan? Det gør det meget lettere at se, hvad der generelt foregår, hvis de forskellige dele er adskilt. Det gør det også lettere pludselig at ændre adfærd, hvis du har brug for det. Hvordan opnår vi dette? Vi gør det ved at etablere nogle begreber:

- **besked**: En besked er normalt en tekststreng ledsaget af en valgfri payload (et stykke data, der præciserer, hvad beskeden handler om). En typisk besked i et spil kan være `KEY_PRESSED_ENTER`.
- **udgiver**: Dette element *udgiver* en besked og sender den ud til alle abonnenter.
- **abonnent**: Dette element *lytter* til specifikke beskeder og udfører en opgave som resultat af at modtage denne besked, såsom at affyre en laser.

Implementeringen er ret lille i størrelse, men det er et meget kraftfuldt mønster. Her er, hvordan det kan implementeres:

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

For at bruge ovenstående kode kan vi lave en meget lille implementering:

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

Ovenfor forbinder vi en tastaturhændelse, `ArrowLeft`, og sender beskeden `HERO_MOVE_LEFT`. Vi lytter til den besked og flytter `hero` som resultat. Styrken ved dette mønster er, at event listeneren og helten ikke kender til hinanden. Du kan omdanne `ArrowLeft` til `A`-tasten. Derudover ville det være muligt at gøre noget helt andet på `ArrowLeft` ved at lave nogle få ændringer i eventEmitter's `on`-funktion:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Efterhånden som tingene bliver mere komplicerede, når dit spil vokser, forbliver dette mønster det samme i kompleksitet, og din kode forbliver ren. Det anbefales virkelig at adoptere dette mønster.

---

## 🚀 Udfordring

Tænk over, hvordan pub-sub-mønsteret kan forbedre et spil. Hvilke dele bør udsende hændelser, og hvordan bør spillet reagere på dem? Nu har du chancen for at være kreativ og tænke på et nyt spil og hvordan dets dele kunne opføre sig.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Gennemgang & Selvstudie

Lær mere om Pub/Sub ved at [læse om det](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Opgave

[Mock et spil](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.