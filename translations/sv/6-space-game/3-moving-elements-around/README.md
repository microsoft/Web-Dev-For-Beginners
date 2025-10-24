<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-23T21:45:57+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel del 3: Lägg till rörelse

Tänk på dina favoritspel – det som gör dem fängslande är inte bara snygg grafik, utan hur allt rör sig och reagerar på dina handlingar. Just nu är ditt rymdspel som en vacker målning, men vi ska lägga till rörelse som ger det liv.

När NASAs ingenjörer programmerade styrdatorn för Apollo-uppdragen ställdes de inför en liknande utmaning: hur får man ett rymdskepp att reagera på pilotens input samtidigt som det automatiskt gör kurskorrigeringar? Principerna vi ska lära oss idag påminner om dessa koncept – att hantera spelarkontrollerad rörelse tillsammans med automatiska systembeteenden.

I den här lektionen kommer du att lära dig hur man får rymdskepp att glida över skärmen, reagera på spelarens kommandon och skapa mjuka rörelsemönster. Vi bryter ner allt i hanterbara koncept som bygger på varandra naturligt.

I slutet kommer spelarna att kunna flyga sitt hjälteskepp runt på skärmen medan fiendeskepp patrullerar ovanför. Ännu viktigare, du kommer att förstå de grundläggande principerna som driver rörelsesystem i spel.

## Förkunskapsquiz

