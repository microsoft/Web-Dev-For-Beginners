<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T20:35:18+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "hu"
}
-->
# Űrjáték építése 5. rész: Pontozás és életek

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/37)

Készen állsz arra, hogy az űrjátékod valódi játékká váljon? Adjunk hozzá pontozási rendszert és életek kezelését – ezek azok az alapvető mechanikák, amelyek az olyan korai arcade játékokat, mint a Space Invaders, egyszerű bemutatókból függőséget okozó szórakozássá alakították. Itt válik a játékod igazán játszhatóvá.

## Szöveg megjelenítése a képernyőn - A játékod hangja

Ahhoz, hogy megjelenítsük a pontszámot, meg kell tanulnunk, hogyan lehet szöveget megjeleníteni a vásznon. A `fillText()` metódus az elsődleges eszközöd ehhez – ugyanaz a technika, amelyet a klasszikus arcade játékok használtak a pontszámok és állapotinformációk megjelenítésére.

Teljes mértékben irányíthatod a szöveg megjelenését:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Merülj el mélyebben a [szöveg hozzáadása a vászonhoz](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) témában – meglepődhetsz, milyen kreatív lehetsz a betűtípusokkal és stílusokkal!

## Életek - Több mint egy szám

A játéktervezésben az "élet" a játékos hibázási lehetőségét jelenti. Ez a koncepció a flippergépekig nyúlik vissza, ahol több golyót kaptál a játékhoz. Az olyan korai videojátékokban, mint az Asteroids, az életek lehetőséget adtak a játékosoknak arra, hogy kockáztassanak és tanuljanak a hibáikból.

A vizuális megjelenítés rendkívül fontos – ha hajó ikonokat jelenítünk meg a "Életek: 3" helyett, az azonnali vizuális felismerést eredményez, hasonlóan ahhoz, ahogy a korai arcade gépek ikonográfiát használtak a nyelvi akadályok leküzdésére.

## A játék jutalmazási rendszerének felépítése

Most megvalósítjuk azokat az alapvető visszacsatolási rendszereket, amelyek a játékosokat lekötik:

- **Pontozási rendszer**: Minden megsemmisített ellenséges hajó 100 pontot ér (a kerek számokat könnyebb fejben kiszámolni). A pontszám a bal alsó sarokban jelenik meg.
- **Élet számláló**: A hősöd három élettel kezd – ez egy korai arcade játékok által meghatározott szabvány, amely egyensúlyt teremt a kihívás és a játszhatóság között. Minden ütközés egy ellenséggel egy életet vesz el. A fennmaradó életeket a jobb alsó sarokban hajó ikonokkal jelenítjük meg ![élet kép](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.hu.png).

## Kezdjünk neki!

Először állítsd be a munkaterületedet. Navigálj a `your-work` almappában található fájlokhoz. Ezeket a fájlokat kell látnod:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

A játék teszteléséhez indítsd el a fejlesztői szervert a `your_work` mappából:

```bash
cd your-work
npm start
```

Ez egy helyi szervert futtat a `http://localhost:5000` címen. Nyisd meg ezt a címet a böngésződben, hogy lásd a játékot. Teszteld a vezérlőket a nyílbillentyűkkel, és próbálj meg ellenségekre lőni, hogy megbizonyosodj róla, minden működik.

### Ideje kódolni!

1. **Szerezd be a szükséges vizuális elemeket**. Másold a `life.png` elemet a `solution/assets/` mappából a `your-work` mappába. Ezután add hozzá a lifeImg-t a window.onload függvényedhez:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Ne felejtsd el hozzáadni a `lifeImg`-t az eszközök listájához:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Állítsd be a játék változóit**. Adj hozzá kódot, amely nyomon követi az összesített pontszámot (0-ról indul) és a fennmaradó életeket (3-ról indul). Ezeket megjelenítjük a képernyőn, hogy a játékosok mindig tudják, hol állnak.

3. **Valósítsd meg az ütközésérzékelést**. Bővítsd ki az `updateGameObjects()` függvényedet, hogy érzékelje, amikor az ellenségek ütköznek a hősöddel:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Adj élet- és pontszámkövetést a hősödhöz**. 
   1. **Inicializáld a számlálókat**. A `this.cooldown = 0` alatt a `Hero` osztályban állítsd be az életet és a pontokat:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Mutasd meg ezeket az értékeket a játékosnak**. Hozz létre függvényeket, amelyek ezeket az értékeket megjelenítik a képernyőn:

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

   1. **Kapcsold be mindent a játék ciklusába**. Add hozzá ezeket a függvényeket a window.onload függvényedhez közvetlenül az `updateGameObjects()` után:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Valósítsd meg a játék következményeit és jutalmait**. Most hozzáadjuk azokat a visszacsatolási rendszereket, amelyek értelmet adnak a játékos cselekedeteinek:

   1. **Ütközések életeket vesznek el**. Minden alkalommal, amikor a hősöd összeütközik egy ellenséggel, veszítened kell egy életet.
   
      Add hozzá ezt a metódust a `Hero` osztályhoz:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Ellenségek lelövése pontokat ér**. Minden sikeres találat 100 pontot ér, azonnali pozitív visszacsatolást nyújtva a pontos lövésért.

      Bővítsd ki a Hero osztályt ezzel az inkrementáló metódussal:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Most kapcsolódj ezekhez a függvényekhez az ütközési eseményeknél:

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

✅ Kíváncsi vagy más, JavaScript és Canvas segítségével készült játékokra? Fedezz fel néhányat – meg fogsz lepődni, mi minden lehetséges!

Miután megvalósítottad ezeket a funkciókat, teszteld a játékot, hogy lásd a teljes visszacsatolási rendszert működés közben. Látnod kell az élet ikonokat a jobb alsó sarokban, a pontszámot a bal alsó sarokban, és figyelheted, ahogy az ütközések csökkentik az életeket, míg a sikeres lövések növelik a pontszámot.

A játékod most már rendelkezik azokkal az alapvető mechanikákkal, amelyek a korai arcade játékokat olyan vonzóvá tették – egyértelmű célokkal, azonnali visszacsatolással és jelentős következményekkel a játékos cselekedeteiért.

---

## GitHub Copilot Agent kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Fejleszd az űrjáték pontozási rendszerét egy magas pontszám funkcióval, amely tartós tárolást és bónusz pontozási mechanizmusokat valósít meg.

**Feladat:** Hozz létre egy magas pontszám rendszert, amely elmenti a játékos legjobb pontszámát a localStorage-ba. Adj bónusz pontokat az egymást követő ellenséges találatokért (kombó rendszer), és valósíts meg különböző pontértékeket a különböző ellenségtípusokhoz. Tartsd vizuálisan jelezve, amikor a játékos új magas pontszámot ér el, és jelenítsd meg az aktuális magas pontszámot a játék képernyőjén.

## 🚀 Kihívás

Most már van egy működő játékod pontozással és életekkel. Gondold át, milyen további funkciók javíthatnák a játékos élményét.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/38)

## Áttekintés és önálló tanulás

Szeretnél többet felfedezni? Kutass különböző megközelítéseket a játék pontozási és élet rendszereihez. Vannak lenyűgöző játék motorok, mint például a [PlayFab](https://playfab.com), amelyek kezelik a pontozást, ranglistákat és a játékosok fejlődését. Hogyan emelhetné egy ilyen integráció a játékodat a következő szintre?

## Feladat

[Építs egy pontozási játékot](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.