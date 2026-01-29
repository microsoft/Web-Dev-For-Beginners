# AGENTS.md

## ပရောဂျက်အကျဉ်းချုပ်

ဤသည်မှာ ဝက်ဘ်ဖွံ့ဖြိုးတိုးတက်မှုအခြေခံများကို စတင်လေ့လာသူများကို သင်ကြားရန်အတွက် ပညာရေးသင်ခန်းစာများကို စုစည်းထားသော repository ဖြစ်သည်။ Microsoft Cloud Advocates မှ ဖွံ့ဖြိုးတိုးတက်ထားသော 12 ပတ်ကြာသင်တန်းအစီအစဉ်တစ်ခုဖြစ်ပြီး JavaScript, CSS, နှင့် HTML ကို အကျိုးရှိစွာ လက်တွေ့ကျကျ သင်ကြားနိုင်သော သင်ခန်းစာ 24 ခုပါဝင်သည်။

### အဓိကအစိတ်အပိုင်းများ

- **ပညာရေးအကြောင်းအရာ**: ပရောဂျက်အခြေခံ module များအဖြစ် စီစဉ်ထားသော သင်ခန်းစာ 24 ခု
- **လက်တွေ့ပရောဂျက်များ**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, နှင့် AI Chat Assistant
- **အပြန်အလှန်မေးခွန်းများ**: သင်ခန်းစာမတိုင်မီ/ပြီးနောက် အကဲဖြတ်မှုများအတွက် မေးခွန်း 3 ခုပါဝင်သော မေးခွန်း 48 ခု
- **ဘာသာစကားများအထောက်အပံ့**: GitHub Actions မှတဆင့် ဘာသာစကား 50+ ကို အလိုအလျောက် ဘာသာပြန်
- **နည်းပညာများ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ပရောဂျက်များအတွက်)

### ဖွဲ့စည်းပုံ

- သင်ခန်းစာအခြေခံဖွဲ့စည်းပုံရှိသော ပညာရေး repository
- သင်ခန်းစာ folder တစ်ခုစီတွင် README, code နမူနာများနှင့် ဖြေရှင်းချက်များပါဝင်သည်
- သီးသန့်ပရောဂျက်များကို အထူး directory များတွင် (quiz-app, သင်ခန်းစာပရောဂျက်များ) ထည့်ထားသည်
- GitHub Actions (co-op-translator) ကို အသုံးပြုသော ဘာသာပြန်စနစ်
- Docsify မှတဆင့် documentation ကို ဖော်ပြပြီး PDF အဖြစ်လည်း ရရှိနိုင်သည်

## Setup Commands

ဤ repository သည် ပညာရေးအကြောင်းအရာများကို အသုံးပြုရန်အဓိကဖြစ်သည်။ သီးသန့်ပရောဂျက်များနှင့် အလုပ်လုပ်ရန်အတွက်:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## ဖွံ့ဖြိုးတိုးတက်မှုလုပ်ငန်းစဉ်

### Content Contributors အတွက်

1. **Repository ကို Fork လုပ်ပါ** GitHub အကောင့်သို့
2. **Fork ကို locally Clone လုပ်ပါ**
3. **သင့်ပြောင်းလဲမှုများအတွက် branch အသစ်တစ်ခု Create လုပ်ပါ**
4. သင်ခန်းစာအကြောင်းအရာများ သို့မဟုတ် code နမူနာများကို ပြောင်းလဲပါ
5. သက်ဆိုင်ရာပရောဂျက် directory များတွင် code ပြောင်းလဲမှုများကို စမ်းသပ်ပါ
6. Contribution guidelines ကို လိုက်နာပြီး pull requests တင်ပါ

### Learners အတွက်

1. Repository ကို Fork သို့မဟုတ် Clone လုပ်ပါ
2. သင်ခန်းစာ directory များကို အစဉ်လိုက်သွားပါ
3. သင်ခန်းစာတစ်ခုစီ၏ README ဖိုင်များကို ဖတ်ပါ
4. https://ff-quizzes.netlify.app/web/ တွင် သင်ခန်းစာမတိုင်မီမေးခွန်းများကို ပြီးစီးပါ
5. သင်ခန်းစာ folder များတွင် code နမူနာများကို လေ့လာပါ
6. အလုပ်များနှင့် စိန်ခေါ်မှုများကို ပြီးစီးပါ
7. သင်ခန်းစာပြီးနောက်မေးခွန်းများကို ပြုလုပ်ပါ

