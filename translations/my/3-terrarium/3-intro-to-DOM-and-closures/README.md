<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "61c14b27044861e5e69db35dd52c4403",
  "translation_date": "2025-08-28T18:45:03+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "my"
}
-->
# Terrarium Project Part 3: DOM Manipulation and a Closure

![DOM and a closure](../../../../translated_images/webdev101-js.10280393044d7eaaec7e847574946add7ddae6be2b2194567d848b61d849334a.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိမိကိုယ်ကို စမ်းမေးခွန်း

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/19)

### အကျဉ်းချုပ်

DOM (Document Object Model) ကို ပြောင်းလဲခြင်းသည် ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှုတွင် အရေးပါသော အပိုင်းတစ်ခုဖြစ်သည်။ [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) အဆိုအရ "Document Object Model (DOM) သည် ဝဘ်ပေါ်တွင် စာရွက်၏ ဖွဲ့စည်းပုံနှင့် အကြောင်းအရာကို ဖော်ပြထားသော အရာများ၏ ဒေတာကို ကိုယ်စားပြုခြင်းဖြစ်သည်။" DOM ကို JavaScript ဖြင့် စီမံခန့်ခွဲရာတွင် အခက်အခဲများကြောင့် JavaScript frameworks များကို အသုံးပြုရန် အကြောင်းဖန်တီးခဲ့သည်။ သို့သော် ဒီသင်ခန်းစာတွင် ကျွန်ုပ်တို့သည် ကိုယ်တိုင် စီမံခန့်ခွဲသွားမည်ဖြစ်သည်။

