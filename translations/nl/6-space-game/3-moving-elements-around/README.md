<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-23T01:03:53+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 3: Beweging Toevoegen

Denk eens aan je favoriete games – wat ze boeiend maakt, is niet alleen de mooie graphics, maar ook hoe alles beweegt en reageert op jouw acties. Op dit moment is je ruimtespel als een prachtig schilderij, maar we gaan beweging toevoegen om het tot leven te brengen.

Toen de ingenieurs van NASA de besturingscomputer voor de Apollo-missies programmeerden, stonden ze voor een vergelijkbare uitdaging: hoe zorg je ervoor dat een ruimtevaartuig reageert op de input van de piloot terwijl het automatisch koerscorrecties uitvoert? De principes die we vandaag leren, weerspiegelen dezelfde concepten – het beheren van door spelers gecontroleerde bewegingen naast automatische systeemgedragingen.

In deze les leer je hoe je ruimteschepen soepel over het scherm laat glijden, laat reageren op spelerscommando's en vloeiende bewegingspatronen creëert. We breken alles op in beheersbare concepten die logisch op elkaar voortbouwen.

Aan het einde van deze les kunnen spelers hun heldenschip over het scherm vliegen terwijl vijandelijke schepen boven hun hoofd patrouilleren. Nog belangrijker is dat je de kernprincipes begrijpt die bewegingssystemen in games aandrijven.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

## Beweging in Games Begrijpen

Games komen tot leven wanneer dingen beginnen te bewegen, en er zijn fundamenteel twee manieren waarop dit gebeurt:

- **Door spelers gecontroleerde beweging**: Wanneer je een toets indrukt of met je muis klikt, beweegt er iets. Dit is de directe verbinding tussen jou en de spelwereld.
- **Automatische beweging**: Wanneer het spel zelf besluit dingen te bewegen – zoals die vijandelijke schepen die over het scherm moeten patrouilleren, ongeacht wat jij doet.

Objecten op een computerscherm laten bewegen is eenvoudiger dan je denkt. Weet je nog die x- en y-coördinaten uit de wiskundeles? Dat is precies waar we hier mee werken. Toen Galileo in 1610 de manen van Jupiter observeerde, deed hij in wezen hetzelfde – posities in de tijd plotten om bewegingspatronen te begrijpen.

Dingen op het scherm laten bewegen is als het maken van een flipboekanimatie – je moet deze drie eenvoudige stappen volgen:

1. **Update de positie** – Verander waar je object moet zijn (bijvoorbeeld 5 pixels naar rechts bewegen)
2. **Wis het oude frame** – Maak het scherm schoon zodat je geen spookachtige sporen ziet
3. **Teken het nieuwe frame** – Plaats je object op zijn nieuwe plek

Doe dit snel genoeg, en voilà! Je hebt een vloeiende beweging die natuurlijk aanvoelt voor spelers.

Zo kan het eruitzien in code:

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Wat deze code doet:**
- **Update** de x-coördinaat van de held met 5 pixels om horizontaal te bewegen
- **Wist** het hele canvasgebied om het vorige frame te verwijderen
- **Vult** het canvas met een zwarte achtergrondkleur
- **Tekent** de heldafbeelding op zijn nieuwe positie

