<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-27T22:25:40+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 3: Pridanie pohybu

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Hry nie sú veľmi zábavné, kým sa na obrazovke nezačnú pohybovať mimozemšťania! V tejto hre využijeme dva typy pohybov:

- **Pohyb klávesnicou/myšou**: keď používateľ interaguje s klávesnicou alebo myšou na pohyb objektu na obrazovke.
- **Pohyb vyvolaný hrou**: keď hra pohybuje objektom v určitých časových intervaloch.

Ako teda pohybujeme vecami na obrazovke? Všetko je to o karteziánskych súradniciach: zmeníme polohu (x, y) objektu a potom prekreslíme obrazovku.

Typicky potrebujete nasledujúce kroky na dosiahnutie *pohybu* na obrazovke:

1. **Nastaviť novú polohu** objektu; to je potrebné na to, aby sa objekt javil ako pohybujúci sa.
2. **Vyčistiť obrazovku**, obrazovka musí byť vyčistená medzi jednotlivými prekresleniami. Môžeme ju vyčistiť nakreslením obdĺžnika, ktorý vyplníme farbou pozadia.
3. **Prekresliť objekt** na novej polohe. Týmto konečne dosiahneme pohyb objektu z jedného miesta na druhé.

Takto to môže vyzerať v kóde:

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

