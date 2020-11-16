# Build a Banking App Part 3: Methods of Fetching and Using Data

## Pre-Lecture Quiz

[Pre-lecture quiz](.github/pre-lecture-quiz.md)

### Introduction

At the core of every web application there's *data*. Data can take many forms, but its main purpose is always to display information to the user. With web apps becoming increasingly interactive and complex, how the user accesses and interacts with information is now a key part of web development.

In this lesson, we'll see how to fetch data from a server asynchronously, and use this data to display information on a web page without reloading the HTML.

### Prerequisite

You need to have built the [Login and Registration Form](../2-forms/README.md) part of the web app for this lesson. You also need to install [Node.js](https://nodejs.org) and [run the server API](../api/README.md) locally so you get account data.

You can test that the server is running properly by executing this command in a terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX and data fetching

Traditional web sites update the content displayed when the user click on a link or submit data using a form, by reloading the full HTML page. Every time new data needs to be loaded, the web server returns a brand new HTML page that needs to be processed by the browser, interrupting the current user action and limiting interactions during the reload. This workflow is also called a *Multi-Page Application* or *MPA*.

![Update workflow in a multi-page application](./images/mpa.png)

When web applications started to become more complex and interactive, a new technique called [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) emerged. This technique allows web apps to send and retrieve data from a server asynchronously using JavaScript, without having to reload the HTML page, resulting in faster updates and smoother user interactions. When new data is received from the server, the current HTML page can also be updated with JavaScript using the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) API. Over time, this approach has evolved into what we is now called a [*Single-Page Application* or *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Update workflow in a single-page application](./images/spa.png)

When AJAX was first introduced, the only API available to fetch data asynchronously was [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). But modern browsers now also implement the more convenient and powerful [`Fetch` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), which use promises and is better suited to manipulate JSON data.

> While all modern browsers supports the `Fetch API`, if you want your web application to work on legacy or old browsers it's always a good idea to check the [compatibility table on caniuse.com](https://caniuse.com/fetch) first.

### Task

In [the previous lesson](../2-forms/README.md) we implented the registration form to create an account. We'll now add code to login using an existing account, and fetch its data. Open the `app.js` file and add a new `login` function:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Here we start by retrieving the form element with `getElementById()`, and then we get the username from the input with `loginForm.user.value`. Every form control can be accessed by its name (set in the HTML using the `name` attribute) as a property of the form.

In a similar fashion to what we did for the registration, we'll create another function to perform a server request, but this time for retrieving the account data:

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

We use the `fetch` API to request the data asynchronously from the server, but this time we don't need any extra parameters other than the URL to call, as we're only querying data. By default, `fetch` create a [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) HTTP request, which is what we are seeking here.

✅ `encodeURIComponent()` is a function that escapes special characters for URL. What possible issues could we possibly have if we do not call this function and use directly the `user` value in the URL?

Let's now update our `login` function to use `getAccount`:

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

First, as `getAccount` is an asynchronous function we need to match it with the `await` keyword to wait for the server result. As with any server request, we also have to deal with errors cases. For now we'll only add a log message to display the error, and come back to it layer.

Then we have to store the data somewhere so we can later use it to display the dashboard informations. Since we the `account` variable does not exist yet, we'll create a global variable for it at the top of our file:

```js
let account = null;
```

After the user data is saved into a variable we can navigate from the *login* page to the *dashboard* using the `navigate()` function we already have.

Finally, we need to call our `login` function when the login form is submitted by modifying the HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Test that everything is working correctly by registering a new account and trying to login using the same account.

Before moving on to the next part, we can also complete the `register` function by adding this at the bottom of the function:

```js
account = result;
navigate('/dashboard');
```

✅ Did you know that by default, you can only call server APIs from the *same domain and port* than the web page you are viewing? This is security mechanism enforced by browsers. But wait, our web app is running on `localhost:3000` whereas the server API is running on ` localhost:5000`, why does it work? By using a technique called [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) it is possible to perform cross-origin HTTP requests is the server add specials headers to the response, allowing exceptions for specific domains.

## Update HTML to display data

Now that we have the user data, we have to update the existing HTML to display it. We already now how to retrieve element from the DOM using for example `document.getElementById()`. After you have a base element, here are some APIs you can use to modify it or add child elements to it:

- Using the [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property you can change the text of an element. Note that changing this values removes all the element's children (if there's any) and replace it with the text provided. As such, it's also an efficient method to remove all children of a given element by assigning an empty string `''` to it.

- Using [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) along with the [`append()`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append) method you can create and attach one or more new child elements.

✅ Using the [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property of an element it's also possible to change its HTML contents, but this one should avoided as it's vulnerable to [cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks.

### Task

Before moving on to the dashboard screen, there's one more thing we should do on the *login* page. Currently, if you try to login with a username that does not exist, a message is shown in the console but for a normal user nothing changes and you don't know what's going on.

Let's add a placeholder element in the login form where we can display an error message if needed. A good place would be just before the login `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

This `<div>` element is empty, meaning that nothing we be displayed on the screen until we add some content to it. We also give it an `id` so we can retrieve it easily with JavaScript.

Go back to the `app.js` file and create a new helper function `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

This one is quite straightforward, given an element *id* and *text* it will update the text content of the DOM element with the matching `id`. Let's use this method in place of the previous error message in the `login` function:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Now if you try to login with an invalid account, you should see something like this:

![Screenshot showing the error message displayed during login](./images/login-error.png)

Implement the same behavior for the `register` function errors (don't forget to update the HTML).

## Display information on the dashboard

Using the same techniques we've just seen we'll also take care of displaying the account information on the the dashboard page.

This is what an account object received from the server looks like:

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

> Note: to make your life easier, you can use the pre-existing `test` account that's already populated with data.

### Task

Let's start by replacing the "Balance" section in the HTML to add placeholder elements:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

We'll also add a new section just below to display the account description:

```html
<section id="description" aria-label="Account description"></section>
```

✅ As there is no text label here to explain what this section is about, we use the `aria-label` attribute to give an accessibility hint. Learn more about [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) to make sure your web apps are accessible to everyone.

Next, we'll create a new function in `app.js` to fill in the placeholder:

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

First, we check that we have the account data we need before going futher. Then we use the `updateElement()` function we created earlier to update the HTML.

> To make the balance display prettier, we use the method [`toFixed(2)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) to force displaying the value with 2 digits after the decimal point.

Now we need to call our `updateDashboard()` function everytime the dashboard is loaded. If you already finished the [lesson 1 assignment](../1-template-route/assignment.md) this should be straighforward, otherwise you can use the following implementation.

Add this code to the end of the `updateRoute()` function:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

And update the routes definition with:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

With this change, everytime the dashboard page is displayed then the function `updateDashboard()` is called. After a login, you should then be able to see the account balance, currency and description.

## Create table rows dynamically with HTML templates

In the [first lesson](../1-template-route/README.md) we used HTML template along with the [`appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) method to implement the navigation in our app. Templates can also be smaller and used to dynamically populate repetitive parts of a page.

We'll use a similar approach to display the list of transactions in the HTML table.

### Task

Add a new template in the HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

This template represents a single table row, with the 3 columns we want to populate: *date*, *object* and *amount* of a transaction.

Then, add this `id` property to the `<tbody>` element of the table within the dashboard template to make it easier to find using JavaScript:

```html
<tbody id="transactions"></tbody>
```

Our HTML is ready, let's switch to JavaScript code and create a new function `createTransactionRow`:

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

This function does exactly what its names implies: using the template we created earlier, it create a new table row and fill in its contents using transaction data. We'll use this to in our `updateDashboard()` function to populate the table:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

We use here the method [`document.createDocumentFragment()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment) that create a new DOM fragment on which we can work, before finally attaching it to our HTML table.

There's still one more thing we have to do before this code can work, as our `updateElement()` function currently supports text content only. Let's change its code a bit:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

We use the [`append()`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append) method as it allows to attach either text or [DOM Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node) to a parent element, which is perfect for all our use cases.

If you try using the `test` account to login, you should now see a transaction list on the dashboard 🎉.

---

## 🚀 Challenge

Work together to make the dashboard page look like a real banking app. If you already styled your app, try to use [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) to create a [responsive design](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) working nicely on both desktop and mobile devices.

Here's an example of a styled dashboard page:

![Screenshot of an example result of the dashboard after styling](../images/screen2.png)

## Post-Lecture Quiz

[Post-lecture quiz](.github/post-lecture-quiz.md)

## Assignment

[Refactor and comment your code](assignment.md)
