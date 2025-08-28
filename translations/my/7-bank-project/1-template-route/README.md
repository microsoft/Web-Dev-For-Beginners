<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-27T22:07:57+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "my"
}
-->
# ဘဏ်အက်ပ်တည်ဆောက်ခြင်း အပိုင်း ၁: Web App တွင် HTML Templates နှင့် Routes

## မိန့်ခွန်းမတင်မီ စမ်းမေးခွန်း

[မိန့်ခွန်းမတင်မီ စမ်းမေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/41)

### နိဒါန်း

JavaScript ကို browser တွင် အသုံးပြုလာပြီးနောက်ပိုင်းကစ၍ ဝဘ်ဆိုဒ်များသည် ယခင်ထက် ပိုမိုအကျိုးရှိပြီး ရှုပ်ထွေးလာသည်။ ယနေ့ခေတ်တွင် ဝဘ်နည်းပညာများကို browser အတွင်းမှ တိုက်ရိုက်လည်ပတ်နိုင်သော [ဝဘ်အက်ပ်](https://en.wikipedia.org/wiki/Web_application) များ ဖန်တီးရန် အသုံးပြုလေ့ရှိသည်။ ဝဘ်အက်ပ်များသည် အလွန်အကျိုးရှိသောကြောင့် အသုံးပြုသူများသည် လုပ်ဆောင်ချက်တစ်ခုစီအတွက် စာမျက်နှာတစ်ခုလုံး ပြန်လည်တင်ရန် စောင့်ဆိုင်းလိုကြခြင်းမရှိပါ။ ထို့ကြောင့် JavaScript ကို DOM ကို အသုံးပြု၍ HTML ကို တိုက်ရိုက် ပြောင်းလဲရန် အသုံးပြုပြီး အသုံးပြုသူအတွေ့အကြုံကို ပိုမိုချောမွေ့စေသည်။

ဒီသင်ခန်းစာတွင် HTML templates ကို အသုံးပြု၍ စာမျက်နှာတစ်ခုလုံး ပြန်လည်တင်ရန် မလိုဘဲ မျက်နှာပြင်များစွာ ဖန်တီးနိုင်ရန် အခြေခံအဆောက်အအုံများကို တည်ဆောက်သွားမည်ဖြစ်သည်။

### ကြိုတင်လိုအပ်ချက်

ဒီသင်ခန်းစာတွင် ဖန်တီးမည့် ဝဘ်အက်ပ်ကို စမ်းသပ်ရန် သင့်တွင် ဒေသခံ web server တစ်ခု လိုအပ်ပါသည်။ သင့်တွင် မရှိသေးပါက [Node.js](https://nodejs.org) ကို ထည့်သွင်းပြီး သင့်ပရောဂျက်ဖိုလ်ဒါမှ `npx lite-server` command ကို အသုံးပြုနိုင်ပါသည်။ ၎င်းသည် ဒေသခံ web server တစ်ခု ဖန်တီးပြီး သင့်အက်ပ်ကို browser တွင် ဖွင့်ပေးမည်ဖြစ်သည်။

### ပြင်ဆင်မှု

သင့်ကွန်ပျူတာတွင် `bank` ဟုအမည်ပေးထားသော ဖိုလ်ဒါတစ်ခု ဖန်တီးပြီး `index.html` ဟုအမည်ပေးထားသော ဖိုင်တစ်ခု ထည့်ပါ။ ကျွန်ုပ်တို့သည် ဒီ HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) မှ စတင်ပါမည်-

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

ဝဘ်စာမျက်နှာအတွက် မျက်နှာပြင်များစွာ ဖန်တီးလိုပါက၊ မျက်နှာပြင်တစ်ခုစီအတွက် HTML ဖိုင်တစ်ခုစီ ဖန်တီးရန် သင်္ကေတတစ်ခုဖြစ်နိုင်သည်။ သို့သော်၊ ဒီနည်းလမ်းတွင် အခက်အခဲအချို့ရှိသည်-

- မျက်နှာပြင်ပြောင်းလဲသည့်အခါ HTML အပြည့်အစုံကို ပြန်လည်တင်ရမည်ဖြစ်ပြီး၊ ၎င်းသည် နှေးကွေးနိုင်သည်။
- မတူညီသော မျက်နှာပြင်များအကြား ဒေတာမျှဝေရန် ခက်ခဲသည်။

အခြားနည်းလမ်းတစ်ခုမှာ HTML ဖိုင်တစ်ခုသာရှိပြီး `<template>` element ကို အသုံးပြု၍ [HTML templates](https://developer.mozilla.org/docs/Web/HTML/Element/template) များစွာ သတ်မှတ်ခြင်းဖြစ်သည်။ Template သည် browser မှ မမြင်ရသော HTML block တစ်ခုဖြစ်ပြီး JavaScript ကို အသုံးပြု၍ runtime တွင် instantiate လုပ်ရန် လိုအပ်သည်။

### တာဝန်

ကျွန်ုပ်တို့သည် login စာမျက်နှာနှင့် dashboard စာမျက်နှာတို့ပါဝင်သည့် ဘဏ်အက်ပ်တစ်ခု ဖန်တီးမည်ဖြစ်သည်။ ပထမဦးစွာ၊ HTML body အတွင်း app ၏ မျက်နှာပြင်များကို instantiate လုပ်ရန် အသုံးပြုမည့် placeholder element တစ်ခု ထည့်ပါ-

```html
<div id="app">Loading...</div>
```

JavaScript ဖြင့် နောက်ပိုင်းတွင် ရှာဖွေရန် လွယ်ကူစေရန် `id` တစ်ခု ပေးထားပါသည်။

> အကြံပြုချက်- ဒီ element ၏ အကြောင်းအရာကို အစားထိုးမည်ဖြစ်သောကြောင့်၊ အက်ပ်တင်နေစဉ် ပြသမည့် loading message သို့မဟုတ် indicator တစ်ခု ထည့်နိုင်ပါသည်။

ထို့နောက် login စာမျက်နှာအတွက် HTML template ကို ထည့်ပါ။ ယာယီအားဖြင့် title တစ်ခုနှင့် navigation ပြုလုပ်ရန် အသုံးပြုမည့် link ပါဝင်သည့် section တစ်ခု ထည့်ပါမည်။

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

ထို့နောက် dashboard စာမျက်နှာအတွက် HTML template တစ်ခု ထည့်ပါမည်။ ဒီစာမျက်နှာတွင် အောက်ပါ section များပါဝင်မည်-

- title နှင့် logout link ပါဝင်သည့် header
- ဘဏ်အကောင့်၏ လက်ရှိလက်ကျန်ငွေ
- အပြောင်းအလဲများကို table ဖြင့် ပြသထားသော စာရင်း

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

> အကြံပြုချက်- HTML templates ဖန်တီးစဉ်၊ ၎င်း၏ ပုံစံကို ကြည့်လိုပါက `<template>` နှင့် `</template>` ကို `<!-- -->` ဖြင့် comment ထားနိုင်သည်။

✅ Template များတွင် `id` attributes ကို အသုံးပြုရသည့်အကြောင်းကို သင်ထင်သလဲ။ classes တို့ကဲ့သို့ အခြားအရာများကို အသုံးပြုနိုင်မည်လား။

## JavaScript ဖြင့် Templates ပြသခြင်း

သင့် HTML ဖိုင်ကို browser တွင် စမ်းကြည့်ပါက `Loading...` သာ ပြသနေမည်ဖြစ်သည်။ ၎င်းသည် HTML templates များကို instantiate လုပ်ပြီး ပြသရန် JavaScript code ထည့်ရန် လိုအပ်သည့်အတွက်ဖြစ်သည်။

Template တစ်ခုကို instantiate လုပ်ရန် 通常 ၃ ချက်လိုအပ်သည်-

1. DOM အတွင်းမှ template element ကို ရှာဖွေပါ၊ ဥပမာ [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById) ကို အသုံးပြုပါ။
2. Template element ကို [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode) ဖြင့် ကူးယူပါ။
3. ၎င်းကို DOM အတွင်း မြင်နိုင်သော element တစ်ခုအောက်တွင် [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) ဖြင့် ထည့်ပါ။

✅ Template ကို DOM တွင် ထည့်မီ ကူးယူရန် လိုအပ်သည့်အကြောင်းကို သင်ထင်သလဲ။ ဒီအဆင့်ကို ကျော်လွှားပါက ဘာဖြစ်မည်လဲ။

### တာဝန်

သင့် project ဖိုလ်ဒါတွင် `app.js` ဟုအမည်ပေးထားသော ဖိုင်အသစ်တစ်ခု ဖန်တီးပြီး HTML ၏ `<head>` အပိုင်းတွင် ၎င်းကို import လုပ်ပါ-

```html
<script src="app.js" defer></script>
```

ထို့နောက် `app.js` တွင် `updateRoute` ဟုအမည်ပေးထားသော function အသစ်တစ်ခု ဖန်တီးပါ-

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

ဒီနေရာတွင် ကျွန်ုပ်တို့သည် အထက်ဖော်ပြထားသော ၃ ချက်ကို အတိအကျ လုပ်ဆောင်ပါသည်။ `templateId` ဖြင့် id ရှိသော template ကို instantiate လုပ်ပြီး၊ ၎င်း၏ cloned content ကို app placeholder အတွင်း ထည့်ပါသည်။ `cloneNode(true)` ကို အသုံးပြု၍ template ၏ subtree အပြည့်အစုံကို ကူးယူရန် လိုအပ်သည်။

ယခု function ကို template တစ်ခုနှင့်အတူ ခေါ်ပြီး ရလဒ်ကို ကြည့်ပါ-

```js
updateRoute('login');
```

✅ `app.innerHTML = '';` ဟုရေးထားသော code ၏ ရည်ရွယ်ချက်ကဘာလဲ။ ၎င်းမပါဘဲဖြစ်ပါက ဘာဖြစ်မည်လဲ။

## Routes ဖန်တီးခြင်း

ဝဘ်အက်ပ်နှင့်ပတ်သက်၍ Routes ဆိုသည်မှာ **URLs** ကို ပြသရန် မျက်နှာပြင်များနှင့် ဆက်စပ်ရန် ရည်ရွယ်ချက်ဖြစ်သည်။ HTML ဖိုင်များစွာပါဝင်သော ဝဘ်ဆိုဒ်တွင်၊ ၎င်းကို အလိုအလျောက် ပြုလုပ်နိုင်သည်။ ဥပမာ၊ သင့် project ဖိုလ်ဒါတွင် အောက်ပါဖိုင်များရှိပါက-

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

`mywebsite` ကို root အဖြစ် သတ်မှတ်ထားသော web server တစ်ခု ဖန်တီးပါက၊ URL mapping သည်-

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

သို့သော်၊ ကျွန်ုပ်တို့၏ ဝဘ်အက်ပ်သည် မျက်နှာပြင်အားလုံးပါဝင်သော HTML ဖိုင်တစ်ခုသာ အသုံးပြုနေသောကြောင့် ဒီ default အပြုအမူသည် အကျိုးမရှိပါ။ ကျွန်ုပ်တို့သည် ဒီ mapping ကို ကိုယ်တိုင် ဖန်တီးပြီး JavaScript ကို အသုံးပြု၍ ပြသမည့် template ကို ပြောင်းလဲရမည်ဖြစ်သည်။

### တာဝန်

URL paths နှင့် templates များကို [map](https://en.wikipedia.org/wiki/Associative_array) တစ်ခုဖြင့် ဆက်စပ်ရန် ရိုးရှင်းသော object တစ်ခုကို `app.js` ဖိုင်၏ အပေါ်ဆုံးတွင် ထည့်ပါ။

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

ထို့နောက် `updateRoute` function ကို အနည်းငယ် ပြောင်းလဲပါ။ `templateId` ကို တိုက်ရိုက် argument အဖြစ် ပေးပို့ခြင်းမပြုဘဲ၊ လက်ရှိ URL ကို ကြည့်ပြီး၊ map ကို အသုံးပြု၍ သက်ဆိုင်ရာ template ID ကို ရယူလိုပါသည်။ [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) ကို အသုံးပြု၍ URL ၏ path အပိုင်းကိုသာ ရယူနိုင်သည်။

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

ဒီနေရာတွင် ကျွန်ုပ်တို့ သတ်မှတ်ထားသော routes များကို သက်ဆိုင်ရာ template နှင့် mapping ပြုလုပ်ထားသည်။ Browser တွင် URL ကို လက်ဖြင့် ပြောင်းလဲပြီး စမ်းကြည့်ပါ။

✅ URL တွင် မသိသော path တစ်ခု ထည့်ပါက ဘာဖြစ်မည်လဲ။ ၎င်းကို ဘယ်လို ဖြေရှင်းနိုင်မည်လဲ။

## Navigation ထည့်သွင်းခြင်း

ကျွန်ုပ်တို့၏ app ၏ နောက်တစ်ဆင့်မှာ URL ကို လက်ဖြင့် ပြောင်းလဲရန် မလိုဘဲ စာမျက်နှာများအကြား navigation ပြုလုပ်နိုင်စေရန်ဖြစ်သည်။ ၎င်းသည် အောက်ပါ ၂ ချက်ကို အဓိကပါဝင်သည်-

1. လက်ရှိ URL ကို ပြောင်းလဲခြင်း
2. Template ကို အသစ်ပြောင်းလဲထားသော URL အပေါ် မူတည်၍ ပြသခြင်း

`updateRoute` function ဖြင့် ဒုတိယအပိုင်းကို ပြုလုပ်ပြီးဖြစ်သောကြောင့်၊ လက်ရှိ URL ကို ပြောင်းလဲရန်သာ လိုအပ်ပါသည်။

JavaScript ကို အသုံးပြုရမည်ဖြစ်ပြီး၊ HTML ကို ပြန်လည်တင်ခြင်းမပြုဘဲ URL ကို ပြောင်းလဲပြီး browsing history တွင် entry အသစ်တစ်ခု ဖန်တီးရန် [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) ကို အသုံးပြုရမည်ဖြစ်သည်။

> မှတ်ချက်- HTML anchor element [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) ကို အသုံးပြု၍ URL များသို့ hyperlink ဖန်တီးနိုင်သော်လည်း၊ default အနေဖြင့် browser သည် HTML ကို ပြန်လည်တင်မည်ဖြစ်သည်။ preventDefault() function ကို click event တွင် အသုံးပြု၍ ဒီအပြုအမူကို တားဆီးရန် လိုအပ်သည်။

### တာဝန်

App အတွင်း navigation ပြုလုပ်ရန် အသုံးပြုနိုင်သော function အသစ်တစ်ခု ဖန်တီးပါ-

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

ဒီ method သည် ပေးထားသော path အပေါ်မူတည်၍ လက်ရှိ URL ကို update ပြုလုပ်ပြီး၊ template ကို update ပြုလုပ်သည်။ `window.location.origin` သည် URL root ကို ပြန်ပေးပြီး၊ ပေးထားသော path မှ URL အပြည့်အစုံကို ပြန်လည်တည်ဆောက်ရန် ခွင့်ပြုသည်။

ယခု function ရှိပြီးနောက်၊ path တစ်ခုသည် သတ်မှတ်ထားသော route များနှင့် မကိုက်ညီပါက ဖြစ်ပေါ်သော ပြဿနာကို ဖြေရှင်းနိုင်ပါသည်။ `updateRoute` function ကို ပြောင်းလဲပြီး၊ မကိုက်ညီသောအခါ ရှိပြီးသား route တစ်ခုသို့ fallback ပြုလုပ်ပါမည်။

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Route တစ်ခုကို ရှာမတွေ့ပါက ယခုတွင် `login` စာမျက်နှာသို့ redirect ပြုလုပ်မည်ဖြစ်သည်။

Link တစ်ခုကို click ပြုလုပ်သောအခါ URL ကို ရယူပြီး browser ၏ default link အပြုအမူကို တားဆီးရန် function တစ်ခု ဖန်တီးပါ-

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Login နှင့် Logout links များကို HTML တွင် binding ပြုလုပ်၍ navigation system ကို ပြည့်စုံစေပါမည်။

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

အထက်ပါ `event` object သည် `click` event ကို ဖမ်းယူပြီး ၎င်းကို `onLinkClick` function သို့ ပေးပို့သည်။

[`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) attribute ကို အသုံးပြု၍ `click` event ကို JavaScript code (ဤနေရာတွင် `navigate()` function ကို ခေါ်ခြင်း) နှင့် bind ပြုလုပ်ပါ။

ဒီ links များကို click ပြုလုပ်ကြည့်ပါ၊ app ၏ မျက်နှာပြင်များအကြား navigation ပြုလုပ်နိုင်ရမည်ဖြစ်သည်။

✅ `history.pushState` method သည် HTML5 စံနှင့်အညီဖြစ်ပြီး [ခေတ်မီ browser များအားလုံး](https://caniuse.com/?search=pushState) တွင် အကောင်အထည်ဖော်ထားသည်။ သို့သော်၊ သင်ဟောင်းနောက်ကျသော browser များအတွက် ဝဘ်အက်ပ်တစ်ခု တည်ဆောက်နေပါက၊ ဒီ API အစား အသုံးပြုနိုင်သော နည်းလမ်းတစ်ခုရှိသည်- path မတိုင်မီ [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) ကို အသုံးပြု၍ regular anchor navigation ဖြင့် ပြုလုပ်နိုင်ပြီး စာမျက်နှာကို ပြန်လည်တင်မည်မဟုတ်ပါ၊ ၎င်း၏ ရည်ရွယ်ချက်မှာ စာမျက်နှာအတွင်း internal links ဖန်တီးရန်ဖြစ်သည်။

## Browser ၏ Back နှင့် Forward Buttons ကို ကိုင်တွယ်ခြင်း

`history.pushState` ကို အသုံးပြုခြင်းဖြင့် browser ၏ navigation history တွင် entry အသစ်များ ဖန်တီးသည်။ Browser ၏ *back button* ကို ဖိထားကြည့်ပါက အောက်ပါအတိုင်း ပြသမည်ဖြစ်သည်-

![Navigation history ၏ Screenshot](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.my.png)

Back button ကို အကြိမ်အများကြိမ် click ပြုလုပ်ကြည့်ပါက၊ လက်ရှိ URL သည် ပြောင်းလဲပြီး history ကို update ပြုလုပ်မည်ဖြစ်သော်လည်း၊ template တူညီသည်ကိုသာ ပြသနေမည်ဖြစ်သည်။

၎င်းသည် state ပြောင်းလဲမှု - URL တစ်ခုမှ တစ်ခုသို့ ရွှေ့ပြောင်းမှု - ဖြစ်ပေါ်ပါက [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) event ကို trigger ပြုလုပ်သည်ဟု [`history.pushState` documentation](https://developer.mozilla.org/docs/Web/API/History/pushState) တွင် ဖော်ပြထားသည်။ ဒီပြဿနာကို ဖြေရှင်းရန် ၎င်းကို အသုံးပြုမည်ဖြစ်သည်။

### တာဝန်

Browser history ပြောင်းလဲမှုအခါတွင် ပြသထားသော template ကို update ပြုလုပ်ရန် `updateRoute()` ကို ခေါ်သည့် function အသစ်တစ်ခုကို `app.js` ဖိုင်၏ အောက်ဆုံးတွင် ထည့်ပါ-

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> မှတ်ချက်- ဒီနေရာတွင် `popstate` event handler ကို ရှင်းလင်းစွာ ဖော်ပြရန် [arrow function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ကို အသုံးပြုထားသော်လည်း၊ ပုံမှန် function တစ်ခုလည်း အလားတူအလုပ်လုပ်မည်ဖြစ်သည်။

Arrow functions အကြောင်း refresher video-

[![Arrow Functions](https://img.youtube.com/vi/OP6eEbOj2sc/0

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှု ဝန်ဆောင်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။