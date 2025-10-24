<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-24T16:35:17+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "my"
}
-->
# Terrarium Project Part 2: CSS အကြောင်းအရာ

![CSS အကြောင်းအရာ](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

HTML နဲ့လုပ်ထားတဲ့ terrarium က အရမ်းရိုးရှင်းနေတဲ့အကြောင်းကို သတိရပါသလား? CSS က အဲ့ဒီရိုးရှင်းတဲ့ဖွဲ့စည်းမှုကို အလှဆင်ပြီး စိတ်ဝင်စားဖွယ်ဖြစ်အောင်ပြောင်းလဲပေးမှာပါ။

HTML ကို အိမ်တစ်လုံးရဲ့ဘောင်တည်ဆောက်တာလိုပဲဆိုရင် CSS က အိမ်ကို အိမ်လိုခံစားရအောင်လုပ်ပေးတဲ့ အရာတွေ - အရောင်ဆိုးခြင်း၊ ပရိဘောဂတပ်ဆင်ခြင်း၊ မီးအလင်းရောင်နဲ့ အခန်းတွေကို စနစ်တကျတပ်ဆင်ပေးတာတွေပါပဲ။ Versailles နန်းတော်က ရိုးရှင်းတဲ့ အမဲလိုက်အိမ်ကနေ စတင်ခဲ့ပေမယ့် အလှဆင်မှုနဲ့ အခန်းပုံစံတွေကို ဂရုစိုက်တပ်ဆင်မှုကြောင့် ကမ္ဘာ့အလှဆင်ဆုံးအဆောက်အဦးတစ်ခုဖြစ်လာခဲ့တာကို စဉ်းစားကြည့်ပါ။

ဒီနေ့မှာတော့ သင့် terrarium ကို အသုံးပြုနိုင်တဲ့အဆင့်ကနေ အလှဆင်ပြီး ပြည့်စုံတဲ့အဆင့်ကို ပြောင်းလဲပေးပါမယ်။ အစိတ်အပိုင်းတွေကို တိကျစွာတည်နေရာချထားနည်း၊ မျက်နှာပြင်အရွယ်အစားအမျိုးမျိုးကို တုံ့ပြန်နိုင်တဲ့ layout တွေဖန်တီးနည်းနဲ့ ဝင်စားဖွယ်ရှိတဲ့ website တွေကို ဖန်တီးနိုင်တဲ့ visual appeal ကို ဖန်တီးနည်းတွေကို သင်ယူပါမယ်။

ဒီသင်ခန်းစာအဆုံးမှာ CSS ကို စနစ်တကျအသုံးပြုခြင်းက သင့် project ကို ဘယ်လိုအဆင့်မြှင့်တင်ပေးနိုင်တယ်ဆိုတာကို မြင်နိုင်ပါလိမ့်မယ်။ သင့် terrarium ကို အလှဆင်ပြီး စတိုင်ထည့်လိုက်ရအောင်။

## သင်ခန်းစာမတိုင်မီ စမ်းမေးခွန်း

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/17)

## CSS ကို စတင်လေ့လာခြင်း

CSS ကို "အလှဆင်ခြင်း" လို့ပဲ ထင်ရတတ်ပေမယ့် အဲ့ဒါထက်ပိုကျယ်ကျယ်ပြန့်ပြန့် အသုံးဝင်ပါတယ်။ CSS က ရုပ်ရှင်ဒါရိုက်တာလိုပဲ - အရာအားလုံးရဲ့ ရုပ်ရည်ပုံစံကို ထိန်းချုပ်ရုံမက၊ အရာတွေကို ရွေ့လျားပုံ၊ အပြန်အလှန်တုံ့ပြန်ပုံနဲ့ အခြေအနေအမျိုးမျိုးကို လိုက်လျောညီထွေဖြစ်အောင်လုပ်ပေးပါတယ်။

