<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-27T22:18:08+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "my"
}
-->
# Browser Extension Project Part 2: API ကိုခေါ်ရန်၊ Local Storage ကိုအသုံးပြုရန်

## မိန့်ခွန်းမတင်မီ စစ်ဆေးမှု

[မိန့်ခွန်းမတင်မီ စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/25)

### နိဒါန်း

ဒီသင်ခန်းစာမှာ သင့် browser extension ရဲ့ form ကို submit လုပ်ပြီး API ကိုခေါ်သုံးကာ ရလဒ်တွေကို browser extension မှာ ပြသပေးမှာဖြစ်ပါတယ်။ ထို့အပြင်၊ browser ရဲ့ local storage မှာ ဒေတာတွေကို သိမ်းဆည်းပြီး နောက်ပိုင်းအတွက် အသုံးပြုနိုင်မယ့်နည်းလမ်းကိုလည်း သင်ယူပါမယ်။

✅ သင့်ရဲ့ code ကိုဘယ်နေရာမှာထည့်ရမယ်ဆိုတာ သိရန် အမှတ်အသားနံပါတ်များကို သင့်ဖိုင်များတွင်လိုက်နာပါ။

### Extension ထဲမှာ ပြောင်းလဲနိုင်မယ့် elements တွေကို set up လုပ်ပါ:

ဒီအချိန်မှာ သင့် browser extension အတွက် form နဲ့ results `<div>` ရဲ့ HTML ကို တည်ဆောက်ပြီးဖြစ်ပါပြီ။ အခုကစပြီး `/src/index.js` ဖိုင်မှာ အလုပ်လုပ်ရမှာဖြစ်ပြီး extension ကို အပိုင်းလိုက် တည်ဆောက်ရမှာဖြစ်ပါတယ်။ သင့်ရဲ့ project ကို set up လုပ်နည်းနဲ့ build လုပ်နည်းကို သိရန် [ယခင်သင်ခန်းစာ](../1-about-browsers/README.md) ကို ပြန်လည်ကြည့်ပါ။

`index.js` ဖိုင်မှာ အလုပ်လုပ်ပြီးနောက်၊ အမျိုးမျိုးသော fields တွေနဲ့ ဆက်စပ်နေတဲ့ တန်ဖိုးတွေကို သိမ်းဆည်းဖို့ `const` variables တစ်ချို့ကို စတင်ဖန်တီးပါ:

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

ဒီ fields တွေကို HTML မှာ သင်တည်ဆောက်ထားတဲ့ css class နဲ့ ရည်ညွှန်းထားပါတယ်။

### Listeners ထည့်ပါ

နောက်တစ်ဆင့်မှာတော့ form နဲ့ reset button အတွက် event listeners တွေထည့်ပါ။ ဒါကြောင့် user က form ကို submit လုပ်တဲ့အခါ သို့မဟုတ် reset button ကိုနှိပ်တဲ့အခါ တစ်ခုခုဖြစ်ပေါ်မှာဖြစ်ပါတယ်။ ဖိုင်ရဲ့ အောက်ဆုံးမှာ app ကို initialize လုပ်ဖို့ call ထည့်ပါ:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ submit event သို့မဟုတ် click event ကို နားထောင်ဖို့ shorthand ကို သတိပြုပါ၊ event ကို handleSubmit သို့မဟုတ် reset functions ကို ပေးပို့ပုံကိုလည်း သတိပြုပါ။ ဒီ shorthand ကို ပိုရှည်တဲ့ format နဲ့ရေးနိုင်မလား? သင်ဘယ်ဖော်မတ်ကို ပိုကြိုက်ပါသလဲ?

### init() function နဲ့ reset() function ကို တည်ဆောက်ပါ:

အခုတော့ extension ကို initialize လုပ်မယ့် function ကို တည်ဆောက်ပါ၊ ဒါက init() လို့ခေါ်ပါတယ်:

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

ဒီ function ထဲမှာ စိတ်ဝင်စားစရာ logic တစ်ချို့ရှိပါတယ်။ ဖတ်ကြည့်ပြီး ဘာဖြစ်နေလဲဆိုတာ မြင်နိုင်ပါသလား?

