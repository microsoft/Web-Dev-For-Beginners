# JavaScript 기초: 배열과 반복

![JavaScript Basics - Arrays](../images/webdev101-js-arrays.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[Pre-lecture quiz](../.github/pre-lecture-quiz.md)

이 강의에서는 웹에서 상호 작용을 제공하는 언어인 JavaScript의 기본 사항을 다룹니다. 데이터를 컨트롤하는 데 사용하는 배열과 반복문에 대해 알아 봅니다.

[![Arrays and Loops](https://img.youtube.com/vi/Q_CRM2lXXBg/0.jpg)](https://youtube.com/watch?v=Q_CRM2lXXBg "Arrays and Loops")

## 배열

데이터 작업은 모든 언어의 일반적인 작업이며, 데이터가 배열과 같은 구조으로 구성되면 훨씬 더 쉬운 작업입니다. 배열을 사용하면, 데이터가 리스트와 유사한 구조로 저장됩니다. 배열의 주요 장점 중 하나는 한 배열에 다양한 타입의 데이터를 저장할 수 있다는 것입니다.

✅ 배열은 우리 주변에 있습니다! 태양광 패널 배열과 같이 실생활의 사례를 생각할 수 있습니까?

배열 구문은 대괄호 쌍으로 이루어져 있습니다.

`let myArray = [];`

빈 배열이지만, 이미 데이터가 채워진 배열로 선언할 수 있습니다. 배열에 들어있는 여러가지 값들은 쉼표로 구분합니다.

`let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];`

배열 값에는 **index**라는 고유 값이 할당됩니다. 이 값은 배열 시작부터 측정한 길이를 기준으로 할당되는 정수입니다. 예시에서, 문자열 값 "Chocolate"의 인덱스는 0이고, "Rocky Road"의 인덱스는 4입니다. 배열 값을 검색하고, 변경하거나 넣으려면 대괄호가 있는 인덱스를 사용합니다.

✅ 배열이 0 인덱스에서 시작하는 것이 놀랍나요? 일부 프로그래밍 언어에서 인덱스는 1부터 시작합니다. 이와 관련된 흥미로운 기록이 있습니다, [Wikipedia에서 읽을 수 있습니다](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

인덱스를 활용하여 값을 변경할 수 있습니다:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

그리고 주어진 인덱스에 새로운 값을 넣을 수 있습니다:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ 값을 배열에 밀어 넣는 것보다 일반적인 방법은 array.push()와 같이 배열 연산자를 사용하는 것입니다.

배열에 있는 아이템 개수를 확인하려면, `length` 속성을 사용합니다.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 스스로 시도해보세요! 브라우저의 콘솔을 사용하여 직접 배열을 만들고 조작하십시오.

## 반복문

루프는 반복적이거나 **반복하는** 작업을 허용하며, 많은 시간과 코드를 절약할 수 있습니다. 각 iteration은 변수, 값 그리고 조건에서 다룰 수 있습니다. JavaScript에는 여러 유형의 반복문이 있으며, 약간의 차이가 있지만 기본적으로 동일한 작업을 수행합니다: 데이터 반복입니다.

### For 반복문

`for` 반복문으로 반복하려면 세 부분이 필요합니다:
    - `카운터` 일반적으로 반복 횟수를 세는 숫자로 초기화되는 변수입니다.
    - `조건` 비교 연산자를 사용하여 `true` 일 때 반복을 중단시키는 표현식
    - `반복-표현식` 각 반복의 마무리에 실행되며, 일반적으로 값을 세면서 변경할 떄 사용됩니다
  
```javascript
    //Counting up to 10
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
```

✅ 브라우저 콘솔에서 코드를 실행하십시오. 카운터, 조건 혹은 반복 표현식을 약간 변경하면 어떻게 되나요? 돌아와서 카운트 다운할 수 있습니까?

### While 반복문

`for` 반복문과 달리 `while` 반복문은 `true`일 때 반복을 중지하는 조건만 필요합니다. 반복의 조건은 일반적으로 카운터와 같이 다른 값에 의존하며, 반복하는 도중에 관리해야 합니다. 카운터의 시작 값은 반복문 밖에서 만들어야하며, 카운터 변경을 포함하여 조건을 충족하는 모든 표현식은 반복문 안에서 유지되어야 합니다.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ for 반복문과 while 반복문 중에 선택하는 이유는 무엇입니까? StackOverflow에 방문한 17K 명에게 동일한 질문을 했으며, 일부 의견은 [흥미로울 수 있습니다](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## 반복문과 배열

대부분의 조건문에서 반복을 그만하기 위해서는 배열 길이가 필요하고, 인덱스는 카운터 값이 될 수도 있기 때문에 배열은 반복문과 자주 사용됩니다.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ 브라우저 콘솔에서 직접 만든 배열을 반복하여 실험해보세요.

---

## 🚀 도전

for문과 while문 외에 배열을 반복하는 다른 방법이 있습니다. [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) 그리고 [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)도 있습니다. 해당 기술 중 하나를 사용하여 배열 반복을 다시 작성하십시오.

## 강의 후 퀴즈
[Post-lecture quiz](../.github/post-lecture-quiz.md)


## 리뷰 & 자기주도 학습

JavaScript의 배열에는 많은 메서드를 가져서 데이터 조작에 매우 유용합니다. [이 방법에 대해 읽어보고](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 만든 배열에서 몇 가지(push, pop, slice 그리고 splice와 같은) 방식을 시도해보십시오.

## 과제

[Loop an Array](../assignment.md)
