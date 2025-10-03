<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T11:03:24+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "my"
}
-->
# Programming ဘာသာစကားများနှင့် Developer Tools များ

ဒီသင်ခန်းစာမှာ Programming ဘာသာစကားများ၏ အခြေခံကို လေ့လာပါမည်။ ဒီမှာဖော်ပြထားတဲ့အကြောင်းအရာများသည် ယနေ့ခေတ်၏ အများစုသော Programming ဘာသာစကားများတွင် သက်ဆိုင်ပါသည်။ 'Tools of the Trade' အပိုင်းတွင် Developer အဖြစ် အကျိုးရှိသော Software များကို လေ့လာနိုင်ပါမည်။

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## သင်ခန်းစာမတိုင်မီ Quiz
[Pre-lecture quiz](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## အကျဉ်းချုပ်

ဒီသင်ခန်းစာမှာ ကျွန်ုပ်တို့ လေ့လာမည့်အကြောင်းအရာများမှာ -

- Programming ဆိုတာဘာလဲ?
- Programming ဘာသာစကားများ၏ အမျိုးအစားများ
- Program တစ်ခု၏ အခြေခံအစိတ်အပိုင်းများ
- Professional Developer အတွက် အသုံးဝင်သော Software နှင့် Tools များ

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) တွင် လေ့လာနိုင်ပါသည်။

## Programming ဆိုတာဘာလဲ?

Programming (Coding ဟုလည်းခေါ်သည်) ဆိုသည်မှာ Computer သို့မဟုတ် Mobile Device ကဲ့သို့သော Device တစ်ခုအတွက် အညွှန်းများရေးသားခြင်းဖြစ်သည်။ ကျွန်ုပ်တို့သည် ဒီအညွှန်းများကို Programming ဘာသာစကားဖြင့်ရေးသားပြီး Device မှ အဓိပ္ပါယ်ဖွင့်ဆိုသည်။ ဒီအညွှန်းများကို *program*, *computer program*, *application (app)*, နှင့် *executable* ကဲ့သို့သော နာမည်များဖြင့် ခေါ်ဆိုနိုင်သည်။

*Program* ဆိုသည်မှာ Code ဖြင့်ရေးသားထားသော အရာတစ်ခုဖြစ်သည်။ Website, Game, နှင့် Phone App များသည် Program များဖြစ်သည်။ Code မရေးသားဘဲ Program တစ်ခုကို ဖန်တီးနိုင်သော်လည်း Device မှ အဓိပ္ပါယ်ဖွင့်ဆိုသော Logic သည် Code ဖြင့်ရေးသားထားခြင်းဖြစ်သည်။ Code ကို *run* သို့မဟုတ် *execute* လုပ်နေသော Program သည် အညွှန်းများကို လုပ်ဆောင်နေသည်။ သင်ဒီသင်ခန်းစာကို ဖတ်ရှုနေသော Device သည် Program တစ်ခုကို run လုပ်ပြီး သင်၏ Screen တွင် ပြသနေသည်။

✅ သုတေသနလုပ်ပါ: ကမ္ဘာ့ပထမဆုံး Computer Programmer ဟု သတ်မှတ်ခံရသူသည် ဘယ်သူလဲ?

## Programming ဘာသာစကားများ

Programming ဘာသာစကားများသည် Developer များကို Device အတွက် အညွှန်းများရေးသားရန် ခွင့်ပြုသည်။ Device များသည် Binary (1s နှင့် 0s) ကိုသာ နားလည်နိုင်ပြီး Developer အများစုအတွက် Binary သည် ထိရောက်သော ဆက်သွယ်မှုမဟုတ်ပါ။ Programming ဘာသာစကားများသည် လူနှင့် Computer အကြား ဆက်သွယ်မှုအတွက် အထောက်အကူပြုသော ကိရိယာများဖြစ်သည်။

