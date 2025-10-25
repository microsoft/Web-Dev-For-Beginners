<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-24T21:45:57+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 3: Pridanie pohybu

Premýšľajte o svojich obľúbených hrách – to, čo ich robí pútavými, nie sú len pekné grafiky, ale aj spôsob, akým sa všetko pohybuje a reaguje na vaše akcie. Momentálne je vaša vesmírna hra ako krásny obraz, ale chystáme sa pridať pohyb, ktorý ju oživí.

Keď inžinieri NASA programovali navigačný počítač pre misie Apollo, čelili podobnej výzve: ako prinútiť kozmickú loď reagovať na vstupy pilota a zároveň automaticky udržiavať korekcie kurzu? Princípy, ktoré sa dnes naučíme, odrážajú tie isté koncepty – riadenie pohybu ovládaného hráčom spolu s automatickým správaním systému.

V tejto lekcii sa naučíte, ako prinútiť vesmírne lode kĺzať po obrazovke, reagovať na príkazy hráča a vytvárať plynulé pohybové vzory. Všetko rozdelíme na zvládnuteľné koncepty, ktoré na seba prirodzene nadväzujú.

Na konci budú hráči lietať so svojou hrdinskou loďou po obrazovke, zatiaľ čo nepriateľské lode budú hliadkovať nad nimi. Dôležitejšie však je, že pochopíte základné princípy, ktoré poháňajú systémy pohybu v hrách.

## Kvíz pred prednáškou

