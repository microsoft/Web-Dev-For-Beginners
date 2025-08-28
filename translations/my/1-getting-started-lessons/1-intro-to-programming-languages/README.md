<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2dcbb9259dee4f20a4f08d9a1aa2bd4c",
  "translation_date": "2025-08-28T18:50:20+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "my"
}
-->
# ပရိုဂရမ်မင်းဘာသာစကားများနှင့် အသုံးဝင်သောကိရိယာများ

ဒီသင်ခန်းစာမှာ ပရိုဂရမ်မင်းဘာသာစကားများ၏ အခြေခံအချက်များကို လေ့လာပါမည်။ ဒီမှာဖော်ပြထားတဲ့အကြောင်းအရာများဟာ ယနေ့ခေတ်ပရိုဂရမ်မင်းဘာသာစကားများအများစုအတွက် သက်ဆိုင်ပါတယ်။ "အသုံးဝင်သောကိရိယာများ" အပိုင်းမှာတော့ ပရိုဂရမ်မာတစ်ဦးအနေနဲ့ အသုံးဝင်မယ့် ဆော့ဖ်ဝဲလ်များကို လေ့လာနိုင်ပါမည်။

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.my.png)  
> [Tomomi Imura](https://twitter.com/girlie_mac) ရဲ့ Sketchnote

## သင်ခန်းစာမတိုင်မီ စမ်းမေးခွန်း
[Pre-lecture quiz](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## နိဒါန်း

ဒီသင်ခန်းစာမှာ ကျွန်ုပ်တို့ လေ့လာမည့်အကြောင်းအရာများမှာ -

- ပရိုဂရမ်မင်းဆိုတာဘာလဲ?
- ပရိုဂရမ်မင်းဘာသာစကားအမျိုးအစားများ
- ပရိုဂရမ်တစ်ခု၏ အခြေခံအချက်များ
- ပရိုဂရမ်မာအတွက် အသုံးဝင်သော ဆော့ဖ်ဝဲလ်နှင့် ကိရိယာများ

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) မှာလည်း လေ့လာနိုင်ပါတယ်။

## ပရိုဂရမ်မင်းဆိုတာဘာလဲ?

ပရိုဂရမ်မင်း (coding) ဆိုတာက ကွန်ပျူတာ သို့မဟုတ် မိုဘိုင်းစက်ကိရိယာလိုမျိုးသော စက်ပစ္စည်းတစ်ခုအတွက် အညွှန်းများရေးသားခြင်းဖြစ်ပါတယ်။ ဒီအညွှန်းတွေကို ပရိုဂရမ်မင်းဘာသာစကားတစ်ခုနဲ့ရေးပြီး စက်ကိရိယာက အဓိပ္ပါယ်ဖွင့်ဆိုပေးပါတယ်။ ဒီအညွှန်းစုများကို *program*, *computer program*, *application (app)*, *executable* စတဲ့အမည်များနဲ့ ခေါ်ဆိုနိုင်ပါတယ်။

*Program* ဆိုတာက ကုဒ်နဲ့ရေးထားတဲ့ အရာတစ်ခုဖြစ်ပါတယ်။ ဥပမာ - ဝဘ်ဆိုဒ်များ၊ ဂိမ်းများ၊ ဖုန်းအက်ပ်များစသည်ဖြစ်ပါတယ်။ ကုဒ်မရေးဘဲနဲ့လည်း ပရိုဂရမ်တစ်ခုဖန်တီးနိုင်ပေမယ့် အခြေခံလောဂျစ်ကို စက်ကိရိယာက ဖွင့်ဆိုပေးရပြီး အဲ့ဒီလောဂျစ်ကို ကုဒ်နဲ့ရေးထားတာဖြစ်ပါတယ်။ *Running* သို့မဟုတ် *executing* လုပ်နေတဲ့ ပရိုဂရမ်တစ်ခုဟာ အညွှန်းတွေကို လုပ်ဆောင်နေပါတယ်။ သင်ဒီသင်ခန်းစာကို ဖတ်နေတဲ့ စက်ကိရိယာကလည်း ဒီစာကို မျက်နှာပြင်ပေါ်မှာ ပြပေးဖို့ ပရိုဂရမ်တစ်ခုကို လည်ပတ်နေပါတယ်။

✅ သုတေသနလုပ်ပါ: ကမ္ဘာ့ပထမဆုံး ကွန်ပျူတာပရိုဂရမ်မာအဖြစ် သတ်မှတ်ခံရသူက ဘယ်သူလဲ?

## ပရိုဂရမ်မင်းဘာသာစကားများ

ပရိုဂရမ်မင်းဘာသာစကားတွေက စက်ကိရိယာအတွက် အညွှန်းရေးဖို့ ပရိုဂရမ်မာတွေကို အခွင့်အလမ်းပေးပါတယ်။ စက်ကိရိယာတွေဟာ binary (1s နှင့် 0s) ကိုသာ နားလည်နိုင်ပြီး အများစုသော ပရိုဂရမ်မာတွေအတွက် အဲ့ဒီနည်းနဲ့ ဆက်သွယ်ဖို့ အလွန်မထိရောက်ပါဘူး။ ပရိုဂရမ်မင်းဘာသာစကားတွေက လူနဲ့ ကွန်ပျူတာကြား ဆက်သွယ်ရေးအတွက် အထောက်အကူပေးတဲ့ ကိရိယာဖြစ်ပါတယ်။

ပရိုဂရမ်မင်းဘာသာစကားတွေဟာ အမျိုးအစားအမျိုးမျိုးရှိပြီး ရည်ရွယ်ချက်အမျိုးမျိုးအတွက် အသုံးပြုနိုင်ပါတယ်။ ဥပမာ - JavaScript ကို ဝဘ်အက်ပ်များအတွက် အဓိကအသုံးပြုပြီး Bash ကို အဓိကအားဖြင့် အစီအစဉ်စနစ်များအတွက် အသုံးပြုပါတယ်။

*Low level languages* တွေဟာ စက်ကိရိယာအတွက် အညွှန်းဖွင့်ဆိုဖို့ အဆင့်နည်းနည်းသာ လိုအပ်ပါတယ်။ ဒါပေမယ့် *high level languages* တွေဟာ ဖတ်ရလွယ်ကူပြီး အထောက်အပံ့များတဲ့အတွက် လူကြိုက်များပါတယ်။ JavaScript ကို high level language အဖြစ် သတ်မှတ်နိုင်ပါတယ်။

အောက်ပါကုဒ်က JavaScript နဲ့ ARM assembly code တို့ကို အသုံးပြုပြီး high level language နဲ့ low level language တို့ရဲ့ ကွာခြားချက်ကို ဖော်ပြထားပါတယ်။

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

ယုံကြည်ပါ - *တစ်ခုတည်းသောအရာကို လုပ်ဆောင်နေပါတယ်*: Fibonacci sequence ကို 10 အထိ ပုံနှိပ်ပြနေပါတယ်။

✅ Fibonacci sequence ဆိုတာ [အဓိပ္ပါယ်ဖော်ပြထားတဲ့အတိုင်း](https://en.wikipedia.org/wiki/Fibonacci_number) နံပါတ်နှစ်ခုရဲ့ စုစုပေါင်းဖြစ်ပြီး 0 နဲ့ 1 ကနေ စတင်ပါတယ်။ ပထမဆုံး 10 ခုက 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ဖြစ်ပါတယ်။

## ပရိုဂရမ်တစ်ခု၏ အခြေခံအချက်များ

ပရိုဂရမ်တစ်ခုအတွင်း အညွှန်းတစ်ခုကို *statement* လို့ခေါ်ပြီး အညွှန်းတစ်ခုပြီးဆုံးတဲ့နေရာကို သတ်မှတ်ထားတဲ့ စာလုံး သို့မဟုတ် လိုင်းအကွာအဝေးရှိပါတယ်။ အညွှန်းတစ်ခုပြီးဆုံးပုံဟာ ဘာသာစကားတစ်ခုစီအလိုက် ကွဲပြားပါတယ်။

ပရိုဂရမ်အတွင်းရှိ အညွှန်းတွေဟာ အသုံးပြုသူ သို့မဟုတ် အခြားနေရာက ရရှိတဲ့ ဒေတာကို အခြေခံပြီး လုပ်ဆောင်နိုင်ပါတယ်။ ဒေတာဟာ ပရိုဂရမ်ရဲ့ အပြုအမူကို ပြောင်းလဲနိုင်တဲ့အတွက် ဒေတာကို ယာယီသိမ်းဆည်းဖို့ နည်းလမ်းတစ်ခုကို ပရိုဂရမ်မင်းဘာသာစကားတွေမှာ ပါဝင်ပါတယ်။ ဒါတွေကို *variables* လို့ခေါ်ပါတယ်။ Variables တွေဟာ ဒေတာကို စက်ရဲ့ မှတ်ဉာဏ်ထဲမှာ သိမ်းဆည်းဖို့ အညွှန်းပေးတဲ့ statement တွေဖြစ်ပါတယ်။ Variables တွေဟာ အလျားလိုက်သင်္ချာမှာရှိတဲ့ variables တွေနဲ့ ဆင်တူပြီး အမည်တစ်ခုရှိပြီး တန်ဖိုးက အချိန်အလိုက် ပြောင်းလဲနိုင်ပါတယ်။

တစ်ချို့သော အညွှန်းတွေဟာ စက်ကိရိယာက လုပ်ဆောင်မည်မဟုတ်ပါဘူး။ ဒါဟာ ပရိုဂရမ်မာရဲ့ ရည်ရွယ်ချက်အတိုင်း ဖြစ်နိုင်သလို မမျှော်လင့်ထားတဲ့ အမှားတစ်ခုကြောင့် ဖြစ်နိုင်ပါတယ်။ ဒီလို application ကို ထိန်းချုပ်နိုင်ခြင်းက ပိုမိုခိုင်မာပြီး ပြုပြင်ထိန်းသိမ်းရလွယ်ကူစေပါတယ်။ အများအားဖြင့် ဒီလိုထိန်းချုပ်မှုတွေဟာ အခြေအနေတစ်ခုဖြစ်ပေါ်တဲ့အခါမှာ ဖြစ်ပါတယ်။ ယနေ့ခေတ်ပရိုဂရမ်မင်းမှာ အများဆုံးအသုံးပြုတဲ့ ထိန်းချုပ်မှုအညွှန်းတစ်ခုက `if..else` statement ဖြစ်ပါတယ်။

✅ ဒီလိုအညွှန်းအမျိုးအစားကို နောက်ထပ်သင်ခန်းစာတွေမှာ ပိုမိုလေ့လာနိုင်ပါမည်။

## အသုံးဝင်သောကိရိယာများ

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 အထက်ပါပုံကို နှိပ်ပြီး tooling အကြောင်း ဗီဒီယိုကြည့်ပါ

ဒီအပိုင်းမှာ သင့်ရဲ့ ပရိုဂရမ်မာဘဝကို စတင်ရာမှာ အထောက်အကူဖြစ်မယ့် ဆော့ဖ်ဝဲလ်တစ်ချို့ကို လေ့လာနိုင်ပါမည်။

**Development environment** ဆိုတာက ပရိုဂရမ်မာတစ်ဦးအနေနဲ့ ဆော့ဖ်ဝဲရေးသားရာမှာ မကြာခဏအသုံးပြုတဲ့ ကိရိယာများနဲ့ လုပ်ဆောင်ချက်များရဲ့ အထူးပတ်ဝန်းကျင်တစ်ခုဖြစ်ပါတယ်။ ဒီကိရိယာတစ်ချို့ဟာ ပရိုဂရမ်မာရဲ့ လိုအပ်ချက်အလိုက် ပြင်ဆင်ထားပြီး အချိန်အလိုက် ပြောင်းလဲနိုင်ပါတယ်။ Development environment တွေဟာ အသုံးပြုသူတစ်ဦးစီအလိုက် ထူးခြားပါတယ်။

### Editors

ဆော့ဖ်ဝဲရေးသားရာမှာ အရေးကြီးဆုံးကိရိယာတစ်ခုက editor ဖြစ်ပါတယ်။ Editors တွေဟာ သင့်ရဲ့ကုဒ်ကိုရေးရာမှာ အသုံးပြုတဲ့နေရာဖြစ်ပြီး တစ်ခါတစ်လေ သင့်ကုဒ်ကို အလုပ်လုပ်စေရာမှာလည်း အသုံးပြုနိုင်ပါတယ်။

Developers တွေဟာ editors တွေကို အောက်ပါအကြောင်းအရာများအတွက် အားထားကြပါတယ် -

- *Debugging* က ကုဒ်ထဲမှာ bug တွေကို ရှာဖွေပြီး လိုင်းတစ်လိုင်းစီကို စစ်ဆေးနိုင်စေပါတယ်။ တစ်ချို့သော editors တွေမှာ debugging လုပ်ဆောင်ချက်ပါဝင်ပြီး အထူးပြုဘာသာစကားအတွက် ပြင်ဆင်နိုင်ပါတယ်။
- *Syntax highlighting* က ကုဒ်ကို ဖတ်ရလွယ်ကူစေဖို့ အရောင်နဲ့ စာသားဖော်ပြမှုကို ထည့်သွင်းပေးပါတယ်။ Editors များအများစုမှာ syntax highlighting ကို ပြင်ဆင်နိုင်ပါတယ်။
- *Extensions and Integrations* တွေက ပရိုဂရမ်မာတွေအတွက် အထူးပြုကိရိယာတွေဖြစ်ပြီး base editor ထဲမှာ မပါဝင်တဲ့အရာတွေဖြစ်ပါတယ်။ ဥပမာ - ပရိုဂရမ်မာတစ်ဦးဟာ သူ့ကုဒ်ကို ရှင်းပြဖို့ documentation ရေးတတ်ကြပါတယ်။ သူတို့ဟာ spell check extension တစ်ခုကို ထည့်သွင်းပြီး documentation ထဲမှာ စာလုံးပေါင်းအမှားတွေကို ရှာဖွေတတ်ကြပါတယ်။ Extensions များအများစုဟာ အထူးပြု editor တစ်ခုအတွက် ရည်ရွယ်ထားပြီး editor များအများစုမှာ ရနိုင်တဲ့ extensions တွေကို ရှာဖွေရန် နည်းလမ်းပါဝင်ပါတယ်။
- *Customization* က ပရိုဂရမ်မာတစ်ဦးရဲ့ လိုအပ်ချက်အလိုက် ထူးခြားတဲ့ development environment တစ်ခုကို ဖန်တီးနိုင်စေပါတယ်။ Editors များအများစုဟာ အလွန်ပြင်ဆင်နိုင်ပြီး ပရိုဂရမ်မာတွေကို သူတို့ရဲ့ custom extensions တွေ ဖန်တီးနိုင်စေပါတယ်။

#### လူကြိုက်များတဲ့ Editors နဲ့ Web Development Extensions

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)  
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)  
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
- [Atom](https://atom.io/)  
  - [spell-check](https://atom.io/packages/spell-check)  
  - [teletype](https://atom.io/packages/teletype)  
  - [atom-beautify](https://atom.io/packages/atom-beautify)  
- [Sublimetext](https://www.sublimetext.com/)  
  - [emmet](https://emmet.io/)  
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)  

### Browsers

အရေးကြီးတဲ့ကိရိယာတစ်ခုက browser ဖြစ်ပါတယ်။ Web developers တွေဟာ သူတို့ရဲ့ကုဒ်ကို ဝဘ်ပေါ်မှာ အလုပ်လုပ်ပုံကို ကြည့်ဖို့ browser ကို အားထားကြပါတယ်။ HTML လိုမျိုး editor ထဲမှာရေးထားတဲ့ visual elements တွေကို ပြသဖို့လည်း browser ကို အသုံးပြုကြပါတယ်။

Browser များအများစုမှာ *developer tools* (DevTools) ပါဝင်ပြီး application အကြောင်း အရေးကြီးသော အချက်အလက်တွေကို စုဆောင်းဖို့ အထောက်အကူပေးတဲ့ လုပ်ဆောင်ချက်တွေ ပါဝင်ပါတယ်။ ဥပမာ - ဝဘ်စာမျက်နှာတစ်ခုမှာ အမှားတွေရှိရင် အဲ့ဒီအမှားတွေ ဖြစ်ပေါ်တဲ့အချိန်ကို သိဖို့ sometimes DevTools ကို အသုံးပြုနိုင်ပါတယ်။

#### လူကြိုက်များတဲ့ Browsers နဲ့ DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)  
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)  
- [Firefox](https://developer.mozilla.org/docs/Tools)  

### Command Line Tools

တစ်ချို့သော developers တွေဟာ နေ့စဉ်လုပ်ငန်းစဉ်တွေကို ပုံမှန် graphical view မဟုတ်တဲ့ command line ကို အားထားကြပါတယ်။ ကုဒ်ရေးရာမှာ အများကြီးရိုက်ရတာကြောင့် တစ်ချို့သော developers တွေဟာ ကီးဘုတ်ပေါ်မှာ အလုပ်လုပ်နေတဲ့ flow ကို မဖြတ်ချင်ကြပါဘူး။ သူတို့ဟာ desktop windows တွေကို ပြောင်းဖို့၊ ဖိုင်အမျိုးမျိုးကို အလုပ်လုပ်ဖို့၊ ကိရိယာတွေကို အသုံးပြုဖို့ keyboard shortcuts တွေကို အသုံးပြုကြပါတယ်။ Command line ကို အသုံးပြုရတဲ့ အကျိုးကျေးဇူးတစ်ခုက command line tools တွေကို အသုံးပြုပြီး mouse နဲ့ keyboard ကြား ပြောင်းဖို့ မလိုအပ်ဘဲ အများကြီးလုပ်ဆောင်နိုင်ပါတယ်။ Command line ဟာ ပြင်ဆင်နိုင်ပြီး သင့်ရဲ့ configuration ကို သိမ်းဆည်းထားနိုင်သလို နောက်ပိုင်း ပြောင်းလဲနိုင်ပြီး အခြား development machines တွေမှာ ပြန်တင်နိုင်ပါတယ်။ Development environment တွေဟာ ပရိုဂရမ်မာတစ်ဦးစီအလိုက် ထူးခြားတဲ့အတွက် တစ်ချို့က command line ကို မသုံးကြပါဘူး၊ တစ်ချို့က အပြည့်အဝအားထားကြပြီး တစ်ချို့က နှစ်မျိုးလုံးကို ရောစပ်အသုံးပြုကြပါတယ်။

### လူကြိုက်များတဲ့ Command Line Options

Command line options တွေဟာ သင့်ရဲ့ operating system အလိုက် ကွဲပြားပါတယ်။

*💻 = operating system မှာ အလိုအလျောက်ပါဝင်ပြီးသား*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻  
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (CMD လို့လည်း သိကြပါတယ်) 💻  
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)  
- [mintty](https://mintty.github.io/)  

#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻  
- [iTerm](https://iterm2.com/)  
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှု ဝန်ဆောင်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုမှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။