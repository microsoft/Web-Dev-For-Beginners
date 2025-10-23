<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-23T01:05:05+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtegame Deel 6: Einde en Herstart

Elke geweldige game heeft duidelijke eindvoorwaarden en een soepel herstartmechanisme nodig. Je hebt al een indrukwekkende ruimtegame gebouwd met beweging, gevechten en scores - nu is het tijd om de laatste stukjes toe te voegen die het compleet maken.

Je game draait momenteel eindeloos, net zoals de Voyager-sondes die NASA in 1977 lanceerde - nog steeds reizend door de ruimte decennia later. Hoewel dat prima is voor ruimteverkenning, hebben games gedefinieerde eindpunten nodig om een bevredigende ervaring te creëren.

Vandaag gaan we win/verlies-voorwaarden en een herstartsysteem implementeren. Aan het einde van deze les heb je een gepolijste game die spelers kunnen voltooien en opnieuw kunnen spelen, net zoals de klassieke arcadegames die het medium hebben gedefinieerd.

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/39)

## Begrijpen van Eindvoorwaarden in Games

Wanneer moet je game eindigen? Deze fundamentele vraag heeft het ontwerp van games gevormd sinds de vroege arcadeperiode. Pac-Man eindigt wanneer je wordt gepakt door geesten of alle stippen hebt verzameld, terwijl Space Invaders eindigt wanneer aliens de bodem bereiken of je ze allemaal vernietigt.

Als maker van de game bepaal jij de overwinning- en verliesvoorwaarden. Voor onze ruimtegame zijn hier bewezen benaderingen die zorgen voor boeiende gameplay:

- **`N` Vijandelijke schepen zijn vernietigd**: Het is vrij gebruikelijk dat je een level moet voltooien door een bepaald aantal vijandelijke schepen te vernietigen.
- **Je schip is vernietigd**: Er zijn zeker games waarin je verliest als je schip wordt vernietigd. Een andere veelvoorkomende aanpak is het concept van levens. Elke keer dat je schip wordt vernietigd, verlies je een leven. Zodra alle levens verloren zijn, verlies je de game.
- **Je hebt `N` punten verzameld**: Een andere veelvoorkomende eindvoorwaarde is het verzamelen van punten. Hoe je punten verzamelt, is aan jou, maar het is vrij gebruikelijk om punten toe te kennen aan verschillende activiteiten, zoals het vernietigen van een vijandelijk schip of het verzamelen van items die worden gedropt wanneer ze worden vernietigd.
- **Voltooi een level**: Dit kan verschillende voorwaarden omvatten, zoals `X` vijandelijke schepen vernietigd, `Y` punten verzameld of misschien een specifiek item dat is verzameld.

## Implementeren van Herstartfunctionaliteit

Goede games moedigen herhaalbaarheid aan door middel van soepele herstartmechanismen. Wanneer spelers een game voltooien (of verliezen), willen ze vaak meteen opnieuw proberen - of het nu is om hun score te verbeteren of hun prestaties te verbeteren.

Tetris is hier een perfect voorbeeld van: wanneer je blokken de bovenkant bereiken, kun je direct een nieuw spel starten zonder door complexe menu's te navigeren. We bouwen een vergelijkbaar herstartsysteem dat de game-status schoon reset en spelers snel weer in actie brengt.

✅ **Reflectie**: Denk aan de games die je hebt gespeeld. Onder welke voorwaarden eindigen ze, en hoe word je aangespoord om opnieuw te starten? Wat maakt een herstartervaring soepel versus frustrerend?

## Wat je gaat bouwen

Je implementeert de laatste functies die je project transformeren tot een complete game-ervaring. Deze elementen onderscheiden gepolijste games van eenvoudige prototypes.

**Dit voegen we vandaag toe:**

1. **Overwinningsvoorwaarde**: Vernietig alle vijanden en krijg een gepaste viering (je hebt het verdiend!)
2. **Verliesvoorwaarde**: Raak je levens kwijt en zie een verlies-scherm
3. **Herstartmechanisme**: Druk op Enter om meteen opnieuw te beginnen - want één spel is nooit genoeg
4. **Statusbeheer**: Elke keer een schone lei - geen overgebleven vijanden of rare glitches van het vorige spel

## Aan de slag

Laten we je ontwikkelomgeving voorbereiden. Je zou alle bestanden van je ruimtegame uit de vorige lessen klaar moeten hebben.

**Je project zou er ongeveer zo uit moeten zien:**

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

**Start je ontwikkelserver:**

```bash
cd your-work
npm start
```

