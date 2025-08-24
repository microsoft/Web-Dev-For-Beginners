<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-23T22:40:07+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "zh"
}
-->
# JavaScript 基础：方法与函数

![JavaScript 基础 - 函数](../../../../sketchnotes/webdev101-js-functions.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) 的手绘笔记

## 课前测验
[课前测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

在编写代码时，我们总是希望代码具有良好的可读性。虽然这听起来有些反直觉，但代码被阅读的次数远远多于被编写的次数。开发者工具箱中的一个核心工具就是 **函数**，它能帮助我们确保代码的可维护性。

[![方法与函数](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "方法与函数")

> 🎥 点击上方图片观看关于方法与函数的视频。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) 上学习本课程！

## 函数

从本质上讲，函数是一段可以按需执行的代码块。这非常适合需要多次执行相同任务的场景；与其在多个地方重复逻辑（这样会导致更新时非常麻烦），不如将逻辑集中在一个地方，并在需要时调用它——甚至可以从其他函数中调用函数！

函数的命名同样重要。虽然这看起来很简单，但函数名为代码段提供了一种快速的文档化方式。你可以将其想象成按钮上的标签。如果我点击一个写着“取消计时器”的按钮，我就知道它会停止计时。

## 创建和调用函数

函数的语法如下所示：

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

如果我想创建一个显示问候语的函数，它可能看起来像这样：

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

每当我们想调用（或执行）函数时，只需使用函数名并加上 `()`。值得注意的是，函数可以在定义之前或之后调用；JavaScript 编译器会帮你找到它。

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** 有一种特殊类型的函数叫做 **方法**，你已经在使用了！事实上，我们在上面的演示中使用 `console.log` 时就见过了。方法与函数的区别在于，方法附属于一个对象（在我们的例子中是 `console`），而函数是独立的。你会发现许多开发者会将这两个术语交替使用。

### 函数的最佳实践

创建函数时需要牢记以下最佳实践：

- 一如既往地使用描述性名称，这样你就知道函数的作用是什么
- 使用 **camelCasing**（驼峰命名法）来组合单词
- 让函数专注于完成一个特定任务

## 向函数传递信息

为了让函数更具复用性，你通常需要向函数传递信息。以我们上面的 `displayGreeting` 示例为例，它只会显示 **Hello, world!**。这并不是一个非常实用的函数。如果我们想让它更灵活，比如允许用户指定要问候的人的名字，我们可以添加一个 **参数**。参数（有时也称为 **参数值**）是传递给函数的额外信息。

参数在定义部分列于括号内，并用逗号分隔，如下所示：

```javascript
function name(param, param2, param3) {

}
```

我们可以更新 `displayGreeting` 来接受一个名字并显示出来。

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

当我们调用函数并传递参数时，只需在括号内指定参数值。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## 默认值

我们可以通过添加更多参数使函数更加灵活。但如果我们不希望每个值都必须指定呢？继续以问候语为例，我们可以将名字设为必需（我们需要知道要问候谁），但允许用户根据需要自定义问候语。如果用户不想自定义，我们可以提供一个默认值。要为参数提供默认值，我们可以像为变量设置值一样设置——`parameterName = 'defaultValue'`。完整示例如下：

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

调用函数时，我们可以决定是否为 `salutation` 设置值。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## 返回值

到目前为止，我们创建的函数会始终输出到 [console](https://developer.mozilla.org/docs/Web/API/console)。有时这正是我们想要的，尤其是当我们创建的函数会调用其他服务时。但如果我想创建一个辅助函数来执行计算并将值返回，以便在其他地方使用呢？

我们可以通过使用 **返回值** 来实现。返回值由函数返回，并可以像存储字符串或数字这样的字面值一样存储在变量中。

如果函数返回某些内容，则使用关键字 `return`。`return` 关键字需要一个值或引用作为返回值，如下所示：

```javascript
return myVariable;
```  

我们可以创建一个函数来生成问候语并将值返回给调用者：

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

调用此函数时，我们会将返回值存储在变量中。这与将变量设置为静态值（如 `const name = 'Christopher'`）的方式非常相似。

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 函数作为函数的参数

随着你在编程生涯中的进步，你会遇到一些接受函数作为参数的函数。这种巧妙的技巧通常用于我们不知道某件事情何时会发生或完成，但我们知道需要在响应时执行某些操作的场景。

例如，[setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) 会启动一个计时器，并在计时完成时执行代码。我们需要告诉它我们想执行的代码。这听起来是一个非常适合函数的任务！

如果运行以下代码，3 秒后你会看到消息 **3 seconds has elapsed**。

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### 匿名函数

让我们再看看我们构建的内容。我们创建了一个带有名称的函数，但它只会被调用一次。随着应用程序变得更加复杂，我们可能会创建许多只会被调用一次的函数。这并不理想。事实证明，我们并不总是需要提供名称！

当我们将函数作为参数传递时，可以跳过提前创建函数，而是在参数中直接构建它。我们使用相同的 `function` 关键字，但将其作为参数构建。

让我们重写上面的代码以使用匿名函数：

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

如果运行我们的新代码，你会注意到我们得到了相同的结果。我们创建了一个函数，但不需要给它命名！

### 箭头函数

许多编程语言（包括 JavaScript）中常见的一种简化方式是使用所谓的 **箭头函数** 或 **胖箭头函数**。它使用一个特殊的符号 `=>`，看起来像一个箭头——因此得名！通过使用 `=>`，我们可以省略 `function` 关键字。

让我们再一次重写代码以使用箭头函数：

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### 何时使用哪种策略

现在你已经看到了三种将函数作为参数传递的方法，可能会想知道何时使用哪一种。如果你知道函数会被多次使用，就按常规方式创建它。如果只会在一个地方使用，通常最好使用匿名函数。至于使用箭头函数还是传统的 `function` 语法，这取决于你，但你会发现大多数现代开发者更喜欢 `=>`。

---

## 🚀 挑战

你能用一句话说明函数和方法的区别吗？试试看！

## 课后测验
[课后测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## 复习与自学

值得[多了解一些箭头函数](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，因为它们在代码中被越来越多地使用。练习编写一个函数，然后用这种语法重写它。

## 作业

[函数的乐趣](assignment.md)

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。虽然我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。