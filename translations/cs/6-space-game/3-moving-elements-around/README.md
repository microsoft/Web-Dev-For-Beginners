<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-24T21:08:58+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 3: Přidání pohybu

Přemýšlejte o svých oblíbených hrách – co je na nich poutavé, nejsou jen pěkné grafiky, ale způsob, jakým se vše pohybuje a reaguje na vaše akce. Vaše vesmírná hra je zatím jako krásný obraz, ale chystáme se přidat pohyb, který ji oživí.

Když inženýři NASA programovali navigační počítač pro mise Apollo, čelili podobné výzvě: jak zajistit, aby kosmická loď reagovala na vstupy pilota a zároveň automaticky prováděla korekce kurzu? Principy, které se dnes naučíme, odrážejí tyto koncepty – řízení pohybu ovládaného hráčem vedle automatických systémových chování.

V této lekci se naučíte, jak nechat vesmírné lodě klouzat po obrazovce, reagovat na příkazy hráče a vytvářet hladké pohybové vzory. Vše rozdělíme na zvládnutelné koncepty, které na sebe přirozeně navazují.

Na konci budou hráči létat se svou hrdinskou lodí po obrazovce, zatímco nepřátelské lodě budou hlídkovat nad nimi. Ještě důležitější je, že pochopíte základní principy, které pohánějí systémy pohybu ve hrách.

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/33)

## Pochopení pohybu ve hrách

Hry ožívají, když se věci začnou pohybovat, a existují v zásadě dva způsoby, jak se to děje:

- **Pohyb ovládaný hráčem**: Když stisknete klávesu nebo kliknete myší, něco se pohne. To je přímé spojení mezi vámi a herním světem.
- **Automatický pohyb**: Když hra sama rozhodne o pohybu věcí – například nepřátelské lodě, které musí hlídkovat na obrazovce, ať už něco děláte nebo ne.

Pohybovat objekty na obrazovce počítače je jednodušší, než si myslíte. Pamatujete si na souřadnice x a y z hodin matematiky? Přesně s tím budeme pracovat. Když Galileo v roce 1610 sledoval Jupiterovy měsíce, v podstatě dělal totéž – zaznamenával polohy v čase, aby pochopil vzory pohybu.

Pohyb věcí na obrazovce je jako vytváření animace flipbooku – musíte dodržet tyto tři jednoduché kroky:

1. **Aktualizujte polohu** – Změňte, kde by měl být váš objekt (například ho posuňte o 5 pixelů doprava)
2. **Vymažte starý snímek** – Vyčistěte obrazovku, aby se všude neobjevovaly duchové stopy
3. **Nakreslete nový snímek** – Umístěte svůj objekt na jeho nové místo

Dělejte to dostatečně rychle a bum! Máte hladký pohyb, který působí na hráče přirozeně.

Takto to může vypadat v kódu:

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

**Co tento kód dělá:**
- **Aktualizuje** x-souřadnici hrdiny o 5 pixelů, aby se pohyboval horizontálně
- **Vymaže** celou oblast plátna, aby odstranil předchozí snímek
- **Vyplní** plátno černou barvou pozadí
- **Znovu nakreslí** obrázek hrdiny na jeho nové pozici

