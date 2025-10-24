<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T17:00:57+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "my"
}
-->
# Browser Extension Project Part 3: Background Tasks နှင့် စွမ်းဆောင်ရည်ကို လေ့လာပါ

တချို့ Browser Extension တွေက အလွန်လျင်မြန်ပြီး တုံ့ပြန်မှုကောင်းကောင်းရှိတယ်၊ တချို့ကတော့ အလွန်နှေးကွေးနေတယ်ဆိုတာကို သတိထားမိပါသလား။ အဓိကလျှို့ဝှက်ချက်က နောက်ကွယ်မှာ ဖြစ်ပျက်နေတဲ့ အရာတွေမှာ ရှိပါတယ်။ အသုံးပြုသူတွေက သင့် Extension ရဲ့ Interface ကိုနှိပ်နေချိန်မှာပဲ Data Fetching, Icon Update, System Resources စတာတွေကို တိတ်တိတ်ဆိတ်ဆိတ် စီမံခန့်ခွဲနေပါတယ်။

ဒီဟာက Browser Extension စီးရီးရဲ့ နောက်ဆုံးသင်ခန်းစာဖြစ်ပြီး သင့် Carbon Footprint Tracker ကို အဆင်ပြေပြေ အလုပ်လုပ်အောင် ပြုလုပ်ပေးမှာပါ။ သင့် Extension Icon ကို Dynamic Update လုပ်ပေးပြီး Performance Issue တွေကို ပြဿနာဖြစ်လာခင်မှာပဲ သတိထားမိနိုင်ဖို့ လေ့လာသင်ယူမှာပါ။ ဒါဟာ Racing Car ကို Tune လုပ်တာနဲ့တူတယ် - Optimization အနည်းငယ်ပဲလုပ်ပေမယ့် အားလုံးအဆင်ပြေစေဖို့ အရေးကြီးပါတယ်။

ဒီသင်ခန်းစာပြီးဆုံးတဲ့အခါမှာ သင့်မှာ Polished Extension ရှိပြီး Web App ကောင်းတွေကို Great App တွေဖြစ်စေတဲ့ Performance Principles တွေကို နားလည်သွားပါလိမ့်မယ်။ Browser Optimization ရဲ့ ကမ္ဘာကို စတင်လေ့လာကြရအောင်။

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduction

ယခင်သင်ခန်းစာတွေမှာ သင် Form တစ်ခုကို တည်ဆောက်ပြီး API နဲ့ချိတ်ဆက်ပြီး Asynchronous Data Fetching ကို ဖြေရှင်းခဲ့ပါတယ်။ သင့် Extension က အဆင်ပြေစွာ အဆင့်ဆင့် တည်ဆောက်နေပါတယ်။

အခုတော့ နောက်ဆုံး Touch တွေကို ထည့်သွင်းဖို့လိုပါတယ် - Carbon Data အပေါ်မူတည်ပြီး Extension Icon ရဲ့ အရောင်ကို ပြောင်းပေးဖို့လိုပါတယ်။ NASA က Apollo Spacecraft ရဲ့ System တွေကို Optimize လုပ်ဖို့လိုခဲ့တာကို သတိရပါတယ်။ သူတို့အတွက် Memory နဲ့ Cycle တွေကို အလဟသုံးဖို့ မဖြစ်နိုင်ခဲ့ပါဘူး။ Browser Extension က အရေးကြီးတဲ့အရာမဟုတ်ပေမယ့် အတူတူသော Principles တွေကို အသုံးပြုရပါတယ် - Code ကို အကျိုးရှိရှိရေးသားခြင်းက User Experience ကို ပိုကောင်းစေပါတယ်။

## Web Performance Basics

Code ကို အကျိုးရှိရှိ အလုပ်လုပ်စေတဲ့အခါမှာ လူတွေက *ခံစား*နိုင်ပါတယ်။ Page တစ်ခု အလျင်အမြန် Load ဖြစ်တာ၊ Animation တွေ Smooth ဖြစ်တာကို သတိထားမိတဲ့အခါမှာ Performance ကောင်းတဲ့အချိန်ပါပဲ။

