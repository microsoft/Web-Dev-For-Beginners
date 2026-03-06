# AGENTS.md

## Project Overview

ဤသည်မှာ ဝက်ဘ်ဖွံ့ဖြိုးတိုးတက်မှု အခြေခံများကို စတင်သူများအား သင်ကြားပေးရန် အတွက် ပညာပေး သင်ရိုးညွှန်းတမ်း စုစည်းမှု ဖြစ်သည်။ သင်ရိုးညွှန်းတမ်းသည် Microsoft Cloud Advocates မှ တီထွင်ထားသော ၁၂ ပတ်ကြာ သင်တန်း အပြည့်အစုံဖြစ်ပြီး၊ JavaScript၊ CSS နှင့် HTML を ကိုက်ညီသော လက်တွေ့ သင်ခန်းစာ ၂၄ ခု ပါဝင်သည်။

### Key Components

- **ပညာရေး အကြောင်းအရာများ**: ပရောဂျက် အခြေပြု မော်ဂျူး များ အပြည့်အစုံဖြင့် စီစဉ်ထားသော သင်ခန်းစာ ၂၄ ခု
- **လက်တွေ့ ပရောဂျက်များ**: Terrarium၊ Typing Game၊ Browser Extension၊ Space Game၊ Banking App၊ Code Editor နှင့် AI Chat Assistant
- **အပြန်အလှန် ဖြေဆိုမေးခွန်းများ**: မေးခွန်း ၃ မျိုး ပါဝင်သည့် ၄၈ ပတ်လည် စစ်တမ်းများ (သင်ခန်းစာ မတိုင်မီ/ပြီးနောက် အကဲဖြတ်ရန်)
- **ဘာသာစကားစုံ ထောက်ခံမှု**: GitHub Actions မှ တက်အလိုက် ဘာသာစကား ၅၀ ကျော်အတွက် အလိုအလျှောက် ဘာသာပြန်ချက်များ
- **နည်းပညာများ**: HTML၊ CSS၊ JavaScript၊ Vue.js 3၊ Vite၊ Node.js၊ Express၊ Python (AI ပရောဂျက်များအတွက်)

### Architecture

- သင်ခန်းစာအခြေပြု ပညာရေး စုစည်းမှု
- သင်ခန်းစာ တစ်ခုချင်းလျှင် README၊ ကုဒ်နမူနာနှင့် ဖြေရှင်းချက်များ ပါရှိသည်
- အခြားပရောဂျက်များကို သီးသန့်လမ်းကြောင်းများတွင် ထားရှိသည် (quiz-app နှင့် သင်ခန်းစာ ပရောဂျက်များအတော်များများ)
- GitHub Actions ဖြင့် ဘာသာပြန်စနစ် (co-op-translator)
- Docsify မှ တင်သွင်းခဲ့သော စာရွက်စာတမ်းများကို PDF အဖြစ်လည်း ရနိုင်သည်

## Setup Commands

