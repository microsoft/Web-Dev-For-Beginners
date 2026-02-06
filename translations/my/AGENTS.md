# AGENTS.md

## Project Overview

ဤသည်မှာ ဝဘ်ဖွံ့ဖြိုးတိုးတက်ခြင်း အခြေခံများကို စတင်သင်ကြားလိုသူများအတွက် သင်ကြားရေး အကြောင်းအရာစုစည်းထားသော သင်ခန်းစာအုပ်အားဖြစ်သည်။ Microsoft Cloud Advocates မှ ဖန်တီးထားသော १२ ပတ်ကြာ သင်ခန်းစာ လုံးဝကျယ်ဝန်း သည် JavaScript၊ CSS နှင့် HTML ကို စုစည်းခြင်းဖြင့် ၂၄ ခန်းသင်ခန်းစာ ပါရှိသည်။

### Key Components

- **ပညာရေး အကြောင်းအရာများ**: ၂၄ ခန်းသင်ခန်းစာများကို ပရောဂျက်အခြေပြု မော်ဂျူးများအဖြစ် ထိရောက်စွာ စီမံခြင်း
- **လက်တွေ့ ပရောဂျက်များ**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor နှင့် AI Chat Assistant
- **စိတ်ဝင်စားဖွယ် ချဉ်းကပ်မှုများ**: ခန်းသင်စာမပြေးမီ/ပြီးနောက် အကဲဖြတ်ရန် မေးခွန်း ၃ ခုပါဝင်သော ၄၈ ခုခွဲ မေးပွဲများ
- **ဘာသာစကား အမျိုးမျိုးကို ထောက်ပံ့မှု**: GitHub Actions ဖြင့် ၅၀ ကျော် ဘာသာစကား အလိုအလျောက် ဘာသာပြန်မှုများ
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ပရောဂျက်များအတွက်)

### Architecture

- သင်ခန်းစာအခြေပြု ဖိုင်စု
- တစ်ခန်းချင်း လက်တွေ့ နယူးဖိုင်တွဲများတွင် README၊ ကိုးဒ်နမူနာများနှင့် ဖြေရှင်းချက်များပါဝင်သည်
- သီးခြား ပရောဂျက်များ အခြားဖိုင်လ်များတွင် (quiz-app, အမျိုးမျိုးသော သင်ခန်းစာ ပရောဂျက်များ)
- GitHub Actions သုံးသော ဘာသာပြန်မှု စနစ် (co-op-translator)
- Docsify သုံး၍ စာရွက်စာတမ်းများ တင်ဆက်ပြီး PDF အဖြစ်ရနိုင်

## Setup Commands

