<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-26T21:56:48+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel del 3: Lägga till rörelse

## Förhandsquiz

[Förhandsquiz](https://ff-quizzes.netlify.app/web/quiz/33)

Spel blir inte särskilt roliga förrän du har utomjordingar som rör sig på skärmen! I det här spelet kommer vi att använda två typer av rörelser:

- **Tangentbords-/musrörelse**: när användaren interagerar med tangentbordet eller musen för att flytta ett objekt på skärmen.
- **Spelinducerad rörelse**: när spelet flyttar ett objekt med ett visst tidsintervall.

Så hur flyttar vi saker på en skärm? Det handlar om kartesiska koordinater: vi ändrar objektets position (x,y) och ritar sedan om skärmen.

Vanligtvis behöver du följande steg för att uppnå *rörelse* på en skärm:

1. **Ställ in en ny position** för ett objekt; detta behövs för att uppfatta objektet som att det har flyttat sig.
2. **Rensa skärmen**, skärmen måste rensas mellan varje ritning. Vi kan rensa den genom att rita en rektangel som vi fyller med en bakgrundsfärg.
3. **Rita om objektet** på den nya positionen. Genom att göra detta lyckas vi slutligen flytta objektet från en position till en annan.

Så här kan det se ut i kod:

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

✅ Kan du tänka dig en anledning till varför det kan medföra prestandakostnader att rita om din hjälte många gånger per sekund? Läs om [alternativ till detta mönster](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Hantera tangentbordshändelser

Du hanterar händelser genom att koppla specifika händelser till kod. Tangentbordshändelser triggas på hela fönstret, medan mushändelser som en `click` kan kopplas till att klicka på ett specifikt element. Vi kommer att använda tangentbordshändelser genom hela detta projekt.

För att hantera en händelse behöver du använda fönstrets `addEventListener()`-metod och ge den två inparametrar. Den första parametern är namnet på händelsen, till exempel `keyup`. Den andra parametern är funktionen som ska anropas som ett resultat av att händelsen inträffar.

Här är ett exempel:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

För tangentbordshändelser finns det två egenskaper på händelsen som du kan använda för att se vilken tangent som trycktes:

- `key`, detta är en strängrepresentation av den tryckta tangenten, till exempel `ArrowUp`.
- `keyCode`, detta är en numerisk representation, till exempel `37`, motsvarar `ArrowLeft`.

✅ Manipulation av tangentbordshändelser är användbart utanför spelutveckling. Vilka andra användningsområden kan du tänka dig för denna teknik?

### Specialtangenter: en varning

Det finns vissa *specialtangenter* som påverkar fönstret. Det betyder att om du lyssnar på en `keyup`-händelse och använder dessa specialtangenter för att flytta din hjälte, kommer det också att utföra horisontell scrollning. Av den anledningen kanske du vill *stänga av* detta inbyggda webbläsarbeteende när du bygger ditt spel. Du behöver kod som denna:

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

Koden ovan säkerställer att piltangenterna och mellanslagstangenten har sitt *standardbeteende* avstängt. Mekanismen för att *stänga av* sker när vi anropar `e.preventDefault()`.

## Spelinducerad rörelse

Vi kan få saker att röra sig av sig själva genom att använda timers som funktionerna `setTimeout()` eller `setInterval()` som uppdaterar objektets position vid varje tick, eller tidsintervall. Så här kan det se ut:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Spelloopen

Spelloopen är ett koncept som i grunden är en funktion som anropas med jämna mellanrum. Den kallas spelloopen eftersom allt som ska vara synligt för användaren ritas in i loopen. Spelloopen använder alla spelobjekt som är en del av spelet och ritar dem, såvida de inte av någon anledning inte längre ska vara en del av spelet. Till exempel om ett objekt är en fiende som träffades av en laser och exploderar, är det inte längre en del av den aktuella spelloopen (du kommer att lära dig mer om detta i senare lektioner).

Så här kan en spelloop typiskt se ut, uttryckt i kod:

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

Loopen ovan anropas var `200` millisekund för att rita om canvasen. Du har möjlighet att välja det bästa intervallet som passar för ditt spel.

## Fortsättning på rymdspelet

Du kommer att ta den befintliga koden och bygga vidare på den. Antingen börjar du med koden som du slutförde under del I eller använder koden i [Del II - startkod](../../../../6-space-game/3-moving-elements-around/your-work).

- **Flytta hjälten**: du kommer att lägga till kod för att säkerställa att du kan flytta hjälten med piltangenterna.
- **Flytta fiender**: du kommer också att behöva lägga till kod för att säkerställa att fienderna rör sig från toppen till botten med en viss hastighet.

## Rekommenderade steg

Leta upp filerna som har skapats åt dig i undermappen `your-work`. Den bör innehålla följande:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Du startar ditt projekt i mappen `your_work` genom att skriva:

```bash
cd your-work
npm start
```

Ovanstående kommer att starta en HTTP-server på adressen `http://localhost:5000`. Öppna en webbläsare och ange den adressen, just nu bör den rendera hjälten och alla fiender; ingenting rör sig - än!

### Lägg till kod

1. **Lägg till dedikerade objekt** för `hero`, `enemy` och `game object`, de bör ha egenskaperna `x` och `y`. (Kom ihåg avsnittet om [Arv eller komposition](../README.md)).

   *TIPS* `game object` bör vara det som har `x` och `y` och förmågan att rita sig själv på en canvas.

   >tips: börja med att lägga till en ny GameObject-klass med dess konstruktor definierad som nedan och rita den sedan på canvasen:
  
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

    Nu, utöka denna GameObject för att skapa Hero och Enemy.
    
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

2. **Lägg till tangentbordshändelsehanterare** för att hantera navigering med tangenter (flytta hjälten upp/ner vänster/höger).

   *KOM IHÅG* det är ett kartesiskt system, övre vänstra hörnet är `0,0`. Kom också ihåg att lägga till kod för att stoppa *standardbeteende*.

   >tips: skapa din onKeyDown-funktion och koppla den till fönstret:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Kontrollera din webbläsares konsol vid denna punkt och se hur tangenttryckningarna loggas.

3. **Implementera** [Pub sub-mönstret](../README.md), detta kommer att hålla din kod ren när du följer de återstående delarna.

   För att göra denna sista del kan du:

   1. **Lägg till en händelselyssnare** på fönstret:

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

    1. **Skapa en EventEmitter-klass** för att publicera och prenumerera på meddelanden:

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

    1. **Lägg till konstanter** och sätt upp EventEmitter:

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

    1. **Initiera spelet**

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

1. **Ställ in spelloopen**

   Refaktorisera window.onload-funktionen för att initiera spelet och ställa in en spelloop med ett bra intervall. Du kommer också att lägga till en laserstråle:

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

5. **Lägg till kod** för att flytta fiender med ett visst intervall

    Refaktorisera funktionen `createEnemies()` för att skapa fienderna och lägga till dem i den nya gameObjects-klassen:

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
    
    och lägg till en `createHero()`-funktion för att göra en liknande process för hjälten.
    
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

    och slutligen, lägg till en `drawGameObjects()`-funktion för att starta ritningen:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Dina fiender bör börja avancera mot ditt hjälteskepp!

---

## 🚀 Utmaning

Som du kan se kan din kod bli "spagettikod" när du börjar lägga till funktioner, variabler och klasser. Hur kan du bättre organisera din kod så att den blir mer läsbar? Skissa upp ett system för att organisera din kod, även om den fortfarande ligger i en fil.

## Efterhandsquiz

[Efterhandsquiz](https://ff-quizzes.netlify.app/web/quiz/34)

## Granskning & självstudier

Även om vi skriver vårt spel utan att använda ramverk, finns det många JavaScript-baserade canvasramverk för spelutveckling. Ta lite tid att [läsa om dessa](https://github.com/collections/javascript-game-engines).

## Uppgift

[Kommentera din kod](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.