<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T15:41:42+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "ko"
}
-->
# JavaScript 기초: 배열과 반복문

![JavaScript Basics - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.ko.png)
> 스케치노트 제공: [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/13)

이 강의에서는 웹에서 상호작용을 제공하는 언어인 JavaScript의 기초를 다룹니다. 이 강의에서는 데이터를 조작하는 데 사용되는 배열과 반복문에 대해 배웁니다.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 위 이미지를 클릭하면 배열과 반복문에 대한 동영상을 볼 수 있습니다.

> 이 강의를 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)에서 수강할 수 있습니다!

## 배열

데이터를 다루는 작업은 모든 언어에서 흔히 하는 작업이며, 데이터가 배열과 같은 구조적 형식으로 조직화되면 훨씬 더 쉽게 처리할 수 있습니다. 배열을 사용하면 데이터가 리스트와 유사한 구조로 저장됩니다. 배열의 주요 장점 중 하나는 하나의 배열에 서로 다른 유형의 데이터를 저장할 수 있다는 점입니다.

✅ 배열은 우리 주변 어디에나 있습니다! 태양광 패널 배열과 같은 실생활의 배열 예를 생각해볼 수 있나요?

배열의 문법은 대괄호 한 쌍으로 이루어져 있습니다.

```javascript
let myArray = [];
```

이것은 빈 배열입니다. 하지만 배열은 이미 데이터로 채워진 상태로 선언될 수도 있습니다. 배열의 여러 값은 쉼표로 구분됩니다.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

배열 값은 **인덱스**라는 고유한 값이 할당됩니다. 인덱스는 배열의 시작점으로부터의 거리로 계산된 정수입니다. 위 예제에서 문자열 값 "Chocolate"의 인덱스는 0이고, "Rocky Road"의 인덱스는 4입니다. 대괄호와 인덱스를 사용하여 배열 값을 검색, 변경 또는 삽입할 수 있습니다.

✅ 배열이 0 인덱스에서 시작한다는 것이 놀랍나요? 일부 프로그래밍 언어에서는 인덱스가 1에서 시작합니다. 이에 대한 흥미로운 역사를 [Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering)에서 읽어볼 수 있습니다.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

인덱스를 활용하여 값을 변경할 수 있습니다. 예를 들어:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

그리고 특정 인덱스에 새 값을 삽입할 수도 있습니다. 예를 들어:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ 배열에 값을 추가하는 더 일반적인 방법은 array.push()와 같은 배열 연산자를 사용하는 것입니다.

배열에 몇 개의 항목이 있는지 확인하려면 `length` 속성을 사용하세요.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 직접 해보세요! 브라우저의 콘솔을 사용하여 자신만의 배열을 생성하고 조작해보세요.

## 반복문

반복문은 반복적이거나 **반복적인** 작업을 수행할 수 있게 해주며, 많은 시간과 코드를 절약할 수 있습니다. 각 반복은 변수, 값, 조건이 다를 수 있습니다. JavaScript에는 다양한 유형의 반복문이 있으며, 각각 약간의 차이가 있지만 기본적으로 동일한 작업을 수행합니다: 데이터를 반복 처리합니다.

### For 반복문

`for` 반복문은 반복을 위해 3가지 요소가 필요합니다:
- `counter` 일반적으로 숫자로 초기화되어 반복 횟수를 세는 변수
- `condition` 비교 연산자를 사용하여 `false`가 될 때 반복문을 멈추게 하는 표현식
- `iteration-expression` 각 반복 끝에서 실행되며 일반적으로 카운터 값을 변경하는 데 사용됨
  
```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ 이 코드를 브라우저 콘솔에서 실행해보세요. 카운터, 조건, 반복 표현식을 약간 변경하면 어떤 일이 발생하나요? 반복문을 역방향으로 실행하여 카운트다운을 만들 수 있나요?

### While 반복문

`for` 반복문의 문법과 달리, `while` 반복문은 조건만 필요하며 조건이 `false`가 되면 반복문이 멈춥니다. 반복문 내 조건은 일반적으로 카운터와 같은 다른 값에 의존하며, 반복문 동안 관리되어야 합니다. 카운터의 시작 값은 반복문 외부에서 생성되어야 하며, 조건을 충족하기 위한 모든 표현식(카운터 변경 포함)은 반복문 내부에서 유지되어야 합니다.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ 왜 for 반복문 대신 while 반복문을 선택할까요? StackOverflow에서 17K 명의 사용자가 같은 질문을 했으며, 일부 의견이 [흥미로울 수 있습니다](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## 반복문과 배열

배열은 반복문과 자주 함께 사용됩니다. 대부분의 조건은 배열의 길이를 사용하여 반복문을 멈추게 하며, 인덱스는 카운터 값으로도 사용할 수 있습니다.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ 브라우저의 콘솔에서 자신만의 배열을 생성하고 반복 처리해보세요.

---

## 🚀 도전 과제

배열을 반복 처리하는 방법은 for와 while 반복문 외에도 여러 가지가 있습니다. [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map)과 같은 방법을 사용하여 배열 반복문을 다시 작성해보세요.

## 강의 후 퀴즈
[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/14)

## 복습 및 자기 학습

JavaScript의 배열에는 데이터 조작에 매우 유용한 다양한 메서드가 포함되어 있습니다. [이 메서드들에 대해 읽어보고](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) push, pop, slice, splice와 같은 메서드를 자신만의 배열에 적용해보세요.

## 과제

[배열 반복 처리](assignment.md)

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.