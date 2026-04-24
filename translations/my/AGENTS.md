# AGENTS.md

## Project Overview

ဒီဟာက သင်ပုန်းများအတွက် ဝဘ်ဖွံ့ဖြိုးမှုအခြေခံများကို သင်ကြားပေးရန် အသုံးပြုသော ပညာရေး သင္ခန်းစာအစီအစဉ် repository တစ်ခုဖြစ်သည်။ ဒီသင်ခန်းစာအစီအစဉ်မှာ Microsoft Cloud Advocates မှ ဖန်တီးထားတဲ့ အာရုံစိုက်မှု ၁၂ ပတ်စာ comprehensive သင်ခန်းစာတစ်ခုဖြစ်ပြီး JavaScript၊ CSS၊ HTML တို့ကို ဖုံးလွှမ်းသည့် လက်တွေ့ ၂၄ ခုသော သင်ခန်းစာများ ပါဝင်သည်။

### Key Components

- **ပညာရေးအကြောင်းအရာ**: စီမံဆောင်ရွက်ခြင်းအခြေခံ module များအဖြစ် စီစဉ်ထားသော ၂၄ ခုသော သင်ခန်းစာများ
- **လက်တွေ့ ပရောဂျက်များ**: Terrarium၊ Typing Game၊ Browser Extension၊ Space Game၊ Banking App၊ Code Editor နှင့် AI Chat Assistant တို့
- **အပြန်အလှန် စိစစ်မေးခွန်းများ**: စာမေးပွဲ ၄၈ ခု၊ မေးခွန်း ၃ ခုစီဖြင့် (သင်ခန်းစာမတိုင်မီ / မပြီးစဉ် စိစစ်ခြင်းများ)
- **ဘာသာစကား များစွာ ဆက်သွယ်မှု**: GitHub Actions မှတစ်ဆင့် ၅၀ ကျော်သော ဘာသာစကားများအလိုက် အလိုအလျောက် ဘာသာပြန်ခြင်း
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ပရောဂျက်များအတွက်)

### Architecture

- သင်ခန်းစာအခြေခံပညာရေး repository
- သင်ခန်းစာ တစ်ခုချင်းစီအတွက် README၊ code နမူနာများနှင့် ဖြေရှင်းနည်းများပါရှိသည်
- project များကို သီးသန့် ဖိုလ်ဒါများတွင်ထားသည် (quiz-app, အမျိုးမျိုးသော သင်ခန်းစာပရောဂျက်များ)
- GitHub Actions (co-op-translator) ဖြင့် ဘာသာပြန် စနစ်
- Docsify ဖြင့် စာရွက်စာတမ်းများ ပေးပို့ပြီး PDF အဖြစ် ရနိုင်သည်

## Setup Commands

