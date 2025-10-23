<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-23T01:05:44+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 4: Een Laser Toevoegen en Botsingen Detecteren

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/35)

Denk aan het moment in Star Wars toen Luke's protonentorpedo's de uitlaatpoort van de Death Star raakten. Die precieze botsingsdetectie veranderde het lot van de melkweg! In games werkt botsingsdetectie op dezelfde manier - het bepaalt wanneer objecten met elkaar interageren en wat er vervolgens gebeurt.

In deze les voeg je laserwapens toe aan je ruimtespel en implementeer je botsingsdetectie. Net zoals NASA's missieplanners de trajecten van ruimtevaartuigen berekenen om puin te vermijden, leer je hoe je kunt detecteren wanneer gameobjecten elkaar kruisen. We splitsen dit op in beheersbare stappen die op elkaar voortbouwen.

Aan het einde heb je een werkend gevechtssysteem waarin lasers vijanden vernietigen en botsingen gebeurtenissen in het spel activeren. Dezezelfde principes van botsingsdetectie worden gebruikt in alles, van fysische simulaties tot interactieve webinterfaces.

✅ Doe wat onderzoek naar het allereerste computerspel dat ooit is geschreven. Wat was de functionaliteit ervan?

## Botsingsdetectie

Botsingsdetectie werkt zoals de nabijheidssensoren op de Apollo maanmodule - het controleert constant afstanden en geeft een waarschuwing wanneer objecten te dichtbij komen. In games bepaalt dit systeem wanneer objecten met elkaar interageren en wat er vervolgens moet gebeuren.

De aanpak die we gaan gebruiken behandelt elk gameobject als een rechthoek, vergelijkbaar met hoe luchtverkeersleidingssystemen vereenvoudigde geometrische vormen gebruiken om vliegtuigen te volgen. Deze rechthoekige methode lijkt misschien eenvoudig, maar is computationeel efficiënt en werkt goed voor de meeste spelscenario's.

### Rechthoekrepresentatie

Elk gameobject heeft coördinatiegrenzen nodig, vergelijkbaar met hoe de Mars Pathfinder rover zijn locatie op het Martiaanse oppervlak in kaart bracht. Hier is hoe we deze grenscoördinaten definiëren:

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

**Laten we dit opsplitsen:**
- **Bovenrand**: Dat is waar je object verticaal begint (zijn y-positie)
- **Linkerrand**: Waar het horizontaal begint (zijn x-positie)
- **Onderkant**: Voeg de hoogte toe aan de y-positie - nu weet je waar het eindigt!
- **Rechterrand**: Voeg de breedte toe aan de x-positie - en je hebt de volledige grens.

### Intersectie-algoritme

Het detecteren van rechthoekintersecties gebruikt logica vergelijkbaar met hoe de Hubble Space Telescope bepaalt of hemellichamen elkaar overlappen in zijn gezichtsveld. Het algoritme controleert op scheiding:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**De scheidingstest werkt zoals radarsystemen:**
- Is rechthoek 2 volledig rechts van rechthoek 1?
- Is rechthoek 2 volledig links van rechthoek 1?
- Is rechthoek 2 volledig onder rechthoek 1?
- Is rechthoek 2 volledig boven rechthoek 1?

Als geen van deze voorwaarden waar is, moeten de rechthoeken elkaar overlappen. Deze aanpak weerspiegelt hoe radaroperators bepalen of twee vliegtuigen op veilige afstanden zijn.

## Objectlevenscycli beheren

Wanneer een laser een vijand raakt, moeten beide objecten uit het spel worden verwijderd. Het verwijderen van objecten midden in een loop kan echter crashes veroorzaken - een les die op de harde manier werd geleerd in vroege computersystemen zoals de Apollo Guidance Computer. In plaats daarvan gebruiken we een "markeren voor verwijdering"-aanpak die objecten veilig verwijdert tussen frames.

Hier is hoe we iets markeren voor verwijdering:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Waarom deze aanpak werkt:**
- We markeren het object als "dood" maar verwijderen het niet meteen.
- Dit laat het huidige gameframe veilig afmaken.
- Geen crashes door te proberen iets te gebruiken dat al weg is!

Filter vervolgens gemarkeerde objecten uit voordat de volgende rendercyclus begint:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Wat dit filteren doet:**
- Maakt een nieuwe lijst met alleen de "levende" objecten.
- Verwijdert alles wat als dood is gemarkeerd.
- Houdt je spel soepel draaiend.
- Voorkomt geheugenopbouw door vernietigde objecten.

## Lasermechanica implementeren

Laserprojectielen in games werken volgens hetzelfde principe als fotontorpedo's in Star Trek - het zijn discrete objecten die in rechte lijnen bewegen totdat ze iets raken. Elke keer dat je op de spatiebalk drukt, wordt er een nieuw laserobject gemaakt dat over het scherm beweegt.

Om dit te laten werken, moeten we een paar verschillende onderdelen coördineren:

