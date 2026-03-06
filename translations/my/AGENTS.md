# AGENTS.md

## Project Overview

ဤအရာသည် ဝက်ဘ်ဖွံ့ဖြိုးတိုးတက်မှု အခြေခံများကို စတင္ရင်းနှီးသူများကို သင်ကြားပေးရန် ရည်ရွယ်ထားသော ပညာရေးသင်ရိုးအစီအစဉ်၏ ဂိုဒေါင်ဖြစ်သည်။ သင်ရိုးအစီအစဉ်သည် Microsoft Cloud Advocates များမှ ဖန်တီးထားသော ၁၂ အပတ် ကြာသည့် အဝန်းလည်းပြည့်သည့် သင်ခန်းစာများပါဝင်ပြီး JavaScript၊ CSS နှင့် HTML ကို လက်တွေ့ လေ့ကျင့်ခန်း ၂၄ ခုအပါအဝင်ဖြစ်သည်။

### Key Components

- **ပညာရေး အကြောင်းအရာ**: စီမံကိန်းအခြေခံ မော်ဂျူးများ အတွင်း ဖွဲ့စည်းထားသော ၂၄ ခု သင်ခန်းစာ
- **လက်တွေ့ စီမံကိန်းများ**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, နှင့် AI Chat Assistant
- **အပြန်အလှန် စစ်ဆေးမေးခွန်းများ**: မေးခွန်း ၃ ခုနှင့် ၄၈ ခု (သင်ခန်းစာမတိုင်မှီ/ပြီးနောက်သုံးသပ်မှုများ)
- **ဘာသာစကား များစွာ ပံ့ပိုးမှု**: GitHub Actions မှတစ်ဆင့် ၅၀ ကျော်ဘာသာစကား အလိုအလျောက် ဘာသာပြန်ခြင်း
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI စီမံကိန်းများအတွက်)

### Architecture

- သင်ခန်းစာအခြေခံ ပညာရေးဂိုဒေါင်
- သင်ခန်းစာတိုင်းတွင် README၊ ကုဒ်ဥပမာများနှင့် ဖြေရှင်းနည်းများပါဝင်
- ကွဲပြားသော ဒိုင်ရေးတရီများတွင် သီးခြား စီမံကိန်းများ (quiz-app, သင်ခန်းစာစီမံကိန်းစွန့်)
- GitHub Actions (co-op-translator) ကို အသုံးပြုသည့် ဘာသာပြန်စနစ်
- Docsify မှတဆင့် စာတမ်းများ ပေးပို့ပြီး PDF အဖြစ်ရနိုင်ခြင်း

## Setup Commands

