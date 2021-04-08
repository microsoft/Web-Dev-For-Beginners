# 이벤트를 사용하여 게임 만들기

## 강의 전 퀴즈

[Pre-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/21?loc=ko)

## 이벤트 기반 프로그래밍

브라우저 기반 애플리케이션을 만들 때, 사용자가 만든 것과 상호 작용하기 위한 그래픽 유저 인터페이스 (GUI)를 제공합니다. 브라우저와 상호 작용하는 가장 일반적인 방법은 다양한 요소를 클릭하고 입력하는 것입니다. 개발자로서 마주한 도전은 이러한 작업을 언제 수행할 지 모른다는 점입니다!

[Event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)은 GUI를 만들기 위해 수행할 프로그래밍 타입의 이름입니다. 이 구문을 조금 자세히 보면, 여기서 핵심 단어가 **event**라는 점을 볼 수 있습니다. Merriam-Webster에 따르면, 이벤트는 "something which happens"로 정의됩니다. 이 상황을 완벽하게 설명합니다. 응답이라는 건 어떤 코드가 수행될 지 알고 있지만, 언제 발생할 지 모릅니다.

실행하려는 코드 섹션을 출력할 방법은 함수를 만드는 것입니다. [procedural programming](https://en.wikipedia.org/wiki/Procedural_programming)으로 생각해보면, 함수는 순차적으로 호출됩니다. 이벤트 기반 프로그래밍에서도 마찬가지입니다. 다른 점이라고 하면 함수가 호출되는 **방식**입니다.

이벤트(버튼 클릭, 타이핑 등)를 제어하기 위해서, **event listeners**를 등록합니다. 이벤트 리스너는 이벤트 발생을 수신하고 응답하는 함수입니다. 이벤트 리스너는 UI를 갱신하고, 서버를 호출하거나, 또는 작업에 응답하는 모든 작업을 수행할 수 있습니다. [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)를 사용하여 이벤트 리스너를 추가하고, 실행할 함수를 제공합니다.

> **NOTE:** 이벤트 리스너를 만드는 방법에는 여러 가지가 존재한다는 점을 강조하기에 충분합니다. 익명 함수를 사용하거나, 이름을 지어 만들 수 있습니다. `click` 속성을 설정하거나, `addEventListener`를 사용하는 등 다양한 단축으로 쓸 수 있습니다. 이 강의에서는 웹 개발자가 사용하는 가장 일반적인 기술인 `addEventLister`와 익명 함수에 초점을 맞출 것입니다. `addEventListener`가 모든 이벤트에서 작동하고, 이벤트 이름을 파라미터로 줄 수 있기 때문에 가장 유연합니다.

### 일반적인 이벤트

응용 프로그램을 만들 때 수신할 수 있는 [dozens of events](https://developer.mozilla.org/docs/Web/Events)가 있습니다. 기본적으로 사용자가 페이지에서 수행하는 모든 작업은 이벤트를 발생시키므로, 원하는 경험으로 많은 도움을 줍니다. 다행스럽게, 일반적인 이벤트만 필요합니다. 다음은 일반적 몇가지입니다 (게임을 만들 때 사용할 두 가지를 포함합니다):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): 사용자가 버튼 또는 하이퍼링크와 같은 무언가를 클릭했습니다
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): 사용자가 우측 마우스 버튼을 클릭했습니다
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): 사용자가 어떤 텍스트를 강조했습니다
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): 사용자가 어떤 텍스트를 입력했습니다

## 게임 만들기

JavaScript에서 이벤트가 작동하는 게임을 만들 것입니다. 이 게임은 모든 개발자가 가질 과소평가된 기술 중 하나인, 타이핑 스킬을 검증합니다. 모두 타이핑 연습을 합시다! 게임의 일반적인 흐름은 다음과 같습니다:

- 플레이어가 시작 버튼을 누르면 입력할 인용문이 표시됩니다
- 플레이어는 텍스트박스에 빨리 인용문을 입력합니다
   - 각 단어가 완성되면, 다음 단어가 강조됩니다
   - 플레이어가 오타를 낸 경우에는, 텍스트박스가 빨간색으로 갱신됩니다
   - 플레이어가 인용문을 완료하면, 경과된 시간과 함께 성공 메시지가 출력됩니다

게임을 제작하고, 이벤트에 대하여 배우겠습니다!

### 파일 구조

총 3개의 파일이 필요합니다: **index.html**, **script.js** 그리고 **style.css**. 더 편하게 살 수 있게 만들 수 있는 설정부터 시작하겠습니다.