ဒီ repository ကို ပညာရေးအကြောင်းအရာ သုံးစွဲရန်အဓိက ဖြစ်သည်။ ဖတ်ရှုလိုသော ပရောဂျက်များ အတွက် -

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ဖွံ့ဖြိုးတိုးတက်မှုဆာဗာကို စတင်ပါ
npm run build      # ထုတ်လုပ်မှုအတွက် တည်ဆောက်ပါ
npm run lint       # ESLint ကို chạyပါ။
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API ဆားဗာကို စတင်ပါ
npm run lint       # ESLint ကို chạy run ပါ
npm run format     # Prettier နဲ့ ဖော်မက်လုပ်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ေဘရာဇာအလိုက္ပင္ပိတ္ခ်ထားသည့္ အေသးစိတ္ညႊန္ၾကားခ်က္မ်ားကို လိုက္နာပါ
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
# GITHUB_TOKEN ပတ်ဝန်းကျင်တန်ဖိုးကိုသတ်မှတ်ပါ
python api.py
```

## Development Workflow

### For Content Contributors

1. **Repository ကို fork** လုပ်၍ သင်၏ GitHub အကောင့်သို့ ယူပါ
2. **Fork ကို ဒေသဆိုင်ရာ clone** လုပ်ပါ
3. ပြင်ဆင်မှုများအတွက် အသစ်သော branch တစ်ခုဖန်တီးပါ
4. သင်ခန်းစာအကြောင်းအရာ သို့မဟုတ် code နမူနာများ ပြင်ဆင်ပါ
5. ပရောဂျက်ဖိုလ်ဒါများတွင် code ပြင်ဆင်မှုများ စမ်းသပ်ပါ
6. ကူညီပံ့ပိုးမှု လမ်းညွှန်ချက်များ အတိုင်း pull request များ တင်ပါ

### For Learners

1. Repository ကို fork သို့မဟုတ် clone လုပ်ပါ
2. သင်ခန်းစာ ဖိုလ်ဒါများကို အဆင့်လိုက် သွားပါ
3. သင်ခန်းစာတစ်ခုချင်း ရေးထားသော README ဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မီ စိစစ်မေးခွန်းများ ဖြေဆိုပါ
5. သင်ခန်းစာ ဖိုလ်ဒါများမှ code နမူနာများ အသုံးပြုပါ
6. ဖြေကြားချက်များနှင့် စိန်ခေါ်မှုများ ပြီးမြောက်အောင်လုပ်ပါ
7. သင်ခန်းစာပြီးနောက် စိစစ်မေးခွန်းများ ဖြေဆိုပါ

### Live Development

- **စာရွက်စာတမ်းများ**: repository အမြောက်မှာ `docsify serve` ကို ကြိုးပမ်းတင်ပါ (port 3000)
- **Quiz App**: quiz-app ဖိုလ်ဒါတွင် `npm run dev` ကို ပြေးပါ
- **Projects**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension အသုံးပြုပါ
- **API Projects**: API ဖိုလ်ဒါများ၌ `npm start` ကို ပြေးပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ကုဒ်ပုံစံပြဿနာများကို စစ်ဆေးပါ
npm run build      # တည်ဆောက်မှုအောင်မြင်မှုကို သေချာစေပါ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုဒ်ပုံစံပြဿနာများစစ်ဆေးပါ
node server.js     # error မဖြစ်ဘဲ server စတင်နိုင်မှုကိုအတည်ပြုပါ
```

### General Testing Approach

- ဒီဟာက ကျယ်ပြန့်သော အလိုအလျောက်စမ်းသပ်မှု မပါဝင်သည့် ပညာရေး repository ဖြစ်သည်
- လက်မောင်းဖြင့် စမ်းသပ်မှုတွင် အဓိကထားသည်မှာ -
  - Code နမူနာများ အမှားမရှိစွာ ပြေးနိုင်မှု
  - စာရွက်စာတမ်း link များ တိကျမှန်ကန်မှု
  - ပရောဂျက်များ build ပြီးမြောက်မှု
  - နမူနာများသည် လေ့လာသူများအတွက် ပညာရေး အခြေခံမူများနှင့် ကိုက်ညီစွာ ရေးသားထားမှု

### Pre-submission Checks

- package.json ရှိသော ဖိုလ်ဒါများတွင် `npm run lint` ကို run ပါ
- markdown link များ အတည်ပြုပါ
- Browser သို့မဟုတ် Node.js တွင် code နမူနာများ စမ်းသပ်ပါ
- ဘာသာပြန်ထားမှုများ ပုံစံတိကျမှု ထိန်းသိမ်းထားမှုစစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- နောက်ဆုံး ES6+ syntax များ အသုံးပြုပါ
- Project များတွင် ရှိသော standard ESLint configuration ကို လိုက်နာပါ
- ပညာရေး ရည်ရွယ်ချက်ဖြင့် အဓိကရှိသော variable နေရာများနှင့် function နာမည်များ အဓိကထားသုံးပါ
- လေ့လာသူများအတွက် အကြောင်းအရာ ရှင်းလင်းစွာ မှတ်ချက် ထည့်ပါ
- Prettier ဖြင့် ဖော်မက်နှိပ်ထားသောနေရာများ၌ အသုံးပြုပါ