- `const` နှစ်ခုကို local storage ထဲမှာ user ရဲ့ APIKey နဲ့ region code ရှိမရှိ စစ်ဆေးဖို့ သတ်မှတ်ထားပါတယ်။
- အဲဒီနှစ်ခုထဲက တစ်ခုခု null ဖြစ်ရင် form ကို 'block' အဖြစ်ပြောင်းပြီး ပြသပါ။
- results, loading, နဲ့ clearBtn ကို ဖျောက်ပြီး error text ကို အလွတ် string အဖြစ် သတ်မှတ်ပါ။
- key နဲ့ region ရှိနေခဲ့ရင်တော့ အောက်ပါအတိုင်းလုပ်ဆောင်ပါ:
  - API ကိုခေါ်ပြီး carbon usage data ကိုရယူပါ။
  - results area ကို ဖျောက်ပါ။
  - form ကို ဖျောက်ပါ။
  - reset button ကို ပြပါ။

ရှေ့ဆက်မလုပ်မီ browser တွေမှာ ရရှိနိုင်တဲ့ အရေးကြီးသော concept တစ်ခုကို သင်ယူရမှာဖြစ်ပါတယ် - [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)။ LocalStorage က browser ထဲမှာ string တွေကို `key-value` pair အနေနဲ့ သိမ်းဆည်းဖို့ အသုံးဝင်ပါတယ်။ ဒီလို web storage ကို JavaScript နဲ့ manipulate လုပ်ပြီး browser ထဲမှာ ဒေတာကို စီမံနိုင်ပါတယ်။ LocalStorage က မသက်တမ်းကုန်သလို SessionStorage က browser ပိတ်လိုက်တာနဲ့ ဖျက်သိမ်းသွားပါတယ်။ storage အမျိုးအစားတွေမှာ အသုံးပြုမှုအပေါ် မတူညီတဲ့ အားသာချက်နဲ့ အားနည်းချက်တွေရှိပါတယ်။

> မှတ်ချက် - သင့် browser extension ရဲ့ local storage က main browser window ရဲ့ instance နဲ့ မတူပါဘူး၊ သီးခြားစွာ လုပ်ဆောင်ပါတယ်။

APIKey ကို string တန်ဖိုးတစ်ခုအဖြစ် သတ်မှတ်ပြီး၊ Edge မှာ "inspect" လုပ်ပြီး storage ကို Applications tab မှာကြည့်နိုင်ပါတယ်။

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.my.png)

✅ LocalStorage မှာ ဒေတာတစ်ချို့ကို မသိမ်းသင့်တဲ့ အခြေအနေတွေကို စဉ်းစားကြည့်ပါ။ အထွေထွေအားဖြင့် API Keys ကို LocalStorage မှာ သိမ်းတာက အဆင်မပြေတဲ့အကြောင်းကို မြင်နိုင်ပါသလား? ကျွန်တော်တို့ရဲ့ app က သင်ယူရေးအတွက်သာဖြစ်ပြီး app store မှာ မတင်မီအတွက် ဒီနည်းကို အသုံးပြုမှာဖြစ်ပါတယ်။

Web API ကို အသုံးပြုပြီး LocalStorage ကို manipulate လုပ်နိုင်ပါတယ်၊ `getItem()`, `setItem()`, သို့မဟုတ် `removeItem()` ကို အသုံးပြုနိုင်ပါတယ်။ ဒါဟာ browser အားလုံးမှာ ကျယ်ကျယ်ပြန့်ပြန့် support လုပ်ထားပါတယ်။

`displayCarbonUsage()` function ကို တည်ဆောက်မတိုင်မီ၊ initial form submission ကို handle လုပ်မယ့် functionality ကို တည်ဆောက်ပါ။

### Form submission ကို handle လုပ်ပါ

