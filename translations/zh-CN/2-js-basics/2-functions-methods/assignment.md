# 有趣的函数

## 说明

在本次作业中，你将练习创建不同类型的函数，以巩固你所学的 JavaScript 函数、参数、默认值和返回语句的概念。

创建一个名为 `functions-practice.js` 的 JavaScript 文件，并实现以下函数：

### 第一部分：基础函数
1. **创建一个名为 `sayHello` 的函数**，该函数不接受任何参数，仅在控制台输出 "Hello!"。

2. **创建一个名为 `introduceYourself` 的函数**，该函数接受一个 `name` 参数，并在控制台输出类似 "Hi, my name is [name]" 的消息。

### 第二部分：带默认参数的函数
3. **创建一个名为 `greetPerson` 的函数**，它接受两个参数：`name`（必需）和 `greeting`（可选，默认为 "Hello"）。该函数应在控制台输出类似 "[greeting], [name]!" 的消息。

### 第三部分：返回值的函数
4. **创建一个名为 `addNumbers` 的函数**，它接受两个参数（`num1` 和 `num2`）并返回它们的和。

5. **创建一个名为 `createFullName` 的函数**，它接受 `firstName` 和 `lastName` 参数并返回一个完整的全名字符串。

### 第四部分：综合练习
6. **创建一个名为 `calculateTip` 的函数**，它接受两个参数：`billAmount`（必需）和 `tipPercentage`（可选，默认为 15）。该函数应计算并返回小费金额。

### 第五部分：测试你的函数
添加函数调用，测试每个函数并使用 `console.log()` 显示结果。

**示例测试调用：**
```javascript
// 在这里测试你的函数
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## 评分标准

| 标准 | 优秀 | 及格 | 需改进 |
| -------- | --------- | -------- | ----------------- |
| **函数创建** | 所有 6 个函数均正确实现，语法和命名规范正确 | 4-5 个函数正确实现，语法有轻微问题 | 实现 3 个或更少函数，或存在严重语法错误 |
| **参数和默认值** | 正确使用必需参数、可选参数和默认值 | 参数使用正确但默认值存在问题 | 参数实现不正确或缺失 |
| **返回值** | 应返回值的函数正确返回，不应返回值的函数仅执行操作 | 大多数返回值正确，有轻微问题 | 返回语句有重大问题 |
| **代码质量** | 代码干净、结构良好，变量名有意义，缩进正确 | 代码能工作但可更清晰或更好组织 | 代码难以阅读或结构差 |
| **测试** | 所有函数均使用合适的调用进行测试，结果清晰展示 | 大多数函数测试充分 | 测试有限或测试错误 |

## 额外挑战（可选）

如果你想进一步挑战自己：

1. **创建一个箭头函数版本** 的某个函数
2. **创建一个接受另一个函数作为参数的函数**（如课程中的 `setTimeout` 示例）
3. **添加输入验证**，确保你的函数能够优雅地处理无效输入

---

> 💡 **提示**：记得打开浏览器的开发者控制台（F12）查看 `console.log()` 语句的输出！

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：
本文件使用 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们力求准确，但请注意自动翻译可能存在错误或不准确之处。原始语言版本的文件应被视为权威来源。对于重要信息，建议使用专业人工翻译。因使用此翻译而引起的任何误解或误释，我们概不负责。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->