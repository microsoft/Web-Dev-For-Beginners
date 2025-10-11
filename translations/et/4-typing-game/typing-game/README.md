<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-10-11T12:08:54+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "et"
}
-->
# Mängu loomine sündmuste abil

## Loengu-eelne viktoriin

[Loengu-eelne viktoriin](https://ff-quizzes.netlify.app/web/quiz/21)

## Sündmustepõhine programmeerimine

Veebirakenduse loomisel pakume kasutajale graafilist kasutajaliidest (GUI), mille abil ta saab meie loodud rakendusega suhelda. Kõige tavalisem viis brauseriga suhtlemiseks on klõpsamine ja erinevates elementides kirjutamine. Väljakutse, millega arendajana silmitsi seisame, on see, et me ei tea, millal kasutaja neid toiminguid teeb!

[Sündmustepõhine programmeerimine](https://en.wikipedia.org/wiki/Event-driven_programming) on programmeerimisviis, mida vajame oma GUI loomiseks. Kui seda fraasi veidi lahti mõtestada, näeme, et keskne sõna siin on **sündmus**. [Sündmus](https://www.merriam-webster.com/dictionary/event), Merriam-Websteri järgi, on defineeritud kui "midagi, mis juhtub". See kirjeldab meie olukorda täiuslikult. Me teame, et midagi juhtub, millele tahame koodi täitmisega reageerida, kuid me ei tea, millal see juhtub.

Viis, kuidas me tähistame koodiosa, mida tahame täita, on funktsiooni loomine. Kui mõtleme [protseduuripõhisele programmeerimisele](https://en.wikipedia.org/wiki/Procedural_programming), kutsutakse funktsioone kindlas järjekorras. Sama kehtib ka sündmustepõhise programmeerimise puhul. Erinevus seisneb selles, **kuidas** funktsioone kutsutakse.

Sündmuste (nupu klõpsamine, kirjutamine jne) käsitlemiseks registreerime **sündmuste kuulajad**. Sündmuste kuulaja on funktsioon, mis ootab sündmuse toimumist ja täidab koodi vastuseks. Sündmuste kuulajad võivad värskendada kasutajaliidest, teha serverikõnesid või teha muid vajalikke toiminguid vastuseks kasutaja tegevusele. Sündmuste kuulaja lisamiseks kasutame [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) ja anname ette funktsiooni, mida täita.

> **NOTE:** Tasub rõhutada, et sündmuste kuulajate loomiseks on mitmeid viise. Võite kasutada anonüümseid funktsioone või luua nimelisi funktsioone. Võite kasutada erinevaid otseteid, näiteks määrata `click` omaduse või kasutada `addEventListener`. Meie harjutuses keskendume `addEventListener`-ile ja anonüümsetele funktsioonidele, kuna see on tõenäoliselt kõige levinum tehnika, mida veebiarendajad kasutavad. See on ka kõige paindlikum, kuna `addEventListener` töötab kõigi sündmuste puhul ja sündmuse nime saab anda parameetrina.

### Levinumad sündmused

Rakenduse loomisel on saadaval [kümneid sündmusi](https://developer.mozilla.org/docs/Web/Events), mida saate kuulata. Põhimõtteliselt tõstab iga kasutaja tegevus lehel esile sündmuse, mis annab teile palju võimalusi tagada, et nad saavad soovitud kogemuse. Õnneks vajate tavaliselt ainult väikest hulka sündmusi. Siin on mõned levinumad (sealhulgas kaks, mida kasutame oma mängu loomisel):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Kasutaja klõpsas millelgi, tavaliselt nupul või hüperlingil
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Kasutaja klõpsas parema hiireklahviga
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Kasutaja valis teksti
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Kasutaja sisestas teksti

## Mängu loomine

Loome mängu, et uurida, kuidas sündmused JavaScriptis töötavad. Meie mäng testib mängija kirjutamisoskust, mis on üks kõige alahinnatumaid oskusi, mida kõik arendajad peaksid omama. Me kõik peaksime harjutama oma kirjutamisoskust! Mängu üldine voog näeb välja järgmine:

- Mängija klõpsab nuppu "Start" ja talle kuvatakse tsitaat, mida kirjutada
- Mängija kirjutab tsitaadi nii kiiresti kui võimalik tekstikasti
  - Kui iga sõna on lõpetatud, tõstetakse järgmine esile
  - Kui mängija teeb kirjavea, muutub tekstikast punaseks
  - Kui mängija lõpetab tsitaadi, kuvatakse edukuse sõnum koos kulunud ajaga

Hakkame oma mängu looma ja õpime sündmuste kohta!

### Failistruktuur

Meil on vaja kokku kolme faili: **index.html**, **script.js** ja **style.css**. Alustame nende seadistamisest, et muuta töö lihtsamaks.

- Looge oma töö jaoks uus kaust, avades konsooli või terminali akna ja sisestades järgmise käsu:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Avage Visual Studio Code

```bash
code .
```

- Lisage kausta Visual Studio Code'is kolm faili järgmiste nimedega:
  - index.html
  - script.js
  - style.css

## Kasutajaliidese loomine

Kui uurime nõudeid, teame, et vajame HTML-lehel mitmeid elemente. See on natuke nagu retsept, kus vajame mõningaid koostisosi:

- Koht, kus kuvada tsitaati, mida kasutaja peaks kirjutama
- Koht, kus kuvada sõnumeid, näiteks edukuse sõnumit
- Tekstikast kirjutamiseks
- Start-nupp

Igal neist peab olema ID, et saaksime nendega JavaScriptis töötada. Samuti lisame viited CSS- ja JavaScripti failidele, mida loome.

Looge uus fail nimega **index.html**. Lisage järgmine HTML:

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

### Rakenduse käivitamine

Alati on kõige parem arendada iteratiivselt, et näha, kuidas asjad välja näevad. Käivitame oma rakenduse. Visual Studio Code'i jaoks on suurepärane laiendus nimega [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), mis hostib teie rakendust kohapeal ja värskendab brauserit iga kord, kui salvestate.

- Installige [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), järgides linki ja klõpsates **Install**
  - Brauser palub teil avada Visual Studio Code'i ja seejärel Visual Studio Code palub teil installimist kinnitada
  - Taaskäivitage Visual Studio Code, kui seda palutakse
- Kui installimine on lõpetatud, klõpsake Visual Studio Code'is Ctrl-Shift-P (või Cmd-Shift-P), et avada käsupalett
- Sisestage **Live Server: Open with Live Server**
  - Live Server alustab teie rakenduse hostimist
- Avage brauser ja navigeerige aadressile **https://localhost:5500**
- Nüüd peaksite nägema loodud lehte!

Lisame veidi funktsionaalsust.

## CSS-i lisamine

Kui meie HTML on loodud, lisame CSS-i põhilise kujunduse jaoks. Peame esile tõstma sõna, mida mängija peaks kirjutama, ja värvima tekstikasti, kui see, mida nad on kirjutanud, on vale. Teeme seda kahe klassi abil.

Looge uus fail nimega **style.css** ja lisage järgmine süntaks.

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

✅ CSS-i osas saate oma lehe paigutada vastavalt oma soovile. Võtke veidi aega ja tehke leht visuaalselt atraktiivsemaks:

- Valige erinev font
- Värvige pealkirjad
- Muutke elementide suurust

## JavaScript

Kui meie kasutajaliides on loodud, keskendume JavaScriptile, mis pakub loogikat. Jagame selle mitmeks etapiks:

- [Konstantide loomine](../../../../4-typing-game/typing-game)
- [Sündmuste kuulaja mängu alustamiseks](../../../../4-typing-game/typing-game)
- [Sündmuste kuulaja kirjutamiseks](../../../../4-typing-game/typing-game)

Kuid kõigepealt looge uus fail nimega **script.js**.

### Konstantide lisamine

Meil on vaja mõningaid elemente, et muuta programmeerimine lihtsamaks. Jällegi, nagu retseptis, on siin, mida me vajame:

- Massiiv kõigi tsitaatide loendiga
- Tühi massiiv praeguse tsitaadi sõnade salvestamiseks
- Koht, kus salvestada sõna indeks, mida mängija praegu kirjutab
- Aeg, millal mängija klõpsas starti

Samuti vajame viiteid kasutajaliidese elementidele:

- Tekstikast (**typed-value**)
- Tsitaadi kuvamine (**quote**)
- Sõnum (**message**)

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

✅ Lisage oma mängule rohkem tsitaate

> **NOTE:** Saame elemente koodis igal ajal hankida, kasutades `document.getElementById`. Kuna viitame neile elementidele regulaarselt, väldime stringiliteralide kirjavigu, kasutades konstante. Raamistikud nagu [Vue.js](https://vuejs.org/) või [React](https://reactjs.org/) aitavad teil paremini hallata koodi tsentraliseerimist.

Võtke hetk, et vaadata videot `const`, `let` ja `var` kasutamise kohta.

[![Muutuja tüübid](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Muutuja tüübid")

> 🎥 Klõpsake ülaloleval pildil, et vaadata videot muutujatest.

### Alustamisloogika lisamine

Mängu alustamiseks klõpsab mängija start-nuppu. Loomulikult me ei tea, millal nad starti klõpsavad. Siin tuleb mängu [sündmuste kuulaja](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Sündmuste kuulaja võimaldab meil oodata, et midagi juhtub (sündmus), ja täita koodi vastuseks. Meie puhul tahame täita koodi, kui kasutaja klõpsab starti.

Kui kasutaja klõpsab **start**, peame valima tsitaadi, seadistama kasutajaliidese ja seadistama praeguse sõna ja ajastuse jälgimise. Allpool on JavaScript, mida peate lisama; arutame seda pärast skriptiplokki.

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

Vaatame koodi lähemalt!

- Sõnade jälgimise seadistamine
  - [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) ja [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) kasutamine võimaldab meil juhuslikult valida tsitaadi `quotes` massiivist
  - Muudame `quote` massiiviks `words`, et saaksime jälgida sõna, mida mängija praegu kirjutab
  - `wordIndex` määratakse väärtuseks 0, kuna mängija alustab esimesest sõnast
- Kasutajaliidese seadistamine
  - Loome `spanWords` massiivi, mis sisaldab iga sõna `span` elemendi sees
    - See võimaldab meil kuvada sõna ekraanil esile tõstetuna
  - Kasutame `join`, et luua string, mida saame kasutada `quoteElement` `innerHTML` värskendamiseks
    - See kuvab tsitaadi mängijale
  - Määrame esimese `span` elemendi `className` väärtuseks `highlight`, et tõsta see kollaselt esile
  - Puhastame `messageElement` määrates `innerText` väärtuseks `''`
- Tekstikasti seadistamine
  - Kustutame praeguse `typedValueElement` `value`
  - Määrame `focus` `typedValueElement`-ile
- Käivitame taimeri, kutsudes `getTime`

### Kirjutamisloogika lisamine

Kui mängija kirjutab, tõstetakse esile `input` sündmus. See sündmuste kuulaja kontrollib, kas mängija kirjutab sõna õigesti, ja haldab mängu praegust olekut. Tagasi **script.js**-i juurde, lisage järgmine kood lõppu. Arutame seda hiljem.

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

Vaatame koodi lähemalt! Alustame praeguse sõna ja mängija poolt seni kirjutatud väärtuse haaramisega. Seejärel kontrollime järjestikku, kas tsitaat on lõpetatud, sõna on lõpetatud, sõna on õige või (lõpuks), kas on viga.

- Tsitaat on lõpetatud, kui `typedValue` on võrdne `currentWord`-iga ja `wordIndex` on võrdne ühe võrra väiksemaga kui `words` pikkus
  - Arvutame `elapsedTime`, lahutades `startTime` praegusest ajast
  - Jagame `elapsedTime` 1,000-ga, et teisendada millisekundid sekunditeks
  - Kuvame edukuse sõnumi
- Sõna on lõpetatud, kui `typedValue` lõpeb tühikuga (sõna lõpp) ja `typedValue` on võrdne `currentWord`-iga
  - Määrame `typedElement` `value` väärtuseks `''`, et võimaldada järgmise sõna kirjutamist
  - Suurendame `wordIndex`, et liikuda järgmise sõna juurde
  - Läbime kõik `quoteElement` `childNodes`, et määrata `className` väärtuseks `''`, et taastada vaikimisi kuvamine
  - Määrame praeguse sõna `className` väärtuseks `highlight`, et tähistada seda kui järgmist sõna, mida kirjutada
- Sõna on praegu õigesti kirjutatud (kuid mitte lõpetatud), kui `currentWord` algab `typedValue`-ga
  - Veendume, et `typedValueElement` kuvatakse vaikimisi, kustutades `className`
- Kui oleme siiani jõudnud, on viga
  - Määrame `typedValueElement` `className` väärtuseks `error`

## Testige oma rakendust

Olete jõudnud lõpuni! Viimane samm on veenduda, et meie rakendus töötab. Proovige seda! Ärge muretsege, kui esineb vigu; **kõigil arendajatel** on vigu. Uurige sõnumeid ja tehke vajadusel silumist.

Klõpsake **start** ja hakake kirjutama! See peaks välja nägema umbes nagu animatsioon, mida varem nägime.

![Mängu animatsioon tegevuses](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Väljakutse

Lisage rohkem funktsionaalsust

- Keelake `input` sündmuste kuulaja lõpetamisel ja lubage see uuesti, kui nuppu klõpsatakse
- Keela tekstikast, kui mängija lõpetab tsitaadi
- Kuvage modaalne dialoogikast edusõnumiga
- Salvestage kõrged punktisummad, kasutades [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Loengu järgne viktoriin

[Loengu järgne viktoriin](https://ff-quizzes.netlify.app/web/quiz/22)

## Ülevaade ja iseseisev õppimine

Lugege [kõikide sündmuste kohta](https://developer.mozilla.org/docs/Web/Events), mis on veebibrauseri kaudu arendajale kättesaadavad, ja mõelge olukordadele, kus te neid kasutaksite.

## Ülesanne

[Loo uus klaviatuurimäng](assignment.md)

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.