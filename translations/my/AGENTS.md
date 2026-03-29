# AGENTS.md

## Project Overview

ဤသည်မှာ အခြေခံအဆင့် ဝက်ဘ် ဖွံ့ဖြိုးတိုးတက်မှုကို သင်ကြားရန် အတွက် ပညာရေး သင်ရိုးညွှန်းတမ်း သိမ်းဆည်းရာ ရှိသော repository ဖြစ်သည်။ သင်ရိုးညွှန်းတမ်းတွင် Microsoft Cloud Advocates မှ တီထွင်ထားသော ၁၂ ပတ်ကြာ သင်တန်းလုံလောက်ပြီး JavaScript, CSS နှင့် HTML ကို အကျဉ်းချုပ် ပါဝင်တဲ့ လက်တွေ့သင်ခန်းစာ ၂၄ ခု ပါဝင်သည်။

### Key Components

- **ပညာရေး အကြောင်းအရာ**: ၂၄ ခုသော ဖွဲ့စည်းထားသော သင်ခန်းစာများကို ပရောဂျက်အခြေပြု ပုံစံဖြင့် စီစဉ်ထားသည်
- **လက်တွေ့ ပရောဂျက်များ**: Terrarium၊ Typing Game၊ Browser Extension၊ Space Game၊ Banking App၊ Code Editor နှင့် AI Chat Assistant
- **အပြန်အလှန် စစ်တမ်းများ**: သင်ခန်းစာနှင့် မတိုင်မှီ/နောက်ပိုင်း စစ်တမ်း ၄၈ ခု၊ မေးခွန်းသုံးခုစီပါဝင်သည်
- **ဘာသာစကား များစွာ ထောက်ခံမှု**: GitHub Actions ဖြင့် ၅၀ ကျော်သော ဘာသာစကားများအတွက် အလိုအလျောက် ဘာသာပြန်မှုများ
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ပရောဂျက်များအတွက်)

### Architecture

- သင်ခန်းစာအခြေပြု ပညာရေး repository
- သင်ခန်းစာ folder တစ်ခုစီတွင် README, code ဥပမာများနှင့် ဖြေရှင်းချက်များ ပါဝင်သည်
- quiz-app နှင့် အခြား သီးခြားပရောဂျက်များအတွက် အလွတ် directory များ
- GitHub Actions အသုံးပြုပြီး ဘာသာပြန် မော်ဒယ်စနစ် (co-op-translator)
- Docsify အသုံးပြု၍ စာတမ်းရေးဆွဲမှု ပြုလုပ်ပြီး PDF အဖြစ် ရနိုင်သည်

## Setup Commands

