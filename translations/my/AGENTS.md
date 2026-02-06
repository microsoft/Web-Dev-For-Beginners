# AGENTS.md

## Project Overview

ဤသည်မှာ web development မျိုးစွဲအခြေခံများကို စတင်သင်ကြားရန်အတွက် ပညာရေး သင်ရိုးညွှန်းတမ်း_repository_ တစ်ခုဖြစ်သည်။ သင်ရိုးညွှန်းတမ်းသည် Microsoft Cloud Advocates မှ ဖန်တီးထားသော ၁၂-ပတ်ကြာ သင်တန်းအစီအစဉ်တစ်ရပ်ဖြစ်ပြီး JavaScript၊ CSS နှင့် HTML တို့ကို ဖုံးလွှမ်းသည့် ၂၄ ခုသော လက်တွေ့သင်ခန်းစာများပါဝင်သည်။

### Key Components

- **ပညာရေးအကြောင်းအရာများ**: ပရောဂျက်အခြေပြု အပိုင်းများအလိုက် စဉ်ဆက်ရန်ပုံစံ ၂၄ ခုသော သင်ခန်းစာများ
- **လက်တွေ့ပရောဂျက်များ**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor နှင့် AI Chat Assistant
- **အပြန်အလှန် စစ်ဆန်းမေးခွန်းများ**: မေးခွန်း ၃ မျိုးပါသည့် ၄၈ ခုသော မေးခွန်းများ (သင်ခန်းစာမတိုင်မီ/ပြီးနောက် စစ်ဆေးခြင်း)
- **ဘာသာစကားအမျိုးမျိုးအား ထောက်ပံ့မှု**: GitHub Actions ဖြင့် မရပ်တန့်သော ၅၀+ ဘာသာစကားများအလိုအလျှောက် ဘာသာပြန်ခြင်း
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ပရောဂျက်များအတွက်)

### Architecture

- သင်ခန်းစာအခြေပြု ဖိုင်တိုက်
- သင်ခန်းစာတိုင်း ဖိုလ်ဒါမှာ README, ကုဒ်ဥပမာများနှင့် ဖြေရှင်းချက်များပါဝင်သည်
- ၎င်းမှကွဲထွက်ထားသော ပရောဂျက်များ (quiz-app, အမျိုးမျိုးသော သင်ခန်းစာပရောဂျက်များ)
- GitHub Actions အသုံးပြုသော ဘာသာပြန်မှု စနစ် (co-op-translator)
- Docsify ဖြင့် မှတ်တမ်းကျော် ထုတ်ပေးပြီး PDF အနေဖြင့်လည်း ရရှိနိုင်သည်

## Setup Commands

