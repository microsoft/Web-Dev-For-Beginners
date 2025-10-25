<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T21:46:47+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 2: Kreslenie hrdinu a monštier na plátno

API pre `<canvas>` je jednou z najsilnejších funkcií webového vývoja na vytváranie dynamickej, interaktívnej grafiky priamo vo vašom prehliadači. V tejto lekcii premeníme prázdny HTML prvok `<canvas>` na herný svet plný hrdinov a monštier. Predstavte si plátno ako digitálnu umeleckú dosku, kde sa kód stáva vizuálnym.

Staviame na tom, čo ste sa naučili v predchádzajúcej lekcii, a teraz sa ponoríme do vizuálnych aspektov. Naučíte sa, ako načítať a zobrazovať herné sprite, presne umiestňovať prvky a vytvoriť vizuálny základ pre vašu vesmírnu hru. Týmto spôsobom premostíme statické webové stránky a dynamické, interaktívne zážitky.

Na konci tejto lekcie budete mať kompletnú hernú scénu s vašou hrdinskou loďou správne umiestnenou a formáciami nepriateľov pripravenými na boj. Pochopíte, ako moderné hry vykresľujú grafiku v prehliadačoch, a získate zručnosti na vytvorenie vlastných interaktívnych vizuálnych zážitkov. Poďme preskúmať grafiku na plátne a oživiť vašu vesmírnu hru!

## Kvíz pred prednáškou

