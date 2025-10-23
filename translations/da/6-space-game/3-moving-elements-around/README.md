<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-23T22:09:36+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "da"
}
-->
# Byg et rumspil del 3: Tilføj bevægelse

Tænk på dine yndlingsspil – det, der gør dem fascinerende, er ikke kun flotte grafik, men også hvordan alt bevæger sig og reagerer på dine handlinger. Lige nu er dit rumspil som et smukt maleri, men vi er ved at tilføje bevægelse, der bringer det til live.

Da NASAs ingeniører programmerede styresystemet til Apollo-missionerne, stod de over for en lignende udfordring: Hvordan får man et rumfartøj til at reagere på pilotens input, mens det automatisk opretholder kurskorrektioner? De principper, vi lærer i dag, afspejler de samme koncepter – at håndtere spillerstyret bevægelse sammen med automatiske systemadfærd.

I denne lektion lærer du, hvordan du får rumskibe til at glide hen over skærmen, reagere på spillerens kommandoer og skabe glatte bevægelsesmønstre. Vi bryder det hele ned i overskuelige begreber, der naturligt bygger på hinanden.

Når vi er færdige, vil spillerne kunne flyve deres helteskib rundt på skærmen, mens fjendtlige fartøjer patruljerer ovenover. Endnu vigtigere, du vil forstå de grundlæggende principper, der driver bevægelsessystemer i spil.

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/33)

## Forstå spilbevægelse

Spil bliver levende, når ting begynder at bevæge sig rundt, og der er grundlæggende to måder, dette sker på:

- **Spillerstyret bevægelse**: Når du trykker på en tast eller klikker med musen, bevæger noget sig. Dette er den direkte forbindelse mellem dig og spillets verden.
- **Automatisk bevægelse**: Når spillet selv beslutter at flytte ting – som de fjendtlige skibe, der skal patruljere skærmen, uanset om du gør noget eller ej.

At få objekter til at bevæge sig på en computerskærm er enklere, end du måske tror. Kan du huske de x- og y-koordinater fra matematikundervisningen? Det er præcis det, vi arbejder med her. Da Galileo i 1610 observerede Jupiters måner, gjorde han i bund og grund det samme – han kortlagde positioner over tid for at forstå bevægelsesmønstre.

At få ting til at bevæge sig på skærmen er som at lave en flipbog-animation – du skal følge disse tre enkle trin:

1. **Opdater positionen** – Ændr, hvor dit objekt skal være (måske flyt det 5 pixels til højre)
2. **Slet den gamle ramme** – Ryd skærmen, så du ikke ser spøgelsesagtige spor overalt
3. **Tegn den nye ramme** – Placer dit objekt på dets nye sted

Gør dette hurtigt nok, og voila! Du har glat bevægelse, der føles naturlig for spillerne.

Her er, hvordan det kan se ud i kode:

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

**Hvad denne kode gør:**
- **Opdaterer** helteskibets x-koordinat med 5 pixels for at bevæge det horisontalt
- **Rydder** hele lærredsområdet for at fjerne den tidligere ramme
- **Fylder** lærredet med en sort baggrundsfarve
- **Tegner** heltebilledet på dets nye position

