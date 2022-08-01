# Основы JavaScript: Типы Данных

![Основы JavaScript - Типы данных](../../sketchnotes/webdev101-js-datatypes.png)

> Скетчноут [Tomomi Imura](https://twitter.com/girlie_mac)

## Предлекционный квиз

[Предлекционный квиз](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

Этот урок охватывает основы JavaScript, языка, обеспечивающего интерактивность в Интернете.

> Этот урок можно пройти на [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-13441-cxa)!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Переменные в JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Типы Данных в JavaScript")

> 🎥 Нажмите на изображение выше, чтобы посмотреть видеоролики о переменных и типах данных

Начнем с переменных и типов данных

## Переменные

В переменных хранятся значения, которые можно использовать и изменять в коде.

Создание и **объявление** переменной имеет следующий синтаксис: **[ключевое слово] [имя]**. Переменная состоит из двух частей:

- **Ключевое слово**. Ключевыми словами могут быть `let` или `var`.

✅ Ключевое слово `let` было введено в ES6 и дает вашей переменной так называемую _блочную область_. Рекомендуется использовать `let` вместо `var`. Мы рассмотрим блочные области более подробно в следующих частях.

- **Имя переменной**, это имя вы можете выбрать сами.

### Задача - работа с переменными

1. **Объявите переменную**. Давайте объявим переменную, используя ключевое слово `let`:

   ```javascript
   let myVariable;
   ```

   `myVariable` теперь объявлена с помощью ключевого слова `let`. В настоящее время у нее нет значения.

1. **Присвоить значение**. Сохраните значение переменной с помощью оператора `=`, за которым следует ожидаемое значение.

   ```javascript
   myVariable = 123;
   ```

   > Примечание: использование `=` в этом уроке означает, что мы используем "оператор присваивания", используемый для записи значения в переменную. Это не оператор равенства.

   `myVariable` теперь _инициализирован_ со значением 123.

1. **Рефакторинг**. Замените свой код следующим утверждением.

   ```javascript
   let myVariable = 123;
   ```

   Вышеприведенное утверждение называется _явной инициализацией_, когда переменная объявляется и одновременно с этим ей присваивается значение

1. **Измените значение переменной**. Измените значение переменной следующим образом:

   ```javascript
   myVariable = 321;
   ```

   Как только переменная объявлена, вы можете изменить ее значение в любой области вашего кода с помощью оператора `=` и нового значения.

   ✅ Попробуйте! Вы можете писать JavaScript код прямо в браузере. Откройте браузер, и перейдите в "Инструменты разработчика". Найдите вкладку "Консоль"; введите `let myVariable = 123`, нажмите клавишу Enter, затем введите `myVariable`. Что получилось? Обратите внимание, что вы узнаете больше об этих концепциях в следующих уроках.

## Константы

Объявление и инициализация константы следует той же концепции, что и переменная, за исключением ключевого слова `const`. Константы обычно объявляются заглавными буквами.

```javascript
const MY_VARIABLE = 123;
```

Константы аналогичны переменным, но с некоторыми исключениями:

- **Должна иметь значение**. Константы должны быть инициализированы, иначе при выполнении кода возникнет ошибка.
- **Ссылка не может быть изменена**. Ссылка на константу не может быть изменена после инициализации, иначе при выполнении кода возникнет ошибка. Давайте рассмотрим два примера:

  - **Simple value**. The following is NOT allowed:

    ```javascript
    const PI = 3;
    PI = 4; // not allowed
    ```

  - **Object reference is protected**. The following is NOT allowed.

    ```javascript
    const obj = { a: 3 };
    obj = { b: 5 }; // not allowed
    ```

  - **Object value is not protected**. The following IS allowed:

    ```javascript
    const obj = { a: 3 };
    obj.a = 5; // allowed
    ```

    Above you are changing the value of the object but not the reference itself, which makes it allowed.

  > Note, a `const` means the reference is protected from reassignment. The value is not _immutable_ though and can change, especially if it's a complex construct like an object.

## Data Types

Variables can store many different types of values, like numbers and text. These various types of values are known as the **data type**. Data types are an important part of software development because it helps developers make decisions on how the code should be written and how the software should run. Furthermore, some data types have unique features that help transform or extract additional information in a value.

✅ Data Types are also referred to as JavaScript data primitives, as they are the lowest-level data types that are provided by the language. There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol. Take a minute to visualize what each of these primitives might represent. What is a `zebra`? How about `0`? `true`?

### Numbers

In the previous section, the value of `myVariable` was a number data type.

`let myVariable = 123;`

Variables can store all types of numbers, including decimals or negative numbers. Numbers also can be used with arithmetic operators, covered in the [next section](#arithmetic-operators).

### Arithmetic Operators

There are several types of operators to use when performing arithmetic functions, and some are listed here:

| Symbol | Description                                                              | Example                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addition**: Calculates the sum of two numbers                          | `1 + 2 //expected answer is 3`   |
| `-`    | **Subtraction**: Calculates the difference of two numbers                | `1 - 2 //expected answer is -1`  |
| `*`    | **Multiplication**: Calculates the product of two numbers                | `1 * 2 //expected answer is 2`   |
| `/`    | **Division**: Calculates the quotient of two numbers                     | `1 / 2 //expected answer is 0.5` |
| `%`    | **Remainder**: Calculates the remainder from the division of two numbers | `1 % 2 //expected answer is 1`   |

✅ Try it! Try an arithmetic operation in your browser's console. Do the results surprise you?

### Strings

Strings are sets of characters that reside between single or double quotes.

- `'This is a string'`
- `"This is also a string"`
- `let myString = 'This is a string value stored in a variable';`

Remember to use quotes when writing a string, or else JavaScript will assume it's a variable name.

### Formatting Strings

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

**Template literals** are another way to format strings, except instead of quotes, the backtick is used. Anything that is not plain text must be placed inside placeholders `${ }`. This includes any variables that may be strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!`; //Hello, World!
```

You can achieve your formatting goals with either method, but template literals will respect any spaces and line breaks.

✅ When would you use a template literal vs. a plain string?

### Booleans

Booleans can be only two values: `true` or `false`. Booleans can help make decisions on which lines of code should run when certain conditions are met. In many cases, [operators](#arithmetic-operators) assist with setting the value of a Boolean and you will often notice and write variables being initialized or their values being updated with an operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ A variable can be considered 'truthy' if it evaluates to a boolean `true`. Interestingly, in JavaScript, [all values are truthy unless defined as falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Challenge

JavaScript is notorious for its surprising ways of handling datatypes on occasion. Do a bit of research on these 'gotchas'. For example: case sensitivity can bite! Try this in your console: `let age = 1; let Age = 2; age == Age` (resolves `false` -- why?). What other gotchas can you find?

## Post-Lecture Quiz

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/8)

## Review & Self Study

Take a look at [this list of JavaScript exercises](https://css-tricks.com/snippets/javascript/) and try one. What did you learn?

## Assignment

[Data Types Practice](assignment.md)
