<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-23T22:39:00+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "ko"
}
-->
# JavaScript 기초: 결정 내리기

![JavaScript Basics - Making decisions](../../../../sketchnotes/webdev101-js-decisions.png)

> 스케치노트 제공: [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈

[강의 전 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/11)

결정을 내리고 코드 실행 순서를 제어하는 것은 코드를 재사용 가능하고 견고하게 만듭니다. 이 섹션에서는 JavaScript에서 데이터 흐름을 제어하는 구문과 Boolean 데이터 타입과 함께 사용할 때의 중요성을 다룹니다.

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 위 이미지를 클릭하면 결정 내리기에 대한 영상을 볼 수 있습니다.

> 이 강의를 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)에서 수강할 수 있습니다!

## Boolean에 대한 간단한 복습

Boolean은 `true` 또는 `false` 두 가지 값만 가질 수 있습니다. Boolean은 특정 조건이 충족될 때 어떤 코드 줄을 실행할지 결정하는 데 도움을 줍니다.

Boolean 값을 다음과 같이 설정할 수 있습니다:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Boolean은 영국의 수학자, 철학자, 논리학자인 조지 불(George Boole, 1815–1864)의 이름을 따서 명명되었습니다.

## 비교 연산자와 Boolean

연산자는 조건을 평가하고 Boolean 값을 생성하기 위해 비교를 수행하는 데 사용됩니다. 아래는 자주 사용되는 연산자 목록입니다.

| 기호   | 설명                                                                                                                                                   | 예시                |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| `<`    | **작다**: 두 값을 비교하여 왼쪽 값이 오른쪽 값보다 작으면 `true` Boolean 값을 반환합니다.                                                               | `5 < 6 // true`     |
| `<=`   | **작거나 같다**: 두 값을 비교하여 왼쪽 값이 오른쪽 값보다 작거나 같으면 `true` Boolean 값을 반환합니다.                                                 | `5 <= 6 // true`    |
| `>`    | **크다**: 두 값을 비교하여 왼쪽 값이 오른쪽 값보다 크면 `true` Boolean 값을 반환합니다.                                                                 | `5 > 6 // false`    |
| `>=`   | **크거나 같다**: 두 값을 비교하여 왼쪽 값이 오른쪽 값보다 크거나 같으면 `true` Boolean 값을 반환합니다.                                                 | `5 >= 6 // false`   |
| `===`  | **엄격한 동등성**: 두 값을 비교하여 값이 같고 데이터 타입도 같으면 `true` Boolean 값을 반환합니다.                                                      | `5 === 6 // false`  |
| `!==`  | **불일치**: 두 값을 비교하여 엄격한 동등성 연산자가 반환하는 값의 반대 Boolean 값을 반환합니다.                                                        | `5 !== 6 // true`   |

✅ 브라우저의 콘솔에서 몇 가지 비교를 작성해 보세요. 반환된 데이터 중 놀라운 것이 있나요?

## If 문

`if` 문은 조건이 참일 경우 블록 안의 코드를 실행합니다.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

논리 연산자는 종종 조건을 구성하는 데 사용됩니다.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else 문

`else` 문은 조건이 거짓일 경우 블록 안의 코드를 실행합니다. `if` 문과 함께 사용하는 것은 선택 사항입니다.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ 브라우저 콘솔에서 이 코드와 아래 코드를 실행해 보며 이해도를 테스트하세요. `currentMoney`와 `laptopPrice` 변수의 값을 변경하여 `console.log()`의 반환값을 바꿔보세요.

## Switch 문

`switch` 문은 다양한 조건에 따라 다른 동작을 수행하는 데 사용됩니다. `switch` 문을 사용하여 실행할 여러 코드 블록 중 하나를 선택할 수 있습니다.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ 브라우저 콘솔에서 이 코드와 아래 코드를 실행해 보며 이해도를 테스트하세요. 변수 `a`의 값을 변경하여 `console.log()`의 반환값을 바꿔보세요.

## 논리 연산자와 Boolean

결정은 여러 비교를 필요로 할 수 있으며, 논리 연산자를 사용하여 Boolean 값을 생성할 수 있습니다.

| 기호   | 설명                                                                                     | 예시                                                                  |
| ------ | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **논리 AND**: 두 Boolean 표현식을 비교합니다. 양쪽 모두 참일 경우에만 `true`를 반환합니다. | `(5 > 6) && (5 < 6) // 한쪽은 거짓이고 다른 쪽은 참입니다. false 반환` |
| `\|\|` | **논리 OR**: 두 Boolean 표현식을 비교합니다. 한쪽이라도 참이면 `true`를 반환합니다.       | `(5 > 6) \|\| (5 < 6) // 한쪽은 거짓이고 다른 쪽은 참입니다. true 반환` |
| `!`    | **논리 NOT**: Boolean 표현식의 반대 값을 반환합니다.                                      | `!(5 > 6) // 5는 6보다 크지 않지만 "!"는 true를 반환합니다.`           |

## 논리 연산자를 사용한 조건과 결정

논리 연산자는 `if..else` 문에서 조건을 구성하는 데 사용될 수 있습니다.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### 부정 연산자

지금까지 `if...else` 문을 사용하여 조건부 로직을 만드는 방법을 살펴보았습니다. `if` 안에 들어가는 모든 것은 true/false로 평가되어야 합니다. `!` 연산자를 사용하면 표현식을 _부정_할 수 있습니다. 다음과 같이 보일 것입니다:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### 삼항 표현식

`if...else`는 결정 로직을 표현하는 유일한 방법이 아닙니다. 삼항 연산자라고 불리는 것을 사용할 수도 있습니다. 구문은 다음과 같습니다:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

아래는 더 구체적인 예입니다:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ 이 코드를 몇 번 읽어보세요. 이 연산자들이 어떻게 작동하는지 이해가 되나요?

위 코드는 다음을 의미합니다:

- 만약 `firstNumber`가 `secondNumber`보다 크다면  
- `firstNumber`를 `biggestNumber`에 할당합니다.  
- 그렇지 않으면 `secondNumber`를 할당합니다.

삼항 표현식은 아래 코드를 간단히 작성한 방식입니다:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 도전 과제

논리 연산자를 사용하여 작성된 프로그램을 만들고, 이를 삼항 표현식을 사용하여 다시 작성해 보세요. 어떤 구문이 더 선호되나요?

---

## 강의 후 퀴즈

[강의 후 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/12)

## 복습 및 자기 학습

사용자가 사용할 수 있는 다양한 연산자에 대해 더 알아보려면 [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators)을 참조하세요.

Josh Comeau의 훌륭한 [연산자 조회](https://joshwcomeau.com/operator-lookup/)를 확인해 보세요!

## 과제

[Operators](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.