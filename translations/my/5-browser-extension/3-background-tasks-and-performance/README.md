<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:35:37+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "my"
}
-->
# Browser Extension Project Part 3: Background Tasks နှင့် Performance ကိုလေ့လာပါ

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/27)

### အကျဉ်းချုပ်

ဒီ module ရဲ့ နောက်ဆုံးသော သင်ခန်းစာနှစ်ခုမှာ API ကနေ ဒေတာကို ရယူပြီး ဖောင်နှင့် ပြသရာကို ဘယ်လိုတည်ဆောက်ရမယ်ဆိုတာကို သင်လေ့လာခဲ့ပါတယ်။ ဒါဟာ အင်တာနက်ပေါ်မှာ ဝက်ဘ်ဆိုဒ်တစ်ခုကို ဖန်တီးတဲ့ အခြေခံနည်းလမ်းတစ်ခုဖြစ်ပါတယ်။ ဒါ့အပြင် ဒေတာကို asynchronous နည်းလမ်းနဲ့ fetch လုပ်တဲ့အခါ ဘယ်လိုကိုင်တွယ်ရမယ်ဆိုတာကိုလည်း သင်လေ့လာခဲ့ပါတယ်။ သင့် browser extension ဟာ အနီးကပ်ပြီးစီးသွားပါပြီ။

အခုတော့ background tasks တချို့ကို စီမံခန့်ခွဲဖို့လိုအပ်ပါတယ်၊ အထူးသဖြင့် extension ရဲ့ icon အရောင်ကို refresh လုပ်တာပါ။ ဒါကြောင့် browser က ဒီလို tasks တွေကို ဘယ်လိုစီမံခန့်ခွဲတယ်ဆိုတာကို ဆွေးနွေးဖို့ အချိန်ကောင်းတစ်ခုဖြစ်ပါတယ်။ သင့် web assets တွေကို တည်ဆောက်တဲ့အခါ performance ရဲ့ context မှာ browser tasks တွေကို စဉ်းစားကြည့်ရအောင်။

## Web Performance အခြေခံ

> "Website performance ဆိုတာ နှစ်ခုပဲရှိတယ် - စာမျက်နှာကို ဘယ်လောက်မြန်မြန် load လုပ်နိုင်တယ်၊ အဲဒီမှာရှိတဲ့ code ကို ဘယ်လောက်မြန်မြန် run လုပ်နိုင်တယ်ဆိုတာပဲ။" -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Website တွေကို အမျိုးမျိုးသော device တွေ၊ user တွေ၊ situation တွေမှာ အလွန်မြန်ဆန်စွာ run လုပ်နိုင်အောင် ဘယ်လိုလုပ်ရမယ်ဆိုတာဟာ အလွန်ကျယ်ပြန့်တဲ့ ခေါင်းစဉ်တစ်ခုဖြစ်ပါတယ်။ သင့် browser extension သို့မဟုတ် ဝက်ဘ် project တစ်ခုကို တည်ဆောက်တဲ့အခါ သတိထားစရာအချက်အချို့ကို အောက်မှာဖော်ပြထားပါတယ်။

သင့် site ကို ထိရောက်စွာ run လုပ်နိုင်အောင်လုပ်ဖို့ ပထမဆုံး လိုအပ်တာက performance data ကို စုဆောင်းရပါမယ်။ ဒီအချက်အလက်တွေကို ရယူဖို့ ပထမဆုံးနေရာက သင့် web browser ရဲ့ developer tools ဖြစ်ပါတယ်။ Edge browser မှာ "Settings and more" button (browser ရဲ့ အပေါ်ယာဘက်မှာရှိတဲ့ သုံးချက် icon) ကိုရွေးပြီး More Tools > Developer Tools ကိုသွားပြီး Performance tab ကိုဖွင့်ပါ။ Windows မှာ `Ctrl` + `Shift` + `I` သို့မဟုတ် Mac မှာ `Option` + `Command` + `I` ကို အသုံးပြုပြီး developer tools ကိုဖွင့်နိုင်ပါတယ်။

Performance tab မှာ Profiling tool ပါဝင်ပါတယ်။ Website တစ်ခုကိုဖွင့်ပါ (ဥပမာ [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon))၊ 'Record' button ကိုနှိပ်ပြီး site ကို refresh လုပ်ပါ။ Record ကို မည်သည့်အချိန်တွင်မဆို ရပ်နိုင်ပြီး 'script', 'render', 'paint' routines တွေကို ကြည့်နိုင်ပါမယ်။

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.my.png)

✅ [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) ကိုဖွင့်ပြီး Edge ရဲ့ Performance panel ကိုလေ့လာပါ။