### Live Development

- **Documentation**: root တွင် `docsify serve` ကို run လုပ်ပါ (port 3000)
- **Quiz App**: quiz-app directory တွင် `npm run dev` ကို run လုပ်ပါ
- **Projects**: HTML ပရောဂျက်များအတွက် VS Code Live Server extension ကို အသုံးပြုပါ
- **API Projects**: သက်ဆိုင်ရာ API directory များတွင် `npm start` ကို run လုပ်ပါ

## စမ်းသပ်မှုညွှန်ကြားချက်များ

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### General Testing Approach

- ဤသည်မှာ automated tests များကို အပြည့်အဝမပါဝင်သော ပညာရေး repository ဖြစ်သည်
- လက်တွေ့စမ်းသပ်မှုများအဓိကထားသည်:
  - Code နမူနာများ error မရှိဘဲ run လုပ်နိုင်သည်
  - Documentation တွင် link များမှန်ကန်စွာအလုပ်လုပ်သည်
  - Project build များအောင်မြင်စွာပြီးစီးသည်
  - နမူနာများသည် အကောင်းဆုံးအလေ့အကျင့်များကို လိုက်နာသည်

### Pre-submission Checks

- package.json ပါသော directory များတွင် `npm run lint` ကို run လုပ်ပါ
- markdown link များမှန်ကန်ကြောင်းအတည်ပြုပါ
- browser သို့မဟုတ် Node.js တွင် code နမူနာများကို စမ်းသပ်ပါ
- ဘာသာပြန်ချက်များသည် သင့်တော်သောဖွဲ့စည်းပုံကို ထိန်းသိမ်းထားကြောင်းစစ်ဆေးပါ

## Code Style Guidelines

### JavaScript

- ES6+ syntax ကို အသုံးပြုပါ
- Project များတွင်ပေးထားသော standard ESLint configurations ကို လိုက်နာပါ
- ပညာရေးအတွက် ရှင်းလင်းသော variable နှင့် function အမည်များကို အသုံးပြုပါ
- Learners အတွက် concept များကို ရှင်းပြသော comment များထည့်ပါ
- Prettier ကို configuration ရှိသောနေရာတွင် format လုပ်ပါ

### HTML/CSS

- Semantic HTML5 elements
- Responsive design principles
- ရှင်းလင်းသော class naming conventions
- Learners အတွက် CSS နည်းလမ်းများကို ရှင်းပြသော comment များ

### Python

- PEP 8 style guidelines
- ရှင်းလင်းသော ပညာရေး code နမူနာများ
- Learning အတွက် အထောက်အကူဖြစ်သော Type hints

### Markdown Documentation

- ရှင်းလင်းသော heading hierarchy
- language specification ပါသော code blocks
- အပိုဆောင်း resources link များ
- `images/` directory များတွင် screenshots နှင့် images
- Accessibility အတွက် images အတွက် alt text

### File Organization

- သင်ခန်းစာများကို အစဉ်လိုက်နံပါတ်များဖြင့် (1-getting-started-lessons, 2-js-basics, စသည်) စီစဉ်ထားသည်
- ပရောဂျက်တစ်ခုစီတွင် `solution/` နှင့် `start/` သို့မဟုတ် `your-work/` directory များပါဝင်သည်
- Images များကို သင်ခန်းစာ-specific `images/` folder များတွင် သိမ်းဆည်းထားသည်
- ဘာသာပြန်ချက်များကို `translations/{language-code}/` ဖွဲ့စည်းပုံတွင် သိမ်းဆည်းထားသည်

## Build နှင့် Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ကို Azure Static Web Apps deployment အတွက် configure လုပ်ထားသည်:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Project-specific Builds

Project directory တစ်ခုစီတွင် သီးသန့် build process ရှိနိုင်သည်:
- Vue projects: `npm run build` သည် production bundles ကို ဖန်တီးသည်
- Static projects: build အဆင့်မရှိ၊ ဖိုင်များကို တိုက်ရိုက် serve လုပ်ပါ

## Pull Request Guidelines

### Title Format

ပြောင်းလဲမှုဧရိယာကို ဖော်ပြသော ရှင်းလင်းသော title များကို အသုံးပြုပါ:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