[Prednáškový kvíz](https://ff-quizzes.netlify.app/web/quiz/33)

## Pochopenie pohybu v hrách

Hry ožívajú, keď sa veci začnú pohybovať, a existujú v zásade dva spôsoby, ako sa to deje:

- **Pohyb ovládaný hráčom**: Keď stlačíte klávesu alebo kliknete myšou, niečo sa pohne. Toto je priamy spoj medzi vami a herným svetom.
- **Automatický pohyb**: Keď hra sama rozhodne o pohybe vecí – napríklad nepriateľské lode, ktoré musia hliadkovať po obrazovke, či už niečo robíte alebo nie.

Pohyb objektov na obrazovke počítača je jednoduchší, než si myslíte. Pamätáte si na súradnice x a y z hodín matematiky? Presne s tým tu pracujeme. Keď Galileo sledoval Jupiterove mesiace v roku 1610, v podstate robil to isté – zaznamenával polohy v čase, aby pochopil vzory pohybu.

Pohyb vecí na obrazovke je ako vytváranie animácie v zošite – musíte dodržiavať tieto tri jednoduché kroky:

1. **Aktualizovať polohu** – Zmeniť, kde by sa mal objekt nachádzať (možno ho posunúť o 5 pixelov doprava)
2. **Vymazať starý rám** – Vyčistiť obrazovku, aby ste nevideli duchovné stopy všade
3. **Nakresliť nový rám** – Umiestniť objekt na jeho nové miesto

Robte to dostatočne rýchlo a bum! Máte plynulý pohyb, ktorý sa hráčom zdá prirodzený.

Tu je ukážka, ako to môže vyzerať v kóde:

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

**Čo tento kód robí:**
- **Aktualizuje** x-súradnicu hrdinu o 5 pixelov, aby sa pohyboval horizontálne
- **Vymaže** celú oblasť plátna, aby odstránil predchádzajúci rám
- **Vyplní** plátno čiernou farbou pozadia
- **Znovu nakreslí** obrázok hrdinu na jeho novú pozíciu

✅ Dokážete si predstaviť dôvod, prečo by opakované prekresľovanie vášho hrdinu mnohokrát za sekundu mohlo spôsobiť výkonové náklady? Prečítajte si o [alternatívach k tomuto vzoru](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Spracovanie udalostí klávesnice

Tu prepojíme vstupy hráča s hernou akciou. Keď niekto stlačí medzerník na vystrelenie lasera alebo šípku na vyhnutie sa asteroidu, vaša hra musí tento vstup detekovať a naň reagovať.

Udalosti klávesnice sa dejú na úrovni okna, čo znamená, že celé okno prehliadača počúva tieto stlačenia kláves. Kliknutia myšou, na druhej strane, môžu byť viazané na konkrétne prvky (napríklad kliknutie na tlačidlo). Pre našu vesmírnu hru sa zameriame na ovládanie klávesnice, pretože to dáva hráčom ten klasický arkádový pocit.

Toto mi pripomína, ako telegrafisti v 19. storočí museli prekladať vstupy morzeovky do zmysluplných správ – robíme niečo podobné, prekladáme stlačenia kláves do herných príkazov.

Na spracovanie udalosti musíte použiť metódu `addEventListener()` okna a poskytnúť jej dva vstupné parametre. Prvým parametrom je názov udalosti, napríklad `keyup`. Druhým parametrom je funkcia, ktorá by sa mala vykonať v dôsledku udalosti.

Tu je príklad:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Rozdelenie toho, čo sa tu deje:**
- **Počúva** udalosti klávesnice na celom okne
- **Zachytáva** objekt udalosti, ktorý obsahuje informácie o tom, ktorá klávesa bola stlačená
- **Kontroluje**, či stlačená klávesa zodpovedá konkrétnej klávese (v tomto prípade šípke hore)
- **Vykonáva** kód, keď je podmienka splnená

Pre udalosti klávesnice existujú dve vlastnosti na objekte udalosti, ktoré môžete použiť na zistenie, ktorá klávesa bola stlačená:

- `key` - toto je reťazcová reprezentácia stlačenej klávesy, napríklad `'ArrowUp'`
- `keyCode` - toto je číselná reprezentácia, napríklad `37`, zodpovedá `ArrowLeft`

✅ Manipulácia s udalosťami klávesnice je užitočná aj mimo vývoja hier. Aké ďalšie využitie tejto techniky si dokážete predstaviť?

### Špeciálne klávesy: upozornenie!

Niektoré klávesy majú zabudované správanie prehliadača, ktoré môže narušiť vašu hru. Šípky posúvajú stránku a medzerník posúva stránku nadol – správanie, ktoré nechcete, keď sa niekto snaží pilotovať svoju vesmírnu loď.

Môžeme zabrániť týmto predvoleným správaním a nechať našu hru spracovať vstup namiesto toho. Je to podobné tomu, ako museli skorí počítačoví programátori prepisovať systémové prerušenia, aby vytvorili vlastné správanie – my to robíme na úrovni prehliadača. Tu je postup:

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

**Pochopenie tohto kódu na zabránenie:**
- **Kontroluje** konkrétne kódy kláves, ktoré by mohli spôsobiť nežiaduce správanie prehliadača
- **Zabraňuje** predvolenému správaniu prehliadača pre šípky a medzerník
- **Umožňuje** ostatným klávesám fungovať normálne
- **Používa** `e.preventDefault()`, aby zastavil zabudované správanie prehliadača

## Pohyb vyvolaný hrou

Teraz sa porozprávajme o objektoch, ktoré sa pohybujú bez vstupu hráča. Premýšľajte o nepriateľských lodiach plaviacich sa po obrazovke, guľkách letiacich v priamych líniách alebo oblakoch plávajúcich na pozadí. Tento autonómny pohyb robí váš herný svet živým, aj keď sa nikto nedotýka ovládacích prvkov.

Používame zabudované časovače JavaScriptu na aktualizáciu polôh v pravidelných intervaloch. Tento koncept je podobný tomu, ako fungujú kyvadlové hodiny – pravidelný mechanizmus, ktorý spúšťa konzistentné, časované akcie. Tu je, ako to môže byť jednoduché:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Čo tento kód pohybu robí:**
- **Vytvára** časovač, ktorý beží každých 100 milisekúnd
- **Aktualizuje** y-súradnicu nepriateľa o 10 pixelov pri každom spustení
- **Ukladá** ID intervalu, aby sme ho mohli neskôr zastaviť, ak to bude potrebné
- **Pohybuje** nepriateľa automaticky smerom nadol na obrazovke

## Herná slučka

Tu je koncept, ktorý všetko spája – herná slučka. Ak by vaša hra bola filmom, herná slučka by bola filmovým projektorom, ktorý premieta rám za rámom tak rýchlo, že všetko sa zdá byť plynulé.

Každá hra má jednu z týchto slučiek bežiacu na pozadí. Je to funkcia, ktorá aktualizuje všetky herné objekty, prekresľuje obrazovku a tento proces neustále opakuje. Sleduje vášho hrdinu, všetkých nepriateľov, akékoľvek lasery lietajúce okolo – celý stav hry.

Tento koncept mi pripomína, ako skorí filmoví animátori ako Walt Disney museli pre kreslenie postáv rám po ráme vytvárať ilúziu pohybu. Robíme to isté, len s kódom namiesto ceruziek.

Tu je, ako herná slučka môže typicky vyzerať, vyjadrená v kóde:

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

**Pochopenie štruktúry hernej slučky:**
- **Vymaže** celé plátno, aby odstránilo predchádzajúci rám
- **Vyplní** pozadie pevnou farbou
- **Nakreslí** všetky herné objekty na ich aktuálnych pozíciách
- **Opakuje** tento proces každých 200 milisekúnd, aby vytvorilo plynulú animáciu
- **Riadi** snímkovú frekvenciu kontrolou časovania intervalu

## Pokračovanie vesmírnej hry

Teraz pridáme pohyb do statickej scény, ktorú ste predtým vytvorili. Transformujeme ju zo snímky na interaktívny zážitok. Budeme postupovať krok za krokom, aby sme zabezpečili, že každá časť nadväzuje na predchádzajúcu.

Získajte kód z miesta, kde sme skončili v predchádzajúcej lekcii (alebo začnite s kódom v priečinku [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work), ak potrebujete nový začiatok).

**Tu je, čo dnes budujeme:**
- **Ovládanie hrdinu**: Šípky budú pilotovať vašu vesmírnu loď po obrazovke
- **Pohyb nepriateľov**: Tie mimozemské lode začnú svoj postup

Začnime implementovať tieto funkcie.

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

Svoj projekt spustíte v priečinku `your-work` zadaním:

```bash
cd your-work
npm start
```

**Čo tento príkaz robí:**
- **Naviguje** do vášho projektového adresára
- **Spustí** HTTP server na adrese `http://localhost:5000`
- **Poskytuje** vaše herné súbory, aby ste ich mohli testovať v prehliadači

Vyššie uvedené spustí HTTP server na adrese `http://localhost:5000`. Otvorte prehliadač a zadajte túto adresu, práve teraz by mal zobraziť hrdinu a všetkých nepriateľov; nič sa zatiaľ nehýbe!

### Pridajte kód

1. **Pridajte dedikované objekty** pre `hero`, `enemy` a `game object`, mali by mať vlastnosti `x` a `y`. (Pamätajte na časť o [Dedičstve alebo kompozícii](../README.md)).

   *TIP* `game object` by mal byť ten, ktorý má `x` a `y` a schopnosť nakresliť sa na plátno.

   > **Tip**: Začnite pridaním novej triedy `GameObject` s jej konštruktorom definovaným nasledovne a potom ju nakreslite na plátno:

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

    **Pochopenie tejto základnej triedy:**
    - **Definuje** spoločné vlastnosti, ktoré zdieľajú všetky herné objekty (poloha, veľkosť, obrázok)
    - **Zahŕňa** príznak `dead`, ktorý sleduje, či by mal byť objekt odstránený
    - **Poskytuje** metódu `draw()`, ktorá vykresľuje objekt na plátno
    - **Nastavuje** predvolené hodnoty pre všetky vlastnosti, ktoré môžu podtriedy prepísať

    Teraz rozšírte tento `GameObject`, aby ste vytvorili `Hero` a `Enemy`:
    
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

    **Kľúčové koncepty v týchto triedach:**
    - **Dedičí** z `GameObject` pomocou kľúčového slova `extends`
    - **Volá** konštruktor rodiča pomocou `super(x, y)`
    - **Nastavuje** konkrétne rozmery a vlastnosti pre každý typ objektu
    - **Implementuje** automatický pohyb pre nepriateľov pomocou `setInterval()`

2. **Pridajte spracovanie udalostí klávesnice** na ovládanie pohybu hrdinu hore/dole, vľavo/vpravo

   *PAMÄTAJTE* je to kartézsky systém, ľavý horný roh je `0,0`. Tiež nezabudnite pridať kód na zastavenie *predvoleného správania*.

   > **Tip**: Vytvorte svoju funkciu `onKeyDown` a pripojte ju k oknu:

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
    
   **Čo tento spracovateľ udalostí robí:**
   - **Počúva** udalosti stlačenia kláves na celom okne
   - **Zaznamenáva** kód klávesy, aby vám pomohol diagnostikovať, ktoré klávesy sú stlačené
   - **Zabraňuje** predvolenému správaniu prehliadača pre šípky a medzerník
   - **Umožňuje** ostatným klávesám fungovať normálne
   
   Skontrolujte konzolu prehliadača v tomto bode a sledujte zaznamenané stlačenia kláves.

3. **Implementujte** [Pub sub pattern](../README.md), ktorý udrží váš kód čistý, keď budete pokračovať v ďalších častiach.

   Vzor Publish-Subscribe pomáha organizovať váš kód oddelením detekcie udalostí od ich spracovania. To robí váš kód modulárnejším a ľahšie udržiavateľným.

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

   **Čo tento systém udalostí robí:**
   - **Detekuje** vstupy klávesnice a konvertuje ich na vlastné herné udalosti
   - **Oddelí** detekciu vstupov od hernej logiky
   - **Umožňuje** ľahko zmeniť ovládanie neskôr bez ovplyvnenia herného kódu
   - **Dovoľuje** viacerým systémom reagovať na ten istý vstup

   2. **Vytvorte triedu EventEmitter** na publikovanie a odoberanie správ:

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
       
   3. **Pridajte konštanty** a nastavte EventEmitter:

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

   **Pochopenie nastavenia:**
   - **Definuje** konštanty správ, aby sa predišlo preklepom a uľahčilo sa refaktoring
   - **Deklaruje** premenné pre obrázky, kontext plátna a stav hry
   - **Vytvára** globálny EventEmitter pre systém pub-sub
   - **Inicializuje**
- **Vytvára** mriežku nepriateľov pomocou vnorených cyklov  
- **Priraďuje** obrázok nepriateľa ku každému objektu nepriateľa  
- **Pridáva** každého nepriateľa do globálneho poľa herných objektov  

a pridajte funkciu `createHero()`, ktorá vykoná podobný proces pre hrdinu.

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
  
**Čo robí vytvorenie hrdinu:**  
- **Umiestni** hrdinu na spodný stred obrazovky  
- **Priraďuje** obrázok hrdinu k objektu hrdinu  
- **Pridáva** hrdinu do poľa herných objektov na vykreslenie  

a nakoniec pridajte funkciu `drawGameObjects()`, aby ste mohli začať vykresľovať:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Pochopenie funkcie vykresľovania:**  
- **Iteruje** cez všetky herné objekty v poli  
- **Volá** metódu `draw()` na každom objekte  
- **Prenáša** kontext plátna, aby sa objekty mohli samy vykresliť  

Vaši nepriatelia by mali začať postupovať smerom k vašej vesmírnej lodi hrdinu!  
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
  
a nakoniec pridajte funkciu `drawGameObjects()`, aby ste mohli začať vykresľovať:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Vaši nepriatelia by mali začať postupovať smerom k vašej vesmírnej lodi hrdinu!

---

## Výzva GitHub Copilot Agent 🚀  

Tu je výzva, ktorá zlepší vzhľad vašej hry: pridanie hraníc a plynulého ovládania. Momentálne môže váš hrdina vyletieť mimo obrazovku a pohyb môže pôsobiť trhane.

**Vaša misia:** Urobte pohyb vašej vesmírnej lode realistickejším implementáciou hraníc obrazovky a plynulého pohybu. Je to podobné ako systémy riadenia letu NASA, ktoré zabraňujú kozmickým lodiam prekročiť bezpečné prevádzkové parametre.

**Čo treba vytvoriť:** Vytvorte systém, ktorý udrží vašu vesmírnu loď hrdinu na obrazovke a zabezpečí plynulé ovládanie. Keď hráči podržia šípku, loď by sa mala plynulo pohybovať namiesto pohybu v diskrétnych krokoch. Zvážte pridanie vizuálnej spätnej väzby, keď loď dosiahne hranice obrazovky – možno jemný efekt na označenie okraja hernej oblasti.

Viac sa dozviete na [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode).

## 🚀 Výzva  

Organizácia kódu sa stáva čoraz dôležitejšou, keď projekty rastú. Možno ste si všimli, že váš súbor je preplnený funkciami, premennými a triedami všetko zmiešané dohromady. To mi pripomína, ako inžinieri organizujúci kód misie Apollo museli vytvoriť jasné, udržiavateľné systémy, na ktorých mohli súčasne pracovať viaceré tímy.

**Vaša misia:**  
Premýšľajte ako softvérový architekt. Ako by ste zorganizovali svoj kód tak, aby ste o šesť mesiacov (alebo váš kolega) mohli pochopiť, čo sa deje? Aj keď všetko zostane zatiaľ v jednom súbore, môžete vytvoriť lepšiu organizáciu:

- **Zoskupenie súvisiacich funkcií** s jasnými komentármi  
- **Oddelenie zodpovedností** - oddelenie hernej logiky od vykresľovania  
- **Používanie konzistentných názvov** pre premenné a funkcie  
- **Vytváranie modulov** alebo menných priestorov na organizáciu rôznych aspektov vašej hry  
- **Pridanie dokumentácie**, ktorá vysvetľuje účel každej hlavnej časti  

**Otázky na zamyslenie:**  
- Ktoré časti vášho kódu sú najťažšie pochopiteľné, keď sa k nim vrátite?  
- Ako by ste mohli zorganizovať svoj kód, aby bolo jednoduchšie, aby niekto iný prispel?  
- Čo by sa stalo, keby ste chceli pridať nové funkcie, ako sú power-upy alebo rôzne typy nepriateľov?

## Kvíz po prednáške  

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/34)

## Prehľad a samoštúdium  

Všetko sme budovali od základov, čo je skvelé na učenie, ale tu je malé tajomstvo – existujú úžasné JavaScriptové frameworky, ktoré môžu zvládnuť veľkú časť práce za vás. Keď sa budete cítiť pohodlne so základmi, ktoré sme pokryli, stojí za to [preskúmať, čo je k dispozícii](https://github.com/collections/javascript-game-engines).

Predstavte si frameworky ako dobre vybavenú sadu nástrojov namiesto toho, aby ste si každý nástroj vyrábali sami. Môžu vyriešiť mnohé z tých výziev organizácie kódu, o ktorých sme hovorili, a navyše ponúkajú funkcie, ktorých vytvorenie by vám trvalo týždne.

**Veci, ktoré stoja za preskúmanie:**  
- Ako herné enginy organizujú kód – budete ohromení šikovnými vzormi, ktoré používajú  
- Triky na zvýšenie výkonu, aby hry na plátne bežali plynulo  
- Moderné funkcie JavaScriptu, ktoré môžu váš kód urobiť čistejším a ľahšie udržiavateľným  
- Rôzne prístupy k správe herných objektov a ich vzťahov  

## Zadanie  

[Okomentujte svoj kód](assignment.md)  

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.