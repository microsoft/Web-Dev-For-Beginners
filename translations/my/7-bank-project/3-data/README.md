<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-28T18:29:16+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "my"
}
-->
# ဘဏ်အက်ပ်တည်ဆောက်ခြင်း အပိုင်း ၃: ဒေတာရယူခြင်းနှင့် အသုံးပြုခြင်းနည်းလမ်းများ

## မိန့်ခွန်းမတိုင်မီမေးခွန်း

[မိန့်ခွန်းမတိုင်မီမေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/45)

### အကျဉ်းချုပ်

ဝက်ဘ်အက်ပ်လျှောက်လွှာတိုင်း၏ အဓိကအချက်မှာ *ဒေတာ* ဖြစ်သည်။ ဒေတာသည် အမျိုးမျိုးသောပုံစံများရှိနိုင်သော်လည်း ၎င်း၏အဓိကရည်ရွယ်ချက်မှာ အသုံးပြုသူထံသို့ အချက်အလက်ကို ပြသခြင်းဖြစ်သည်။ ဝက်ဘ်အက်ပ်များသည် ပိုမိုအကျိုးရှိစွာနှင့် ရှုပ်ထွေးလာသည့်အခါတွင် အသုံးပြုသူသည် အချက်အလက်များကို ရယူခြင်းနှင့် အပြန်အလှန်ဆက်သွယ်ခြင်းနည်းလမ်းသည် ဝက်ဘ်ဖွံ့ဖြိုးတိုးတက်မှု၏ အရေးပါသောအပိုင်းတစ်ခုဖြစ်လာသည်။

ဒီသင်ခန်းစာတွင်၊ server မှ ဒေတာကို asynchronous နည်းလမ်းဖြင့် ရယူပြီး HTML ကို ပြန်လည်တင်မထားဘဲ ဝက်ဘ်စာမျက်နှာပေါ်တွင် အချက်အလက်ကို ပြသရန် ဒီဒေတာကို အသုံးပြုနည်းကို လေ့လာပါမည်။

### ကြိုတင်လိုအပ်ချက်

