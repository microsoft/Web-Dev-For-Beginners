<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-23T22:11:34+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "da"
}
-->
# Byg et rumspil del 4: Tilføj en laser og registrer kollisioner

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/35)

Tænk på øjeblikket i Star Wars, hvor Lukes proton-torpedoer ramte Dødsstjernens udstødningsport. Den præcise kollision ændrede galaksens skæbne! I spil fungerer kollisionsdetektion på samme måde - det afgør, hvornår objekter interagerer, og hvad der sker derefter.

I denne lektion vil du tilføje laser-våben til dit rumspil og implementere kollisionsdetektion. Ligesom NASAs missionplanlæggere beregner rumfartøjers baner for at undgå affald, vil du lære at registrere, når spilobjekter krydser hinanden. Vi bryder det ned i håndterbare trin, der bygger på hinanden.

Når du er færdig, vil du have et fungerende kampsystem, hvor lasere ødelægger fjender, og kollisioner udløser spilbegivenheder. De samme kollisionsprincipper bruges i alt fra fysiksimuleringer til interaktive webgrænseflader.

✅ Lav lidt research om det allerførste computerspil, der nogensinde er skrevet. Hvad var dets funktionalitet?

## Kollisionsdetektion

Kollisionsdetektion fungerer som nærhedssensorerne på Apollo-månemodulet - det kontrollerer konstant afstande og udløser advarsler, når objekter kommer for tæt på. I spil afgør dette system, hvornår objekter interagerer, og hvad der skal ske derefter.

Den tilgang, vi vil bruge, behandler hvert spilobjekt som en rektangel, ligesom lufttrafikstyringssystemer bruger forenklede geometriske former til at spore fly. Denne rektangelmetode kan virke simpel, men den er beregningsmæssigt effektiv og fungerer godt for de fleste spilsituationer.

### Rektangelrepræsentation

Hvert spilobjekt har brug for koordinatgrænser, ligesom Mars Pathfinder-roveren kortlagde sin placering på Mars' overflade. Sådan definerer vi disse grænsekoordinater:

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

**Lad os bryde det ned:**
- **Øverste kant**: Det er bare, hvor dit objekt starter lodret (dets y-position)
- **Venstre kant**: Hvor det starter vandret (dets x-position)
- **Nederste kant**: Tilføj højden til y-positionen - nu ved du, hvor det slutter!
- **Højre kant**: Tilføj bredden til x-positionen - og du har den komplette grænse.

### Intersektionsalgoritme

At registrere rektangelintersektioner bruger logik, der ligner den måde, Hubble-rumteleskopet afgør, om himmelobjekter overlapper i dets synsfelt. Algoritmen kontrollerer for adskillelse:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Adskillelsestesten fungerer som radarsystemer:**
- Er rektangel 2 helt til højre for rektangel 1?
- Er rektangel 2 helt til venstre for rektangel 1?
- Er rektangel 2 helt under rektangel 1?
- Er rektangel 2 helt over rektangel 1?

Hvis ingen af disse betingelser er sande, må rektanglerne overlappe. Denne tilgang minder om, hvordan radaroperatører afgør, om to fly er på sikre afstande.

## Håndtering af objektlivscyklusser

Når en laser rammer en fjende, skal begge objekter fjernes fra spillet. Men at slette objekter midt i en løkke kan forårsage nedbrud - en lektie, der blev lært på den hårde måde i tidlige computersystemer som Apollo Guidance Computer. I stedet bruger vi en "mark for deletion"-tilgang, der sikkert fjerner objekter mellem frames.

Sådan markerer vi noget for fjernelse:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Hvorfor denne tilgang fungerer:**
- Vi markerer objektet som "dødt", men sletter det ikke med det samme.
- Dette lader den aktuelle spilframe afslutte sikkert.
- Ingen nedbrud fra forsøg på at bruge noget, der allerede er væk!

Derefter filtrerer vi markerede objekter ud før næste render-cyklus:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Hvad denne filtrering gør:**
- Skaber en ny liste med kun de "levende" objekter.
- Smider alt ud, der er markeret som dødt.
- Holder dit spil kørende glat.
- Forhindrer hukommelsesopblæsning fra akkumulerede ødelagte objekter.

## Implementering af lasermekanik

Laserprojektiler i spil fungerer på samme princip som fotontorpedoer i Star Trek - de er diskrete objekter, der bevæger sig i lige linjer, indtil de rammer noget. Hver gang du trykker på mellemrumstasten, skabes et nyt laserobjekt, der bevæger sig hen over skærmen.

For at få dette til at fungere skal vi koordinere nogle forskellige dele:

**Nøglekomponenter at implementere:**
- **Opret** laserobjekter, der spawner fra heltenes position.
- **Håndter** tastaturinput for at udløse laseroprettelse.
- **Administrer** lasernes bevægelse og livscyklus.
- **Implementer** visuel repræsentation for laserprojektilerne.

## Implementering af skydehastighedskontrol

Ubegrænsede skydehastigheder ville overbelaste spilmotoren og gøre gameplayet for nemt. Rigtige våbensystemer står over for lignende begrænsninger - selv USS Enterprises phasere havde brug for tid til at genoplade mellem skud.

Vi implementerer et cooldown-system, der forhindrer hurtig affyring, mens det opretholder responsive kontroller:

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

**Hvordan cooldown fungerer:**
- Når det oprettes, starter våbnet "varmt" (kan ikke skyde endnu).
- Efter timeout-perioden bliver det "køligt" (klar til at skyde).
- Før affyring kontrollerer vi: "Er våbnet køligt?"
- Dette forhindrer spamklik, mens det holder kontrollerne responsive.

✅ Henvis til lektion 1 i rumspilserien for at minde dig selv om cooldowns.

## Opbygning af kollisionssystemet

Du vil udvide din eksisterende rumspilkode for at skabe et kollisionsdetektionssystem. Ligesom den internationale rumstations automatiske kollisionsundgåelsessystem vil dit spil kontinuerligt overvåge objektpositioner og reagere på intersektioner.

Start med koden fra din tidligere lektion, og tilføj kollisionsdetektion med specifikke regler, der styrer objektinteraktioner.

> 💡 **Pro Tip**: Laser-sprite er allerede inkluderet i din assets-mappe og refereret i din kode, klar til implementering.

### Kollisionsregler at implementere

**Spilmekanik at tilføje:**
1. **Laser rammer fjende**: Fjendeobjektet ødelægges, når det rammes af et laserprojektil.
2. **Laser rammer skærmgrænse**: Laser fjernes, når den når skærmens øverste kant.
3. **Fjende og helt kollision**: Begge objekter ødelægges, når de krydser hinanden.
4. **Fjende når bunden**: Spillet er tabt, når fjender når skærmens bund.

## Opsætning af dit udviklingsmiljø

Godt nyt - vi har allerede sat det meste af grundlaget op for dig! Alle dine spilressourcer og grundlæggende struktur venter i undermappen `your-work`, klar til at du kan tilføje de seje kollisionsfunktioner.

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

**Forstå filstrukturen:**
- **Indeholder** alle sprite-billeder, der er nødvendige for spilobjekterne.
- **Inkluderer** hoved-HTML-dokumentet og JavaScript-applikationsfilen.
- **Tilbyder** pakke-konfiguration til lokal udviklingsserver.

### Start udviklingsserveren

Naviger til din projektmappe og start den lokale server:

```bash
cd your-work
npm start
```

**Denne kommandosekvens:**
- **Skifter** mappe til din arbejdende projektmappe.
- **Starter** en lokal HTTP-server på `http://localhost:5000`.
- **Serverer** dine spilfiler til test og udvikling.
- **Muliggør** live-udvikling med automatisk genindlæsning.

Åbn din browser og naviger til `http://localhost:5000` for at se din aktuelle spiltilstand med helten og fjenderne gengivet på skærmen.

### Trin-for-trin implementering

Ligesom den systematiske tilgang NASA brugte til at programmere Voyager-rumfartøjet, vil vi implementere kollisionsdetektion metodisk og bygge hver komponent trin for trin.

#### 1. Tilføj rektangelkollisionsgrænser

Først skal vi lære vores spilobjekter at beskrive deres grænser. Tilføj denne metode til din `GameObject`-klasse:

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

**Denne metode opnår:**
- **Opretter** et rektangelobjekt med præcise grænsekoordinater.
- **Beregner** nederste og højre kanter ved hjælp af position plus dimensioner.
- **Returnerer** et objekt klar til kollisionsdetektionsalgoritmer.
- **Tilbyder** en standardiseret grænseflade for alle spilobjekter.

#### 2. Implementer intersektionsdetektion

Nu skal vi skabe vores kollisionsdetektiv - en funktion, der kan afgøre, hvornår to rektangler overlapper:

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

**Denne algoritme fungerer ved:**
- **Tester** fire adskillelsesbetingelser mellem rektangler.
- **Returnerer** `false`, hvis nogen adskillelsesbetingelse er sand.
- **Indikerer** kollision, når ingen adskillelse eksisterer.
- **Bruger** negationslogik for effektiv intersektionstest.

#### 3. Implementer laserskyde-system

Nu bliver det spændende! Lad os opsætte laserskyde-systemet.

##### Meddelelseskonstanter