ဤဂိုဒေါင်ကို အဓိကအားဖြင့် ပညာရေးအကြောင်းအရာ အသုံးပြုမှုနှင့် ရည်ရွယ်သည်။ သီးခြား စီမံကိန်းများတွင် အလုပ်လုပ်ရန်:

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
npm run lint       # ESLint ကို chạyပါ
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API ဆာဗာကို စတင်ပါ
npm run lint       # ESLint ကို လုပ်ဆောင်ပါ
npm run format     # Prettier ဖြင့် ဖော်မတ်လုပ်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ဘရောက်ဇာအထူးတိကျသော extension ပေါင်းထည့်နည်းလမ်းညွှန်များကိုလိုက်နာပါ
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# index.html ကို browser တွင်ဖွင့်ပါ သို့မဟုတ် Live Server ကို အသုံးပြုပါ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ပတ်ဝန်းကျင်အပြောင်းအလဲအစားထိုးပြုလုပ်ရန်
python api.py
```

## Development Workflow

### For Content Contributors

1. သင့် GitHub အကောင့်သို့ လှည်းရိုက်ပါ
2. သင့်လှည်းကို ဒေသခံတွင် ကွန်ပျူတာသို့ကလုဏ်းလုပ်ပါ
3. မိမိပြင်ဆင်မည့်အတွက် ဘရင့်အသစ်တစ်ခု ဖန်တီးပါ
4. သင်ခန်းစာအကြောင်းအရာ သို့မဟုတ် ကုဒ်ဥပမာများ ပြုပြင်ပါ
5. သင့်အပြောင်းအလဲများကို သက်ဆိုင်ရာ စီမံကိန်း ဒိုင်ရေးတရီများတွင် စမ်းသပ်ပါ
6. ထောက်ပံ့မှုလမ်းညွှန်များကို လိုက်နာ၍ Pull Request တင်ပါ

### For Learners

1. ဂိုဒေါင်ကို လှည်းရိုက်သို့မဟုတ် ကလုဏ်းလုပ်ပါ
2. သင်ခန်းစာ ဒိုင်ရေးတရီများအား တစိတ်တပိုင်း နဲ့သွားပါ
3. သင်ခန်းစာတိုင်း၏ README ဖိုင်များ ဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မှီ စစ်ဆေးမေးခွန်းများ ဖြေဆိုပါ
5. သင်ခန်းစာဒိုင်ရေးတရီများတွင် ကုဒ်ဥပမာများ အလုပ်လုပ်ပါ
6. အပ်စာများနှင့် စိန်ခေါ်မှုများ ပြီးစီးပါ
7. သင်ခန်းစာပြီးနောက် စစ်ဆေးမေးခွန်းများ ဖြေဆိုပါ

### Live Development

- **စာတမ်းများ**: root မှ `docsify serve` အမိန့် ဖွင့်ပါ (port 3000)
- **Quiz App**: quiz-app ဒိုင်ရေးတရီတွင် `npm run dev` ဖြင့် သက်ဝင်အောင်လုပ်ပါ
- **စီမံကိန်းများ**: HTML စီမံကိန်းများအတွက် VS Code Live Server extension အသုံးပြုပါ
- **API စီမံကိန်းများ**: သက်ဆိုင်ရာ API ဒိုင်ရေးတရီတွင် `npm start` ပြုလုပ်ပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ကုဒ်ပုံစံပြဿနာများကိုစစ်ဆေးပါ
npm run build      # ဆောက်လုပ်မှုအောင်မြင်မှုကိုအတည်ပြုပါ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုဒ်ပုံစံပြဿနာများကိုစစ်ဆေးပါ
node server.js     # ပြတ်မှုများမရှိဘဲ ဆာဗာစတင်မှုကိုအတည်ပြုပါ
```

### General Testing Approach

- ဤသည်မှာ စုံလုံသော အလိုအလျောက် စမ်းသပ်မှုများ မပါဝင်သည့် ပညာရေးဂိုဒေါင်ဖြစ်သည်
- လက်တွေ့စမ်းသပ်မှုတွင် အာရုံစိုက်ရန်
  - ကုဒ်ဥပမာများ အမှားမရှိပြေးနိုင်ခြင်း
  - စာတမ်း တွင် လင့်ခ်များ သင့်တော်စွာ လည်ပတ်ခြင်း
  - စီမံကိန်း အောင်မြင်စွာ တည်ဆောက်ခြင်း
  - ဥပမာများသည် အကောင်းဆုံး လေ့လာသင်ယူနည်းများကို လိုက်နာခြင်း

### Pre-submission Checks

- package.json ပါဝင်သည့် ဒိုင်ရေးတရီများတွင် `npm run lint` အလုပ်လုပ်ပါ
- markdown link များ သေချာစွာ စစ်ဆေးပါ
- ကုဒ်ဥပမာများအား browser သို့မဟုတ် Node.js တွင် စမ်းသပ်ပါ
- ဘာသာပြန်မှုသိမ်းထားမှု တိကျမှန်ကန်ကြောင်း စစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- ယနေ့ခေတ် ES6+ စတိုင်များ အသုံးပြုပါ
- စီမံကိန်းများတွင် ပေးထားသော အခြေခံ ESLint ဖိုင်များကို လိုက်နာပါ
- ပညာရေးအတွက် မျက်မှောက်နားလည်မှုလွယ်ကူရန် သေချာသည့် အမျိုးအမည်များ အသုံးပြုပါ
- သင်ယူလိုသူများအတွက် အကြောင်းပြုချက်များ ထည့်သွင်းရေးသားပါ
- Prettier ဖြင့် ပုံစံချိန်ညှိထားသောနေရာများတွင် အသုံးပြုပါ

### HTML/CSS

