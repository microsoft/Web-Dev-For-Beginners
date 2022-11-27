# JavaScript 基础：方法和函数

![JavaScript Basics - Functions](/sketchnotes/webdev101-js-functions.png)
> 涂鸦笔记作者：[Tomomi Imura](https://twitter.com/girlie_mac)

## 课前小测
[课前小测](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9?loc=zh_cn)

当我们思考如何去写代码的时候，我们总是希望确保自己的代码是可读的。尽管听起来有些违反直觉，代码被阅读的次数会远多于它被写下的次数。**函数（function）** 正是开发者的工具箱里用于确保代码可维护的一件利器。

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "方法和函数")

> 点击上方图片来观看一个有方法和函数的视频。


## 函数（Functions）

本质上，函数就是一块我们可以按需执行的代码。这在我们需要多次执行同一个任务的场景下很有用，比起将逻辑复制到很多个位置（这会导致在以后很难去同时更新所有位置），我们可以将其集中在同一个位置，在需要这套逻辑被执行的任何时候都可以来调用它 —— 你甚至可以在其他的函数中调用函数！

合理命名一个函数同样是很重要的能力。尽管听起来微不足道，但函数命名相当于是一种给一部分代码写简易文档的快捷做法。可以用网页上按钮的标签来类比这件事，如果我点击了一个叫做“停止计时”的按钮，我能够很轻易地知道它可以用来停止一个时钟的运行。

## 创建和调用函数

函数的语法一般长这样：

```javascript
function nameOfFunction() { // 函数定义
 // 函数定义 / 函数体
}
```

如果你想创建一个用来打招呼的函数，它可以是这样：

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

如果想要调用（call / invoke）一个函数，用函数的名称跟上 `()` 即可。值得注意的是，函数定义在其调用位置之前或之后都是可以的，JavaScript 编译器会替你找到函数定义的位置。

```javascript
// 调用我们的函数
displayGreeting();
```

> **注意：**有一类特殊的函数被称作**方法（method）**，你其实已经使用过它了！上面的示例中的 `console.log` 就是一个例子。方法和函数的区别在于，方法依附于一个对象上（比如例子中的 `console`），而函数是自由自在的。但你以后会看到很多开发者有时也会将这两个术语混用。

### 函数的最佳实践

这里有一些在你创建函数时可以牢记在心的最佳实践：

- 坚持使用描述性的命名，这样可以更容易知道这个函数是做什么的
- 使用**小驼峰命名法（camelCasing）**来组合单词（译注：小驼峰，即除了第一个单词首位小写外，其它单词都首位大写）
- 让你的函数专注于一件特定的任务

## 向函数传递信息

为了使函数可以更便于重复利用，你常会希望传递一些信息给它。考虑上面 `displayGreeting` 这个例子，它只会显示 **Hello, world!**，但它其实可以被创造得更加有用一些。如果我们想让它更加灵活一些，比如允许指定想要打招呼的人的名字，我们可以为函数添加一个**参数（parameter / argument）**。参数，就是传给函数的额外信息。

参数会列在函数定义这一部分，用括号括起来并且用逗号分隔，比如：

```javascript
function name(param, param2, param3) {

}
```

我们可以更新以下我们的 `displayGreeting` 来接收一个名字并将其显示出来。

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

当我们想要在调用函数时指定参数，将其放在括号中即可。

```javascript
displayGreeting('Christopher');
// 在运行时会显示 “Hello, Christopher!”
```

## 默认值（Default values）

我们可以通过为函数添加更多参数来使它更加灵活，但是如果我们并不希望每次调用都需要指定所有参数该怎么办？继续用我们的打招呼示例，我们可以让名字是必选的（我们需要知道该向谁打招呼），但打招呼的语句本身可以随意定制。如果有人不想自定义打招呼的语句，我们就会提供一个默认值（又称缺省值）。为了给参数提供一个默认值，写法和给变量赋值很像 —— `parameterName = 'defaultValue'`。完整例子如下：

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

