# JavaScript 기초: 데이터 타입

![JavaScript Basics - Data types](/sketchnotes/webdev101-js-datatypes.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[Pre-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/7?loc=ko)

해당 강의에서는 웹에서 상호작용을 제공하는 언어인 JavaScript의 기초를 다룹니다. 

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")


변수와 변수를 채워주는 데이터 타입부터 시작합니다!

## 변수

변수는 코드에서 사용하며 변경할 수 있는 값을 저장합니다.

변수를 만들고 **선언** 하는 구문은 **[keyword] [name]** 입니다. 두 부분으로 이루어집니다:

- **키워드**. 키워드는 `let` 또는 `var`로 지정할 수 있습니다.  

   > Note, 키워드 `let`은 ES6에서 도입되었으며 변수에 _block scope_ 를 제공합니다. `var`보다` let`을 사용하는 것이 좋습니다. 향후 부분에서 블록 범위를 더 자세히 다룰 것입니다.
- **변수 이름**, 스스로 선택한 이름입니다.

### 작업 - 변수와 작업하기

1. **변수 선언하기**. `let` 키워드를 사용하여 변수를 선언해봅시다:

    ```javascript
    let myVariable;
    ```

   이제 `myVariable`이 `let` 키워드를 사용하여 선언되었습니다. 현재는 값을 가지고 있지 않습니다.

1. **값 할당하기**. `=` 연산자로 변수에 값을 저장합니다, 예상 값이 따릅니다.

    ```javascript
    myVariable = 123;
    ```

   > Note: 이 강의에서 `=`을 사용한다는 것은 변수에 값을 지정하는 데 사용되는 "할당 연산자" 로 사용되는 것을 의미합니다. 같다는 의미가 아닙니다.

   `myVariable`는 이제 123 값으로 *초기화* 되었습니다.

1. **리펙토링**. 코드를 다음 구문으로 바꿉니다.

    ```javascript
    let myVariable = 123;
    ```

    위는 변수가 선언되면서 동시에 값이 할당되는 순간을 _명시적 초기화_ 라고 합니다.

1. **변수 값 변경하기**. 다음과 같이 변수 값을 변경합니다:

   ```javascript
   myVariable = 321;
   ```

   변수가 선언되면, `=` 연산자와 새 값을 사용하여 코드에서 언제든지 값을 변경할 수 있습니다.

   ✅ 시도해보세요! 브라우저에서 바로 JavaScript를 작성할 수 있습니다. 브라우저 창을 열고 개발자 도구로 이동합니다. 콘솔에서, 프롬프트를 찾을 수 있습니다; `let myVariable = 123` 을 입력하고 Return 키를 누른 다음, `myVariable`을 입력합니다. 무슨 일이 일어났나요? 이후 강의에서 이러한 개념에 대해 자세히 알아볼 것 입니다.

## 상수

상수를 선언하고 초기화하는 것은 `const` 키워드를 제외하면 변수와 동일한 개념을 따릅니다. 상수는 일반적으로 모두 대문자로 선언됩니다.

```javascript
const MY_VARIABLE = 123;
```

상수는 변수와 유사하지만, 두 차이점이 있습니다:

- **반드시 값이 있어야 합니다**. 상수는 초기화를 하지 않는다면, 코드 실행 중에 오류가 발생합니다.
- **참조는 변경 불가합니다**. 상수 참조는 초기화된 후에는 변경할 수 없으며, 코드 실행 중에 오류가 발생합니다. 두 가지 예를 살펴 보겠습니다:
   - **Simple value**. 허용하지 않습니다:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **객체 참고는 보호됩니다**. 허용하지 않습니다:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **객체 값은 보호되지 않습니다**. 허용합니다:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      위는 객체의 값을 변경하지만 참조 자체는 변경하지 않으므로, 허용됩니다.

   > Note, `const`는 참조가 다시 할당되지 않도록 보호한다는 점을 의미합니다. 값은 _immutable_ 이 아니며 객체와 같은 복잡한 구조인 경우, 변경될 수 있습니다.

## 데이터 타입

변수는 숫자 및 텍스트와 같은, 다양한 타입의 값을 저장할 수 있습니다. 이러한 다양한 타입의 값을 **데이터 타입**이라고 합니다. 데이터 타입은 개발자가 코드 작성 방법과 소프트웨어 실행 방법에 대한 결정을 내리는 데 도움이 되므로 소프트웨어 개발의 중요한 부분입니다. 또한 일부 데이터 타입에는 값에서 추가 정보를 변환하거나 추출하는 데 도움이 되는 기능이 있습니다.

✅ 데이터 타입은 언어에서 제공하는 저수준 데이터 타입이기 때문에 JavaScript data primitives 라고 합니다. 6개의 기본 데이터 유형이 있습니다: 문자열, 숫자, bigint, 논리 자료형, undefined 그리고 심볼. 몇 분을 투자하여 각 기본 요소가 무엇을 나타낼 수 있는지 시각화하십시오. `zebra`은 무엇입니까? `0`? `true`는 어떤가요?

### 숫자

이전 세션에서, `myVariable`의 값은 숫자 데이터 유형입니다.

`let myVariable = 123;`

변수는 소수 또는 음수를 포함하여 모든 유형의 숫자를 저장할 수 있습니다. 숫자는 [next section](#산술-연산자)에서 다룰 산술 연산자와 함께 사용할 수도 있습니다.

### 산술 연산자

산술 함수를 수행할 때 사용할 여러 유형의 연산자가 있으며, 일부는 다음과 같습니다:

| Symbol | Description                                                              | Example                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addition**: Calculates the sum of two numbers                          | `1 + 2 //expected answer is 3`   |
| `-`    | **Subtraction**: Calculates the difference of two numbers                | `1 - 2 //expected answer is -1`  |
| `*`    | **Multiplication**: Calculates the product of two numbers                | `1 * 2 //expected answer is 2`   |
| `/`    | **Division**: Calculates the quotient of two numbers                     | `1 / 2 //expected answer is 0.5` |
| `%`    | **Remainder**: Calculates the remainder from the division of two numbers | `1 % 2 //expected answer is 1`   |

✅ 시도해보세요! 브라우저의 콘솔에서 산술 연산을 시도하십시오. 놀라운 결과인가요?

### 문자열

문자열은 작은 따옴표 또는 큰 따옴표 사이에 있는 문자의 세트입니다.

- `'This is a string'`
- `"This is also a string"`
- `let myString = 'This is a string value stored in a variable';`

문자열을 만들 때 따옴표를 사용해야합니다. 그렇지 않으면 JavaScript가 변수명으로 간주합니다.

### 문자열 서식

문자열은 텍스트이며, 때때로 포맷팅이 필요합니다.

둘 이상의 문자열을 **연결**하거나 결합하려면 `+` 연산자를 사용하세요.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ 왜 JavaScript에서 `1 + 1 = 2`이지만, `'1'+ '1'= 11` 일까요?  `'1' + 1`은 어떻습니까?

**템플릿 리터럴** 따옴표 대신 backtick이 사용된다는 점을 제외하면, 문자열을 형식화하는 또 다른 방법입니다. 일반 텍스트가 아닌 모든 것은 placeholders `${ }`안에 배치해야합니다. 여기에는 문자열일 수도 있는 모든 변수가 포함됩니다.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello World!
```

어느 방법이든지 포맷팅 목표를 달성할 수 있지만, 템플릿 리터럴은 모든 공백과 줄 바꿈을 고려합니다.

✅ 템플릿 리터럴과 일반적인 문자열은 언제 사용합니까?

### 논리 자료형

논리 자료형은 `true` 또는 `false` 두 가지 값만 가능합니다. 논리 자료형은 특정 조건이 충족되며 실행할 코드 라인을 결정하는 순간 도움이 될 수 있습니다. 대부분의 경우, [operators](#산술-연산자)는 논리 연산자 값을 설정하는 데 도움이 되며, 변수 초기화되거나 해당 값이 연산자로 업데이트되는 것을 알고 쓰는 경우가 많습니다.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ 변수가 논리 자료형이 `true`로 설정되면 '참'으로 간주될 수 있습니다. 흥미롭게도, JavaScript에서는 [거짓으로 정의되지 않는다면 모든 값은 참입니다](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 도전

JavaScript는 때때로 놀라운 방법으로 데이터 타입을 처리하는 것으로 유명합니다. 'gotchas'에 대해 약간 알아보세요. 예시: 대소문자 구분은 물릴 수 있습니다! 콘솔에서 다음을 시도하십시오: `let age = 1; let Age = 2; age == Age` (resolves `false` -- why?). 다른 문제를 찾을 수 있습니까?

## 강의 후 퀴즈
[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/8?loc=ko)

## 리뷰 & 자기주도 학습

[이 JavaScript 실습 목록](https://css-tricks.com/snippets/javascript/)을 살펴보고 시도해보십시오. 무엇을 배울 수 있나요?

## 과제

[Data Types Practice](../assignment.md)