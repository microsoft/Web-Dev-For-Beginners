<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-26T21:57:14+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "da"
}
-->
# Byg et rumspil del 3: Tilføj bevægelse

## Quiz før forelæsning

[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/33)

Spil er ikke særlig sjove, før du har rumvæsener, der bevæger sig rundt på skærmen! I dette spil vil vi gøre brug af to typer bevægelser:

- **Tastatur/mus bevægelse**: når brugeren interagerer med tastaturet eller musen for at flytte et objekt på skærmen.
- **Spilinduceret bevægelse**: når spillet flytter et objekt med et bestemt tidsinterval.

Så hvordan flytter vi ting på en skærm? Det handler alt sammen om kartesiske koordinater: vi ændrer objektets placering (x,y) og tegner derefter skærmen igen.

Typisk har du brug for følgende trin for at opnå *bevægelse* på en skærm:

1. **Indstil en ny placering** for et objekt; dette er nødvendigt for at opfatte objektet som flyttet.
2. **Ryd skærmen**, skærmen skal ryddes mellem tegningerne. Vi kan rydde den ved at tegne et rektangel, som vi fylder med en baggrundsfarve.
3. **Tegn objektet igen** på den nye placering. Ved at gøre dette opnår vi endelig at flytte objektet fra en placering til en anden.

Sådan kan det se ud i kode:

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