ဤ repository သည် မူလက ပညာရေး အကြောင်းအရာ အသုံးပြုမှု အတွက် ဖြစ်သည်။ အထူးပြု ပရောဂျက်များနှင့် တွဲဖက် အသုံးပြုရန်အတွက်:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ဖွံ့ဖြိုးတိုးတက်မှု ဆာဗာ စတင်ပါ
npm run build      # ထုတ်လုပ်မှုပိုင်းအတွက် တည်ဆောက်ပါ
npm run lint       # ESLint ကို အလုပ်လုပ်ပါ
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API ဆာဗာ စတင်ပါ
npm run lint       # ESLint ကို လုပ်ဆောင်ပါ
npm run format     # Prettier ဖြင့် အမျိုးအစား ပြုပြင်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# Browser အမျိုးအစားကို သတ်မှတ်သည့် extension တွေကို တင်သွင်းနည်းကို လိုက်နာပါ။
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# browser တွင် index.html ကိုဖွင့်ပါ သို့မဟုတ် Live Server ကိုအသုံးပြုပါ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ပတ်ဝန်းကျင်အပြောင်းအလဲကို သတ်မှတ်ပါ
python api.py
```

## Development Workflow

### For Content Contributors

1. **တင်သွင်းသူအနေဖြင့် repository ကို fork ပြုလုပ်ပါ**
2. **ထို fork ကို လုပ်ငန်းစဉ်တစ်ခုအနေဖြင့် clone ပြုလုပ်ပါ**
3. **ပြောင်းလဲမှုများအတွက် အဆင့်အသစ် တည်ဆောက်ပါ**
4. သင်ခန်းစာ အကြောင်းအရာ သို့မဟုတ် ကုဒ် နမူနာများ ပြင်ဆင်ပါ
5. သက်ဆိုင်ရာ ပရောဂျက် လမ်းကြောင်းများတွင် ကုဒ်ပြင်ဆင်မှုများ စမ်းသပ်ပါ
6. ဆောင်ရွက်မှု လမ်းညွှန်ချက်များနှင့်ကိုက်ညီစွာ pull request တင်ပြပါ

### For Learners

1. Repository ကို fork သို့ clone ပြုလုပ်ပါ
2. သင်ခန်းစာ လမ်းကြောင်းများကို ဆက်တိုက် သွားပါ
3. သင်ခန်းစာ တစ်ခုပြီးတစ်ခု README ဖိုင်များ ဖတ်ရှုပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မီ စစ်တမ်းများ ဖြေဆိုပါ
5. သင်ခန်းစာ ဖိုလ်ဒါများတွင် ကုဒ်နမူနာများ ဖြေရှင်းပါ
6. အပ်ဒိတ်များနှင့် စိန်ခေါ်မှုများ အကောင်အထည်ဖော်ပါ
7. သင်ခန်းစာပြီးနောက် စစ်တမ်းများ ဖြေဆိုပါ

### Live Development

- **စာရွက်စာတမ်းများ**: မွမ်းမံရေးရာ root တွင် `docsify serve` လုပ်ပါ (port 3000)
- **Quiz App**: quiz-app လမ်းကြောင်း၌ `npm run dev` လုပ်ပါ
- **ပရောဂျက်များ**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension ကို အသုံးပြုပါ
- **API ပရောဂျက်များ**: အသီးသီး API လမ်းကြောင်းများတွင် `npm start` လုပ်ပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ကုဒ်စတိုင်ပြဿနာများကို စစ်ဆေးပါ
npm run build      # ဆောက်လုပ်မှု အောင်မြင်မှုကို စစ်ဆေးပါ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုတ်စံနှုန်းပြဿနာများကို စစ်ဆေးပါ
node server.js     # အမှားမရှိဘဲ ဆာဗာစတင်သည်ကို စစ်ဆေးပါ
```

### General Testing Approach

- ဤသည် ပညာရေး စုဆောင်းမှုဖြစ်ကာ အလိုအလျောက် စမ်းသပ်မှု မပြည့်စုံပါ
- လက်လုပ်စမ်းသပ်မှု အများအားဖြင့် အောက်ပါများကို ဦးတည်သည် -
  - ကုဒ်နမူနာများ အမှားကင်းစွာ လည်ပတ်နိုင်ခြင်း
  - စာရွက်စာတမ်းများရှိ link များ မှန်ကန်မှုရှိခြင်း
  - ပရောဂျက် များ အောင်မြင်စွာ တည်ဆောက်ခြင်း
  - နမူနာများသည် ထိရောက်ဆုံးနည်းလမ်းများကို လိုက်နာခြင်း

### Pre-submission Checks

