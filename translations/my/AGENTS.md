# AGENTS.md

## Project Overview

ဤသည်မှာ ဝဘ်ဖွံ့ဖြိုးတိုးတက်ရေးအခြေခံများကို စတင်သင်ကြားလိုသူများအတွက် သင်တန်းသင်ကြားမှု သင်ရိုးစဉ်များကို ပေါင်းစပ်သိမ်းဆည်းထားသော ရှယ်ယာစာကြည့်တိုက်ဖြစ်သည်။ သင်ရိုးစဉ်သည် Microsoft Cloud Advocates မှ ဖန်တီးပြီး ၁၂ ပတ်တာ ပြည့်မီသည့် သီးသန့်သင်ခန်းစာ ၂၄ ခုပါဝင်သည်။ JavaScript, CSS နှင့် HTML ကို အခြေခံအားဖြင့် လက်တွေ့ကတ်သတ်သင်ယူရန် ရည်ရွယ်သည်။

### Key Components

- **ပညာရေး အကြောင်းအရာ**: ပြုလုပ်ထားသော သင်ခန်းစာ ၂၄ ခုကို ပရောဂျက်အခြေပြု မော်ဂျူးများအတွက် စနစ်တကျ စီမံခြင်း
- **လက်တွေ့ ပရောဂျက်များ**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, နှင့် AI Chat Assistant
- **အင်တာရေးတက်စ် Quiz များ**: သင်ခန်းစာမတိုင်မီ/ပြီးစီးမှုပြီး ချေးမေးခွန်း ၃ မေးခွန်း ပါဝင်သည့် Quiz ၄၈ ခု
- **ဘာသာစကားများစွာကို ပံ့ပိုးမှု**: GitHub Actions ဖြင့် ၅၀ ကျော် ဘာသာစကားအလိုအလျောက်ဘာသာပြန်ခြင်း
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ပရောဂျက်များအတွက်)

### Architecture

- သင်ခန်းစာအခြေပြု ပညာရေး ရှယ်ယာစာကြည့်တိုက်
- သင်ခန်းစာတိုင်းအတွက် README, ကုဒ်နမူနာများ နှင့် ဖြေရှင်းချက်များ ပါဝင်သည်
- သီးသန့်ပရောဂျက်များကို သီးခြားဖိုင်များတွင် ထားရှိသည် (quiz-app, မတူညီသည့် သင်ခန်းစာပရောဂျက်များ)
- GitHub Actions ကို အသုံးပြုသော ဘာသာပြန်ရေးစနစ် (co-op-translator)
- Docsify ဖြင့် အတန်းစာရွက်စာတမ်းများ ကို ဝန်ဆောင်မှုပေးပြီး PDF အဖြစ် ရယူနိုင်သည်

## Setup Commands

