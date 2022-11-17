# Build a Banking App Part 1: HTML Templates and Routes in a Web App

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### Introduction

Since the advent of JavaScript in browsers, websites are becoming more interactive and complex than ever. Web technologies are now commonly used to create fully functional applications that runs directly into a browser that we call [web applications](https://en.wikipedia.org/wiki/Web_application). As Web apps are highly interactive, users do not want to wait for a full page reload every time an action is performed. That's why JavaScript is used to update the HTML directly using the DOM, to provide a smoother user experience.

In this lesson, we're going to lay out the foundations to create bank web app, using HTML templates to create multiple screens that can be displayed and updated without having to reload the entire HTML page.

### Prerequisite

You need a local web server to test the web app we'll build in this lesson. If don't have one, you can install [Node.js](https://nodejs.org) and use the command `npx lite-server` from your project folder. It will create a local web server and open your app in a browser.

### Preparation

On your computer, create a folder named `bank` with a file named `index.html` inside it. We'll start from this HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code):

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

## HTML templates

If you want to create multiples screens for a web page, one solution would be to create one HTML file for every screen you want to display. However, this solution comes with some inconvenience:

- You have to reload the entire HTML when switching screen, which can be slow.
- It's difficult to share data between the different screens.

Another approach is have only one HTML file, and define multiple [HTML templates](https://developer.mozilla.org/docs/Web/HTML/Element/template) using the `<template>` element. A template is a reusable HTML block that is not displayed by the browser, and needs to be instantiated at runtime using JavaScript.

### Task

We'll create a bank app with two screens: the login page and the dashboard. First, let's add in the HTML body a placeholder element that we'll use to instantiate the different screens of our app:

```html
<div id="app">Loading...</div>
```

We're giving it an `id` to make it easier to locate it with JavaScript later.

> Tip: since the content of this element will be replaced, we can put in a loading message or indicator that will be shown while the app is loading.

Next, let's add below the HTML template for the login page. For now we'll only put in there a title and a section containing a link that we'll use to perform the navigation.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Then we'll add another HTML template for the dashboard page. This page will contain different sections:

- A header with a title and a logout link
- The current balance of the bank account
- A list of transactions, displayed in a table

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

> Tip: when creating HTML templates, if you want to see what it will look like, you can comment out the `<template>` and `</template>` lines by enclosing them with `<!-- -->`.

✅ Why do you think we use `id` attributes on the templates? Could we use something else like classes?

## Displaying templates with JavaScript

If you try your current HTML file in a browser, you'll see that it get stuck displaying `Loading...`. That's because we need to add some JavaScript code to instantiate and display the HTML templates.

Instantiating a template is usually done in 3 steps:

1. Retrieve the template element in the DOM, for example using [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Clone the template element, using [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Attach it to the DOM under a visible element, for example using [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Why do we need to clone the template before attaching it to the DOM? What do you think would happen if we skipped this step?

### Task

Create a new file named `app.js` in your project folder and import that file in the `<head>` section of your HTML:

```html
<script src="app.js" defer></script>
```

Now in `app.js`, we'll create a new function `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

What we do here is exactly the 3 steps described above. We instantiate the template with the id `templateId`, and put its cloned content within our app placeholder. Note that we need to use `cloneNode(true)` to copy the entire subtree of the template.

Now call this function with one of the template and look at the result.

```js
updateRoute('login');
```

✅ What's the purpose of this code `app.innerHTML = '';`? What happens without it?

## Creating routes

When talking about a web app, we call *Routing* the intent to map **URLs** to specific screens that should be displayed. On a web site with multiple HTML files, this is done automatically as the file paths are reflected on the URL. For example, with these files in your project folder:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

If you create a web server with `mywebsite` as the root, the URL mapping will be:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

However, for our web app we are using a single HTML file containing all the screens so this default behavior won't help us. We have to create this map manually and perform update the displayed template using JavaScript.

### Task

We'll use a simple object to implement a [map](https://en.wikipedia.org/wiki/Associative_array) between URL paths and our templates. Add this object at the top of your `app.js` file.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Now let's modify a bit the `updateRoute` function. Instead of passing directly the `templateId` as an argument, we want to retrieve it by first looking at the current URL, and then use our map to get the corresponding template ID value. We can use [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) to get only the path section from the URL.

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

Here we mapped the routes we declared to the corresponding template. You can try it that it works correctly by changing the URL manually in your browser.

✅ What happens if you enter an unknown path in the URL? How could we solve this?

## Adding navigation

The next step for our app is to add the possibility to navigate between pages without having to change the URL manually. This implies two things:

  1. Updating the current URL
  2. Updating the displayed template based on the new URL

We already took care of the second part with the `updateRoute` function, so we have to figure out how to update the current URL.

We'll have to use JavaScript and more specifically the [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) that allows to update the URL and create a new entry in the browsing history, without reloading the HTML.

> Note: While the HTML anchor element [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) can be used on its own to create hyperlinks to different URLs, it will make the browser reload the HTML by default. It is necessary to prevent this behavior when handling routing with custom javascript, using the preventDefault() function on the click event.

### Task

Let's create a new function we can use to navigate in our app:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

This method first updates the current URL based on the path given, then updates the template. The property `window.location.origin` returns the URL root, allowing us to reconstruct a complete URL from a given path.

Now that we have this function, we can take care of the problem we have if a path does not match any defined route. We'll modify the `updateRoute` function by adding a fallback to one of the existing route if we can't find a match.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

If a route cannot be found, we'll now redirect to the `login` page.

Now let's create a function to get the URL when a link is clicked, and to prevent the browser's default link behavior:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Let's complete the navigation system by adding bindings to our *Login* and *Logout* links in the HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

The `event` object above, captures the `click` event and passes it to our `onLinkClick` function.

Using the [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) attribute bind the `click` event to JavaScript code, here the call to the `navigate()` function.

Try clicking on these links, you should be now able to navigate between the different screens of your app.

✅ The `history.pushState` method is part of the HTML5 standard and implemented in [all modern browsers](https://caniuse.com/?search=pushState). If you're building a web app for older browsers, there's a trick you can use in place of this API: using a [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) before the path you can implement routing that works with regular anchor navigation and does not reload the page, as it's purpose was to create internal links within a page.

## Handling the browser's back and forward buttons

Using the `history.pushState` creates new entries in the browser's navigation history. You can check that by holding the *back button* of your browser, it should display something like this:

![Screenshot of navigation history](./history.png)

If you try clicking on the back button a few times, you'll see that the current URL changes and the history is updated, but the same template keeps being displayed.

That's because the application does not know that we need to call `updateRoute()` every time the history changes. If you take a look at the [`history.pushState` documentation](https://developer.mozilla.org/docs/Web/API/History/pushState), you can see that if the state changes - meaning that we moved to a different URL - the [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) event is triggered. We'll use that to fix that issue.

### Task

To make sure the displayed template is updated when the browser history changes, we'll attach a new function that calls `updateRoute()`. We'll do that at the bottom of our `app.js` file:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Note: we used an [arrow function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) here to declare our `popstate` event handler for conciseness, but a regular function would work the same.

Here's a refresher video on arrow functions:

[![Arrow Functions](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Arrow Functions")

> 🎥 Click the image above for a video about arrow functions.

Now try to use the back and forward buttons of your browsers, and check that the displayed route is correctly updated this time.

---

## 🚀 Challenge

Add a new template and route for a third page that shows the credits for this app.

## Post-Lecture Quiz

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## Review & Self Study

Routing is one of the surprisingly tricky parts of web development, especially as the web moves from page refresh behaviors to Single Page Application page refreshes. Read a little about [how the Azure Static Web App service](https://docs.microsoft.com/azure/static-web-apps/routes?WT.mc_id=academic-77807-sagibbon) handles routing. Can you explain why some of the decisions described on that document are necessary?

## Assignment

[Improve the routing](assignment.md)