ဤ repository သည် ပညာရေး အကြောင်းအရာများ အသုံးပြုရုံ ရည်ရွယ်ပါသည်။ သီးခြား ပရောဂျက်များ ဖြင့် အလုပ်လုပ်လိုပါက -

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ဖွံ့ဖြိုးရေးဆာဗာကို စတင်ပါ
npm run build      # ထုတ်လွှတ်မှုအတွက် တည်ဆောက်ပါ
npm run lint       # ESLint ကို ပြေးပါ
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API ဆာဗာကို စတင်ပါ
npm run lint       # ESLint ကို ပြေးပါ
npm run format     # Prettier နဲ့ ဖော်မတ်လုပ်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ဘရောက်ဇာအလိုက်နဲ့ ပရိုဂရမ်ချိတ်ဆက်မှုများ ဖတ်သွင်းရန် ညွှန်ကြားချက်များကို လိုက်နာပါ။
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# index.html ကို browser ဖြင့်ဖွင့်ပါ သို့မဟုတ် Live Server ကိုအသုံးပြုပါ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ပတ်ဝန်းကျင်အပြောင်းအလဲကို သတ်မှတ်ပါ။
python api.py
```

## Development Workflow

### For Content Contributors

1. **GitHub အကောင့်တွင် repository ကို fork လုပ်ပါ**
2. **Fork ကို ဒေသငယ်တွင် clone လုပ်ပါ**
3. **မိမိပြင်ဆင်လိုသည့် ပြောင်းလဲမှုများအတွက် ဂျိုးဓာတ် အသစ် ဖန်တီးပါ**
4. သင်ခန်းစာအကြောင်းအရာ သို့မဟုတ် ကိုးဒ် နမူနာများ ပြင်ဆင်ပါ
5. ဆိုင်သော project ဖိုလ်ဒါများတွင် ကိုးဒ် ပြောင်းလဲမှု စမ်းသပ်ပါ
6. အသုံးချနည်းလမ်းညွှန်ချက်များနှင့် အညီ pull request များတင်သွင်းပါ

### For Learners

1. Fork သို့မဟုတ် clone လုပ်ပါ
2. သင်ခန်းစာ ဖိုလ်ဒါများကို အဆက်ဆက် သွားပါ
3. တစ်ခန်းချင်း README ဖိုင်များဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မီ မေးပွဲများ ဖြေဆိုပါ
5. သင်ခန်းစာ ဖိုလ်ဒါများရှိ ကိုးဒ်နမူနာများ ဖြတ်သန်း လေ့လာပါ
6. တာဝန်နှင့် စိန်ခေါ်မှုများ ပြီးမြောက်စွာ ဖြေရှင်းပါ
7. သင်ခန်းစာပြီးနောက် မေးပွဲများ ဖြေဆိုပါ

### Live Development

- **စာရွက်စာတမ်းများ**: root တွင် `docsify serve` အသုံးပြု၍ လုပ်ဆောင်ပါ (port 3000)
- **Quiz App**: quiz-app ဖိုလ်ဒါတွင် `npm run dev` အလုပ်အမှန်ပြုပါ
- **Projects**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension ကို သုံးပါ
- **API Projects**: API သက်ဆိုင်ရာ ဖိုလ်ဒါများ၌ `npm start` ကို လည်ပတ်ပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ကုဒ်စတိုင် ပြဿနာများ ရှိမရှိ စစ်ဆေးပါ
npm run build      # ဆောက်လုပ်မှု အောင်မြင်မှုကို အတည်ပြုပါ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုဒ်ပုံစံ အမှားများကို စစ်ဆေးပါ
node server.js     # Error မရှိဘဲ ဆာဗာ စတင်လုပ်ဆောင်နိုင်မှုကို သေချာစွာ စစ်ဆေးပါ
```

### General Testing Approach

- အပြည့်စုံသော အလိုအလျောက် စမ်းသပ်မှု မပါဝင်သော ပညာရေး repository ဖြစ်သည်
- လက်တွေ့စမ်းသပ်မှုမှာ အဓိကအားဖြင့်
  - ကိုးဒ်နမူနာများ အမှားမပေါ် အလုပ်လုပ်မှု
  - စာရွက်စာတမ်းများအတွင်း လင့်များမှန်ကန်မှု
  - ပရောဂျက် တည်ဆောက်မှု အောင်မြင်မှု
  - နမူနာများသည် သင်ကြားရေးအတွက် လိုက်နာမှု ရှိခြင်း

### Pre-submission Checks

- package.json ပါသော ဖိုလ်ဒါများတွင် `npm run lint` ပြီးစစ်ဆေးပါ
- Markdown links များမှန်ကန်စိစစ်ပါ
- ကိုးဒ်နမူနာများကို browser သို့မဟုတ် Node.js တွင် စမ်းသပ်ပါ
- ဘာသာပြန်မှုများသည် ဖွဲ့စည်းပုံကို ထိန်းသိမ်းခြင်းရှိပုံစစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- ခေတ်မီသော ES6+ စာလုံးကွက်များ အသုံးပြုပါ
- ပရောဂျက်များတွင် ပံ့ပိုးထားသည့် standard ESLint စည်းမျဉ်းများ လိုက်နာပါ
- ပညာရေး ရည်ရွယ်ချက်အတွက် အဓိပ္ပါယ်ရှိသည့် variable နှင့် function အမည်များအသုံးပြုပါ
- သင်ကြားသူ ထိန်းညွှန်ရန် မှတ်ချက်များ ထည့်သွင်းပါ
- Prettier ဖြင့် စာလုံးပုံစံ ဖော်ပြမှု

