# Build a Space Game Part 2: Draw Hero and Monsters to Canvas

The Canvas API is one of the most exciting and powerful features of modern web development, allowing you to create dynamic, interactive graphics directly in the browser. In this lesson, you'll discover how to transform a blank HTML `<canvas>` element into a vibrant game world filled with heroes, monsters, and visual effects. Think of the canvas as your digital art board where code becomes visual magic.

Building on your foundational knowledge from the previous lesson, you'll now learn to load and display game sprites, position elements precisely using coordinate systems, and create the visual foundation for your space game. This lesson bridges the gap between static web pages and dynamic, game-like experiences that respond to user interaction.

By the end of this lesson, you'll have created a complete game scene with a hero ship positioned strategically and enemy formations ready for action. You'll understand how modern games render graphics in browsers and possess the skills to create your own interactive visual experiences. Let's dive into the world of canvas graphics and bring your space game to life!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/31)

## The Canvas

The `<canvas>` element is HTML5's answer to dynamic graphics and animations in web browsers. Unlike images or videos, the canvas gives you pixel-level control over what appears on screen, making it perfect for games, data visualizations, and interactive art. Think of it as a programmable drawing surface where JavaScript becomes your paintbrush.

By default, a canvas element appears as a blank, transparent rectangle on your page. Its real power emerges when you use JavaScript to draw shapes, load images, create animations, and respond to user interactions.

✅ Read [more about the Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) on MDN.

Here's how it's typically declared, as part of the page's body:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Here's what this code does:**
- **Sets** the `id` attribute so you can reference this specific canvas element in JavaScript
- **Defines** the `width` in pixels to control the canvas's horizontal size
- **Establishes** the `height` in pixels to determine the canvas's vertical dimensions

## Drawing Simple Geometry

Now that you understand what the canvas element is, let's explore how to actually draw on it. The canvas uses a coordinate system that might feel familiar from math class, but with one important twist that's specific to computer graphics.

The canvas employs a Cartesian coordinate system with an x-axis (horizontal) and y-axis (vertical) to precisely position every element you draw. However, unlike the coordinate system you might remember from school, the origin point `(0,0)` starts at the top-left corner, with x-values increasing as you move right and y-values increasing as you move down.

