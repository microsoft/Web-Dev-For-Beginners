<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-23T22:35:13+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill del 3: Legge til bevegelse

Tenk på favorittspillene dine – det som gjør dem fengslende er ikke bare flotte grafikker, men måten alt beveger seg og reagerer på handlingene dine. Akkurat nå er romspillet ditt som et vakkert maleri, men vi er i ferd med å legge til bevegelse som gir det liv.

Da NASAs ingeniører programmerte styringsdatamaskinen for Apollo-oppdragene, sto de overfor en lignende utfordring: Hvordan får man et romfartøy til å reagere på pilotens kommandoer samtidig som det automatisk opprettholder kurskorrigeringer? Prinsippene vi skal lære i dag ligner på disse – å håndtere spillerstyrt bevegelse sammen med automatiske systemoppføringer.

I denne leksjonen vil du lære hvordan du får romskip til å gli over skjermen, reagere på spillerens kommandoer og skape jevne bevegelsesmønstre. Vi bryter alt ned i håndterbare konsepter som bygger naturlig på hverandre.

Når vi er ferdige, vil spillerne kunne fly sitt helteskip rundt på skjermen mens fiendtlige skip patruljerer over hodet. Enda viktigere, du vil forstå de grunnleggende prinsippene som driver bevegelsessystemer i spill.

## Quiz før leksjonen

