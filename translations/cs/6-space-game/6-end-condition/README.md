<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-24T21:10:23+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 6: Konec a restart

Každá skvělá hra potřebuje jasné podmínky pro ukončení a hladký mechanismus restartu. Vytvořili jste působivou vesmírnou hru s pohybem, bojem a bodováním – nyní je čas přidat poslední prvky, které ji učiní kompletní.

Vaše hra aktuálně běží nekonečně, podobně jako sondy Voyager, které NASA vypustila v roce 1977 – stále cestují vesmírem i po několika desetiletích. Zatímco pro vesmírný průzkum je to v pořádku, hry potřebují definované konce, aby poskytly uspokojivý zážitek.

Dnes implementujeme správné podmínky pro výhru/prohru a systém restartu. Na konci této lekce budete mít vyleštěnou hru, kterou hráči mohou dokončit a znovu hrát, stejně jako klasické arkádové hry, které definovaly tento žánr.

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/39)

## Pochopení podmínek ukončení hry

Kdy by měla vaše hra skončit? Tato základní otázka formovala design her již od počátků arkádové éry. Pac-Man končí, když vás chytí duchové nebo když vyčistíte všechny tečky, zatímco Space Invaders končí, když mimozemšťané dosáhnou dna nebo když je všechny zničíte.

Jako tvůrce hry definujete podmínky vítězství a porážky. Pro naši vesmírnou hru zde jsou osvědčené přístupy, které vytvářejí poutavou hratelnost:

- **Zničení `N` nepřátelských lodí**: Je běžné, že pokud rozdělíte hru na různé úrovně, musíte zničit `N` nepřátelských lodí, abyste úroveň dokončili.
- **Vaše loď byla zničena**: Existují hry, kde prohrajete, pokud je vaše loď zničena. Dalším běžným přístupem je koncept životů. Pokaždé, když je vaše loď zničena, odečte se jeden život. Jakmile ztratíte všechny životy, hra končí.
- **Nasbírání `N` bodů**: Další běžnou podmínkou ukončení je nasbírání bodů. Jak získáte body, je na vás, ale je běžné přiřadit body různým aktivitám, jako je zničení nepřátelské lodi nebo sbírání předmětů, které se objeví po jejich zničení.
- **Dokončení úrovně**: To může zahrnovat několik podmínek, jako je zničení `X` nepřátelských lodí, nasbírání `Y` bodů nebo třeba získání konkrétního předmětu.

## Implementace funkce restartu hry

Dobré hry podporují opakované hraní prostřednictvím hladkých mechanismů restartu. Když hráči dokončí hru (nebo prohrají), často chtějí okamžitě zkusit znovu – ať už kvůli překonání skóre nebo zlepšení výkonu.

Tetris je toho dokonalým příkladem: když vaše bloky dosáhnou vrcholu, můžete okamžitě začít novou hru bez složité navigace v menu. Vytvoříme podobný restartovací systém, který čistě resetuje stav hry a rychle vrátí hráče zpět do akce.

✅ **Zamyslete se**: Přemýšlejte o hrách, které jste hráli. Za jakých podmínek končí a jak vás vybízejí k restartu? Co dělá zážitek z restartu hladkým oproti frustrujícímu?

## Co vytvoříte

Implementujete poslední funkce, které promění váš projekt v kompletní herní zážitek. Tyto prvky odlišují vyleštěné hry od základních prototypů.

**Dnes přidáme:**

1. **Podmínka vítězství**: Zničte všechny nepřátele a užijte si zaslouženou oslavu!
2. **Podmínka porážky**: Ztratíte všechny životy a na obrazovce se objeví porážka.
3. **Mechanismus restartu**: Stiskněte Enter a okamžitě se vrhněte zpět do hry – jedna hra nikdy nestačí.
4. **Správa stavu**: Čistý start pokaždé – žádní zbylí nepřátelé nebo podivné chyby z předchozí hry.

## Začínáme

Připravte si vývojové prostředí. Měli byste mít všechny soubory vesmírné hry z předchozích lekcí připravené.

**Váš projekt by měl vypadat nějak takto:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Spusťte vývojový server:**

```bash
cd your-work
npm start
```

**Tento příkaz:**
- Spustí lokální server na `http://localhost:5000`
- Správně obslouží vaše soubory
- Automaticky se aktualizuje při provedení změn