> အကြံပြုချက်: သင့် website ရဲ့ startup time ကို တိကျစွာဖော်ပြဖို့ browser ရဲ့ cache ကို ရှင်းလင်းပါ။

Profile timeline ရဲ့ element တွေကိုရွေးပြီး page load ဖြစ်တဲ့အချိန်မှာ ဖြစ်ပျက်တဲ့ event တွေကို zoom လုပ်ကြည့်ပါ။

Profile timeline ရဲ့ အပိုင်းတစ်ခုကိုရွေးပြီး summary pane မှာ page performance ရဲ့ snapshot ကိုကြည့်ပါ။

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.my.png)

Event Log pane ကိုစစ်ဆေးပြီး event တစ်ခုခု 15 ms ထက်ပိုကြာနေမလားကြည့်ပါ။

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.my.png)

✅ Profiler ကိုနားလည်ပါ! ဒီ site ရဲ့ developer tools ကိုဖွင့်ပြီး bottleneck တွေရှိမရှိစစ်ဆေးပါ။ အမြန်ဆုံး load လုပ်တဲ့ asset က ဘာလဲ? အနှေးဆုံးက ဘာလဲ?

## Profiling checks

အထွေထွေအားဖြင့် site တစ်ခုကို production မှာ deploy လုပ်တဲ့အခါ အဆင်မပြေတဲ့အရာတွေမဖြစ်စေရန် web developer တစ်ဦးအနေနဲ့ သတိထားရမယ့် "problem areas" တွေရှိပါတယ်။

**Asset sizes**: အခုနှစ်တွေမှာ web ဟာ "လေး"လာပြီး အနှေးလာပါတယ်။ အဲဒီအလေးချိန်ရဲ့ အချို့က images တွေကို အသုံးပြုတာနဲ့ ဆက်စပ်ပါတယ်။

