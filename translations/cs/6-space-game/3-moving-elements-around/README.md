<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T10:50:18+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "cs"
}
-->
# Vytvoření vesmírné hry, část 3: Přidání pohybu

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/33)

Hry nejsou moc zábavné, dokud se na obrazovce nezačnou pohybovat mimozemšťané! V této hře využijeme dva typy pohybu:

- **Pohyb pomocí klávesnice/myši**: když uživatel interaguje s klávesnicí nebo myší, aby pohyboval objektem na obrazovce.
- **Pohyb řízený hrou**: když hra pohybuje objektem v určitých časových intervalech.

Jak tedy pohybujeme objekty na obrazovce? Vše je o kartézských souřadnicích: změníme polohu objektu (x, y) a poté obrazovku překreslíme.

Obvykle potřebujete následující kroky, abyste dosáhli *pohybu* na obrazovce:

1. **Nastavte novou polohu** objektu; to je nutné, aby se zdálo, že se objekt pohybuje.
2. **Vymažte obrazovku**, obrazovka musí být mezi jednotlivými vykresleními vymazána. Toho dosáhneme vykreslením obdélníku, který vyplníme barvou pozadí.
3. **Znovu vykreslete objekt** na nové poloze. Tímto způsobem nakonec dosáhneme pohybu objektu z jednoho místa na druhé.

Takto to může vypadat v kódu:

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

