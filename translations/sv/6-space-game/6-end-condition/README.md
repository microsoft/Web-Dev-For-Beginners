<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-23T21:47:20+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sv"
}
-->
# Bygg ett Rymdspel Del 6: Slut och Starta om

Varje bra spel behöver tydliga slutvillkor och en smidig omstartsmekanism. Du har byggt ett imponerande rymdspel med rörelse, strid och poängräkning - nu är det dags att lägga till de sista bitarna som gör det komplett.

Ditt spel körs för närvarande oändligt, precis som Voyager-sonderna som NASA skickade ut 1977 - fortfarande på väg genom rymden decennier senare. Även om det är bra för rymdutforskning, behöver spel definierade slutpunkter för att skapa en tillfredsställande upplevelse.

Idag ska vi implementera ordentliga vinst-/förlustvillkor och ett omstartssystem. I slutet av denna lektion kommer du ha ett polerat spel som spelare kan avsluta och spela om, precis som de klassiska arkadspelen som definierade mediet.

## Förhandsquiz

[Förhandsquiz](https://ff-quizzes.netlify.app/web/quiz/39)

## Förstå Spelslutvillkor

När ska ditt spel sluta? Denna grundläggande fråga har format speldesign sedan den tidiga arkaderan. Pac-Man slutar när du fångas av spöken eller rensar alla prickar, medan Space Invaders slutar när utomjordingarna når botten eller du förstör dem alla.

Som spelkreatör definierar du vinst- och förlustvillkoren. För vårt rymdspel är här beprövade metoder som skapar engagerande spelupplevelser:

- **`N` fiendeskepp har förstörts**: Det är ganska vanligt att dela upp ett spel i olika nivåer där du måste förstöra `N` fiendeskepp för att klara en nivå.
- **Ditt skepp har förstörts**: Det finns definitivt spel där du förlorar om ditt skepp förstörs. En annan vanlig metod är att ha ett livsystem. Varje gång ditt skepp förstörs dras ett liv av. När alla liv är slut förlorar du spelet.
- **Du har samlat `N` poäng**: Ett annat vanligt slutvillkor är att samla poäng. Hur du får poäng är upp till dig, men det är ganska vanligt att tilldela poäng till olika aktiviteter som att förstöra ett fiendeskepp eller kanske samla föremål som föremål *släpper* när de förstörs.
- **Slutföra en nivå**: Detta kan innebära flera villkor såsom `X` fiendeskepp förstörda, `Y` poäng samlade eller kanske att ett specifikt föremål har samlats in.

## Implementera Omstartsfunktionalitet

Bra spel uppmuntrar till att spela om genom smidiga omstartsmekanismer. När spelare avslutar ett spel (eller möter nederlag) vill de ofta försöka igen direkt - antingen för att slå sitt rekord eller förbättra sin prestation.

Tetris exemplifierar detta perfekt: när dina block når toppen kan du direkt starta ett nytt spel utan att navigera genom komplicerade menyer. Vi ska bygga ett liknande omstartssystem som rensar spelets tillstånd och snabbt får spelare tillbaka i action.

✅ **Reflektion**: Tänk på spelen du har spelat. Under vilka villkor slutar de, och hur uppmanas du att starta om? Vad gör en omstartsupplevelse smidig kontra frustrerande?

## Vad Du Kommer Att Bygga

Du kommer att implementera de sista funktionerna som förvandlar ditt projekt till en komplett spelupplevelse. Dessa element skiljer polerade spel från grundläggande prototyper.

**Här är vad vi lägger till idag:**

1. **Vinstvillkor**: Förstör alla fiender och få en ordentlig firning (du har förtjänat det!)
2. **Förlustvillkor**: Förlora alla liv och möt nederlaget med en förlustskärm
3. **Omstartsmekanism**: Tryck på Enter för att hoppa direkt tillbaka in - för ett spel är aldrig nog
4. **Tillståndshantering**: Ren start varje gång - inga kvarvarande fiender eller konstiga buggar från förra spelet

## Kom igång

Låt oss förbereda din utvecklingsmiljö. Du bör ha alla dina rymdspelsfiler från de tidigare lektionerna redo.

**Ditt projekt bör se ut ungefär så här:**

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

**Starta din utvecklingsserver:**

```bash
cd your-work
npm start
```

**Detta kommando:**
- Kör en lokal server på `http://localhost:5000`
- Serverar dina filer korrekt
- Uppdaterar automatiskt när du gör ändringar

Öppna `http://localhost:5000` i din webbläsare och verifiera att ditt spel körs. Du bör kunna röra dig, skjuta och interagera med fiender. När detta är bekräftat kan vi gå vidare med implementeringen.

> 💡 **Proffstips**: För att undvika varningar i Visual Studio Code, deklarera `gameLoopId` högst upp i din fil som `let gameLoopId;` istället för att deklarera det inne i funktionen `window.onload`. Detta följer moderna JavaScript-principer för variabeldeklaration.

## Implementeringssteg

### Steg 1: Skapa Funktioner för Att Spåra Slutvillkor

Vi behöver funktioner för att övervaka när spelet ska sluta. Precis som sensorer på den internationella rymdstationen som ständigt övervakar kritiska system, kommer dessa funktioner kontinuerligt att kontrollera spelets tillstånd.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Vad som händer bakom kulisserna:**
- **Kontrollerar** om vår hjälte har slut på liv (aj!)
- **Räknar** hur många fiender som fortfarande är vid liv
- **Returnerar** `true` när slagfältet är fritt från fiender
- **Använder** enkel true/false-logik för att hålla det enkelt
- **Filtrerar** genom alla spelobjekt för att hitta överlevande

### Steg 2: Uppdatera Händelsehanterare för Slutvillkor

Nu ska vi koppla dessa villkorskontroller till spelets händelsesystem. Varje gång en kollision inträffar kommer spelet att utvärdera om det utlöser ett slutvillkor. Detta skapar omedelbar feedback för viktiga händelser i spelet.

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

**Vad som händer här:**
- **Laser träffar fiende**: Båda försvinner, du får poäng, och vi kontrollerar om du har vunnit
- **Fiende träffar dig**: Du förlorar ett liv, och vi kontrollerar om du fortfarande är vid liv
- **Smart ordning**: Vi kontrollerar nederlag först (ingen vill vinna och förlora samtidigt!)
- **Omedelbara reaktioner**: Så snart något viktigt händer, vet spelet om det

### Steg 3: Lägg till Nya Meddelandekonstanter

Du måste lägga till nya meddelandetyper till ditt `Messages`-konstantobjekt. Dessa konstanter hjälper till att upprätthålla konsekvens och förhindra stavfel i ditt händelsesystem.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**I ovanstående har vi:**
- **Lagt till** konstanter för spelsluthändelser för att upprätthålla konsekvens
- **Använt** beskrivande namn som tydligt anger händelsens syfte
- **Följt** den befintliga namngivningskonventionen för meddelandetyper

### Steg 4: Implementera Omstartskontroller

Nu ska du lägga till tangentbordskontroller som tillåter spelare att starta om spelet. Enter-tangenten är ett naturligt val eftersom den ofta förknippas med att bekräfta åtgärder och starta nya spel.

**Lägg till Enter-tangentdetektering till din befintliga keydown-händelselyssnare:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Lägg till den nya meddelandekonstanten:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Vad du behöver veta:**
- **Utökar** ditt befintliga tangentbordshanteringssystem
- **Använder** Enter-tangenten som omstartstrigger för intuitiv användarupplevelse
- **Sänder** en anpassad händelse som andra delar av ditt spel kan lyssna på
- **Bibehåller** samma mönster som dina andra tangentbordskontroller

### Steg 5: Skapa Meddelandesystemet

Ditt spel behöver kommunicera resultat tydligt till spelare. Vi ska skapa ett meddelandesystem som visar vinst- och förlusttillstånd med färgkodad text, liknande terminalgränssnitt på tidiga datorsystem där grönt indikerade framgång och rött signalerade fel.

**Skapa funktionen `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Steg för steg, här är vad som händer:**
- **Ställer in** teckensnittsstorlek och familj för tydlig, läsbar text
- **Använder** en färgparameter med "röd" som standard för varningar
- **Centrerar** texten horisontellt och vertikalt på canvasen
- **Använder** moderna JavaScript-standardparametrar för flexibla färgalternativ
- **Utnyttjar** canvas 2D-kontexten för direkt textåtergivning

**Skapa funktionen `endGame()`:**

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

**Vad denna funktion gör:**
- **Fryser** allt på plats - inga fler rörliga skepp eller laserstrålar
- **Tar** en liten paus (200ms) för att låta den sista bilden ritas klart
- **Rensar** skärmen och målar den svart för dramatisk effekt
- **Visar** olika meddelanden för vinnare och förlorare
- **Färgkodar** nyheterna - grönt för bra, rött för... ja, inte så bra
- **Berättar** för spelare exakt hur de kan hoppa tillbaka in

### Steg 6: Implementera Spelåterställningsfunktionalitet

Återställningssystemet måste helt rensa det aktuella speltillståndet och initiera en ny spelsession. Detta säkerställer att spelare får en ren start utan kvarvarande data från föregående spel.

**Skapa funktionen `resetGame()`:**

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

**Låt oss förstå varje del:**
- **Kontrollerar** om en spelloop för närvarande körs innan återställning
- **Rensar** den befintliga spelloopen för att stoppa all aktuell spelaktivitet
- **Tar bort** alla händelselyssnare för att förhindra minnesläckor
- **Initierar** speltillståndet med nya objekt och variabler
- **Startar** en ny spelloop med alla nödvändiga spelfunktioner
- **Bibehåller** samma 100ms-intervall för konsekvent spelprestanda

**Lägg till Enter-tangentens händelsehanterare till din `initGame()`-funktion:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Lägg till metoden `clear()` till din EventEmitter-klass:**

```javascript
clear() {
  this.listeners = {};
}
```

**Viktiga punkter att komma ihåg:**
- **Kopplar** Enter-tangenttryckning till återställningsfunktionen
- **Registrerar** denna händelselyssnare under spelinitiering
- **Ger** ett rent sätt att ta bort alla händelselyssnare vid återställning
- **Förhindrar** minnesläckor genom att rensa händelsehanterare mellan spel
- **Återställer** lyssnarobjektet till ett tomt tillstånd för ny initiering

## Grattis! 🎉

👽 💥 🚀 Du har framgångsrikt byggt ett komplett spel från grunden. Precis som programmerarna som skapade de första videospelen på 1970-talet har du förvandlat kodrader till en interaktiv upplevelse med ordentliga spelmekanismer och användarfeedback. 🚀 💥 👽

**Du har uppnått:**
- **Implementerat** kompletta vinst- och förlustvillkor med användarfeedback
- **Skapat** ett sömlöst omstartssystem för kontinuerligt spelande
- **Designat** tydlig visuell kommunikation för speltillstånd
- **Hanterat** komplexa övergångar och rensning av speltillstånd
- **Satt ihop** alla komponenter till ett sammanhängande, spelbart spel

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Förbättra rymdspelet genom att implementera ett nivåprogressionssystem med ökande svårighetsgrad och bonusfunktioner.

**Uppmaning:** Skapa ett flernivåsystem för rymdspelet där varje nivå har fler fiendeskepp med ökad hastighet och hälsa. Lägg till en poängmultiplikator som ökar med varje nivå och implementera power-ups (som snabb eld eller sköld) som slumpmässigt dyker upp när fiender förstörs. Inkludera en nivåavslutningsbonus och visa den aktuella nivån på skärmen tillsammans med befintliga poäng och liv.

Läs mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Valfri Förbättringsutmaning

**Lägg till ljud till ditt spel**: Förbättra din spelupplevelse genom att implementera ljudeffekter! Överväg att lägga till ljud för:

- **Laserstrålar** när spelaren skjuter
- **Fiendens förstörelse** när skepp träffas
- **Hjälteskada** när spelaren träffas
- **Segermusik** när spelet vinns
- **Förlustljud** när spelet förloras

**Exempel på ljudimplementering:**

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

**Vad du behöver veta:**
- **Skapar** ljudobjekt för olika ljudeffekter
- **Återställer** `currentTime` för att tillåta snabba ljudeffekter
- **Hantera** webbläsarens autoplay-policy genom att trigga ljud från användarinteraktioner
- **Hantera** ljudvolym och timing för bättre spelupplevelse

> 💡 **Lärresurs**: Utforska denna [ljudsandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) för att lära dig mer om att implementera ljud i JavaScript-spel.

## Efterföreläsningsquiz

[Efterföreläsningsquiz](https://ff-quizzes.netlify.app/web/quiz/40)

## Granskning & Självstudier

Din uppgift är att skapa ett nytt provspel, så utforska några intressanta spel där ute för att se vilken typ av spel du kan bygga.

## Uppgift

[Bygg ett Provspel](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.