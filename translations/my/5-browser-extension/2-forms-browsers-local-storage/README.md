<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-28T18:37:12+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "my"
}
-->
# Browser Extension Project Part 2: API ကိုခေါ်ယူခြင်း၊ Local Storage ကိုအသုံးပြုခြင်း

## မိန့်ခွန်းမတင်မီမေးခွန်းများ

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/25)

### အကျဉ်းချုပ်

ဒီသင်ခန်းစာမှာတော့ သင့် browser extension ရဲ့ form ကို submit လုပ်ပြီး API ကိုခေါ်ယူကာ ရလဒ်များကို browser extension မှာ ပြသပေးမှာဖြစ်ပါတယ်။ ထို့အပြင်၊ သင် browser ရဲ့ local storage မှာ data ကို သိမ်းဆည်းပြီး နောက်တစ်ခါအသုံးပြုနိုင်ဖို့နည်းလမ်းများကိုလည်း လေ့လာရမှာဖြစ်ပါတယ်။

✅ သင့် code ကို ထည့်သွင်းရမယ့်နေရာကို သိရှိရန် သင့်ဖိုင်များအတွင်းရှိ အမှတ်အသားများကိုလိုက်နာပါ။

### Extension အတွက် Manipulate လုပ်ရန် Element များကို Set Up လုပ်ပါ:

ဒီအချိန်မှာတော့ သင် browser extension အတွက် form နှင့် results `<div>` ရဲ့ HTML ကို တည်ဆောက်ပြီးဖြစ်ပါပြီ။ အခုမှစပြီးတော့ `/src/index.js` ဖိုင်မှာ အလုပ်လုပ်ရမှာဖြစ်ပြီး extension ကို အပိုင်းလိုက် တည်ဆောက်ရမှာဖြစ်ပါတယ်။ သင့် project ကို set up လုပ်နည်းနှင့် build လုပ်နည်းကို [ယခင်သင်ခန်းစာ](../1-about-browsers/README.md) မှာ ပြန်လည်ကြည့်ရှုပါ။

`index.js` ဖိုင်မှာ အလုပ်လုပ်ပြီးနောက်၊ `const` variable များကို ဖန်တီးကာ HTML ရဲ့ field များနှင့် ဆက်စပ်ထားသော value များကို သိမ်းဆည်းပါ:

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

ဒီ field များအားလုံးကို ယခင်သင် HTML မှာ set up လုပ်ထားသော CSS class အတိုင်း reference လုပ်ထားပါတယ်။

### Listener များထည့်ပါ

နောက်တစ်ဆင့်မှာတော့ form နှင့် reset button အတွက် event listener များကို ထည့်သွင်းပါ။ သုံးစွဲသူက form ကို submit လုပ်သော်လည်းကောင်း၊ reset button ကို click လုပ်သော်လည်းကောင်း၊ တစ်ခုခုဖြစ်ပေါ်စေပြီး ဖိုင်ရဲ့ အောက်ဆုံးမှာ app ကို initialize လုပ်ရန် call လုပ်ပါ:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ submit event သို့မဟုတ် click event ကို listen လုပ်ရန် shorthand ကို သတိပြုပါ။ ဒီ shorthand ကို အရှည် version အဖြစ်ရေးနိုင်မလား? သင်အကြိုက်ဆုံး version က ဘယ်ဟာလဲ?

### init() function နှင့် reset() function ကို တည်ဆောက်ပါ:

အခုတော့ extension ကို initialize လုပ်မယ့် function ဖြစ်တဲ့ init() ကို တည်ဆောက်ရမှာဖြစ်ပါတယ်:

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

ဒီ function မှာ စိတ်ဝင်စားဖွယ် logic ရှိပါတယ်။ သင်ဖတ်ရှုရင်း ဘာတွေဖြစ်ပျက်နေလဲဆိုတာမြင်နိုင်ပါသလား?

- `const` နှစ်ခုကို local storage မှာ APIKey နှင့် region code ရှိ/မရှိ စစ်ဆေးရန် set up လုပ်ထားပါတယ်။
- အဲဒီ value များ null ဖြစ်နေပါက form ကို display style 'block' အဖြစ်ပြောင်းပြီး ပြသပါ။
- results, loading, နှင့် clearBtn ကို hide လုပ်ပြီး error text ကို အလွတ်ထားပါ။
- key နှင့် region ရှိနေပါက အောက်ပါ routine ကို စတင်ပါ:
  - API ကို call လုပ်ကာ carbon usage data ကိုရယူပါ။
  - results area ကို hide လုပ်ပါ။
  - form ကို hide လုပ်ပါ။
  - reset button ကို ပြပါ။