- package.json ပါဝင်သည့် လမ်းကြောင်းများတွင် `npm run lint` လုပ်ပါ
- markdown link များ မှန်ကန်ကြောင်း စစ်ဆေးပါ
- ဘရိုက်ဇာသို့ node.js တွင် ကုဒ်နမူနာများ စမ်းသပ်ပါ
- ဘာသာပြန်ချက်များ၏ ဖွဲ့စည်းမှု ကို ထိန်းသိမ်းထားမှုကို စစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- အခေတ်သစ် ES6+ စနစ် အသုံးပြုပါ
- ပရောဂျက်များတွင် ပါဝင်သည့် standard ESLint ဖိုင်များကို လိုက်နာပါ
- ပညာရေးအတွက် သိသာသော variable နှင့် function နာမည်များ အသုံးပြုပါ
- သင်ယူသူများအတွက် လေ့လာရန် မှတ်ချက်များ ထည့်သွင်းပါ
- Prettier ဖြင့် ဖော်မတ်လုပ်ခြင်း

### HTML/CSS

- Semantic HTML5 element များ အသုံးပြုပါ
- ပြန်လည်တုံ့ပြန်မှု ဒီဇိုင်း အရေးပါသည်
- သန့်ရှင်းသော class နာမည်ပုံစံများ
- CSS နည်းလမ်းများကို သင်ယူသူများအတွက် ရှင်းလင်း ဖော်ပြထားသော မှတ်ချက်များ

### Python

- PEP 8 စတိုင်လ် လမ်းညွှန်ချက်များ
- ပညာရေးအတွက် ရှင်းလင်းသော ကုဒ် နမူနာများ
- သင်ယူမှု အတွက် အချို့နေရာများတွင် type hints ထည့်သွင်းထားသည်

### Markdown Documentation

- အကြောင်းအရာ ဖော်ပြရာတွင် ခေါင်းစဉ်သွေးကြောင်း ထားရှိခြင်း
- ဘာသာပြန်မှု ရှိသော code block များ
- နောက်ထပ် အရင်းအမြစ်များ သို့လင့်ခ်များ
- `images/` ဖိုလ်ဒါများတွင် ရှုပ်ထွေးချက်နှင့် ပုံများ
- သက်ဆိုင်ရာ Accessiblity အတွက် ပုံများ၏ Alt စာသားများ

### File Organization

- သင်ခန်းစာများကို နံပါတ်ခွဲ စီစဉ်ထားသည် (1-getting-started-lessons, 2-js-basics, စသည်)
- ပရောဂျက် တစ်ခုချင်းစီတွင် `solution/` နှင့် မကြာခဏ `start/` သို့မဟုတ် `your-work/` ဖိုလ်ဒါများ ပါဝင်သည်
- သင်ခန်းစာ အလိုက် `images/` ဖိုလ်ဒါများတွင် ပုံများ သိမ်းဆည်းထားသည်
- ဘာသာပြန်ချက်များကို `translations/{language-code}/` ဖိုလ်ဒါများတွင် ထားရှိသည်

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ကို Azure Static Web Apps တွင် တင်ရန် စတင်ပြင်ဆင်ထားသည်:

```bash
cd quiz-app
npm run build      # dist/ ဖိုလ်ဒါကို ဖန်တီးသည်
# main သို့ ပို့ပြီးနောက် GitHub Actions workflow ဖြင့် တပ်ဆင်သည်
```

