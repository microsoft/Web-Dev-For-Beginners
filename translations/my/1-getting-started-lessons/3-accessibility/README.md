<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-27T22:50:36+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "my"
}
-->
# ဝက်ဘ်စာမျက်နှာများကို လွယ်ကူစွာ အသုံးပြုနိုင်အောင် ဖန်တီးခြင်း

![Accessibility အကြောင်းအားလုံး](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.my.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) မှ Sketchnote

## သင်ခန်းစာမတိုင်မီ မေးခွန်း
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> ဝက်ဘ်၏ အားသာချက်မှာ ၎င်း၏ အထွေထွေသုံးနိုင်မှုတွင် ရှိသည်။ မသန်စွမ်းမှုရှိသူများပါဝင်နိုင်မှုသည် အရေးပါသော အချက်တစ်ခုဖြစ်သည်။
>
> \- Sir Timothy Berners-Lee, W3C Director နှင့် World Wide Web ကို တီထွင်သူ

ဤအဆိုသည် ဝက်ဘ်ဆိုက်များကို လွယ်ကူစွာ အသုံးပြုနိုင်အောင် ဖန်တီးရန်၏ အရေးပါမှုကို အလွန်ကောင်းစွာ ဖော်ပြထားသည်။ လူတိုင်း မဝင်ရောက်နိုင်သော အက်ပလီကေးရှင်းသည် အလိုအလျောက် ဖယ်ရှားထားသော အက်ပလီကေးရှင်းဖြစ်သည်။ ဝက်ဘ်ဒီဗယ်လော့ပါများအနေဖြင့် ကျွန်ုပ်တို့သည် အမြဲတမ်း Accessibility ကို စဉ်းစားထားသင့်သည်။ စတင်ချိန်မှစ၍ ဤအချက်ကို အာရုံစိုက်ခြင်းဖြင့် သင်ဖန်တီးသော စာမျက်နှာများကို လူတိုင်း ဝင်ရောက်နိုင်စေရန် အကောင်းဆုံးလမ်းကြောင်းပေါ်ရောက်ရှိနေမည်ဖြစ်သည်။ ဤသင်ခန်းစာတွင် သင်၏ ဝက်ဘ်အရင်းအမြစ်များကို လွယ်ကူစွာ အသုံးပြုနိုင်စေရန် ကူညီနိုင်သော ကိရိယာများနှင့် Accessibility ကို စဉ်းစားပြီး ဖန်တီးနည်းကို သင်ယူမည်ဖြစ်သည်။

> သင်ဤသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon) တွင် လေ့လာနိုင်သည်။

## အသုံးပြုရန် ကိရိယာများ

### Screen readers

လူသိများသော Accessibility ကိရိယာများထဲမှ Screen readers သည် အရေးပါသော ကိရိယာတစ်ခုဖြစ်သည်။