✅ Dokážete si predstaviť dôvod, prečo by prekresľovanie vášho hrdinu mnohokrát za sekundu mohlo spôsobiť výkonové náklady? Prečítajte si o [alternatívach k tomuto vzoru](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Spracovanie udalostí klávesnice

Udalosti spracovávate pripojením konkrétnych udalostí ku kódu. Udalosti klávesnice sa spúšťajú na celom okne, zatiaľ čo udalosti myši, ako napríklad `click`, môžu byť pripojené ku kliknutiu na konkrétny prvok. Počas tohto projektu budeme používať udalosti klávesnice.

Na spracovanie udalosti musíte použiť metódu `addEventListener()` okna a poskytnúť jej dva vstupné parametre. Prvým parametrom je názov udalosti, napríklad `keyup`. Druhým parametrom je funkcia, ktorá by sa mala spustiť ako výsledok udalosti.

Tu je príklad:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Pre udalosti klávesnice existujú dve vlastnosti na udalosti, ktoré môžete použiť na zistenie, ktorá klávesa bola stlačená:

- `key`, toto je reťazcová reprezentácia stlačenej klávesy, napríklad `ArrowUp`
- `keyCode`, toto je číselná reprezentácia, napríklad `37`, čo zodpovedá `ArrowLeft`.

✅ Manipulácia s udalosťami klávesnice je užitočná aj mimo vývoja hier. Na aké iné použitia by ste mohli túto techniku využiť?

### Špeciálne klávesy: upozornenie

Existujú niektoré *špeciálne* klávesy, ktoré ovplyvňujú okno. To znamená, že ak počúvate udalosť `keyup` a použijete tieto špeciálne klávesy na pohyb vášho hrdinu, vykoná sa aj horizontálne posúvanie. Z tohto dôvodu možno budete chcieť *vypnúť* toto predvolené správanie prehliadača pri budovaní vašej hry. Potrebujete kód ako tento:

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

Vyššie uvedený kód zabezpečí, že šípky a medzerník budú mať svoje *predvolené* správanie vypnuté. Mechanizmus *vypnutia* sa spustí, keď zavoláme `e.preventDefault()`.

## Pohyb vyvolaný hrou

Veci môžeme nechať pohybovať sa samé pomocou časovačov, ako sú funkcie `setTimeout()` alebo `setInterval()`, ktoré aktualizujú polohu objektu pri každom tiknutí alebo časovom intervale. Takto to môže vyzerať:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Herná slučka

Herná slučka je koncept, ktorý je v podstate funkciou vyvolávanou v pravidelných intervaloch. Nazýva sa herná slučka, pretože všetko, čo by malo byť viditeľné pre používateľa, sa kreslí v rámci tejto slučky. Herná slučka využíva všetky herné objekty, ktoré sú súčasťou hry, a kreslí ich, pokiaľ z nejakého dôvodu už nie sú súčasťou hry. Napríklad, ak je objekt nepriateľ, ktorý bol zasiahnutý laserom a vybuchne, už nie je súčasťou aktuálnej hernej slučky (o tomto sa dozviete viac v nasledujúcich lekciách).

Takto môže typicky vyzerať herná slučka, vyjadrená v kóde:

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

Vyššie uvedená slučka sa vyvoláva každých `200` milisekúnd na prekreslenie plátna. Máte možnosť zvoliť si najlepší interval, ktorý má zmysel pre vašu hru.

## Pokračovanie vo vesmírnej hre

Vezmete existujúci kód a rozšírite ho. Buď začnite s kódom, ktorý ste dokončili počas časti I, alebo použite kód v [časti II - štartér](../../../../6-space-game/3-moving-elements-around/your-work).

- **Pohyb hrdinu**: pridáte kód na zabezpečenie pohybu hrdinu pomocou šípok.
- **Pohyb nepriateľov**: budete tiež musieť pridať kód na zabezpečenie pohybu nepriateľov zhora nadol v danom tempe.

## Odporúčané kroky

Nájdite súbory, ktoré boli pre vás vytvorené v podpriečinku `your-work`. Mali by obsahovať nasledujúce:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Svoj projekt spustíte v priečinku `your_work` zadaním:

```bash
cd your-work
npm start
```

Vyššie uvedené spustí HTTP server na adrese `http://localhost:5000`. Otvorte prehliadač a zadajte túto adresu, momentálne by sa mal zobraziť hrdina a všetci nepriatelia; nič sa však ešte nehýbe!

### Pridajte kód

1. **Pridajte dedikované objekty** pre `hero`, `enemy` a `game object`, mali by mať vlastnosti `x` a `y`. (Pamätajte na časť o [dedičnosti alebo kompozícii](../README.md)).

   *TIP*: Začnite pridaním novej triedy GameObject s jej konštruktorom definovaným nasledovne a potom ju nakreslite na plátno:
  
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

    Teraz rozšírte tento GameObject na vytvorenie Hero a Enemy.
    
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

2. **Pridajte spracovanie udalostí klávesnice** na spracovanie navigácie klávesami (pohyb hrdinu hore/dole, vľavo/vpravo).

   *PAMÄTAJTE*: Je to karteziánsky systém, ľavý horný roh je `0,0`. Tiež nezabudnite pridať kód na zastavenie *predvoleného správania*.

   >tip: vytvorte svoju funkciu onKeyDown a pripojte ju k oknu:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Skontrolujte konzolu prehliadača v tomto bode a sledujte, ako sa zaznamenávajú stlačenia kláves.

3. **Implementujte** [Pub sub pattern](../README.md), aby bol váš kód čistý, keď budete pokračovať v ďalších častiach.

   Na vykonanie tejto poslednej časti môžete:

   1. **Pridať poslucháča udalostí** na okno:

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

    1. **Vytvoriť triedu EventEmitter** na publikovanie a odber správ:

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

    1. **Pridať konštanty** a nastaviť EventEmitter:

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

    1. **Inicializovať hru**

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

1. **Nastavte hernú slučku**

   Refaktorujte funkciu window.onload na inicializáciu hry a nastavenie hernej slučky v dobrom intervale. Tiež pridáte laserový lúč:

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

5. **Pridajte kód** na pohyb nepriateľov v určitom intervale.

    Refaktorujte funkciu `createEnemies()` na vytvorenie nepriateľov a ich pridanie do novej triedy gameObjects:

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
    
    a pridajte funkciu `createHero()` na vykonanie podobného procesu pre hrdinu.
    
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

    a nakoniec pridajte funkciu `drawGameObjects()` na spustenie kreslenia:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Vaši nepriatelia by mali začať postupovať na vašu vesmírnu loď!

---

## 🚀 Výzva

Ako vidíte, váš kód sa môže zmeniť na "špagetový kód", keď začnete pridávať funkcie, premenné a triedy. Ako môžete lepšie organizovať svoj kód, aby bol čitateľnejší? Návrhnite systém na organizáciu vášho kódu, aj keď stále zostáva v jednom súbore.

## Kvíz po prednáške

[Kvíz po prednáške](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Prehľad a samoštúdium

Aj keď píšeme našu hru bez použitia frameworkov, existuje mnoho JavaScriptových frameworkov pre vývoj hier na plátne. Nájdite si čas na [čítanie o nich](https://github.com/collections/javascript-game-engines).

## Zadanie

[Okomentujte svoj kód](assignment.md)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.