ခေတ်သစ် CSS က အရမ်းတိုးတက်ပြီး အစွမ်းထက်ပါတယ်။ ဖုန်း၊ tablet နဲ့ desktop computer တွေအတွက် layout တွေကို အလိုအလျောက်ချိန်ညှိပေးနိုင်တဲ့ code တွေ ရေးနိုင်ပါတယ်။ အသုံးပြုသူရဲ့ အာရုံကို လိုအပ်တဲ့နေရာမှာ ဆွဲဆောင်ပေးနိုင်တဲ့ animation တွေ ဖန်တီးနိုင်ပါတယ်။ အရာအားလုံးကို စနစ်တကျလုပ်နိုင်တဲ့အခါမှာ ရလဒ်တွေက အရမ်းအံ့ဩဖွယ်ဖြစ်လာနိုင်ပါတယ်။

> 💡 **Pro Tip**: CSS ဟာ အမြဲတိုးတက်နေတဲ့ feature တွေရှိပါတယ်။ အသစ်ထွက်လာတဲ့ CSS feature တွေကို အသုံးပြုမယ့်အခါ [CanIUse.com](https://caniuse.com) ကို သုံးပြီး browser support ရှိ/မရှိ စစ်ဆေးပါ။

**ဒီသင်ခန်းစာမှာ ကျွန်တော်တို့လုပ်ဆောင်မယ့်အရာတွေက:**
- **ဖန်တီး** - ခေတ်သစ် CSS နည်းလမ်းတွေကို အသုံးပြုပြီး သင့် terrarium အတွက် ပြည့်စုံတဲ့ visual design
- **လေ့လာ** - cascade, inheritance နဲ့ CSS selectors စတဲ့ အခြေခံအယူအဆတွေ
- **အကောင်အထည်ဖော်** - responsive positioning နဲ့ layout strategy တွေ
- **တည်ဆောက်** - CSS shapes နဲ့ styling ကို အသုံးပြုပြီး terrarium container

### ကြိုတင်လိုအပ်ချက်

မီသင်ခန်းစာမှာ သင့် terrarium အတွက် HTML structure ကို ပြီးစီးထားပြီး အလှဆင်ဖို့ အသင့်ဖြစ်နေဖို့လိုအပ်ပါတယ်။

> 📺 **ဗီဒီယိုအရင်းအမြစ်**: ဒီအသုံးဝင်တဲ့ video walkthrough ကို ကြည့်ပါ
>
> [![CSS Basics Tutorial](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### သင့် CSS ဖိုင်ကို စတင်တပ်ဆင်ခြင်း

အလှဆင်မှုတွေကို စတင်လုပ်နိုင်ဖို့ HTML နဲ့ CSS ကို ချိတ်ဆက်ဖို့လိုပါတယ်။ ဒီချိတ်ဆက်မှုက browser ကို သင့် terrarium အတွက် styling အညွှန်းတွေကို ဘယ်မှာရှာရမယ်ဆိုတာ ပြောပြပေးပါတယ်။

သင့် terrarium folder ထဲမှာ `style.css` ဆိုတဲ့ ဖိုင်အသစ်တစ်ခု ဖန်တီးပြီး HTML document ရဲ့ `<head>` အပိုင်းမှာ link လုပ်ပါ:

```html
<link rel="stylesheet" href="./style.css" />
```

**ဒီ code က ဘာလုပ်ပေးသလဲဆိုရင်:**
- **ချိတ်ဆက်** - HTML နဲ့ CSS ဖိုင်တွေကို ချိတ်ဆက်ပေးတယ်
- **ပြောပြ** - browser ကို `style.css` ကနေ style တွေကို load နဲ့ apply လုပ်ဖို့ ပြောပြတယ်
- **အသုံးပြု** - `rel="stylesheet"` attribute ကို အသုံးပြုပြီး CSS ဖိုင်ဖြစ်ကြောင်း ဖော်ပြတယ်
- **ရည်ညွှန်း** - `href="./style.css"` နဲ့ ဖိုင်လမ်းကြောင်းကို ရည်ညွှန်းတယ်

## CSS Cascade ကို နားလည်ခြင်း

ဘာကြောင့် CSS ကို "Cascading" Style Sheets လို့ခေါ်တာလဲဆိုတာကို အခါခါတွေးမိပါသလား? Style တွေဟာ ရေတံခွန်လိုပဲ အောက်ကိုကျလာပြီး တစ်ခါတစ်ရံ အပြန်အလှန်ဆန့်ကျင်မှုတွေ ဖြစ်တတ်ပါတယ်။

စစ်တပ်အမိန့်ပေးပုံစနစ်ကို စဉ်းစားကြည့်ပါ - general order က "အားလုံးစိမ်းရောင်ဝတ်ဆင်ပါ" လို့ပြောနိုင်ပေမယ့် specific order က "အခမ်းအနားအတွက် dress blues ဝတ်ဆင်ပါ" လို့ပြောနိုင်ပါတယ်။ ပိုသေချာတဲ့အမိန့်က အလွန်အရေးကြီးပါတယ်။ CSS က ဒီလို logic ကိုလိုက်နာပြီး ဒီ hierarchy ကို နားလည်ခြင်းက debugging ကို ပိုလွယ်ကူစေပါတယ်။

### Cascade Priority ကို စမ်းသပ်ခြင်း

Style conflict ကို ဖန်တီးပြီး cascade ကို လေ့လာကြည့်ရအောင်။ အရင်ဆုံး `<h1>` tag မှာ inline style တစ်ခု ထည့်ပါ:

```html
<h1 style="color: red">My Terrarium</h1>
```

**ဒီ code က ဘာလုပ်ပေးသလဲဆိုရင်:**
- **အသုံးပြု** - inline styling ကို အသုံးပြုပြီး `<h1>` element ကို အနီရောင်ဖြစ်အောင်လုပ်တယ်
- **အသုံးပြု** - `style` attribute ကို အသုံးပြုပြီး CSS ကို HTML ထဲမှာ embed လုပ်တယ်
- **ဖန်တီး** - အဲ့ဒီ element အတွက် style rule အမြင့်ဆုံး priority ကို ဖန်တီးတယ်

နောက်တစ်ဆင့်မှာ `style.css` ဖိုင်ထဲမှာ ဒီ rule ကို ထည့်ပါ:

```css
h1 {
  color: blue;
}
```

**အပေါ်မှာ:**
- **ဖော်ပြ** - `<h1>` element အားလုံးကို target လုပ်တဲ့ CSS rule ကို ဖော်ပြတယ်
- **သတ်မှတ်** - external stylesheet ကို အသုံးပြုပြီး text color ကို အပြာရောင်ထားတယ်
- **ဖန်တီး** - inline styles ထက် priority ပိုနိမ့်တဲ့ rule

✅ **Knowledge Check**: သင့် web app မှာ ဘယ်ရောင်ပေါ်လာလဲ? အဲ့ဒီရောင်က ဘာကြောင့် အနိုင်ရသလဲ? Style တွေကို override လုပ်ချင်တဲ့အခါ ဘယ်လိုလုပ်မလဲ?

> 💡 **CSS Priority Order (အမြင့်ဆုံးမှ အနိမ့်ဆုံး):**
> 1. **Inline styles** (style attribute)
> 2. **IDs** (#myId)
> 3. **Classes** (.myClass) နဲ့ attributes
> 4. **Element selectors** (h1, div, p)
> 5. **Browser defaults**

## CSS Inheritance ကို လေ့လာခြင်း

CSS inheritance ဟာ genetics လိုပဲ - elements တွေဟာ သူ့ရဲ့ parent element တွေကနေ property အချို့ကို အလိုအလျောက်ရရှိပါတယ်။ body element မှာ font family ကို သတ်မှတ်လိုက်ရင် အတွင်းမှာရှိတဲ့ text အားလုံးဟာ အဲ့ဒီ font ကို အလိုအလျောက်အသုံးပြုပါတယ်။ Habsburg မိသားစုရဲ့ distinctive jawline က မိသားစုအတွင်းကနေ မျိုးဆက်ပေါင်းများစွာကို အလိုအလျောက်ပေါ်လာခဲ့သလိုပဲ။

ဒါပေမယ့် အရာအားလုံးကို inheritance ရရှိတာမဟုတ်ပါဘူး။ Text style တွေက font နဲ့ color တွေကို inheritance ရရှိပေမယ့် layout property တွေ - margin နဲ့ border တွေကို inheritance မရရှိပါဘူး။ 

### Font Inheritance ကို ကြည့်ရှုခြင်း

`<body>` element မှာ font family ကို သတ်မှတ်ပြီး inheritance ကို ကြည့်ရှုရအောင်:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**ဒီမှာ ဖြစ်ပျက်တာကို ခွဲခြမ်းစိတ်ဖြာကြည့်ပါ:**
- **သတ်မှတ်** - `<body>` element ကို target လုပ်ပြီး page အတွက် font family ကို သတ်မှတ်တယ်
- **အသုံးပြု** - fallback option တွေပါဝင်တဲ့ font stack ကို အသုံးပြုပြီး browser compatibility ကို ပိုကောင်းစေတယ်
- **အသုံးပြု** - အခေတ်မီ system fonts တွေကို အသုံးပြုပြီး operating system အမျိုးမျိုးမှာ အလှဆင်စေတယ်
- **သေချာစေ** - child element အားလုံးဟာ font ကို override မလုပ်မချင်း inheritance ရရှိတယ်

Browser ရဲ့ developer tools (F12) ကို ဖွင့်ပြီး Elements tab ကိုသွားပါ၊ `<h1>` element ကို inspect လုပ်ပါ။ `<body>` element ကနေ font family ကို inheritance ရရှိတာကို မြင်နိုင်ပါလိမ့်မယ်:

![inherited font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.my.png)

✅ **စမ်းသပ်မှုအချိန်**: `<body>` element မှာ `color`, `line-height`, `text-align` စတဲ့ property တွေကို သတ်မှတ်ကြည့်ပါ။ Heading နဲ့ အခြား element တွေမှာ ဘာဖြစ်သွားလဲ?

> 📝 **Inheritance ရရှိတဲ့ Property တွေ**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Inheritance မရရှိတဲ့ Property တွေ**: `margin`, `padding`, `border`, `width`, `height`, `position`

## CSS Selectors ကို ကျွမ်းကျင်စွာ အသုံးပြုခြင်း

CSS selectors ဟာ သင့်အတွက် element တွေကို target လုပ်ဖို့ နည်းလမ်းဖြစ်ပါတယ်။ "အိမ်" လို့ပြောတာထက် "Maple Street မှာရှိတဲ့ အနီရောင်တံခါးနဲ့ အပြာရောင်အိမ်" လို့ပြောတာလိုပဲ တိကျတဲ့ direction ကိုပေးနိုင်ပါတယ်။

CSS က တိကျမှုအမျိုးမျိုးကို ပေးနိုင်ပြီး သင့်အတွက် task အမျိုးမျိုးကို အကောင်းဆုံးဖြေရှင်းနိုင်တဲ့ selector ကို ရွေးချယ်ဖို့လိုပါတယ်။ Neighborhood မှာရှိတဲ့ တံခါးအားလုံးကို style လုပ်ချင်တဲ့အခါလည်း ရနိုင်သလို တစ်ခုတည်းသော တံခါးကို style လုပ်ချင်တဲ့အခါလည်း ရနိုင်ပါတယ်။

### Element Selectors (Tags)

Element selectors ဟာ HTML element တွေကို သူ့ရဲ့ tag name နဲ့ target လုပ်ပါတယ်။ Page တစ်ခုလုံးမှာ အခြေခံ style တွေ သတ်မှတ်ဖို့ အကောင်းဆုံးဖြစ်ပါတယ်:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**ဒီ style တွေကို နားလည်ပါ:**
- **သတ်မှတ်** - `body` selector ကို အသုံးပြုပြီး page တစ်ခုလုံးမှာ typography ကို တစ်မျိုးတည်းဖြစ်အောင်လုပ်တယ်
- **ဖယ်ရှား** - browser ရဲ့ default margin နဲ့ padding ကို ဖယ်ရှားပြီး control ပိုကောင်းစေတယ်
- **style လုပ်** - heading element အားလုံးကို color, alignment နဲ့ spacing သတ်မှတ်တယ်
- **အသုံးပြု** - `rem` unit ကို အသုံးပြုပြီး font size ကို scalable, accessible ဖြစ်အောင်လုပ်တယ်

Element selectors ဟာ general styling အတွက် အကောင်းဆုံးဖြစ်ပေမယ့် terrarium ထဲမှာရှိတဲ့ အပင်တွေလို individual components တွေကို style လုပ်ဖို့ အတိအကျ selector တွေလိုအပ်ပါတယ်။

### ID Selectors for Unique Elements

ID selectors ဟာ `#` symbol ကို အသုံးပြုပြီး specific `id` attribute တွေကို target လုပ်ပါတယ်။ ID တွေဟာ page တစ်ခုမှာ unique ဖြစ်ရမယ်ဆိုတော့ left နဲ့ right plant container တွေလို special element တွေကို style လုပ်ဖို့ အကောင်းဆုံးဖြစ်ပါတယ်။

အခုတော့ အပင်တွေရှိမယ့် terrarium ရဲ့ side container တွေကို style လုပ်ဖို့ code ရေးပါမယ်:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**ဒီ code က ဘာလုပ်ပေးသလဲဆိုရင်:**
- **တည်နေရာချထား** - `absolute` positioning ကို အသုံးပြုပြီး container တွေကို ဘယ်ဘက်နဲ့ညာဘက်အဆုံးမှာထားတယ်
- **အသုံးပြု** - `vh` (viewport height) unit ကို အသုံးပြုပြီး screen size ကိုလိုက်ပြီး responsive height ကို သတ်မှတ်တယ်
- **အသုံးပြု** - `box-sizing: border-box` ကို အသုံးပြုပြီး padding ကို total width ထဲမှာ ထည့်သွင်းတယ်
- **ဖယ်ရှား** - `px` unit တွေကို ဖယ်ရှားပြီး code ကို သန့်စင်စေတယ်
- **သတ်မှတ်** - မျက်လုံးကိုအေးချမ်းစေတဲ့ subtle background color ကို သတ်မှတ်တယ်

✅ **Code Quality Challenge**: ဒီ CSS က DRY (Don't Repeat Yourself) principle ကို ချိုးဖောက်နေတယ်။ ID နဲ့ class ကို ပေါင်းစပ်ပြီး refactor လုပ်နိုင်မလား?

**တိုးတက်တဲ့နည်းလမ်း:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```


### Class Selectors for Reusable Styles

Class selectors ဟာ `.` symbol ကို အသုံးပြုပြီး element တွေကို target လုပ်ပါတယ်။ ID တွေလို မဟုတ်ပဲ၊ class တွေကို HTML တစ်ခုလုံးမှာ ပြန်အသုံးပြုနိုင်ပါတယ်။ ဒါကြောင့် consistent styling pattern တွေကို ဖန်တီးဖို့ အကောင်းဆုံးဖြစ်ပါတယ်။

Terrarium ထဲမှာ အပင်တစ်ခုချင်းစီကို တူညီတဲ့ style တွေလိုအပ်ပေမယ့် တည်နေရာကို တစ်ခုချင်းစီအတွက် unique ဖြစ်အောင်လုပ်ဖို့လိုပါတယ်။ Shared style တွေအတွက် class တွေကို အသုံးပြုပြီး unique positioning အတွက် ID တွေကို အသုံးပြုပါမယ်။

**အပင်တစ်ခုချင်းစီအတွက် HTML structure:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.my.png" />
</div>
```

**အဓိကအချက်တွေကို ရှင်းပြပါ:**
- **အသုံးပြု** - `class="plant-holder"` ကို အသုံးပြုပြီး အပင် container အားလုံးအတွက် consistent container styling
- **အသုံးပြု** - `class="plant"` ကို shared image styling နဲ့ behavior အတွက် အသုံးပြု
- **ထည့်သွင်း** - unique `id="plant1"` ကို individual positioning နဲ့ JavaScript interaction အတွက် ထည့်သွင်း
- **ပေးထား** - screen reader accessibility အတွက် descriptive alt text

အခုတော့ ဒီ style တွေကို `style.css` ဖိုင်ထဲမှာ ထည့်ပါ:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**ဒီ style တွေကို ခွဲခြမ်းစိတ်ဖြာပါ:**
- **ဖန်တီး** - relative positioning ကို plant holder အတွက် positioning context ဖန်တီးဖို့
- **သတ်မှတ်** - plant holder တစ်ခုချင်းစီကို 13% height သတ်မှတ်ပြီး scrolling မလိုအောင်လုပ်တယ်
အနားပတ်ပုံစံကို တစ်စိတ်တစ်ပိုင်းစီတည်ဆောက်ကြမယ်။ အစိတ်အပိုင်းတိုင်းမှာ absolute positioning နဲ့ percentage-based sizing ကို အသုံးပြုပြီး responsive design ကို ဖန်တီးထားပါတယ်။

```css
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
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
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
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
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

**Terrarium တည်ဆောက်မှုကို နားလည်ခြင်း:**
- **အသုံးပြုသည်** percentage-based dimensions ကို screen size အားလုံးမှာ responsive scaling အတွက်
- **တည်နေရာချထားသည်** elements တွေကို အတိအကျ align နဲ့ stack လုပ်နိုင်ဖို့ absolute positioning
- **အသုံးပြုသည်** opacity values များကို glass transparency effect ဖန်တီးရန်
- **အသုံးပြုသည်** `z-index` layering ကို plants တွေ jar အတွင်းမှာ ထည့်ထားနိုင်ဖို့
- **ထည့်သွင်းသည်** box-shadow နဲ့ border-radius ကို သေချာပြုလုပ်ထားပြီး ပိုမိုရင့်ကျက်သော ပုံစံရရှိစေဖို့

### Percentages ဖြင့် Responsive Design

Dimensions အားလုံးကို fixed pixel values မဟုတ်ဘဲ percentage-based values ကို အသုံးပြုထားပုံကို သတိပြုပါ:

**အရေးကြီးသောအချက်များ:**
- **သေချာစေသည်** terrarium ကို screen size မည်သည့်အမျိုးအစားမှာမဆို proportionally scale လုပ်နိုင်စေ
- **ထိန်းသိမ်းသည်** jar components တွေကြား visual relationships
- **ပေးသည်** consistent အတွေ့အကြုံကို mobile phones မှ desktop monitors အထိ
- **ခွင့်ပြုသည်** design ကို visual layout မပျက်စီးဘဲ အလွယ်တကူ အဆင်ပြေစေ

### CSS Units ကို အသုံးပြုခြင်း

border-radius အတွက် `rem` units ကို အသုံးပြုထားပြီး root font size ကို အခြေခံပြီး scale လုပ်နိုင်စေပါတယ်။ ဒီနည်းလမ်းက user font preferences ကိုလည်း လေးစားတဲ့ accessible designs တွေ ဖန်တီးနိုင်စေပါတယ်။ [CSS relative units](https://www.w3.org/TR/css-values-3/#font-relative-lengths) အကြောင်းကို official specification မှာ ပိုမိုလေ့လာနိုင်ပါတယ်။

✅ **အမြင်အတွေ့အကြုံ**: ဒီ values တွေကို ပြောင်းလဲပြီး အကျိုးသက်ရောက်မှုကို ကြည့်ရှုပါ:
- jar opacity ကို 0.5 မှ 0.8 သို့ ပြောင်းလဲပါ – glass ပုံစံမှာ ဘယ်လိုသက်ရောက်မှုရှိလဲ?
- dirt color ကို `#3a241d` မှ `#8B4513` သို့ ပြောင်းလဲပါ – visual impact ဘယ်လိုရှိလဲ?
- dirt ရဲ့ `z-index` ကို 2 သို့ ပြောင်းလဲပါ – layering မှာ ဘာတွေဖြစ်လာလဲ?

---

## GitHub Copilot Agent Challenge 🚀

Agent mode ကို အသုံးပြုပြီး အောက်ပါ challenge ကို ပြီးမြောက်စေပါ:

**ဖော်ပြချက်:** terrarium plants တွေကို သဘာဝလေတိုက်မှုကို simulation လုပ်ပြီး အနည်းငယ်လှုပ်ရှားစေမယ့် CSS animation တစ်ခု ဖန်တီးပါ။ CSS animations, transforms, နဲ့ keyframes ကို လေ့ကျင့်ရင်း terrarium ရဲ့ visual appeal ကို ပိုမိုတိုးတက်စေပါမယ်။

**Prompt:** CSS keyframe animations တွေကို အသုံးပြုပြီး terrarium plants တွေကို အနည်းငယ် ဘယ်ဘက်နဲ့ညာဘက်ကို လှုပ်ရှားစေပါ။ 2-3 ဒီဂရီအတွင်း အနည်းငယ်လှည့်ပတ်ပြီး 3-4 စက္ကန့်ကြာမြင့်တဲ့ duration နဲ့ `.plant` class မှာ animation ကို အသုံးပြုပါ။ animation ကို အဆုံးမရှိ loop လုပ်ပြီး easing function ကို သဘာဝလှုပ်ရှားမှုအတွက် ထည့်သွင်းပါ။

[agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) အကြောင်းပိုမိုလေ့လာပါ။

## 🚀 Challenge: Glass Reflections ထည့်သွင်းခြင်း

Terrarium ကို ပိုမိုရင့်ကျက်သော glass reflections ဖြင့် တိုးတက်စေဖို့ အဆင်သင့်ဖြစ်ပါပြီ။ ဒီနည်းလမ်းက design ကို depth နဲ့ realism ပိုမိုတိုးတက်စေပါမယ်။

သင့်ရည်မှန်းချက်မှာ:
- **ဖန်တီးပါ** glass reflections အတွက် အနည်းငယ်ဖြူသော သို့မဟုတ် အလင်းရောင် oval shapes
- **တည်နေရာချထားပါ** jar ရဲ့ ဘယ်ဘက်မှာ အတိအကျ
- **အသုံးပြုပါ** opacity နဲ့ blur effects ကို realistic light reflection အတွက်
- **အသုံးပြုပါ** `border-radius` ကို organic, bubble-like shapes ဖန်တီးရန်
- **စမ်းသပ်ပါ** gradients သို့မဟုတ် box-shadows ကို realism ပိုမိုတိုးတက်စေဖို့

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/18)

## CSS အသိပညာကို တိုးတက်စေပါ

CSS ကို အစပိုင်းမှာ ရှုပ်ထွေးတတ်ပေမယ့် ဒီအခြေခံ concepts တွေကို နားလည်ခြင်းက advanced techniques တွေကို လေ့လာဖို့ အခြေခံအုတ်မြစ်တစ်ခုဖြစ်စေပါတယ်။

**CSS သင်ယူရန် နောက်ထပ်အပိုင်းများ:**
- **Flexbox** - elements တွေ alignment နဲ့ distribution ကို လွယ်ကူစေ
- **CSS Grid** - အဆင့်မြင့် layout တွေ ဖန်တီးဖို့ အင်အားကြီး tools
- **CSS Variables** - repetition ကို လျှော့ချပြီး maintainability ကို တိုးတက်စေ
- **Responsive design** - screen size မျိုးစုံမှာ အဆင်ပြေစေ

### Interactive Learning Resources

ဒီ concepts တွေကို အကျိုးသက်ရောက်မှုရှိတဲ့ game တွေဖြင့် လေ့ကျင့်ပါ:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Flexbox ကို စိန်ခေါ်မှုများဖြင့် ကျွမ်းကျင်စေ
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - CSS Grid ကို virtual carrots တွေကို စိုက်ပျိုးရင်း လေ့လာ
- 🎯 [CSS Battle](https://cssbattle.dev/) - CSS coding challenges တွေဖြင့် ကျွမ်းကျင်မှုကို စမ်းသပ်

### အပိုသင်ယူမှု

CSS အခြေခံများကို Microsoft Learn module မှာ ပြီးမြောက်စေပါ: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Assignment

[CSS Refactoring](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။