✅ Dokážete si představit důvod, proč by opakované překreslování hrdiny mnohokrát za sekundu mohlo způsobit výkonové náklady? Přečtěte si o [alternativách k tomuto vzoru](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Zpracování událostí klávesnice

Tady připojíme vstupy hráče k herní akci. Když někdo stiskne mezerník, aby vystřelil laser, nebo klepne na šipku, aby se vyhnul asteroidu, vaše hra musí tento vstup detekovat a reagovat na něj.

Události klávesnice se odehrávají na úrovni okna, což znamená, že celé okno prohlížeče naslouchá těmto stiskům kláves. Kliknutí myší na druhou stranu mohou být vázána na konkrétní prvky (například kliknutí na tlačítko). Pro naši vesmírnou hru se zaměříme na ovládání klávesnicí, protože to hráčům poskytuje ten klasický arkádový pocit.

To mi připomíná, jak telegrafní operátoři v 19. století museli překládat vstupy morseovky do smysluplných zpráv – děláme něco podobného, překládáme stisky kláves do herních příkazů.

Pro zpracování události musíte použít metodu `addEventListener()` okna a poskytnout jí dva vstupní parametry. Prvním parametrem je název události, například `keyup`. Druhým parametrem je funkce, která by měla být vyvolána v důsledku události.

Zde je příklad:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Rozbor toho, co se zde děje:**
- **Naslouchá** událostem klávesnice na celém okně
- **Zachytává** objekt události, který obsahuje informace o tom, která klávesa byla stisknuta
- **Kontroluje**, zda stisknutá klávesa odpovídá konkrétní klávese (v tomto případě šipce nahoru)
- **Spouští** kód, když je podmínka splněna

Pro události kláves existují dvě vlastnosti na objektu události, které můžete použít k zjištění, která klávesa byla stisknuta:

- `key` - to je textová reprezentace stisknuté klávesy, například `'ArrowUp'`
- `keyCode` - to je číselná reprezentace, například `37`, odpovídá `ArrowLeft`

✅ Manipulace s událostmi kláves je užitečná i mimo vývoj her. Jaké další využití této techniky vás napadá?

### Speciální klávesy: pozor!

Některé klávesy mají vestavěné chování prohlížeče, které může narušit vaši hru. Šipky posouvají stránku a mezerník skáče dolů – chování, které nechcete, když se někdo snaží pilotovat svou vesmírnou loď.

Můžeme těmto výchozím chováním zabránit a nechat naši hru, aby vstupy zpracovávala sama. To je podobné tomu, jak museli raní počítačoví programátoři přepisovat systémové přerušení, aby vytvořili vlastní chování – my to děláme na úrovni prohlížeče. Tady je postup:

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

**Pochopení tohoto kódu pro prevenci:**
- **Kontroluje** konkrétní kódy kláves, které by mohly způsobit nežádoucí chování prohlížeče
- **Zabraňuje** výchozímu chování prohlížeče pro šipky a mezerník
- **Umožňuje** ostatním klávesám fungovat normálně
- **Používá** `e.preventDefault()` k zastavení vestavěného chování prohlížeče

## Pohyb vyvolaný hrou

Teď si povíme o objektech, které se pohybují bez vstupu hráče. Přemýšlejte o nepřátelských lodích plujících po obrazovce, kulkách letících v přímých liniích nebo mracích plujících na pozadí. Tento autonomní pohyb dělá váš herní svět živým, i když se nikdo nedotýká ovládání.

Používáme vestavěné časovače JavaScriptu k aktualizaci poloh v pravidelných intervalech. Tento koncept je podobný tomu, jak fungují kyvadlové hodiny – pravidelný mechanismus, který spouští konzistentní, časované akce. Tady je, jak jednoduché to může být:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Co tento kód pohybu dělá:**
- **Vytváří** časovač, který běží každých 100 milisekund
- **Aktualizuje** y-souřadnici nepřítele o 10 pixelů při každém spuštění
- **Ukládá** ID intervalu, aby ho bylo možné později zastavit, pokud bude potřeba
- **Pohybuje** nepřítelem dolů na obrazovce automaticky

## Herní smyčka

Tady je koncept, který vše spojuje – herní smyčka. Pokud by vaše hra byla filmem, herní smyčka by byla filmovým projektorem, který ukazuje snímek za snímkem tak rychle, že vše vypadá, jako by se pohybovalo hladce.

Každá hra má jednu z těchto smyček běžících na pozadí. Je to funkce, která aktualizuje všechny herní objekty, překresluje obrazovku a tento proces neustále opakuje. Sleduje vašeho hrdinu, všechny nepřátele, jakékoli létající lasery – celý stav hry.

Tento koncept mi připomíná, jak raní filmoví animátoři jako Walt Disney museli kreslit postavy snímek po snímku, aby vytvořili iluzi pohybu. Děláme totéž, jen s kódem místo tužek.

Takto může herní smyčka obvykle vypadat, vyjádřená v kódu:

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

**Pochopení struktury herní smyčky:**
- **Vymaže** celé plátno, aby odstranilo předchozí snímek
- **Vyplní** pozadí pevnou barvou
- **Nakreslí** všechny herní objekty na jejich aktuálních pozicích
- **Opakuje** tento proces každých 200 milisekund, aby vytvořil hladkou animaci
- **Řídí** snímkovou frekvenci kontrolou časování intervalu

## Pokračování vesmírné hry

Teď přidáme pohyb do statické scény, kterou jste vytvořili dříve. Proměníme ji ze snímku na interaktivní zážitek. Budeme postupovat krok za krokem, abychom zajistili, že každý díl navazuje na ten předchozí.

Vezměte kód z místa, kde jsme skončili v předchozí lekci (nebo začněte s kódem ve složce [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work), pokud potřebujete nový začátek).

**Co dnes budujeme:**
- **Ovládání hrdiny**: Šipky budou pilotovat vaši vesmírnou loď po obrazovce
- **Pohyb nepřátel**: Ty mimozemské lodě začnou svůj postup

Začněme implementovat tyto funkce.

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

Svůj projekt začněte ve složce `your-work` zadáním:

```bash
cd your-work
npm start
```

**Co tento příkaz dělá:**
- **Naviguje** do adresáře vašeho projektu
- **Spustí** HTTP server na adrese `http://localhost:5000`
- **Servíruje** vaše herní soubory, abyste je mohli testovat v prohlížeči

Výše uvedené spustí HTTP server na adrese `http://localhost:5000`. Otevřete prohlížeč a zadejte tuto adresu, právě teď by měl zobrazit hrdinu a všechny nepřátele; zatím se nic nehýbe!

### Přidání kódu

1. **Přidejte dedikované objekty** pro `hero`, `enemy` a `game object`, měly by mít vlastnosti `x` a `y`. (Pamatujte na část o [Dědičnosti nebo kompozici](../README.md)).

   *TIP*: Začněte přidáním nové třídy `GameObject` s jejím konstruktorem, jak je uvedeno níže, a poté ji nakreslete na plátno:

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

    **Pochopení této základní třídy:**
    - **Definuje** společné vlastnosti, které sdílejí všechny herní objekty (pozice, velikost, obrázek)
    - **Obsahuje** příznak `dead`, který sleduje, zda by měl být objekt odstraněn
    - **Poskytuje** metodu `draw()`, která vykresluje objekt na plátno
    - **Nastavuje** výchozí hodnoty pro všechny vlastnosti, které mohou podřízené třídy přepsat

    Nyní rozšiřte tuto třídu `GameObject` a vytvořte `Hero` a `Enemy`:
    
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

    **Klíčové koncepty v těchto třídách:**
    - **Dědí** z `GameObject` pomocí klíčového slova `extends`
    - **Volá** rodičovský konstruktor pomocí `super(x, y)`
    - **Nastavuje** specifické rozměry a vlastnosti pro každý typ objektu
    - **Implementuje** automatický pohyb pro nepřátele pomocí `setInterval()`

2. **Přidejte zpracování událostí kláves** pro navigaci klávesami (pohyb hrdiny nahoru/dolů vlevo/vpravo)

   *PAMATUJTE*, že jde o kartézský systém, levý horní roh je `0,0`. Také nezapomeňte přidat kód pro zastavení *výchozího chování*.

   > **Tip**: Vytvořte svou funkci `onKeyDown` a připojte ji k oknu:

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
    
   **Co tento zpracovatel událostí dělá:**
   - **Naslouchá** událostem stisknutí kláves na celém okně
   - **Zaznamenává** kód klávesy, aby vám pomohl ladit, které klávesy jsou stisknuty
   - **Zabraňuje** výchozímu chování prohlížeče pro šipky a mezerník
   - **Umožňuje** ostatním klávesám fungovat normálně
   
   Zkontrolujte konzoli svého prohlížeče v tomto bodě a sledujte, jak se zaznamenávají stisky kláves.

3. **Implementujte** [Pub sub pattern](../README.md), což udrží váš kód čistý, jak budete pokračovat v dalších částech.

   Vzor Publish-Subscribe pomáhá organizovat váš kód oddělením detekce událostí od jejich zpracování. Díky tomu je váš kód modulárnější a snadněji udržovatelný.

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

   **Co tento systém událostí dělá:**
   - **Detekuje** vstupy klávesnice a převádí je na vlastní herní události
   - **Odděluje** detekci vstupů od herní logiky
   - **Umožňuje** snadno změnit ovládání později bez ovlivnění herního kódu
   - **Dovoluje** více systémům reagovat na stejný vstup

   2. **Vytvořte třídu EventEmitter** pro publikování a odběr zpráv:

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
       
   3. **Přidejte konstanty** a nastavte EventEmitter:

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

   **Pochopení nastavení:**
   - **Definuje** konstanty zpráv, aby se předešlo překlepům a usnadnilo refaktoring
   - **Deklaruje** proměnné pro obrázky, kontext plátna a stav hry
   - **Vytváří** globální EventEmitter pro systém pub-sub
   - **Inicializuje** pole pro uložení všech herních objektů

   4. **Inicializujte hru**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **Nastavte herní smyčku**

   Refaktorujte funkci `window.onload`, abyste inicializovali hru a nastavili herní smyčku na dobrý interval. Také přidáte laserový paprsek:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **Pochopení nastavení hry:**
   - **Čeká**, až se stránka úplně načte, než začne
   - **Z
- **Vytváří** mřížku nepřátel pomocí vnořených smyček  
- **Přiřazuje** obrázek nepřítele každému objektu nepřítele  
- **Přidává** každého nepřítele do globálního pole herních objektů  

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
  
**Co dělá vytvoření hrdiny:**  
- **Umístí** hrdinu na spodní střed obrazovky  
- **Přiřazuje** obrázek hrdiny objektu hrdiny  
- **Přidává** hrdinu do pole herních objektů pro vykreslení  

a nakonec přidejte funkci `drawGameObjects()` pro zahájení vykreslování:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Porozumění funkci vykreslování:**  
- **Prochází** všechny herní objekty v poli  
- **Volá** metodu `draw()` na každém objektu  
- **Předává** kontext plátna, aby se objekty mohly samy vykreslit  

Vaši nepřátelé by měli začít postupovat směrem k vaší vesmírné lodi hrdiny!  
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
  
a nakonec přidejte funkci `drawGameObjects()` pro zahájení vykreslování:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Vaši nepřátelé by měli začít postupovat směrem k vaší vesmírné lodi hrdiny!  

---

## Výzva GitHub Copilot Agent 🚀  

Zde je výzva, která zlepší detaily vaší hry: přidání hranic a plynulého ovládání. V současnosti může váš hrdina opustit obrazovku a pohyb může působit trhaně.  

**Vaše mise:** Udělejte pohyb vaší vesmírné lodi realističtější implementací hranic obrazovky a plynulého ovládání. Je to podobné tomu, jak systémy řízení letu NASA zabraňují kosmickým lodím překročit bezpečné provozní parametry.  

**Co vytvořit:** Vytvořte systém, který udrží vaši vesmírnou loď hrdiny na obrazovce, a zajistěte, aby ovládání bylo plynulé. Když hráči podrží šipku, loď by měla klouzat plynule, místo aby se pohybovala po jednotlivých krocích. Zvažte přidání vizuální zpětné vazby, když loď dosáhne hranic obrazovky – například jemný efekt, který naznačí okraj herní oblasti.  

Více o [agent módu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.  

## 🚀 Výzva  

Organizace kódu se stává stále důležitější, jak projekty rostou. Možná jste si všimli, že váš soubor je přeplněný funkcemi, proměnnými a třídami, které jsou všechny smíchané dohromady. To mi připomíná, jak inženýři organizující kód pro misi Apollo museli vytvořit jasné, udržovatelné systémy, na kterých mohly pracovat různé týmy současně.  

**Vaše mise:**  
Přemýšlejte jako softwarový architekt. Jak byste organizovali svůj kód tak, aby za šest měsíců vy (nebo váš kolega) mohli snadno pochopit, co se děje? I když vše zůstane zatím v jednom souboru, můžete vytvořit lepší organizaci:  

- **Skupinování souvisejících funkcí** dohromady s jasnými komentářovými záhlavími  
- **Oddělení odpovědností** - udržujte herní logiku oddělenou od vykreslování  
- **Používání konzistentních názvů** pro proměnné a funkce  
- **Vytváření modulů** nebo jmenných prostorů pro organizaci různých aspektů vaší hry  
- **Přidávání dokumentace**, která vysvětluje účel každé hlavní sekce  

**Otázky k zamyšlení:**  
- Které části vašeho kódu jsou nejobtížnější na pochopení, když se k nim vrátíte?  
- Jak byste mohli organizovat svůj kód, aby bylo snazší pro někoho jiného přispět?  
- Co by se stalo, kdybyste chtěli přidat nové funkce, jako jsou power-upy nebo různé typy nepřátel?  

## Kvíz po přednášce  

[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/quiz/34)  

## Recenze a samostudium  

Vše jsme budovali od základů, což je skvělé pro učení, ale tady je malý tip – existují úžasné JavaScriptové frameworky, které mohou zvládnout spoustu práce za vás. Jakmile se budete cítit pohodlně se základy, které jsme pokryli, stojí za to [prozkoumat, co je k dispozici](https://github.com/collections/javascript-game-engines).  

Představte si frameworky jako dobře vybavenou sadu nástrojů místo toho, abyste každý nástroj vyráběli ručně. Mohou vyřešit mnoho těch organizačních výzev, o kterých jsme mluvili, a navíc nabídnout funkce, které by trvalo týdny vytvořit sami.  

**Věci, které stojí za prozkoumání:**  
- Jak herní enginy organizují kód – budete ohromeni chytrými vzory, které používají  
- Triky pro výkon, díky kterým běží hry na plátně hladce jako máslo  
- Moderní funkce JavaScriptu, které mohou váš kód učinit čistším a lépe udržovatelným  
- Různé přístupy k řízení herních objektů a jejich vztahů  

## Úkol  

[Okomentujte svůj kód](assignment.md)  

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.