✅ Kan du komme i tanke om en grund til, at det kan medføre ydeevneomkostninger at tegne din helt mange gange i sekundet? Læs om [alternativer til dette mønster](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Håndtering af tastaturhændelser

Du håndterer hændelser ved at knytte specifikke hændelser til kode. Tastaturhændelser udløses på hele vinduet, mens musehændelser som et `klik` kan forbindes til at klikke på et specifikt element. Vi vil bruge tastaturhændelser gennem hele dette projekt.

For at håndtere en hændelse skal du bruge vinduets `addEventListener()`-metode og give den to inputparametre. Den første parameter er navnet på hændelsen, for eksempel `keyup`. Den anden parameter er den funktion, der skal kaldes som et resultat af, at hændelsen finder sted.

Her er et eksempel:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

For tastaturhændelser er der to egenskaber på hændelsen, du kan bruge til at se, hvilken tast der blev trykket:

- `key`, dette er en strengrepræsentation af den trykkede tast, for eksempel `ArrowUp`.
- `keyCode`, dette er en numerisk repræsentation, for eksempel `37`, som svarer til `ArrowLeft`.

✅ Manipulation af tastaturhændelser er nyttig uden for spiludvikling. Hvilke andre anvendelser kan du komme i tanke om for denne teknik?

### Specialtaster: en advarsel

Der er nogle *specialtaster*, der påvirker vinduet. Det betyder, at hvis du lytter til en `keyup`-hændelse og bruger disse specialtaster til at flytte din helt, vil det også udføre horisontal rulning. Af den grund vil du måske *slå fra* denne indbyggede browseradfærd, mens du bygger dit spil. Du har brug for kode som denne:

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

Koden ovenfor sikrer, at piletasterne og mellemrumstasten får deres *standard* adfærd slået fra. *Deaktiveringsmekanismen* sker, når vi kalder `e.preventDefault()`.

## Spilinduceret bevægelse

Vi kan få ting til at bevæge sig af sig selv ved at bruge timere som `setTimeout()` eller `setInterval()`-funktionen, der opdaterer objektets placering ved hver tik eller tidsinterval. Sådan kan det se ud:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Spil-loopet

Spil-loopet er et koncept, der i bund og grund er en funktion, der kaldes med regelmæssige intervaller. Det kaldes spil-loopet, fordi alt, hvad der skal være synligt for brugeren, tegnes i løbet af loopet. Spil-loopet gør brug af alle spilobjekter, der er en del af spillet, og tegner dem, medmindre de af en eller anden grund ikke længere skal være en del af spillet. For eksempel, hvis et objekt er en fjende, der blev ramt af en laser og eksploderer, er det ikke længere en del af det aktuelle spil-loop (du vil lære mere om dette i de følgende lektioner).

Sådan kan et spil-loop typisk se ud, udtrykt i kode:

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

Loopet ovenfor kaldes hvert `200` millisekund for at tegne lærredet igen. Du har mulighed for at vælge det bedste interval, der giver mening for dit spil.

## Fortsættelse af rumspillet

Du vil tage den eksisterende kode og udvide den. Enten start med den kode, du færdiggjorde under del I, eller brug koden i [Del II - startkode](../../../../6-space-game/3-moving-elements-around/your-work).

- **Flyt helten**: du vil tilføje kode for at sikre, at du kan flytte helten ved hjælp af piletasterne.
- **Flyt fjender**: du skal også tilføje kode for at sikre, at fjenderne bevæger sig fra top til bund med en given hastighed.

## Anbefalede trin

Find de filer, der er blevet oprettet til dig i undermappen `your-work`. Den bør indeholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Du starter dit projekt i mappen `your_work` ved at skrive:

```bash
cd your-work
npm start
```

Ovenstående starter en HTTP-server på adressen `http://localhost:5000`. Åbn en browser og indtast den adresse, lige nu bør den vise helten og alle fjenderne; intet bevæger sig - endnu!

### Tilføj kode

1. **Tilføj dedikerede objekter** for `hero`, `enemy` og `game object`, de skal have `x` og `y` egenskaber. (Husk afsnittet om [Arv eller komposition](../README.md)).

   *TIP* `game object` bør være det objekt, der har `x` og `y` og evnen til at tegne sig selv på et lærred.

   >tip: start med at tilføje en ny GameObject-klasse med dens constructor defineret som nedenfor, og tegn den derefter på lærredet:
  
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

    Udvid nu denne GameObject for at oprette Hero og Enemy.
    
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

2. **Tilføj tastaturhændelses-håndterere** for at håndtere navigation med taster (flyt helten op/ned venstre/højre).

   *HUSK* det er et kartesisk system, øverst til venstre er `0,0`. Husk også at tilføje kode for at stoppe *standardadfærd*.

   >tip: opret din onKeyDown-funktion og tilknyt den til vinduet:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Tjek din browsers konsol på dette tidspunkt, og se tastetrykkene blive logget.

3. **Implementer** [Pub sub-mønsteret](../README.md), dette vil holde din kode ren, mens du følger de resterende dele.

   For at gøre denne sidste del kan du:

   1. **Tilføj en hændelseslytter** på vinduet:

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

    1. **Opret en EventEmitter-klasse** for at publicere og abonnere på beskeder:

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

    1. **Tilføj konstanter** og opsæt EventEmitter:

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

    1. **Initialiser spillet**

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

1. **Opsæt spil-loopet**

   Refaktorer window.onload-funktionen for at initialisere spillet og opsætte et spil-loop med et passende interval. Du tilføjer også en laserstråle:

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

5. **Tilføj kode** for at flytte fjender med et bestemt interval.

    Refaktorer `createEnemies()`-funktionen for at oprette fjenderne og skubbe dem ind i den nye gameObjects-klasse:

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
    
    og tilføj en `createHero()`-funktion for at gøre en lignende proces for helten.
    
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

    og til sidst, tilføj en `drawGameObjects()`-funktion for at starte tegningen:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Dine fjender bør begynde at nærme sig dit rumskib!

---

## 🚀 Udfordring

Som du kan se, kan din kode blive til 'spaghettikode', når du begynder at tilføje funktioner, variabler og klasser. Hvordan kan du bedre organisere din kode, så den er mere læsbar? Skitser et system til at organisere din kode, selvom den stadig befinder sig i én fil.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/34)

## Gennemgang & Selvstudie

Mens vi skriver vores spil uden at bruge frameworks, findes der mange JavaScript-baserede canvas-frameworks til spiludvikling. Brug lidt tid på at [læse om disse](https://github.com/collections/javascript-game-engines).

## Opgave

[Kommenter din kode](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.