### HTML/CSS

- Semantic HTML5 အစိတ်အပိုင်းများ အသုံးပြုပါ
- တုံ့ပြန်နိုင်သော ဖော်မြူလာ အခြေခံချက်များ
- အတန်းအမည် သေချာ ကောင်းမွန်စွာ သတ်မှတ်ခြင်း
- CSS နည်းပညာများ သင်ကြားရေးအတွက် မှတ်ချက်ထည့်ရန်

### Python

- PEP 8 စတိုင် လမ်းညွှန်ချက်များ
- သန့်ရှင်းလတ်ဆတ်သော ပညာရေးရည်ရွယ် တည်ဆောက်ထားသည့် နမူနာများ
- လေ့လာသူများအတွက် အကူအညီဖြစ်စေရန် type hints ထည့်သွင်းခြင်း

### Markdown Documentation

- ခေါင်းစဉ် အဆင့်များ ထိရောက်သော စီမံချက်
- ဘာသာရေးဖော်ပြချက်ပါသော ကိုးဒ်ကွက်များ
- နောက်ထပ် အရင်းအမြစ်များသို့ လင့်ခ်များ
- `images/` ဖိုလ်ဒါများတွင် ဓာတ်ပုံများ နှင့် ပုံများ
- မျက်မှောက်စာသားများ တွင် သေချာသော alt စာသားများ၊ နှင့် ထောက်ပံ့မှု

### File Organization

- သင်ခန်းစာအမှတ်စဉ်ဖြင့် အမွှာများ (ဥပမာ- 1-getting-started-lessons, 2-js-basics, စသည်)
- တစ်ခုချင်း project တွင် `solution/` နှင့် မကြာခဏ `start/` သို့မဟုတ် `your-work/` ဖိုလ်ဒါများ ပါဝင်သည်
- သင်ခန်းစာအသီးသီး၏ `images/` ဖိုလ်ဒါများတွင် ဓာတ်ပုံများ သိမ်းဆည်းထားသည်
- ဘာသာပြန်မှုများကို `translations/{language-code}/` ဖိုလ်ဒါတွင် သိမ်းဆည်းထားသည်

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app သည် Azure Static Web Apps တွင် တပ်ဆင်ရန် ကြိုတင် ပြင်ဆင်ထားပါသည်-

```bash
cd quiz-app
npm run build      # dist/ ဖိုလ်ဒါကို ဖန်တီးသည်
# main သို့ push လုပ်သည်と GitHub Actions workflow ဖြင့် ဖြန့်ချိသည်
```

