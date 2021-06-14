# JavaScript 基础：数据类型

![JavaScript Basics - Data types](/sketchnotes/webdev101-js-datatypes.png)
> 涂鸦笔记作者：[Tomomi Imura](https://twitter.com/girlie_mac)

## 课前小测
[课前小测](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/7?loc=zh_cn)

这节课将会介绍 JavaScript 的基础知识，正是它为网页提供了可交互性。

[![Data types in JavaScript](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "JavaScript 中的数据类型")

让我们从它最基础的组成部分 —— “变量”和“数据类型”学起吧！

## 变量（Variables）

变量用于存储会在你的代码中被使用和被改变的值。

创建和**声明**变量的语句是：**[关键字] [变量名]**，其由两部分组成：

- **关键字（Keyword）**。关键字可以是 `let` 或者 `var`。

   > 注意，`let` 关键字在 ES6 标准才被引入，会给你的变量一个 _块级作用域（block scope）_。一般建议使用 `let` 而非 `var`。我们将会在未来的章节中深入介绍块级作用域。
- **变量名（The variable name）**。你可以自己给变量起个名字。

### 任务：使用变量

1. **声明一个变量**。让我们用 `let` 关键字声明一个变量：

    ```javascript
    let myVariable;
    ```

   `myVariable` 现在就被用 `let` 关键字声明好了，但目前还没有被赋予一个值。

1. **赋值**。使用 `=` 运算符跟上一个期望的值来将一个值存储到变量中。

    ```javascript
    myVariable = 123;
    ```

   > 注意：这节课中使用的 `=` 均意味着我们使用了一个“赋值运算符”，用于给变量设置一个值。它并不表示相等。

   `myVariable` 现在就已经被用 123 这个值 _初始化了（initialized）_。

1. **重构语句**。将你的代码换位下面的语句：

    ```javascript
    let myVariable = 123;
    ```

    上面的写法被称为 _显式初始化（explicit initialization）_，即在声明一个变量的同时为它赋予一个初始值。

1. **修改变量的值**。用下面的方式修改变量的值：

   ```javascript
   myVariable = 321;
   ```

   在变量声明之后，你可以在你代码中的任何地方通过 `=` 运算符跟上新的值来修改它的值。

   ✅ 亲手尝试一下！你现在就可以在浏览器里写 JavaScript 代码。打开一个浏览器窗口，然后打开开发者工具。在控制台（console）中你可以看到一个命令提示符，输入 `let myVariable = 123`，按下回车键，然后再输入 `myVariable`。会发生什么？你在之后的课程中会了解到更多相关概念。

## 常量（Constants）

声明和初始化一个常量和变量基本类似，只不过要用 `const` 关键字。常量一般会使用全大写字母的方式命名。

```javascript
const MY_VARIABLE = 123;
```

常量和变量很相似，但有两点区别：

- **必须有一个值**。常量必须被初始化，否则会在运行代码时报错。
- **引用（Reference）无法被修改**。初始化后变量的引用就无法再被修改，否则会在运行代码时报错。让我们看两个例子：
   - **简单数值**。下方做法是不被允许的：
   
      ```javascript
      const PI = 3;
      PI = 4; // 报错
      ```
 
   - **对象引用会受保护**。下方做法是不被允许的：
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // 报错
      ```

    - **对象的值不会受保护**。下方做法**是**被允许的：
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // 允许
      ```

      上例中你修改的是对象的值而非其引用本身，所以是允许的。

   > 注意，`const` 意味着引用是没法被重新赋值的，但是它的值并非是 _不可变的（immutable）_，你可以修改它的值，特别是在假如它是诸如对象这样的复杂结构的情况下。

## 数据类型（Data Types）

变量可以可以存储许多不同类型的值，比如数字或者文本。这些值的各种类型被称为**数据类型**。数据类型是软件开发中重要的组成部分，因为它会有助于开发者决定代码编写和软件运行的方式。更重要的是，一些数据类型有着可以帮助转换或者附加额外信息给变量的独特特性。

✅ 数据类型有时也特指 JavaScript 基本类型（primitives），它们是这个语言提供的最底层的数据类型。JavaScript 有六种基本数据类型：string、number、bigint、boolean、undefined 和 symbol。你认为 `'zebra'` 属于哪种数据类型？`0` 和 `true` 呢？

### 数值（Numbers）

在之前的部分中，`myVariable` 的值属于数值数据类型。

`let myVariable = 123;`

变量可以存储所有类型的数值，包括小数或者负数。数值也可以搭配算术运算符使用，将在[下一部分](#operators)介绍。

### 算术运算符（Arithmetic Operators）

有许多种可以用在算术功能的运算符，下面列出了一部分：

| 符号 | 描述                        | 例子                      |
| --- | --------------------------- | ------------------------- |
| `+` | **加法**：计算两个数的和      | `1 + 2 // 结果是 3`   |
| `-` | **减法**：计算两个数的差      | `1 - 2 // 结果是 -1`  |
| `*` | **乘法**：计算两个数的积      | `1 * 2 // 结果是 2`   |
| `/` | **除法**：计算两个数的商      | `1 / 2 // 结果是 0.5` |
| `%` | **取余**：计算两个数相除的余数 | `1 % 2 // 结果是 1`   |

✅ 亲手试试！在你的浏览器控制台中尝试一下算术运算。结果是否和你期望的相同？

### 字符串（Strings）

字符串是由单引号或双引号包围的字符集合。

- `'这是一个字符串'`
- `"这也是一个字符串"`
- `let myString = '这是一个存储在变量中的字符串值';`

记得用引号来书写字符串，否则 JavaScript 会误以为它是一个变量名。

### 格式化字符串

字符串是文本，自然会有格式化的需求。

要**连接（concatenate）**两个或更多字符串，或者说把它们结合到一起，可以用 `+` 运算符。

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ 在 JavaScript 中，为什么 `1 + 1 = 2` 但 `'1' + '1' = 11`？仔细想想。如果是 `'1' + 1` 呢？

**模板字符串（Template literals）**是另一种格式化字符串的方式，使用反引号（backtick）而非引号。 任何非纯文本的内容都要放到 `${ }` 占位符内，可以是任何可能是字符串的变量。

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

两种方式都可以达到格式化字符串的目的，但是格式化字符串会保留所有的空格和换行。

✅ 你会在什么时候使用模板字符串？什么时候使用纯文本字符串？

### 布尔值（Booleans）

布尔值只可能是这两个值：`true` 或 `false`。布尔值可以用于决定特定条件被满足时该运行哪些代码。多数情况下，[运算符](#operators)都可以设置布尔值，你会常常看到或者自己写出一些被通过运算符初始化或更新为布尔值。

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ 如果一个变量的计算结果是 `true`，我们就把它称为“真值（truthy）”。一个有意思的事是，在 JavaScript 中，[所有值都是真值，除非它们被定义为假值（falsy)](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)。

---

## 🚀 挑战

JavaScript 偶尔会因为其对于数据类型令人意外的处理方式而被人诟病。你可以对这些“陷阱”做一点调查，比如大小写敏感性带来的问题，在控制台中试试 `let age = 1; let Age = 2; age == Age`（结果是 `false`，为什么？）。你还能找到哪些陷阱？

## 课后小测
[课后小测](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/8?loc=zh_cn)

## 复习 & 自学

看看这个[JavaScript 练习列表](https://css-tricks.com/snippets/javascript/)并尝试其中一个。你学到了什么？

## 作业

[数据类型练习](assignment.zh-cn.md)