- 콘솔 혹은 터미널 창을 열고 아래 명령을 수행하여 작업할 새로운 폴더를 만듭니다:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing game
```

- Visual Studio Code를 엽니다

```bash
code .
```

- 다음 이름으로 Visual Studio Code의 폴더에 세 개의 파일을 추가합니다:
  - index.html
  - script.js
  - style.css

## 사용자 인터페이스 만들기

요구사항을 찾아보면, HTML 페이지에 몇 요소가 필요하다는 점을 알 수 있습니다. 레시피처럼, 재료가 필요합니다:

- 사용자가 입력할 인용문을 출력할 위치
- 성공 메시지 같은, 메시지를 출력할 위치
- 입력할 텍스트박스
- 시작 버튼

각자 JavaScript에서 작업할 수 있게 ID가 필요합니다. 만드려는 CSS 및 JavaScript 파일에 대한 참조를 추가합니다.

**index.html**라고 이름지은 새로운 파일을 만듭니다. 아래 HTML을 추가합니다:

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

### 애플리케이션 시작하기

어떻게 될 지 자주 보면서 개발하는 것이 가장 좋습니다. 애플리케이션을 시작합니다. 로컬로 애플리케이션을 호스팅하고 저장할 때마다 브라우저를 새로 고칠 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)라는 멋진 Visual Studio Code 확장이 있습니다.

- 링크 따라 **Install** 클릭하여 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)를 설치합니다
   - 브라우저에서 Visual Studio Code를 열면, Visual Studio Code에서 설치를 수행하라는 메시지가 출력됩니다
   - 메시지가 출력되면 Visual Studio Code를 다시 시작합니다
- 설치되면, Visual Studio Code에서, Ctl-Shift-P (혹은 Cmd-Shift-P)를 클릭하여 command pallate을 엽니다
- **Live Server: Open with Live Server**를 입력합니다
   - Live Server가 애플리케이션 호스팅을 시작합니다
- 브라우저를 열고 **https://localhost:5500**으로 이동합니다
- 이제 만들었던 페이지를 볼 수 있습니다!

몇 가지 기능을 추가하겠습니다.

## CSS 추가하기

HTML이 만들어지면, 핵심 스타일링을 위한 CSS를 추가합니다. 플레이어가 입력할 단어를 강조하고, 입력한 내용이 잘못된 경우에는 텍스트박스에 색칠합니다. 두 클래스로 진행합니다.

**style.css**라는 새 파일을 만들고 다음 구문을 추가합니다.

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

✅ CSS는 원하는대로 페이지를 레이아웃할 수 있습니다. 잠시 시간을 내서 페이지를 더 매력적으로 보일 수 있게 만들어 봅시다:

- 다른 글꼴 선택
- 헤더 색칠
- 아이템 크기 조정

## JavaScript

UI가 만들어졌으므로, 이제 로직을 제공할 JavaScript에 집중해야 합니다. 몇 단계로 나눌 것입니다:

- [Create the constants](#add-the-constants)
- [Event listener to start the game](#add-start-logic)
- [Event listener to typing](#add-typing-logic)

하지만 먼저, **script.js**라고 이름지은 새로운 파일을 생성합니다.

### 상수 추가하기

좀 더 편하게 살도록 프로그래밍할 수 있는 몇 가지 아이템이 필요합니다. 다시, 레시피와 비슷하게, 아래와 같은 것이 필요합니다:

- 모든 인용문 목록이 들어있는 배열
- 현재 인용문에 대한 모든 단어를 저장할 빈 배열
- 플레이어가 현재 입력하고 있는 단어를 색인한 저장 공간
- 플레이어가 시작을 누른 시간

UI 요소에 대한 참조도 필요합니다:

- 텍스트박스 (**typed-value**)
- 인용문 출력 (**quote**)
- 메시지 (**message**)

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

✅ 계속 게임에 더 많은 인용문을 추가합니다

> **NOTE:** `document.getElementById`로 원할 때마다 코드에서 요소를 찾을 수 있습니다. 이러한 요소를 계속 참조할 예정이기 때문에 문자열 리터럴로 상수를 만들어 오타를 내지 않을 것입니다. [Vue.js](https://vuejs.org/) 혹은 [React](https://reactjs.org/)와 같은 프레임워크를 사용하면 코드를 centralizing으로 관리할 수 있습니다.

잠시 시간을 내서 `const`, `let` 그리고 `var` 사용하는 방법에 대한 영상을 봅니다.

[![Types of variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types of variables")

> 변수에 대한 영상을 보려면 위의 이미지를 누릅니다.

### 시작 로직 추가하기

게임을 시작하려면, 플레이어가 시작을 누릅니다. 물론, 언제 시작을 누를지 알 수 없습니다. 여기에서 [이벤트 리스너](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)가 작동됩니다. 이벤트 리스너를 사용하면 (이벤트) 발생을 수신하고 응답해서 코드를 실행할 수 있습니다. 해당 케이스의 경우에는, 사용자가 시작을 누를 때 코드를 실행하려 합니다.

사용자가 **start**을 누르면, 인용문을 선택하고, 사용자 인터페이스를 설정하며, 현재 단어와 제한 시간를 추적해야 합니다. 다음은 추가해야 할 JavaScript 입니다. 스크립트 블록 바로 뒤에 적습니다.

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

코드를 나누어 봅니다!

- 단어를 추적하도록 설정합니다
  - [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)과 [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random)을 사용하면 `quotes` 배열에서 인용문을 무작위로 선택할 수 있습니다
  - 플레이어가 현재 입력하고 있는 단어를 추적할 수 있도록 `quote`를 `words` 배열로 변환합니다
  - 플레이어는 첫번째 단어부터 시작하므로, `wordIndex`는 0으로 설정합니다
- UI를 설정합니다
  - `span` 요소 안에 각 단어를 포함하고 있는, `spanWords` 배열을 만듭니다
    - 화면에서 단어를 강조하여 출력할 수 있습니다
  - 배열을 `join`하여 `quoteElement`의 `innerHTML`로 갱신할 때 사용할 문자열을 만듭니다
    - 플레이어에게 인용문을 출력합니다
  - 첫 번째 `span` 요소의 `className`을 `highlight`로 설정하여 노란색을 강조합니다
  - `innerText`를 `''`로 설정하여 `messageElement`로 정리합니다
- 텍스트박스를 설정합니다
  - `typedValueElement`의 현재 `value`를 지웁니다
  - `focus`를 `typedValueElement`로 설정합니다
- `getTime`로 호출하여 타이머를 시작합니다

### 타이핑 로직 추가하기

플레이어는 입력을 하면, `input` 이벤트가 발생됩니다. 이 이벤트 리스너는 플레이어가 단어를 잘 입력하고 있는지 확인하고, 게임의 현재 상태를 제어합니다. **script.js**로 돌아가서, 마지막에 아래 코드를 추가합니다. 나중에 나누어 볼 것입니다.

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

코드를 나누어 봅니다! 현재 단어와 플레이어가 지금까지 입력한 값들을 알아가는 것으로 시작합니다. waterfall 로직으로서, 인용문과 단어가 온전한지, 단어가 올바른지, 혹은 (마지막으로) 오류가 있는지 확인합니다.

- 인용문이 완성되었습니다, `typedValue`는 `currentWord`와 같고, `wordIndex`는 `words`의 `length`보다 하나 정도 적습니다
  - 현재 시간에서 `startTime`을 빼서 `elapsedTime`을 계산합니다
  - `elapsedTime`을 1,000으로 나누어 밀리 초에서 초로 변환합니다
  - 성공 메시지 출력합니다
- 단어가 완성되었습니다, 공백(단어의 끝)으로 끝나는 `typedValue`와 `currentWord`같은 `typedValue`로 출력합니다
  - `typedElement`의 `value`를 `''`로 설정하여 다음 단어를 입력할 수 있습니다
  - `wordIndex`를 증가시켜서 다음 단어로 이동합니다
  - `quoteElement`의 모든 `childNodes`를 반복하여 `className`을 `''`로 설정해서 기본적으로 출력되는 것으로 되돌립니다
  - 현재 단어의 `className`을 `highlight`로 설정하여 입력할 다음 단어를 플래그로 지정합니다
- 단어가 현재 올바르게 입력되었지만 (완전하지 않습니다), `typedValue`로 시작된 `currentWord`를 출력합니다
  - `className`을 지워서 `typedValueElement`가 기본적으로 출력되는지 확인합니다
- 여기까지 도달해보면, 오류가 존재합니다
  - `typedValueElement`의 `className`을 `error`로 설정합니다

## 애플리케이션 테스트하기

마지막까지 진행했습니다! 마지막 단계는 애플리케이션이 작동되는지 확인합니다. 한번 해보시기 바랍니다! 오류가 있어도 걱정하지 마세요; **모든 개발자**는 오류를 경험합니다. 메시지를 확인하고 필요하면 디버그합니다.

**start**를 클릭하고, 바로 입력합니다! 전에 본 애니메이션과 약간 비슷해보입니다.
![Animation of the game in action](../../images/demo.gif)

---

## 🚀 도전

더 많은 기능을 추가해봅니다

- 완성할 때 `input` 이벤트 리스너를 끄고, 버튼을 클릭하면 다시 키기
- 플레이어가 인용문을 다 작성하면 텍스트박스 끄기
- 성공 메시지와 함께 다이얼로그 박스 출력하기
- [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)를 사용하여 고득점 저장하기

## 강의 후 퀴즈

[Post-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/22?loc=ko)

## 리뷰 & 자기주도 학습

웹 브라우저를 통해 [all the events available]((https://developer.mozilla.org/docs/Web/Events)) to the developer를 읽고, 각 이벤트를 사용할 시나리오를 고려합니다.

## 과제

[Create a new keyboard game](../assignment.md)