[Screen readers](https://en.wikipedia.org/wiki/Screen_reader) သည် မျက်စိမမြင်သူများအတွက် အသုံးပြုသော client များဖြစ်သည်။ ဘရောက်ဇာမှ သင်မျှဝေလိုသော အချက်အလက်ကို သေချာစွာ ဖော်ပြရန် အချိန်ကုန်သလို Screen reader မှလည်း အချက်အလက်ကို သေချာစွာ ဖော်ပြရန် အချိန်ကုန်ရမည်။

အခြေခံအားဖြင့် Screen reader သည် စာမျက်နှာကို အပေါ်မှ အောက်သို့ အသံထွက်ဖတ်ပေးမည်။ သင်၏ စာမျက်နှာသည် စာသားသာပါရှိပါက reader သည် ဘရောက်ဇာနှင့် ဆင်တူသော ပုံစံဖြင့် အချက်အလက်ကို ဖော်ပြမည်။ သို့သော် ဝက်ဘ်စာမျက်နှာများသည် စာသားသာမပါရှိဘဲ လင့်ခ်များ၊ ဓာတ်ပုံများ၊ အရောင်များနှင့် အခြားသော ရှုထောင့်ဆိုင်ရာ အစိတ်အပိုင်းများပါရှိသည်။ ဤအချက်အလက်များကို Screen reader မှ သေချာစွာ ဖတ်နိုင်စေရန် ဂရုစိုက်ရမည်။

ဝက်ဘ်ဒီဗယ်လော့ပါများသည် Screen reader ကို ရင်းနှီးကျွမ်းဝင်ထားသင့်သည်။ အထက်တွင် ဖော်ပြထားသည့်အတိုင်း ၎င်းသည် သင်၏ အသုံးပြုသူများ အသုံးပြုမည့် client ဖြစ်သည်။ ဘရောက်ဇာ၏ လုပ်ဆောင်ပုံကို သင် ရင်းနှီးကျွမ်းဝင်ထားသည့်အတိုင်း Screen reader ၏ လုပ်ဆောင်ပုံကိုလည်း သင်လေ့လာသင့်သည်။ ကံကောင်းစွာဖြင့် Screen readers များသည် အများစုသော Operating systems တွင် built-in ဖြစ်သည်။

ဘရောက်ဇာတချို့တွင်လည်း built-in ကိရိယာများနှင့် extension များပါရှိပြီး စာသားကို အသံထွက်ဖတ်ပေးခြင်း သို့မဟုတ် အခြေခံ navigation လုပ်ဆောင်ချက်များကို ပေးနိုင်သည်။ ဥပမာအားဖြင့် [Edge browser tools](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features) များသည် Accessibility အတွက် အရေးပါသော ကိရိယာများဖြစ်သော်လည်း Screen reader စမ်းသပ်မှုကိရိယာများနှင့် မရောထွေးသင့်ပါ။

✅ Screen reader နှင့် browser text reader ကို စမ်းသပ်ပါ။ Windows တွင် [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) သည် default အနေဖြင့် ပါရှိပြီး [JAWS](https://webaim.org/articles/jaws/) နှင့် [NVDA](https://www.nvaccess.org/about-nvda/) ကိုလည်း ထည့်သွင်းနိုင်သည်။ macOS နှင့် iOS တွင် [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) သည် default အနေဖြင့် ပါရှိသည်။

### Zoom

မျက်စိမမြင်သူများအတွက် အသုံးပြုသော အခြားသော ကိရိယာတစ်ခုမှာ Zooming ဖြစ်သည်။ 

အခြေခံ Zooming သည် `Control + plus sign (+)` သို့မဟုတ် Screen resolution ကို လျှော့ချခြင်းဖြင့် စီမံနိုင်သည်။ ဤ Zooming ပုံစံသည် စာမျက်နှာတစ်ခုလုံးကို ပြောင်းလဲစေသောကြောင့် [Responsive design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) ကို အသုံးပြုခြင်းသည် Zooming အဆင့်မြင့်များတွင် အသုံးပြုသူအတွေ့အကြုံကောင်းစေရန် အရေးပါသည်။

အခြားသော Zooming ပုံစံသည် အထူး software ကို အသုံးပြု၍ Screen ၏ တစ်စိတ်တစ်ပိုင်းကို ကြီးမြင့်စေပြီး Pan လုပ်ခြင်းဖြစ်သည်။ Windows တွင် [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) သည် built-in ဖြစ်ပြီး [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) သည် အခြားသော third-party magnification software ဖြစ်သည်။ macOS နှင့် iOS တွင် [Zoom](https://www.apple.com/accessibility/mac/vision/) သည် built-in ဖြစ်သည်။

### Contrast checkers

ဝက်ဘ်ဆိုက်များတွင် အသုံးပြုသော အရောင်များကို အရောင်မမြင်နိုင်သူများ သို့မဟုတ် အနည်းဆုံး contrast အရောင်များကို မြင်ရခက်သူများအတွက် သေချာစွာ ရွေးချယ်ရမည်။

✅ သင်နှစ်သက်သော ဝက်ဘ်ဆိုက်တစ်ခုကို browser extension တစ်ခုဖြစ်သော [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon) ဖြင့် စမ်းသပ်ပါ။ သင်ဘာတွေ သင်ယူရမလဲ?

### Lighthouse

သင်၏ ဘရောက်ဇာ၏ developer tool area တွင် Lighthouse tool ကို ရှာနိုင်သည်။ ဤ tool သည် ဝက်ဘ်ဆိုက်၏ Accessibility (အခြားသော analysis များနှင့်အတူ) ကို ပထမဆုံးအမြင်ရရန် အရေးပါသည်။ Lighthouse ကို အပြည့်အဝ အားထားသင့်မည်မဟုတ်သော်လည်း 100% score သည် အခြေခံအနေဖြင့် အထောက်အကူဖြစ်စေသည်။

✅ သင်၏ ဘရောက်ဇာ၏ developer tool panel တွင် Lighthouse ကို ရှာပြီး site တစ်ခုကို analysis လုပ်ပါ။ သင်ဘာတွေ ရှာဖွေတွေ့ရှိရမလဲ?

## Accessibility အတွက် ဒီဇိုင်းဆွဲခြင်း

Accessibility သည် အကြီးမားသော ခေါင်းစဉ်တစ်ခုဖြစ်သည်။ သင်ကို ကူညီရန် အရင်းအမြစ်များစွာ ရရှိနိုင်သည်။

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

ကျွန်ုပ်တို့သည် ဝက်ဘ်ဆိုက်များကို လွယ်ကူစွာ အသုံးပြုနိုင်အောင် ဖန်တီးခြင်း၏ အချက်အားလုံးကို မဖော်ပြနိုင်သော်လည်း အောက်တွင် သင် အကောင်အထည်ဖော်လိုသော အဓိကအချက်များကို ဖော်ပြထားသည်။ စတင်ချိန်မှ စာမျက်နှာကို Accessibility အတွက် ဒီဇိုင်းဆွဲခြင်းသည် ရှိပြီးသား စာမျက်နှာကို ပြန်လည်ပြင်ဆင်ခြင်းထက် **အမြဲတမ်း** လွယ်ကူသည်။

## ကောင်းမွန်သော Display အခြေခံသဘောတရားများ

### Color safe palettes

လူများသည် ကမ္ဘာကို မတူညီသောနည်းလမ်းများဖြင့် မြင်ကြသည်။ ၎င်းတွင် အရောင်များပါဝင်သည်။ သင်၏ site အတွက် အရောင်စနစ်ကို ရွေးချယ်သောအခါ ၎င်းသည် လူတိုင်းအတွက် အသုံးပြုနိုင်စေရန် သေချာစွာ ရွေးချယ်ရမည်။ [Color Safe](http://colorsafe.co/) သည် အရောင် palettes များကို ဖန်တီးရန် ကောင်းမွန်သော tool တစ်ခုဖြစ်သည်။

✅ အရောင်အသုံးပြုမှုအတွက် အလွန်ပြဿနာများစွာရှိသော ဝက်ဘ်ဆိုက်တစ်ခုကို ရှာဖွေပါ။ အဘယ်ကြောင့်?

### မှန်ကန်သော HTML ကို အသုံးပြုပါ

CSS နှင့် JavaScript ကို အသုံးပြု၍ element မည်သည့်အမျိုးအစားကိုမဆို control အမျိုးအစားတစ်ခုလို ပြောင်းလဲနိုင်သည်။ `<span>` ကို `<button>` ဖန်တီးရန် အသုံးပြုနိုင်ပြီး `<b>` ကို hyperlink ဖြစ်စေရန် အသုံးပြုနိုင်သည်။ ဤနည်းလမ်းသည် style လုပ်ရန် လွယ်ကူသည်ဟု ယူဆနိုင်သော်လည်း Screen reader အတွက် ဘာမှ မဖော်ပြနိုင်ပါ။ စာမျက်နှာတွင် control များ ဖန်တီးသောအခါ သင့် HTML ကို မှန်ကန်စွာ အသုံးပြုပါ။ hyperlink တစ်ခုလိုလိုချင်ပါက `<a>` ကို အသုံးပြုပါ။ HTML ကို မှန်ကန်စွာ အသုံးပြုခြင်းကို Semantic HTML ကို အသုံးပြုခြင်းဟု ခေါ်သည်။

✅ ဝက်ဘ်ဆိုက်တစ်ခုသို့ သွားပြီး designer များနှင့် developer များသည် HTML ကို မှန်ကန်စွာ အသုံးပြုထားမထား စစ်ဆေးပါ။ သင့် browser တွင် 'View Page Source' ကို ရွေးချယ်ပြီး underlying code ကို ကြည့်ပါ။

### Heading hierarchy ကို ဖော်ပြရန် ဖော်ပြချက်ကောင်းများ ဖန်တီးပါ

Screen reader အသုံးပြုသူများသည် [heading များကို အလွန်အရေးပါသော](https://webaim.org/projects/screenreadersurvey8/#finding) အချက်အလက်များ ရှာဖွေရန်နှင့် စာမျက်နှာတစ်ခုလုံးကို navigation လုပ်ရန် အားကိုးကြသည်။ heading content ကို ဖော်ပြချက်ကောင်းများရေးသားခြင်းနှင့် semantic heading tags များကို အသုံးပြုခြင်းသည် Screen reader အသုံးပြုသူများအတွက် လွယ်ကူစွာ navigation လုပ်နိုင်သော site တစ်ခု ဖန်တီးရန် အရေးပါသည်။

### Visual clues ကောင်းများကို အသုံးပြုပါ

CSS သည် စာမျက်နှာပေါ်ရှိ element မည်သည့်အမျိုးအစားကိုမဆို ၎င်း၏ ရုပ်ပုံကို အပြည့်အဝ ထိန်းချုပ်နိုင်သည်။ သင် outline မပါသော text box များ သို့မဟုတ် underline မပါသော hyperlink များ ဖန်တီးနိုင်သည်။ သို့သော် ဤ clues များကို ဖယ်ရှားခြင်းသည် ၎င်းတို့ကို အားကိုးရသောသူများအတွက် control အမျိုးအစားကို မှတ်မိရန် ပိုမိုခက်ခဲစေသည်။

## Link text ၏ အရေးပါမှု

Hyperlink များသည် ဝက်ဘ်ကို navigation လုပ်ရန် အဓိကဖြစ်သည်။ ထို့ကြောင့် Screen reader သည် link များကို သေချာစွာ ဖတ်နိုင်စေရန် သေချာစွာ ဖန်တီးရမည်။

### Screen readers နှင့် links

Screen reader များသည် link text ကို စာမျက်နှာပေါ်ရှိ အခြားသော စာသားများကို ဖတ်သည့်ပုံစံအတိုင်း ဖတ်သည်။ ဤအခြေအနေကို သင်မျှော်လင့်ထားသည့်အတိုင်း အောက်တွင် ဖော်ပြထားသော text သည် လုံးဝလက်ခံနိုင်သည်ဟု ခံစားရနိုင်သည်။

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. [Click here](https://en.wikipedia.org/wiki/Little_penguin) for more information.

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. Visit https://en.wikipedia.org/wiki/Little_penguin for more information.

> **NOTE** သင်ဖတ်မည့်အတိုင်း သင် **ဘယ်တော့မှ** အထက်ဖော်ပြထားသောပုံစံဖြင့် link မဖန်တီးသင့်ပါ။

Screen reader များသည် browser များနှင့် မတူသော interface ဖြစ်ပြီး feature များကွဲပြားသည်ကို သတိပြုပါ။

### URL ကို အသုံးပြုခြင်း၏ ပြဿနာ

Screen reader များသည် text ကို ဖတ်သည်။ URL တစ်ခု text တွင် ပါရှိပါက Screen reader သည် URL ကို ဖတ်မည်။ အများအားဖြင့် URL သည် အဓိကအချက်အလက်ကို မပေးနိုင်ဘဲ အဆင်မပြေသော အသံထွက်ဖြစ်နိုင်သည်။ သင်၏ ဖုန်းသည် URL ပါရှိသော text message ကို အသံထွက်ဖတ်ပေးသောအခါ ဤအတွေ့အကြုံကို ရရှိဖူးနိုင်သည်။

### "click here" ကို အသုံးပြုခြင်း၏ ပြဿနာ

Screen reader များသည် စာမျက်နှာပေါ်ရှိ hyperlink များကိုသာ ဖတ်နိုင်သည်။ sighted person တစ်ဦးသည် စာမျက်နှာကို link များအတွက် scan လုပ်သည့်ပုံစံအတိုင်းဖြစ်သည်။ link text အားလုံး "click here" ဖြစ်ပါက အသုံးပြုသူသည် "click here, click here, click here, click here, click here, ..." ဟုသာ ကြားရမည်။ link များအားလုံးသည် အတူတူဖြစ်သွားပြီး မည်သည့် link ကိုမဆို ခွဲခြားနိုင်မည်မဟုတ်တော့ပါ။

### Link text ကောင်းများ

Link text ကောင်းများသည် link ၏ အခြားဘက်တွင် ရှိသော အချက်အလက်ကို အတိုချုံးဖော်ပြသည်။ အထက်ဖော်ပြထားသောตัวอย่างတွင် little penguins အကြောင်း Wikipedia စာမျက်နှာကို ဖော်ပြထားသည်။ *little penguins* ဟူသော phrase သည် link text အတွက် အကောင်းဆုံးဖြစ်ပြီး သုံးစွဲသူသည် link ကို click လုပ်ပါက little penguins အကြောင်းကို သင်ယူနိုင်မည်ဟု သေချာစေသည်။

> The [little penguin](https://en.wikipedia.org/wiki/Little_penguin), sometimes known as the fairy penguin, is the smallest penguin in the world.

✅ ဝက်ဘ်ကို မိနစ်အနည်းငယ် surf လုပ်ပြီး obscure linking strategies ကို အသုံးပြုထားသော စာမျက်နှာများကို ရှာပါ။ ၎င်းတို့ကို link ကောင်းများ အသုံးပြုထားသော site များနှင့် နှိုင်းယှဉ်ပါ။ သင်ဘာတွေ သင်ယူရမလဲ?

#### Search engine မှတ်ချက်များ

သင့် site ကို လူတိုင်း အသုံးပြုနိုင်စေရန် သေချာစေရန် သင်လုပ်ဆောင်သောအရာများသည် Search engine များကိုလည်း သင့် site ကို navigation လုပ်ရန် ကူညီမည်ဖြစ်သည်။ Search engine များသည် link text ကို အသုံးပြု၍ စာမျက်နှာများ၏ ခေါင်းစဉ်များကို သင်
အစိုးရများစွာတွင် ဝင်ရောက်နိုင်မှုအပေါ် သက်ဆိုင်ရာ ဥပဒေများရှိသည်။ သင်၏နိုင်ငံ၏ ဝင်ရောက်နိုင်မှုဆိုင်ရာ ဥပဒေများကို လေ့လာပါ။ ဘာတွေကို ဖုံးအုပ်ထားပြီး ဘာတွေကို မဖုံးအုပ်ထားဘူးလဲ။ ဥပမာအားဖြင့် [ဒီအစိုးရဝက်ဘ်ဆိုဒ်](https://accessibility.blog.gov.uk/) ကို ကြည့်ပါ။

## လုပ်ငန်းတာဝန်

[ဝင်ရောက်နိုင်မှုမရှိသော ဝက်ဘ်ဆိုဒ်တစ်ခုကို ခွဲခြမ်းစိတ်ဖြာပါ](assignment.md)

အရင်းအမြစ်: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုလေ့ရှိသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။