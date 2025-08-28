<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-28T04:26:38+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "hu"
}
-->
# Játék készítése események segítségével

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Eseményvezérelt programozás

Amikor böngészőalapú alkalmazást készítünk, grafikus felhasználói felületet (GUI) biztosítunk a felhasználónak, hogy interakcióba léphessen az általunk létrehozott alkalmazással. A böngészővel való interakció leggyakoribb módja a különböző elemekre kattintás és gépelés. Fejlesztőként az a kihívás, hogy nem tudjuk, mikor fogják ezeket a műveleteket végrehajtani!

Az [eseményvezérelt programozás](https://hu.wikipedia.org/wiki/Esem%C3%A9nyvez%C3%A9relt_programoz%C3%A1s) az a programozási típus, amelyet a GUI létrehozásához kell alkalmaznunk. Ha kicsit lebontjuk ezt a kifejezést, a kulcsszó az **esemény**. Az [esemény](https://www.merriam-webster.com/dictionary/event) a Merriam-Webster szerint "valami, ami történik". Ez tökéletesen leírja a helyzetünket. Tudjuk, hogy valami történni fog, amire kódot szeretnénk végrehajtani válaszként, de nem tudjuk, mikor fog bekövetkezni.

Az a mód, ahogyan megjelöljük a végrehajtandó kódrészletet, az egy függvény létrehozása. Ha a [procedurális programozásra](https://hu.wikipedia.org/wiki/Procedur%C3%A1lis_programoz%C3%A1s) gondolunk, a függvényeket meghatározott sorrendben hívjuk meg. Ez az eseményvezérelt programozásnál is igaz lesz. A különbség az, **hogyan** hívjuk meg a függvényeket.

Az események (gombkattintás, gépelés stb.) kezeléséhez **eseményfigyelőket** regisztrálunk. Az eseményfigyelő egy olyan függvény, amely figyeli, hogy bekövetkezik-e egy esemény, és válaszul végrehajtódik. Az eseményfigyelők frissíthetik a felhasználói felületet, hívásokat indíthatnak a szerver felé, vagy bármi mást elvégezhetnek a felhasználó műveletére válaszul. Eseményfigyelőt az [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) használatával adunk hozzá, és megadjuk a végrehajtandó függvényt.

> **NOTE:** Érdemes kiemelni, hogy számos módja van eseményfigyelők létrehozásának. Használhatunk névtelen függvényeket vagy elnevezett függvényeket. Különböző rövidítéseket is alkalmazhatunk, például a `click` tulajdonság beállítását vagy az `addEventListener` használatát. A gyakorlatban az `addEventListener`-re és névtelen függvényekre fogunk összpontosítani, mivel ez a leggyakoribb technika, amelyet a webfejlesztők használnak. Ez a legflexibilisebb is, mivel az `addEventListener` minden eseményhez működik, és az esemény nevét paraméterként adhatjuk meg.

### Gyakori események

[Számos esemény](https://developer.mozilla.org/docs/Web/Events) áll rendelkezésre, amelyeket figyelhetünk egy alkalmazás létrehozásakor. Alapvetően bármi, amit a felhasználó egy oldalon tesz, eseményt vált ki, ami nagy hatalmat ad nekünk ahhoz, hogy biztosítsuk a kívánt élményt. Szerencsére általában csak néhány eseményre van szükségünk. Íme néhány gyakori esemény (beleértve azt a kettőt, amelyet a játékunk létrehozásakor használni fogunk):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): A felhasználó valamire kattintott, általában egy gombra vagy hivatkozásra
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): A felhasználó a jobb egérgombbal kattintott
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): A felhasználó kijelölt egy szöveget
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): A felhasználó szöveget írt be

## A játék létrehozása

Egy játékot fogunk készíteni, hogy felfedezzük, hogyan működnek az események a JavaScriptben. A játékunk a játékos gépelési képességét fogja tesztelni, ami az egyik leginkább alábecsült készség, amelyet minden fejlesztőnek gyakorolnia kellene. A játék általános menete a következő lesz:

- A játékos rákattint a start gombra, és megjelenik egy idézet, amelyet be kell gépelnie
- A játékos a lehető leggyorsabban begépeli az idézetet egy szövegmezőbe
  - Minden egyes szó befejezésekor a következő kiemelésre kerül
  - Ha a játékos elgépel, a szövegmező pirosra vált
  - Amikor a játékos befejezi az idézetet, egy sikerüzenet jelenik meg az eltelt idővel együtt

Építsük meg a játékot, és tanuljunk az eseményekről!

### Fájlstruktúra

