<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-28T04:25:49+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "sw"
}
-->
# Kuunda Mchezo kwa Kutumia Matukio

## Jaribio Kabla ya Somo

[Jaribio kabla ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Uprogramishaji Unaotegemea Matukio

Unapounda programu inayotegemea kivinjari, tunatoa kiolesura cha mtumiaji (GUI) kwa mtumiaji kutumia wakati wa kuingiliana na kile tulichounda. Njia ya kawaida ya kuingiliana na kivinjari ni kupitia kubofya na kuandika kwenye vipengele mbalimbali. Changamoto tunayokutana nayo kama watengenezaji ni kwamba hatujui ni lini mtumiaji atafanya shughuli hizi!

[Uprogramishaji unaotegemea matukio](https://en.wikipedia.org/wiki/Event-driven_programming) ni jina la aina ya uprogramishaji tunaohitaji kufanya ili kuunda GUI yetu. Tukichambua kidogo, tunaona neno kuu hapa ni **tukio**. [Tukio](https://www.merriam-webster.com/dictionary/event), kulingana na Merriam-Webster, linafafanuliwa kama "kitu kinachotokea". Hii inaelezea hali yetu kikamilifu. Tunajua kitu kitatokea ambacho tunataka kutekeleza msimbo fulani kama jibu, lakini hatujui ni lini kitatokea.

Njia tunayotumia kuashiria sehemu ya msimbo tunayotaka kutekeleza ni kwa kuunda kazi (function). Tunapofikiria kuhusu [uprogramishaji wa utaratibu](https://en.wikipedia.org/wiki/Procedural_programming), kazi hufanywa kwa mpangilio maalum. Hili pia litakuwa kweli kwa uprogramishaji unaotegemea matukio. Tofauti ni **jinsi** kazi zitakavyoitwa.

Ili kushughulikia matukio (kubofya kitufe, kuandika, n.k.), tunasajili **wasikilizaji wa matukio**. Msikilizaji wa tukio ni kazi inayosikiliza tukio litokee na kutekeleza kama jibu. Wasikilizaji wa matukio wanaweza kusasisha UI, kupiga simu kwa seva, au kufanya chochote kingine kinachohitajika kama jibu kwa kitendo cha mtumiaji. Tunaongeza msikilizaji wa tukio kwa kutumia [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), na kutoa kazi ya kutekeleza.

> **NOTE:** Ni vyema kuangazia kwamba kuna njia nyingi za kuunda wasikilizaji wa matukio. Unaweza kutumia kazi zisizo na majina, au kuunda zile zenye majina. Unaweza kutumia njia za mkato mbalimbali, kama kuweka mali ya `click`, au kutumia `addEventListener`. Katika zoezi letu, tutaangazia `addEventListener` na kazi zisizo na majina, kwani hii ndiyo mbinu inayotumiwa zaidi na watengenezaji wa wavuti. Pia ni mbinu inayobadilika zaidi, kwani `addEventListener` inafanya kazi kwa matukio yote, na jina la tukio linaweza kutolewa kama parameter.

### Matukio ya Kawaida

Kuna [matukio mengi](https://developer.mozilla.org/docs/Web/Events) yanayopatikana kwako kusikiliza unapounda programu. Kimsingi, chochote mtumiaji anachofanya kwenye ukurasa huchochea tukio, ambalo linakupa nguvu nyingi kuhakikisha wanapata uzoefu unaotaka. Kwa bahati nzuri, mara nyingi utahitaji matukio machache tu. Hapa kuna machache ya kawaida (ikiwemo mawili tutakayotumia tunapounda mchezo wetu):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Mtumiaji alibofya kitu, kawaida kitufe au kiungo
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Mtumiaji alibofya kitufe cha kulia cha panya
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Mtumiaji alichagua maandishi fulani
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Mtumiaji aliingiza maandishi fulani

## Kuunda Mchezo

Tutaunda mchezo ili kuchunguza jinsi matukio yanavyofanya kazi katika JavaScript. Mchezo wetu utajaribu ujuzi wa kuandika wa mchezaji, ambao ni mojawapo ya ujuzi unaopuuzwa sana ambao watengenezaji wote wanapaswa kuwa nao. Sote tunapaswa kufanya mazoezi ya kuandika! Mtiririko wa jumla wa mchezo utaonekana hivi:

- Mchezaji anabofya kitufe cha kuanza na kupewa nukuu ya kuandika
- Mchezaji anaandika nukuu haraka iwezekanavyo kwenye kisanduku cha maandishi
  - Kila neno linapokamilika, linalofuata linaangaziwa
  - Ikiwa mchezaji atafanya kosa la tahajia, kisanduku cha maandishi kinabadilika kuwa nyekundu
  - Mchezaji anapokamilisha nukuu, ujumbe wa mafanikio unaonyeshwa pamoja na muda uliotumika

Hebu tujenge mchezo wetu, na tujifunze kuhusu matukio!

### Muundo wa Faili

Tutahitaji jumla ya faili tatu: **index.html**, **script.js** na **style.css**. Hebu tuanze kwa kuziandaa ili kufanya maisha yetu yawe rahisi kidogo.

- Unda folda mpya kwa kazi yako kwa kufungua dirisha la koni au terminal na kutoa amri ifuatayo:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Fungua Visual Studio Code

```bash
code .
```

- Ongeza faili tatu kwenye folda katika Visual Studio Code zenye majina yafuatayo:
  - index.html
  - script.js
  - style.css

## Unda Kiolesura cha Mtumiaji

Tukichunguza mahitaji, tunajua tutahitaji vipengele vichache kwenye ukurasa wetu wa HTML. Hii ni kama mapishi, ambapo tunahitaji viungo:

- Mahali pa kuonyesha nukuu kwa mtumiaji kuandika
- Mahali pa kuonyesha ujumbe wowote, kama ujumbe wa mafanikio
- Kisanduku cha maandishi kwa kuandika
- Kitufe cha kuanza

Kila moja ya hivi vitahitaji vitambulisho (IDs) ili tuweze kufanya kazi navyo katika JavaScript yetu. Pia tutaongeza marejeleo kwa faili za CSS na JavaScript tunazotaka kuunda.

Unda faili mpya iitwayo **index.html**. Ongeza HTML ifuatayo:

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

### Zindua Programu

Ni bora kila wakati kuendeleza hatua kwa hatua ili kuona jinsi mambo yanavyoonekana. Hebu tuzindue programu yetu. Kuna kiendelezi kizuri kwa Visual Studio Code kinachoitwa [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) ambacho kitaendesha programu yako kwa ndani na kusasisha kivinjari kila unapohifadhi.

- Sakinisha [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) kwa kufuata kiungo na kubofya **Install**
  - Utaombwa na kivinjari kufungua Visual Studio Code, kisha na Visual Studio Code kufanya usakinishaji
  - Anzisha upya Visual Studio Code ikiwa utaombwa
- Mara baada ya kusakinishwa, katika Visual Studio Code, bofya Ctrl-Shift-P (au Cmd-Shift-P) kufungua paleti ya amri
- Andika **Live Server: Open with Live Server**
  - Live Server itaanza kuendesha programu yako
- Fungua kivinjari na uende kwenye **https://localhost:5500**
- Sasa unapaswa kuona ukurasa uliouunda!

Hebu tuongeze utendakazi.

## Ongeza CSS

Kwa HTML yetu kuundwa, hebu tuongeze CSS kwa mtindo wa msingi. Tunahitaji kuangazia neno ambalo mchezaji anapaswa kuandika, na kubadilisha rangi ya kisanduku cha maandishi ikiwa kile walichoandika si sahihi. Tutafanya hivi kwa madarasa mawili.

Unda faili mpya iitwayo **style.css** na ongeza sintaksia ifuatayo.

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

✅ Kuhusu CSS, unaweza kupanga ukurasa wako jinsi unavyopenda. Chukua muda kidogo na ufanye ukurasa uonekane wa kuvutia zaidi:

- Chagua fonti tofauti
- Ongeza rangi kwenye vichwa vya habari
- Badilisha ukubwa wa vipengele

## JavaScript

Kwa UI yetu kuundwa, ni wakati wa kuzingatia JavaScript ambayo itatoa mantiki. Tutagawanya hili katika hatua chache:

- [Unda constants](../../../../4-typing-game/typing-game)
- [Msikilizaji wa tukio la kuanza mchezo](../../../../4-typing-game/typing-game)
- [Msikilizaji wa tukio la kuandika](../../../../4-typing-game/typing-game)

Lakini kwanza, unda faili mpya iitwayo **script.js**.

### Ongeza Constants

Tutahitaji vitu vichache ili kufanya maisha yetu yawe rahisi kwa uprogramishaji. Tena, sawa na mapishi, hapa kuna tunachohitaji:

- Orodha ya nukuu zote
- Orodha tupu ya kuhifadhi maneno yote ya nukuu ya sasa
- Nafasi ya kuhifadhi faharasa ya neno ambalo mchezaji analoandika kwa sasa
- Muda ambao mchezaji alibofya kuanza

Pia tutahitaji marejeleo kwa vipengele vya UI:

- Kisanduku cha maandishi (**typed-value**)
- Onyesho la nukuu (**quote**)
- Ujumbe (**message**)

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

✅ Endelea na ongeza nukuu zaidi kwenye mchezo wako

> **NOTE:** Tunaweza kupata vipengele wakati wowote tunapotaka kwenye msimbo kwa kutumia `document.getElementById`. Kwa sababu tutarejelea vipengele hivi mara kwa mara, tutaepuka makosa ya tahajia kwa kutumia constants. Mfumo kama [Vue.js](https://vuejs.org/) au [React](https://reactjs.org/) unaweza kukusaidia kudhibiti msimbo wako vizuri zaidi.

Chukua dakika moja kutazama video kuhusu kutumia `const`, `let` na `var`

[![Aina za vigezo](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Aina za vigezo")

> 🎥 Bofya picha hapo juu kwa video kuhusu vigezo.

### Ongeza Mantiki ya Kuanza

Ili kuanza mchezo, mchezaji atabofya kuanza. Bila shaka, hatujui ni lini watabofya kuanza. Hapa ndipo [msikilizaji wa tukio](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) anapokuja. Msikilizaji wa tukio ataturuhusu kusikiliza kitu kitokee (tukio) na kutekeleza msimbo kama jibu. Katika hali yetu, tunataka kutekeleza msimbo wakati mtumiaji anapobofya kuanza.

Mtumiaji anapobofya **start**, tunahitaji kuchagua nukuu, kuandaa kiolesura cha mtumiaji, na kuandaa ufuatiliaji wa neno la sasa na muda. Hapa chini kuna JavaScript unayohitaji kuongeza; tutajadili baada ya kizuizi cha msimbo.

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

Hebu tuchambue msimbo!

- Andaa ufuatiliaji wa maneno
  - Kutumia [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) na [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) kunaturuhusu kuchagua nukuu kwa bahati nasibu kutoka kwenye safu ya `quotes`
  - Tunabadilisha `quote` kuwa safu ya `words` ili tuweze kufuatilia neno ambalo mchezaji analoandika kwa sasa
  - `wordIndex` inakuwa 0, kwani mchezaji ataanza na neno la kwanza
- Andaa UI
  - Unda safu ya `spanWords`, ambayo ina kila neno ndani ya kipengele cha `span`
    - Hii itaturuhusu kuangazia neno kwenye onyesho
  - `join` safu ili kuunda kamba ambayo tunaweza kutumia kusasisha `innerHTML` kwenye `quoteElement`
    - Hii itaonyesha nukuu kwa mchezaji
  - Weka `className` ya kipengele cha kwanza cha `span` kuwa `highlight` ili kuangazia kama njano
  - Safisha `messageElement` kwa kuweka `innerText` kuwa `''`
- Andaa kisanduku cha maandishi
  - Futa `value` ya sasa kwenye `typedValueElement`
  - Weka `focus` kwa `typedValueElement`
- Anzisha kipima muda kwa kuita `getTime`

### Ongeza Mantiki ya Kuandika

Mchezaji anapoandika, tukio la `input` litachochewa. Msikilizaji wa tukio hili atahakikisha mchezaji anaandika neno kwa usahihi, na kushughulikia hali ya sasa ya mchezo. Tukirudi kwenye **script.js**, ongeza msimbo ufuatao mwishoni. Tutauchambua baadaye.

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

Hebu tuchambue msimbo! Tunaanza kwa kuchukua neno la sasa na thamani ambayo mchezaji ameandika hadi sasa. Kisha tuna mantiki ya mfululizo, ambapo tunaangalia ikiwa nukuu imekamilika, neno limekamilika, neno ni sahihi, au (hatimaye), ikiwa kuna kosa.

- Nukuu imekamilika, inayoonyeshwa na `typedValue` kuwa sawa na `currentWord`, na `wordIndex` kuwa sawa na moja pungufu ya `length` ya `words`
  - Hesabu `elapsedTime` kwa kutoa `startTime` kutoka kwa muda wa sasa
  - Gawanya `elapsedTime` kwa 1,000 kubadilisha kutoka milisekunde hadi sekunde
  - Onyesha ujumbe wa mafanikio
- Neno limekamilika, inayoonyeshwa na `typedValue` kuishia na nafasi (mwisho wa neno) na `typedValue` kuwa sawa na `currentWord`
  - Weka `value` kwenye `typedElement` kuwa `''` kuruhusu neno linalofuata kuandikwa
  - Ongeza `wordIndex` ili kuhamia kwenye neno linalofuata
  - Pitia `childNodes` zote za `quoteElement` kuweka `className` kuwa `''` kurudisha onyesho la kawaida
  - Weka `className` ya neno la sasa kuwa `highlight` kuashiria kama neno linalofuata kuandika
- Neno limeandikwa kwa usahihi (lakini halijakamilika), inayoonyeshwa na `currentWord` kuanza na `typedValue`
  - Hakikisha `typedValueElement` linaonyeshwa kama kawaida kwa kufuta `className`
- Ikiwa tumefika hapa, tuna kosa
  - Weka `className` kwenye `typedValueElement` kuwa `error`

## Jaribu Programu Yako

Umefika mwisho! Hatua ya mwisho ni kuhakikisha programu yetu inafanya kazi. Jaribu! Usijali ikiwa kuna makosa; **watengenezaji wote** hukutana na makosa. Chunguza ujumbe na urekebishe kama inavyohitajika.

Bofya **start**, na anza kuandika! Inapaswa kuonekana kama uhuishaji tulioona awali.

![Uhuishaji wa mchezo ukiwa kazini](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Changamoto

Ongeza utendakazi zaidi

- Lemaza msikilizaji wa tukio la `input` baada ya kukamilika, na uuwezeshe tena wakati kitufe kinapobofya
- Lemaza kisanduku cha maandishi wakati mchezaji anakamilisha nukuu
- Onyesha kisanduku cha mazungumzo cha modal chenye ujumbe wa mafanikio
- Hifadhi alama za juu ukitumia [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Jaribio Baada ya Somo

[Jaribio baada ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Mapitio na Kujisomea

Soma kuhusu [matukio yote yanayopatikana](https://developer.mozilla.org/docs/Web/Events) kwa msanidi kupitia kivinjari cha wavuti, na fikiria hali ambazo ungeweza kutumia kila moja.

## Kazi

[Tengeneza mchezo mpya wa kibodi](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutokuelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.