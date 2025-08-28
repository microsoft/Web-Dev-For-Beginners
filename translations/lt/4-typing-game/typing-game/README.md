<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-28T11:57:32+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "lt"
}
-->
# Sukurkime žaidimą naudodami įvykius

## Klausimynas prieš paskaitą

[Klausimynas prieš paskaitą](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Įvykiais pagrįstas programavimas

Kuriant naršyklės pagrindu veikiančią programą, mes suteikiame vartotojui grafinę vartotojo sąsają (GUI), kurią jis naudoja sąveikai su mūsų sukurtu produktu. Dažniausias būdas sąveikauti su naršykle yra spustelėjimas ir rašymas įvairiuose elementuose. Tačiau kaip kūrėjai mes susiduriame su iššūkiu – mes nežinome, kada vartotojas atliks šiuos veiksmus!

[Įvykiais pagrįstas programavimas](https://en.wikipedia.org/wiki/Event-driven_programming) – tai programavimo tipas, kurį turime naudoti kurdami GUI. Jei šiek tiek išskaidysime šią frazę, pamatysime, kad pagrindinis žodis čia yra **įvykis**. [Įvykis](https://www.merriam-webster.com/dictionary/event), pagal Merriam-Webster, apibrėžiamas kaip „kažkas, kas įvyksta“. Tai puikiai apibūdina mūsų situaciją. Mes žinome, kad kažkas įvyks, dėl ko norėsime vykdyti tam tikrą kodą, tačiau nežinome, kada tai įvyks.

Norėdami pažymėti kodo dalį, kurią norime vykdyti, sukuriame funkciją. Kalbant apie [procedūrinį programavimą](https://en.wikipedia.org/wiki/Procedural_programming), funkcijos vykdomos tam tikra tvarka. Tas pats galioja ir įvykiais pagrįstam programavimui. Skirtumas yra **kaip** funkcijos bus iškviečiamos.

Norėdami valdyti įvykius (mygtuko paspaudimą, rašymą ir pan.), registruojame **įvykių klausytojus**. Įvykio klausytojas – tai funkcija, kuri laukia, kol įvyks įvykis, ir vykdo kodą atsakydama į jį. Įvykių klausytojai gali atnaujinti vartotojo sąsają, siųsti užklausas serveriui ar atlikti kitus veiksmus, reaguodami į vartotojo veiksmus. Įvykio klausytoją pridedame naudodami [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) ir pateikdami funkciją, kurią reikia vykdyti.

> **NOTE:** Verta paminėti, kad yra daugybė būdų sukurti įvykių klausytojus. Galite naudoti anonimines funkcijas arba sukurti pavadintas. Taip pat galite naudoti įvairias trumpesnes alternatyvas, pvz., nustatyti `click` savybę arba naudoti `addEventListener`. Mūsų užduotyje mes sutelksime dėmesį į `addEventListener` ir anonimines funkcijas, nes tai yra vienas dažniausių metodų, kuriuos naudoja interneto kūrėjai. Tai taip pat yra lankstiausias būdas, nes `addEventListener` veikia su visais įvykiais, o įvykio pavadinimą galima pateikti kaip parametrą.

### Dažniausi įvykiai

Yra [dešimtys įvykių](https://developer.mozilla.org/docs/Web/Events), kuriuos galite stebėti kurdami programą. Iš esmės bet koks vartotojo veiksmas puslapyje sukelia įvykį, suteikdamas jums daug galimybių užtikrinti, kad vartotojas gautų norimą patirtį. Laimei, dažniausiai jums reikės tik kelių įvykių. Štai keletas dažniausiai naudojamų (įskaitant du, kuriuos naudosime kurdami savo žaidimą):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Vartotojas spustelėjo kažką, paprastai mygtuką ar nuorodą
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Vartotojas spustelėjo dešinįjį pelės mygtuką
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Vartotojas pažymėjo tekstą
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Vartotojas įvedė tekstą

## Žaidimo kūrimas

Mes sukursime žaidimą, kad išnagrinėtume, kaip veikia įvykiai JavaScript kalboje. Mūsų žaidimas išbandys žaidėjo rašymo įgūdžius – vieną iš labiausiai neįvertintų įgūdžių, kuriuos turėtų turėti visi kūrėjai. Visi turėtume praktikuoti savo rašymą! Bendras žaidimo veikimo principas atrodys taip:

- Žaidėjas spustelėja pradžios mygtuką ir gauna citatą, kurią reikia perrašyti
- Žaidėjas kuo greičiau perrašo citatą teksto laukelyje
  - Kai kiekvienas žodis užbaigiamas, kitas yra paryškinamas
  - Jei žaidėjas padaro klaidą, teksto laukelis nusidažo raudonai
  - Kai žaidėjas užbaigia citatą, rodoma sėkmės žinutė su praėjusiu laiku

Sukurkime savo žaidimą ir sužinokime apie įvykius!

### Failų struktūra

Mums reikės trijų failų: **index.html**, **script.js** ir **style.css**. Pradėkime juos kurti, kad palengvintume sau darbą.

- Sukurkite naują aplanką savo darbui, atidarydami konsolę arba terminalą ir įvesdami šią komandą:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Atidarykite Visual Studio Code

```bash
code .
```

- Pridėkite tris failus į aplanką Visual Studio Code su šiais pavadinimais:
  - index.html
  - script.js
  - style.css

## Sukurkite vartotojo sąsają

Jei išnagrinėsime reikalavimus, žinome, kad mums reikės kelių elementų mūsų HTML puslapyje. Tai šiek tiek primena receptą, kuriame mums reikia tam tikrų ingredientų:

- Vietos, kur būtų rodoma citata, kurią vartotojas turi perrašyti
- Vietos, kur būtų rodomos žinutės, pvz., sėkmės žinutė
- Teksto laukelio rašymui
- Pradžios mygtuko

Kiekvienam iš šių elementų reikės ID, kad galėtume su jais dirbti savo JavaScript kode. Taip pat pridėsime nuorodas į CSS ir JavaScript failus, kuriuos sukursime.

Sukurkite naują failą pavadinimu **index.html**. Pridėkite šį HTML kodą:

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

### Paleiskite programą

Visada geriausia kurti iteratyviai, kad pamatytumėte, kaip viskas atrodo. Paleiskime savo programą. Yra puikus Visual Studio Code plėtinys, vadinamas [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), kuris tiek lokaliai talpins jūsų programą, tiek atnaujins naršyklę kiekvieną kartą, kai išsaugosite.

- Įdiekite [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), sekdami nuorodą ir spustelėdami **Install**
  - Naršyklė paragins atidaryti Visual Studio Code, o tada Visual Studio Code paragins atlikti diegimą
  - Jei reikės, iš naujo paleiskite Visual Studio Code
- Įdiegę, Visual Studio Code paspauskite Ctrl-Shift-P (arba Cmd-Shift-P), kad atidarytumėte komandų paletę
- Įveskite **Live Server: Open with Live Server**
  - Live Server pradės talpinti jūsų programą
- Atidarykite naršyklę ir eikite į **https://localhost:5500**
- Dabar turėtumėte matyti sukurtą puslapį!

Pridėkime šiek tiek funkcionalumo.

## Pridėkite CSS

Sukūrę HTML, pridėkime CSS pagrindiniam stiliui. Turime paryškinti žodį, kurį žaidėjas turėtų rašyti, ir nuspalvinti teksto laukelį, jei tai, ką jis įvedė, yra neteisinga. Tai padarysime naudodami dvi klases.

Sukurkite naują failą pavadinimu **style.css** ir pridėkite šį sintaksę.

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

✅ Kalbant apie CSS, galite išdėstyti savo puslapį taip, kaip jums patinka. Skirkite šiek tiek laiko ir padarykite puslapį patrauklesnį:

- Pasirinkite kitą šriftą
- Nuspalvinkite antraštes
- Pakeiskite elementų dydį

## JavaScript

Sukūrę vartotojo sąsają, dabar sutelkime dėmesį į JavaScript, kuris suteiks logiką. Mes tai suskaidysime į kelis žingsnius:

- [Sukurkite konstantas](../../../../4-typing-game/typing-game)
- [Įvykio klausytojas žaidimo pradžiai](../../../../4-typing-game/typing-game)
- [Įvykio klausytojas rašymui](../../../../4-typing-game/typing-game)

Bet pirmiausia sukurkite naują failą pavadinimu **script.js**.

### Sukurkite konstantas

Mums reikės kelių elementų, kad palengvintume programavimą. Vėlgi, tai šiek tiek primena receptą, kuriame mums reikia tam tikrų ingredientų:

- Masyvo su visų citatų sąrašu
- Tuščio masyvo, kuriame bus saugomi visi dabartinės citatos žodžiai
- Vietos, kurioje bus saugomas žodžio, kurį žaidėjas šiuo metu rašo, indeksas
- Laiko, kada žaidėjas spustelėjo pradžią

Taip pat norėsime nuorodų į vartotojo sąsajos elementus:

- Teksto laukelis (**typed-value**)
- Citatų rodymas (**quote**)
- Žinutė (**message**)

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

✅ Pridėkite daugiau citatų į savo žaidimą

> **NOTE:** Mes galime gauti elementus bet kada kode naudodami `document.getElementById`. Kadangi reguliariai kreipsimės į šiuos elementus, vengsime klaidų su eilutėmis, naudodami konstantas. Tokie karkasai kaip [Vue.js](https://vuejs.org/) ar [React](https://reactjs.org/) gali padėti geriau valdyti kodo centralizavimą.

Skirkite minutę ir pažiūrėkite vaizdo įrašą apie `const`, `let` ir `var` naudojimą.

[![Kintamųjų tipai](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Kintamųjų tipai")

> 🎥 Spustelėkite aukščiau esantį paveikslėlį, kad pamatytumėte vaizdo įrašą apie kintamuosius.

### Pridėkite pradžios logiką

Norėdami pradėti žaidimą, žaidėjas spustelės pradžios mygtuką. Žinoma, mes nežinome, kada jis tai padarys. Čia į pagalbą ateina [įvykio klausytojas](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Įvykio klausytojas leis mums laukti, kol kažkas įvyks (įvykis), ir vykdyti kodą atsakant į tai. Mūsų atveju norime vykdyti kodą, kai vartotojas spustelėja pradžią.

Kai vartotojas spustelėja **pradžią**, turime pasirinkti citatą, paruošti vartotojo sąsają ir nustatyti žodžio bei laiko sekimą. Žemiau pateiktas JavaScript kodas, kurį turite pridėti; aptarsime jį po kodo bloko.

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

Išskaidykime kodą!

- Nustatome žodžių sekimą
  - Naudodami [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) ir [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) atsitiktinai pasirenkame citatą iš `quotes` masyvo
  - Konvertuojame `quote` į `words` masyvą, kad galėtume sekti žodį, kurį žaidėjas šiuo metu rašo
  - `wordIndex` nustatome į 0, nes žaidėjas pradės nuo pirmojo žodžio
- Paruošiame vartotojo sąsają
  - Sukuriame `spanWords` masyvą, kuriame kiekvienas žodis yra `span` elemente
    - Tai leis mums paryškinti žodį ekrane
  - Naudojame `join`, kad sukurtume eilutę, kurią galime naudoti `quoteElement` `innerHTML` atnaujinimui
    - Tai parodys citatą žaidėjui
  - Nustatome pirmojo `span` elemento `className` į `highlight`, kad jis būtų paryškintas geltonai
  - Išvalome `messageElement`, nustatydami `innerText` į `''`
- Paruošiame teksto laukelį
  - Išvalome dabartinę `typedValueElement` `value`
  - Nustatome `focus` į `typedValueElement`
- Pradedame laikmatį, iškviesdami `getTime`

### Pridėkite rašymo logiką

Kai žaidėjas rašo, bus iškeltas `input` įvykis. Šis įvykio klausytojas patikrins, ar žaidėjas teisingai rašo žodį, ir valdys žaidimo būseną. Grįžkite į **script.js** ir pridėkite šį kodą pabaigoje. Po to jį išskaidysime.

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

Išskaidykime kodą! Pradedame paimdami dabartinį žodį ir vertę, kurią žaidėjas iki šiol įvedė. Tada turime „krioklio“ logiką, kurioje tikriname, ar citata baigta, ar žodis baigtas, ar žodis teisingas, ar (galiausiai) yra klaida.

- Citata baigta, jei `typedValue` yra lygi `currentWord`, o `wordIndex` yra lygus `words` `length` minus vienas
  - Apskaičiuojame `elapsedTime`, atimdami `startTime` iš dabartinio laiko
  - Padalijame `elapsedTime` iš 1 000, kad konvertuotume iš milisekundžių į sekundes
  - Parodome sėkmės žinutę
- Žodis baigtas, jei `typedValue` baigiasi tarpu (žodžio pabaiga) ir `typedValue` yra lygi `currentWord`
  - Nustatome `typedElement` `value` į `''`, kad būtų galima rašyti kitą žodį
  - Padidiname `wordIndex`, kad pereitume prie kito žodžio
  - Pereiname per visus `quoteElement` `childNodes`, nustatydami `className` į `''`, kad grąžintume numatytąjį rodymą
  - Nustatome dabartinio žodžio `className` į `highlight`, kad pažymėtume jį kaip kitą žodį, kurį reikia rašyti
- Žodis šiuo metu rašomas teisingai (bet dar nebaigtas), jei `currentWord` prasideda `typedValue`
  - Užtikriname, kad `typedValueElement` būtų rodomas kaip numatytasis, išvalydami `className`
- Jei pasiekėme šią vietą, turime klaidą
  - Nustatome `typedValueElement` `className` į `error`

## Išbandykite savo programą

Jūs pasiekėte pabaigą! Paskutinis žingsnis – užtikrinti, kad mūsų programa veikia. Išbandykite! Nesijaudinkite, jei yra klaidų; **visi kūrėjai** susiduria su klaidomis. Išnagrinėkite pranešimus ir derinkite, jei reikia.

Spustelėkite **pradžią** ir pradėkite rašyti! Tai turėtų atrodyti š
- Išsaugokite aukščiausius rezultatus naudodami [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Klausimynas po paskaitos

[Klausimynas po paskaitos](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Peržiūra ir savarankiškas mokymasis

Perskaitykite apie [visus įvykius](https://developer.mozilla.org/docs/Web/Events), kuriuos naršyklė suteikia kūrėjui, ir apsvarstykite scenarijus, kuriuose naudotumėte kiekvieną iš jų.

## Užduotis

[Sukurkite naują klaviatūros žaidimą](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.