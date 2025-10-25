<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T21:09:42+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 2: Kreslení hrdiny a monster na plátno

Canvas API je jednou z nejmocnějších funkcí webového vývoje pro vytváření dynamické, interaktivní grafiky přímo ve vašem prohlížeči. V této lekci proměníme prázdný HTML prvek `<canvas>` na herní svět plný hrdinů a monster. Představte si plátno jako svůj digitální umělecký panel, kde se kód stává vizuálním.

Navazujeme na to, co jste se naučili v předchozí lekci, a nyní se ponoříme do vizuálních aspektů. Naučíte se, jak načítat a zobrazovat herní spritey, přesně umisťovat prvky a vytvořit vizuální základ pro vaši vesmírnou hru. Tím překleneme propast mezi statickými webovými stránkami a dynamickými, interaktivními zážitky.

Na konci této lekce budete mít kompletní herní scénu s vaší hrdinskou lodí správně umístěnou a formacemi nepřátel připravenými k boji. Pochopíte, jak moderní hry vykreslují grafiku v prohlížečích, a získáte dovednosti k vytvoření vlastních interaktivních vizuálních zážitků. Pojďme prozkoumat grafiku na plátně a oživit vaši vesmírnou hru!

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Co přesně je tento prvek `<canvas>`? Je to řešení HTML5 pro vytváření dynamické grafiky a animací ve webových prohlížečích. Na rozdíl od běžných obrázků nebo videí, které jsou statické, vám plátno poskytuje kontrolu nad každým pixelem na obrazovce. Díky tomu je ideální pro hry, vizualizace dat a interaktivní umění. Představte si to jako programovatelný kreslící povrch, kde se JavaScript stává vaším štětcem.

Ve výchozím nastavení vypadá prvek canvas jako prázdný, průhledný obdélník na vaší stránce. Ale právě v tom spočívá jeho potenciál! Jeho skutečná síla se projeví, když použijete JavaScript k vykreslení tvarů, načítání obrázků, vytváření animací a zajištění interakce s uživatelem. Je to podobné jako u prvních průkopníků počítačové grafiky v Bell Labs v 60. letech, kteří museli programovat každý pixel, aby vytvořili první digitální animace.

✅ Přečtěte si [více o Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) na MDN.

Takto se obvykle deklaruje jako součást těla stránky:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Co tento kód dělá:**
- **Nastavuje** atribut `id`, abyste mohli tento konkrétní prvek canvas odkazovat v JavaScriptu
- **Definuje** šířku v pixelech pro kontrolu horizontální velikosti plátna
- **Určuje** výšku v pixelech pro stanovení vertikálních rozměrů plátna

## Kreslení jednoduché geometrie

Teď, když víte, co je prvek canvas, pojďme prozkoumat, jak na něm skutečně kreslit! Canvas používá souřadnicový systém, který vám může být povědomý z hodin matematiky, ale má jednu důležitou odlišnost specifickou pro počítačovou grafiku.

Canvas používá kartézské souřadnice s osou x (horizontální) a osou y (vertikální) k umístění všeho, co kreslíte. Ale zde je klíčový rozdíl: na rozdíl od souřadnicového systému z matematiky začíná bod původu `(0,0)` v levém horním rohu, přičemž hodnoty x se zvyšují, když se pohybujete doprava, a hodnoty y se zvyšují, když se pohybujete dolů. Tento přístup pochází z raných počítačových displejů, kde elektronové paprsky skenovaly shora dolů, což činilo levý horní roh přirozeným výchozím bodem.