ဤဖိုင်တိုက်သည် အဓိကအားဖြင့် ပညာရေးအကြောင်းအရာ အသုံးပြုမှုအတွက်ဖြစ်သည်။ အသီးသီး ပရောဂျက်များနှင့်အတူ အလုပ်လုပ်လိုပါက -

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ဖွံ့ဖြိုးတိုးတက်မှု ဆာဗာကို စတင်ပါ
npm run build      # ထုတ်လုပ်မှုအတွက် ဆောက်လုပ်ပါ
npm run lint       # ESLint ကို အလုပ်လုပ်ရန် ဖြစ်ပါသည်
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API စာရင်းကို စတင်ပါ
npm run lint       # ESLint ကို လုပ်ဆောင်ပါ
npm run format     # Prettier ဖြင့် ပုံသဏ္ဍနာ ပြုပြင်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ဘရိုဇာအလိုက် အထူးသဒီခံ များတင်သွင်းနည်း အညွှန်းများကို လိုက်နာပါ။
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
# GITHUB_TOKEN ပတ်ဝန်းကျင် အပြောင်းအလဲ ကိုစီစဉ်ပါ
python api.py
```

## Development Workflow

### For Content Contributors

1. **Repository ကို ဖော့ခ်လုပ်ပါ** သင့် GitHub အကောင့်သို့
2. **ဖော့ခ်လုပ်ထားသောကို ဒေါင်းလုပ်လုပ်ပါ** ဒေသရပ်ဆိုင်သောစက်၌
3. **သွားလိုသည့် ပြောင်းလဲမှုများအတွက် အသစ်သော ဘရောင်းချ်ဖန်တီးပါ**
4. သင်ခန်းစာအကြောင်းအရာ သို့မဟုတ်ကုဒ်ဥပမာများ ပြင်ဆင်ပါ
5. သက်ဆိုင်ရာပရောဂျက် ဖိုလ်ဒါများတွင် ကုဒ်ပြောင်းလဲမှုများ စမ်းသပ်ပါ
6. မိတ်ဆက်ချက်ညွှန်ကြားချက်များအတိုင်း pull request တင်ပြပါ

### For Learners

1. Repository ကို fork လုပ်ခြင်း သို့မဟုတ် clone လုပ်ခြင်း
2. သင်ခန်းစာ ဖိုလ်ဒါများ အဆက်အစပ်သွားပါ
3. နေရာတိုင်းတွင် README ဖိုင်များ ဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မီ စစ်ဆေးမှု မေးခွန်းများ ဖြေဆိုပါ
5. သင်ခန်းစာဖိုလ်ဒါများရှိ ကုဒ်ဥပမာများခေါက်ထဲတွင် လေ့လာပါ
6. တာဝန်ယူချက်များနှင့် စိန်ကြိုးမှုများ ပြီးမြောက်ပါ
7. သင်ခန်းစာပြီးနောက် မေးခွန်းများ ဖြေဆိုပါ

### Live Development

- **မှတ်တမ်းကျော်**: အဓိကဖိုင်တွင် `docsify serve` ကို ဖွင့်ပါ (port 3000)
- **Quiz App**: quiz-app ဖိုလ်ဒါတွင် `npm run dev` ကို ဖွင့်ပါ
- **Projects**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension ကို အသုံးပြုပါ
- **API Projects**: သက်ဆိုင်ရာ API ဖိုလ်ဒါများတွင် `npm start` ကို သုံးပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ကုဒ်ပုံစံပြသနာများကိုစစ်ဆေးပါ
npm run build      # တည်ဆောက်မှုအောင်မြင်မှုကိုအတည်ပြုပါ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုဒ်ပုံစံပြဿနာများကို စစ်ဆေးပါ
node server.js     # ဆာဗာသည် အမှားမပါဘဲ စတင်အောင် သေချာစစ်ဆေးပါ
```

### General Testing Approach

- ဤသည်မှာ အထူးသဖြင့် စနစ်တကျ အလိုအလျှောက် စမ်းသပ်မှု မပါသော ပညာရေးဖိုင်တိုက်ဖြစ်သည်
- လက်တွေ့ စမ်းသပ်မှုများ တွင် အောက်ပါအချက်များအပေါ် ဂရုပြုရမည်။
  - ကုဒ်ဥပမာများ အမှားမရှိစွာ လုပ်ဆောင်နိုင်ခြင်း
  - မှတ်တမ်းတွင် လင့်များလုံးဝ အလုပ်လုပ်နိုင်ခြင်း
  - ပရောဂျက်များ ကို ထုတ်လုပ်မှု အောင်မြင်စွာ ပြီးဆုံးခြင်း
  - ဥပမာများသည် စံချိန်စံညွှန်းနည်းလမ်းများအတိုင်းရှိခြင်း

### Pre-submission Checks

- package.json ပါသော ဖိုလ်ဒါများတွင် `npm run lint` ဖြင့် စစ်ဆေးပါ
- markdown links များမှန်ကန်ကြောင်းစစ်ဆေးပါ
- ကုဒ်ဥပမာများကို browser သို့ Node.js တွင် စမ်းသပ်ပါ
- ဘာသာပြန်မှုများသည် စနစ်တကျရှိရေးကို စစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- အဆင့်မြင့် ES6+ စနစ်ကို အသုံးပြုပါ
- ပရောဂျက်များတွင် ထည့်သွင်းထားသည့် ကြိုးပမ်းမှု standard ESLint configurations တွေလိုက်နာပါ
- ပညာရေးအတွက် မှတ်သားပိုမိုချင်စိတ်ကို အဓိကထားသည့် အဓိပ္ပာယ်ကောင်းသော အမည်များသုံးပါ
- သင်ယူသူများအတွက်ပါ အကြောင်းအရာရှင်းပြချက် မက်ဆေ့ခ််များထည့်ပါ
- ရေးသားတပ်ဆင်ထားသော Prettier ဖြင့် ဖောမတ်လုပ်ခြင်း