Performance က Speed ပေါ်မှာပဲ မူတည်တာမဟုတ်ပါဘူး - Web Experience တွေကို Clunky နဲ့ စိတ်ညစ်စရာကင်းပြီး သဘာဝကျကျ ဖြစ်စေဖို့ပါ။ Computing ရဲ့ Early Days မှာ Grace Hopper က Nanosecond (အလျားတစ်ပေရှိတဲ့ Wire) ကို သူ့ Desk ပေါ်မှာထားပြီး Computing မှာ Microsecond တစ်ခုချင်းစီက အရေးကြီးကြောင်း ရှင်းပြခဲ့ပါတယ်။ အခုတော့ Performance ကို Slow ဖြစ်စေတဲ့အရာတွေကို ရှာဖွေဖို့ Detective Tools တွေကို လေ့လာကြရအောင်။

> "Website performance ဆိုတာက Page Load ဖြစ်တဲ့အမြန်နှုန်းနဲ့ Code အလုပ်လုပ်တဲ့အမြန်နှုန်းနှစ်ခုကို ဆိုလိုတာပါ။" -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Website တွေကို Device အမျိုးမျိုး၊ User အမျိုးမျိုး၊ Situation အမျိုးမျိုးမှာ အလျင်အမြန် အလုပ်လုပ်စေဖို့အတွက် အကြောင်းအရာက အလွန်ကျယ်ပြန့်ပါတယ်။ Standard Web Project တစ်ခုဖြစ်စေ၊ Browser Extension တစ်ခုဖြစ်စေ တည်ဆောက်တဲ့အခါမှာ သတိထားစရာအချက်တွေကို အောက်မှာ ဖော်ပြထားပါတယ်။

Site ကို Optimize လုပ်ဖို့ ပထမဆုံးအဆင့်က အတိအကျ ဘာတွေဖြစ်ပျက်နေလဲဆိုတာကို နားလည်ဖို့ပါ။ ကံကောင်းစွာ Browser တွေမှာ အလွန်အစွမ်းထက်တဲ့ Detective Tools တွေ Built-in ပါဝင်ပါတယ်။

Edge မှာ Developer Tools ကို ဖွင့်ဖို့ Top Right က Three Dots ကို Click လုပ်ပြီး More Tools > Developer Tools ကို သွားပါ။ ဒါမှမဟုတ် Keyboard Shortcut ကို အသုံးပြုပါ - `Ctrl` + `Shift` + `I` (Windows) သို့မဟုတ် `Option` + `Command` + `I` (Mac)။ အဲဒီမှာ Performance Tab ကို Click လုပ်ပါ - ဒီမှာပဲ သင့် Investigation ကို စတင်ပါမယ်။

**Performance Detective Toolkit:**
- **Developer Tools ကို ဖွင့်ပါ** (Developer အနေနဲ့ အမြဲအသုံးပြုရမယ့် Tools ပါ!)
- **Performance Tab ကို သွားပါ** - Web App ရဲ့ Fitness Tracker လို့ ထင်ပါ
- **Record Button ကို နှိပ်ပြီး Page ရဲ့ လှုပ်ရှားမှုကို ကြည့်ပါ**
- **ရလဒ်တွေကို လေ့လာပြီး Slow ဖြစ်စေတဲ့အရာတွေကို ရှာပါ**

Website တစ်ခု (Microsoft.com ကောင်းပါတယ်) ကို ဖွင့်ပြီး 'Record' Button ကို Click လုပ်ပါ။ အခု Page ကို Refresh လုပ်ပြီး Profiler က ဖြစ်ပျက်နေတဲ့အရာတွေကို Capture လုပ်တာကို ကြည့်ပါ။ Recording ကို ရပ်ပြီးတဲ့အခါမှာ Browser က Site ကို 'Scripts', 'Renders', 'Paints' လုပ်တဲ့အချိန်ကို အချိန်နှင့်တစ်ပြေးညီ Data တွေကို Breakdown လုပ်ပြီး ပြသပေးပါလိမ့်မယ်။ Rocket Launch အချိန်မှာ Mission Control က System တွေကို Monitor လုပ်တဲ့အတိုင်းပဲ - ဘာတွေဖြစ်နေလဲ၊ ဘယ်အချိန်မှာဖြစ်နေလဲဆိုတာကို Real-Time Data ရနိုင်ပါတယ်။