[Förkunskapsquiz](https://ff-quizzes.netlify.app/web/quiz/33)

## Förstå spelrörelse

Spel kommer till liv när saker börjar röra sig, och det finns i grunden två sätt detta händer:

- **Spelarkontrollerad rörelse**: När du trycker på en knapp eller klickar med musen, rör sig något. Detta är den direkta kopplingen mellan dig och spelvärlden.
- **Automatisk rörelse**: När spelet självt bestämmer sig för att flytta saker – som de där fiendeskeppen som måste patrullera skärmen oavsett om du gör något eller inte.

Att få objekt att röra sig på en datorskärm är enklare än du kanske tror. Kommer du ihåg x- och y-koordinaterna från mattelektionen? Det är precis vad vi arbetar med här. När Galileo spårade Jupiters månar 1610 gjorde han i princip samma sak – han plottade positioner över tid för att förstå rörelsemönster.

Att få saker att röra sig på skärmen är som att skapa en blädderbokanimation – du behöver följa dessa tre enkla steg:

1. **Uppdatera positionen** – Ändra var ditt objekt ska vara (kanske flytta det 5 pixlar åt höger)
2. **Radera den gamla ramen** – Rensa skärmen så att du inte ser spöklika spår överallt
3. **Rita den nya ramen** – Placera ditt objekt på sin nya plats

Gör detta tillräckligt snabbt, och voilà! Du har en mjuk rörelse som känns naturlig för spelarna.

Så här kan det se ut i kod:

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

**Vad denna kod gör:**
- **Uppdaterar** hjälteskeppets x-koordinat med 5 pixlar för att flytta det horisontellt
- **Rensar** hela canvasområdet för att ta bort den tidigare ramen
- **Fyller** canvasen med en svart bakgrundsfärg
- **Ritar om** hjältebilden på dess nya position

✅ Kan du komma på en anledning till varför det kan medföra prestandakostnader att rita om din hjälte många gånger per sekund? Läs om [alternativ till detta mönster](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Hantera tangentbordshändelser

Det är här vi kopplar spelarens input till spelåtgärder. När någon trycker på mellanslag för att skjuta en laser eller trycker på en piltangent för att undvika en asteroid, måste ditt spel upptäcka och reagera på den inputen.

Tangentbordshändelser sker på fönsternivå, vilket innebär att hela webbläsarfönstret lyssnar efter dessa knapptryckningar. Musklick kan däremot kopplas till specifika element (som att klicka på en knapp). För vårt rymdspel kommer vi att fokusera på tangentbordskontroller eftersom det ger spelarna den klassiska arkadkänslan.

Detta påminner mig om hur telegrafoperatörer på 1800-talet var tvungna att översätta morsekod-input till meningsfulla meddelanden – vi gör något liknande, översätter knapptryckningar till spelkommandon.

För att hantera en händelse behöver du använda fönstrets `addEventListener()`-metod och ge den två inputparametrar. Den första parametern är namnet på händelsen, till exempel `keyup`. Den andra parametern är funktionen som ska anropas som ett resultat av att händelsen inträffar.

Här är ett exempel:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Bryta ner vad som händer här:**
- **Lyssnar** efter tangentbordshändelser på hela fönstret
- **Fångar** händelseobjektet som innehåller information om vilken tangent som trycktes ned
- **Kontrollerar** om den tryckta tangenten matchar en specifik tangent (i detta fall uppåtpilen)
- **Utför** kod när villkoret är uppfyllt

För tangenthändelser finns det två egenskaper på händelsen du kan använda för att se vilken tangent som trycktes ned:

- `key` - detta är en strängrepresentation av den tryckta tangenten, till exempel `'ArrowUp'`
- `keyCode` - detta är en numerisk representation, till exempel `37`, motsvarar `ArrowLeft`

✅ Manipulation av tangenthändelser är användbart utanför spelutveckling. Vilka andra användningsområden kan du tänka dig för denna teknik?

### Speciella tangenter: en förvarning!

Vissa tangenter har inbyggda webbläsarbeteenden som kan störa ditt spel. Piltangenter scrollar sidan och mellanslag hoppar ner – beteenden du inte vill ha när någon försöker styra sitt rymdskepp.

Vi kan förhindra dessa standardbeteenden och låta vårt spel hantera inputen istället. Detta liknar hur tidiga dataprogrammerare var tvungna att åsidosätta systemavbrott för att skapa anpassade beteenden – vi gör det bara på webbläsarnivå. Så här gör du:

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

**Förstå denna kod för att förhindra:**  
- **Kontrollerar** specifika tangentkoder som kan orsaka oönskat webbläsarbeteende  
- **Förhindrar** standardwebbläsarens åtgärd för piltangenter och mellanslag  
- **Tillåter** andra tangenter att fungera normalt  
- **Använder** `e.preventDefault()` för att stoppa webbläsarens inbyggda beteende  

## Spelinducerad rörelse

Nu ska vi prata om objekt som rör sig utan spelarens input. Tänk på fiendeskepp som kryssar över skärmen, kulor som flyger i raka linjer eller moln som driver i bakgrunden. Denna autonoma rörelse gör att din spelvärld känns levande även när ingen rör kontrollerna.

Vi använder JavaScripts inbyggda timers för att uppdatera positioner med jämna mellanrum. Detta koncept liknar hur pendelklockor fungerar – en regelbunden mekanism som utlöser konsekventa, tidsbestämda åtgärder. Så här enkelt kan det vara:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Vad denna rörelsekod gör:**
- **Skapar** en timer som körs var 100:e millisekund
- **Uppdaterar** fiendens y-koordinat med 10 pixlar varje gång
- **Lagrar** interval-ID så att vi kan stoppa det senare om det behövs
- **Flyttar** fienden nedåt på skärmen automatiskt

## Spelloopen

Här är konceptet som binder allt samman – spelloopen. Om ditt spel vore en film skulle spelloopen vara filmprojektorn, som visar bildruta efter bildruta så snabbt att allt verkar röra sig smidigt.

Varje spel har en sådan loop som körs i bakgrunden. Det är en funktion som uppdaterar alla spelobjekt, ritar om skärmen och upprepar denna process kontinuerligt. Detta håller koll på din hjälte, alla fiender, eventuella laserstrålar – hela spelstatusen.

Detta koncept påminner mig om hur tidiga filmtecknare som Walt Disney var tvungna att rita om karaktärer bildruta för bildruta för att skapa en illusion av rörelse. Vi gör samma sak, fast med kod istället för pennor.

Så här kan en spelloop typiskt se ut, uttryckt i kod:

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

**Förstå strukturen för spelloopen:**
- **Rensar** hela canvasen för att ta bort den tidigare ramen
- **Fyller** bakgrunden med en solid färg
- **Ritar** alla spelobjekt på deras aktuella positioner
- **Upprepar** denna process var 200:e millisekund för att skapa mjuk animation
- **Hantera** bildhastigheten genom att kontrollera intervalltimingen

## Fortsättning på rymdspelet

Nu ska vi lägga till rörelse i den statiska scenen du byggde tidigare. Vi ska förvandla den från en skärmdump till en interaktiv upplevelse. Vi går igenom detta steg för steg för att säkerställa att varje del bygger på den föregående.

Hämta koden från där vi slutade i föregående lektion (eller börja med koden i [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work)-mappen om du behöver en ny start).

**Här är vad vi bygger idag:**
- **Hjältekontroller**: Piltangenterna kommer att styra ditt rymdskepp på skärmen
- **Fienderörelse**: De där utomjordiska skeppen kommer att börja sin framryckning

Låt oss börja implementera dessa funktioner.

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

Du startar ditt projekt i mappen `your-work` genom att skriva:

```bash
cd your-work
npm start
```

**Vad detta kommando gör:**
- **Navigerar** till din projektkatalog
- **Startar** en HTTP-server på adressen `http://localhost:5000`
- **Serverar** dina spelfiler så att du kan testa dem i en webbläsare

Ovanstående startar en HTTP-server på adressen `http://localhost:5000`. Öppna en webbläsare och ange den adressen, just nu bör den rendera hjälten och alla fiender; ingenting rör sig – än!

### Lägg till kod

1. **Lägg till dedikerade objekt** för `hero`, `enemy` och `game object`, de bör ha egenskaperna `x` och `y`. (Kom ihåg avsnittet om [Arv eller komposition](../README.md)).

   *TIPS* `game object` bör vara det som har `x` och `y` och förmågan att rita sig själv på en canvas.

   > **Tips**: Börja med att lägga till en ny `GameObject`-klass med dess konstruktor definierad enligt nedan, och rita sedan den på canvasen:

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

    **Förstå denna basklass:**
    - **Definierar** gemensamma egenskaper som alla spelobjekt delar (position, storlek, bild)
    - **Inkluderar** en `dead`-flagga för att spåra om objektet ska tas bort
    - **Tillhandahåller** en `draw()`-metod som renderar objektet på canvasen
    - **Ställer in** standardvärden för alla egenskaper som underklasser kan åsidosätta

    Nu, utöka denna `GameObject` för att skapa `Hero` och `Enemy`:
    
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

    **Nyckelkoncept i dessa klasser:**
    - **Ärver** från `GameObject` med hjälp av nyckelordet `extends`
    - **Anropar** föräldrakonstruktorn med `super(x, y)`
    - **Ställer in** specifika dimensioner och egenskaper för varje objekttyp
    - **Implementerar** automatisk rörelse för fiender med hjälp av `setInterval()`

2. **Lägg till tangenthändelsehanterare** för att hantera tangentnavigering (flytta hjälten upp/ner vänster/höger)

   *KOM IHÅG* det är ett kartesiskt system, övre vänstra hörnet är `0,0`. Kom också ihåg att lägga till kod för att stoppa *standardbeteende*

   > **Tips**: Skapa din `onKeyDown`-funktion och koppla den till fönstret:

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
    
   **Vad denna händelsehanterare gör:**
   - **Lyssnar** efter tangenttryckningar på hela fönstret
   - **Loggar** tangentkoden för att hjälpa dig felsöka vilka tangenter som trycks ned
   - **Förhindrar** standardwebbläsarbeteende för piltangenter och mellanslag
   - **Tillåter** andra tangenter att fungera normalt
   
   Kontrollera din webbläsares konsol vid denna punkt och se tangenttryckningarna loggas. 

3. **Implementera** [Pub sub-mönstret](../README.md), detta kommer att hålla din kod ren när du följer de återstående delarna.

   Publish-Subscribe-mönstret hjälper till att organisera din kod genom att separera händelseupptäckt från händelsehantering. Detta gör din kod mer modulär och lättare att underhålla.

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

   **Vad detta händelsesystem gör:**
   - **Upptäcker** tangentbordsinput och konverterar det till anpassade spelhändelser
   - **Separerar** inputupptäckt från spellogik
   - **Gör** det enkelt att ändra kontroller senare utan att påverka spelkoden
   - **Tillåter** flera system att reagera på samma input

   2. **Skapa en EventEmitter-klass** för att publicera och prenumerera på meddelanden:

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
       
   3. **Lägg till konstanter** och ställ in EventEmitter:

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

   **Förstå inställningen:**
   - **Definierar** meddelandekonstanter för att undvika stavfel och göra omstrukturering enklare
   - **Deklarerar** variabler för bilder, canvas-kontext och spelstatus
   - **Skapar** en global händelseutgivare för pub-sub-systemet
   - **Initierar** en array för att hålla alla spelobjekt

   4. **Initiera spelet**

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
       
4. **Ställ in spelloopen**

   Omstrukturera funktionen `window.onload` för att initiera spelet och ställa in en spelloop med ett bra intervall. Du kommer också att lägga till en laserstråle:

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

   **Förstå spelinställningen:**
   - **Väntar** på att sidan ska laddas helt innan den startar
   - **Hämtar** canvas-elementet och dess 2D-renderingskontext
   - **Laddar** alla bildresurser asynkront med `await`
   - **Startar** spelloopen som körs med 100 ms intervall (10 FPS)
   - **Rensar** och ritar om hela skärmen varje bildruta

5. **Lägg till kod** för att flytta fiender med ett visst intervall

    Omstrukturera funktionen `createEnemies()` för att skapa fienderna och lägga till dem i den nya gameObjects-klassen:

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

    **Vad fiendeskapandet gör:**
    - **Beräknar** positioner för att centrera fiender på skärmen
- **Skapar** ett rutnät av fiender med hjälp av nästlade loopar  
- **Tilldelar** fiendebilden till varje fiendeobjekt  
- **Lägger till** varje fiende i den globala arrayen för spelobjekt  

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
  
**Vad hjälteskapandet gör:**  
- **Positionerar** hjälten längst ner i mitten av skärmen  
- **Tilldelar** hjältebilden till hjälteobjektet  
- **Lägger till** hjälten i arrayen för spelobjekt för rendering  

och slutligen, lägg till en `drawGameObjects()`-funktion för att starta ritningen:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Förstå ritningsfunktionen:**  
- **Itererar** genom alla spelobjekt i arrayen  
- **Anropar** metoden `draw()` på varje objekt  
- **Skickar** canvas-kontexten så att objekten kan rendera sig själva  

Dina fiender bör börja avancera mot ditt hjälteskepp!  
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
  
och slutligen, lägg till en `drawGameObjects()`-funktion för att starta ritningen:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Dina fiender bör börja avancera mot ditt hjälteskepp!  

---

## GitHub Copilot Agent Challenge 🚀  

Här är en utmaning som kommer att förbättra spelets finish: att lägga till gränser och smidiga kontroller. För närvarande kan din hjälte flyga utanför skärmen, och rörelsen kan kännas hackig.  

**Din uppgift:** Få ditt rymdskepp att kännas mer realistiskt genom att implementera skärmgränser och mjukare rörelser. Det liknar hur NASAs flygkontrollsystem förhindrar rymdfarkoster från att överskrida säkra operativa parametrar.  

**Det här ska du bygga:** Skapa ett system som håller ditt hjälteskepp på skärmen och gör kontrollerna smidiga. När spelare håller ner en piltangent ska skeppet glida kontinuerligt istället för att röra sig i diskreta steg. Överväg att lägga till visuell feedback när skeppet når skärmgränserna – kanske en subtil effekt för att indikera kanten av spelområdet.  

Läs mer om [agentläge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.  

## 🚀 Utmaning  

Kodorganisation blir allt viktigare när projekt växer. Du kanske har märkt att din fil blir överfull med funktioner, variabler och klasser blandade tillsammans. Det påminner mig om hur ingenjörerna som organiserade Apollo-missionens kod var tvungna att skapa tydliga, underhållbara system som flera team kunde arbeta med samtidigt.  

**Din uppgift:**  
Tänk som en mjukvaruarkitekt. Hur skulle du organisera din kod så att du (eller en kollega) om sex månader kan förstå vad som händer? Även om allt stannar i en fil för nu, kan du skapa bättre organisation:  

- **Gruppera relaterade funktioner** tillsammans med tydliga kommentarrubriker  
- **Separera ansvar** - håll spellogik separat från rendering  
- **Använd konsekventa namn** för variabler och funktioner  
- **Skapa moduler** eller namnrymder för att organisera olika aspekter av ditt spel  
- **Lägg till dokumentation** som förklarar syftet med varje större sektion  

**Reflektionsfrågor:**  
- Vilka delar av din kod är svårast att förstå när du återvänder till dem?  
- Hur kan du organisera din kod för att göra det lättare för någon annan att bidra?  
- Vad skulle hända om du ville lägga till nya funktioner som power-ups eller olika fiendetyper?  

## Quiz efter föreläsningen  

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/34)  

## Granskning & Självstudier  

Vi har byggt allt från grunden, vilket är fantastiskt för lärande, men här är en liten hemlighet – det finns några fantastiska JavaScript-ramverk där ute som kan hantera mycket av det tunga arbetet åt dig. När du känner dig bekväm med de grunder vi har täckt, är det värt att [utforska vad som finns tillgängligt](https://github.com/collections/javascript-game-engines).  

Tänk på ramverk som att ha en välfylld verktygslåda istället för att göra varje verktyg för hand. De kan lösa många av de kodorganisationsutmaningar vi pratade om, plus erbjuda funktioner som skulle ta veckor att bygga själv.  

**Saker värda att utforska:**  
- Hur spelmotorer organiserar kod – du kommer att bli förvånad över de smarta mönster de använder  
- Prestandatrick för att få canvas-spel att köras smörjande smidigt  
- Moderna JavaScript-funktioner som kan göra din kod renare och mer underhållbar  
- Olika tillvägagångssätt för att hantera spelobjekt och deras relationer  

## Uppgift  

[Kommentera din kod](assignment.md)  

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.