- Semantic HTML5 အကြောင်းအရာအသုံးပြုပါ
- ရွေ့လျားတုံ့ပြန်မှု ဒီဇိုင်း ကို ထည့်သွင်းပါ
- ကလပ်အမည် များ ဖေါ်ပြပုံကွက်ကျစွာရေးသားပါ
- CSS နည်းပညာများကို သင်ယူသူများအတွက် ရှင်းလင်းဖေါ်ပြမှု များ ထည့်ပါ

### Python

- PEP 8 စတိုင် လမ်းညွှန်များ လိုက်နာပါ
- ပညာရေးအတွက် သေချာရှင်းလင်းသော ကုဒ်ဥပမာများ
- သင်ယူမှုအတွက် အထောက်အကူဖြစ်စေရန် Type hints အသုံးပြုပါ

### Markdown Documentation

- ခေါင်းစဉ်များ ဖော်ပြမှု တိကျရှင်းလင်းမှု
- ဘာသာပြန်ဖြစ်သည့် ကုဒ်ဘလော့များနှင့် ဘာသာဖော်ပြမှု
- အပိုဆောင်း ရင်းမြစ်များအား လင့်ခ်များပါဝင်သည်
- `images/` ဒိုင်ရေးတရီပြည့်စုံအပါအဝင် ပုံများနှင့် ရုပ်ပုံများ
- အားလုံးလက်လှမ်းမီစေရန် ဗဟိုသတ်မှတ် Alt texts များ

### File Organization

- သင်ခန်းစာများကို တန်းတူ နေရာချထားမှု (1-getting-started-lessons, 2-js-basics, စသည်)
- စီမံကိန်းတိုင်းတွင် `solution/` နှင့် မကြာခဏ `start/` သို့မဟုတ် `your-work/` ဒိုင်ရေးတရီများရှိသည်
- သင်ခန်းစာအလိုက် `images/` ဖိုလ်ဒါထဲတွင် ပုံများ သိုလှောင်ထားခြင်း
- ဘာသာပြန်များကို `translations/{language-code}/` ဖိုလ်ဒါတွင် သိမ်းဆည်းထားခြင်း

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app သည် Azure Static Web Apps များတွင် တည်ဆောက်ရန် စံချိန်တင်ထားသည်-

```bash
cd quiz-app
npm run build      # dist/ ဖိုလဒါကို ဖန်တီးသည်
# main တွင် push လုပ်သည့်အခါ GitHub Actions workflow ဖြင့် Deploy လုပ်သည်
```

