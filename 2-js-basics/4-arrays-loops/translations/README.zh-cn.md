# JavaScript 基础：数组和循环

![JavaScript Basics - Arrays](/sketchnotes/webdev101-js-arrays.png)
> 涂鸦笔记作者：[Tomomi Imura](https://twitter.com/girlie_mac)

## 课前小测
[课前小测](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/13?loc=zh_cn)

这节课将会介绍 JavaScript 的基础知识，正是它为网页提供了可交互性。这节课中，你将学习数组和循环，它们会被用于操控数据。

[![数组](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "数组")
[![循环](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "循环")

> 点击上方图片来观看一个有关数组和循环的视频。

## 数组（Arrays）

对于任何编程语言来说，使用数据都是很常见的工作，将数组组织在一个结构性的格式（比如数组）中则可以让这个工作更简单。通过使用数组，数据会被存放在一个类似列表的结构中。数组的一个主要优点是你可以将不同类型的数据存入同一个数组中。

✅ 数组在我们的生活中随处可见！你能想到一个现实生活中的数组的例子吗，比如一个太阳能板阵列？

数组的语法需要一对方括号。

```javascript
let myArray = [];
```

这是一个空数组，但数组其实可以在声明时就存入一些数据。数组中的多项数据用逗号分隔。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

数组中的值会被指定一个唯一的值，称为 **索引（index）**，它是一个整数，表示对应值在数组中的位置与数组开头的距离。在上方的例子中，字符串值 `"Chocolate"` 的索引就是 0，而 `"Rocky Road"` 的索引是 4。可以用索引加上方括号来获取、改变或者插入数组值。

✅ 数组索引从 0 开始计起是否让你感觉奇怪？在有的编程语言中，索引会从 1 开始。关于这事有一段有趣的历史，你可以[在维基百科了解它](https://zh.wikipedia.org/zh-cn/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E7%9A%84%E7%B7%A8%E8%99%9F)。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; // "Vanilla"
```

你可以通过索引来改变数组中的值，像这样：

```javascript
iceCreamFlavors[4] = "Butter Pecan"; // 把 "Rocky Road" 改成 "Butter Pecan"
```

你也可以用给定索引来插入新的值，像这样：

```javascript
iceCreamFlavors[5] = "Cookie Dough"; // 加了一项 "Cookie Dough"
```

✅ 向数组中添加新的值有更常用的方法：使用如 array.push() 这样的数组方法

为了获知数组中有多少元素，可以用 `length` 属性。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; // 5
```

✅ 亲手试一试！在你的浏览器控制台里亲手创建和操作一个你自己的数组。

## 循环（Loops）

数组可以用来做重复性的或者 **迭代性的（iterative）** 的工作，会省下很多时间和代码量。每一次迭代中的变量、值或者条件可能会不同。JavaScript 中有几种不同类型的循环，它们有一些小差别，但本质上都是做同一件事：遍历数据。

### For 循环

`for` 循环需要三个部分来进行迭代：
    - `计数器（counter）` 一个通常用数字来初始化的变量，用于记录迭代的次数
    - `条件式（condition）` 一个使用了比较运算符的表达式，用于在其值为 `true` 时终止循环
    - `迭代式（iteration-expression）` 在每一次迭代的模为执行，一般用于更新计数器的值
  
```javascript
// 从 0 数到 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ 在浏览器控制台中运行这段代码。试试调整计数器、条件式或迭代式时会发生什么。你能让它反过来运行，倒着计数吗？

### While 循环

和 `for` 循环不同，`while` 循环只需要一个条件式，用于在其值为 `true` 时终止循环。循环中的条件式往往需要依赖其他的值，比如计数器，计数器也必须得在循环内有所处理。计数器的起始值必须在循环外创建，任何为了达到终止条件的表达式（包括改变计数器的值）都需要在循环内维护。

```javascript
// 从 0 数到 9
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ 你在什么时候会选用 for 循环，什么时候会选用 while 循环？StackOverflow 上也有数万人有相同的问题，这里有一些[你可能感兴趣的观点](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## 循环和数组

循环和数组经常结合使用，因为很多情况下都会利用数组长度来作为条件式，而索引可以作为计数器值。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // 所有口味被打印后就会结束循环
```

✅ 在你的浏览器控制台里实验一下遍历一个你自己创建的数组。

---

## 🚀 挑战

除了 for 和 while 循环，还有一些用于遍历数组的办法。比如 [forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 和 [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)。用这些办法重写一下你的数组遍历代码。

## 课后小测
[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/14?loc=zh_cn)

## 复习 & 自学

JavaScript 中的数组有许多绑定在上面的方法，对于操作数据来说非常有用。[读一下这些方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)并且在你创建的数组上试用一下它们（比如 push、pop、slice 和 splice）。

## 作业

[循环和数组](assignment.zh-cn.md)