Azure Static Web Apps ပြင်ဆင်မှု-
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကို ထည့်သွင်းပါ
npm run convert               # docs မှ PDF ဖိုင် ဖန်တီးပါ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို ကမ္ဘာလုံးဆိုင်ရာ တပ်ဆင်ရန်
docsify serve                 # localhost:3000 တွင် ၀န်ဆောင်မှုတင်ရန်
```

### Project-specific Builds

ပရောဂျက် တစ်ခုချင်းစီတွင် မတူညီသည့် build လုပ်ငန်းစဉ်ရှိနိုင်ပါသည်-
- Vue projects: `npm run build` ဖြင့် ထုတ်လုပ်မှု bundle များ ဖန်တီးခြင်း
- Static projects: Build အဆင့် မရှိပါ, ဖိုင်များကိုတိုက်ရိုက် တင်ဆက်သည်

## Pull Request Guidelines

### Title Format

ပြောင်းလဲမှု နယ်ပယ်ကို ရှင်းလင်းဖော်ပြထားသည့် ခေါင်းစဉ်များ အသုံးပြုပါ-
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

PR တင်သွင်းမှီ

1. **Code Quality**:
   - ပရောဂျက် ဒိုင်ရက်ထရီများတွင် `npm run lint` ပြုလုပ်ပါ
   - လင့်န့် အမှားများ နှင့် အသိပေးချက်များအားလုံး ပြင်ဆင်ပါ

2. **Build Verification**:
   - အသုံးပြုမည့် ပရောဂျက်တွင် `npm run build` လုပ်ပါ
   - Build အမှား မရှိဖြစ်စေရန် စစ်ဆေးပါ

3. **Link Validation**:
   - Markdown link များအားလုံး စစ်ဆေးပါ
   - ဓာတ်ပုံ ဆက်သွယ်မှုများ အလုပ်လုပ်မှု စစ်ဆေးပါ

4. **Content Review**:
   - ရေးသားချက်များ စစ်ဆေးပါ (စာလုံးပေါင်း၊ သရုပ်ခွဲမှု)
   - ကိုးဒ်နမူနာများ မှန်ကန်ပြီး သင်ကြားမှုအတွက် သင့်တော်စေရန် စစ်ဆေးပါ
   - ဘာသာပြန် အကြောင်းအရာ မူရင်း၏ အဓိပ္ပါယ် ထိန်းသိမ်းမှုရှိရန် စစ်ဆေးပါ

### Contribution Requirements

- Microsoft CLA ကို လက်မှတ်ရေးထိုးရန် သဘောတူပါ (ပထမ PR တွင် စက်မှုစွဲချက်)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ကိုလိုက်နာပါ
- အသေးစိတ်လမ်းညွှန်ချက်များအတွက် [CONTRIBUTING.md](./CONTRIBUTING.md) ကိုကြည့်ပါ
- PR မှာ ပြဿနာနံပါတ်များ ပါရှိပါက ဖော်ပြပါ

### Review Process

- PR များကို စောင့်ကြည့်သူများနှင့် လူထုက တွေ့ဆုံသုံးသပ်ပါသည်
- ပညာရေးအတွက် သက်ဆိုင်သည့် ပြတ်သားမှုကို ဦးစားပေးပါသည်
- ကိုးဒ်နမူနာများသည် ယနေ့အချိန်အကောင်းဆုံး လမ်းစဉ်များနှင့်ကိုက်ညီရန်
- ဘာသာပြန်မှုများကို ထိရောက်မှုနှင့် ယဉ်ကျေးမှု သင့်တော်မှု ရှိရှိသုံးသပ်ပါသည်

## Translation System

### Automated Translation

- GitHub Actions တွင် co-op-translator workflow ကို အသုံးပြုသည်
- ၅၀ ကျော် ဘာသာစကားများသို့ အလိုအလျောက် ဘာသာပြန်သည်
- မူလ ဖိုင်များ ခုခံထားသော ဒိုင်ရက်ထရီများ၌ရှိသည်
- ဘာသာပြန်ထားသော ဖိုင်များ `translations/{language-code}/` တွင်ရှိသည်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` တွင် ဖိုင်ကို ရှာဖွေပါ
2. ဖွဲ့စည်းပုံ ထိန်းသိမ်းထားပြီး ကောင်းမွန်မှု မြှင့်တင်မှုများ ပြုလုပ်ပါ
3. ကိုးဒ် နမူနာများ သက်ဆိုင်ရာအတိုင်း လည်ပတ်နိုင်မှုရှိစေရန် သေချာစစ်ဆေးပါ
4. ဒေသဆိုင်ရာ quiz အကြောင်းအရာများ အကဲဖြတ် စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန်ဖိုင်များတွင် metadata header ပါရှိသည်-
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

**Quiz app စတင်မရခြင်း**:
- Node.js ဗားရှင်း (v14+) ဖြစ်ဟု စစ်ဆေးပါ
- `node_modules` နှင့် `package-lock.json` ဖိုင်များ ဖျက်ပြီး `npm install` ထပ်လုပ်ပါ
- port မှုကိုစစ်ဆေးပါ (ပုံမှန်အားဖြင့် Vite သည် port 5173 ကိုသုံးသည်)

**API server မစတင်နိုင်ခြင်း**:
- Node.js ဗားရှင်း (node >=10) ဖြည့်စွက်စစ်ဆေးပါ
- port သုံးနေခြင်းရှိမရှိ စစ်ဆေးပါ
- စနစ်တကျ `npm install` ဖြင့် dependency များ ထည့်သွင်းခြင်းရှိမှန်း စစ်ဆေးပါ