ဤ repository သည် ပညာရေး အကြောင်းအရာ စမ်းသုံးခြင်း အထူးပြုထားသည်။ အထူးပရောဂျက်များနှင့် ဆောင်ရွက်ရန်အတွက် -

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ဖွံ့ဖြိုးမှုဆာဗာစတင်ပါ
npm run build      # ထုတ်လုပ်မှုအတွက် ဆောက်လုပ်ပါ
npm run lint       # ESLint ကို chạy ပါ
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API ဆာဗာကို စတင်ပါ
npm run lint       # ESLint ကို လုပ်ဆောင်ပါ
npm run format     # Prettier ဖြင့် ဖော်မက် ပြုလုပ်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ဘရောက်ဇာအလိုက် ထပ်ဆောင်းပုံတင်ခြင်း လမ်းညွှန်ချက်များကိုလိုက်နာပါ
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# index.html ကို browser မှာ ဖွင့်ပါ သို့မဟုတ် Live Server ကို အသုံးပြုပါ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ပတ်ဝန်းကျင် သတ်မှတ်ချက်ကို သတ်မှတ်ပါ
python api.py
```

## Development Workflow

### For Content Contributors

1. သင်၏ GitHub မှာ repository ကို **fork** ပြုလုပ်ပါ
2. သင်၏ fork ကို လုပ်ဆောင်ရန် **clone** လုပ်ပါ
3. ပြင်ဆင်မှုများအတွက် **branch အသစ်** ဖန်တီးပါ
4. သင်ခန်းစာ အကြောင်းအရာ သို့မဟုတ် code ဥပမာများ ဆက်လက်ပြင်ဆင်ပါ
5. သက်ဆိုင်ရာ ပရောဂျက် directory များတွင် code ပြင်ဆင်မှုများ စမ်းသပ်ပါ
6. အညွှန်းလိုက်၍ pull request များတင်ပါ

### For Learners

1. Repository ကို fork သို့မဟုတ် clone လုပ်ပါ
2. သင်ခန်းစာ directory များကို အဆင့်လိုက် သွားပါ
3. တစ်ခုစီသင်ခန်းစာ README ဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာ မတိုင်မှီ စစ်တမ်းများ ဖြေဆိုပါ
5. သင်ခန်းစာ folder တွင် code ဥပမာများ လေ့လာပါ
6. အလုပ်အပ်နှင့် စိန်ခေါ်မှုများ ပြီးမြောက်ပါ
7. သင်ခန်းစာ ပြီးနောက် စစ်တမ်းများ ဖြေဆိုပါ

### Live Development

- **စာတမ်းရေးဆွဲခြင်း**: root တွင် `docsify serve` လုပ်ပါ (port 3000)
- **Quiz App**: quiz-app directory တွင် `npm run dev` ပြုလုပ်ပါ
- **ပရောဂျက်များ**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension အသုံးပြုပါ
- **API ပရောဂျက်များ**: သက်ဆိုင်ရာ API directory တွင် `npm start` ပြုလုပ်ပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # သို့သော် အညွှန်းစတိုင်ပြဿနာများကို စစ်ဆေးပါ
npm run build      # ဆောက်လုပ်မှုအောင်မြင်သည်ကို အတည်ပြုပါ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုဒ်ပုံစံပြဿနာများကို စစ်ဆေးပါ
node server.js     # အမှား မရှိဘဲ ဆာဗာ ချိန်ဆက်စတင်မှုကို အတည်ပြုပါ
```

### General Testing Approach

- ဤသည်မှာ တိကျသော အလိုအလျောက် စမ်းသပ်မှု မပါဝင်သော ပညာရေး repository ဖြစ်သည်
- လက်တို စမ်းသပ်မှုတွင် အောက်ပါအချက်များ အဓိကထားသည် -
  - Code ဥပမာများ အမှား မရှိစွာ လည်ပတ်ခြင်း
  - စာတမ်းရေးဆွဲမှု လင့်ခ်များ တိကျမှန်ကန်စွာ ဆက်သွယ်နိုင်ခြင်း
  - ပရောဂျက် တည်ဆောက်မှု အောင်မြင်စွာ ပြီးစီးခြင်း
  - ဥပမာများသည် အကောင်းဆုံးကွင်းဆက်နှင့် ကိုက်ညီမှု

### Pre-submission Checks

- package.json ပါရှိသည့် directory များတွင် `npm run lint` လုပ်ပါ
- markdown လင့်ခ်များမှန်ကန်မှု စစ်ဆေးပါ
- Browser သို့မဟုတ် Node.js တွင် code ဥပမာများ စမ်းသပ်ပါ
- ဘာသာပြန်မှုများ၏ ဖွဲ့စည်းမှု တိကျမှန်ကန်မှုစစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- လက်ရှိ ES6+ စတိုင်သုံးရန်
- များသော project များတွင် ESLint configuration ကိုလိုက်နာရန်
- ပညာရေးအတွက် သင်အား လွယ်ကူစေရန် အဓိပ္ပါယ်ရှိ variable နဲ့ function နာမည်များသုံးရန်
- သင်ကြားမှုအတွက် ကြားဖြတ်ချက်များ ထည့်ရန်
- Prettier ဖြင့် format ပြုလုပ်မှု (configuration ရှိသည့်နေရာတွင်)