Azure Static Web Apps စနစ်:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကို ထည့်သွင်းပါ
npm run convert               # docs မှ PDF ဖိုင် ပေါ်ထွက်ပါ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို ထိပ်တန်းမှာ ထည့်သွင်းပါ
docsify serve                 # localhost:3000 တွင် ဝန်ဆောင်မှု ပေးပါ
```

### Project-specific Builds

ပရောဂျက်တိုင်းမှာ ကိုယ်ပိုင် build လုပ်စနစ် ရှိနိုင်သည် -
- Vue ပရောဂျက်များ: `npm run build` ဖြင့် production bundle များ ဖန်တီးသည်
- Static ပရောဂျက်များ: build လုပ်စဉ် မရှိ၊ ဖိုင်များကို တိုက်ရိုက် ပေးဆောင်သည်

## Pull Request Guidelines

### Title Format

ပြောင်းလဲမှု ရှိသော နေရာကို ပြောကြားသော ပြတ်သားရှင်းလင်းသော ခေါင်းစဉ်အသုံးပြုပါ:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

PR တင်ပြမည်မဆို အောက်ပါများကို အရင်စစ်ဆေးရန် -

1. **ကုဒ်အရည်အသွေး**:
   - သက်ဆိုင်ရာ ပရောဂျက် လမ်းကြောင်းများတွင် `npm run lint` လုပ်ပါ
   - အမှားများ နှင့် သတိပေးချက်များကို ပြင်ဆင်ပါ

2. **Build စစ်ဆေးခြင်း**:
   - လိုအပ်လျှင် `npm run build` လုပ်ပါ
   - Build အမှား မရှိကြောင်း သေချာပါစေ

3. **Link များ စစ်ဆေးခြင်း**:
   - markdown link များအားလုံး စစ်ဆေးပါ
   - ပုံ ရှိ/မရှိကို စစ်ဆေးပါ

4. **အကြောင်းအရာ သုံးသပ်ခြင်း**:
   - သရုပ်ဖော်ချက် နှင့် သဒ္ဒါ ပြင်ဆင်ပါ
   - ကုဒ်နမူနာများမှန်ကန်၍ ပညာရေး အတွက် အသုံးဝင်မှုရှိကြောင်း သေချာပါစေ
   - ဘာသာပြန်ချက် မူလ အနက်ရည်ကို ထိန်းသိမ်းထားသည်

### Contribution Requirements

- Microsoft CLA ကို သဘောတူမှတ်ချက် ပြုလုပ်ထားရမည် (ပထမဆုံး PR မှာ အလိုအလျောက် စစ်ဆေးသည်)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ကို လိုက်နာရမည်
- အသေးစိတ် လမ်းညွှန်ချက်များအတွက် [CONTRIBUTING.md](./CONTRIBUTING.md) ကို ကြည့်ရှုပါ
- PR ဖော်ပြချက်တွင် issue နံပါတ်များ ပါဝင်မှု ရှိသင့်သည်

### Review Process

- PR များကို ထိန်းသိမ်းသူများနှင့် အသိုင်းအဝိုင်းမှ ပြန်လည် သုံးသပ်ကြမည်
- ပညာရေးအစဉ့်ကြေညာမှုကို ဦးစားပေးသည်
- ကုဒ်နမူနာများမှာ ခေတ်မီပြီး အကောင်းဆုံး နည်းလုပ်ပုံများအတိုင်း ဖြစ်သင့်သည်
- ဘာသာပြန်ချက်များကို တိကျမှုနှင့် ယဉ်ကျေးမှုသေချာမှုအရ သုံးသပ်သည်

## Translation System

### Automated Translation

- GitHub Actions အား co-op-translator workflow ဖြင့် အသုံးပြုသည်
- ၅၀ ကျော် ဘာသာစကားများကို အလိုအလျောက် ဘာသာပြန်သည်
- မူလ ဖိုင်များသည် ပဋိညာဉ် လမ်းကြောင်းများတွင် ရှိသည်
- ဘာသာပြန်ထုတ်ဖိုင်များကို `translations/{language-code}/` တွင် သိမ်းဆည်းသည်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` ထဲမှ ဖိုင်ကို ရှာဖွေပါ
2. ဖွဲ့စည်းမှုကို ထိန်းသိမ်း၍ တိုးတက်အောင် ပြင်ဆင်ပါ
3. ကုဒ် နမူနာများ လုပ်ငန်းမှန်ကြောင်း သေချာပါစေ
4. ဒေသိယ quiz အကြောင်းအရာများကို စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန် ဖိုင်များတွင် မီတာဒေတာ ခေါင်းစီးများ ပါဝင်သည် -
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

**Quiz app မစတင်နိုင်ခြင်း**:
- Node.js ဗားရှင်း (v14+) ဖြစ်ကြောင်း စစ်ဆေးပါ
- `node_modules` နှင့် `package-lock.json` ကို ဖျက်ပြီး `npm install` ပြန်မှတ်ပါ
- port တွေအပြိုင်အဆိုင် ဖြစ်ခြင်းကို စစ်ဆေးပါ (Vite သည် default အနေနဲ့ port 5173 ကို အသုံးပြုသည်)