### HTML/CSS

- အဓိက အဓိပ္ပာယ်မြင့် HTML5 elements သုံးပါ
- တုံ့ပြန်မှုရှိသော ဒီဇိုင်နည်းများ
- သတ်မှတ်ထားသည့် class နာမည်ခေါင်းစဉ်များ ရှင်းလင်းစွာ သတ်မှတ်ခြင်း
- သင်ယူသူများအတွက် CSS နည်းလမ်းများ မှတ်ချက်ဖြင့် ရှင်းပြချက်ဖြည့်စွက်ခြင်း

### Python

- PEP 8 စတိုင်လမ်းညွှန်ချက်များ
- ရှင်းလင်းသောပညာရေးကုဒ်ဥပမာများ
- သင်ယူထောက်ပံ့မှုအတွက် type hints ထည့်ရန်

### Markdown Documentation

- ဦးခေါင်းများ ပေါ်ပုံ ရှင်းလင်းစွာထားရှိခြင်း
- ဘာသာစကားသတ်မှတ်ချက်ပါသည့် ကုဒ်ဘလော့များ
- ထပ်ဆောင်းရင်းမြစ်များဆီ လင့်ခ်များ
- `images/` ဖိုလ်ဒါများရှိ နမူနာပုံများနှင့် စာရွက်ပုံများ
- အသုံးပြုနိုင်ရေးအတွက် ပုံများ၏ alt စာသားများ

### File Organization

- သင်ခန်းစာများ အဆက်ဆက်အမှတ်စဉ်(၁-getting-started-lessons, ၂-js-basics စသည်ဖြင့်)
- ပရောဂျက်တိုင်းတွင် `solution/` နှင့် ပုံမှန်အားဖြင့် `start/` သို့မဟုတ် `your-work/` ဖိုလ်ဒါများ
- သင်ခန်းစာ သီးသန့် `images/` ဖိုလ်ဒါတွင် ပုံများထားရှိခြင်း
- ဘာသာပြန်ဖိုင်များကို `translations/{language-code}/` စနစ်ဖြင့် သိမ်းဆည်းခြင်း

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ကို Azure Static Web Apps တွင် တည်ဆောက်ထားသည် -

```bash
cd quiz-app
npm run build      # dist/ ဖိုလ်ဒါကို ဖန်တီးသည်
# main branch သို့ push လုပ်သောအခါ GitHub Actions workflow ဖြင့် တင်သွင်းသည်
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကိုထည့်သွင်းပါ
npm run convert               # docs မှ PDF ကိုထုတ်လုပ်ပါ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို ကမ္ဘာလုံးဆိုင်ရာ ထည့်သွင်းပါ
docsify serve                 # localhost:3000 ပေါ်တွင် ဆာဗ်ဖြစ်ပါစေ
```

### Project-specific Builds

ပရောဂျက်တိုင်းသည် ကိုယ်ပိုင် ထုတ်လုပ်မှုလုပ်ငန်းစဉ်များရှိနိုင်သည် -
- Vue ပရောဂျက်များတွင် `npm run build` ဖြင့် ထုတ်လုပ်မှု bundle များပြုလုပ်သည်
- static ပရောဂျက်များတွင် build လုပ်မှု မရှိ၊ ဖိုင်များကို တိုက်ရိုက် ဝန်ဆောင်မှု ပေးသည်

## Pull Request Guidelines

### Title Format

ပြောင်းလဲမှု အစိတ်အပိုင်းကို ထည့်သွင်းညွှန်းသော ကိုကျောက်ဆိုး စာရေးပါ -
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

PR တင်သည့်အခါမှာ -

