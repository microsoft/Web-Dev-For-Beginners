<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-24T17:02:46+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "my"
}
-->
# Browser Extension Project Part 2: API ကိုခေါ်ယူခြင်း၊ Local Storage ကိုအသုံးပြုခြင်း

## မိမိကိုယ်ကိုစစ်ဆေးမေးခွန်း

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/25)

## အကျဉ်းချုပ်

သင်စတင်တည်ဆောက်ခဲ့တဲ့ browser extension ကိုသတိရပါသလား? အခုအချိန်မှာ သင်မှာ form တစ်ခုရှိပြီးတော့ အလှပလှပရှိနေပါတယ်၊ ဒါပေမယ့် အခုအချိန်မှာတော့ static ဖြစ်နေပါတယ်။ ဒီနေ့မှာတော့ အဲ့ဒီ extension ကို အစစ်အမှန် data တွေကို ချိတ်ဆက်ပြီးတော့ memory ရှိအောင်လုပ်ပေးပါမယ်။

Apollo mission control computers ကိုစဉ်းစားကြည့်ပါ - သူတို့ဟာ fixed information ကိုသာပြသတာမဟုတ်ပါဘူး။ spacecraft တွေနဲ့ အမြဲဆက်သွယ်ပြီး telemetry data တွေကို update လုပ်ပေးပြီး mission parameters အရေးကြီးတွေကို မှတ်မိထားပါတယ်။ ဒီလို dynamic behavior ကို ဒီနေ့မှာတည်ဆောက်မှာဖြစ်ပါတယ်။ သင့် extension ဟာ အင်တာနက်ကို ချိတ်ဆက်ပြီး အစစ်အမှန် environmental data တွေကို ရယူပြီး သင့် settings တွေကို နောက်တစ်ခါအတွက် မှတ်မိထားနိုင်ပါမယ်။

API integration ဟာ ရှုပ်ထွေးတဲ့အရာလိုပုံရပေမယ့် အခြေခံအားဖြင့် သင့် code ကို အခြား service တွေနဲ့ ဆက်သွယ်ပေးဖို့ သင်ပေးတာပါ။ သင့်အနေနဲ့ ရာသီဥတု data, social media feeds, carbon footprint information တို့ကို ရယူချင်တာဖြစ်စေ၊ အရေးကြီးတာက ဒီ digital connections တွေကို တည်ဆောက်ပေးဖို့ပါ။ Browser တွေက သတင်းအချက်အလက်တွေကို မှတ်မိထားနိုင်တဲ့ နည်းလမ်းတွေကိုလည်း ကျွန်တော်တို့ လေ့လာပါမယ် - library တွေက book catalog တွေကို အသုံးပြုပြီး ဘယ်စာအုပ်တွေ ဘယ်နေရာမှာရှိတယ်ဆိုတာ မှတ်မိထားတဲ့နည်းလမ်းလိုမျိုးပါ။

ဒီသင်ခန်းစာအဆုံးမှာ သင့်မှာ အစစ်အမှန် data ကို ရယူနိုင်တဲ့ browser extension, user preferences တွေကို မှတ်မိထားနိုင်တဲ့ extension, smooth ဖြစ်တဲ့ user experience ရှိတဲ့ extension တစ်ခု ရရှိပါမယ်။ စတင်လိုက်ကြစို့!

✅ သင့် code ကို ဘယ်နေရာမှာ ထည့်ရမလဲဆိုတာ သိရန် appropriate files တွေမှာ နံပါတ်အလိုက် segment တွေကို လိုက်နာပါ။

## Extension ထဲမှာ Manipulate လုပ်ဖို့ Element တွေကို Set Up လုပ်ပါ

JavaScript က interface ကို manipulate လုပ်နိုင်ဖို့အတွက် HTML element တွေကို reference လုပ်ဖို့လိုပါတယ်။ Galileo က Jupiter ရဲ့ လမင်းတွေကို လေ့လာဖို့ Jupiter ကို locate လုပ်ပြီး focus လုပ်ဖို့လိုတဲ့ telescope လိုမျိုးပါ။

`index.js` ဖိုင်ထဲမှာ form element တစ်ခုချင်းစီကို reference လုပ်ဖို့ `const` variable တွေကို ဖန်တီးပါမယ်။ ဒါဟာ သိပ္ပံပညာရှင်တွေက သူတို့ရဲ့ ပစ္စည်းတွေကို label လုပ်တဲ့နည်းလမ်းနဲ့ တူပါတယ် - lab တစ်ခုလုံးကို အကြိမ်ကြိမ်ရှာဖို့မလိုဘဲ တိုက်ရိုက် access လုပ်နိုင်ပါတယ်။

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