✅ [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) မှာ အခြေခံအချက်အလက်တွေကို ပိုမိုလေ့လာနိုင်ပါတယ်။

> Pro Tip: Browser Cache ကို Clear လုပ်ပြီး Testing လုပ်ပါ။ Site ရဲ့ First-Time Visitor တွေအတွက် Performance က Repeat Visitor တွေထက် အတော်လေး ကွာခြားပါတယ်။

Profile Timeline ရဲ့ Element တွေကို Select လုပ်ပြီး Page Load ဖြစ်တဲ့အချိန်မှာ ဖြစ်ပျက်နေတဲ့ Event တွေကို Zoom လုပ်ကြည့်ပါ။

Profile Timeline ရဲ့ အပိုင်းတစ်ခုကို Select လုပ်ပြီး Summary Pane မှာ Page Performance ရဲ့ Snapshot ကို ကြည့်ပါ:

Event Log Pane မှာ Event တစ်ခုခု 15 ms ထက်ပိုကြာနေမလား စစ်ဆေးပါ:

✅ Profiler ကို နားလည်ပါ! ဒီ Site ရဲ့ Developer Tools ကို ဖွင့်ပြီး Bottleneck တွေ ရှိမရှိ စစ်ဆေးပါ။ အမြန်ဆုံး Loading Asset နဲ့ အနှေးဆုံး Asset ကို ရှာပါ။

## Profiling လုပ်တဲ့အခါမှာ ရှာဖွေရမယ့်အရာတွေ

Profiler ကို Run လုပ်တာက စတင်ခြင်းသာဖြစ်ပါတယ် - အဓိက Skill ကတော့ အဲဒီ Colorful Charts တွေက ဘာကို ပြောပြနေတယ်ဆိုတာကို နားလည်နိုင်ဖို့ပါ။ စိုးရိမ်စရာမလိုပါဘူး၊ အဲဒီ Chart တွေကို ဖတ်ရှုနိုင်ဖို့ သင်တတ်လာပါလိမ့်မယ်။ အတွေ့အကြုံရှိတဲ့ Developer တွေက Warning Sign တွေကို ပြဿနာဖြစ်လာခင်မှာပဲ သတိထားမိတတ်ကြပါတယ်။

Performance ကို Down လုပ်စေတဲ့ Trouble Maker တွေကို ပြောကြရအောင်။ Marie Curie က သူ့ Lab မှာ Radiation Level တွေကို သေချာစွာ Monitor လုပ်ခဲ့သလိုပဲ၊ Web Project တွေမှာ ပြဿနာဖြစ်စေတဲ့ Pattern တွေကို သတိထားဖို့လိုပါတယ်။ အစောပိုင်းမှာ အဲဒီ Pattern တွေကို ရှာဖွေမိတာက သင့်အတွက် (နဲ့ သင့် User တွေအတွက်) အတော်လေး အကျိုးရှိပါတယ်။

**Asset Sizes**: Website တွေဟာ နှစ်အတော်ကြာလာတာနဲ့ "လေး"လာတာကို တွေ့ရပါတယ်။ အဲဒီအလေးတွေက Images တွေကနေ အများဆုံးဖြစ်လာပါတယ်။ Digital Suitcase တွေထဲမှာ ပစ္စည်းတွေကို အများကြီးထည့်ထားသလိုပါပဲ။

