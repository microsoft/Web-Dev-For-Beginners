<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T12:43:35+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "en"
}
-->
# Build a Banking App Part 4: Concepts of State Management

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/47)

### Introduction

As web applications grow, managing data flows becomes increasingly challenging. Questions like which code retrieves the data, which page uses it, where and when it needs to be updated can lead to messy, hard-to-maintain code. This is especially true when data needs to be shared across different pages, such as user information. The concept of *state management* has always been present in programming, but as web apps become more complex, it has become a critical aspect of development.

In this final part, we'll revisit the app we built to improve state management, enabling browser refresh at any point and persisting data across user sessions.

### Prerequisite

Before starting this lesson, you should have completed the [data fetching](../3-data/README.md) section of the web app. Additionally, you need to install [Node.js](https://nodejs.org) and [run the server API](../api/README.md) locally to manage account data.

You can verify that the server is running correctly by executing this command in a terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Rethink state management

In the [previous lesson](../3-data/README.md), we introduced a basic concept of state in our app using the global `account` variable, which holds the bank data for the currently logged-in user. However, our current implementation has some shortcomings. Try refreshing the page while on the dashboard. What happens?

There are three issues with the current code:

- The state is not persisted, so refreshing the browser takes you back to the login page.
- Multiple functions modify the state, which can make tracking changes difficult as the app grows. It's easy to forget to update one.
- The state is not cleaned up, meaning that when you click *Logout*, the account data remains even though you're on the login page.

We could address these issues individually, but doing so would lead to code duplication and make the app harder to maintain. Instead, we can pause and rethink our approach.

> What problems are we really trying to solve here?

[State management](https://en.wikipedia.org/wiki/State_management) is about finding effective ways to address two key challenges:

- How to keep data flows in an app understandable?
- How to ensure the state data is always synchronized with the user interface (and vice versa)?

Once these challenges are addressed, other issues may either resolve themselves or become easier to fix. There are many approaches to solving these problems, but we'll use a common solution: **centralizing the data and the methods to modify it**. The data flows will look like this:

![Schema showing the data flows between the HTML, user actions and state](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.en.png)

> We won't cover the part where data automatically triggers view updates, as it involves more advanced concepts of [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming). It's a great topic for further exploration.

✅ There are many libraries with different approaches to state management, such as [Redux](https://redux.js.org), which is a popular choice. Exploring its concepts and patterns can help you understand potential issues in large web apps and how to address them.

### Task

We'll start with some refactoring. Replace the `account` declaration:

```js
let account = null;
```

With:

```js
let state = {
  account: null
};
```

The idea is to *centralize* all app data in a single state object. For now, we only have `account` in the state, so this change is minimal, but it sets the stage for future enhancements.

Next, update the functions that use it. In the `register()` and `login()` functions, replace `account = ...` with `state.account = ...`;

At the top of the `updateDashboard()` function, add this line:

```js
const account = state.account;
```

This refactoring doesn't bring significant improvements yet, but it lays the groundwork for upcoming changes.

## Track data changes

Now that we have the `state` object to store our data, the next step is to centralize updates. This makes it easier to track changes and when they occur.

To prevent direct modifications to the `state` object, it's a good practice to treat it as [*immutable*](https://en.wikipedia.org/wiki/Immutable_object), meaning it cannot be altered. Instead, you create a new state object whenever changes are needed. This approach protects against unwanted [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) and opens up possibilities for features like undo/redo functionality, while also simplifying debugging. For instance, you could log every state change and maintain a history to trace bugs.

In JavaScript, you can use [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to make an object immutable. Attempting to modify an immutable object will raise an exception.

✅ Do you know the difference between a *shallow* and a *deep* immutable object? Learn more [here](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Task

Create a new `updateState()` function:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

This function creates a new state object, copies data from the previous state using the [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals), and updates a specific property using the [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties). Finally, it locks the object with `Object.freeze()` to prevent modifications. Currently, the state only contains the `account` property, but this approach allows for adding more properties as needed.

Update the `state` initialization to ensure the initial state is frozen:

```js
let state = Object.freeze({
  account: null
});
```

Next, update the `register` function by replacing `state.account = result;` with:

```js
updateState('account', result);
```

Do the same for the `login` function, replacing `state.account = data;` with:

```js
updateState('account', data);
```

Now, let's address the issue of account data not being cleared when the user clicks *Logout*.

Create a new `logout()` function:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

In `updateDashboard()`, replace the redirection `return navigate('/login');` with `return logout()`;

Test the app by registering a new account, logging out, and logging back in to ensure everything works correctly.

> Tip: You can monitor state changes by adding `console.log(state)` at the bottom of `updateState()` and checking the browser's developer console.

## Persist the state

Most web apps need to persist data for proper functionality. Critical data is typically stored in a database and accessed via a server API, like user account data in our case. However, persisting some data on the client side can enhance user experience and improve loading performance.

When storing data in the browser, consider the following:

- *Is the data sensitive?* Avoid storing sensitive information like passwords on the client side.
- *How long should the data be kept?* Should it be accessible only during the current session or stored indefinitely?

There are various ways to store information in a web app, depending on your goals. For example, you can use URLs to store search queries for sharing between users. You can also use [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) for data that needs to be shared with the server, such as [authentication](https://en.wikipedia.org/wiki/Authentication) details.

Two browser APIs are particularly useful for storing data:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): A [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) that persists data specific to the current website across sessions. Data saved here never expires.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): Similar to `localStorage`, but data is cleared when the browser session ends.

Both APIs only store [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). To store complex objects, you need to serialize them using [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ If you want to create a web app without a server, you can use the [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) to create a client-side database. This is suitable for advanced use cases or storing large amounts of data, though it is more complex to use.

### Task

We want users to remain logged in until they explicitly click the *Logout* button, so we'll use `localStorage` to store account data. First, define a key for storing the data:

```js
const storageKey = 'savedAccount';
```

Then, add this line at the end of the `updateState()` function:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

This ensures the user account data is persisted and always up-to-date, thanks to our centralized state updates. This is where the benefits of our earlier refactoring become apparent 🙂.

Next, restore the saved data when the app loads. Since we'll have more initialization code, create a new `init` function that includes the previous code at the bottom of `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Here, we retrieve the saved data and update the state if any is found. This must happen *before* updating the route, as some code may rely on the state during page updates.

We can also make the *Dashboard* page the default page of the app, as account data is now persisted. If no data is found, the dashboard will redirect to the *Login* page. In `updateRoute()`, replace the fallback `return navigate('/login');` with `return navigate('/dashboard');`.

Log in to the app and try refreshing the page. You should remain on the dashboard. With this update, we've resolved all initial issues...

## Refresh the data

...But we may have introduced a new one. Oops!

Log in using the `test` account, then run this command in a terminal to create a new transaction:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Refresh the dashboard page in your browser. What happens? Do you see the new transaction?

The state is persisted indefinitely via `localStorage`, but it isn't updated until you log out and log back in!

One strategy to fix this is to reload the account data whenever the dashboard is loaded, ensuring the data is up-to-date.

### Task

Create a new `updateAccountData` function:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

This function checks if the user is logged in and reloads the account data from the server.

Create another function named `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

This function updates the account data and refreshes the dashboard's HTML. Call it when the dashboard route is loaded. Update the route definition with:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Refresh the dashboard now, and it should display the updated account data.

---

## 🚀 Challenge

Now that we reload the account data whenever the dashboard is loaded, do you think we still need to persist *all the account* data?

Work together to modify what is saved and loaded from `localStorage` to include only the data absolutely necessary for the app to function.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/48)

## Assignment

[Implement "Add transaction" dialog](assignment.md)

Here's an example result after completing the assignment:

![Screenshot showing an example "Add transaction" dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.en.png)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.