### HTML/CSS

- Semantic HTML5 ណ် များ အသုံးပြုပါ
- တုန့်ပြန်မှုရှိသည့် ဒီဇိုင်း များ
- ရှင်းလင်းသည့် class နာမည် စနစ်များ
- CSS နည်းဗျူဟာများ အတွက် မှတ်ချက်များ ထည့်ရေးသားပါ

### Python

- PEP 8 စတိုင် လမ်းညွှန်ချက်များလိုက်နာပါ
- ပညာရေး ရည်ရွယ်ချက်ဖြင့် ရှင်းလင်းသော code နမူနာများ
- လေ့လာသူများအတွက် အထောက်အကူဖြစ်နိုင်သော type hints များ ထည့်ပါ

### Markdown Documentation

- ရှင်းလင်းသော ခေါင်းစဉ်အဆင့်မြှင့်များ
- ဘာသာပြန်အသုံးပြုထားသော code blocks များ
- ထပ်ဆောင်း အရင်းအမြစ်များသို့ ချိတ်ဆက်ထားမှု
- `images/` ဖိုလ်ဒါထဲ screenshot နှင့် ရုပ်ပုံများ
- ရုပ်ပုံများအတွက် အလေးထား သတ်မှတ်ချက်များ

### File Organization

- သင်ခန်းစာများကို အဆင့်လိုက် နံပါတ်စဉ်ထားခြင်း (1-getting-started-lessons, 2-js-basics, စသည်)
- Project တစ်ခုချင်းစီတွင် `solution/` နှင့် တစ်ခါတစ်ရံ `start/` သို့မဟုတ် `your-work/` ဖိုလ်ဒါများ ပါဝင်
- Lesson-specific `images/` ဖိုလ်ဒါထဲတွင် ရုပ်ပုံများ သိမ်းဆည်းထားခြင်း
- ဘာသာပြန်ထားသော ဖိုင်များကို `translations/{language-code}/` ဖိုလ်ဒါတွင် ထားရှိခြင်း

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Quiz-app ကို Azure Static Web Apps များအတွက် ပြင်ဆင်ထားသည် -

```bash
cd quiz-app
npm run build      # dist/ ဖိုလ်ဒါကိုဖန်တီးသည်
# main သို့ push ပြုလုပ်သည်နှင့်အမျှ GitHub Actions workflow ဖြင့် ဖြန့်ချိသည်
```