Azure Static Web Apps စနစ်ဖောင့်ကွက်များ-
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကို ထည့်သွင်းပါ
npm run convert               # docs မှ PDF ကို ဖန်တီးပါ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို စုစုပေါင်း ထည့်သွင်းပါ
docsify serve                 # localhost:3000 တွင် ဝန်ဆောင်မှုပေးပါ
```

### Project-specific Builds

စီမံကိန်းတိုင်းတွင် ကိုယ်ပိုင် တည်ဆောက်မှု လုပ်ငန်းစဉ်များ ရှိနိုင်သည်-
- Vue စီမံကိန်းများ: `npm run build` ဖြင့် ထုတ်လုပ်မှု bundle များ ပြုလုပ်ခြင်း
- Static စီမံကိန်းများ: တည်ဆောက်မှုပြုလုပ်မှု လိုအပ်မှု မရှိပါ၊ ဖိုင်များကို တိုက်ရိုက် ဝန်ဆောင်မှုပေးခြင်း

## Pull Request Guidelines

### Title Format

ပြောင်းလဲမှု နေရာအတိုင်း ဖြည့်သွင်းဖေါ်ပြရန်-
- `[Quiz-app] သင်ခန်းစာ X အတွက် Quiz အသစ် ထည့်ရန်`
- `[Lesson-3] Terrarium စီမံကိန်းတွင် အမှားစာလုံးပြင်ဆင်ခြင်း`
- `[Translation] သင်ခန်းစာ ၅ အတွက် စပိန်ဘာသာပြန်ထည့်ခြင်း`
- `[Docs] Setup လမ်းညွှန်ချက်များ ပြင်ဆင်ခြင်း`

### Required Checks

PR တင်ပြီးမတိုင်မီ-

1. **ကုဒ်အရည်အသွေး**:
   - သက်ဆိုင်ရာ စီမံကိန်း ဒိုင်ရေးတရီတွင် `npm run lint` ကို အသုံးပြု၍ အမှားများ ဖော်ထုတ်ရန်
   - လုံးလုံးမကျန် အမှား နှင့် သတိပေးချက် များ ပြင်ဆင်ပါ

2. **တည်ဆောက်မှု စစ်ဆေးခြင်း**:
   - `npm run build` (လိုအပ်ပါက) အလုပ်လုပ်၍ အမှားမရှိစေရန်

3. **လင့်ခ် စစ်ဆေးမှု**:
   - markdown link များအားလုံး ရှင်းလင်းမှန်ကန်စွာ လည်ပတ်ခြင်း
   - ဓာတ်ပုံ နှင့် ရုပ်ပုံများ ရောက်ရှိမှု

4. **အကြောင်းအရာ ပြန်လည် သုံးသပ်ခြင်း**:
   - စကားလုံးမှား၊ သဒ္ဒါမှားများကို စစ်ချက်ပေးခြင်း
   - ကုဒ်ဥပမာများ သင်ယူရန်တိကျမှန်ကန်စွာ ရှိခြင်း
   - ဘာသာပြန်များသည် မူလ အဓိပ္ပါယ်ကို ထိန်းသိမ်းထားခြင်း

### Contribution Requirements

- Microsoft CLA ကို သဘောတူပါ (PR ပထမဆုံးပြုလုပ်ချိန် တွင် အလိုအလျောက် စစ်ဆေးမည်)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) လိုက်နာပါ
- အသေးစိတ် လမ်းညွှန်ချက်များအတွက် [CONTRIBUTING.md](./CONTRIBUTING.md) ကို ကြည့်ပါ
- PR ဖေါ်ပြချက်တွင် လိုအပ်ပါက ရှေ့ပြေး ဥပဒေအမှတ်များကို ထည့်သွင်းပါ

### Review Process

- PR များသည် ပြုပြင်သူများနှင့် မိသားစုအသိုင်းအဝိုင်း အကြား ကြည့်သုံးစစ်ဆေးခြင်း
- ပညာရေး ရည်ရွယ်ချက် ဦးစားပေး စစ်ဆေးခြင်း
- ကုဒ်ဥပမာများသည် လောလောဆယ် အကောင်းဆုံး လေ့လာသင်ယူနည်းများနှင့် ကိုက်ညီစေရန်
- ဘာသာပြန်အရည်အသွေးနှင့် ယဉ်ကျေးမှု သင်္ကေတတပ်ဖွဲ့မှု ရှိအောင် စစ်ဆေးခြင်း

## Translation System

### Automated Translation

- GitHub Actions တွင် နေရာယူထားသည့် co-op-translator workflow ကို အသုံးပြုသည်
- ၅၀ ကျော်ဘာသာစကားသို့ အလိုအလျောက် ဘာသာပြန်သည်
- မူရင်းဖိုင်များသည် မူလ ဒိုင်ရေးတရီများတွင်
- ဘာသာပြန်ထားသောဖိုင်များသည် `translations/{language-code}/` တွင်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` တွင် ဖိုင် ရှာပါ
2. ဖွဲ့စည်းပုံကို ထိန်းသိမ်းပြီး တိုးတက်အောင် ပြုပြင်ပါ
3. ကုဒ်ဥပမာများ အသုံးပြုနိုင်မှု ရှိသည်ကို သေချာစေရန်
4. ဒေသဆိုင်ရာ Quiz အကြောင်းအရာ စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန် ဖိုင်များတွင် metadata ခေါင်းစဉ်ပါရှိသည်-
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

**Quiz app မတက်အောင် ရှုပ်ထွေးမှုများ**:
- Node.js ဗားရှင်း (v14+ အကြံပြု)
- `node_modules` နှင့် `package-lock.json` ဖိုင်များ ဖျက်ပြီး `npm install` ပြန်လည်ပြုလုပ်ပါ
- Vite သည် အခြား port 5173 ကိုသုံးပြီး ရပ်တန့်မှုရှိမရှိ စစ်ဆေးပါ