ထို့အပြင် ဒီသင်ခန်းစာတွင် [JavaScript closure](https://developer.mozilla.org/docs/Web/JavaScript/Closures) ၏ အကြောင်းကို မိတ်ဆက်ပေးမည်ဖြစ်ပြီး၊ closure ကို အပြင် function တစ်ခု၏ scope ကို အတွင်း function တစ်ခုမှ access လုပ်နိုင်ရန် ဖန်တီးထားသော function တစ်ခုအဖြစ် စဉ်းစားနိုင်သည်။

> JavaScript closures သည် ကျယ်ပြန့်ပြီး ရှုပ်ထွေးသော အကြောင်းအရာဖြစ်သည်။ ဒီသင်ခန်းစာတွင် terrarium ရဲ့ code အတွင်းရှိ closure ၏ အခြေခံအကြောင်းအရာကိုသာ ထိတွေ့မည်ဖြစ်သည်။ အတွင်း function နှင့် အပြင် function တစ်ခုကို ဖန်တီးထားပြီး အတွင်း function သည် အပြင် function ၏ scope ကို access လုပ်နိုင်ရန် ဖန်တီးထားသည်။ ဒီအကြောင်းအရာကို ပိုမိုနားလည်ရန် [အကျယ်အဝန်းရှိသော documentation](https://developer.mozilla.org/docs/Web/JavaScript/Closures) ကို သွားလေ့လာပါ။

ကျွန်ုပ်တို့သည် closure ကို အသုံးပြု၍ DOM ကို ပြောင်းလဲမည်ဖြစ်သည်။

DOM ကို သစ်ပင်တစ်ပင်အဖြစ် စဉ်းစားပါ၊ ၎င်းသည် ဝဘ်စာရွက်ကို ပြောင်းလဲနိုင်သော နည်းလမ်းများအားလုံးကို ကိုယ်စားပြုသည်။ ဝဘ်စာရွက်ကို access လုပ်ပြီး ပြင်ဆင်၊ ပြောင်းလဲ၊ ပြန်လည်စီမံခြင်းနှင့် စီမံခန့်ခွဲနိုင်ရန် အမျိုးမျိုးသော API များကို ဖန်တီးထားသည်။

![DOM tree representation](../../../../translated_images/dom-tree.7daf0e763cbbba9273f9a66fe04c98276d7d23932309b195cb273a9cf1819b42.my.png)

> DOM နှင့် ၎င်းကို ကိုးကားထားသော HTML markup ၏ ကိုယ်စားပြုမှု။ [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites) မှ

ဒီသင်ခန်းစာတွင် ကျွန်ုပ်တို့သည် interactive terrarium project ကို JavaScript ဖြင့် ပြီးစီးအောင်လုပ်ပြီး၊ အသုံးပြုသူများသည် စာမျက်နှာပေါ်တွင် အပင်များကို ပြောင်းလဲနိုင်ရန် ဖန်တီးမည်ဖြစ်သည်။

### ကြိုတင်လိုအပ်ချက်

သင်၏ terrarium အတွက် HTML နှင့် CSS ကို ဖန်တီးပြီးထားရမည်။ ဒီသင်ခန်းစာအဆုံးတွင် သင်သည် အပင်များကို terrarium အတွင်းသို့ နှင့် အပြင်သို့ ဆွဲထုတ်နိုင်မည်ဖြစ်သည်။

### လုပ်ဆောင်ရန်

သင်၏ terrarium folder အတွင်း `script.js` ဆိုသော ဖိုင်အသစ်တစ်ခု ဖန်တီးပါ။ ၎င်းကို `<head>` အပိုင်းတွင် import လုပ်ပါ။

```html
	<script src="./script.js" defer></script>
```

> Note: HTML ဖိုင်အားလုံး load ပြီးဆုံးမှ JavaScript ကို run လုပ်ရန် `defer` attribute ကို အသုံးပြုပါ။ `async` attribute ကိုလည်း အသုံးပြုနိုင်ပြီး၊ HTML ဖိုင် parsing ဖြစ်နေစဉ် script ကို run လုပ်နိုင်သည်။ သို့သော် ဒီအခါတွင် drag script ကို run လုပ်မည်မတိုင်မီ HTML elements အားလုံးကို ပြင်ဆင်ထားရန် အရေးကြီးသည်။
---

## DOM elements

ပထမဆုံး သင်သည် DOM အတွင်းရှိ ပြောင်းလဲလိုသော elements များကို reference လုပ်ရန် လိုအပ်သည်။ ကျွန်ုပ်တို့၏ အခါတွင် ၎င်းတို့သည် side bars အတွင်းရှိ 14 ခုသော အပင်များဖြစ်သည်။

### လုပ်ဆောင်ရန်

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

ဒီမှာ ဘာဖြစ်နေလဲ? သင်သည် document ကို reference လုပ်ပြီး DOM အတွင်းရှိ particular Id ရှိသော element ကို ရှာဖွေနေသည်။ HTML lesson ပထမပိုင်းတွင် သင်သည် အပင် image တစ်ခုစီကို individual Ids (`id="plant1"`) ပေးခဲ့သည်ကို သတိရပါ။ အခုတော့ ၎င်းကို အသုံးပြုမည်ဖြစ်သည်။ Element တစ်ခုစီကို identify လုပ်ပြီး `dragElement` ဆိုသော function သို့ pass လုပ်သည်။ ဒီ function ကို မကြာမီ ဖန်တီးမည်ဖြစ်သည်။ ထို့ကြောင့် HTML အတွင်းရှိ element သည် drag-enabled ဖြစ်လာမည်။

✅ အဘယ်ကြောင့် elements များကို Id ဖြင့် reference လုပ်သနည်း? CSS class ဖြင့် reference မလုပ်ဘဲ အဘယ်ကြောင့်?

---

## Closure

အခုတော့ သင်သည် dragElement closure ကို ဖန်တီးရန် ပြင်ဆင်ပြီးဖြစ်သည်။ ၎င်းသည် အတွင်း function (သို့မဟုတ် functions) ကို enclosure လုပ်ထားသော အပြင် function တစ်ခုဖြစ်သည်။ 

Closures သည် function တစ်ခု (သို့မဟုတ် functions များ) အပြင် function ၏ scope ကို access လုပ်ရန် အသုံးဝင်သည်။ ဥပမာအားဖြင့်:

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

ဒီဥပမာတွင် displayCandy function သည် array တစ်ခုရှိပြီး candy type အသစ်ကို push လုပ်သော function ကို enclosure လုပ်ထားသည်။ ဒီ code ကို run လုပ်ပါက `candy` array သည် undefined ဖြစ်မည်၊ ၎င်းသည် closure ၏ local variable ဖြစ်သောကြောင့်ဖြစ်သည်။

✅ `candy` array ကို accessible ဖြစ်စေရန် ဘာလုပ်ရမလဲ? ၎င်းကို closure အပြင်သို့ ရွှေ့ပါ။ ဒီနည်းဖြင့် array သည် global ဖြစ်လာပြီး closure ၏ local scope အတွင်းသာ မကျန်ရှိတော့ပါ။

### လုပ်ဆောင်ရန်

`script.js` အတွင်း element declarations အောက်တွင် function တစ်ခု ဖန်တီးပါ။

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement` သည် `terrariumElement` object ကို script ရဲ့ အပေါ်ပိုင်းရှိ declarations မှ ရယူသည်။ ထို့နောက် object ကို pass လုပ်ပြီး local positions ကို `0` သတ်မှတ်သည်။ ဒီ local variables များသည် drag နှင့် drop functionality ကို element တစ်ခုစီတွင် ထည့်သွင်းသည့်အခါ ပြောင်းလဲမည်ဖြစ်သည်။ Terrarium သည် drag လုပ်ထားသော elements များဖြင့် ပြည့်စုံလာမည်ဖြစ်ပြီး၊ application သည် ၎င်းတို့၏ placement ကို စောင့်ကြည့်ထားရန် လိုအပ်သည်။

ထို့အပြင် `terrariumElement` ကို `pointerdown` event သတ်မှတ်ထားသည်။ ၎င်းသည် [web APIs](https://developer.mozilla.org/docs/Web/API) ၏ အစိတ်အပိုင်းဖြစ်ပြီး DOM ကို စီမံခန့်ခွဲရန် အထောက်အကူပြုသည်။ `onpointerdown` သည် button ကို push လုပ်သောအခါ (သို့မဟုတ် drag လုပ်နိုင်သော element ကို touch လုပ်သောအခါ) ဖွင့်လှစ်သည်။ ဒီ event handler သည် [web နှင့် mobile browsers](https://caniuse.com/?search=onpointerdown) နှစ်ခုလုံးတွင် အလုပ်လုပ်သည်။

✅ [event handler `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) သည် browser support ပိုမိုများသည်။ ဒီနေရာတွင် မသုံးသင့်သော အကြောင်းရင်းကို စဉ်းစားပါ။

---

## Pointerdrag function

`terrariumElement` သည် drag လုပ်ရန် ပြင်ဆင်ပြီးဖြစ်သည်။ `onpointerdown` event ကို fire လုပ်သောအခါ `pointerDrag` function ကို invoke လုပ်သည်။ ဒီလိုင်းအောက်တွင် function ကို ထည့်သွင်းပါ။ `terrariumElement.onpointerdown = pointerDrag;`:

### လုပ်ဆောင်ရန် 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

အရာများစွာဖြစ်ပျက်သည်။ ပထမဆုံး သင်သည် `e.preventDefault();` ကို အသုံးပြု၍ pointerdown တွင် ဖြစ်ပျက်သည့် default events များကို မဖြစ်ပျက်စေရန် ကာကွယ်သည်။ ဒီနည်းဖြင့် interface ၏ အပြုအမူကို ပိုမိုထိန်းချုပ်နိုင်သည်။

> script ဖိုင်အားလုံးကို ဖန်တီးပြီးဆုံးသောအခါ ဒီလိုင်းကို ပြန်လာကြည့်ပြီး `e.preventDefault()` မပါဘဲ စမ်းကြည့်ပါ။ ဘာဖြစ်သနည်း?

ဒုတိယအနေနှင့် `index.html` ကို browser window တွင် ဖွင့်ပြီး interface ကို inspect လုပ်ပါ။ အပင်တစ်ခုကို click လုပ်သောအခါ 'e' event ကို capture လုပ်ပုံကို မြင်နိုင်သည်။ event ကို inspect လုပ်ပြီး pointer down event တစ်ခုမှ သိမ်းဆည်းထားသော အချက်အလက်များကို ကြည့်ပါ။

ထို့နောက် local variables `pos3` နှင့် `pos4` ကို e.clientX နှင့် e.clientY သတ်မှတ်ထားပုံကို သတိပြုပါ။ ဒီ values များသည် သင် click (သို့မဟုတ် touch) လုပ်သောအခါ အပင်၏ x နှင့် y coordinates ကို capture လုပ်သည်။ အပင်များကို click နှင့် drag လုပ်သောအခါ ၎င်းတို့၏ coordinates ကို စောင့်ကြည့်ရန် fine-grained control လိုအပ်သည်။

✅ ဒီ app အားလုံးကို closure တစ်ခုဖြင့် ဖန်တီးထားရသည့် အကြောင်းရင်း ပိုမိုရှင်းလင်းလာပါသလား? ၎င်းမဟုတ်ပါက 14 ခုသော draggable plants တစ်ခုစီ၏ scope ကို ဘယ်လိုထိန်းသိမ်းမလဲ?

`pos4 = e.clientY` အောက်တွင် pointer event manipulations နှစ်ခုကို ထည့်သွင်းပြီး initial function ကို ပြီးစီးပါ။

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
အခုတော့ သင်သည် pointer နှင့်အတူ အပင်ကို drag လုပ်လိုသည်ကို ဖော်ပြထားပြီး၊ အပင်ကို deselect လုပ်သောအခါ dragging gesture ကို ရပ်လိုသည်ကို ဖော်ပြထားသည်။ `onpointermove` နှင့် `onpointerup` သည် `onpointerdown` နှင့် တူသော API ၏ အစိတ်အပိုင်းများဖြစ်သည်။ interface သည် errors များကို throw လုပ်မည်၊ အကြောင်းမှာ `elementDrag` နှင့် `stopElementDrag` functions မဖန်တီးရသေးသောကြောင့်ဖြစ်သည်။ အခုတော့ ၎င်းတို့ကို ဖန်တီးပါ။

## elementDrag နှင့် stopElementDrag functions

သင်၏ closure ကို ပြီးစီးရန် drag လုပ်သောအခါနှင့် drag ရပ်သောအခါ ဖြစ်ပျက်မည့်အရာများကို စီမံခန့်ခွဲမည့် internal functions နှစ်ခုကို ထည့်သွင်းပါ။ သင်လိုချင်သော behavior သည် အပင်တစ်ခုစီကို မည်သည့်အချိန်တွင်မဆို drag လုပ်နိုင်ပြီး screen ပေါ်တွင် မည်သည့်နေရာတွင်မဆိုထားနိုင်ရန် ဖြစ်သည်။ ဒီ interface သည် drop zone မပါသောကြောင့် သင့် terrarium ကို အပင်များထည့်၊ ဖယ်ရှား၊ ပြန်လည်တည်နေရာချထားခြင်းဖြင့် မိမိစိတ်ကြိုက် ဖန်တီးနိုင်သည်။

### လုပ်ဆောင်ရန်

`pointerDrag` ၏ closing curly bracket အောက်တွင် `elementDrag` function ကို ထည့်သွင်းပါ။

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```
ဒီ function အတွင်း သင်သည် initial positions 1-4 ကို ပြင်ဆင်ထားသည်။ ဒီမှာ ဘာဖြစ်နေလဲ?

Drag လုပ်သောအခါ `pos1` ကို `pos3` (သင်အရင်က `e.clientX` အဖြစ် သတ်မှတ်ထားသည်) နှင့် လက်ရှိ `e.clientX` တန်ဖိုးကို လျော့ချခြင်းဖြင့် ပြန်လည် assign လုပ်သည်။ `pos2` ကိုလည်း အတူတူလုပ်ဆောင်သည်။ ထို့နောက် `pos3` နှင့် `pos4` ကို element ၏ X နှင့် Y coordinates အသစ်များသို့ ပြန်လည်သတ်မှတ်သည်။ ဒီပြောင်းလဲမှုများကို console တွင် drag လုပ်နေစဉ် ကြည့်နိုင်သည်။ ထို့နောက် `pos1` နှင့် `pos2` ၏ positions အသစ်များကို အပင်၏ css style ကို ပြောင်းလဲခြင်းဖြင့် top နှင့် left X နှင့် Y coordinates ကို သတ်မှတ်သည်။

> `offsetTop` နှင့် `offsetLeft` သည် element ၏ parent position ကို အခြေခံ၍ position ကို သတ်မှတ်သော CSS properties ဖြစ်သည်။

ဒီ positioning ကို ပြန်လည်တွက်ချက်ခြင်းအားလုံးသည် terrarium နှင့် ၎င်း၏ အပင်များ၏ behavior ကို စနစ်တကျ ပြုလုပ်ရန် အထောက်အကူပြုသည်။

### လုပ်ဆောင်ရန် 

interface ကို ပြီးစီးရန် `elementDrag` ၏ closing curly bracket အောက်တွင် `stopElementDrag` function ကို ထည့်သွင်းပါ။

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

ဒီ function သေးငယ်သည် `onpointerup` နှင့် `onpointermove` events များကို reset လုပ်ပြီး၊ သင်၏ အပင်၏ progress ကို ပြန်လည်စတင်ရန် သို့မဟုတ် အပင်အသစ်ကို drag လုပ်ရန် စတင်နိုင်သည်။

✅ ဒီ events များကို null သတ်မှတ်မထားပါက ဘာဖြစ်မည်?

အခုတော့ သင်၏ project ကို ပြီးစီးခဲ့ပါပြီ!

🥇ဂုဏ်ယူပါတယ်! သင်၏လှပသော terrarium ကို ပြီးစီးခဲ့ပါပြီ။ ![finished terrarium](../../../../translated_images/terrarium-final.0920f16e87c13a84cd2b553a5af9a3ad1cffbd41fbf8ce715d9e9c43809a5e2c.my.png)

---

## 🚀စိန်ခေါ်မှု

သင်၏ closure အတွင်း event handler အသစ်ထည့်သွင်းပြီး အပင်များအပေါ် အပိုလုပ်ဆောင်မှုများပြုလုပ်ပါ။ ဥပမာအားဖြင့် အပင်ကို double-click လုပ်ပြီး အပင်ကို အရှေ့ဘက်သို့ ရောက်စေပါ။ ဖန်တီးမှုအတွက် စိတ်ကြိုက်လုပ်ဆောင်ပါ!

## မိမိကိုယ်ကို စမ်းမေးခွန်း

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/20)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

Elements များကို screen ပေါ်တွင် drag လုပ်ခြင်းသည် ရိုးရှင်းသော်လည်း၊ ၎င်းကို ပြုလုပ်ရန် နည်းလမ်းများစွာရှိပြီး၊ သင်လိုချင်သော effect အပေါ်မူတည်၍ အခက်အခဲများရှိနိုင်သည်။ အမှန်တကယ် [drag and drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) တစ်ခုလုံးရှိသည်။ ဒီ module တွင် ၎င်းကို မသုံးခဲ့ရသည့်အကြောင်းမှာ ကျွန်ုပ်တို့လိုချင်သော effect သည် ကွဲပြားခြားနားသောကြောင့်ဖြစ်သည်။ သို့သော် သင်၏ကိုယ်ပိုင် project တွင် API ကို စမ်းသုံးပြီး ဘာတွေ ပြုလုပ်နိုင်သည်ကို ကြည့်ပါ။

Pointer events အကြောင်းကို [W3C docs](https://www.w3.org/TR/pointerevents1/) နှင့် [MDN web docs](https://developer.mozilla.org/docs/Web/API/Pointer_events) တွင် ပိုမိုလေ့လာပါ။

Browser capabilities ကို [CanIUse.com](https://caniuse.com/) တွင် အမြဲစစ်ဆေးပါ။

## လုပ်ဆောင်ရန်

[DOM နှင့် ပိုမိုလုပ်ဆောင်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။