[Prednáškový kvíz](https://ff-quizzes.netlify.app/web/quiz/31)

## Plátno

Čo presne je tento prvok `<canvas>`? Je to riešenie HTML5 na vytváranie dynamickej grafiky a animácií v webových prehliadačoch. Na rozdiel od bežných obrázkov alebo videí, ktoré sú statické, plátno vám poskytuje kontrolu na úrovni pixelov nad všetkým, čo sa na obrazovke objaví. To ho robí ideálnym pre hry, vizualizácie dát a interaktívne umenie. Predstavte si ho ako programovateľnú kresliacu plochu, kde sa JavaScript stáva vaším štetcom.

Predvolene vyzerá prvok plátna ako prázdny, priehľadný obdĺžnik na vašej stránke. Ale práve tu sa skrýva jeho potenciál! Jeho skutočná sila sa prejaví, keď použijete JavaScript na kreslenie tvarov, načítanie obrázkov, vytváranie animácií a reakcie na interakcie používateľa. Je to podobné ako pri prvých priekopníkoch počítačovej grafiky v Bell Labs v 60. rokoch, ktorí museli programovať každý pixel, aby vytvorili prvé digitálne animácie.

✅ Prečítajte si [viac o API pre plátno](https://developer.mozilla.org/docs/Web/API/Canvas_API) na MDN.

Takto sa zvyčajne deklaruje ako súčasť tela stránky:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Čo tento kód robí:**
- **Nastavuje** atribút `id`, aby ste mohli odkazovať na tento konkrétny prvok plátna v JavaScripte
- **Definuje** šírku v pixeloch na kontrolu horizontálnej veľkosti plátna
- **Určuje** výšku v pixeloch na stanovenie vertikálnych rozmerov plátna

## Kreslenie jednoduchých geometrických tvarov

Teraz, keď viete, čo je prvok plátna, poďme preskúmať, ako na ňom skutočne kresliť! Plátno používa súradnicový systém, ktorý vám môže byť známy z hodín matematiky, ale existuje jeden dôležitý rozdiel špecifický pre počítačovú grafiku.

Plátno používa kartézske súradnice s osou x (horizontálnou) a osou y (vertikálnou) na umiestnenie všetkého, čo kreslíte. Ale tu je kľúčový rozdiel: na rozdiel od súradnicového systému z matematiky začína bod pôvodu `(0,0)` v ľavom hornom rohu, pričom hodnoty x sa zvyšujú, keď sa pohybujete doprava, a hodnoty y sa zvyšujú, keď sa pohybujete nadol. Tento prístup pochádza z raných počítačových displejov, kde elektrónové lúče skenovali zhora nadol, čo robilo ľavý horný roh prirodzeným východiskovým bodom.

![mriežka plátna](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.sk.png)
> Obrázok z [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Na kreslenie na prvok plátna budete postupovať podľa rovnakého trojstupňového procesu, ktorý tvorí základ všetkej grafiky na plátne. Keď to urobíte niekoľkokrát, stane sa to druhou prirodzenosťou:

1. **Získajte referenciu** na váš prvok plátna z DOM (rovnako ako na akýkoľvek iný HTML prvok)
2. **Získajte 2D vykresľovací kontext** – ten poskytuje všetky metódy kreslenia
3. **Začnite kresliť!** Použite vstavané metódy kontextu na vytvorenie vašej grafiky

Takto to vyzerá v kóde:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Rozoberme to krok za krokom:**
- **Získame** náš prvok plátna pomocou jeho ID a uložíme ho do premennej
- **Získame** 2D vykresľovací kontext – to je naša sada nástrojov plná metód kreslenia
- **Povieme** plátnu, že chceme veci vyplniť červenou farbou pomocou vlastnosti `fillStyle`
- **Nakreslíme** obdĺžnik začínajúci v ľavom hornom rohu (0,0), ktorý je široký a vysoký 200 pixelov

✅ API pre plátno sa väčšinou zameriava na 2D tvary, ale môžete tiež kresliť 3D prvky na webovú stránku; na to môžete použiť [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Na plátne môžete kresliť rôzne veci, ako napríklad:

- **Geometrické tvary**, už sme ukázali, ako nakresliť obdĺžnik, ale je toho oveľa viac, čo môžete nakresliť.
- **Text**, môžete nakresliť text s akýmkoľvek fontom a farbou, akú si želáte.
- **Obrázky**, môžete nakresliť obrázok na základe obrazového súboru, ako je napríklad .jpg alebo .png.

✅ Skúste to! Viete, ako nakresliť obdĺžnik, dokážete nakresliť kruh na stránku? Pozrite sa na niektoré zaujímavé kresby na plátne na CodePen. Tu je [obzvlášť pôsobivý príklad](https://codepen.io/dissimulate/pen/KrAwx).

## Načítanie a kreslenie obrazového súboru

Kreslenie základných tvarov je užitočné na začiatok, ale väčšina hier potrebuje skutočné obrázky! Sprite, pozadia a textúry sú to, čo dáva hrám ich vizuálnu príťažlivosť. Načítanie a zobrazovanie obrázkov na plátne funguje inak ako kreslenie geometrických tvarov, ale je to jednoduché, keď pochopíte proces.

Potrebujeme vytvoriť objekt `Image`, načítať náš obrazový súbor (to sa deje asynchrónne, čo znamená "na pozadí") a potom ho nakresliť na plátno, keď je pripravený. Tento prístup zaisťuje, že sa vaše obrázky zobrazia správne bez blokovania aplikácie počas ich načítania.

### Základné načítanie obrázkov

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Čo sa deje v tomto kóde:**
- **Vytvoríme** úplne nový objekt Image na uloženie nášho sprite alebo textúry
- **Povieme** mu, ktorý obrazový súbor má načítať nastavením cesty k zdroju
- **Počúvame** udalosť načítania, aby sme presne vedeli, kedy je obrázok pripravený na použitie

### Lepší spôsob načítania obrázkov

Tu je robustnejší spôsob, ako spracovať načítanie obrázkov, ktorý bežne používajú profesionálni vývojári. Zabalíme načítanie obrázkov do funkcie založenej na Promise – tento prístup, popularizovaný, keď sa JavaScriptové Promises stali štandardom v ES6, robí váš kód organizovanejším a elegantne rieši chyby:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Čo sme tu urobili:**
- **Zabalili** všetku logiku načítania obrázkov do Promise, aby sme ju mohli lepšie spracovať
- **Pridali** spracovanie chýb, ktoré nám skutočne povie, keď sa niečo pokazí
- **Použili** modernú syntax async/await, pretože je oveľa čitateľnejšia
- **Zahrnuli** bloky try/catch na elegantné spracovanie akýchkoľvek problémov pri načítaní

Keď sú vaše obrázky načítané, ich kreslenie na plátno je vlastne celkom jednoduché:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Rozoberme to krok za krokom:**
- **Načítame** obrázky hrdinu a monštra na pozadí pomocou await
- **Získame** náš prvok plátna a získame potrebný 2D vykresľovací kontext
- **Umiestnime** obrázok hrdinu priamo do stredu pomocou rýchlej matematickej operácie na súradnice
- **Umiestnime** obrázok monštra do ľavého horného rohu na začiatok formácie nepriateľov
- **Zachytíme** akékoľvek chyby, ktoré by mohli nastať počas načítania alebo vykresľovania

## Teraz je čas začať budovať vašu hru

Teraz všetko spojíme, aby sme vytvorili vizuálny základ vašej vesmírnej hry. Máte pevné pochopenie základov plátna a techník načítania obrázkov, takže táto praktická sekcia vás prevedie vytvorením kompletnej hernej obrazovky so správne umiestnenými sprite.

### Čo vytvoriť

Vytvoríte webovú stránku s prvkom plátna. Mala by zobrazovať čiernu obrazovku `1024*768`. Poskytli sme vám dva obrázky:

- Hrdinská loď

   ![Hrdinská loď](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.sk.png)

- 5×5 monštrá

   ![Loď monštra](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.sk.png)

### Odporúčané kroky na začiatok vývoja

Nájdite štartovacie súbory, ktoré sme pre vás vytvorili v podpriečinku `your-work`. Štruktúra vášho projektu by mala obsahovať:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Čo máte k dispozícii:**
- **Herné sprite** sa nachádzajú v priečinku `assets/`, aby všetko zostalo organizované
- **Váš hlavný HTML súbor** nastavuje prvok plátna a všetko pripravuje
- **JavaScriptový súbor**, kde napíšete všetku svoju hernú magickú grafiku
- **Súbor package.json**, ktorý nastavuje vývojový server, aby ste mohli testovať lokálne

Otvorte tento priečinok vo Visual Studio Code, aby ste mohli začať s vývojom. Budete potrebovať lokálne vývojové prostredie s nainštalovaným Visual Studio Code, NPM a Node.js. Ak nemáte `npm` nastavený na vašom počítači, [tu je návod, ako ho nainštalovať](https://www.npmjs.com/get-npm).

Spustite svoj vývojový server navigáciou do priečinka `your-work`:

```bash
cd your-work
npm start
```

**Tento príkaz robí niekoľko skvelých vecí:**
- **Spustí** lokálny server na `http://localhost:5000`, aby ste mohli testovať svoju hru
- **Sprístupní** všetky vaše súbory správne, aby ich váš prehliadač mohol načítať
- **Sleduje** vaše súbory pre zmeny, aby ste mohli plynule vyvíjať
- **Poskytne vám** profesionálne vývojové prostredie na testovanie všetkého

> 💡 **Poznámka**: Váš prehliadač bude spočiatku zobrazovať prázdnu stránku – to je očakávané! Ako pridávate kód, obnovte svoj prehliadač, aby ste videli svoje zmeny. Tento iteratívny prístup k vývoju je podobný tomu, ako NASA postavila počítač pre navigáciu Apollo – testovaním každej súčasti pred jej integráciou do väčšieho systému.

### Pridajte kód

Pridajte požadovaný kód do `your-work/app.js`, aby ste dokončili nasledujúce úlohy:

1. **Nakreslite plátno s čiernym pozadím**
   > 💡 **Ako na to**: Nájdite TODO v `/app.js` a pridajte len dva riadky. Nastavte `ctx.fillStyle` na čiernu, potom použite `ctx.fillRect()` začínajúci na (0,0) s rozmermi vášho plátna. Jednoduché!

2. **Načítajte herné textúry**
   > 💡 **Ako na to**: Použite `await loadAsset()` na načítanie obrázkov hráča a nepriateľa. Uložte ich do premenných, aby ste ich mohli neskôr použiť. Pamätajte – neobjavia sa, kým ich skutočne nenakreslíte!

3. **Nakreslite hrdinskú loď na stred-dolnú pozíciu**
   > 💡 **Ako na to**: Použite `ctx.drawImage()` na umiestnenie vášho hrdinu. Pre x-súradnicu skúste `canvas.width / 2 - 45`, aby ste ho vycentrovali, a pre y-súradnicu použite `canvas.height - canvas.height / 4`, aby ste ho umiestnili do spodnej časti.

4. **Nakreslite formáciu 5×5 nepriateľských lodí**
   > 💡 **Ako na to**: Nájdite funkciu `createEnemies` a nastavte vnorenú slučku. Budete musieť urobiť nejaké výpočty pre rozmiestnenie a umiestnenie, ale nebojte sa – ukážem vám presne, ako na to!

Najprv nastavte konštanty pre správne rozloženie formácie nepriateľov:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Rozoberme, čo tieto konštanty robia:**
- **Nastavíme** 5 nepriateľov na riadok a stĺpec (pekná mriežka 5×5)
- **Definujeme**, koľko miesta dať medzi nepriateľov, aby nevyzerali stiesnene
- **Vypočítame**, aká široká bude celá formácia
- **Určíme**, kde začať a skončiť, aby formácia vyzerala vycentrovaná

Potom vytvorte vnorené slučky na nakreslenie formácie nepriateľov:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Čo táto vnorená slučka robí:**
- Vonkajšia slučka **posúva** zľava doprava cez našu formáciu
- Vnútorná slučka **prechádza** zhora nadol, aby vytvorila upravené riadky
- **Nakreslíme** každý sprite nepriateľa na presné x,y súradnice, ktoré sme vypočítali
- Všetko zostáva **rovnomerne rozmiestnené**, aby to vyzeralo profesionálne a organizovane

## Výsledok

Hotový výsledok by mal vyzerať takto:

![Čierna obrazovka s hrdinom a 5×5 monštrami](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.sk.png)

## Riešenie

Najskôr sa pokúste vyriešiť úlohu sami, ale ak sa zaseknete, pozrite si [riešenie](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vylepšite plátno vašej vesmírnej hry pridaním vizuálnych efektov a interaktívnych prvkov pomocou techník API pre plátno, ktoré ste sa naučili.

**Úloha:** Vytvorte nový súbor s názvom `enhanced-canvas.html` s plátnom, ktoré zobrazuje animované hv

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.