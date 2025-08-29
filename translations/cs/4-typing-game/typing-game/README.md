<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T10:58:32+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "cs"
}
-->
# Vytvoření hry pomocí událostí

## Kvíz před přednáškou

[Kvíz před přednáškou](https://ff-quizzes.netlify.app/web/quiz/21)

## Programování řízené událostmi

Při vytváření aplikace prohlížeče poskytujeme uživateli grafické uživatelské rozhraní (GUI), které může použít při interakci s tím, co jsme vytvořili. Nejčastějším způsobem interakce s prohlížečem je klikání a psaní do různých prvků. Výzvou, které čelíme jako vývojáři, je, že nevíme, kdy tyto operace provedou!

[Programování řízené událostmi](https://en.wikipedia.org/wiki/Event-driven_programming) je název pro typ programování, který potřebujeme k vytvoření našeho GUI. Pokud tuto frázi trochu rozebereme, zjistíme, že klíčovým slovem je zde **událost**. [Událost](https://www.merriam-webster.com/dictionary/event) je podle Merriam-Webster definována jako „něco, co se stane“. To dokonale popisuje naši situaci. Víme, že se něco stane, na co chceme reagovat spuštěním kódu, ale nevíme, kdy k tomu dojde.

Část kódu, kterou chceme spustit, označíme vytvořením funkce. Když přemýšlíme o [procedurálním programování](https://en.wikipedia.org/wiki/Procedural_programming), funkce se volají ve specifickém pořadí. Totéž platí i pro programování řízené událostmi. Rozdíl je v tom, **jak** budou funkce volány.

Pro zpracování událostí (klikání na tlačítka, psaní atd.) registrujeme **posluchače událostí**. Posluchač událostí je funkce, která čeká na výskyt události a reaguje na ni spuštěním kódu. Posluchači událostí mohou aktualizovat uživatelské rozhraní, provádět volání na server nebo cokoliv jiného, co je potřeba udělat v reakci na akci uživatele. Posluchače událostí přidáváme pomocí [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) a poskytnutím funkce, která se má spustit.

> **NOTE:** Stojí za zmínku, že existuje mnoho způsobů, jak vytvořit posluchače událostí. Můžete použít anonymní funkce nebo vytvořit pojmenované. Můžete použít různé zkratky, jako je nastavení vlastnosti `click`, nebo použít `addEventListener`. V našem cvičení se zaměříme na `addEventListener` a anonymní funkce, protože je to pravděpodobně nejběžnější technika, kterou weboví vývojáři používají. Je také nejflexibilnější, protože `addEventListener` funguje pro všechny události a název události lze zadat jako parametr.

### Běžné události

Existuje [desítky událostí](https://developer.mozilla.org/docs/Web/Events), které můžete poslouchat při vytváření aplikace. Prakticky cokoliv, co uživatel na stránce udělá, vyvolá událost, což vám dává velkou moc zajistit, že dostane požadovaný zážitek. Naštěstí obvykle budete potřebovat jen malý počet událostí. Zde je několik běžných (včetně dvou, které použijeme při vytváření naší hry):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Uživatel na něco klikl, obvykle na tlačítko nebo odkaz
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Uživatel klikl pravým tlačítkem myši
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Uživatel označil nějaký text
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Uživatel zadal nějaký text

## Vytvoření hry

Vytvoříme hru, abychom prozkoumali, jak události fungují v JavaScriptu. Naše hra otestuje schopnost hráče psát, což je jedna z nejvíce podceňovaných dovedností, kterou by měl mít každý vývojář. Všichni bychom měli trénovat psaní! Obecný průběh hry bude vypadat takto:

- Hráč klikne na tlačítko start a zobrazí se mu citát k opsání
- Hráč co nejrychleji napíše citát do textového pole
  - Jakmile dokončí jedno slovo, další se zvýrazní
  - Pokud hráč udělá překlep, textové pole se zbarví červeně
  - Když hráč dokončí citát, zobrazí se zpráva o úspěchu s uplynulým časem

Pojďme vytvořit naši hru a naučit se něco o událostech!

### Struktura souborů

Budeme potřebovat celkem tři soubory: **index.html**, **script.js** a **style.css**. Začněme jejich nastavením, abychom si usnadnili práci.

- Vytvořte novou složku pro svou práci otevřením konzole nebo terminálu a zadáním následujícího příkazu:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Otevřete Visual Studio Code

```bash
code .
```

- Přidejte do složky ve Visual Studio Code tři soubory s následujícími názvy:
  - index.html
  - script.js
  - style.css

## Vytvoření uživatelského rozhraní

Pokud prozkoumáme požadavky, víme, že budeme potřebovat několik prvků na naší HTML stránce. Je to něco jako recept, kde potřebujeme nějaké ingredience:

- Místo pro zobrazení citátu, který má uživatel opsat
- Místo pro zobrazení zpráv, jako je zpráva o úspěchu
- Textové pole pro psaní
- Tlačítko start

Každý z těchto prvků bude potřebovat ID, abychom s nimi mohli pracovat v našem JavaScriptu. Přidáme také odkazy na soubory CSS a JavaScript, které vytvoříme.

Vytvořte nový soubor s názvem **index.html**. Přidejte následující HTML:

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

### Spuštění aplikace

Vždy je nejlepší vyvíjet iterativně, abychom viděli, jak věci vypadají. Spusťme naši aplikaci. Existuje skvělý doplněk pro Visual Studio Code s názvem [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), který bude hostovat vaši aplikaci lokálně a aktualizovat prohlížeč pokaždé, když uložíte.

- Nainstalujte [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) podle odkazu a kliknutím na **Install**
  - Prohlížeč vás vyzve k otevření Visual Studio Code a poté vás Visual Studio Code vyzve k provedení instalace
  - Restartujte Visual Studio Code, pokud budete vyzváni
- Po instalaci klikněte ve Visual Studio Code na Ctrl-Shift-P (nebo Cmd-Shift-P) pro otevření příkazové palety
- Zadejte **Live Server: Open with Live Server**
  - Live Server začne hostovat vaši aplikaci
- Otevřete prohlížeč a přejděte na **https://localhost:5500**
- Nyní byste měli vidět stránku, kterou jste vytvořili!

Přidejme nějakou funkcionalitu.

## Přidání CSS

S naším HTML vytvořeným přidáme CSS pro základní stylování. Potřebujeme zvýraznit slovo, které by měl hráč psát, a obarvit textové pole, pokud to, co napsal, není správné. To uděláme pomocí dvou tříd.

Vytvořte nový soubor s názvem **style.css** a přidejte následující syntaxi.

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

✅ Co se týče CSS, můžete si stránku rozvrhnout, jak chcete. Věnujte trochu času a udělejte stránku vizuálně přitažlivější:

- Vyberte jiný font
- Obarvěte nadpisy
- Změňte velikost prvků

## JavaScript

S naším uživatelským rozhraním vytvořeným je čas zaměřit naši pozornost na JavaScript, který poskytne logiku. Rozdělíme to na několik kroků:

- [Vytvoření konstant](../../../../4-typing-game/typing-game)
- [Posluchač událostí pro spuštění hry](../../../../4-typing-game/typing-game)
- [Posluchač událostí pro psaní](../../../../4-typing-game/typing-game)

Nejprve ale vytvořte nový soubor s názvem **script.js**.

### Přidání konstant

Budeme potřebovat několik položek, které nám usnadní programování. Opět, podobně jako recept, zde je to, co budeme potřebovat:

- Pole se seznamem všech citátů
- Prázdné pole pro uložení všech slov aktuálního citátu
- Prostor pro uložení indexu slova, které hráč aktuálně píše
- Čas, kdy hráč klikl na start

Budeme také chtít odkazy na prvky uživatelského rozhraní:

- Textové pole (**typed-value**)
- Zobrazení citátu (**quote**)
- Zpráva (**message**)

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

✅ Přidejte do své hry více citátů

> **NOTE:** Prvky můžeme kdykoliv v kódu získat pomocí `document.getElementById`. Protože se na tyto prvky budeme pravidelně odkazovat, vyhneme se překlepům ve stringových literálech použitím konstant. Frameworky jako [Vue.js](https://vuejs.org/) nebo [React](https://reactjs.org/) vám mohou pomoci lépe centralizovat váš kód.

Podívejte se na video o používání `const`, `let` a `var`

[![Typy proměnných](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Typy proměnných")

> 🎥 Klikněte na obrázek výše pro video o proměnných.

### Přidání logiky spuštění

Pro spuštění hry hráč klikne na start. Samozřejmě nevíme, kdy na start klikne. Zde přichází na řadu [posluchač událostí](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Posluchač událostí nám umožní poslouchat, kdy se něco stane (událost), a reagovat na to spuštěním kódu. V našem případě chceme spustit kód, když uživatel klikne na start.

Když uživatel klikne na **start**, musíme vybrat citát, nastavit uživatelské rozhraní a připravit sledování aktuálního slova a času. Níže je JavaScript, který budete muset přidat; rozebereme ho hned po bloku skriptu.

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

Rozeberme si kód!

- Nastavení sledování slov
  - Použití [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) a [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nám umožní náhodně vybrat citát z pole `quotes`
  - Převádíme `quote` na pole `words`, abychom mohli sledovat slovo, které hráč aktuálně píše
  - `wordIndex` je nastaven na 0, protože hráč začne na prvním slově
- Nastavení uživatelského rozhraní
  - Vytvoříme pole `spanWords`, které obsahuje každé slovo uvnitř prvku `span`
    - To nám umožní zvýraznit slovo na displeji
  - `join` pole pro vytvoření řetězce, který můžeme použít k aktualizaci `innerHTML` na `quoteElement`
    - To zobrazí citát hráči
  - Nastavíme `className` prvního prvku `span` na `highlight`, aby byl zvýrazněn žlutě
  - Vyčistíme `messageElement` nastavením `innerText` na `''`
- Nastavení textového pole
  - Vymažeme aktuální `value` na `typedValueElement`
  - Nastavíme `focus` na `typedValueElement`
- Spustíme časovač voláním `getTime`

### Přidání logiky psaní

Jak hráč píše, bude vyvolána událost `input`. Tento posluchač událostí zkontroluje, zda hráč píše slovo správně, a zpracuje aktuální stav hry. Vraťte se do **script.js** a přidejte následující kód na konec. Rozebereme ho poté.

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

Rozeberme si kód! Začínáme tím, že získáme aktuální slovo a hodnotu, kterou hráč dosud napsal. Poté máme logiku ve stylu vodopádu, kde kontrolujeme, zda je citát dokončen, slovo dokončeno, slovo správné nebo (nakonec), zda je tam chyba.

- Citát je dokončen, což je indikováno tím, že `typedValue` je rovno `currentWord` a `wordIndex` je rovno jednomu méně než `length` `words`
  - Vypočítáme `elapsedTime` odečtením `startTime` od aktuálního času
  - Dělíme `elapsedTime` 1 000, abychom převedli z milisekund na sekundy
  - Zobrazíme zprávu o úspěchu
- Slovo je dokončeno, což je indikováno tím, že `typedValue` končí mezerou (konec slova) a `typedValue` je rovno `currentWord`
  - Nastavíme `value` na `typedElement` na `''`, abychom umožnili psaní dalšího slova
  - Zvýšíme `wordIndex`, abychom přešli na další slovo
  - Projdeme všechny `childNodes` `quoteElement` a nastavíme `className` na `''`, abychom obnovili výchozí zobrazení
  - Nastavíme `className` aktuálního slova na `highlight`, abychom ho označili jako další slovo k napsání
- Slovo je aktuálně napsáno správně (ale není dokončeno), což je indikováno tím, že `currentWord` začíná `typedValue`
  - Zajistíme, že `typedValueElement` je zobrazen jako výchozí, vymazáním `className`
- Pokud jsme se dostali až sem, máme chybu
  - Nastavíme `className` na `typedValueElement` na `error`

## Otestujte svou aplikaci

Dostali jste se na konec! Posledním krokem je zajistit, aby naše aplikace fungovala. Vyzkoušejte ji! Nebojte se, pokud se objeví chyby; **všichni vývojáři** mají chyby. Prozkoumejte zprávy a laděte podle potřeby.

Klikněte na **start** a začněte psát! Mělo by to vypadat trochu jako animace, kterou jsme viděli dříve.

![Animace hry v akci](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Výzva

Přidejte více funkcionality

- Deaktivujte posluchač událostí `input` po dokončení a znovu ho aktivujte, když je kliknuto na tlačítko
- Deaktivujte textové pole, když hráč dokončí citát
- Zobrazte modální dialogové okno se zprávou o úspěchu
- Ukládejte nejlepší skóre pomocí [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
## Kvíz po přednášce

[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/quiz/22)

## Přehled a samostudium

Projděte si [všechny dostupné události](https://developer.mozilla.org/docs/Web/Events), které má vývojář k dispozici prostřednictvím webového prohlížeče, a zamyslete se nad situacemi, ve kterých byste každou z nich použili.

## Úkol

[Vytvořte novou hru na klávesnici](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.