Programming ဘာသာစကားများသည် အမျိုးအစားများစွာရှိပြီး ရည်ရွယ်ချက်များကွဲပြားနိုင်သည်။ ဥပမာအားဖြင့် JavaScript သည် Web Application များအတွက် အသုံးပြုသည်၊ Bash သည် Operating System များအတွက် အသုံးပြုသည်။

*Low level languages* သည် Device အတွက် အညွှန်းများကို အဓိပ္ပါယ်ဖွင့်ဆိုရန် *high level languages* ထက် အဆင့်များနည်းပါသည်။ သို့သော် High level languages များသည် ရိုးရှင်းသော Syntax နှင့် Support များကြောင့် လူကြိုက်များသည်။ JavaScript သည် High level language အဖြစ် သတ်မှတ်ထားသည်။

အောက်ပါ Code သည် JavaScript (High level language) နှင့် ARM assembly code (Low level language) တို့၏ ကွာခြားချက်ကို ဖော်ပြသည်။

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

ယုံကြည်ပါ: *နှစ်ခုလုံးသည် တူညီသောအရာကို လုပ်ဆောင်နေသည်*: Fibonacci sequence ကို 10 အထိ print လုပ်နေသည်။

✅ Fibonacci sequence သည် [အဓိပ္ပါယ်ဖော်ပြထားသည်](https://en.wikipedia.org/wiki/Fibonacci_number) - 0 နှင့် 1 မှ စတင်ပြီး နောက်ထပ် နံပါတ်တစ်ခုသည် အရင်နံပါတ်နှစ်ခု၏ စုပေါင်းဖြစ်သည်။ ပထမဆုံး 10 ခုသော Fibonacci sequence နံပါတ်များမှာ 0, 1, 1, 2, 3, 5, 8, 13, 21 နှင့် 34 ဖြစ်သည်။

## Program တစ်ခု၏ အစိတ်အပိုင်းများ

Program တစ်ခု၏ အညွှန်းတစ်ခုကို *statement* ဟုခေါ်သည်။ Statement တစ်ခုသည် အညွှန်း၏ အဆုံးကို သတ်မှတ်သော Character သို့မဟုတ် Line Spacing ပါရှိသည်။ Program တစ်ခု၏ အဆုံးသတ်ပုံသည် ဘာသာစကားအလိုက် ကွဲပြားနိုင်သည်။

Program တစ်ခု၏ Statement များသည် User သို့မဟုတ် အခြားနေရာမှ ရရှိသော Data ကို အခြေခံပြီး အညွှန်းများကို လုပ်ဆောင်နိုင်သည်။ Data သည် Program ၏ လုပ်ဆောင်ပုံကို ပြောင်းလဲနိုင်သောကြောင့် Programming ဘာသာစကားများတွင် Data ကို ယာယီသိမ်းဆည်းရန် *variables* ဟုခေါ်သော Statement များပါရှိသည်။ Variables သည် Device ကို Data ကို Memory တွင် သိမ်းဆည်းရန် အညွှန်းပေးသည်။ Variables သည် Algebra တွင်ရှိသော Variables ကဲ့သို့ အမည်တစ်ခုရှိပြီး အချိန်အလိုက် Value ပြောင်းလဲနိုင်သည်။

Program တစ်ခု၏ Statement များအနက် တစ်ချို့သည် Device မှ လုပ်ဆောင်မည်မဟုတ်ပါ။ Developer မှ ရည်ရွယ်၍ ရေးသားထားခြင်း သို့မဟုတ် Error များကြောင့် ဖြစ်နိုင်သည်။ Program တစ်ခု၏ Control ကို ပြောင်းလဲနိုင်ခြင်းသည် Program ကို ပိုမိုခိုင်ခံ့စေပြီး Maintain လုပ်ရန် လွယ်ကူစေသည်။ Control ပြောင်းလဲမှုများသည် အခြေအနေတစ်ခုခုဖြစ်ပေါ်သောအခါ ဖြစ်ပေါ်သည်။ Modern Programming တွင် Program ကို Control လုပ်ရန် အသုံးပြုသော Statement တစ်ခုမှာ `if..else` statement ဖြစ်သည်။

✅ ဒီ Statement အကြောင်းကို နောက်ထပ် သင်ခန်းစာများတွင် ပိုမိုလေ့လာနိုင်ပါမည်။

## Tools of the Trade

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 အထက်ပါပုံကို Click လုပ်ပြီး Tooling အကြောင်း Video ကို ကြည့်ပါ

ဒီအပိုင်းတွင် Professional Developer အဖြစ် စတင်လေ့လာနေစဉ် အသုံးဝင်သော Software များအကြောင်းကို လေ့လာနိုင်ပါမည်။

**Development Environment** ဆိုသည်မှာ Developer များသည် Software ရေးသားစဉ် အမြဲအသုံးပြုသော Tools နှင့် Features များ၏ အထူးပတ်ဝန်းကျင်ဖြစ်သည်။ Tools များသည် Developer ၏ လိုအပ်ချက်အလိုက် Customize လုပ်ထားပြီး Developer ၏ အလုပ်ပုံစံ၊ ကိုယ်ပိုင် Project များ၊ သို့မဟုတ် Programming ဘာသာစကား ပြောင်းလဲမှုအရ အချိန်အလိုက် ပြောင်းလဲနိုင်သည်။ Development Environment များသည် Developer တစ်ဦးချင်းစီအလိုက် ထူးခြားမှုရှိသည်။

### Editors

Software Development အတွက် အရေးကြီးသော Tools တစ်ခုမှာ Editor ဖြစ်သည်။ Editor တွင် Code ကို ရေးသားပြီး တစ်ခါတစ်ရံ Run လုပ်နိုင်သည်။

Developer များသည် Editor များကို အောက်ပါအကြောင်းအရင်းများကြောင့် အားကိုးသည် -

- *Debugging* သည် Bug နှင့် Error များကို ရှာဖွေပြီး Code ကို Line by Line ဖြတ်သွားသည်။ Editor တစ်ချို့တွင် Debugging လုပ်ဆောင်နိုင်သော Features ပါရှိပြီး Programming ဘာသာစကားအလိုက် Customize လုပ်နိုင်သည်။
- *Syntax highlighting* သည် Code ကို ဖတ်ရှုရလွယ်ကူစေရန် အရောင်များနှင့် Text Formatting များ ထည့်သွင်းသည်။ Editor များအများစုတွင် Syntax highlighting ကို Customize လုပ်နိုင်သည်။
- *Extensions and Integrations* သည် Developer များအတွက် အထူး Tools များဖြစ်သည်။ Base Editor တွင် မပါရှိသော Tools များဖြစ်သည်။ ဥပမာအားဖြင့် Developer များသည် Code ကို Documentation ရေးသားရန် Spell Check Extension တစ်ခုကို ထည့်သွင်းနိုင်သည်။
- *Customization* သည် Developer များကို ကိုယ်ပိုင် Development Environment ဖန်တီးရန် ခွင့်ပြုသည်။ Editor များအများစုသည် အလွန် Customize လုပ်နိုင်ပြီး Custom Extensions များ ဖန်တီးရန် ခွင့်ပြုသည်။

#### လူကြိုက်များသော Editors နှင့် Web Development Extensions

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

Web Developer များအတွက် Browser သည် အရေးကြီးသော Tool တစ်ခုဖြစ်သည်။ Web Developer များသည် Browser ကို Web ပေါ်တွင် Code ရေးသားထားသောအတိုင်း Run လုပ်ရန် အသုံးပြုသည်။ HTML ကဲ့သို့သော Visual Elements များကို Browser တွင် ပြသနိုင်သည်။

Browser များအများစုတွင် *Developer Tools* (DevTools) ပါရှိပြီး Application အကြောင်း အရေးကြီးသော အချက်အလက်များကို စုဆောင်းရန် အထောက်အကူပြုသည်။ ဥပမာအားဖြင့် Web Page တစ်ခုတွင် Error ဖြစ်ပေါ်ပါက Error ဖြစ်ပေါ်သောအချိန်ကို DevTools မှ Capture လုပ်နိုင်သည်။

#### လူကြိုက်များသော Browsers နှင့် DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line Tools

Developer တစ်ချို့သည် Graphical View များကို မကြိုက်ဘဲ Command Line ကို အားကိုးသည်။ Code ရေးသားခြင်းသည် Keyboard ကို အများကြီး အသုံးပြုရသောအလုပ်ဖြစ်ပြီး Developer တစ်ချို့သည် Mouse နှင့် Keyboard အကြား အလုပ်လုပ်ပုံကို မနှောင့်ယှက်လိုပါ။ Command Line Tools များကို အသုံးပြုခြင်းသည် Mouse နှင့် Keyboard အကြား အလုပ်လုပ်ပုံကို လျှော့ချနိုင်သည်။ Command Line Tools များသည် Configure လုပ်နိုင်ပြီး Custom Configuration များကို သိမ်းဆည်းထားနိုင်သည်။ Development Environment များသည် Developer တစ်ဦးချင်းစီအလိုက် ထူးခြားမှုရှိသောကြောင့် Command Line ကို အားကိုးသူများ၊ အားမကိုးသူများ၊ နှစ်ခုလုံးကို ပေါင်းစပ်အသုံးပြုသူများ ရှိသည်။

### လူကြိုက်များသော Command Line Options

Command Line Options များသည် သင်အသုံးပြုသော Operating System အလိုက် ကွဲပြားနိုင်သည်။

*💻 = Operating System တွင် အလိုအလျောက်ပါရှိသည်။*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (CMD ဟုလည်းခေါ်သည်) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### လူကြိုက်များသော Command Line Tools

- [Git](https://git-scm.com/) (💻 Operating System များအများစုတွင် ပါရှိသည်)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentation

Developer များသည် အသစ်တစ်ခုခုကို လေ့လာလိုသောအခါ Documentation ကို အားကိုးသည်။ Documentation သည် Tools နှင့် ဘာသာစကားများကို သုံးစွဲပုံကို လမ်းညွှန်ပေးပြီး အခြေခံမှ စ၍ နက်ရှိုင်းသော အချက်အလက်များကိုလည်း ပေးနိုင်သည်။

#### လူကြိုက်များသော Web Development Documentation

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), Mozilla မှ ထုတ်ဝေသော [Firefox](https://www.mozilla.org/firefox/) Browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), Google မှ ထုတ်ဝေသော [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge) အတွက်
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ သုတေသနလုပ်ပါ: Web Developer ၏ Environment နှင့် Web Designer ၏ Environment ကို နှိုင်းယှဉ်ကြည့်ပါ။

---

## 🚀 စိန်ခေါ်မှု

Programming ဘာသာစကားများကို နှိုင်းယှဉ်ပါ။ JavaScript နှင့် Java တို့၏ ထူးခြားချက်များက ဘာလဲ? COBOL နှင့် Go တို့ကော?

## သင်ခန်းစာပြီးနောက် Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

Programmer အတွက် ရရှိနိုင်သော ဘာသာစကားများကို လေ့လာပါ။ ဘာသာစကားတစ်ခုတွင် Line တစ်ခုရေးပြီး အခြားဘာသာစကားနှစ်ခုတွင် ပြန်ရေးပါ။ သင်ဘာတွေ သင်ယူရမလဲ?

## အိမ်စာ

[Reading the Docs](assignment.md)

> မှတ်ချက်: သင်၏ အိမ်စာအတွက် Tools ရွေးချယ်စဉ်မှာ အထက်ဖော်ပြထားသော Editors, Browsers, သို့မဟုတ် Command Line Tools များကို မရွေးပါနှင့်။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွဲအချော်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။