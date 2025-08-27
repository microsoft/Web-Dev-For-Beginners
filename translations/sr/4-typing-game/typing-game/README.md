<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-27T23:09:36+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "sr"
}
-->
# Прављење игре користећи догађаје

## Квиз пре предавања

[Квиз пре предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Програмирање засновано на догађајима

Када правимо апликацију за веб прегледач, обезбеђујемо графички кориснички интерфејс (GUI) који корисник користи за интеракцију са оним што смо направили. Најчешћи начин интеракције са прегледачем је кликом и куцањем у различитим елементима. Изазов са којим се суочавамо као програмери је то што не знамо када ће корисник извршити те операције!

[Програмирање засновано на догађајима](https://en.wikipedia.org/wiki/Event-driven_programming) је назив за тип програмирања који нам је потребан да бисмо направили наш GUI. Ако мало разложимо овај израз, видимо да је кључна реч овде **догађај**. [Догађај](https://www.merriam-webster.com/dictionary/event), према Merriam-Webster речнику, дефинисан је као "нешто што се дешава". Ово савршено описује нашу ситуацију. Знамо да ће се нешто догодити за шта желимо да извршимо неки код као одговор, али не знамо када ће се то десити.

Начин на који означавамо део кода који желимо да извршимо је креирањем функције. Када размишљамо о [процедуралном програмирању](https://en.wikipedia.org/wiki/Procedural_programming), функције се позивају одређеним редоследом. Исто ће важити и за програмирање засновано на догађајима. Разлика је у томе **како** ће функције бити позване.

Да бисмо обрадили догађаје (кликове на дугмад, куцање итд.), региструјемо **слушаоце догађаја**. Слушалац догађаја је функција која слуша да ли се догађај дешава и извршава се као одговор. Слушаоци догађаја могу ажурирати UI, позивати сервер или радити било шта друго што је потребно као одговор на акцију корисника. Додајемо слушаоца догађаја користећи [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) и пружајући функцију за извршење.

> **NOTE:** Вреди нагласити да постоји много начина за креирање слушалаца догађаја. Можете користити анонимне функције или креирати именоване. Можете користити различите пречице, као што је постављање `click` својства или коришћење `addEventListener`. У нашем задатку ћемо се фокусирати на `addEventListener` и анонимне функције, јер је то вероватно најчешћа техника коју веб програмери користе. Такође је најфлексибилнија, јер `addEventListener` ради за све догађаје, а име догађаја може бити обезбеђено као параметар.

### Уобичајени догађаји

Постоје [десетине догађаја](https://developer.mozilla.org/docs/Web/Events) које можете слушати приликом креирања апликације. У суштини, све што корисник ради на страници покреће догађај, што вам даје много моћи да осигурате да добије искуство које желите. Срећом, обично ће вам требати само неколико догађаја. Ево неких уобичајених (укључујући два која ћемо користити приликом креирања наше игре):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Корисник је кликнуо на нешто, обично дугме или хиперлинк
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Корисник је кликнуо десним тастером миша
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Корисник је означио неки текст
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Корисник је унео неки текст

## Прављење игре

Направићемо игру да истражимо како догађаји функционишу у JavaScript-у. Наша игра ће тестирати вештину куцања играча, што је једна од најпотцењенијих вештина коју сви програмери треба да имају. Сви бисмо требали да вежбамо куцање! Општи ток игре изгледаће овако:

- Играч кликне на дугме за почетак и добија цитат за куцање
- Играч куца цитат што брже може у текстуалном пољу
  - Како заврши сваку реч, следећа се истиче
  - Ако играч направи грешку, текстуално поље се обележава црвеном бојом
  - Када играч заврши цитат, приказује се порука о успеху са протеклим временом

Хајде да направимо нашу игру и научимо о догађајима!

### Структура фајлова

Биће нам потребна три фајла: **index.html**, **script.js** и **style.css**. Хајде да их поставимо како бисмо себи олакшали посао.

- Направите нови фолдер за ваш рад отварањем конзоле или терминала и издавањем следеће команде:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Отворите Visual Studio Code

```bash
code .
```

- Додајте три фајла у фолдер у Visual Studio Code-у са следећим именима:
  - index.html
  - script.js
  - style.css

## Креирање корисничког интерфејса

Ако истражимо захтеве, знамо да ће нам бити потребно неколико елемената на нашој HTML страници. Ово је као рецепт, где нам требају неки састојци:

- Место за приказ цитата који корисник треба да куца
- Место за приказ порука, као што је порука о успеху
- Текстуално поље за куцање
- Дугме за почетак

Сваки од ових елемената ће требати ID-еве како бисмо могли да радимо са њима у нашем JavaScript-у. Такође ћемо додати референце на CSS и JavaScript фајлове које ћемо креирати.

Направите нови фајл под именом **index.html**. Додајте следећи HTML:

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

### Покретање апликације

Увек је најбоље развијати итеративно како бисмо видели како ствари изгледају. Хајде да покренемо нашу апликацију. Постоји одличан додатак за Visual Studio Code под називом [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) који ће локално хостовати вашу апликацију и освежити прегледач сваки пут када сачувате.

- Инсталирајте [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) пратећи линк и кликом на **Install**
  - Прегледач ће вас упитати да отворите Visual Studio Code, а затим ће вас Visual Studio Code упитати да извршите инсталацију
  - Поново покрените Visual Studio Code ако вам то буде предложено
- Када је инсталиран, у Visual Studio Code-у притисните Ctrl-Shift-P (или Cmd-Shift-P) да отворите командну палету
- Укуцајте **Live Server: Open with Live Server**
  - Live Server ће почети да хостује вашу апликацију
- Отворите прегледач и идите на **https://localhost:5500**
- Сада би требало да видите страницу коју сте направили!

Хајде да додамо функционалност.

## Додавање CSS-а

Са нашим HTML-ом креираним, хајде да додамо CSS за основно стилизовање. Требаће нам да истакнемо реч коју играч треба да куца и да обојимо текстуално поље ако оно што је укуцао није тачно. Ово ћемо урадити са две класе.

Направите нови фајл под именом **style.css** и додајте следећи синтакс:

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

✅ Када је реч о CSS-у, можете распоредити своју страницу како год желите. Одвојите мало времена и учините страницу привлачнијом:

- Изаберите другачији фонт
- Обојите заглавља
- Промените величину елемената

## JavaScript

Са нашим UI-јем креираним, време је да се фокусирамо на JavaScript који ће обезбедити логику. Разложићемо ово на неколико корака:

- [Креирање константи](../../../../4-typing-game/typing-game)
- [Слушалац догађаја за почетак игре](../../../../4-typing-game/typing-game)
- [Слушалац догађаја за куцање](../../../../4-typing-game/typing-game)

Али прво, направите нови фајл под именом **script.js**.

### Додавање константи

Биће нам потребно неколико ставки да бисмо себи олакшали програмирање. Опет, слично рецепту, ево шта ће нам бити потребно:

- Низ са списком свих цитата
- Празан низ за чување свих речи за тренутни цитат
- Простор за чување индекса речи коју играч тренутно куца
- Време када је играч кликнуо на почетак

Такође ћемо желети референце на UI елементе:

- Текстуално поље (**typed-value**)
- Приказ цитата (**quote**)
- Порука (**message**)

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

✅ Додајте још цитата у вашу игру

> **NOTE:** Елементе можемо добити кад год желимо у коду користећи `document.getElementById`. Због чињенице да ћемо се редовно позивати на ове елементе, избегаваћемо грешке са стринг литералима користећи константе. Фрејмворци као што су [Vue.js](https://vuejs.org/) или [React](https://reactjs.org/) могу вам помоћи да боље управљате централизацијом вашег кода.

Одвојите минут да погледате видео о коришћењу `const`, `let` и `var`

[![Типови променљивих](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Типови променљивих")

> 🎥 Кликните на слику изнад за видео о променљивима.

### Додавање логике за почетак

Да би започео игру, играч ће кликнути на дугме за почетак. Наравно, не знамо када ће кликнути на дугме за почетак. Овде долази у игру [слушалац догађаја](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Слушалац догађаја ће нам омогућити да слушамо да ли се нешто дешава (догађај) и извршавамо код као одговор. У нашем случају, желимо да извршимо код када корисник кликне на дугме за почетак.

Када корисник кликне на **start**, потребно је да изаберемо цитат, подесимо кориснички интерфејс и подесимо праћење тренутне речи и времена. Испод је JavaScript који треба да додате; објашњавамо га одмах након блока кода.

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

Хајде да разложимо код!

- Подешавање праћења речи
  - Коришћење [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) и [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) нам омогућава да насумично изаберемо цитат из низа `quotes`
  - Конвертујемо `quote` у низ `words` како бисмо могли да пратимо реч коју играч тренутно куца
  - `wordIndex` се поставља на 0, јер играч почиње са првом речју
- Подешавање UI-ја
  - Креирамо низ `spanWords`, који садржи сваку реч унутар `span` елемента
    - Ово нам омогућава да истакнемо реч на приказу
  - `join` низ да направимо стринг који можемо користити за ажурирање `innerHTML` на `quoteElement`
    - Ово ће приказати цитат играчу
  - Постављамо `className` првог `span` елемента на `highlight` да га истакнемо жутом бојом
  - Чистимо `messageElement` постављањем `innerText` на `''`
- Подешавање текстуалног поља
  - Чистимо тренутни `value` на `typedValueElement`
  - Постављамо `focus` на `typedValueElement`
- Покрећемо тајмер позивањем `getTime`

### Додавање логике за куцање

Како играч куца, подиже се `input` догађај. Овај слушалац догађаја ће проверити да ли играч правилно куца реч и обрадити тренутни статус игре. Враћајући се на **script.js**, додајте следећи код на крај. Разложићемо га након тога.

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

Хајде да разложимо код! Почињемо тако што узимамо тренутну реч и вредност коју је играч до сада укуцао. Затим имамо логику водопада, где проверавамо да ли је цитат завршен, реч завршена, реч тачна или (на крају), да ли постоји грешка.

- Цитат је завршен, што је означено тиме да је `typedValue` једнако `currentWord`, а `wordIndex` једнак један мање од `length` низа `words`
  - Израчунавамо `elapsedTime` одузимањем `startTime` од тренутног времена
  - Делимо `elapsedTime` са 1,000 да бисмо конвертовали из милисекунди у секунде
  - Приказујемо поруку о успеху
- Реч је завршена, што је означено тиме да `typedValue` завршава са размаком (крај речи) и да је `typedValue` једнако `currentWord`
  - Постављамо `value` на `typedElement` на `''` да омогућимо куцање следеће речи
  - Инкрементирамо `wordIndex` да пређемо на следећу реч
  - Петљамо кроз све `childNodes` `quoteElement` да поставимо `className` на `''` да се врати на подразумевани приказ
  - Постављамо `className` тренутне речи на `highlight` да је означимо као следећу реч за куцање
- Реч је тренутно правилно укуцана (али није завршена), што је означено тиме да `currentWord` почиње са `typedValue`
  - Осигуравамо да је `typedValueElement` приказан као подразумеван тако што чистимо `className`
- Ако смо стигли овде, имамо грешку
  - Постављамо `className` на `typedValueElement` на `error`

## Тестирање апликације

Стигли сте до краја! Последњи корак је да осигурате да наша апликација ради. Испробајте је! Не брините ако има грешака; **сви програмери** имају грешке. Испитајте поруке и дебагујте по потреби.

Кликните на **start** и почните да куцате! Требало би да изгледа мало као анимација коју смо видели раније.

![Анимација игре у акцији](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Изазов

Додајте више функционалности

- Онемогућите слушалац `input
- Чувајте најбоље резултате користећи [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Квиз након предавања

[Квиз након предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Преглед и самостално учење

Прочитајте о [свим доступним догађајима](https://developer.mozilla.org/docs/Web/Events) које програмер може користити преко веб прегледача и размислите о ситуацијама у којима бисте користили сваки од њих.

## Задатак

[Направите нову игру са тастатуром](assignment.md)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати меродавним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.