**API server မစခင်**:
- Node.js ဗားရှင်း (node >=10) ဖြစ်ကြောင်း အတည်ပြုပါ
- Port လုပ်ဆောင်မှု ရှိ/မရှိ စစ်ပါ
- `npm install` ဖြင့် အားလုံး dependency များထည့်သွင်းထားခြင်း

**Browser extension မတက်တာ**:
- manifest.json အသေးစိတ် ပုံစံ မှန်ကန်မှု စစ်ဆေးပါ
- Browser console တွင် အမှား ရှိ မရှိ စစ်ပါ
- Browser-specific extension installation လမ်းညွှန်ချက်များ လိုက်နာပါ

**Python chat project ပြဿနာများ**:
- OpenAI package ကို ထည့်သွင်းထားခြင်း - `pip install openai`
- GITHUB_TOKEN environment variable မှန်ကန်စွာ သတ်မှတ်ထားခြင်း
- GitHub Models ၏ လုပ်ဆောင်ခွင့် ရှိစေရန် စစ်ဆေးပါ

**Docsify docs မပေးဆောင်တာ**:
- docsify-cli ကို ကမ္ဘာလုံးဆိုင်ရာ ထည့်သွင်းထားရန် - `npm install -g docsify-cli`
- ဂိုဒေါင် root ဒိုင်ရေးတရီမှ မိမိ အမိန့်ပြုလုပ်ပါ
- `docs/_sidebar.md` ရှိ/မရှိ စစ်ဆေးပါ

### Development Environment Tips

- VS Code Live Server extension ဖြင့် HTML စီမံကိန်းများ အတွက် အသုံးပြုပါ
- ESLint နှင့် Prettier extension များ ထည့်သွင်းပါ
- Browser DevTools ဖြင့် JavaScript နဲ့အတူ debugging လုပ်ပါ
- Vue စီမံကိန်းများအတွက် Vue DevTools browser extension ထည့်သွင်းပါ

### Performance Considerations

