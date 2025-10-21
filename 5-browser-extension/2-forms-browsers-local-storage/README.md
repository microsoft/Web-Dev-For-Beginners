# Browser Extension Project Part 2: Call an API, use Local Storage

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/25)

## Introduction

Hey there! Remember that browser extension you started building? Well, it's about to get really exciting! Right now you've got a nice-looking form, but it's basically just sitting there looking pretty. Time to wake it up and make it actually *do* something amazing!

Think about your favorite apps - they don't just show you static information, right? They talk to servers, remember your preferences, and update with fresh data. That's exactly what we're going to build today. Your extension will reach out to the internet, grab real environmental data, and even remember your settings for next time.

API integration might sound intimidating, but it's really just teaching your code how to have conversations with other services. Whether you're grabbing weather updates, social media posts, or carbon footprint data like we'll do today, it's all about making these digital connections. Plus, we'll explore how your browser can remember things - kind of like having a really good memory!

By the time we're done, you'll have a browser extension that feels alive - fetching real data, storing user preferences, and providing a smooth experience. Ready to dive into this digital magic? Let's go!

✅ Follow the numbered segments in the appropriate files to know where to place your code

## Set up the elements to manipulate in the extension

Alright, let's connect the dots! Before your JavaScript can work its magic, it needs to know which parts of your HTML it's allowed to control. Think of it like introducing your code to each button, input field, and display area - "Hey JavaScript, meet the submit button. Submit button, this is JavaScript. You two are going to be working together!"

In your `index.js` file, we'll create some `const` variables that grab onto each important piece of your form. It's like creating a contact list for your code - instead of hunting around the entire page every time, your JavaScript can just look up exactly what it needs.

