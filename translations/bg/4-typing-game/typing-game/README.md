<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-27T23:08:50+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "bg"
}
-->
# Създаване на игра с използване на събития

## Предварителен тест

[Предварителен тест](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Програмиране, базирано на събития

Когато създаваме приложение за браузър, предоставяме графичен потребителски интерфейс (GUI), който потребителят използва за взаимодействие с това, което сме изградили. Най-често срещаният начин за взаимодействие с браузъра е чрез кликване и писане в различни елементи. Предизвикателството, пред което сме изправени като разработчици, е, че не знаем кога потребителят ще извърши тези действия!

[Програмирането, базирано на събития](https://en.wikipedia.org/wiki/Event-driven_programming) е подходът, който трябва да използваме, за да създадем нашия GUI. Ако разгледаме тази фраза, основната дума тук е **събитие**. [Събитие](https://www.merriam-webster.com/dictionary/event), според Merriam-Webster, се определя като "нещо, което се случва". Това описва нашата ситуация перфектно. Знаем, че нещо ще се случи, за което искаме да изпълним код в отговор, но не знаем кога ще се случи.

Начинът, по който маркираме секция от код, която искаме да изпълним, е чрез създаване на функция. Когато мислим за [процедурно програмиране](https://en.wikipedia.org/wiki/Procedural_programming), функциите се извикват в определен ред. Същото важи и за програмирането, базирано на събития. Разликата е **как** функциите ще бъдат извикани.

За да обработваме събития (като кликване на бутон, писане и др.), регистрираме **слушатели на събития**. Слушателят на събитие е функция, която "слуша" за настъпването на събитие и се изпълнява в отговор. Слушателите на събития могат да актуализират потребителския интерфейс, да правят заявки към сървъра или каквото друго е необходимо в отговор на действието на потребителя. Добавяме слушател на събитие чрез [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) и предоставяме функция за изпълнение.

> **NOTE:** Струва си да се отбележи, че има множество начини за създаване на слушатели на събития. Можете да използвате анонимни функции или да създавате именувани. Можете да използвате различни преки пътища, като задаване на свойството `click` или използване на `addEventListener`. В нашето упражнение ще се фокусираме върху `addEventListener` и анонимни функции, тъй като това вероятно е най-често използваната техника от уеб разработчиците. Освен това е най-гъвкавата, тъй като `addEventListener` работи за всички събития, а името на събитието може да бъде предоставено като параметър.

### Често срещани събития

Има [десетки събития](https://developer.mozilla.org/docs/Web/Events), които можете да слушате, когато създавате приложение. Всъщност почти всичко, което потребителят прави на страницата, предизвиква събитие, което ви дава голяма сила да осигурите желаното изживяване. За щастие, обикновено ще ви трябват само няколко събития. Ето някои от най-често срещаните (включително двете, които ще използваме при създаването на нашата игра):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Потребителят е кликнал върху нещо, обикновено бутон или хипервръзка
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Потребителят е кликнал с десния бутон на мишката
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Потребителят е маркирал текст
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Потребителят е въвел текст

## Създаване на играта

Ще създадем игра, за да изследваме как работят събитията в JavaScript. Нашата игра ще тества уменията на играча за писане, което е едно от най-недооценените умения, които всички разработчици трябва да притежават. Всички трябва да практикуваме писането си! Общият поток на играта ще изглежда така:

- Играчът кликва върху бутон за старт и му се показва цитат за писане
- Играчът пише цитата възможно най-бързо в текстово поле
  - С всяка завършена дума следващата се маркира
  - Ако играчът направи грешка, текстовото поле се оцветява в червено
  - Когато играчът завърши цитата, се показва съобщение за успех с изминалото време

Нека изградим нашата игра и научим за събитията!

### Структура на файловете

Ще ни трябват общо три файла: **index.html**, **script.js** и **style.css**. Нека започнем с тях, за да улесним работата си.

- Създайте нова папка за вашата работа, като отворите конзола или терминал и изпълните следната команда:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Отворете Visual Studio Code

```bash
code .
```

- Добавете три файла в папката във Visual Studio Code със следните имена:
  - index.html
  - script.js
  - style.css

## Създаване на потребителския интерфейс

Ако разгледаме изискванията, знаем, че ще ни трябват няколко елемента на нашата HTML страница. Това е като рецепта, където ни трябват някои съставки:

- Място за показване на цитата, който потребителят трябва да напише
- Място за показване на съобщения, като съобщение за успех
- Текстово поле за писане
- Бутон за старт

Всеки от тези елементи ще се нуждае от ID, за да можем да работим с тях в нашия JavaScript. Ще добавим и препратки към CSS и JavaScript файловете, които ще създадем.

Създайте нов файл с име **index.html**. Добавете следния HTML:

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

### Стартиране на приложението

Винаги е най-добре да разработвате итеративно, за да видите как изглеждат нещата. Нека стартираме нашето приложение. Има чудесно разширение за Visual Studio Code, наречено [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), което ще хоства вашето приложение локално и ще обновява браузъра всеки път, когато запазите.

- Инсталирайте [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), като следвате линка и кликнете **Install**
  - Браузърът ще ви подкани да отворите Visual Studio Code, а след това Visual Studio Code ще ви подкани да извършите инсталацията
  - Рестартирайте Visual Studio Code, ако бъдете подканени
- След като инсталирате, във Visual Studio Code натиснете Ctrl-Shift-P (или Cmd-Shift-P), за да отворите командния палет
- Напишете **Live Server: Open with Live Server**
  - Live Server ще започне да хоства вашето приложение
- Отворете браузър и навигирайте до **https://localhost:5500**
- Вече трябва да виждате страницата, която създадохте!

Нека добавим малко функционалност.

## Добавяне на CSS

С нашия HTML създаден, нека добавим CSS за основно стилизиране. Трябва да маркираме думата, която играчът трябва да напише, и да оцветим текстовото поле, ако това, което е написано, е грешно. Ще направим това с два класа.

Създайте нов файл с име **style.css** и добавете следния синтаксис.

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

✅ Когато става въпрос за CSS, можете да оформите страницата си както пожелаете. Отделете малко време, за да направите страницата по-привлекателна:

- Изберете различен шрифт
- Оцветете заглавията
- Променете размера на елементите

## JavaScript

С нашия потребителски интерфейс създаден, е време да насочим вниманието си към JavaScript, който ще предостави логиката. Ще го разделим на няколко стъпки:

- [Създаване на константите](../../../../4-typing-game/typing-game)
- [Слушател на събитие за старт на играта](../../../../4-typing-game/typing-game)
- [Слушател на събитие за писане](../../../../4-typing-game/typing-game)

Но първо, създайте нов файл с име **script.js**.

### Добавяне на константите

Ще ни трябват няколко елемента, за да улесним програмирането. Отново, подобно на рецепта, ето какво ще ни трябва:

- Масив със списък на всички цитати
- Празен масив за съхранение на всички думи от текущия цитат
- Пространство за съхранение на индекса на думата, която играчът пише в момента
- Времето, когато играчът е кликнал старт

Също така ще искаме препратки към елементите на потребителския интерфейс:

- Текстовото поле (**typed-value**)
- Показване на цитата (**quote**)
- Съобщението (**message**)

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

✅ Добавете още цитати към вашата игра

> **NOTE:** Можем да извличаме елементите, когато пожелаем в кода, като използваме `document.getElementById`. Поради факта, че ще се позоваваме на тези елементи редовно, ще избегнем грешки с низови литерали, като използваме константи. Фреймуъркове като [Vue.js](https://vuejs.org/) или [React](https://reactjs.org/) могат да ви помогнат да управлявате централизирането на вашия код.

Отделете минута, за да гледате видео за използването на `const`, `let` и `var`

[![Типове променливи](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Типове променливи")

> 🎥 Кликнете върху изображението по-горе за видео за променливи.

### Добавяне на логика за старт

За да започне играта, играчът ще кликне върху старт. Разбира се, не знаем кога ще кликне старт. Тук влиза в действие [слушателят на събитие](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Слушателят на събитие ще ни позволи да слушаме за настъпването на нещо (събитие) и да изпълним код в отговор. В нашия случай искаме да изпълним код, когато потребителят кликне върху старт.

Когато потребителят кликне **старт**, трябва да изберем цитат, да настроим потребителския интерфейс и да настроим проследяването на текущата дума и времето. По-долу е JavaScript, който трябва да добавите; ще го обсъдим веднага след блока със скрипта.

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

Нека разгледаме кода!

- Настройка на проследяването на думите
  - Използването на [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) и [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) ни позволява случайно да изберем цитат от масива `quotes`
  - Превръщаме `quote` в масив от `words`, за да можем да проследим думата, която играчът пише в момента
  - `wordIndex` се задава на 0, тъй като играчът ще започне с първата дума
- Настройка на потребителския интерфейс
  - Създаваме масив от `spanWords`, който съдържа всяка дума в `span` елемент
    - Това ще ни позволи да маркираме думата на дисплея
  - `join` масива, за да създадем низ, който можем да използваме за актуализиране на `innerHTML` на `quoteElement`
    - Това ще покаже цитата на играча
  - Задаваме `className` на първия `span` елемент на `highlight`, за да го маркираме в жълто
  - Изчистваме `messageElement`, като задаваме `innerText` на `''`
- Настройка на текстовото поле
  - Изчистваме текущата `value` на `typedValueElement`
  - Задаваме `focus` на `typedValueElement`
- Стартираме таймера, като извикваме `getTime`

### Добавяне на логика за писане

Докато играчът пише, се предизвиква събитие `input`. Този слушател на събитие ще провери дали играчът пише думата правилно и ще обработи текущия статус на играта. Върнете се към **script.js** и добавете следния код в края. Ще го разгледаме след това.

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

Нека разгледаме кода! Започваме, като вземем текущата дума и стойността, която играчът е написал досега. След това имаме логика, където проверяваме дали цитатът е завършен, думата е завършена, думата е правилна или (накрая), ако има грешка.

- Цитатът е завършен, което се указва от `typedValue`, равен на `currentWord`, и `wordIndex`, равен на един по-малко от `length` на `words`
  - Изчисляваме `elapsedTime`, като изваждаме `startTime` от текущото време
  - Разделяме `elapsedTime` на 1,000, за да го преобразуваме от милисекунди в секунди
  - Показваме съобщение за успех
- Думата е завършена, което се указва от `typedValue`, завършващ с интервал (края на дума) и `typedValue`, равен на `currentWord`
  - Задаваме `value` на `typedElement` на `''`, за да позволим следващата дума да бъде написана
  - Увеличаваме `wordIndex`, за да преминем към следващата дума
  - Преглеждаме всички `childNodes` на `quoteElement`, за да зададем `className` на `''`, за да се върнем към стандартния дисплей
  - Задаваме `className` на текущата дума на `highlight`, за да я маркираме като следващата дума за писане
- Думата е написана правилно (но не е завършена), което се указва от `currentWord`, започващ с `typedValue`
  - Уверяваме се, че `typedValueElement` се показва като стандартен, като изчистваме `className`
- Ако стигнем дотук, имаме грешка
  - Задаваме `className` на `typedValueElement` на `error`

## Тествайте вашето приложение

Стигнахте до края! Последната стъпка е да се уверите, че вашето приложение работи. Опитайте го! Не се притеснявайте, ако има грешки; **всички разработчици** имат грешки. Разгледайте съобщенията и отстранявайте проблемите според нуждите.

Кликнете върху **старт** и започнете да пишете! Трябва да изглежда малко като анимацията, която видяхме преди.

![Анимация на играта в действие](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Предизвикателство

Добавете повече функционалност

- Деактивирайте слушателя на събитие `input` при завършване и го активирайте отново, когато бутонът бъде кликнат
- Деактивирайте текстовото поле, когато играчът завърши цитата
- Показвайте модален диалогов прозорец със съобщението за успех
- Съхранявайте високи резултати, използвайки [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Тест след лекцията

[Тест след лекцията](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Преглед и самостоятелно обучение

Прочетете за [всички налични събития](https://developer.mozilla.org/docs/Web/Events), достъпни за разработчика чрез уеб браузъра, и обмислете сценариите, в които бихте използвали всяко от тях.

## Задача

[Създайте нова игра с клавиатура](assignment.md)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за недоразумения или погрешни интерпретации, произтичащи от използването на този превод.