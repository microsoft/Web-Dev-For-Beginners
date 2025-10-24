<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-23T22:10:54+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "da"
}
-->
# Byg et Rumspil Del 6: Afslutning og Genstart

Ethvert godt spil har brug for klare afslutningsbetingelser og en glidende genstartsmekanisme. Du har allerede bygget et imponerende rumspil med bevægelse, kamp og pointgivning - nu er det tid til at tilføje de sidste brikker, der gør det komplet.

Dit spil kører i øjeblikket uendeligt, ligesom Voyager-sonderne, som NASA sendte ud i rummet i 1977 - og som stadig rejser gennem rummet årtier senere. Selvom det er fint til rumforskning, har spil brug for definerede slutpunkter for at skabe tilfredsstillende oplevelser.

I dag implementerer vi ordentlige vinder-/taberbetingelser og et genstartssystem. Når du er færdig med denne lektion, vil du have et poleret spil, som spillere kan fuldføre og spille igen, ligesom de klassiske arkadespil, der definerede mediet.

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/39)

## Forståelse af spillets afslutningsbetingelser

Hvornår skal dit spil slutte? Dette fundamentale spørgsmål har formet spildesign siden den tidlige arkadeæra. Pac-Man slutter, når du bliver fanget af spøgelser eller rydder alle prikker, mens Space Invaders slutter, når rumvæsnerne når bunden eller du har ødelagt dem alle.

Som spilskaber definerer du selv sejr- og nederlagsbetingelserne. For vores rumspil er her nogle velprøvede tilgange, der skaber engagerende gameplay:

- **`N` fjendtlige skibe er blevet ødelagt**: Det er ret almindeligt, hvis du deler et spil op i forskellige niveauer, at du skal ødelægge `N` fjendtlige skibe for at fuldføre et niveau.
- **Dit skib er blevet ødelagt**: Der er bestemt spil, hvor du taber, hvis dit skib bliver ødelagt. En anden almindelig tilgang er at have et livssystem. Hver gang dit skib bliver ødelagt, mister du et liv. Når alle liv er tabt, taber du spillet.
- **Du har samlet `N` point**: En anden almindelig afslutningsbetingelse er at samle point. Hvordan du får point, er op til dig, men det er ret almindeligt at tildele point til forskellige aktiviteter som at ødelægge et fjendtligt skib eller måske samle genstande, som fjender *taber*, når de bliver ødelagt.
- **Fuldfør et niveau**: Dette kan involvere flere betingelser såsom `X` ødelagte fjendtlige skibe, `Y` samlede point eller måske, at en specifik genstand er blevet samlet.

## Implementering af genstartsfunktionalitet

Gode spil opmuntrer til genafspilning gennem glidende genstartsmekanismer. Når spillere fuldfører et spil (eller møder nederlag), vil de ofte gerne prøve igen med det samme - enten for at slå deres score eller forbedre deres præstation.

Tetris er et perfekt eksempel: Når dine blokke når toppen, kan du straks starte et nyt spil uden at navigere gennem komplekse menuer. Vi vil bygge et lignende genstartssystem, der renser spiltilstanden og hurtigt får spillerne tilbage i aktion.

✅ **Refleksion**: Tænk over de spil, du har spillet. Under hvilke betingelser slutter de, og hvordan bliver du opfordret til at genstarte? Hvad gør en genstartoplevelse glidende i stedet for frustrerende?

## Hvad du vil bygge

Du vil implementere de sidste funktioner, der forvandler dit projekt til en komplet spiloplevelse. Disse elementer adskiller polerede spil fra grundlæggende prototyper.

**Her er, hvad vi tilføjer i dag:**

1. **Sejrsbetingelse**: Skyd alle fjenderne og få en ordentlig fejring (det har du fortjent!)
2. **Nederlagsbetingelse**: Løb tør for liv og mød nederlaget med en taberskærm
3. **Genstartsmekanisme**: Tryk på Enter for straks at starte igen - fordi ét spil aldrig er nok
4. **Tilstandshåndtering**: Ren start hver gang - ingen resterende fjender eller mærkelige fejl fra sidste spil

## Kom godt i gang

Lad os forberede dit udviklingsmiljø. Du bør have alle dine rumspilsfiler fra de tidligere lektioner klar.

**Dit projekt bør se nogenlunde sådan ud:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Start din udviklingsserver:**

```bash
cd your-work
npm start
```

