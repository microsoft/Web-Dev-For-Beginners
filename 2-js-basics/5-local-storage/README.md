# JavaScript Basics: Local Storage in JavaScript

## 📌 What is Local Storage?

**Local Storage** is a feature in the browser that allows you to store data persistently in the user's device.

Unlike variables or session data, data in Local Storage:
- Does NOT expire when the browser is closed
- Stays available until manually cleared
- Is stored as **key-value pairs (strings only)**

---

## 💡 Why use Local Storage?

You use Local Storage when you want to:
- Save user preferences (theme, language)
- Store login state (NOT secure auth tokens)
- Keep cart items in e-commerce apps
- Save form data temporarily
- Improve user experience without a backend

---

## 🧩 Basic Syntax

### Store data
```js
localStorage.setItem("key", "value");
```

### Get data
```js
localStorage.getItem("key");
```

### Remove specific item
```js
localStorage.removeItem("key");
```

### Clear all storage
```js
localStorage.clear();
```

---

## 🔥 Example 1: Storing Simple Data
```js
localStorage.setItem("username", "Ahmed");

let user = localStorage.getItem("username");
console.log(user); // Ahmed
```

---

## 🧠 Important Rule

Local Storage ONLY stores strings.
So this will NOT work properly:
```js
localStorage.setItem("user", { name: "Ahmed" });
```

It becomes:
```js
[object Object]
```

---

## 🛠️ Storing Objects Properly

To store objects or arrays, use:

### JSON.stringify()

```js
const user = {
  name: "Ahmed",
  age: 21
};

localStorage.setItem("user", JSON.stringify(user));
```

### JSON.parse()

```js
const data = localStorage.getItem("user");
const userObject = JSON.parse(data);
console.log(userObject.name); // Ahmed
```

---

## 📦 Example 2: Storing an Array
```js
const tasks = ["HTML", "CSS", "JavaScript"];

localStorage.setItem("tasks", JSON.stringify(tasks));

const savedTasks = JSON.parse(localStorage.getItem("tasks"));

console.log(savedTasks[0]); // HTML
```

---

## 🧹 Removing Data

### Remove one item
```js
localStorage.removeItem("username");
```

### Clear everything
```js
localStorage.clear();
```

---

## 🚀 Real Use Cases
### 1. Dark Mode Toggle
```js
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
document.body.className = theme;
```

### 2. Remember User Login State
```js
localStorage.setItem("loggedIn", "true");

if (localStorage.getItem("loggedIn") === "true") {
  console.log("User is logged in");
}
```

---

## ⚠️ Limitations
- Not secure (avoid sensitive data like passwords or tokens)
- Limited storage size (~5MB)

---

## 🧼 Best Practices

- ✔ Always use JSON for objects
- ✔ Clear unused data to avoid clutter
- ✔ Don’t store sensitive information
- ✔ Use meaningful keys
- ✔ Check if data exists before parsing

---

## 📚 Summary

Local Storage is a simple but powerful browser feature used to store data permanently on the client side. It is perfect for improving UX, but it should be used carefully due to security and storage limitations.
