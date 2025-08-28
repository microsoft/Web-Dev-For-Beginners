<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-26T22:03:34+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill del 4: Legge til en laser og oppdage kollisjoner

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/35)

I denne leksjonen skal du lære hvordan du skyter lasere med JavaScript! Vi skal legge til to ting i spillet vårt:

- **En laser**: denne laseren skytes fra helteskipet ditt og beveger seg vertikalt oppover.
- **Kollisjonsdeteksjon**, som en del av implementeringen av skytefunksjonen vil vi også legge til noen fine spillregler:
   - **Laser treffer fiende**: Fienden dør hvis den blir truffet av en laser.
   - **Laser treffer toppen av skjermen**: En laser blir ødelagt hvis den treffer den øverste delen av skjermen.
   - **Fiende og helt kolliderer**: En fiende og helten blir ødelagt hvis de treffer hverandre.
   - **Fiende treffer bunnen av skjermen**: En fiende og helten blir ødelagt hvis fienden treffer bunnen av skjermen.

Kort sagt, du -- *helten* -- må treffe alle fiendene med en laser før de klarer å bevege seg til bunnen av skjermen.

✅ Gjør litt research på det aller første dataspillet som noen gang ble laget. Hva var funksjonaliteten?

La oss være heroiske sammen!

## Kollisjonsdeteksjon

Hvordan oppdager vi kollisjoner? Vi må tenke på spillobjektene våre som rektangler som beveger seg rundt. Hvorfor det, spør du kanskje? Vel, bildet som brukes til å tegne et spillobjekt er et rektangel: det har en `x`, `y`, `bredde` og `høyde`.

Hvis to rektangler, for eksempel en helt og en fiende, *overlapper*, har du en kollisjon. Hva som skal skje da, avhenger av spillreglene. For å implementere kollisjonsdeteksjon trenger du derfor følgende:

1. En måte å få en rektangulær representasjon av et spillobjekt, noe som dette:

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

2. En sammenligningsfunksjon, denne funksjonen kan se slik ut:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Hvordan ødelegger vi ting

For å ødelegge ting i et spill må du la spillet vite at det ikke lenger skal tegne dette elementet i spill-loopen som trigges med jevne mellomrom. En måte å gjøre dette på er å markere et spillobjekt som *dødt* når noe skjer, slik som dette:

```javascript
// collision happened
enemy.dead = true
```

Deretter kan du filtrere ut *døde* objekter før du tegner skjermen på nytt, slik som dette:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Hvordan skyter vi en laser

Å skyte en laser betyr å reagere på en tastetrykk-hendelse og opprette et objekt som beveger seg i en bestemt retning. Vi må derfor utføre følgende trinn:

1. **Opprett et laserobjekt**: fra toppen av helteskipet ditt, som ved opprettelse begynner å bevege seg oppover mot toppen av skjermen.
2. **Koble kode til en tastetrykk-hendelse**: vi må velge en tast på tastaturet som representerer at spilleren skyter laseren.
3. **Opprett et spillobjekt som ser ut som en laser** når tasten trykkes.

## Cooldown på laseren

Laseren må skytes hver gang du trykker på en tast, for eksempel *mellomrom*. For å forhindre at spillet produserer altfor mange lasere på kort tid, må vi fikse dette. Løsningen er å implementere en såkalt *cooldown*, en timer, som sikrer at en laser bare kan skytes med visse intervaller. Du kan implementere dette på følgende måte:

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

✅ Se tilbake på leksjon 1 i romspillsserien for å minne deg selv på *cooldowns*.

## Hva skal bygges

Du skal ta den eksisterende koden (som du burde ha ryddet opp i og refaktorert) fra forrige leksjon, og utvide den. Enten start med koden fra del II eller bruk koden fra [Del III - startkode](../../../../../../../../../your-work).

> tips: laseren du skal jobbe med er allerede i assets-mappen din og referert i koden din.

- **Legg til kollisjonsdeteksjon**, når en laser kolliderer med noe skal følgende regler gjelde:
   1. **Laser treffer fiende**: fienden dør hvis den blir truffet av en laser.
   2. **Laser treffer toppen av skjermen**: En laser blir ødelagt hvis den treffer den øverste delen av skjermen.
   3. **Fiende og helt kolliderer**: en fiende og helten blir ødelagt hvis de treffer hverandre.
   4. **Fiende treffer bunnen av skjermen**: En fiende og helten blir ødelagt hvis fienden treffer bunnen av skjermen.

## Anbefalte trinn

Finn filene som er opprettet for deg i `your-work`-undermappen. Den skal inneholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Start prosjektet ditt i `your_work`-mappen ved å skrive:

```bash
cd your-work
npm start
```

Dette vil starte en HTTP-server på adressen `http://localhost:5000`. Åpne en nettleser og skriv inn den adressen, akkurat nå skal den vise helten og alle fiendene, men ingenting beveger seg - ennå :).

### Legg til kode

1. **Sett opp en rektangulær representasjon av spillobjektene dine for å håndtere kollisjoner** Koden nedenfor lar deg få en rektangulær representasjon av et `GameObject`. Rediger GameObject-klassen din for å utvide den:

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

2. **Legg til kode som sjekker kollisjoner** Dette vil være en ny funksjon som tester om to rektangler overlapper:

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

3. **Legg til muligheten til å skyte laser**
   1. **Legg til tastetrykk-melding**. *Mellomrom*-tasten skal opprette en laser rett over helteskipet. Legg til tre konstanter i Messages-objektet:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Håndter mellomromstasten**. Rediger `window.addEventListener` keyup-funksjonen for å håndtere mellomrom:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Legg til lyttere**. Rediger `initGame()`-funksjonen for å sikre at helten kan skyte når mellomromstasten trykkes:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       og legg til en ny `eventEmitter.on()`-funksjon for å sikre oppførsel når en fiende kolliderer med en laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Beveg objekt**, Sørg for at laseren beveger seg gradvis til toppen av skjermen. Du vil opprette en ny Laser-klasse som utvider `GameObject`, som du har gjort før: 
   
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

   1. **Håndter kollisjoner**, Implementer kollisjonsregler for laseren. Legg til en `updateGameObjects()`-funksjon som tester kolliderende objekter for treff:

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

      Sørg for å legge til `updateGameObjects()` i spill-loopen din i `window.onload`.

   4. **Implementer cooldown** på laseren, slik at den bare kan skytes med visse intervaller.

      Til slutt, rediger Hero-klassen slik at den kan håndtere cooldown:

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

På dette tidspunktet har spillet ditt fått litt funksjonalitet! Du kan navigere med piltastene, skyte en laser med mellomromstasten, og fiender forsvinner når du treffer dem. Bra jobbet!

---

## 🚀 Utfordring

Legg til en eksplosjon! Ta en titt på spillressursene i [Space Art-repoet](../../../../6-space-game/solution/spaceArt/readme.txt) og prøv å legge til en eksplosjon når laseren treffer en alien.

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/36)

## Gjennomgang og selvstudium

Eksperimenter med intervallene i spillet ditt så langt. Hva skjer når du endrer dem? Les mer om [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Oppgave

[Utforsk kollisjoner](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.