ဒီသင်ခန်းစာအတွက် [Login နှင့် Registration Form](../2-forms/README.md) ကို တည်ဆောက်ပြီးဖြစ်ရမည်။ [Node.js](https://nodejs.org) ကို install လုပ်ပြီး [server API](../api/README.md) ကို locally run လုပ်ထားရမည်။ ဒါမှ account data ကို ရယူနိုင်မည်။

server သေချာစွာ run လုပ်နေသည်ကို terminal မှာ အောက်ပါ command ကို run လုပ်ပြီး စမ်းသပ်နိုင်သည်-

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX နှင့် ဒေတာရယူခြင်း

ရိုးရာဝက်ဘ်ဆိုဒ်များသည် အသုံးပြုသူ link ကိုရွေးချယ်ခြင်း သို့မဟုတ် form ကို submit လုပ်ခြင်းဖြင့် ပြသထားသော content ကို update လုပ်သည်။ ဒါကို HTML စာမျက်နှာကို ပြန်လည်တင်ခြင်းဖြင့် ပြုလုပ်သည်။ ဒေတာအသစ်တစ်ခု load လုပ်ရန်လိုအပ်သည့်အခါတွင် ဝက်ဘ် server သည် HTML စာမျက်နှာအသစ်တစ်ခုကို ပြန်ပေးသည်။ ဒါကို browser မှ process လုပ်ရမည်ဖြစ်ပြီး အသုံးပြုသူ၏ လက်ရှိလုပ်ဆောင်မှုကို ခေတ္တရပ်တန့်စေပြီး reload အတွင်းတွင် အပြန်အလှန်ဆက်သွယ်မှုများကို ကန့်သတ်သည်။ ဒီ workflow ကို *Multi-Page Application* (MPA) ဟုခေါ်သည်။

![Multi-page application တွင် update workflow](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.my.png)

ဝက်ဘ်လျှောက်လွှာများ ပိုမိုရှုပ်ထွေးလာသည့်အခါတွင် [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) ဟုခေါ်သောနည်းလမ်းအသစ်တစ်ခု ပေါ်ထွက်လာသည်။ ဒီနည်းလမ်းသည် JavaScript ကို အသုံးပြု၍ server မှ ဒေတာကို asynchronous နည်းလမ်းဖြင့် ပို့ခြင်းနှင့် ရယူခြင်းကို ခွင့်ပြုသည်။ HTML စာမျက်နှာကို ပြန်လည်တင်ရန်မလိုအပ်ဘဲ update လုပ်ခြင်းများကို ပိုမိုလျင်မြန်စေပြီး အသုံးပြုသူအတွေ့အကြုံကို ပိုမိုချောမွေ့စေသည်။ Server မှ ဒေတာအသစ်ရရှိလာသောအခါ၊ လက်ရှိ HTML စာမျက်နှာကို JavaScript ကို အသုံးပြု၍ [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API ဖြင့် update လုပ်နိုင်သည်။ အချိန်ကြာလာသည်နှင့်အမျှ ဒီနည်းလမ်းသည် [*Single-Page Application* (SPA)](https://en.wikipedia.org/wiki/Single-page_application) ဟုခေါ်သောအဆင့်သို့ တိုးတက်လာသည်။

![Single-page application တွင် update workflow](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.my.png)

AJAX ကို ပထမဆုံးမိတ်ဆက်ခဲ့သောအခါတွင် asynchronous နည်းလမ်းဖြင့် ဒေတာရယူရန်ရရှိနိုင်သော API တစ်ခုတည်းမှာ [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) ဖြစ်သည်။ သို့သော် modern browser များသည် promises ကို အသုံးပြုပြီး JSON ဒေတာကို ပိုမိုကောင်းမွန်စွာ manipulate လုပ်နိုင်သည့် [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API) ကိုလည်း support လုပ်သည်။

> Modern browser အားလုံးသည် `Fetch API` ကို support လုပ်သော်လည်း သင့်ဝက်ဘ်လျှောက်လွှာကို legacy သို့မဟုတ် အဟောင်း browser များတွင် အသုံးပြုနိုင်စေရန်လိုအပ်ပါက [caniuse.com](https://caniuse.com/fetch) တွင် compatibility table ကိုစစ်ဆေးရန် အမြဲကောင်းသည်။

### လုပ်ဆောင်ရန်

[ယခင်သင်ခန်းစာ](../2-forms/README.md) တွင် account တစ်ခုဖန်တီးရန် registration form ကို implement လုပ်ခဲ့သည်။ အခုတော့ ရှိပြီးသား account ကို အသုံးပြု၍ login လုပ်ပြီး ဒေတာကို fetch လုပ်ရန် code ကို ထည့်သွင်းပါမည်။ `app.js` ဖိုင်ကိုဖွင့်ပြီး `login` function အသစ်တစ်ခုထည့်ပါ-

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

ဒီမှာ `getElementById()` ကို အသုံးပြု၍ form element ကို retrieve လုပ်ပြီး `loginForm.user.value` ဖြင့် input မှ username ကိုရယူသည်။ HTML တွင် `name` attribute ဖြင့် သတ်မှတ်ထားသော form control တစ်ခုစီကို form ၏ property အဖြစ် access လုပ်နိုင်သည်။

Registration အတွက် ပြုလုပ်ခဲ့သည့်နည်းလမ်းနှင့်တူညီစွာ၊ server request ကို perform လုပ်ရန် function အသစ်တစ်ခုဖန်တီးပါမည်။ ဒါပေမယ့် ဒီတစ်ခါမှာ account data ကို retrieve လုပ်ရန်ဖြစ်သည်-

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

ဒီမှာ `fetch` API ကို အသုံးပြု၍ server မှ ဒေတာကို asynchronous နည်းလမ်းဖြင့် request လုပ်သည်။ ဒါပေမယ့် URL ကို call လုပ်ရန်အပြင် အခြား parameter မလိုအပ်ပါ။ ဒါကြောင့် `fetch` သည် default အနေဖြင့် [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP request ကိုဖန်တီးသည်။

✅ `encodeURIComponent()` သည် URL အတွက် special characters များကို escape လုပ်သည့် function ဖြစ်သည်။ ဒီ function ကို မခေါ်ဘဲ `user` value ကို URL တွင်တိုက်ရိုက်အသုံးပြုပါက ဘယ်လိုပြဿနာများဖြစ်နိုင်မလဲ?

အခုတော့ `login` function ကို update လုပ်ပြီး `getAccount` ကိုအသုံးပြုပါမည်-

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

ပထမဦးဆုံး `getAccount` သည် asynchronous function ဖြစ်သောကြောင့် server result ကိုစောင့်ရန် `await` keyword ကို အသုံးပြုရမည်။ Server request တစ်ခုစီတွင် error case များကို handle လုပ်ရန်လိုအပ်သည်။ အခုအချိန်မှာ log message တစ်ခုထည့်ပြီး error ကိုပြသရန်သာလုပ်ပါမည်။ နောက်ပိုင်းမှာ ပြန်လည်ဆန်းစစ်ပါမည်။

ထို့နောက် dashboard information ကို display လုပ်ရန် later တွင်အသုံးပြုနိုင်ရန် ဒေတာကို တစ်နေရာမှာ သိမ်းဆည်းရမည်။ `account` variable မရှိသေးသောကြောင့် ဖိုင်၏ထိပ်ဆုံးတွင် global variable တစ်ခုဖန်တီးပါမည်-

```js
let account = null;
```

အသုံးပြုသူဒေတာကို variable တစ်ခုထဲသို့ သိမ်းဆည်းပြီးနောက် *login* စာမျက်နှာမှ *dashboard* သို့ `navigate()` function ကိုအသုံးပြု၍ ရွှေ့နိုင်သည်။

နောက်ဆုံးတွင် login form ကို submit လုပ်သောအခါ `login` function ကိုခေါ်ရန် HTML ကိုပြောင်းလဲပါ-

```html
<form id="loginForm" action="javascript:login()">
```

အသစ် account တစ်ခု register လုပ်ပြီး အဲဒီ account ကိုအသုံးပြု၍ login လုပ်ရန် စမ်းသပ်ပါ။

နောက်ပိုင်းအပိုင်းသို့ ရွှေ့မတိုင်မီ `register` function ကို အောက်ပါ code ကို function ၏အဆုံးတွင်ထည့်သွင်းခြင်းဖြင့် ပြည့်စုံစေပါ-

```js
account = result;
navigate('/dashboard');
```

✅ သင်သိပါသလား၊ default အနေဖြင့် server API များကို သင်ကြည့်နေသောဝက်ဘ်စာမျက်နှာ၏ *same domain နှင့် port* မှသာ call လုပ်နိုင်သည်။ ဒါဟာ browser များက အကောင်အထည်ဖော်ထားသော security mechanism ဖြစ်သည်။ ဒါပေမယ့် သင့်ဝက်ဘ်အက်ပ်သည် `localhost:3000` တွင် run လုပ်နေပြီး server API သည် `localhost:5000` တွင် run လုပ်နေသည်၊ ဒါဟာ ဘာကြောင့်အလုပ်လုပ်နေရသလဲ? [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) ဟုခေါ်သောနည်းလမ်းကို အသုံးပြု၍ server သည် response တွင် special headers များထည့်သွင်းခြင်းဖြင့် specific domains များအတွက် exception များကို ခွင့်ပြုနိုင်သည်။

> API များအကြောင်းပိုမိုလေ့လာရန် ဒီ [သင်ခန်းစာ](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon) ကိုယူပါ

## HTML ကို update လုပ်၍ ဒေတာကို display လုပ်ရန်

အခုတော့ အသုံးပြုသူဒေတာကို ရရှိပြီးဖြစ်သည်။ HTML ကို update လုပ်၍ display လုပ်ရန် လိုအပ်သည်။ `document.getElementById()` ကိုအသုံးပြု၍ DOM မှ element ကို retrieve လုပ်နည်းကို ကျွန်တော်တို့သိပြီးဖြစ်သည်။ base element ရရှိပြီးနောက် အောက်ပါ API များကို အသုံးပြု၍ element ကိုပြောင်းလဲခြင်း သို့မဟုတ် child elements များထည့်သွင်းနိုင်သည်-

- [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) property ကိုအသုံးပြု၍ element ၏ text ကိုပြောင်းလဲနိုင်သည်။ ဒီ value ကိုပြောင်းလဲခြင်းသည် element ၏ children များအားလုံးကို (ရှိပါက) ဖယ်ရှားပြီး ပေးထားသော text ဖြင့်အစားထိုးသည်။ ထို့ကြောင့် empty string `''` ကို assign လုပ်ခြင်းဖြင့် element ၏ children များအားလုံးကို ဖယ်ရှားရန်လည်း အကျိုးရှိသောနည်းလမ်းဖြစ်သည်။

- [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) နှင့် [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) method ကိုအသုံးပြု၍ အသစ်သော child elements များကို ဖန်တီးပြီး attach လုပ်နိုင်သည်။

✅ [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) property ကိုအသုံးပြု၍ element ၏ HTML contents ကိုလည်းပြောင်းလဲနိုင်သည်။ သို့သော် [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) တိုက်ခိုက်မှုများအတွက် အန္တရာယ်ရှိသောကြောင့် ဒီနည်းလမ်းကို ရှောင်ရှားသင့်သည်။

### လုပ်ဆောင်ရန်

*login* စာမျက်နှာတွင် dashboard screen သို့ ရွှေ့မတိုင်မီ လုပ်ဆောင်ရန်အရာတစ်ခုရှိသည်။ လက်ရှိတွင် မရှိသော username ဖြင့် login လုပ်ရန်ကြိုးစားပါက console တွင် message တစ်ခုပြသသော်လည်း သာမန်အသုံးပြုသူအတွက် ဘာမှမပြောင်းလဲဘဲ ဘာဖြစ်နေလဲဆိုတာမသိနိုင်ပါ။

login `<button>` မတိုင်မီ error message ကို display လုပ်ရန် placeholder element တစ်ခုထည့်ပါမည်-

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

ဒီ `<div>` element သည် empty ဖြစ်သည်။ screen ပေါ်တွင် content ထည့်သွင်းမချင်း ဘာမှမပြသပါ။ JavaScript ဖြင့် retrieve လုပ်ရန် `id` ကိုလည်းပေးထားသည်။

`app.js` ဖိုင်သို့ပြန်သွားပြီး `updateElement` ဟုခေါ်သော helper function အသစ်တစ်ခုဖန်တီးပါ-

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

ဒီ function သည် ရိုးရှင်းပြီး element *id* နှင့် *text* ကိုပေးထားသော DOM element ၏ text content ကို update လုပ်သည်။ `login` function တွင် error message အစား ဒီ method ကိုအသုံးပြုပါ-

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

အခုတော့ မမှန်သော account ဖြင့် login လုပ်ရန်ကြိုးစားပါက အောက်ပါအတိုင်း message တစ်ခုကိုတွေ့ရမည်-

![Login အတွင်း error message ပြသထားသော screenshot](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.my.png)

အခုတော့ error text ကို visually ပြသထားပြီး screen reader ဖြင့်စမ်းသပ်ပါက ဘာမှမကြားရပါ။ Screen reader များက dynamic text ကို page တွင်ထည့်သွင်းသောအခါ အကြောင်းကြားရန် [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) ကိုအသုံးပြုရမည်။ ဒီမှာ alert ဟုခေါ်သော live region အမျိုးအစားကိုအသုံးပြုပါမည်-

```html
<div id="loginError" role="alert"></div>
```

`register` function errors အတွက်လည်း အတူတူသောအပြုအမူကို implement လုပ်ပါ (HTML ကို update လုပ်ရန်မမေ့ပါနှင့်)။

## Dashboard တွင် အချက်အလက်ကို display လုပ်ရန်

ကျွန်တော်တို့လေ့လာခဲ့သောနည်းလမ်းများကိုအသုံးပြု၍ dashboard စာမျက်နှာတွင် account information ကို display လုပ်ပါမည်။

Server မှရရှိသော account object သည် အောက်ပါအတိုင်းဖြစ်သည်-

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

> မှတ်ချက်- သင့်အလုပ်ကို ပိုမိုလွယ်ကူစေရန် data ဖြင့်ပြီးစီးထားသော `test` account ကိုအသုံးပြုနိုင်သည်။

### လုပ်ဆောင်ရန်

HTML တွင် "Balance" အပိုင်းကို placeholder elements ထည့်သွင်းရန်အစားပြောင်းလဲပါ-

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Account description ကို display လုပ်ရန်အောက်တွင် section အသစ်တစ်ခုထည့်ပါ-

```html
<h2 id="description"></h2>
```

✅ Account description သည် content အောက်တွင် title အဖြစ်လုပ်ဆောင်သောကြောင့် semantically heading အဖြစ် mark up လုပ်ထားသည်။ Accessibility အတွက် [heading structure](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) အရေးပါမှုကိုပိုမိုလေ့လာပြီး page ကို critical အမြင်ဖြင့်ကြည့်ပါ။

နောက်ဆုံးတွင် `app.js` တွင် placeholder ကိုဖြည့်ရန် function အသစ်တစ်ခုဖန်တီးပါ-

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

ပထမဦးဆုံး account data ရှိမရှိစစ်ဆေးပြီးမှ ဆက်လုပ်ပါမည်။ ထို့နောက် HTML ကို update လုပ်ရန် ကျွန်တော်တို့ဖန်တီးထားသော `updateElement()` function ကိုအသုံးပြုပါမည်။

> Balance display ကို ပိုမိုလှပစေရန် [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method ကိုအသုံးပြု၍ ဒေသမအပိုင်း ၂ ခုဖြင့် value ကိုပြသသည်။

Dashboard page ကို load လုပ်သောအခါတိုင်း `updateDashboard()` function ကိုခေါ်ရန်လိုအပ်သည်။ [Lesson 1 assignment](../1-template-route/assignment.md) ကိုပြီးစီးထားပါက ဒီအပိုင်းကို လွယ်ကူစွာလုပ်ဆောင်နိုင်သည်။ မဟုတ်ပါက အောက်ပါ implementation ကိုအသုံးပြုနိုင်သည်။

`updateRoute()` function ၏အဆုံးတွင် အောက်ပါ code ကိုထည့်ပါ-

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Routes definition ကို update လုပ်ပါ-

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

ဒီပြောင်းလဲမှုဖြင့် dashboard page ကို display လုပ်သောအခါတိုင်း `updateDashboard()` function ကိုခေါ်သည်။ Login ပြုလုပ်ပြီးနောက် account balance, currency နှင့် description ကိုကြည့်နိုင်သည်။

## HTML templates ဖြင့် table rows ကို dynamic ဖန်တီးခြင်း

[Lesson 1](../1-template-route/README.md) တွင် navigation ကို implement လုပ်ရန် HTML templates နှင့် [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) method ကိုအသုံးပြုခဲ့သည်။ Templates သည် ပိုမိုသေးငယ်ပြီး page ၏ထပ်နေသောအပိုင်းများကို dynamic populate လုပ်ရန်အသုံးပြုနိုင်သည်။

ဒီနည်းလမ်းကိုအသုံးပြု၍ HTML table တွင် transactions list ကို display လုပ်ပါမည်။

###
အကောင့် `test` ကို အသုံးပြုပြီး login လုပ်ကြည့်ပါက dashboard ပေါ်တွင် လုပ်ငန်းစာရင်းကို အခုမှ ကြည့်နိုင်ပါပြီ 🎉။

---

## 🚀 စိန်ခေါ်မှု

အတူတကွ လုပ်ဆောင်ပြီး dashboard စာမျက်နှာကို တကယ့်ဘဏ်အက်ပ်လိုပုံစံဖြစ်အောင် ပြင်ဆင်ပါ။ သင့်အက်ပ်ကို အရင်ကပုံစံပြင်ပြီးသားဖြစ်ပါက [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) ကို အသုံးပြု၍ [responsive design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) တစ်ခုကို ဖန်တီးပါ၊ desktop နှင့် mobile device နှစ်ခုစလုံးမှာ အဆင်ပြေစွာ အလုပ်လုပ်နိုင်အောင် ပြင်ဆင်ပါ။

ဒီမှာ styled dashboard စာမျက်နှာရဲ့ ဥပမာတစ်ခုကို ကြည့်နိုင်ပါတယ်:

![Dashboard ကိုပုံစံပြင်ပြီးနောက်ရလဒ်ရဲ့ ဥပမာ screenshot](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.my.png)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/46)

## လုပ်ငန်းတာဝန်

[သင့် code ကို ပြန်လည်ပြင်ဆင်ပြီး မှတ်ချက်ထည့်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတရ အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။