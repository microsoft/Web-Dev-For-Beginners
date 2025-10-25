<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-24T20:29:40+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "hu"
}
-->
# Űrjáték építése 3. rész: Mozgás hozzáadása

Gondolj a kedvenc játékaidra – ami igazán magával ragadóvá teszi őket, az nem csak a szép grafika, hanem az, ahogyan minden mozog és reagál a cselekedeteidre. Jelenleg az űrjátékod olyan, mint egy gyönyörű festmény, de most mozgást adunk hozzá, hogy életre keljen.

Amikor a NASA mérnökei programozták az Apollo-missziók irányítógépét, hasonló kihívással szembesültek: hogyan lehet egy űrhajót úgy irányítani, hogy reagáljon a pilóta parancsaira, miközben automatikusan fenntartja a pályakorrekciókat? Az elvek, amelyeket ma megtanulunk, ezekhez a koncepciókhoz hasonlóak – a játékos által vezérelt mozgás és az automatikus rendszer viselkedésének kezelése.

Ebben a leckében megtanulod, hogyan lehet űrhajókat siklani a képernyőn, reagálni a játékos parancsaira, és sima mozgásmintákat létrehozni. Minden fogalmat érthető részekre bontunk, amelyek természetesen épülnek egymásra.

A végére a játékosok már irányíthatják a hős hajójukat a képernyőn, miközben az ellenséges hajók járőröznek felettük. Ennél is fontosabb, hogy megérted azokat az alapelveket, amelyek a játék mozgási rendszereit működtetik.

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/33)

## A játékmozgás megértése

A játékok akkor kelnek életre, amikor a dolgok elkezdenek mozogni, és alapvetően két módon történhet ez:

- **Játékos által vezérelt mozgás**: Amikor megnyomsz egy gombot vagy kattintasz az egérrel, valami mozog. Ez a közvetlen kapcsolat közted és a játékvilág között.
- **Automatikus mozgás**: Amikor maga a játék dönt úgy, hogy mozgat dolgokat – például az ellenséges hajók, amelyeknek járőrözniük kell a képernyőn, függetlenül attól, hogy te csinálsz-e valamit.

A tárgyak mozgatása a számítógép képernyőjén egyszerűbb, mint gondolnád. Emlékszel az x és y koordinátákra a matekóráról? Pontosan ezekkel dolgozunk itt. Amikor Galileo 1610-ben megfigyelte Jupiter holdjait, lényegében ugyanezt csinálta – pozíciókat ábrázolt az idő függvényében, hogy megértse a mozgásmintákat.

A képernyőn való mozgás olyan, mint egy flipbook animáció létrehozása – három egyszerű lépést kell követned:

1. **Frissítsd a pozíciót** – Változtasd meg, hol legyen az objektum (például mozdítsd el 5 pixellel jobbra)
2. **Töröld a régi képkockát** – Tisztítsd meg a képernyőt, hogy ne láss szellemképeket mindenhol
3. **Rajzold meg az új képkockát** – Helyezd az objektumot az új helyére

Ha ezt elég gyorsan csinálod, bumm! Máris van egy sima mozgás, ami természetesnek tűnik a játékosok számára.

Így nézhet ki kódban:

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Ez a kód ezt csinálja:**
- **Frissíti** a hős x-koordinátáját 5 pixellel, hogy vízszintesen mozgassa
- **Törli** az egész vászon területét, hogy eltávolítsa az előző képkockát
- **Kitölti** a vásznat fekete háttérszínnel
- **Újrarajzolja** a hős képét az új pozícióban

