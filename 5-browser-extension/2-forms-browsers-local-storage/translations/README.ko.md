# Browser Extension Project Part 2: Call an API, use Local Storage

## Pre-Lecture Quiz

[Pre-lecture quiz](.github/pre-lecture-quiz.md)

### Introduction

In this lesson, you'll call an API by submitting your browser extension's form and display the results in your browser extension. In addition, you'll learn about how you can store data in your browser's local storage for future reference and use.

✅ Follow the numbered segments in the appropriate files to know where to place your code

### Set up the elements to manipulate in the extension:

By this time you have built the HTML for the form and results `<div>` for your browser extension. From now on, you'll need to work in the `/src/index.js` file and building your extension bit by bit. Refer to the [previous lesson](../about-browsers/README.md) on getting your project set up and on the build process.

Working in your `index.js` file, start by creating some `const` variables to hold the values associated with various fields:

```JavaScript
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

All of these fields are referenced by their css class, as you set it up in the HTML in the previous lesson.

### Add listeners

Next, add event listeners to the form and the clear button that resets the form, so that if a user submits the form or clicks that reset button, something will happen, and add the call to initialize the app at the bottom of the file:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Notice the shorthand used to listen for a submit or click event, and how the event it is passed to the handleSubmit or reset functions. Can you write the equivalent of this shorthand in a longer format? Which do you prefer?

### Build out the init() function and the reset() function:

Now you are going to build the function that initializes the extension, which is called init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```
In this function, there is some interesting logic. Reading through it, can you see what happens?

- two `const` are set up to check if the user has stored an APIKey and region code in local storage.
- if either of those is null, show the form by changing its style to display as 'block'
- hide the results, loading, and clearBtn and set any error text to an empty string
- if there exists a key and region, start a routine to:
  - call the API to get carbon usage data
  - hide the results area
  - hide the form
  - show the reset button

Before moving on, it's useful to learn about a very important concept available in browsers: [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). LocalStorage is a useful way to store strings in the browser as a `key-value` pair. This type of web storage can be manipulated by JavaScript to manage data in the browser. LocalStorage does not expire, while SessionStorage, another kind of web storage, is cleared when the browser is closed. The various types of storage have pros and cons to their usage.

> Note - your browser extension has its own local storage; the main browser window is a different instance and behaves separately.

You set your APIKey to have a string value, for example, and you can see that it is set on Edge by "inspecting" a web page (you can right-click a browser to inspect) and going to the Applications tab to see the storage.

![Local storage pane](images/localstorage.png)

✅ Think about situations where you would NOT want to store some data in LocalStorage. In general, placing API Keys in LocalStorage is a bad idea! Can you see why? In our case, since our app is purely for learning and will not be deployed to an app store, we will use this method.

Notice that you use the Web API to manipulate LocalStorage, either by using `getItem()`, `setItem()` or `removeItem()`. It's widely supported across browsers.

Before building the `displayCarbonUsage()` function that is called in `init()`, let's build the functionality to handle the initial form submission.

### Handle the form submission

Create a function called `handleSubmit` that accepts an event argument `(e)`. Stop the event from propagating (in this case, we want to stop the browser from refreshing) and call a new function, `setUpUser`, passing in the arguments `apiKey.value` and `region.value`. In this way, you use the two values that are brought in via the initial form when the appropriate fields are populated.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Refresh your memory - the HTML you set up in the last lesson has two input fields whose `values` are captured via the `const` you set up at the top of the file, and they are both `required` so the browser stops users from inputting null values.

### Set up the user

Moving on to the `setUpUser` function, here is where you set local storage values for apiKey and regionName. Add a new function:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```
This function sets a loading message to show while the API is called. At this point, you have arrived at creating the most important function of this browser extension!

### Display Carbon Usage

Finally it's time to query the API!

Before going further, we should discuss APIs. APIs, or [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), are a critical element of a web developer's toolbox. They provide standard ways for programs to interact and interface with each other. For example, if you are building a web site that needs to query a database, someone might have created an API for you to use. While there are many types of APIs, one of the most popular is a [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ The term 'REST' stands for 'Representational State Transfer' and features using variously-configured URLs to fetch data. Do a little research on the various types of APIs available to developers. What format appeals to you?

There are important things to note about this function. First notice the [`async` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Writing your functions so that they run asynchronously means that they wait for an action, such as data being returned, to be completed before continuing.

Here's a quick video about `async`:

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

Create a new function to query the C02Signal API:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

This is a big function. What's going on here?

- following best practices, you use an `async` keyword to make this function behave asyncronously. The function contains a `try/catch` block as it will return a promise when the API returns data. Because you don't have control over the speed that the API will respond (it may not respond at all!), you need to handle this uncertainty by call it asyncronously. 
- you're querying the co2signal API to get your region's data, using your API Key. To use that key, you have to use a type of authentication in your header parameters.
- once the API responds, you assign various elements of its response data to the parts of your screen you set up to show this data.
- if there's an error, or if there is no result, you show an error message.

✅ Using asyncronous programming patterns is another very useful tool in your toolbox. Read [about the various ways](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) you can configure this type of code.

Congratulations! If you build your extension (`npm run build`) and refresh it in your extensions pane, you have a working extension! The only thing that isn't working is the icon, and you'll fix that in the next lesson.

---

## 🚀 Challenge

We've discussed several types of API so far in these lessons. Choose a web API and research in depth what it offers. For example, take a look at APIs available within browsers such as the [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API). What makes a great API in your opinion?

## Post-Lecture Quiz

[Post-lecture quiz](.github/post-lecture-quiz.md)

## Review & Self Study

You learned about LocalStorage and APIs in this lesson, both very useful for the professional web developer. Can you think how these two things work together? Think about how you would architect a web site that would store items to be used by an API.

## Assignment

[Adopt an API](assignment.md)