**Belangrijke onderdelen om te implementeren:**
- **Creëer** laserobjecten die vanuit de positie van de held worden gespawned.
- **Behandel** toetsenbordinvoer om lasercreatie te activeren.
- **Beheer** laserbeweging en levenscyclus.
- **Implementeer** visuele representatie voor de laserprojectielen.

## Vuursnelheid controleren

Onbeperkte vuursnelheden zouden de game-engine overweldigen en het spel te gemakkelijk maken. Echte wapensystemen hebben vergelijkbare beperkingen - zelfs de phasers van de USS Enterprise hadden tijd nodig om op te laden tussen schoten.

We implementeren een cooldown-systeem dat voorkomt dat je snel achter elkaar kunt schieten, terwijl de bediening responsief blijft:

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

**Hoe de cooldown werkt:**
- Bij het maken begint het wapen "heet" (kan nog niet schieten).
- Na de time-outperiode wordt het "koel" (klaar om te schieten).
- Voordat je schiet, controleren we: "Is het wapen koel?"
- Dit voorkomt spam-klikken terwijl de bediening responsief blijft.

✅ Raadpleeg les 1 in de ruimtespelserie om jezelf te herinneren aan cooldowns.

## Het botsingssysteem bouwen

Je breidt je bestaande ruimtespelcode uit om een botsingsdetectiesysteem te maken. Net zoals het geautomatiseerde botsingsvermijdingssysteem van het International Space Station, zal je spel continu objectposities monitoren en reageren op kruisingen.

Uitgaande van de code van je vorige les, voeg je botsingsdetectie toe met specifieke regels die de interacties tussen objecten bepalen.

> 💡 **Pro Tip**: De lasersprite is al opgenomen in je assets-map en wordt in je code verwezen, klaar voor implementatie.

### Botsingsregels om te implementeren

**Spelmechanica om toe te voegen:**
1. **Laser raakt vijand**: Vijandobject wordt vernietigd wanneer het wordt geraakt door een laserprojectiel.
2. **Laser raakt schermrand**: Laser wordt verwijderd wanneer het de bovenrand van het scherm bereikt.
3. **Vijand en held botsen**: Beide objecten worden vernietigd wanneer ze elkaar kruisen.
4. **Vijand bereikt onderkant**: Game over-conditie wanneer vijanden de onderkant van het scherm bereiken.

## Je ontwikkelomgeving instellen

Goed nieuws - we hebben al het meeste voorbereid voor je! Alle game-assets en basisstructuur wachten in de `your-work` submap, klaar om de coole botsingsfuncties toe te voegen.

### Projectstructuur

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**De bestandstructuur begrijpen:**
- **Bevat** alle sprite-afbeeldingen die nodig zijn voor de gameobjecten.
- **Inclusief** het hoofd-HTML-document en JavaScript-applicatiebestand.
- **Biedt** pakketconfiguratie voor lokale ontwikkelserver.

### De ontwikkelserver starten

Navigeer naar je projectmap en start de lokale server:

```bash
cd your-work
npm start
```

**Deze opdrachtreeks:**
- **Wijzigt** de map naar je werkprojectmap.
- **Start** een lokale HTTP-server op `http://localhost:5000`.
- **Serveert** je gamebestanden voor testen en ontwikkeling.
- **Maakt** live ontwikkeling mogelijk met automatische herlaadfunctie.

Open je browser en navigeer naar `http://localhost:5000` om de huidige staat van je spel te zien met de held en vijanden weergegeven op het scherm.

### Stapsgewijze implementatie

Net zoals de systematische aanpak die NASA gebruikte om het Voyager-ruimtevaartuig te programmeren, implementeren we botsingsdetectie methodisch, waarbij we elk onderdeel stap voor stap opbouwen.

#### 1. Voeg rechthoekige botsingsgrenzen toe

Laten we eerst onze gameobjecten leren hoe ze hun grenzen kunnen beschrijven. Voeg deze methode toe aan je `GameObject`-klasse:

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

**Wat deze methode doet:**
- **Creëert** een rechthoekobject met nauwkeurige grenscoördinaten.
- **Bereken** onder- en rechterranden met behulp van positie plus afmetingen.
- **Retourneert** een object dat klaar is voor botsingsdetectie-algoritmes.
- **Biedt** een gestandaardiseerde interface voor alle gameobjecten.

#### 2. Implementeer intersectiedetectie

Laten we nu onze botsingsdetective maken - een functie die kan vertellen wanneer twee rechthoeken elkaar overlappen:

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

**Dit algoritme werkt door:**
- **Test** vier scheidingsvoorwaarden tussen rechthoeken.
- **Retourneert** `false` als een van de scheidingsvoorwaarden waar is.
- **Geeft aan** dat er een botsing is wanneer er geen scheiding bestaat.
- **Gebruikt** negatielogica voor efficiënte intersectietests.

#### 3. Implementeer lasersysteem