PR တင်မီ:

1. **Code Quality**:
   - သက်ဆိုင်ရာ project directory များတွင် `npm run lint` ကို run လုပ်ပါ
   - linting error နှင့် warning များအားလုံးကို ပြင်ပါ

2. **Build Verification**:
   - သက်ဆိုင်ရာ build process ကို run လုပ်ပါ
   - build error မရှိကြောင်းအတည်ပြုပါ

3. **Link Validation**:
   - markdown link များကို စမ်းသပ်ပါ
   - image reference များအလုပ်လုပ်ကြောင်းအတည်ပြုပါ

4. **Content Review**:
   - စာလုံးပေါင်းနှင့် သဒ္ဒါအမှားများကို proofread လုပ်ပါ
   - code နမူနာများမှန်ကန်ပြီး ပညာရေးအတွက် အသုံးဝင်ကြောင်းအတည်ပြုပါ
   - ဘာသာပြန်ချက်များသည် အဓိပ္ပာယ်မပြောင်းလဲကြောင်းအတည်ပြုပါ

### Contribution Requirements

- Microsoft CLA ကို သဘောတူပါ (ပထမဆုံး PR တွင် automated check)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ကို လိုက်နာပါ
- [CONTRIBUTING.md](./CONTRIBUTING.md) တွင် အသေးစိတ်ညွှန်ကြားချက်များကို ကြည့်ပါ
- PR description တွင် issue နံပါတ်များကို ရည်ညွှန်းပါ (လိုအပ်ပါက)

### Review Process

- PR များကို maintainers နှင့် community မှ review လုပ်သည်
- ပညာရေးအတွက် ရှင်းလင်းမှုကို ဦးစားပေးသည်
- code နမူနာများသည် လက်ရှိအကောင်းဆုံးအလေ့အကျင့်များကို လိုက်နာရမည်
- ဘာသာပြန်ချက်များကို တိကျမှုနှင့် ယဉ်ကျေးမှုသင့်တော်မှုအတွက် review လုပ်သည်

## Translation System

### Automated Translation

- co-op-translator workflow ဖြင့် GitHub Actions ကို အသုံးပြုသည်
- ဘာသာစကား 50+ ကို အလိုအလျောက် ဘာသာပြန်သည်
- main directory များတွင် source ဖိုင်များ
- `translations/{language-code}/` directory များတွင် ဘာသာပြန်ဖိုင်များ

### Adding Manual Translation Improvements

1. `translations/{language-code}/` တွင် ဖိုင်ကို ရှာပါ
2. ဖွဲ့စည်းပုံကို ထိန်းသိမ်းထားပြီး တိုးတက်မှုများပြုလုပ်ပါ
3. code နမူနာများအလုပ်လုပ်နေဆဲဖြစ်ကြောင်းအတည်ပြုပါ
4. localized quiz content များကို စမ်းသပ်ပါ

### Translation Metadata

ဘာသာပြန်ဖိုင်များတွင် metadata header ပါဝင်သည်:
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

## Debugging နှင့် Troubleshooting

### Common Issues

**Quiz app fails to start**:
- Node.js version ကိုစစ်ပါ (v14+ အကြံပြုသည်)
- `node_modules` နှင့် `package-lock.json` ကို ဖျက်ပြီး `npm install` ကို ထပ်လုပ်ပါ
- port conflict များကိုစစ်ပါ (default: Vite သည် port 5173 ကို အသုံးပြုသည်)

**API server won't start**:
- Node.js version သက်ဆိုင်ရာကိုစစ်ပါ (node >=10)
- port သုံးနေမှုရှိ/မရှိကိုစစ်ပါ
- `npm install` ဖြင့် dependency အားလုံးကို install လုပ်ထားကြောင်းအတည်ပြုပါ

**Browser extension won't load**:
- manifest.json သက်ဆိုင်ရာ format ရှိကြောင်းစစ်ပါ
- browser console တွင် error များကိုစစ်ပါ
- browser-specific extension installation instruction များကို လိုက်နာပါ

**Python chat project issues**:
- OpenAI package install လုပ်ထားကြောင်းအတည်ပြုပါ: `pip install openai`
- GITHUB_TOKEN environment variable ကို set လုပ်ထားကြောင်းစစ်ပါ
- GitHub Models access permission များကိုစစ်ပါ

