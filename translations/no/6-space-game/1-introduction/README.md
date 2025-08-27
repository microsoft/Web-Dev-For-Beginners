<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-26T22:06:45+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill Del 1: Introduksjon

![video](../../../../6-space-game/images/pewpew.gif)

## Quiz før forelesning

[Quiz før forelesning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Arv og komposisjon i spillutvikling

I tidligere leksjoner var det ikke stort behov for å bekymre seg for designarkitekturen til appene du bygde, siden prosjektene var veldig små i omfang. Men når applikasjonene dine vokser i størrelse og kompleksitet, blir arkitektoniske avgjørelser viktigere. Det finnes to hovedtilnærminger til å lage større applikasjoner i JavaScript: *komposisjon* eller *arv*. Begge har fordeler og ulemper, men la oss forklare dem i konteksten av et spill.

✅ En av de mest berømte programmeringsbøkene som noensinne er skrevet handler om [designmønstre](https://en.wikipedia.org/wiki/Design_Patterns).

I et spill har du `spillobjekter`, som er objekter som eksisterer på en skjerm. Dette betyr at de har en plassering i et kartesisk koordinatsystem, karakterisert ved å ha en `x`- og `y`-koordinat. Når du utvikler et spill, vil du legge merke til at alle spillobjektene dine har en standardegenskap som er felles for hvert spill du lager, nemlig elementer som er:

- **plassering-basert** De fleste, om ikke alle, spillelementer er plassering-basert. Dette betyr at de har en plassering, en `x` og `y`.
- **bevegelige** Dette er objekter som kan flytte seg til en ny plassering. Typisk er dette en helt, et monster eller en NPC (en ikke-spillbar karakter), men ikke for eksempel et statisk objekt som et tre.
- **selvdestruerende** Disse objektene eksisterer bare i en begrenset periode før de setter seg opp for sletting. Vanligvis representeres dette av en `død` eller `ødelagt` boolsk verdi som signaliserer til spillmotoren at dette objektet ikke lenger skal vises.
- **nedkjøling** 'Nedkjøling' er en typisk egenskap blant kortvarige objekter. Et typisk eksempel er et stykke tekst eller en grafisk effekt som en eksplosjon som bare skal vises i noen få millisekunder.

✅ Tenk på et spill som Pac-Man. Kan du identifisere de fire objekttypene som er nevnt ovenfor i dette spillet?

### Uttrykke oppførsel

Alt vi beskrev ovenfor er oppførsel som spillobjekter kan ha. Så hvordan koder vi dette? Vi kan uttrykke denne oppførselen som metoder knyttet til enten klasser eller objekter.

**Klasser**

Ideen er å bruke `klasser` i kombinasjon med `arv` for å legge til en viss oppførsel til en klasse.

✅ Arv er et viktig konsept å forstå. Lær mer på [MDNs artikkel om arv](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Uttrykt via kode kan et spillobjekt typisk se slik ut:

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

✅ Ta noen minutter til å forestille deg en Pac-Man-helt (Inky, Pinky eller Blinky, for eksempel) og hvordan det ville blitt skrevet i JavaScript.

**Komposisjon**

En annen måte å håndtere objektarv på er ved å bruke *komposisjon*. Da uttrykker objekter sin oppførsel slik:

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

**Hvilket mønster bør jeg bruke?**

Det er opp til deg hvilket mønster du velger. JavaScript støtter begge disse paradigmer.

--

Et annet mønster som er vanlig i spillutvikling, adresserer problemet med å håndtere spillets brukeropplevelse og ytelse.

## Pub/sub-mønster

✅ Pub/Sub står for 'publish-subscribe'

Dette mønsteret adresserer ideen om at de ulike delene av applikasjonen din ikke bør vite om hverandre. Hvorfor det? Det gjør det mye enklere å se hva som skjer generelt hvis ulike deler er separert. Det gjør det også enklere å endre oppførsel plutselig hvis du trenger det. Hvordan oppnår vi dette? Vi gjør det ved å etablere noen konsepter:

- **melding**: En melding er vanligvis en tekststreng ledsaget av en valgfri nyttelast (et stykke data som klargjør hva meldingen handler om). En typisk melding i et spill kan være `KEY_PRESSED_ENTER`.
- **utgiver**: Dette elementet *publiserer* en melding og sender den ut til alle abonnenter.
- **abonnent**: Dette elementet *lytter* til spesifikke meldinger og utfører en oppgave som et resultat av å motta denne meldingen, for eksempel å skyte en laser.

Implementasjonen er ganske liten i størrelse, men det er et veldig kraftig mønster. Slik kan det implementeres:

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

For å bruke koden ovenfor kan vi lage en veldig liten implementasjon:

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

Ovenfor kobler vi en tastaturhendelse, `ArrowLeft`, og sender meldingen `HERO_MOVE_LEFT`. Vi lytter til den meldingen og flytter `hero` som et resultat. Styrken med dette mønsteret er at hendelseslytteren og helten ikke vet om hverandre. Du kan remappe `ArrowLeft` til `A`-tasten. I tillegg vil det være mulig å gjøre noe helt annet på `ArrowLeft` ved å gjøre noen få endringer i eventEmitter's `on`-funksjon:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Etter hvert som ting blir mer komplisert når spillet ditt vokser, forblir dette mønsteret like enkelt, og koden din forblir ryddig. Det anbefales virkelig å ta i bruk dette mønsteret.

---

## 🚀 Utfordring

Tenk på hvordan pub-sub-mønsteret kan forbedre et spill. Hvilke deler bør sende ut hendelser, og hvordan bør spillet reagere på dem? Nå har du sjansen til å være kreativ og tenke på et nytt spill og hvordan dets deler kan oppføre seg.

## Quiz etter forelesning

[Quiz etter forelesning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Gjennomgang og selvstudium

Lær mer om Pub/Sub ved å [lese om det](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Oppgave

[Mock opp et spill](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.