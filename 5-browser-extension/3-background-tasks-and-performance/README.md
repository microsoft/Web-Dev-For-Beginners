# Browser Extension Project Part 3: Learn about Background Tasks and Performance

Ever wonder what makes some browser extensions feel snappy and responsive while others seem sluggish? The secret lies in what's happening behind the scenes! While users click around your extension's interface, there's a whole world of background processes quietly managing data fetching, icon updates, and system resources.

This is our final lesson in the browser extension series, and we're going to make your carbon footprint tracker really shine. You'll add those satisfying dynamic icon updates and learn how to spot performance issues before they become problems. Think of it as giving your extension a turbo boost!

By the time we're done, you'll not only have a polished extension that works beautifully, but you'll also understand the performance principles that separate good web apps from great ones. Ready to make your extension lightning-fast? Let's jump in!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduction

Look how far you've come! In our previous lessons, you built a form, connected it to an API, and even tackled asynchronous data fetching. Your extension is looking pretty good already, isn't it?

Now we need to add the finishing touches - like making that extension icon change colors based on the carbon data. This is the perfect moment to peek under the hood and see how browsers actually handle these background tasks. You'll be amazed at what's happening behind the scenes every time your code runs!

## Web Performance Basics

Here's something cool: when your code runs efficiently, people can actually *feel* the difference! You know that satisfying moment when a page loads instantly or an animation flows perfectly? That's good performance at work, and you can learn to create those "wow" moments too.

Performance isn't just about speed - it's about making web experiences that feel smooth and natural instead of clunky and frustrating. Let's explore the detective tools that help you figure out what's slowing things down, and then we'll use these insights to make your browser extension absolutely fly.

> "Website performance is about two things: how fast the page loads, and how fast the code on it runs." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

The topic of how to make your websites blazingly fast on all kinds of devices, for all kinds of users, in all kinds of situations, is unsurprisingly vast. Here are some points to keep in mind as you build either a standard web project or a browser extension.

The first step in making your site blazing fast? You need to see what's actually happening under the hood! Fortunately, your browser comes with amazing detective tools built right in.

To open Developer Tools in Edge, just click those three dots in the top right corner, then go to More Tools > Developer Tools. Or if you're feeling speedy, use `Ctrl` + `Shift` + `I` on Windows or `Option` + `Command` + `I` on Mac. Once you're there, click on the Performance tab - this is where the magic happens!

