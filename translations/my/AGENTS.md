# AGENTS.md

## Project Overview

ဒီဟာက web ဖန်တီးမှု အခြေခံသင်ခန်းစာတွေကို အစမှစသင်ကြားဖို့ အတွက် ပညာရေး အတွက် သင်ကြားမှု လေ့လာရေး စာစောင်တစ်ခု ဖြစ်ပါတယ်။ ဒီသင်ကြားရေးအစီအစဉ်ဟာ Microsoft Cloud Advocates တွေက ဖန်တီးထားတဲ့ ၁၂ ပတ်ကြာ သင်ရိုးအစီအစဉ် ပြည့်စုံပြီး၊ JavaScript, CSS နဲ့ HTML ကို အခြေခံဖြင့် ပြုလုပ်ထားတဲ့ လက်တွေ့လေ့ကျင့်ခန်း ၂၄ ခု ပါဝင်ပါတယ်။

### Key Components

- **ပညာရေး အကြောင်းအရာ**: စီမံချက်အခြေခံ မော်ဂျူးများအဖြစ် အစီအစဉ်ပြုလုပ်ထားသော ၂၄ ခန်းသင်ခန်းစာများ
- **လက်တွေ့ပရောဂျက်များ**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, နဲ့ AI Chat Assistant
- **အပြန်အလှန် စမ်းသပ်မေးခွန်းများ**: ခန်းသင်ခန်းစာများမတိုင်မီနဲ့ပြီးနောက် အစီအစဉ် ၄၈ ခု၊ မေးခွန်း ၃ ခုစီ ပါဝင်သည်
- **ဘာသာစကား အတန်းပြိုင်ပံ့ပိုးမှု**: GitHub Actions အသုံးပြုပြီး ဘာသာပြန်မှု ၅၀ ကျော်ကို အလိုအလျောက်ပြုလုပ်ခြင်း
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ပရောဂျက်များအတွက်)

### Architecture

- သင်ခန်းစာအခြေခံ ပညာရေး အရင်းအမြစ်
- ထိုသင်ခန်းစာကို ဖိုင်အတွင်း README, ကုဒ်ဥပမာ၊ ဖြေရှင်းနည်းများ ပါရှိသည်
- ပရောဂျက်များကို စတင်ဖိုင်ခွဲခြင်းဖြင့် (quiz-app, အကွာအဝေးရှိသောသင်ခန်းစာပရောဂျက်များ)
- GitHub Actions ဖြင့် ဘာသာပြန်မှုစနစ် တည်ဆောက်ထားသည် (co-op-translator)
- Docsify ဖြင့် စာတမ်းစာတမ်းများ ပေးပို့ပြီး PDF အဖြစ်လည်း ရနိုင်

## Setup Commands