**Docsify not serving docs**:
- docsify-cli ကို globally install လုပ်ပါ: `npm install -g docsify-cli`
- repository root directory မှ run လုပ်ပါ
- `docs/_sidebar.md` ရှိကြောင်းစစ်ပါ

### Development Environment Tips

- HTML ပရောဂျက်များအတွက် VS Code နှင့် Live Server extension ကို အသုံးပြုပါ
- ESLint နှင့် Prettier extension များကို install လုပ်ပါ formatting consistency အတွက်
- JavaScript debugging အတွက် browser DevTools ကို အသုံးပြုပါ
- Vue project များအတွက် Vue DevTools browser extension ကို install လုပ်ပါ

### Performance Considerations

- ဘာသာပြန်ဖိုင်များ (50+ ဘာသာစကား) အများကြီးရှိသောကြောင့် full clone များသည် file size ကြီးမားသည်
- content အပေါ်သာ အလုပ်လုပ်မည်ဆိုပါက shallow clone ကို အသုံးပြုပါ: `git clone --depth 1`
- English content အပေါ် အလုပ်လုပ်နေစဉ် ဘာသာပြန်ချက်များကို search မှထုတ်ပယ်ပါ
- ပထမဆုံး run လုပ်စဉ် build process များနှေးကွေးနိုင်သည် (npm install, Vite build)

## Security Considerations

### Environment Variables

- API key များကို repository တွင် commit မလုပ်သင့်ပါ
- `.env` ဖိုင်များကို အသုံးပြုပါ (`.gitignore` တွင်ပြီးသားပါဝင်သည်)
- project README များတွင် လိုအပ်သော environment variable များကို documentation ပြုလုပ်ပါ

### Python Projects

- virtual environment များကို အသုံးပြုပါ: `python -m venv venv`
- dependency များကို update လုပ်ထားပါ
- GitHub token များသည် လိုအပ်သော permission အနည်းဆုံးသာ ရှိရမည်

### GitHub Models Access

- GitHub Models အတွက် Personal Access Tokens (PAT) လိုအပ်သည်
- token များကို environment variable အဖြစ် သိမ်းဆည်းထားရမည်
- token သို့မဟုတ် credential များကို commit မလုပ်သင့်ပါ

## အပိုဆောင်းမှတ်ချက်များ

### Target Audience

- ဝက်ဘ်ဖွံ့ဖြိုးတိုးတက်မှုကို စတင်လေ့လာသူများ
- ကျောင်းသားများနှင့် ကိုယ်တိုင်လေ့လာသူများ
- သင်ခန်းစာများကို classroom တွင် အသုံးပြုသောဆရာများ
- အဆင့်လိုက်လေ့လာမှုနှင့် accessibility အတွက် design ပြုလုပ်ထားသည်

### Educational Philosophy

- ပရောဂျက်အခြေခံသင်ကြားမှုနည်းလမ်း
- အကြိမ်ကြိမ် knowledge checks (quizzes)
- လက်တွေ့ coding လေ့ကျင့်မှုများ
- အမှန်တကယ်အသုံးဝင်သော application နမူနာများ
- framework မတိုင်မီ အခြေခံများကို အဓိကထားသည်

### Repository Maintenance

- Learners နှင့် contributors များ၏ active community
- dependency နှင့် content များကို regular update ပြုလုပ်သည်
- maintainers မှ issue နှင့် discussion များကို စောင့်ကြည့်သည်
- GitHub Actions မှတဆင့် ဘာသာပြန် update များကို အလိုအလျောက်ပြုလုပ်သည်

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ကို learners အတွက် အကြံပြုသည်
- အပိုဆောင်းသင်တန်းများ: Generative AI, Data Science, ML, IoT curricula ရရှိနိုင်သည်

### Working with Specific Projects

သီးသန့်ပရောဂျက်များအတွက် အသေးစိတ်ညွှန်ကြားချက်များကို README ဖိုင်များတွင် ကြည့်ပါ:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - authentication ပါသော Banking application
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

ဤ repository သည် traditional monorepo မဟုတ်သော်လည်း သီးသန့်ပရောဂျက်များ

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတည်သော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော နားလည်မှုမှားများ သို့မဟုတ် အဓိပ္ပာယ်မှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။