```javascript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

**Here's what this code does:**
- **Captures** form elements using `document.querySelector()` with CSS class selectors
- **Creates** references to input fields for the region name and API key
- **Establishes** connections to result display elements for carbon usage data
- **Sets up** access to UI elements like loading indicators and error messages
- **Stores** each element reference in a `const` variable for easy reuse throughout your code

## Add event listeners

Time to make your extension actually respond to user actions! Event listeners are basically your code's way of paying attention to what users are doing. Think of them like a helpful friend who's always watching and saying, "Oh, they clicked that button? Let me handle that for you!" or "Looks like they submitted the form - I've got this!"

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Understanding these concepts:**
- **Attaches** a submit listener to the form that triggers when users press Enter or click submit
- **Connects** a click listener to the clear button for resetting the form
- **Passes** the event object `(e)` to handler functions for additional control
- **Calls** the `init()` function immediately to set up the initial state of your extension

✅ Notice the shorthand arrow function syntax used here. This modern JavaScript approach is cleaner than traditional function expressions, but both work equally well!

## Build the initialization and reset functions

Let's create the brain of your extension! The `init()` function is like your extension waking up and asking, "Okay, what's the situation here? Is this a new user, or have I seen them before?" It's surprisingly smart - it'll check if someone has used your extension before and adjust accordingly. Pretty cool, right?

The `reset()` function is your extension's way of giving users a fresh start - kind of like hitting the "restart" button when things get messy.

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**Breaking down what happens here:**
- **Retrieves** stored API key and region from browser's local storage
- **Checks** if this is a first-time user (no stored credentials) or returning user
- **Shows** the setup form for new users and hides other interface elements
- **Loads** saved data automatically for returning users and displays the reset option
- **Manages** the user interface state based on available data

**Key concepts about Local Storage:**
- **Persists** data between browser sessions (unlike session storage)
- **Stores** data as key-value pairs using `getItem()` and `setItem()`
- **Returns** `null` when no data exists for a given key
- **Provides** a simple way to remember user preferences and settings

> 💡 **Understanding Browser Storage**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) is like giving your extension a memory! Imagine if every time you visited a website, it had to ask for your name again - pretty annoying, right?
>
> **Here's the cool part:**
> - **Remembers** stuff even after you close your browser (unlike your short-term memory!)
> - **Survives** computer restarts, browser crashes, you name it
> - **Gives** you plenty of space - think thousands of user preferences
> - **Works** instantly - no waiting around for data to load

> **Important Note**: Your browser extension has its own isolated local storage that's separate from regular web pages. This provides security and prevents conflicts with other websites.

You can view your stored data by opening browser Developer Tools (F12), navigating to the **Application** tab, and expanding the **Local Storage** section.

![Local storage pane](images/localstorage.png)

> ⚠️ **Security Consideration**: In production applications, storing API keys in LocalStorage poses security risks since JavaScript can access this data. For learning purposes, this approach works fine, but real applications should use secure server-side storage for sensitive credentials.

## Handle form submission

Now for the moment of truth - what happens when someone actually uses your form? By default, browsers have their own ideas about form submission (usually involving page reloads), but we're going to politely interrupt and say, "Thanks browser, but we've got this!"

This is where things get really interesting for modern web apps and extensions - instead of the old-school "submit and reload" approach, we're creating a smooth, seamless experience.

Create a function that captures the form submission event and extracts the user's input:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**In the above, we've:**
- **Prevents** the default form submission behavior that would refresh the page
- **Extracts** user input values from the API key and region fields
- **Passes** the form data to the `setUpUser()` function for processing
- **Maintains** single-page application behavior by avoiding page reloads

✅ Remember that your HTML form fields include the `required` attribute, so the browser automatically validates that users provide both the API key and region before this function runs.

## Set up user preferences

The `setUpUser` function is responsible for saving the user's credentials and initiating the first API call. This creates a smooth transition from setup to displaying results.

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**Step by step, here's what's happening:**
- **Saves** the API key and region name to local storage for future use
- **Shows** a loading indicator to inform users that data is being fetched
- **Clears** any previous error messages from the display
- **Reveals** the clear button for users to reset their settings later
- **Initiates** the API call to fetch real carbon usage data

This function creates a seamless user experience by managing both data persistence and user interface updates in one coordinated action.

## Display carbon usage data

Okay, this is where things get really fun! We're about to turn your extension into something that talks to the wider internet and pulls in real, live data. It's like giving your extension superpowers!

**What's this API thing all about?**

[APIs](https://www.webopedia.com/TERM/A/API.html) are basically how different apps and services talk to each other. Think of them like a waiter at a restaurant - you tell the waiter what you want, they go to the kitchen (the server), and come back with your order (the data). Every time you check Instagram, ask Siri a question, or use a food delivery app, APIs are making it all happen behind the scenes.

**Key concepts about REST APIs:**
- **REST** stands for 'Representational State Transfer'
- **Uses** standard HTTP methods (GET, POST, PUT, DELETE) to interact with data
- **Returns** data in predictable formats, typically JSON
- **Provides** consistent, URL-based endpoints for different types of requests

✅ The [CO2 Signal API](https://www.co2signal.com/) we'll use provides real-time carbon intensity data from electrical grids worldwide. This helps users understand the environmental impact of their electricity usage!

> 💡 **Understanding Asynchronous JavaScript**: The [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) is like teaching your code to multitask! When you ask a server for data, you don't want your entire extension to just freeze and wait - that would be like pausing your whole life while waiting for a text message reply.
>
> **Here's why this is awesome:**
> - **Keeps** your extension responsive - users can still click buttons while data loads
> - **Lets** other parts of your code keep working while waiting for responses
> - **Makes** your code way easier to read than the old callback maze
> - **Helps** you handle problems gracefully when the internet is being grumpy

Here's a quick video about `async`:

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

> 🎥 Click the image above for a video about async/await.

Create the function to fetch and display carbon usage data:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**Breaking down what happens here:**
- **Uses** the modern `fetch()` API instead of external libraries like Axios for cleaner, dependency-free code
- **Implements** proper error checking with `response.ok` to catch API failures early
- **Handles** asynchronous operations with `async/await` for more readable code flow
- **Authenticates** with the CO2 Signal API using the `auth-token` header
- **Parses** JSON response data and extracts carbon intensity information
- **Updates** multiple UI elements with formatted environmental data
- **Provides** user-friendly error messages when API calls fail

**Key modern JavaScript concepts demonstrated:**
- **Template literals** with `${}` syntax for clean string formatting
- **Error handling** with try/catch blocks for robust applications
- **Async/await** pattern for handling network requests gracefully
- **Object destructuring** to extract specific data from API responses
- **Method chaining** for multiple DOM manipulations

✅ Look at what you just built! This function is doing some seriously impressive stuff - talking to external servers, handling authentication, processing data, updating your interface, and even dealing with errors like a pro. These are the exact skills that professional developers use every day!

🎉 **Holy moly, look what you've accomplished!** You've created a browser extension that actually:
- **Reaches** out to the internet and grabs real environmental data
- **Remembers** user settings between sessions (so smart!)
- **Handles** problems gracefully instead of just crashing
- **Feels** smooth and professional to use

Go ahead and test it out - run `npm run build` and refresh your extension in the browser. You've got yourself a legitimate carbon footprint tracker that could genuinely help people! The only thing left is adding that dynamic icon in the next lesson, and then you'll have built something truly complete.

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the browser extension by adding error handling improvements and user experience features. This challenge will help you practice working with APIs, local storage, and DOM manipulation using modern JavaScript patterns.

**Prompt:** Create an enhanced version of the displayCarbonUsage function that includes: 1) A retry mechanism for failed API calls with exponential backoff, 2) Input validation for the region code before making the API call, 3) A loading animation with progress indicators, 4) Caching of API responses in localStorage with expiration timestamps (cache for 30 minutes), and 5) A feature to display historical data from previous API calls. Also add proper TypeScript-style JSDoc comments to document all function parameters and return types.

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

## 🚀 Challenge

Expand your understanding of APIs by exploring the wealth of browser-based APIs available for web development. Choose one of these browser APIs and build a small demonstration:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Get user's current location
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Send desktop notifications
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Create interactive drag interfaces
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Advanced local storage techniques
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - Modern alternative to XMLHttpRequest

**Research questions to consider:**
- What real-world problems does this API solve?
- How does the API handle errors and edge cases?
- What security considerations exist when using this API?
- How widely supported is this API across different browsers?

After your research, identify what characteristics make an API developer-friendly and reliable.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/26)

## Review & Self Study

You learned about LocalStorage and APIs in this lesson, both very useful for the professional web developer. Can you think about how these two things work together? Think about how you would architect a web site that would store items to be used by an API.

## Assignment

[Adopt an API](assignment.md)

