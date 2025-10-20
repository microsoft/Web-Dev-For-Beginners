<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6b04a23d9d5e9edb252c909af4fb5f31",
  "translation_date": "2025-10-20T21:08:59+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "tl"
}
-->
# Paggawa ng Laro Gamit ang Mga Kaganapan

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/21)

## Event-driven programming

Kapag gumagawa ng application na nakabase sa browser, nagbibigay tayo ng graphical user interface (GUI) para magamit ng user sa pakikipag-ugnayan sa ginawa natin. Ang pinakakaraniwang paraan ng pakikipag-ugnayan sa browser ay sa pamamagitan ng pag-click at pag-type sa iba't ibang elemento. Ang hamon na kinakaharap natin bilang developer ay hindi natin alam kung kailan nila gagawin ang mga operasyong ito!

Ang [Event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming) ay ang tawag sa uri ng programming na kailangan natin gawin upang makagawa ng GUI. Kung susuriin natin ang pariralang ito, makikita natin ang pangunahing salita dito ay **event**. Ang [Event](https://www.merriam-webster.com/dictionary/event), ayon sa Merriam-Webster, ay tinutukoy bilang "isang bagay na nangyayari". Perpektong inilalarawan nito ang ating sitwasyon. Alam natin na may mangyayari kung saan nais nating magpatupad ng ilang code bilang tugon, ngunit hindi natin alam kung kailan ito magaganap.

Ang paraan upang markahan ang isang bahagi ng code na nais nating ipatupad ay sa pamamagitan ng paggawa ng function. Kapag iniisip natin ang [procedural programming](https://en.wikipedia.org/wiki/Procedural_programming), ang mga function ay tinatawag sa isang tiyak na pagkakasunod-sunod. Ang parehong bagay ay magiging totoo sa event-driven programming. Ang pagkakaiba ay **kung paano** tatawagin ang mga function.

Upang pamahalaan ang mga kaganapan (pag-click ng button, pag-type, atbp.), nagrerehistro tayo ng **event listeners**. Ang event listener ay isang function na nakikinig sa isang kaganapan na magaganap at nagpapatupad bilang tugon. Ang mga event listener ay maaaring mag-update ng UI, gumawa ng mga tawag sa server, o anumang iba pang kailangang gawin bilang tugon sa aksyon ng user. Nagdaragdag tayo ng event listener gamit ang [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), at nagbibigay ng function na ipapatupad.

> **NOTE:** Mahalaga ring i-highlight na mayroong maraming paraan upang lumikha ng mga event listener. Maaari kang gumamit ng anonymous functions, o lumikha ng mga may pangalan. Maaari kang gumamit ng iba't ibang shortcut, tulad ng pagtatakda ng `click` property, o paggamit ng `addEventListener`. Sa ating exercise, magpo-focus tayo sa `addEventListener` at anonymous functions, dahil ito ang pinakakaraniwang teknik na ginagamit ng mga web developer. Ito rin ang pinaka-flexible, dahil gumagana ang `addEventListener` para sa lahat ng kaganapan, at ang pangalan ng kaganapan ay maaaring ibigay bilang parameter.

### Karaniwang mga kaganapan

Mayroong [maraming kaganapan](https://developer.mozilla.org/docs/Web/Events) na magagamit mo upang pakinggan kapag gumagawa ng application. Halos anumang ginagawa ng user sa isang pahina ay nagdudulot ng kaganapan, na nagbibigay sa iyo ng maraming kapangyarihan upang matiyak na makakamit nila ang karanasang nais mo. Sa kabutihang-palad, karaniwan ay kakailanganin mo lamang ang ilang mga kaganapan. Narito ang ilan sa mga karaniwang kaganapan (kasama ang dalawa na gagamitin natin sa paggawa ng ating laro):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Ang user ay nag-click sa isang bagay, karaniwang isang button o hyperlink
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Ang user ay nag-click gamit ang kanang pindutan ng mouse
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Ang user ay nag-highlight ng ilang teksto
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Ang user ay nag-input ng ilang teksto

## Paggawa ng Laro

Gagawa tayo ng isang laro upang tuklasin kung paano gumagana ang mga kaganapan sa JavaScript. Ang ating laro ay susubok sa kakayahan ng isang manlalaro sa pag-type, na isa sa mga pinaka-underrated na kasanayan na dapat taglayin ng lahat ng developer. Dapat tayong magpraktis ng pag-type! Ang pangkalahatang daloy ng laro ay ganito:

- Ang manlalaro ay magki-click sa start button at ipapakita ang isang quote na kailangang i-type
- Ang manlalaro ay magta-type ng quote nang mabilis hangga't kaya niya sa isang textbox
  - Kapag natapos ang bawat salita, ang susunod ay naka-highlight
  - Kung may typo ang manlalaro, ang textbox ay magiging pula
  - Kapag natapos ng manlalaro ang quote, ipapakita ang isang success message kasama ang oras na ginugol

Simulan na natin ang paggawa ng ating laro, at matutunan ang tungkol sa mga kaganapan!

### File Structure

Kakailanganin natin ng tatlong kabuuang file: **index.html**, **script.js**, at **style.css**. Simulan natin ang pag-set up ng mga ito upang mas mapadali ang ating trabaho.

- Gumawa ng bagong folder para sa iyong trabaho sa pamamagitan ng pagbukas ng console o terminal window at pag-issue ng sumusunod na command:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Buksan ang Visual Studio Code

```bash
code .
```

- Magdagdag ng tatlong file sa folder sa Visual Studio Code na may mga sumusunod na pangalan:
  - index.html
  - script.js
  - style.css

## Gumawa ng User Interface

Kung susuriin natin ang mga kinakailangan, alam natin na kakailanganin natin ng ilang elemento sa ating HTML page. Parang isang recipe ito, kung saan kailangan natin ng ilang sangkap:

- Lugar para ipakita ang quote na kailangang i-type ng user
- Lugar para ipakita ang anumang mensahe, tulad ng success message
- Isang textbox para sa pag-type
- Isang start button

Ang bawat isa sa mga ito ay kakailanganin ng mga ID upang magamit natin ang mga ito sa ating JavaScript. Magdaragdag din tayo ng mga reference sa CSS at JavaScript files na gagawin natin.

Gumawa ng bagong file na pinangalanang **index.html**. Idagdag ang sumusunod na HTML:

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

### I-launch ang Application

Palaging pinakamahusay na mag-develop nang paunti-unti upang makita kung paano ang hitsura ng mga bagay. I-launch natin ang ating application. Mayroong isang kahanga-hangang extension para sa Visual Studio Code na tinatawag na [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) na parehong magho-host ng iyong application nang lokal at magre-refresh ng browser tuwing magse-save ka.

- I-install ang [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) sa pamamagitan ng pagsunod sa link at pag-click sa **Install**
  - Hihilingin sa iyo ng browser na buksan ang Visual Studio Code, at pagkatapos ay hihilingin ng Visual Studio Code na gawin ang pag-install
  - I-restart ang Visual Studio Code kung kinakailangan
- Kapag na-install na, sa Visual Studio Code, i-click ang Ctrl-Shift-P (o Cmd-Shift-P) upang buksan ang command palette
- I-type ang **Live Server: Open with Live Server**
  - Sisimulan ng Live Server ang pagho-host ng iyong application
- Buksan ang browser at pumunta sa **https://localhost:5500**
- Dapat mo nang makita ang pahinang ginawa mo!

Magdagdag tayo ng ilang functionality.

## Magdagdag ng CSS

Sa ating HTML na nagawa na, magdagdag tayo ng CSS para sa pangunahing styling. Kailangan nating i-highlight ang salitang dapat i-type ng manlalaro, at kulayan ang textbox kung mali ang kanilang na-type. Gagawin natin ito gamit ang dalawang klase.

Gumawa ng bagong file na pinangalanang **style.css** at idagdag ang sumusunod na syntax.

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

✅ Pagdating sa CSS, maaari mong i-layout ang iyong pahina ayon sa gusto mo. Maglaan ng kaunting oras upang gawing mas kaakit-akit ang pahina:

- Pumili ng ibang font
- Kulayan ang mga header
- I-resize ang mga item

## JavaScript

Sa ating UI na nagawa na, oras na upang ituon ang ating pansin sa JavaScript na magbibigay ng lohika. Hahatiin natin ito sa ilang hakbang:

- [Gumawa ng mga constants](../../../../4-typing-game/typing-game)
- [Event listener para simulan ang laro](../../../../4-typing-game/typing-game)
- [Event listener para sa pag-type](../../../../4-typing-game/typing-game)

Ngunit una, gumawa ng bagong file na pinangalanang **script.js**.

### Magdagdag ng Constants

Kakailanganin natin ng ilang item upang mas mapadali ang ating programming. Muli, parang isang recipe, narito ang mga kailangan natin:

- Array na may listahan ng lahat ng quotes
- Pansamantalang array para sa lahat ng mga salita sa kasalukuyang quote
- Espasyo para sa index ng salitang kasalukuyang tina-type ng manlalaro
- Ang oras na nag-click ang manlalaro sa start

Kakailanganin din natin ng mga reference sa mga elemento ng UI:

- Ang textbox (**typed-value**)
- Ang display ng quote (**quote**)
- Ang mensahe (**message**)

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

✅ Magdagdag ng mas maraming quotes sa iyong laro

> **NOTE:** Maaari nating kunin ang mga elemento anumang oras sa code gamit ang `document.getElementById`. Dahil madalas nating tinutukoy ang mga elementong ito, iiwasan natin ang mga typo sa string literals sa pamamagitan ng paggamit ng constants. Ang mga framework tulad ng [Vue.js](https://vuejs.org/) o [React](https://reactjs.org/) ay makakatulong sa iyo na mas mahusay na pamahalaan ang pag-centralize ng iyong code.

Maglaan ng oras upang manood ng video tungkol sa paggamit ng `const`, `let`, at `var`

[![Mga Uri ng Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Mga Uri ng Variables")

> 🎥 I-click ang imahe sa itaas para sa video tungkol sa mga variables.

### Magdagdag ng Start Logic

Upang simulan ang laro, magki-click ang manlalaro sa start. Siyempre, hindi natin alam kung kailan sila magki-click sa start. Dito papasok ang [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Ang event listener ay magpapahintulot sa atin na makinig sa isang bagay na magaganap (isang kaganapan) at magpatupad ng code bilang tugon. Sa ating kaso, nais nating magpatupad ng code kapag nag-click ang user sa start.

Kapag nag-click ang user sa **start**, kailangan nating pumili ng quote, i-setup ang user interface, at i-setup ang tracking para sa kasalukuyang salita at timing. Narito ang JavaScript na kailangan mong idagdag; tatalakayin natin ito pagkatapos ng script block.

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

I-breakdown natin ang code!

- I-setup ang word tracking
  - Ang paggamit ng [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) at [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) ay nagpapahintulot sa atin na random na pumili ng quote mula sa `quotes` array
  - I-convert ang `quote` sa isang array ng `words` upang masubaybayan ang salitang kasalukuyang tina-type ng manlalaro
  - Ang `wordIndex` ay itinatakda sa 0, dahil magsisimula ang manlalaro sa unang salita
- I-setup ang UI
  - Gumawa ng array ng `spanWords`, na naglalaman ng bawat salita sa loob ng isang `span` element
    - Papayagan tayo nitong i-highlight ang salita sa display
  - `join` ang array upang makagawa ng string na magagamit natin upang i-update ang `innerHTML` sa `quoteElement`
    - Ipapakita nito ang quote sa manlalaro
  - Itakda ang `className` ng unang `span` element sa `highlight` upang i-highlight ito bilang dilaw
  - Linisin ang `messageElement` sa pamamagitan ng pagtatakda ng `innerText` sa `''`
- I-setup ang textbox
  - I-clear ang kasalukuyang `value` sa `typedValueElement`
  - Itakda ang `focus` sa `typedValueElement`
- Simulan ang timer sa pamamagitan ng pagtawag sa `getTime`

### Magdagdag ng Typing Logic

Habang nagta-type ang manlalaro, isang `input` event ang itataas. Ang event listener na ito ay magche-check upang matiyak na tama ang pagta-type ng manlalaro, at pamahalaan ang kasalukuyang status ng laro. Bumalik sa **script.js**, idagdag ang sumusunod na code sa dulo. I-breakdown natin ito pagkatapos.

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

I-breakdown natin ang code! Nagsisimula tayo sa pagkuha ng kasalukuyang salita at ang value na na-type na ng manlalaro. Pagkatapos ay mayroon tayong waterfall logic, kung saan sine-check natin kung tapos na ang quote, tapos na ang salita, tama ang salita, o (sa wakas), kung may error.

- Tapos na ang quote, na ipinapakita ng `typedValue` na katumbas ng `currentWord`, at `wordIndex` na katumbas ng isa na mas mababa sa `length` ng `words`
  - I-calculate ang `elapsedTime` sa pamamagitan ng pagbabawas ng `startTime` mula sa kasalukuyang oras
  - I-divide ang `elapsedTime` sa 1,000 upang i-convert mula milliseconds sa seconds
  - Ipakita ang success message
- Tapos na ang salita, na ipinapakita ng `typedValue` na nagtatapos sa isang space (ang dulo ng isang salita) at `typedValue` na katumbas ng `currentWord`
  - Itakda ang `value` sa `typedElement` upang maging `''` upang payagan ang susunod na salita na i-type
  - I-increment ang `wordIndex` upang lumipat sa susunod na salita
  - I-loop sa lahat ng `childNodes` ng `quoteElement` upang itakda ang `className` sa `''` upang bumalik sa default na display
  - Itakda ang `className` ng kasalukuyang salita sa `highlight` upang i-flag ito bilang susunod na salita na i-type
- Ang salita ay kasalukuyang tama ang na-type (ngunit hindi pa tapos), na ipinapakita ng `currentWord` na nagsisimula sa `typedValue`
  - Tiyakin na ang `typedValueElement` ay ipinapakita bilang default sa pamamagitan ng pag-clear sa `className`
- Kung umabot tayo sa puntong ito, may error
  - Itakda ang `className` sa `typedValueElement` sa `error`

## Subukan ang Iyong Application

Nakarating ka na sa dulo! Ang huling hakbang ay tiyakin na gumagana ang ating application. Subukan mo ito! Huwag mag-alala kung may mga error; **lahat ng developer** ay may mga error. Suriin ang mga mensahe at i-debug kung kinakailangan.

I-click ang **start**, at simulan ang pag-type! Dapat itong magmukhang katulad ng animation na nakita natin kanina.

![Animation ng laro habang ginagamit](../../../../4-typing-game/images/demo.gif)

---

## Hamon ng GitHub Copilot Agent 🎮

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:
**Paglalarawan:** Palawakin ang typing game sa pamamagitan ng pag-implementa ng isang difficulty system na nag-aadjust batay sa performance ng manlalaro. Ang hamong ito ay makakatulong sa'yo na magpraktis ng advanced na event handling, data analysis, at dynamic na pag-update ng UI.

**Prompt:** Gumawa ng difficulty adjustment system para sa typing game na:
1. Nagta-track ng bilis ng pag-type ng manlalaro (mga salita kada minuto) at porsyento ng katumpakan
2. Awtomatikong nag-aadjust sa tatlong antas ng kahirapan: Madali (simpleng mga quote), Katamtaman (kasalukuyang mga quote), Mahirap (komplikadong mga quote na may punctuation)
3. Ipinapakita ang kasalukuyang antas ng kahirapan at mga istatistika ng manlalaro sa UI
4. Nagpapatupad ng streak counter na nagpapataas ng kahirapan pagkatapos ng 3 sunod-sunod na magagandang performance
5. Nagdadagdag ng visual feedback (mga kulay, animasyon) upang ipakita ang mga pagbabago sa kahirapan

Idagdag ang mga kinakailangang HTML elements, CSS styles, at JavaScript functions upang maipatupad ang feature na ito. Siguraduhing may tamang error handling at nananatiling accessible ang laro gamit ang angkop na ARIA labels.

## 🚀 Hamon

Magdagdag ng higit pang functionality

- I-disable ang `input` event listener kapag natapos na, at i-enable ulit ito kapag na-click ang button
- I-disable ang textbox kapag natapos ng manlalaro ang quote
- Magpakita ng modal dialog box na may success message
- I-store ang high scores gamit ang [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/22)

## Review at Pag-aaral sa Sarili

Magbasa tungkol sa [lahat ng mga event na available](https://developer.mozilla.org/docs/Web/Events) sa developer sa pamamagitan ng web browser, at isaalang-alang ang mga senaryo kung kailan mo gagamitin ang bawat isa.

## Takdang-Aralin

[Gumawa ng bagong keyboard game](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.