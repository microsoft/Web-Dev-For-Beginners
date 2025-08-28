<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-27T20:26:27+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 4: Een Laser Toevoegen en Botsingen Detecteren

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/35)

In deze les leer je hoe je lasers kunt afvuren met JavaScript! We voegen twee dingen toe aan ons spel:

- **Een laser**: deze laser wordt afgevuurd vanuit het ruimteschip van de held en beweegt verticaal omhoog.
- **Botsingsdetectie**, als onderdeel van het implementeren van de mogelijkheid om te *schieten* voegen we ook enkele leuke spelregels toe:
   - **Laser raakt vijand**: Vijand sterft als hij wordt geraakt door een laser.
   - **Laser raakt bovenkant scherm**: Een laser wordt vernietigd als hij de bovenkant van het scherm raakt.
   - **Botsing tussen vijand en held**: Een vijand en de held worden vernietigd als ze elkaar raken.
   - **Vijand raakt onderkant scherm**: Een vijand en de held worden vernietigd als de vijand de onderkant van het scherm raakt.

Kortom, jij -- *de held* -- moet alle vijanden raken met een laser voordat ze de onderkant van het scherm bereiken.

✅ Doe wat onderzoek naar het allereerste computerspel ooit geschreven. Wat was de functionaliteit ervan?

Laten we samen heldhaftig zijn!

## Botsingsdetectie

Hoe doen we botsingsdetectie? We moeten onze spelobjecten zien als rechthoeken die bewegen. Waarom, vraag je je misschien af? Nou, de afbeelding die wordt gebruikt om een spelobject te tekenen is een rechthoek: het heeft een `x`, `y`, `breedte` en `hoogte`.

Als twee rechthoeken, bijvoorbeeld een held en een vijand, *overlappen*, heb je een botsing. Wat er dan moet gebeuren, hangt af van de spelregels. Om botsingsdetectie te implementeren, heb je het volgende nodig:

1. Een manier om een rechthoekrepresentatie van een spelobject te krijgen, zoals dit:

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

2. Een vergelijkingsfunctie, deze functie kan er als volgt uitzien:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Hoe vernietigen we dingen

Om dingen in een spel te vernietigen, moet je het spel laten weten dat het dit object niet langer moet tekenen in de spelcyclus die op een bepaald interval wordt geactiveerd. Een manier om dit te doen is door een spelobject als *dood* te markeren wanneer er iets gebeurt, zoals dit:

```javascript
// collision happened
enemy.dead = true
```

Vervolgens kun je *dode* objecten verwijderen voordat je het scherm opnieuw tekent, zoals dit:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Hoe vuren we een laser af

Een laser afvuren betekent reageren op een toetsgebeurtenis en een object creëren dat in een bepaalde richting beweegt. We moeten daarom de volgende stappen uitvoeren:

1. **Creëer een laserobject**: vanaf de bovenkant van het ruimteschip van de held, dat bij het aanmaken omhoog begint te bewegen richting de bovenkant van het scherm.
2. **Koppel code aan een toetsgebeurtenis**: we moeten een toets op het toetsenbord kiezen die het afvuren van de laser door de speler vertegenwoordigt.
3. **Creëer een spelobject dat eruitziet als een laser** wanneer de toets wordt ingedrukt.

## Cooldown voor onze laser

De laser moet elke keer worden afgevuurd wanneer je een toets indrukt, bijvoorbeeld *spatiebalk*. Om te voorkomen dat het spel in korte tijd te veel lasers produceert, moeten we dit oplossen. De oplossing is het implementeren van een zogenaamde *cooldown*, een timer, die ervoor zorgt dat een laser slechts met een bepaalde frequentie kan worden afgevuurd. Je kunt dit als volgt implementeren:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Raadpleeg les 1 in de ruimtespelserie om jezelf te herinneren aan *cooldowns*.

## Wat te bouwen

