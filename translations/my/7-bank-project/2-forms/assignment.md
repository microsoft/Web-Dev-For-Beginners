<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-24T16:49:19+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "my"
}
-->
# သင့်ဘဏ်အက်ပ်ကို ခေတ်မီ CSS ဖြင့် အလှဆင်ပါ

## ပရောဂျက်အကျဉ်းချုပ်

သင့်ဘဏ်အက်ပ်ကို လုပ်ဆောင်နိုင်စွမ်းရှိသော အက်ပ်မှ ခေတ်မီ CSS နည်းလမ်းများကို အသုံးပြု၍ အလှဆင်ထားသော၊ ပရော်ဖက်ရှင်နယ်ပုံစံရှိသော ဝဘ်အက်ပ်အဖြစ် ပြောင်းလဲပါ။ သုံးစွဲသူအတွေ့အကြုံကို မြှင့်တင်ပေးပြီး၊ လွယ်ကူစွာ အသုံးပြုနိုင်သော ဒီဇိုင်းစနစ်တစ်ခုကို ဖန်တီးပါ။

ဒီအလုပ်မှာ ခေတ်မီ ဝဘ်ဒီဇိုင်းပုံစံများကို အသုံးပြုခြင်း၊ တစ်စည်းတည်းဖြစ်သော ရုပ်ရှင်ပုံစံကို အကောင်အထည်ဖော်ခြင်းနှင့် သုံးစွဲသူများအတွက် ဆွဲဆောင်မှုရှိပြီး လွယ်ကူစွာ လမ်းကြောင်းရှာနိုင်သော အင်တာဖေ့စ်ကို ဖန်တီးခြင်းတို့ကို စိန်ခေါ်ပါသည်။

## လမ်းညွှန်ချက်များ

### အဆင့် ၁: သင့် Stylesheet ကို စတင်ပါ

**CSS အခြေခံကို ဖန်တီးပါ:**

1. **ဖန်တီးပါ** `styles.css` ဆိုသော ဖိုင်အသစ်ကို သင့်ပရောဂျက်ရဲ့ root မှာ
2. **ချိတ်ဆက်ပါ** `index.html` ဖိုင်မှာ stylesheet ကို:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **စတင်ပါ** CSS reset နှင့် ခေတ်မီ default များ:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### အဆင့် ၂: ဒီဇိုင်းစနစ်လိုအပ်ချက်များ

**အရေးပါသော ဒီဇိုင်းအချက်အလက်များကို အကောင်အထည်ဖော်ပါ:**

#### အရောင်ပုံစံ
- **Primary color**: ခလုတ်များနှင့် highlight များအတွက် ပရော်ဖက်ရှင်နယ်အရောင်ကို ရွေးပါ
- **Secondary color**: အထောက်အကူပြုမှုများနှင့် ဒုတိယအရေးပါမှုများအတွက် အရောင်ကို ရွေးပါ
- **Neutral colors**: စာသားများ၊ နယ်စည်းများနှင့် နောက်ခံများအတွက် မီးခိုးရောင်များ
- **Success/Error colors**: အောင်မြင်မှုအခြေအနေများအတွက် အစိမ်းရောင်၊ အမှားများအတွက် အနီရောင်

#### အက္ခရာပုံစံ
- **Heading hierarchy**: H1, H2, H3 အကြား သေချာသော ခွဲခြားမှု
- **Body text**: ဖတ်ရှုနိုင်သော font size (အနည်းဆုံး 16px) နှင့် သင့်တော်သော line height
- **Form labels**: သေချာသော၊ လွယ်ကူစွာ ဖတ်ရှုနိုင်သော စာသားပုံစံ

#### Layout နှင့် Spacing
- **Consistent spacing**: Spacing scale (8px, 16px, 24px, 32px) ကို အသုံးပြုပါ
- **Grid system**: Form များနှင့် အကြောင်းအရာပိုင်းများအတွက် စနစ်တကျ layout
- **Responsive design**: Mobile-first နည်းလမ်းနှင့် breakpoints

### အဆင့် ၃: အစိတ်အပိုင်းများကို ဒီဇိုင်းဆွဲခြင်း

**ဒီအစိတ်အပိုင်းများကို ဒီဇိုင်းဆွဲပါ:**

