<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T10:27:17+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 3. rész: Mozgás hozzáadása

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/33)

A játékok nem igazán szórakoztatóak, amíg nem látunk ide-oda mozgó idegeneket a képernyőn! Ebben a játékban kétféle mozgást fogunk használni:

- **Billentyűzet/egér mozgás**: amikor a felhasználó a billentyűzettel vagy egérrel mozgat egy objektumot a képernyőn.
- **Játék által generált mozgás**: amikor a játék bizonyos időközönként mozgat egy objektumot.

De hogyan mozgatunk dolgokat a képernyőn? Az egész a derékszögű koordinátákról szól: megváltoztatjuk az objektum helyét (x, y), majd újrarajzoljuk a képernyőt.

Általában a következő lépések szükségesek a *mozgás* megvalósításához a képernyőn:

1. **Új hely meghatározása** egy objektum számára; ez szükséges ahhoz, hogy az objektum mozgását érzékeljük.
2. **Képernyő törlése**, a képernyőt minden rajzolás között törölni kell. Ezt úgy tehetjük meg, hogy egy téglalapot rajzolunk, amelyet kitöltünk egy háttérszínnel.
3. **Objektum újrarajzolása** az új helyen. Ezzel végül elérjük, hogy az objektum egyik helyről a másikra mozogjon.