Je neemt de bestaande code (die je zou moeten hebben opgeschoond en gerefactord) van de vorige les en breidt deze uit. Begin met de code van deel II of gebruik de code bij [Deel III - starter](../../../../../../../../../your-work).

> tip: de laser waarmee je gaat werken bevindt zich al in je assets-map en wordt door je code verwezen.

- **Voeg botsingsdetectie toe**, wanneer een laser iets raakt, moeten de volgende regels gelden:
   1. **Laser raakt vijand**: vijand sterft als hij wordt geraakt door een laser.
   2. **Laser raakt bovenkant scherm**: Een laser wordt vernietigd als hij de bovenkant van ons scherm raakt.
   3. **Botsing tussen vijand en held**: een vijand en de held worden vernietigd als ze elkaar raken.
   4. **Vijand raakt onderkant scherm**: Een vijand en de held worden vernietigd als de vijand de onderkant van het scherm raakt.

## Aanbevolen stappen

Zoek de bestanden die voor je zijn aangemaakt in de submap `your-work`. Het zou het volgende moeten bevatten:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Start je project in de map `your_work` door het volgende in te typen:

```bash
cd your-work
npm start
```

Hiermee wordt een HTTP-server gestart op adres `http://localhost:5000`. Open een browser en voer dat adres in, op dit moment zou het de held en alle vijanden moeten weergeven, maar er beweegt nog niets :).

### Code toevoegen

1. **Stel een rechthoekrepresentatie van je spelobject in om botsingen te verwerken**. De onderstaande code stelt je in staat om een rechthoekrepresentatie van een `GameObject` te krijgen. Bewerk je GameObject-klasse om dit uit te breiden:

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

2. **Voeg code toe die botsingen controleert**. Dit wordt een nieuwe functie die test of twee rechthoeken elkaar overlappen:

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

3. **Voeg de mogelijkheid toe om een laser af te vuren**
   1. **Voeg een toetsgebeurtenis toe**. De *spatiebalk* moet een laser creëren net boven het ruimteschip van de held. Voeg drie constanten toe in het Messages-object:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Verwerk de spatiebalk**. Bewerk de `window.addEventListener` keyup-functie om spaties te verwerken:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Voeg luisteraars toe**. Bewerk de `initGame()`-functie om ervoor te zorgen dat de held kan schieten wanneer de spatiebalk wordt ingedrukt:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       en voeg een nieuwe `eventEmitter.on()`-functie toe om gedrag te garanderen wanneer een vijand botst met een laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Beweeg object**, Zorg ervoor dat de laser geleidelijk naar de bovenkant van het scherm beweegt. Je maakt een nieuwe Laser-klasse die `GameObject` uitbreidt, zoals je eerder hebt gedaan: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Verwerk botsingen**, Implementeer botsingsregels voor de laser. Voeg een `updateGameObjects()`-functie toe die botsende objecten test op treffers:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Zorg ervoor dat je `updateGameObjects()` toevoegt aan je spelcyclus in `window.onload`.

   4. **Implementeer cooldown** voor de laser, zodat deze slechts met een bepaalde frequentie kan worden afgevuurd.

      Bewerk ten slotte de Hero-klasse zodat deze een cooldown kan hebben:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
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

Op dit punt heeft je spel enige functionaliteit! Je kunt navigeren met je pijltjestoetsen, een laser afvuren met je spatiebalk en vijanden verdwijnen wanneer je ze raakt. Goed gedaan!

---

## 🚀 Uitdaging

Voeg een explosie toe! Bekijk de spelassets in [de Space Art-repo](../../../../6-space-game/solution/spaceArt/readme.txt) en probeer een explosie toe te voegen wanneer de laser een alien raakt.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/36)

## Review & Zelfstudie

Experimenteer met de intervallen in je spel tot nu toe. Wat gebeurt er als je ze verandert? Lees meer over [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Opdracht

[Ontdek botsingen](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.