Først skal vi definere nogle meddelelsestyper, så forskellige dele af vores spil kan kommunikere med hinanden:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Disse konstanter tilbyder:**
- **Standardiserer** begivenhedsnavne i hele applikationen.
- **Muliggør** konsistent kommunikation mellem spilsystemer.
- **Forhindrer** tastefejl i begivenhedshåndtering.

##### Håndtering af tastaturinput

Tilføj mellemrumstast-detektion til din tastaturbegivenhedslytter:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Denne inputhåndtering:**
- **Registrerer** mellemrumstasttryk ved hjælp af keyCode 32.
- **Udsender** en standardiseret begivenhedsmeddelelse.
- **Muliggør** løsrevet skyde-logik.

##### Opsætning af begivenhedslytter

Registrer skydeadfærd i din `initGame()`-funktion:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Denne begivenhedslytter:**
- **Reagerer** på mellemrumstast-begivenheder.
- **Kontrollerer** skydecooldown-status.
- **Udløser** laseroprettelse, når det er tilladt.

Tilføj kollisionshåndtering for laser-fjende-interaktioner:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Denne kollisionshåndtering:**
- **Modtager** kollisionsbegivenhedsdata med begge objekter.
- **Markerer** begge objekter til fjernelse.
- **Sikrer** korrekt oprydning efter kollision.

#### 4. Opret Laser-klassen

Implementer et laserprojektil, der bevæger sig opad og administrerer sin egen livscyklus:

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

**Denne klasseimplementering:**
- **Udvider** GameObject for at arve grundlæggende funktionalitet.
- **Indstiller** passende dimensioner for laser-sprite.
- **Skaber** automatisk opadgående bevægelse ved hjælp af `setInterval()`.
- **Håndterer** selvdestruktion, når den når skærmens top.
- **Administrerer** sin egen animationstiming og oprydning.

#### 5. Implementer kollisionsdetektionssystem

Opret en omfattende kollisionsdetektionsfunktion:

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

**Dette kollisionssystem:**
- **Filtrerer** spilobjekter efter type for effektiv testning.
- **Tester** hver laser mod hver fjende for intersektioner.
- **Udsender** kollisionsbegivenheder, når intersektioner registreres.
- **Rydder** ødelagte objekter op efter kollisionsbehandling.

> ⚠️ **Vigtigt**: Tilføj `updateGameObjects()` til din hovedspilsløkke i `window.onload` for at aktivere kollisionsdetektion.

#### 6. Tilføj cooldown-system til Hero-klassen

Forbedr Hero-klassen med skyde-mekanik og hastighedsbegrænsning:

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

**Forstå den forbedrede Hero-klasse:**
- **Initialiserer** cooldown-timeren til nul (klar til at skyde).
- **Opretter** laserobjekter placeret over helteskibet.
- **Indstiller** cooldown-periode for at forhindre hurtig affyring.
- **Reducerer** cooldown-timeren ved hjælp af intervalbaserede opdateringer.
- **Tilbyder** statuskontrol for affyring via `canFire()`-metoden.

### Test din implementering

Dit rumspil har nu komplette kollisionsdetektions- og kampmekanikker. 🚀 Test disse nye funktioner:
- **Naviger** med piletasterne for at verificere bevægelseskontroller.
- **Affyr lasere** med mellemrumstasten - bemærk, hvordan cooldown forhindrer spamklik.
- **Observer kollisioner**, når lasere rammer fjender, og udløser fjernelse.
- **Bekræft oprydning**, da ødelagte objekter forsvinder fra spillet.

Du har med succes implementeret et kollisionsdetektionssystem ved hjælp af de samme matematiske principper, der guider rumfartsnavigation og robotteknologi.

## GitHub Copilot Agent Challenge 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Forbedr kollisionsdetektionssystemet ved at implementere power-ups, der spawner tilfældigt og giver midlertidige evner, når de samles op af helteskibet.

**Opgave:** Opret en PowerUp-klasse, der udvider GameObject, og implementer kollisionsdetektion mellem helten og power-ups. Tilføj mindst to typer power-ups: en, der øger skydehastigheden (reducerer cooldown), og en anden, der skaber et midlertidigt skjold. Inkluder spawn-logik, der skaber power-ups med tilfældige intervaller og positioner.

---



## 🚀 Udfordring

Tilføj en eksplosion! Tag et kig på spilressourcerne i [Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) og prøv at tilføje en eksplosion, når laseren rammer en alien.

## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/36)

## Gennemgang & Selvstudie

Eksperimenter med intervallerne i dit spil indtil videre. Hvad sker der, når du ændrer dem? Læs mere om [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Opgave

[Udforsk kollisioner](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.