<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89f7f9f800ce7c9f149e98baaae8491a",
  "translation_date": "2025-08-28T18:43:36+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "my"
}
-->
# Terrarium Project Part 1: HTML အကြောင်းအရာ

![HTML အကြောင်းအရာ](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမေးခွန်း

[မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/15)

> ဗီဒီယိုကို ကြည့်ပါ

> 
> [![Git နှင့် GitHub အခြေခံဗီဒီယို](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### အကျဉ်းချုပ်

HTML, သို့မဟုတ် HyperText Markup Language သည် ဝက်ဘ်၏ 'အရိုး' ဖြစ်သည်။ CSS သည် HTML ကို 'အလှဆင်' ပေးပြီး JavaScript သည် အသက်သွင်းပေးသည်ဟု ဆိုရမည်။ HTML သည် သင့်ဝက်ဘ်အက်ပလီကေးရှင်း၏ ကိုယ်ခန္ဓာဖြစ်သည်။ HTML ရဲ့ syntax ကလည်း အဲဒီအယူအဆကို ပြန်လည်ရိုက်ပြထားပြီး "head", "body", "footer" တို့ကို ထည့်သွင်းထားသည်။

ဒီသင်ခန်းစာမှာတော့ HTML ကို အသုံးပြုပြီး သင့် virtual terrarium ရဲ့ interface ရဲ့ 'အရိုး' ကို ဖွဲ့စည်းသွားမှာဖြစ်ပါတယ်။ ဒီ interface မှာ ခေါင်းစဉ်တစ်ခုနဲ့ အတန်းသုံးခုပါမယ်။ ညာဘက်နဲ့ ဘယ်ဘက်အတန်းတွေမှာ draggable plants တွေရှိပြီး အလယ်မှာတော့ အမှန်တကယ်သော ဖန်ပုံစံ terrarium ဖြစ်မယ်။ ဒီသင်ခန်းစာအဆုံးမှာ သင့်အတန်းတွေမှာ အပင်တွေကို မြင်နိုင်ပါမယ်၊ ဒါပေမယ့် interface က အနည်းငယ် ထူးထူးဆန်းဆန်း ဖြစ်နေပါမယ်။ စိတ်မပူပါနဲ့၊ နောက်ပိုင်းမှာ CSS styles တွေကို ထည့်သွင်းပြီး interface ကို ပိုမိုလှပအောင် ပြင်ဆင်သွားမှာဖြစ်ပါတယ်။

### လုပ်ဆောင်ရန်

သင့်ကွန်ပျူတာမှာ 'terrarium' folder တစ်ခုဖန်တီးပြီး အဲဒီ folder အတွင်းမှာ 'index.html' ဖိုင်တစ်ခု ဖန်တီးပါ။ Visual Studio Code မှာ terrarium folder ကို ဖန်တီးပြီးနောက် VS Code window အသစ်ကို ဖွင့်ပြီး 'open folder' ကို နှိပ်ပါ၊ သင့် folder အသစ်ကို ရွေးချယ်ပါ။ Explorer pane မှာ 'file' ခလုတ်ကို နှိပ်ပြီး ဖိုင်အသစ်ကို ဖန်တီးပါ။

![VS Code မှာ explorer](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.my.png)

သို့မဟုတ်

git bash မှာ အောက်ပါ command တွေကို အသုံးပြုပါ:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` or `nano index.html`

> index.html ဖိုင်တွေက browser ကို folder ရဲ့ default ဖိုင်ဖြစ်ကြောင်း ပြောပြပေးပါတယ်။ ဥပမာ `https://anysite.com/test` ဆိုရင် test folder ရဲ့ အတွင်းမှာ `index.html` ဖိုင်ရှိနိုင်ပါတယ်။ `index.html` ကို URL မှာ မဖော်ပြရင်လည်း ရပါတယ်။

---

## DocType နှင့် html tags

HTML ဖိုင်ရဲ့ ပထမဆုံးလိုင်းက DocType ဖြစ်ပါတယ်။ ဒီလိုင်းကို ဖိုင်ရဲ့ အပေါ်ဆုံးမှာ ထည့်သွင်းဖို့ လိုအပ်ပါတယ်။ ဒါက browser ကို page ကို standard mode မှာ render လုပ်ဖို့ ပြောပြပေးပါတယ်၊ အခု html specification ကို လိုက်နာဖို့ ဖြစ်ပါတယ်။

> အကြံပြုချက်: VS Code မှာ tag ကို hover လုပ်ပြီး MDN Reference guide မှာ tag ရဲ့ အသုံးအနှုန်းကို ကြည့်နိုင်ပါတယ်။

ဒုတိယလိုင်းမှာ `<html>` tag ရဲ့ ဖွင့်လှစ် tag ကို ထည့်သွင်းပြီး အခုအချိန်မှာတော့ `</html>` ဆိုတဲ့ ပိတ်သွားတဲ့ tag ကို ထည့်သွင်းပါ။ ဒီ tag တွေက သင့် interface ရဲ့ root elements ဖြစ်ပါတယ်။

### လုပ်ဆောင်ရန်

သင့် `index.html` ဖိုင်ရဲ့ အပေါ်ဆုံးမှာ အောက်ပါလိုင်းတွေကို ထည့်သွင်းပါ:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ DocType ကို query string ဖြင့် သတ်မှတ်ခြင်းအားဖြင့် mode အမျိုးမျိုးကို သတ်မှတ်နိုင်ပါတယ်။ [Quirks Mode နှင့် Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) ကို ဖတ်ရှုပါ။ ဒီ mode တွေက အရမ်းဟောင်းနေတဲ့ browser တွေကို ပံ့ပိုးပေးဖို့ ဖြစ်ပါတယ် (ဥပမာ Netscape Navigator 4 နှင့် Internet Explorer 5)။ သင်တော့ standard doctype declaration ကို အသုံးပြုနိုင်ပါတယ်။

---

## ဖိုင်ရဲ့ 'head'

HTML ဖိုင်ရဲ့ 'head' အပိုင်းမှာ သင့်ဝက်ဘ်ပေ့ဂျ်အကြောင်း အရေးကြီးသော အချက်အလက်များ (metadata) ပါဝင်ပါတယ်။ ဥပမာ [metadata](https://developer.mozilla.org/docs/Web/HTML/Element/meta) တွေပါဝင်ပါတယ်။ ဒီအပိုင်းမှာတော့ ဝက်ဘ် server ကို အောက်ပါအချက်လက် ၄ ခုကို ပြောပြပေးပါတယ်။

-   ပေ့ဂျ်ရဲ့ ခေါင်းစဉ်
-   metadata အချက်အလက်များ:
    -   'character set' - ပေ့ဂျ်မှာ အသုံးပြုထားတဲ့ character encoding
    -   browser အချက်အလက်များ - `x-ua-compatible` သည် IE=edge browser ကို ပံ့ပိုးပေးသည်
    -   viewport ရဲ့ အစောပိုင်း scale ကို သတ်မှတ်ခြင်း - ပေ့ဂျ်ကို ပထမဆုံးဖွင့်တဲ့အခါ zoom level ကို ထိန်းချုပ်ပေးသည်

### လုပ်ဆောင်ရန်

ဖွင့်လှစ် `<html>` tag နှင့် ပိတ်သွားတဲ့ `<html>` tag အကြားမှာ 'head' block ကို ထည့်သွင်းပါ။

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ `<meta name="viewport" content="width=600">` ဆိုတဲ့ viewport meta tag ကို သတ်မှတ်ရင် ဘာဖြစ်မလဲ? [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag) အကြောင်းကို ဖတ်ရှုပါ။

---

## ဖိုင်ရဲ့ `body`

### HTML Tags

HTML မှာ tag တွေကို သင့် .html ဖိုင်မှာ ထည့်သွင်းပြီး ဝက်ဘ်ပေ့ဂျ်ရဲ့ elements တွေကို ဖန်တီးနိုင်ပါတယ်။ tag တစ်ခုစီမှာ ဖွင့်လှစ် tag နဲ့ ပိတ်သွားတဲ့ tag ရှိတတ်ပါတယ်၊ ဥပမာ `<p>hello</p>` ဆိုရင် paragraph ကို ဖော်ပြပါတယ်။ သင့် interface ရဲ့ body ကို ဖွင့်လှစ် `<body>` tag တွေကို `<html>` tag တွေထဲမှာ ထည့်သွင်းပါ။ သင့် markup က အခုလို ဖြစ်နေပါမယ်။

### လုပ်ဆောင်ရန်

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

အခု သင့်ပေ့ဂျ်ကို ဖန်တီးဖို့ စတင်နိုင်ပါပြီ။ ပုံမှန်အားဖြင့် `<div>` tag တွေကို အသုံးပြုပြီး ပေ့ဂျ်ရဲ့ အပိုင်းအစတွေကို ဖန်တီးပါတယ်။ အခုတော့ `<div>` element တွေကို ဖန်တီးပြီး အဲဒီအတွင်းမှာ ပုံတွေကို ထည့်သွင်းပါမယ်။

### ပုံများ

ပိတ်သွားတဲ့ tag မလိုအပ်တဲ့ HTML tag တစ်ခုက `<img>` tag ဖြစ်ပါတယ်၊ အဲဒီ tag ရဲ့ `src` element က ပေ့ဂျ်ကို item ကို render လုပ်ဖို့ လိုအပ်တဲ့ အချက်အလက်အားလုံးကို ပေးပါတယ်။

သင့် app မှာ `images` folder တစ်ခု ဖန်တီးပြီး [source code folder](../../../../3-terrarium/solution/images) မှာရှိတဲ့ ပုံတွေကို ထည့်သွင်းပါ။ (အပင်ပုံ ၁၄ ခုရှိပါတယ်)

### လုပ်ဆောင်ရန်

အပင်ပုံတွေကို `<body></body>` tag တွေကြားမှာ အတန်းနှစ်ခုအတွင်း ထည့်သွင်းပါ:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> မှတ်ချက်: Spans နှင့် Divs. Divs တွေကို 'block' elements အဖြစ် သတ်မှတ်ပြီး Spans တွေကို 'inline' elements အဖြစ် သတ်မှတ်ပါတယ်။ ဒီ divs တွေကို spans တွေပြောင်းလဲရင် ဘာဖြစ်မလဲ?

ဒီ markup နဲ့ အပင်တွေကို screen ပေါ်မှာ မြင်နိုင်ပါပြီ။ ဒါပေမယ့် CSS နဲ့ style မလုပ်သေးလို့ အရမ်းမလှပသေးပါဘူး။ CSS ကို နောက်သင်ခန်းစာမှာ ထည့်သွင်းပါမယ်။

ပုံတစ်ခုစီမှာ alt text ပါဝင်ပြီး ပုံကို မမြင်နိုင်တဲ့အခါမှာပင် alt text ကို မြင်နိုင်ပါတယ်။ ဒီ attribute ကို accessibility အတွက် ထည့်သွင်းဖို့ အရေးကြီးပါတယ်။ accessibility အကြောင်းကို နောက်သင်ခန်းစာတွေမှာ ပိုမိုလေ့လာနိုင်ပါတယ်။ အခုတော့ alt attribute က ပုံကို မမြင်နိုင်တဲ့အခါမှာ alternative အချက်အလက်ကို ပေးစွမ်းပေးတယ်ဆိုတာ သတိထားပါ။

✅ ပုံတစ်ခုစီမှာ alt tag တူညီနေတယ်ဆိုတာ သတိထားမိပါသလား? ဒီဟာက အကောင်းဆုံးလေ့ကျင့်မှုလား? ဘာကြောင့်လဲ? ဒီ code ကို ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်နိုင်မလား?

---

## Semantic markup

အထွေထွေအားဖြင့် HTML ရေးသားတဲ့အခါမှာ အဓိပ္ပာယ်ရှိတဲ့ 'semantics' ကို အသုံးပြုဖို့ ပိုမိုကောင်းမွန်ပါတယ်။ အဓိပ္ပာယ်ရှိတဲ့ semantics ဆိုတာ ဘာလဲ? ဒါက HTML tag တွေကို သူတို့ရဲ့ data အမျိုးအစား သို့မဟုတ် interaction အမျိုးအစားအတွက် ဖန်တီးထားတဲ့အတိုင်း အသုံးပြုဖို့ ဖြစ်ပါတယ်။ ဥပမာ အဓိကခေါင်းစဉ် text ကို `<h1>` tag ကို အသုံးပြုသင့်ပါတယ်။

ဖွင့်လှစ် `<body>` tag ရဲ့ အောက်မှာ အောက်ပါလိုင်းကို ထည့်သွင်းပါ:

```html
<h1>My Terrarium</h1>
```

Semantic markup ကို အသုံးပြုခြင်း (ဥပမာ header တွေကို `<h1>` သုံးခြင်း၊ unordered lists တွေကို `<ul>` သုံးခြင်း) က screen reader တွေကို ဝက်ဘ်ပေ့ဂျ်တစ်ခုကို navigation လုပ်ဖို့ အကူအညီပေးပါတယ်။ ပုံမှန်အားဖြင့် button တွေကို `<button>` သုံးပြီး lists တွေကို `<li>` သုံးသင့်ပါတယ်။ `<span>` element တွေကို specially styled click handler တွေဖြင့် button အဖြစ် mock လုပ်နိုင်ပေမယ့် disabled user တွေက button ရှိတဲ့နေရာကို ဖော်ထုတ်ဖို့ နည်းပညာတွေကို အသုံးပြုနိုင်ဖို့ `<button>` element ကို သုံးသင့်ပါတယ်။ ဒီအကြောင်းကြောင့် semantic markup ကို အမြဲအသုံးပြုဖို့ ကြိုးစားပါ။

✅ Screen reader တစ်ခုကို ကြည့်ပြီး [ဝက်ဘ်ပေ့ဂျ်တစ်ခုနဲ့ ဘယ်လို interaction လုပ်သလဲ](https://www.youtube.com/watch?v=OUDV1gqs9GA) ကို ကြည့်ပါ။ Non semantic markup ရေးသားခြင်းက user ကို ဘာကြောင့် စိတ်ညစ်စေမလဲ?

## Terrarium

ဒီ interface ရဲ့ နောက်ဆုံးအပိုင်းမှာ terrarium ကို ဖန်တီးဖို့ style လုပ်မယ့် markup ကို ဖန်တီးပါမယ်။

### လုပ်ဆောင်ရန်:

နောက်ဆုံး `</div>` tag ရဲ့ အပေါ်မှာ အောက်ပါ markup ကို ထည့်သွင်းပါ:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ ဒီ markup ကို screen ပေါ်မှာ ထည့်သွင်းပြီးနောက် ဘာမှ မမြင်ရဘူးဆိုတာ သတိထားမိပါသလား? ဘာကြောင့်လဲ?

---

## 🚀စိန်ခေါ်မှု

HTML မှာ 'ဟောင်း' tag တွေရှိပြီး အခုထိ စမ်းသပ်ဖို့ အရမ်းစိတ်ဝင်စားစရာကောင်းပါတယ်၊ သို့သော် [ဒီ tag တွေ](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) ကဲ့သို့ deprecated tag တွေကို သင့် markup မှာ မသုံးသင့်ပါ။ သို့သော် `<marquee>` tag ကို အသုံးပြုပြီး h1 ခေါင်းစဉ်ကို အလျားလိုက် scroll လုပ်နိုင်မလား? (သုံးပြီးနောက်မှာ tag ကို ဖယ်ရှားဖို့ မမေ့ပါနဲ့)

## မိန့်ခွန်းပြီးနောက် စစ်ဆေးမေးခွန်း

[မိန့်ခွန်းပြီးနောက် စစ်ဆေးမေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/16)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

HTML သည် ဝက်ဘ်ကို ယနေ့အထိ ဖွံ့ဖြိုးတိုးတက်စေတဲ့ 'ယုံကြည်စိတ်ချရသော' အဆောက်အအုံစနစ်ဖြစ်သည်။ tag ဟောင်းများနှင့် အသစ်များကို လေ့လာခြင်းအားဖြင့် သမိုင်းအကြောင်းကို သိရှိပါ။ ဘာကြောင့် tag တစ်ချို့ကို deprecated လုပ်ပြီး တစ်ချို့ကို ထည့်သွင်းခဲ့တာလဲ? အနာဂတ်မှာ ဘယ် tag တွေကို ထည့်သွင်းနိုင်မလဲ?

ဝက်ဘ်နှင့် မိုဘိုင်းစက်များအတွက် site တွေ ဖန်တီးခြင်းအကြောင်းကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) မှာ ပိုမိုလေ့လာပါ။

## လုပ်ငန်းတာဝန်

[သင့် HTML ကို လေ့ကျင့်ပါ: Blog mockup တစ်ခု ဖန်တီးပါ](assignment.md)

---

**ဝက်ဘ်ဆိုက်မှတ်ချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက်ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်ကြောင်း သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတည်သောရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပြန်ဆိုမှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော နားလည်မှုမှားများ သို့မဟုတ် အဓိပ္ပါယ်မှားများအတွက် ကျွန်ုပ်တို့ တာဝန်မယူပါ။