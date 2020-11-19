# JavaScript 기초: 데이터 타입

![JavaScript Basics - Data types](images/webdev101-js-datatypes.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[Pre-lecture quiz](.github/pre-lecture-quiz.md)

해당 강의에서는 웹에서 상호작용을 제공하는 언어인 JavaScript의 기초를 다룹니다. 

[![Data types in JavaScript](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Data types in JavaScript")


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

Constants are similar to variables, with two exceptions:

- **반드시 값이 있어야 합니다**. Constants must be initialized, or an error will occur when running code.
- **참조는 변경 불가합니다**. The reference of a constant cannot be changed once initialized, or an error will occur when running code. Let's look at two examples:
   - **Simple value**. The following is NOT allowed:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Object reference is protected**. The following is NOT allowed.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Object value is not protected**. The following IS allowed:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Above you are changing the value of the object but not the reference itself, which makes it allowed.

   > Note, a `const` means the reference is protected from reassignment. The value is not _immutable_ though and can change, especially if it's a complex construct like an object.

## 데이터 타입

Variables can store many different types of values, like numbers and text. These various types of values are known as the **data type**. Data types are an important part of software development because it helps developers make decisions on how the code should be written and how the software should run. Furthermore, some data types have unique features that help transform or extract additional information in a value.

✅ Data Types are also referred to as JavaScript data primitives, as they are the lowest-level data types that are provided by the language. There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol. Take a minute to visualize what each of these primitives might represent. What is a `zebra`? How about `0`? `true`?

### 숫자

In the previous section, the value of `myVariable` was a number data type.

`let myVariable = 123;`

Variables can store all types of numbers, including decimals or negative numbers. Numbers also can be used with arithmetic operators, covered in the [next section](#operators).

### 산술 연산자

There are several types of operators to use when performing arithmetic functions, and some are listed here:

| Symbol | Description                                                              | Example                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addition**: Calculates the sum of two numbers                          | `1 + 2 //expected answer is 3`   |
| `-`    | **Subtraction**: Calculates the difference of two numbers                | `1 - 2 //expected answer is -1`  |
| `*`    | **Multiplication**: Calculates the product of two numbers                | `1 * 2 //expected answer is 2`   |
| `/`    | **Division**: Calculates the quotient of two numbers                     | `1 / 2 //expected answer is 0.5` |
| `%`    | **Remainder**: Calculates the remainder from the division of two numbers | `1 % 2 //expected answer is 1`   |

✅ Try it! Try an arithmetic operation in your browser's console. Do the results surprise you?

### 문자열

Strings are sets of characters that reside between single or double quotes.

- `'This is a string'`
- `"This is also a string"`
- `let myString = 'This is a string value stored in a variable';`

Remember to use quotes when writing a string, or else JavaScript will assume it's a variable name.

### 문자열 서식

Strings are textual, and will require formatting from time to time.

To **concatenate** two or more strings, or join them together, use the `+` operator.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Why does `1 + 1 = 2` in JavaScript, but `'1' + '1' = 11?` Think about it. What about `'1' + 1`?

**템플릿 리터럴** are another way to format strings, except instead of quotes, the backtick  is used. Anything that is not plain text must be placed inside placeholders `${ }`. This includes any variables that may be strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello World!
```

You can achieve your formatting goals with either method, but template literals will respect any spaces and line breaks.

✅ When would you use a template literal vs. a plain string?

### 논리 자료형

Booleans can be only two values: `true` or `false`. Booleans can help make decisions on which lines of code should run when certain conditions are met. In many cases, [operators](#operators) assist with setting the value of a Boolean and you will often notice and write variables being initialized or their values being updated with an operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ A variable can be considered 'truthy' if it evaluates to a boolean `true`. Interestingly, in JavaScript, [all values are truthy unless defined as falsy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

---

## 🚀 도전

JavaScript는 때때로 놀라운 방법으로 데이터 타입을 처리하는 것으로 유명합니다. 'gotchas'에 대해 약간 알아보세요. 예시: 대소문자 구분은 물릴 수 있습니다! 콘솔에서 다음을 시도하십시오: `let age = 1; let Age = 2; age == Age` (resolves `false` -- why?). 다른 문제를 찾을 수 있습니까?

## 강의 후 퀴즈
[Post-lecture quiz](.github/post-lecture-quiz.md)

## 리뷰 & 자기주도 학습

Take a look at [this list of JavaScript exercises](https://css-tricks.com/snippets/javascript/) and try one. 무엇을 배울 수 있나요?

## 과제

[Data Types Practice](assignment.md)