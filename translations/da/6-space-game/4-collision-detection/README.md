<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-26T22:03:07+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "da"
}
-->
# Byg et rumspil del 4: Tilføj en laser og registrer kollisioner

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/35)

I denne lektion lærer du, hvordan du skyder med laser ved hjælp af JavaScript! Vi vil tilføje to ting til vores spil:

- **En laser**: Denne laser bliver skudt fra din helts rumskib og bevæger sig lodret opad.
- **Kollisionsregistrering**: Som en del af implementeringen af evnen til at *skyde* vil vi også tilføje nogle gode spilleregler:
   - **Laser rammer fjende**: Fjenden dør, hvis den bliver ramt af en laser.
   - **Laser rammer toppen af skærmen**: En laser bliver ødelagt, hvis den rammer den øverste del af skærmen.
   - **Fjende og helt kolliderer**: En fjende og helten bliver ødelagt, hvis de rammer hinanden.
   - **Fjende rammer bunden af skærmen**: En fjende og helten bliver ødelagt, hvis fjenden rammer bunden af skærmen.

Kort sagt, du -- *helten* -- skal ramme alle fjender med en laser, før de når bunden af skærmen.

✅ Lav lidt research om det allerførste computerspil nogensinde. Hvad var dets funktionalitet?

Lad os være heroiske sammen!

## Kollisionsregistrering

Hvordan registrerer vi kollisioner? Vi skal tænke på vores spilobjekter som rektangler, der bevæger sig rundt. Hvorfor det, spørger du måske? Jo, det billede, der bruges til at tegne et spilobjekt, er et rektangel: det har en `x`, `y`, `bredde` og `højde`.

Hvis to rektangler, dvs. en helt og en fjende, *skærer hinanden*, har du en kollision. Hvad der skal ske derefter, afhænger af spillereglerne. For at implementere kollisionsregistrering skal du derfor bruge følgende:

1. En måde at få en rektangelrepræsentation af et spilobjekt, noget i stil med dette:

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

2. En sammenligningsfunktion, denne funktion kan se sådan ud:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Hvordan ødelægger vi ting

For at ødelægge ting i et spil skal du lade spillet vide, at det ikke længere skal tegne dette objekt i spil-loopet, der udløses med et bestemt interval. En måde at gøre dette på er at markere et spilobjekt som *dødt*, når noget sker, som så:

```javascript
// collision happened
enemy.dead = true
```

Derefter kan du sortere *døde* objekter fra, før skærmen bliver tegnet igen, som så:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Hvordan skyder vi en laser

At skyde en laser betyder at reagere på en tastaturhændelse og oprette et objekt, der bevæger sig i en bestemt retning. Vi skal derfor udføre følgende trin:

1. **Opret et laserobjekt**: fra toppen af heltenes rumskib, som ved oprettelse begynder at bevæge sig opad mod toppen af skærmen.
2. **Tilføj kode til en tastaturhændelse**: Vi skal vælge en tast på tastaturet, der repræsenterer spilleren, der skyder laseren.
3. **Opret et spilobjekt, der ligner en laser**, når tasten trykkes.

## Cooldown på vores laser

Laseren skal affyres hver gang du trykker på en tast, f.eks. *mellemrum*. For at forhindre spillet i at producere alt for mange lasere på kort tid, skal vi løse dette. Løsningen er at implementere en såkaldt *cooldown*, en timer, der sikrer, at en laser kun kan affyres med bestemte intervaller. Du kan implementere det på følgende måde:

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

✅ Henvis til lektion 1 i rumspilsserien for at minde dig selv om *cooldowns*.

## Hvad skal bygges

Du skal tage den eksisterende kode (som du burde have ryddet op i og refaktoreret) fra den forrige lektion og udvide den. Enten start med koden fra del II eller brug koden fra [Del III - starter](../../../../../../../../../your-work).

> tip: Laseren, du skal arbejde med, er allerede i din assets-mappe og refereret af din kode.

- **Tilføj kollisionsregistrering**, når en laser kolliderer med noget, skal følgende regler gælde:
   1. **Laser rammer fjende**: Fjenden dør, hvis den bliver ramt af en laser.
   2. **Laser rammer toppen af skærmen**: En laser bliver ødelagt, hvis den rammer den øverste del af skærmen.
   3. **Fjende og helt kolliderer**: En fjende og helten bliver ødelagt, hvis de rammer hinanden.
   4. **Fjende rammer bunden af skærmen**: En fjende og helten bliver ødelagt, hvis fjenden rammer bunden af skærmen.

## Anbefalede trin

Find de filer, der er blevet oprettet til dig i undermappen `your-work`. Den bør indeholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Du starter dit projekt i mappen `your_work` ved at skrive:

```bash
cd your-work
npm start
```

Ovenstående starter en HTTP-server på adressen `http://localhost:5000`. Åbn en browser og indtast den adresse, lige nu bør den vise helten og alle fjenderne, men intet bevæger sig - endnu :).

### Tilføj kode

1. **Opsæt en rektangelrepræsentation af dit spilobjekt for at håndtere kollisioner**. Nedenstående kode giver dig mulighed for at få en rektangelrepræsentation af et `GameObject`. Rediger din GameObject-klasse for at udvide den:

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

2. **Tilføj kode, der kontrollerer kollisioner**. Dette vil være en ny funktion, der tester, om to rektangler skærer hinanden:

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

3. **Tilføj laser-skydningsfunktionalitet**
   1. **Tilføj tastaturhændelsesmeddelelse**. *Mellemrumstasten* skal oprette en laser lige over heltenes rumskib. Tilføj tre konstanter i Messages-objektet:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Håndter mellemrumstasten**. Rediger funktionen `window.addEventListener` keyup for at håndtere mellemrumstasten:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Tilføj lyttere**. Rediger funktionen `initGame()` for at sikre, at helten kan skyde, når mellemrumstasten trykkes:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       og tilføj en ny `eventEmitter.on()`-funktion for at sikre adfærd, når en fjende kolliderer med en laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Bevæg objektet**, Sørg for, at laseren gradvist bevæger sig mod toppen af skærmen. Du opretter en ny Laser-klasse, der udvider `GameObject`, som du har gjort før: 
   
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

   1. **Håndter kollisioner**, Implementer kollisionsregler for laseren. Tilføj en `updateGameObjects()`-funktion, der tester kolliderende objekter for hits:

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

      Sørg for at tilføje `updateGameObjects()` til dit spil-loop i `window.onload`.

   4. **Implementer cooldown** på laseren, så den kun kan affyres med bestemte intervaller.

      Til sidst skal du redigere Hero-klassen, så den kan håndtere cooldown:

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

På dette tidspunkt har dit spil noget funktionalitet! Du kan navigere med dine piletaster, skyde en laser med din mellemrumstast, og fjender forsvinder, når du rammer dem. Godt gået!

---

## 🚀 Udfordring

Tilføj en eksplosion! Tag et kig på spilassets i [Space Art-repoet](../../../../6-space-game/solution/spaceArt/readme.txt) og prøv at tilføje en eksplosion, når laseren rammer en alien.

## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/36)

## Gennemgang & Selvstudie

Eksperimenter med intervallerne i dit spil indtil videre. Hvad sker der, når du ændrer dem? Læs mere om [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Opgave

[Udforsk kollisioner](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.