**Here's your performance detective toolkit:**
- **Open** Developer Tools (you'll use these constantly as a developer!)
- **Head** to the Performance tab - think of it as your web app's fitness tracker
- **Hit** that Record button and watch your page in action
- **Study** the results to spot what's slowing things down

Let's try this out! Open a website (Microsoft.com works great for this) and click that 'Record' button. Now refresh the page and watch the profiler capture everything that happens. When you stop recording, you'll see a fascinating breakdown of how the browser 'scripts', 'renders', and 'paints' the site. It's like watching a time-lapse of your webpage coming to life!

![Edge profiler](./images/profiler.png)

✅ The [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) has tons more details if you want to dive deeper

> Pro tip: Clear your browser cache before testing to see how your site performs for first-time visitors - it's usually quite different from repeat visits!

Select elements of the profile timeline to zoom in on events that happen while your page loads.

Get a snapshot of your page's performance by selecting a part of the profile timeline and looking at the summary pane:

![Edge profiler snapshot](./images/snapshot.png)

Check the Event Log pane to see if any event took longer than 15 ms:

![Edge event log](./images/log.png)

✅ Get to know your profiler! Open the developer tools on this site and see if there are any bottlenecks. What's the slowest-loading asset? The fastest?

## What to Look For When Profiling

Running the profiler is just the beginning - the real skill is knowing what those colorful charts are actually telling you! Don't worry, you'll get the hang of reading them. Experienced developers have learned to spot the warning signs before they become full-blown problems.

Let's talk about the usual suspects - the performance troublemakers that love to sneak into web projects and cause headaches later. Catching these early will save you (and your users) a lot of frustration!

**Asset sizes**: Here's something interesting - websites have been getting "heavier" over the years, and a lot of that extra weight comes from images. It's like we've been stuffing more and more into our digital suitcases!

✅ Check out the [Internet Archive](https://httparchive.org/reports/page-weight) to see how dramatically page sizes have grown over time - it's pretty eye-opening!

**Here's how to keep your assets lean and mean:**
- **Compress** those images! Modern formats like WebP can cut file sizes dramatically
- **Serve** the right image size for each device - no need to send huge desktop images to phones
- **Minify** your CSS and JavaScript - every byte counts
- **Use** lazy loading so images only download when users actually scroll to them

**DOM traversals**: The browser has to build its Document Object Model based on the code you write, so it's in the interest of good page performance to keep your tags minimal, only using and styling what the page needs. To this point, excess CSS associated with a page could be optimized; styles that need to be used only on one page don't need to be included in the main style sheet, for example.

**Key strategies for DOM optimization:**
- **Minimizes** the number of HTML elements and nesting levels
- **Removes** unused CSS rules and consolidates stylesheets efficiently
- **Organizes** CSS to load only what's needed for each page
- **Structures** HTML semantically for better browser parsing

**JavaScript**: Every JavaScript developer should watch for 'render-blocking' scripts that must be loaded before the rest of the DOM can be traversed and painted to the browser. Consider using `defer` with your inline scripts (as is done in the Terrarium module).

**Modern JavaScript optimization techniques:**
- **Uses** the `defer` attribute to load scripts after DOM parsing
- **Implements** code splitting to load only necessary JavaScript
- **Applies** lazy loading for non-critical functionality
- **Minimizes** the use of heavy libraries and frameworks when possible

✅ Try some sites on a [Site Speed Test website](https://www.webpagetest.org/) to learn more about the common checks that are done to determine site performance.

Now that you have an idea of how the browser renders the assets you send to it, let's look at the last few things you need to do to complete your extension:

### Create a function to calculate color

Time for the fun part! We're going to create a function that turns boring numbers into meaningful colors. Think of it like a traffic light system - green for clean energy, red for high carbon intensity.

This function will take the CO2 data from our API and figure out what color best represents the environmental impact. Pretty cool, right? Let's add this to `/src/index.js`, right after those `const` variables we set up earlier:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Let's break down this clever little function:**
- **Sets up** two arrays - one for CO2 levels, another for colors (green = clean, brown = dirty!)
- **Finds** the closest match to our actual CO2 value using some neat array sorting
- **Grabs** the matching color using the findIndex() method
- **Sends** a message to Chrome's background script with our chosen color
- **Uses** template literals (those backticks) for cleaner string formatting
- **Keeps** everything organized with const declarations

The `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) is like the nervous system of your extension - it handles all the behind-the-scenes communication and tasks:

> "Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs."

**Why the Chrome Runtime API is so handy:**
- **Lets** different parts of your extension talk to each other
- **Handles** background work without freezing the user interface
- **Manages** your extension's lifecycle events
- **Makes** message passing between scripts super easy

✅ If you're developing this browser extension for Edge, it might surprise you that you're using a chrome API. The newer Edge browser versions run on the Chromium browser engine, so you can leverage these tools.

> **Pro Tip**: If you want to profile a browser extension, launch the dev tools from within the extension itself, as it is its own separate browser instance. This gives you access to extension-specific performance metrics.

### Set a default icon color

Before we start fetching real data, let's give our extension a starting point. Nobody likes staring at a blank or broken-looking icon! We'll start with a friendly green color so users know the extension is working right from the get-go.

In your `init()` function, let's set up that default green icon:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**What this initialization accomplishes:**
- **Sets** a neutral green color as the default state
- **Provides** immediate visual feedback when the extension loads
- **Establishes** the communication pattern with the background script
- **Ensures** users see a functional extension before data loads
### Call the function, execute the call

Now for the moment of truth! Let's connect everything together so that when fresh CO2 data comes in, your icon automatically updates with the right color. It's like watching your extension come alive!

Add this line right after you get the CO2 data from the API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**This integration accomplishes:**
- **Connects** the API data flow with the visual indicator system
- **Triggers** icon updates automatically when new data arrives
- **Ensures** real-time visual feedback based on current carbon intensity
- **Maintains** the separation of concerns between data fetching and display logic

And finally, in `/dist/background.js`, add the listener for these background action calls:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Here's what this background script magic does:**
- **Listens** for messages from your main script (like a receptionist taking calls!)
- **Processes** those 'updateIcon' requests to change your toolbar icon
- **Creates** brand new icons on the fly using the Canvas API
- **Draws** a simple colored circle that shows the current carbon intensity
- **Updates** your browser toolbar with the fresh icon
- **Uses** OffscreenCanvas for smooth performance (no UI blocking!)

✅ You'll learn more about the Canvas API in the [Space Game lessons](../../6-space-game/2-drawing-to-canvas/README.md).

**Time to test your masterpiece:**
- **Build** everything with `npm run build`
- **Reload** your extension in the browser (don't forget this step!)
- **Open** your extension and watch that icon change colors like magic
- **Check** how it responds to real carbon data from around the world

How cool is that? Now you'll know at a glance whether it's a good time for that load of laundry or if you should wait for cleaner energy!

You've just built something genuinely useful AND learned a ton about browser performance along the way. That's what I call a win-win!

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the browser extension's performance monitoring capabilities by adding a feature that tracks and displays load times for different components of the extension.

**Prompt:** Create a performance monitoring system for the browser extension that measures and logs the time it takes to fetch CO2 data from the API, calculate colors, and update the icon. Add a function called `performanceTracker` that uses the Performance API to measure these operations and displays the results in the browser console with timestamps and duration metrics.

---



## 🚀 Challenge

Here's a fun detective mission: pick a few open source websites that have been around for years (think Wikipedia, GitHub, or Stack Overflow) and dig into their commit history. Can you spot where they made performance improvements? What problems kept cropping up?

**Your investigation toolkit:**
- **Dive** into commit messages looking for words like "optimize," "performance," or "faster"
- **Look** for patterns - do they keep fixing the same types of issues?
- **Spot** the common culprits that slow down websites
- **Share** what you discover - other developers love learning from real-world examples!

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/28)

## Review & Self Study

Consider signing up for a [performance newsletter](https://perf.email/)

Investigate some of the ways that browsers gauge web performance by looking through the performance tabs in their web tools. Do you find any major differences?

## Assignment

[Analyze a site for performance](assignment.md)