`handleSubmit` လို့ခေါ်တဲ့ function တစ်ခုကို ဖန်တီးပြီး event argument `(e)` ကို လက်ခံပါ။ event ကို propagate မဖြစ်အောင် (ဒီအခါမှာ browser ကို refresh မလုပ်စေချင်တာ) ရပ်တန့်ပြီး၊ `setUpUser` လို့ခေါ်တဲ့ function ကို `apiKey.value` နဲ့ `region.value` arguments တွေကို ပေးပို့ပါ။ ဒီနည်းနဲ့ initial form ကနေ appropriate fields တွေကို populate လုပ်ပြီးရတဲ့ values နှစ်ခုကို အသုံးပြုနိုင်ပါတယ်။

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ သင့်ရဲ့မှတ်ဉာဏ်ကို ပြန်လည်တက်ကြွစေပါ - ယခင်သင်ခန်းစာမှာ သင်တည်ဆောက်ထားတဲ့ HTML မှာ `values` တွေကို capture လုပ်မယ့် input fields နှစ်ခုရှိပြီး၊ အဲဒီ fields နှစ်ခုလုံးကို `required` လို့ သတ်မှတ်ထားပါတယ်။ ဒါကြောင့် browser က user တွေကို null values ထည့်မရအောင် တားဆီးပါတယ်။

### User ကို set up လုပ်ပါ

`setUpUser` function ကို ဆက်လုပ်ပါ၊ ဒီမှာတော့ apiKey နဲ့ regionName အတွက် local storage values တွေကို set လုပ်ပါမယ်။ function အသစ်တစ်ခုထည့်ပါ:

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

ဒီ function က API ကိုခေါ်မယ့်အချိန် loading message ကို ပြသဖို့ သတ်မှတ်ထားပါတယ်။ ဒီအချိန်မှာ သင့် browser extension ရဲ့ အရေးကြီးဆုံး function ကို တည်ဆောက်ဖို့ ရောက်ရှိလာပါပြီ!

### Carbon Usage ကို ပြသပါ

အခုတော့ API ကို query လုပ်ဖို့ အချိန်ရောက်ပါပြီ!

ရှေ့ဆက်မလုပ်မီ API တွေကို ဆွေးနွေးရမယ်။ API တွေဟာ [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html) လို့ခေါ်ပြီး web developer တွေရဲ့ toolbox မှာ အရေးကြီးတဲ့ အစိတ်အပိုင်းတစ်ခုဖြစ်ပါတယ်။ API တွေက programs တွေကို အချင်းချင်း ဆက်သွယ်ဖို့ standard နည်းလမ်းတွေ ပေးပါတယ်။ ဥပမာအားဖြင့် သင် database ကို query လုပ်ဖို့လိုတဲ့ web site တစ်ခု တည်ဆောက်နေရင်၊ တစ်ယောက်ယောက်က API တစ်ခုကို သင့်အတွက် ဖန်တီးထားနိုင်ပါတယ်။ API အမျိုးအစားတွေ များစွာရှိပေမယ့် [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/) က အများဆုံး အသုံးပြုတဲ့ API အမျိုးအစားတစ်ခုဖြစ်ပါတယ်။

✅ 'REST' ဆိုတာ 'Representational State Transfer' ကို ရည်ညွှန်းပြီး၊ data ကို ရယူဖို့ အမျိုးမျိုးဖွဲ့စည်းထားတဲ့ URLs တွေကို အသုံးပြုပါတယ်။ Developer တွေအတွက် ရရှိနိုင်တဲ့ API အမျိုးအစားတွေကို သုတေသနလုပ်ပါ။ ဘယ် format က သင့်ကို ဆွဲဆောင်ပါသလဲ?

ဒီ function အကြောင်း အရေးကြီးတဲ့ အချက်တွေကို သတိပြုပါ။ ပထမဦးစွာ [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) ကို သတိပြုပါ။ သင့် function တွေကို asynchronous ဖြစ်အောင်ရေးခြင်းက data ပြန်လာတဲ့အချိန်အထိ စောင့်နေပြီးမှ ဆက်လုပ်ဆောင်စေပါတယ်။