ဒီရေှာပလာ ဖြင့် ပညာရေးအကြောင်းအရာ အသုံးပြုရန်သာ ရည်ရွယ်ထားသည်။ သီးသန့် ပရောဂျက်များကို အလုပ်လုပ်ရန်။

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ဖွံ့ဖြိုးမှုဆာဗာကို စတင်ပါ
npm run build      # ထုတ်လုပ်မှုအတွက် တည်ဆောက်ပါ
npm run lint       # ESLint ကို လည်ပတ်ပါ
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API ဆာဗာ စတင်ပါ
npm run lint       # ESLint ကို လည်ပတ်ပါ
npm run format     # Prettier ဖြင့် ဖော်မတ်လုပ်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ဘရောက်ဇာအလိုက် သီးခြား extension ဖွင့်သည့် ညွှန်ကြားချက်များအား လိုက်နာရန်
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# index.html ကို browser မှာဖွင့်ပါ သို့မဟုတ် Live Server ကိုသုံးပါ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ပတ်ဝန်းကျင်အပြောင်းအလဲတတ်သော သတ်မှတ်ပါ
python api.py
```

## Development Workflow

### For Content Contributors

1. **သင့် GitHub အကောင့်သို့ repo ကို fork လုပ်ပါ**
2. **သင့် fork ကို ဒေသတွင်း clone လုပ်ပါ**
3. **မပြောင်းလဲမှုအတွက် ဧရိယာအသစ်တစ်ခု ဖန်တီးပါ**
4. သင်ခန်းစာ အကြောင်းအရာ သို့မဟုတ် ကုဒ်ဥပမာများ ပြင်ဆင်ပါ
5. သက်ဆိုင်ရာ ပရောဂျက်ဖိုလ်ဒါများတွင် ကုဒ်ပြောင်းလဲမှုများ စမ်းသပ်ပါ
6. ပံ့ပိုးမှု လမ်းညွှန်ချက်အတိုင်း pull request များတင်သွင်းပါ

### For Learners

1. Repo ကို fork လုပ် သို့မဟုတ် clone လုပ်ပါ
2. သင်ခန်းစာဖိုလ်ဒါများကို တရားဝင်လိုက်နာ ပြီး သွားပါ
3. ခန်းသင်စာများအတွက် README ဖိုင်များ ဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မီ စစ်ဆေးမေးခွန်းများ ဖြေဆိုပါ
5. သင်ခန်းစာဖိုလ်ဒါများအတွင်း ကုဒ်ဥပမာများနှင့် လေ့ကျင့်ပါ
6. အလုပ်များနှင့် စိန်ခေါ်မှုများ ပြီးမြောက်ပါ
7. သင်ခန်းစာပြီးနောက် စစ်ဆေးမေးခွန်းများ ဖြေပါ

### Live Development

- **စာတမ်းစာရွက်များ**: root တွင် `docsify serve` နှင့် ကိုင်တွယ်ပါ (port 3000)
- **Quiz App**: quiz-app ဖိုလ်ဒါ၌ `npm run dev` ကို အသုံးပြုပါ
- **ပရောဂျက်များ**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension သုံးပါ
- **API ပရောဂျက်များ**: သက်ဆိုင်ရာ API ဖိုလ်ဒါများတွင် `npm start` ကို run လုပ်ပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ကုတ်ပုံစံပြဿနာများကို စစ်ဆေးပါ
npm run build      # တည်ဆောက်မှု အောင်မြင်မှုကို သေချာပါစေ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုဒ်ပုံစံ ပြဿနာများကို စစ်ဆေးပါ
node server.js     # ဆာဗာ အမှားများမရှိဘဲ စတင်နိုင်ကြောင်း အတည်ပြုပါ
```

### General Testing Approach

- ဒီဟာက ပညာရေးအတွက် ဖြစ်ပြီး စက်ရုပ် စမ်းသပ်မှု ပြည့်စုံမရှိပါ
- လက်တွေ့စမ်းသပ်ခြင်း အခြေခံချက်များမှာ –
  - ကုဒ်ဥပမာများ အမှားမရှိ များကို ပြေးနိုင်မှု
  - စာတမ်းစာရွက်အတွင်း လင့်ခ်များ တိကျမှု
  - ပရောဂျက်များ အဆင်သင့် ပြီးဆုံးမှု
  - ဥပမာများ စံပြနည်းလမ်းများကို လိုက်နာခြင်း

### Pre-submission Checks

- package.json တွင်ရှိသောဖိုလ်ဒါများတွင် `npm run lint` ရောစစ်ပါ
- Markdown လင့်ခ်များမှာ မှန်ကန်မှု ရှိ/မရှိ စစ်ဆေးပါ
- Browser သို့မဟုတ် Node.js တွင် ကုဒ်ဥပမာများ စစ်ဆေးပါ
- ဘာသာပြန်မှုများ ရိုးရှင်းမှု ထိန်းသိမ်းထားမှု စစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- ခေတ်သစ် ES6+ စနစ်များ သုံးပါ
- ပရောဂျက်များတွင် ဖော်ပြထားသော standard ESLint ညွှန်ကြားချက်များ လိုက်နာပါ
- ပညာရေးအတွက် ရည်ရွယ်ချက်နဲ့ အသုံးပြုသည့် ပြောင်းလဲမှုနှင့် function အမည်များ အသုံးပြုပါ
- သင်ယူသူများအတွက် အကြောင်းအရာရှင်းလင်းမှု အတွက် မှတ်ချက် ထည့်ပါ
- Prettier ဖြင့် ဖော်မတ်လုပ်ပါ (သတ်မှတ်ထားသောနေရာတွင်)