**Browser extension မတင်နိုင်ခြင်း**:
- manifest.json ဖိုင်ကို မှန်ကန်စွာ ဖော်ပြထားမှုကို စစ်ဆေးပါ
- browser console တွင် အမှားပေါ်ရှိမရှိကြည့်ပါ
- browser အလိုက် extension install လမ်းညွှန်ချက်အတိုင်း လုပ်ဆောင်ပါ

**Python chat project ပြဿနာများ**:
- OpenAI package ထည့်သွင်းရန်: `pip install openai`
- GITHUB_TOKEN ဘက်Env variable မှတ်ထားပါ
- GitHub Models သို့ ဝင်ရောက်ခွင့် သေချာစစ်ဆေးပါ

**Docsify စာရွက်စာတမ်း မပေးဆောင်ခြင်း**:
- docsify-cli ကို global install လုပ်ပါ: `npm install -g docsify-cli`
- repository root ထဲမှ run နိုင်ရန် စစ်ဆေးပါ
- `docs/_sidebar.md` ရှိမရှိစစ်ဆေးပါ

### Development Environment Tips

- HTML ပရောဂျက်များအတွက် VS Code Live Server extension အသုံးပြုပါ
- ESLint နှင့် Prettier extension များ ထည့်သွင်းပါ
- JavaScript debug အတွက် browser DevTools အသုံးပြုပါ
- Vue ပရောဂျက်များအတွက် Vue DevTools browser extension ထည့်သွင်းပါ

### Performance Considerations

- ဘာသာပြန်ဖိုင် အများကြီး (၅၀+ ဘာသာ) ရှိသောကြောင့် ဖိုင် clone ထားခြင်း ကြီးမားနိုင်သည်
- အကြောင်းအရာမှသာ လုပ်ရင် shallow clone ကို အသုံးပြုနိုင်သည်: `git clone --depth 1`
- အင်္ဂလိပ်အကြောင်းအရာ ဆက်လက် အလုပ်လုပ်မည့်အခါ ဘာသာပြန်စာရွက်များကို ရှာဖွေမှုမှ ရှောင်ရှားပါ
- Build ဆောင်ရွက်မှုများသည် ပထမဆုံး run အချိန်တွင် နှေးကွေးနိုင်သည် (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys များကို repository တွင် မတင်ပါနှင့်
- `.env` ဖိုင်များ အသုံးပြုပါ ( `.gitignore` ထဲတွင်ဖြစ်ပြီး)
- project README များတွင် လိုအပ်သော environment variables များ စာရင်းသွင်းပါ

### Python Projects

- Virtual environment အသုံးပြုရန်: `python -m venv venv`
- dependency များ ပြောင်းလဲမှုရှိ သော်လည်း အဆင့်မြှင့်တင်ထားပါ
- GitHub tokens များသည် အနည်းဆုံးလိုအပ်သော ခွင့်များသာ ရှိပါစေရန်

### GitHub Models Access

- Personal Access Tokens (PAT) အတွက် GitHub Models အသုံးပြုရန်လိုအပ်သည်
- Tokens များကို environment variables အဖြစ် သိမ်းဆည်းထားပါ
- Tokens သို့မဟုတ် credentials များ ကို ဘဲ commit မလုပ်ပါနှင့်

## Additional Notes

### Target Audience

- ဝဘ်ဖွံ့ဖြိုးတိုးတက်ရေး အထူးစတင်သူများ
- ကျောင်းသားများနှင့် ကိုယ်တိုင်သင်ယူသူများ
- သင်တန်းဆရာများ စတင်သင်ကြားရာတွင် အသုံးပြုသူများ
- အရည်အသွေးမြှင့်တင်ရေး အတွက် အသေးစားနည်းလမ်းဖြင့် ဖန်တီးထားသောအကြောင်းအရာ

### Educational Philosophy

- ပရောဂျက်အခြေပြု သင်ကြားမှု ပြုလုပ်ခြင်း
- မေးပွဲများမှတဆင့် သိမှုစစ်ဆေးခြင်း
- လက်တွဲကူညီ လေ့ကျင့်ခန်းများ
- လက်တွေ့ အသုံးပြုမှု ဥပမာများ
- Framework မတိုင်မီ အခြေခံများကို ဦးစားပေးသင်ကြားခြင်း

### Repository Maintenance

- သင်ယူသူများနှင့် ပါဝင်သူများ ပိုမိုတက်ကြွသော လူထုစုစည်းမှု
- Dependencies နှင့် အကြောင်းအရာများ ပုံမှန် ပြုပြင်ထားခြင်း
- ပြဿနာများနှင့် ဆွေးနွေးမှုများ စောင့်ကြည့်မှုဖြင့် ထိန်းသိမ်းမှု
- ဘာသာပြန်ခြင်းအား GitHub Actions ဖြင့် အလိုအလျောက် ပြုလုပ်မှု

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) သည် သင်ယူသူများအတွက် အတူတူအသုံးပြုရန် ဖြစ်သည်
- အပိုသင်တန်းများဖြစ်သည့် Generative AI, Data Science, ML, IoT သင်ရိုးများ ရရှိနိုင်ပါသည်