**ဒီ code ကဘာလုပ်သလဲဆိုရင်:**
- **Capture** form element တွေကို `document.querySelector()` နဲ့ CSS class selector တွေကို အသုံးပြုပြီး ရယူပါမယ်။
- **Create** region name နဲ့ API key အတွက် input field reference တွေကို ဖန်တီးပါမယ်။
- **Establish** carbon usage data ကို ပြသဖို့ result display element တွေနဲ့ ချိတ်ဆက်ပါမယ်။
- **Set up** loading indicator နဲ့ error message တွေလို UI element တွေကို access လုပ်နိုင်ဖို့ ပြင်ဆင်ပါမယ်။
- **Store** element reference တစ်ခုချင်းစီကို `const` variable ထဲမှာ ထည့်ထားပြီး code တစ်ခုလုံးမှာ အလွယ်တကူ အသုံးပြုနိုင်အောင်လုပ်ပါမယ်။

## Event Listener တွေကို ထည့်ပါ

အခုတော့ သင့် extension ကို user action တွေကို တုံ့ပြန်နိုင်အောင်လုပ်ပါမယ်။ Event listener တွေဟာ user interaction တွေကို monitor လုပ်ဖို့ သင့် code ရဲ့ နည်းလမ်းဖြစ်ပါတယ်။ အဲဒါဟာ ၁၉ ရာစု telephone exchange တွေက operator တွေလိုမျိုး - သူတို့ဟာ incoming call တွေကို နားထောင်ပြီး connection တွေကို ချိတ်ဆက်ပေးပါတယ်။

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**ဒီ concept တွေကို နားလည်ပါ:**
- **Attach** form submit listener ကို user တွေ Enter နှိပ်တဲ့အခါ သို့မဟုတ် submit ကို click လုပ်တဲ့အခါ trigger ဖြစ်အောင်လုပ်ပါမယ်။
- **Connect** clear button ကို click လုပ်တဲ့အခါ form ကို reset လုပ်ဖို့ listener တစ်ခုကို ချိတ်ဆက်ပါမယ်။
- **Pass** event object `(e)` ကို handler function တွေကို ပေးပို့ပြီး control ပိုမိုရနိုင်အောင်လုပ်ပါမယ်။
- **Call** `init()` function ကို ချက်ချင်း run လုပ်ပြီး extension ရဲ့ initial state ကို set up လုပ်ပါမယ်။

✅ ဒီမှာ shorthand arrow function syntax ကို အသုံးပြုထားတာကို သတိထားပါ။ ဒီ modern JavaScript syntax ဟာ traditional function expression တွေထက် သန့်ရှင်းပြီးတော့ အလုပ်လုပ်ပုံတူတူပါပေမယ့် ပိုမိုလွယ်ကူပါတယ်။

## Initialization နဲ့ Reset Function တွေကို တည်ဆောက်ပါ

အခုတော့ extension ရဲ့ initialization logic ကို ဖန်တီးပါမယ်။ `init()` function ဟာ သင်္ဘောရဲ့ navigation system လိုမျိုး - instruments တွေကို စစ်ဆေးပြီးတော့ အခြေအနေကို သတ်မှတ်ပြီး interface ကို ပြင်ဆင်ပေးပါတယ်။ အဲ့ဒီ function က သင့် extension ကို အရင်တစ်ခါအသုံးပြုထားတဲ့ user ဖြစ်မလား၊ ပထမဆုံးအသုံးပြုတဲ့ user ဖြစ်မလားဆိုတာကို စစ်ဆေးပြီးတော့ settings တွေကို load လုပ်ပေးပါတယ်။

`reset()` function က user တွေကို အစစအဆင့်ဆင့် ပြန်စဖို့ အခွင့်အရေးပေးပါတယ် - သိပ္ပံပညာရှင်တွေက experiment တွေကြားမှာ instruments တွေကို reset လုပ်ပြီး clean data ရဖို့ ပြင်ဆင်တဲ့နည်းလမ်းလိုမျိုးပါ။

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