Azure Static Web Apps ပြင်ဆင်မှုများ:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကိုထည့်သွင်းပါ
npm run convert               # docs မှ PDF ဖန်တီးပါ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို ကမ္ဘာလုံးဆိုင်ရာတွင် တပ်ဆင်ရန်
docsify serve                 # localhost:3000 တွင် ဆာဗ်လုပ်ရန်
```

### Project-specific Builds

Project တစ်ခုချင်းစီတွင် build လုပ်ငန်းစဉ် ရှိနိုင်သည်။
- Vue ပရောဂျက်များ: `npm run build` ဖြင့် production bundle များ ဖန်တီးခြင်း
- Static ပရောဂျက်များ: build လိုအပ်မှု မရှိ၊ ဖိုင်များကို တိုက်ရိုက်ထည့်ပေးခြင်း

## Pull Request Guidelines

### Title Format

ပြင်ဆင်မှု အမျိုးအစားကို သေချာဖော်ပြသည့် အမည်တပ်ပါ -
- `[Quiz-app] သင်ခန်းစာ X အတွက် quiz အသစ် ထည့်ခြင်း`
- `[Lesson-3] terrarium ပရောဂျက်မှ တစ်အချက် ပြင်ဆင်မှု`
- `[Translation] သင်ခန်းစာ 5 အတွက် စပိန် ဘာသာပြန် ဆက်စပ်မှု`
- `[Docs] အသုံးပြုမှု လမ်းညွှန်အချက် ပြင်ဆင်မှု`

### Required Checks

PR တင်မီလုပ်ဆောင်ရန် -

1. **Code Quality**:
   - ပြင်ဆင်မှုရှိသော project directory များတွင် `npm run lint` ပြေးပါ
   - အမှားနှင့် သတိပေးချက်များကို ပြင်ဆင်ပါ

2. **Build Verification**:
   - သင့်လျော်ပါက `npm run build` ပြေးပြီး၊ build error မရှိစေပါ

3. **Link Validation**:
   - markdown link များ စမ်းသပ်ပါ
   - image ဖိုင်များ ရှိမှု အတည်ပြုပါ

4. **Content Review**:
   - စာလုံးပေါင်းနှင့် 문법 ပြည့်စုံမှု စစ်ဆေးပါ
   - Code နမူနာများ မှန်ကန်ပြီး ပညာရေးအတွက် သင့်တော်မှုရှိသည်ကို သေချာစေပါ
   - ဘာသာပြန်ထားမှုများ အဓိပ္ပါယ်ကို ထိန်းသိမ်းထားသည်ကို စစ်ဆေးပါ

### Contribution Requirements

- Microsoft CLA (ပထမဆုံး PR တင်သည်နှင့်အလိုအလြော့ စစ်ဆေးမည်)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)ကို လိုက်နာပါ
- [CONTRIBUTING.md](./CONTRIBUTING.md) တွင် အသေးစိတ် လမ်းညွှန်ချက်များ ကြည့်ရှုပါ
- Bug report / feature request ပြုလုပ်ပြီး PR ဖော်ပြချက်တွင် အချိန်နှင့်ကျေရာ issue နံပါတ် ရေးပါ

### Review Process

- PR များကို maintainers နှင့် community မှ စိစစ်သုံးသပ်
- ပညာရေး ရည်ရွယ်ချက်အခြေခံ၍ ရှင်းလင်းမှု ဦးစားပေး
- Code နမူနာများမှာ လက်ရှိ နည်းပညာများနှင့် အကောင်းဆုံးလေ့ကျင့်မှုများလိုက်နာမှုရှိခြင်း
- ဘာသာပြန်အဖြစ်မှန် ပြုလုပ်မှုကို စိစစ်

## Translation System

### Automated Translation

- GitHub Actions နှင့် co-op-translator workflow ကိုအသုံးပြုသည်
- ၅၀ ကျော် ဘာသာစကား အလိုအလျောက် ဘာသာပြန် ပေးသည်
- ဇာတိ ဖိုင်များသည် main directory များအတွင်းရှိသည်
- ဘာသာပြန်ထားသော ဖိုင်များကို `translations/{language-code}/` ထဲမှာ သိမ်းဆည်းသည်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` ထဲမှ ဖိုင် ရှာပါ
2. ဖိုင်ပုံစံနှင့် ဖွဲ့စည်းမှု မပျက်စီးစေဘဲ ပြင်ဆင်ချက်များ ပြုလုပ်ပါ
3. Code နမူနာများ သည် လိပ်ပြာစွာ လည်ပတ်နေရသည်ကို သေချာစိစစ်ပါ
4. ဒေသဆိုင်ရာ quiz အကြောင်းအရာများ လည်း စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန်ထားသော ဖိုင်များတွင် metadata header ပါဝင်သည်-
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
- Node.js ဗားရှင်း (v14+ ကောင်းမွန်သည်) စစ်ဆေးပါ
- `node_modules` နှင့် `package-lock.json` ဖျက်ပြီး `npm install` ပြန်လုပ်ပါ
- Port တတ်နိုင်သော ပြဿနာများ စစ်ဆေးပါ (default: Vite ကို ၅၁၇၃ Port အသုံးပြုသည်)

