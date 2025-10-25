<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-24T21:47:25+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 6: Koniec a reštart

Každá skvelá hra potrebuje jasné podmienky ukončenia a plynulý mechanizmus reštartu. Vytvorili ste pôsobivú vesmírnu hru s pohybom, bojom a skórovaním - teraz je čas pridať posledné kúsky, ktoré ju urobia kompletnou.

Vaša hra momentálne beží nekonečne, podobne ako sondy Voyager, ktoré NASA vypustila v roku 1977 - stále cestujú vesmírom aj po desaťročiach. Zatiaľ čo to je v poriadku pre vesmírny prieskum, hry potrebujú definované konce, aby poskytli uspokojivý zážitok.

Dnes implementujeme správne podmienky víťazstva/prehry a systém reštartu. Na konci tejto lekcie budete mať vyleštenú hru, ktorú hráči môžu dokončiť a znova hrať, podobne ako klasické arkádové hry, ktoré definovali tento žáner.

## Kvíz pred prednáškou

[Prednáškový kvíz](https://ff-quizzes.netlify.app/web/quiz/39)

## Pochopenie podmienok ukončenia hry

Kedy by mala vaša hra skončiť? Táto základná otázka formovala dizajn hier už od éry prvých arkádových hier. Pac-Man končí, keď vás chytia duchovia alebo vyčistíte všetky bodky, zatiaľ čo Space Invaders končí, keď mimozemšťania dosiahnu spodok alebo ich všetkých zničíte.

Ako tvorca hry definujete podmienky víťazstva a prehry. Pre našu vesmírnu hru tu sú osvedčené prístupy, ktoré vytvárajú pútavú hrateľnosť:

- **Zničenie `N` nepriateľských lodí**: Je bežné, že ak rozdelíte hru na rôzne úrovne, musíte zničiť `N` nepriateľských lodí, aby ste dokončili úroveň.
- **Vaša loď bola zničená**: Existujú hry, kde prehráte, ak je vaša loď zničená. Ďalším bežným prístupom je koncept životov. Každýkrát, keď je vaša loď zničená, odpočíta sa jeden život. Keď stratíte všetky životy, prehráte hru.
- **Nazbierali ste `N` bodov**: Ďalšou bežnou podmienkou ukončenia je nazbieranie bodov. Ako získate body, je na vás, ale je bežné priradiť body k rôznym aktivitám, ako je ničenie nepriateľskej lode alebo zbieranie predmetov, ktoré sa objavia po ich zničení.
- **Dokončenie úrovne**: To môže zahŕňať niekoľko podmienok, ako napríklad zničenie `X` nepriateľských lodí, nazbieranie `Y` bodov alebo možno získanie konkrétneho predmetu.

## Implementácia funkcie reštartu hry

Dobré hry podporujú opakovateľnosť prostredníctvom plynulých mechanizmov reštartu. Keď hráči dokončia hru (alebo utrpia porážku), často chcú okamžite skúsiť znova - či už na zlepšenie skóre alebo výkonu.

Tetris je toho dokonalým príkladom: keď vaše bloky dosiahnu vrchol, môžete okamžite začať novú hru bez nutnosti prechádzať zložitými menu. Vytvoríme podobný systém reštartu, ktorý čisto resetuje stav hry a rýchlo vráti hráčov späť do akcie.

✅ **Reflexia**: Zamyslite sa nad hrami, ktoré ste hrali. Za akých podmienok končia a ako vás motivujú k reštartu? Čo robí zážitok z reštartu plynulým oproti frustrujúcemu?

## Čo budete vytvárať

Implementujete posledné funkcie, ktoré premenia váš projekt na kompletný herný zážitok. Tieto prvky odlišujú vyleštené hry od základných prototypov.

**Tu je, čo dnes pridáme:**

1. **Podmienka víťazstva**: Zničte všetkých nepriateľov a užite si zaslúženú oslavu!
2. **Podmienka prehry**: Prídete o všetky životy a čelíte porážke na obrazovke.
3. **Mechanizmus reštartu**: Stlačte Enter a okamžite sa vráťte do hry - pretože jedna hra nikdy nestačí.
4. **Správa stavu**: Čistý začiatok pri každom reštarte - žiadni zvyšní nepriatelia ani zvláštne chyby z predchádzajúcej hry.

## Začíname

Pripravme si vaše vývojové prostredie. Mali by ste mať pripravené všetky súbory vašej vesmírnej hry z predchádzajúcich lekcií.

**Váš projekt by mal vyzerať nejako takto:**

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

**Spustite váš vývojový server:**

```bash
cd your-work
npm start
```

**Tento príkaz:**
- Spustí lokálny server na `http://localhost:5000`
- Správne poskytne vaše súbory
- Automaticky obnoví stránku pri vykonaní zmien

Otvorte `http://localhost:5000` vo vašom prehliadači a overte, či vaša hra beží. Mali by ste byť schopní pohybovať sa, strieľať a interagovať s nepriateľmi. Ak je všetko v poriadku, môžeme pokračovať v implementácii.

> 💡 **Tip**: Aby ste sa vyhli varovaniam vo Visual Studio Code, deklarujte `gameLoopId` na začiatku vášho súboru ako `let gameLoopId;` namiesto deklarovania vo funkcii `window.onload`. Toto nasleduje moderné najlepšie praktiky deklarácie premenných v JavaScripte.

## Kroky implementácie

### Krok 1: Vytvorenie funkcií na sledovanie podmienok ukončenia

Potrebujeme funkcie na sledovanie, kedy by mala hra skončiť. Podobne ako senzory na Medzinárodnej vesmírnej stanici, ktoré neustále monitorujú kritické systémy, tieto funkcie budú nepretržite kontrolovať stav hry.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Čo sa deje v zákulisí:**
- **Kontroluje**, či náš hrdina stratil všetky životy (au!)
- **Počíta**, koľko nepriateľov je stále nažive
- **Vracia** `true`, keď je bojisko čisté od nepriateľov
- **Používa** jednoduchú logiku true/false na udržanie prehľadnosti
- **Filtruje** všetky herné objekty, aby našiel preživších

### Krok 2: Aktualizácia obsluhy udalostí pre podmienky ukončenia

Teraz prepojíme tieto kontroly podmienok s udalosťovým systémom hry. Pri každom zrážke hra vyhodnotí, či spúšťa podmienku ukončenia. Tým sa vytvorí okamžitá spätná väzba na kritické herné udalosti.

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

**Čo sa tu deje:**
- **Laser zasiahne nepriateľa**: Obaja zmiznú, získate body a skontrolujeme, či ste vyhrali
- **Nepriateľ zasiahne vás**: Stratíte život a skontrolujeme, či ste stále nažive
- **Inteligentné poradie**: Najprv kontrolujeme porážku (nikto nechce vyhrať a zároveň prehrať!)
- **Okamžité reakcie**: Hneď ako sa stane niečo dôležité, hra o tom vie

### Krok 3: Pridanie nových konštánt správ

Budete musieť pridať nové typy správ do vášho objektu `Messages`. Tieto konštanty pomáhajú udržiavať konzistenciu a predchádzať preklepom vo vašom udalosťovom systéme.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**V uvedenom sme:**
- **Pridali** konštanty pre udalosti ukončenia hry na udržanie konzistencie
- **Použili** popisné názvy, ktoré jasne naznačujú účel udalosti
- **Dodržali** existujúcu konvenciu pomenovania typov správ

### Krok 4: Implementácia ovládania reštartu

Teraz pridáte ovládanie klávesnice, ktoré umožní hráčom reštartovať hru. Kláves Enter je prirodzenou voľbou, pretože sa bežne spája s potvrdením akcií a začiatkom nových hier.

**Pridajte detekciu klávesy Enter do existujúceho poslucháča udalostí keydown:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Pridajte novú konštantu správy:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Čo potrebujete vedieť:**
- **Rozširuje** váš existujúci systém obsluhy udalostí klávesnice
- **Používa** kláves Enter ako spúšťač reštartu pre intuitívny používateľský zážitok
- **Vysiela** vlastnú udalosť, ktorú môžu počúvať iné časti vašej hry
- **Udržuje** rovnaký vzor ako vaše ostatné ovládanie klávesnice

### Krok 5: Vytvorenie systému zobrazovania správ

Vaša hra potrebuje jasne komunikovať výsledky hráčom. Vytvoríme systém správ, ktorý zobrazuje stavy víťazstva a prehry pomocou farebne odlíšeného textu, podobne ako terminálové rozhrania starých počítačových systémov, kde zelená znamenala úspech a červená signalizovala chyby.

**Vytvorte funkciu `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Krok za krokom, čo sa deje:**
- **Nastavuje** veľkosť a typ písma pre jasný, čitateľný text
- **Používa** parameter farby s predvolenou hodnotou "červená" pre varovania
- **Centrovanie** textu horizontálne a vertikálne na plátne
- **Využíva** moderné predvolené parametre JavaScriptu pre flexibilné možnosti farieb
- **Používa** kontext 2D plátna na priame vykreslenie textu

**Vytvorte funkciu `endGame()`:**

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

**Čo táto funkcia robí:**
- **Zmrazí** všetko na mieste - žiadne ďalšie pohyby lodí alebo laserov
- **Urobí** malú pauzu (200 ms), aby sa posledný snímok dokončil
- **Vyčistí** obrazovku a zafarbí ju na čierno pre dramatický efekt
- **Zobrazí** rôzne správy pre víťazov a porazených
- **Farebne odlíši** správy - zelená pre dobré, červená pre... no, nie tak dobré
- **Informuje** hráčov, ako sa môžu vrátiť do hry

### Krok 6: Implementácia funkcie resetovania hry

Systém resetovania musí úplne vyčistiť aktuálny stav hry a inicializovať novú hernú reláciu. To zaručí, že hráči začnú odznova bez akýchkoľvek zvyškových údajov z predchádzajúcej hry.

**Vytvorte funkciu `resetGame()`:**

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

**Pochopme jednotlivé časti:**
- **Kontroluje**, či aktuálne beží herná slučka pred resetovaním
- **Vyčistí** existujúcu hernú slučku, aby zastavila všetku aktuálnu hernú aktivitu
- **Odstráni** všetky poslucháče udalostí, aby sa zabránilo úniku pamäte
- **Reinicializuje** stav hry s novými objektmi a premennými
- **Spustí** novú hernú slučku so všetkými základnými hernými funkciami
- **Udržuje** rovnaký interval 100 ms pre konzistentný výkon hry

**Pridajte obsluhu udalosti klávesy Enter do vašej funkcie `initGame()`:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Pridajte metódu `clear()` do vašej triedy EventEmitter:**

```javascript
clear() {
  this.listeners = {};
}
```

**Kľúčové body na zapamätanie:**
- **Spojí** stlačenie klávesy Enter s funkciou resetovania hry
- **Registruje** tento poslucháč udalostí počas inicializácie hry
- **Poskytuje** čistý spôsob odstránenia všetkých poslucháčov udalostí pri resetovaní
- **Zabraňuje** úniku pamäte vymazaním obsluhy udalostí medzi hrami
- **Resetuje** objekt poslucháčov na prázdny stav pre novú inicializáciu

## Gratulujeme! 🎉

👽 💥 🚀 Úspešne ste vytvorili kompletnú hru od základov. Rovnako ako programátori, ktorí vytvorili prvé videohry v 70. rokoch, ste premenili riadky kódu na interaktívny zážitok s riadnymi hernými mechanizmami a spätnou väzbou pre používateľa. 🚀 💥 👽

**Dosiahli ste:**
- **Implementovali** kompletné podmienky víťazstva a prehry s používateľskou spätnou väzbou
- **Vytvorili** plynulý systém reštartu pre nepretržitú hrateľnosť
- **Navrhli** jasnú vizuálnu komunikáciu pre herné stavy
- **Spravovali** zložité prechody stavov hry a ich vyčistenie
- **Zostavili** všetky komponenty do súdržnej, hrateľnej hry

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vylepšite vesmírnu hru implementáciou systému postupu úrovní so zvyšujúcou sa obtiažnosťou a bonusovými funkciami.

**Výzva:** Vytvorte systém viacúrovňovej vesmírnej hry, kde každá úroveň má viac nepriateľských lodí so zvýšenou rýchlosťou a zdravím. Pridajte násobič skóre, ktorý sa zvyšuje s každou úrovňou, a implementujte vylepšenia (ako rýchle streľby alebo štít), ktoré sa náhodne objavia, keď sú nepriatelia zničení. Zahrňte bonus za dokončenie úrovne a zobrazte aktuálnu úroveň na obrazovke spolu s existujúcim skóre a životmi.

Viac informácií o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) nájdete tu.

## 🚀 Voliteľná výzva na vylepšenie

**Pridajte zvuk do vašej hry**: Vylepšite zážitok z hry implementáciou zvukových efektov! Zvážte pridanie zvuku pre:

- **Výstrely laseru**, keď hráč strieľa
- **Zničenie nepriateľa**, keď sú lode zasiahnuté
- **Poškodenie hrdinu**, keď hráč utrpí zásah
- **Víťaznú hudbu**, keď je hra vyhraná
- **Zvuk porážky**, keď je hra prehraná

**Príklad implementácie zvuku:**

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

**Čo potrebujete vedieť:**
- **Vytvára** objekty Audio pre rôzne zvukové efekty
- **Resetuje** `currentTime`, aby umožnil rýchle prehrávanie zvukových efektov
- **Rieši** pravidlá automatického prehrávania prehliadača spustením zvukov z interakcií používateľa
- **Spravuje** hlasitosť a načasovanie zvukov pre lepší herný zážitok

> 💡 **Zdroj na učenie**: Preskúmajte tento [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), aby ste sa dozvedeli viac o implementácii zvuku v JavaScriptových hrách.

## Kvíz po prednáške

[Po prednáškový kvíz](https://ff-quizzes.netlify.app/web/quiz/40)

## Prehľad a samostatné štúdium

Vašou úlohou je vytvoriť nový vzorový projekt hry, preto preskúmajte niektoré zaujímavé hry, aby ste zistili, aký typ hry by ste mohli vytvoriť.

## Úloha

[Vytvorte vzorovú hru](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, uvedomte si, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.