Otevřete `http://localhost:5000` ve svém prohlížeči a ověřte, že vaše hra běží. Měli byste být schopni se pohybovat, střílet a interagovat s nepřáteli. Jakmile to potvrdíte, můžeme pokračovat s implementací.

> 💡 **Tip**: Abyste se vyhnuli varováním ve Visual Studio Code, deklarujte `gameLoopId` na začátku souboru jako `let gameLoopId;` místo deklarace uvnitř funkce `window.onload`. To odpovídá moderním praktikám deklarace proměnných v JavaScriptu.

## Kroky implementace

### Krok 1: Vytvořte funkce pro sledování podmínek ukončení

Potřebujeme funkce, které budou sledovat, kdy by hra měla skončit. Podobně jako senzory na Mezinárodní vesmírné stanici, které neustále monitorují kritické systémy, tyto funkce budou nepřetržitě kontrolovat stav hry.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Co se děje pod povrchem:**
- **Kontroluje**, zda náš hrdina přišel o všechny životy (au!)
- **Počítá**, kolik nepřátel je stále naživu
- **Vrací** `true`, když je bitevní pole čisté od nepřátel
- **Používá** jednoduchou logiku true/false pro přehlednost
- **Filtruje** všechny herní objekty, aby našel přeživší

### Krok 2: Aktualizujte obslužné funkce událostí pro podmínky ukončení

Nyní připojíme tyto kontroly podmínek k systému událostí hry. Pokaždé, když dojde ke kolizi, hra vyhodnotí, zda to spouští podmínku ukončení. To vytváří okamžitou zpětnou vazbu pro kritické herní události.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Co se zde děje:**
- **Laser zasáhne nepřítele**: Oba zmizí, získáte body a zkontrolujeme, zda jste vyhráli
- **Nepřítel zasáhne vás**: Ztratíte život a zkontrolujeme, zda jste stále naživu
- **Chytré pořadí**: Nejprve kontrolujeme porážku (nikdo nechce vyhrát a prohrát zároveň!)
- **Okamžité reakce**: Jakmile se stane něco důležitého, hra o tom ví

### Krok 3: Přidejte nové konstanty zpráv

Budete muset přidat nové typy zpráv do objektu `Messages`. Tyto konstanty pomáhají udržovat konzistenci a předcházet překlepům v systému událostí.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**V uvedeném jsme:**
- **Přidali** konstanty pro události ukončení hry, abychom udrželi konzistenci
- **Použili** popisné názvy, které jasně indikují účel události
- **Dodrželi** stávající konvenci pojmenování typů zpráv

### Krok 4: Implementujte ovládání restartu

Nyní přidáte ovládání klávesnice, které hráčům umožní restartovat hru. Klávesa Enter je přirozenou volbou, protože je běžně spojována s potvrzováním akcí a zahajováním nových her.

**Přidejte detekci klávesy Enter do stávajícího posluchače událostí stisknutí klávesy:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Přidejte novou konstantu zprávy:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Co potřebujete vědět:**
- **Rozšiřuje** váš stávající systém obsluhy událostí klávesnice
- **Používá** klávesu Enter jako spouštěč restartu pro intuitivní uživatelský zážitek
- **Vysílá** vlastní událost, kterou mohou poslouchat jiné části vaší hry
- **Dodržuje** stejný vzor jako vaše ostatní ovládání klávesnice

### Krok 5: Vytvořte systém zobrazování zpráv

Vaše hra potřebuje jasně komunikovat výsledky hráčům. Vytvoříme systém zpráv, který zobrazuje stavy vítězství a porážky pomocí barevně odlišeného textu, podobně jako terminálové rozhraní raných počítačových systémů, kde zelená znamenala úspěch a červená signalizovala chyby.

