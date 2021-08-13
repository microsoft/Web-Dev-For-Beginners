# Browser Extension Project Part 3: Learn about Background Tasks and Performance

## Pre-Lecture Quiz

[Pre-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/27)

### Introduction

In the last two lessons of this module, you learned how to build a form and display area for data fetched from an API. It's a very standard way of creating web presences on the web. You even learned how to handle fetching data asyncronously. Your browser extension is very nearly complete. 

It remains to manage some background tasks, including refreshing the color of the extension's icon, so this is a great time to talk about how the browser manages this kind of task. Let's think about these browser tasks in the context of the performance of your web assets as you build them.

## Web Performance Basics

> "Website performance is about two things: how fast the page loads, and how fast the code on it runs." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

The topic of how to make your web sites blazingly fast on all kinds of devices, for all kinds of users, in all kinds of situations, is unsurprisingly vast. Here are some points to keep in mind as you build either a standard web project or a browser extension.

The first thing you need to do to ensure that your site is running efficiently is to gather data about its performance. The first place to do this is in the developer tools of your web browser. In Edge, you can select the "Settings and more" button (the three dots icon on the top right of the browser), then navigate to More Tools > Developer Tools and open the Performance tab. You can also use the keyboard shortcuts `Ctrl` + `Shift` + `I` on Windows, or `Option` + `Command` + `I` on Mac to open developer tools.

The Performance tab contains a Profiling tool. Open a web site (try, for example, https://www.microsoft.com) and click the 'Record' button, then refresh the site. Stop the recording at any time, and you will be able to see the routines that are generated to 'script', 'render', and 'paint' the site:

![Edge profiler](./images/profiler.png)

✅ Visit the [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance?WT.mc_id=academic-13441-cxa) on the Performance panel in Edge

> Tip: to get a true reading of your web site's startup time, clear your browser's cache

Select elements of the profile timeline to zoom in on events that happen while your page loads.

Get a snapshot of your page's performance by selecting a part of the profile timeline and looking at the summary pane:

![Edge profiler snapshot](./images/snapshot.png)

Check the Event Log pane to see if any event took longer than 15 ms:

![Edge event log](./images/log.png)

✅ Get to know your profiler! Open the developer tools on this site and see if there are any bottlenecks. What's the slowest-loading asset? The fastest?

## Profiling checks

In general there are some "problem areas" that every web developer should watch for when building a site, so as to avoid nasty surprises when it's time to deploy to production.

**Asset sizes**: The web has gotten 'heavier', and thus slower, over the past few years. Some of this weight has to do with the use of images.

✅ Look through the [Internet Archive](https://httparchive.org/reports/page-weight) for a historical view of page weight and more.

A good practice is to ensure that your images are optimized, delivered at the right size and resolution for your users.

**DOM traversals**: The browser has to build its Document Object Model based on the code you write, so it's in the interest of good page performance to keep your tags minimal, only using and styling what the page needs. To this point, excess CSS associated with a page could be optimized; styles that need to be used only on one page don't need to be included in the main style sheet, for example.

**JavaScript**: Every JavaScript developer should watch for 'render-blocking' scripts that must be loaded before the rest of the DOM can be traversed and painted to the browser. Consider using `defer` with your inline scripts (as is done in the Terrarium module).

✅ Try some sites on a [Site Speed Test website](https://www.webpagetest.org/) to learn more about the common checks that are done to determine site performance.

Now that you have an idea on how the browser renders the assets you send to it, let's look at the last few things you need to do to complete your extension:

### Create a function to calculate color

Working in `/src/index.js`, add a function called `calculateColor()` after the series of `const` variables you set to gain access to the DOM:

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

What's going on here? You pass in a value (the carbon intensity) from the API call you completed in the last lesson, and then you calculate how close its value is to the index presented in colors array. Then you send that closest color value over to the chrome runtime.

The chrome.runtime has [an API](https://developer.chrome.com/extensions/runtime) that handles all kinds of background tasks, and your extension is leveraging that:

> "Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs."

✅ If you're developing this browser extension for Edge, it might surprise you that you're using a chrome API. The newer Edge  browser versions run on the Chromium browser engine, so you can leverage these tools.

> Note, if you want to profile a browser extension, launch the dev tools from within the extension itself, as it is its own separate browser instance.

### Set a default icon color

Now, in the `init()` function, set the icon to be generic green to start by again calling chrome's `updateIcon` action:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Call the function, execute the call

Next, call that function you just created by adding it to the promise returned by the C02Signal API:

```JavaScript
//let CO2...
calculateColor(CO2);
```

And finally, in `/dist/background.js`, add the listener for these background action calls:

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
In this code, you are adding a listener for any messages coming to the backend task manager. If it's called 'updateIcon', then the next code is run, to draw an icon of the proper color using the Canvas API.

✅ You'll learn more about the Canvas API in the [Space Game lessons](../../6-space-game/2-drawing-to-canvas/README.md).

Now, rebuild your extension (`npm run build`), refresh and launch your extension, and watch the color change. Is it a good time to run an errand or wash the dishes? Now you know!

Congratulations, you've built a useful browser extension and learned more about how the browser works and how to profile its performance.

---

## 🚀 Challenge

Investigate some open source web sites have been around a long time ago, and, based on their GitHub history, see  if you can determine how they were optimized over the years for performance, if at all. What is the most common pain point?

## Post-Lecture Quiz

[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/28)

## Review & Self Study

Consider signing up for a [performance newsletter](https://perf.email/)

Investigate some of the ways that browsers gauge web performance by looking through the performance tabs in their web tools. Do you find any major differences?

## Assignment

[Analyze a site for performance](assignment.md)