1. **ကုဒ်အရည်အသွေး**:
   - သက်ဆိုင်ရာ project ဖိုလ်ဒါများတွင် `npm run lint` ပြေးပါ
   - အမှားနှင့် သတိပေးချက်များအားလုံး ပြင်ဆင်ပါ

2. **ထုတ်လုပ်မှု ပြုလုပ်ခြင်း စစ်ဆေးမှု**:
   - လိုက်လျောညီထွေရှိပါက `npm run build` ပြုလုပ်ပါ
   - ရှာဖွေတွေ့ရှိသော အမှားမရှိကြောင်း သေချာစေပါ

3. **လင့်ခ် စစ်တမ်း**:
   - markdown သို့မဟုတ် ပုံဆိုင်ရာ လင့်ခ်များအားလုံး စစ်ဆေးပါ

4. **အကြောင်းအရာ ပြန်လည်သုံးသပ်ခြင်း**:
   - စာလုံးပေါင်းနှင့် စာကြောင်းမှားပေါ် မရှိစေပါနှင့်
   - ကုဒ်ဥပမာများမှန်ကန်ပြီး ပညာရေးအတွက် ရည်ရွယ်ထားသည်မှန်ကန်စေရန်
   - ဘာသာပြန်မှုများသည် မူရင်းအဓိပ္ပာယ်လိုက်ဖက်မှုရှိရေးကို စစ်ဆေးပါ

### Contribution Requirements

- Microsoft CLA အတည်ပြုပါ (ပထမဆုံး PR မှာ အလိုအလျှောက် စစ်ဆေးမှု)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ကိုလိုက်နာပါ
- အသေးစိတ် ညွှန်ကြားချက်များအတွက် [CONTRIBUTING.md](./CONTRIBUTING.md) ကိုကြည့်ပါ
- PR ရှင်းလင်းချက်တွင် issue နံပါတ်များ ထည့်သွင်းပါ

### Review Process

- PR များသည် ပြုပြင်သူများနှင့် လူထုကနေ သုံးသပ်သည်
- ပညာရေး ရည်ရွယ်ချက်များကို အထူး ဦးလေးပေးသည်
- ကုဒ်ဥပမာများသည် လက်ရှိ စံနှုန်းများနှင့် ကိုက်ညီရန် လိုအပ်သည်
- ဘာသာပြန်မှုများကို တိကျမှန်ကန်မှုနှင့် ယဉ်ကျေးမှုလိုက်ဖက်မှုအခြေအနေဖြင့် သုံးသပ်သည်

## Translation System

### Automated Translation

