# javascript基础知识：数据类型

![javascript基础知识-数据类型](/sketchnotes/webdev101-js-datatypes.png)
> 绘制者 [Tomomi Imura](https://twitter.com/girlie_mac)
## 课前测验
[课前测验](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/7)

本课程涵盖javascript的基础知识，javascript是一种在网页上提供交互性的语言。

[![javascript中的数据类型](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "javascript中的数据类型")

让我们从变量和填充它们的数据类型开始！

## 变量

变量存储可在整个代码中使用和更改的值。

创建和“声明”变量具有以下语法“ [关键字] [名称]” **。它由两部分组成：

- **关键字**。关键字可以是`let`或`var`。

   >注意，它们的关键字`let`是ES6中引入的，为您的变量提供了一个所谓的_block scope_。建议您在`var`上使用`let`。我们将在以后的部分中更深入地介绍块范围。
- **变量名称**，这是您自己选择的名称。

### 任务-使用变量

1. **声明变量**。让我们使用`let`关键字声明一个变量：

    ``` javascript
    let myVariable;
    ```

   现在已经使用`let`关键字声明了`myVariable`。目前没有赋值。

1. **分配值**。用“=”运算符将值存储在变量中，然后是期望值。

    ``` javascript
    myVariable = 123;
    ```

   >注意：在本课程中使用`=`意味着我们使用了“赋值运算符”，该赋值运算符用于为变量设置值。它并不表示相等。

   “ myVariable”现在已被*初始化为*值123。

1. **重构**。用以下语句替换您的代码。

    ``` javascript
    let myVariable = 123;
    ```

    当声明变量并同时为其赋值时，以上内容称为_显示初始化_。

1. **更改变量值**。通过以下方式更改变量值：

   ``` javascript
   myVariable = 321;
   ```

   声明变量后，您可以在代码中的任何位置使用“=”运算符和新值来更改其值。

   ✅试试吧！您可以直接在浏览器中编写javascript。打开浏览器窗口，然后导航到“开发人员工具”。在控制台中，您会看到一个提示；输入`let myVariable = 123`，按回车键，然后输入`myVariable`。怎么了？请注意，您将在后续课程中了解有关这些概念的更多信息。

## 常数

常量的声明和初始化遵循与变量相同的概念，但const关键字除外。常量通常用所有大写字母命名。

``` javascript
const MY_VARIABLE = 123;
```