### HTML/CSS

- Semantic HTML5 elements အသုံးပြုရန်
- Responsive ဒီဇိုင်း အခြေခံချက်များ
- သန့်ရှင်းပြီး ရှင်းလင်းသော class နာမည်များ
- သင်သားများ အတွက် CSS နည်းပညာ ရှင်းလင်းပြောကြားမှုများ

### Python

- PEP 8 စတိုင်လ်လမ်းညွှန်များ
- သင်ထောက်အကူဖြစ်သော ကျယ်ပြန့်သော code ဥပမာများ
- အသုံးပြုသူအတွက် အကူအညီဖြစ်မည့် Type hints ထည့်သုံးရန်

### Markdown Documentation

- ရှင်းရှင်းလင်းလင်း ခေါင်းစဉ်အဆင့်ခွဲခြားမှု
- ဘာသာပြန်သည့် language နဲ့ code-block များ
- အပိုဆောင်းအရင်းအမြစ် သွားရောက်ရန် link များ
- `images/` folder များရှိ screenshot နှင့် ပုံများ
- ပုံများအတွက် accessibility အတွက် Alt text ထည့်ရန်

### File Organization

- သင်ခန်းစာများကို နံပါတ်စဉ်လိုက် ဖြစ်ရန် (1-getting-started-lessons, 2-js-basics စသဖြင့်)
- project အသီးသီးတွင် `solution/` နှင့် မကြာခဏ `start/` သို့မဟုတ် `your-work/` directory များရှိသည်
- ပုံများကို သင်ခန်းစာအလိုက်သိုလှောင်ထားသော `images/` folder တွင်ရှိသည်
- ဘာသာပြန်ဖိုင်များကို `translations/{language-code}/` structure ဖြင့်ထားသည်

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ကို Azure Static Web Apps deployment အတွက် တပ်ဆင်ထားသည် -

```bash
cd quiz-app
npm run build      # dist/ ဖိုလ်ဒါကို ဖန်တီးသည်
# main သို့ push လုပ်သောအခါ GitHub Actions workflow မှတဆင့် တင်ပို့သည်
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကို 설치 하십시오
npm run convert               # docs မှ PDF ကို 생성하십시오
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို ကမ္ဘာလုံးဆိုင်ရာ ထည့်သွင်းပါ
docsify serve                 # localhost:3000 တွင် စနစ်ဆောင်ပါ
```

### Project-specific Builds

ပရောဂျက် directory တစ်ခုချင်းစီတွင် build လုပ်ငန်းစဉ် များလည်း ရှိနိုင်သည် -
- Vue ပရောဂျက်များ: `npm run build` မှာ production bundle များဖန်တီးသည်
- Static ပရောဂျက်များ: build လုပ်ရန် မလိုအပ်ပါ၊ ဖိုင်များကိုတန်းတူ serve ပြုလုပ်သည်

## Pull Request Guidelines

### Title Format

ပြင်ဆင်မှု လုပ်ဆောင်သော နေရာကို ပြသသည့် ရှင်းလင်းအသိပေးခေါင်းစဉ်များ၌ များသုံးရန် -
- `[Quiz-app] သင်ခန်းစာ X အတွက် quiz အသစ်ထည့်ပါ`
- `[Lesson-3] terrarium ပရောဂျက်တွင် အမှားတစ်ခု ပြင်ဆင်ပါ`
- `[Translation] သင်ခန်းစာ ၅ အတွက် စပိန်ဘာသာ ပြန်တင်ဘှဲ့ပါ`
- `[Docs] Setup အဆင့်ညွှန်ကြားချက်များ အပ်ဒိတ်ပြုလုပ်ပါ`

### Required Checks

PR တင်မည့်အချိန် မတိုင်မီ -