### HTML/CSS

- Semantic HTML5 element များအမြဲ သုံးပါ
- Responsive ဒီဇိုင်း သဘောတရားများ လိုက်နာပါ
- Class နာမည် သက်ဆိုင်ရာ သဘောထားအတိုင်း အသုံးပြုပါ
- CSS နည်းလမ်းများ အသုံးပြုမှု ရှင်းလင်းအောင် မှတ်ချက် ထည့်ပါ

### Python

- PEP 8 စတိုင် ညွှန်ကြားချက်
- ပညာရေးအတွက် သန့်ရှင်းပြီး ရှင်းလင်းသော ကုဒ်ဥပမာများ
- သင်ယူရန် အတွက် သက်ဆိုင်သောနေရာတွင် တိုင်းတမ်းရေးပါ

### Markdown Documentation

- ခေါင်းစဉ်ဆက်တက်မှု သေချာစွာ ပါဝင်မှု
- ဘာသာစကား သတ်မှတ်ချက်ပါ အကုဒ်ဘလော့ခ်များ
- ထပ်ဆောင်း အရင်းအမြစ်များချိတ်ဆက်မှု
- `images/` ဖိုလ်ဒါတွင် စက္ကန့်ပုံများ နဲ့ ဓာတ်ပုံများ
- ဓာတ်ပုံများအတွက် နားလည်စေသည့် alt စာသား

### File Organization

- သင်ခန်းစာများ သင်ခန်းစာ အမှတ် အလိုက် နေရာချထားမှု (1-getting-started-lessons, 2-js-basics, စသည်)
- ပရောဂျက်များတွင် `solution/` နဲ့ မကြာခဏ `start/` သို့မဟုတ် `your-work/` ဖိုလ်ဒါများ ပါဝင်သည်
- သင်ခန်းစာအလိုက် `images/` ဖိုလ်ဒါများတွင် ဓာတ်ပုံများ ထိန်းသိမ်းမှု
- ဘာသာပြန်ချက်များကို `translations/{language-code}/` ဖိုလ်ဒါတွင်ထားသည်

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ကို Azure Static Web Apps အတွက် ပြင်ဆင်ထားသည် -

```bash
cd quiz-app
npm run build      # dist/ ဖိုဒါကို ဖန်တီးသည်
# main သို့ push လုပ်သောအခါ GitHub Actions workflow ဖြင့် တပ်ဆင်သည်
```

