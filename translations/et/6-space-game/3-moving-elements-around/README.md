<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-10-11T12:10:35+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "et"
}
-->
# Kosmosemängu loomine, 3. osa: Liikumise lisamine

## Eelloengu viktoriin

[Eelloengu viktoriin](https://ff-quizzes.netlify.app/web/quiz/33)

Mängud ei ole eriti lõbusad, kuni ekraanil hakkavad tulnukad ringi liikuma! Selles mängus kasutame kahte tüüpi liikumist:

- **Klaviatuuri/hiire liikumine**: kui kasutaja suhtleb klaviatuuri või hiirega, et liigutada objekti ekraanil.
- **Mängu poolt tekitatud liikumine**: kui mäng liigutab objekti kindla ajavahemiku järel.

Kuidas siis asju ekraanil liigutada? Kõik põhineb ristkoordinaatidel: me muudame objekti asukohta (x, y) ja joonistame ekraani uuesti.

Tavaliselt on liikumise saavutamiseks ekraanil vaja järgmisi samme:

1. **Määra objektile uus asukoht**; see on vajalik, et tajuda objekti liikumist.
2. **Puhasta ekraan**, ekraan tuleb joonistuste vahel puhastada. Seda saab teha, joonistades ristküliku, mille täidame taustavärviga.
3. **Joonista objekt uuesti** uues asukohas. Sellega saavutame lõpuks objekti liikumise ühest asukohast teise.

Näiteks võib see koodis välja näha järgmiselt:

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

✅ Kas oskad mõelda põhjusele, miks kangelase korduv joonistamine mitmel kaadril sekundis võib tekitada jõudluskulusid? Loe [alternatiive sellele mustrile](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Klaviatuuri sündmuste käsitlemine

Sündmusi käsitletakse, sidudes konkreetseid sündmusi koodiga. Klaviatuuri sündmused käivitatakse kogu aknas, samas kui hiire sündmused, nagu `click`, saab siduda konkreetse elemendi klõpsamisega. Kasutame kogu projekti vältel klaviatuuri sündmusi.

Sündmuse käsitlemiseks tuleb kasutada akna `addEventListener()` meetodit ja anda sellele kaks sisendparameetrit. Esimene parameeter on sündmuse nimi, näiteks `keyup`. Teine parameeter on funktsioon, mida tuleks sündmuse toimumise tulemusena käivitada.

Näide:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Klaviatuuri sündmuste puhul on sündmusel kaks omadust, mida saab kasutada, et näha, millist klahvi vajutati:

- `key`, see on vajutatud klahvi stringiline esitus, näiteks `ArrowUp`
- `keyCode`, see on numbriline esitus, näiteks `37`, mis vastab `ArrowLeft`.

✅ Klaviatuuri sündmuste manipuleerimine on kasulik ka väljaspool mänguarendust. Milliseid muid kasutusviise oskad sellele tehnikale mõelda?

### Erilised klahvid: hoiatus

On mõned *erilised* klahvid, mis mõjutavad akent. See tähendab, et kui kuulad `keyup` sündmust ja kasutad neid erilisi klahve kangelase liigutamiseks, toimub ka horisontaalne kerimine. Seetõttu võib olla vajalik *väljalülitada* see sisseehitatud brauseri käitumine, kui oma mängu arendad. Selleks on vaja sellist koodi:

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

Ülaltoodud kood tagab, et nooleklahvid ja tühikuklahv ei täida oma *vaikimisi* käitumist. *Väljalülitamise* mehhanism toimub, kui kutsume `e.preventDefault()`.

## Mängu poolt tekitatud liikumine

Saame asju ise liikuma panna, kasutades taimerit, näiteks `setTimeout()` või `setInterval()` funktsiooni, mis uuendab objekti asukohta iga ajavahemiku järel. Näiteks võib see välja näha järgmiselt:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Mängu tsükkel

Mängu tsükkel on kontseptsioon, mis sisuliselt tähendab funktsiooni, mida kutsutakse regulaarselt. Seda nimetatakse mängu tsükliks, kuna kõik, mis peaks olema kasutajale nähtav, joonistatakse tsüklisse. Mängu tsükkel kasutab kõiki mängu objekte, mis on mängu osa, joonistades need kõik, välja arvatud juhul, kui mingil põhjusel ei peaks need enam mängu osa olema. Näiteks kui objekt on vaenlane, keda laseriga tabati ja kes plahvatab, ei ole see enam praeguse mängu tsükli osa (õpid sellest rohkem järgnevates tundides).

Näiteks võib mängu tsükkel koodis välja näha järgmiselt:

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

Ülaltoodud tsüklit kutsutakse iga `200` millisekundi järel, et lõuend uuesti joonistada. Sul on võimalus valida parim intervall, mis sobib sinu mängule.

## Kosmosemängu jätkamine

Võta olemasolev kood ja laienda seda. Alusta kas koodiga, mille lõpetasid esimeses osas, või kasuta [II osa algkoodi](../../../../6-space-game/3-moving-elements-around/your-work).

- **Kangelase liigutamine**: lisad koodi, et saaksid kangelast nooleklahvide abil liigutada.
- **Vaenlaste liikumine**: lisad koodi, et vaenlased liiguksid ülalt alla kindla kiirusega.

## Soovitatud sammud

Leia failid, mis on sinu jaoks loodud kaustas `your-work`. See peaks sisaldama järgmist:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Alusta oma projekti kaustas `your_work`, sisestades:

```bash
cd your-work
npm start
```

Ülaltoodud käivitab HTTP serveri aadressil `http://localhost:5000`. Ava brauser ja sisesta see aadress, praegu peaks see kuvama kangelase ja kõik vaenlased; miski ei liigu - veel!

### Lisa kood

1. **Lisa spetsiaalsed objektid** `kangelase`, `vaenlase` ja `mängu objekti` jaoks, neil peaks olema `x` ja `y` omadused. (Tuleta meelde osa [Pärand või kompositsioon](../README.md)).

   *VIHJE* `mängu objekt` peaks olema see, millel on `x` ja `y` ning võime end lõuendile joonistada.

   >vihje: alusta uue GameObject klassi lisamisega, mille konstruktor on määratletud allpool, ja joonista see lõuendile:
  
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

    Nüüd laienda seda GameObjecti, et luua kangelane ja vaenlane.
    
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

2. **Lisa klaviatuuri sündmuste käsitlejad**, et käsitleda kangelase liikumist (liiguta kangelast üles/alla vasakule/paremale).

   *MEENUTA* see on ristkoordinaatide süsteem, vasak ülemine nurk on `0,0`. Samuti ära unusta lisada koodi, et peatada *vaikimisi käitumine*.

   >vihje: loo oma onKeyDown funktsioon ja kinnita see aknale:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Kontrolli oma brauseri konsooli selles punktis ja vaata, kuidas klahvivajutused logitakse.

3. **Rakenda** [Pub sub muster](../README.md), see hoiab su koodi puhtana, kui järgmistest osadest edasi liigud.

   Selle viimase osa tegemiseks saad:

   1. **Lisa sündmuste kuulaja** aknale:

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

    1. **Loo EventEmitter klass**, et sõnumeid avaldada ja tellida:

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

    1. **Lisa konstandid** ja seadista EventEmitter:

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

    1. **Initsialiseeri mäng**

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

1. **Seadista mängu tsükkel**

   Refaktoreeri window.onload funktsioon, et initsialiseerida mäng ja seadistada mängu tsükkel sobiva intervalliga. Lisad ka laserkiire:

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

5. **Lisa kood**, et vaenlased liiguksid kindla intervalliga

    Refaktoreeri `createEnemies()` funktsioon, et luua vaenlased ja lisada need uude gameObjects klassi:

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
    
    ja lisa `createHero()` funktsioon, et teha sarnane protsess kangelase jaoks.
    
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

    ja lõpuks lisa `drawGameObjects()` funktsioon, et alustada joonistamist:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Sinu vaenlased peaksid hakkama sinu kangelase kosmoselaeva poole liikuma!

---

## 🚀 Väljakutse

Nagu näha, võib su kood muutuda "spagetikoodiks", kui hakkad lisama funktsioone, muutujaid ja klasse. Kuidas saaksid oma koodi paremini organiseerida, et see oleks loetavam? Joonista süsteem, kuidas oma koodi organiseerida, isegi kui see jääb ühte faili.

## Järelloengu viktoriin

[Järelloengu viktoriin](https://ff-quizzes.netlify.app/web/quiz/34)

## Ülevaade ja iseseisev õppimine

Kuigi kirjutame oma mängu ilma raamistikke kasutamata, on palju JavaScripti-põhiseid lõuendi raamistikke mänguarenduseks. Võta aega, et [lugeda nende kohta](https://github.com/collections/javascript-game-engines).

## Ülesanne

[Kommenteeri oma koodi](assignment.md)

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.