✅ Kan du komme i tanke om en grund til, at det kan medføre performanceomkostninger at tegne din helt mange gange per sekund? Læs om [alternativer til dette mønster](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Håndtering af tastaturbegivenheder

Her forbinder vi spillerens input med spillets handling. Når nogen trykker på mellemrumstasten for at affyre en laser eller trykker på en piletast for at undvige en asteroide, skal dit spil registrere og reagere på det input.

Tastaturbegivenheder sker på vinduesniveau, hvilket betyder, at hele din browser lytter efter disse tastetryk. Museklik kan derimod knyttes til specifikke elementer (som at klikke på en knap). For vores rumspil vil vi fokusere på tastaturkontroller, da det giver spillerne den klassiske arkadefølelse.

Det minder mig om, hvordan telegrafoperatører i 1800-tallet skulle oversætte morsekode-input til meningsfulde beskeder – vi gør noget lignende, oversætter tastetryk til spilkommandoer.

For at håndtere en begivenhed skal du bruge vinduets `addEventListener()`-metode og give den to inputparametre. Den første parameter er navnet på begivenheden, for eksempel `keyup`. Den anden parameter er den funktion, der skal kaldes som resultat af begivenheden.

Her er et eksempel:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Hvad der sker her:**
- **Lytter** efter tastaturbegivenheder på hele vinduet
- **Fanger** begivenhedsobjektet, som indeholder information om, hvilken tast der blev trykket
- **Kontrollerer**, om den trykkede tast matcher en specifik tast (i dette tilfælde pil op)
- **Udfører** kode, når betingelsen er opfyldt

For tastaturbegivenheder er der to egenskaber på begivenheden, du kan bruge til at se, hvilken tast der blev trykket:

- `key` - dette er en tekstrepræsentation af den trykkede tast, for eksempel `'ArrowUp'`
- `keyCode` - dette er en numerisk repræsentation, for eksempel `37`, svarer til `ArrowLeft`

✅ Manipulation af tastaturbegivenheder er nyttigt uden for spiludvikling. Hvilke andre anvendelser kan du komme i tanke om for denne teknik?

### Specielle taster: en advarsel!

Nogle taster har indbyggede browseradfærd, der kan forstyrre dit spil. Piletasterne ruller siden, og mellemrumstasten hopper ned – adfærd, du ikke ønsker, når nogen forsøger at styre deres rumskib.

Vi kan forhindre disse standardadfærd og lade vores spil håndtere input i stedet. Dette minder om, hvordan tidlige computerprogrammører måtte tilsidesætte systemafbrydelser for at skabe brugerdefinerede adfærd – vi gør det bare på browserniveau. Sådan gør du:

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

**Forståelse af denne forebyggelseskode:**
- **Kontrollerer** specifikke tastkoder, der kan forårsage uønsket browseradfærd
- **Forhindrer** standardbrowserhandlinger for piletaster og mellemrumstast
- **Tillader** andre taster at fungere normalt
- **Bruger** `e.preventDefault()` for at stoppe browserens indbyggede adfærd

## Spilinduceret bevægelse

Lad os nu tale om objekter, der bevæger sig uden spillerinput. Tænk på fjendtlige skibe, der krydser skærmen, kugler, der flyver i lige linjer, eller skyer, der driver i baggrunden. Denne autonome bevægelse får din spilverden til at føles levende, selv når ingen rører ved kontrollerne.

Vi bruger JavaScripts indbyggede timere til at opdatere positioner med regelmæssige intervaller. Dette koncept ligner, hvordan pendulure fungerer – en regelmæssig mekanisme, der udløser konsistente, tidsbestemte handlinger. Sådan kan det se ud:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Hvad denne bevægelseskode gør:**
- **Opretter** en timer, der kører hvert 100 millisekund
- **Opdaterer** fjendens y-koordinat med 10 pixels hver gang
- **Gemmer** interval-ID'et, så vi kan stoppe det senere, hvis nødvendigt
- **Bevæger** fjenden nedad på skærmen automatisk

## Spilsløjfen

Her er konceptet, der binder det hele sammen – spilsløjfen. Hvis dit spil var en film, ville spilsløjfen være filmprojektoren, der viser ramme efter ramme så hurtigt, at alt ser ud til at bevæge sig glat.

Hvert spil har en af disse sløjfer, der kører i baggrunden. Det er en funktion, der opdaterer alle spilobjekter, tegner skærmen igen og gentager denne proces kontinuerligt. Dette holder styr på din helt, alle fjender, eventuelle flyvende laserstråler – hele spiltilstanden.

Dette koncept minder mig om, hvordan tidlige filmanimatorer som Walt Disney måtte tegne figurer ramme for ramme for at skabe illusionen af bevægelse. Vi gør det samme, bare med kode i stedet for blyanter.

Her er, hvordan en spilsløjfe typisk ser ud, udtrykt i kode:

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

**Forståelse af spilsløjfens struktur:**
- **Rydder** hele lærredet for at fjerne den tidligere ramme
- **Fylder** baggrunden med en ensfarvet farve
- **Tegner** alle spilobjekter på deres aktuelle positioner
- **Gentager** denne proces hvert 200 millisekund for at skabe glat animation
- **Styrer** billedhastigheden ved at kontrollere intervaltiden

## Fortsættelse af rumspillet

Nu tilføjer vi bevægelse til den statiske scene, du byggede tidligere. Vi vil transformere det fra et skærmbillede til en interaktiv oplevelse. Vi arbejder os igennem dette trin for trin for at sikre, at hver del bygger på den forrige.

Hent koden fra, hvor vi slap i den tidligere lektion (eller start med koden i [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work)-mappen, hvis du har brug for en frisk start).

**Her er, hvad vi bygger i dag:**
- **Heltekontrol**: Piletasterne vil styre dit rumskib rundt på skærmen
- **Fjendebevægelse**: De fremmede skibe vil begynde deres fremrykning

Lad os begynde at implementere disse funktioner.

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

Du starter dit projekt i `your-work`-mappen ved at skrive:

```bash
cd your-work
npm start
```

**Hvad denne kommando gør:**
- **Navigerer** til din projektmappe
- **Starter** en HTTP-server på adressen `http://localhost:5000`
- **Serverer** dine spilfiler, så du kan teste dem i en browser

Ovenstående starter en HTTP-server på adressen `http://localhost:5000`. Åbn en browser og indtast den adresse, lige nu bør den vise helten og alle fjenderne; intet bevæger sig – endnu!

### Tilføj kode

1. **Tilføj dedikerede objekter** for `hero`, `enemy` og `game object`, de bør have `x` og `y` egenskaber. (Husk afsnittet om [Arv eller sammensætning](../README.md)).

   *TIP* `game object` bør være det, der har `x` og `y` og evnen til at tegne sig selv på et lærred.

   > **Tip**: Start med at tilføje en ny `GameObject`-klasse med dens konstruktor defineret som nedenfor, og tegn den derefter på lærredet:

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

    **Forståelse af denne grundklasse:**
    - **Definerer** fælles egenskaber, som alle spilobjekter deler (position, størrelse, billede)
    - **Inkluderer** et `dead`-flag for at spore, om objektet skal fjernes
    - **Tilbyder** en `draw()`-metode, der gengiver objektet på lærredet
    - **Sætter** standardværdier for alle egenskaber, som underklasser kan overskrive

    Udvid nu denne `GameObject` for at oprette `Hero` og `Enemy`:
    
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

    **Vigtige begreber i disse klasser:**
    - **Arver** fra `GameObject` ved hjælp af nøgleordet `extends`
    - **Kalder** forældrekonstruktøren med `super(x, y)`
    - **Sætter** specifikke dimensioner og egenskaber for hver objekttype
    - **Implementerer** automatisk bevægelse for fjender ved hjælp af `setInterval()`

2. **Tilføj tastaturbegivenhedshåndterere** for at håndtere navigation med taster (flyt helten op/ned venstre/højre)

   *HUSK* det er et kartesisk system, øverste venstre hjørne er `0,0`. Husk også at tilføje kode for at stoppe *standardadfærd*

   > **Tip**: Opret din `onKeyDown`-funktion og tilknyt den til vinduet:

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
    
   **Hvad denne begivenhedshåndtering gør:**
   - **Lytter** efter tastetryk på hele vinduet
   - **Logger** tastkoden for at hjælpe dig med at fejlfinde, hvilke taster der trykkes
   - **Forhindrer** standardbrowseradfærd for piletaster og mellemrumstast
   - **Tillader** andre taster at fungere normalt
   
   Tjek din browserkonsol på dette tidspunkt, og se tastetrykkene blive logget. 

3. **Implementer** [Pub sub-mønsteret](../README.md), dette vil holde din kode ren, mens du følger de resterende dele.

   Publish-Subscribe-mønsteret hjælper med at organisere din kode ved at adskille begivenhedsdetektion fra begivenhedshåndtering. Dette gør din kode mere modulær og lettere at vedligeholde.

   For at gøre denne sidste del kan du:

   1. **Tilføj en begivenhedslytter** på vinduet:

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

   **Hvad dette begivenhedssystem gør:**
   - **Registrerer** tastaturinput og konverterer det til brugerdefinerede spilbegivenheder
   - **Adskiller** inputdetektion fra spillets logik
   - **Gør** det nemt at ændre kontroller senere uden at påvirke spillets kode
   - **Tillader** flere systemer at reagere på det samme input

   2. **Opret en EventEmitter-klasse** for at publicere og abonnere på beskeder:

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
       
   3. **Tilføj konstanter** og opsæt EventEmitter:

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

   **Forståelse af opsætningen:**
   - **Definerer** beskedkonstanter for at undgå tastefejl og gøre refaktorering lettere
   - **Deklarerer** variabler for billeder, lærredskontekst og spiltilstand
   - **Opretter** en global begivenhedsemittor til pub-sub-systemet
   - **Initialiserer** en array til at holde alle spilobjekter

   4. **Initialiser spillet**

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
       
4. **Opsæt spilsløjfen**

   Refaktorer `window.onload`-funktionen for at initialisere spillet og opsætte en spilsløjfe med et godt interval. Du vil også tilføje en laserstråle:

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

   **Forståelse af spilopsætningen:**
   - **Venter** på, at siden er fuldt indlæst, før den starter
   - **Henter** lærredselementet og dets 2D-renderingskontekst
   - **Indlæser** alle billedressourcer asynkront ved hjælp af `await`
   - **Starter** spilsløjfen, der kører med 100ms intervaller (10 FPS)
   - **Rydder** og tegner hele skærmen igen hver ramme

5. **Tilføj kode** for at flytte fjender med et bestemt interval

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

    **Hvad fjendeskabelsen gør:**
    - **Beregner** positioner for at centrere fjenderne på skærmen
- **Opretter** et gitter af fjender ved hjælp af indlejrede loops  
- **Tildeler** fjendebilledet til hvert fjendeobjekt  
- **Tilføjer** hver fjende til den globale spilobjekts-array  

og tilføj en `createHero()`-funktion til at udføre en lignende proces for helten.  

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
  
**Hvad helteoprettelsen gør:**  
- **Placerer** helten nederst i midten af skærmen  
- **Tildeler** heltebilledet til heltens objekt  
- **Tilføjer** helten til spilobjekts-arrayet for rendering  

og til sidst, tilføj en `drawGameObjects()`-funktion for at starte tegningen:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Forstå tegnefunktionen:**  
- **Itererer** gennem alle spilobjekter i arrayet  
- **Kalder** `draw()`-metoden på hvert objekt  
- **Sender** canvas-konteksten, så objekterne kan tegne sig selv  

Dine fjender bør begynde at rykke frem mod din heltes rumskib!  
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
  
og til sidst, tilføj en `drawGameObjects()`-funktion for at starte tegningen:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Dine fjender bør begynde at rykke frem mod din heltes rumskib!  

---

## GitHub Copilot Agent Challenge 🚀  

Her er en udfordring, der vil forbedre dit spils finish: tilføj grænser og glidende kontrol. Lige nu kan din helt flyve ud af skærmen, og bevægelsen kan føles hakkende.  

**Din mission:** Få dit rumskib til at føles mere realistisk ved at implementere skærmgrænser og flydende bevægelse. Det minder om, hvordan NASAs flykontrolsystemer forhindrer rumfartøjer i at overskride sikre driftsparametre.  

**Her er, hvad du skal bygge:** Opret et system, der holder din heltes rumskib på skærmen, og gør kontrollerne glidende. Når spillere holder en piletast nede, skal skibet glide kontinuerligt i stedet for at bevæge sig i diskrete trin. Overvej at tilføje visuel feedback, når skibet når skærmgrænserne – måske en subtil effekt for at indikere kanten af spilleområdet.  

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.  

## 🚀 Udfordring  

Kodeorganisation bliver stadig vigtigere, efterhånden som projekter vokser. Du har måske bemærket, at din fil bliver fyldt med funktioner, variabler og klasser, der er blandet sammen. Det minder mig om, hvordan ingeniørerne, der organiserede Apollo-missionens kode, måtte skabe klare, vedligeholdbare systemer, som flere teams kunne arbejde på samtidig.  

**Din mission:**  
Tænk som en softwarearkitekt. Hvordan ville du organisere din kode, så du (eller en kollega) om seks måneder kunne forstå, hvad der foregår? Selvom alt forbliver i én fil for nu, kan du skabe bedre organisation:  

- **Gruppér relaterede funktioner** sammen med klare kommentaroverskrifter  
- **Adskil ansvar** - hold spil-logik adskilt fra rendering  
- **Brug konsekvente navngivningskonventioner** for variabler og funktioner  
- **Opret moduler** eller navnerum for at organisere forskellige aspekter af dit spil  
- **Tilføj dokumentation**, der forklarer formålet med hver større sektion  

**Refleksionsspørgsmål:**  
- Hvilke dele af din kode er sværest at forstå, når du vender tilbage til dem?  
- Hvordan kunne du organisere din kode, så det bliver lettere for andre at bidrage?  
- Hvad ville der ske, hvis du ville tilføje nye funktioner som power-ups eller forskellige fjendetyper?  

## Quiz efter forelæsning  

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/34)  

## Gennemgang & Selvstudie  

Vi har bygget alt fra bunden, hvilket er fantastisk for læring, men her er en lille hemmelighed – der findes nogle fantastiske JavaScript-frameworks, der kan klare en masse af det tunge arbejde for dig. Når du føler dig komfortabel med de grundlæggende ting, vi har dækket, er det værd at [undersøge, hvad der er tilgængeligt](https://github.com/collections/javascript-game-engines).  

Tænk på frameworks som at have en veludstyret værktøjskasse i stedet for at lave hvert værktøj i hånden. De kan løse mange af de kodeorganisationsudfordringer, vi har talt om, plus tilbyde funktioner, der ville tage uger at bygge selv.  

**Ting, der er værd at udforske:**  
- Hvordan spil-motorer organiserer kode – du vil blive imponeret over de smarte mønstre, de bruger  
- Performance-tricks til at få canvas-spil til at køre silkeblødt  
- Moderne JavaScript-funktioner, der kan gøre din kode renere og mere vedligeholdelsesvenlig  
- Forskellige tilgange til at administrere spilobjekter og deres relationer  

## Opgave  

[Kommentér din kode](assignment.md)  

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.