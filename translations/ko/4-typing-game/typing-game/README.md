<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-24T00:21:38+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "ko"
}
-->
# 이벤트를 사용하여 게임 만들기

## 강의 전 퀴즈

[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/21)

## 이벤트 기반 프로그래밍

브라우저 기반 애플리케이션을 만들 때, 사용자가 우리가 만든 것과 상호작용할 수 있도록 그래픽 사용자 인터페이스(GUI)를 제공합니다. 브라우저와 상호작용하는 가장 일반적인 방법은 다양한 요소를 클릭하거나 입력하는 것입니다. 개발자로서 우리가 직면하는 도전은 사용자가 이러한 작업을 언제 수행할지 알 수 없다는 점입니다!

[이벤트 기반 프로그래밍](https://en.wikipedia.org/wiki/Event-driven_programming)은 GUI를 만들기 위해 필요한 프로그래밍 유형의 이름입니다. 이 문구를 조금 더 분석해 보면, 핵심 단어는 **이벤트**입니다. Merriam-Webster에 따르면 [이벤트](https://www.merriam-webster.com/dictionary/event)는 "무언가가 일어나는 것"으로 정의됩니다. 이는 우리의 상황을 완벽하게 설명합니다. 우리는 어떤 일이 일어날 것이며 이에 대응하여 코드를 실행하고 싶지만, 그것이 언제 발생할지 모릅니다.

코드의 특정 섹션을 실행하려면 함수를 만들어야 합니다. [절차적 프로그래밍](https://en.wikipedia.org/wiki/Procedural_programming)을 생각해 보면, 함수는 특정 순서로 호출됩니다. 이벤트 기반 프로그래밍에서도 동일한 일이 발생하지만, 함수가 호출되는 **방식**이 다릅니다.

버튼 클릭, 입력 등 이벤트를 처리하기 위해 우리는 **이벤트 리스너**를 등록합니다. 이벤트 리스너는 이벤트가 발생하기를 기다렸다가 이에 대응하여 실행되는 함수입니다. 이벤트 리스너는 UI를 업데이트하거나 서버에 호출을 보내거나 사용자의 행동에 따라 필요한 작업을 수행할 수 있습니다. 이벤트 리스너는 [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)를 사용하여 추가하며, 실행할 함수를 제공합니다.

> **NOTE:** 이벤트 리스너를 만드는 방법은 여러 가지가 있습니다. 익명 함수를 사용하거나 이름이 있는 함수를 만들 수 있습니다. `click` 속성을 설정하거나 `addEventListener`를 사용하는 등의 다양한 단축 방법도 있습니다. 이번 연습에서는 `addEventListener`와 익명 함수에 집중할 것입니다. 이는 웹 개발자가 가장 일반적으로 사용하는 기술이며, 모든 이벤트에 대해 작동하고 이벤트 이름을 매개변수로 제공할 수 있기 때문에 가장 유연합니다.

### 일반적인 이벤트

애플리케이션을 만들 때 사용할 수 있는 [수십 가지 이벤트](https://developer.mozilla.org/docs/Web/Events)가 있습니다. 페이지에서 사용자가 하는 거의 모든 작업이 이벤트를 발생시키며, 이를 통해 원하는 경험을 제공할 수 있는 강력한 도구를 제공합니다. 다행히도 일반적으로 필요한 이벤트는 몇 가지뿐입니다. 다음은 몇 가지 일반적인 이벤트입니다(게임을 만들 때 사용할 두 가지 포함):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): 사용자가 버튼이나 하이퍼링크를 클릭했을 때
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): 사용자가 마우스 오른쪽 버튼을 클릭했을 때
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): 사용자가 텍스트를 강조 표시했을 때
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): 사용자가 텍스트를 입력했을 때

## 게임 만들기

이벤트가 JavaScript에서 어떻게 작동하는지 탐구하기 위해 게임을 만들 것입니다. 우리의 게임은 플레이어의 타이핑 능력을 테스트할 것입니다. 이는 모든 개발자가 연습해야 할 가장 과소평가된 기술 중 하나입니다. 모두 타이핑 연습을 해야 합니다! 게임의 일반적인 흐름은 다음과 같습니다:

- 플레이어가 시작 버튼을 클릭하면 입력할 인용문이 표시됩니다.
- 플레이어는 텍스트 상자에 인용문을 가능한 빨리 입력합니다.
  - 각 단어가 완료되면 다음 단어가 강조 표시됩니다.
  - 플레이어가 오타를 내면 텍스트 상자가 빨간색으로 업데이트됩니다.
  - 플레이어가 인용문을 완료하면 성공 메시지와 경과 시간이 표시됩니다.

이제 게임을 만들어 이벤트를 배워봅시다!

### 파일 구조

총 세 개의 파일이 필요합니다: **index.html**, **script.js**, **style.css**. 작업을 더 쉽게 하기 위해 먼저 설정해 보겠습니다.

- 콘솔 또는 터미널 창을 열고 다음 명령을 실행하여 새 폴더를 만듭니다:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Visual Studio Code를 엽니다.

```bash
code .
```