**ဒီမှာ ဘာတွေဖြစ်နေလဲဆိုရင်:**
- **Retrieve** browser ရဲ့ local storage ထဲက stored API key နဲ့ region ကို ရယူပါမယ်။
- **Check** user ဟာ ပထမဆုံးအသုံးပြုသူလား (stored credentials မရှိ) ဒါမှမဟုတ် ပြန်လာတဲ့ user လားဆိုတာကို စစ်ဆေးပါမယ်။
- **Show** setup form ကို new user တွေအတွက် ပြသပြီး အခြား interface element တွေကို hide လုပ်ပါမယ်။
- **Load** saved data ကို automatically ပြုလုပ်ပြီး ပြန်လာတဲ့ user တွေအတွက် reset option ကို ပြသပါမယ်။
- **Manage** available data အပေါ်မူတည်ပြီး user interface state ကို ပြင်ဆင်ပါမယ်။

**Local Storage အကြောင်းအရာများ:**
- **Persist** browser session တွေကြားမှာ data တွေကို မှတ်မိထားနိုင်ပါတယ် (session storage မဟုတ်ပါဘူး)။
- **Store** data တွေကို key-value pair အနေနဲ့ `getItem()` နဲ့ `setItem()` ကို အသုံးပြုပြီး သိမ်းဆည်းပါမယ်။
- **Return** `null` ကို data မရှိတဲ့ key အတွက် ပြန်ပေးပါမယ်။
- **Provide** user preferences နဲ့ settings တွေကို မှတ်မိထားနိုင်တဲ့ လွယ်ကူတဲ့နည်းလမ်းတစ်ခုကို ပေးပါမယ်။

> 💡 **Browser Storage ကို နားလည်ခြင်း**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) ဟာ သင့် extension ကို memory ရှိအောင်လုပ်ပေးပါတယ်။ အတိတ်က Alexandria Library က scroll တွေကို သိမ်းဆည်းထားတဲ့နည်းလမ်းလိုမျိုးပါ။
>
> **အရေးကြီးသော အချက်များ:**
> - **Persist** data ကို browser ကို ပိတ်ပြီးပြန်ဖွင့်တဲ့အခါမှာတောင် မှတ်မိထားနိုင်ပါတယ်။
> - **Survive** computer restart နဲ့ browser crash တွေကို ရှင်သန်နိုင်ပါတယ်။
> - **Provide** user preferences အတွက် storage space အများကြီးပေးနိုင်ပါတယ်။
> - **Offer** network delay မရှိဘဲ instant access ကို ပေးနိုင်ပါတယ်။

> **အရေးကြီးသော မှတ်ချက်**: Browser extension ရဲ့ local storage ဟာ regular web page တွေက local storage နဲ့ သီးသန့်ဖြစ်ပါတယ်။ ဒါဟာ security ကို ပိုမိုကောင်းစေပြီး website တွေနဲ့ conflict ဖြစ်တာကို ကာကွယ်ပေးပါတယ်။

Browser Developer Tools (F12) ကိုဖွင့်ပြီး **Application** tab ကိုသွားပါ၊ **Local Storage** section ကို expand လုပ်ပြီး stored data တွေကို ကြည့်နိုင်ပါတယ်။

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.my.png)

> ⚠️ **Security အရေးကြီးချက်**: Production application တွေမှာ LocalStorage ထဲမှာ API key တွေကို သိမ်းဆည်းထားတာဟာ security risk ဖြစ်ပါတယ်။ JavaScript က ဒီ data ကို access လုပ်နိုင်ပါတယ်။ သင်ယူရေးအတွက်တော့ ဒီနည်းလမ်းက အဆင်ပြေပါတယ်၊ ဒါပေမယ့် အစစ်အမှန် application တွေမှာ sensitive credentials တွေကို secure server-side storage ကို အသုံးပြုသင့်ပါတယ်။

## Form Submission ကို Handle လုပ်ပါ

အခုတော့ form ကို submit လုပ်တဲ့အခါ ဘာတွေဖြစ်မလဲဆိုတာ handle လုပ်ပါမယ်။ Default အနေဖြင့် browser တွေဟာ form ကို submit လုပ်တဲ့အခါ page ကို reload လုပ်ပါတယ်၊ ဒါပေမယ့် ဒီ behavior ကို intercept လုပ်ပြီး smooth ဖြစ်တဲ့ experience ကို ဖန်တီးပါမယ်။

ဒီနည်းလမ်းဟာ mission control က spacecraft communication ကို handle လုပ်တဲ့နည်းလမ်းနဲ့ တူပါတယ် - transmission တစ်ခုစီအတွက် system တစ်ခုလုံးကို reset လုပ်တာမဟုတ်ဘဲ continuous operation ကို maintain လုပ်ပြီးတော့ information အသစ်တွေကို process လုပ်ပါတယ်။

