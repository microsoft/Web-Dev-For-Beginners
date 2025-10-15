# Terrarium Project Part 3: DOM Manipulation and JavaScript Closures

![DOM and a closure](../../sketchnotes/webdev101-js.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

Welcome to the exciting world of DOM manipulation! The Document Object Model (DOM) is like a bridge between your HTML structure and JavaScript functionality, allowing you to create truly interactive web experiences. In this lesson, you'll discover how to make your beautiful terrarium come alive by enabling users to drag and rearrange plants anywhere on the screen.

You'll also encounter one of JavaScript's most powerful concepts: closures. Think of closures as a way to create "private spaces" in your code where functions can remember and access variables even after their parent function has finished running. This might sound complex now, but by the end of this lesson, you'll see how closures help us build elegant, maintainable code for our interactive features.

By completing this lesson, you'll transform your static terrarium into a dynamic, engaging project where users can customize their plant arrangements. You'll gain practical experience with event handling, coordinate tracking, and the fundamental DOM manipulation techniques that power modern web applications. Let's bring your terrarium to life!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/19)

## Understanding the DOM: Your Gateway to Interactive Web Pages

The Document Object Model (DOM) is essentially JavaScript's way of "talking to" your HTML elements. When a web browser loads your HTML page, it creates a live representation of that page in memory – this is the DOM. Think of it like a family tree where every HTML element is a family member that JavaScript can visit, modify, or rearrange.

Understanding DOM manipulation is crucial because it's what transforms static web pages into dynamic, interactive experiences. Every time you see a website respond to your clicks, update content without refreshing, or animate elements, that's DOM manipulation in action.

![DOM tree representation](./images/dom-tree.png)

> A representation of the DOM and the HTML markup that references it. From [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

**Here's what makes the DOM powerful:**
- **Provides** a structured way to access any element on your page
- **Enables** dynamic content updates without page refreshes
- **Allows** real-time response to user interactions like clicks and drags
- **Creates** the foundation for modern interactive web applications

## JavaScript Closures: Creating Organized, Powerful Code

A [JavaScript closure](https://developer.mozilla.org/docs/Web/JavaScript/Closures) is like having a function with its own private workspace. Imagine a function that can "remember" variables from its surrounding environment, even after that environment has finished executing. This creates powerful possibilities for organizing code and maintaining state.

In our terrarium project, closures help us create dragging functionality where each plant remembers its position and behavior independently. This pattern is fundamental to JavaScript and appears throughout professional web development.

> 💡 **Learning Note**: Closures are a deep topic in JavaScript. This lesson focuses on practical application – you'll see how closures naturally emerge when building interactive features. As you grow as a developer, you'll discover more advanced closure patterns and uses.

![DOM tree representation](./images/dom-tree.png)

> A representation of the DOM and the HTML markup that references it. From [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

In this lesson, we will complete our interactive terrarium project by creating the JavaScript that will allow a user to manipulate the plants on the page.

## Before We Begin: Setting Up for Success

To complete this lesson, you'll need the HTML and CSS files from the previous terrarium lessons. These provide the visual foundation that we'll now make interactive. By the end of this lesson, you'll have transformed your static terrarium into a dynamic workspace where users can drag plants anywhere on the screen.

**What you'll accomplish:**
- **Creates** smooth drag-and-drop functionality for all terrarium plants
- **Implements** coordinate tracking to remember plant positions
- **Builds** a complete interactive user interface using vanilla JavaScript
- **Applies** closure patterns for clean, organized code structure

## Setting Up Your JavaScript File

Let's start by creating the JavaScript file that will power your terrarium's interactivity.

**Step 1: Create your script file**

In your terrarium folder, create a new file called `script.js`.

**Step 2: Link the JavaScript to your HTML**

Add this script tag to the `<head>` section of your `index.html` file:

```html
<script src="./script.js" defer></script>
```

**Understanding the `defer` attribute:**
- **Ensures** your JavaScript runs only after the HTML is completely loaded
- **Prevents** errors that occur when JavaScript tries to access elements that don't exist yet
- **Guarantees** all your plant elements are ready for manipulation
- **Provides** better performance than placing scripts in the `<body>` tag

> ⚠️ **Important**: The `defer` attribute is crucial for DOM manipulation. Without it, your JavaScript might try to access HTML elements before they're created, causing errors.

---

## Connecting JavaScript to Your HTML Elements

Before we can make elements draggable, JavaScript needs to "find" them in the DOM. Think of this like getting a direct phone line to each plant – once we have that connection, we can tell each plant how to behave when users interact with it.

We'll use the `document.getElementById()` method to establish these connections. This method searches through the entire DOM tree and returns a reference to the element with the specified ID.

### Enabling Drag Functionality for All Plants

Add this code to your `script.js` file:

```javascript
// Enable drag functionality for all 14 plants
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

**Here's what this code accomplishes:**
- **Locates** each plant element in the DOM using its unique ID
- **Retrieves** a JavaScript reference to each HTML element
- **Passes** each element to a `dragElement` function (which we'll create next)
- **Prepares** every plant for drag-and-drop interaction
- **Connects** your HTML structure to JavaScript functionality

> 🎯 **Why Use IDs Instead of Classes?** IDs provide unique identifiers for specific elements, while CSS classes are designed for styling groups of elements. When JavaScript needs to manipulate individual elements, IDs offer the precision and performance we need.

> 💡 **Pro Tip**: Notice how we're calling `dragElement()` for each plant individually. This approach ensures that each plant gets its own independent dragging behavior, which is essential for smooth user interaction.

---

## Building the Drag Element Closure

Now we'll create the heart of our dragging functionality: a closure that manages the dragging behavior for each plant. This closure will contain multiple inner functions that work together to track mouse movements and update element positions.

Closures are perfect for this task because they allow us to create "private" variables that persist between function calls, giving each plant its own independent coordinate tracking system.

### Understanding Closures with a Simple Example

Let's start with a basic closure example to understand the concept:

```javascript
function createCounter() {
    let count = 0; // Private variable
    
    function increment() {
        count++; // Inner function can access outer variable
        return count;
    }
    
    return increment; // Return the inner function
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
```

**Breaking down what happens here:**
- **Creates** a private `count` variable that's only accessible within the closure
- **Defines** an inner function that can access and modify the outer variable
- **Returns** the inner function, creating a persistent connection to the private data
- **Maintains** the `count` value between function calls, even after `createCounter()` finishes

### Why Closures Are Perfect for Drag Functionality

For our terrarium, each plant needs to remember its current position coordinates. Closures provide the perfect solution:

**Key benefits for our project:**
- **Maintains** private position variables for each plant independently
- **Preserves** coordinate data between drag events
- **Prevents** variable conflicts between different draggable elements
- **Creates** clean, organized code structure

> 🎯 **Learning Goal**: You don't need to master every aspect of closures right now. Focus on seeing how they help us organize code and maintain state for our dragging functionality.

### Creating the dragElement Function

Now let's build the main function that will handle all the dragging logic. Add this function below your plant element declarations:

```javascript
function dragElement(terrariumElement) {
    // Initialize position tracking variables
    let pos1 = 0,  // Previous mouse X position
        pos2 = 0,  // Previous mouse Y position  
        pos3 = 0,  // Current mouse X position
        pos4 = 0;  // Current mouse Y position
    
    // Set up the initial drag event listener
    terrariumElement.onpointerdown = pointerDrag;
}
```

**Understanding the position tracking system:**
- **`pos1` and `pos2`**: Store the difference between old and new mouse positions
- **`pos3` and `pos4`**: Track the current mouse coordinates
- **`terrariumElement`**: The specific plant element we're making draggable
- **`onpointerdown`**: The event that triggers when the user starts dragging

**Here's how the closure pattern works:**
- **Creates** private position variables for each plant element
- **Maintains** these variables throughout the dragging lifecycle
- **Ensures** each plant tracks its own coordinates independently
- **Provides** a clean interface through the `dragElement` function

### Why Use Pointer Events?

We're using `onpointerdown` instead of the more common `onclick` event for important reasons:

| Event Type | Best For | Limitations |
|------------|----------|-------------|
| `onclick` | Simple button clicks | Doesn't support dragging gestures |
| `onpointerdown` | Touch and mouse interactions | Modern browsers (widely supported) |
| `onmousedown` | Mouse-only interactions | Doesn't work on touch devices |

**What makes pointer events ideal:**
- **Supports** both mouse and touch interactions seamlessly
- **Provides** consistent behavior across desktop and mobile devices
- **Enables** smooth dragging gestures rather than simple clicks
- **Offers** better user experience for interactive elements

> 💡 **Modern Web Development**: Pointer events represent the modern standard for handling user interactions. They automatically handle the complexity of supporting different input methods (mouse, touch, stylus) with a single API.

---

## The pointerDrag Function: Capturing the Start of a Drag

When a user presses down on a plant (whether with a mouse click or finger touch), the `pointerDrag` function springs into action. This function captures the initial coordinates and sets up the dragging system.

Add this function inside your `dragElement` closure, right after the line `terrariumElement.onpointerdown = pointerDrag;`:

```javascript
function pointerDrag(e) {
    // Prevent default browser behavior (like text selection)
    e.preventDefault();
    
    // Capture the initial mouse/touch position
    pos3 = e.clientX;  // X coordinate where drag started
    pos4 = e.clientY;  // Y coordinate where drag started
    
    // Set up event listeners for the dragging process
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}
```

**Step by step, here's what's happening:**
- **Prevents** default browser behaviors that could interfere with dragging
- **Records** the exact coordinates where the user started the drag gesture
- **Establishes** event listeners for the ongoing drag movement
- **Prepares** the system to track mouse/finger movement across the entire document

### Understanding Event Prevention

The `e.preventDefault()` line is crucial for smooth dragging:

**Without prevention, browsers might:**
- **Select** text when dragging across the page
- **Trigger** context menus on right-click drag
- **Interfere** with our custom dragging behavior
- **Create** visual artifacts during the drag operation

> 🔍 **Experiment**: After completing this lesson, try removing `e.preventDefault()` and see how it affects the dragging experience. You'll quickly understand why this line is essential!

### Coordinate Tracking System

The `e.clientX` and `e.clientY` properties give us precise mouse/touch coordinates:

| Property | What It Measures | Use Case |
|----------|------------------|----------|
| `clientX` | Horizontal position relative to the viewport | Tracking left-right movement |
| `clientY` | Vertical position relative to the viewport | Tracking up-down movement |

**Understanding these coordinates:**
- **Provides** pixel-perfect positioning information
- **Updates** in real-time as the user moves their pointer
- **Remains** consistent across different screen sizes and zoom levels
- **Enables** smooth, responsive drag interactions

### Setting Up Document-Level Event Listeners

Notice how we attach the move and stop events to the entire `document`, not just the plant element:

```javascript
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

**Why attach to the document:**
- **Continues** tracking even when the mouse leaves the plant element
- **Prevents** drag interruption if the user moves quickly
- **Provides** smooth dragging across the entire screen
- **Handles** edge cases where the cursor moves outside the browser window

> ⚡ **Performance Note**: We'll clean up these document-level listeners when dragging stops to avoid memory leaks and performance issues.

## Completing the Drag System: Movement and Cleanup

Now we'll add the two remaining functions that handle the actual dragging movement and the cleanup when dragging stops. These functions work together to create smooth, responsive plant movement across your terrarium.

### The elementDrag Function: Tracking Movement

Add the `elementDrag` function right after the closing curly bracket of `pointerDrag`:

```javascript
function elementDrag(e) {
    // Calculate the distance moved since the last event
    pos1 = pos3 - e.clientX;  // Horizontal distance moved
    pos2 = pos4 - e.clientY;  // Vertical distance moved
    
    // Update the current position tracking
    pos3 = e.clientX;  // New current X position
    pos4 = e.clientY;  // New current Y position
    
    // Apply the movement to the element's position
    terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
    terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
}
```

**Understanding the coordinate mathematics:**
- **`pos1` and `pos2`**: Calculate how far the mouse has moved since the last update
- **`pos3` and `pos4`**: Store the current mouse position for the next calculation
- **`offsetTop` and `offsetLeft`**: Get the element's current position on the page
- **Subtraction logic**: Moves the element by the same amount the mouse moved

**Here's the movement calculation breakdown:**
1. **Measures** the difference between old and new mouse positions
2. **Calculates** how much to move the element based on mouse movement
3. **Updates** the element's CSS position properties in real-time
4. **Stores** the new position as the baseline for the next movement calculation

### Visual Representation of the Math

```mermaid
sequenceDiagram
    participant Mouse
    participant JavaScript
    participant Plant
    
    Mouse->>JavaScript: Move from (100,50) to (110,60)
    JavaScript->>JavaScript: Calculate: moved 10px right, 10px down
    JavaScript->>Plant: Update position by +10px right, +10px down
    Plant->>Plant: Render at new position
```

### The stopElementDrag Function: Cleaning Up

Add the cleanup function after the closing curly bracket of `elementDrag`:

```javascript
function stopElementDrag() {
    // Remove the document-level event listeners
    document.onpointerup = null;
    document.onpointermove = null;
}
```

**Why cleanup is essential:**
- **Prevents** memory leaks from lingering event listeners
- **Stops** the dragging behavior when the user releases the plant
- **Allows** other elements to be dragged independently
- **Resets** the system for the next drag operation

**What happens without cleanup:**
- Event listeners continue running even after dragging stops
- Performance degrades as unused listeners accumulate
- Unexpected behavior when interacting with other elements
- Browser resources are wasted on unnecessary event handling

### Understanding CSS Position Properties

Our dragging system manipulates two key CSS properties:

| Property | What It Controls | How We Use It |
|----------|------------------|---------------|
| `top` | Distance from the top edge | Vertical positioning during drag |
| `left` | Distance from the left edge | Horizontal positioning during drag |

**Key insights about offset properties:**
- **`offsetTop`**: Current distance from the top of the positioned parent element
- **`offsetLeft`**: Current distance from the left of the positioned parent element
- **Positioning context**: These values are relative to the nearest positioned ancestor
- **Real-time updates**: Changes immediately when we modify the CSS properties

> 🎯 **Design Philosophy**: This drag system is intentionally flexible – there are no "drop zones" or restrictions. Users can place plants anywhere, giving them complete creative control over their terrarium design.

## Bringing It All Together: Your Complete Drag System

Congratulations! You've just built a sophisticated drag-and-drop system using vanilla JavaScript. Your complete `dragElement` function now contains a powerful closure that manages:

**What your closure accomplishes:**
- **Maintains** private position variables for each plant independently
- **Handles** the complete drag lifecycle from start to finish
- **Provides** smooth, responsive movement across the entire screen
- **Cleans** up resources properly to prevent memory leaks
- **Creates** an intuitive, creative interface for terrarium design

### Testing Your Interactive Terrarium

Open your `index.html` file in a web browser and test your creation:

1. **Click and hold** any plant to start dragging
2. **Move your mouse or finger** to see the plant follow smoothly
3. **Release** to place the plant in its new position
4. **Experiment** with different arrangements and layouts

🥇 **You've created something amazing!** Your terrarium is now a fully interactive web application that demonstrates fundamental concepts used in professional web development.

![finished terrarium](./images/terrarium-final.png)

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the terrarium project by adding a reset functionality that returns all plants to their original positions with smooth animations.

**Prompt:** Create a reset button that, when clicked, animates all plants back to their original sidebar positions using CSS transitions. The function should store the original positions when the page loads and smoothly transition plants back to those positions over 1 second when the reset button is pressed.

## 🚀 Additional Challenge: Expand Your Skills

Ready to take your terrarium to the next level? Try implementing these enhancements:

**Creative Extensions:**
- **Double-click** a plant to bring it to the front (z-index manipulation)
- **Add visual feedback** like a subtle glow when hovering over plants
- **Implement boundaries** to prevent plants from being dragged outside the terrarium
- **Create a save function** that remembers plant positions using localStorage
- **Add sound effects** for picking up and placing plants

> 💡 **Learning Opportunity**: Each of these challenges will teach you new aspects of DOM manipulation, event handling, and user experience design.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/20)

## Review & Self Study: Deepening Your Understanding

You've mastered the fundamentals of DOM manipulation and closures, but there's always more to explore! Here are some pathways to expand your knowledge and skills.

### Alternative Drag and Drop Approaches

We used pointer events for maximum flexibility, but web development offers multiple approaches:

| Approach | Best For | Learning Value |
|----------|----------|----------------|
| [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) | File uploads, formal drag zones | Understanding native browser capabilities |
| [Touch Events](https://developer.mozilla.org/docs/Web/API/Touch_events) | Mobile-specific interactions | Mobile-first development patterns |
| CSS `transform` properties | Smooth animations | Performance optimization techniques |

### Advanced DOM Manipulation Topics

**Next steps in your learning journey:**
- **Event delegation**: Handling events efficiently for multiple elements
- **Intersection Observer**: Detecting when elements enter/leave the viewport
- **Mutation Observer**: Watching for changes in the DOM structure
- **Web Components**: Creating reusable, encapsulated UI elements
- **Virtual DOM concepts**: Understanding how frameworks optimize DOM updates

### Essential Resources for Continued Learning

**Technical Documentation:**
- [MDN Pointer Events Guide](https://developer.mozilla.org/docs/Web/API/Pointer_events) - Comprehensive pointer event reference
- [W3C Pointer Events Specification](https://www.w3.org/TR/pointerevents1/) - Official standards documentation
- [JavaScript Closures Deep Dive](https://developer.mozilla.org/docs/Web/JavaScript/Closures) - Advanced closure patterns

**Browser Compatibility:**
- [CanIUse.com](https://caniuse.com/) - Check feature support across browsers
- [MDN Browser Compatibility Data](https://github.com/mdn/browser-compat-data) - Detailed compatibility information

**Practice Opportunities:**
- **Build** a puzzle game using similar drag mechanics
- **Create** a kanban board with drag-and-drop task management
- **Design** an image gallery with draggable photo arrangements
- **Experiment** with touch gestures for mobile interfaces

> 🎯 **Learning Strategy**: The best way to solidify these concepts is through practice. Try building variations of draggable interfaces – each project will teach you something new about user interaction and DOM manipulation.

## Assignment

[Work a bit more with the DOM](assignment.md)