✅ Dokážete si představit, proč by překreslování vašeho hrdiny mnohokrát za sekundu mohlo způsobit výkonové problémy? Přečtěte si o [alternativách k tomuto vzoru](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Zpracování událostí klávesnice

Události zpracováváte připojením konkrétních událostí ke kódu. Události klávesnice se spouštějí na celém okně, zatímco události myši, jako je `click`, mohou být spojeny s kliknutím na konkrétní prvek. V tomto projektu budeme používat události klávesnice.

Pro zpracování události musíte použít metodu `addEventListener()` okna a poskytnout jí dva vstupní parametry. Prvním parametrem je název události, například `keyup`. Druhým parametrem je funkce, která by měla být vyvolána v důsledku události.

Zde je příklad:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Pro události kláves existují dvě vlastnosti události, které můžete použít k určení, která klávesa byla stisknuta:

- `key`, což je textová reprezentace stisknuté klávesy, například `ArrowUp`
- `keyCode`, což je číselná reprezentace, například `37`, odpovídá `ArrowLeft`.

✅ Manipulace s událostmi kláves je užitečná i mimo vývoj her. Jaké další využití této techniky vás napadají?

### Speciální klávesy: upozornění

Existují některé *speciální* klávesy, které ovlivňují okno. To znamená, že pokud posloucháte událost `keyup` a použijete tyto speciální klávesy k pohybu svého hrdiny, dojde také k horizontálnímu posouvání. Z tohoto důvodu možná budete chtít *vypnout* toto vestavěné chování prohlížeče při vytváření své hry. Potřebujete kód jako tento:

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

Výše uvedený kód zajistí, že šipky a mezerník budou mít své *výchozí* chování vypnuté. Mechanismus *vypnutí* nastane, když zavoláme `e.preventDefault()`.

## Pohyb řízený hrou

Objekty se mohou pohybovat samy pomocí časovačů, jako jsou funkce `setTimeout()` nebo `setInterval()`, které aktualizují polohu objektu při každém tiknutí nebo časovém intervalu. Takto to může vypadat:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Herní smyčka

Herní smyčka je koncept, který v podstatě představuje funkci vyvolávanou v pravidelných intervalech. Říká se jí herní smyčka, protože vše, co by mělo být viditelné pro uživatele, je vykresleno v této smyčce. Herní smyčka využívá všechny herní objekty, které jsou součástí hry, a vykresluje je, pokud z nějakého důvodu již nejsou součástí hry. Například pokud je objekt nepřítel, který byl zasažen laserem a exploduje, již není součástí aktuální herní smyčky (o tom se dozvíte více v dalších lekcích).

Takto může typická herní smyčka vypadat v kódu:

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

Výše uvedená smyčka je vyvolávána každých `200` milisekund, aby překreslila plátno. Máte možnost zvolit nejlepší interval, který dává smysl pro vaši hru.

## Pokračování ve vesmírné hře

Vezmete existující kód a rozšíříte ho. Buď začněte s kódem, který jste dokončili během části I, nebo použijte kód z [části II - startér](../../../../6-space-game/3-moving-elements-around/your-work).

- **Pohyb hrdiny**: přidáte kód, který zajistí, že můžete pohybovat hrdinou pomocí šipek.
- **Pohyb nepřátel**: budete také muset přidat kód, který zajistí, že se nepřátelé pohybují shora dolů v daném tempu.

## Doporučené kroky

Najděte soubory, které byly vytvořeny pro vás ve složce `your-work`. Měly by obsahovat následující:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Spusťte svůj projekt ve složce `your_work` zadáním:

```bash
cd your-work
npm start
```

Výše uvedené spustí HTTP server na adrese `http://localhost:5000`. Otevřete prohlížeč a zadejte tuto adresu, aktuálně by měl zobrazit hrdinu a všechny nepřátele; zatím se nic nehýbe!

### Přidání kódu

1. **Přidejte dedikované objekty** pro `hero`, `enemy` a `game object`, měly by mít vlastnosti `x` a `y`. (Pamatujte na část o [dědičnosti nebo kompozici](../README.md)).

   *TIP*: Začněte přidáním nové třídy GameObject s jejím konstruktorem, jak je uvedeno níže, a poté ji vykreslete na plátno:

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

    Nyní rozšiřte tento GameObject a vytvořte Hero a Enemy.

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

2. **Přidejte obslužné funkce událostí kláves** pro navigaci (pohyb hrdiny nahoru/dolů, vlevo/vpravo).

   *PAMATUJTE*: Jde o kartézský systém, levý horní roh je `0,0`. Také nezapomeňte přidat kód pro zastavení *výchozího chování*.

   >tip: vytvořte svou funkci onKeyDown a připojte ji k oknu:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Zkontrolujte konzoli prohlížeče a sledujte, jak se zaznamenávají stisky kláves.

3. **Implementujte** [Pub-sub vzor](../README.md), který udrží váš kód čistý, jak budete pokračovat v dalších částech.

   Pro tuto poslední část můžete:

   1. **Přidat posluchač událostí** na okno:

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

    1. **Vytvořit třídu EventEmitter** pro publikování a odběr zpráv:

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

    1. **Přidat konstanty** a nastavit EventEmitter:

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

    1. **Inicializovat hru**

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

1. **Nastavte herní smyčku**

   Refaktorujte funkci window.onload tak, aby inicializovala hru a nastavila herní smyčku na vhodný interval. Přidáte také laserový paprsek:

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

5. **Přidejte kód** pro pohyb nepřátel v určitém intervalu.

    Refaktorujte funkci `createEnemies()`, aby vytvořila nepřátele a přidala je do nové třídy gameObjects:

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
    
    a přidejte funkci `createHero()`, která provede podobný proces pro hrdinu.
    
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

    a nakonec přidejte funkci `drawGameObjects()`, která zahájí vykreslování:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Vaši nepřátelé by měli začít postupovat směrem k vaší vesmírné lodi!

---

## 🚀 Výzva

Jak vidíte, váš kód se může stát „špagetovým kódem“, když začnete přidávat funkce, proměnné a třídy. Jak můžete lépe organizovat svůj kód, aby byl čitelnější? Navrhněte systém pro organizaci svého kódu, i když stále zůstává v jednom souboru.

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/34)

## Recenze a samostudium

I když píšeme naši hru bez použití frameworků, existuje mnoho JavaScriptových frameworků pro vývoj her na plátně. Věnujte nějaký čas [čtení o těchto](https://github.com/collections/javascript-game-engines).

## Zadání

[Okomentujte svůj kód](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Za autoritativní zdroj by měl být považován původní dokument v jeho původním jazyce. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.