ဤ ရှယ်ယာစာကြည့်တိုက်သည် ပညာရေး အကြောင်းအရာများကို သုံးစွဲရန် အဓိကဖြစ်ပါသည်။ သီးခြား ပရောဂျက်များနှင့် အလုပ်လုပ်လိုပါက -

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ဖွံ့ဖြိုးမှု ဆားဗာကို စတင်ပါ
npm run build      # ထုတ်လုပ်မှုအတွက် ဖန်တီးပါ
npm run lint       # ESLint ကို လည်ပတ်ပါ
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API စာ্ভာကို စတင်ပါ
npm run lint       # ESLint ကို အလုပ်လုပ်ပါ
npm run format     # Prettier ဖြင့် ဖော်မတ်လုပ်ပါ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ဘရောက်ဇာအမျိုးအစားအလိုက် တိုးချဲ့မှုများထည့်သွင်းနည်းကို လိုက်နာပါ
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# index.html ကို browser မှာဖွင့်ပါ သို့မဟုတ် Live Server ကို အသုံးပြုပါ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ပတ်ဝန်းကျင်ပြင်ဆင်ချက်ကို သတ်မှတ်ပါ
python api.py
```

## Development Workflow

### For Content Contributors

1. သင်၏ GitHub အကောင့်သို့ ရှယ်ယာစာကြည့်တိုက်ကို **fork** လုပ်ပါ
2. သင့် fork ကို ဒေသခံသို့ **clone** လုပ်ပါ
3. သင့်ပြောင်းလဲချက်များအတွက် **branch အသစ်တစ်ခုဖန်တီးပါ**
4. သင်ခန်းစာ အကြောင်းအရာများ သို့မဟုတ် ကုဒ်နမူနာများကို ပြင်ဆင်ပါ
5. လိုက်ဖက်သော ပရောဂျက် ဒါရိုက်ထရီများ၌ ကုဒ်ပြောင်းလဲမှုများကို စမ်းသပ်ပါ
6. ပုံမှန်လုပ်ငန်း စည်းမျဉ်းများကို လိုက်နာ၍ ပြင်ဆင်စေလိုသည့် pull request များ တင်ပါ

### For Learners

1. ရှယ်ယာစာကြည့်တိုက်ကို fork သို့မဟုတ် clone လုပ်ပါ
2. သင်ခန်းစာ ဒါရိုက်ထရီများအတိုင်း ဆက်တိုက် သွားပါ
3. သင်ခန်းစာတိုင်း README ဖိုင်များ ဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မီ Quiz များ ပြုလုပ်ပါ
5. သင်ခန်းစာဖိုဒါများ ပေါ်ရှိ ကုဒ်နမူနာများ ဖြတ်သန်း လေ့လာပါ
6. တာဝန်ယူမှုများနှင့် စိန်ခေါ်မှုများကို ပြီးမြောက်စေပါ
7. သင်ခန်းစာပြီးဆုံးပါက မြို့ခွဲ Quiz များဖြေဆိုပါ

### Live Development

- **စာတမ်းများ**: root တွင် `docsify serve` command ဖြင့် စတင်ပါ (port 3000)
- **Quiz App**: quiz-app ဒါရိုက်ထရီတွင် `npm run dev` ကို ပြေးပါ
- **ပရောဂျက်များ**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension အသုံးပြုပါ
- **API ပရောဂျက်များ**: သက်ဆိုင်ရာ API ဒါရိုက်ထရီများတွင် `npm start` သို့ ပြေးပါ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ကုဒ်စတိုင်ပြဿနာများကိုစစ်ဆေးပါ
npm run build      # ဆောက်လုပ်မှုအောင်မြင်မှုကိုအတည်ပြုပါ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ကုဒ်စတိုင်ပြဿနာများကိုစစ်ပါ
node server.js     # စားမှတ်တင်စက်သည်အမှားမရှိဘဲစတင်နိုင်သည်ကိုအတည်ပြုပါ
```

### General Testing Approach

- ဒါဟာ ပညာရေး ရှယ်ယာစာကြည့်တိုက်ဖြစ်ပြီး မလွန်စာစစ်ဆေးမှုများ မပါဝင်ပါ
- လက်တွေ့စမ်းသပ်မှုများအတွက် အာရုံစိုက်မှာက:
  - ကုဒ်နမူနာများ အမှားမရှိ ဟောကောင်းစွာ လည်ပတ်ရမည်
  - စာရွက်စာတမ်းများအတွင်းရှိ လင့်ခ်များမှန်ကန်ရမည်
  - ပရောဂျက်များ အဆင်ပြေစွာ တည်ဆောက်နိုင်ရမည်
  - နမူနာများသည် ကောင်းမွန်သော လက်တွေ့ အလေ့အထများနှင့် ကိုက်ညီရမည်

### Pre-submission Checks

- package.json ပါဝင်သော ဒါရိုက်ထရီများတွင် `npm run lint` ကို လည်ပတ်ပါ
- markdown အတွင်းရှိလင့်ခ် များ သေချာစစ်ဆေးပါ
- ကုဒ်နမူနာများကို browser သို့ Node.js တွင် စမ်းသပ်ပါ
- ဘာသာပြန်ချက်များသည် ဖွဲ့စည်းမှုမှန်ကန်နေစေပါ

## Code Style Guidelines

### JavaScript

- နောက်ဆုံးပေါ် ES6+ စံတော်ချိန်ကို အသုံးပြုပါ
- ပရောဂျက်များတွင် သတ်မှတ်ထားသော ESLint ဖိုင်များကိုလိုက်နာပါ
- ပညာရေးအတွက် နားလည်ရန်လွယ်ကူသော variable နဲ့ function နာမည်များကို အသုံးပြုပါ
- လေ့လာသူများအတွက် အကြောင်းအရာရှင်းလင်းရေးသားချက်များ ထည့်ပါ
- Prettier ဖြင့် ဖော်แม့တ် ပြုပြင်ထားသောနေရာများမှာ အသုံးပြုပါ

