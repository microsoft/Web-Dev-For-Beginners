<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f198c6b817b4b2a99749f4662e7cae98",
  "translation_date": "2025-08-28T11:24:57+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "en"
}
-->
# Browser Extension Project Part 3: Learn about Background Tasks and Performance

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduction

In the previous two lessons of this module, you learned how to create a form and a display area for data retrieved from an API. This is a very common way to establish a web presence. You also learned how to handle asynchronous data fetching. Your browser extension is almost complete.

The remaining tasks involve managing background processes, such as updating the color of the extension's icon. This is a great opportunity to explore how browsers handle these types of tasks. Let's consider these browser tasks in the context of optimizing the performance of your web assets as you develop them.

## Web Performance Basics

> "Website performance is about two things: how fast the page loads, and how fast the code on it runs." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

The topic of optimizing websites to be fast across all devices, for all users, and in all situations is understandably broad. Here are some key points to keep in mind when developing either a standard web project or a browser extension.

The first step in ensuring your site runs efficiently is to gather data about its performance. The best place to start is the developer tools in your web browser. In Edge, click the "Settings and more" button (the three dots icon in the top-right corner of the browser), then navigate to More Tools > Developer Tools and open the Performance tab. You can also use the keyboard shortcuts `Ctrl` + `Shift` + `I` on Windows or `Option` + `Command` + `I` on Mac to open developer tools.

The Performance tab includes a Profiling tool. Open a website (for example, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) and click the 'Record' button, then refresh the site. Stop the recording at any time, and you'll see routines generated for 'script', 'render', and 'paint' processes:

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.en.png)

✅ Visit the [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) on the Performance panel in Edge.

> Tip: To get an accurate reading of your website's startup time, clear your browser's cache.

Select parts of the profile timeline to zoom in on events that occur during page loading.

Get a snapshot of your page's performance by selecting a section of the profile timeline and reviewing the summary pane:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.en.png)

Check the Event Log pane to identify any events that took longer than 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.en.png)

✅ Familiarize yourself with the profiler! Open the developer tools on this site and check for bottlenecks. What asset loads the slowest? The fastest?

## Profiling Checks

Generally, there are some "problem areas" every web developer should monitor when building a site to avoid unpleasant surprises during production deployment.

**Asset sizes**: Over the years, the web has become 'heavier' and slower, partly due to the increased use of images.

✅ Explore the [Internet Archive](https://httparchive.org/reports/page-weight) for a historical perspective on page weight and more.

A good practice is to ensure your images are optimized and delivered at the appropriate size and resolution for your users.

**DOM traversals**: The browser builds its Document Object Model (DOM) based on your code, so for better page performance, keep your tags minimal and only use and style what's necessary. For example, excess CSS associated with a page can be optimized; styles needed for a single page don't need to be included in the main stylesheet.

**JavaScript**: JavaScript developers should watch out for 'render-blocking' scripts that must load before the rest of the DOM can be traversed and painted in the browser. Consider using `defer` with your inline scripts (as demonstrated in the Terrarium module).

✅ Test some websites on a [Site Speed Test website](https://www.webpagetest.org/) to learn more about common checks for site performance.

Now that you understand how the browser renders the assets you provide, let's move on to the final steps for completing your extension:

### Create a Function to Calculate Color

In `/src/index.js`, add a function called `calculateColor()` after the series of `const` variables you set to access the DOM:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

What does this function do? It takes a value (the carbon intensity) from the API call you completed in the last lesson and calculates how close its value is to the index in the colors array. Then, it sends the closest color value to the chrome runtime.

The chrome.runtime has [an API](https://developer.chrome.com/extensions/runtime) that handles various background tasks, which your extension utilizes:

> "Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs."

✅ If you're developing this browser extension for Edge, you might be surprised to use a chrome API. The newer Edge browser versions run on the Chromium browser engine, allowing you to leverage these tools.

> Note: To profile a browser extension, launch the dev tools from within the extension itself, as it operates as a separate browser instance.

### Set a Default Icon Color

In the `init()` function, set the icon to a generic green color initially by calling chrome's `updateIcon` action:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```

### Call the Function and Execute the Call

Next, call the function you just created by adding it to the promise returned by the CO2Signal API:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Finally, in `/dist/background.js`, add a listener for these background action calls:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

This code adds a listener for any messages sent to the backend task manager. If the message is called 'updateIcon', the subsequent code runs to draw an icon of the appropriate color using the Canvas API.

✅ You'll learn more about the Canvas API in the [Space Game lessons](../../6-space-game/2-drawing-to-canvas/README.md).

Now, rebuild your extension (`npm run build`), refresh, and launch your extension. Watch the color change. Is it time to run an errand or do the dishes? Now you know!

Congratulations! You've built a functional browser extension and gained insights into how browsers work and how to profile their performance.

---

## 🚀 Challenge

Explore some open-source websites that have been around for a long time. Using their GitHub history, investigate how they were optimized for performance over the years, if at all. What is the most common issue?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/28)

## Review & Self Study

Consider subscribing to a [performance newsletter](https://perf.email/).

Explore how browsers measure web performance by examining the performance tabs in their developer tools. Do you notice any significant differences?

## Assignment

[Analyze a site for performance](assignment.md)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.