Form submission event ကို capture လုပ်ပြီး user input ကို extract လုပ်တဲ့ function ကို ဖန်တီးပါ:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**အထက်မှာ ဘာတွေဖြစ်နေလဲဆိုရင်:**
- **Prevent** default form submission behavior ကို page refresh ဖြစ်တာကို တားဆီးပါမယ်။
- **Extract** user input value တွေကို API key နဲ့ region field တွေထဲက ရယူပါမယ်။
- **Pass** form data ကို `setUpUser()` function ကို ပေးပို့ပြီး process လုပ်ပါမယ်။
- **Maintain** single-page application behavior ကို page reload မဖြစ်အောင်လုပ်ပါမယ်။

✅ သင့် HTML form field တွေမှာ `required` attribute ပါဝင်ပါတယ်၊ ဒါကြောင့် user တွေ API key နဲ့ region ကို provide လုပ်မှ ဒီ function run ဖြစ်ပါမယ်။

## User Preferences ကို Set Up လုပ်ပါ

`setUpUser` function ဟာ user ရဲ့ credentials တွေကို save လုပ်ပြီးတော့ ပထမဆုံး API call ကို initiate လုပ်ပေးပါတယ်။ ဒါဟာ setup ကနေ result ကို display လုပ်ဖို့ smooth transition ကို ဖန်တီးပေးပါတယ်။

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

**Step by step, ဒီမှာ ဘာတွေဖြစ်နေလဲဆိုရင်:**
- **Save** API key နဲ့ region name ကို local storage ထဲမှာ သိမ်းဆည်းပြီး နောက်တစ်ခါအသုံးပြုနိုင်အောင်လုပ်ပါမယ်။
- **Show** loading indicator ကို data fetch လုပ်နေတယ်ဆိုတာ user တွေကို ပြသပါမယ်။
- **Clear** အရင် error message တွေကို display ထဲက ဖယ်ရှားပါမယ်။
- **Reveal** clear button ကို user တွေ settings ကို reset လုပ်နိုင်အောင် ပြသပါမယ်။
- **Initiate** API call ကို run လုပ်ပြီး အစစ်အမှန် carbon usage data ကို fetch လုပ်ပါမယ်။

ဒီ function ဟာ data persistence နဲ့ user interface update တွေကို တစ်ခုပေါင်းပြီး coordinate လုပ်ပေးတဲ့ seamless user experience ကို ဖန်တီးပေးပါတယ်။

## Carbon Usage Data ကို Display လုပ်ပါ

အခုတော့ extension ကို external data source တွေနဲ့ API တွေကနေ ချိတ်ဆက်ပါမယ်။ ဒါဟာ standalone tool တစ်ခုကနေ အင်တာနက်တစ်လျှောက်မှာ real-time information တွေကို access လုပ်နိုင်တဲ့အရာတစ်ခုအဖြစ် ပြောင်းလဲပေးပါတယ်။

**API တွေကို နားလည်ခြင်း**