Azure Static Web Apps ပြင်ဆင်မှု-
- **App တည်နေရာ**: `/quiz-app`
- **ထုတ်ပေးရာ တည်နေရာ**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကိုထည့်သွင်းပါ
npm run convert               # docs မှ PDF ဖိုင်ဖန်တီးပါ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို တစ်ကမ္ဘာလုံးတွင် ထည့်သွင်းပါ
docsify serve                 # localhost:3000 တွင် Serve လုပ်ပါ
```

### Project-specific Builds

ပရောဂျက်ဖိုလ်ဒါ တစ်ခုချင်းစီမှာ ဘယ်လို Build လုပ်ရမယ်ဆိုတာက ဤသို့ ဖြစ်နိုင်သည် -
- Vue ပရောဂျက်များ: `npm run build` ဖြင့် ထုတ်လုပ်မှု ဘယ်လ်များ ဖန်တီးခြင်း
- Static ပရောဂျက်များ: Build အဆင့်မလိုအပ်ဘဲ အမြဲတမ်း File များကို ဝန်ဆောင်မှုလုပ်ခြင်း

## Pull Request Guidelines

### Title Format

ပြောင်းလဲမှု နေရာကို သေချာ ဖော်ပြနိုင်တဲ့ ခေါင်းစဉ်များ အသုံးပြုပါ -
- `[Quiz-app] Lesson X အတွက် Quiz အသစ် ထည့်သွင်းခြင်း`
- `[Lesson-3] Terrarium ပရောဂျက်ရှိ အမှား ပြင်ဆင်ခြင်း`
- `[Translation] Lesson 5 အတွက် စပိန်ဘာသာ ပြန်ထည့်ခြင်း`
- `[Docs] Setup လမ်းညွှန်ချက်များ အပ်ဒိတ်ခြင်း`

### Required Checks

PR တင်မဲ့အချိန်မှာ သေချာ စစ်ဆေးရန် -

1. **ကုဒ်အရည်အသွေး**:
   - သက်ဆိုင်ရာ ပရောဂျက်ဖိုလ်ဒါတွင် `npm run lint` ပြေးပါ
   - လင့်တ် error များနဲ့ သတိပေးချက်များကိုအားလုံး ပြင်ဆင်ပါ

2. **Build အတည်ပြုခြင်း**:
   - Build လုပ်စရာရှိလျှင် `npm run build` ပြေးပါ
   - Build error မရှိစေရန် သေချာ စစ်ဆေးပါ

3. **Link စစ်ဆေးခြင်း**:
   - Markdown link များအားလုံး စစ်ဆေးပါ
   - ဓာတ်ပုံများ လင့်ခ် တွေရေးသည် မှန်ကြောင်း စစ်ဆေးပါ

4. **အကြောင်းအရာ သုံးသပ်ခြင်း**:
   - သဒ္ဒါစစ်ဆေးပြီး စာလုံးပြားထဲမှားချက် မရှိစေရန် သေချာစစ်ပါ
   - ကုဒ်ဥပမာများ မှန်ကန်ပြီး ပညာရေးအရ သင်ကြားမှုကောင်းမောင်းမှုရှိစေရန် ကြိုးစားပါ
   - ဘာသာပြန်မှုများ ရိုးရိုးသားသား ပြန်လည်မည့် အကြောင်းအရာ တူညီမှုရှိစေရန် စစ်ဆေးပါ

### Contribution Requirements

- Microsoft CLA ကို လက်မှတ်ထိုးပါ (ပထမဆုံး PR မှာ အလိုအလျောက် စစ်ဆေးပါလိမ့်မယ်)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ကိုလိုက်နာပါ
- အသေးစိတ်အတိုင်ပင်ခံရန် [CONTRIBUTING.md](./CONTRIBUTING.md) ဖတ်ပါ
- PR မှာ သက်ဆိုင်ရာ issue နံပါတ်များ ကိုဖော်ပြပါ

### Review Process

- PR များကို ထိန်းသိမ်းသူများနဲ့ နည်းပညာ ဖက် အသိုင်းအဝိုင်းက စစ်ဆေးပေးပါလိမ့်မယ်
- ပညာရေးအတွက် ရှင်းလင်းတင်ပြမှုကို ဦးစားပေးပါ
- ကုဒ်ဥပမာများ အကောင်းဆုံး Practices များနဲ့ လိုက်နာမှုရှိစေရန် ကြိုးစားပါ
- ဘာသာပြန်မှုများကို တိကျမှုနဲ့ ယဉ်ကျေးမှုအသုံးအနှုန်းမှန်ကန်မှုရှိစေရန် စစ်ဆေးပါ

## Translation System

### Automated Translation

- GitHub Actions အသုံးပြုထားပြီး co-op-translator workflow ဖြင့် အလိုအလျောက် ဘာသာပြန်သည်
- ၅၀ ကျော် ဘာသာစကားများသို့ အချက်အလက်များ ဘာသာပြန်သည်
- မူလဖိုင်များကို main directories မှာထားသည်
- ဘာသာပြန်ပြီးဖိုင်များကို `translations/{language-code}/` ဖိုလ်ဒါတွင် ထားသည်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` မှ ဖိုင် ရှာပါ
2. ဖိုင်ကို အတူတကွ ပြုပြင်မှု ပြုလုပ်ပါ၊ ဖိုင် ဖွဲ့စည်းမှု ထိန်းသိမ်းပါ
3. ကုဒ်ဥပမာများ လုပ်ငန်းမှန်ကန်နေစေရန် သေချာစစ်ပါ
4. ဒေသခံ Quiz အကြောင်းအရာရှိလျှင် စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန်ထားသော ဖိုင်များတွင် metadata header ပါဝင်သည် -
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Debugging and Troubleshooting

