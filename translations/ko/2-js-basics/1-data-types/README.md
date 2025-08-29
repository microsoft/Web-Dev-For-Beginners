<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b95fdd8310ef467305015ece1b0f9411",
  "translation_date": "2025-08-29T15:41:16+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "ko"
}
-->
# JavaScript 기초: 데이터 타입

![JavaScript Basics - Data types](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.ko.png)
> 스케치노트 제공: [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/)

이 강의에서는 웹에서 상호작용을 제공하는 언어인 JavaScript의 기초를 다룹니다.

> 이 강의를 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)에서 수강할 수 있습니다!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

> 🎥 위 이미지를 클릭하면 변수와 데이터 타입에 대한 동영상을 볼 수 있습니다.

변수와 그 안에 담기는 데이터 타입부터 시작해 봅시다!

## 변수

변수는 코드 전반에서 사용할 수 있고 변경 가능한 값을 저장합니다.

변수를 **선언**하는 구문은 **[키워드] [이름]** 형태로 이루어져 있습니다. 이는 두 가지 부분으로 구성됩니다:

- **키워드**. 키워드는 `let` 또는 `var`일 수 있습니다.  

✅ ES6에서 도입된 `let` 키워드는 변수에 _블록 스코프_를 제공합니다. `var`보다 `let`을 사용하는 것이 권장됩니다. 블록 스코프에 대해서는 이후 강의에서 더 자세히 다룰 예정입니다.
- **변수 이름**. 이는 사용자가 직접 선택하는 이름입니다.

### 과제 - 변수 다루기

1. **변수 선언하기**. `let` 키워드를 사용하여 변수를 선언해 봅시다:

    ```javascript
    let myVariable;
    ```

   이제 `myVariable`이 `let` 키워드를 사용하여 선언되었습니다. 현재 값은 없습니다.

1. **값 할당하기**. `=` 연산자를 사용하여 변수에 값을 저장합니다. 뒤에는 기대하는 값이 옵니다.

    ```javascript
    myVariable = 123;
    ```

   > 참고: 이 강의에서 `=`는 "할당 연산자"를 의미하며, 변수에 값을 설정하는 데 사용됩니다. 이는 동등성을 나타내는 것이 아닙니다.

   이제 `myVariable`이 값 123으로 *초기화*되었습니다.

1. **리팩터링**. 코드를 다음 문장으로 교체하세요.

    ```javascript
    let myVariable = 123;
    ```

    위 코드는 변수를 선언하고 동시에 값을 할당하는 것을 _명시적 초기화_라고 합니다.

1. **변수 값 변경하기**. 변수 값을 다음과 같이 변경해 보세요:

   ```javascript
   myVariable = 321;
   ```

   변수가 선언된 후에는 코드의 어느 지점에서든 `=` 연산자와 새로운 값을 사용하여 값을 변경할 수 있습니다.

   ✅ 직접 해보세요! 브라우저에서 JavaScript를 바로 작성할 수 있습니다. 브라우저 창을 열고 개발자 도구로 이동하세요. 콘솔에서 `let myVariable = 123`을 입력하고 엔터를 누른 후 `myVariable`을 입력해 보세요. 어떤 일이 일어나나요? 이 개념에 대해 더 자세히는 이후 강의에서 배울 것입니다.

## 상수

상수의 선언과 초기화는 변수와 동일한 개념을 따르지만, `const` 키워드를 사용한다는 점이 다릅니다. 상수는 일반적으로 모두 대문자로 선언됩니다.

```javascript
const MY_VARIABLE = 123;
```

상수는 변수와 비슷하지만 두 가지 예외가 있습니다:

- **값이 반드시 있어야 함**. 상수는 초기화되어야 하며, 그렇지 않으면 코드 실행 시 오류가 발생합니다.
- **참조를 변경할 수 없음**. 상수가 초기화된 후에는 참조를 변경할 수 없으며, 그렇지 않으면 코드 실행 시 오류가 발생합니다. 두 가지 예를 살펴봅시다:
   - **단순 값**. 다음은 허용되지 않습니다:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **객체 참조 보호**. 다음은 허용되지 않습니다:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **객체 값은 보호되지 않음**. 다음은 허용됩니다:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      위의 경우 객체의 값을 변경하고 있지만 참조 자체는 변경하지 않으므로 허용됩니다.

   > 참고: `const`는 참조가 재할당으로부터 보호된다는 것을 의미합니다. 그러나 값 자체는 _불변_이 아니며, 특히 객체와 같은 복잡한 구조일 경우 변경될 수 있습니다.

## 데이터 타입

변수는 숫자나 텍스트와 같은 다양한 종류의 값을 저장할 수 있습니다. 이러한 다양한 값의 종류를 **데이터 타입**이라고 합니다. 데이터 타입은 소프트웨어 개발에서 중요한 부분으로, 개발자가 코드 작성 방식과 소프트웨어 실행 방식을 결정하는 데 도움을 줍니다. 또한 일부 데이터 타입은 값에서 추가 정보를 변환하거나 추출하는 데 유용한 고유한 기능을 가지고 있습니다.