Így nézhet ki ez a kódban:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Gondolkozz el azon, hogy miért okozhat teljesítményproblémákat, ha a hősödet másodpercenként sokszor újrarajzolod? Olvass utána az [alternatív megoldásoknak](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Billentyűesemények kezelése

Az eseményeket úgy kezeljük, hogy specifikus eseményeket kapcsolunk kódhoz. A billentyűesemények az egész ablakra vonatkoznak, míg az egér események, például a `click`, egy adott elemhez kapcsolhatók. Ebben a projektben billentyűeseményeket fogunk használni.

Egy esemény kezeléséhez az ablak `addEventListener()` metódusát kell használnod, és két bemeneti paramétert kell megadnod. Az első paraméter az esemény neve, például `keyup`. A második paraméter az a függvény, amelyet az esemény bekövetkezésekor meg kell hívni.

Íme egy példa:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

A billentyűeseményekhez két tulajdonságot használhatsz az eseményen belül, hogy megtudd, melyik billentyűt nyomták meg:

- `key`: ez a megnyomott billentyű szöveges ábrázolása, például `ArrowUp`.
- `keyCode`: ez a számérték, például `37`, amely az `ArrowLeft`-nek felel meg.

✅ A billentyűesemények kezelése a játékfejlesztésen kívül is hasznos lehet. Milyen más felhasználási módokat tudsz elképzelni ehhez a technikához?

### Speciális billentyűk: egy figyelmeztetés

Vannak bizonyos *speciális* billentyűk, amelyek hatással vannak az ablakra. Ez azt jelenti, hogy ha például egy `keyup` eseményt figyelsz, és ezeket a speciális billentyűket használod a hős mozgatására, akkor vízszintes görgetés is történhet. Emiatt érdemes lehet *kikapcsolni* ezt a beépített böngészői viselkedést, miközben a játékodat építed. Ehhez ilyen kódra van szükséged:

```javascript
let onKeyDown = function (e) {
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

A fenti kód biztosítja, hogy a nyílbillentyűk és a szóköz billentyű *alapértelmezett* viselkedése ki legyen kapcsolva. A *kikapcsolás* a `e.preventDefault()` hívásával történik.

## Játék által generált mozgás

Az objektumokat maguktól is mozgathatjuk időzítők, például a `setTimeout()` vagy `setInterval()` függvények segítségével, amelyek minden időintervallumban frissítik az objektum helyét. Így nézhet ki ez:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## A játékciklus

A játékciklus egy olyan koncepció, amely lényegében egy rendszeresen meghívott függvény. Azért hívják játékciklusnak, mert minden, amit a felhasználónak látnia kell, ebben a ciklusban kerül kirajzolásra. A játékciklus az összes játékobjektumot használja, amelyek a játék részét képezik, és mindet kirajzolja, kivéve, ha valamilyen okból már nem részei a játéknak. Például, ha egy objektum egy ellenség, amelyet egy lézer eltalált és felrobbant, akkor az már nem része az aktuális játékciklusnak (erről többet tanulsz a következő leckékben).

Így nézhet ki egy játékciklus kódban kifejezve:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

A fenti ciklus minden `200` milliszekundumban meghívódik, hogy újrarajzolja a vásznat. Te döntheted el, hogy mi a legjobb időköz a játékod számára.

## Az Űrjáték folytatása

A meglévő kódot fogod bővíteni. Vagy az első részben elkészült kóddal kezdj, vagy használd a [II. rész - kezdő](../../../../6-space-game/3-moving-elements-around/your-work) kódját.

- **Hős mozgatása**: kódot fogsz hozzáadni, hogy a hőst a nyílbillentyűkkel lehessen mozgatni.
- **Ellenségek mozgatása**: kódot kell hozzáadnod, hogy az ellenségek fentről lefelé mozogjanak egy adott sebességgel.

## Ajánlott lépések

Keresd meg azokat a fájlokat, amelyeket a `your-work` almappában hoztak létre számodra. Ezeknek a következőket kell tartalmazniuk:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

A projektedet a `your_work` mappában indíthatod el az alábbi parancs beírásával:

```bash
cd your-work
npm start
```

A fenti parancs egy HTTP szervert indít a `http://localhost:5000` címen. Nyiss meg egy böngészőt, és írd be ezt a címet. Jelenleg a hős és az összes ellenség megjelenik; még semmi sem mozog!

### Kód hozzáadása

1. **Hozz létre dedikált objektumokat** a `hero`, `enemy` és `game object` számára, ezeknek legyen `x` és `y` tulajdonságuk. (Emlékezz az [Öröklődés vagy kompozíció](../README.md) részre).

   *TIPP*: A `game object` legyen az, amelyik rendelkezik `x` és `y` tulajdonságokkal, és képes önmagát kirajzolni a vászonra.

   >tipp: hozz létre egy új GameObject osztályt az alábbi konstruktorral, majd rajzold ki a vászonra:
  
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

    Most bővítsd ki ezt a GameObject-et, hogy létrehozd a Hero-t és az Enemy-t.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Adj hozzá billentyűesemény-kezelőket**, hogy kezeld a hős navigációját (mozgatás fel/le, balra/jobbra).

   *EMLÉKEZZ*: Ez egy derékszögű rendszer, a bal felső sarok a `0,0`. Ne felejts el kódot hozzáadni az *alapértelmezett viselkedés* leállításához.

   >tipp: hozd létre az onKeyDown függvényedet, és csatold az ablakhoz:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Nézd meg a böngésződ konzolját, és figyeld, ahogy a billentyűleütések naplózásra kerülnek.

3. **Valósítsd meg** a [Pub-sub mintát](../README.md), hogy a kódod tiszta maradjon a további részek során.

   Ehhez az utolsó részhez:

   1. **Adj hozzá egy eseményfigyelőt** az ablakhoz:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Hozz létre egy EventEmitter osztályt**, hogy üzeneteket publikálj és iratkozz fel rájuk:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Adj hozzá konstansokat**, és állítsd be az EventEmitter-t:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Inicializáld a játékot**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Állítsd be a játékciklust**

   Refaktoráld az `window.onload` függvényt, hogy inicializálja a játékot, és állíts be egy játékciklust megfelelő időközönként. Adj hozzá egy lézersugarat is:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Adj hozzá kódot**, hogy az ellenségek bizonyos időközönként mozogjanak.

    Refaktoráld a `createEnemies()` függvényt, hogy létrehozza az ellenségeket, és hozzáadja őket az új gameObjects osztályhoz:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    és adj hozzá egy `createHero()` függvényt, hogy hasonló folyamatot végezzen a hős számára.
    
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

    végül adj hozzá egy `drawGameObjects()` függvényt, hogy elindítsd a rajzolást:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Az ellenségeid elindulnak a hős űrhajód felé!

---

## 🚀 Kihívás

Ahogy láthatod, a kódod könnyen "spagetti kóddá" válhat, amikor elkezdesz funkciókat, változókat és osztályokat hozzáadni. Hogyan tudnád jobban megszervezni a kódodat, hogy olvashatóbb legyen? Vázolj fel egy rendszert a kódod megszervezésére, még akkor is, ha az egy fájlban marad.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/34)

## Áttekintés és önálló tanulás

Bár a játékunkat keretrendszerek használata nélkül írjuk, számos JavaScript-alapú vászon keretrendszer létezik játékfejlesztéshez. Szánj időt arra, hogy [olvass ezekről](https://github.com/collections/javascript-game-engines).

## Feladat

[Kommentáld a kódodat](assignment.md)

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt a professzionális, emberi fordítás igénybevétele. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.