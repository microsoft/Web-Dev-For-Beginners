<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-23T22:36:33+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill del 6: Slutt og restart

Hvert godt spill trenger klare avslutningsbetingelser og en smidig restartmekanisme. Du har allerede bygget et imponerende romspill med bevegelse, kamp og poengsystem – nå er det på tide å legge til de siste brikkene som gjør det komplett.

Spillet ditt kjører for øyeblikket uendelig, som Voyager-sondene som NASA sendte ut i 1977 – fortsatt på reise gjennom verdensrommet flere tiår senere. Selv om det er greit for romutforskning, trenger spill definerte endepunkter for å skape tilfredsstillende opplevelser.

I dag skal vi implementere skikkelige vinn/tap-betingelser og et restart-system. Når du er ferdig med denne leksjonen, vil du ha et polert spill som spillere kan fullføre og spille på nytt, akkurat som de klassiske arkadespillene som definerte mediet.

## Quiz før leksjonen

[Quiz før leksjonen](https://ff-quizzes.netlify.app/web/quiz/39)

## Forstå avslutningsbetingelser i spill

Når skal spillet ditt slutte? Dette grunnleggende spørsmålet har formet spilldesign siden den tidlige arkadealderen. Pac-Man slutter når du blir tatt av spøkelser eller har spist alle prikkene, mens Space Invaders slutter når romvesenene når bunnen eller du har ødelagt dem alle.

Som spillutvikler er det du som definerer seiers- og tapbetingelsene. For vårt romspill er her noen velprøvde tilnærminger som skaper engasjerende gameplay:

- **`N` fiendtlige skip er ødelagt**: Det er ganske vanlig at du må ødelegge `N` fiendtlige skip for å fullføre et nivå, spesielt hvis spillet er delt inn i forskjellige nivåer.
- **Skipet ditt er ødelagt**: Det finnes definitivt spill der du taper hvis skipet ditt blir ødelagt. En annen vanlig tilnærming er å ha et livsystem. Hver gang skipet ditt blir ødelagt, mister du et liv. Når alle liv er tapt, taper du spillet.
- **Du har samlet `N` poeng**: En annen vanlig avslutningsbetingelse er å samle poeng. Hvordan du får poeng er opp til deg, men det er ganske vanlig å tildele poeng til ulike aktiviteter som å ødelegge et fiendtlig skip eller samle gjenstander som *slippes* når de blir ødelagt.
- **Fullfør et nivå**: Dette kan innebære flere betingelser, som `X` fiendtlige skip ødelagt, `Y` poeng samlet eller kanskje at en spesifikk gjenstand er samlet.

## Implementere restart-funksjonalitet i spillet

Gode spill oppmuntrer til gjenspillbarhet gjennom smidige restart-mekanismer. Når spillere fullfører et spill (eller møter nederlag), vil de ofte prøve igjen umiddelbart – enten for å slå sin egen poengsum eller forbedre prestasjonen.

Tetris er et perfekt eksempel: når blokkene dine når toppen, kan du umiddelbart starte et nytt spill uten å navigere gjennom kompliserte menyer. Vi skal bygge et lignende restart-system som renser spilltilstanden og lar spillerne komme raskt tilbake i aksjon.

✅ **Refleksjon**: Tenk på spillene du har spilt. Under hvilke betingelser slutter de, og hvordan blir du oppfordret til å starte på nytt? Hva gjør en restart-opplevelse smidig i stedet for frustrerende?

## Hva du skal bygge

Du skal implementere de siste funksjonene som forvandler prosjektet ditt til en komplett spillopplevelse. Disse elementene skiller polerte spill fra enkle prototyper.

**Her er hva vi legger til i dag:**

1. **Seiersbetingelse**: Spreng alle fiendene og få en skikkelig feiring (det har du fortjent!)
2. **Tapbetingelse**: Mist alle livene og møt nederlaget med en tapsskjerm
3. **Restart-mekanisme**: Trykk Enter for å hoppe rett inn igjen – fordi én runde aldri er nok
4. **Tilstandshåndtering**: Ren start hver gang – ingen gjenværende fiender eller rare feil fra forrige spill

## Kom i gang

La oss forberede utviklingsmiljøet ditt. Du bør ha alle filene til romspillet ditt fra de forrige leksjonene klare.

**Prosjektet ditt bør se omtrent slik ut:**

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

**Start utviklingsserveren din:**

```bash
cd your-work
npm start
```

**Denne kommandoen:**
- Kjører en lokal server på `http://localhost:5000`
- Serverer filene dine riktig
- Oppdaterer automatisk når du gjør endringer

Åpne `http://localhost:5000` i nettleseren din og bekreft at spillet ditt kjører. Du bør kunne bevege deg, skyte og interagere med fiender. Når dette er bekreftet, kan vi gå videre med implementeringen.

> 💡 **Proff-tips**: For å unngå advarsler i Visual Studio Code, deklarer `gameLoopId` øverst i filen din som `let gameLoopId;` i stedet for å deklarere det inne i `window.onload`-funksjonen. Dette følger moderne beste praksis for deklarering av JavaScript-variabler.

## Implementeringssteg

### Steg 1: Lag funksjoner for sporing av avslutningsbetingelser

Vi trenger funksjoner som overvåker når spillet skal slutte. Som sensorer på den internasjonale romstasjonen som kontinuerlig overvåker kritiske systemer, vil disse funksjonene kontinuerlig sjekke spilltilstanden.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Dette skjer i bakgrunnen:**
- **Sjekker** om helten vår er tom for liv (au!)
- **Teller** hvor mange fiender som fortsatt er i live
- **Returnerer** `true` når slagmarken er fri for fiender
- **Bruker** enkel sann/falsk-logikk for å holde det oversiktlig
- **Filtrerer** gjennom alle spillobjekter for å finne de overlevende

### Steg 2: Oppdater hendelseshåndterere for avslutningsbetingelser

Nå skal vi koble disse betingelsessjekkene til spillets hendelsessystem. Hver gang en kollisjon oppstår, vil spillet evaluere om det utløser en avslutningsbetingelse. Dette skaper umiddelbar tilbakemelding for kritiske hendelser i spillet.

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

**Hva som skjer her:**
- **Laser treffer fiende**: Begge forsvinner, du får poeng, og vi sjekker om du har vunnet
- **Fiende treffer deg**: Du mister et liv, og vi sjekker om du fortsatt er i live
- **Smart rekkefølge**: Vi sjekker for tap først (ingen vil vinne og tape samtidig!)
- **Umiddelbare reaksjoner**: Så snart noe viktig skjer, vet spillet om det

### Steg 3: Legg til nye meldingskonstanter

Du må legge til nye meldingstyper i `Messages`-konstantobjektet ditt. Disse konstantene hjelper med å opprettholde konsistens og forhindre skrivefeil i hendelsessystemet ditt.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**I det ovennevnte har vi:**
- **Lagt til** konstanter for spillavslutningshendelser for å opprettholde konsistens
- **Brukt** beskrivende navn som tydelig indikerer hendelsens formål
- **Fulgte** den eksisterende navnekonvensjonen for meldingstyper

### Steg 4: Implementer restart-kontroller

Nå skal du legge til tastaturkontroller som lar spillere starte spillet på nytt. Enter-tasten er et naturlig valg siden den ofte er assosiert med å bekrefte handlinger og starte nye spill.

**Legg til deteksjon av Enter-tasten i din eksisterende keydown-hendelseslytter:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Legg til den nye meldingskonstanten:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Hva du trenger å vite:**
- **Utvider** ditt eksisterende system for håndtering av tastaturhendelser
- **Bruker** Enter-tasten som restart-utløser for intuitiv brukeropplevelse
- **Sender** en tilpasset hendelse som andre deler av spillet ditt kan lytte til
- **Opprettholder** samme mønster som dine andre tastaturkontroller

### Steg 5: Lag systemet for visning av meldinger

Spillet ditt må kommunisere resultater tydelig til spillerne. Vi skal lage et meldingssystem som viser seiers- og tapstilstander med fargekodet tekst, lik terminalgrensesnittene til tidlige datasystemer der grønt indikerte suksess og rødt signaliserte feil.

**Lag funksjonen `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Steg for steg, her er hva som skjer:**
- **Setter** fontstørrelse og familie for klar, lesbar tekst
- **Bruker** en fargeparameter med "rød" som standard for advarsler
- **Sentrerer** teksten horisontalt og vertikalt på lerretet
- **Bruker** moderne JavaScript standardparametere for fleksible fargealternativer
- **Utnytter** 2D-konteksten til lerretet for direkte tekstgjengivelse

**Lag funksjonen `endGame()`:**

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

**Hva denne funksjonen gjør:**
- **Fryser** alt på plass – ingen flere bevegelige skip eller lasere
- **Tar** en liten pause (200ms) for å la den siste rammen bli ferdig tegnet
- **Tørker** skjermen ren og maler den svart for dramatisk effekt
- **Viser** forskjellige meldinger for vinnere og tapere
- **Fargekoder** nyhetene – grønt for bra, rødt for... vel, ikke så bra
- **Forteller** spillerne nøyaktig hvordan de kan hoppe inn igjen

### Steg 6: Implementer spillreset-funksjonalitet

Reset-systemet må fullstendig rydde opp i den nåværende spilltilstanden og initialisere en ny spilløkt. Dette sikrer at spillerne får en ren start uten gjenværende data fra forrige spill.

**Lag funksjonen `resetGame()`:**

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

**La oss forstå hver del:**
- **Sjekker** om en spill-loop kjører for øyeblikket før den tilbakestilles
- **Fjerner** den eksisterende spill-loopen for å stoppe all nåværende spillaktivitet
- **Fjerner** alle hendelseslyttere for å forhindre minnelekkasjer
- **Initialiserer** spilltilstanden med nye objekter og variabler
- **Starter** en ny spill-loop med alle nødvendige spillfunksjoner
- **Opprettholder** samme 100ms intervall for konsistent spillytelse

**Legg til Enter-tastens hendelseslytter i din `initGame()`-funksjon:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Legg til metoden `clear()` i din EventEmitter-klasse:**

```javascript
clear() {
  this.listeners = {};
}
```

**Viktige punkter å huske:**
- **Kobler** Enter-tastetrykk til spillreset-funksjonaliteten
- **Registrerer** denne hendelseslytteren under spillinitialisering
- **Gir** en ren måte å fjerne alle hendelseslyttere ved tilbakestilling
- **Forhindrer** minnelekkasjer ved å fjerne hendelseshåndterere mellom spill
- **Tilbakestiller** lytterobjektet til en tom tilstand for ny initialisering

## Gratulerer! 🎉

👽 💥 🚀 Du har med suksess bygget et komplett spill fra bunnen av. Som programmererne som skapte de første videospillene på 1970-tallet, har du forvandlet kodelinjer til en interaktiv opplevelse med skikkelige spillmekanikker og brukerfeedback. 🚀 💥 👽

**Du har oppnådd:**
- **Implementert** komplette vinn- og tapbetingelser med brukerfeedback
- **Skapt** et sømløst restart-system for kontinuerlig spill
- **Designet** klar visuell kommunikasjon for spilltilstander
- **Håndtert** komplekse spilltilstandsoverganger og opprydding
- **Satt sammen** alle komponenter til et sammenhengende, spillbart spill

## GitHub Copilot Agent Challenge 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Forbedre romspillet ved å implementere et nivåprogresjonssystem med økende vanskelighetsgrad og bonusfunksjoner.

**Oppgave:** Lag et flernivå romspillsystem der hvert nivå har flere fiendtlige skip med økt hastighet og helse. Legg til en poengmultiplikator som øker med hvert nivå, og implementer power-ups (som rask skyting eller skjold) som dukker opp tilfeldig når fiender blir ødelagt. Inkluder en nivåfullføringsbonus og vis gjeldende nivå på skjermen sammen med eksisterende poengsum og liv.

Les mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Valgfri forbedringsutfordring

**Legg til lyd i spillet ditt**: Forbedre spillopplevelsen ved å implementere lydeffekter! Vurder å legge til lyd for:

- **Laserskudd** når spilleren skyter
- **Fiendeødeleggelse** når skip blir truffet
- **Helteskade** når spilleren blir truffet
- **Seiersmusikk** når spillet er vunnet
- **Taplyd** når spillet er tapt

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

**Hva du trenger å vite:**
- **Oppretter** Audio-objekter for ulike lydeffekter
- **Tilbakestiller** `currentTime` for å tillate raske lydeffekter
- **Håndterer** nettleserens autoplay-policy ved å utløse lyder fra brukerinteraksjoner
- **Administrerer** lydvolum og timing for bedre spillopplevelse

> 💡 **Læringsressurs**: Utforsk denne [lydsandkassen](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) for å lære mer om implementering av lyd i JavaScript-spill.

## Quiz etter leksjonen

[Quiz etter leksjonen](https://ff-quizzes.netlify.app/web/quiz/40)

## Gjennomgang og selvstudium

Din oppgave er å lage et nytt eksempelspill, så utforsk noen interessante spill der ute for å se hva slags spill du kan lage.

## Oppgave

[Bygg et eksempelspill](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.