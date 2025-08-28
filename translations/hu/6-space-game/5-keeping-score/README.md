<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-28T03:54:44+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 5. rész: Pontszám és életek

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/37)

Ebben a leckében megtanulod, hogyan adj pontszámot a játékhoz, és hogyan számold az életeket.

## Szöveg megjelenítése a képernyőn

Ahhoz, hogy a játék pontszámát megjelenítsd a képernyőn, tudnod kell, hogyan helyezz el szöveget a képernyőn. A megoldás a `fillText()` metódus használata a canvas objektumon. Ezen kívül más tulajdonságokat is szabályozhatsz, például a betűtípust, a szöveg színét és az igazítást (balra, jobbra, középre). Az alábbi kódrészlet példát mutat arra, hogyan lehet szöveget rajzolni a képernyőre.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Olvass többet arról, [hogyan adhatsz szöveget egy canvashoz](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), és bátran tedd a sajátodat még látványosabbá!

## Az élet, mint játékkoncepció

Az élet fogalma egy játékban csupán egy szám. Egy űrjáték kontextusában gyakori, hogy egy meghatározott számú életet adunk, amelyek egyenként csökkennek, amikor a hajód sérülést szenved. Jó, ha ezt grafikusan is meg tudod jeleníteni, például minihajókkal vagy szívekkel a szám helyett.

## Mit kell elkészíteni?

Adjuk hozzá a következőket a játékodhoz:

- **Játék pontszám**: Minden ellenséges hajó megsemmisítése után a hősnek pontokat kell kapnia, javasoljuk, hogy hajónként 100 pontot. A játék pontszámát a bal alsó sarokban kell megjeleníteni.
- **Élet**: A hajódnak három élete van. Minden alkalommal, amikor egy ellenséges hajó neked ütközik, elveszítesz egy életet. Az életek számát a jobb alsó sarokban kell megjeleníteni, és a következő grafikából kell állnia: ![élet kép](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.hu.png).

## Ajánlott lépések

Keresd meg azokat a fájlokat, amelyeket a `your-work` almappában hoztunk létre számodra. Ezeknek a következőket kell tartalmazniuk:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Indítsd el a projektedet a `your_work` mappában az alábbi parancs beírásával:

```bash
cd your-work
npm start
```

A fenti parancs egy HTTP szervert indít a `http://localhost:5000` címen. Nyiss meg egy böngészőt, és írd be ezt a címet. Jelenleg a hős és az összes ellenség megjelenik, és amikor a bal és jobb nyilakat lenyomod, a hős mozog, és le tudja lőni az ellenségeket.

### Kód hozzáadása

1. **Másold át a szükséges eszközöket** a `solution/assets/` mappából a `your-work` mappába; hozzá kell adnod egy `life.png` eszközt. Add hozzá a lifeImg-t a window.onload függvényhez:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Add hozzá a `lifeImg`-t az eszközök listájához:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Adj hozzá változókat**. Adj hozzá kódot, amely a teljes pontszámot (0) és a hátralévő életeket (3) képviseli, és jelenítsd meg ezeket a képernyőn.

3. **Bővítsd az `updateGameObjects()` függvényt**. Bővítsd az `updateGameObjects()` függvényt, hogy kezelje az ellenséges ütközéseket:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Adj hozzá életet és pontokat**. 
   1. **Inicializáld a változókat**. A `this.cooldown = 0` alatt a `Hero` osztályban állítsd be az életet és a pontokat:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Rajzold ki a változókat a képernyőre**. Jelenítsd meg ezeket az értékeket a képernyőn:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Adj hozzá metódusokat a játékciklushoz**. Győződj meg róla, hogy ezeket a függvényeket hozzáadod a window.onload függvényhez az `updateGameObjects()` alatt:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Valósítsd meg a játékszabályokat**. Valósítsd meg a következő játékszabályokat:

   1. **Minden hős és ellenség ütközés esetén** vonj le egy életet.
   
      Bővítsd a `Hero` osztályt, hogy ezt a levonást elvégezze:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Minden lézer, amely eltalál egy ellenséget**, növelje a játék pontszámát 100 ponttal.

      Bővítsd a Hero osztályt, hogy ezt a növelést elvégezze:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Add hozzá ezeket a függvényeket az ütközési eseménykibocsátókhoz:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Kutass egy kicsit, hogy felfedezd, milyen más játékokat készítettek JavaScript/Canvas használatával. Mik a közös jellemzőik?

A munka végére a jobb alsó sarokban kis "élet" hajókat kell látnod, a bal alsó sarokban a pontszámot, és látnod kell, ahogy az életek száma csökken, amikor ütközöl az ellenségekkel, és a pontszámod nő, amikor lelövöd az ellenségeket. Szép munka! A játékod majdnem kész.

---

## 🚀 Kihívás

A kódod majdnem kész. El tudod képzelni, mik lehetnek a következő lépések?

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/38)

## Áttekintés és önálló tanulás

Kutatásokat végezhetsz arról, hogyan lehet növelni és csökkenteni a játék pontszámát és életeit. Vannak érdekes játékmotorok, mint például a [PlayFab](https://playfab.com). Hogyan javíthatná ezek használata a játékodat?

## Feladat

[Pontszám alapú játék készítése](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.