<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-23T21:48:01+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel del 4: Lägg till en laser och upptäck kollisioner

## Förföreläsningsquiz

[Förföreläsningsquiz](https://ff-quizzes.netlify.app/web/quiz/35)

Tänk på ögonblicket i Star Wars när Lukes proton-torpeder träffade Dödsstjärnans avgasport. Den exakta kollisionen förändrade galaxens öde! I spel fungerar kollisionsdetektering på samma sätt - det avgör när objekt interagerar och vad som händer härnäst.

I den här lektionen kommer du att lägga till laser som vapen i ditt rymdspel och implementera kollisionsdetektering. Precis som NASAs uppdragsplanerare beräknar rymdfarkosters banor för att undvika skräp, kommer du att lära dig att upptäcka när spelobjekt korsar varandra. Vi kommer att bryta ner detta i hanterbara steg som bygger på varandra.

I slutet kommer du att ha ett fungerande stridssystem där lasrar förstör fiender och kollisioner utlöser händelser i spelet. Samma principer för kollision används i allt från fysiksimuleringar till interaktiva webbgränssnitt.

✅ Gör lite research om det allra första datorspelet som någonsin skapades. Vad var dess funktionalitet?

## Kollisionsdetektering

Kollisionsdetektering fungerar som närhetssensorerna på Apollo månlandare - den kontrollerar ständigt avstånd och utlöser varningar när objekt kommer för nära. I spel avgör detta system när objekt interagerar och vad som ska hända härnäst.

Tillvägagångssättet vi kommer att använda behandlar varje spelobjekt som en rektangel, på samma sätt som flygtrafikledningssystem använder förenklade geometriska former för att spåra flygplan. Denna rektangulära metod kan verka enkel, men den är beräkningsmässigt effektiv och fungerar bra för de flesta spelscenarier.

### Rektangelrepresentation

Varje spelobjekt behöver koordinatgränser, precis som Mars Pathfinder-rovern kartlade sin position på Mars yta. Så här definierar vi dessa gränskoordinater:

```javascript
rectFromGameObject() {
  return {
    top: this.y,
    left: this.x,
    bottom: this.y + this.height,
    right: this.x + this.width
  }
}
```

**Låt oss bryta ner detta:**
- **Övre kant**: Det är bara där ditt objekt börjar vertikalt (dess y-position)
- **Vänstra kant**: Där det börjar horisontellt (dess x-position) 
- **Nedre kant**: Lägg till höjden till y-positionen - nu vet du var det slutar!
- **Högra kant**: Lägg till bredden till x-positionen - och du har hela gränsen

### Intersektionsalgoritm

Att upptäcka rektangelintersektioner använder logik som liknar hur Hubble Space Telescope avgör om himlakroppar överlappar i sitt synfält. Algoritmen kontrollerar separation:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Separationstestet fungerar som radarsystem:**
- Är rektangel 2 helt till höger om rektangel 1?
- Är rektangel 2 helt till vänster om rektangel 1?
- Är rektangel 2 helt under rektangel 1?
- Är rektangel 2 helt ovanför rektangel 1?

Om ingen av dessa villkor är sanna, måste rektanglarna överlappa varandra. Denna metod speglar hur radaroperatörer avgör om två flygplan befinner sig på säkra avstånd.

## Hantera objektlivscykler

När en laser träffar en fiende måste båda objekten tas bort från spelet. Men att ta bort objekt mitt i en loop kan orsaka krascher - en läxa som lärdes den hårda vägen i tidiga datorsystem som Apollo Guidance Computer. Istället använder vi en "markera för borttagning"-metod som säkert tar bort objekt mellan bildrutor.

Så här markerar vi något för borttagning:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Varför denna metod fungerar:**
- Vi markerar objektet som "dött" men tar inte bort det direkt
- Detta låter den aktuella spelbildrutan avslutas säkert
- Inga krascher från att försöka använda något som redan är borta!

Filtrera sedan bort markerade objekt innan nästa renderingscykel:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Vad denna filtrering gör:**
- Skapar en ny lista med endast de "levande" objekten
- Rensar bort allt som är markerat som dött
- Håller ditt spel igång smidigt
- Förhindrar minnesproblem från ackumulerade förstörda objekt

## Implementera lasermekanik

Laserprojektiler i spel fungerar enligt samma princip som fotontorpeder i Star Trek - de är diskreta objekt som rör sig i raka linjer tills de träffar något. Varje tryck på mellanslagstangenten skapar ett nytt laserobjekt som rör sig över skärmen.

För att få detta att fungera måste vi samordna några olika delar:

**Viktiga komponenter att implementera:**
- **Skapa** laserobjekt som genereras från hjältefigurens position
- **Hantera** tangentbordsinmatning för att utlösa lasergenerering
- **Hantera** laserrörelse och livscykel
- **Implementera** visuell representation för laserprojektilerna

## Implementera kontroll av skjutfrekvens

Obegränsade skjutfrekvenser skulle överbelasta spelmotorn och göra spelet för enkelt. Riktiga vapensystem står inför liknande begränsningar - även USS Enterprises fasrar behövde tid för att ladda om mellan skotten.

Vi kommer att implementera ett nedkylningssystem som förhindrar snabb eldning samtidigt som vi behåller responsiva kontroller:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**Hur nedkylningssystemet fungerar:**
- När det skapas börjar vapnet "hett" (kan inte skjuta än)
- Efter timeout-perioden blir det "kallt" (redo att skjuta)
- Innan skjutning kontrollerar vi: "Är vapnet kallt?"
- Detta förhindrar spam-klickning samtidigt som kontrollerna förblir responsiva

✅ Hänvisa till lektion 1 i rymdspelsserien för att påminna dig om nedkylningssystem.

## Bygga kollisionssystemet

Du kommer att utöka din befintliga rymdspelskod för att skapa ett kollisionsdetekteringssystem. Precis som den internationella rymdstationens automatiska kollisionsundvikningssystem kommer ditt spel kontinuerligt att övervaka objektpositioner och reagera på intersektioner.

Utifrån din kod från föregående lektion kommer du att lägga till kollisionsdetektering med specifika regler som styr objektinteraktioner.

> 💡 **Proffstips**: Laserspriten finns redan i din tillgångsmapp och refereras i din kod, redo att implementeras.

### Kollisionsregler att implementera

**Spelmekanik att lägga till:**
1. **Laser träffar fiende**: Fiendeobjektet förstörs när det träffas av en laserprojektil
2. **Laser träffar skärmgräns**: Lasern tas bort när den når skärmens övre kant
3. **Fiende och hjälte kollision**: Båda objekten förstörs när de korsar varandra
4. **Fiende når botten**: Spel över när fiender når skärmens botten

## Ställa in din utvecklingsmiljö

God nyhet - vi har redan förberett det mesta av grunden för dig! Alla dina spelresurser och grundläggande struktur väntar i `your-work`-undermappen, redo för dig att lägga till de häftiga kollisionsfunktionerna.

### Projektstruktur

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Förstå filstrukturen:**
- **Innehåller** alla spritebilder som behövs för spelobjekten
- **Inkluderar** huvud-HTML-dokumentet och JavaScript-applikationsfilen
- **Tillhandahåller** paketkonfiguration för lokal utvecklingsserver

### Starta utvecklingsservern

Navigera till din projektmapp och starta den lokala servern:

```bash
cd your-work
npm start
```

**Denna kommandosekvens:**
- **Byter** katalog till din arbetsprojektmapp
- **Startar** en lokal HTTP-server på `http://localhost:5000`
- **Serverar** dina spel-filer för testning och utveckling
- **Möjliggör** liveutveckling med automatisk omladdning

Öppna din webbläsare och navigera till `http://localhost:5000` för att se ditt aktuella spel med hjälten och fienderna renderade på skärmen.

### Steg-för-steg-implementering

Precis som det systematiska tillvägagångssätt NASA använde för att programmera Voyager-rymdfarkosten, kommer vi att implementera kollisionsdetektering metodiskt, bygga varje komponent steg för steg.

#### 1. Lägg till rektangelkollisionsgränser

Först, låt oss lära våra spelobjekt att beskriva sina gränser. Lägg till denna metod i din `GameObject`-klass:

```javascript
rectFromGameObject() {
    return {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width,
    };
  }
```

**Denna metod åstadkommer:**
- **Skapar** ett rektangelobjekt med exakta gränskoordinater
- **Beräknar** nedre och högra kanter med position plus dimensioner
- **Returnerar** ett objekt redo för kollisionsdetekteringsalgoritmer
- **Tillhandahåller** ett standardiserat gränssnitt för alla spelobjekt

#### 2. Implementera intersektionsdetektering

Nu ska vi skapa vår kollisionsdetektiv - en funktion som kan avgöra när två rektanglar överlappar:

```javascript
function intersectRect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}
```

**Denna algoritm fungerar genom:**
- **Testar** fyra separationsvillkor mellan rektanglar
- **Returnerar** `false` om något separationsvillkor är sant
- **Indikerar** kollision när ingen separation finns
- **Använder** negationslogik för effektiv intersektionstestning

#### 3. Implementera laserskjutningssystem

Här blir det spännande! Låt oss sätta upp laserskjutningssystemet.

##### Meddelandekonstanter

Först, låt oss definiera några meddelandetyper så att olika delar av vårt spel kan kommunicera med varandra:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Dessa konstanter tillhandahåller:**
- **Standardiserar** händelsenamn i hela applikationen
- **Möjliggör** konsekvent kommunikation mellan spelsystem
- **Förhindrar** stavfel vid registrering av händelsehanterare

##### Tangentbordsinmatningshantering

Lägg till detektering av mellanslagstangenten i din tangenthändelselyssnare:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Denna inmatningshanterare:**
- **Upptäcker** mellanslagstangenttryck med keyCode 32
- **Sänder** ett standardiserat händelsemeddelande
- **Möjliggör** frikopplad skjutlogik

##### Händelselyssnare

Registrera skjutbeteende i din `initGame()`-funktion:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Denna händelselyssnare:**
- **Reagerar** på mellanslagstangenthändelser
- **Kontrollerar** nedkylningsstatus för skjutning
- **Utlöser** lasergenerering när det är tillåtet

Lägg till kollisionshantering för laser-fiende-interaktioner:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Denna kollisionshanterare:**
- **Tar emot** kollisionshändelsedata med båda objekten
- **Markerar** båda objekten för borttagning
- **Säkerställer** korrekt städning efter kollision

#### 4. Skapa Laser-klassen

Implementera en laserprojektil som rör sig uppåt och hanterar sin egen livscykel:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**Denna klassimplementering:**
- **Utökar** GameObject för att ärva grundläggande funktionalitet
- **Ställer in** lämpliga dimensioner för laserspriten
- **Skapar** automatisk uppåtrörelse med `setInterval()`
- **Hantera** självdestruktion när den når skärmens topp
- **Hantera** sin egen animationstiming och städning

#### 5. Implementera kollisionsdetekteringssystem

Skapa en omfattande kollisionsdetekteringsfunktion:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**Detta kollisionssystem:**
- **Filtrerar** spelobjekt efter typ för effektiv testning
- **Testar** varje laser mot varje fiende för intersektioner
- **Sänder** kollisionshändelser när intersektioner upptäcks
- **Rensar** bort förstörda objekt efter kollisionsbearbetning

> ⚠️ **Viktigt**: Lägg till `updateGameObjects()` i din huvudspelloop i `window.onload` för att aktivera kollisionsdetektering.

#### 6. Lägg till nedkylningssystem i Hero-klassen

Förbättra Hero-klassen med skjutmekanik och begränsning av skjutfrekvens:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.type = "Hero";
    this.speed = { x: 0, y: 0 };
    this.cooldown = 0;
  }
  
  fire() {
    gameObjects.push(new Laser(this.x + 45, this.y - 10));
    this.cooldown = 500;

    let id = setInterval(() => {
      if (this.cooldown > 0) {
        this.cooldown -= 100;
      } else {
        clearInterval(id);
      }
    }, 200);
  }
  
  canFire() {
    return this.cooldown === 0;
  }
}
```

**Förstå den förbättrade Hero-klassen:**
- **Initierar** nedkylningstimer vid noll (redo att skjuta)
- **Skapar** laserobjekt positionerade ovanför hjälteskeppet
- **Ställer in** nedkylningsperiod för att förhindra snabb skjutning
- **Minskar** nedkylningstimer med uppdateringar baserade på intervall
- **Tillhandahåller** skjutstatuskontroll via `canFire()`-metoden

### Testa din implementering

Ditt rymdspel har nu fullständig kollisionsdetektering och stridsmekanik. 🚀 Testa dessa nya funktioner:
- **Navigera** med piltangenterna för att verifiera rörelsekontroller
- **Skjut lasrar** med mellanslagstangenten - notera hur nedkylningen förhindrar spam-klickning
- **Observera kollisioner** när lasrar träffar fiender, vilket utlöser borttagning
- **Verifiera städning** när förstörda objekt försvinner från spelet

Du har framgångsrikt implementerat ett kollisionsdetekteringssystem med samma matematiska principer som styr rymdfarkostnavigering och robotik.

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Förbättra kollisionsdetekteringssystemet genom att implementera power-ups som genereras slumpmässigt och ger tillfälliga förmågor när de samlas in av hjälteskeppet.

**Uppmaning:** Skapa en PowerUp-klass som utökar GameObject och implementera kollisionsdetektering mellan hjälten och power-ups. Lägg till minst två typer av power-ups: en som ökar skjutfrekvensen (minskar nedkylning) och en annan som skapar en tillfällig sköld. Inkludera genereringslogik som skapar power-ups vid slumpmässiga intervaller och positioner.

---



## 🚀 Utmaning

Lägg till en explosion! Ta en titt på spelresurserna i [Space Art-repot](../../../../6-space-game/solution/spaceArt/readme.txt) och försök lägga till en explosion när lasern träffar en alien.

## Efterföreläsningsquiz

[Efterföreläsningsquiz](https://ff-quizzes.netlify.app/web/quiz/36)

## Granskning & Självstudier

Experimentera med intervallerna i ditt spel hittills. Vad händer när du ändrar dem? Läs mer om [JavaScript-timinghändelser](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Uppgift

[Utforska kollisioner](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.