- ဘာသာပြန်ဖိုင် အရေအတွက် မာနကျွန်းကြီး ဖြစ်လို့ (၅၀+ ဘာသာစကား) full clone များ ကြီးတယ်
- အချက်အလက်များပဲ အလုပ်လုပ်မည်ဆို shallow clone ကို အသုံးပါ - `git clone --depth 1`
- အင်္ဂလိပ်အကြောင်းအရာတွင် လုပ်နေစဉ် ဘာသာပြန်များကို ရှာဖွေမှုမှ ထုတ်ပယ်ပါ
- ပထမဆုံးအသုံးပြုမှုတွင် build လုပ်ခြင်းဟာ ကြာမြင့်နိုင်သည် (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys ကို ဂိုဒေါင်ထဲ မထည့်သွင်းကြပါနှင့်
- `.env` ဖိုင်များကို အသုံးပြုပါ (.gitignore ထဲတွင် ပါရှိပြီး)
- စီမံကိန်း README များတွင် လိုအပ်သည့် Environment Variables များ ဖော်ပြပါ

### Python Projects

- virtual environments အသုံးပြုပါ - `python -m venv venv`
- dependency များကို အသစ်တင် ကျင်းပပေးပါ
- GitHub tokens များသည် လိုအပ်သော မူလ ခွင့်ပြုချက်များသာရှိစေရန်

### GitHub Models Access

- GitHub Models အတွက် Personal Access Tokens (PAT) လိုအပ်သည်
- ကုဒ်များကို environment variables အဖြစ် သိမ်းဆည်းထားပါ
- Tokens သို့မဟုတ် လျှို့ဝှက်ချက်များကို ရိုးရိုး GitHub repo ထဲ မသိမ်းပါနှင့်

## Additional Notes

### Target Audience

- ဝက်ဘ်ဖွံ့ဖြိုးမှု စပြိုင်သူ အသစ်များအတွက်
- ကျောင်းသားများနှင့် ကိုယ်တိုင် သင်ယူလိုသူများ
- သင်တန်းဆရာများ သင်တန်းတွင် အသုံးပြုရန်
- မည်သူ့အတွက်မျှ ဝင်ရောက်လွယ်ကူစေနိုင်တယ်၊ တန်ဖိုးရှိစွာ ကျွမ်းကျင်မှု တိုးတတ်အောင် ဆောင်ရွက်ခြင်း

### Educational Philosophy

- စီမံကိန်းအခြေခံ သင်ယူမှု နည်းစနစ်
- မကြာခဏ အသိပညာ စစ်ဆေးမှုများ (quiz များ)
- လက်တွေ့ သင်ကြားရေး ရေးသားကိုယ်တိုင်လုပ်ခြင်း
- အမှန်တကယ် အသုံးချနိုင်သော ဥပမာများ
- Framework များ မသတ်မှတ်ခင် အခြေခံကို အလေးထား ဆောင်ရွက်ခြင်း

### Repository Maintenance

- လေ့လာသူများနှင့် ပံ့ပိုးသူများ၏ လှုပ်ရှားမှု မြင့်မားခြင်း
- dependency များနှင့် အကြောင်းအရာများအား ပုံမှန် အပ်ဒိတ်လုပ်ခြင်း
- ပြဿနာများနှင့် ဆွေးနွေးချက်များကို အသိအမှတ်ပြုသူများက လိုက်ပါစောင့်ကြည့်ခြင်း
- ဘာသာပြန်အပ်ဒိတ်များ ကို GitHub Actions အလိုအလျောက် ပြုလုပ်ခြင်း

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ကို သင်ယူသူများအတွက် အကြံပြုပါသည်
- အပိုသင်တန်းများ: Generative AI, Data Science, ML, IoT သင်ရိုးအစီအစဉ်များ ရရှိနိုင်သည်

### Working with Specific Projects

တစ်ဦးချင်းစီ စီမံကိန်းများအတွက် အသေးစိတ် ဖော်ပြချက်များကို README ဖိုင်များတွင် ကြည့်ရှုနိုင်ပါသည်-
- `quiz-app/README.md` - Vue 3 quiz အပ်လီကေးရှင်း
- `7-bank-project/README.md` - အခြေခံအတည်ပြုမှု ပါဝင်သည့် ဘဏ်လုပ်ငန်း အက်ပ်
- `5-browser-extension/README.md` - Browser extension ဖန်တီးခြင်း
- `6-space-game/README.md` - ကမ်းဗတ်အခြေခံ ဂိမ်းဖန်တီးခြင်း
- `9-chat-project/README.md` - AI စကားပြော အကူအညီ နှင့် ဆော့ဖ်ဝဲ

### Monorepo Structure

ယခု ဂိုဒေါင်သည် စံထုံးမရှိသော်လည်း သီးခြား စီမံကိန်းများများ ပါဝင်သည်-
- သင်ခန်းစာ တစ်ခုချင်းစီသည် ကိုယ်ပိုင် အပိုင်းဖြစ်သည်
- စီမံကိန်းများက dependency များ မမျှဝေပဲ သီးခြားလုပ်ဆောင်ထားသည်
- တစ်စီတစ်ရာ အပေါ် မသက်ရောက်စေရန် သီးခြားစီမံကိန်းများကို လုပ်ဆောင်နိုင်သည်
- အပြည့်အစုံသော သင်ရိုးကို အတွေ့အကြုံယူရန် ဂိုဒေါင်တခုလုံးကို clone လုပ်ပါ။

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**သတိပြုချက်**  
ဤစာရွက်ကို AI ဘာသာပြန်ခြင်းဆော့ဖ်ဝဲဖြစ်သော [Co-op Translator](https://github.com/Azure/co-op-translator) ဖြင့် ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည်တိကျမှန်ကန်မှုအတွက် ကြိုးပမ်းနေသော်လည်း အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မှားယွင်းချက်များ ရှိနိုင်သည်ကို သိရှိထားရန် မေတ္တာရပ်ခံအပ်ပါသည်။ မူရင်းစာရွက်ကို မူလဘာသာဖြင့်သာ မှန်ကန်သည့် မူရင်းအရင်းအမြစ်အဖြစ်ယူဆသင့်ပါသည်။ အရေးကြီးသည့် သတင်းအချက်အလက်များအတွက် ကျွမ်းကျင်သော လူသားဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်ချက်ကို အသုံးပြုမှုကြောင့် ဖြစ်ပေါ်လာသော မည်သည့် ပဋိပက္ခ သို့မဟုတ် မှားနေမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မကောက်ခံပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->