Hier wordt het spannend! Laten we het lasersysteem opzetten.

##### Berichtconstanten

Definieer eerst enkele berichttypen zodat verschillende delen van ons spel met elkaar kunnen communiceren:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Deze constanten bieden:**
- **Standaardiseert** gebeurtenisnamen in de hele applicatie.
- **Maakt** consistente communicatie tussen spelsystemen mogelijk.
- **Voorkomt** typfouten bij het registreren van gebeurtenishandlers.

##### Toetsenbordinvoer verwerken

Voeg detectie van de spatiebalk toe aan je toetsgebeurtenislistener:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Deze invoerhandler:**
- **Detecteert** spatiebalkdrukken met behulp van keyCode 32.
- **Verzendt** een gestandaardiseerd gebeurtenisbericht.
- **Maakt** ontkoppelde schietlogica mogelijk.

##### Gebeurtenislistener instellen

Registreer schietgedrag in je `initGame()`-functie:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Deze gebeurtenislistener:**
- **Reageert** op spatiebalkgebeurtenissen.
- **Controleert** de status van de schiet-cooldown.
- **Activeert** lasercreatie wanneer toegestaan.

Voeg botsingsafhandeling toe voor laser-vijandinteracties:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Deze botsingshandler:**
- **Ontvangt** botsingsgebeurtenisgegevens met beide objecten.
- **Markeert** beide objecten voor verwijdering.
- **Zorgt** voor juiste opruiming na botsing.

#### 4. Maak de Laser-klasse

Implementeer een laserprojectiel dat omhoog beweegt en zijn eigen levenscyclus beheert:

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

**Deze klasse-implementatie:**
- **Breidt** GameObject uit om basisfunctionaliteit te erven.
- **Stelt** geschikte afmetingen in voor de lasersprite.
- **Creëert** automatische opwaartse beweging met behulp van `setInterval()`.
- **Behandelt** zelfvernietiging bij het bereiken van de bovenkant van het scherm.
- **Beheert** zijn eigen animatietiming en opruiming.

#### 5. Implementeer botsingsdetectiesysteem

Maak een uitgebreid botsingsdetectiefunctie:

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

**Dit botsingssysteem:**
- **Filtert** gameobjecten op type voor efficiënte tests.
- **Test** elke laser tegen elke vijand op intersecties.
- **Verzendt** botsingsgebeurtenissen wanneer intersecties worden gedetecteerd.
- **Ruimt** vernietigde objecten op na botsingsverwerking.

> ⚠️ **Belangrijk**: Voeg `updateGameObjects()` toe aan je hoofdgame-loop in `window.onload` om botsingsdetectie mogelijk te maken.

#### 6. Voeg cooldown-systeem toe aan Hero-klasse

Verbeter de Hero-klasse met schietmechanica en snelheidsbeperkingen:

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

**De verbeterde Hero-klasse begrijpen:**
- **Initialiseert** cooldown-timer op nul (klaar om te schieten).
- **Creëert** laserobjecten gepositioneerd boven het heldenschip.
- **Stelt** een cooldown-periode in om snel schieten te voorkomen.
- **Vermindert** cooldown-timer met interval-gebaseerde updates.
- **Biedt** een schietstatuscontrole via de `canFire()`-methode.

### Test je implementatie

Je ruimtespel heeft nu volledige botsingsdetectie en gevechtsmechanica. 🚀 Test deze nieuwe mogelijkheden:
- **Navigeer** met de pijltjestoetsen om de bewegingsbesturing te verifiëren.
- **Schiet lasers** met de spatiebalk - merk op hoe de cooldown spam-klikken voorkomt.
- **Observeer botsingen** wanneer lasers vijanden raken, wat verwijdering activeert.
- **Controleer opruiming** terwijl vernietigde objecten verdwijnen uit het spel.

Je hebt met succes een botsingsdetectiesysteem geïmplementeerd met dezelfde wiskundige principes die ruimtevaartuignavigatie en robotica begeleiden.

## GitHub Copilot Agent Uitdaging 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter het botsingsdetectiesysteem door power-ups te implementeren die willekeurig verschijnen en tijdelijke vaardigheden bieden wanneer ze door het heldenschip worden verzameld.

**Prompt:** Maak een PowerUp-klasse die GameObject uitbreidt en implementeer botsingsdetectie tussen de held en power-ups. Voeg minstens twee soorten power-ups toe: één die de vuursnelheid verhoogt (vermindert cooldown) en een andere die een tijdelijke schild creëert. Voeg spawn-logica toe die power-ups op willekeurige intervallen en posities creëert.

---

## 🚀 Uitdaging

Voeg een explosie toe! Bekijk de game-assets in [de Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) en probeer een explosie toe te voegen wanneer de laser een alien raakt.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/36)

## Review & Zelfstudie

Experimenteer met de intervallen in je spel tot nu toe. Wat gebeurt er als je ze verandert? Lees meer over [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Opdracht

[Verken botsingen](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.