✅ Tudsz olyan okot mondani, amiért a hős sok képkockánkénti újrarajzolása teljesítményköltségeket okozhat? Olvass utána [alternatívák ennek a mintának](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Billentyűesemények kezelése

Itt kötjük össze a játékos bemenetét a játék akcióival. Amikor valaki megnyomja a szóközt, hogy lézert lőjön, vagy megnyom egy nyílgombot, hogy kikerüljön egy aszteroidát, a játéknak érzékelnie és reagálnia kell erre a bemenetre.

A billentyűesemények az ablak szintjén történnek, ami azt jelenti, hogy az egész böngészőablak figyeli ezeket a billentyűleütéseket. Az egérkattintások viszont konkrét elemekhez köthetők (például egy gomb megnyomásához). Az űrjátékunkhoz a billentyűzetvezérlésre fogunk összpontosítani, mivel ez adja meg a játékosoknak azt a klasszikus arcade érzést.

Ez arra emlékeztet, ahogyan a 1800-as évek távírókezelői a morze kód bemenetet értelmes üzenetekké kellett fordítaniuk – valami hasonlót csinálunk, a billentyűleütéseket játékparancsokká alakítjuk.

Egy esemény kezeléséhez az ablak `addEventListener()` metódusát kell használnod, és két bemeneti paramétert kell megadnod neki. Az első paraméter az esemény neve, például `keyup`. A második paraméter az a függvény, amelyet az esemény bekövetkezésekor meg kell hívni.

Íme egy példa:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Ami itt történik:**
- **Figyeli** a billentyűeseményeket az egész ablakban
- **Rögzíti** az esemény objektumot, amely információkat tartalmaz arról, hogy melyik billentyűt nyomták meg
- **Ellenőrzi**, hogy a megnyomott billentyű megfelel-e egy konkrét billentyűnek (ebben az esetben a fel nyílnak)
- **Végrehajtja** a kódot, amikor a feltétel teljesül

A billentyűeseményekhez két tulajdonságot használhatsz az eseményben, hogy megtudd, melyik billentyűt nyomták meg:

- `key` - ez a megnyomott billentyű szöveges ábrázolása, például `'ArrowUp'`
- `keyCode` - ez egy szám ábrázolás, például `37`, ami az `ArrowLeft`-nek felel meg

✅ A billentyűesemények manipulálása a játékfejlesztésen kívül is hasznos lehet. Milyen más felhasználási módokat tudsz elképzelni ehhez a technikához?

### Speciális billentyűk: figyelmeztetés!

Néhány billentyűnek beépített böngészői viselkedése van, amely zavarhatja a játékodat. A nyílgombok görgetik az oldalt, a szóköz pedig lefelé ugrik – ezek olyan viselkedések, amelyeket nem szeretnél, amikor valaki éppen az űrhajóját irányítja.

Megakadályozhatjuk ezeket az alapértelmezett viselkedéseket, és hagyhatjuk, hogy a játék kezelje a bemenetet. Ez hasonló ahhoz, ahogyan a korai számítógépes programozóknak felül kellett írniuk a rendszermegszakításokat, hogy egyedi viselkedéseket hozzanak létre – mi ezt a böngésző szintjén tesszük. Így néz ki:

```javascript
const onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

**Ennek a megelőző kódnak a megértése:**
- **Ellenőrzi** azokat a konkrét billentyűkódokat, amelyek nem kívánt böngészői viselkedést okozhatnak
- **Megakadályozza** az alapértelmezett böngészői műveletet a nyílgombok és a szóköz esetében
- **Engedélyezi** más billentyűk normál működését
- **Használja** az `e.preventDefault()`-ot, hogy megállítsa a böngésző beépített viselkedését

## Játék által indukált mozgás

Most beszéljünk azokról az objektumokról, amelyek játékos bemenet nélkül mozognak. Gondolj az ellenséges hajókra, amelyek átsiklanak a képernyőn, a golyókra, amelyek egyenes vonalban repülnek, vagy a háttérben sodródó felhőkre. Ez az önálló mozgás életet ad a játékvilágnak, még akkor is, ha senki sem érinti az irányítást.

A JavaScript beépített időzítőit használjuk a pozíciók rendszeres időközönkénti frissítésére. Ez a koncepció hasonló ahhoz, ahogyan az ingaórák működnek – egy rendszeres mechanizmus, amely következetes, időzített műveleteket indít. Így néz ki egyszerűen:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Ez a mozgáskód ezt csinálja:**
- **Létrehoz** egy időzítőt, amely 100 milliszekundumonként fut
- **Frissíti** az ellenség y-koordinátáját minden alkalommal 10 pixellel
- **Tárolja** az időzítő azonosítóját, hogy később le lehessen állítani
- **Mozgatja** az ellenséget automatikusan lefelé a képernyőn

## A játék ciklusa

Itt van az a koncepció, amely mindent összeköt – a játék ciklusa. Ha a játékod egy film lenne, a játék ciklusa lenne a filmvetítő, amely képkockáról képkockára mutatja a filmet olyan gyorsan, hogy minden simán mozogni látszik.

Minden játék mögött fut egy ilyen ciklus. Ez egy olyan függvény, amely frissíti az összes játékobjektumot, újrarajzolja a képernyőt, és folyamatosan ismétli ezt a folyamatot. Ez tartja nyilván a hősödet, az összes ellenséget, a repülő lézereket – az egész játék állapotát.

Ez a koncepció arra emlékeztet, ahogyan a korai filmanimátorok, mint például Walt Disney, képkockáról képkockára újrarajzolták a karaktereket, hogy a mozgás illúzióját keltsék. Mi ugyanezt tesszük, csak ceruza helyett kóddal.

Így nézhet ki egy játékciklus kódban kifejezve:

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**A játékciklus szerkezetének megértése:**
- **Törli** az egész vásznat, hogy eltávolítsa az előző képkockát
- **Kitölti** a hátteret egy egyszínű színnel
- **Rajzolja** az összes játékobjektumot az aktuális pozíciójukban
- **Ismétli** ezt a folyamatot minden 200 milliszekundumban, hogy sima animációt hozzon létre
- **Kezeli** a képkockasebességet az időközök szabályozásával

## Az űrjáték folytatása

Most mozgást adunk a korábban létrehozott statikus jelenethez. Átalakítjuk egy képernyőképből interaktív élménnyé. Lépésről lépésre haladunk, hogy minden részlet természetesen épüljön a másikra.

Szerezd meg a kódot, ahol az előző leckében abbahagytuk (vagy kezdj a [II. rész kezdő](../../../../6-space-game/3-moving-elements-around/your-work) mappában található kóddal, ha friss kezdésre van szükséged).

**Ezt építjük ma:**
- **Hős vezérlése**: A nyílgombokkal irányíthatod az űrhajódat a képernyőn
- **Ellenség mozgása**: Az idegen hajók megkezdik az előrenyomulást

Kezdjük el ezeknek a funkcióknak a megvalósítását.

## Ajánlott lépések

Keressétek meg azokat a fájlokat, amelyeket a `your-work` almappában hoztunk létre. Tartalmaznia kell a következőket:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

A projektet a `your-work` mappában kezdheted el az alábbi parancs begépelésével:

```bash
cd your-work
npm start
```

**Ez a parancs ezt csinálja:**
- **Navigál** a projekt könyvtárába
- **Elindít** egy HTTP szervert a `http://localhost:5000` címen
- **Kiszolgálja** a játékfájlokat, hogy tesztelhesd őket egy böngészőben

A fentiek elindítanak egy HTTP szervert a `http://localhost:5000` címen. Nyiss meg egy böngészőt, és írd be ezt a címet, jelenleg a hős és az összes ellenség megjelenik; semmi sem mozog – még!

### Kód hozzáadása

1. **Adj hozzá dedikált objektumokat** a `hero`, `enemy` és `game object` számára, amelyeknek `x` és `y` tulajdonságaik vannak. (Emlékezz az [Öröklődés vagy kompozíció](../README.md) részre).

   *TIPP* A `game object` legyen az, amelyiknek `x` és `y` tulajdonságai vannak, és képes magát a vászonra rajzolni.

   > **Tipp**: Kezdj egy új `GameObject` osztály hozzáadásával, amelynek konstruktora az alábbiak szerint van meghatározva, majd rajzold ki a vászonra:

    ```javascript
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    **Ennek az alaposztálynak a megértése:**
    - **Meghatározza** azokat a közös tulajdonságokat, amelyeket minden játékobjektum megoszt (pozíció, méret, kép)
    - **Tartalmaz** egy `dead` jelzőt, hogy nyomon kövesse, az objektumot el kell-e távolítani
    - **Biztosít** egy `draw()` metódust, amely az objektumot a vászonra rajzolja
    - **Beállít** alapértelmezett értékeket minden tulajdonságra, amelyeket a gyermekosztályok felülírhatnak

    Most bővítsd ki ezt a `GameObject`-et, hogy létrehozd a `Hero`-t és az `Enemy`-t:
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **Ezekben az osztályokban kulcsfontosságú fogalmak:**
    - **Örököl** a `GameObject`-ből az `extends` kulcsszóval
    - **Hívja** a szülő konstruktort a `super(x, y)` segítségével
    - **Beállítja** az egyes objektumtípusok konkrét méreteit és tulajdonságait
    - **Megvalósítja** az automatikus mozgást az ellenségek számára a `setInterval()` használatával

2. **Adj hozzá billentyűesemény-kezelőket**, hogy kezeljék a hős navigációját (mozgás fel/le, balra/jobbra)

   *EMLÉKEZZ* ez egy derékszögű koordináta-rendszer, a bal felső sarok a `0,0`. Ne felejtsd el hozzáadni a kódot az *alapértelmezett viselkedés* leállításához.

   > **Tipp**: Hozd létre az `onKeyDown` függvényedet, és csatold az ablakhoz:

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
     switch (e.keyCode) {
       case 37:
       case 39:
       case 38:
       case 40: // Arrow keys
       case 32:
         e.preventDefault();
         break; // Space
       default:
         break; // do not block other keys
     }
   };

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **Ez az eseménykezelő ezt csinálja:**
   - **Figyeli** a billentyűleütési eseményeket az egész ablakban
   - **Naplózza** a billentyűkódot, hogy segítsen hibakeresni, melyik billentyűket nyomják meg
   - **Megakadályozza** az alapértelmezett böngészői viselkedést a nyílgombok és a szóköz esetében
   - **Engedélyezi** más billentyűk normál működését
   

- **Létrehoz** egy ellenségek rácsát beágyazott ciklusokkal  
- **Hozzárendeli** az ellenség képét minden ellenség objektumhoz  
- **Hozzáadja** az egyes ellenségeket a globális játékelemek tömbhöz  

és adj hozzá egy `createHero()` függvényt, amely hasonló folyamatot végez a hős számára.  

    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```
  
**Mit csinál a hős létrehozása:**  
- **Pozícionálja** a hőst a képernyő alján, középen  
- **Hozzárendeli** a hős képét a hős objektumhoz  
- **Hozzáadja** a hőst a játékelemek tömbhöz a megjelenítéshez  

végül adj hozzá egy `drawGameObjects()` függvényt a rajzolás megkezdéséhez:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**A rajzoló függvény megértése:**  
- **Iterál** a tömbben lévő összes játékelem között  
- **Meghívja** a `draw()` metódust minden objektumon  
- **Átadja** a vászon kontextust, hogy az objektumok megjeleníthessék magukat  

Az ellenségeid elkezdenek előrenyomulni a hős űrhajód felé!  
}  
}  
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```
  
végül adj hozzá egy `drawGameObjects()` függvényt a rajzolás megkezdéséhez:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Az ellenségeid elkezdenek előrenyomulni a hős űrhajód felé!  

---

## GitHub Copilot Agent Kihívás 🚀  

Itt egy kihívás, amely javítja a játékod kidolgozottságát: határok és sima irányítás hozzáadása. Jelenleg a hősöd le tud repülni a képernyőről, és a mozgás kissé darabos lehet.  

**A küldetésed:** Tedd az űrhajódat valósághűbbé azáltal, hogy képernyőhatárokat és folyékony mozgást valósítasz meg. Ez hasonló ahhoz, ahogy a NASA repülésirányító rendszerei megakadályozzák, hogy az űrhajók túllépjék a biztonságos működési paramétereket.  

**Amit létre kell hoznod:** Hozz létre egy rendszert, amely az űrhajódat a képernyőn tartja, és az irányítást simává teszi. Amikor a játékosok lenyomva tartanak egy nyílgombot, a hajónak folyamatosan kell siklania, nem pedig lépésenként mozognia. Fontold meg, hogy vizuális visszajelzést adj, amikor a hajó eléri a képernyő határait – például egy finom effektet, amely jelzi a játékterület szélét.  

További információ az [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) funkcióról itt található.  

## 🚀 Kihívás  

A kód szervezése egyre fontosabbá válik, ahogy a projektek növekednek. Lehet, hogy észrevetted, hogy a fájlod kezd zsúfolttá válni, tele függvényekkel, változókkal és osztályokkal, amelyek mind összekeverednek. Ez emlékeztet arra, hogy az Apollo-misszió kódját szervező mérnököknek világos, fenntartható rendszereket kellett létrehozniuk, amelyeken több csapat egyszerre tudott dolgozni.  

**A küldetésed:**  
Gondolkodj úgy, mint egy szoftverarchitekt. Hogyan szerveznéd a kódodat úgy, hogy hat hónap múlva te (vagy egy csapattársad) megértsd, mi történik? Még ha minden egy fájlban marad is most, jobb szervezést hozhatsz létre:  

- **Kapcsolódó függvények csoportosítása** egyértelmű kommentfejlécekkel  
- **Feladatok szétválasztása** - tartsd külön a játékmenetet a megjelenítéstől  
- **Következetes elnevezési** konvenciók használata változókhoz és függvényekhez  
- **Modulok vagy névtér létrehozása** a játék különböző aspektusainak szervezéséhez  
- **Dokumentáció hozzáadása**, amely magyarázza az egyes főbb szakaszok célját  

**Reflexiós kérdések:**  
- A kódod mely részei a legnehezebben érthetők, amikor visszatérsz hozzájuk?  
- Hogyan szervezhetnéd a kódodat, hogy mások könnyebben hozzájárulhassanak?  
- Mi történne, ha új funkciókat, például erősítéseket vagy különböző ellenségtípusokat szeretnél hozzáadni?  

## Utóelőadás Kvíz  

[Utóelőadás kvíz](https://ff-quizzes.netlify.app/web/quiz/34)  

## Áttekintés és Önálló Tanulás  

Mindent a nulláról építettünk, ami fantasztikus a tanuláshoz, de itt egy kis titok – vannak csodálatos JavaScript keretrendszerek, amelyek rengeteg munkát elvégeznek helyetted. Miután kényelmesen érzed magad az általunk tárgyalt alapokkal, érdemes [felfedezni, mi érhető el](https://github.com/collections/javascript-game-engines).  

Gondolj a keretrendszerekre úgy, mint egy jól felszerelt szerszámosládára, ahelyett, hogy minden szerszámot saját kezűleg készítenél. Megoldhatják sok olyan kód szervezési kihívást, amelyről beszéltünk, plusz olyan funkciókat kínálnak, amelyek megvalósítása hetekig tartana.  

**Érdemes felfedezni:**  
- Hogyan szervezik a játékmotorok a kódot – lenyűgöző mintákat fogsz látni  
- Teljesítménytrükkök, amelyekkel a vászonjátékok zökkenőmentesen futnak  
- Modern JavaScript funkciók, amelyek tisztábbá és fenntarthatóbbá teszik a kódodat  
- Különböző megközelítések a játékelemek és azok kapcsolatai kezelésére  

## Feladat  

[Kommentáld a kódodat](assignment.md)  

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.