Három fájlra lesz szükségünk: **index.html**, **script.js** és **style.css**. Kezdjük ezek beállításával, hogy megkönnyítsük a munkánkat.

- Hozz létre egy új mappát a munkádhoz egy konzol vagy terminál ablak megnyitásával, és add ki a következő parancsot:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Nyisd meg a Visual Studio Code-ot

```bash
code .
```

- Adj hozzá három fájlt a mappához a Visual Studio Code-ban a következő nevekkel:
  - index.html
  - script.js
  - style.css

## A felhasználói felület létrehozása

Ha megvizsgáljuk a követelményeket, tudjuk, hogy néhány elemre lesz szükségünk a HTML-oldalunkon. Ez olyan, mint egy recept, ahol szükségünk van néhány hozzávalóra:

- Egy hely az idézet megjelenítésére, amelyet a felhasználónak be kell gépelnie
- Egy hely az üzenetek megjelenítésére, például egy sikerüzenet
- Egy szövegmező a gépeléshez
- Egy start gomb

Mindegyikhez szükség lesz ID-kre, hogy a JavaScriptben dolgozhassunk velük. Hozzáadjuk a hivatkozásokat a CSS- és JavaScript-fájlokra is, amelyeket létrehozunk.

Hozz létre egy új fájlt **index.html** néven. Add hozzá a következő HTML-t:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Az alkalmazás elindítása

Mindig a legjobb iteratívan fejleszteni, hogy lássuk, hogyan néz ki a munkánk. Indítsuk el az alkalmazást. A Visual Studio Code-hoz van egy remek bővítmény, a [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), amely helyileg hosztolja az alkalmazást, és minden mentéskor frissíti a böngészőt.

- Telepítsd a [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) bővítményt a link követésével, majd kattints az **Install** gombra
  - A böngésző felkér, hogy nyisd meg a Visual Studio Code-ot, majd a Visual Studio Code felkér a telepítés végrehajtására
  - Indítsd újra a Visual Studio Code-ot, ha szükséges
- A telepítés után a Visual Studio Code-ban nyomd meg a Ctrl-Shift-P (vagy Cmd-Shift-P) billentyűkombinációt a parancspaletta megnyitásához
- Írd be: **Live Server: Open with Live Server**
  - A Live Server elindítja az alkalmazás hosztolását
- Nyiss meg egy böngészőt, és navigálj a **https://localhost:5500** címre
- Most már látnod kell az általad létrehozott oldalt!

Adjunk hozzá némi funkcionalitást.

## A CSS hozzáadása

A HTML elkészítése után adjuk hozzá az alapvető stílusokat a CSS segítségével. Ki kell emelnünk azt a szót, amelyet a játékosnak gépelnie kell, és színezni kell a szövegmezőt, ha a beírt szöveg helytelen. Ezt két osztály segítségével fogjuk megtenni.

Hozz létre egy új fájlt **style.css** néven, és add hozzá a következő szintaxist.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ A CSS esetében a saját ízlésed szerint alakíthatod az oldal elrendezését. Szánj egy kis időt arra, hogy az oldal vonzóbbá váljon:

- Válassz másik betűtípust
- Színezd ki a fejlécet
- Állítsd be az elemek méretét

## JavaScript

A felhasználói felület elkészítése után ideje a JavaScriptre összpontosítani, amely biztosítja a logikát. Ezt néhány lépésre bontjuk:

- [Konstansok létrehozása](../../../../4-typing-game/typing-game)
- [Eseményfigyelő a játék indításához](../../../../4-typing-game/typing-game)
- [Eseményfigyelő a gépeléshez](../../../../4-typing-game/typing-game)

Először azonban hozz létre egy új fájlt **script.js** néven.

### A konstansok hozzáadása

Néhány elemre szükségünk lesz, hogy megkönnyítsük a programozást. Ismét, mint egy recept, itt van, amire szükségünk lesz:

- Tömb az összes idézet listájával
- Üres tömb az aktuális idézet szavainak tárolására
- Hely az aktuálisan gépelt szó indexének tárolására
- Az idő, amikor a játékos a start gombra kattintott

Szükségünk lesz továbbá a felhasználói felület elemeire való hivatkozásokra:

- A szövegmező (**typed-value**)
- Az idézet megjelenítése (**quote**)
- Az üzenet (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Adj hozzá több idézetet a játékodhoz

> **NOTE:** Az elemeket bármikor lekérhetjük a kódban a `document.getElementById` használatával. Mivel ezeket az elemeket rendszeresen hivatkozni fogjuk, elkerüljük a string literálokkal való elírásokat konstansok használatával. Az olyan keretrendszerek, mint a [Vue.js](https://vuejs.org/) vagy a [React](https://reactjs.org/), segíthetnek a kód központosításának jobb kezelésében.

Szánj egy percet arra, hogy megnézz egy videót a `const`, `let` és `var` használatáról.

[![Változótípusok](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Változótípusok")

> 🎥 Kattints a fenti képre egy videóért a változókról.

### Indítási logika hozzáadása

A játék elindításához a játékos a start gombra kattint. Természetesen nem tudjuk, mikor fogják megnyomni a start gombot. Itt jön képbe egy [eseményfigyelő](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Az eseményfigyelő lehetővé teszi számunkra, hogy figyeljünk valamire (egy eseményre), és kódot hajtsunk végre válaszként. Ebben az esetben kódot szeretnénk végrehajtani, amikor a felhasználó a start gombra kattint.

Amikor a felhasználó a **start** gombra kattint, ki kell választanunk egy idézetet, be kell állítanunk a felhasználói felületet, és el kell indítanunk a szó- és időkövetést. Az alábbi JavaScriptet kell hozzáadnod; a kódrészlet után megbeszéljük.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Nézzük meg részletesen a kódot!

- Szókövetés beállítása
  - A [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) és a [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) használatával véletlenszerűen választunk egy idézetet a `quotes` tömbből
  - Az `quote`-ot átalakítjuk egy `words` tömbbé, hogy nyomon követhessük, melyik szót gépeli éppen a játékos
  - A `wordIndex` értékét 0-ra állítjuk, mivel a játékos az első szóval kezdi
- Felhasználói felület beállítása
  - Létrehozunk egy `spanWords` tömböt, amely minden szót egy `span` elembe helyez
    - Ez lehetővé teszi számunkra, hogy kiemeljük a megjelenített szót
  - A tömböt `join`-nal egy stringgé alakítjuk, amelyet az `quoteElement` `innerHTML`-jének frissítésére használunk
    - Ez megjeleníti az idézetet a játékos számára
  - Az első `span` elem `className` értékét `highlight`-ra állítjuk, hogy sárgával kiemeljük
  - Az `messageElement`-et kiürítjük az `innerText` értékének `''`-re állításával
- Szövegmező beállítása
  - Töröljük az aktuális `value` értéket a `typedValueElement`-ben
  - A fókuszt a `typedValueElement`-re állítjuk
- Az időzítőt a `getTime` meghívásával indítjuk el

### Gépelési logika hozzáadása

Amikor a játékos gépel, egy `input` esemény váltódik ki. Ez az eseményfigyelő ellenőrzi, hogy a játékos helyesen gépel-e, és kezeli a játék aktuális állapotát. Térjünk vissza a **script.js** fájlhoz, és adjuk hozzá a következő kódot a végére. Utána részletesen megbeszéljük.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Nézzük meg részletesen a kódot! Először lekérjük az aktuális szót és a játékos által eddig begépelt értéket. Ezután egy logikai lépcsőzetet követünk, ahol ellenőrizzük, hogy az idézet teljes-e, a szó teljes-e, a szó helyes-e, vagy (végül), ha hiba történt.

- Az idézet teljes, ha a `typedValue` megegyezik a `currentWord`-del, és a `wordIndex` egyenlő a `words` `length`-jének eggyel csökkentett értékével
  - Az `elapsedTime`-ot kiszámítjuk úgy, hogy kivonjuk a `startTime`-ból az aktuális időt
  - Az `elapsedTime`-ot elosztjuk 1.000-rel, hogy milliszekundumból másodpercre váltsuk
  - Megjelenítünk egy sikerüzenetet
- A szó teljes, ha a `typedValue` szóközzel végződik (egy szó vége), és a `typedValue` megegyezik a `currentWord`-del
  - A `typedElement` `value` értékét `''`-re állítjuk, hogy lehetővé tegyük a következő szó begépelését
  - A `wordIndex`-et növeljük, hogy a következő szóra lépjünk
  - Végigmegyünk az `quoteElement` összes `childNodes` elemén, és az `className` értékét `''`-re állítjuk, hogy visszaállítsuk az alapértelmezett megjelenítést
  - Az aktuális szó `className` értékét `highlight`-ra állítjuk, hogy megjelöljük a következő begépelendő szót
- A szó jelenleg helyesen van begépelve (de nem teljes), ha a `currentWord`
- Tárold a legmagasabb pontszámokat a [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) segítségével

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Áttekintés és önálló tanulás

Olvass utána a [böngésző által elérhető összes eseménynek](https://developer.mozilla.org/docs/Web/Events), és gondold át, hogy melyik eseményt milyen helyzetekben használnád.

## Feladat

[Hozz létre egy új billentyűzetes játékot](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.