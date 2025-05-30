# My Terrarium: A project to learn about HTML, CSS, and DOM manipulation using JavaScript 🌵🌱

A small drag and drop code-meditation. With a little HTML, JS and CSS, you will be able to build a web interface, style it, and even add multiple interactions of your choice.

![my terrarium](images/screenshot_gray.png)

# Lessons

1. [Introduction to HTML](./1-intro-to-html/README.md)
2. [Introduction to CSS](./2-intro-to-css/README.md)
3. [Introduction to DOM and JS Closures](./3-intro-to-DOM-and-closures/README.md)

## Credits

Written with ♥️  by [Jen Looper](https://www.twitter.com/jenlooper)

The terrarium created via CSS was inspired by Jakub Mandra's glass jar [codepen](https://codepen.io/Rotarepmi/pen/rjpNZY).

The artwork is hand drawn by [Jen Looper](http://jenlooper.com) with the help of Procreate.

## Deploy your Terrarium

You can deploy, or publish your terrarium on the web using Azure Static Web Apps. 

1. Fork this repo

2. Press this button

[![Deploy to Azure button](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/?feature.customportal=false&WT.mc_id=academic-77807-sagibbon#create/Microsoft.StaticApp)

3. Walk through the wizard creating your app. Make sure you set the app root to either be `/solution` or the root of your codebase. There's no API in this app, so don't worry about adding that. A github folder will be created in your forked repository that will help Azure Static Web Apps' build services, build and publish your app to a new URL.


---

## 💡 Real-World Flexbox Example: Navigation Bar

Flexbox is commonly used in creating responsive navigation bars. Here's a real-world example:

### HTML

```html
<nav class="navbar">
  <div class="logo">MySite</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

### CSS
.navbar {
  display: flex;
  justify-content: space-between; /* Push logo to left, links to right */
  align-items: center;
  padding: 10px 20px;
  background-color: #1e1e1e;
  color: white;
}

.nav-links {
  display: flex;
  gap: 15px;
  list-style: none;
}

---

## 🧭 Understanding Flexbox with a Real-World Analogy

Think of **Flexbox** as packing a **suitcase** with flexible compartments.

- Each item (child element) adjusts its size and position based on available space.
- If there's extra room, items expand to fill it.
- If space is tight, they shrink or wrap to stay inside the container.

Just like how you might align socks, shirts, and shoes neatly in rows, Flexbox helps align items in a row or column—**with flexibility**.

---

## 🔍 Quick Visual Guide to Flexbox Properties

| Property        | Description                                  | Example Value     |
|----------------|----------------------------------------------|-------------------|
| `display`       | Enables Flexbox on a container               | `flex`            |
| `flex-direction`| Sets direction of items                      | `row`, `column`   |
| `justify-content`| Horizontal alignment                        | `center`, `space-between` |
| `align-items`   | Vertical alignment                           | `flex-start`, `center` |
| `flex-wrap`     | Whether items wrap onto multiple lines       | `wrap`, `nowrap`  |

---

## 🎯 Pro Tip: Use DevTools

Right-click any flex container > Inspect > Look for the **Flexbox badge** in Chrome DevTools. You can see how space is distributed live!

---




