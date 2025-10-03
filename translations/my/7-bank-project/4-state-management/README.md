<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T13:20:06+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "my"
}
-->
# ဘဏ်လုပ်ငန်းအက်ပ်တည်ဆောက်ခြင်း အပိုင်း ၄: အခြေအနေစီမံခန့်ခွဲမှု၏ အယူအဆများ

## မိန့်ခွန်းမတိုင်မီမေးခွန်းများ

[မိန့်ခွန်းမတိုင်မီမေးခွန်းများ](https://ff-quizzes.netlify.app/web/quiz/47)

### အကျဉ်းချုပ်

ဝက်ဘ်အက်ပ်တစ်ခုကြီးထွားလာသည့်အခါ၊ ဒေတာများကိုစီမံခန့်ခွဲရန်အခက်အခဲဖြစ်လာနိုင်သည်။ ဘယ်ကုဒ်ကဒေတာကိုရယူသလဲ၊ ဘယ်စာမျက်နှာကအသုံးပြုသလဲ၊ ဘယ်နေရာမှာနှင့်ဘယ်အချိန်မှာ update လုပ်ဖို့လိုအပ်သလဲ... ကုဒ်များရောထွေးပြီး ထိန်းသိမ်းရန်ခက်ခဲလာနိုင်သည်။ အထူးသဖြင့် app ရဲ့အမျိုးမျိုးသောစာမျက်နှာများအကြား ဒေတာများကိုမျှဝေဖို့လိုအပ်တဲ့အခါမှာ၊ ဥပမာအားဖြင့် အသုံးပြုသူဒေတာများ။ *State management* ဆိုတဲ့အယူအဆက အမျိုးမျိုးသောပရိုဂရမ်များမှာ အမြဲရှိနေခဲ့ပေမယ့်၊ ဝက်ဘ်အက်ပ်များက ပိုမိုရှုပ်ထွေးလာတာနဲ့အမျှ ဒီအချက်ကို ဖွံ့ဖြိုးတိုးတက်မှုအတွင်းတွင် အရေးကြီးသောအချက်အနေဖြင့်စဉ်းစားဖို့လိုလာပါတယ်။

ဒီအပိုင်းနောက်ဆုံးမှာတော့၊ state ကိုဘယ်လိုစီမံခန့်ခွဲရမလဲဆိုတာကို ပြန်လည်စဉ်းစားပြီး၊ ဘရောက်ဇာကို refresh လုပ်တဲ့အချိန်မှာမည်သည့်အချိန်တွင်မဆိုထောက်ခံနိုင်ရန်နှင့် အသုံးပြုသူ session များအကြား ဒေတာများကိုတည်ရှိနေစေဖို့အတွက် app ကိုပြန်လည်ကြည့်ရှုပါမည်။

### ကြိုတင်လိုအပ်ချက်

ဒီသင်ခန်းစာအတွက် [data fetching](../3-data/README.md) အပိုင်းကိုပြီးစီးထားဖို့လိုအပ်ပါတယ်။ [Node.js](https://nodejs.org) ကို install လုပ်ပြီး [server API](../api/README.md) ကို locally run လုပ်ဖို့လည်းလိုအပ်ပါတယ်၊ ဒါမှ account data ကိုစီမံခန့်ခွဲနိုင်ပါမယ်။

Server ကအဆင်ပြေစွာ run လုပ်နေတယ်ဆိုတာကို terminal မှာ ဒီ command ကို run လုပ်ပြီးစစ်ဆေးနိုင်ပါတယ်-

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## State management ကိုပြန်လည်စဉ်းစားခြင်း

[ယခင်သင်ခန်းစာ](../3-data/README.md) မှာ၊ global `account` variable ကိုအသုံးပြုပြီး လက်ရှိ login လုပ်ထားတဲ့အသုံးပြုသူရဲ့ဘဏ်ဒေတာကိုထည့်သွင်းထားတဲ့ app ရဲ့ state အခြေခံအယူအဆကိုမိတ်ဆက်ပေးခဲ့ပါတယ်။ သို့သော်လည်း၊ လက်ရှိ implementation မှာအချို့အခက်အခဲများရှိပါတယ်။ Dashboard မှာရှိနေတဲ့အချိန်မှာစာမျက်နှာကို refresh လုပ်ကြည့်ပါ။ ဘာဖြစ်သွားလဲ?

လက်ရှိကုဒ်မှာ ၃ ခုသောပြဿနာများရှိပါတယ်-

- State ကိုတည်ရှိနေစေမထားပါဘူး၊ ဘရောက်ဇာကို refresh လုပ်တဲ့အခါ login စာမျက်နှာကိုပြန်သွားပါတယ်။
- State ကိုပြောင်းလဲစေတဲ့ function များစွာရှိပါတယ်။ App ကြီးလာတာနဲ့အမျှ၊ ဒါကပြောင်းလဲမှုများကိုစစ်ဆေးဖို့ခက်ခဲစေပြီး တစ်ခုခုကို update လုပ်ဖို့မေ့လို့ဖြစ်နိုင်ပါတယ်။
- State ကိုရှင်းလင်းမလုပ်ပါဘူး၊ ဒါကြောင့် *Logout* ကိုနှိပ်တဲ့အခါ login စာမျက်နှာမှာရှိနေတဲ့အချိန်မှာတောင် account data ကအဲဒီမှာရှိနေဆဲဖြစ်ပါတယ်။

ဒီပြဿနာတွေကိုတစ်ခုချင်း update လုပ်ဖို့အစား၊ အချိန်အနည်းငယ်ယူပြီး မိမိရဲ့နည်းလမ်းကိုပြန်လည်စဉ်းစားနိုင်ပါတယ်။

> ဒီမှာအမှန်တကယ်ဖြေရှင်းဖို့ကြိုးစားနေတဲ့ပြဿနာတွေကဘာလဲ?

[State management](https://en.wikipedia.org/wiki/State_management) ဆိုတာ app ရဲ့ data flow တွေကိုနားလည်ရလွယ်ကူတဲ့နည်းလမ်းကိုရှာဖွေဖို့နှင့် state data ကိုအသုံးပြုသူ interface နဲ့အမြဲတန်းအညီအမျှထားဖို့ (နှင့်အတူတူ) ဘယ်လိုလုပ်ရမလဲဆိုတာကိုအဓိကထားတဲ့အရာဖြစ်ပါတယ်။

ဒီအချက်တွေကိုစီမံခန့်ခွဲပြီးပြီဆိုရင်၊ မိမိရဲ့ app မှာရှိနေနိုင်တဲ့အခြားပြဿနာတွေဟာ အရင်ကတည်းကဖြေရှင်းပြီးသားဖြစ်နိုင်ပါတယ်၊ ဒါမှမဟုတ် ဖြေရှင်းဖို့ပိုမိုလွယ်ကူလာနိုင်ပါတယ်။ ဒီပြဿနာတွေကိုဖြေရှင်းဖို့နည်းလမ်းများစွာရှိပေမယ့်၊ **ဒေတာနှင့် ဒေတာကိုပြောင်းလဲစေတဲ့နည်းလမ်းများကိုအလယ်တွင်စုစည်းခြင်း** ဆိုတဲ့နည်းလမ်းကိုအသုံးပြုပါမယ်။ Data flow တွေကဒီလိုဖြစ်ပါမယ်-

![HTML, user actions နှင့် state အကြား data flow တွေကိုပြသတဲ့ schema](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.my.png)

> ဒီမှာ data က view ကိုအလိုအလျောက် update လုပ်စေတဲ့အပိုင်းကိုမဖော်ပြပါဘူး၊ ဒါက [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming) ရဲ့ပိုမိုရှုပ်ထွေးတဲ့အယူအဆတွေနဲ့ဆက်စပ်နေပါတယ်။ အနက်ရှိုင်းစွာလေ့လာချင်ရင်တော့ ဒီအကြောင်းအရာကိုဆက်လက်လေ့လာနိုင်ပါတယ်။

✅ State management အတွက်နည်းလမ်းအမျိုးမျိုးနဲ့ library တွေများစွာရှိပါတယ်၊ [Redux](https://redux.js.org) ကလူကြိုက်များတဲ့ရွေးချယ်မှုတစ်ခုဖြစ်ပါတယ်။ အကြီးမားတဲ့ဝက်ဘ်အက်ပ်တွေမှာဖြစ်နိုင်တဲ့ပြဿနာတွေကိုဘယ်လိုဖြေရှင်းနိုင်မလဲဆိုတာကိုလေ့လာဖို့အကောင်းဆုံးနည်းလမ်းတစ်ခုအဖြစ် concept တွေနဲ့ pattern တွေကိုကြည့်ရှုပါ။

### Task

Refactoring အနည်းငယ်နဲ့စတင်ပါမယ်။ `account` ကိုအောက်ပါအတိုင်းအစားပြောင်းပါ-

```js
let account = null;
```

အစား-

```js
let state = {
  account: null
};
```

အဓိကအကြောင်းအရာက app ရဲ့ data အားလုံးကို state object တစ်ခုထဲမှာစုစည်းဖို့ဖြစ်ပါတယ်။ လက်ရှိမှာ state မှာ `account` တစ်ခုသာရှိတာကြောင့် များစွာပြောင်းလဲမှုမရှိပါဘူး၊ ဒါပေမယ့်အနာဂတ်အတွက်လမ်းကြောင်းဖန်တီးပေးပါတယ်။

ဒါ့အပြင်၊ ဒါကိုအသုံးပြုတဲ့ function တွေကိုလည်း update လုပ်ဖို့လိုအပ်ပါတယ်။ `register()` နှင့် `login()` function တွေမှာ `account = ...` ကို `state.account = ...` နဲ့အစားထိုးပါ။

`updateDashboard()` function ရဲ့အပေါ်ဆုံးမှာ ဒီလိုလိုင်းတစ်ခုထည့်ပါ-

```js
const account = state.account;
```

ဒီ refactoring ကိုလုပ်တာနဲ့အတူ အများကြီးတိုးတက်မှုမရရှိခဲ့ပေမယ့်၊ အနာဂတ်အတွက်အခြေခံအုတ်မြစ်တစ်ခုကိုဖန်တီးဖို့ရည်ရွယ်ခဲ့တာပါ။

## ဒေတာပြောင်းလဲမှုများကိုစစ်ဆေးခြင်း

State object ကို data ကိုသိမ်းဆည်းဖို့အသုံးပြုထားပြီးနောက်၊ ပြောင်းလဲမှုများကိုစုစည်းဖို့နောက်တစ်ဆင့်အဆင့်တက်ပါမယ်။ ပြောင်းလဲမှုများနှင့်အချိန်ကိုလွယ်ကူစွာစစ်ဆေးနိုင်ဖို့ရည်ရွယ်ပါတယ်။

State object ကိုပြောင်းလဲမှုများမဖြစ်စေဖို့၊ [*immutable*](https://en.wikipedia.org/wiki/Immutable_object) အဖြစ်စဉ်းစားဖို့ကောင်းတဲ့အလေ့အကျင့်တစ်ခုဖြစ်ပါတယ်၊ ဒါဟာ state object ကိုအလုံးစုံပြောင်းလဲမရနိုင်ပါဘူး။ ဒါက unwanted [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) မဖြစ်စေဖို့ကာကွယ်မှုတစ်ခုကိုတည်ဆောက်ပေးပြီး၊ undo/redo ကိုအကောင်အထည်ဖော်ခြင်းလိုမျိုး app ရဲ့ features အသစ်များကိုတိုးချဲ့ဖို့လမ်းဖွင့်ပေးပါတယ်၊ debugging လုပ်ဖို့လည်းပိုမိုလွယ်ကူစေပါတယ်။ ဥပမာအားဖြင့်၊ state ကိုပြောင်းလဲမှုတိုင်းကို log လုပ်ပြီး bug ရဲ့အရင်းအမြစ်ကိုနားလည်ဖို့ပြောင်းလဲမှုများရဲ့သမိုင်းကိုသိမ်းဆည်းနိုင်ပါတယ်။

JavaScript မှာ [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ကိုအသုံးပြုပြီး object တစ်ခုရဲ့ immutable version ကိုဖန်တီးနိုင်ပါတယ်။ Immutable object ကိုပြောင်းလဲဖို့ကြိုးစားရင် exception တစ်ခုထွက်ပါမယ်။

✅ *shallow* immutable object နဲ့ *deep* immutable object ရဲ့ကွာခြားချက်ကိုသိပါသလား? [ဒီမှာ](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze) ဖတ်ရှုနိုင်ပါတယ်။

### Task

`updateState()` function အသစ်တစ်ခုဖန်တီးပါ-

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

ဒီ function မှာ၊ [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) ကိုအသုံးပြုပြီး state object အသစ်တစ်ခုကိုဖန်တီးပြီး၊ ယခင် state မှ data ကို copy လုပ်ပါတယ်။ ထို့နောက် state object ရဲ့ property တစ်ခုကို [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` ကိုအသုံးပြုပြီး override လုပ်ပါတယ်။ နောက်ဆုံးမှာ `Object.freeze()` ကိုအသုံးပြုပြီး object ကို lock လုပ်ပါတယ်။ လက်ရှိမှာ state မှာ `account` property တစ်ခုသာရှိပေမယ့်၊ ဒီနည်းလမ်းနဲ့ state မှာလိုအပ်သလို property တွေထည့်နိုင်ပါတယ်။

State initialization ကိုလည်း update လုပ်ပြီး initial state ကိုလည်း freeze လုပ်ထားဖို့သေချာစေပါ-

```js
let state = Object.freeze({
  account: null
});
```

ထို့နောက်၊ `register` function ကို update လုပ်ပြီး `state.account = result;` assignment ကိုအစားထိုးပါ-

```js
updateState('account', result);
```

`login` function ကိုလည်းအတူတူ update လုပ်ပြီး `state.account = data;` ကိုအစားထိုးပါ-

```js
updateState('account', data);
```

အခုတော့ *Logout* ကိုနှိပ်တဲ့အခါ အသုံးပြုသူရဲ့ account data ကိုရှင်းလင်းမလုပ်တဲ့ပြဿနာကိုဖြေရှင်းဖို့အခွင့်အရေးရရှိပါပြီ။

`logout()` function အသစ်တစ်ခုဖန်တီးပါ-

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()` မှာ `return navigate('/login');` redirection ကို `return logout();` နဲ့အစားထိုးပါ။

Account အသစ်တစ်ခု register လုပ်ပြီး၊ logout လုပ်ပြီးပြန် login လုပ်ကြည့်ပါ၊ အားလုံးအဆင်ပြေစွာလုပ်ဆောင်နေတယ်ဆိုတာစစ်ဆေးပါ။

> အကြံပြုချက်- state ပြောင်းလဲမှုအားလုံးကို browser ရဲ့ development tools မှာ console ကိုဖွင့်ပြီး `updateState()` ရဲ့အောက်ဆုံးမှာ `console.log(state)` ထည့်ပြီးကြည့်နိုင်ပါတယ်။

## State ကိုတည်ရှိနေစေခြင်း

ဝက်ဘ်အက်ပ်များအများစုမှာ data ကိုတည်ရှိနေစေရန်လိုအပ်ပါတယ်။ အရေးကြီးသော data အားလုံးကို database မှာသိမ်းဆည်းပြီး server API မှတဆင့် access လုပ်ပါတယ်၊ ဥပမာအားဖြင့် အသုံးပြုသူ account data ကဲ့သို့။ သို့သော်လည်း၊ browser မှာ run လုပ်နေတဲ့ client app မှာ data တစ်ချို့ကိုတည်ရှိနေစေရန်လည်း sometimes အကျိုးရှိပါတယ်၊ user experience ကိုပိုမိုကောင်းမွန်စေဖို့ ဒါမှမဟုတ် loading performance ကိုတိုးတက်စေဖို့။

Browser မှာ data ကိုတည်ရှိနေစေချင်တဲ့အခါ၊ အရေးကြီးသောမေးခွန်းတစ်ချို့ကိုမေးဖို့လိုအပ်ပါတယ်-

- *Data က sensitive ဖြစ်ပါသလား?* အသုံးပြုသူရဲ့ password ကဲ့သို့ sensitive data ကို client မှာသိမ်းဆည်းတာကိုရှောင်ရှားသင့်ပါတယ်။
- *ဒီ data ကိုဘယ်လောက်ကြာကြာထားချင်ပါသလဲ?* ဒီ data ကိုလက်ရှိ session အတွက်သာ access လုပ်ချင်ပါသလား၊ ဒါမှမဟုတ် အမြဲတမ်းသိမ်းဆည်းထားချင်ပါသလား?

Web app အတွင်းမှာ data ကိုသိမ်းဆည်းဖို့နည်းလမ်းများစွာရှိပါတယ်၊ မိမိရဲ့ရည်ရွယ်ချက်အပေါ်မူတည်ပြီး။ ဥပမာအားဖြင့်၊ search query ကို URL တွေမှာသိမ်းဆည်းပြီး အသုံးပြုသူများအကြားမျှဝေနိုင်ပါတယ်။ [Authentication](https://en.wikipedia.org/wiki/Authentication) အချက်အလက်ကဲ့သို့ server နဲ့မျှဝေဖို့လိုအပ်တဲ့ data အတွက် [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) ကိုအသုံးပြုနိုင်ပါတယ်။

Browser API များစွာရှိပြီး data ကိုသိမ်းဆည်းဖို့အတွက်အခြားရွေးချယ်မှုများလည်းရှိပါတယ်။ အထူးသဖြင့်အကျိုးရှိတဲ့ API နှစ်ခုရှိပါတယ်-

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) တစ်ခုဖြစ်ပြီး လက်ရှိ website အတွက် data ကို session များအကြားတည်ရှိနေစေပါတယ်။ ဒီ data က expiration မရှိပါဘူး။
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): ဒီ API က `localStorage` နဲ့တူပေမယ့် session ပြီးဆုံးတဲ့အခါ (browser ကိုပိတ်တဲ့အခါ) data ကိုရှင်းလင်းပေးပါတယ်။

API နှစ်ခုလုံးက [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) ကိုသာသိမ်းဆည်းနိုင်ပါတယ်။ Complex object တွေကိုသိမ်းဆည်းချင်ရင် [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) format ကိုအသုံးပြုပြီး serialize လုပ်ဖို့လိုအပ်ပါတယ်၊ [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) ကိုအသုံးပြုပါ။

✅ Server မရှိတဲ့ web app တစ်ခုကိုဖန်တီးချင်ရင်၊ [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) ကိုအသုံးပြုပြီး client မှာ database တစ်ခုဖန်တီးနိုင်ပါတယ်။ ဒါက advanced use case တွေအတွက်သို့မဟုတ် data အများကြီးသိမ်းဆည်းဖို့လိုအပ်တဲ့အခါအတွက်သာအသုံးပြုသင့်ပါတယ်၊ အလွန်ရှုပ်ထွေးတဲ့အတွက်။

### Task

အသုံးပြုသူတွေ *Logout* button ကို explicitly click လုပ်တဲ့အချိန်အထိ login လုပ်နေစေချင်ပါတယ်၊ ဒါကြောင့် `localStorage` ကိုအသုံးပြုပြီး account data ကိုသိမ်းဆည်းပါမယ်။ အရင်ဆုံး၊ data ကိုသိမ်းဆည်းဖို့အသုံးပြုမယ့် key ကိုသတ်မှတ်ပါ။

```js
const storageKey = 'savedAccount';
```

ထို့နောက် `updateState()` function ရဲ့အဆုံးမှာဒီလိုလိုင်းတစ်ခုထည့်ပါ-

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

ဒီနည်းလမ်းနဲ့ user account data ကတည်ရှိနေပြီး၊ state update အားလုံးကို centralized လုပ်ထားတဲ့အကျိုးကျေးဇူးကိုရရှိပါတယ်။ ဒီမှာတော့ အရင်ကလုပ်ထားတဲ့ refactor တွေကအကျိုးကျေးဇူးပေးလာ
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/48)

## အလုပ်ပေးစာ

[အလုပ်ပေးစာ "Add transaction" dialog ကို အကောင်အထည်ဖော်ပါ](assignment.md)

အလုပ်ပေးစာကို ပြီးမြောက်ပြီးနောက်ရရှိမည့် ရလဒ်ဥပမာမှာ အောက်ပါအတိုင်းဖြစ်ပါသည် -

![Screenshot showing an example "Add transaction" dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.my.png)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုမှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။