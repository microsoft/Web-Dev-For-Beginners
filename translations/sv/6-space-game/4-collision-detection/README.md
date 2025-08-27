<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-26T22:02:39+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "sv"
}
-->
# Bygg ett Rymdspel Del 4: Lägga till en Laser och Upptäcka Kollisioner

## Förhandsquiz

[Förhandsquiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

I den här lektionen kommer du att lära dig hur man skjuter laser med JavaScript! Vi kommer att lägga till två saker i vårt spel:

- **En laser**: denna laser skjuts från din hjältes skepp och rör sig vertikalt uppåt
- **Kollisionsdetektion**, som en del av att implementera möjligheten att *skjuta* kommer vi också att lägga till några trevliga spelregler:
   - **Laser träffar fiende**: Fienden dör om den träffas av en laser
   - **Laser träffar skärmens topp**: En laser förstörs om den träffar den övre delen av skärmen
   - **Fiende och hjälte krockar**: En fiende och hjälten förstörs om de krockar med varandra
   - **Fiende träffar skärmens botten**: En fiende och hjälten förstörs om fienden når skärmens botten

Kort sagt, du -- *hjälten* -- måste träffa alla fiender med en laser innan de lyckas nå skärmens botten.

✅ Gör lite efterforskning om det allra första datorspelet som någonsin skapades. Vad hade det för funktionalitet?

Låt oss vara heroiska tillsammans!

## Kollisionsdetektion

Hur gör vi kollisionsdetektion? Vi behöver tänka på våra spelobjekt som rektanglar som rör sig runt. Varför det, kanske du undrar? Jo, bilden som används för att rita ett spelobjekt är en rektangel: den har ett `x`, `y`, `bredd` och `höjd`.

Om två rektanglar, t.ex. en hjälte och en fiende, *korsar varandra*, har du en kollision. Vad som ska hända då beror på spelets regler. För att implementera kollisionsdetektion behöver du därför följande:

1. Ett sätt att få en rektangulär representation av ett spelobjekt, något i stil med detta:

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

2. En jämförelsefunktion, denna funktion kan se ut så här:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Hur förstör vi saker

För att förstöra saker i ett spel måste du låta spelet veta att det inte längre ska rita detta objekt i spel-loopen som triggas vid ett visst intervall. Ett sätt att göra detta är att markera ett spelobjekt som *dött* när något händer, så här:

```javascript
// collision happened
enemy.dead = true
```

Därefter kan du sortera bort *döda* objekt innan skärmen ritas om, så här:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Hur skjuter vi en laser

Att skjuta en laser innebär att svara på ett tangenttryck och skapa ett objekt som rör sig i en viss riktning. Vi behöver därför utföra följande steg:

1. **Skapa ett laserobjekt**: från toppen av hjälteskeppet, som vid skapandet börjar röra sig uppåt mot skärmens topp.
2. **Koppla kod till ett tangenttryck**: vi behöver välja en tangent på tangentbordet som representerar att spelaren skjuter lasern.
3. **Skapa ett spelobjekt som ser ut som en laser** när tangenten trycks ned.

## Cooldown för vår laser

Lasern behöver skjutas varje gång du trycker på en tangent, till exempel *mellanslag*. För att förhindra att spelet skapar alldeles för många lasrar på kort tid behöver vi fixa detta. Lösningen är att implementera en så kallad *cooldown*, en timer, som säkerställer att en laser bara kan skjutas med vissa intervall. Du kan implementera det på följande sätt:

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

✅ Gå tillbaka till lektion 1 i rymdspelsserien för att påminna dig om *cooldowns*.

## Vad ska byggas

Du kommer att ta den befintliga koden (som du borde ha städat upp och refaktorerat) från föregående lektion och utöka den. Antingen börjar du med koden från del II eller använder koden från [Del III - startkod](../../../../../../../../../your-work).

> tips: lasern som du ska arbeta med finns redan i din assets-mapp och refereras av din kod

- **Lägg till kollisionsdetektion**, när en laser kolliderar med något ska följande regler gälla:
   1. **Laser träffar fiende**: fienden dör om den träffas av en laser
   2. **Laser träffar skärmens topp**: En laser förstörs om den träffar den övre delen av skärmen
   3. **Fiende och hjälte krockar**: en fiende och hjälten förstörs om de krockar med varandra
   4. **Fiende träffar skärmens botten**: En fiende och hjälten förstörs om fienden når skärmens botten

## Rekommenderade steg

Leta upp filerna som har skapats åt dig i undermappen `your-work`. Den bör innehålla följande:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Starta ditt projekt i mappen `your_work` genom att skriva:

```bash
cd your-work
npm start
```

Ovanstående kommer att starta en HTTP-server på adressen `http://localhost:5000`. Öppna en webbläsare och skriv in den adressen, just nu bör den visa hjälten och alla fiender, men inget rör sig - ännu :).

### Lägg till kod

1. **Ställ in en rektangulär representation av ditt spelobjekt för att hantera kollisioner** Koden nedan låter dig få en rektangulär representation av ett `GameObject`. Redigera din GameObject-klass för att utöka den:

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

2. **Lägg till kod som kontrollerar kollisioner** Detta blir en ny funktion som testar om två rektanglar korsar varandra:

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

3. **Lägg till laseravfyrningsfunktionalitet**
   1. **Lägg till tangenttrycksmeddelande**. Tangenten *mellanslag* ska skapa en laser precis ovanför hjälteskeppet. Lägg till tre konstanter i Messages-objektet:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Hantera mellanslagstangenten**. Redigera funktionen `window.addEventListener` för keyup för att hantera mellanslag:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Lägg till lyssnare**. Redigera funktionen `initGame()` för att säkerställa att hjälten kan skjuta när mellanslagstangenten trycks ned:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       och lägg till en ny `eventEmitter.on()`-funktion för att säkerställa beteendet när en fiende kolliderar med en laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Flytta objekt**, Se till att lasern gradvis rör sig mot skärmens topp. Du skapar en ny Laser-klass som utökar `GameObject`, som du gjort tidigare: 
   
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

   1. **Hantera kollisioner**, Implementera kollisionsregler för lasern. Lägg till en funktion `updateGameObjects()` som testar kolliderande objekt för träffar:

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

      Se till att lägga till `updateGameObjects()` i din spel-loop i `window.onload`.

   4. **Implementera cooldown** för lasern, så att den bara kan skjutas med vissa intervall.

      Slutligen, redigera Hero-klassen så att den kan hantera cooldown:

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

Vid det här laget har ditt spel fått viss funktionalitet! Du kan navigera med piltangenterna, skjuta en laser med mellanslagstangenten, och fiender försvinner när du träffar dem. Bra jobbat!

---

## 🚀 Utmaning

Lägg till en explosion! Ta en titt på spelresurserna i [Space Art-repot](../../../../6-space-game/solution/spaceArt/readme.txt) och försök lägga till en explosion när lasern träffar en alien.

## Efterhandsquiz

[Efterhandsquiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Granskning & Självstudier

Experimentera med intervallen i ditt spel hittills. Vad händer när du ändrar dem? Läs mer om [JavaScript-timinghändelser](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Uppgift

[Utforska kollisioner](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.