[APIs](https://www.webopedia.com/TERM/A/API.html) ဟာ application တွေကြားမှာ ဆက်သွယ်ပေးတဲ့နည်းလမ်းဖြစ်ပါတယ်။ ၁၉ ရာစု telegraph system လိုမျိုး - operator တွေက request တွေကို ပို့ပြီးတော့ requested information ကို response အနေနဲ့ လက်ခံရရှိပါတယ်။ သင့်အနေနဲ့ social media ကို check လုပ်တဲ့အခါ, voice assistant ကိုမေးတဲ့အခါ, ဒါမှမဟုတ် delivery app ကို အသုံးပြုတဲ့အခါ API တွေက data exchange တွေကို facilitate လုပ်ပေးပါတယ်။

**REST API အကြောင်းအရာများ:**
- **REST** ဟာ 'Representational State Transfer' ကိုဆိုလိုပါတယ်။
- **Use** standard HTTP method (GET, POST, PUT, DELETE) တွေကို data တွေနဲ့ interaction လုပ်ဖို့ အသုံးပြုပါတယ်။
- **Return** predictable format (JSON) တွေကို data အနေနဲ့ ပြန်ပေးပါတယ်။
- **Provide** consistent URL-based endpoint တွေကို request အမျိုးမျိုးအတွက် ပေးပါတယ်။

✅ [CO2 Signal API](https://www.co2signal.com/) ဟာ real-time carbon intensity data တွေကို ကမ္ဘာတစ်လွှား electrical grid တွေကနေ provide လုပ်ပါတယ်။ ဒါဟာ electricity usage ရဲ့ environmental impact ကို user တွေ နားလည်နိုင်အောင် ကူညီပေးပါတယ်!

> 💡 **Asynchronous JavaScript ကို နားလည်ခြင်း**: [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) ဟာ သင့် code ကို simultaneous operation တွေကို handle လုပ်နိုင်အောင်လုပ်ပေးပါတယ်။ Server က data ကို request လုပ်တဲ့အခါ extension တစ်ခုလုံးကို freeze ဖြစ်စေချင်တာမဟုတ်ပါဘူး - အဲဒါဟာ air traffic control က တစ်စင်းတည်းရဲ့ response ကိုစောင့်နေတဲ့အခါ operation အားလုံးကို ရပ်တန့်ထားတဲ့နည်းလမ်းနဲ့ တူပါတယ်။
>
> **အရေးကြီးသော အကျိုးကျေးဇူးများ:**
> - **Maintain** extension responsiveness ကို data load လုပ်နေတဲ့အချိန်မှာတောင် ရှိနေပါတယ်။
> - **Allow** အခြား code တွေကို network request တွေကြားမှာ run ဖြစ်နိုင်ပါတယ်။
> - **Improve** traditional callback pattern တွေထက် code readability ကို ပိုမိုကောင်းစေပါတယ်။
> - **Enable** network issue တွေကို graceful error handling လုပ်နိုင်ပါတယ်။

`async` အကြောင်း video တစ်ခု:

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

> 🎥 အပေါ်ကပုံကို click လုပ်ပြီး async/await အကြောင်း video ကို ကြည့်ပါ။

Carbon usage data ကို fetch လုပ်ပြီး display လုပ်တဲ့ function ကို ဖန်တီးပါ:

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

**ဒီမှာ ဘာတွေဖြစ်နေလဲဆိုရင်:**
- **Use** modern `fetch()` API ကို external library တွေလို dependency မလိုဘဲ အသုံးပြုနိုင်တဲ့ cleaner code အတွက် အသုံးပြုပါမယ်။
- **Implement** `response.ok` ကို အသုံးပြုပြီး API failure တွေကို စောစောမီမီ catch လုပ်ပါမယ်။
- **Handle** asynchronous operation တွေကို `async/await` နဲ့ readable code flow ကို ဖန်တီးပါမယ်။
- **Authenticate** CO2 Signal API ကို `auth-token` header ကို အသုံးပြုပြီး ချိတ်ဆက်ပါမယ်။
- **Parse** JSON response data ကို extract လုပ်ပြီး carbon intensity information ကို ရယူပါမယ်။
- **Update** UI element တွေကို formatted environmental data နဲ့ ပြောင်းလဲပါမယ်။
- **Provide** API call fail ဖြစ်တဲ့အခါ user-friendly error message တွေကို ပြသပါမယ်။

**Modern JavaScript Concept တွေ:**
- **Template literals** ကို `${}` syntax နဲ့ clean string formatting အတွက် အသုံးပြုပါမယ်။
- **Error handling** ကို try/catch block တွေကို အသုံးပြုပြီး robust application တွေကို ဖန်တီးပါမယ်။
- **Async/await** pattern ကို network request တွေကို gracefully handle လုပ်ဖို့ အသုံးပြုပါမယ်။
- **Object destructuring** ကို API response data ထဲက specific data တွေကို extract လုပ်ဖို့ အသုံးပြုပါမယ်။
- **Method chaining** ကို
ဒီသင်ခန်းစာမှာ LocalStorage နဲ့ APIs အကြောင်းကို သင်ယူခဲ့ပြီး၊ အင်တာနက်ဆိုင်ရာ ပရော်ဖက်ရှင်နယ် Developer အတွက် အလွန်အသုံးဝင်တဲ့ အရာတွေဖြစ်ပါတယ်။ ဒီအရာနှစ်ခု ဘယ်လိုပေါင်းစပ်လုပ်ဆောင်နိုင်မလဲဆိုတာ စဉ်းစားကြည့်ပါ။ API အတွက် အသုံးပြုမယ့် အရာတွေကို သိမ်းဆည်းထားမယ့် ဝက်ဘ်ဆိုဒ်ကို ဘယ်လို ဖန်တီးမလဲဆိုတာကို စဉ်းစားကြည့်ပါ။

## အလုပ်ပေးစာ

[API ကို လက်ခံပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။