<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T00:57:21+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 3: Beweging Toevoegen

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/33)

Spellen worden pas echt leuk wanneer er aliens rondrennen op het scherm! In dit spel maken we gebruik van twee soorten bewegingen:

- **Toetsenbord/Muis beweging**: wanneer de gebruiker interactie heeft met het toetsenbord of de muis om een object op het scherm te verplaatsen.
- **Spel-geïnduceerde beweging**: wanneer het spel een object beweegt met een bepaalde tijdsinterval.

Hoe verplaatsen we dingen op een scherm? Het draait allemaal om cartesiaanse coördinaten: we veranderen de locatie (x,y) van het object en tekenen vervolgens het scherm opnieuw.

Meestal heb je de volgende stappen nodig om *beweging* op een scherm te realiseren:

1. **Stel een nieuwe locatie in** voor een object; dit is nodig om het object als verplaatst te ervaren.
2. **Maak het scherm leeg**, het scherm moet tussen de tekeningen worden leeggemaakt. Dit kan door een rechthoek te tekenen die we vullen met een achtergrondkleur.
3. **Teken het object opnieuw** op de nieuwe locatie. Door dit te doen, verplaatsen we het object uiteindelijk van de ene locatie naar de andere.

Hier is hoe dat eruit kan zien in code:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Kun je een reden bedenken waarom het herhaaldelijk tekenen van je held meerdere frames per seconde prestatiekosten kan veroorzaken? Lees meer over [alternatieven voor dit patroon](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Toetsenbordgebeurtenissen afhandelen

Je handelt gebeurtenissen af door specifieke gebeurtenissen aan code te koppelen. Toetsenbordgebeurtenissen worden geactiveerd op het hele venster, terwijl muisgebeurtenissen zoals een `klik` kunnen worden gekoppeld aan het klikken op een specifiek element. We zullen toetsenbordgebeurtenissen gebruiken gedurende dit project.

Om een gebeurtenis af te handelen, moet je de `addEventListener()`-methode van het venster gebruiken en deze voorzien van twee invoerparameters. De eerste parameter is de naam van de gebeurtenis, bijvoorbeeld `keyup`. De tweede parameter is de functie die moet worden aangeroepen als gevolg van de gebeurtenis.

Hier is een voorbeeld:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Voor toetsenbordgebeurtenissen zijn er twee eigenschappen op de gebeurtenis die je kunt gebruiken om te zien welke toets is ingedrukt:

- `key`, dit is een stringrepresentatie van de ingedrukte toets, bijvoorbeeld `ArrowUp`.
- `keyCode`, dit is een numerieke representatie, bijvoorbeeld `37`, wat overeenkomt met `ArrowLeft`.

✅ Manipulatie van toetsenbordgebeurtenissen is nuttig buiten gameontwikkeling. Aan welke andere toepassingen kun je denken voor deze techniek?

### Speciale toetsen: een kanttekening

Er zijn enkele *speciale* toetsen die invloed hebben op het venster. Dat betekent dat als je luistert naar een `keyup`-gebeurtenis en je deze speciale toetsen gebruikt om je held te verplaatsen, het ook horizontaal scrollen zal uitvoeren. Om die reden wil je mogelijk dit ingebouwde browsergedrag *uitschakelen* terwijl je je spel ontwikkelt. Je hebt code zoals deze nodig:

```javascript
let onKeyDown = function (e) {
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

De bovenstaande code zorgt ervoor dat pijltjestoetsen en de spatiebalk hun *standaard* gedrag uitschakelen. Het *uitschakel*-mechanisme treedt in werking wanneer we `e.preventDefault()` aanroepen.

## Spel-geïnduceerde beweging

We kunnen dingen vanzelf laten bewegen door timers te gebruiken zoals de `setTimeout()`- of `setInterval()`-functie die de locatie van het object bijwerkt bij elke tik, of tijdsinterval. Hier is hoe dat eruit kan zien:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## De spel-lus

De spel-lus is een concept dat in wezen een functie is die op regelmatige intervallen wordt aangeroepen. Het wordt de spel-lus genoemd omdat alles wat zichtbaar moet zijn voor de gebruiker in de lus wordt getekend. De spel-lus maakt gebruik van alle spelobjecten die deel uitmaken van het spel en tekent ze allemaal, tenzij ze om een bepaalde reden niet meer deel uitmaken van het spel. Bijvoorbeeld, als een object een vijand is die door een laser is geraakt en explodeert, maakt het geen deel meer uit van de huidige spel-lus (je leert hier meer over in latere lessen).

Hier is hoe een spel-lus er typisch uitziet, uitgedrukt in code:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

De bovenstaande lus wordt elke `200` milliseconden aangeroepen om het canvas opnieuw te tekenen. Je kunt het beste interval kiezen dat logisch is voor jouw spel.

## Verder met het Ruimtespel

Je neemt de bestaande code en breidt deze uit. Begin met de code die je hebt voltooid tijdens deel I of gebruik de code in [Deel II - starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Beweeg de held**: je voegt code toe om ervoor te zorgen dat je de held kunt bewegen met de pijltjestoetsen.
- **Beweeg vijanden**: je moet ook code toevoegen om ervoor te zorgen dat de vijanden van boven naar beneden bewegen met een bepaalde snelheid.

## Aanbevolen stappen

Vind de bestanden die voor je zijn aangemaakt in de submap `your-work`. Het zou het volgende moeten bevatten:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Je start je project in de map `your_work` door het volgende te typen:

```bash
cd your-work
npm start
```

Het bovenstaande start een HTTP-server op het adres `http://localhost:5000`. Open een browser en voer dat adres in, op dit moment zou het de held en alle vijanden moeten weergeven; niets beweegt - nog niet!

### Code toevoegen

1. **Voeg toegewijde objecten toe** voor `hero`, `enemy` en `game object`, ze moeten `x`- en `y`-eigenschappen hebben. (Herinner je het gedeelte over [Erfenis of compositie](../README.md)).

   *TIP* `game object` moet degene zijn met `x` en `y` en de mogelijkheid om zichzelf op een canvas te tekenen.

   >tip: begin met het toevoegen van een nieuwe GameObject-klasse met zijn constructor zoals hieronder aangegeven, en teken het vervolgens op het canvas:
  
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

    Breid nu dit GameObject uit om de Hero en Enemy te maken.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Voeg handlers voor toetsenbordgebeurtenissen toe** om navigatie met toetsen te verwerken (beweeg de held omhoog/omlaag links/rechts).

   *ONTHOUD* het is een cartesiaans systeem, linksboven is `0,0`. Vergeet ook niet code toe te voegen om *standaardgedrag* te stoppen.

   >tip: maak je onKeyDown-functie en koppel deze aan het venster:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Controleer op dit punt je browserconsole en bekijk de toetsaanslagen die worden geregistreerd.

3. **Implementeer** het [Pub sub patroon](../README.md), dit houdt je code schoon terwijl je de resterende delen volgt.

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

    1. **Maak een EventEmitter-klasse** om berichten te publiceren en te abonneren:

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
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Voeg constanten toe** en stel de EventEmitter in:

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

    1. **Initialiseer het spel**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Stel de spel-lus in**

   Refactor de window.onload-functie om het spel te initialiseren en een spel-lus op een goed interval in te stellen. Je voegt ook een laserstraal toe:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Voeg code toe** om vijanden op een bepaald interval te bewegen

    Refactor de `createEnemies()`-functie om de vijanden te maken en ze in de nieuwe gameObjects-klasse te plaatsen:

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
    
    en voeg een `createHero()`-functie toe om een vergelijkbaar proces voor de held uit te voeren.
    
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

    Je vijanden zouden nu je heldenruimteschip moeten beginnen te benaderen!

---

## 🚀 Uitdaging

Zoals je kunt zien, kan je code veranderen in 'spaghetti-code' wanneer je functies, variabelen en klassen begint toe te voegen. Hoe kun je je code beter organiseren zodat deze beter leesbaar is? Schets een systeem om je code te organiseren, zelfs als het nog steeds in één bestand staat.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/34)

## Review & Zelfstudie

Hoewel we ons spel schrijven zonder frameworks, zijn er veel op JavaScript gebaseerde canvas-frameworks voor gameontwikkeling. Neem de tijd om [hierover te lezen](https://github.com/collections/javascript-game-engines).

## Opdracht

[Geef commentaar op je code](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, willen we u erop wijzen dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.