当我们调用函数时，可以自由决定是否要指定 `salutation` 的值。

```javascript
displayGreeting('Christopher');
// 显示 “Hello, Christopher”

displayGreeting('Christopher', 'Hi');
// 显示 “Hi, Christopher”
```

## 返回值（Return values）

目前为止我们创建的函数都只会输出到[控制台（console）](https://developer.mozilla.org/zh-CN/docs/Web/API/console)。有时这就是我们想要的效果，特别是当我们创建调用其他服务的函数时。但如果我想要创建一个辅助函数来计算一个值并且返回出去用在别处该怎么办？

我们可以用**返回值**来做到这件事。返回值由函数返回，并且可以像字面量（如字符串或数值）一样存储在一个变量中。

如果一个函数有返回值，就会在函数体中用到 `return` 关键字。`return` 关键字可以指定期望被返回的值或引用，就像下面这样：

```javascript
return myVariable;
```  

我们可以创建一个函数来构造一个打招呼的消息，然后将这个消息的值返回给调用者

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

调用函数时可以将返回值存在变量里，和将一个静态值存入变量的办法一样（如 `const name = 'Christopher'`）。

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 将函数作为函数参数

在你的编程生涯中，你会遇到一些可以接受函数作为参数的函数。这个优雅的小技巧会经常被用到，比如我们不知道一些事会在什么时候发生或完成，但我们知道在那个时候需要执行一个操作作为响应的情况。

举个例子，对于 [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)，其会开启一个计时器，在倒计时结束时执行代码。我们需要告诉它我们希望它执行什么代码。这听起来正是函数该做到的事！

如果你执行下方的代码，三秒后你就可以看到 **3 秒过去了** 这条消息。

```javascript
function displayDone() {
  console.log('3 秒过去了');
}
// 计时器的时间单位是毫秒
setTimeout(displayDone, 3000);
```

### 匿名函数（Anonymous functions）

再回过头看看我们创建的函数，我们创建了一个名字只被使用了一次的函数。当我们的应用程序变得愈发复杂，我们会发现我们创建了大量只被调用了一次的函数。这样实在不太好，其实我们并不总是需要为函数提供一个名字！

当我们将一个函数作为参数传入时，我们可以绕过提前创建它的步骤，直接在参数的部分来创建它。我们还是使用相同的 `function` 关键字，只不过是将其作为一个参数来创建。

让我们将上面的代码用匿名函数重写一次：

```javascript
setTimeout(function() {
  console.log('3 秒过去了');
}, 3000);
```

运行我们的新代码，你会注意到结果和之前完全一样。我们成功创建了一个函数，而不必给它命名！

### 箭头函数（Fat arrow functions）

在很多编程语言（包括 JavaScript）中都有一种称为**箭头**（arrow / fat arrow）函数的快捷写法。它会用到一个特殊的 `=>` 标志，看起来就像一个箭头 —— 它的名字就是这么来的！使用 `=>`，我们就可以跳过 `function` 关键字。

让我们用箭头函数再一次重写上面的代码：

```javascript
setTimeout(() => {
  console.log('3 秒过去了');
}, 3000);
```

### 何时使用上述每种策略

你现在已经见到了三种将函数作为参数传给另一个函数的写法，可能很好奇该在什么时候选用哪一种。如果你知道你会多次用到这个函数，就照常创建它。如果你只会在一处用到它，一般最好使用匿名函数。使用箭头函数还是传统的 `function` 语法取决于你自己，但你会注意到多数现代开发者更喜欢用 `=>`。

---

## 🚀 挑战

你能用一句话清楚说明函数和方法的区别吗？试一试！

## 课后小测
[课后小测](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10?loc=zh_cn)

## 复习 & 自学

箭头函数在代码库中正在被越来越多地使用，[多了解一下箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)会非常有好处。试着写一个函数，然后用箭头函数语法重写它。

## 作业

[试玩函数](assignment.zh-cn.md)
