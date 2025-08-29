<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T14:49:03+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "zh"
}
-->
# JavaScript 基础：数组和循环

![JavaScript 基础 - 数组](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.zh.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 绘制的手绘笔记

## 课前测验
[课前测验](https://ff-quizzes.netlify.app/web/quiz/13)

本课程介绍了 JavaScript 的基础知识，这是一种为网页提供交互功能的语言。在本课程中，你将学习数组和循环，它们用于操作数据。

[![数组](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![循环](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 点击上方图片观看关于数组和循环的视频。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) 上学习本课程！

## 数组

处理数据是任何编程语言中的常见任务，当数据以结构化的格式（如数组）组织时，这项任务会变得更加简单。通过数组，数据以类似列表的结构存储。数组的一个主要优点是你可以在一个数组中存储不同类型的数据。

✅ 数组无处不在！你能想到一个现实生活中的数组例子吗，比如太阳能电池板阵列？

数组的语法是一对方括号。

```javascript
let myArray = [];
```

这是一个空数组，但数组也可以在声明时就包含数据。数组中的多个值用逗号分隔。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

数组中的值被分配了一个称为 **索引** 的唯一值，这是一个从数组开头开始计算的整数。在上面的例子中，字符串值 "Chocolate" 的索引是 0，而 "Rocky Road" 的索引是 4。使用方括号和索引可以检索、更改或插入数组中的值。

✅ 你是否感到惊讶，数组的索引是从 0 开始的？在某些编程语言中，索引是从 1 开始的。关于这一点有一个有趣的历史背景，你可以在 [维基百科](https://en.wikipedia.org/wiki/Zero-based_numbering) 上阅读相关内容。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

你可以利用索引来更改一个值，例如：

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

你也可以在指定索引处插入一个新值，例如：

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ 更常见的向数组添加值的方法是使用数组操作符，比如 array.push()。

要知道数组中有多少项，可以使用 `length` 属性。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 试一试！使用浏览器的控制台创建并操作一个你自己设计的数组。

## 循环

循环允许我们执行重复或 **迭代** 的任务，可以节省大量时间和代码。每次迭代的变量、值和条件都可能不同。JavaScript 中有不同类型的循环，它们之间有一些细微的差别，但本质上都做同样的事情：遍历数据。

### For 循环

`for` 循环需要三个部分来进行迭代：
- `counter` 一个变量，通常初始化为一个数字，用于计数迭代次数
- `condition` 一个使用比较运算符的表达式，当为 `false` 时循环停止
- `iteration-expression` 在每次迭代结束时运行，通常用于更改计数器的值

```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ 在浏览器控制台中运行这段代码。当你对计数器、条件或迭代表达式做出小的修改时会发生什么？你能让它倒着运行，创建一个倒计时吗？

### While 循环

与 `for` 循环的语法不同，`while` 循环只需要一个条件，当条件变为 `false` 时循环停止。循环中的条件通常依赖于其他值（如计数器），并且必须在循环中进行管理。计数器的初始值必须在循环外创建，任何满足条件的表达式（包括更改计数器）都必须在循环内维护。

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ 为什么你会选择使用 for 循环而不是 while 循环？17K 名用户在 StackOverflow 上有同样的问题，其中一些观点可能会 [引起你的兴趣](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## 循环与数组

数组经常与循环一起使用，因为大多数条件需要数组的长度来停止循环，而索引也可以作为计数器的值。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ 在浏览器的控制台中尝试用循环遍历一个你自己设计的数组。

---

## 🚀 挑战

除了 for 和 while 循环，还有其他方法可以遍历数组，比如 [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) 和 [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map)。用这些技术之一重写你的数组循环。

## 课后测验
[课后测验](https://ff-quizzes.netlify.app/web/quiz/14)

## 复习与自学

JavaScript 中的数组有许多附加方法，这些方法在数据操作中非常有用。[阅读这些方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) 并尝试在你自己创建的数组上使用一些方法（比如 push、pop、slice 和 splice）。

## 作业

[遍历数组](assignment.md)

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。因使用本翻译而引发的任何误解或误读，我们概不负责。