#### Forms
- **Input fields**: ပရော်ဖက်ရှင်နယ်နယ်စည်းများ၊ focus states နှင့် validation styling
- **Buttons**: Hover effects, disabled states နှင့် loading indicators
- **Labels**: သေချာသော တည်နေရာနှင့် လိုအပ်သော field အညွှန်းများ
- **Error messages**: အမှားများကို ထင်ရှားစွာ ပြသခြင်းနှင့် အထောက်အကူပြုသော မက်ဆေ့များ

#### Navigation
- **Header**: သန့်ရှင်းသော၊ အမှတ်တံဆိပ်ပါသော navigation နေရာ
- **Links**: Hover states နှင့် active indicators ကို သေချာစွာ ပြသခြင်း
- **Logo/Title**: ထင်ရှားသော အမှတ်တံဆိပ်ပုံစံ

#### Content Areas
- **Sections**: အကြောင်းအရာများအကြား သေချာသော ရုပ်ရှင်ခွဲခြားမှု
- **Cards**: Card-based layouts အသုံးပြုပါက shadow နှင့် border များပါဝင်စေရန်
- **Backgrounds**: အဖြူရောင်နေရာများနှင့် သက်သာသော နောက်ခံများကို သင့်တော်စွာ အသုံးပြုပါ

### အဆင့် ၄: မြှင့်တင်ထားသော အင်္ဂါရပ်များ (Optional)

**ဒီအဆင့်မြှင့်တင်ထားသော အင်္ဂါရပ်များကို စဉ်းစားပါ:**
- **Dark mode**: အလင်းနှင့် အမှောင် themes အကြား toggle
- **Animations**: သက်သာသော transitions နှင့် micro-interactions
- **Loading states**: Form များကို တင်သွင်းနေစဉ် အမြင် feedback
- **Responsive images**: မျိုးစုံသော screen size များအတွက် optimized images

## ဒီဇိုင်းအကြံပေးချက်

**ခေတ်မီဘဏ်အက်ပ်၏ လက္ခဏာများ:**
- **သန့်ရှင်းသော၊ အနည်းဆုံးဒီဇိုင်း** အဖြူရောင်နေရာများစွာပါဝင်သည်
- **ပရော်ဖက်ရှင်နယ်အရောင်ပုံစံများ** (အပြာရောင်၊ အစိမ်းရောင်၊ သို့မဟုတ် sophisticated neutrals)
- **ရုပ်ရှင်အလှဆင်မှု** သေချာသော call-to-action ခလုတ်များ
- **ရောက်ရှိနိုင်သော contrast ratios** WCAG guidelines ကို ဖြည့်ဆည်းသည်
- **Mobile-responsive layouts** စက်ပစ္စည်းအားလုံးတွင် အလုပ်လုပ်နိုင်သည်

## နည်းပညာလိုအပ်ချက်များ