ဒီမှာ `async` အကြောင်း video တစ်ခုရှိပါတယ်:

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

> 🎥 အထက်ပါပုံကိုနှိပ်ပြီး async/await အကြောင်း video ကိုကြည့်ပါ။

C02Signal API ကို query လုပ်ဖို့ function အသစ်တစ်ခု ဖန်တီးပါ:

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

ဒီ function က ကြီးမားပါတယ်။ ဘာဖြစ်နေလဲဆိုတာ ကြည့်ပါ:

- best practices အတိုင်း `async` keyword ကို အသုံးပြုပြီး function ကို asynchronous ဖြစ်အောင်လုပ်ထားပါတယ်။ function ထဲမှာ `try/catch` block ပါဝင်ပြီး API က data ပြန်လာတဲ့အခါ promise တစ်ခု return လုပ်ပါမယ်။ API က data ပြန်လာမယ့်အမြန်နှုန်းကို သင်ထိန်းချုပ်လို့မရတဲ့အတွက် (တစ်ခါတစ်လေတော့ response မရနိုင်ပါဘူး) asynchronous ဖြစ်အောင်ရေးထားတာပါ။
- co2signal API ကို သင့် region ရဲ့ data ကိုရယူဖို့ query လုပ်ပါတယ်၊ သင့် API Key ကို အသုံးပြုဖို့ header parameters ထဲမှာ authentication အမျိုးအစားတစ်ခုလိုအပ်ပါတယ်။
- API က response ပြန်လာတဲ့အခါ၊ response data ရဲ့ အစိတ်အပိုင်းတွေကို သင့် screen ရဲ့ data ပြသဖို့ သတ်မှတ်ထားတဲ့နေရာတွေမှာ assign လုပ်ပါတယ်။
- error ဖြစ်ခဲ့ရင် သို့မဟုတ် ရလဒ်မရှိခဲ့ရင် error message ကို ပြသပါတယ်။

✅ asynchronous programming patterns ကို သင့် toolbox ထဲမှာ ထည့်သွင်းထားဖို့ အရေးကြီးပါတယ်။ ဒီလို code ကို configure လုပ်နိုင်တဲ့ နည်းလမ်းမျိုးစုံကို [ဖတ်ရှုပါ](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)။

ဂုဏ်ယူပါတယ်! သင့် extension ကို build (`npm run build`) လုပ်ပြီး၊ extensions pane မှာ refresh လုပ်ပါက သင့် extension အလုပ်လုပ်နေပါပြီ! icon ကတော့ အလုပ်မလုပ်သေးပါဘူး၊ နောက်သင်ခန်းစာမှာ ပြင်ဆင်ပါမယ်။

---

## 🚀 စိန်ခေါ်မှု

ဒီသင်ခန်းစာတွေမှာ API အမျိုးအစားအတော်များများကို ဆွေးနွေးခဲ့ပါတယ်။ web API တစ်ခုကို ရွေးပြီး အနက်ရှိုင်းဆုံး သုတေသနလုပ်ပါ။ ဥပမာအားဖြင့် browser တွေထဲမှာ ရရှိနိုင်တဲ့ [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) ကိုကြည့်ပါ။ သင့်အမြင်မှာ API တစ်ခုက ဘယ်လိုဖြစ်ရင် အကောင်းဆုံးဖြစ်မလဲ?

## မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု

[မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/26)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

ဒီသင်ခန်းစာမှာ LocalStorage နဲ့ APIs အကြောင်း သင်ယူခဲ့ပါတယ်၊ professional web developer အတွက် အလွန်အသုံးဝင်ပါတယ်။ ဒီနှစ်ခုက ဘယ်လိုပေါင်းစပ်လုပ်ဆောင်နိုင်မလဲဆိုတာ စဉ်းစားကြည့်ပါ။ API ကို အသုံးပြုဖို့အတွက် items တွေကို သိမ်းဆည်းမယ့် web site တစ်ခုကို ဘယ်လို architect လုပ်မလဲဆိုတာ စဉ်းစားပါ။

## လုပ်ငန်း

[Adopt an API](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။