**Deze opdracht:**
- Draait een lokale server op `http://localhost:5000`
- Serveert je bestanden correct
- Vernieuwt automatisch wanneer je wijzigingen aanbrengt

Open `http://localhost:5000` in je browser en controleer of je game draait. Je zou moeten kunnen bewegen, schieten en interactie hebben met vijanden. Zodra dit is bevestigd, kunnen we doorgaan met de implementatie.

> 💡 **Pro Tip**: Om waarschuwingen in Visual Studio Code te vermijden, declareer `gameLoopId` bovenaan je bestand als `let gameLoopId;` in plaats van het te declareren binnen de `window.onload` functie. Dit volgt moderne JavaScript variabele declaratie best practices.

## Implementatiestappen

### Stap 1: Maak Functies voor het Bijhouden van Eindvoorwaarden

We hebben functies nodig om te monitoren wanneer de game moet eindigen. Net zoals sensoren op het internationale ruimtestation die constant kritieke systemen monitoren, zullen deze functies continu de status van de game controleren.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Wat er onder de motorkap gebeurt:**
- **Controleert** of onze held geen levens meer heeft (au!)
- **Telt** hoeveel vijanden nog leven en actief zijn
- **Geeft** `true` terug wanneer het slagveld vrij is van vijanden
- **Gebruikt** eenvoudige true/false logica om het overzichtelijk te houden
- **Filtert** door alle game-objecten om de overlevenden te vinden

### Stap 2: Update Eventhandlers voor Eindvoorwaarden

Nu verbinden we deze conditiechecks met het event-systeem van de game. Elke keer dat er een botsing plaatsvindt, evalueert de game of dit een eindvoorwaarde activeert. Dit zorgt voor directe feedback bij kritieke game-events.

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

**Wat hier gebeurt:**
- **Laser raakt vijand**: Beide verdwijnen, je krijgt punten, en we controleren of je hebt gewonnen
- **Vijand raakt jou**: Je verliest een leven, en we controleren of je nog in leven bent
- **Slimme volgorde**: We controleren eerst op verlies (niemand wil tegelijkertijd winnen en verliezen!)
- **Directe reacties**: Zodra er iets belangrijks gebeurt, weet de game het

### Stap 3: Voeg Nieuwe Berichtconstanten Toe

Je moet nieuwe berichttypes toevoegen aan je `Messages` constant object. Deze constanten helpen consistentie te behouden en voorkomen typefouten in je event-systeem.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**In het bovenstaande hebben we:**
- **Toegevoegd** constanten voor game-einde events om consistentie te behouden
- **Gebruikt** beschrijvende namen die duidelijk het doel van het event aangeven
- **Gevolgd** de bestaande naamgevingsconventie voor berichttypes

### Stap 4: Implementeer Herstartbediening

Nu voeg je toetsenbordbediening toe waarmee spelers de game kunnen herstarten. De Enter-toets is een logische keuze, omdat deze vaak wordt geassocieerd met het bevestigen van acties en het starten van nieuwe games.

**Voeg detectie van de Enter-toets toe aan je bestaande keydown eventlistener:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Voeg de nieuwe berichtconstante toe:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Wat je moet weten:**
- **Breidt** je bestaande toetsenbord event-handlingsysteem uit
- **Gebruikt** de Enter-toets als herstarttrigger voor intuïtieve gebruikerservaring
- **Stuurt** een aangepast event uit dat andere delen van je game kunnen beluisteren
- **Behoudt** hetzelfde patroon als je andere toetsenbordbedieningen

### Stap 5: Maak het Berichtweergavesysteem

Je game moet resultaten duidelijk communiceren naar spelers. We maken een berichtensysteem dat overwinnings- en verliesstatussen weergeeft met kleurgecodeerde tekst, vergelijkbaar met de terminalinterfaces van vroege computersystemen waar groen succes aangaf en rood fouten signaleerde.

