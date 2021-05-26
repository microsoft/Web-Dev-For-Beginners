const axios = require('./node_modules/axios');

// form fields
const form = document.querySelector('.form-data'),
      region = document.querySelector('.region-name'),
      apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors'),
      loading = document.querySelector('.loading'),
      results = document.querySelector('.result-container'),
      usage = document.querySelector('.carbon-usage'),
      fossilfuel = document.querySelector('.fossil-fuel'),
      myregion = document.querySelector('.my-region'),
      clearBtn = document.querySelector('.clear-btn');

calculateColor = async (value) => {
	const co2Scale = [0, 150, 600, 750, 800];
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	// console.log(value + ' is closest to ' + closestNum);
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	// console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
};

async function displayCarbonUsage (apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					// Please get your own token from CO2Signal - https://www.co2signal.com/
					'auth-token': apiKey,
				},
			})
			.then(response => {

				calculateColor(Math.floor(response.data.data.carbonIntensity));

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
		console.error(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
};

// set up api key and region
async function setUpUser (apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	// make initial call
	displayCarbonUsage(apiKey, regionName);
} 

// Handle form submission
async function handleSubmit (e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
} 

// Initial checks
async function init () {
	// if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// set icon to be generic green
	chrome.runtime.sendMessage({
		action: 'updateIcon',
		value: {
			color: 'green'
		}
	});

	if (storedApiKey === null || storedRegion === null) {
		// if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// if we have saved keys/regions in localStorage, show results when they load
		results.style.display = 'none';
		form.style.display = 'none';
		displayCarbonUsage(storedApiKey, storedRegion);
		clearBtn.style.display = 'block';
	}
};

async function reset (e) {
	e.preventDefault();
	// clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

form.addEventListener('submit', handleSubmit);
clearBtn.addEventListener('click', reset);

//start app
init();