ရှေ့ဆက်မလုပ်ခင်မှာ browser တွေမှာ ရရှိနိုင်တဲ့ အရေးကြီးသော concept တစ်ခုဖြစ်တဲ့ [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) ကိုလေ့လာပါ။ LocalStorage သည် browser မှာ string များကို `key-value` pair အနေနဲ့ သိမ်းဆည်းရန် အသုံးဝင်သော နည်းလမ်းတစ်ခုဖြစ်ပါတယ်။ ဒီ storage ကို JavaScript ဖြင့် manipulate လုပ်ကာ browser မှာ data ကို စီမံနိုင်ပါတယ်။ LocalStorage သည် မသက်တမ်းကုန်သည့် storage ဖြစ်ပြီး SessionStorage သည် browser ကို ပိတ်လိုက်သည်နှင့် ဖျက်သိမ်းသွားပါသည်။ storage အမျိုးအစားများမှာ အသုံးပြုမှုအပေါ်တွင် အားသာချက်နှင့် အားနည်းချက်များရှိပါတယ်။

> Note - သင့် browser extension မှာ သီးသန့် local storage ရှိပါတယ်။ main browser window သည် အခြား instance ဖြစ်ပြီး သီးသန့်အနေဖြင့် လုပ်ဆောင်ပါသည်။

APIKey ကို string value အနေနဲ့ set လုပ်ပြီး Edge မှာ "inspect" လုပ်ကာ storage ကို Applications tab မှာကြည့်ရှုနိုင်ပါတယ်။

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.my.png)

✅ LocalStorage မှာ data ကို မသိမ်းဆည်းသင့်တဲ့ အခြေအနေများကို စဉ်းစားပါ။ အထူးသဖြင့် API Keys ကို LocalStorage မှာ သိမ်းဆည်းတာက အဆင်မပြေတဲ့အကြောင်းကို သတိထားပါ။ သင့် app သည် သင်ကြားရေးအတွက်သာဖြစ်ပြီး app store မှာ deploy မလုပ်မည်ဖြစ်သောကြောင့် ဒီနည်းလမ်းကို အသုံးပြုပါမည်။

LocalStorage ကို manipulate လုပ်ရန် Web API ကို အသုံးပြုပါ။ `getItem()`, `setItem()`, `removeItem()` ကို အသုံးပြုနိုင်ပြီး browser များတွင် ကျယ်ကျယ်ပြန့်ပြန့် support လုပ်ထားပါတယ်။

`displayCarbonUsage()` function ကို build လုပ်မတိုင်မီ၊ initial form submission ကို handle လုပ်ရန် functionality ကို build လုပ်ပါ။

### Form Submission ကို Handle လုပ်ပါ

`handleSubmit` ဟုခေါ်သော function တစ်ခုကို ဖန်တီးပြီး event argument `(e)` ကို လက်ခံပါ။ event ကို propagate မဖြစ်စေရန် (ဒီအခါမှာ browser refresh မဖြစ်စေရန်လိုသည်) ရပ်တန့်ပြီး `setUpUser` function ကို call လုပ်ပါ။ အဲဒီ function ကို `apiKey.value` နှင့် `region.value` arguments ဖြင့် pass လုပ်ပါ။ ဒီနည်းလမ်းဖြင့် initial form မှာ populate လုပ်ထားသော field value နှစ်ခုကို အသုံးပြုနိုင်ပါသည်။

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ သင့်ရဲ့ HTML မှာ input field နှစ်ခုရှိပြီး value များကို `const` variable ဖြင့် capture လုပ်ထားသည်ကို သတိပြုပါ။ အဲဒီ field များသည် `required` ဖြစ်သောကြောင့် browser က null value များကို input လုပ်ခြင်းကို တားဆီးပါသည်။

### User ကို Set Up လုပ်ပါ

`setUpUser` function ကို ဆက်လက်တည်ဆောက်ပါ။ ဒီနေရာမှာ local storage value များကို apiKey နှင့် regionName အတွက် set လုပ်ပါ။ function အသစ်တစ်ခုကို ထည့်ပါ:

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

ဒီ function မှာ API ကို call လုပ်နေစဉ် loading message ကို ပြသပါမည်။ အခုတော့ browser extension ရဲ့ အရေးကြီးဆုံး function ကို ဖန်တီးရန် ရောက်ရှိပါပြီ!

### Carbon Usage ကို Display လုပ်ပါ

အခုတော့ API ကို query လုပ်ရန် အချိန်ရောက်ပါပြီ!

API များကို ဆွေးနွေးရန်အချိန်ရောက်ပါပြီ။ API များသည် [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html) ဟုခေါ်ပြီး web developer များအတွက် အရေးကြီးသော tool တစ်ခုဖြစ်သည်။ API များသည် program များအကြား interface လုပ်ရန် standard နည်းလမ်းများကို ပေးသည်။ ဥပမာအားဖြင့် database ကို query လုပ်ရန် website တစ်ခုတည်ဆောက်နေပါက API တစ်ခုကို အသုံးပြုရန် တစ်စုံတစ်ဦးက ဖန်တီးထားနိုင်သည်။ API အမျိုးအစားများစွာရှိသော်လည်း [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/) သည် အလွန်လူကြိုက်များသည်။

