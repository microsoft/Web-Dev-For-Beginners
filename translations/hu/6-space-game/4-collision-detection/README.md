<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-28T03:56:54+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "hu"
}
-->
# Űrjáték építése 4. rész: Lézer hozzáadása és ütközések érzékelése

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/35)

Ebben a leckében megtanulod, hogyan lőj lézereket JavaScript segítségével! Két dolgot fogunk hozzáadni a játékhoz:

- **Egy lézer**: ez a lézer a hősöd hajójából indul, és függőlegesen felfelé halad
- **Ütközés érzékelése**, a lövés képességének megvalósítása részeként néhány játék szabályt is hozzáadunk:
   - **Lézer eltalálja az ellenséget**: Az ellenség meghal, ha eltalálja egy lézer
   - **Lézer eléri a képernyő tetejét**: A lézer megsemmisül, ha eléri a képernyő felső részét
   - **Ellenség és hős ütközése**: Az ellenség és a hős megsemmisül, ha összeütköznek
   - **Ellenség eléri a képernyő alját**: Az ellenség és a hős megsemmisül, ha az ellenség eléri a képernyő alját

Röviden, neked -- *a hősnek* -- el kell találnod az összes ellenséget lézerrel, mielőtt azok elérik a képernyő alját.

✅ Kutass egy kicsit az első számítógépes játék után, amit valaha írtak. Mi volt a funkciója?

Legyünk együtt hősök!

## Ütközés érzékelése

Hogyan érzékeljük az ütközéseket? A játékobjektumokat mozgó téglalapokként kell elképzelnünk. Miért? Nos, a játékobjektum megrajzolásához használt kép egy téglalap: van `x`, `y`, `szélesség` és `magasság`.

Ha két téglalap, például a hős és az ellenség *metszi egymást*, akkor ütközés történik. Hogy mi történjen ilyenkor, az a játék szabályaitól függ. Az ütközés érzékeléséhez tehát a következőkre van szükség:

1. Egy módszer, amely téglalapként ábrázolja a játékobjektumot, valami ilyesmi:

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

2. Egy összehasonlító függvény, amely így nézhet ki:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Hogyan semmisítsünk meg dolgokat

Ahhoz, hogy valamit megsemmisítsünk a játékban, jelezni kell a játéknak, hogy többé ne rajzolja ki az adott elemet a játékciklusban, amely bizonyos időközönként frissül. Ennek egyik módja, hogy a játékobjektumot *halottnak* jelöljük, amikor valami történik, például így:

```javascript
// collision happened
enemy.dead = true
```

Ezután kiszűrheted a *halott* objektumokat, mielőtt újrarajzolnád a képernyőt, például így:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Hogyan lőjünk lézert

A lézer kilövése azt jelenti, hogy reagálunk egy billentyű-eseményre, és létrehozunk egy objektumot, amely egy bizonyos irányba mozog. Ezért a következő lépéseket kell végrehajtani:

1. **Lézer objektum létrehozása**: a hős hajójának tetejéről, amely létrehozáskor felfelé kezd mozogni a képernyő teteje felé.
2. **Kód hozzárendelése egy billentyű-eseményhez**: ki kell választanunk egy billentyűt a billentyűzeten, amely a lézer kilövését jelképezi.
3. **Játékobjektum létrehozása, amely lézerként néz ki**, amikor a billentyűt lenyomják.

## Lézer hűtési idő

A lézernek minden alkalommal ki kell lőnie, amikor megnyomsz egy billentyűt, például a *szóközt*. Annak érdekében, hogy a játék ne hozzon létre túl sok lézert rövid idő alatt, ezt meg kell oldanunk. A megoldás egy úgynevezett *hűtési idő* (cooldown) bevezetése, egy időzítő, amely biztosítja, hogy a lézer csak bizonyos időközönként lőhető ki. Ezt így lehet megvalósítani:

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

✅ Nézd meg az űrjáték sorozat 1. leckéjét, hogy emlékeztesd magad a *hűtési idő* fogalmára.

## Mit kell építeni

A meglévő kódot (amit az előző leckében már megtisztítottál és átalakítottál) kell kiegészítened. Kezdheted a II. rész kódjával, vagy használhatod a [III. rész kezdő kódját](../../../../../../../../../your-work).