[Quiz før leksjonen](https://ff-quizzes.netlify.app/web/quiz/33)

## Forstå spillbevegelse

Spill kommer til live når ting begynner å bevege seg, og det er i hovedsak to måter dette skjer på:

- **Spillerstyrt bevegelse**: Når du trykker på en tast eller klikker med musen, beveger noe seg. Dette er den direkte forbindelsen mellom deg og spillverdenen.
- **Automatisk bevegelse**: Når spillet selv bestemmer seg for å bevege ting – som de fiendtlige skipene som må patruljere skjermen uavhengig av hva du gjør.

Å få objekter til å bevege seg på en dataskjerm er enklere enn du kanskje tror. Husker du de x- og y-koordinatene fra matematikkundervisningen? Det er akkurat det vi jobber med her. Da Galileo sporet Jupiters måner i 1610, gjorde han i bunn og grunn det samme – han plottet posisjoner over tid for å forstå bevegelsesmønstre.

Å bevege ting på skjermen er som å lage en flipbook-animasjon – du må følge disse tre enkle trinnene:

1. **Oppdater posisjonen** – Endre hvor objektet ditt skal være (kanskje flytte det 5 piksler til høyre)
2. **Slett den gamle rammen** – Rens skjermen slik at du ikke ser spøkelsesaktige spor overalt
3. **Tegn den nye rammen** – Plasser objektet ditt på sin nye plass

Gjør dette raskt nok, og vips! Du har jevn bevegelse som føles naturlig for spillerne.

Her er hvordan det kan se ut i kode:

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

**Dette gjør koden:**
- **Oppdaterer** helten sin x-koordinat med 5 piksler for å bevege den horisontalt
- **Sletter** hele lerretsområdet for å fjerne den forrige rammen
- **Fyller** lerretet med en svart bakgrunnsfarge
- **Tegner** heltebildet på sin nye posisjon

✅ Kan du tenke på en grunn til at det å tegne helten på nytt mange ganger per sekund kan føre til ytelseskostnader? Les om [alternativer til dette mønsteret](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Håndtere tastaturhendelser

Dette er der vi kobler spillerens input til handling i spillet. Når noen trykker på mellomromstasten for å skyte en laser eller trykker på en piltast for å unngå en asteroide, må spillet ditt oppdage og reagere på den inputen.

Tastaturhendelser skjer på vindusnivå, noe som betyr at hele nettleservinduet lytter etter disse tastetrykkene. Museklikk, derimot, kan knyttes til spesifikke elementer (som å klikke på en knapp). For vårt romspill vil vi fokusere på tastaturkontroller, siden det gir spillerne den klassiske arkadefølelsen.

Dette minner meg om hvordan telegrafoperatører på 1800-tallet måtte oversette morsekode-input til meningsfulle meldinger – vi gjør noe lignende, oversetter tastetrykk til spillkommandoer.

For å håndtere en hendelse må du bruke vinduets `addEventListener()`-metode og gi den to inputparametere. Den første parameteren er navnet på hendelsen, for eksempel `keyup`. Den andre parameteren er funksjonen som skal kalles som et resultat av at hendelsen finner sted.

Her er et eksempel:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Hva som skjer her:**
- **Lytter** etter tastaturhendelser på hele vinduet
- **Fanger** hendelsesobjektet som inneholder informasjon om hvilken tast som ble trykket
- **Sjekker** om den trykkede tasten samsvarer med en spesifikk tast (i dette tilfellet opp-pilen)
- **Utfører** kode når betingelsen er oppfylt

For tastehendelser er det to egenskaper på hendelsen du kan bruke for å se hvilken tast som ble trykket:

- `key` - dette er en strengrepresentasjon av den trykkede tasten, for eksempel `'ArrowUp'`
- `keyCode` - dette er en numerisk representasjon, for eksempel `37`, som tilsvarer `ArrowLeft`

✅ Manipulering av tastehendelser er nyttig utenfor spillutvikling. Hvilke andre bruksområder kan du tenke deg for denne teknikken?

### Spesielle taster: en advarsel!

Noen taster har innebygde nettleseratferder som kan forstyrre spillet ditt. Piltaster ruller siden og mellomromstasten hopper ned – atferder du ikke ønsker når noen prøver å styre romskipet sitt.

Vi kan forhindre disse standardatferdene og la spillet vårt håndtere inputen i stedet. Dette ligner på hvordan tidlige dataprogrammerere måtte overstyre systemavbrudd for å lage tilpassede atferder – vi gjør det bare på nettlesernivå. Slik gjør du det:

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

**Forstå denne forebyggingskoden:**
- **Sjekker** spesifikke tastekoder som kan forårsake uønsket nettleseratferd
- **Forhindrer** standard nettleseratferd for piltaster og mellomromstast
- **Tillater** andre taster å fungere normalt
- **Bruker** `e.preventDefault()` for å stoppe nettleserens innebygde atferd

## Spillindusert bevegelse

La oss nå snakke om objekter som beveger seg uten spillerinput. Tenk på fiendtlige skip som cruiser over skjermen, kuler som flyr i rette linjer, eller skyer som driver i bakgrunnen. Denne autonome bevegelsen gjør spillverdenen din levende selv når ingen rører kontrollene.

Vi bruker JavaScripts innebygde tidtakere for å oppdatere posisjoner med jevne mellomrom. Dette konseptet ligner på hvordan pendelklokker fungerer – en regelmessig mekanisme som utløser konsistente, tidsbestemte handlinger. Slik kan det se ut:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Hva denne bevegelseskoden gjør:**
- **Oppretter** en tidtaker som kjører hvert 100. millisekund
- **Oppdaterer** fiendens y-koordinat med 10 piksler hver gang
- **Lagrer** interval-ID-en slik at vi kan stoppe den senere hvis nødvendig
- **Beveger** fienden nedover skjermen automatisk

## Spill-løkken

Her er konseptet som binder alt sammen – spill-løkken. Hvis spillet ditt var en film, ville spill-løkken vært filmprojektoren, som viser ramme etter ramme så raskt at alt ser ut til å bevege seg jevnt.

Hvert spill har en slik løkke som kjører i bakgrunnen. Det er en funksjon som oppdaterer alle spillobjekter, tegner skjermen på nytt, og gjentar denne prosessen kontinuerlig. Dette holder styr på helten din, alle fiendene, eventuelle lasere som flyr rundt – hele spilltilstanden.

Dette konseptet minner meg om hvordan tidlige filmanimatører som Walt Disney måtte tegne karakterer ramme for ramme for å skape illusjonen av bevegelse. Vi gjør det samme, bare med kode i stedet for blyanter.

Her er hvordan en spill-løkke typisk kan se ut, uttrykt i kode:

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

**Forstå strukturen til spill-løkken:**
- **Sletter** hele lerretet for å fjerne den forrige rammen
- **Fyller** bakgrunnen med en solid farge
- **Tegner** alle spillobjekter på deres nåværende posisjoner
- **Gjentar** denne prosessen hvert 200. millisekund for å skape jevn animasjon
- **Håndterer** bildefrekvensen ved å kontrollere intervallet

## Fortsette med romspillet

Nå skal vi legge til bevegelse i den statiske scenen du bygde tidligere. Vi skal forvandle det fra et skjermbilde til en interaktiv opplevelse. Vi skal jobbe gjennom dette steg for steg for å sikre at hver del bygger på den forrige.

Hent koden fra der vi avsluttet i forrige leksjon (eller start med koden i [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work)-mappen hvis du trenger en ny start).

**Dette bygger vi i dag:**
- **Heltekontroller**: Piltaster vil styre romskipet ditt rundt på skjermen
- **Fiendebevegelse**: De fremmede skipene vil begynne sin fremmarsj

La oss begynne å implementere disse funksjonene.

## Anbefalte trinn

Finn filene som er opprettet for deg i `your-work`-undermappen. Den bør inneholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Du starter prosjektet ditt i `your-work`-mappen ved å skrive:

```bash
cd your-work
npm start
```

**Hva denne kommandoen gjør:**
- **Navigerer** til prosjektmappen din
- **Starter** en HTTP-server på adressen `http://localhost:5000`
- **Serverer** spillfilene dine slik at du kan teste dem i en nettleser

Ovennevnte vil starte en HTTP-server på adressen `http://localhost:5000`. Åpne en nettleser og skriv inn den adressen, akkurat nå bør den vise helten og alle fiendene; ingenting beveger seg – ennå!

### Legg til kode

1. **Legg til dedikerte objekter** for `hero`, `enemy` og `game object`, de bør ha `x` og `y`-egenskaper. (Husk delen om [Arv eller komposisjon](../README.md)).

   *TIPS* `game object` bør være det som har `x` og `y` og evnen til å tegne seg selv på et lerret.

   > **Tips**: Start med å legge til en ny `GameObject`-klasse med dens konstruktør definert som nedenfor, og tegn den deretter på lerretet:

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

    **Forstå denne grunnklassen:**
    - **Definerer** felles egenskaper som alle spillobjekter deler (posisjon, størrelse, bilde)
    - **Inkluderer** et `dead`-flagg for å spore om objektet skal fjernes
    - **Gir** en `draw()`-metode som gjengir objektet på lerretet
    - **Setter** standardverdier for alle egenskaper som underklasser kan overstyre

    Nå, utvid denne `GameObject` for å lage `Hero` og `Enemy`:
    
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

    **Viktige konsepter i disse klassene:**
    - **Arver** fra `GameObject` ved å bruke nøkkelordet `extends`
    - **Kaller** foreldrekonstruktøren med `super(x, y)`
    - **Setter** spesifikke dimensjoner og egenskaper for hver objekttype
    - **Implementerer** automatisk bevegelse for fiender ved hjelp av `setInterval()`

2. **Legg til tastehendelsesbehandlere** for å håndtere tastnavigasjon (flytte helten opp/ned, venstre/høyre)

   *HUSK* det er et kartesisk system, øverst til venstre er `0,0`. Husk også å legge til kode for å stoppe *standardatferd*

   > **Tips**: Lag din `onKeyDown`-funksjon og koble den til vinduet:

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
    
   **Hva denne hendelsesbehandleren gjør:**
   - **Lytter** etter tastetrykkhendelser på hele vinduet
   - **Logger** tastekoden for å hjelpe deg med å feilsøke hvilke taster som trykkes
   - **Forhindrer** standard nettleseratferd for piltaster og mellomromstast
   - **Tillater** andre taster å fungere normalt
   
   Sjekk nettleserkonsollen din på dette tidspunktet, og se tastetrykkene som blir logget. 

3. **Implementer** [Pub sub-mønsteret](../README.md), dette vil holde koden din ryddig mens du følger de resterende delene.

   Publish-Subscribe-mønsteret hjelper med å organisere koden din ved å skille hendelsesdeteksjon fra hendelseshåndtering. Dette gjør koden din mer modulær og enklere å vedlikeholde.

   For å gjøre denne siste delen, kan du:

   1. **Legg til en hendelseslytter** på vinduet:

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

   **Hva dette hendelsessystemet gjør:**
   - **Oppdager** tastaturinput og konverterer det til tilpassede spillhendelser
   - **Skiller** inputdeteksjon fra spilllogikk
   - **Gjør** det enkelt å endre kontroller senere uten å påvirke spillkoden
   - **Lar** flere systemer reagere på samme input

   2. **Lag en EventEmitter-klasse** for å publisere og abonnere på meldinger:

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
       
   3. **Legg til konstanter** og sett opp EventEmitter:

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

   **Forstå oppsettet:**
   - **Definerer** meldingskonstanter for å unngå skrivefeil og gjøre omstrukturering enklere
   - **Deklarerer** variabler for bilder, lerretskontekst og spilltilstand
   - **Oppretter** en global hendelsesemitter for pub-sub-systemet
   - **Initialiserer** en array for å holde alle spillobjekter

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
       
4. **Sett opp spill-løkken**

   Refaktorer `window.onload`-funksjonen for å initialisere spillet og sette opp en spill-løkke med et godt intervall. Du vil også legge til en laserstråle:

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

   **Forstå spilloppsettet:**
   - **Venter** på at siden skal lastes helt før den starter
   - **Henter** lerretselementet og dets 2D-gjengivelseskontekst
   - **Laster** alle bildeelementer asynkront ved hjelp av `await`
   - **Starter** spill-løkken som kjører med 100ms intervaller (10 FPS)
   - **Sletter** og tegner hele skjermen på nytt hver ramme

5. **Legg til kode** for å bevege fiender med et visst intervall

    Refaktorer `createEnemies()`-funksjonen for å opprette fiendene og legge dem til den nye gameObjects-klassen:

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

    **Hva fiendeskapelsen gjør:**
    - **Beregner** posisjoner for å sentrere fiender på skjermen
- **Oppretter** et rutenett av fiender ved hjelp av nestede løkker  
- **Tildeler** fiendebildet til hvert fiendeobjekt  
- **Legger til** hver fiende i den globale spillobjekt-arrayen  

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
  
**Hva helteopprettelsen gjør:**  
- **Plasserer** helten nederst i midten av skjermen  
- **Tildeler** heltebildet til helteobjektet  
- **Legger til** helten i spillobjekt-arrayen for rendering  

og til slutt, legg til en `drawGameObjects()`-funksjon for å starte tegningen:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Forstå tegnefunksjonen:**  
- **Itererer** gjennom alle spillobjektene i arrayen  
- **Kaller** `draw()`-metoden på hvert objekt  
- **Sender** canvas-konteksten slik at objektene kan tegne seg selv  

Fiendene dine bør begynne å bevege seg mot helteskipet ditt!  
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
  
og til slutt, legg til en `drawGameObjects()`-funksjon for å starte tegningen:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Fiendene dine bør begynne å bevege seg mot helteskipet ditt!  

---

## GitHub Copilot Agent Challenge 🚀  

Her er en utfordring som vil forbedre spillets finish: legge til grenser og jevne kontroller. For øyeblikket kan helten din fly av skjermen, og bevegelsen kan føles hakkete.  

**Din oppgave:** Få romskipet til å føles mer realistisk ved å implementere skjermgrenser og jevn bevegelse. Dette ligner på hvordan NASAs flykontrollsystemer hindrer romfartøy i å overskride sikre operasjonsparametere.  

**Her er hva du skal lage:** Lag et system som holder helteskipet ditt på skjermen, og gjør kontrollene jevne. Når spillere holder inne en piltast, bør skipet gli kontinuerlig i stedet for å bevege seg i diskrete steg. Vurder å legge til visuell tilbakemelding når skipet når skjermgrensene – kanskje en subtil effekt for å indikere kanten av spilleområdet.  

Lær mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.  

## 🚀 Utfordring  

Kodeorganisering blir stadig viktigere etter hvert som prosjekter vokser. Du har kanskje lagt merke til at filen din blir overfylt med funksjoner, variabler og klasser blandet sammen. Dette minner meg om hvordan ingeniørene som organiserte Apollo-misjonskoden måtte lage klare, vedlikeholdbare systemer som flere team kunne jobbe med samtidig.  

**Din oppgave:**  
Tenk som en programvarearkitekt. Hvordan ville du organisert koden din slik at du (eller en kollega) kan forstå hva som skjer om seks måneder? Selv om alt forblir i én fil for nå, kan du skape bedre organisering:  

- **Grupper relaterte funksjoner** sammen med klare kommentaroverskrifter  
- **Separere ansvar** - hold spilllogikk adskilt fra rendering  
- **Bruk konsistente navn** på variabler og funksjoner  
- **Lag moduler** eller navnerom for å organisere ulike aspekter av spillet ditt  
- **Legg til dokumentasjon** som forklarer formålet med hver hovedseksjon  

**Refleksjonsspørsmål:**  
- Hvilke deler av koden din er vanskeligst å forstå når du kommer tilbake til dem?  
- Hvordan kan du organisere koden din for å gjøre det enklere for andre å bidra?  
- Hva ville skje hvis du ønsket å legge til nye funksjoner som power-ups eller forskjellige fiendetyper?  

## Quiz etter forelesning  

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/34)  

## Gjennomgang og selvstudium  

Vi har bygget alt fra bunnen av, noe som er fantastisk for læring, men her er en liten hemmelighet – det finnes noen fantastiske JavaScript-rammeverk der ute som kan håndtere mye av det tunge arbeidet for deg. Når du føler deg komfortabel med det grunnleggende vi har dekket, er det verdt [å utforske hva som er tilgjengelig](https://github.com/collections/javascript-game-engines).  

Tenk på rammeverk som å ha en godt utstyrt verktøykasse i stedet for å lage hvert verktøy for hånd. De kan løse mange av de kodeorganiseringsutfordringene vi har snakket om, i tillegg til å tilby funksjoner som ville tatt uker å bygge selv.  

**Ting som er verdt å utforske:**  
- Hvordan spillmotorer organiserer kode – du vil bli imponert over de smarte mønstrene de bruker  
- Ytelsestriks for å få canvas-spill til å kjøre silkemykt  
- Moderne JavaScript-funksjoner som kan gjøre koden din renere og mer vedlikeholdbar  
- Ulike tilnærminger til å administrere spillobjekter og deres relasjoner  

## Oppgave  

[Kommenter koden din](assignment.md)  

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.