<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T09:43:52+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "my"
}
-->
# ဝက်ဘ်ပေ့ဂျ်များကို ဝင်ရောက်နိုင်စေရန် ဖန်တီးခြင်း

![Accessibility အကြောင်းအားလုံး](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## သင်ခန်းစာမတိုင်မီ မေးခွန်းများ
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/)

> ဝက်ဘ်၏ အားသာချက်မှာ ၎င်း၏ အထွေထွေသုံးနိုင်မှုဖြစ်သည်။ မသန်စွမ်းမှုမရှိမရှိ လူတိုင်း ဝင်ရောက်နိုင်စေရန် အရေးကြီးသော အချက်တစ်ခုဖြစ်သည်။
>
> \- Sir Timothy Berners-Lee, W3C Director နှင့် World Wide Web ကို တီထွင်သူ

ဤအဆိုသည် ဝက်ဘ်ဆိုဒ်များကို ဝင်ရောက်နိုင်စေရန် ဖန်တီးခြင်း၏ အရေးကြီးမှုကို အလွန်ကောင်းစွာ ဖော်ပြထားသည်။ လူတိုင်း ဝင်ရောက်နိုင်မည့် အက်ပလီကေးရှင်းမရှိပါက ၎င်းသည် အလိုအလျောက် ဖယ်ရှားထားသော အက်ပလီကေးရှင်းဖြစ်သည်။ ဝက်ဘ်ဒီဗယ်လော့ပါများအနေဖြင့် အမြဲတမ်း ဝင်ရောက်နိုင်မှုကို စဉ်းစားထားသင့်သည်။ အစမှစ၍ ဤအချက်ကို အာရုံစိုက်ထားခြင်းဖြင့် သင်ဖန်တီးသော စာမျက်နှာများကို လူတိုင်း ဝင်ရောက်နိုင်စေရန် အလွန်ကောင်းမွန်သော အခြေခံအဆင့်ကို ရောက်ရှိနိုင်ပါမည်။ ဤသင်ခန်းစာတွင် သင်၏ ဝက်ဘ်အရင်းအမြစ်များကို ဝင်ရောက်နိုင်စေရန် အကူအညီပေးနိုင်သော ကိရိယာများနှင့် ဝင်ရောက်နိုင်မှုကို စဉ်းစားပြီး ဖန်တီးနည်းကို သင်ယူပါမည်။

> ဤသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon) တွင် လေ့လာနိုင်ပါသည်။

## အသုံးပြုရန် ကိရိယာများ

### Screen readers

အများဆုံး သိရှိထားသော ဝင်ရောက်နိုင်မှု ကိရိယာများမှာ screen readers ဖြစ်သည်။