1. **Code ပြည့်စုံမှု**
   - သက်ဆိုင်ရာ project directory များတွင် `npm run lint` ကို လုပ်ပါ
   - အမှားများနှင့် အသိပေးချက်များကို ပြင်ဆင်ပါ

2. **Build စစ်ဆေးခြင်း**
   - လိုအပ်ပါက `npm run build` ပြုလုပ်ပါ
   - build အမှား မရှိပါစေ

3. **Link စစ်ဆေးခြင်း**
   - Markdown လင့်ခ်များအားလုံးကို စမ်းသပ်ပါ
   - ဓာတ်ပုံများ ရှိမရှိ စစ်ဆေးပါ

4. **အကြောင်းအရာ စစ်တမ်း**
   - စာလုံးပျက်မှားနှင့် သဒ္ဒါ အမှား မရှိစေရန် စစ်ဆေးပါ
   - Code ဥပမာများ မှန်ကန်ပြီး သင်ကြားမှုရှိစေရန် စစ်ဆေးပါ
   - ဘာသာပြန်မှုများ အဓိပ္ပါယ်မပြောင်းဘဲ တိကျမှုရှိစေရန် စစ်ဆေးပါ

### Contribution Requirements

- Microsoft CLA ကို သဘောတူရပါမည် (ပထမ PR တွင် အလိုအလျောက် စစ်ဆေးသည်)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ကို နောက်ဆုံးလိုက်နာရမည်
- အသေးစိတ်အတွက် [CONTRIBUTING.md](./CONTRIBUTING.md) ကို ကြည့်ပါ
- PR ဖေါ်ပြချက်တွင် issue နံပါတ်များကို ရည်ညွှန်းပါ

### Review Process

- PR များသည် Maintainer များနှင့် အသိုင်းအဝိုင်းအားဖြင့် စစ်ဆေးသည်
- ပညာရေး ရှင်းလင်းမှုကို အလေးထားသည်
- Code ဥပမာများသည် လက်ရှိအကောင်းဆုံးနည်းလမ်းများနှင့် မညီမှု မရှိစေရန် ကြိုတင်စစ်ဆေးသည်
- ဘာသာပြန်မှုများအား တိကျမှုနှင့် ယဉ်ကျေးမှုအရ သက်ဆိုင်မှုရှိစေရန် ပြန်လည်သုံးသပ်သည်

## Translation System

### Automated Translation

