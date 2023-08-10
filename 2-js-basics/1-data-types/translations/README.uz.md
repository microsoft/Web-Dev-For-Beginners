# JavaScript asoslari: ma'lumotlar turlari

![JavaScript asoslari: ma'lumotlar turlari](../../sketchnotes/webdev101-js-datatypes.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Maruza oldi viktorinasi
[Maruza-oldi viktorinasi](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

Ushbu dars JavaScript-ning asoslarini qamrab oladi, bu til Internetda interaktivlikni ta'minlaydi.

> Ushbu darsni [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon) bilan o'rganishingiz mumkin!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

> 🎥 Oʻzgaruvchilar va maʼlumotlar turlari haqidagi videolar uchun yuqoridagi rasmlarni bosing

Keling, o'zgaruvchilar va ularni to'ldiradigan ma'lumotlar turlaridan boshlaylik!
## O'zgaruvchilar

O'zgaruvchilar kodingiz davomida ishlatilishi va o'zgartirilishi mumkin bo'lgan qiymatlarni saqlaydi.

O'zgaruvchini yaratish va **e'lon qilish** quyidagi sintaksisga ega **[kalit so'z] [nom]**. U ikki qismdan iborat:

- **Kalit so'zi**. Bu `let` yoki `var` bo'lishi mumkin.  

✅ Let kalit so'zi ES6 da kiritilgan va o'zgaruvchingizga _blok scope_ deb ataladigan imkoniyatni beradi. `var` o'rniga `let`dan foydalanish tavsiya etiladi. Kelgusi qismlarda blok doiralarini chuqurroq yoritamiz
- **O'zgaruvchi nomi**, Bu o'zingiz tanlagan qandaydir nom.

### Topshiriq - variablelar bilan ishlash

1. **O'zgaruvchilarni elon qilish**.
Keling `let` kalit so'zi orqali o'zgaruvchini elon qilamiz:

    ```javascript
    let myVariable;
    ```

   `myVariable` endi `let` kalit so'zi yordamida e`lon qilindi. Hozirda uning qiymati yo'q.
   
1. **Qiymat tayinlash**. Buni o'zgaruvchida `=` operatori va undan keyin kutilgan qiymat bilan saqlang.

    ```javascript
    myVariable = 123;
    ```

   >  Eslatma: bu darsda `=` dan foydalanish biz o'zgaruvchiga qiymat o'rnatish uchun ishlatiladigan "tayinlash operatori" dan foydalanishimizni bildiradi. Bu tenglikni anglatmaydi.

    `myVariable` endi 123 qiymati bilan * ishga tushirildi*.

1. **Refaktor**. Kodingizni quyidagi bilan almashtiring.

    ```javascript
    let myVariable = 123;
    ```

    The above is called an _explicit initialization_ when a variable is declared and is assigned a value at the same time.

1. **Change the variable value**. Change the variable value in the following way:

   ```javascript
   myVariable = 321;
   ```

   Agar o'zgaruvchi e'lon qilingan va bir vaqtning o'zida qiymat berilgan bo'lsa, yuqoridagilar _explicit initialization_, yani _aniq ishga tushirish_ deb ataladi.
   
   > ✅ Urunib ko'ring! JavaScript-ni to'g'ridan-to'g'ri brauzeringizda yozishingiz mumkin.
   Brauzer oynasini oching va Developer Tools-ga o'ting (kilaviatura yordamida: `ctrl+shift+i`). Konsolda siz so'rovni topasiz; “let myVariable = 123” deb yozing, enter tugmasini bosing, keyin `myVariable` deb yozing. Nima bo'ladi? E'tibor bering, siz keyingi darslarda ushbu tushunchalar haqida ko'proq bilib olasiz.

## Constants

Declaration and initialization of a constant follows the same concepts as a variable, with the exception of the `const` keyword. Constants are typically declared with all uppercase letters.

```javascript
const MY_VARIABLE = 123;
```

Constants are similar to variables, with two exceptions:

- **Must have a value**. Constants must be initialized, or an error will occur when running code.
- **Reference cannot be changed**. The reference of a constant cannot be changed once initialized, or an error will occur when running code. Let's look at two examples:
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

## Data Types

Variables can store many different types of values, like numbers and text. These various types of values are known as the **data type**. Data types are an important part of software development because it helps developers make decisions on how the code should be written and how the software should run. Furthermore, some data types have unique features that help transform or extract additional information in a value.

✅ Data Types are also referred to as JavaScript data primitives, as they are the lowest-level data types that are provided by the language. There are 7 primitive data types: string, number, bigint, boolean, undefined, null and symbol. Take a minute to visualize what each of these primitives might represent. What is a `zebra`? How about `0`? `true`?

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

**Template literals** are another way to format strings, except instead of quotes, the backtick  is used. Anything that is not plain text must be placed inside placeholders `${ }`. This includes any variables that may be strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
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