**Maak de functie `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Stap voor stap, wat er gebeurt:**
- **Stelt** de lettergrootte en -familie in voor duidelijke, leesbare tekst
- **Past** een kleurparameter toe met "rood" als standaard voor waarschuwingen
- **Centreert** de tekst horizontaal en verticaal op het canvas
- **Gebruikt** moderne JavaScript standaardparameters voor flexibele kleurkeuzes
- **Benut** de canvas 2D-context voor directe tekstweergave

**Maak de functie `endGame()`:**

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

**Wat deze functie doet:**
- **Bevriest** alles - geen bewegende schepen of lasers meer
- **Neemt** een korte pauze (200ms) om het laatste frame te laten tekenen
- **Maakt** het scherm schoon en kleurt het zwart voor een dramatisch effect
- **Toont** verschillende berichten voor winnaars en verliezers
- **Kleurcodeert** het nieuws - groen voor goed, rood voor... nou ja, niet zo goed
- **Vertelt** spelers precies hoe ze weer kunnen beginnen

### Stap 6: Implementeer Game Reset Functionaliteit

Het resetsysteem moet de huidige game-status volledig opruimen en een nieuwe gamesessie initialiseren. Dit zorgt ervoor dat spelers een frisse start krijgen zonder overgebleven gegevens van het vorige spel.

**Maak de functie `resetGame()`:**

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

**Laten we elk onderdeel begrijpen:**
- **Controleert** of er momenteel een game-loop actief is voordat er wordt gereset
- **Maakt** de bestaande game-loop leeg om alle huidige game-activiteit te stoppen
- **Verwijdert** alle eventlisteners om geheugenlekken te voorkomen
- **Initialiseert** de game-status opnieuw met nieuwe objecten en variabelen
- **Start** een nieuwe game-loop met alle essentiële gamefuncties
- **Behoudt** hetzelfde 100ms-interval voor consistente gameprestaties

**Voeg de Enter-toets eventhandler toe aan je `initGame()` functie:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Voeg de `clear()` methode toe aan je EventEmitter klasse:**

```javascript
clear() {
  this.listeners = {};
}
```

**Belangrijke punten om te onthouden:**
- **Verbindt** het indrukken van de Enter-toets met de reset game-functionaliteit
- **Registreert** deze eventlistener tijdens de game-initialisatie
- **Biedt** een schone manier om alle eventlisteners te verwijderen bij het resetten
- **Voorkomt** geheugenlekken door eventhandlers tussen games te wissen
- **Reset** het listeners-object naar een lege status voor nieuwe initialisatie

## Gefeliciteerd! 🎉

👽 💥 🚀 Je hebt met succes een complete game vanaf de basis opgebouwd. Net als de programmeurs die de eerste videogames in de jaren '70 creëerden, heb je regels code omgezet in een interactieve ervaring met goede game-mechanica en gebruikersfeedback. 🚀 💥 👽

**Je hebt bereikt:**
- **Geïmplementeerd** volledige win- en verliesvoorwaarden met gebruikersfeedback
- **Gecreëerd** een naadloos herstartsysteem voor continue gameplay
- **Ontworpen** duidelijke visuele communicatie voor gamestatussen
- **Beheerd** complexe game-statusovergangen en opruiming
- **Samengesteld** alle componenten tot een samenhangende, speelbare game

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter de ruimtegame door een levelprogressiesysteem te implementeren met toenemende moeilijkheidsgraad en bonusfuncties.

**Prompt:** Maak een multi-level ruimtegame systeem waarbij elk level meer vijandelijke schepen heeft met verhoogde snelheid en gezondheid. Voeg een scorevermenigvuldiger toe die toeneemt met elk level, en implementeer power-ups (zoals snel schieten of een schild) die willekeurig verschijnen wanneer vijanden worden vernietigd. Voeg een levelvoltooiingsbonus toe en toon het huidige level op het scherm naast de bestaande score en levens.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## 🚀 Optionele Uitdaging voor Verbetering

**Voeg Audio toe aan je Game**: Verhoog de spelervaring door geluidseffecten toe te voegen! Overweeg om audio toe te voegen voor:

- **Laser schoten** wanneer de speler vuurt
- **Vijandelijke vernietiging** wanneer schepen worden geraakt
- **Schade aan de held** wanneer de speler geraakt wordt
- **Overwinningsmuziek** wanneer de game wordt gewonnen
- **Verliesgeluid** wanneer de game verloren is

**Voorbeeld van audio-implementatie:**

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

**Wat je moet weten:**
- **Maakt** Audio-objecten voor verschillende geluidseffecten
- **Reset** de `currentTime` om snelle geluidseffecten mogelijk te maken
- **Behandelt** autoplay-beleid van browsers door geluiden te activeren via gebruikersinteracties
- **Beheert** audiovolume en timing voor een betere game-ervaring

> 💡 **Leermiddel**: Verken deze [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) om meer te leren over het implementeren van audio in JavaScript-games.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/40)

## Review & Zelfstudie

Je opdracht is om een nieuw voorbeeldspel te maken, dus verken enkele interessante games om te zien wat voor soort game je zou kunnen bouwen.

## Opdracht

[Maak een Voorbeeldspel](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.