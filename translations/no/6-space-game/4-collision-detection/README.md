<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-23T22:37:16+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill del 4: Legge til en laser og oppdage kollisjoner

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/35)

Tenk på øyeblikket i Star Wars da Lukes proton-torpedoer traff eksosporten på Dødsstjernen. Den presise kollisjonsdeteksjonen endret skjebnen til galaksen! I spill fungerer kollisjonsdeteksjon på samme måte - den avgjør når objekter interagerer og hva som skjer videre.

I denne leksjonen skal du legge til laser-våpen i romspillet ditt og implementere kollisjonsdeteksjon. Akkurat som NASAs oppdragsplanleggere beregner romfartøyets baner for å unngå rusk, skal du lære å oppdage når spillobjekter krysser hverandre. Vi deler dette opp i håndterbare trinn som bygger på hverandre.

Ved slutten av leksjonen vil du ha et fungerende kampsystem der lasere ødelegger fiender og kollisjoner utløser spillhendelser. De samme kollisjonsprinsippene brukes i alt fra fysikksimuleringer til interaktive webgrensesnitt.

✅ Gjør litt research om det aller første dataspillet som ble laget. Hva var dets funksjonalitet?

## Kollisjonsdeteksjon

Kollisjonsdeteksjon fungerer som nærhetssensorene på Apollo månemodulen - den sjekker konstant avstander og utløser varsler når objekter kommer for nærme. I spill avgjør dette systemet når objekter interagerer og hva som skal skje videre.

Tilnærmingen vi skal bruke behandler hvert spillobjekt som et rektangel, på samme måte som lufttrafikkontrollsystemer bruker forenklede geometriske former for å spore fly. Denne rektangulære metoden kan virke enkel, men den er beregningsmessig effektiv og fungerer godt for de fleste spillscenarier.

### Rektangelrepresentasjon

Hvert spillobjekt trenger koordinatgrenser, på samme måte som Mars Pathfinder-roveren kartla sin posisjon på Mars' overflate. Slik definerer vi disse grensekoordinatene:

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

**La oss bryte dette ned:**
- **Øvre kant**: Det er bare der objektet ditt starter vertikalt (y-posisjonen)
- **Venstre kant**: Der det starter horisontalt (x-posisjonen)
- **Nedre kant**: Legg til høyden til y-posisjonen - nå vet du hvor det slutter!
- **Høyre kant**: Legg til bredden til x-posisjonen - og du har hele grensen

### Interseksjonsalgoritme

Å oppdage rektangelinterseksjoner bruker logikk som ligner på hvordan Hubble-romteleskopet avgjør om himmelobjekter overlapper i sitt synsfelt. Algoritmen sjekker for separasjon:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Separasjonstesten fungerer som radarsystemer:**
- Er rektangel 2 helt til høyre for rektangel 1?
- Er rektangel 2 helt til venstre for rektangel 1?
- Er rektangel 2 helt under rektangel 1?
- Er rektangel 2 helt over rektangel 1?

Hvis ingen av disse betingelsene er sanne, må rektanglene overlappe. Denne tilnærmingen speiler hvordan radaroperatører avgjør om to fly er på sikre avstander.

## Håndtering av objektlivssykluser

Når en laser treffer en fiende, må begge objektene fjernes fra spillet. Men å slette objekter midt i en løkke kan føre til krasj - en lærdom som ble erfart på den harde måten i tidlige datasystemer som Apollo Guidance Computer. I stedet bruker vi en "mark for sletting"-tilnærming som trygt fjerner objekter mellom rammer.

Slik markerer vi noe for fjerning:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Hvorfor denne tilnærmingen fungerer:**
- Vi markerer objektet som "dødt", men sletter det ikke med en gang
- Dette lar den nåværende spillrammen fullføres trygt
- Ingen krasj fra å prøve å bruke noe som allerede er borte!

Deretter filtrerer vi ut merkede objekter før neste rendringssyklus:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Hva denne filtreringen gjør:**
- Lager en ny liste med bare de "levende" objektene
- Kaster ut alt som er merket som dødt
- Holder spillet ditt i gang jevnt
- Forhindrer minneoppblåsing fra akkumulerte ødelagte objekter

## Implementering av lasermekanikk

Laserprosjektiler i spill fungerer på samme prinsipp som fotontorpedoer i Star Trek - de er diskrete objekter som beveger seg i rette linjer til de treffer noe. Hvert trykk på mellomromstasten skaper et nytt laserobjekt som beveger seg over skjermen.

For å få dette til å fungere, må vi koordinere noen forskjellige deler:

**Nøkkelkomponenter å implementere:**
- **Opprett** laserobjekter som spawner fra heltenes posisjon
- **Håndter** tastaturinngang for å utløse laseropprettelse
- **Administrer** lasernes bevegelse og livssyklus
- **Implementer** visuell representasjon for laserprosjektilene

## Implementering av skytefrekvenskontroll

Ubegrensede skytefrekvenser ville overvelde spillmotoren og gjøre spillet for enkelt. Ekte våpensystemer står overfor lignende begrensninger - selv USS Enterprises phasere trengte tid til å lade opp mellom skudd.

Vi skal implementere et nedkjølingssystem som forhindrer rask skyting mens vi opprettholder responsive kontroller:

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

**Hvordan nedkjølingen fungerer:**
- Når opprettet, starter våpenet "varmt" (kan ikke skyte ennå)
- Etter tidsavbruddsperioden blir det "kaldt" (klart til å skyte)
- Før skyting sjekker vi: "Er våpenet kaldt?"
- Dette forhindrer spam-klikk mens vi holder kontrollene responsive

✅ Se leksjon 1 i romspillsserien for å minne deg selv om nedkjølingssystemer.

## Bygging av kollisjonssystemet

Du vil utvide den eksisterende romspillkoden din for å lage et kollisjonsdeteksjonssystem. Som den internasjonale romstasjonens automatiserte kollisjonsunngåelsessystem, vil spillet ditt kontinuerlig overvåke objektposisjoner og reagere på interseksjoner.

Fra koden i forrige leksjon skal du legge til kollisjonsdeteksjon med spesifikke regler som styrer objektinteraksjoner.

> 💡 **Profftips**: Laser-sprite er allerede inkludert i ressursmappen din og referert i koden din, klar for implementering.

### Kollisjonsregler som skal implementeres

**Spillmekanikk å legge til:**
1. **Laser treffer fiende**: Fiendeobjektet blir ødelagt når det treffes av et laserprosjektil
2. **Laser treffer skjermgrense**: Laser fjernes når den når øvre kant av skjermen
3. **Fiende og helt kolliderer**: Begge objektene blir ødelagt når de krysser hverandre
4. **Fiende når bunnen**: Spill over-tilstand når fiender når bunnen av skjermen

## Sette opp utviklingsmiljøet ditt

Gode nyheter - vi har allerede satt opp det meste av grunnlaget for deg! Alle spillressursene dine og den grunnleggende strukturen venter i `your-work`-undermappen, klar for at du skal legge til de kule kollisjonsfunksjonene.

### Prosjektstruktur

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
- **Inneholder** alle sprite-bilder som trengs for spillobjektene
- **Inkluderer** hoved-HTML-dokumentet og JavaScript-applikasjonsfilen
- **Gir** pakkeoppsett for lokal utviklingsserver

### Starte utviklingsserveren

Naviger til prosjektmappen din og start den lokale serveren:

```bash
cd your-work
npm start
```

**Denne kommandosekvensen:**
- **Endrer** katalog til arbeidsprosjektmappen din
- **Starter** en lokal HTTP-server på `http://localhost:5000`
- **Serverer** spillfilene dine for testing og utvikling
- **Aktiverer** live utvikling med automatisk oppdatering

Åpne nettleseren din og naviger til `http://localhost:5000` for å se den nåværende spilltilstanden din med helten og fiendene gjengitt på skjermen.

### Trinnvis implementering

Som den systematiske tilnærmingen NASA brukte for å programmere Voyager-romfartøyet, skal vi implementere kollisjonsdeteksjon metodisk, bygge hver komponent trinn for trinn.

#### 1. Legg til rektangelkollisjonsgrenser

Først skal vi lære spillobjektene våre hvordan de beskriver grensene sine. Legg til denne metoden i `GameObject`-klassen din:

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

**Denne metoden oppnår:**
- **Oppretter** et rektangelobjekt med presise grensekoordinater
- **Beregner** nedre og høyre kanter ved hjelp av posisjon pluss dimensjoner
- **Returnerer** et objekt klart for kollisjonsdeteksjonsalgoritmer
- **Gir** et standardisert grensesnitt for alle spillobjekter

#### 2. Implementer interseksjonsdeteksjon

Nå skal vi lage vår kollisjonsdetektiv - en funksjon som kan avgjøre når to rektangler overlapper:

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

**Denne algoritmen fungerer ved:**
- **Tester** fire separasjonsbetingelser mellom rektangler
- **Returnerer** `false` hvis noen separasjonsbetingelse er sann
- **Indikerer** kollisjon når ingen separasjon eksisterer
- **Bruker** negasjonslogikk for effektiv interseksjonstesting

#### 3. Implementer laserskytesystem

Nå blir det spennende! La oss sette opp laserskytesystemet.

##### Meldingskonstanter