![the canvas's grid](canvas_grid.png)
> Image from [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

To draw on the canvas element, you'll follow a consistent three-step process that forms the foundation of all canvas graphics:

1. **Get a reference** to the Canvas element from the DOM
2. **Get a reference** to the 2D rendering context that provides the drawing methods
3. **Perform drawing operations** using the context's built-in methods

Here's how this process looks in practice:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Breaking down what happens here:**
- **Retrieves** the canvas element using its ID and stores it in a constant
- **Obtains** the 2D rendering context, which provides all the drawing methods
- **Sets** the fill color to red using the `fillStyle` property
- **Draws** a rectangle starting at coordinates (0,0) with 200px width and height

✅ The Canvas API mostly focuses on 2D shapes, but you can also draw 3D elements to a web site; for this, you might use the [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

You can draw all sorts of things with the Canvas API like:

- **Geometrical shapes**, we've already showed how to draw a rectangle, but there is much more you can draw.
- **Text**, you can draw a text with any font and color you wish.
- **Images**, you can draw an image based off of an image asset like a .jpg or .png for example.

✅ Try it! You know how to draw a rectangle, can you draw a circle to a page? Take a look at some interesting Canvas drawings on CodePen. Here's a [particularly impressive example](https://codepen.io/dissimulate/pen/KrAwx).

## Load and Draw an Image Asset

While drawing basic shapes is useful for learning, most games and interactive applications rely on image assets like sprites, backgrounds, and textures. Loading and displaying images on the canvas requires a slightly different approach than drawing geometric shapes, but it's essential for creating visually appealing games.

The process involves creating an `Image` object, loading your image file asynchronously, and then drawing it to the canvas once it's fully loaded. This asynchronous approach ensures your images display properly without blocking your application.

### Basic Image Loading

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Here's what this code does:**
- **Creates** a new Image object to hold our sprite or texture
- **Sets** the source path to tell the browser which image file to load
- **Listens** for the load event to know when the image is ready for canvas operations

### Recommended Async Pattern

For better code organization and error handling, it's recommended to wrap image loading in a Promise-based function:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**In the above, we've:**
- **Wrapped** the image loading logic in a Promise for better async handling
- **Added** error handling with `reject` to catch loading failures
- **Used** modern async/await syntax for cleaner, more readable code
- **Included** try/catch blocks to handle potential loading errors gracefully

Once your images are loaded, drawing them to the canvas is straightforward:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Step by step, here's what's happening:**
- **Loads** both hero and monster images asynchronously using await
- **Obtains** the canvas element and its 2D rendering context
- **Positions** the hero image at the center of the canvas using calculated coordinates
- **Places** the monster image at the top-left corner (0,0) of the canvas
- **Handles** any loading or rendering errors with proper error catching

## Now It's Time to Start Building Your Game

With a solid understanding of canvas fundamentals and image loading techniques, you're ready to apply these concepts to create the visual foundation of your space game. This hands-on section will guide you through building a complete game screen with properly positioned sprites and a professional-looking layout.

### What to Build

You will build a web page with a Canvas element. It should render a black screen `1024*768`. We've provided you with two images:

- Hero ship

   ![Hero ship](solution/assets/player.png)

- 5*5 monster

   ![Monster ship](solution/assets/enemyShip.png)

### Recommended steps to start development

Locate the starter files that have been created for you in the `your-work` sub folder. Your project structure should contain:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Understanding the project structure:**
- **Contains** game sprites in the `assets/` folder for organized resource management
- **Includes** the main HTML file that sets up your canvas element
- **Provides** a JavaScript file where you'll write your game rendering code
- **Features** a package.json with development server configuration for local testing

Open this folder in Visual Studio Code to begin development. You'll need a local development environment with Visual Studio Code, NPM, and Node.js installed. If you don't have `npm` set up on your computer, [here's how to install it](https://www.npmjs.com/get-npm).

Start your development server by navigating to the `your-work` folder:

```bash
cd your-work
npm start
```

**What this command accomplishes:**
- **Launches** a local HTTP server on `http://localhost:5000`
- **Serves** your HTML, CSS, and JavaScript files with proper MIME types
- **Enables** live development with automatic file watching
- **Provides** a professional development environment for testing your game

> 💡 **Pro Tip**: Your browser will show a blank page initially – that's expected! As you add code, refresh your browser to see your changes. Many developers use browser extensions like LiveReload for automatic refresh functionality.

### Add code

Add the required code to `your-work/app.js` to complete the following tasks:

1. **Draw a canvas with black background**
   > 💡 **Implementation Tip**: Add two lines under the appropriate TODO in `/app.js`. Set the `ctx.fillStyle` to black and use `ctx.fillRect()` with coordinates (0,0) and dimensions matching your canvas size.

2. **Load game textures**
   > 💡 **Implementation Tip**: Use `await loadAsset()` to load both player and enemy images. Store them in variables for later use. The images won't appear on screen until you draw them!

3. **Draw hero ship in the center-bottom position**
   > 💡 **Implementation Tip**: Use the `ctx.drawImage()` API to position your hero. Calculate the x-coordinate as `canvas.width / 2 - 45` to center it horizontally, and y-coordinate as `canvas.height - canvas.height / 4` to place it in the bottom quarter.

4. **Draw a 5×5 formation of enemy ships**
   > 💡 **Implementation Tip**: Locate the `createEnemies` function and implement the nested loop structure. You'll need to calculate proper spacing and positioning for a professional formation appearance.

First, establish constants for proper enemy formation layout:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Understanding these constants:**
- **Sets** the number of enemies per row and column to 5
- **Defines** spacing between enemies for visual clarity
- **Calculates** total formation width based on enemy count and spacing
- **Centers** the formation horizontally by calculating start and stop positions

Then, create nested loops to draw the enemy formation:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Step by step, here's what's happening:**
- **Iterates** through horizontal positions from left to right across the formation
- **Loops** through vertical positions to create rows of enemies
- **Draws** each enemy sprite at calculated x,y coordinates
- **Maintains** consistent spacing for a professional, organized appearance

## Result

The finished result should look like so:

![Black screen with a hero and 5*5 monsters](partI-solution.png)

## Solution

Please try solving it yourself first but if you get stuck, have a look at a [solution](solution/app.js)

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance your space game canvas by adding visual effects and interactive elements using the Canvas API techniques you've learned.

**Prompt:** Create a new file called `enhanced-canvas.html` with a canvas that displays animated stars in the background, a pulsing health bar for the hero ship, and enemy ships that slowly move downward. Include JavaScript code that draws twinkling stars using random positions and opacity, implements a health bar that changes color based on health level (green > yellow > red), and animates the enemy ships to move down the screen at different speeds.

## 🚀 Challenge

You've learned about drawing with the 2D-focused Canvas API; take a look at the [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), and try to draw a 3D object.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/32)

## Review & Self Study

Learn more about the Canvas API by [reading about it](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Assignment

[Play with the Canvas API](assignment.md)