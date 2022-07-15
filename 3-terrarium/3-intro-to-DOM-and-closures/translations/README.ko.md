# Terrarium 프로젝트 파트 3: DOM 조작과 클로저

![DOM and a closure](/sketchnotes/webdev101-js.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈

[Pre-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/19?loc=ko)

### 소개

DOM 또는 "Document Object Model"을 조작하는 것은 웹 개발의 핵심입니다. [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)에 따르면, "The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web." 이라고 합니다. 웹의 DOM 조작과 관련하여 간혹 DOM을 관리하기 위해 순수 JavaScript 대신 JavaScript 프레임워크를 도전하게 되는 원동력이지만, 우리는 스스로 관리할 것입니다!

추가로, 이 강의에서는 [JavaScript closure](https://developer.mozilla.org/docs/Web/JavaScript/Closures)에 대한 아이디어를 소개합니다. 내부 함수가 외부 함수의 범위에 접근할 수 있도록 합니다.

DOM을 조작하기 위해 클로저를 사용할 예정입니다.

> DOM을 웹 페이지 문서를 제어할 수 있는 모든 방법으로 나타낼 수 있는 트리로 생각하십시오. 프로그래머가 선택한 프로그래밍 언어를 사용하여 DOM에 접근하고 편집, 변경, 재배치하며 관리할 수 있는 다양한 API(Application Program Interfaces)가 작성되어 있습니다.

![DOM tree representation](.././images/dom-tree.png)

> DOM과 참조하는 HTML 마크업의 표현입니다. From [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

이 강의에서는, 사용자가 페이지에서 식물을 조작할 수 있는 JavaScript를 작성하여 대화식 terrarium 프로젝트를 완료합니다.

### 준비물

terrarium에 대한 HTML과 CSS를 작성해두어야 합니다. 이 강의가 끝나면 식물을 드래그하여 terrarium에서 이동할 수 있습니다.

### 작업

terrarium 폴더에서, `script.js`라고 불리는 파일을 만듭니다. 파일의 `<head>` 부분에 넣습니다:

```html
	<script src="./script.js" defer></script>
```

> Note: 외부 JavaScript 파일을 html 파일로 가져올 때 `defer` 를 사용하여 HTML 파일이 완전히 불러질 때만 JavaScript가 실행되도록 합니다. HTML 파일이 파싱되는 동안 스크립트를 실행할 수 있는 `async` 속성을 사용할 수 있지만, 우리는 드래그 스크립트를 실행하기 전에 HTML 요소를 완전히 드래그할 수 있어야 한다는 점이 중요합니다.
---

## DOM 요소

가장 먼저 할 일은 DOM에서 조작하려는 요소에 대한 참조를 만드는 것입니다. 우리의 경우, 현재 사이드바에서 대기하고 있는 14개의 식물입니다.

### 작업

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

여기서 어떤 일이 일어나고 있나요? 특정 Id의 요소를 찾기 위해 문서를 참조하려고 해당 DOM을 봅니다. HTML에 대한 첫번째 강의에서 각 식물 이미지(`id="plant1"`)에 개별 Id를 준 것을 기억하시나요? 이제 그 노력을 쓰겠습니다. 각 요소를 식별한 후, 1분 안에 작성될 `dragElement`라고 불리는 함수에 해당 아이템을 전달합니다. 따라서 HTML의 요소는 이제 드래그를 할 수 있거나 곧 합니다.

✅ 왜 우리는 Id로 요소를 참조하나요? CSS 클래스가 아닌 이유는 무엇일까요? 이 질문에 답하기 위해 CSS에 대한 전 강의를 참조할 수 있습니다.

---

## 클로저

이제 내부 함수를 감싸는 외부 함수인 dragElement 클로저를 만들 준비가 되었습니다(이 경우에는, 3개가 있습니다).

클로저는 하나 이상의 함수가 외부 함수의 범위로 접근하는 순간 유용합니다. 예시는 다음과 같습니다:

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

이 예제에서, displayCandy 함수는 새 캔디 타입을 이미 존재하는 배열로 푸시하는 함수를 감쌉니다. 이 코드를 실행한다면, `candy` 배열은 지역 변수(클로저 로컬)이므로 정의되지 않습니다.

✅ `candy` 배열에 어떻게 접근할 수 있습니까? 클로저 밖으로 이동해보세요. 이 방식은 배열이 클로저의 로컬뿐만 아니라, 전역 범위에서도 사용할 수 있습니다.

### 작업

`script.js`의 요소 선언 아래, 함수를 만듭니다:

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement`는 스크립트 상단의 선언에서 `terrariumElement` 객체를 가져옵니다. 그러고, 함수에 전달된 객체의 일부 로컬 위치를 `0`으로 설정합니다. 클로저 안에서 드래그 앤 드롭 기능을 각 요소에 추가할 때 각 요소에 대해 조작될 지역 변수입니다. terrarium에 드래그된 요소로 채워지므로, 애플리케이션은 배치된 위치를 추적해야 합니다.

추가로, 이 함수에 전달되는 terrariumElement에는 DOM 관리에 도움이 되도록 설계된 [web APIs](https://developer.mozilla.org/docs/Web/API)의 일부인 `pointerdown` 이벤트가 할당됩니다. `onpointerdown`은 버튼이 눌리거나 드래그 하는 요소가 터치될 때 발생합니다. 이 이벤트 핸들러는 몇 가지 예외를 제외하고, [웹과 모바일 브라우저](https://caniuse.com/?search=onpointerdown) 다 작동합니다.

✅ [event handler `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)은 크로스 브라우저 지원이 훨씬 더 많습니다. 왜 여기서 사용하지 않나요? 여기에서 만들고자 하는 정확한 화면 상호작용 타입에 대해 생각해보세요.

---

## Pointerdrag 함수

terrariumElement를 드래그할 준비가 되었습니다; `onpointerdown` 이벤트가 시작되면, pointerDrag 함수가 호출됩니다. 줄 바로 아래에 해당 함수를 추가하시기 바랍니다: `terrariumElement.onpointerdown = pointerDrag;`:

### 작업 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

몇 가지 일이 발생합니다. 처음으로, `e.preventDefault();`를 사용하여 포인터 다운 시 일상적으로 발생하는 기본 이벤트가 발생하지 않도록 합니다. 이러면 인터페이스의 동작을 더 잘 제어할 수 있습니다.

> 스크립트 파일을 완전히 작성했으면 이 줄로 돌아와서 `e.preventDefault()` 없이 시도해보세요. - 어떻게 되나요?

두 번째로는, 브라우저 창에서 `index.html`을 열고, 인터페이스를 검사합니다. 식물을 클릭하면, 'e' 이벤트가 캡처되는 방식을 볼 수 있습니다. 이벤트를 뜯어보면서 한 번의 포인터 다운 이벤트로 얼마나 많은 정보가 수집되는지 확인해보시기 바랍니다!

다음으로 지역 변수 'pos3'과 'pos4'가 어떻게 e.clientX 로 설정되어 있는 지 확인합니다. 검사 창에서 `e` 값을 찾을 수 있습니다. 이 값은 식물을 클릭하거나 터치하는 순간 식물의 x 와 y 좌표를 캡처합니다. 식물을 클릭하고 드래그할 때 식물의 동작을 세밀하게 제어하여 좌표를 추적해야 합니다.

✅ 하나의 앱이 하나의 큰 클로저로 만들어진 이유가 더 분명해지나요? 아니라면, 14개의 드래그 가능한 식물을 어떻게 각각의 범위를 지킬까요?

`pos4 = e.clientY` 아래에 포인터 이벤트 조작을 2개 더 추가하여 함수 초기화를 완료합니다:

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
제 식물을 이동할 때 포인터와 함께 식물을 끌고, 식물 선택을 취소할 때 드래그 제스처를 중지하도록 지정합니다. `onpointermove` 와 `onpointerup`은 모두 `onpointerdown`과 동일한 API의 일부입니다. 아직 `elementDrag` 및 `stopElementDrag` 함수를 정의하지 않아 인터페이스에서 오류가 발생하므로, 다음에 작성하십시오.

## elementDrag와 stopElementDrag 함수

식물을 드래그하고 멈출 때 일어나는 일을 처리하는 두 내부 함수를 더 추가하여 클로저를 완료합니다. 원하는 동작은 언제든지 식물을 드래그하여 화면의 아무 곳에 둘 수 있다는 것입니다. 이 인터페이스는 식물을 추가, 제거 그리고 재배치하여 원하는대로 terrarium을 정확하게 디자인할 수 있도록 (예를 들어 drop zone이 없음)하는 것에 의견이 없습니다.

### 작업

`pointerDrag`의 닫는 중괄호 바로 뒤에 `elementDrag` 함수를 추가합니다:

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```
이 함수에서는, 외부 함수에서 로컬 변수로 설정한 초기 위치 1-4를 많이 편집합니다. 여기서 어떤 일이 일어나고 있습니까?

드래그할 때, `pos1`을 현재 `e.clientX` 값을 뺀 `pos3`(이전에`e.clientX`로 설정)과 동일하게 만들어 `pos1`을 다시 할당합니다. `pos2`와 유사한 작업을 수행합니다. 그런 뒤에, `pos3`과 `pos4`를 요소의 새로운 X 와 Y 좌표로 다시 설정합니다. 드래그하면 콘솔에서 변경 사항을 볼 수 있습니다. 그런 뒤에, 식물의 css 스타일을 조작하여 `pos1`과 `pos2`의 새로운 위치를 기반으로 위치를 설정하고, 오프셋을 이러한 새 위치와 비교하여 식물의 위쪽과 왼쪽 XY 좌표를 계산합니다.

> `offsetTop`과 `offsetLeft`는 상위 위치를 기준으로 요소의 위치를 설정하는 CSS 속성입니다. 상위는 `static`으로 두지 않은 모든 요소가 될 수 있습니다. 

모든 위치 다시 계산하며 terrarium과 그 식물의 움직임을 미세하세 조정할 수 있습니다.

### 작업 

인터페이스를 완성하기 위한 마지막 작업은 `elementDrag`의 닫는 중괄호 뒤에 `closeElementDrag` 함수를 추가하는 것입니다:

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

이 작은 함수는 `onpointerup`과 `onpointermove` 이벤트를 다시 설정하므로 다시 드래그하여 식물의 진행 상황을 다시 시작하거나, 새 식물을 드래그할 수 있습니다.

✅ 이러한 이벤트를 null로 설정하지 않으면 어떻게 될까요?

이제 프로젝트를 완료했습니다!

🥇 축하합니다! 아름다운 terrarium을 완성했습니다. ![finished terrarium](.././images/terrarium-final.png)

---

## 🚀 도전

클로저에 새로운 이벤트 핸들러를 추가하여 식물에 더 많은 일을 시킵니다. 예를 들어, 식물을 더블 클릭하여 앞으로 가져옵니다. 창의력을 발휘하십시오!

## 강의 후 퀴즈

[Post-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/20?loc=ko)

## 리뷰 & 자기주도 학습

화면에서 요소를 드래그하는 것은 사소한 것처럼 보이지만, 원하는 효과에 따라 여러 가지 방식과 함정이 있습니다. 실제로, 시도할 수 있는 전체 [drag and drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)가 있습니다. 우리가 원하는 효과가 다소 다르기 때문에 이 모듈에서는 사용하지 않았지만, 그러나 이 API를 자신의 프로젝트에서 시도해보고 얻을 수 있는 게 무엇인지 확인하시기 바랍니다.

포인터 이벤트에 대한 자세한 내용은 [W3C docs](https://www.w3.org/TR/pointerevents1/)와 [MDN web docs](https://developer.mozilla.org/docs/Web/API/Pointer_events)에서 확인하세요.

항상 [CanIUse.com](https://caniuse.com/)으로 브라우저 기능을 확인하십시오.

## 과제

[Work a bit more with the DOM](../assignment.md)