- Visual Studio Code에서 폴더에 다음 이름의 세 파일을 추가합니다:
  - index.html
  - script.js
  - style.css

## 사용자 인터페이스 만들기

요구 사항을 살펴보면 HTML 페이지에 몇 가지 요소가 필요하다는 것을 알 수 있습니다. 이는 레시피와 비슷하며, 몇 가지 재료가 필요합니다:

- 사용자가 입력할 인용문을 표시할 공간
- 성공 메시지와 같은 메시지를 표시할 공간
- 입력을 위한 텍스트 상자
- 시작 버튼

각 요소에는 JavaScript에서 작업할 수 있도록 ID가 필요합니다. 또한 우리가 만들 CSS와 JavaScript 파일에 대한 참조를 추가할 것입니다.

**index.html**이라는 새 파일을 만들고 다음 HTML을 추가하세요:

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

### 애플리케이션 실행

항상 반복적으로 개발하여 결과를 확인하는 것이 좋습니다. 애플리케이션을 실행해 봅시다. Visual Studio Code에는 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon)라는 훌륭한 확장이 있습니다. 이 확장은 애플리케이션을 로컬에서 호스팅하고 저장할 때마다 브라우저를 새로 고칩니다.

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon)를 설치합니다. 링크를 클릭하고 **Install**을 누르세요.
  - 브라우저에서 Visual Studio Code를 열라는 메시지가 표시됩니다. Visual Studio Code에서 설치를 수행하라는 메시지가 표시됩니다.
  - 필요하면 Visual Studio Code를 다시 시작하세요.
- 설치 후, Visual Studio Code에서 Ctrl-Shift-P(또는 Cmd-Shift-P)를 눌러 명령 팔레트를 엽니다.
- **Live Server: Open with Live Server**를 입력합니다.
  - Live Server가 애플리케이션을 호스팅하기 시작합니다.
- 브라우저를 열고 **https://localhost:5500**로 이동합니다.
- 이제 생성한 페이지를 볼 수 있습니다!

기능을 추가해 봅시다.

## CSS 추가

HTML을 생성했으니 핵심 스타일링을 위한 CSS를 추가해 봅시다. 플레이어가 입력해야 할 단어를 강조 표시하고, 입력한 내용이 잘못되었을 경우 텍스트 상자를 색칠할 것입니다. 이를 위해 두 개의 클래스를 사용할 것입니다.

**style.css**라는 새 파일을 만들고 다음 구문을 추가하세요.

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

✅ CSS를 사용하여 페이지를 원하는 대로 레이아웃할 수 있습니다. 시간을 조금 들여 페이지를 더 매력적으로 만들어 보세요:

- 다른 폰트를 선택하세요.
- 헤더에 색상을 추가하세요.
- 항목 크기를 조정하세요.

## JavaScript

UI를 생성했으니 이제 로직을 제공할 JavaScript에 집중할 시간입니다. 이를 몇 가지 단계로 나눌 것입니다:

- [상수 생성](../../../../4-typing-game/typing-game)
- [게임 시작을 위한 이벤트 리스너](../../../../4-typing-game/typing-game)
- [타이핑을 위한 이벤트 리스너](../../../../4-typing-game/typing-game)

먼저 **script.js**라는 새 파일을 만드세요.

### 상수 추가

프로그래밍을 더 쉽게 하기 위해 몇 가지 항목이 필요합니다. 다시 레시피와 비슷하게, 필요한 항목은 다음과 같습니다:

- 모든 인용문의 목록을 포함한 배열
- 현재 인용문의 모든 단어를 저장할 빈 배열
- 플레이어가 현재 입력 중인 단어의 인덱스를 저장할 공간
- 플레이어가 시작 버튼을 클릭한 시간을 저장할 공간

또한 UI 요소에 대한 참조도 필요합니다:

- 텍스트 상자(**typed-value**)
- 인용문 표시(**quote**)
- 메시지(**message**)

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

✅ 게임에 더 많은 인용문을 추가해 보세요.