Først, la oss definere noen meldingstyper slik at forskjellige deler av spillet vårt kan kommunisere med hverandre:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Disse konstantene gir:**
- **Standardiserer** hendelsesnavn gjennom hele applikasjonen
- **Muliggjør** konsistent kommunikasjon mellom spillsystemer
- **Forhindrer** skrivefeil i hendelseshåndtering

##### Håndtering av tastaturinngang

Legg til deteksjon av mellomromstast i tastaturhendelseslytter:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Denne inngangslytter:**
- **Oppdager** trykk på mellomromstasten ved hjelp av keyCode 32
- **Sender** en standardisert hendelsesmelding
- **Muliggjør** frakoblet skyte-logikk

##### Oppsett av hendelseslytter

Registrer skyteadferd i `initGame()`-funksjonen din:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Denne hendelseslytteren:**
- **Reagerer** på hendelser fra mellomromstasten
- **Sjekker** status for skytenedkjøling
- **Utløser** laseropprettelse når det er tillatt

Legg til kollisjonshåndtering for laser-fiende-interaksjoner:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Denne kollisjonshåndteringen:**
- **Mottar** kollisjonshendelsesdata med begge objektene
- **Markerer** begge objektene for fjerning
- **Sikrer** riktig opprydding etter kollisjon

#### 4. Opprett Laser-klassen

Implementer et laserprosjektil som beveger seg oppover og administrerer sin egen livssyklus:

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

**Denne klasseimplementeringen:**
- **Utvider** GameObject for å arve grunnleggende funksjonalitet
- **Setter** passende dimensjoner for laser-sprite
- **Oppretter** automatisk oppoverbevegelse ved hjelp av `setInterval()`
- **Håndterer** selvdestruksjon når den når skjermens topp
- **Administrerer** sin egen animasjonstiming og opprydding

#### 5. Implementer kollisjonsdeteksjonssystem

Lag en omfattende kollisjonsdeteksjonsfunksjon:

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

**Dette kollisjonssystemet:**
- **Filtrerer** spillobjekter etter type for effektiv testing
- **Tester** hver laser mot hver fiende for interseksjoner
- **Sender** kollisjonshendelser når interseksjoner oppdages
- **Rydder** opp ødelagte objekter etter kollisjonsbehandling

> ⚠️ **Viktig**: Legg til `updateGameObjects()` i hovedspill-løkken din i `window.onload` for å aktivere kollisjonsdeteksjon.

#### 6. Legg til nedkjølingssystem i Hero-klassen

Forbedre Hero-klassen med skytemekanikk og hastighetsbegrensning:

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

**Forstå den forbedrede Hero-klassen:**
- **Initialiserer** nedkjølingstimeren på null (klar til å skyte)
- **Oppretter** laserobjekter posisjonert over helteskipet
- **Setter** nedkjølingsperiode for å forhindre rask skyting
- **Reduserer** nedkjølingstimeren ved hjelp av intervallbaserte oppdateringer
- **Gir** statuskontroll for skyting gjennom `canFire()`-metoden

### Testing av implementeringen din

Romspillet ditt har nå komplette kollisjonsdeteksjons- og kampmekanikker. 🚀 Test disse nye funksjonene:
- **Naviger** med piltastene for å verifisere bevegelseskontroller
- **Skyt lasere** med mellomromstasten - merk hvordan nedkjølingen forhindrer spam-klikk
- **Observer kollisjoner** når lasere treffer fiender, og utløser fjerning
- **Verifiser opprydding** når ødelagte objekter forsvinner fra spillet

Du har med suksess implementert et kollisjonsdeteksjonssystem ved hjelp av de samme matematiske prinsippene som styrer romfartsnavigasjon og robotikk.

## GitHub Copilot Agent-utfordring 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Forbedre kollisjonsdeteksjonssystemet ved å implementere power-ups som spawner tilfeldig og gir midlertidige evner når de samles inn av helteskipet.

**Prompt:** Lag en PowerUp-klasse som utvider GameObject og implementer kollisjonsdeteksjon mellom helten og power-ups. Legg til minst to typer power-ups: en som øker skytefrekvensen (reduserer nedkjøling) og en annen som skaper et midlertidig skjold. Inkluder spawn-logikk som skaper power-ups med tilfeldige intervaller og posisjoner.

---

## 🚀 Utfordring

Legg til en eksplosjon! Ta en titt på spillressursene i [Space Art-repoet](../../../../6-space-game/solution/spaceArt/readme.txt) og prøv å legge til en eksplosjon når laseren treffer en alien.

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/36)

## Gjennomgang og selvstudie

Eksperimenter med intervallene i spillet ditt så langt. Hva skjer når du endrer dem? Les mer om [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Oppgave

[Utforsk kollisjoner](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.