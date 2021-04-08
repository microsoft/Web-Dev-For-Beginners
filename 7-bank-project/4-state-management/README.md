# Build a Banking App Part 4: Concepts of State Management

## Pre-Lecture Quiz

[Pre-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/47)

### Introduction

As a web application grows, it becomes a challenge to keep track of all data flows. Which code gets the data, what page consumes it, where and when does it need to be updated...it's easy to end up with messy code that's difficult to maintain. This is especially true when you need to share data among different pages of your app, for example user data. The concept of *state management* has always existed in all kinds of programs, but as web apps keep growing in complexity it's now a key point to think about during development.

In this final part, we'll look over the app we built to rethink how the state is managed, allowing support for browser refresh at any point, and persisting data across user sessions.

### Prerequisite

You need to have completed the [data fetching](../3-data/README.md) part of the web app for this lesson. You also need to install [Node.js](https://nodejs.org) and [run the server API](../api/README.md) locally so you can manage account data.

You can test that the server is running properly by executing this command in a terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Rethink state management

In the [previous lesson](../3-data/README.md), we introduced a basic concept of state in our app with the global `account` variable which contains the bank data for the currently logged in user. However, our current implementation has some flaws. Try refreshing the page when you're on the dashboard. What happens?

There's 3 issues with the current code:

- The state is not persisted, as a browser refresh takes you back to the login page.
- There are multiple functions that modify the state. As the app grows, it can make it difficult to track the changes and it's easy to forget updating one.
- The state is not cleaned up, so when you click on *Logout* the account data is still there even though you're on the login page.

We could update our code to tackle these issues one by one, but it would create more code duplication and make the app more complex and difficult to maintain. Or we could pause for a few minutes and rethink our strategy.

> What problems are we really trying to solve here?

[State management](https://en.wikipedia.org/wiki/State_management) is all about finding a good approach to solve these two particular problems:

- How to keep the data flows in an app understandable?
- How to keep the state data always in sync with the user interface (and vice versa)?

Once you've taken care of these, any other issues you might have may either be fixed already or have become easier to fix. There are many possible approaches for solving these problems, but we'll go with a common solution that consists of **centralizing the data and the ways to change it**. The data flows would go like this:

![Schema showing the data flows between the HTML, user actions and state](./images/data-flow.png)

> We won't cover here the part where the data automatically triggers the view update, as it's tied to more advanced concepts of [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming). It's a good follow-up subject if you're up to a deep dive.

✅ There are a lot of libraries out there with different approaches to state management, [Redux](https://redux.js.org) being a popular option. Take a look at the concepts and patterns used as it's often a good way to learn what potential issues you may be facing in large web apps and how it can be solved.

### Task

We'll start with a bit of refactoring. Replace the `account` declaration:

```js
let account = null;
```

With:

```js
let state = {
  account: null
};
```

The idea is to *centralize* all our app data in a single state object. We only have `account` for now in the state so it doesn't change much, but it creates a path for evolutions.

We also have to update the functions using it. In the `register()` and `login()` functions, replace `account = ...` with `state.account = ...`;

At the top of the `updateDashboard()` function, add this line:

```js
const account = state.account;
```

This refactoring by itself did not bring much improvements, but the idea was to lay out the foundation for the next changes.

## Track data changes

Now that we have put in place the `state` object to store our data, the next step is centralize the updates. The goal is to make it easier to keep track of any changes and when they happen.

To avoid having changes made to the `state` object, it's also a good practice to consider it [*immutable*](https://en.wikipedia.org/wiki/Immutable_object), meaning that it cannot be modified at all. It also means that you have to create a new state object if you want to change anything in it. By doing this, you build a protection about potentially unwanted [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)), and open up possibilities for new features in your app like implementing undo/redo, while also making it easier to debug. For example, you could log every change made to the state and keep a history of the changes to understand the source of a bug.

In JavaScript, you can use [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to create an immutable version of an object. If you try to make changes to an immutable object, an exception will be raised.

✅ Do you know the difference between a *shallow* and a *deep* immutable object? You can read about it [here](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Task

Let's create a new `updateState()` function:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

In this function, we're creating a new state object and copy data from the previous state using the [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Then we override a particular property of the state object with the new data using the [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` for assignment. Finally, we lock the object to prevent modifications using `Object.freeze()`. We only have the `account` property stored in the state for now, but with this approach you can add as many properties as you need in the state.

We'll also update the `state` initialization to make sure the initial state is frozen too:

```js
let state = Object.freeze({
  account: null
});
```

After that, update the `register` function by replacing the `state.account = result;` assignment with:

```js
updateState('account', result);
```

Do the same with the `login` function, replacing `state.account = data;` with:

```js
updateState('account', data);
```

We'll now take the chance to fix the issue of account data not being cleared when the user clicks on *Logout*.

Create a new function `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

In `updateDashboard()`, replace the redirection `return navigate('/login');` with `return logout()`;

Try registering a new account, logging out and in again to check that everything still works correctly.

> Tip: you can take a look at all state changes by adding `console.log(state)` at the bottom of `updateState()` and opening up the console in your browser's development tools.

## Persist the state

Most web apps needs to persist data to be able to work correctly. All the critical data is usually stored on a database and accessed via a server API, like as the user account data in our case. But sometimes, it's also interesting to persist some data on the client app that's running in your browser, for a better user experience or to improve loading performance.

When you want to persist data in your browser, there are a few important questions you should ask yourself:

- *Is the data sensitive?* You should avoid storing any sensitive data on client, such as user passwords.
- *For how long do you need to keep this data?* Do you plan to access this data only for the current session or do you want it to be stored forever?

There are multiple ways of storing information inside a web app, depending on what you want to achieve. For example, you can use the URLs to store a search query, and make it shareable between users. You can also use [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) if the data needs to be shared with the server, like [authentication](https://en.wikipedia.org/wiki/Authentication) information.

Another option is to use one of the many browser APIs for storing data. Two of them are particularly interesting:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): a [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) allowing to persist data specific to the current web site across different sessions. The data saved in it never expires.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): this one is works the same as `localStorage` except that the data stored in it is cleared when the session ends (when the browser is closed).

Note that both these APIs only allow to store [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). If you want to store complex objects, you will need to serialize it to the [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) format using [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ If you want to create a web app that does not work with a server, it's also possible to create a database on the client using the [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). This one is reserved for advanced use cases or if you need to store significant amount of data, as it's more complex to use.

### Task

We want our users stay logged in until they explicitly click on the *Logout* button, so we'll use `localStorage` to store the account data. First, let's define a key that we'll use to store our data.

```js
const storageKey = 'savedAccount';
```

Then add this line at the end of the `updateState()` function:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

With this, the user account data will be persisted and always up-to-date as we centralized previously all our state updates. This is where we begin to benefit from all our previous refactors 🙂.

As the data is saved, we also have to take care of restoring it when the app is loaded. Since we'll begin to have more initialization code it may be a good idea to create a new `init` function, that also includes our previous code at the bottom of `app.js`:

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

Here we retrieve the saved data, and if there's any we update the state accordingly. It's important to do this *before* updating the route, as there might be code relying on the state during the page update.

We can also make the *Dashboard* page our application default page, as we are now persisting the account data. If no data is found, the dashboard takes care of redirecting to the *Login* page anyways. In `updateRoute()`, replace the fallback `return navigate('/login');` with `return navigate('/dashboard');`.

Now login in the app and try refreshing the page. You should stay on the dashboard. With that update we've taken care of all our initial issues...

## Refresh the data

...But we might also have a created a new one. Oops!

Go to the dashboard using the `test` account, then run this command on a terminal to create a new transaction:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Try refreshing your the dashboard page in the browser now. What happens? Do you see the new transaction?

The state is persisted indefinitely thanks to the `localStorage`, but that also means it's never updated until you log out of the app and log in again!

One possible strategy to fix that is to reload the account data every time the dashboard is loaded, to avoid stall data.

### Task

Create a new function `updateAccountData`:

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

This method checks that we are currently logged in then reloads the account data from the server.

Create another function named `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

This one updates the account data, then takes care of updating the HTML of the dashboard page. It's what we need to call when the dashboard route is loaded. Update the route definition with:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Try reloading the dashboard now, it should display the updated account data.

---

## 🚀 Challenge

Now that we reload the account data every time the dashboard is loaded, do you think we still need to persist *all the account* data?

Try working together to change what is saved and loaded from `localStorage` to only include what is absolutely required for the app to work.

## Post-Lecture Quiz

[Post-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/48)

## Assignment

[Implement "Add transaction" dialog](assignment.md)

Here's an example result after completing the assignment:

![Screenshot showing an example "Add transaction" dialog](./images/dialog.png)
