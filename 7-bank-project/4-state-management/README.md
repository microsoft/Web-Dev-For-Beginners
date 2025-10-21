# Build a Banking App Part 4: Concepts of State Management

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/47)

## Introduction

You know what's funny about state management? It's absolutely everywhere in web development, yet most of us don't really think about it until our apps start acting weird. Ever built something that works perfectly, only to refresh the page and watch everything disappear? That's state management (or lack thereof) in action!

Think of state as your app's memory – it's everything your application needs to remember while it's running. User login status, form data, which page you're on, that shopping cart full of items – all of this is state. As your banking app has grown from a simple login form into something more sophisticated, you've probably started noticing some... let's call them "quirks."

If you've been following along with the previous lessons, you might have experienced some frustrating moments: refresh the page and suddenly you're logged out, close your browser and all your progress vanishes, or maybe you've noticed it's getting harder to keep track of what's happening where in your code. Don't worry – you're not doing anything wrong! These are the growing pains that every developer faces when their apps start getting real.

Today, we're going to transform your banking app from "it works on my machine" to "this feels professional." You'll learn how to wrangle state like a pro, make data stick around when it should, and create that smooth user experience that makes people think "wow, this just works." Trust me, once you get the hang of state management, you'll wonder how you ever built apps without it!

## Prerequisites

Before diving into state management concepts, you'll need to have your development environment properly set up and your banking app foundation in place. This lesson builds directly on the concepts and code from previous parts of this series.

Make sure you have the following components ready before proceeding:

**Required Setup:**
- Complete the [data fetching lesson](../3-data/README.md) - your app should successfully load and display account data
- Install [Node.js](https://nodejs.org) on your system for running the backend API
- Start the [server API](../api/README.md) locally to handle account data operations

**Testing Your Environment:**

Verify that your API server is running correctly by executing this command in a terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**What this command does:**
- **Sends** a GET request to your local API server
- **Tests** the connection and verifies the server is responding
- **Returns** the API version information if everything is working correctly

---

## Let's Talk About What's Actually Happening Here

Okay, so you've got a banking app that works – congratulations! But before we start celebrating, let's do a little detective work. I want you to try something that'll probably make you go "oh no" (in the best educational way).

Here's a simple experiment that reveals what we're really dealing with:

**🧪 Try This (It's Going to Be Painful, But Enlightening):**
1. Log into your banking app and get to that beautiful dashboard
2. Now, take a deep breath and refresh the page
3. Watch what happens and try not to facepalm

Did you get kicked back to the login screen? Welcome to the wonderful world of state management problems! This isn't your fault – it's just what happens when we don't think about how data flows through our applications.

**Why Our Current Approach Makes Users (and Us) Sad:**

That simple `account` variable we created in the [previous lesson](../3-data/README.md)? It seemed so innocent, but it's actually causing us three major headaches:

| What's Breaking | Why It Hurts | What Users Think |
|---------|--------|----------------|
| **Nothing Sticks Around** | Hit refresh and poof – you're logged out | "This app has the memory of a goldfish" |
| **State Updates Everywhere** | Functions all over the place are changing our data | "Why is debugging this like finding a needle in a haystack?" |
| **Messy Logout** | Logging out doesn't actually clear everything | "Wait, can other people see my data?" |

**Here's What We're Really Up Against:**

We could try fixing these problems one by one, but that's like putting band-aids on a leaky boat – you'll just end up with more problems. Instead, let's step back and ask the real question:

> 💡 **What are we actually trying to accomplish here?**

[State management](https://en.wikipedia.org/wiki/State_management) is really about solving two fundamental puzzles:

1. **Where's My Data?**: Keeping track of what information we have and where it's coming from
2. **Is Everyone on the Same Page?**: Making sure what users see matches what's actually happening

**Our Game Plan:**

Instead of chasing our tails, we're going to create a **centralized state management** system. Think of it like having one really organized person in charge of all the important stuff:

![Schema showing the data flows between the HTML, user actions and state](./images/data-flow.png)

**Understanding this data flow:**
- **Centralizes** all application state in one location
- **Routes** all state changes through controlled functions
- **Ensures** the UI stays synchronized with the current state
- **Provides** a clear, predictable pattern for data management

> 💡 **Professional Insight**: This lesson focuses on fundamental concepts. For complex applications, libraries like [Redux](https://redux.js.org) provide more advanced state management features. Understanding these core principles will help you master any state management library.

> ⚠️ **Advanced Topic**: We won't cover automatic UI updates triggered by state changes, as this involves [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming) concepts. Consider this an excellent next step for your learning journey!

### Task: Centralize State Structure

Let's begin transforming our scattered state management into a centralized system. This first step establishes the foundation for all the improvements that follow.

**Step 1: Create a Central State Object**

Replace the simple `account` declaration:

```js
let account = null;
```

With a structured state object:

```js
let state = {
  account: null
};
```

**Here's why this change matters:**
- **Centralizes** all application data in one location
- **Prepares** the structure for adding more state properties later
- **Creates** a clear boundary between state and other variables
- **Establishes** a pattern that scales as your app grows

**Step 2: Update State Access Patterns**

Update your functions to use the new state structure:

**In `register()` and `login()` functions**, replace:
```js
account = ...
```

With:
```js
state.account = ...
```

**In `updateDashboard()` function**, add this line at the top:
```js
const account = state.account;
```

**What these updates accomplish:**
- **Maintains** existing functionality while improving structure
- **Prepares** your code for more sophisticated state management
- **Creates** consistent patterns for accessing state data
- **Establishes** the foundation for centralized state updates

> 💡 **Note**: This refactoring doesn't immediately solve our problems, but it creates the essential foundation for the powerful improvements coming next!

## Let's Get Control of Our Data Changes

Now that we've got our state organized in one place, it's time to tackle something that might sound a bit fancy but is actually pretty straightforward: making sure we know exactly when and how our data changes.

Here's the big idea: instead of letting any function just reach in and mess with our state whenever it feels like it, we're going to create one special function that handles all the changes. It's like having a bouncer at the door of your data – nothing gets in or out without going through the proper channels.

**The "Don't Touch That" Principle:**

We're going to treat our `state` object as [*immutable*](https://en.wikipedia.org/wiki/Immutable_object) – which is just a fancy way of saying "hands off, don't change this directly." Instead of modifying the existing state, we'll create a brand new state object every time something needs to change.

I know, I know – it sounds wasteful. "Why create a new object when I could just update the old one?" Trust me, this approach is going to save you so many headaches down the road.

**Benefits of immutable state management:**

| Benefit | Description | Impact |
|---------|-------------|--------|
| **Predictability** | Changes only happen through controlled functions | Easier to debug and test |
| **History Tracking** | Each state change creates a new object | Enables undo/redo functionality |
| **Side Effect Prevention** | No accidental modifications | Prevents mysterious bugs |
| **Performance Optimization** | Easy to detect when state actually changed | Enables efficient UI updates |

**JavaScript Immutability with `Object.freeze()`:**

JavaScript provides [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to prevent object modifications:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Breaking down what happens here:**
- **Prevents** direct property assignments or deletions
- **Throws** exceptions if modification attempts are made
- **Ensures** state changes must go through controlled functions
- **Creates** a clear contract for how state can be updated

> 💡 **Deep Dive**: Learn about the difference between *shallow* and *deep* immutable objects in the [MDN documentation](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Understanding this distinction is crucial for complex state structures.

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

## Making Things Stick Around (Finally!)

Remember that frustrating moment when you refreshed the page and got booted back to the login screen? Well, we're about to fix that once and for all! It's time to make our app remember things like a proper, professional application should.

You know how you can close Netflix, restart your computer, and when you come back it still knows you were halfway through that show you're definitely not binge-watching? That's the kind of experience we want to create. No more "who am I again?" moments when users refresh the page.

**Strategic Questions for Data Persistence:**

Before implementing persistence, consider these critical factors:

| Question | Banking App Context | Decision Impact |
|----------|-------------------|----------------|
| **Is the data sensitive?** | Account balance, transaction history | Choose secure storage methods |
| **How long should it persist?** | Login state vs. temporary UI preferences | Select appropriate storage duration |
| **Does the server need it?** | Authentication tokens vs. UI settings | Determine sharing requirements |

**Browser Storage Options:**

Modern browsers provide several storage mechanisms, each designed for different use cases:

**Primary Storage APIs:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Persistent [Key/Value storage](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Persists** data across browser sessions indefinitely  
   - **Survives** browser restarts and computer reboots
   - **Scoped** to the specific website domain
   - **Perfect** for user preferences and login states

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Temporary session storage
   - **Functions** identically to localStorage during active sessions
   - **Clears** automatically when the browser tab closes
   - **Ideal** for temporary data that shouldn't persist

3. **[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Server-shared storage
   - **Automatically** sent with every server request
   - **Perfect** for [authentication](https://en.wikipedia.org/wiki/Authentication) tokens
   - **Limited** in size and can impact performance

**Data Serialization Requirement:**

Both `localStorage` and `sessionStorage` only store [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Understanding serialization:**
- **Converts** JavaScript objects to JSON strings using [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Reconstructs** objects from JSON using [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- **Handles** complex nested objects and arrays automatically
- **Fails** on functions, undefined values, and circular references

> 💡 **Advanced Option**: For complex offline applications with large datasets, consider the [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). It provides a full client-side database but requires more complex implementation.

### Task: Implement localStorage Persistence

Let's implement persistent storage so users stay logged in until they explicitly log out. We'll use `localStorage` to store account data across browser sessions.

**Step 1: Define Storage Configuration**

```js
const storageKey = 'savedAccount';
```

**What this constant provides:**
- **Creates** a consistent identifier for our stored data
- **Prevents** typos in storage key references
- **Makes** it easy to change the storage key if needed
- **Follows** best practices for maintainable code

**Step 2: Add Automatic Persistence**

Add this line at the end of the `updateState()` function:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Breaking down what happens here:**
- **Converts** the account object to a JSON string for storage
- **Saves** the data using our consistent storage key
- **Executes** automatically whenever state changes occur
- **Ensures** stored data is always synchronized with current state

> 💡 **Architecture Benefit**: Because we centralized all state updates through `updateState()`, adding persistence required only one line of code. This demonstrates the power of good architectural decisions!

**Step 3: Restore State on App Load**

Create an initialization function to restore saved data:

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

**Understanding the initialization process:**
- **Retrieves** any previously saved account data from localStorage
- **Parses** the JSON string back into a JavaScript object
- **Updates** the state using our controlled update function
- **Restores** the user's session automatically on page load
- **Executes** before route updates to ensure state is available

**Step 4: Optimize Default Route**

Update the default route to take advantage of persistence:

In `updateRoute()`, replace:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Why this change makes sense:**
- **Leverages** our new persistence system effectively
- **Allows** the dashboard to handle authentication checks
- **Redirects** to login automatically if no saved session exists
- **Creates** a more seamless user experience

**Testing Your Implementation:**

1. Log into your banking app
2. Refresh the browser page
3. Verify you remain logged in and on the dashboard
4. Close and reopen your browser
5. Navigate back to your app and confirm you're still logged in

🎉 **Achievement Unlocked**: You've successfully implemented persistent state management! Your app now behaves like a professional web application.

## Keeping Things Fresh (Because Stale Data is Nobody's Friend)

So our persistence system is working great – users stay logged in, life is good. But we've accidentally created a new problem that happens in real apps all the time. Imagine this: you're checking your bank balance on your phone while your spouse is transferring money from the computer. Your phone still shows the old balance because it's using that saved data. Oops!

This is the classic "my cache is lying to me" problem, and we need to fix it before someone gets confused about how much money they actually have (which, let's be honest, is stressful enough already).

**🧪 Discovering the Data Freshness Problem:**

1. Log into the dashboard using the `test` account
2. Run this command in a terminal to simulate a transaction from another source:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Refresh your dashboard page in the browser
4. Observe whether you see the new transaction

**What this test demonstrates:**
- **Shows** how local storage can become "stale" (outdated)
- **Simulates** real-world scenarios where data changes occur outside your app
- **Reveals** the tension between persistence and data freshness

**The Data Staleness Challenge:**

| Problem | Cause | User Impact |
|---------|-------|-------------|
| **Stale Data** | localStorage never expires automatically | Users see outdated information |
| **Server Changes** | Other apps/users modify the same data | Inconsistent views across platforms |
| **Cache vs. Reality** | Local cache doesn't match server state | Poor user experience and confusion |

**Solution Strategy:**

We'll implement a "refresh on load" pattern that balances the benefits of persistence with the need for fresh data. This approach maintains the smooth user experience while ensuring data accuracy.

### Task: Implement Data Refresh System

We'll create a system that automatically fetches fresh data from the server while maintaining the benefits of our persistent state management.

**Step 1: Create Account Data Updater**

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

**Understanding this function's logic:**
- **Checks** if a user is currently logged in (state.account exists)
- **Redirects** to logout if no valid session is found
- **Fetches** fresh account data from the server using the existing `getAccount()` function
- **Handles** server errors gracefully by logging out invalid sessions
- **Updates** the state with fresh data using our controlled update system
- **Triggers** automatic localStorage persistence through the `updateState()` function

**Step 2: Create Dashboard Refresh Handler**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**What this refresh function accomplishes:**
- **Coordinates** the data refresh and UI update process
- **Waits** for fresh data to be loaded before updating the display
- **Ensures** the dashboard shows the most current information
- **Maintains** a clean separation between data management and UI updates

**Step 3: Integrate with Route System**

Update your route configuration to trigger refresh automatically:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**How this integration works:**
- **Executes** the refresh function every time the dashboard route loads
- **Ensures** fresh data is always displayed when users navigate to the dashboard
- **Maintains** the existing route structure while adding data freshness
- **Provides** a consistent pattern for route-specific initialization

**Testing Your Data Refresh System:**

1. Log into your banking app
2. Run the curl command from earlier to create a new transaction
3. Refresh your dashboard page or navigate away and back
4. Verify that the new transaction appears immediately

🎉 **Perfect Balance Achieved**: Your app now combines the smooth experience of persistent state with the accuracy of fresh server data!

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Implement a comprehensive state management system with undo/redo functionality for the banking app. This challenge will help you practice advanced state management concepts including state history tracking, immutable updates, and user interface synchronization.

**Prompt:** Create an enhanced state management system that includes: 1) A state history array that tracks all previous states, 2) Undo and redo functions that can revert to previous states, 3) UI buttons for undo/redo operations on the dashboard, 4) A maximum history limit of 10 states to prevent memory issues, and 5) Proper cleanup of history when the user logs out. Ensure the undo/redo functionality works with account balance changes and persists across browser refreshes.

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

## 🚀 Challenge Time: Become a Storage Optimization Pro

Alright, you've built something pretty awesome here! Your app remembers users, refreshes data when needed, and handles state like a champ. But here's a question that'll make you think like a senior developer: are we being a bit... wasteful with our storage?

Here's the thing – do we really need to save every single piece of account data in localStorage? It's kind of like carrying your entire filing cabinet with you when all you really need is your ID card.

**Your Mission (Should You Choose to Accept It):**

Put on your detective hat and figure out what data actually needs to stick around versus what should always be fresh from the server.

**Some Detective Questions to Get You Started:**
- What's the absolute minimum information needed to prove "hey, this person is logged in"?
- Which data changes so often that storing it locally is kind of pointless?
- How can we be smart about this without making the user experience worse?

This is the kind of thinking that separates good developers from great ones – optimizing without breaking things!

**Implementation Strategy:**
- **Identify** the essential data that must persist (likely just user identification)
- **Modify** your localStorage implementation to store only critical session data
- **Ensure** fresh data is always loaded from the server on dashboard visits
- **Test** that your optimized approach maintains the same user experience

**Advanced Consideration:**
- **Compare** the trade-offs between storing full account data vs. just authentication tokens
- **Document** your decisions and reasoning for future team members

This challenge will help you think like a professional developer who considers both user experience and application efficiency. Take your time to experiment with different approaches!

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/48)

## Assignment

[Implement "Add transaction" dialog](assignment.md)

Here's an example result after completing the assignment:

![Screenshot showing an example "Add transaction" dialog](./images/dialog.png)