**API စာပို့ဆာဗာ မစတင်နိုင်ခြင်း**:
- Node.js ဗားရှင်း လုံလောက်သည် (node >=10) ခုနှစ် ဖြစ်ကြောင်း ချက်ချင်း စစ်ဆေးပါ
- port မဟုတ်မဖြစ် ဘယ်သူမှ အသုံးမပြုနေပါစေ
- ကျန်ရှိသော မလိုက်လျောညီထွေ dependency များကို `npm install` ဖြင့် ထည့်သွင်းပါ

**Browser extension မလုပ်ဆောင်နိုင်ခြင်း**:
- manifest.json သည် မှန်ကန်စွာ ဖော်ပြထားသည်ကို စစ်ဆေးပါ
- browser console မှ အမှားများ စစ်ဆေးပါ
- browser အသီးသီး၏ extension 설치 လမ်းညွှန်ချက်များကို လိုက်နာပါ

**Python chat project ပြဿနာများ**:
- OpenAI package ထည့်သွင်းထားသည်: `pip install openai`
- GITHUB_TOKEN environment variable သတ်မှတ်ထားရန်
- GitHub Models access သတ်မှတ်ချက်များ စစ်ဆေးပါ

**Docsify မှ စာရွက်စာတမ်း မပြသခြင်း**:
- docsify-cli ကို ကမ္ဘာ့အဆင့်တွင် ထည့်သွင်းထားရန်: `npm install -g docsify-cli`
- repository root directory မှ run လုပ်ပါ
- `docs/_sidebar.md` ဖိုင် ရှိမှုကို ကောက်ချက်ထုတ်ပါ

### Development Environment Tips

- HTML ပရောဂျက်များအတွက် VS Code Live Server extension အသုံးပြုပါ
- ESLint နှင့် Prettier extension များ ထည့်သွင်းပါ
- JavaScript debugging အတွက် browser DevTools အသုံးပြုပါ
- Vue ပရောဂျက်များအတွက် Vue DevTools browser extension ထည့်သွင်းပါ

### Performance Considerations

- ဘာသာပြန်ဖိုင် အရေအတွက်များသောကြောင့် (ဘာသာစကား ၅၀+), clone အပြည့်အဝ ကြီးမားလိမ့်မည်
- မကြီးမားသော clone အတွက် `git clone --depth 1` ကို အသုံးပြုပါ
- English content အတွက် လုပ်ရာတွင် ဘာသာပြန်ချက်များကို ရှာဖွေမှုမှ ရုပ်သိမ်းပါ
- ပထမဆုံးစတင် run တွင် build လုပ်ငန်းများ နှေးကွေးနိုင်သည် (npm install, Vite build)

## Security Considerations

### Environment Variables

- API key များကို repository ထဲတွင် မသိမ်းဆည်းရ။
- `.env` ဖိုင်များ အသုံးပြုပါ (.gitignore တွင် ကျော်လွန်ထားပြီး)
- လိုအပ်သော environment variable များကို project README များတွင် ဖော်ပြထားသည်

### Python Projects

- virtual environments အသုံးပြုပါ: `python -m venv venv`
- dependency များကို update လုပ်ထားပါ
- GitHub tokens များသည် လိုအပ်သည့် permission အနည်းဆုံးသာ ရှိရမည်

### GitHub Models Access

- GitHub Models အတွက် Personal Access Tokens (PAT) လို
- token များကို environment variable များအဖြစ် သိမ်းဆည်းပါ
- token များ သို့မဟုတ် credentials များကို repository တွင် commit မလုပ်ရ

## Additional Notes

### Target Audience

- ဝက်ဘ် ဖွံ့ဖြိုးတိုးတက်မှု အတွက် စတင်သူများ
- ကျောင်းသားများနှင့် ကိုယ်တိုင်သင်ယူလိုသူများ
- ကျောင်းအတွင်း သင်ရိုးညွှန်းတမ်း အသုံးပြုသူ ဆရာ/ဆရာမများ
- ချိတ်ဆက်ရလွယ်ကူပြီး အဆင့်လိုက် ကျွမ်းကျင်မှု တိုးတက်မှုအတွက် ဒီဇိုင်းဆွဲထားသည်

