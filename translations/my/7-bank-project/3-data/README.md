<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-27T22:00:28+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "my"
}
-->
# ဘဏ်အက်ပ်တည်ဆောက်ခြင်း အပိုင်း ၃: ဒေတာရယူခြင်းနှင့် အသုံးပြုခြင်းနည်းလမ်းများ

## မိန့်ခွန်းမတိုင်မီမေးခွန်းများ

[မိန့်ခွန်းမတိုင်မီမေးခွန်းများ](https://ff-quizzes.netlify.app/web/quiz/45)

### အကျဉ်းချုပ်

ဝက်ဘ်အက်ပ်တစ်ခုရဲ့ အဓိကအချက်က *ဒေတာ* ဖြစ်ပါတယ်။ ဒေတာက အမျိုးမျိုးသောပုံစံများရှိနိုင်ပေမယ့် အဓိကရည်ရွယ်ချက်က အသုံးပြုသူကို အချက်အလက်များကို ပြသပေးခြင်းဖြစ်ပါတယ်။ ဝက်ဘ်အက်ပ်များ ပိုမိုအကျိုးရှိပြီး ရှုပ်ထွေးလာတာနဲ့အမျှ အသုံးပြုသူက အချက်အလက်များကို ရယူခြင်းနှင့် အပြန်အလှန်ဆက်သွယ်ခြင်းနည်းလမ်းက ဝက်ဘ်တိုးတက်မှုရဲ့ အရေးကြီးသောအပိုင်းတစ်ခုဖြစ်လာပါတယ်။

ဒီသင်ခန်းစာမှာတော့ ဒေတာကို server မှ asynchronous နည်းလမ်းဖြင့် ရယူပြီး HTML ကို ပြန်လည် reload မလုပ်ဘဲ ဝက်ဘ်စာမျက်နှာပေါ်မှာ အချက်အလက်များကို ပြသပေးနည်းကို လေ့လာပါမယ်။

### ကြိုတင်လိုအပ်ချက်

ဒီသင်ခန်းစာအတွက် [Login နှင့် Registration Form](../2-forms/README.md) ကို တည်ဆောက်ပြီးသားဖြစ်ရပါမယ်။ [Node.js](https://nodejs.org) ကို install လုပ်ပြီး [server API](../api/README.md) ကို locally run လုပ်ထားဖို့လည်း လိုအပ်ပါတယ်။ ဒါမှ account data ကို ရယူနိုင်ပါမယ်။

server အလုပ်လုပ်နေမှုကို terminal မှာ အောက်ပါ command ကို run လုပ်ပြီး စစ်ဆေးနိုင်ပါတယ်။

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX နှင့် ဒေတာရယူခြင်း

ရိုးရာဝက်ဘ်ဆိုဒ်များမှာ အသုံးပြုသူ link ကိုရွေးချယ်ခြင်း သို့မဟုတ် form ကို submit လုပ်ခြင်းဖြင့် ပြသထားသော content ကို update လုပ်ပြီး HTML စာမျက်နှာကို ပြန်လည် reload လုပ်ပါတယ်။ ဒေတာအသစ်များကို load လုပ်ဖို့လိုအပ်တဲ့အခါမှာ ဝက်ဘ် server က HTML စာမျက်နှာအသစ်တစ်ခုကို ပြန်ပေးပို့ပြီး browser မှ process လုပ်ရပါတယ်။ ဒီလုပ်ငန်းစဉ်က အသုံးပြုသူရဲ့ လက်ရှိလုပ်ဆောင်မှုကို ခေတ္တရပ်တန့်စေပြီး reload အတွင်းမှာ interaction များကို ကန့်သတ်စေပါတယ်။ ဒီ workflow ကို *Multi-Page Application* (MPA) လို့ခေါ်ပါတယ်။

![Multi-page application မှာ update workflow](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.my.png)

ဝက်ဘ်အက်ပ်များ ပိုမိုရှုပ်ထွေးလာတာနဲ့အမျှ [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) ဆိုတဲ့နည်းလမ်းအသစ်တစ်ခု ပေါ်ထွက်လာပါတယ်။ ဒီနည်းလမ်းက JavaScript ကို အသုံးပြုပြီး server မှ ဒေတာကို asynchronous နည်းလမ်းဖြင့် ပို့ပေးခြင်းနှင့် ရယူခြင်းကို HTML စာမျက်နှာကို reload မလုပ်ဘဲ လုပ်ဆောင်နိုင်စေပါတယ်။ ဒေတာအသစ်ကို server မှရရှိတဲ့အခါ JavaScript ကို အသုံးပြုပြီး HTML စာမျက်နှာကို [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API ဖြင့် update လုပ်နိုင်ပါတယ်။ အချိန်ကြာလာတာနဲ့အမျှ ဒီနည်းလမ်းက [*Single-Page Application* (SPA)](https://en.wikipedia.org/wiki/Single-page_application) လို့ခေါ်တဲ့နည်းလမ်းအဖြစ် တိုးတက်လာပါတယ်။

![Single-page application မှာ update workflow](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.my.png)

AJAX ကို ပထမဆုံးမိတ်ဆက်ခဲ့တဲ့အခါ asynchronous ဒေတာရယူဖို့ [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) API တစ်ခုသာ ရရှိနိုင်ခဲ့ပါတယ်။ ဒါပေမယ့် အခေတ်မီ browser များမှာ promises ကို အသုံးပြုပြီး JSON ဒေတာကို ပိုမိုလွယ်ကူစွာ manipulate လုပ်နိုင်တဲ့ [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API) ကို support လုပ်လာပါတယ်။

> အခေတ်မီ browser များအားလုံးက `Fetch API` ကို support လုပ်ပေမယ့် သင့်ဝက်ဘ်အက်ပ်ကို အဟောင်း browser များမှာလည်း အလုပ်လုပ်စေချင်ရင် [caniuse.com](https://caniuse.com/fetch) မှာ compatibility table ကို စစ်ဆေးဖို့ အမြဲကောင်းပါတယ်။

### လုပ်ဆောင်ရန်

[အရင်သင်ခန်းစာ](../2-forms/README.md) မှာ account တစ်ခုကို ဖန်တီးဖို့ registration form ကို implement လုပ်ထားပါတယ်။ အခုတော့ ရှိပြီးသား account ကို အသုံးပြုပြီး login လုပ်ဖို့ code ကို ထည့်သွင်းပါမယ်။ `app.js` ဖိုင်ကို ဖွင့်ပြီး `login` function အသစ်တစ်ခုကို ထည့်ပါ:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

ဒီမှာတော့ form element ကို `getElementById()` ဖြင့် ရယူပြီး `loginForm.user.value` ဖြင့် input မှ username ကို ရယူပါတယ်။ HTML မှာ `name` attribute ဖြင့် သတ်မှတ်ထားသော form control တစ်ခုစီကို form ရဲ့ property အနေနဲ့ access လုပ်နိုင်ပါတယ်။

Registration အတွက် လုပ်ခဲ့သလိုပဲ server request ကို လုပ်ဆောင်ဖို့ function အသစ်တစ်ခုကို ဖန်တီးပါမယ်၊ ဒါပေမယ့် ဒီတစ်ခါမှာတော့ account data ကို ရယူဖို့ဖြစ်ပါတယ်:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

ဒီမှာတော့ server မှ ဒေတာကို asynchronous နည်းလမ်းဖြင့် request လုပ်ဖို့ `fetch` API ကို အသုံးပြုပါတယ်။ ဒေတာကို query လုပ်ဖို့ URL ကိုသာလိုအပ်ပြီး အပို parameters မလိုအပ်ပါဘူး။ `fetch` က default အနေဖြင့် [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP request ကို ဖန်တီးပေးပြီး ဒီမှာလိုအပ်တဲ့အရာဖြစ်ပါတယ်။

✅ `encodeURIComponent()` ဆိုတာ URL အတွက် special characters များကို escape လုပ်ပေးတဲ့ function ဖြစ်ပါတယ်။ ဒီ function ကို မခေါ်ဘဲ `user` value ကို URL မှာ တိုက်ရိုက်အသုံးပြုရင် ဘယ်လိုပြဿနာများဖြစ်နိုင်မလဲ?

အခုတော့ `login` function ကို `getAccount` ကို အသုံးပြုဖို့ update လုပ်ပါမယ်:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

ပထမဆုံး `getAccount` က asynchronous function ဖြစ်တဲ့အတွက် server result ကို စောင့်ဖို့ `await` keyword ကို အသုံးပြုရပါတယ်။ Server request တစ်ခုစီမှာ error ဖြစ်နိုင်မှုကို handle လုပ်ဖို့လိုအပ်ပါတယ်။ အခုတော့ error ကို log message အနေနဲ့သာ ပြသထားပြီး နောက်ပိုင်းမှာ ပြန်လည် handle လုပ်ပါမယ်။

ထို့နောက် dashboard information ကို ပြသဖို့ data ကို တစ်နေရာမှာ သိမ်းဆည်းဖို့လိုအပ်ပါတယ်။ `account` variable မရှိသေးတဲ့အတွက် ဖိုင်ရဲ့ အပေါ်ဆုံးမှာ global variable တစ်ခုကို ဖန်တီးပါမယ်:

```js
let account = null;
```

အသုံးပြုသူ data ကို variable မှာ သိမ်းဆည်းပြီးနောက် *login* စာမျက်နှာမှ *dashboard* ကို `navigate()` function ကို အသုံးပြုပြီး ရွှေ့နိုင်ပါတယ်။

နောက်ဆုံးမှာ login form ကို submit လုပ်တဲ့အခါ `login` function ကို ခေါ်ဖို့ HTML ကို ပြောင်းလဲပါ:

```html
<form id="loginForm" action="javascript:login()">
```

အသစ် account တစ်ခုကို register လုပ်ပြီး အဲဒီ account ကို အသုံးပြုပြီး login လုပ်ကြည့်ကာ အားလုံးအလုပ်လုပ်နေမှုကို စမ်းသပ်ပါ။

နောက်ပိုင်းအပိုင်းကို ဆက်မလုပ်ခင် `register` function ကို အောက်ပါ code ကို function ရဲ့ အဆုံးမှာ ထည့်သွင်းပြီး ပြည့်စုံစေပါ:

```js
account = result;
navigate('/dashboard');
```

✅ သင်သိပါသလား? Default အနေဖြင့် server API များကို သင်ကြည့်နေတဲ့ web page ရဲ့ *same domain နှင့် port* မှသာ ခေါ်နိုင်ပါတယ်။ ဒါက browser များက အကောင်အထည်ဖော်ထားတဲ့ security mechanism ဖြစ်ပါတယ်။ ဒါပေမယ့် သင့် web app က `localhost:3000` မှာ run လုပ်နေပြီး server API က `localhost:5000` မှာ run လုပ်နေတဲ့အခါ ဘာကြောင့် အလုပ်လုပ်နေရတာလဲ? [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) ဆိုတဲ့နည်းလမ်းကို အသုံးပြုပြီး server response မှာ specific domains အတွက် exception ကို ခွင့်ပြုတဲ့ headers များကို ထည့်သွင်းခြင်းဖြင့် cross-origin HTTP requests ကို လုပ်ဆောင်နိုင်ပါတယ်။

> API များအကြောင်းပိုမိုလေ့လာရန် ဒီ [သင်ခန်းစာ](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon) ကို လေ့လာပါ။

## HTML ကို update လုပ်ပြီး ဒေတာကို ပြသခြင်း

အခုတော့ အသုံးပြုသူ data ရရှိပြီးသားဖြစ်တဲ့အတွက် HTML ကို update လုပ်ပြီး ဒေတာကို ပြသဖို့လိုအပ်ပါတယ်။ DOM မှ element ကို ရယူဖို့ `document.getElementById()` ကို အသုံးပြုနည်းကို ရှိပြီးသားဖြစ်ပါတယ်။ Base element ရရှိပြီးနောက် အောက်ပါ API များကို အသုံးပြုကာ element ကို ပြောင်းလဲခြင်း သို့မဟုတ် child elements အသစ်များကို ထည့်သွင်းနိုင်ပါတယ်:

- [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) property ကို အသုံးပြုကာ element ရဲ့ text ကို ပြောင်းလဲနိုင်ပါတယ်။ ဒီ value ကို ပြောင်းလဲတဲ့အခါ element ရဲ့ children များအားလုံးကို ဖျက်ပြီး ပေးထားသော text ဖြင့် အစားထိုးပေးပါတယ်။ အဲဒီအတွက် element ရဲ့ children များအားလုံးကို ဖျက်ဖို့ empty string `''` ကို assign လုပ်ခြင်းကလည်း အကျိုးရှိပါတယ်။

- [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) နှင့် [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) method ကို အသုံးပြုကာ child elements အသစ်များကို ဖန်တီးပြီး attach လုပ်နိုင်ပါတယ်။

✅ [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) property ကို အသုံးပြုကာ element ရဲ့ HTML contents ကို ပြောင်းလဲနိုင်ပေမယ့် [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) attacks အတွက် အန္တရာယ်ရှိတဲ့အတွက် ဒီ method ကို ရှောင်ရှားသင့်ပါတယ်။

### လုပ်ဆောင်ရန်

*login* စာမျက်နှာမှာ dashboard screen ကို ရှေ့ဆက်မလုပ်ခင် တစ်ခုခုလုပ်ဆောင်ဖို့လိုအပ်ပါတယ်။ လက်ရှိမှာ username မရှိတဲ့အကောင့်ကို login လုပ်ကြည့်ရင် console မှာ message တစ်ခုပြသပေမယ့် အသုံးပြုသူအတွက် ဘာမှမပြောင်းလဲဘဲ ဘာဖြစ်နေလဲဆိုတာမသိနိုင်ပါဘူး။

login `<button>` ရဲ့ အနီးမှာ error message ကို ပြသနိုင်ဖို့ placeholder element တစ်ခုကို ထည့်သွင်းပါမယ်:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

ဒီ `<div>` element က empty ဖြစ်တဲ့အတွက် content ထည့်သွင်းမချင်း screen ပေါ်မှာ ဘာမှမပြသပါဘူး။ JavaScript ဖြင့် retrieve လုပ်ဖို့ `id` ကိုလည်း ထည့်သွင်းထားပါတယ်။

`app.js` ဖိုင်ကို ပြန်သွားပြီး `updateElement` ဆိုတဲ့ helper function အသစ်တစ်ခုကို ဖန်တီးပါ:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

ဒီ function က ရိုးရှင်းပါတယ်: element *id* နှင့် *text* ကိုပေးပြီး matching `id` ရဲ့ DOM element ရဲ့ text content ကို update လုပ်ပေးပါတယ်။ ဒီ method ကို `login` function ရဲ့ error message အစားအသုံးပြုပါမယ်:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

အခုတော့ invalid account ကို login လုပ်ကြည့်ရင် အောက်ပါအတိုင်း message တစ်ခုကို မြင်ရပါမယ်:

![Login error message ပြသနေမှုကို ပြသထားသော screenshot](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.my.png)

အခုတော့ error text ကို visually ပြသနိုင်ပါပြီ၊ ဒါပေမယ့် screen reader ဖြင့် စမ်းကြည့်ရင် ဘာမှမကြားရပါဘူး။ Screen reader များအတွက် dynamically ထည့်သွင်းထားသော text ကို announce လုပ်နိုင်ဖို့ [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) ကို အသုံးပြုရပါမယ်။ ဒီမှာတော့ alert ဆိုတဲ့ live region အမျိုးအစားကို အသုံးပြုပါမယ်:

```html
<div id="loginError" role="alert"></div>
```

`register` function errors အတွက်လည်း အတူတူအကျိုးသက်ရောက်မှုကို implement လုပ်ပါ (HTML ကို update လုပ်ဖို့မမေ့ပါနဲ့)။

## Dashboard မှာ အချက်အလက်များကို ပြသခြင်း

အခုလို techniques များကို အသုံးပြုကာ dashboard စာမျက်နှာမှာ account information ကို ပြသပါမယ်။

Server မှရရှိသော account object က အောက်ပါအတိုင်းဖြစ်ပါတယ်:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> မှတ်ချက်: သင့်အလုပ်ကို ပိုမိုလွယ်ကူစေရန် data ဖြင့် ပြည့်စုံထားသော `test` account ကို အသုံးပြုနိုင်ပါတယ်။

### လုပ်ဆောင်ရန်

HTML မှာ "Balance" section ကို placeholder elements ထည့်သွင်းဖို့အတွက် အစားထိုးပါ:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Account description ကို ပြသဖို့အတွက် အောက်မှာ section အသစ်တစ်ခုကို ထည့်သွင်းပါ:

```html
<h2 id="description"></h2>
```

✅ Account description က content ရဲ့ title အဖြစ် လုပ်ဆောင်တာဖြစ်တဲ့အတွက် semantically heading အနေနဲ့ markup လုပ်ထားပါတယ်။ [Heading structure](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) ရဲ့ အရေးပါမှုကို လေ့လာပြီး စာမျက်နှာကို အနက်နက်ကြည့်ကာ heading အဖြစ်သင့်တော်သောအရာများကို သတ်မှတ်ပါ။

နောက်ဆုံးမှာ `app.js` မှာ placeholder ကို ဖြည့်ဖို့ function အသစ်တစ်ခုကို ဖန်တီးပါ:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

ပထမဆုံး account data ရှိမရှိစစ်ဆေးပြီးမှ ဆက်လုပ်ဆောင်ပါမယ်။ ထို့နောက် HTML ကို update လုပ်ဖို့ `updateElement()` function ကို အသုံးပြုပါတယ်။

> Balance display ကို ပိုမိုလှပစေရန် [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method ကို အသုံးပြုကာ ဒေသမပိုင်းအနေနဲ့ digit ၂ ခုကို အတိအကျပြသပေးပါတယ်။

Dashboard page ကို load လုပ်တိုင်း `updateDashboard()` function ကို ခေါ်ဖို့လိုအပ်ပါတယ်။ [Lesson 1 assignment](../1-template-route/assignment.md) ကို ပြီးစီးထားပြီးသားဖြစ်ရင် ဒီအပိုင်းက ရိုးရှင်းပါတယ်၊ မဟုတ်ရင် အောက်ပါ implementation ကို အသုံးပြုနိုင်ပါတယ်။

`updateRoute()` function ရဲ့ အဆုံးမှာ အောက်ပါ code ကို ထည့်သွင်းပါ:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Routes definition ကို အောက်ပါအတိုင်း update လုပ်ပါ:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

ဒီပြောင်းလဲမှုနဲ့ dashboard page ကို ပြသတိုင်း `updateDashboard()` function ကို ခေါ်ပါမယ်။ Login လုပ်ပြီးနောက် account balance, currency နှင့် description ကို မြင်ရပါမယ်။

## HTML templates ဖြင့် table rows ကို dynamically ဖန်တီးခြင်း

[Lesson 1](../1-template-route/README.md) မှာ navigation ကို implement လုပ်ဖို့ HTML templates ကို [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) method နဲ့အတူ အသုံးပြုခဲ့ပါတယ်။ Templates များက ပိုမိုသေးငယ်ပြီး စာမျက်နှာရဲ့ ထပ်တလဲလဲဖြစ်သောအပိုင်းများကို dynamically populate လုပ်ဖို့ အသုံးပြုနိုင်ပါတယ်။

ဒီနည်းလမ်းကို အသုံးပြုကာ HTML table မှာ transactions များကို ပြသပါမယ်။

### လုပ်ဆောင်ရန်

HTML `<body>` မှာ template အသစ်တစ်ခုကို ထည့်သွင်းပါ:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

ဒီ template က table row တစ်ခုကို ကိုယ်စားပြုပြီး transactions ရဲ့ *date*, *object* နှင့် *amount* ဆိုတဲ့ column ၃ ခုကို populate လုပ်ဖို့ ရည်ရွယ်ပါတယ်။

Dashboard template ရဲ့ `<tbody>` element မှာ JavaScript ဖြင့် ရှာဖွေရန် အလွယ်ကူစေရန် `id` property ကို ထည့်သ
အကောင့် `test` ကို အသုံးပြုပြီး login လုပ်ကြည့်ပါက dashboard ပေါ်တွင် လုပ်ငန်းစာရင်းကို မြင်နိုင်ပါပြီ 🎉။

---

## 🚀 စိန်ခေါ်မှု

အဖွဲ့လိုက်လုပ်ပြီး dashboard စာမျက်နှာကို တကယ့်ဘဏ်အက်ပ်လိုပုံစံဖြစ်အောင် ပြင်ဆင်ပါ။ သင့်အက်ပ်ကို အလှဆင်ပြီးသားဖြစ်ပါက [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) ကို အသုံးပြုပြီး [responsive design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) တစ်ခုကို ဖန်တီးပါ၊ desktop နှင့် mobile device နှစ်ခုစလုံးမှာ အဆင်ပြေစွာ အလုပ်လုပ်နိုင်အောင် ပြုလုပ်ပါ။

ဒီမှာ styled dashboard စာမျက်နှာရဲ့ ဥပမာတစ်ခုကို ဖော်ပြထားပါတယ်:

![Dashboard ကို အလှဆင်ပြီးနောက်ရလဒ်ရဲ့ ဥပမာ screenshot](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.my.png)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/46)

## အိမ်စာ

[သင့် code ကို ပြန်လည်ပြင်ဆင်ပြီး မှတ်ချက်ထည့်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှားမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။