> **NOTE:** `document.getElementById`를 사용하여 코드에서 언제든지 요소를 가져올 수 있습니다. 하지만 문자열 리터럴로 인해 오타를 방지하기 위해 상수를 사용하는 것이 좋습니다. [Vue.js](https://vuejs.org/)나 [React](https://reactjs.org/) 같은 프레임워크는 코드를 중앙 집중화하는 데 도움을 줄 수 있습니다.

`const`, `let`, `var`를 사용하는 방법에 대한 비디오를 시청해 보세요.

[![변수 유형](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "변수 유형")

> 🎥 위 이미지를 클릭하면 변수에 대한 비디오를 볼 수 있습니다.

### 시작 로직 추가

게임을 시작하려면 플레이어가 시작 버튼을 클릭해야 합니다. 물론, 플레이어가 언제 시작 버튼을 클릭할지 알 수 없습니다. 여기서 [이벤트 리스너](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)가 필요합니다. 이벤트 리스너는 어떤 일이 발생하기를 기다렸다가(이벤트) 이에 대응하여 코드를 실행할 수 있게 해줍니다. 우리의 경우, 사용자가 시작 버튼을 클릭했을 때 코드를 실행하고 싶습니다.

사용자가 **start**를 클릭하면 인용문을 선택하고, 사용자 인터페이스를 설정하며, 현재 단어와 타이밍을 추적해야 합니다. 아래는 추가해야 할 JavaScript입니다. 스크립트 블록 뒤에 이를 설명합니다.

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

코드를 분석해 봅시다!

- 단어 추적 설정
  - [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)와 [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random)을 사용하여 `quotes` 배열에서 무작위로 인용문을 선택합니다.
  - `quote`를 `words` 배열로 변환하여 플레이어가 현재 입력 중인 단어를 추적할 수 있습니다.
  - 플레이어가 첫 번째 단어에서 시작하므로 `wordIndex`를 0으로 설정합니다.
- UI 설정
  - 각 단어를 `span` 요소 안에 포함하는 `spanWords` 배열을 생성합니다.
    - 이를 통해 화면에 표시된 단어를 강조 표시할 수 있습니다.
  - 배열을 `join`하여 플레이어에게 표시할 수 있는 문자열을 생성하고 `quoteElement`의 `innerHTML`을 업데이트합니다.
    - 이는 플레이어에게 인용문을 표시합니다.
  - 첫 번째 `span` 요소의 `className`을 `highlight`로 설정하여 노란색으로 강조 표시합니다.
  - `messageElement`의 `innerText`를 `''`로 설정하여 메시지를 초기화합니다.
- 텍스트 상자 설정
  - 현재 `typedValueElement`의 `value`를 지웁니다.
  - `typedValueElement`에 `focus`를 설정합니다.
- `getTime`을 호출하여 타이머를 시작합니다.

### 타이핑 로직 추가

플레이어가 입력할 때 `input` 이벤트가 발생합니다. 이 이벤트 리스너는 플레이어가 단어를 올바르게 입력하고 있는지 확인하며 게임의 현재 상태를 처리합니다. **script.js**로 돌아가 아래 코드를 끝에 추가하세요. 이후 이를 분석합니다.

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

코드를 분석해 봅시다! 먼저 현재 단어와 플레이어가 입력한 값을 가져옵니다. 그런 다음 폭포식 논리로 진행하며, 인용문이 완료되었는지, 단어가 완료되었는지, 단어가 올바른지, 또는 오류가 있는지를 확인합니다.

- 인용문이 완료되었는지 확인: `typedValue`가 `currentWord`와 같고, `wordIndex`가 `words`의 `length`보다 하나 적은 경우
  - 현재 시간에서 `startTime`을 빼서 `elapsedTime`을 계산합니다.
  - `elapsedTime`을 1,000으로 나누어 밀리초를 초로 변환합니다.
  - 성공 메시지를 표시합니다.
- 단어가 완료되었는지 확인: `typedValue`가 공백으로 끝나고(`단어의 끝`) `typedValue`가 `currentWord`와 같은 경우
  - 다음 단어를 입력할 수 있도록 `typedElement`의 `value`를 `''`로 설정합니다.
  - `wordIndex`를 증가시켜 다음 단어로 이동합니다.
  - `quoteElement`의 모든 `childNodes`를 반복하여 `className`을 기본 표시로 되돌립니다.
  - 현재 단어의 `className`을 `highlight`로 설정하여 다음 입력할 단어로 표시합니다.
- 현재 단어가 올바르게 입력되었는지 확인(완료되지 않음): `currentWord`가 `typedValue`로 시작하는 경우
  - `typedValueElement`의 `className`을 지워 기본 표시로 설정합니다.
- 위 조건을 모두 만족하지 않으면 오류가 발생한 것입니다.
  - `typedValueElement`의 `className`을 `error`로 설정합니다.

## 애플리케이션 테스트

끝까지 왔습니다! 마지막 단계는 애플리케이션이 작동하는지 확인하는 것입니다. 실행해 보세요! 오류가 발생해도 걱정하지 마세요. **모든 개발자**는 오류를 경험합니다. 메시지를 확인하고 필요한 경우 디버깅하세요.

**start**를 클릭하고 입력을 시작하세요! 이전에 본 애니메이션과 비슷하게 보여야 합니다.

![게임 실행 애니메이션](../../../../4-typing-game/images/demo.gif)

---

## 🚀 도전 과제

기능을 추가해 보세요:

- 완료 시 `input` 이벤트 리스너를 비활성화하고 버튼 클릭 시 다시 활성화하세요.
- 플레이어가 인용문을 완료하면 텍스트 상자를 비활성화하세요.
- 성공 메시지를 표시하는 모달 대화 상자를 추가하세요.
- [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)를 사용하여 최고 점수를 저장하세요.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/22)

## 복습 및 자기 학습

웹 브라우저를 통해 개발자가 사용할 수 있는 [모든 이벤트](https://developer.mozilla.org/docs/Web/Events)에 대해 읽어보고, 각 이벤트를 사용할 수 있는 시나리오를 고려해 보세요.

## 과제

[새로운 키보드 게임 만들기](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.