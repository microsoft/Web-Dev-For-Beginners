<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acb5ae00cde004304296bb97da8ff4c3",
  "translation_date": "2025-08-28T18:44:18+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "my"
}
-->
# Terrarium Project Part 2: CSS ကိုမိတ်ဆက်ခြင်း

![Introduction to CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမတင်မီ စမ်းမေးခွန်း

[မိန့်ခွန်းမတင်မီ စမ်းမေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/17)

### မိတ်ဆက်

CSS, သို့မဟုတ် Cascading Style Sheets သည် ဝဘ်ဖွံ့ဖြိုးရေးတွင် အရေးကြီးသော ပြဿနာတစ်ခုဖြစ်သည့် ဝဘ်ဆိုဒ်ကို လှပစေခြင်းကို ဖြေရှင်းပေးသည်။ သင့်အက်ပ်များကို အဆင်ပြေစေပြီး လှပစေခြင်းအပြင် CSS ကို အသုံးပြု၍ Responsive Web Design (RWD) ကို ဖန်တီးနိုင်သည်။ ဒါကြောင့် မည်သည့် မျက်နှာပြင်အရွယ်အစားတွင် ပြသထားပါက အက်ပ်များကို လှပစေပါသည်။ CSS သည် သင့်အက်ပ်ကို လှပစေခြင်းအတွက်သာမက၊ အနုစိတ်အပြောင်းအလဲများနှင့် အပြောင်းအလဲများကိုပါ ဖန်တီးနိုင်စေသော animation နှင့် transform များပါဝင်သည်။ CSS Working Group သည် လက်ရှိ CSS သတ်မှတ်ချက်များကို ထိန်းသိမ်းပေးသည်။ သူတို့၏အလုပ်ကို [World Wide Web Consortium's site](https://www.w3.org/Style/CSS/members) တွင် လိုက်နာကြည့်ရှုနိုင်သည်။

> [!NOTE] CSS သည် ဝဘ်ပေါ်ရှိ အရာအားလုံးကဲ့သို့ တိုးတက်ပြောင်းလဲနေသော ဘာသာစကားတစ်ခုဖြစ်ပြီး၊ ဘရောက်ဇာအားလုံးသည် သတ်မှတ်ချက်၏ အသစ်သော အပိုင်းများကို မထောက်ပံ့နိုင်ပါ။ သင့်အကောင်အထည်ဖော်မှုများကို [CanIUse.com](https://caniuse.com) ကို ကိုးကား၍ အမြဲစစ်ဆေးပါ။

ဒီသင်ခန်းစာတွင်၊ ကျွန်ုပ်တို့၏ အွန်လိုင်း terrarium ကို အလှဆင်ပြီး CSS ၏ အဓိကအချက်အချာများဖြစ်သည့် cascade, inheritance, selector များ၏ အသုံးပြုမှု၊ positioning နှင့် layout ဖန်တီးခြင်းတို့ကို လေ့လာသွားမည်ဖြစ်သည်။ ဒီလုပ်ငန်းစဉ်အတွင်း ကျွန်ုပ်တို့သည် terrarium ကို layout ပြုလုပ်ပြီး အမှန်တကယ်သော terrarium ကို ဖန်တီးသွားမည်ဖြစ်သည်။

### ကြိုတင်လိုအပ်ချက်

သင့် terrarium အတွက် HTML ကို ဖန်တီးပြီး အလှဆင်ရန် အသင့်ဖြစ်ထားရမည်။

> ဗီဒီယိုကြည့်ရန်

> 
> [![Git and GitHub basics video](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### လုပ်ငန်း

သင့် terrarium ဖိုလ်ဒါတွင် `style.css` ဟုခေါ်သော ဖိုင်အသစ်တစ်ခု ဖန်တီးပါ။ အဆိုပါဖိုင်ကို `<head>` အပိုင်းတွင် import ပြုလုပ်ပါ-

```html
<link rel="stylesheet" href="./style.css" />
```

---

## The Cascade

Cascading Style Sheets တွင် 'cascade' ဆိုသော အယူအဆပါဝင်ပြီး၊ style များကို အသုံးချရာတွင် ဦးစားပေးမှုအလိုက် လမ်းညွှန်ပေးသည်။ ဝဘ်ဆိုဒ်ရေးသားသူမှ သတ်မှတ်ထားသော style များသည် ဘရောက်ဇာမှ သတ်မှတ်ထားသော style များထက် ဦးစားပေးသည်။ 'inline' မှ သတ်မှတ်ထားသော style များသည် အပြင်ပန်း style sheet တွင် သတ်မှတ်ထားသော style များထက် ဦးစားပေးသည်။

### လုပ်ငန်း

သင့် `<h1>` tag တွင် "color: red" inline style ကို ထည့်ပါ-

```HTML
<h1 style="color: red">My Terrarium</h1>
```

ထို့နောက်၊ သင့် `style.css` ဖိုင်တွင် အောက်ပါကုဒ်ကို ထည့်ပါ-

```CSS
h1 {
 color: blue;
}
```

✅ သင့်ဝဘ်အက်ပ်တွင် မည်သည့်အရောင်ကို ပြသပါသလဲ? အဘယ်ကြောင့်? Style များကို override ပြုလုပ်နိုင်သော နည်းလမ်းတစ်ခု ရှာနိုင်ပါသလား? ဘယ်အချိန်တွင် ဒါကို ပြုလုပ်လိုမည်၊ သို့မဟုတ် မပြုလုပ်သင့်ပါသလဲ?

---

## Inheritance

Style များသည် မူရင်း ancestor style မှ ဆက်ခံပြီး၊ nested element များသည် သူတို့၏ parent များ၏ style များကို ဆက်ခံသည်။

### လုပ်ငန်း

body ၏ font ကို သတ်မှတ်ပြီး၊ nested element ၏ font ကို စစ်ဆေးပါ-

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

သင့်ဘရောက်ဇာ၏ console တွင် 'Elements' tab ကို ဖွင့်ပြီး H1 ၏ font ကို ကြည့်ပါ။ ၎င်းသည် body မှ font ကို ဆက်ခံထားသည်ဟု ဘရောက်ဇာတွင် ဖော်ပြထားသည်-

![inherited font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.my.png)

✅ Nested style တစ်ခုကို အခြား property တစ်ခုကို ဆက်ခံစေနိုင်ပါသလား?

---

## CSS Selectors

### Tags

ယခုအချိန်အထိ သင့် `style.css` ဖိုင်တွင် tag အနည်းငယ်သာ style ပြုလုပ်ထားပြီး၊ အက်ပ်သည် အနည်းငယ်ထူးဆန်းနေသည်-

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

ဒီလို tag ကို style ပြုလုပ်ခြင်းသည် unique element များကို ထိန်းချုပ်နိုင်စေသော်လည်း၊ သင့် terrarium တွင် အပင်များစွာ၏ style များကို ထိန်းချုပ်ရန်လိုအပ်သည်။ ဒါကို ပြုလုပ်ရန် CSS selector များကို အသုံးပြုရမည်။

### Ids

ဘယ်ဘက်နှင့် ညာဘက် container များကို layout ပြုလုပ်ရန် style ထည့်ပါ။ Markup တွင် တစ်ခုတည်းသော left container နှင့် တစ်ခုတည်းသော right container ရှိသောကြောင့်၊ ၎င်းတို့ကို id များဖြင့် သတ်မှတ်ထားသည်။ style ပြုလုပ်ရန် `#` ကို အသုံးပြုပါ-

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

ဒီမှာ၊ container များကို မျက်နှာပြင်၏ ဘယ်ဘက်နှင့် ညာဘက်အဆုံးတွင် absolute positioning ဖြင့်ထားပြီး၊ width များကို ရာခိုင်နှုန်းဖြင့် သတ်မှတ်ထားသည်။ ဒါကြောင့် မိုဘိုင်းမျက်နှာပြင်အသေးများအတွက်လည်း အရွယ်အစားကို အလိုအလျောက် ချိန်ညှိနိုင်သည်။

✅ ဒီကုဒ်သည် အတော်လေး ထပ်နေသည်၊ "DRY" (Don't Repeat Yourself) မဟုတ်ပါ။ id နှင့် class တစ်ခုဖြင့် ဒီ id များကို ပိုမိုကောင်းမွန်စွာ style ပြုလုပ်နိုင်မည့် နည်းလမ်းတစ်ခု ရှာနိုင်ပါသလား? သင်သည် markup ကို ပြောင်းလဲပြီး CSS ကို ပြန်လည်ပြုပြင်ရမည်-

```html
<div id="left-container" class="container"></div>
```

### Classes

အထက်ပါ ဥပမာတွင်၊ သင်သည် မျက်နှာပြင်ပေါ်ရှိ unique element နှစ်ခုကို style ပြုလုပ်ထားသည်။ မျက်နှာပြင်ပေါ်ရှိ element များစွာကို style ပြုလုပ်လိုပါက CSS class များကို အသုံးပြုနိုင်သည်။ ဒါကို left နှင့် right container များတွင် အပင်များကို layout ပြုလုပ်ရန် ပြုလုပ်ပါ။

HTML markup တွင် အပင်တစ်ခုစီတွင် id များနှင့် class များပေါင်းစပ်ထားသည်ကို သတိပြုပါ။ id များကို JavaScript မှ အသုံးပြု၍ terrarium အပင်များ၏ placement ကို ပြောင်းလဲရန် အသုံးပြုမည်။ class များသည် အပင်အားလုံးကို သတ်မှတ်ထားသော style ကို ပေးသည်။

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

သင့် `style.css` ဖိုင်တွင် အောက်ပါအတိုင်း ထည့်ပါ-

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

ဒီ snippet တွင် relative နှင့် absolute positioning တို့၏ ပေါင်းစပ်မှုကို သတိပြုပါ။ အပင်များကို vertical container တစ်ခုစီတွင် scrolling မလိုအပ်ဘဲ ပြသနိုင်ရန်အတွက် အပင် holder ၏ height ကို 13% သတ်မှတ်ထားသည်။

အပင် holder ကို left သို့ရွှေ့ထားပြီး၊ container အတွင်းတွင် အပင်များကို ပိုမိုအလယ်ကျစေရန် ပြုလုပ်ထားသည်။ အပင်များ၏ ပုံများတွင် transparent background အများကြီးပါဝင်သောကြောင့်၊ မျက်နှာပြင်ပေါ်တွင် ပိုမိုသင့်တော်စေရန် left သို့ရွှေ့ထားရန် လိုအပ်သည်။

ထို့နောက်၊ အပင်ကို max-width 150% သတ်မှတ်ထားသည်။ ဒါကြောင့် ဘရောက်ဇာအရွယ်အစားကို ချိန်ညှိသည့်အခါ အပင်များသည် container အတွင်းတွင်နေပြီး အရွယ်အစားကို လိုက်လျောညီထွေဖြစ်စေသည်။ 

z-index ၏ အသုံးပြုမှုကိုလည်း သတိပြုပါ။ ၎င်းသည် element ၏ အမြင့်ကို ထိန်းချုပ်ပေးပြီး (အပင်များသည် container အပေါ်တွင်နေပြီး terrarium အတွင်းတွင်ရှိသကဲ့သို့ ပြသသည်)။

✅ အဘယ်ကြောင့် plant holder နှင့် plant CSS selector နှစ်ခုလုံးလိုအပ်သနည်း?

## CSS Positioning

Position property များ (static, relative, fixed, absolute, sticky) ကို ပေါင်းစပ်အသုံးပြုခြင်းသည် အနည်းငယ်ခက်ခဲနိုင်သော်လည်း၊ မှန်ကန်စွာ ပြုလုပ်ပါက မျက်နှာပြင်ပေါ်ရှိ element များကို ကောင်းစွာထိန်းချုပ်နိုင်စေသည်။

Absolute positioned element များသည် သူတို့၏ အနီးဆုံး positioned ancestor များအပေါ်မူတည်၍ position ပြုလုပ်သည်။ အကယ်၍ positioned ancestor မရှိပါက၊ document body အပေါ်မူတည်၍ position ပြုလုပ်သည်။

Relative positioned element များသည် သူတို့၏ မူလ position မှ CSS ၏ ညွှန်ကြားချက်အတိုင်း အနေအထားကို ပြောင်းလဲသည်။

ကျွန်ုပ်တို့၏ ဥပမာတွင်၊ `plant-holder` သည် relative-positioned element တစ်ခုဖြစ်ပြီး၊ absolute-positioned container အတွင်းတွင် position ပြုလုပ်ထားသည်။ ၎င်း၏ရလဒ်မှာ side bar container များသည် ဘယ်ဘက်နှင့် ညာဘက်တွင် pin လုပ်ထားပြီး၊ plant-holder သည် nested ဖြစ်ကာ၊ side bar များအတွင်းတွင် အပင်များကို vertical row အဖြစ်ထားရန်နေရာပေးထားသည်။

> [!NOTE] `plant` ကိုလည်း absolute positioning ဖြင့်ထားထားပြီး၊ ၎င်းကို draggable ဖြစ်စေရန် လိုအပ်သည်။ ၎င်းကို နောက်သင်ခန်းစာတွင် ရှင်းပြမည်။

✅ Side container များနှင့် plant-holder ၏ positioning အမျိုးအစားများကို ပြောင်းလဲကြည့်ပါ။ ဘာဖြစ်သလဲ?

## CSS Layouts

ယခု သင်လေ့လာခဲ့သည့်အရာများကို အသုံးပြု၍ CSS ဖြင့် terrarium ကို ဖန်တီးပါ!

ပထမဦးစွာ၊ `.terrarium` div ၏ children များကို CSS ဖြင့် rounded rectangle အဖြစ် style ပြုလုပ်ပါ-

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

ဒီမှာ percentage များကို အသုံးပြုထားသည်ကို သတိပြုပါ။ သင့်ဘရောက်ဇာကို အရွယ်အစားသေးသွားအောင် ချိန်ညှိပါက၊ jar သည်လည်း အရွယ်အစားကို လိုက်လျောညီထွေဖြစ်သည်ကို တွေ့ရမည်။ jar element များ၏ width နှင့် height percentage များနှင့်၊ viewport ၏ အောက်ခြေတွင် pin လုပ်ထားသော absolute positioning ကိုလည်း သတိပြုပါ။

ထို့အပြင် `rem` ကို border-radius အတွက် အသုံးပြုထားသည်။ ၎င်းသည် font-relative length တစ်ခုဖြစ်သည်။ ဒီ relative measurement အမျိုးအစားအကြောင်းကို [CSS spec](https://www.w3.org/TR/css-values-3/#font-relative-lengths) တွင် ဖတ်ရှုနိုင်သည်။

✅ Jar ၏ အရောင်များနှင့် opacity ကို dirt ၏ အရောင်များနှင့် opacity နှင့် ပြောင်းလဲကြည့်ပါ။ ဘာဖြစ်သလဲ? အဘယ်ကြောင့်?

---

## 🚀 စိန်ခေါ်မှု

Jar ၏ ဘယ်ဘက်အောက်ခြေတွင် 'bubble' shine တစ်ခု ထည့်၍၊ ၎င်းကို ဖန်သားမျက်နှာပြင်ကဲ့သို့ ပြုလုပ်ပါ။ `.jar-glossy-long` နှင့် `.jar-glossy-short` ကို reflected shine ကဲ့သို့ ပြုလုပ်ရန် style ပြုလုပ်ရမည်။ ၎င်းသည် အောက်ပါအတိုင်း ဖြစ်မည်-

![finished terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.my.png)

Post-lecture quiz ကို ပြီးမြောက်ရန်၊ ဒီ Learn module ကို လေ့လာပါ- [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း

[မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/18)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

CSS သည် ရိုးရှင်းလွယ်ကူသည်ဟု ထင်ရသော်လည်း၊ ဘရောက်ဇာအားလုံးနှင့် မျက်နှာပြင်အရွယ်အစားအားလုံးအတွက် အက်ပ်ကို ပြီးပြည့်စုံစွာ style ပြုလုပ်ရန် အခက်အခဲများစွာ ရှိသည်။ CSS-Grid နှင့် Flexbox သည် အလုပ်ကို ပိုမိုစနစ်တကျဖြစ်စေပြီး ယုံကြည်စိတ်ချစေသော ကိရိယာများဖြစ်သည်။ ဒီကိရိယာများကို [Flexbox Froggy](https://flexboxfroggy.com/) နှင့် [Grid Garden](https://codepip.com/games/grid-garden/) တွင် ကစားပြီး လေ့လာပါ။

## လုပ်ငန်း

[CSS Refactoring](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။