### Common Issues

**Quiz app က စတင်မရပါ** -
- Node.js ဘားရှင်း (v14+ အကြံပြု)
- `node_modules` နဲ့ `package-lock.json` ဖျက်ပြီး `npm install` လုပ်ပါ
- Port ပြဿနာရှိမရှိ စစ်ဆေးပါ (Vite က default port 5173 သုံးသည်)

**API server ကို စတင်လို့ မရပါ** -
- Node.js version(node >=10) သင့်တော်မှတ်ချက် စစ်ဆေးပါ
- Port တွေ သုံးဆောင်နေတာရှိမရှိ စစ်ပါ
- သက်ဆိုင်ရာ dependencies ကို `npm install` ဖြင့် ထည့်သွင်းပါ

**Browser extension မတင်နိုင်ပါ** -
- manifest.json ကို မှန်ကန်စွာ ဖောင်းခြင်း
- Browser console error များ စစ်ဆေးပါ
- Browser-specific extension ထည့်သွင်းနည်း လမ်းညွှန်ချက် လိုက်နာပါ

**Python chat project တွင် ပြဿနာရှိပါက** -
- OpenAI package ထည့်သွင်းထားရန်: `pip install openai`
- GITHUB_TOKEN environment variable ထည့်ထားခြင်းရှိ/မရှိစစ်ပါ
- GitHub Models access permission ရှိ/မရှိ စစ်ဆေးပါ

**Docsify က စာရွက် မပေးဆောင်ပါ** -
- docsify-cli ကို global ဖြင့် install လုပ်ပါ: `npm install -g docsify-cli`
- repository root directory မှ run ပါ
- `docs/_sidebar.md` ဖိုင် ရှိ/မရှိ စစ်ဆေးပါ

### Development Environment Tips

- HTML ပရောဂျက်များအတွက် VS Code Live Server extension သုံးပါ
- ESLint နဲ့ Prettier extensions ကို ထည့်သွင်းပါ
- JavaScript debugging အတွက် Browser DevTools သုံးပါ
- Vue ပရောဂျက်များအတွက် Vue DevTools browser extension ထည့်သွင်းပါ

### Performance Considerations

- ဘာသာပြန်ဖိုင် ၅၀ ကျော်ရှိခြင်းကြောင့် full clone များကြီးမားပါသည်
- Content တစ်ခုချင်းလုပ်မှသာ shallow clone သုံးပါ: `git clone --depth 1`
- English content နှင့် အလုပ်လုပ်ခြင်းကာလတွင် ဘာသာပြန်မျှ်းတို့ကို ရှာဖွေရန် မပါပါနှုန်းထားပါ
- Build ပရိုစက်များ ပထမဆုံး run တစ်ခါမှာ နည်းနည်း စိတ်ရှုပ်နိုင်ပါသည် (npm install, Vite build)

## Security Considerations

### Environment Variables

- API အချက်အလက်များကို repo ထဲ မတင်သင့်ပါ
- `.env` ဖိုင်များကို သုံးပါ (`.gitignore` မှာ ထည့်ထားပြီး)
- ပရောဂျက် README များတွင် လိုအပ်သော environment variables ကို စာရင်းပြုစုပါ

### Python Projects

- Virtual environment အသုံးပြုပြီး အလုပ်လုပ်ပါ: `python -m venv venv`
- Dependencies များ ကို အမြဲ ပြင်ဆင်ထားပါ
- GitHub tokens များမှာ လိုအပ်ခဲ့သော permission များသာ ပေးသင့်သည်

### GitHub Models Access

- GitHub Models သုံးရန် Personal Access Tokens (PAT) လိုအပ်သည်
- Tokens များကို environment variables အနေဖြင့် ထိန်းသိမ်းပါ
- Token များကို အထောက်အထားမတင်ပါနှင့်

## Additional Notes