✅ [Internet Archive](https://httparchive.org/reports/page-weight) ကိုကြည့်ပြီး page weight ရဲ့ သမိုင်းကြောင်းကိုလေ့လာပါ။

အကောင်းဆုံးနည်းလမ်းက သင့် images တွေကို optimize လုပ်ပြီး user တွေကို သင့်တော်တဲ့ size နဲ့ resolution နဲ့ပေးပို့ပါ။

**DOM traversals**: Browser ဟာ သင့်ရေးထားတဲ့ code အပေါ်မူတည်ပြီး Document Object Model ကို တည်ဆောက်ရပါတယ်။ ဒါကြောင့် page performance ကိုကောင်းမွန်စေဖို့ tags တွေကို လိုအပ်သလောက်သာအသုံးပြုပါ။ အဲဒီအချက်နဲ့ပတ်သက်ပြီး page တစ်ခုမှာသာအသုံးပြုရမယ့် styles တွေကို main style sheet မှာထည့်စရာမလိုပါဘူး။

**JavaScript**: JavaScript developer တစ်ဦးအနေနဲ့ 'render-blocking' scripts တွေကို သတိထားရပါမယ်။ အဲဒီ scripts တွေကို DOM ကို traverse လုပ်ပြီး browser မှာ paint လုပ်မယ့်အခါ load လုပ်ရပါမယ်။ `defer` ကို inline scripts တွေမှာအသုံးပြုပါ (Terrarium module မှာလုပ်ထားသလို)။

✅ [Site Speed Test website](https://www.webpagetest.org/) မှာ ဝက်ဘ်ဆိုဒ်တစ်ချို့ကိုစမ်းကြည့်ပြီး site performance ကိုသတ်မှတ်ဖို့ လုပ်ရတဲ့ common checks တွေကိုလေ့လာပါ။

Browser ဟာ သင့်ပေးပို့တဲ့ assets တွေကို render လုပ်တဲ့နည်းလမ်းကို နားလည်ပြီးရင် extension ကိုပြီးစီးဖို့ လုပ်ရမယ့်အရာတွေကိုကြည့်ရအောင်:

### Color ကိုတွက်ချက်ဖို့ function တစ်ခုဖန်တီးပါ

`/src/index.js` မှာ `calculateColor()` ဆိုတဲ့ function ကို DOM ကို access လုပ်ဖို့ သတ်မှတ်ထားတဲ့ `const` variables တွေပြီးရင်ထည့်ပါ:

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

ဒီမှာ ဘာဖြစ်နေလဲ? API call မှာရရှိတဲ့ carbon intensity value ကို pass လုပ်ပြီး colors array မှာရှိတဲ့ index နဲ့ value ရဲ့နီးစပ်မှုကိုတွက်ချက်ပါတယ်။ ပြီးရင် အနီးဆုံး color value ကို chrome runtime ကိုပို့ပါတယ်။

chrome.runtime မှာ background tasks အမျိုးမျိုးကို handle လုပ်တဲ့ [API](https://developer.chrome.com/extensions/runtime) ရှိပါတယ်၊ သင့် extension က ဒီ API ကိုအသုံးပြုပါတယ်:

> "chrome.runtime API ကို အသုံးပြုပြီး background page ကို retrieve လုပ်ပါ၊ manifest ရဲ့ details တွေကို return လုပ်ပါ၊ app သို့မဟုတ် extension lifecycle မှာဖြစ်ပျက်တဲ့ events တွေကို နားထောင်ပြီး တုံ့ပြန်ပါ။ URL တွေကို fully-qualified URLs အဖြစ်ပြောင်းဖို့လည်း ဒီ API ကိုအသုံးပြုနိုင်ပါတယ်။"

✅ Edge အတွက် browser extension ကို develop လုပ်နေရင် chrome API ကိုအသုံးပြုနေရတာအံ့ဩစရာဖြစ်နိုင်ပါတယ်။ Edge ရဲ့ နောက်ဆုံး browser version တွေဟာ Chromium browser engine ပေါ်မှာ run လုပ်တာကြောင့် ဒီ tools တွေကိုအသုံးပြုနိုင်ပါတယ်။

> မှတ်ချက် - browser extension ကို profile လုပ်ချင်ရင် extension ကိုယ်တိုင်ရဲ့ dev tools ကိုဖွင့်ပါ၊ အဲဒါဟာ browser instance သီးသန့်တစ်ခုဖြစ်ပါတယ်။

### Default icon color ကိုသတ်မှတ်ပါ

အခုတော့ `init()` function မှာ icon ကို generic green အဖြစ်စတင်သတ်မှတ်ပါ၊ chrome ရဲ့ `updateIcon` action ကိုပြန်ခေါ်ပါ:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Function ကိုခေါ်ပြီး call ကို execute လုပ်ပါ

နောက်ဆုံးတော့ သင်ဖန်တီးထားတဲ့ function ကို C02Signal API က promise return လုပ်တဲ့နေရာမှာခေါ်ပါ:

```JavaScript
//let CO2...
calculateColor(CO2);
```

နောက်ဆုံးမှာ `/dist/background.js` မှာ background action calls တွေကိုနားထောင်ဖို့ listener ကိုထည့်ပါ:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = new OffscreenCanvas(200, 200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
ဒီ code မှာ backend task manager ကို message တစ်ခုခုလာရောက်တဲ့အခါ listener ကိုထည့်ထားပါတယ်။ 'updateIcon' လို့ခေါ်ရင်တော့ Canvas API ကိုအသုံးပြုပြီး သင့်အရောင်နဲ့ icon ကို draw လုပ်တဲ့ code ကို run လုပ်ပါတယ်။

✅ Canvas API ကို [Space Game lessons](../../6-space-game/2-drawing-to-canvas/README.md) မှာပိုမိုလေ့လာနိုင်ပါမယ်။

အခုတော့ သင့် extension ကိုပြန်တည်ဆောက်ပါ (`npm run build`), refresh လုပ်ပြီး extension ကိုဖွင့်ပါ၊ အရောင်ပြောင်းလဲမှုကိုကြည့်ပါ။ အခုတော့ errands သွားလုပ်ဖို့ သို့မဟုတ် ပန်းကန်ဆေးဖို့အချိန်ကောင်းလား? အခုတော့သိပါပြီ!

ဂုဏ်ယူပါတယ်၊ သင့် browser extension ကိုအသုံးဝင်တဲ့အဆင့်တစ်ခုအထိတည်ဆောက်ပြီး browser ရဲ့လုပ်ဆောင်ပုံနဲ့ performance ကို profile လုပ်နည်းကိုပိုမိုနားလည်သွားပါပြီ။

---

## 🚀 Challenge

အချိန်ကြာရှည်တည်ရှိနေတဲ့ open source websites တချို့ကိုစစ်ဆေးပြီး၊ GitHub history အပေါ်မူတည်ပြီး performance အတွက် optimization လုပ်ခဲ့တာရှိမရှိစစ်ဆေးပါ။ အများဆုံး pain point ကဘာလဲ?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/28)

## Review & Self Study

[performance newsletter](https://perf.email/) မှာ sign up လုပ်ဖို့စဉ်းစားပါ။

Browser တွေက web performance ကိုဘယ်လိုအကဲဖြတ်တယ်ဆိုတာကို web tools ရဲ့ performance tabs တွေကိုကြည့်ပြီးလေ့လာပါ။ အဓိကကွာခြားချက်တွေရှိလား?

## Assignment

[Analyze a site for performance](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။