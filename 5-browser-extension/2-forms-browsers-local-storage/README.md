# Browser Extension Project Part 2: Call an API, use Local Storage

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/25)

## Introduction

Now that you've built the foundation of your browser extension with HTML and CSS, it's time to bring it to life with dynamic functionality. In this lesson, you'll transform your static form into an interactive tool that communicates with external APIs and intelligently stores data for future use.

API integration is a cornerstone skill in modern web development. Whether you're fetching weather data, user profiles, or carbon emission statistics like we'll do today, understanding how to work with APIs opens up endless possibilities for your applications. You'll also discover how browser storage works behind the scenes, allowing your extension to remember user preferences and data even after closing and reopening.

By the end of this lesson, you'll have a fully functional browser extension that fetches real environmental data, stores user settings, and provides a polished user experience. Let's dive into the exciting world of API integration and data persistence!

✅ Follow the numbered segments in the appropriate files to know where to place your code

## Set up the elements to manipulate in the extension

Before we can make our extension interactive, we need to establish connections between our JavaScript code and the HTML elements we created earlier. Think of this step as creating a communication bridge between your code and the user interface.

Working in your `index.js` file, you'll start by creating `const` variables that reference each important element on your form. This approach keeps your code organized and makes it easy to update the interface later.

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

Event listeners are like watchful assistants that wait for specific user actions and then execute your code in response. You'll add listeners for form submission and button clicks to make your extension interactive.

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

The `init()` function is like the startup routine for your extension - it checks what data is already stored and decides what to show the user. The `reset()` function provides a clean slate when users want to start over.

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

> 💡 **Understanding Browser Storage**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) is one of several storage options available in web browsers. Think of it as a mini-database that lives in your user's browser.
>
> **What you need to know:**
> - **Stores** data as key-value pairs that persist between browser sessions
> - **Survives** browser restarts (unlike SessionStorage which expires when tabs close)
> - **Provides** up to 5-10MB of storage space per domain
> - **Works** synchronously, making it easy to use in your JavaScript code

> **Important Note**: Your browser extension has its own isolated local storage that's separate from regular web pages. This provides security and prevents conflicts with other websites.

You can view your stored data by opening browser Developer Tools (F12), navigating to the **Application** tab, and expanding the **Local Storage** section.

![Local storage pane](images/localstorage.png)

> ⚠️ **Security Consideration**: In production applications, storing API keys in LocalStorage poses security risks since JavaScript can access this data. For learning purposes, this approach works fine, but real applications should use secure server-side storage for sensitive credentials.

## Handle form submission

When users submit your form, you need to intercept that action and process their input instead of letting the browser handle it normally. This is where form submission handling becomes crucial for single-page applications and extensions.

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

Now comes the exciting part - fetching real environmental data from an external API! This is where your extension transforms from a simple form into a powerful tool that provides valuable information to users.

**Understanding APIs in web development:**

[Application Programming Interfaces (APIs)](https://www.webopedia.com/TERM/A/API.html) are the bridges that connect different software systems. Think of them as specialized messengers that allow your application to request specific data from external services. When you check the weather on your phone, submit a payment online, or share content on social media, APIs are working behind the scenes.

**Key concepts about REST APIs:**
- **REST** stands for 'Representational State Transfer'
- **Uses** standard HTTP methods (GET, POST, PUT, DELETE) to interact with data
- **Returns** data in predictable formats, typically JSON
- **Provides** consistent, URL-based endpoints for different types of requests

✅ The [CO2 Signal API](https://www.co2signal.com/) we'll use provides real-time carbon intensity data from electrical grids worldwide. This helps users understand the environmental impact of their electricity usage!

> 💡 **Understanding Asynchronous JavaScript**: The [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) is essential for modern web development. When you make API calls, you're requesting data from external servers, which takes time.
>
> **Here's why async/await matters:**
> - **Prevents** your application from freezing while waiting for API responses
> - **Allows** other code to continue running during network requests
> - **Provides** cleaner, more readable code compared to callback-based approaches
> - **Handles** errors gracefully when network requests fail

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

✅ This function showcases the complete lifecycle of API integration: authentication, request, data processing, UI updates, and error handling - all essential skills for modern web development!

🎉 **Congratulations!** You've built a fully functional browser extension that:
- **Integrates** with external APIs to fetch real-world data
- **Stores** user preferences in local storage
- **Handles** errors gracefully with user-friendly messages
- **Provides** a smooth, interactive user experience

To test your extension, run `npm run build` and refresh it in your browser's extensions panel. You now have a working carbon footprint tracker! The only feature left to implement is the dynamic icon, which you'll tackle in the next lesson.

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the browser extension by adding error handling improvements and user experience features. This challenge will help you practice working with APIs, local storage, and DOM manipulation using modern JavaScript patterns.

**Prompt:** Create an enhanced version of the displayCarbonUsage function that includes: 1) A retry mechanism for failed API calls with exponential backoff, 2) Input validation for the region code before making the API call, 3) A loading animation with progress indicators, 4) Caching of API responses in localStorage with expiration timestamps (cache for 30 minutes), and 5) A feature to display historical data from previous API calls. Also add proper TypeScript-style JSDoc comments to document all function parameters and return types.

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