### Target Audience

- အစမှစသင်ယူသူများ
- ကျောင်းသားများနဲ့ ကိုယ်တိုင်မျှုဝေ လေ့လာသူများ
- သင်တန်းဆရာများ ကျောင်းသားများသင်ကြားရာတွင် အသုံးပြုသူများ
- ဝင်ရောက်လေ့လာသူများအတွက် ရောက်ရှိနိုင်ပြီး နည်းပညာတိုးတက်မှု များတိုးတက်စေသည်

### Educational Philosophy

- ပရောဂျက်အခြေခံ သင်ယူမှုနည်းစနစ်
- အကြိမ်ကြိမ် အသိပညာစစ်ဆေးမှုများ (quizzes)
- ကုဒ်ရေးသားခြင်း လက်တွေ့ကျင့်ခန်းများ
- လက်တွေ့ အသုံးချခွင့်များ
- ဖွံ့ဖြိုးတိုးတက်မှု မတိုင်မီ အခြေခံ အစိတ်အပိုင်းများအား အာရုံစိုက်ခြင်း

### Repository Maintenance

- လေ့လာသူများနဲ့ ပံ့ပိုးသူများ ရှိသော ကျန်ရှိမှုရှိသော အသိုင်းအဝိုင်း
- စနစ်တကျ အပ်ဒိတ်လုပ်ခြင်း (dependency နဲ့ အကြောင်းအရာများ)
- Issue များ နဲ့ ဆွေးနွေးပွဲများကို ထိန်းသိမ်းမှု
- ဘာသာပြန်အပ်ဒိတ်ကို GitHub Actions ဖြင့် အလိုအလျောက်လုပ်ဆောင်ခြင်း

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ကို သင်ယူသူများအတွက် အကြံပြုသည်
- အပိုသင်တန်းများ: Generative AI, Data Science, ML, IoT သင်ကြားရေးအစီအစဉ်များ

### Working with Specific Projects

သီးခြား ပရောဂျက်များအတွက် အသေးစိတ် လမ်းညွှန်ချက်များကို ဖတ်ရန် -
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - အတည်ပြုသူပါ Banking အက်ပ်
- `5-browser-extension/README.md` - Browser extension ဖန်တီးခြင်း
- `6-space-game/README.md` - Canvas အခြေခံဂိမ်းဖန်တီးခြင်း
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

ဒီ repo ဟာ သာမန် monorepo မဟုတ်ပေမယ့် အသီးသီး ပရောဂျက်များစွာ ပါဝင်သည် -
- သင်ခန်းစာတွေကို သီးခြားနားထားတယ်
- ပရောဂျက်များမှာ Dependencies မမျှဝေကြဘူး
- တစ်ခုချင်းစီ အပေါ် အခြေခံ၍ အလုပ်လုပ်နိုင်တယ်၊ အခြားတွေကို ထိခိုက်စေမယ် မဟုတ်ဘူး
- စုစုပေါင်း repo ကို clone ဆွဲ၍ အစုလိုက် သင်ကြားမှု အတွေ့အကြုံရရှိနိုင်သည်

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ရှင်းလင်းချက်**:  
ဤစာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှုဖြစ်သည့် [Co-op Translator](https://github.com/Azure/co-op-translator) အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည်တိကျမှုကို ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် တိကျမှုမရှိမှုများ ဖြစ်ပေါ်နိုင်ကြောင်း သတိပြုရန် ကောင်းပါသည်။ မူလစာတမ်းကို မူလဘာသာဖြင့်သာ ထောက်ခံရရှိသင့်သော အရင်းအမြစ်အဖြစ် လက်ခံသင့်ပါသည်။ အရေးကြီးသော သတင်းအချက်အလက်များအတွက် ကျွမ်းကျင်သူ လူသား ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းကြောင့် ဖြစ်ပေါ်နိုင်သည့် မှားယွင်းအနားလွှတ်ခြင်းများ သို့မဟုတ် မှားယွင်းနားလည်မှုများအတွက် ကျွန်ုပ်တို့တာဝန်မထမ်းဆောင်ပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->