**API server မစတင်နိုင်ခြင်း**:
- Node.js ဗားရှင်း (node >=10) စစ်ဆေးပါ
- Port နှစ်ခုစွဲမထားခြင်း၊ အသုံးပြုနေခြင်း စစ်ဆေးပါ
- လိုအပ်သော dependency များ `npm install` ဖြင့် ထည့်သွင်းထားကြောင်း အတည်ပြုပါ

**Browser extension မတင်ရောက်ခြင်း**:
- manifest.json ဖိုင် မမှားယွင်းစွာ ရေးသားထားခြင်း စစ်ပါ
- Browser console တွင် error များရှိမရှိ စစ်ဆေးပါ
- Browser အမျိုးအစားနှင့် ကိုက်ညီသော installation လမ်းညွှန်ချက်များ လိုက်နာပါ

**Python chat project ပြဿနာများ**:
- OpenAI package ကို `pip install openai` ဖြင့် တပ်ဆင်ပါ
- GITHUB_TOKEN Environment variable ရှိပါစေ
- GitHub Models ခွင့်ပြုခွင့်များ စစ်ဆေးပါ

**Docsify မှ docs မပေးပို့ခြင်း**:
- `docsify-cli` ကို ကမ္ဘာတစ်လွှား အဆင့် အလိုအလျောက် တပ်ဆင်ရန် `npm install -g docsify-cli`
- Repository root မှ run နေစဉ်
- `docs/_sidebar.md` ဖိုင် ရှိမရှိ စစ်ဆေးပါ

### Development Environment Tips

- HTML project များအတွက် VS Code Live Server extension ကို အသုံးပြုပါ
- သေချာရှိစေရန် ESLint နှင့် Prettier extension များ တပ်ဆင်ပါ
- JavaScript debugging အတွက် browser DevTools ကို အသုံးပြုပါ
- Vue project များအတွက် Vue DevTools browser extension တပ်ဆင်ပါ

### Performance Considerations

- ဘာသာပြန်ထားသော ဖိုင်များ ၅၀ ကျော်ရှိမှုကြောင့် repository တင်ယူမှု ကြီးမားနိုင်
- တိုတောင်းသော clone လုပ်ရန် `git clone --depth 1` အသုံးပြုပါ
- အင်္ဂလိပ်ဘာသာ အကြောင်းအရာများအတွက် ဘာသာပြန်ဖိုင်များ ရှောင်ကြဉ်ပါ
- ပထမဆုံး run အချိန်တွင် build လုပ်ငန်းစဉ်များနှင့် npm install သည် ကြာမြင့်နိုင်သည်

## Security Considerations

### Environment Variables

- API keys မည်သည့်အချိန်၌မဆို repository ထဲတွင် ထည့်မထားပါနှင့်
- `.env` ဖိုင်များ (`.gitignore` ထဲတွင် ပါရှိဆဲ)
- Project များ၏ README တွင် လိုအပ်သော environment variable များ ဖော်ပြထားသည်

### Python Projects

- virtual environment အသုံးပြုပါ - `python -m venv venv`
- dependency များကို အဆက်မပြတ် update လုပ်ပါ
- GitHub tokens များကို လိုအပ်သမျှ permissions ထက် သက်သေကောင်းများသာ ရယူပါ

### GitHub Models Access

- GitHub Models အသုံးပြုရန် Personal Access Tokens (PAT) လိုအပ်သည်
- Token များကို environment variables အဖြစ် သိမ်းဆည်းပါ
- Token များနှင့် credentials များကို repository တွင် မထည့်ရန် သတိထားပါ

## Additional Notes

### Target Audience

