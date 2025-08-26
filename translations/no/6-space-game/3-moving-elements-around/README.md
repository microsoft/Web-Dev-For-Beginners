<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-26T21:57:44+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "no"
}
-->
# Bygg et Romspill Del 3: Legge til Bevegelse

## Quiz før forelesning

[Quiz før forelesning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Spill er ikke særlig morsomme før du har romvesener som beveger seg rundt på skjermen! I dette spillet skal vi bruke to typer bevegelser:

- **Tastatur-/musbevegelse**: når brukeren interagerer med tastaturet eller musen for å flytte et objekt på skjermen.
- **Spillindusert bevegelse**: når spillet flytter et objekt med et visst tidsintervall.

Så hvordan flytter vi ting på en skjerm? Det handler om kartesiske koordinater: vi endrer plasseringen (x, y) til objektet og tegner skjermen på nytt.

Vanligvis trenger du følgende trinn for å oppnå *bevegelse* på en skjerm:

1. **Sett en ny plassering** for et objekt; dette er nødvendig for å oppfatte at objektet har beveget seg.
2. **Tøm skjermen**, skjermen må tømmes mellom hver tegning. Vi kan tømme den ved å tegne et rektangel fylt med en bakgrunnsfarge.
3. **Tegn objektet på nytt** på den nye plasseringen. Ved å gjøre dette oppnår vi til slutt å flytte objektet fra ett sted til et annet.

Slik kan det se ut i kode:

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

✅ Kan du tenke deg en grunn til at det å tegne helten din på nytt mange ganger per sekund kan føre til ytelseskostnader? Les om [alternativer til dette mønsteret](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Håndtere tastaturevents

Du håndterer events ved å knytte spesifikke events til kode. Tastaturevents utløses på hele vinduet, mens museevents som et `klikk` kan knyttes til å klikke på et spesifikt element. Vi vil bruke tastaturevents gjennom hele dette prosjektet.

For å håndtere en event må du bruke vinduets `addEventListener()`-metode og gi den to inngangsparametere. Den første parameteren er navnet på eventen, for eksempel `keyup`. Den andre parameteren er funksjonen som skal kalles når eventen inntreffer.

Her er et eksempel:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

For tasteevents er det to egenskaper på eventen du kan bruke for å se hvilken tast som ble trykket:

- `key`, dette er en strengrepresentasjon av den trykkede tasten, for eksempel `ArrowUp`.
- `keyCode`, dette er en numerisk representasjon, for eksempel `37`, som tilsvarer `ArrowLeft`.

✅ Manipulering av tasteevents er nyttig utenfor spillutvikling. Hvilke andre bruksområder kan du tenke deg for denne teknikken?

### Spesialtaster: en advarsel

Det finnes noen *spesialtaster* som påvirker vinduet. Det betyr at hvis du lytter til en `keyup`-event og bruker disse spesialtastene for å flytte helten din, vil det også utføre horisontal rulling. Av den grunn kan det være lurt å *slå av* denne innebygde nettleseratferden mens du bygger spillet ditt. Du trenger kode som dette:

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

Koden ovenfor sørger for at piltastene og mellomromstasten får sin *standard* atferd slått av. *Avslåingsmekanismen* skjer når vi kaller `e.preventDefault()`.

## Spillindusert bevegelse

Vi kan få ting til å bevege seg av seg selv ved å bruke tidtakere som funksjonene `setTimeout()` eller `setInterval()` som oppdaterer plasseringen til objektet ved hvert tidsintervall. Slik kan det se ut:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Spillloopen

Spillloopen er et konsept som i hovedsak er en funksjon som kalles med jevne mellomrom. Den kalles spillloopen fordi alt som skal være synlig for brukeren tegnes i loopen. Spillloopen bruker alle spillobjektene som er en del av spillet, og tegner alle, med mindre de av en eller annen grunn ikke lenger skal være en del av spillet. For eksempel, hvis et objekt er en fiende som ble truffet av en laser og eksploderer, er det ikke lenger en del av den nåværende spillloopen (du vil lære mer om dette i senere leksjoner).

Slik kan en spillloop typisk se ut, uttrykt i kode:

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

Loopen ovenfor kalles hvert `200` millisekund for å tegne lerretet på nytt. Du kan velge det intervallet som gir mest mening for spillet ditt.

## Fortsette Romspillet

Du skal ta den eksisterende koden og utvide den. Enten start med koden du fullførte i del I, eller bruk koden i [Del II - startkode](../../../../6-space-game/3-moving-elements-around/your-work).

- **Flytte helten**: Du skal legge til kode for å sørge for at du kan flytte helten ved hjelp av piltastene.
- **Flytte fiender**: Du må også legge til kode for å sørge for at fiendene beveger seg fra topp til bunn med en gitt hastighet.

## Anbefalte trinn

Finn filene som er opprettet for deg i undermappen `your-work`. Den skal inneholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Du starter prosjektet i `your_work`-mappen ved å skrive:

```bash
cd your-work
npm start
```

Kommandoen ovenfor starter en HTTP-server på adressen `http://localhost:5000`. Åpne en nettleser og skriv inn den adressen. Akkurat nå skal den vise helten og alle fiendene; ingenting beveger seg - ennå!

### Legg til kode

1. **Legg til dedikerte objekter** for `hero`, `enemy` og `game object`. De skal ha `x`- og `y`-egenskaper. (Husk delen om [Arv eller komposisjon](../README.md)).

   *TIPS* `game object` bør være det som har `x` og `y` og evnen til å tegne seg selv på et lerret.

   >tips: start med å legge til en ny GameObject-klasse med konstruktøren definert som nedenfor, og tegn den deretter på lerretet:
  
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

    Utvid nå GameObject for å opprette Hero og Enemy.
    
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

2. **Legg til tastaturevent-håndterere** for å håndtere navigasjon med tastene (flytt helten opp/ned, venstre/høyre).

   *HUSK* det er et kartesisk system, øverst til venstre er `0,0`. Husk også å legge til kode for å stoppe *standardatferd*.

   >tips: opprett din egen onKeyDown-funksjon og knytt den til vinduet:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Sjekk nettleserkonsollen på dette tidspunktet, og se tastetrykkene bli logget.

3. **Implementer** [Pub-sub-mønsteret](../README.md), dette vil holde koden din ryddig mens du følger de resterende delene.

   For å gjøre denne siste delen kan du:

   1. **Legge til en event listener** på vinduet:

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

    1. **Opprette en EventEmitter-klasse** for å publisere og abonnere på meldinger:

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

    1. **Legge til konstanter** og sette opp EventEmitter:

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

    1. **Initialisere spillet**

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

1. **Sett opp spillloopen**

   Refaktorer window.onload-funksjonen for å initialisere spillet og sette opp en spillloop med et passende intervall. Du vil også legge til en laserstråle:

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

5. **Legg til kode** for å flytte fiender med et visst intervall.

    Refaktorer `createEnemies()`-funksjonen for å opprette fiendene og legge dem til i den nye gameObjects-klassen:

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
    
    og legg til en `createHero()`-funksjon for å gjøre en lignende prosess for helten.
    
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

    og til slutt, legg til en `drawGameObjects()`-funksjon for å starte tegningen:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Fiendene dine bør begynne å rykke frem mot helteskipet ditt!

---

## 🚀 Utfordring

Som du ser, kan koden din bli til 'spagettikode' når du begynner å legge til funksjoner, variabler og klasser. Hvordan kan du organisere koden din bedre slik at den blir mer lesbar? Skisser et system for å organisere koden din, selv om den fortsatt ligger i én fil.

## Quiz etter forelesning

[Quiz etter forelesning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Gjennomgang og selvstudium

Selv om vi skriver spillet vårt uten å bruke rammeverk, finnes det mange JavaScript-baserte lerretsrammeverk for spillutvikling. Ta deg tid til å [lese om disse](https://github.com/collections/javascript-game-engines).

## Oppgave

[Kommenter koden din](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.