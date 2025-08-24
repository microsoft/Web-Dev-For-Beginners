<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-24T00:06:37+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "zh"
}
-->
# 构建银行应用程序第一部分：Web应用中的HTML模板和路由

## 课前测验

[课前测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### 简介

自从浏览器中出现JavaScript以来，网站变得比以往更加互动和复杂。如今，Web技术通常被用来创建直接在浏览器中运行的功能齐全的应用程序，我们称之为[Web应用程序](https://en.wikipedia.org/wiki/Web_application)。由于Web应用程序高度互动，用户不希望每次执行操作时都需要等待整个页面重新加载。因此，JavaScript被用来直接通过DOM更新HTML，以提供更流畅的用户体验。

在本课程中，我们将为创建银行Web应用程序奠定基础，使用HTML模板创建多个屏幕，这些屏幕可以显示和更新，而无需重新加载整个HTML页面。

### 前置条件

您需要一个本地Web服务器来测试我们将在本课程中构建的Web应用程序。如果您没有，可以安装[Node.js](https://nodejs.org)，并在项目文件夹中使用命令`npx lite-server`。它将创建一个本地Web服务器并在浏览器中打开您的应用程序。

### 准备工作

在您的计算机上创建一个名为`bank`的文件夹，并在其中创建一个名为`index.html`的文件。我们将从这个HTML[样板代码](https://en.wikipedia.org/wiki/Boilerplate_code)开始：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## HTML模板

如果您想为一个网页创建多个屏幕，一种解决方案是为每个要显示的屏幕创建一个HTML文件。然而，这种解决方案存在一些不便：

- 切换屏幕时需要重新加载整个HTML，这可能会很慢。
- 在不同屏幕之间共享数据会变得困难。

另一种方法是只使用一个HTML文件，并使用`<template>`元素定义多个[HTML模板](https://developer.mozilla.org/docs/Web/HTML/Element/template)。模板是一个可重用的HTML块，浏览器不会直接显示它，需要通过JavaScript在运行时实例化。

### 任务

我们将创建一个具有两个屏幕的银行应用程序：登录页面和仪表板页面。首先，在HTML主体中添加一个占位符元素，我们将用它来实例化应用程序的不同屏幕：

```html
<div id="app">Loading...</div>
```

我们为它设置了一个`id`，以便稍后通过JavaScript更容易定位它。

> 提示：由于此元素的内容将被替换，我们可以在其中放置一个加载消息或指示器，以在应用程序加载时显示。

接下来，在HTML模板中添加登录页面。现在我们只在其中放置一个标题和一个包含链接的部分，用于执行导航。

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

然后我们将为仪表板页面添加另一个HTML模板。此页面将包含不同的部分：

- 一个包含标题和注销链接的页眉
- 银行账户的当前余额
- 一个显示交易记录的表格

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> 提示：创建HTML模板时，如果您想查看它的外观，可以通过将`<template>`和`</template>`行用`<!-- -->`包裹来注释掉它们。

✅ 您认为我们为什么在模板上使用`id`属性？我们是否可以使用其他方法，比如类？

## 使用JavaScript显示模板

如果您在浏览器中尝试当前的HTML文件，您会发现它停留在显示`Loading...`。这是因为我们需要添加一些JavaScript代码来实例化并显示HTML模板。

实例化模板通常分为三个步骤：

1. 在DOM中检索模板元素，例如使用[`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById)。
2. 使用[`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)克隆模板元素。
3. 将其附加到可见元素的DOM中，例如使用[`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild)。

✅ 为什么我们需要在将模板附加到DOM之前克隆它？如果跳过这一步会发生什么？

### 任务

在项目文件夹中创建一个名为`app.js`的新文件，并在HTML的`<head>`部分导入该文件：

```html
<script src="app.js" defer></script>
```

现在在`app.js`中，我们将创建一个新函数`updateRoute`：

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

我们在这里做的正是上述的三个步骤。我们实例化`templateId`对应的模板，并将其克隆的内容放入我们的应用程序占位符中。注意，我们需要使用`cloneNode(true)`来复制模板的整个子树。

现在调用这个函数并传入一个模板，查看结果。

```js
updateRoute('login');
```

✅ 代码`app.innerHTML = '';`的作用是什么？如果没有它会发生什么？

## 创建路由

在谈论Web应用程序时，我们称*路由*为将**URL**映射到应该显示的特定屏幕的意图。在具有多个HTML文件的网站上，这会自动完成，因为文件路径会反映在URL中。例如，在项目文件夹中有以下文件：

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

如果您以`mywebsite`为根创建一个Web服务器，URL映射将是：

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

然而，对于我们的Web应用程序，我们使用的是一个包含所有屏幕的HTML文件，因此这种默认行为对我们没有帮助。我们必须手动创建这个映射，并使用JavaScript更新显示的模板。

### 任务

我们将使用一个简单的对象来实现一个[映射](https://en.wikipedia.org/wiki/Associative_array)，将URL路径与我们的模板关联。在`app.js`文件顶部添加这个对象。

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

现在稍微修改一下`updateRoute`函数。我们不再直接传递`templateId`作为参数，而是首先查看当前URL，然后使用我们的映射获取对应的模板ID值。我们可以使用[`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname)来仅获取URL中的路径部分。

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

在这里，我们将声明的路由映射到对应的模板。您可以通过在浏览器中手动更改URL来测试它是否正常工作。

✅ 如果您在URL中输入一个未知路径会发生什么？我们如何解决这个问题？

## 添加导航

我们应用程序的下一步是添加在页面之间导航的功能，而无需手动更改URL。这涉及两件事：

1. 更新当前URL
2. 根据新URL更新显示的模板

我们已经通过`updateRoute`函数解决了第二部分，因此我们需要弄清楚如何更新当前URL。

我们需要使用JavaScript，特别是[`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState)，它允许更新URL并在浏览历史中创建新条目，而无需重新加载HTML。

> 注意：虽然HTML锚元素[`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a)本身可以用于创建指向不同URL的超链接，但默认情况下它会使浏览器重新加载HTML。在使用自定义JavaScript处理路由时，需要使用`preventDefault()`函数阻止点击事件的默认行为。

### 任务

让我们创建一个新函数，用于在应用程序中导航：

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

此方法首先根据给定路径更新当前URL，然后更新模板。属性`window.location.origin`返回URL根目录，允许我们从给定路径重新构建完整URL。

现在我们有了这个函数，可以解决路径与定义的路由不匹配时的问题。我们将通过添加一个回退到现有路由之一来修改`updateRoute`函数。

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

如果找不到路由，我们现在会重定向到`login`页面。

现在创建一个函数，用于在点击链接时获取URL，并阻止浏览器的默认链接行为：

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

通过为HTML中的*登录*和*注销*链接添加绑定来完成导航系统。

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

上面的`event`对象捕获`click`事件并将其传递给我们的`onLinkClick`函数。

使用[`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)属性将`click`事件绑定到JavaScript代码，这里是调用`navigate()`函数。

尝试点击这些链接，您现在应该能够在应用程序的不同屏幕之间导航。

✅ `history.pushState`方法是HTML5标准的一部分，并在[所有现代浏览器](https://caniuse.com/?search=pushState)中实现。如果您正在为旧版浏览器构建Web应用程序，可以使用一个技巧代替此API：使用路径前的[哈希(`#`)](https://en.wikipedia.org/wiki/URI_fragment)，您可以实现与常规锚导航一起工作的路由，并且不会重新加载页面，因为它的目的是在页面内创建内部链接。

## 处理浏览器的后退和前进按钮

使用`history.pushState`会在浏览器的导航历史中创建新条目。您可以通过按住浏览器的*后退按钮*来检查，它应该显示如下内容：

![导航历史截图](../../../../7-bank-project/1-template-route/history.png)

如果您尝试点击几次后退按钮，您会发现当前URL发生了变化，历史记录也更新了，但显示的模板保持不变。

这是因为应用程序不知道每次历史记录更改时需要调用`updateRoute()`。如果您查看[`history.pushState`文档](https://developer.mozilla.org/docs/Web/API/History/pushState)，您会发现如果状态发生变化——意味着我们移动到不同的URL——会触发[`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)事件。我们将使用它来解决这个问题。

### 任务

为了确保浏览器历史记录更改时显示的模板得到更新，我们将附加一个新函数来调用`updateRoute()`。我们将在`app.js`文件底部完成此操作：

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> 注意：我们在这里使用了一个[箭头函数](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)来声明我们的`popstate`事件处理程序以简洁，但普通函数也可以正常工作。

以下是关于箭头函数的复习视频：

[![箭头函数](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "箭头函数")

> 🎥 点击上方图片观看关于箭头函数的视频。

现在尝试使用浏览器的后退和前进按钮，检查显示的路由是否正确更新。

---

## 🚀 挑战

为显示此应用程序的开发者信息添加一个新的模板和路由。

## 课后测验

[课后测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## 复习与自学

路由是Web开发中一个出乎意料的复杂部分，尤其是在Web从页面刷新行为转向单页应用程序页面刷新时。阅读一些关于[Azure静态Web应用服务](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon)如何处理路由的内容。您能解释为什么文档中描述的一些决策是必要的吗？

## 作业

[改进路由](assignment.md)

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。