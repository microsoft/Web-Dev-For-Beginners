<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-24T16:37:16+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "my"
}
-->
# Terrarium Project Part 1: HTML အကြောင်းအရာ

![HTML အကြောင်းအရာ](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, သို့မဟုတ် HyperText Markup Language ဟာ သင်ဘဝမှာ သွားရောက်လည်ပတ်ခဲ့တဲ့ website တိုင်းရဲ့ အခြေခံအဆောက်အအုံပဲဖြစ်ပါတယ်။ HTML ကို website တွေကို အဆောက်အအုံပေးတဲ့ အရိုးတစ်ခုလို ထင်ရမယ် – content တွေကို ဘယ်မှာထားမလဲ၊ ဘယ်လိုစီမံမလဲ၊ အပိုင်းတစ်ခုချင်းစီက ဘာကို ကိုယ်စားပြုလဲဆိုတာကို သတ်မှတ်ပေးပါတယ်။ CSS ကတော့ နောက်ပိုင်းမှာ HTML ကို အရောင်နဲ့ အဆင်အပြင်တွေဖြင့် အလှဆင်ပေးမှာဖြစ်ပြီး၊ JavaScript ကတော့ အပြန်အလှန်လုပ်ဆောင်မှုတွေနဲ့ အသက်သွင်းပေးမှာဖြစ်ပါတယ်။ HTML က အခြေခံအဆောက်အအုံကိုပေးပြီး အခြားအရာတွေကို ဖြစ်နိုင်ဖို့ အခြေခံပေးပါတယ်။

ဒီသင်ခန်းစာမှာ သင် HTML အခြေခံအဆောက်အအုံကို virtual terrarium interface အတွက် ဖန်တီးမှာဖြစ်ပါတယ်။ ဒီလက်တွေ့လုပ်ငန်းက သင်ကို HTML အခြေခံအချက်တွေကို သင်ပေးမှာဖြစ်ပြီး အမြင်အာရုံကို ဆွဲဆောင်တဲ့ အရာတစ်ခုကို ဖန်တီးနိုင်မှာဖြစ်ပါတယ်။ သင် content တွေကို semantic elements တွေကို အသုံးပြုပြီး စီမံနည်း၊ image တွေနဲ့အလုပ်လုပ်နည်း၊ interactive web application တစ်ခုအတွက် အခြေခံအဆောက်အအုံကို ဖန်တီးနည်းကို သင်ယူရမှာဖြစ်ပါတယ်။

ဒီသင်ခန်းစာအဆုံးမှာ သင် plant image တွေကို စီမံထားတဲ့ column တွေထဲမှာ ပြသထားတဲ့ HTML page တစ်ခုကို ရရှိမှာဖြစ်ပြီး၊ နောက်ထပ်သင်ခန်းစာမှာ အလှဆင်ဖို့ CSS ကို အသုံးပြုနိုင်ဖို့ ပြင်ဆင်ထားမှာဖြစ်ပါတယ်။ အစမှာတော့ အရမ်းရိုးရှင်းနေမယ်လို့ မစိုးရိမ်ပါနဲ့ – CSS က အလှဆင်ပေးမယ့်အခါမှာပဲ HTML ရဲ့ အဓိကအဆောက်အအုံကို ပြည့်စုံစေမှာပါ။

## သင်ခန်းစာမတိုင်မီ Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **ကြည့်ပြီး သင်ယူပါ**: ဒီအကျိုးရှိတဲ့ video overview ကို ကြည့်ပါ
> 
> [![HTML Fundamentals Video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Project ကို စတင်ပြင်ဆင်ခြင်း

HTML code ကို စတင်မလုပ်ခင်မှာ သင့် terrarium project အတွက် workspace ကို သေချာစွာ ပြင်ဆင်ထားဖို့လိုပါတယ်။ အစကတည်းက file structure ကို စနစ်တကျဖန်တီးထားခြင်းက သင့် web development ခရီးလမ်းတစ်လျှောက်မှာ အထောက်အကူဖြစ်စေမှာပါ။

### Task: Project Structure ကို ဖန်တီးပါ

သင့် terrarium project အတွက် folder တစ်ခုကို ဖန်တီးပြီး သင့်ရဲ့ ပထမဆုံး HTML file ကို ထည့်ပါ။ သုံးနိုင်တဲ့ နည်းလမ်းနှစ်ခုရှိပါတယ်။

**Option 1: Visual Studio Code ကို အသုံးပြုခြင်း**
1. Visual Studio Code ကို ဖွင့်ပါ
2. "File" → "Open Folder" ကို click လုပ်ပါ၊ သို့မဟုတ် `Ctrl+K, Ctrl+O` (Windows/Linux) သို့မဟုတ် `Cmd+K, Cmd+O` (Mac) ကို အသုံးပြုပါ
3. `terrarium` လို့ folder အသစ်တစ်ခု ဖန်တီးပြီး ရွေးချယ်ပါ
4. Explorer pane မှာ "New File" icon ကို click လုပ်ပါ
5. သင့် file ကို `index.html` လို့ အမည်ပေးပါ

![VS Code Explorer showing new file creation](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.my.png)

**Option 2: Terminal Commands ကို အသုံးပြုခြင်း**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**ဒီ commands တွေက ဘာလုပ်ဆောင်သလဲဆိုရင်**:
- **Directory အသစ်** `terrarium` ကို ဖန်တီးပြီး project အတွက် အသုံးပြု
- **Directory ထဲ** ကို ဝင်ရောက်
- **အလွတ်** `index.html` file ကို ဖန်တီး
- **File ကို** Visual Studio Code မှာ ဖွင့်ပြီး edit လုပ်နိုင်

> 💡 **Pro Tip**: `index.html` ဆိုတဲ့ filename က web development မှာ အထူးတစ်ခုပါ။ တစ်စုံတစ်ခု website ကို သွားရောက်လည်ပတ်တဲ့အခါ browser တွေက `index.html` ကို default page အဖြစ် ပြသဖို့ အလိုအလျောက် ရှာဖွေပါတယ်။ ဒါကြောင့် `https://mysite.com/projects/` ဆိုတဲ့ URL က `projects` folder ထဲက `index.html` file ကို filename ကို URL မှာ သတ်မှတ်စရာမလိုဘဲ အလိုအလျောက် ပြသပေးမှာပါ။

## HTML Document Structure ကို နားလည်ခြင်း

HTML document တစ်ခုဟာ browser တွေ နားလည်ပြီး မှန်ကန်စွာ ပြသနိုင်ဖို့အတွက် အထူး structure တစ်ခုကို လိုအပ်ပါတယ်။ ဒီ structure ကို formal letter တစ်စောင်လို ထင်ရမယ် – အစီအစဉ်တစ်ခုအတိုင်း လိုအပ်တဲ့ elements တွေကို ထည့်သွင်းထားပြီး browser က content ကို မှန်ကန်စွာ process လုပ်နိုင်ဖို့ အထောက်အကူပြုပါတယ်။

အခုတော့ HTML document တစ်ခုမှာ မရှိမဖြစ်လိုအပ်တဲ့ အခြေခံအဆောက်အအုံကို စတင်ထည့်သွင်းကြည့်ရအောင်။

### DOCTYPE Declaration နဲ့ Root Element

HTML file တစ်ခုရဲ့ ပထမဆုံးလိုင်းနှစ်လိုင်းဟာ browser ကို document ရဲ့ "မိတ်ဆက်" အဖြစ် လုပ်ဆောင်ပေးပါတယ်။

```html
<!DOCTYPE html>
<html></html>
```

**ဒီ code က ဘာလုပ်ဆောင်သလဲဆိုရင်**:
- `<!DOCTYPE html>` ကို အသုံးပြုပြီး document type ကို HTML5 အဖြစ် သတ်မှတ်
- Page content အားလုံးကို ထည့်သွင်းမယ့် root `<html>` element ကို ဖန်တီး
- Browser rendering ကို မှန်ကန်စေဖို့ modern web standards ကို သတ်မှတ်
- Browser နဲ့ device များမှာ display ကို တူညီစေဖို့ အထောက်အကူပြု

> 💡 **VS Code Tip**: VS Code မှာ HTML tag တစ်ခုချင်းစီကို hover လုပ်ပြီး MDN Web Docs မှာ helpful information တွေကို ကြည့်နိုင်ပါတယ်၊ usage examples နဲ့ browser compatibility details ပါဝင်ပါတယ်။

> 📚 **Learn More**: DOCTYPE declaration က browser တွေကို "quirks mode" မှထွက်စေပြီး၊ အရမ်းဟောင်းနေတဲ့ website တွေကို support လုပ်ဖို့ အသုံးပြုခဲ့တာပါ။ Modern web development မှာ `<!DOCTYPE html>` declaration ရိုးရှင်းတဲ့အတိုင်း အသုံးပြုပြီး [standards-compliant rendering](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) ကို သေချာစေပါတယ်။

## Document Metadata ကို ထည့်သွင်းခြင်း

HTML document ရဲ့ `<head>` အပိုင်းဟာ browser တွေ၊ search engine တွေ အတွက် မရှိမဖြစ်လိုအပ်တဲ့ အချက်အလက်တွေကို ထည့်သွင်းထားပြီး၊ visitors တွေက page ပေါ်မှာ တိုက်ရိုက်မမြင်နိုင်တဲ့ အပိုင်းဖြစ်ပါတယ်။ ဒါဟာ webpage ကို မှန်ကန်စွာ အလုပ်လုပ်စေဖို့၊ device နဲ့ platform များမှာ မှန်ကန်စွာ ပြသနိုင်ဖို့ အထောက်အကူပြုတဲ့ "နောက်ကွယ်" အချက်အလက်တွေကို ပေးစွမ်းပါတယ်။

ဒီ metadata က browser တွေကို page ကို ဘယ်လို display လုပ်မလဲ၊ ဘယ် character encoding ကို အသုံးပြုမလဲ၊ ဘယ် screen size တွေကို handle လုပ်မလဲဆိုတာကို ပြောပြပေးပါတယ် – professional, accessible web pages ဖန်တီးဖို့ မရှိမဖြစ်လိုအပ်ပါတယ်။

### Task: Document Head ကို ထည့်သွင်းပါ

သင့် `<html>` tag တွေကို ဖွင့်ပြီး ပိတ်ထားတဲ့အကြားမှာ ဒီ `<head>` section ကို ထည့်သွင်းပါ:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Element တစ်ခုချင်းစီက ဘာလုပ်ဆောင်သလဲဆိုရင်**:
- Browser tabs နဲ့ search results မှာ ပြသမယ့် page title ကို သတ်မှတ်
- UTF-8 character encoding ကို သတ်မှတ်ပြီး text display ကို မှန်ကန်စေ
- Modern versions of Internet Explorer နဲ့ compatibility ကို သေချာစေ
- Responsive design ကို configure လုပ်ပြီး viewport ကို device width နဲ့ ကိုက်ညီစေ
- Initial zoom level ကို သတ်မှတ်ပြီး content ကို သဘာဝအရွယ်အစားနဲ့ ပြသ

> 🤔 **ဒီအကြောင်းကို စဉ်းစားပါ**: `<meta name="viewport" content="width=600">` ဆိုတဲ့ viewport meta tag ကို သတ်မှတ်လိုက်ရင် ဘာဖြစ်မလဲ? ဒီဟာက page ကို အမြဲ 600 pixels wide ဖြစ်အောင် ဖန်တီးပေးပြီး responsive design ကို ပျက်စီးစေမှာပါ! [viewport configuration](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag) ကို မှန်ကန်စွာ သတ်မှတ်နည်းကို ပိုမိုလေ့လာပါ။

## Document Body ကို ဖန်တီးခြင်း

HTML document ရဲ့ `<body>` element ဟာ webpage ရဲ့ မြင်နိုင်တဲ့ content အားလုံး – user တွေ မြင်နိုင်တဲ့အရာတွေ၊ အပြန်အလှန်လုပ်ဆောင်နိုင်တဲ့အရာတွေကို ထည့်သွင်းထားပါတယ်။ `<head>` section က browser ကို အညွှန်းပေးခဲ့ပြီး၊ `<body>` section ကတော့ အမှန်တကယ် content တွေ – text, images, buttons, နဲ့ အခြား element တွေကို ထည့်သွင်းထားပါတယ်။

အခုတော့ body structure ကို ထည့်သွင်းပြီး HTML tag တွေက ဘယ်လိုပုံစံဖြင့် meaningful content ကို ဖန်တီးနိုင်တယ်ဆိုတာကို နားလည်ကြည့်ရအောင်။

### HTML Tag Structure ကို နားလည်ခြင်း

HTML က paired tags တွေကို အသုံးပြုပြီး element တွေကို သတ်မှတ်ပါတယ်။ အများဆုံး tag တွေမှာ `<p>` လို opening tag နဲ့ `</p>` လို closing tag ရှိပြီး content ကို အကြားမှာ ထည့်သွင်းထားပါတယ်: `<p>Hello, world!</p>`။ ဒါဟာ "Hello, world!" ဆိုတဲ့ text ကို ပါဝင်တဲ့ paragraph element ကို ဖန်တီးပေးပါတယ်။

### Task: Body Element ကို ထည့်သွင်းပါ

သင့် HTML file ကို update လုပ်ပြီး `<body>` element ကို ထည့်သွင်းပါ:

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

**ဒီ complete structure က ဘာတွေ ပေးစွမ်းနိုင်လဲဆိုရင်**:
- HTML5 document framework ကို အခြေခံအဆောက်အအုံအဖြစ် ဖန်တီး
- Browser rendering ကို မှန်ကန်စွာ ပြုလုပ်ဖို့ metadata တွေကို ထည့်သွင်း
- မြင်နိုင်တဲ့ content အတွက် အလွတ် body ကို ဖန်တီး
- Modern web development best practices ကို လိုက်နာ

အခုတော့ သင့် terrarium ရဲ့ မြင်နိုင်တဲ့ elements တွေကို ထည့်သွင်းဖို့ ပြင်ဆင်ထားပါပြီ။ `<div>` elements တွေကို container အဖြစ် အသုံးပြုပြီး content ရဲ့ အပိုင်းအစတွေကို စီမံမှာဖြစ်ပြီး၊ `<img>` elements တွေကို plant images တွေကို ပြသဖို့ အသုံးပြုမှာဖြစ်ပါတယ်။

### Images နဲ့ Layout Containers ကို အသုံးပြုခြင်း

HTML မှာ images တွေဟာ "self-closing" tags တွေကို အသုံးပြုပါတယ်။ `<p></p>` လို element တွေက content ကို ပတ်ပတ်လည် wrap လုပ်ပေးရတဲ့အစား၊ `<img>` tag ကတော့ `src` (image file path) နဲ့ `alt` (accessibility) လို attributes တွေကို အသုံးပြုပြီး tag ထဲမှာ အားလုံးကို ထည့်သွင်းထားပါတယ်။

Images တွေကို HTML မှာ ထည့်သွင်းမယ့်အခါ project files တွေကို သေချာစွာ စီမံထားဖို့လိုပါတယ် – images folder ကို ဖန်တီးပြီး plant graphics တွေကို ထည့်သွင်းပါ။

**အရင်ဆုံး images တွေကို ပြင်ဆင်ပါ**:
1. Terrarium project folder ထဲမှာ `images` folder ကို ဖန်တီးပါ
2. [solution folder](../../../../3-terrarium/solution/images) မှာ plant images တွေကို download လုပ်ပါ (plant images 14 ခု)
3. Plant images အားလုံးကို သင့် `images` folder ထဲကို copy လုပ်ပါ

### Task: Plant Display Layout ကို ဖန်တီးပါ

အခုတော့ plant images တွေကို `<body></body>` tags တွေကြားမှာ စီမံထားတဲ့ columns နှစ်ခုထဲမှာ ထည့်သွင်းပါ:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.my.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.my.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.my.png" />
		</div>
	</div>
</div>
```

**ဒီ code မှာ ဘာတွေ ဖြစ်နေသလဲဆိုရင်**:
- `id="page"` နဲ့ main page container ကို ဖန်တီးပြီး content အားလုံးကို ထည့်သွင်း
- `left-container` နဲ့ `right-container` ဆိုတဲ့ column containers နှစ်ခုကို ဖန်တီး
- Left column မှာ plants 7 ခု၊ Right column မှာ plants 7 ခုကို စီမံ
- Plant image တစ်ခုချင်းစီကို `plant-holder` div ထဲမှာ wrap လုပ်ပြီး positioning ကို စီမံ
- CSS styling အတွက် consistent class names တွေကို အသုံးပြု
- JavaScript interaction အတွက် plant image တစ်ခုချင်းစီကို unique IDs သတ်မှတ်
- Images folder ကို pointing လုပ်တဲ့ file paths တွေကို ထည့်သွင်း

> 🤔 **စဉ်းစားပါ**: Images အားလုံးမှာ alt text "plant" တူညီနေပါတယ်။ ဒါဟာ accessibility အတွက် မကောင်းပါဘူး။ Screen reader အသုံးပြုသူတွေဟာ "plant" ဆိုတဲ့ စကားလုံးကို 14 ကြိမ် ထပ်ခါတလဲလဲ ကြားရမှာဖြစ်ပြီး image တစ်ခုချင်းစီက ဘယ် plant ဖြစ်တယ်ဆိုတာ မသိနိုင်ပါဘူး။ Image တစ်ခုချင်းစီအတွက် ပိုမိုဖော်ပြနိုင်တဲ့ alt text ကို သင်ထည့်သွင်းနိုင်မလား?

> 📝 **HTML Element Types**: `<div>` elements တွေဟာ "block-level" ဖြစ်ပြီး အကျယ်အပြည့်ကိုယူတယ်၊ `<span>` elements တွေကတော့ "inline" ဖြစ်ပြီး လိုအပ်တဲ့အကျယ်ပဲယူတယ်။ ဒီ `<div>` tags တွေကို `<span>` tags တွေပြောင်းလိုက်ရင် ဘာဖြစ်မလဲဆိုတာ သင်ထင်ရမလဲ?

ဒီ markup ကို ထည့်သွင်းပြီးရင် plants တွေ screen ပေါ်မှာ ပြသလာမှာဖြစ်ပေမယ့် – အလှဆင်ထားတာမဟုတ်သေးပါဘူး။ CSS ကတော့ နောက်ထပ်သင်ခန်းစာမှာ အလှဆင်ပေးမှာပါ! အခုတော့ သင့် content ကို မှန်ကန်စွာ စီမံထားတဲ့ HTML အခြေခံအဆောက်အအုံကို ရရှိထားပါပြီ။

## Accessibility အတွက် Semantic HTML ကို အသုံးပြုခြင်း

Semantic HTML ဆိုတာ element တွေကို သူ့ရဲ့ အဓိပ္ပါယ်နဲ့ ရည်ရွယ်ချက်အရ ရွေးချယ်အသုံးပြုခြင်းကို ဆိုလိုပါတယ်။ Appearance ကိုသာမဟုတ်ဘဲ content ရဲ့ structure နဲ့ အဓိပ္ပါယ်ကို browser, search engine, နဲ့ screen reader တို့ကို ပြောပြပေးပါတယ်။

ဒီနည်းလမ်းက disabilities ရှိတဲ့ user တွေကို ပိုမိုရောက်ရှိနိုင်တဲ့ website တွေ ဖန်တီးပေးပြီး search engine တွေက content ကို ပိုမိုနားလည်နိုင်စေပါတယ်။ Modern web development ရဲ့ အခြေခံ principle ဖြစ်ပြီး လူတိုင်းအတွက် ပိုမိုကောင်းမွန်တဲ့ အတွေ့အကြုံတွေ ဖန်တီးပေးပါတယ်။

### Semantic Page Title ကို ထည့်သွင်းခြင်း

Terrarium page အတွက် heading ကို သင့် `<body>` tag ကို ဖွင့်ပြီးနောက်မှာ ထည့်သွင်းပါ:

```html
<h1>My Terrarium</h1>
```

**Semantic markup ဘာကြောင့် အရေးကြီးလဲဆိုရင်**:
- Screen reader တွေ page structure ကို navigate လုပ်ပြီး နားလည်နိုင်စေ
- Search engine optimization (SEO) ကို တိုးတက်စေပြီး content hierarchy ကို ရှင်းလင်းစေ
- Visual impairments သို့မဟုတ် cognitive differences ရှိတဲ့ user တွေအတွက် accessibility ကို တိုးတက်စေ
- Devices နဲ့ platforms အားလုံးမှာ user experience ကို ပိုမိုကောင်းမွန်စေ
- Professional development အတွက် web
**အဓိကခေါင်းစဉ်:** Plant Care Guide

**ရေချိန်ခြင်း**
ရေချိန်ခြင်းသည် အပင်များ၏ ကျန်းမာရေးနှင့် ကြီးထွားမှုအတွက် အရေးကြီးသော အပိုင်းတစ်ခုဖြစ်သည်။ အပင်တစ်ခုစီ၏ ရေလိုအပ်ချက်များကို နားလည်ပြီး အပင်၏ အမျိုးအစားနှင့် ရာသီဥတုအခြေအနေများအပေါ် မူတည်၍ ရေချိန်ပေးပါ။

**အလင်းရောင်လိုအပ်ချက်များ**
အပင်များသည် အလင်းရောင်ကို photosynthesis အတွက် အသုံးပြုသည်။ အပင်တစ်ခုစီ၏ အလင်းရောင်လိုအပ်ချက်များကို သိရှိပြီး အပင်၏ အမျိုးအစားအပေါ် မူတည်၍ အလင်းရောင်အမျှဝေမှုကို သေချာစွာ စီမံပါ။

**ပွဲစေ့စောင့်ရှောက်မှု**
အပင်များ၏ အမြစ်များသည် ကျန်းမာရေးကောင်းမွန်စေရန် သင့်တော်သော ပွဲစေ့ကို လိုအပ်သည်။ ပွဲစေ့၏ အမျိုးအစားနှင့် အပင်၏ အမျိုးအစားအပေါ် မူတည်၍ သင့်တော်သော nutrients နှင့် drainage ကို ထည့်သွင်းစဉ်းစားပါ။

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

## HTML သမိုင်းကို စိန်ခေါ်မှုအနက် ရှာဖွေခြင်း

**ဝက်ဘ်၏ တိုးတက်မှုကို လေ့လာခြင်း**

HTML သည် Tim Berners-Lee က 1990 ခုနှစ်တွင် CERN တွင် ပထမဆုံး ဝက်ဘ်ဘရောက်ဇာကို ဖန်တီးခဲ့ပြီးနောက် အလွန်တိုးတက်လာခဲ့သည်။ `<marquee>` ကဲ့သို့သော အဟောင်းရိုးစွဲ tag များသည် ယနေ့ခေတ်၏ အဆင်ပြေမှုစံနှုန်းများနှင့် တုံ့ပြန်မှုဒီဇိုင်းအခြေခံများနှင့် မကိုက်ညီသောကြောင့် ယခုအခါ အသုံးမပြုတော့ပါ။

**စမ်းသပ်မှုကို လုပ်ကြည့်ပါ:**
1. သင့် `<h1>` ခေါင်းစဉ်ကို `<marquee>` tag ဖြင့် ခေတ္တပတ်ထားပါ: `<marquee><h1>My Terrarium</h1></marquee>`
2. သင့်စာမျက်နှာကို ဘရောက်ဇာတွင် ဖွင့်ပြီး လှိမ့်လှုပ်မှုကို ကြည့်ရှုပါ
3. အဆိုပါ tag ကို ဘာကြောင့် အသုံးမပြုတော့သလဲဆိုတာ စဉ်းစားပါ (အကြံပြုချက်- အသုံးပြုသူအတွေ့အကြုံနှင့် အဆင်ပြေမှုကို စဉ်းစားပါ)
4. `<marquee>` tag ကို ဖယ်ရှားပြီး semantic markup သို့ ပြန်လည်ရောက်ပါ

**အတွေးအမြင်မေးခွန်းများ:**
- လှိမ့်လှုပ်နေသော ခေါင်းစဉ်သည် အမြင်အာရုံချို့ယွင်းမှုရှိသူများ သို့မဟုတ် လှုပ်ရှားမှုအထိခိုက်မှုရှိသူများကို ဘယ်လို သက်ရောက်မှုရှိနိုင်မလဲ။
- ယနေ့ခေတ် CSS နည်းပညာများသည် အဆင်ပြေမှုရှိသော လှုပ်ရှားမှုအကျိုးသက်ရောက်မှုကို ဘယ်လိုရနိုင်မလဲ။
- အဟောင်းရိုးစွဲသော element များကို အသုံးမပြုဘဲ ယနေ့ခေတ် ဝက်ဘ်စံနှုန်းများကို အသုံးပြုရခြင်းက ဘာကြောင့် အရေးကြီးသလဲ။

[obsolete and deprecated HTML elements](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) အကြောင်းကို ရှာဖွေပြီး ဝက်ဘ်စံနှုန်းများသည် အသုံးပြုသူအတွေ့အကြုံကို တိုးတက်စေရန် ဘယ်လို တိုးတက်လာသည်ကို နားလည်ပါ။

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/16)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

**HTML အကြောင်း ပိုမိုနက်နက်ရှိုင်းရှိုင်း သိရှိရန်**

HTML သည် ၃၀ နှစ်ကျော်ကြာ ဝက်ဘ်၏ အခြေခံအုတ်မြစ်ဖြစ်ပြီး ရိုးရှင်းသော စာရွက်အမှတ်အသားဘာသာစကားမှ interactive application များ ဖန်တီးရန်အတွက် တိုးတက်လာခဲ့သည်။ ဤတိုးတက်မှုကို နားလည်ခြင်းသည် ယနေ့ခေတ် ဝက်ဘ်စံနှုန်းများကို ကျေးဇူးတင်စေပြီး ပိုမိုကောင်းမွန်သော ဖွံ့ဖြိုးရေးဆုံးဖြတ်ချက်များကို လုပ်ဆောင်နိုင်စေသည်။

**အကြံပြုသော လေ့လာမှုလမ်းကြောင်းများ:**

1. **HTML သမိုင်းနှင့် တိုးတက်မှု**
   - HTML 1.0 မှ HTML5 အထိ timeline ကို ရှာဖွေပါ
   - tag အချို့ကို ဘာကြောင့် အသုံးမပြုတော့သလဲ (အဆင်ပြေမှု၊ မိုဘိုင်းအဆင်ပြေမှု၊ ထိန်းသိမ်းမှု)
   - HTML features အသစ်များနှင့် အဆိုပြုချက်များကို စုံစမ်းပါ

2. **Semantic HTML ကို နက်နက်ရှိုင်းရှိုင်း လေ့လာခြင်း**
   - [HTML5 semantic elements](https://developer.mozilla.org/docs/Web/HTML/Element) အပြည့်အစုံကို လေ့လာပါ
   - `<article>`, `<section>`, `<aside>`, `<main>` ကို ဘယ်အခါ အသုံးပြုရမည်ကို သတ်မှတ်ရန် လေ့ကျင့်ပါ
   - အဆင်ပြေမှုတိုးတက်စေရန် ARIA attributes အကြောင်းကို လေ့လာပါ

3. **ယနေ့ခေတ် ဝက်ဘ်ဖွံ့ဖြိုးမှု**
   - Microsoft Learn တွင် [building responsive websites](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) ကို ရှာဖွေပါ
   - HTML ကို CSS နှင့် JavaScript နှင့် ဘယ်လို ပေါင်းစပ်ရမည်ကို နားလည်ပါ
   - ဝက်ဘ်စွမ်းဆောင်ရည်နှင့် SEO အကောင်းဆုံးအလေ့အကျင့်များကို လေ့လာပါ

**အတွေးအမြင်မေးခွန်းများ:**
- သင်ရှာဖွေတွေ့ရှိခဲ့သော HTML tag အဟောင်းများသည် ဘာကြောင့် ဖယ်ရှားခဲ့ရသလဲ။
- HTML version အသစ်များအတွက် အဆိုပြုထားသော feature အသစ်များက ဘာတွေလဲ။
- Semantic HTML သည် ဝက်ဘ်အဆင်ပြေမှုနှင့် SEO အတွက် ဘယ်လို အကျိုးသက်ရောက်မှုရှိနိုင်သလဲ။

## အလုပ်ပေးစာ

[Practice your HTML: Build a blog mockup](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။