✅ [Internet Archive](https://httparchive.org/reports/page-weight) ကို သွားကြည့်ပါ။ Page Size တွေ ဘယ်လိုကြီးလာတယ်ဆိုတာကို သိနိုင်ပါတယ်။

**Asset Optimization လုပ်နည်း:**
- **Images တွေကို Compress လုပ်ပါ**! WebP Formats က File Size တွေကို အတော်လေးလျှော့စေပါတယ်
- **Device တစ်ခုချင်းစီအတွက် Image Size ကို သင့်တော်တဲ့အတိုင်းပေးပါ** - Phone တွေကို Desktop Image ใหုပ်ကြီးတွေ မပေးပါနဲ့
- **CSS နဲ့ JavaScript ကို Minify လုပ်ပါ** - Byte တစ်ခုချင်းစီက အရေးကြီးပါတယ်
- **Lazy Loading ကို အသုံးပြုပါ** - User တွေ Scroll လုပ်တဲ့အခါမှာ Images တွေ Download ဖြစ်စေပါ

**DOM Traversals**: Browser က သင့် Code အပေါ်မူတည်ပြီး Document Object Model ကို Build လုပ်ရပါတယ်။ Page Performance ကောင်းဖို့ Tag တွေကို အနည်းဆုံးထားပြီး Page ရဲ့လိုအပ်ချက်အတိုင်းသာ Style တွေကို အသုံးပြုပါ။ Page တစ်ခုမှာသာလိုအပ်တဲ့ Style တွေကို Main Style Sheet မှာ မထည့်ပါနဲ့။

**DOM Optimization Strategy:**
- **HTML Element နဲ့ Nesting Level တွေကို အနည်းဆုံးထားပါ**
- **မလိုအပ်တဲ့ CSS Rules တွေကို ဖယ်ရှားပြီး Stylesheet တွေကို အကျိုးရှိရှိ Consolidate လုပ်ပါ**
- **Page တစ်ခုချင်းစီအတွက်လိုအပ်တဲ့ CSS ကိုသာ Load လုပ်ပါ**
- **HTML ကို Semantically Structure လုပ်ပါ** - Browser Parsing ကောင်းစေဖို့

**JavaScript**: JavaScript Developer တစ်ယောက်အနေနဲ့ 'Render-Blocking' Script တွေကို သတိထားပါ။ DOM ကို Traverse နဲ့ Paint လုပ်မယ့်အခါမှာ Script တွေ Load ဖြစ်ဖို့လိုပါတယ်။ Terrarium Module မှာလို `defer` ကို Inline Script တွေနဲ့ အသုံးပြုပါ။

**Modern JavaScript Optimization Techniques:**
- **`defer` Attribute ကို အသုံးပြုပါ** - DOM Parsing ပြီးမှ Script Load ဖြစ်စေပါ
- **Code Splitting ကို အသုံးပြုပါ** - လိုအပ်တဲ့ JavaScript ကိုသာ Load လုပ်ပါ
- **Non-Critical Functionality အတွက် Lazy Loading ကို အသုံးပြုပါ**
- **Heavy Libraries နဲ့ Frameworks ကို အနည်းဆုံး အသုံးပြုပါ**

✅ [Site Speed Test Website](https://www.webpagetest.org/) မှာ Site Performance ကို စစ်ဆေးတဲ့ Common Checks တွေကို လေ့လာပါ။

Browser က သင့် Assets တွေကို Render လုပ်တဲ့နည်းလမ်းကို နားလည်ပြီးတဲ့အခါမှာ Extension ကို ပြီးမြောက်စေဖို့ လုပ်ရမယ့် အခြားအရာတွေကို ကြည့်ကြရအောင်:

### Color ကို Calculate လုပ်တဲ့ Function တစ်ခု Create လုပ်ပါ

အခုတော့ Numerical Data ကို အဓိပ္ပါယ်ရှိတဲ့ Colors တွေဖြစ်အောင် ပြောင်းပေးတဲ့ Function တစ်ခုကို Create လုပ်ပါမယ်။ Traffic Light System လို့ ထင်ပါ - Clean Energy အတွက် Green, High Carbon Intensity အတွက် Red ဖြစ်ပါတယ်။

ဒီ Function က API ကနေ CO2 Data ကို ယူပြီး Environmental Impact ကို ကိုယ်စားပြုတဲ့ အရောင်ကို ဆုံးဖြတ်ပေးပါမယ်။ Ocean Temperature ကနေ Star Formation အထိ Complex Data Pattern တွေကို Visualize လုပ်ဖို့ Scientist တွေ Color-Coding ကို အသုံးပြုတဲ့နည်းနဲ့ တူပါတယ်။ `/src/index.js` မှာ `const` Variables တွေ Setup လုပ်ပြီးတဲ့နောက်မှာ ဒီ Function ကို ထည့်ပါ:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**ဒီ Function ရဲ့ Clever Breakdown:**
- **CO2 Levels အတွက် Array နှစ်ခု Setup လုပ်ပါ** - Green = Clean, Brown = Dirty!
- **Actual CO2 Value နဲ့ Closest Match ကို Array Sorting နဲ့ ရှာပါ**
- **findIndex() Method ကို အသုံးပြုပြီး Matching Color ကို ရယူပါ**
- **Chrome Background Script ကို Message ပို့ပါ**
- **Template Literals (Backticks) ကို အသုံးပြုပြီး String Formatting ကို ကောင်းစေပါ**
- **Const Declaration တွေကို အသုံးပြုပြီး အရာအားလုံးကို စနစ်တကျထားပါ**

`chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) က Extension ရဲ့ Nervous System လို့ ဆိုလို့ရပါတယ် - Communication နဲ့ Tasks တွေကို နောက်ကွယ်မှာ Handle လုပ်ပေးပါတယ်:

> "chrome.runtime API ကို Background Page ကို Retrieve လုပ်ဖို့၊ Manifest ရဲ့ Details တွေကို Return လုပ်ဖို့၊ App သို့မဟုတ် Extension Lifecycle မှာ Event တွေကို Listen နဲ့ Respond လုပ်ဖို့ အသုံးပြုပါ။ URL တွေကို Fully-Qualified URLs ပြောင်းဖို့လည်း API ကို အသုံးပြုနိုင်ပါတယ်။"

**Chrome Runtime API ရဲ့ အကျိုးကျေးဇူး:**
- **Extension ရဲ့ အစိတ်အပိုင်းတွေကို အချင်းချင်း ဆက်သွယ်စေပါတယ်**
- **User Interface ကို Freeze မဖြစ်စေဘဲ Background Work တွေကို Handle လုပ်ပါတယ်**
- **Extension ရဲ့ Lifecycle Event တွေကို စီမံခန့်ခွဲပါတယ်**
- **Scripts တွေကြား Message Passing ကို အလွယ်ကူဆုံးဖြစ်စေပါတယ်**

✅ Edge အတွက် Browser Extension ကို Develop လုပ်နေတဲ့အခါမှာ Chrome API ကို အသုံးပြုနေရတာ အံ့ဩစရာ ဖြစ်နိုင်ပါတယ်။ Edge Browser ရဲ့ နောက်ဆုံး Version တွေဟာ Chromium Browser Engine ပေါ်မှာ Run ဖြစ်တာကြောင့် ဒီ Tools တွေကို အသုံးပြုနိုင်ပါတယ်။

> **Pro Tip**: Browser Extension ကို Profile လုပ်ချင်ရင် Extension ကို Launch လုပ်ပြီး Dev Tools ကို Extension ထဲကနေ ဖွင့်ပါ။ Extension-specific Performance Metrics တွေကို Access ရနိုင်ပါတယ်။

### Default Icon Color ကို Set လုပ်ပါ

Real Data ကို Fetch လုပ်မတိုင်ခင်မှာ Extension ရဲ့ Starting Point ကို ပေးပါ။ Broken-looking Icon ကို ကြည့်ရတာကို မည်သူမျှ မကြိုက်ပါဘူး။ Green Color ကို Default အနေနဲ့ Start လုပ်ပါ - Extension ကို Install လုပ်တဲ့အချိန်မှာ အလုပ်လုပ်နေတယ်ဆိုတာ User တွေသိစေပါ။

`init()` Function မှာ Default Green Icon ကို Setup လုပ်ပါ:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Initialization ရဲ့ အကျိုးကျေးဇူး:**
- **Default State အနေနဲ့ Neutral Green Color ကို Set လုပ်ပါ**
- **Extension Load ဖြစ်တဲ့အချိန်မှာ Visual Feedback ကို ပေးပါ**
- **Background Script နဲ့ Communication Pattern ကို Establish လုပ်ပါ**
- **Data Load မဖြစ်ခင် Functional Extension ကို User တွေကြည့်နိုင်စေပါ**

### Function ကို Call လုပ်ပြီး Call ကို Execute လုပ်ပါ

အခုတော့ CO2 Data အသစ်ရလာတဲ့အခါမှာ Icon ကို အရောင်မှန်မှန် Update လုပ်စေဖို့ အားလုံးကို ချိတ်ဆက်ပါမယ်။ Electronic Device တစ်ခုရဲ့ Circuit ကို ချိတ်ဆက်တဲ့အခါမှာ Components တွေ အားလုံး System တစ်ခုအဖြစ် အလုပ်လုပ်လာတာနဲ့တူပါတယ်။

API ကနေ CO2 Data ရလာတဲ့နောက်မှာ ဒီ Line ကို ထည့်ပါ:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Integration ရဲ့ အကျိုးကျေးဇူး:**
- **API Data Flow ကို Visual Indicator System နဲ့ ချိတ်ဆက်ပါ**
- **New Data ရလာတဲ့အခါ Icon Update ကို Automatic Trigger လုပ်ပါ**
- **Current Carbon Intensity အပေါ်မူတည်ပြီး Real-Time Visual Feedback ကို ပေးပါ**
- **Data Fetching နဲ့ Display Logic ကြားမှာ Concern Separation ကို Maintain လုပ်ပါ**

နောက်ဆုံးမှာ `/dist/background.js` မှာ Background Action Calls တွေကို Listener ထည့်ပါ:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Background Script ရဲ့ အလုပ်လုပ်ပုံ:**
- **Main Script က Message တွေကို Listen လုပ်ပါ** (Receptionist တစ်ယောက်လို Call တွေကို လက်ခံပါ)
- **'updateIcon' Request တွေကို Process လုပ်ပြီး Toolbar Icon ကို ပြောင်းပါ**
- **Canvas API ကို အသုံးပြုပြီး New Icons တွေကို On-the-fly Create လုပ်ပါ**
- **Current Carbon Intensity ကို ပြသတဲ့ Colored Circle ကို Draw လုပ်ပါ**
- **Fresh Icon ကို Browser Toolbar မှာ Update လုပ်ပါ**
- **OffscreenCanvas ကို အသုံးပြုပြီး Smooth Performance ရရှိစေပါ (UI
ဒီမှာ စိတ်ဝင်စားဖွယ် ရှာဖွေမှုတစ်ခုရှိပါတယ် - နှစ်ပေါင်းများစွာ ရှိနေတဲ့ open source ဝဘ်ဆိုဒ်များကို (Wikipedia, GitHub, Stack Overflow စသည်တို့ကို စဉ်းစားပါ) ရွေးချယ်ပြီး commit history ကို လေ့လာပါ။ သူတို့ performance တိုးတက်မှုများကို ဘယ်နေရာမှာ ပြုလုပ်ခဲ့ကြောင်း တွေ့နိုင်ပါသလား။ ဘယ်လိုပြဿနာတွေ ဆက်တိုက်ဖြစ်ပေါ်နေခဲ့သလဲ?

**သင့်ရှာဖွေမှုနည်းလမ်း:**
- **ရှာဖွေပါ** commit messages တွေထဲမှာ "optimize," "performance," "faster" စတဲ့ စကားလုံးတွေကို
- **ကြည့်ရှုပါ** pattern တွေကို - သူတို့အမြဲတမ်း ပြင်ဆင်နေတဲ့ ပြဿနာအမျိုးအစားတွေကို တွေ့နိုင်ပါသလား?
- **ဖော်ထုတ်ပါ** ဝဘ်ဆိုဒ်တွေကို နှေးကွေးစေတဲ့ အကြောင်းရင်းများ
- **မျှဝေပါ** သင့်ရှာဖွေမှုတွေကို - အခြား developer တွေက အမှန်တကယ်ဖြစ်ပျက်တဲ့ ဥပမာတွေကနေ သင်ယူနိုင်ပါတယ်

## သင်ခန်းစာပြီးနောက် စမ်းမေးခွန်း

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/28)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

[performance newsletter](https://perf.email/) မှာ စာရင်းသွင်းဖို့ စဉ်းစားပါ

Browser တွေက ဝဘ် performance ကို ဘယ်လိုတိုင်းတာကြောင်းကို သူတို့ရဲ့ web tools ထဲမှာ performance tabs တွေကို ကြည့်ရှုခြင်းအားဖြင့် ရှာဖွေပါ။ အဓိက ကွာခြားချက်တွေ ရှိပါသလား?

## အိမ်စာ

[Analyze a site for performance](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။