> Tipp: a lézer, amivel dolgozni fogsz, már az eszközök mappádban van, és a kódod hivatkozik rá.

- **Ütközés érzékelés hozzáadása**, amikor egy lézer ütközik valamivel, a következő szabályok érvényesek:
   1. **Lézer eltalálja az ellenséget**: az ellenség meghal, ha eltalálja egy lézer
   2. **Lézer eléri a képernyő tetejét**: A lézer megsemmisül, ha eléri a képernyő felső részét
   3. **Ellenség és hős ütközése**: az ellenség és a hős megsemmisül, ha összeütköznek
   4. **Ellenség eléri a képernyő alját**: Az ellenség és a hős megsemmisül, ha az ellenség eléri a képernyő alját

## Ajánlott lépések

Keresd meg azokat a fájlokat, amelyeket a `your-work` almappában hoztak létre számodra. Ezeknek a következőket kell tartalmazniuk:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

A projektet a `your_work` mappában indíthatod el az alábbi parancs begépelésével:

```bash
cd your-work
npm start
```

Ez elindít egy HTTP szervert a `http://localhost:5000` címen. Nyiss meg egy böngészőt, és írd be ezt a címet, jelenleg a hős és az összes ellenség látható, de semmi sem mozog - még :).

### Kód hozzáadása

1. **Állítsd be a játékobjektum téglalap ábrázolását az ütközések kezeléséhez** Az alábbi kód lehetővé teszi, hogy téglalap ábrázolást kapj egy `GameObject`-ről. Szerkeszd a GameObject osztályt, hogy kiterjeszd:

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

2. **Adj hozzá kódot, amely ellenőrzi az ütközést** Ez egy új függvény lesz, amely teszteli, hogy két téglalap metszi-e egymást:

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

3. **Adj hozzá lézer kilövési képességet**
   1. **Adj hozzá billentyű-esemény üzenetet**. A *szóköz* billentyűnek lézert kell létrehoznia közvetlenül a hős hajója felett. Adj hozzá három konstansot a Messages objektumhoz:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Kezeld a szóköz billentyűt**. Szerkeszd a `window.addEventListener` keyup függvényt, hogy kezelje a szóközt:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Adj hozzá hallgatókat**. Szerkeszd az `initGame()` függvényt, hogy biztosítsd, hogy a hős lőni tudjon, amikor a szóköz billentyűt lenyomják:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       és adj hozzá egy új `eventEmitter.on()` függvényt, hogy biztosítsd a viselkedést, amikor egy ellenség ütközik egy lézerrel:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Mozgasd az objektumot**, Biztosítsd, hogy a lézer fokozatosan a képernyő tetejére mozogjon. Létrehozol egy új Laser osztályt, amely kiterjeszti a `GameObject`-et, ahogy korábban:

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

   1. **Kezeld az ütközéseket**, Valósítsd meg a lézer ütközési szabályait. Adj hozzá egy `updateGameObjects()` függvényt, amely teszteli az ütköző objektumokat:

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

      Biztosítsd, hogy az `updateGameObjects()` bekerüljön a játékciklusba a `window.onload`-ban.

   4. **Valósítsd meg a lézer hűtési idejét**, hogy csak bizonyos időközönként lehessen kilőni.

      Végül szerkeszd a Hero osztályt, hogy hűtési időt tudjon kezelni:

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

Ezen a ponton a játékod már némi funkcionalitással rendelkezik! A nyílbillentyűkkel navigálhatsz, a szóköz billentyűvel lézert lőhetsz, és az ellenségek eltűnnek, amikor eltalálod őket. Szép munka!

---

## 🚀 Kihívás

Adj hozzá egy robbanást! Nézd meg a játék eszközeit a [Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) mappában, és próbálj meg robbanást hozzáadni, amikor a lézer eltalál egy idegent.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/36)

## Áttekintés és önálló tanulás

Kísérletezz az eddigi játékod időközeivel. Mi történik, ha megváltoztatod őket? Olvass többet a [JavaScript időzítési eseményekről](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Feladat

[Fedezd fel az ütközéseket](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget az ebből a fordításból eredő félreértésekért vagy téves értelmezésekért.