- ဝဘ်ဖွံ့ဖြိုးမှုအတွက် အစ ပြီးစီးစွာ မသိသူများ
- ကျောင်းသားများနှင့် ကိုယ်တိုင် လေ့လာသူများ
- သင်တန်းဆရာများ၊ အတန်းခန်းတွင် အသုံးပြုသူများ
- Accessibility နှင့် တဖြည်းဖြည်း ကျွမ်းကျင်မှု တိုးမြှင့်ရေး ရည်ရွယ်ချက် ပါဝင်သည်

### Educational Philosophy

- Project-based learning နည်းလမ်း အသုံးပြုခြင်း
- knowledge checks (quiz) များ ကြိမ်နှုန်းမြင့်ရေးရာ
- လက်တွေ့ coding လေ့ကျင့်မှုများ
- အမှန်တကယ် အသုံးချနိုင်သော နမူနာများ
- framework မတိုင်ခင် အခြေခံများ အဓိကထားခြင်း

### Repository Maintenance

- ဆရာသင်သူများနှင့် ကိုယ်တိုင် ကူညီသူ အပေါင်းအသင်း တက်ကြွစွာ အတူဆောင်ရွက်မှု
- dependency များနှင့် content များအား နေ့စဉ် ပြုပြင် တိုးတက်မှု
- maintainers မှ issues နှင့် discussions များ စောင့်ကြည့် စစ်ဆေးမှု
- GitHub Actions ဖြင့် ဘာသာပြန် အလိုအလျောက် update ရယူခြင်း

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ကို လေ့လာသူများအတွက် အကြံပြု
- အပို သင်ခန်းစာများ - Generative AI, Data Science, ML, IoT သင်ခန်းစာစနစ်များ ရရှိနိုင်

### Working with Specific Projects

တိကျသော ပရောဂျက်များအတွက် အသေးစိတ် လမ်းညွှန်ချက်များကို အောက်ပါ README ဖိုင်များတွင် ကြည့်ရှုနိုင်သည် -
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - authentication ပါဝင်သည့် Banking app
- `5-browser-extension/README.md` - Browser extension ဖွံ့ဖြိုးမှု
- `6-space-game/README.md` - Canvas ဆိုဒ် game ဖန်တီးခြင်း
- `9-chat-project/README.md` - AI Chat Assistant ပရောဂျက်

### Monorepo Structure

Monorepo တစ်ခု မဟုတ်ပေမယ့် ဒီ repository အတွင်း သီးခြားသော project များစွာ ပါဝင်သည် -
- သင်ခန်းစာများ အလိုက် အထုပ်ပြန်ထားသည်
- Project များ dependency မျှဝေပုံမရှိသည့် ဆိုက်များဖြစ်သည်
- ပရောဂျက်တစ်ခုချင်း၌ အလုပ်လုပ်ရာ ယင်းအခြား project များ ထိခိုက်မှုမရှိခြင်း
- အပြည့်တန်ဆာ ပညာရေးအကျိုးဖြစ်အောင် ရယူလိုလျှင် repository ကို အားလုံး clone လုပ်နိုင်မှု

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**အကြောင်းကြားချက်**:  
ဤစာတမ်းကို AI ဘာသာပြန်စနစ် [Co-op Translator](https://github.com/Azure/co-op-translator) အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ တိကျမှန်ကန်မှုအတွက် ကြိုးစားပေမယ့် အလိုအလျောက် ဘာသာပြန်ခြင်းသည် အမှားများ သို့မဟုတ် မှားယွင်းမှုများ ပါဝင်နိုင်ကြောင်း သတိပြုပါ။ မူလစာတမ်းကို သူ့၏ မူလဘာသာဖြင့် ထုတ်ပြန်ထားသော စာတမ်းကို ကိုးကားသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် ပရော်ဖက်ရှင်နယ် လူသားဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ချက်ကို အသုံးပြုမှုမှ ဖြစ်ပေါ်နိုင်သည့် မနားမလည်မှုများ သို့မဟုတ် မွမ်းမံသည့် အနက်မန္တလေးများအတွက် ကျွန်ုပ်တို့ ဘာသာ တာဝန်မခံပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->