### CSS စီမံခန့်ခွဲမှု
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```


### Accessibility လိုအပ်ချက်များ
- **Color contrast**: ပုံမှန်စာသားအတွက် အနည်းဆုံး 4.5:1 ratio ရှိစေရန် သေချာပါ
- **Focus indicators**: ကီးဘုတ် navigation အတွက် ထင်ရှားသော focus states
- **Form labels**: Input များနှင့် သေချာစွာ ဆက်စပ်ထားသည်
- **Responsive design**: 320px မှ 1920px အကျယ်ရှိသော screen များတွင် အသုံးပြုနိုင်သည်

## အကဲဖြတ်မှု Rubric

| Criteria | Exemplary (A) | Proficient (B) | Developing (C) | Needs Improvement (F) |
|----------|---------------|----------------|----------------|----------------------|
| **Design System** | Comprehensive design system ကို အကောင်အထည်ဖော်ပြီး အရောင်များ၊ အက္ခရာပုံစံများနှင့် spacing များကို တစ်စည်းတည်းဖြစ်စွာ အသုံးပြုထားသည် | တစ်စည်းတည်းဖြစ်သော styling ကို အသုံးပြုပြီး ရုပ်ရှင်အလှဆင်မှုနှင့် visual hierarchy ကောင်းမွန်သည် | အခြေခံ styling ကို အသုံးပြုထားပြီး တစ်စည်းတည်းဖြစ်မှုမရှိခြင်း သို့မဟုတ် ဒီဇိုင်းအချက်အလက်များပျောက်ဆုံးနေသည် | အနည်းဆုံး styling ဖြင့် တစ်စည်းတည်းဖြစ်မှုမရှိခြင်း သို့မဟုတ် ဆန့်ကျင်နေသော ဒီဇိုင်းရွေးချယ်မှုများ |
| **User Experience** | Intuitive, professional interface ကို ဖန်တီးပြီး usability နှင့် visual appeal ကောင်းမွန်သည် | navigation ရှင်းလင်းပြီး ဖတ်ရှုနိုင်သော content ဖြင့် user experience ကောင်းမွန်သည် | usability အခြေခံပြီး UX အဆင့်မြှင့်တင်မှုများ လိုအပ်သည် | usability မကောင်း၊ navigation သို့မဟုတ် ဖတ်ရှုရန် အခက်အခဲရှိသည် |
| **Technical Implementation** | ခေတ်မီ CSS နည်းလမ်းများ၊ စီမံခန့်ခွဲမှုကောင်းမွန်သော code structure နှင့် best practices ကို လိုက်နာသည် | CSS ကို ထိရောက်စွာ အကောင်အထည်ဖော်ပြီး စီမံခန့်ခွဲမှုကောင်းမွန်သည် | CSS သေချာစွာ အလုပ်လုပ်သော်လည်း စီမံခန့်ခွဲမှု သို့မဟုတ် ခေတ်မီနည်းလမ်းများ မပါဝင်နိုင် | CSS အကောင်အထည်ဖော်မှုမကောင်း၊ နည်းပညာပြဿနာများ သို့မဟုတ် browser compatibility ပြဿနာများ |
| **Responsive Design** | Fully responsive design ကို ဖန်တီးပြီး စက်ပစ္စည်းအရွယ်အစားအားလုံးတွင် အလှဆင်မှုကောင်းမွန်သည် | responsive behavior ကောင်းမွန်ပြီး screen size အချို့တွင် အနည်းငယ်ပြဿနာရှိသည် | responsive implementation အခြေခံပြီး layout ပြဿနာများ ရှိသည် | responsive မရှိ သို့မဟုတ် mobile devices တွင် ပြဿနာများ |

| **Accessibility** | WCAG guidelines ကို ဖြည့်ဆည်းပြီး keyboard navigation နှင့် screen reader support ကောင်းမွန်သည် | accessibility practices ကောင်းမွန်ပြီး contrast နှင့် focus indicators သေချာသည် | accessibility အခြေခံအချက်များကို စဉ်းစားထားပြီး အချို့အချက်များ ပျောက်နေသည် | accessibility မကောင်း၊ အခက်အခဲရှိသော users များအတွက် အသုံးမဝင်နိုင် |

## တင်သွင်းရန် လမ်းညွှန်ချက်များ

**သင့်တင်သွင်းမှုတွင် ပါဝင်ရမည့်အရာများ:**
- **styles.css**: သင့် stylesheet အပြည့်အစုံ
- **Updated HTML**: သင့်ပြင်ဆင်ထားသော HTML
- **Screenshots**: Desktop နှင့် mobile တွင် သင့်ဒီဇိုင်းကို ပြသထားသော ပုံများ
- **README**: သင့်ဒီဇိုင်းရွေးချယ်မှုများနှင့် အရောင်ပုံစံအကျဉ်းချုပ်

**အပိုအမှတ်များအတွက်:**
- **CSS custom properties** သုံးပြီး maintainable theming
- **ခေတ်မီ CSS features** (Grid, Flexbox, CSS animations စသည်)
- **Performance considerations** (optimized CSS နှင့် file size အနည်းဆုံး)
- **Cross-browser testing** (browser များအမျိုးမျိုးတွင် အလုပ်လုပ်နိုင်စေရန်)

> 💡 **Pro Tip**: Mobile design ကို အရင်စတင်ပြီး၊ screen size ကြီးများအတွက် မြှင့်တင်ပါ။ ဒီ mobile-first နည်းလမ်းသည် သင့်အက်ပ်ကို စက်ပစ္စည်းအားလုံးတွင် ကောင်းမွန်စွာ အလုပ်လုပ်စေရန်နှင့် ခေတ်မီ web development best practices ကို လိုက်နာစေရန် အထောက်အကူပြုသည်။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။