### HTML/CSS

- Semantic HTML5 အချက်အလက်များ
- တုံ့ပြန်နိုင်သော ဒီဇိုင်း နည်းလမ်းများ
- အသောက်လေးနာမည်များ ထည့်သွင်းရေးသားခြင်း
- CSS နည်းပညာများကို လေ့လာသူများအတွက် ရှင်းပြချက်များ ထည့်ပါ

### Python

- PEP 8 စတိုင်နည်းလမ်းများလိုက်နာခြင်း
- ပညာရေးအတွက် ရှင်းလင်းနှုတ်ဆိတ်သော ကုဒ်နမူနာများ
- သင်ယူမှုအတွက် အဆင်ပြေသော Type hint များ ထည့်သွင်းရေးသားခြင်း

### Markdown Documentation

- ခေါင်းစဉ်အဆင့်သတ်မှတ်မှု ရှင်းလင်းခြင်း
- ဘာသာပြန်ခြင်းနှင့် သတ်မှတ်အပ္ပလီကေးရှင်းများပါရှိသော code block များ
- အပိုဆောင်းရင်းမြစ်များသို့ လင့်ခ်ထည့်ခြင်း
- `images/` ဖိုဒါများရှိ screenshot နှင့် ပုံများ
- ပုံများအတွက် အလတ်စာ (alt text) ထည့်သွင်းခြင်း Accessibility အတွက်

### File Organization

- သင်ခန်းစာများကို နံပါတ်စဥ်လိုက် ကျသော ဖိုင်နာမည်များ (ဥပမာ 1-getting-started-lessons, 2-js-basics ကဲ့သို့)
- ပရောဂျက်တစ်ခုစီမှာ `solution/` နှင့် `start/` သို့မဟုတ် `your-work/` ဒါရိုက်ထရီများ မြောက်မြားစွာရှိသည်
- ပုံများကို သင်ခန်းစာအလိုက် `images/` ဖိုဒါထဲသိမ်းဆည်းထားသည်
- ဘာသာပြန်ဆိုချက်များကို `translations/{language-code}/` ဖိုဒါအတွင်းသိမ်းဆည်းထားသည်

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ကို Azure Static Web Apps သို့ တင်ရန် သတ်မှတ်ထားသည်။

```bash
cd quiz-app
npm run build      # dist/ ဖိုလ်ဒါကို ဖန်တီးသည်
# main သို့ push လုပ်သောအခါ GitHub Actions workflow ဖြင့် တင်သွင်းသည်
```