✅ 데이터 타입은 JavaScript 데이터 원시 타입이라고도 하며, 언어에서 제공하는 가장 낮은 수준의 데이터 타입입니다. 원시 데이터 타입에는 문자열(string), 숫자(number), 빅인트(bigint), 불리언(boolean), undefined, null, 심볼(symbol)이 있습니다. 각 원시 타입이 무엇을 나타내는지 잠시 생각해 보세요. `zebra`는 무엇일까요? `0`은요? `true`는요?

### 숫자

이전 섹션에서 `myVariable`의 값은 숫자 데이터 타입이었습니다.

`let myVariable = 123;`

변수는 소수나 음수를 포함한 모든 종류의 숫자를 저장할 수 있습니다. 숫자는 [다음 섹션](../../../../2-js-basics/1-data-types)에서 다룰 산술 연산자와 함께 사용할 수도 있습니다.

### 산술 연산자

산술 기능을 수행할 때 사용할 수 있는 여러 종류의 연산자가 있으며, 일부는 아래에 나와 있습니다:

| 기호   | 설명                                                                   | 예제                              |
| ------ | ---------------------------------------------------------------------- | --------------------------------- |
| `+`    | **덧셈**: 두 숫자의 합을 계산합니다                                    | `1 + 2 //기대 결과는 3`           |
| `-`    | **뺄셈**: 두 숫자의 차를 계산합니다                                    | `1 - 2 //기대 결과는 -1`          |
| `*`    | **곱셈**: 두 숫자의 곱을 계산합니다                                    | `1 * 2 //기대 결과는 2`           |
| `/`    | **나눗셈**: 두 숫자의 몫을 계산합니다                                  | `1 / 2 //기대 결과는 0.5`         |
| `%`    | **나머지**: 두 숫자를 나눈 나머지를 계산합니다                         | `1 % 2 //기대 결과는 1`           |

✅ 직접 해보세요! 브라우저 콘솔에서 산술 연산을 시도해 보세요. 결과가 놀랍나요?

### 문자열

문자열은 작은따옴표나 큰따옴표 사이에 있는 문자 집합입니다.

- `'이것은 문자열입니다'`
- `"이것도 문자열입니다"`
- `let myString = '이것은 변수에 저장된 문자열 값입니다';`

문자열을 작성할 때 따옴표를 사용해야 합니다. 그렇지 않으면 JavaScript는 이를 변수 이름으로 간주합니다.

### 문자열 포맷팅

문자열은 텍스트로 구성되어 있으며, 때로는 포맷팅이 필요합니다.

두 개 이상의 문자열을 **연결**하거나 합치려면 `+` 연산자를 사용하세요.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ 왜 JavaScript에서 `1 + 1 = 2`인데 `'1' + '1' = 11`일까요? 생각해 보세요. `'1' + 1`은요?

**템플릿 리터럴**은 문자열을 포맷팅하는 또 다른 방법으로, 따옴표 대신 백틱을 사용합니다. 순수 텍스트가 아닌 모든 것은 `${ }` 안에 넣어야 합니다. 여기에는 문자열일 수 있는 변수도 포함됩니다.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

두 가지 방법 모두 포맷팅 목표를 달성할 수 있지만, 템플릿 리터럴은 공백과 줄 바꿈을 존중합니다.

✅ 템플릿 리터럴과 일반 문자열은 언제 사용해야 할까요?

### 불리언

불리언은 `true` 또는 `false` 두 가지 값만 가질 수 있습니다. 불리언은 특정 조건이 충족될 때 어떤 코드 줄이 실행될지를 결정하는 데 도움을 줍니다. 많은 경우 [연산자](../../../../2-js-basics/1-data-types)가 불리언 값을 설정하는 데 도움을 주며, 변수가 초기화되거나 값이 업데이트되는 것을 자주 볼 수 있습니다.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ 변수가 불리언 `true`로 평가되면 'truthy'로 간주될 수 있습니다. 재미있게도, JavaScript에서는 [정의된 'falsy' 값이 아닌 모든 값이 truthy](https://developer.mozilla.org/docs/Glossary/Truthy)입니다.

---

## 🚀 도전 과제

JavaScript는 때때로 데이터 타입을 처리하는 놀라운 방식으로 악명이 높습니다. 이러한 '함정'에 대해 조금 조사해 보세요. 예를 들어, 대소문자 구분이 문제를 일으킬 수 있습니다! 콘솔에서 다음을 시도해 보세요: `let age = 1; let Age = 2; age == Age` (결과는 `false` -- 왜 그럴까요?). 또 어떤 함정을 찾을 수 있나요?

## 강의 후 퀴즈
[강의 후 퀴즈](https://ff-quizzes.netlify.app)

## 복습 및 자기 학습

[JavaScript 연습 문제 목록](https://css-tricks.com/snippets/javascript/)을 살펴보고 하나를 시도해 보세요. 무엇을 배웠나요?

## 과제

[데이터 타입 연습](assignment.md)

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.