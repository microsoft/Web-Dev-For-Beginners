# Terrarium Project Part 2: Introduction to CSS

![Introduction to CSS](../../sketchnotes/webdev101-css.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

CSS, or Cascading Style Sheets, is where the magic of web design truly begins. While HTML provides the structure and content of your webpage, CSS transforms it from a plain document into a visually stunning, interactive experience. Think of HTML as the foundation and walls of a house, while CSS is the interior design, paint, lighting, and all the beautiful details that make it feel like home.

In this lesson, you'll discover how CSS works hand-in-hand with HTML to create responsive, beautiful web applications. You'll learn fundamental concepts like the cascade, inheritance, and positioning while building your terrarium's visual design. These concepts form the foundation of all modern web design, from simple personal websites to complex web applications.

By the end of this lesson, you'll have transformed your basic HTML terrarium into a beautiful, styled web application. You'll understand how CSS selectors work, how to position elements precisely, and how to create layouts that look great on any screen size. Let's dive into the world of CSS and bring your terrarium to life!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/17)

## Getting Started with CSS

CSS is much more than just "making things look pretty" – it's a powerful language that controls every aspect of how your content appears and behaves on screen. From simple color changes to complex animations, CSS gives you complete control over the user experience.

Modern CSS includes incredible features like responsive design capabilities, allowing your applications to automatically adapt to different screen sizes and devices. You'll also discover CSS animations, transitions, and transforms that can create engaging, interactive experiences for your users.

> 💡 **Pro Tip**: CSS is constantly evolving with new features and capabilities. Always check [CanIUse.com](https://caniuse.com) to verify browser support for newer CSS features before using them in production projects.

**Here's what we'll accomplish in this lesson:**
- **Creates** a complete visual design for your terrarium using modern CSS techniques
- **Explores** fundamental concepts like the cascade, inheritance, and CSS selectors
- **Implements** responsive positioning and layout strategies
- **Builds** the terrarium container using CSS shapes and styling

### Prerequisite

You should have completed the HTML structure for your terrarium from the previous lesson and have it ready to be styled.

> 📺 **Video Resource**: Check out this helpful video walkthrough
>
> [![CSS Basics Tutorial](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Setting Up Your CSS File

Before we can start styling, we need to connect CSS to our HTML. This connection tells the browser where to find the styling instructions for our terrarium.

In your terrarium folder, create a new file called `style.css`, then link it in your HTML document's `<head>` section:

```html
<link rel="stylesheet" href="./style.css" />
```

**Here's what this code does:**
- **Creates** a connection between your HTML and CSS files
- **Tells** the browser to load and apply the styles from `style.css`
- **Uses** the `rel="stylesheet"` attribute to specify this is a CSS file
- **References** the file path with `href="./style.css"`

## Understanding the CSS Cascade

The "cascade" in Cascading Style Sheets refers to how the browser decides which styles to apply when multiple rules target the same element. Think of it like a waterfall – styles flow down from multiple sources, and the browser needs to determine which one wins.

Understanding cascade priority helps you write more predictable CSS and debug styling conflicts effectively. The cascade follows a specific hierarchy that every web developer should understand.

### Experimenting with Cascade Priority

Let's see the cascade in action by creating a style conflict. First, add an inline style to your `<h1>` tag:

```html
<h1 style="color: red">My Terrarium</h1>
```

**What this code does:**
- **Applies** a red color directly to the `<h1>` element using inline styling
- **Uses** the `style` attribute to embed CSS directly in the HTML
- **Creates** the highest priority style rule for this specific element

Next, add this rule to your `style.css` file:

```css
h1 {
  color: blue;
}
```

**In the above, we've:**
- **Defined** a CSS rule that targets all `<h1>` elements
- **Set** the text color to blue using an external stylesheet
- **Created** a lower priority rule compared to inline styles

✅ **Knowledge Check**: Which color displays in your web app? Why does that color win? Can you think of scenarios where you might want to override styles?

> 💡 **CSS Priority Order (highest to lowest):**
> 1. **Inline styles** (style attribute)
> 2. **IDs** (#myId)
> 3. **Classes** (.myClass) and attributes
> 4. **Element selectors** (h1, div, p)
> 5. **Browser defaults**

## CSS Inheritance in Action

CSS inheritance is like family traits – children automatically receive certain characteristics from their parents unless specifically overridden. This powerful feature helps you write more efficient CSS by setting styles once on parent elements.

Inheritance works for specific properties like fonts, colors, and text styling, but not for layout properties like margins, borders, or positioning. Understanding which properties inherit helps you structure your CSS more effectively.

### Observing Font Inheritance

Let's see inheritance in action by setting a font family on the `<body>` element:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Breaking down what happens here:**
- **Sets** the font family for the entire page by targeting the `<body>` element
- **Uses** a font stack with fallback options for better browser compatibility
- **Applies** modern system fonts that look great across different operating systems
- **Ensures** all child elements inherit this font unless specifically overridden

Open your browser's developer tools (F12), navigate to the Elements tab, and inspect your `<h1>` element. You'll see that it inherits the font family from the body:

![inherited font](images/1.png)

✅ **Experiment Time**: Try setting other inheritable properties on the `<body>` like `color`, `line-height`, or `text-align`. What happens to your heading and other elements?

> 📝 **Inheritable Properties Include**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Non-Inheritable Properties Include**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Mastering CSS Selectors

CSS selectors are like addresses that tell the browser exactly which elements to style. Just as you need a specific address to deliver mail to the right house, you need precise selectors to apply styles to the right elements.

There are several types of selectors, each with different levels of specificity and use cases. Learning to choose the right selector for each situation is a key skill in CSS development.

### Element Selectors (Tags)

Element selectors target HTML elements by their tag name. They're perfect for setting base styles that apply broadly across your page:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Understanding these styles:**
- **Sets** consistent typography across the entire page with the `body` selector
- **Removes** default browser margins and padding for better control
- **Styles** all heading elements with color, alignment, and spacing
- **Uses** `rem` units for scalable, accessible font sizing

While element selectors work well for general styling, you'll need more specific selectors to style individual components like the plants in your terrarium.

### ID Selectors for Unique Elements

ID selectors use the `#` symbol and target elements with specific `id` attributes. Since IDs must be unique on a page, they're perfect for styling individual, special elements like our left and right plant containers.

Let's create the styling for our terrarium's side containers where the plants will live:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Here's what this code accomplishes:**
- **Positions** containers at the far left and right edges using `absolute` positioning
- **Uses** `vh` (viewport height) units for responsive height that adapts to screen size
- **Applies** `box-sizing: border-box` so padding is included in the total width
- **Removes** unnecessary `px` units from zero values for cleaner code
- **Sets** a subtle background color that's easier on the eyes than stark gray

✅ **Code Quality Challenge**: Notice how this CSS violates the DRY (Don't Repeat Yourself) principle. Can you refactor it using both an ID and a class?

**Improved approach:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Class Selectors for Reusable Styles

Class selectors use the `.` symbol and are perfect when you want to apply the same styles to multiple elements. Unlike IDs, classes can be reused throughout your HTML, making them ideal for consistent styling patterns.

In our terrarium, each plant needs similar styling but also needs individual positioning. We'll use a combination of classes for shared styles and IDs for unique positioning.

**Here's the HTML structure for each plant:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="./images/plant1.png" />
</div>
```

**Key elements explained:**
- **Uses** `class="plant-holder"` for consistent container styling across all plants
- **Applies** `class="plant"` for shared image styling and behavior
- **Includes** unique `id="plant1"` for individual positioning and JavaScript interaction
- **Provides** descriptive alt text for screen reader accessibility

Now add these styles to your `style.css` file:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Breaking down these styles:**
- **Creates** relative positioning for the plant holder to establish a positioning context
- **Sets** each plant holder to 13% height, ensuring all plants fit vertically without scrolling
- **Shifts** holders slightly left to better center plants within their containers
- **Allows** plants to scale responsively with `max-width` and `max-height` properties
- **Uses** `z-index` to layer plants above other elements in the terrarium
- **Adds** a subtle hover effect with CSS transitions for better user interaction

✅ **Critical Thinking**: Why do we need both `.plant-holder` and `.plant` selectors? What would happen if we tried to use just one?

> 💡 **Design Pattern**: The container (`.plant-holder`) controls layout and positioning, while the content (`.plant`) controls appearance and scaling. This separation makes the code more maintainable and flexible.

## Understanding CSS Positioning

CSS positioning is like giving directions to elements on your page – you're telling them exactly where to appear and how to behave when the page layout changes. Mastering positioning is essential for creating sophisticated layouts and interactive features.

There are five positioning values, each with distinct behaviors that serve different design needs. Understanding when and how to use each one will dramatically improve your CSS skills.

### The Five Position Values

| Position Value | Behavior | Use Case |
|----------------|----------|----------|
| `static` | Default flow, ignores top/left/right/bottom | Normal document layout |
| `relative` | Positioned relative to its normal position | Small adjustments, creating positioning context |
| `absolute` | Positioned relative to nearest positioned ancestor | Precise placement, overlays |
| `fixed` | Positioned relative to viewport | Navigation bars, floating elements |
| `sticky` | Switches between relative and fixed based on scroll | Headers that stick when scrolling |

### Positioning in Our Terrarium

Our terrarium uses a strategic combination of positioning types to create the desired layout:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Understanding the positioning strategy:**
- **Absolute containers** are removed from normal document flow and pinned to screen edges
- **Relative plant holders** create a positioning context while staying in document flow
- **Absolute plants** can be positioned precisely within their relative containers
- **This combination** allows plants to stack vertically while being individually positionable

> 🎯 **Why This Matters**: The `plant` elements need absolute positioning to become draggable in the next lesson. Absolute positioning removes them from the normal layout flow, making drag-and-drop interactions possible.

✅ **Experiment Time**: Try changing the positioning values and observe the results:
- What happens if you change `.container` from `absolute` to `relative`?
- How does the layout change if `.plant-holder` uses `absolute` instead of `relative`?
- What occurs when you switch `.plant` to `relative` positioning?

## Building the Terrarium with CSS

Now comes the exciting part – using pure CSS to create the visual terrarium container! We'll use positioning, shapes, and layering to build a realistic glass jar that will house our plants.

This section demonstrates how CSS can create complex visual designs using simple geometric shapes, strategic positioning, and visual effects like transparency and layering.

### Creating the Glass Jar Components

Let's build the terrarium jar piece by piece. Each part uses absolute positioning and percentage-based sizing for responsive design:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Understanding the terrarium construction:**
- **Uses** percentage-based dimensions for responsive scaling across all screen sizes
- **Positions** elements absolutely to stack and align them precisely
- **Applies** different opacity values to create the glass transparency effect
- **Implements** `z-index` layering so plants appear inside the jar
- **Adds** subtle box-shadow and refined border-radius for more realistic appearance

### Responsive Design with Percentages

Notice how all dimensions use percentages rather than fixed pixel values:

**Why this matters:**
- **Ensures** the terrarium scales proportionally on any screen size
- **Maintains** the visual relationships between jar components
- **Provides** a consistent experience from mobile phones to large desktop monitors
- **Allows** the design to adapt without breaking the visual layout

### CSS Units in Action

We're using `rem` units for border-radius, which scale relative to the root font size. This creates more accessible designs that respect user font preferences. Learn more about [CSS relative units](https://www.w3.org/TR/css-values-3/#font-relative-lengths) in the official specification.

✅ **Visual Experimentation**: Try modifying these values and observe the effects:
- Change the jar opacity from 0.5 to 0.8 – how does this affect the glass appearance?
- Adjust the dirt color from `#3a241d` to `#8B4513` – what visual impact does this have?
- Modify the `z-index` of the dirt to 2 – what happens to the layering?

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Create a CSS animation that makes the terrarium plants gently sway back and forth, simulating a natural breeze effect. This will help you practice CSS animations, transforms, and keyframes while enhancing the visual appeal of your terrarium.

**Prompt:** Add CSS keyframe animations to make the plants in the terrarium sway gently from side to side. Create a swaying animation that rotates each plant slightly (2-3 degrees) left and right with a duration of 3-4 seconds, and apply it to the `.plant` class. Make sure the animation loops infinitely and has an easing function for natural movement.

---

## 🚀 Challenge: Adding Glass Reflections

Enhance the realism of your terrarium by adding glass shine effects! Create bubble-like reflections that make the jar appear more three-dimensional and glass-like.

You'll need to style the `.jar-glossy-long` and `.jar-glossy-short` classes to create realistic light reflections. Here's what the finished terrarium should look like:

![finished terrarium](./images/terrarium-final.png)

**Your challenge:**
- **Create** subtle white or light-colored oval shapes for the glass reflections
- **Position** them strategically on the left side of the jar
- **Apply** appropriate opacity and blur effects for realistic light reflection
- **Use** `border-radius` to create organic, bubble-like shapes
- **Experiment** with gradients or box-shadows for enhanced realism

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/18)

## Expand Your CSS Knowledge

CSS appears simple on the surface, but creating pixel-perfect, responsive designs that work across all browsers and devices requires practice and knowledge of modern techniques.

**Essential CSS skills to master next:**
- **Flexbox** for one-dimensional layouts and component design
- **CSS Grid** for two-dimensional layouts and complex page structures
- **CSS Custom Properties** (variables) for maintainable, dynamic styling
- **Responsive design patterns** using media queries and fluid layouts

### Interactive Learning Resources

Practice these concepts with these engaging, hands-on games:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Master Flexbox through fun challenges
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Learn CSS Grid by growing virtual carrots
- 🎯 [CSS Battle](https://cssbattle.dev/) - Test your CSS skills with coding challenges

### Additional Learning

For comprehensive CSS fundamentals, complete this Microsoft Learn module: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Assignment

[CSS Refactoring](assignment.md)