✅ 'REST' ဆိုသည်မှာ 'Representational State Transfer' ကိုဆိုလိုပြီး URL များကို configure လုပ်ကာ data ကို fetch လုပ်ရန် အသုံးပြုသည်။ Developer များအတွက် ရရှိနိုင်သော API အမျိုးအစားများကို သုတေသနလုပ်ပါ။ သင့်အကြိုက်ဆုံး format က ဘာလဲ?

ဒီ function ရဲ့ အရေးကြီးသောအချက်များကို သတိပြုပါ။ ပထမဦးဆုံး [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) ကို သတိပြုပါ။ function များကို asynchronous အဖြစ်ရေးခြင်းသည် data ရရှိရန် စောင့်ဆိုင်းပြီးမှ ဆက်လက်လုပ်ဆောင်ရန် အရေးကြီးသည်။

`async` နှင့် `await` ကို အသုံးပြု၍ promise များကို စီမံရန် ဗီဒီယိုတစ်ခုကို ကြည့်ပါ:

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

> 🎥 အထက်ပါပုံကို click လုပ်ကာ async/await အကြောင်း ဗီဒီယိုကို ကြည့်ပါ။

C02Signal API ကို query လုပ်ရန် function အသစ်တစ်ခုကို ဖန်တီးပါ:

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

ဒီ function သည် အကြီးမားဆုံးဖြစ်သည်။ ဒီမှာ ဘာတွေဖြစ်နေလဲ?

- best practices ကိုလိုက်နာပြီး `async` keyword ကို အသုံးပြုကာ function ကို asynchronous အဖြစ်လုပ်ဆောင်သည်။ function မှာ `try/catch` block ပါရှိပြီး API response ရလာသောအခါ promise ကို return ပြန်ပါမည်။ API response ရရှိမည့်အမြန်နှုန်းကို သင့်အနေနဲ့ control လုပ်လို့မရသောကြောင့် asynchronous အနေနဲ့ handle လုပ်ရန်လိုအပ်သည်။
- co2signal API ကို query လုပ်ကာ region data ကိုရယူပြီး API Key ကို အသုံးပြုသည်။ အဲဒီ key ကို အသုံးပြုရန် header parameters မှာ authentication type ကို အသုံးပြုရပါမည်။
- API response ရလာသောအခါ response data ရဲ့ အစိတ်အပိုင်းများကို သင့် screen ရဲ့ သတ်မှတ်ထားသောနေရာများတွင် assign လုပ်ပါ။
- error ဖြစ်ပေါ်ပါက သို့မဟုတ် result မရှိပါက error message ကို ပြသပါ။

✅ asynchronous programming pattern များကို သင့် toolbox မှာ ထည့်သွင်းရန် အရေးကြီးသည်။ [ဒီ code အမျိုးအစား](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) ကို configure လုပ်နိုင်သော နည်းလမ်းများကို ဖတ်ရှုပါ။

ဂုဏ်ယူပါတယ်! သင့် extension ကို build (`npm run build`) လုပ်ပြီး extension pane မှာ refresh လုပ်ပါက အလုပ်လုပ်နေသော extension ရရှိပါမည်! အလုပ်မလုပ်သေးသောအရာတစ်ခုက icon ဖြစ်ပြီး နောက်သင်ခန်းစာမှာ ပြင်ဆင်ပါမည်။

---

## 🚀 စိန်ခေါ်မှု

ဒီသင်ခန်းစာများမှာ API အမျိုးအစားများစွာကို ဆွေးနွေးခဲ့ပါသည်။ web API တစ်ခုကို ရွေးပြီး အဲဒီ API ရဲ့ အကျိုးကျေးဇူးများကို သုတေသနလုပ်ပါ။ ဥပမာအားဖြင့် browser တွေမှာ ရရှိနိုင်သော [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) ကို ကြည့်ပါ။ သင့်အမြင်မှာ API တစ်ခုက ဘယ်လိုကောင်းမြတ်သင့်သလဲ?

## မိန့်ခွန်းပြီးနောက်မေးခွန်းများ

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/26)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

ဒီသင်ခန်းစာမှာ LocalStorage နှင့် API များကို လေ့လာခဲ့ပြီး professional web developer အတွက် အလွန်အသုံးဝင်သည်။ ဒီနှစ်ခုက ဘယ်လိုပေါင်းစပ်လုပ်ဆောင်သလဲဆိုတာ စဉ်းစားပါ။ API ကို အသုံးပြုရန် item များကို သိမ်းဆည်းမည့် website ကို ဘယ်လို architect လုပ်မလဲဆိုတာ စဉ်းစားပါ။

## အိမ်စာ

[Adopt an API](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရ အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှု ဝန်ဆောင်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။