[Screen readers](https://en.wikipedia.org/wiki/Screen_reader) သည် မျက်စိမမြင်သူများအတွက် အသုံးပြုသော client များဖြစ်သည်။ ဘရောက်ဇာမှ သင်မျှဝေလိုသော အချက်အလက်ကို သေချာစွာ ဖော်ပြနိုင်ရန် ကြိုးစားသည့်အတိုင်း screen reader မှလည်း အချက်အလက်ကို သေချာစွာ ဖော်ပြနိုင်ရန် ကြိုးစားရမည်။

အခြေခံအားဖြင့် screen reader သည် စာမျက်နှာကို အပေါ်မှ အောက်သို့ အသံထွက်ဖြင့် ဖတ်ပေးမည်။ သင်၏ စာမျက်နှာသည် စာသားသာပါရှိပါက reader သည် ဘရောက်ဇာနှင့် ဆင်တူသော နည်းလမ်းဖြင့် အချက်အလက်ကို ဖော်ပြမည်။ သို့သော် ဝက်ဘ်စာမျက်နှာများသည် စာသားသာမပါရှိပါ။ ၎င်းတွင် လင့်ခ်များ၊ ဓာတ်ပုံများ၊ အရောင်များနှင့် အခြားသော ရှုထောင့်ဆိုင်ရာ အစိတ်အပိုင်းများ ပါဝင်မည်။ ဤအချက်အလက်များကို screen reader မှ သေချာစွာ ဖတ်နိုင်ရန် ဂရုစိုက်ရမည်။

ဝက်ဘ်ဒီဗယ်လော့ပါများသည် screen reader ကို မိမိကိုယ်တိုင် အသုံးပြု၍ ရင်းနှီးထားသင့်သည်။ အထက်တွင် ဖော်ပြထားသည့်အတိုင်း ၎င်းသည် သင်၏ အသုံးပြုသူများ အသုံးပြုမည့် client ဖြစ်သည်။ ဘရောက်ဇာ၏ လုပ်ဆောင်ပုံကို သင် ရင်းနှီးထားသည့်အတိုင်း screen reader ၏ လုပ်ဆောင်ပုံကိုလည်း သင်လေ့လာသင့်သည်။ ကံကောင်းစွာဖြင့် screen readers များသည် အများဆုံး operating systems တွင် built-in အနေဖြင့် ပါဝင်သည်။

ဘရောက်ဇာများတွင် built-in tools များနှင့် extension များလည်း ပါဝင်ပြီး စာသားကို အသံထွက်ဖြင့် ဖတ်ပေးခြင်း သို့မဟုတ် အခြေခံ navigation လုပ်ဆောင်ချက်များကို ပေးနိုင်သည်။ ဥပမာအားဖြင့် [Edge browser tools](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features) များသည် ဝင်ရောက်နိုင်မှုအတွက် အရေးကြီးသော ကိရိယာများဖြစ်သော်လည်း screen reader testing tools များနှင့် ရှုပ်ထွေးမနေသင့်ပါ။

✅ Screen reader နှင့် browser text reader ကို စမ်းသုံးပါ။ Windows တွင် [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) သည် default အနေဖြင့် ပါဝင်ပြီး [JAWS](https://webaim.org/articles/jaws/) နှင့် [NVDA](https://www.nvaccess.org/about-nvda/) ကိုလည်း ထည့်သွင်းနိုင်သည်။ macOS နှင့် iOS တွင် [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) သည် default အနေဖြင့် ပါဝင်သည်။

### Zoom

မျက်စိမမြင်သူများအတွက် အများဆုံး အသုံးပြုသော ကိရိယာတစ်ခုမှာ zooming ဖြစ်သည်။ အခြေခံ zooming အမျိုးအစားမှာ `Control + plus sign (+)` သို့မဟုတ် screen resolution ကို လျှော့ချခြင်းဖြင့် ထိန်းချုပ်နိုင်သည်။ ဤအမျိုးအစား zooming သည် စာမျက်နှာတစ်ခုလုံးကို ပြန်လည် အရွယ်အစားချိန်ညှိစေပြီး [responsive design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) ကို အသုံးပြုခြင်းသည် zoom အဆင့်များတွင် အသုံးပြုသူအတွေ့အကြုံကောင်းစေရန် အရေးကြီးသည်။

အခြား zooming အမျိုးအစားမှာ အထူး software ကို အသုံးပြု၍ screen ၏ တစ်နေရာကို ပိုမိုကြီးမားစေပြီး pan လုပ်ခြင်းဖြစ်သည်။ ဤနည်းလမ်းသည် အမှန်တကယ် magnifying glass ကို အသုံးပြုသည့်နည်းလမ်းနှင့် ဆင်တူသည်။ Windows တွင် [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) သည် built-in အနေဖြင့် ပါဝင်ပြီး [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) သည် third-party magnification software ဖြစ်ပြီး feature များပိုမိုပါဝင်သည့်အပြင် အသုံးပြုသူများလည်း များပြားသည်။ macOS နှင့် iOS တွင် built-in magnification software ဖြစ်သော [Zoom](https://www.apple.com/accessibility/mac/vision/) ပါဝင်သည်။

### Contrast checkers

ဝက်ဘ်ဆိုဒ်များတွင် အသုံးပြုသော အရောင်များကို အရောင်မမြင်နိုင်သူများ သို့မဟုတ် အနည်းဆုံး contrast အရောင်များကို မြင်ရခက်သူများ၏ လိုအပ်ချက်များကို ဖြေရှင်းနိုင်ရန် သေချာစွာ ရွေးချယ်ရမည်။

✅ သင်နှစ်သက်သော ဝက်ဘ်ဆိုဒ်တစ်ခုကို browser extension တစ်ခုဖြစ်သော [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon) ဖြင့် စမ်းသပ်ပါ။ သင်ဘာတွေ သင်ယူရမလဲ?

### Lighthouse

သင်၏ ဘရောက်ဇာ၏ developer tool area တွင် Lighthouse tool ကို ရှာတွေ့နိုင်သည်။ ဤ tool သည် ဝက်ဘ်ဆိုဒ်၏ ဝင်ရောက်နိုင်မှု (အခြားသော analysis များနှင့်အတူ) ကို စတင်ကြည့်ရှုရန် အရေးကြီးသည်။ Lighthouse ကို အပြည့်အဝ အားထားသင့်သည်မဟုတ်သော်လည်း 100% score ရရှိခြင်းသည် အခြေခံအနေဖြင့် အလွန်အရေးကြီးသည်။

✅ သင်၏ ဘရောက်ဇာ၏ developer tool panel တွင် Lighthouse ကို ရှာဖွေပြီး site တစ်ခုကို analysis လုပ်ပါ။ သင်ဘာတွေ ရှာတွေ့ရမလဲ?

## ဝင်ရောက်နိုင်မှုအတွက် ဒီဇိုင်းဆွဲခြင်း

ဝင်ရောက်နိုင်မှုသည် အကြီးအကျယ်သော ခေါင်းစဉ်တစ်ခုဖြစ်သည်။ သင်ကို ကူညီရန် အရင်းအမြစ်များစွာ ရရှိနိုင်သည်။

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

ကျွန်ုပ်တို့သည် ဝက်ဘ်ဆိုဒ်များကို ဝင်ရောက်နိုင်စေရန် ဖန်တီးခြင်း၏ အချက်အားလုံးကို ဖော်ပြနိုင်မည်မဟုတ်သော်လည်း အောက်တွင် ဖော်ပြထားသော အခြေခံအချက်များကို သင် အကောင်အထည်ဖော်လိုက်သင့်သည်။ အစမှစ၍ ဝင်ရောက်နိုင်သော စာမျက်နှာကို ဒီဇိုင်းဆွဲခြင်းသည် ရှိပြီးသား စာမျက်နှာကို ပြန်လည် ဝင်ရောက်နိုင်စေရန် ပြင်ဆင်ခြင်းထက် **အမြဲတမ်း** လွယ်ကူသည်။

## ကောင်းမွန်သော ပြသမှုအခြေခံများ

### အရောင်များကို လုံခြုံစွာ ရွေးချယ်ခြင်း

လူများသည် ကမ္ဘာကို မတူညီသော နည်းလမ်းများဖြင့် မြင်ကြသည်။ ၎င်းတွင် အရောင်များလည်း ပါဝင်သည်။ သင်၏ site အတွက် အရောင် scheme ကို ရွေးချယ်သည့်အခါ လူတိုင်း ဝင်ရောက်နိုင်စေရန် သေချာစွာ ရွေးချယ်ရမည်။ [Color Safe](http://colorsafe.co/) သည် အရောင် palette များကို ဖန်တီးရန် ကောင်းမွန်သော tool တစ်ခုဖြစ်သည်။

✅ အရောင်အသုံးပြုမှုအတွက် အလွန်ပြဿနာများဖြစ်စေသော ဝက်ဘ်ဆိုဒ်တစ်ခုကို ရှာဖွေပါ။ အဘယ်ကြောင့်?

### မှန်ကန်သော HTML ကို အသုံးပြုခြင်း

CSS နှင့် JavaScript ကို အသုံးပြု၍ element မည်သည့်အမျိုးအစားကိုမဆို control အမျိုးအစားတစ်ခုလို ပြောင်းလဲနိုင်သည်။ `<span>` ကို `<button>` အဖြစ် ဖန်တီးနိုင်ပြီး `<b>` ကို hyperlink အဖြစ် ပြောင်းလဲနိုင်သည်။ ဤနည်းလမ်းသည် style လုပ်ရန် လွယ်ကူသည်ဟု ယူဆနိုင်သော်လည်း screen reader အတွက် ဘာမှ မဖော်ပြနိုင်ပါ။ စာမျက်နှာတွင် control များ ဖန်တီးသည့်အခါ မှန်ကန်သော HTML ကို အသုံးပြုပါ။ hyperlink တစ်ခုလိုချင်ပါက `<a>` ကို အသုံးပြုပါ။ control တစ်ခုအတွက် မှန်ကန်သော HTML ကို အသုံးပြုခြင်းကို Semantic HTML ကို အသုံးပြုခြင်းဟု ခေါ်သည်။

✅ ဝက်ဘ်ဆိုဒ်တစ်ခုသို့ သွားပြီး designer များနှင့် developer များသည် HTML ကို မှန်ကန်စွာ အသုံးပြုထားမထား စစ်ဆေးပါ။ link ဖြစ်သင့်သော button ကို ရှာတွေ့နိုင်ပါသလား? အကြံပြုချက် - သင်၏ ဘရောက်ဇာတွင် 'View Page Source' ကို ရွေးချယ်ပြီး underlying code ကို ကြည့်ပါ။

### Heading hierarchy ကို ဖော်ပြခြင်း

Screen reader အသုံးပြုသူများသည် [heading များကို အလွန်အရေးကြီးစွာ မှီခို](https://webaim.org/projects/screenreadersurvey8/#finding)၍ အချက်အလက်များကို ရှာဖွေခြင်းနှင့် စာမျက်နှာတစ်ခုလုံးကို navigation လုပ်ခြင်းများ ပြုလုပ်ကြသည်။ heading content ကို ဖော်ပြခြင်းနှင့် semantic heading tags များကို အသုံးပြုခြင်းသည် screen reader အသုံးပြုသူများအတွက် navigation လုပ်ရန် လွယ်ကူသော site တစ်ခု ဖန်တီးရန် အရေးကြီးသည်။

### ရှုထောင့်အချက်များကို ကောင်းစွာ အသုံးပြုခြင်း

CSS သည် စာမျက်နှာတွင် မည်သည့် element ကိုမဆို ပြသမှုကို အပြည့်အဝ ထိန်းချုပ်နိုင်သည်။ သင် outline မပါသော text box များ သို့မဟုတ် underline မပါသော hyperlink များကို ဖန်တီးနိုင်သည်။ သို့သော် ဤအချက်များကို ဖယ်ရှားခြင်းသည် ၎င်းတို့ကို မှီခိုရသောသူများအတွက် control အမျိုးအစားကို သိရှိရန် ပိုမိုခက်ခဲစေသည်။

## Link text ၏ အရေးကြီးမှု

Hyperlink များသည် ဝက်ဘ်ကို navigation လုပ်ရန် အခြေခံအချက်ဖြစ်သည်။ screen reader သည် link များကို သေချာစွာ ဖတ်နိုင်စေရန် သေချာစွာ ဖန်တီးထားခြင်းသည် အသုံးပြုသူအားလုံး သင်၏ site ကို navigation လုပ်နိုင်စေရန် အရေးကြီးသည်။

### Screen readers နှင့် links

Screen reader များသည် စာမျက်နှာပေါ်ရှိ အခြားသော စာသားများကို ဖတ်သည့်နည်းလမ်းတူ link text ကို ဖတ်သည်။ ဤအချက်ကို စဉ်းစားပါက အောက်တွင် ဖော်ပြထားသော text သည် လုံးဝလက်ခံနိုင်သည်ဟု ခံစားရနိုင်သည်။

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. [Click here](https://en.wikipedia.org/wiki/Little_penguin) for more information.

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. Visit https://en.wikipedia.org/wiki/Little_penguin for more information.

> **NOTE** သင်ဖတ်မည့်အတိုင်း သင်သည် **ဘယ်တော့မှ** အထက်ဖော်ပြထားသော link များကို ဖန်တီးသင့်သည်မဟုတ်ပါ။

Screen reader များသည် browser များနှင့် မတူသော interface ဖြစ်ပြီး feature များလည်း မတူပါ။

### URL ကို အသုံးပြုခြင်း၏ ပြဿနာ

Screen reader များသည် text ကို ဖတ်သည်။ URL တစ်ခု text တွင် ပါဝင်ပါက screen reader သည် URL ကို ဖတ်မည်။ URL သည် အဓိပ္ပါယ်ရှိသော အချက်အလက်ကို မပေးနိုင်သည့်အပြင် အဆင်မပြေသော အသံထွက်လည်း ဖြစ်နိုင်သည်။ သင်၏ ဖုန်းသည် URL ပါဝင်သော text message ကို အသံထွက်ဖြင့် ဖတ်ပေးသည့်အခါ ဤအတွေ့အကြုံကို ရရှိဖူးနိုင်သည်။

### "click here" ကို အသုံးပြုခြင်း၏ ပြဿနာ

Screen reader များသည် စာမျက်နှာပေါ်ရှိ hyperlink များကိုသာ ဖတ်နိုင်သည်။ sighted person တစ်ဦးသည် link များကို ရှာဖွေသည့်နည်းလမ်းတူပင်ဖြစ်သည်။ link text အားလုံး "click here" ဖြစ်ပါက အသုံးပြုသူသည် "click here, click here, click here, click here, click here, ..." ဟုသာ ကြားရမည်။ link များအားလုံးသည် ယခု indistinguishable ဖြစ်သွားသည်။

### ကောင်းမွန်သော link text

ကောင်းမွန်သော link text သည် link ၏ အခြားဘက်တွင် ရှိသော အချက်အလက်ကို အတိုချုံး ဖော်ပြသည်။ အထက်ဖော်ပြထားသော little penguins အကြောင်း example တွင် link သည် species အကြောင်း Wikipedia page သို့ ရောက်ရှိမည်။ *little penguins* ဟူသော phrase သည် link text အဖြစ် အလွန်ကောင်းမွန်သည်။ သုံးစွဲသူသည် link ကို click လုပ်ပါက little penguins အကြောင်းကို သင်ယူနိုင်မည်ဟု သေချာစေသည်။

> The [little penguin](https://en.wikipedia.org/wiki/Little_penguin), sometimes known as the fairy penguin, is the smallest penguin in the world.

✅ ဝက်ဘ်ကို မိနစ်အနည်းငယ် surf လုပ်ပြီး obscure linking strategies ကို အသုံးပြုထားသော စာမျက်နှာများကို ရှာဖွေပါ။ အ
အစိုးရများစွာတွင် ဝင်ရောက်နိုင်မှုအပေါ် သက်ဆိုင်ရာ ဥပဒေများရှိသည်။ သင့်နိုင်ငံ၏ ဝင်ရောက်နိုင်မှုဆိုင်ရာ ဥပဒေများကို လေ့လာပါ။ ဘာတွေကို ဖုံးအုပ်ထားပြီး ဘာတွေကို မဖုံးအုပ်ထားဘူးလဲ။ ဥပမာအားဖြင့် [ဒီအစိုးရဝက်ဘ်ဆိုဒ်](https://accessibility.blog.gov.uk/) ကို ကြည့်ပါ။

## လုပ်ငန်းတာဝန်
 
[ဝင်ရောက်နိုင်မှုမရှိသော ဝက်ဘ်ဆိုဒ်တစ်ခုကို ခွဲခြမ်းစိတ်ဖြာပါ](assignment.md)

အရင်းအမြစ်: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument

---

**ဝက်ဘ်ဆိုက်မှတ်ချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေပါသော်လည်း၊ အလိုအလျောက်ဘာသာပြန်ဆိုမှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို ကျေးဇူးပြု၍ သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတည်သောရင်းမြစ်အဖြစ် သတ်မှတ်ပါ။ အရေးကြီးသောအချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပြန်ဆိုမှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော နားလည်မှုမှားများ သို့မဟုတ် အဓိပ္ပါယ်မှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။