<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8a07db14e75ac62f013b7de5df05981d",
  "translation_date": "2025-08-28T18:33:10+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "my"
}
-->
# ဘဏ်အက်ပ်တည်ဆောက်ခြင်း အပိုင်း ၁: HTML Templates နှင့် Web App Routes

## မိန့်ခွန်းမပြောမီ စစ်ဆေးမှု

[မိန့်ခွန်းမပြောမီ စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/41)

### နိဒါန်း

JavaScript ကို browser တွေမှာ အသုံးပြုလာတာနဲ့အတူ၊ ဝဘ်ဆိုဒ်တွေဟာ ယခင်ထက်ပိုမို အပြန်အလှန်ဆက်သွယ်နိုင်ပြီး ရှုပ်ထွေးလာပါတယ်။ Web နည်းပညာတွေကို browser ထဲမှာတင် အပြည့်အဝ လုပ်ဆောင်နိုင်တဲ့ [web applications](https://en.wikipedia.org/wiki/Web_application) တွေ ဖန်တီးဖို့ အသုံးပြုလာကြပါတယ်။ Web apps တွေဟာ အပြန်အလှန်ဆက်သွယ်မှုများစွာရှိတာကြောင့်၊ အသုံးပြုသူတွေဟာ လုပ်ဆောင်ချက်တစ်ခုစီအတွက် စာမျက်နှာတစ်ခုလုံး ပြန်လည်တင်သွင်းဖို့ စောင့်နေချင်ကြတာမဟုတ်ပါဘူး။ ဒါကြောင့် JavaScript ကို DOM ကို အသုံးပြုပြီး HTML ကို တိုက်ရိုက် update လုပ်ဖို့ အသုံးပြုကြပြီး၊ အသုံးပြုသူတွေ အဆင်ပြေစေတဲ့ အတွေ့အကြုံကို ပေးစွမ်းနိုင်ပါတယ်။

ဒီသင်ခန်းစာမှာတော့၊ HTML templates ကို အသုံးပြုပြီး စာမျက်နှာအမျိုးမျိုး ဖန်တီးကာ၊ HTML စာမျက်နှာတစ်ခုလုံး ပြန်လည်တင်သွင်းစရာမလိုဘဲ ပြသနိုင်ပြီး update လုပ်နိုင်တဲ့ ဘဏ် web app တစ်ခု ဖန်တီးဖို့ အခြေခံအဆောက်အအုံတွေကို တည်ဆောက်သွားမှာဖြစ်ပါတယ်။

### ကြိုတင်လိုအပ်ချက်

ဒီသင်ခန်းစာမှာ တည်ဆောက်မယ့် web app ကို စမ်းသပ်ဖို့၊ သင့်မှာ ဒေသခံ web server တစ်ခု လိုအပ်ပါတယ်။ သင့်မှာ မရှိသေးပါက [Node.js](https://nodejs.org) ကို install လုပ်ပြီး `npx lite-server` command ကို သင့် project folder ထဲကနေ အသုံးပြုနိုင်ပါတယ်။ ဒါဟာ ဒေသခံ web server တစ်ခု ဖန်တီးပြီး သင့် app ကို browser ထဲမှာ ဖွင့်ပေးပါလိမ့်မယ်။

### ပြင်ဆင်မှု

သင့်ကွန်ပျူတာမှာ `bank` လို့အမည်ပေးထားတဲ့ folder တစ်ခု ဖန်တီးပြီး၊ `index.html` လို့အမည်ပေးထားတဲ့ ဖိုင်တစ်ခု ထဲမှာ ထည့်ပါ။ အောက်ပါ HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) ကို စတင်အသုံးပြုပါ။

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## HTML Templates

Web page တစ်ခုအတွက် စာမျက်နှာအမျိုးမျိုး ဖန်တီးချင်တယ်ဆိုရင်၊ အကောင်းဆုံးနည်းလမ်းတစ်ခုကတော့ ပြသလိုတဲ့ စာမျက်နှာတစ်ခုစီအတွက် HTML ဖိုင်တစ်ခုစီ ဖန်တီးတာဖြစ်ပါတယ်။ သို့သော် ဒီနည်းလမ်းမှာ အခက်အခဲအချို့ရှိပါတယ်။

- စာမျက်နှာပြောင်းတဲ့အခါ HTML တစ်ခုလုံး ပြန်လည်တင်သွင်းရတာကြောင့် နှေးကွေးနိုင်ပါတယ်။
- စာမျက်နှာအမျိုးမျိုးအကြား ဒေတာမျှဝေရတာ ခက်ခဲပါတယ်။

နောက်ထပ်နည်းလမ်းတစ်ခုကတော့ HTML ဖိုင်တစ်ခုတည်းကို အသုံးပြုပြီး၊ `<template>` element ကို အသုံးပြုကာ [HTML templates](https://developer.mozilla.org/docs/Web/HTML/Element/template) အများအပြားကို သတ်မှတ်ဖန်တီးခြင်းဖြစ်ပါတယ်။ Template တစ်ခုဟာ browser ကနေ တိုက်ရိုက်ပြသမယ့် HTML block မဟုတ်ဘဲ၊ JavaScript ကို အသုံးပြုပြီး runtime မှာ instantiate လုပ်ရမယ့် reusable HTML block တစ်ခုဖြစ်ပါတယ်။

### လုပ်ဆောင်ရန်

ဘဏ်အက်ပ်တစ်ခုကို login စာမျက်နှာနဲ့ dashboard စာမျက်နှာနှစ်ခုပါဝင်အောင် ဖန်တီးသွားပါမယ်။ ပထမဦးစွာ HTML body ထဲမှာ placeholder element တစ်ခု ထည့်ပါ၊ ဒါကို app ရဲ့ စာမျက်နှာအမျိုးမျိုးကို instantiate လုပ်ဖို့ အသုံးပြုသွားမှာဖြစ်ပါတယ်။

```html
<div id="app">Loading...</div>
```

JavaScript နဲ့ အလွယ်တကူ ရှာဖွေနိုင်ဖို့ `id` တစ်ခု ပေးထားပါတယ်။

> အကြံပြုချက်: ဒီ element ရဲ့ အကြောင်းအရာကို အစားထိုးမယ့်အတွက်၊ app တင်နေစဉ် ပြသဖို့ loading message တစ်ခု သို့မဟုတ် indicator တစ်ခု ထည့်ထားနိုင်ပါတယ်။

နောက်တစ်ဆင့်မှာတော့ login စာမျက်နှာအတွက် HTML template ကို ထည့်ပါ။ အခုအချိန်မှာတော့ title တစ်ခုနဲ့ navigation လုပ်ဖို့ အသုံးပြုမယ့် link ပါဝင်တဲ့ section တစ်ခုကို ထည့်ပါမယ်။

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

ထို့နောက် dashboard စာမျက်နှာအတွက် HTML template တစ်ခု ထည့်ပါမယ်။ ဒီစာမျက်နှာမှာ အောက်ပါ section တွေ ပါဝင်ပါမယ်။

- Title နဲ့ logout link ပါဝင်တဲ့ header
- ဘဏ်အကောင့်ရဲ့ လက်ရှိလက်ကျန်
- Transactions တွေကို table အဖြစ် ပြသထားတဲ့ စာရင်း

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> အကြံပြုချက်: HTML templates ဖန်တီးတဲ့အခါ၊ ဘယ်လိုပုံစံဖြစ်မလဲဆိုတာ ကြည့်ချင်ရင် `<template>` နဲ့ `</template>` ကို `<!-- -->` နဲ့ comment ထားနိုင်ပါတယ်။

✅ Template တွေမှာ `id` attribute တွေကို ဘာကြောင့် အသုံးပြုသလဲ? Classes တို့လို အခြားအရာတွေကို အသုံးပြုလို့ရမလား?

## JavaScript နဲ့ Templates ပြသခြင်း

HTML ဖိုင်ကို browser မှာ စမ်းကြည့်ပါက `Loading...` ဆိုပြီးပဲ ရပ်နေပါလိမ့်မယ်။ ဒါဟာ HTML templates တွေကို instantiate လုပ်ပြီး ပြသဖို့ JavaScript code ထည့်ထားရမလိုတဲ့အတွက် ဖြစ်ပါတယ်။

Template တစ်ခုကို instantiate လုပ်ဖို့ 通常 ၃ ချက်အဆင့်လိုအပ်ပါတယ်။

1. DOM ထဲက template element ကို [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById) နဲ့ ရှာဖွေပါ။
2. Template element ကို [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode) နဲ့ ကူးယူပါ။
3. Template ကို DOM ထဲမှာ ပြသနိုင်တဲ့ element တစ်ခုအောက်မှာ [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) နဲ့ ထည့်ပါ။

✅ Template ကို DOM ထဲမှာ ထည့်မယ့်အခါ ကူးယူဖို့ ဘာကြောင့် လိုအပ်သလဲ? ဒီအဆင့်ကို ကျော်လိုက်ရင် ဘာဖြစ်မလဲ?

### လုပ်ဆောင်ရန်

သင့် project folder ထဲမှာ `app.js` လို့အမည်ပေးထားတဲ့ ဖိုင်တစ်ခု ဖန်တီးပြီး၊ HTML ရဲ့ `<head>` အပိုင်းထဲမှာ import လုပ်ပါ။

```html
<script src="app.js" defer></script>
```

အခုတော့ `app.js` ထဲမှာ `updateRoute` လို့အမည်ပေးထားတဲ့ function တစ်ခု ဖန်တီးပါ။

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

ဒီမှာ ကျွန်တော်တို့လုပ်တာက အထက်မှာ ဖော်ပြထားတဲ့ ၃ ချက်အဆင့်အတိုင်းပါပဲ။ `templateId` နဲ့ id ရှိတဲ့ template ကို instantiate လုပ်ပြီး၊ app placeholder ထဲမှာ cloned content ကို ထည့်ထားပါတယ်။ Template ရဲ့ subtree အားလုံးကို ကူးယူဖို့ `cloneNode(true)` ကို အသုံးပြုရတာကို သတိပြုပါ။

အခု function ကို template တစ်ခုနဲ့ ခေါ်ပြီး ရလဒ်ကို ကြည့်ပါ။

```js
updateRoute('login');
```

✅ ဒီ code `app.innerHTML = '';` ရဲ့ ရည်ရွယ်ချက်က ဘာလဲ? ဒါမပါဘဲဆိုရင် ဘာဖြစ်မလဲ?

## Routes ဖန်တီးခြင်း

Web app တစ်ခုအတွက် Routes ဆိုတာက URL တွေကို ပြသဖို့လိုတဲ့ စာမျက်နှာတွေနဲ့ ဆက်စပ်ပေးတဲ့ ရည်ရွယ်ချက်ကို ဆိုလိုပါတယ်။ HTML ဖိုင်အများအပြားပါဝင်တဲ့ website တစ်ခုမှာတော့၊ URL mapping ကို ဖိုင်လမ်းကြောင်းတွေက အလိုအလျောက် ပြသပေးပါတယ်။ ဥပမာ၊ သင့် project folder ထဲမှာ အောက်ပါဖိုင်တွေရှိတယ်ဆိုပါစို့-

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

`mywebsite` ကို root အဖြစ် သတ်မှတ်ထားတဲ့ web server တစ်ခု ဖန်တီးပါက၊ URL mapping က အောက်ပါအတိုင်းဖြစ်ပါလိမ့်မယ်-

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

သို့သော်၊ ကျွန်တော်တို့ web app မှာ HTML ဖိုင်တစ်ခုတည်းကို အသုံးပြုပြီး စာမျက်နှာအားလုံးကို ထည့်ထားတာကြောင့် ဒီ default behavior က အကျိုးမပေးပါဘူး။ ကျွန်တော်တို့ကိုယ်တိုင် map တစ်ခု ဖန်တီးပြီး JavaScript ကို အသုံးပြုကာ ပြသမယ့် template ကို update လုပ်ရပါမယ်။

### လုပ်ဆောင်ရန်

URL paths နဲ့ templates တွေကို [map](https://en.wikipedia.org/wiki/Associative_array) လုပ်ဖို့ object တစ်ခုကို `app.js` ဖိုင်ရဲ့ အပေါ်ဆုံးမှာ ထည့်ပါ။

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

အခုတော့ `updateRoute` function ကို နည်းနည်းပြင်ဆင်ပါ။ `templateId` ကို တိုက်ရိုက် argument အဖြစ် ပေးပို့မယ့်အစား၊ လက်ရှိ URL ကို ကြည့်ပြီး၊ map ကို အသုံးပြုကာ တိကျတဲ့ template ID ကို ရယူပါမယ်။ URL ရဲ့ path အပိုင်းကိုသာ ရယူဖို့ [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) ကို အသုံးပြုနိုင်ပါတယ်။

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

ဒီမှာ ကျွန်တော်တို့ သတ်မှတ်ထားတဲ့ routes တွေကို တိကျတဲ့ template နဲ့ ဆက်စပ်ပေးထားပါတယ်။ Browser မှာ URL ကို လက်ဖြင့် ပြောင်းပြီး စမ်းကြည့်ပါ။

✅ URL မှာ မသိတဲ့ path တစ်ခု ထည့်လိုက်ရင် ဘာဖြစ်မလဲ? ဒီပြဿနာကို ဘယ်လို ဖြေရှင်းနိုင်မလဲ?

## Navigation ထည့်သွင်းခြင်း

App အတွက် နောက်တစ်ဆင့်က URL ကို လက်ဖြင့် ပြောင်းစရာမလိုဘဲ စာမျက်နှာအကြား navigation လုပ်နိုင်စေဖို့ ဖြစ်ပါတယ်။ ဒါဟာ အောက်ပါအရာနှစ်ခုကို အဓိကပါဝင်စေပါတယ်-

1. လက်ရှိ URL ကို update လုပ်ခြင်း
2. URL အသစ်အပေါ် မူတည်ပြီး ပြသမယ့် template ကို update လုပ်ခြင်း

`updateRoute` function နဲ့ ဒုတိယအပိုင်းကို ကျွန်တော်တို့ပြီးစီးထားပြီးဖြစ်ပါတယ်၊ ဒါကြောင့် လက်ရှိ URL ကို update လုပ်ဖို့သာ လိုအပ်ပါတယ်။

JavaScript ကို အသုံးပြုပြီး [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) ကို အသုံးပြုကာ URL ကို update လုပ်ပြီး browsing history မှာ entry အသစ်တစ်ခု ဖန်တီးနိုင်ပါတယ်၊ HTML ကို ပြန်လည်တင်သွင်းစရာမလိုပါ။

> မှတ်ချက်: HTML anchor element [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) ကို URL အမျိုးမျိုးကို hyperlink ဖန်တီးဖို့ အသုံးပြုနိုင်သော်လည်း၊ default အနေဖြင့် browser က HTML ကို ပြန်လည်တင်သွင်းပါလိမ့်မယ်။ Custom JavaScript နဲ့ routing ကို handle လုပ်တဲ့အခါ ဒီ behavior ကို တားဆီးဖို့ `preventDefault()` function ကို click event မှာ အသုံးပြုရပါမယ်။

### လုပ်ဆောင်ရန်

App ထဲမှာ navigation လုပ်နိုင်ဖို့ အသုံးပြုမယ့် function အသစ်တစ်ခု ဖန်တီးပါ။

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

ဒီ method က path ကို အခြေခံပြီး လက်ရှိ URL ကို update လုပ်ပြီး၊ template ကို update လုပ်ပါတယ်။ `window.location.origin` property က URL root ကို ပြန်ပေးပြီး၊ path တစ်ခုကို အခြေခံကာ ပြည့်စုံတဲ့ URL တစ်ခု ပြန်ဖန်တီးနိုင်စေပါတယ်။

ဒီ function ရှိပြီးနောက်၊ မည်သည့် route နဲ့မကိုက်ညီတဲ့ path တစ်ခုရိုက်ထည့်လိုက်ရင် ဖြစ်တဲ့ပြဿနာကို ဖြေရှင်းနိုင်ပါပြီ။ `updateRoute` function ကို နည်းနည်းပြင်ပြီး၊ မကိုက်ညီတဲ့ path တွေအတွက် ရှိပြီးသား route တစ်ခုကို fallback အဖြစ် သတ်မှတ်ပါမယ်။

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Route တစ်ခုကို မတွေ့ရင်၊ အခုတော့ `login` စာမျက်နှာကို ပြန်လည်သွားပါလိမ့်မယ်။

Link တစ်ခုကို click လုပ်တဲ့အခါ URL ကို ရယူပြီး၊ browser ရဲ့ default link behavior ကို တားဆီးဖို့ function တစ်ခု ဖန်တီးပါ။

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Login နဲ့ Logout links တွေကို HTML ထဲမှာ binding လုပ်ပြီး navigation system ကို ပြည့်စုံအောင်လုပ်ပါ။

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

အထက်ပါ `event` object က `click` event ကို ဖမ်းပြီး၊ `onLinkClick` function ကို ပေးပို့ပါတယ်။

[`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) attribute ကို အသုံးပြုပြီး `click` event ကို JavaScript code နဲ့ bind လုပ်ပါ၊ ဒီနေရာမှာတော့ `navigate()` function ကို ခေါ်ပါ။

ဒီ links တွေကို click လုပ်ကြည့်ပါ၊ အခုတော့ app ရဲ့ စာမျက်နှာအမျိုးမျိုးအကြား navigation လုပ်နိုင်ပါပြီ။

✅ `history.pushState` method ဟာ HTML5 standard ရဲ့ အစိတ်အပိုင်းတစ်ခုဖြစ်ပြီး [ခေတ်သစ် browser အားလုံး](https://caniuse.com/?search=pushState) မှာ အကောင်အထည်ဖော်ထားပါတယ်။ အဟောင်း browser တွေအတွက် web app တစ်ခု တည်ဆောက်နေတယ်ဆိုရင်၊ ဒီ API အစား အသုံးပြုနိုင်တဲ့ နည်းလမ်းတစ်ခုရှိပါတယ်- path ရဲ့ အရှေ့မှာ [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) ကို အသုံးပြုကာ၊ regular anchor navigation နဲ့အတူ အလုပ်လုပ်ပြီး စာမျက်နှာကို ပြန်လည်တင်သွင်းစရာမလိုတဲ့ routing ကို အကောင်အထည်ဖော်နိုင်ပါတယ်။

## Browser ရဲ့ Back နဲ့ Forward Buttons ကို Handle လုပ်ခြင်း

`history.pushState` ကို အသုံးပြုခြင်းက browser ရဲ့ navigation history မှာ အသစ်တစ်ခု ထည့်ပေးပါတယ်။ Browser ရဲ့ *back button* ကို ဖိထားပြီး စမ်းကြည့်ပါ၊ အောက်ပါအတိုင်း ပြသပေးပါလိမ့်မယ်-

![Navigation History Screenshot](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.my.png)

Back button ကို အကြိမ်ကြိမ် click လုပ်ကြည့်ပါ၊ လက်ရှိ URL က ပြောင်းသွားပြီး history က update လုပ်ပေမယ့်၊ တူညီတဲ့ template ပဲ ပြသနေပါလိမ့်မယ်။

ဒါဟာ application က history ပြောင်းလဲမှုကို updateRoute() ကို ခေါ်ဖို့ မသိတဲ့အတွက် ဖြစ်ပါတယ်။ [`history.pushState` documentation](https://developer.mozilla.org/docs/Web/API/History/pushState) ကို ကြည့်ပါက၊ state ပြောင်းလဲမှုဖြစ်ရင် - URL တစ်ခုကို ပြောင်းလဲသွားပြီဆိုတာ - [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) event တစ်ခု trigger လုပ်တယ်ဆိုတာ တွေ့ရပါမယ်။ ဒီအရာကို အသုံးပြုပြီး ပြဿနာကို ဖြေရှင်းသွားပါမယ်။

### လုပ်ဆောင်ရန်

Browser history ပြောင်းလဲမှုဖြစ်တဲ့အခါ ပြသမယ့် template ကို update လုပ်စေရန် `updateRoute()` ကို ခေါ်တဲ့ function အသစ်တစ်ခုကို `app.js` ဖိုင်ရဲ့ အောက်ဆုံးမှာ ထည့်ပါ။

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> မှတ်ချက်: ဒီမှာ `popstate` event handler ကို ကြောင်းတိုအောင် [arrow function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ကို အသုံးပြုပြီး သတ်မှတ်ထားပါတယ်၊ သို့သော် regular function တစ်ခုလည်း အလားတူအလုပ်လုပ်ပါလိမ့်မယ်။

Arrow functions အကြောင်း refresher video တစ်ခု-

[![Arrow Functions](https://img.youtube.com/vi/OP6eEbOj2

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုယူသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှားမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။