- GitHub Actions သုံးပြီး co-op-translator workflow အသုံးပြုသည်
- ၅၀ ကျော်သော ဘာသာစကားများအတွက် အလိုအလျောက် ဘာသာပြန်ပေးသည်
- မူလဖိုင်များသည် main directory များတွင်ရှိသည်
- ဘာသာပြန်ထားသော ဖိုင်များကို `translations/{language-code}/` ထဲတွင် သိမ်းဆည်းထားသည်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` တွင် ဖိုင်များကို ရှာတွေ့ပါ
2. ဖွဲ့စည်းမှုမပြောင်းလဲဘဲ တိုးတက်မှုများ ပြုလုပ်ပါ
3. Code ဥပမာများ မပျက်မကွက် ဆက်လက်လုပ်ဆောင်နိုင်စေရန် သတိပြုပါ
4. ညှိနှိုင်းထားသော Quiz အကြောင်းအရာ များကို စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန် ဖိုင်များတွင် မီတာဒေတာ ခေါင်းစီးပါဝင်သည် -
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

**Quiz app တက်ရန် မအောင်မြင်ခြင်း**:
- Node.js ဗားရှင်း (v14+) ကို စစ်ဆေးပါ
- `node_modules` နှင့် `package-lock.json` ဖိုင်များ ဖျက်ပြီး `npm install` ပြန်တင်ပါ
- Port ပိုင်း ယှဉ်ပြိုင်မှုရှိနိုင်မရှိ စစ်ဆေးပါ (default: Vite သည် port 5173 သုံးသည်)

**API server မတက်ခြင်း**:
- Node.js ဗားရှင်းအနည်းဆုံး node >=10 ဖြစ်မဖြစ် စစ်ဆေးပါ
- Port သုံးနေခြင်း ရှိမရှိ စစ်ဆေးပါ
- `npm install` ဖြင့် အားလုံး dependencies ထည့်သွင်းထားခြင်း စစ်ဆေးပါ

**Browser extension မတက်ခြင်း**:
- manifest.json ဖိုင် format မှန်ကန်မှုစစ်ပါ
- Browser console တွင် အမှားများရှိမရှိ စစ်ဆေးပါ
- Browser အလိုက် extension ထည့်သွင်းနည်းများ လိုက်နာပါ

**Python chat project အခက်အခဲများ**:
- OpenAI package ထည့်သွင်းထားၿပီးဖြစ်စေရန် `pip install openai`
- GITHUB_TOKEN environment variable ဖော်ပြထားရေးစစ်ပါ
- GitHub Models အသုံးခွင့်ရှိရေးစစ်ဆေးပါ

**Docsify က စာတမ်း မတက်ခြင်း**:
- 글로벌အဆင့် docsify-cli ထည့်သွင်းရန် `npm install -g docsify-cli`
- Repository ရဲ့ root directory မှ စတင်ပါ
- `docs/_sidebar.md` ရှိမရှိ စစ်ဆေးပါ

### Development Environment Tips

- HTML project များအတွက် VS Code Live Server extension အား အသုံးပြုပါ
- ESLint နှင့် Prettier extension များ ထည့်သွင်းထားပြီး ဖြည်းညည်းစွာ format ပြုလုပ်ပါ
- JavaScript debugging အတွက် browser DevTools ကို အသုံးပြုပါ
- Vue project များအတွက် Vue DevTools browser extension ထည့်သွင်းပါ

### Performance Considerations

- ဘာသာပြန်ဖိုင် အရေအတွက် များ (၅၀ ကျော် ဘာသာစကား) ဖြစ်သောကြောင့် full clone များ ကြီးမားသည်
- အကြောင်းအရာသာ အလုပ်လုပ်မည့်အခါ shallow clone (`git clone --depth 1`) အသုံးပြုပါ
- English အကြောင်းအရာ နှင့်အလုပ်လုပ်သောအခါ ဘာသာပြန် ဖိုင်များကို ရှာဖွေနေရာမှ ဖယ်ရှားပါ
- npm install, Vite build စသည့် စွမ်းဆောင်ရည်တွေ ပထမဆုံးပြေးတဲ့အချိန် စို့မြန်မှု နည်းနိုင်သည်

## Security Considerations

### Environment Variables

- API keys မည်သည့် အချိန်မှ repository ထဲ မသိမ်းဆည်းရ
- `.env` ဖိုင်များကို အသုံးပြုပါ (ပြီးသား `.gitignore` ထဲမှာ ပါရှိ)
- Project README မှာ လိုအပ်သော environment variables များ ဖော်ပြထားပါ

### Python Projects

- virtual environments အသုံးပြုပါ: `python -m venv venv`
- dependencies များ ကိုပုံမှန် update လုပ်ပါ
- GitHub tokens များတွင် လိုအပ်တဲ့ ခွင့်ပြုချက် အနည်းဆုံးပဲ သတ်မှတ်ထားပါ

### GitHub Models Access

- GitHub Models အသုံးပြုရန် Personal Access Tokens (PAT) လိုအပ်သည်
- Tokens များကို environment variables အဖြစ် သိမ်းဆည်းပါ
- Tokens သို့မဟုတ် credentials မဖြန့်ဝေပါနှင့်

## Additional Notes

### Target Audience

- ဝက်ဘ် ဖွံ့ဖြိုးတိုးတက်မှု အစစ်အပိုင်းက စတင်လေ့လာသူများ
- ကျောင်းသားများနှင့် ကိုယ်တိုင် လေ့လာသူများ
- သင်တန်းခန်းများတွင် သင်ကြားသူများ
- အသုံးပြုရ လွယ်ကူပြီး တန်းတူဖြိုးတိုးမှု အတွက် အကြောင်းအရာများ ပါဝင်သည်

### Educational Philosophy

- ပရောဂျက်အခြေပြု သင်ယူခြင်း
- မကြာခဏ အသိပညာ စစ်တမ်းများ (quiz)
- လက်တွေ့ coding လေ့ကျင့်ခန်းများ
- အပြင်လောက သုံးသပ်မှု ဥပမာများ
- Framework မတိုင်မှီ အခြေခံကို အလေးပေးခြင်း

### Repository Maintenance

- လေ့လာသူများနှင့် ပံ့ပိုးသူများ၏ ပြန်လည်ဆွေးနွေးမှုရှိသော လူ့အသိုင်းအဝိုင်း တက်ကြွကောင်းမွန်သည့် အခြေအနေ
- dependencies နှင့် အကြောင်းအရာများ ဆက်လက် update လုပ်ဆောင်ခြင်း
- Issue များနှင့် ဆွေးနွေးမှု များကို Maintainer များ ကြီးကြပ်စောင့်ရှောက်ခြင်း
- ဘာသာပြန်ချက် update များကို GitHub Actions ဖြင့် အလိုအလျောက် ပြုလုပ်ခြင်း

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) သည် လေ့လာသူများအတွက် အကြံပြုသည်
- အပိုဆောင်းသင်တန်းများ: Generative AI, Data Science, ML, IoT သင်ရိုးညွှန်းတမ်းများ လည်း ရရှိနိုင်သည်

### Working with Specific Projects

ပရောဂျက်အသီးသီးတွင် အသေးစိတ်ညွှန်ကြားချက်များအတွက် သက်ဆိုင်ရာ README ဖိုင်များကို ကြည့်ပါ -
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Authentication နှင့် ထည့်သွင်းထားသော Banking application
- `5-browser-extension/README.md` - Browser extension တည်ဆောက်ခြင်း
- `6-space-game/README.md` - Canvas အခြေပြု ကစားပွဲ ဖန်တီးခြင်း
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

ဒီ repository သည် ယေဘုယျ monorepo မဟုတ်ပေမယ့် ပရောဂျက်အမျိုးမျိုး ဦးတည်ထားသည် -
- သင်ခန်းစာ တစ်ခုချင်းစီကို မတူညီပဲ သီးခြားထားသည်
- ပရောဂျက်များသည် dependencies များ မမျှဝေကြ
- တစ်ခုတည်းသော ပရောဂျက်ကို ပြင်ဆင်ခြင်းသည် အခြားများအား ထိခိုက်မှု မရှိစေရန် ဖြစ်သည်
- အတူတကွ သင်ရိုးပုံစံ အပြည့်အဝကို ထည့်သွင်းဖို့အတွက် repository များကို စုပေါင်း clone လုပ်နိုင်သည်

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ကြွင်းချက်**:  
ဤစာရွက်ကို AI ဘာသာပြန်စနစ်ဖြစ်သော [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် မှန်ကန်မှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းကြောင့် အမှားများ သို့မဟုတ် မှန်ကန်မှုလျော့ပါးမှုများရှိနိုင်ကြောင်း သိရှိထားပေးပါ။ မူရင်းစာရွက်ကို မူလဘာသာဖြင့် တရားဝင်အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသည့် သတင်းအချက်အလက်များအတွက် မူရင်း စာသားအရ ပြည့်စုံသော လူမှု့ဘာသာပြန်သား အတတ်ပညာရှင်တွေ ရရှိရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုအသုံးပြုမှုကြောင့် ဖြစ်ပေါ်နိုင်သည့် နားလည်မှုအမှားများ သို့မဟုတ် ကန့်သတ်ချက်များအတွက် ကျွန်ုပ်တို့ တာဝန်မယူပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->