Azure Static Web Apps သတ်မှတ်ချက်များ:
- **app location**: `/quiz-app`
- **output location**: `dist`
- **workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ကို သွင်းပါ
npm run convert               # docs မှ PDF ဖိုင်ထုတ်လုပ်ပါ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ကို အနှံ့လတ်တလော တပ်ဆင်ပါ
docsify serve                 # localhost:3000 ပေါ်တွင် အဝန်ဆောင်မှု ပေးပါ
```

### Project-specific Builds

ပရောဂျက်တစ်ခုစီတွင် သီးခြား build ပြုလုပ်မှုများ ရှိနိုင်သည်။
- Vue ပရောဂျက်များ: `npm run build` ဖြင့် production bundle များ ဖန်တီးသည်
- Static ပရောဂျက်များ: build လုပ်ခြင်းမလိုအပ်ဘဲ ဖိုင်များကိုတိုက်ရိုက်ဝန်ဆောင်မှု ရရှိသည်

## Pull Request Guidelines

### Title Format

ပြောင်းလဲမှုရဲ့ နေရာကို ဖော်ပြသည့် ရှင်းလင်းထွန်းကားသည့်ခေါင်းစဉ်အသုံးပြုပါ။
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

PR တင်မည့်အခါ -

1. **ကုဒ်အရည်အသွေး**:
   - သက်ဆိုင်ရာ ပရောဂျက် ဒါရိုက်ထရီများတွင် `npm run lint` အသုံးပြုပါ
   - lint error များနှင့် သတိပေးချက်များအားလုံးကို ပြင်ဆင်ပါ

2. **Build အတည်ပြုချက်**:
   - လုပ်သင့်သည့်နေရာတွင် `npm run build` လည်ပတ်ပါ
   - Build အမှားမရှိကြောင်းသေချာစေပါ

3. **လင့်ခ်အတည်ပြုမှု**:
   - Markdown အတွင်းရှိလင့်ခ်များအားလုံးစမ်းသပ်ပါ
   - ပုံရုပ်လင့်ခ်များ လိုက်နာမှုစစ်ဆေးပါ

4. **အကြောင်းအရာစစ်ဆေးမှု**:
   - ရေးသားမှားယွင်းချက်များကို ပြန်လည်သုံးသပ်ပါ
   - ကုဒ်နမူနာများမှန်ကန်ပြီး ပညာရေးဆိုင်ရာ ရည်ရွယ်ချက်နားလည်ရ အောင်စစ်ဆေးပါ
   - ဘာသာပြန်ချက်များသည် မူလအဓိပ္ပာယ် ဆက်လက်တူညီအောင် လိုက်နာပါ

### Contribution Requirements

- Microsoft CLA သို့ သဘောတူသည် (ပထမဆုံး PR မှာ အလိုအလျောက်စစ်ဆေးသည်)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ကိုလိုက်နာပါ
- [CONTRIBUTING.md](./CONTRIBUTING.md) တွင် အသေးစိတ် လမ်းညွှန်ချက်များ ရှိသည်
- PR ဖော်ပြချက်တွင် issue နံပါတ်များ ကိုးကားပါက ပိုမိုကောင်းမွန်သည်

### Review Process

- PR များကို နည်းပညာ မန်နေဂျာများနှင့် အသိုင်းအဝိုင်းမှ ပြန်လည်သုံးသပ်သည်
- ပညာရေးစာတမ်းရှင်းလင်းမှုကို အထူးအလေးထားသည်
- ကုဒ်နမူနာများသည် နောက်ဆုံးပေါ် ကောင်းမွန်သောလုပ်သားအလေ့အထကို လိုက်နာရန်ရှိသည်
- ဘာသာပြန်ချက်များသည် တိကျမှု၊ ယဉ်ကျေးမှုနှင့် သက်ဆိုင်မှုပိုင်းမှန်ကန်မှုရှိရမည်

## Translation System

### Automated Translation

- GitHub Actions နဲ့ co-op-translator workflow ကို အသုံးပြုသည်
- ၅၀ ကျော် ဘာသာစကားများအလိုအလျောက် ဘာသာပြန်သည်
- မူလဖိုင်များသည် main ဒါရိုက်ထရီများတွင် ရှိသည်
- ဘာသာပြန်ထားသော ဖိုင်များကို `translations/{language-code}/` တွင် သိမ်းဆည်းသည်

### Adding Manual Translation Improvements

1. `translations/{language-code}/` ဖိုင်ကို ရှာဖွေပါ
2. ဖွဲ့စည်းမှုမပျက်အောင် ကောင်းမွန်အောင် ပြင်ဆင်ပါ
3. ကုဒ်နမူနာများ လည်ပတ်မှု မကျဆင်းစေရန် သေချာစေပါ
4. ဒေသဆိုင်ရာ Quiz အကြောင်းအရာများကို စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန်ထားသော ဖိုင်များတွင် metadata header ပါဝင်သည်။
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
- Node.js ဗားရှင်း (v14+ အကြံပြုသည်) စစ်ဆေးပါ
- `node_modules` နှင့် `package-lock.json` ဖိုင်များ ဖျက်ပစ်ပြီး `npm install` ပြန်လည် လုပ်ဆောင်ပါ
- port တွက်ဖက်မှု ရှိမရှိ စစ်ဆေးပါ (default ပါ Vite က port 5173 ကို အသုံးပြုသည်)

**API server မစတင်နိုင်ခြင်း**:
- Node.js ဗားရှင်းနည်းဆုံး (node >=10) ဖြည့်မြောက်သလား စစ်ဆေးပါ
- port တစ်ခုစီ မတူညီသေးခဲ့မရှိ စစ်ဆေးပါ
- မလိုအပ်စွာ ဘာသာရေးမရှိပါက `npm install` ဖြင့် မပါဝင်သေးသော dependency များ ထည့်သွင်းပါ

**Browser extension မတင်နိုင်ခြင်း**:
- manifest.json ဖိုင်၏ ဖော်ပြချက်မှန်ကန်မှု စစ်ဆေးပါ
- browser console တွင် error များ ရှိမရှိ စစ်ပါ
- browser များအလိုက် extension တပ်ဆင်မှု လမ်းညွှန်ချက်များ လိုက်နာပါ

**Python chat project ပြဿနာများ**:
- OpenAI package ထည့်သွင်းထားခြင်း (pip install openai)
- GITHUB_TOKEN ပြင်ပ ဆက်တင် variable သတ်မှတ်ထားခြင်း
- GitHub Models သို့ ဝင်ရောက်ခွင့်ရှိခြင်း စစ်ဆေးပါ

**Docsify စာရွက်စာတမ်း မပေးဆောင်နိုင်ခြင်း**:
- docsify-cli ကို အားလုံး အသုံးပြုနိုင်အောင် `npm install -g docsify-cli` ဖြင့် ထည့်သွင်းပါ
- ရှယ်ယာစာကြည့်တိုက် root မှာ ပြေးပါ
- `docs/_sidebar.md` ဖိုင် ရှိမှု စစ်ဆေးပါ

### Development Environment Tips

- HTML ပရောဂျက်များအတွက် VS Code Live Server extension အသုံးပြုပါ
- ESLint နှင့် Prettier extension များ ထည့်သွင်းထား၍ အညီအညွတ် ဖြစ်အောင် ပြုလုပ်ပါ
- JavaScript debugging အတွက် browser DevTools ကို အသုံးပြုပါ
- Vue ပရောဂျက်များအတွက် Vue DevTools browser extension ထည့်သွင်းပါ

### Performance Considerations

- ဘာသာပြန်စာပေါင်းများစွာ ဖြစ်ပြီး (၅၀+ ဘာသာစကား) clone လုပ်ရာတွင် အရေအတွက်ကြီးသည်
- content ဖန်တီးခြင်းသာလုပ်လျင် shallow clone (`git clone --depth 1`) ကို အသုံးပြုပါ
- English အကြောင်းအရာလုပ်နေစဉ် အခြားဘာသာပြန်ဖိုင်များကို ရှာဖွေရွေးချယ်မှုမှ ဖယ်ရှားပါ
- build လုပ်ငန်းများ ပထမဆုံး run မှာ အချို့ အချိန်ယူနိုင်သည် (npm install, Vite build)

## Security Considerations

### Environment Variables

- API ကီးများကို ရှယ်ယာစာကြည့်တိုက်ထဲ မတင်သင့်ပါ
- `.env` ဖိုင်များကို အသုံးပြုပါ (ဒေတာအပိုင်း `.gitignore` ထဲမှာပါ)
- သက်ဆိုင်ရာ ပရောဂျက် README များနဲ့ တိုက်ရိုက်ဖော်ပြပါ

### Python Projects

- virtual environment များ (`python -m venv venv`) အသုံးပြုပါ
- dependency များကို နေထိုင်အောင် ကြီးမားစွာ Update တင်ပါ
- GitHub token များကို လိုအပ်သလို Permissions သတ်မှတ် ပါရမည်

### GitHub Models Access

- GitHub Models သုံးရန် Personal Access Tokens (PAT) လိုအပ်သည်
- Tokens များကို environment variables အနေနဲ့ ထိန်းသိမ်းပါ
- Token များ သို့မဟုတ် credential များကို သည်ရှယ်ယာစာကြည့်တိုက်တွင် အပ်โหลดမလုပ်ပါနှင့်

## Additional Notes

### Target Audience

- ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှု စတင်သူ အပြည့်အဝ
- ကျောင်းသားများနှင့် ကိုယ်တိုင်လေ့လာသူများ
- သင်ကြားရေးတွင် သင်ရိုးညွှန်းအသုံးပြုသော ဆရာ/ဆရာမများ
- ပရောဂျက်ကို လက်လှမ်းမှီရသော အသုံးပြုခွင့် ရှိမှုနှင့် အတက်အကျမှာ ဦးစားပေးထားသည်

### Educational Philosophy

- ပရောဂျက်အခြေပြု သင်ယူမှု လမ်းဆုံ
- မကြာခဏ သိမှတ်မှု စစ်တမ်းများ (quizzes)
- လက်တွေ့ ကုဒ်ရေးသားမှု လေ့ကျင့်ခန်းများ
- လောကီအသုံးချမှု နမူနာများ
- framework မသုံးမီ အခြေခံများအား အလေးထားမှု

### Repository Maintenance

- တက်ကြွသော သင်ယူသူများ နှင့် ပါဝင်သူများ အသိုင်းအဝိုင်း
- လက်ရှိ dependencies နဲ့ အကြောင်းအရာများ ကို ပုံမှန်သက်ဆိုင်မှု ပြုလုပ်ခြင်း
- ပြဿနာများ နှင့် ဆွေးနွေးမှုများ ကို မန်နေဂျာများက စောင့်ကြည့်မှုရှိမှု
- ဘာသာပြန်ချက်များကို GitHub Actions ဖြင့် အလိုအလျောက် ပြုလုပ်မှု

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ကို လေ့လာသူများ အတွက် အကြံပြုပါသည်
- အတန်းသစ်များ: Generative AI, Data Science, ML, IoT သင်ရိုးများ ရရှိနိုင်သည်

### Working with Specific Projects

ပရောဂျက်တစ်ခုချင်းစီအတွက် အသေးစိတ်ညွှန်ကြားချက်များကို အောက်ပါ README ဖိုင်များတွင် ကြည့်ရှုနိုင်သည်။
- `quiz-app/README.md` - Vue 3 ကို သုံး၍ quiz application
- `7-bank-project/README.md` - authentication ပါဝင်သည့် ဘဏ်ဆိုင်ရာ အက်ပ်
- `5-browser-extension/README.md` - browser extension ဖန်တီးခြင်း
- `6-space-game/README.md` - canvas အခြေပြု ဂိမ်း ဖန်တီးခြင်း
- `9-chat-project/README.md` - AI chat assistant ပရောဂျက်

### Monorepo Structure

ဤ ရှယ်ယာစာကြည့်တိုက်သည် လူသိများသော ပုံမှန် monorepo မဟုတ်ပေမယ့် သီးခြားပရောဂျက်များ အများကြီး ပါဝင်သည်။
- သင်ခန်းစာတိုင်းသည် အလိုအလျောက် သီးသန့်ဖြစ်သည်
- အစိတ်အပိုင်းများသည် dependency မမျှဝေကြ
- အစိတ်အပိုင်းတစ်ခုရဲ့ အလုပ်လုပ်မှုသည် အခြားအစိတ်အပိုင်းများအား ထိခိုက်မှုမရှိစေ
- အပြည့်အစုံ သင်ရိုးအသုံးပြုရန် ရှယ်ယာစာကြည့်တိုက် ပြည့်နှက်စွာ clone လုပ်နိုင်သည်

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**အကြောင်းကြားချက်**  
ဤစာတမ်းကို AI ဘာသာပြန်မှုဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ တိကျမှုအတွက် ကြိုးစားမည်ဖြစ်သော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းကြောင့် အမှားများ သို့မဟုတ် တိက်မကျမှုများ ပါဝင်နိုင်ကြောင်း သတိပြုပါဆဲ။ မူလစာတမ်းကို မူရင်းဘာသာစကားဖြင့်သာ တရားဝင် အရင်းအမြစ်အဖြစ် ယူဆသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် မည်သည့်အခါတွင်ပင် လူတစ်ဦးချင်း အတတ်ပညာရှင်၏ ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုအား အသုံးပြုရာ၌ ဖြစ်ပေါ်နိုင်သည့် နားလည်မှားယွင်းမှုများ သို့မဟုတ် ကျဉ်းမြောင်းစွာ ဗေဒင်ပြမှုများအတွက် ကျွန်ုပ်တို့မှာ တာဝန် မပါဝင်ပါ။
<!-- CO-OP TRANSLATOR DISCLAIMER END -->