![mřížka canvasu](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.cs.png)
> Obrázek z [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Pro kreslení na prvek canvas budete postupovat podle stejného tříkrokového procesu, který tvoří základ všech grafických prvků na plátně. Jakmile to uděláte několikrát, stane se to přirozeností:

1. **Získejte referenci** na váš prvek canvas z DOM (stejně jako u jakéhokoli jiného HTML prvku)
2. **Získejte 2D vykreslovací kontext** – ten poskytuje všechny metody kreslení
3. **Začněte kreslit!** Použijte vestavěné metody kontextu k vytvoření vaší grafiky

Takto to vypadá v kódu:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Rozložme si to krok za krokem:**
- **Získáme** náš prvek canvas pomocí jeho ID a uložíme ho do proměnné
- **Získáme** 2D vykreslovací kontext – to je naše sada nástrojů plná metod kreslení
- **Řekneme** plátnu, že chceme vyplnit věci červenou barvou pomocí vlastnosti `fillStyle`
- **Nakreslíme** obdélník začínající v levém horním rohu (0,0), který je široký a vysoký 200 pixelů

✅ Canvas API se většinou zaměřuje na 2D tvary, ale můžete také kreslit 3D prvky na webovou stránku; k tomu můžete použít [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

S Canvas API můžete kreslit různé věci, například:

- **Geometrické tvary**, už jsme ukázali, jak nakreslit obdélník, ale je toho mnohem více, co můžete kreslit.
- **Text**, můžete kreslit text s libovolným fontem a barvou, jakou si přejete.
- **Obrázky**, můžete kreslit obrázek na základě obrazového souboru, například .jpg nebo .png.

✅ Vyzkoušejte to! Už víte, jak nakreslit obdélník, dokážete nakreslit kruh na stránku? Podívejte se na některé zajímavé kresby na plátně na CodePen. Zde je [zvláště působivý příklad](https://codepen.io/dissimulate/pen/KrAwx).

## Načtení a vykreslení obrazového souboru

Kreslení základních tvarů je užitečné pro začátek, ale většina her potřebuje skutečné obrázky! Spritey, pozadí a textury jsou to, co dává hrám jejich vizuální přitažlivost. Načítání a zobrazování obrázků na plátně funguje jinak než kreslení geometrických tvarů, ale je to jednoduché, jakmile pochopíte proces.

Potřebujeme vytvořit objekt `Image`, načíst náš obrazový soubor (to se děje asynchronně, což znamená "na pozadí") a poté ho vykreslit na plátno, jakmile bude připraven. Tento přístup zajišťuje, že se vaše obrázky zobrazí správně, aniž by blokovaly vaši aplikaci během načítání.

### Základní načítání obrázků

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Co se děje v tomto kódu:**
- **Vytvoříme** zcela nový objekt Image pro uložení našeho spriteu nebo textury
- **Řekneme** mu, který obrazový soubor má načíst, nastavením cesty ke zdroji
- **Posloucháme** událost načítání, abychom přesně věděli, kdy je obrázek připraven k použití

### Lepší způsob načítání obrázků

Zde je robustnější způsob, jak se vypořádat s načítáním obrázků, který běžně používají profesionální vývojáři. Zabalíme logiku načítání obrázků do funkce založené na Promise – tento přístup, popularizovaný, když se JavaScriptové Promises staly standardem v ES6, činí váš kód organizovanější a elegantně řeší chyby:

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

**Co jsme zde udělali:**
- **Zabalili** veškerou logiku načítání obrázků do Promise, abychom ji mohli lépe spravovat
- **Přidali** zpracování chyb, které nám skutečně řekne, když se něco pokazí
- **Použili** moderní syntaxi async/await, protože je mnohem přehlednější
- **Zahrnuli** bloky try/catch pro elegantní řešení jakýchkoli problémů při načítání

Jakmile jsou vaše obrázky načteny, jejich vykreslení na plátno je vlastně docela jednoduché:

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

**Projděme si to krok za krokem:**
- **Načteme** oba naše obrázky hrdiny a monstra na pozadí pomocí await
- **Získáme** náš prvek canvas a získáme potřebný 2D vykreslovací kontext
- **Umístíme** obrázek hrdiny přímo do středu pomocí rychlé souřadnicové matematiky
- **Umístíme** obrázek monstra do levého horního rohu, aby začala formace nepřátel
- **Zachytíme** jakékoli chyby, které by mohly nastat během načítání nebo vykreslování

## Nyní je čas začít budovat vaši hru

Nyní vše spojíme dohromady, abychom vytvořili vizuální základ vaší vesmírné hry. Máte solidní pochopení základů canvasu a technik načítání obrázků, takže vás tato praktická část provede vytvořením kompletní herní obrazovky se správně umístěnými spritey.

### Co vytvořit

Vytvoříte webovou stránku s prvkem Canvas. Měla by vykreslovat černou obrazovku `1024*768`. Poskytli jsme vám dva obrázky:

- Hrdinská loď

   ![Hrdinská loď](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.cs.png)

- 5×5 formace monster

   ![Loď monstra](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.cs.png)

### Doporučené kroky pro zahájení vývoje

Najděte startovací soubory, které byly vytvořeny pro vás ve složce `your-work`. Struktura vašeho projektu by měla obsahovat:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**S čím pracujete:**
- **Herní spritey** jsou ve složce `assets/`, aby vše zůstalo organizované
- **Váš hlavní HTML soubor** nastavuje prvek canvas a vše připravuje
- **JavaScriptový soubor**, kde napíšete veškerou magii vykreslování hry
- **Soubor package.json**, který nastavuje vývojový server, abyste mohli testovat lokálně

Otevřete tuto složku ve Visual Studio Code a začněte s vývojem. Budete potřebovat lokální vývojové prostředí s Visual Studio Code, NPM a Node.js nainstalovanými. Pokud nemáte `npm` nastavený na svém počítači, [zde je návod, jak ho nainstalovat](https://www.npmjs.com/get-npm).

Spusťte svůj vývojový server navigací do složky `your-work`:

```bash
cd your-work
npm start
```

**Tento příkaz dělá několik skvělých věcí:**
- **Spustí** lokální server na `http://localhost:5000`, abyste mohli testovat svou hru
- **Servíruje** všechny vaše soubory správně, aby je váš prohlížeč mohl načíst
- **Sleduje** vaše soubory pro změny, abyste mohli hladce vyvíjet
- **Poskytuje vám** profesionální vývojové prostředí pro testování všeho

> 💡 **Poznámka**: Váš prohlížeč zpočátku zobrazí prázdnou stránku – to je očekávané! Jakmile přidáte kód, obnovte prohlížeč, abyste viděli své změny. Tento iterativní přístup k vývoji je podobný tomu, jak NASA vytvořila počítač pro řízení Apolla – testování každé komponenty před jejím integrací do většího systému.

### Přidání kódu

Přidejte požadovaný kód do `your-work/app.js`, abyste dokončili následující úkoly:

1. **Nakreslete plátno s černým pozadím**
   > 💡 **Jak na to**: Najděte TODO v `/app.js` a přidejte jen dva řádky. Nastavte `ctx.fillStyle` na černou, poté použijte `ctx.fillRect()` začínající na (0,0) s rozměry vašeho plátna. Jednoduché!

2. **Načtěte herní textury**
   > 💡 **Jak na to**: Použijte `await loadAsset()` k načtení obrázků hráče a nepřítele. Uložte je do proměnných, abyste je mohli později použít. Pamatujte – neobjeví se, dokud je skutečně nenakreslíte!

3. **Nakreslete hrdinskou loď na střed-dolní pozici**
   > 💡 **Jak na to**: Použijte `ctx.drawImage()` k umístění vašeho hrdiny. Pro souřadnici x zkuste `canvas.width / 2 - 45`, aby byla loď na středu, a pro souřadnici y použijte `canvas.height - canvas.height / 4`, aby byla ve spodní části.

4. **Nakreslete 5×5 formaci nepřátelských lodí**
   > 💡 **Jak na to**: Najděte funkci `createEnemies` a nastavte vnořenou smyčku. Budete muset udělat nějaké výpočty pro rozestupy a umístění, ale nebojte se – ukážu vám přesně jak!

Nejprve nastavte konstanty pro správné rozložení formace nepřátel:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Rozložme si, co tyto konstanty dělají:**
- **Nastavíme** 5 nepřátel na řádek a sloupec (pěkná 5×5 mřížka)
- **Definujeme**, kolik místa dát mezi nepřáteli, aby nevypadali stísněně
- **Vypočítáme**, jak široká bude celá formace
- **Zjistíme**, kde začít a skončit, aby formace vypadala vycentrovaně

Poté vytvořte vnořené smyčky pro vykreslení formace nepřátel:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Co tato vnořená smyčka dělá:**
- Vnější smyčka **pohybuje** zleva doprava přes naši formaci
- Vnitřní smyčka **prochází** shora dolů, aby vytvořila úhledné řádky
- **Nakreslíme** každý sprite nepřítele na přesné souřadnice x,y, které jsme vypočítali
- Vše zůstává **rovnoměrně rozestavěné**, takže to vypadá profesionálně a organizovaně

## Výsledek

Hotový výsledek by měl vypadat takto:

![Černá obrazovka s hrdinou a 5×5 monstry](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.cs.png)

## Řešení

Nejprve se pokuste vyřešit úkol sami, ale pokud se zaseknete, podívejte se na [řešení](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vylepšete plátno vaší vesmírné hry přidáním vizuálních efektů a interaktivních prvků pomocí technik Canvas API, které jste se naučili.

**Úkol:** Vytvořte nový soubor nazvaný `enhanced-canvas.html` s plátnem, které zobrazuje animované hvězdy na pozadí, pulzující ukazatel zdraví pro hrdinskou loď a nepřátelské lodě, které se pomalu pohybují dolů. Zahrňte JavaScriptový kód, který kreslí blikající hvězdy pomocí náhodných pozic a opacity, implementuje ukazatel zdraví, který mění barvu podle úrovně zdraví (zelená > žlutá > červená), a animuje nepřátelské lodě, aby se pohybovaly dolů po obrazovce různými rychlostmi.

Zjistěte více o [režimu agent](https://code.visualstudio.com/blog

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.