- GitHub Actions နှင့် co-op-translator workflow ကို အသုံးပြုသည်
- ၅၀+ ဘာသာစကားများအလိုအလျှောက် ဘာသာပြန်သည်
- မူရင်းဖိုင်များကို အဓိက ဖိုလ်ဒါများတွင်ထား
- ဘာသာပြန်ဖိုင်များကို `translations/{language-code}/` တွင် သိမ်းဆည်းသည်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` မှ ဖိုင်ကို ရှာဖွေပါ
2. ဖိုင် အပါအစိတ်အပိုင်းများကို မထိခိုက်ဘဲ တိုးတက်အောင် ပြင်ဆင်ပါ
3. ကုဒ်ဥပမာများသည် ဆက်လက် လည်ပတ်နိုင်ရေး အထောက်အကူဖြစ်စေရန် အာမခံပါ
4. အလိုက်သင့် ဘာသာပြန် သင်ခန်းစာ မေးခွန်းများကို စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန်ဖိုင်များတွင် metadata header ပါဝင်သည် -
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

**Quiz app မဖြင့်တော့ခြင်း**:
- Node.js ဗားရှင်းစစ်ဆေးပါ (v14+ ကိုအကြံပြု)
- `node_modules` နှင့် `package-lock.json` ဖိုင်များ ဖျက်ပြီး `npm install` ထပ်တွဲဆောင်ရွက်ပါ
- ပေါ့(Port) ပဋိပက္ခ မရှိကြောင်း စစ်ဆေးပါ (Vite သည် ပုံမှန် 5173 ပေါ့သုံးသည်)

**API server မဖွင့်ခြင်း**:
- Node.js ဗားရှင်းဖြည့်စွက် ရှိပါစေ (node >=10)
- ပေါ့ (port)ကို အသုံးပြုနေမှု မရှိကြောင်း သေချာစေရန် စစ်ဆေးပါ
- လိုအပ်သည့် dependency များအားလုံး `npm install` ဖြင့် ထည့်သွင်းပြီးကြောင်း သေချာကာ

**Browser extension မတင်နိုင်ခြင်း**:
- manifest.json format မှန်ကန်မှု
- browser console မှာ အမှားမရှိကြောင်း စစ်ဆေးပါ
- browser-specific extension တပ်ဆင်မှုအညွှန်းများ လိုက်နာပါ

**Python chat project ပြဿနာ**:
- OpenAI package တပ်ဆင်ထားမှု `pip install openai`
- GITHUB_TOKEN environment variable သတ်မှတ်ထားမှု
- GitHub Models အတွက် လက်မှတ်ခွင့်များရှိမှုစစ်ဆေးပါ

**Docsify မှတ်တမ်းမဖွင့်ခြင်း**:
- `docsify-cli` ကို ပိုင်းလောဂျီအားဖြင့် တပ်ဆင်ပါ - `npm install -g docsify-cli`
- Repository အမြစ် ဒါရိုက်တာထိုင်မှ ပေါ်တင်ပါ
- `docs/_sidebar.md` ရှိကြောင်းစစ်ဆေးပါ

### Development Environment Tips

- HTML ပရောဂျက်များအတွက် VS Code Live Server extension အသုံးပြုပါ
- ESLint နှင့် Prettier extension များတပ်ဆင်ပြီး ဖောင်မက်ကို စနစ်တကျ ထိန်းသိမ်းပါ
- JavaScript debugging အတွက် browser DevTools အသုံးပြုပါ
- Vue ပရောဂျက်များအတွက် Vue DevTools browser extension တပ်ဆင်ပါ

### Performance Considerations

- ဘာသာပြန်ဖိုင်များ (၅၀+ ဘာသာစကား) အရေတွက်ကြီးကြောင်းကြောင့် clone အကြီးအကျယ် ဖြစ်နိုင်သည်
- content သာ အလုပ်လုပ်မည်ဆိုပါက shallow clone အသုံးပြုပါ - `git clone --depth 1`
- အင်္ဂလိပ်ဘာသာများတွင် ဘာသာပြန်မှုများကို ရှာဖွေမှုမှ အနုတ်ထုတ်ပါ
- ပထမဆုံး run တွင် build process အနည်းငယ်နှေးကွေးနိုင်သည် (npm install, Vite build)

## Security Considerations

### Environment Variables

- API ကီးများကို Repository တွင် commit မပြုလုပ်သင့်ပါ
- `.env` ဖိုင်များကို အသုံးပြုပါ (သည်နောက် `.gitignore` တွင် ပါဝင်သည်)
- လိုအပ်သည့် environment variable များကို project README များတွင် ဖော်ပြပါ

### Python Projects

- virtual environment သုံးပါ - `python -m venv venv`
- dependencies များကို သက်တမ်းမကုန်ရှင်းစွာ သိမ်းဆည်းပါ
- GitHub tokens များသည် လိုအပ်ဆုံးအမြင့်ဆုံး ခွင့်ပြုချက်သာ ပေးပါ

### GitHub Models Access

- Personal Access Tokens (PATs) မရှိမဖြစ်လိုအပ်ပါသည်
- tokens များကို environment variables အဖြစ် သိမ်းဆည်းရမည်
- tokens သို့မဟုတ် လျှို့ဝှက်ချက် မလုပ်ထုတ်သင့်ပါ

## Additional Notes

### Target Audience

- web development စတင်သင်ယူမှု လူသစ်များ
- ကျောင်းသားများနှင့် ကိုယ်တိုင် သင်ယူသူများ
- သင်ရိုးညွှန်းတမ်းကို စာသင်ခန်းများတွင် အသုံးပြုသော ဆရာမများ
- အားလုံးအတွက် ဝင်ရောက် ချ Easy လွယ်အောင် ထားရှိခြင်းနှင့် အဆင့်ဆင့် ကျွမ်းကျင်မှု တိုးတက်စေခြင်း

### Educational Philosophy

- ပရောဂျက်အခြေပြု သင်ကြားမှုနည်းလမ်း
- Knowledge checks (quizzes) များအားသက်တမ်းမတိုအောင် ကြာလတီစွာ ခြေရာခံခြင်း
- လက်တွေ့ ကုဒ်ရေးစမ်းသပ်ခြင်း
- အမှန်တကယ် အသုံးချနိုင်သော နမူနာများ
- framework မတိုင်မီ အခြေခံအမြင်ကို အထူးပြုခြင်း

### Repository Maintenance

- သင်ယူသူများနှင့် အထောက်အပံ့ပေးသူများ အဖွဲ့အစည်း စတက်ရောက်နေသည်
- dependencies နှင့် အကြောင်းအရာများ ပုံမှန် ပြင်ဆင် ပြောင်းလဲမှုများလုပ်သည်
- issue များနှင့် ဆွေးနွေးမှုများ စောင့်ကြည့်သူများရှိသည်
- ဘာသာပြန်မှု update များကို GitHub Actions ဖြင့် အလိုအလျောက်လုပ်ဆောင်သည်

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ကို သင်ယူသူများအတွက် အကြံပြုသည်
- အပို သင်တန်းများ - Generative AI, Data Science, ML, IoT သင်ရိုးညွှန်းတမ်းများရရှိနိုင်သည်

### Working with Specific Projects

အသေးစိတ် ညွှန်ကြားချက်များအတွက် အောက်ပါ README ဖိုင်များ ကြည့်ပါ -
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - အသုံးပြုခွင့်ရှိပြီး banking app
- `5-browser-extension/README.md` - Browser extension ဖွံ့ဖြိုးမှု
- `6-space-game/README.md` - Canvas အပေါ်အခြေခံထားသောဂိမ်းဖန်တီးမှု
- `9-chat-project/README.md` - AI chat assistant ပရောဂျက်

### Monorepo Structure

ရိုးရာ monorepo မဟုတ်သော်လည်း ဖိုင်တိုက်တွင် ပရောဂျက်များ မျိုးစုံ ပါသည် -
- သင်ခန်းစာတိုင်းမှာ ကိုယ်ပိုင် လွတ်လပ်မှုရှိသည်
- ပရောဂျက်များသည် အချင်းချင်း အသုံးပြုသော dependencies များ မမျှမျှဝေပါ
- သီးသန့်ပရောဂျက်အား လုပ်ကိုင်ပြီး အခြားပရောဂျက်များအပေါ် သက်ရောက်မှုမရှိစေရန်
- အပြည့်အစုံ သင်ရိုးရှိမှုအတွက် အားလုံးကို clone လုပ်ပါ

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**အသိပေးချက်**  
ဤစာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ဖြင့် ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားသည်မှာ မှန်ပေမယ့် အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မှန်ကန်မှု တစ်ချို့ မရှိနိုင်ပါကြောင်း သတိပြုပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။ မူရင်းစာတမ်းကို တိုင်းပြည်ဘာသာဖြင့်သာ ယုံကြည်စိတ်ချရသော အထောက်အထားအဖြစ် စဉ်းစားသင့်ပါသည်။ အရေးပါသော သတင်းအချက်အလက်များအတွက် လူ့ဘာသာပြန်သူပညာရှင်များ၏ ဘာသာပြန်မှုကို သုံးစွဲရန် အကြံပြုပါသည်။ ဤဘာသာပြန်ချက်အသုံးပြုမှုကြောင့်ဖြစ်ပေါ်နိုင်သည့် နားလည်မှုမှားခြင်းများ သို့မဟုတ် မှားယွင်းသောသဘောထားများအတွက် ကျွန်ုပ်တို့ မည်သည့် တာဝန်မှ မယူဆောင်ပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->