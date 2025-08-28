<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-28T11:14:08+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "en"
}
-->
# Build a Banking App Part 3: Methods of Fetching and Using Data

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/45)

### Introduction

At the heart of every web application lies *data*. Data can take various forms, but its primary purpose is to present information to the user. As web apps become more interactive and complex, how users access and interact with this information has become a critical aspect of web development.

In this lesson, we’ll explore how to fetch data from a server asynchronously and use it to display information on a web page without reloading the HTML.

### Prerequisite

Before starting this lesson, you should have completed the [Login and Registration Form](../2-forms/README.md) section of the web app. Additionally, you need to install [Node.js](https://nodejs.org) and [run the server API](../api/README.md) locally to access account data.

To verify that the server is running correctly, execute the following command in a terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX and Data Fetching

Traditional websites update the displayed content when a user clicks a link or submits a form by reloading the entire HTML page. Each time new data is needed, the web server sends back a completely new HTML page, which the browser processes. This interrupts the user’s current action and limits interactions during the reload. This workflow is known as a *Multi-Page Application* or *MPA*.

![Update workflow in a multi-page application](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.en.png)

As web applications became more complex and interactive, a new technique called [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) was introduced. AJAX allows web apps to send and retrieve data from a server asynchronously using JavaScript, without reloading the HTML page. This results in faster updates and smoother user interactions. Once new data is received from the server, the current HTML page can be updated using JavaScript and the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API. Over time, this approach evolved into what we now call a [*Single-Page Application* or *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Update workflow in a single-page application](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.en.png)

When AJAX was first introduced, the only available API for fetching data asynchronously was [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Modern browsers, however, now support the more convenient and powerful [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), which uses promises and is better suited for handling JSON data.

> While all modern browsers support the `Fetch API`, if you want your web app to work on older browsers, it’s a good idea to check the [compatibility table on caniuse.com](https://caniuse.com/fetch) first.

### Task

In [the previous lesson](../2-forms/README.md), we implemented the registration form to create an account. Now, we’ll add code to log in using an existing account and fetch its data. Open the `app.js` file and add a new `login` function:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Here, we start by retrieving the form element using `getElementById()`, and then we get the username from the input field using `loginForm.user.value`. Each form control can be accessed by its name (set in the HTML using the `name` attribute) as a property of the form.

Similar to what we did for registration, we’ll create another function to perform a server request, but this time to retrieve account data:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

We use the `fetch` API to request data asynchronously from the server. This time, we don’t need any additional parameters other than the URL, as we’re only querying data. By default, `fetch` creates a [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP request, which is exactly what we need here.

✅ `encodeURIComponent()` is a function that escapes special characters for URLs. What problems might arise if we don’t use this function and directly include the `user` value in the URL?

Next, let’s update our `login` function to use `getAccount`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Since `getAccount` is an asynchronous function, we use the `await` keyword to wait for the server’s response. As with any server request, we also need to handle errors. For now, we’ll simply log the error message and revisit this later.

We then need to store the data somewhere so we can use it to display information on the dashboard. Since the `account` variable doesn’t exist yet, we’ll create a global variable for it at the top of our file:

```js
let account = null;
```

Once the user data is saved in a variable, we can navigate from the *login* page to the *dashboard* using the `navigate()` function we already have.

Finally, we need to call our `login` function when the login form is submitted. Modify the HTML as follows:

```html
<form id="loginForm" action="javascript:login()">
```

Test everything by registering a new account and logging in with the same account.

Before moving on, let’s complete the `register` function by adding this at the bottom:

```js
account = result;
navigate('/dashboard');
```

✅ By default, browsers only allow server APIs to be called from the *same domain and port* as the web page being viewed. This is a security mechanism enforced by browsers. But wait—our web app runs on `localhost:3000`, while the server API runs on `localhost:5000`. Why does it work? By using a technique called [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), it’s possible to perform cross-origin HTTP requests if the server includes special headers in its response, allowing exceptions for specific domains.

> Learn more about APIs by taking this [lesson](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Update HTML to Display Data

Now that we have the user data, we need to update the existing HTML to display it. We already know how to retrieve an element from the DOM using methods like `document.getElementById()`. Once you have a base element, here are some APIs you can use to modify it or add child elements:

- Use the [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) property to change the text of an element. Note that changing this value removes all the element’s children (if any) and replaces them with the provided text. This makes it an efficient way to remove all children of an element by assigning an empty string `''` to it.

- Use [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) along with the [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) method to create and attach one or more new child elements.

✅ The [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) property can also be used to change an element’s HTML content, but it should be avoided as it’s vulnerable to [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) attacks.

### Task

Before moving to the dashboard screen, let’s address an issue on the *login* page. Currently, if you try to log in with a non-existent username, an error message is shown in the console, but nothing changes visually for the user.

Let’s add a placeholder element in the login form to display an error message if needed. A good spot would be just before the login `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

This `<div>` element is empty, so nothing will appear on the screen until we add content to it. We also assign it an `id` to make it easy to retrieve with JavaScript.

Go back to the `app.js` file and create a helper function called `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

This function is straightforward: given an element *id* and *text*, it updates the text content of the DOM element with the matching `id`. Let’s use this function to replace the previous error message in the `login` function:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Now, if you try to log in with an invalid account, you should see something like this:

![Screenshot showing the error message displayed during login](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.en.png)

While the error message is now visible, screen readers won’t announce it. To make dynamically added text accessible to screen readers, we need to use a [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Here, we’ll use a specific type of live region called an alert:

```html
<div id="loginError" role="alert"></div>
```

Apply the same behavior to the `register` function errors (and don’t forget to update the HTML).

## Display Information on the Dashboard

Using the techniques we’ve just learned, we’ll now display the account information on the dashboard page.

Here’s an example of what an account object received from the server looks like:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Note: To make testing easier, you can use the pre-existing `test` account, which already contains data.

### Task

Let’s start by modifying the "Balance" section in the HTML to include placeholder elements:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

We’ll also add a new section below to display the account description:

```html
<h2 id="description"></h2>
```

✅ Since the account description serves as a title for the content below it, it’s marked up semantically as a heading. Learn more about the importance of [heading structure](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) for accessibility, and review the page to identify other potential headings.

Next, we’ll create a new function in `app.js` to populate the placeholders:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

First, we ensure that the account data is available before proceeding. Then, we use the `updateElement()` function we created earlier to update the HTML.

> To make the balance display more user-friendly, we use the [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method to ensure the value is displayed with two decimal places.

Now, we need to call the `updateDashboard()` function whenever the dashboard is loaded. If you’ve already completed the [lesson 1 assignment](../1-template-route/assignment.md), this should be straightforward. Otherwise, you can use the following implementation.

Add this code to the end of the `updateRoute()` function:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

And update the route definitions with:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

With this change, the `updateDashboard()` function will be called every time the dashboard page is displayed. After logging in, you should see the account balance, currency, and description.

## Create Table Rows Dynamically with HTML Templates

In [lesson 1](../1-template-route/README.md), we used HTML templates along with the [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) method to implement navigation in our app. Templates can also be used for smaller, repetitive parts of a page.

We’ll use a similar approach to display the list of transactions in the HTML table.

### Task

Add a new template to the HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

This template represents a single table row with three columns: *date*, *object*, and *amount* of a transaction.

Next, add an `id` property to the `<tbody>` element of the table in the dashboard template to make it easier to find with JavaScript:

```html
<tbody id="transactions"></tbody>
```

Now that the HTML is ready, let’s switch to JavaScript and create a new function called `createTransactionRow`:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

This function does exactly what its name suggests: it uses the template we created earlier to generate a new table row and fills in its contents with transaction data. We’ll use this function in `updateDashboard()` to populate the table:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Here, we use the [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) method to create a new DOM fragment. This allows us to work on the fragment before attaching it to the HTML table.

Finally, we need to update the `updateElement()` function to support more than just text content. Modify its code as follows:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

We use the [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) method, which allows us to attach either text or [DOM Nodes](https://developer.mozilla.org/docs/Web/API/Node) to a parent element. This makes it versatile for all our use cases.
If you try using the `test` account to log in, you should now see a transaction list on the dashboard 🎉.

---

## 🚀 Challenge

Work together to make the dashboard page look like a real banking app. If you've already styled your app, try using [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) to create a [responsive design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) that works well on both desktop and mobile devices.

Here's an example of a styled dashboard page:

![Screenshot of an example result of the dashboard after styling](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.en.png)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/46)

## Assignment

[Refactor and comment your code](assignment.md)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.