**Denne kommando:**
- Kører en lokal server på `http://localhost:5000`
- Serverer dine filer korrekt
- Opdaterer automatisk, når du foretager ændringer

Åbn `http://localhost:5000` i din browser og verificer, at dit spil kører. Du bør kunne bevæge dig, skyde og interagere med fjender. Når det er bekræftet, kan vi fortsætte med implementeringen.

> 💡 **Pro Tip**: For at undgå advarsler i Visual Studio Code, deklarer `gameLoopId` øverst i din fil som `let gameLoopId;` i stedet for at deklarere det inde i funktionen `window.onload`. Dette følger moderne JavaScript-praksis for variabeldeklaration.

## Implementeringstrin

### Trin 1: Opret funktioner til spore afslutningsbetingelser

Vi har brug for funktioner til at overvåge, hvornår spillet skal slutte. Ligesom sensorer på den internationale rumstation, der konstant overvåger kritiske systemer, vil disse funktioner løbende tjekke spiltilstanden.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Her er, hvad der sker bag kulisserne:**
- **Tjekker**, om vores helt er løbet tør for liv (av!)
- **Tæller**, hvor mange fjender der stadig er i live
- **Returnerer** `true`, når slagmarken er ryddet for fjender
- **Bruger** simpel sand/falsk logik for at holde det enkelt
- **Filtrerer** gennem alle spilobjekter for at finde de overlevende

### Trin 2: Opdater hændelseshåndterere for afslutningsbetingelser

Nu vil vi forbinde disse betingelsestjek med spillets hændelsessystem. Hver gang en kollision opstår, vil spillet evaluere, om det udløser en afslutningsbetingelse. Dette skaber øjeblikkelig feedback for kritiske spilbegivenheder.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Hvad der sker her:**
- **Laser rammer fjende**: Begge forsvinder, du får point, og vi tjekker, om du har vundet
- **Fjende rammer dig**: Du mister et liv, og vi tjekker, om du stadig er i live
- **Smart rækkefølge**: Vi tjekker for nederlag først (ingen ønsker at vinde og tabe på samme tid!)
- **Øjeblikkelige reaktioner**: Så snart noget vigtigt sker, ved spillet det

### Trin 3: Tilføj nye beskedkonstanter

Du skal tilføje nye beskedtyper til dit `Messages` konstantobjekt. Disse konstanter hjælper med at opretholde konsistens og forhindre tastefejl i dit hændelsessystem.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**I ovenstående har vi:**
- **Tilføjet** konstanter for spilafslutningsbegivenheder for at opretholde konsistens
- **Brugt** beskrivende navne, der tydeligt angiver begivenhedens formål
- **Fulgte** den eksisterende navngivningskonvention for beskedtyper

### Trin 4: Implementer genstartskontroller

Nu vil du tilføje tastaturkontroller, der giver spillere mulighed for at genstarte spillet. Enter-tasten er et naturligt valg, da den ofte er forbundet med at bekræfte handlinger og starte nye spil.

**Tilføj detektion af Enter-tasten til din eksisterende keydown-hændelseslytter:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Tilføj den nye beskedkonstant:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Hvad du skal vide:**
- **Udvider** dit eksisterende tastaturhændelseshåndteringssystem
- **Bruger** Enter-tasten som genstartstrigger for intuitiv brugeroplevelse
- **Udsender** en brugerdefineret hændelse, som andre dele af dit spil kan lytte efter
- **Opretholder** samme mønster som dine andre tastaturkontroller

### Trin 5: Opret beskedvisningssystem

Dit spil skal kommunikere resultater tydeligt til spillerne. Vi opretter et beskedsystem, der viser sejrs- og nederlagstilstande med farvekodet tekst, ligesom terminalgrænsefladerne på tidlige computersystemer, hvor grøn indikerede succes, og rød signalerede fejl.