### Educational Philosophy

- ပရောဂျက် အခြေပြု သင်ယူမှု နည်းစနစ်
- ပုံမှန် စစ်ဆေးပေးမှုများ (quizzes)
- လက်တွေ့ ကုဒ်ရေးခြင်း လေ့ကျင့်မှုများ
- ဘာသာရပ်နှင့် သက်ဆိုင်သော အကောင်အထည်ဖော်နည်းများ
- Framework မတိုင်မီ အခြေခံအတိုးအကျယ်ကို အလေးထားသည်

### Repository Maintenance

- တက်ကြွသော သင်ယူသူများနှင့် တင်သွင်းသူများ အသိုင်းအဝိုင်းရှိသည်
- dependency များနှင့် အကြောင်းအရာများကို သက်ဆိုင်ရာ အချိန်နှင့်အမျှ ပြင်ဆင်နေသည်
- အဆင်မပြေမှုများနှင့် ဆွေးနွေးမှုများကို ထိန်းသိမ်းသူများ ကြီးကြပ်သည်
- ဘာသာပြန်သွင်းချက်များကို GitHub Actions ဖြင့် အလိုအလျောက် ပြုလုပ်သည်

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ကို သင်ယူသူများအတွက် 推奨
- အပို သင်တန်းများ: Generative AI, Data Science, ML, IoT သင်ရိုးညွှန်းတမ်းများ ရှိသည်

### Working with Specific Projects

ပရောဂျက် သီးသန့် အသေးစိတ် လမ်းညွှန်ချက်များအတွက် README ဖိုင်များ ကိုကြည့်ရှုပါ -
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

ဤ repository သည် ပုံမှန် monorepo မဟုတ်ပေမယ့် ပရောဂျက် အများအပြား ကိုယ်ပိုင်ထားရှိသည် -
- သင်ခန်းစာ တစ်ခုချင်းစီ ကိုယ်တိုင် ပြီးစီးသည်
- ပရောဂျက်များမှာ dependency များကို မမျှဝေကြပါ
- တစ်ခုချင်း ပရောဂျက် များတွင် လုပ်ငန်းဆက် ဆက်လုပ်နိုင်သည်
- သင့်အတွက် ပညာရေး အပြည့်အစုံ ကို လိုအပ်လျှင် အကုန်တစ်ခုပြီး Clone ပြုလုပ်နိုင်သည်

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**မူရင်းအကြောင်းကြားချက်**  
ဤစာတမ်းကို AI ဘာသာပြန်ဆော့ဖ်ဝဲဖြစ်သော [Co-op Translator](https://github.com/Azure/co-op-translator) အသုံးပြုပြီး ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် မှန်ကန်မှုကို မျှော်လင့်နေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ချက်များတွင် မှားယွင်းမှု သို့မဟုတ် အတိအကျမမှန်ကန်မှုများ ရှိနိုင်သည်ကို သတိပြုပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။ မူရင်းစာတမ်းကို စနစ်တကျ အသုံးပြုခဲ့သင့်သော အကြောင်းအရာ အရင်းအမြစ်အဖြစ် ယူဆရမည်။ အရေးကြီးသော သတင်းအချက်အလက်များအတွက် သင့်လျော်သည့် လူမှုဆက်ဆံရေး ဘာသာပြန်ဌာနမှ အတည်ပြုခြင်း လိုအပ်ပါသည်။ ဤဘာသာပြန်ချက်ကို အသုံးပြုခြင်းကြောင့် ဖြစ်ပေါ်လာနိုင်သည့် နားမလည်မှုများ သို့မဟုတ် မှားယွင်းသောဖော်ပြချက်များအတွက် ကျွန်ုပ်တို့သည် တာဝန်မပေးပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->