### Working with Specific Projects

သီးခြား project များအတွက် အသေးစိတ် လမ်းညွှန်ချက်များကို အောက်ပါ README ဖိုင်များတွင် ပြန်လည်ကြည့်ရှုနိုင်သည်-
- `quiz-app/README.md` - Vue 3 quiz လျှောက်လွှာ
- `7-bank-project/README.md` - အတည်ပြု authentication ပါဝင်သည့် ဘဏ်လုပ်ငန်း လျှောက်လွှာ
- `5-browser-extension/README.md` - Browser Extension ဖန်တီးခြင်း
- `6-space-game/README.md` - Canvas အခြေပြုဂိမ်း ဖန်တီးခြင်း
- `9-chat-project/README.md` - AI chat assistant ပရောဂျက်

### Monorepo Structure

ယင်းတွင် အမှန်တကယ် Monorepo မဟုတ်ပါ၊ သို့သော် မတူညီသည့် ပရောဂျက်များ အများကြီး ပါဝင်သည့် repository ဖြစ်သည်-
- အတှကျ သင်ခန်းစာ တစ်ခုချင်းစီ သီးခြားဖြစ်သည်
- ထိုပရောဂျက်များတွင် dependency မျှဝေမှုမရှိပါ
- တစ်ခုချင်း project များအပေါ် ပြုလုပ်ရာတွင် တစ်ခုတည်းကို အကျိုးသက်ရောက်မှု မရှိစေရန် လုပ်ဆောင်နိုင်သည်
- လုံးဝသင်ရိုးအတက် အတွေ့အကြုံရှိစေရန် repository အားလုံးကို clone လုပ်နိုင်သည်

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**တားမြစ်ချက်**  
ဤစာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှုဖြစ်သည့် [Co-op Translator](https://github.com/Azure/co-op-translator) အသုံးပြု၍ ဘာသာပြန်ထားခြင်းဖြစ်ပါသည်။ ကျွန်ုပ်တို့သည်တိကျမှန်ကန်မှုအတွက်ကြိုးစားသည်ဖြစ်သော်လည်း၊ စက်စွမ်းအားဘာသာပြန်ဆိုမှုများတွင် အမှားအယွင်းများ၊ မမှန်ကန်မှုများ ရှိနိုင်သည်ကို အသိပေးပါရစေ။ မူလစာတမ်းသည် မိခင်ဘာသာစကားဖြင့် ရေးသားထားသည့် ညွှန်ကြားချက်အရင်းအမြစ်အဖြစ် စဉ်းစားရမည်ဖြစ်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ကျွမ်းကျင်သူများမှ ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ချက်ကို အသုံးပြုမှုကြောင့် ဖြစ်ပေါ်လာနိုင်သော နားမလည်မှုများ သို့မဟုတ် အမှားဖော်ပြချက်များအတွက် ကျွန်ုပ်တို့သည် တာဝန်မခံယူပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->