**Opret funktionen `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Trin for trin, her er hvad der sker:**
- **Indstiller** skrifttype og størrelse for klar og læsbar tekst
- **Anvender** en farveparameter med "rød" som standard for advarsler
- **Centrerer** teksten horisontalt og vertikalt på lærredet
- **Bruger** moderne JavaScript standardparametre for fleksible farvevalg
- **Udnytter** canvas 2D-konteksten til direkte tekstgengivelse

**Opret funktionen `endGame()`:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Hvad denne funktion gør:**
- **Fryser** alt på plads - ingen flere bevægelige skibe eller lasere
- **Tager** en lille pause (200ms) for at lade den sidste frame blive tegnet færdig
- **Rydder** skærmen og maler den sort for dramatisk effekt
- **Viser** forskellige beskeder for vindere og tabere
- **Farvekoder** nyhederne - grøn for godt, rød for... ja, ikke så godt
- **Fortæller** spillerne præcis, hvordan de kan hoppe tilbage i spillet

### Trin 6: Implementer spilnulstillingsfunktionalitet

Nulstillingssystemet skal fuldstændigt rydde den aktuelle spiltilstand og initialisere en ny spilsession. Dette sikrer, at spillerne får en ren start uden resterende data fra det tidligere spil.

**Opret funktionen `resetGame()`:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Lad os forstå hver del:**
- **Tjekker**, om en spilsløjfe kører i øjeblikket, før den nulstilles
- **Rydder** den eksisterende spilsløjfe for at stoppe al nuværende spilaktivitet
- **Fjerner** alle hændelseslyttere for at forhindre hukommelseslækager
- **Reinitialiserer** spiltilstanden med friske objekter og variabler
- **Starter** en ny spilsløjfe med alle de essentielle spilfunktioner
- **Opretholder** samme 100ms interval for konsistent spilpræstation

**Tilføj Enter-tastens hændelseshåndtering til din `initGame()`-funktion:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Tilføj metoden `clear()` til din EventEmitter-klasse:**

```javascript
clear() {
  this.listeners = {};
}
```

**Vigtige punkter at huske:**
- **Forbinder** Enter-tastetryk med nulstillingsfunktionaliteten
- **Registrerer** denne hændelseslytter under spilinitialisering
- **Giver** en ren måde at fjerne alle hændelseslyttere ved nulstilling
- **Forhindrer** hukommelseslækager ved at rydde hændelseshåndterere mellem spil
- **Nulstiller** lyttere-objektet til en tom tilstand for frisk initialisering

## Tillykke! 🎉

👽 💥 🚀 Du har med succes bygget et komplet spil fra bunden. Ligesom programmørerne, der skabte de første videospil i 1970'erne, har du forvandlet linjer af kode til en interaktiv oplevelse med ordentlige spilmekanikker og brugerfeedback. 🚀 💥 👽

**Du har opnået:**
- **Implementeret** komplette vinder- og taberbetingelser med brugerfeedback
- **Skabt** et glidende genstartssystem for kontinuerlig gameplay
- **Designet** klar visuel kommunikation for spiltilstande
- **Håndteret** komplekse spiltilstandsovergange og oprydning
- **Sammensat** alle komponenter til et sammenhængende, spilbart spil

## GitHub Copilot Agent Challenge 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Forbedr rumspillet ved at implementere et niveauprogressionssystem med stigende sværhedsgrad og bonusfunktioner.

**Opgave:** Opret et flerniveaus rumspilssystem, hvor hvert niveau har flere fjendtlige skibe med øget hastighed og sundhed. Tilføj en pointmultiplikator, der stiger med hvert niveau, og implementer power-ups (som hurtig skydning eller skjold), der tilfældigt dukker op, når fjender bliver ødelagt. Inkluder en niveauafslutningsbonus og vis det aktuelle niveau på skærmen sammen med den eksisterende score og liv.

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Valgfri Forbedringsudfordring

**Tilføj Lyd til Dit Spil**: Forbedr din spiloplevelse ved at implementere lydeffekter! Overvej at tilføje lyd til:

- **Laser skud**, når spilleren skyder
- **Fjendens ødelæggelse**, når skibe bliver ramt
- **Helteskade**, når spilleren bliver ramt
- **Sejrsmusik**, når spillet er vundet
- **Nederlagslyd**, når spillet er tabt

**Eksempel på lydimplementering:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Hvad du skal vide:**
- **Opretter** Audio-objekter til forskellige lydeffekter
- **Nulstiller** `currentTime` for at tillade hurtige lydeffekter
- **Håndterer** browserens autoplay-politikker ved at udløse lyde fra brugerinteraktioner
- **Administrerer** lydstyrke og timing for bedre spiloplevelse

> 💡 **Læringsressource**: Udforsk denne [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) for at lære mere om implementering af lyd i JavaScript-spil.

## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/40)

## Gennemgang & Selvstudie

Din opgave er at skabe et nyt prøvespil, så udforsk nogle af de interessante spil derude for at se, hvilken type spil du kunne bygge.

## Opgave

[Byg et prøvespil](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.