**Vytvořte funkci `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Krok za krokem, co se děje:**
- **Nastavuje** velikost a rodinu písma pro jasný, čitelný text
- **Používá** parametr barvy s "červenou" jako výchozí pro varování
- **Centrovaně** zobrazuje text horizontálně i vertikálně na plátně
- **Využívá** moderní výchozí parametry JavaScriptu pro flexibilní možnosti barev
- **Používá** kontext 2D plátna pro přímé vykreslování textu

**Vytvořte funkci `endGame()`:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Co tato funkce dělá:**
- **Zmrazí** vše na místě – žádné další pohybující se lodě nebo lasery
- **Vezme** malou pauzu (200ms), aby se poslední snímek mohl dokreslit
- **Vyčistí** obrazovku a zbarví ji černě pro dramatický efekt
- **Zobrazí** různé zprávy pro vítěze a poražené
- **Barevně odliší** zprávy – zelená pro dobré, červená pro... no, ne tak dobré
- **Řekne** hráčům přesně, jak se vrátit do hry

### Krok 6: Implementujte funkci resetu hry

Systém resetu musí kompletně vyčistit aktuální stav hry a inicializovat novou herní relaci. To zajišťuje, že hráči začnou čistě bez jakýchkoli zbytkových dat z předchozí hry.

**Vytvořte funkci `resetGame()`:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Pojďme pochopit jednotlivé části:**
- **Kontroluje**, zda aktuálně běží herní smyčka, před resetem
- **Vyčistí** stávající herní smyčku, aby zastavila veškerou aktuální herní aktivitu
- **Odstraní** všechny posluchače událostí, aby se zabránilo únikům paměti
- **Znovu inicializuje** stav hry s novými objekty a proměnnými
- **Spustí** novou herní smyčku se všemi základními funkcemi hry
- **Udržuje** stejný interval 100ms pro konzistentní výkon hry

**Přidejte obslužnou funkci události klávesy Enter do vaší funkce `initGame()`:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Přidejte metodu `clear()` do vaší třídy EventEmitter:**

```javascript
clear() {
  this.listeners = {};
}
```

**Klíčové body k zapamatování:**
- **Spojuje** stisk klávesy Enter s funkcí resetu hry
- **Registruje** tento posluchač událostí během inicializace hry
- **Poskytuje** čistý způsob odstranění všech posluchačů událostí při resetu
- **Zabraňuje** únikům paměti vymazáním obslužných funkcí mezi hrami
- **Resetuje** objekt posluchačů na prázdný stav pro novou inicializaci

## Gratulujeme! 🎉

👽 💥 🚀 Úspěšně jste vytvořili kompletní hru od základů. Stejně jako programátoři, kteří vytvořili první videohry v 70. letech, jste proměnili řádky kódu v interaktivní zážitek s propracovanou herní mechanikou a zpětnou vazbou pro uživatele. 🚀 💥 👽

**Dosáhli jste:**
- **Implementovali** kompletní podmínky výhry a prohry s uživatelskou zpětnou vazbou
- **Vytvořili** plynulý systém restartu pro nepřetržitou hratelnost
- **Navrhli** jasnou vizuální komunikaci pro herní stavy
- **Řídili** složité přechody stavu hry a její vyčištění
- **Sestavili** všechny komponenty do soudržné, hratelné hry

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vylepšete vesmírnou hru implementací systému postupování úrovní s rostoucí obtížností a bonusovými funkcemi.

**Zadání:** Vytvořte systém více úrovní vesmírné hry, kde každá úroveň má více nepřátelských lodí s vyšší rychlostí a zdravím. Přidejte násobič skóre, který se zvyšuje s každou úrovní, a implementujte vylepšení (jako rychlou střelbu nebo štít), která se náhodně objeví, když jsou nepřátelé zničeni. Zahrňte bonus za dokončení úrovně a zobrazte aktuální úroveň na obrazovce vedle stávajícího skóre a životů.

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## 🚀 Volitelná výzva k vylepšení

**Přidejte zvuk do své hry**: Vylepšete herní zážitek implementací zvukových efektů! Zvažte přidání zvuku pro:

- **Výstřely laseru**, když hráč střílí
- **Zničení nepřítele**, když jsou lodě zasaženy
- **Poškození hrdiny**, když hráč utrpí zásah
- **Hudbu vítězství**, když je hra vyhrána
- **Zvuk porážky**, když je hra prohrána

**Příklad implementace zvuku:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Co potřebujete vědět:**
- **Vytváří** objekty Audio pro různé zvukové efekty
- **Resetuje** `currentTime`, aby umožnil rychlé přehrávání zvukových efektů
- **Řeší** zásady automatického přehrávání prohlížeče spuštěním zvuků z uživatelských interakcí
- **Spravuje** hlasitost a načasování zvuků pro lepší herní zážitek

> 💡 **Studijní zdroj**: Prozkoumejte tento [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), abyste se dozvěděli více o implementaci zvuku v JavaScriptových hrách.

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/40)

## Přehled & Samostudium

Vaším úkolem je vytvořit nový vzorový projekt hry, takže prozkoumejte některé zajímavé hry, abyste zjistili, jaký typ hry byste mohli vytvořit.

## Úkol

[Vytvořte vzorovou hru](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.