✅ Kun je bedenken waarom het herhaaldelijk opnieuw tekenen van je held meerdere frames per seconde prestatiekosten kan veroorzaken? Lees meer over [alternatieven voor dit patroon](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Keyboard Events Afhandelen

Hier verbinden we de input van de speler met de actie in het spel. Wanneer iemand op de spatiebalk drukt om een laser af te vuren of op een pijltoets tikt om een asteroïde te ontwijken, moet je spel die input detecteren en erop reageren.

Keyboard events vinden plaats op het niveau van het venster, wat betekent dat je hele browservenster luistert naar die toetsaanslagen. Muisclicks daarentegen kunnen worden gekoppeld aan specifieke elementen (zoals het klikken op een knop). Voor ons ruimtespel richten we ons op toetsenbordbediening, omdat dat spelers dat klassieke arcadegevoel geeft.

Dit doet me denken aan hoe telegraafoperators in de 19e eeuw morsecode moesten vertalen naar betekenisvolle berichten – we doen iets soortgelijks, namelijk toetsaanslagen vertalen naar spelcommando's.

Om een event af te handelen, moet je de `addEventListener()`-methode van het venster gebruiken en deze voorzien van twee invoerparameters. De eerste parameter is de naam van het event, bijvoorbeeld `keyup`. De tweede parameter is de functie die moet worden aangeroepen als gevolg van het plaatsvinden van het event.

Hier is een voorbeeld:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Wat hier gebeurt:**
- **Luistert** naar keyboard events op het hele venster
- **Vangt** het event-object dat informatie bevat over welke toets is ingedrukt
- **Controleert** of de ingedrukte toets overeenkomt met een specifieke toets (in dit geval de pijl omhoog)
- **Voert** code uit wanneer aan de voorwaarde wordt voldaan

Voor toetsenbordevents zijn er twee eigenschappen op het event die je kunt gebruiken om te zien welke toets is ingedrukt:

- `key` - dit is een stringrepresentatie van de ingedrukte toets, bijvoorbeeld `'ArrowUp'`
- `keyCode` - dit is een numerieke representatie, bijvoorbeeld `37`, wat overeenkomt met `ArrowLeft`

✅ Manipulatie van toetsenbordevents is ook buiten gameontwikkeling nuttig. Kun je andere toepassingen bedenken voor deze techniek?

### Speciale toetsen: een waarschuwing!

Sommige toetsen hebben ingebouwde browsergedragingen die je spel kunnen verstoren. Pijltoetsen scrollen de pagina en de spatiebalk springt naar beneden – gedragingen die je niet wilt wanneer iemand probeert zijn ruimteschip te besturen.

We kunnen deze standaardgedragingen voorkomen en onze game de input laten afhandelen. Dit is vergelijkbaar met hoe vroege computerprogrammeurs systeemonderbrekingen moesten overschrijven om aangepaste gedragingen te creëren – wij doen dit op browserniveau. Zo werkt het:

```javascript
const onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

**Wat deze preventiecode doet:**
- **Controleert** op specifieke key codes die ongewenst browsergedrag kunnen veroorzaken
- **Voorkomt** de standaard browseractie voor pijltoetsen en spatiebalk
- **Laat** andere toetsen normaal functioneren
- **Gebruikt** `e.preventDefault()` om het ingebouwde gedrag van de browser te stoppen

## Door het spel geïnduceerde beweging

Laten we nu praten over objecten die bewegen zonder input van de speler. Denk aan vijandelijke schepen die over het scherm cruisen, kogels die in rechte lijnen vliegen, of wolken die op de achtergrond drijven. Deze autonome beweging maakt je spelwereld levendig, zelfs wanneer niemand de besturing aanraakt.

We gebruiken de ingebouwde timers van JavaScript om posities op regelmatige intervallen bij te werken. Dit concept is vergelijkbaar met hoe slingerklokken werken – een regelmatig mechanisme dat consistente, getimede acties triggert. Zo eenvoudig kan het zijn:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Wat deze bewegingscode doet:**
- **Creëert** een timer die elke 100 milliseconden draait
- **Update** de y-coördinaat van de vijand met 10 pixels bij elke cyclus
- **Slaat** het interval-ID op zodat we het later kunnen stoppen indien nodig
- **Beweegt** de vijand automatisch naar beneden op het scherm

## De Game Loop

Hier is het concept dat alles samenbrengt – de game loop. Als je spel een film was, zou de game loop de filmprojector zijn, die frame na frame zo snel laat zien dat alles soepel lijkt te bewegen.

Elk spel heeft een van deze loops die op de achtergrond draait. Het is een functie die alle spelobjecten bijwerkt, het scherm opnieuw tekent en dit proces continu herhaalt. Dit houdt je held, alle vijanden, eventuele rondvliegende lasers – de hele spelstatus – bij.

Dit concept doet me denken aan hoe vroege filmtekenaars zoals Walt Disney personages frame voor frame moesten tekenen om de illusie van beweging te creëren. Wij doen hetzelfde, maar dan met code in plaats van potloden.

Zo kan een game loop er in code uitzien:

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**Begrijpen van de structuur van de game loop:**
- **Wist** het hele canvas om het vorige frame te verwijderen
- **Vult** de achtergrond met een effen kleur
- **Tekent** alle spelobjecten op hun huidige posities
- **Herhaalt** dit proces elke 200 milliseconden om een vloeiende animatie te creëren
- **Beheert** de framerate door de intervaltijd te regelen

## Het Ruimtespel Voortzetten

Nu gaan we beweging toevoegen aan de statische scène die je eerder hebt gebouwd. We gaan het transformeren van een screenshot naar een interactieve ervaring. We werken dit stap voor stap uit om ervoor te zorgen dat elk onderdeel voortbouwt op het vorige.

Pak de code van waar we in de vorige les zijn gebleven (of begin met de code in de [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work) map als je een frisse start nodig hebt).

**Wat we vandaag gaan bouwen:**
- **Heldbesturing**: Pijltoetsen besturen je ruimteschip over het scherm
- **Vijandelijke beweging**: Die buitenaardse schepen beginnen hun aanval

Laten we beginnen met het implementeren van deze functies.

## Aanbevolen stappen

Zoek de bestanden die voor je zijn aangemaakt in de submap `your-work`. Deze zou het volgende moeten bevatten:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Je start je project in de map `your-work` door het volgende in te typen:

```bash
cd your-work
npm start
```

**Wat dit commando doet:**
- **Navigeert** naar je projectmap
- **Start** een HTTP-server op adres `http://localhost:5000`
- **Serveert** je spelbestanden zodat je ze in een browser kunt testen

Het bovenstaande start een HTTP-server op adres `http://localhost:5000`. Open een browser en voer dat adres in; op dit moment zou het de held en alle vijanden moeten weergeven; er beweegt nog niets – maar dat komt nog!

### Code toevoegen

1. **Voeg toegewijde objecten toe** voor `hero`, `enemy` en `game object`, ze moeten `x`- en `y`-eigenschappen hebben. (Denk aan het gedeelte over [Inheritance or composition](../README.md)).

   *TIP* `game object` moet degene zijn met `x` en `y` en de mogelijkheid om zichzelf op een canvas te tekenen.

   > **Tip**: Begin met het toevoegen van een nieuwe `GameObject`-klasse met de constructor zoals hieronder beschreven, en teken deze vervolgens op het canvas:

    ```javascript
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    **Begrijpen van deze basisklasse:**
    - **Definieert** gemeenschappelijke eigenschappen die alle spelobjecten delen (positie, grootte, afbeelding)
    - **Bevat** een `dead`-vlag om bij te houden of het object moet worden verwijderd
    - **Biedt** een `draw()`-methode die het object op het canvas tekent
    - **Stelt** standaardwaarden in voor alle eigenschappen die door onderliggende klassen kunnen worden overschreven

    Breid nu deze `GameObject` uit om de `Hero` en `Enemy` te maken:
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **Belangrijke concepten in deze klassen:**
    - **Erft** van `GameObject` met behulp van het `extends`-sleutelwoord
    - **Roept** de ouderconstructor aan met `super(x, y)`
    - **Stelt** specifieke afmetingen en eigenschappen in voor elk type object
    - **Implementeert** automatische beweging voor vijanden met behulp van `setInterval()`

2. **Voeg key-event handlers toe** om navigatie met toetsen te beheren (beweeg de held omhoog/omlaag links/rechts)

   *ONTHOUD* het is een cartesiaans systeem, linksboven is `0,0`. Vergeet ook niet code toe te voegen om *standaardgedrag* te stoppen.

   > **Tip**: Maak je `onKeyDown`-functie en koppel deze aan het venster:

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
     switch (e.keyCode) {
       case 37:
       case 39:
       case 38:
       case 40: // Arrow keys
       case 32:
         e.preventDefault();
         break; // Space
       default:
         break; // do not block other keys
     }
   };

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **Wat deze event handler doet:**
   - **Luistert** naar keydown-events op het hele venster
   - **Logt** de key code om je te helpen debuggen welke toetsen worden ingedrukt
   - **Voorkomt** standaard browsergedrag voor pijltoetsen en spatiebalk
   - **Laat** andere toetsen normaal functioneren
   
   Controleer op dit punt je browserconsole en kijk hoe de toetsaanslagen worden gelogd. 

3. **Implementeer** het [Pub sub pattern](../README.md), dit houdt je code overzichtelijk terwijl je de resterende onderdelen volgt.

   Het Publish-Subscribe patroon helpt je code te organiseren door eventdetectie te scheiden van eventafhandeling. Dit maakt je code modulairder en gemakkelijker te onderhouden.

   Om dit laatste deel te doen, kun je:

   1. **Voeg een event listener toe** aan het venster:

       ```javascript
       window.addEventListener("keyup", (evt) => {
         if (evt.key === "ArrowUp") {
           eventEmitter.emit(Messages.KEY_EVENT_UP);
         } else if (evt.key === "ArrowDown") {
           eventEmitter.emit(Messages.KEY_EVENT_DOWN);
         } else if (evt.key === "ArrowLeft") {
           eventEmitter.emit(Messages.KEY_EVENT_LEFT);
         } else if (evt.key === "ArrowRight") {
           eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
         }
       });
       ```

   **Wat dit eventsysteem doet:**
   - **Detecteert** toetsenbordinput en zet deze om in aangepaste game-events
   - **Scheidt** inputdetectie van de spel-logica
   - **Maakt** het eenvoudig om later de besturing te wijzigen zonder de gamecode te beïnvloeden
   - **Staat toe** dat meerdere systemen reageren op dezelfde input

   2. **Maak een EventEmitter-klasse** om berichten te publiceren en te abonneren:

       ```javascript
       class EventEmitter {
         constructor() {
           this.listeners = {};
         }
       
         on(message, listener) {
           if (!this.listeners[message]) {
             this.listeners[message] = [];
           }
           this.listeners[message].push(listener);
         }
       
   3. **Voeg constanten toe** en stel de EventEmitter in:

       ```javascript
       const Messages = {
         KEY_EVENT_UP: "KEY_EVENT_UP",
         KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
         KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
         KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
       };
       
       let heroImg, 
           enemyImg, 
           laserImg,
           canvas, ctx, 
           gameObjects = [], 
           hero, 
           eventEmitter = new EventEmitter();
       ```

   **Begrijpen van de setup:**
   - **Definieert** berichtconstanten om typfouten te voorkomen en refactoring eenvoudiger te maken
   - **Declareert** variabelen voor afbeeldingen, canvascontext en spelstatus
   - **Creëert** een globale event emitter voor het pub-sub systeem
   - **Initialiseert** een array om alle spelobjecten te bevatten

   4. **Initialiseer het spel**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **Stel de game loop in**

   Herstructureer de `window.onload`-functie om het spel te initialiseren en een game loop op een goed interval in te stellen. Je voegt ook een laserstraal toe:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **Begrijpen van de game setup:**
   - **Wacht** tot de pagina volledig is geladen voordat het spel start
   - **Haalt** het canvas-element en de 2D-renderingcontext op
   - **Laadt** alle afbeeldingsassets asynchroon met behulp van `await`
   - **Start** de game loop die elke 100 ms draait (10 FPS)
   - **Wist** en tekent het hele scherm opnieuw bij elk frame

5. **Voeg code toe** om vijanden op een bepaald interval te laten bewegen

    Herstructureer de `createEnemies()`-functie om de vijanden te creëren en ze in de nieuwe gameObjects-klasse te plaatsen:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```

    **Wat de vijandcreatie doet:**
    - **Bereken** posities om vijanden in het midden van het scherm te plaatsen
- **Maakt** een raster van vijanden met geneste lussen  
- **Wijst** de vijandafbeelding toe aan elk vijandobject  
- **Voegt** elke vijand toe aan de globale array van game-objecten  

en voeg een `createHero()`-functie toe om een soortgelijk proces voor de held uit te voeren.  

    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```
  
**Wat de held-creatie doet:**  
- **Positioneert** de held onderaan in het midden van het scherm  
- **Wijst** de heldafbeelding toe aan het heldobject  
- **Voegt** de held toe aan de array van game-objecten voor weergave  

en voeg ten slotte een `drawGameObjects()`-functie toe om het tekenen te starten:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Begrijpen van de tekenfunctie:**  
- **Itereert** door alle game-objecten in de array  
- **Roep** de `draw()`-methode aan op elk object  
- **Geeft** de canvascontext door zodat objecten zichzelf kunnen weergeven  

Je vijanden zouden nu moeten beginnen met het aanvallen van je heldenruimteschip!  
}  
}  
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```
  
en voeg ten slotte een `drawGameObjects()`-functie toe om het tekenen te starten:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Je vijanden zouden nu moeten beginnen met het aanvallen van je heldenruimteschip!  

---

## GitHub Copilot Agent Challenge 🚀  

Hier is een uitdaging die de afwerking van je game zal verbeteren: het toevoegen van grenzen en vloeiende besturing. Op dit moment kan je held van het scherm vliegen en voelt de beweging misschien wat schokkerig aan.  

**Jouw missie:** Laat je ruimteschip realistischer aanvoelen door schermgrenzen en vloeiende beweging te implementeren. Dit lijkt op hoe NASA's vluchtcontrolesystemen voorkomen dat ruimtevaartuigen veilige operationele parameters overschrijden.  

**Wat je moet bouwen:** Maak een systeem dat ervoor zorgt dat je heldenruimteschip op het scherm blijft en zorg dat de besturing vloeiend aanvoelt. Wanneer spelers een pijltoets ingedrukt houden, moet het schip soepel glijden in plaats van in discrete stappen te bewegen. Overweeg visuele feedback toe te voegen wanneer het schip de schermgrenzen bereikt – misschien een subtiel effect om de rand van het speelgebied aan te geven.  

Lees meer over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.  

## 🚀 Uitdaging  

Codeorganisatie wordt steeds belangrijker naarmate projecten groeien. Je hebt misschien gemerkt dat je bestand vol raakt met functies, variabelen en klassen die allemaal door elkaar staan. Dit doet me denken aan hoe de ingenieurs die de Apollo-missie organiseerden duidelijke, onderhoudbare systemen moesten creëren waarmee meerdere teams tegelijkertijd konden werken.  

**Jouw missie:**  
Denk als een softwarearchitect. Hoe zou je je code organiseren zodat je (of een teamgenoot) over zes maanden begrijpt wat er gebeurt? Zelfs als alles voorlopig in één bestand blijft, kun je een betere organisatie creëren:  

- **Groeperen van gerelateerde functies** met duidelijke commentaarheaders  
- **Scheiding van verantwoordelijkheden** - houd de gamelogica gescheiden van de weergave  
- **Consistente naamgeving** gebruiken voor variabelen en functies  
- **Modules of namespaces maken** om verschillende aspecten van je game te organiseren  
- **Documentatie toevoegen** die het doel van elk belangrijk onderdeel uitlegt  

**Reflectievragen:**  
- Welke delen van je code zijn het moeilijkst te begrijpen als je er later op terugkomt?  
- Hoe kun je je code organiseren zodat het gemakkelijker is voor iemand anders om bij te dragen?  
- Wat zou er gebeuren als je nieuwe functies zoals power-ups of verschillende vijandtypes wilt toevoegen?  

## Quiz na de les  

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/34)  

## Review & Zelfstudie  

We hebben alles vanaf nul opgebouwd, wat geweldig is om te leren, maar hier is een klein geheim – er zijn enkele geweldige JavaScript-frameworks die veel werk voor je kunnen doen. Zodra je je comfortabel voelt met de basis die we hebben behandeld, is het de moeite waard om [te ontdekken wat er beschikbaar is](https://github.com/collections/javascript-game-engines).  

Denk aan frameworks als een goed gevulde gereedschapskist in plaats van elk gereedschap met de hand te maken. Ze kunnen veel van die uitdagingen met codeorganisatie oplossen en bieden functies die weken zouden kosten om zelf te bouwen.  

**Dingen die de moeite waard zijn om te verkennen:**  
- Hoe game-engines code organiseren – je zult versteld staan van de slimme patronen die ze gebruiken  
- Prestatie-trucs om canvasgames soepel te laten draaien  
- Moderne JavaScript-functies die je code schoner en beter onderhoudbaar maken  
- Verschillende benaderingen om game-objecten en hun relaties te beheren  

## Opdracht  

[Commentaar op je code](assignment.md)  

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.