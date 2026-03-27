# AGENTS.md

## Project Overview

ਇਹ ਵੈੱਬ ਵਿਕਾਸ ਬੁਨਿਆਦੀਆਂ ਨੂੰ ਸ਼ੁਰੂਆਤੀ ਹੋਣ ਵਾਲਿਆਂ ਨੂੰ ਸਿਖਾਉਣ ਲਈ ਇੱਕ ਸਿੱਖਿਆ ਗ੍ਰਹਿ ਹੈ। ਇਹ ਪਾਠਕ੍ਰਮ Microsoft Cloud Advocates ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਇੱਕ ਵਿਆਪਕ 12 ਹਫਤਿਆਂ ਦਾ ਕੋਰਸ ਹੈ, ਜਿਸ ਵਿੱਚ 24 ਪ੍ਰਯੋਗਾਤਮਕ ਪਾਠ ਹਨ ਜੋ ਜਾਵਾਸਕ੍ਰਿਪਟ, CSS, ਅਤੇ HTML ਨੂੰ ਕਵਰ ਕਰਦੇ ਹਨ।

### Key Components

- **ਸਿੱਖਿਆ ਸਮੱਗਰੀ**: ਪ੍ਰਾਜੈਕਟਾਂ-ਅਧਾਰਿਤ ਮੋਡਿਊਲਾਂ ਵਿੱਚ ਸੁਗਠਿਤ 24 ਪਾਠ
- **ਅਮਲੀ ਪਰਿਯੋਜਨਾਵਾਂ**: ਟੇਰਾਰਿਯਮ, ਟਾਈਪਿੰਗ ਗੇਮ, ਬਰਾਊਜ਼ਰ ਐਕਸਟੈਂਸ਼ਨ, ਸਪੇਸ ਗੇਮ, ਬੈਂਕਿੰਗ ਐਪ, ਕੋਡ ਏਡੀਟਰ, ਅਤੇ AI ਚੈਟ ਸਹਾਇਕ
- **ਇੰਟਰੇਕਟਿਵ ਕੁਈਜ਼**: 48 ਕੁਈਜ਼ ਹਰ ਇੱਕ ਵਿੱਚ 3 ਸਵਾਲ (ਪ੍ਰੀ/ਪੋਸਟ-ਪਾਠ ਮੁਲਾਂਕਣ)
- **ਬਹੁ-ਭਾਸ਼ਾ ਸਹਾਇਤਾ**: GitHub Actions ਰਾਹੀਂ 50+ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦ
- **ਟੈਕਨੋਲੋਜੀਜ਼**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI ਪਰਿਯੋਜਨਾਵਾਂ ਲਈ)

### Architecture

- ਪਾਠ-ਅਧਾਰਿਤ ਡھانਚਾ ਵਾਲਾ ਸਿੱਖਿਆ ਗ੍ਰਹਿ
- ਹਰ ਪਾਠ ਫੋਲਡਰ ਵਿੱਚ README, ਕੋਡ ਉਦਾਹਰਨਾਂ, ਅਤੇ ਹੱਲ ਹੁੰਦੇ ਹਨ
- ਵੱਖ-ਵੱਖ ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ ਖੁਦਮੁਖਤਿਆਰ ਪਰਿਯੋਜਨਾਵਾਂ (quiz-app, ਵੱਖ-ਵੱਖ ਪਾਠ ਪ੍ਰਾਜੈਕਟ)
- GitHub Actions (co-op-translator) ਵੱਲੋਂ ਅਨੁਵਾਦ ਪ੍ਰਣਾਲੀ
- Docsify ਰਾਹੀਂ ਦਸਤਾਵੇਜ਼ ਕੀਤੇ ਗਏ ਅਤੇ PDF ਵਜੋਂ ਉਪਲਬਧ

## Setup Commands

ਇਹ ਗ੍ਰਹਿ ਮੁੱਖ ਤੌਰ 'ਤੇ ਸਿੱਖਿਆ ਸਮੱਗਰੀ ਖਪਤ ਲਈ ਹੈ। ਖਾਸ ਪਰਿਯੋਜਨਾਵਾਂ ਨਾਲ ਕੰਮ ਕਰਨ ਲਈ:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # ਵਿਕਾਸ ਸਰਵਰ ਸ਼ੁਰੂ ਕਰੋ
npm run build      # ਉਤਪਾਦਨ ਲਈ ਬਣਾਓ
npm run lint       # ESLint ਚਲਾਓ
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # ਏਪੀਆਈ ਸਰਵਰ ਸ਼ੁਰੂ ਕਰੋ
npm run lint       # ESLint ਚਲਾਓ
npm run format     # Prettier ਨਾਲ ਫਾਰਮੈਟ ਕਰੋ
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ਬ੍ਰਾਉਜ਼ਰ-ਖਾਸ ਐਕਸਟੈਂਸ਼ਨ ਲੋਡਿੰਗ ਹਦਾਇਤਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# index.html ਨੂੰ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਖੋਲ੍ਹੋ ਜਾਂ ਲਾਈਵ ਸਰਵਰ ਵਰਤੋ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ਵਾਤਾਵਰਣ ਵੈਰੀਏਬਲ ਸੈੱਟ ਕਰੋ
python api.py
```

## Development Workflow

### For Content Contributors

1. **ਗ੍ਰਹਿ ਨੂੰ ਫੋਰਕ ਕਰੋ** ਆਪਣੇ GitHub ਖਾਤੇ 'ਤੇ
2. **ਆਪਣੇ ਫੋਰਕ ਨੂੰ ਕਲੋਨ ਕਰੋ** ਸਥਾਨਕ ਤੌਰ 'ਤੇ
3. **ਆਪਣੇ ਬਦਲਾਅ ਲਈ ਨਵੀਂ ਸ਼ਾਖਾ ਬਣਾਓ**
4. ਪਾਠ ਸਮੱਗਰੀ ਜਾਂ ਕੋਡ ਉਦਾਹਰਨਾਂ ਵਿੱਚ ਬਦਲਾਅ ਕਰੋ
5. ਸੰਬੰਧਤ ਪਰਿਯੋਜਨਾ ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ ਕੋਈ ਵੀ ਕੋਡ ਬਦਲਾਅ ਟੈਸਟ ਕਰੋ
6. ਯੋਗਦਾਨ ਦਿਓਣੀਆਂ ਹਦਾਇਤਾਂ ਦੇ ਅਨੁਸਾਰ ਪੁੱਲ ਰਿਕਵੇਸਟ ਭੇਜੋ

### For Learners

1. ਗ੍ਰਹਿ ਨੂੰ ਫੋਰਕ ਜਾਂ ਕਲੋਨ ਕਰੋ
2. ਪਾਠ ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ ਲੜੀਵਾਰ ਜਾਓ
3. ਹਰ ਪਾਠ ਲਈ README ਫਾਈਲਾਂ ਪੜ੍ਹੋ
4. https://ff-quizzes.netlify.app/web/ 'ਤੇ ਪ੍ਰੀ-ਪਾਠ ਕੁਈਜ਼ ਪੂਰੇ ਕਰੋ
5. ਪਾਠ ਫੋਲਡਰਾਂ ਵਿੱਚ ਕੋਡ ਉਦਾਹਰਨਾਂ 'ਤੇ ਕੰਮ ਕਰੋ
6. ਅਸਾਈਨਮੈਂਟ ਅਤੇ ਚੈਲੈਂਜ ਪੂਰੇ ਕਰੋ
7. ਪੋਸਟ-ਪਾਠ ਕੁਈਜ਼ ਲਓ

### Live Development

- **ਦਸਤਾਵੇਜ਼**: ਰੂਟ ਵਿੱਚ `docsify serve` ਚਲਾਓ (ਪੋਰਟ 3000)
- **Quiz App**: quiz-app ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ `npm run dev` ਚਲਾਓ
- **ਪਰਿਯੋਜਨਾਵਾਂ**: HTML ਪਰਿਯੋਜਨਾਵਾਂ ਲਈ VS Code Live Server ਐਕਸਟੈਂਸ਼ਨ ਵਰਤੋਂ
- **API ਪਰਿਯੋਜਨਾਵਾਂ**: ਸੰਬੰਧਤ API ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ `npm start` ਚਲਾਓ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ਕੋਡ ਸ਼ੈਲੀ ਸਮੱਸਿਆਵਾਂ ਦੀ ਜਾਂਚ ਕਰੋ
npm run build      # ਬਣਾਉਣ ਦੀ ਸਫਲਤਾ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ਕੋਡ ਅੰਦਾਜ਼ ਸਮੱਸਿਆਵਾਂ ਦੀ ਜਾਂਚ ਕਰੋ
node server.js     # ਸਰਵਰ ਬਿਨਾਂ ਵਿੱਚ ਤਰੁੱਟੀਆਂ ਦੇ ਸ਼ੁਰੂ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ
```

### General Testing Approach

- ਇਹ ਸਿੱਖਿਆ ਗ੍ਰਹਿ ਵਿਸਤ੍ਰਿਤ ਸਵੈਚਾਲਿਤ ਟੈਸਟਾਂ ਦੇ ਬਿਨਾਂ ਹੈ
- ਮੈਨੂਅਲ ਟੈਸਟਿੰਗ ਧਿਆਨ ਦਿੰਦੀ ਹੈ:
  - ਕੋਡ ਉਦਾਹਰਨਾਂ ਬਿਨਾਂ ਗਲਤੀਆਂ ਚੱਲਦੀਆਂ ਹਨ
  - ਦਸਤਾਵੇਜ਼ੀ ਲਿੰਕ ਠੀਕ ਕੰਮ ਕਰਦੇ ਹਨ
  - ਪਰਿਯੋਜਨਾ ਬਿਲਡ ਸਫਲ ਹੋ ਜਾਂਦੇ ਹਨ
  - ਉਦਾਹਰਨਾਂ ਸਾਰਥਕ ਪद्धਤੀਆਂ ਦੀ ਪਾਲਣਾ ਕਰਦੀਆਂ ਹਨ

### Pre-submission Checks

- package.json ਵਾਲੀਆਂ ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ `npm run lint` ਚਲਾਓ
- ਮਾਰਕਡਾਉਨ ਲਿੰਕਾਂ ਦੀ ਸਹੀਤਾ ਕੱਰੂ
- ਬ੍ਰਾਊਜ਼ਰ ਜਾਂ Node.js ਵਿੱਚ ਕੋਡ ਉਦਾਹਰਨਾਂ ਟੈਸਟ ਕਰੋ
- ਅਨੁਵਾਦਾਂ ਦੀ ਢਾਂਚਾਗਤ ਸਹੀਤਾ ਨੂੰ ਜਾਂਚੋ

## Code Style Guidelines

### JavaScript

- ਆਧੁਨਿਕ ES6+ ਸਿੰਟੈਕਸ ਵਰਤੋਂ
- ਪ੍ਰੋਜੈਕਟਾਂ ਵਿੱਚ ਦਿੱਤੇ ਗਏ ਅਮਾਨਤ ESLint ਸੰਰਚਨਾਵਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ
- ਸਿੱਖਣ ਲਈ ਮਹੱਤਵਪੂਰਨ ਵੈਰੀਏਬਲ ਅਤੇ ਫੰਕਸ਼ਨ ਨਾਮ ਵਰਤੋਂ
- ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ ਵਿਚਾਰ ਵਿਆਖਿਆ ਕਰਨ ਵਾਲੀਆਂ ਟਿੱਪਣੀਆਂ ਸ਼ਾਮਲ ਕਰੋ
- ਜਿੱਥੇ ਸੰਰਚਿਤ ਹੋਵੇ Prettier ਨਾਲ ਫਾਰਮੈਟਿੰਗ ਕਰੋ

### HTML/CSS

- Semantic HTML5 ਤੱਤ
- ਪ੍ਰਤੀਕ੍ਰਿਆਸ਼ੀਲ ਡਿਜ਼ਾਈਨ ਸਿਧਾਂਤ
- ਸਾਫ ਸੀਝੀ ਕਲਾਸ ਨਾਮਕਰਨ ਪਰੰਪਰਾਵਾਂ
- CSS ਤਕਨੀਕਾਂ ਨੂੰ ਸਮਝਾਉਂਦੀਆਂ ਟਿੱਪਣੀਆਂ ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ

### Python

- PEP 8 ਸ਼ੈਲੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼
- ਸਾਫ, ਸਿੱਖਣਯੋਗ ਕੋਡ ਉਦਾਹਰਨਾਂ
- ਸਿੱਖਣ ਵਿੱਚ ਮਦਦ ਲਈ ਟਾਈਪ ਹਿੰਟ

### Markdown Documentation

- ਸਾਫ ਸਿਰਲੇਖ ਹਾਇਰਾਰਕੀ
- ਭਾਸ਼ਾ ਨਿਰਧਾਰਿਤ ਕੋਡ ਬਲਾਕ
- ਵਾਧੂ ਸਰੋਤਾਂ ਲਈ ਲਿੰਕ
- `images/` ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ ਸਕਰੀਨਸ਼ਾਟ ਅਤੇ ਚਿੱਤਰ
- ਸੁਗਮਤਾ ਲਈ ਚਿੱਤਰਾਂ ਲਈ Alt ਟੈਕਸਟ

### File Organization

- ਪਾਠ ਕ੍ਰਮਵਾਰ ਨੰਬਰ ਦੇ ਨਾਲ (1-getting-started-lessons, 2-js-basics, ਆਦਿ)
- ਹਰ ਪਰਿਯੋਜਨਾ ਵਿੱਚ `solution/` ਅਤੇ ਅਕਸਰ `start/` ਜਾਂ `your-work/` ਡਾਇਰੈਕਟਰੀਆਂ ਹੁੰਦੀਆਂ ਹਨ
- ਪਾਠ-ਵਿਸ਼ੇਸ਼ `images/` ਫੋਲਡਰਾਂ ਵਿੱਚ ਚਿੱਤਰ ਸੰਭਾਲੇ ਜਾਂਦੇ ਹਨ
- `translations/{language-code}/` ਢਾਂਚਾ ਵਿੱਚ ਅਨੁਵਾਦ

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ਨੂੰ Azure Static Web Apps ਡਿਪਲੋਇਮੈਂਟ ਲਈ ਸੰਰਚਿਤ ਕੀਤਾ ਗਿਆ ਹੈ:

```bash
cd quiz-app
npm run build      # dist/ ਫੋਲਡਰ ਬਣਾਉਂਦਾ ਹੈ
# ਮੁੱਖ ਬ੍ਰਾਂਚ 'ਤੇ ਪੁਸ਼ ਕਰਨ 'ਤੇ GitHub Actions ਵਰਕਫਲੋ ਰਾਹੀਂ ਤੈਨਾਤ ਕਰਦਾ ਹੈ
```

Azure Static Web Apps ਕਨਫਿਗਰੇਸ਼ਨ:
- **ਐਪ ਸਥਾਨ**: `/quiz-app`
- **ਆਉਟਪੁੱਟ ਸਥਾਨ**: `dist`
- **ਵਰਕਫਲੋ**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ਨੂੰ ਇੰਸਟਾਲ ਕਰੋ
npm run convert               # docs ਤੋਂ PDF ਬਣਾਓ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify ਨੂੰ ਗਲੋਬਲੀ ਇੰਸਟਾਲ ਕਰੋ
docsify serve                 # localhost:3000 'ਤੇ ਸਰਵ ਕਰੋ
```

### Project-specific Builds

ਹਰ ਪਰਿਯੋਜਨਾ ਡਾਇਰੈਕਟਰੀ ਆਪਣਾ ਨਿਰਮਾਣ ਪ੍ਰਕਿਰਿਆ ਰੱਖ ਸਕਦੀ ਹੈ:
- Vue ਪ੍ਰਾਜੈਕਟ: `npm run build` ਪ੍ਰੋਡਕਸ਼ਨ ਬੰਡਲ ਬਣਾਉਂਦਾ ਹੈ
- ਸਟੈਟਿਕ ਪ੍ਰਾਜੈਕਟ: ਕੋਈ ਨਿਰਮਾਣ ਕਦਮ ਨਹੀਂ, ਫਾਈਲਾਂ ਸਿੱਧਾ ਸਰਵ ਕਰੋ

## Pull Request Guidelines

### Title Format

ਬਦਲਾਅ ਖੇਤਰ ਨੂੰ ਦਰਸਾਉਂਦੇ ਸਾਫਸੁਥਰੇ, ਵਰਣਨਾਤਮਕ ਸਿਰਲੇਖ ਵਰਤੋਂ:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

PR ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ:

1. **ਕੋਡ ਗੁਣਵੱਤਾ**:
   - ਪ੍ਰਭਾਵਿਤ ਪ੍ਰੋਜੈਕਟ ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ `npm run lint` ਚਲਾਓ
   - ਸਾਰੀਆਂ ਲਿੰਟਿੰਗ ਗਲਤੀਆਂ ਅਤੇ ਚੇਤਾਵਨੀਆਂ ਠੀਕ ਕਰੋ

2. **ਨਿਰਮਾਣ ਪ੍ਰਮਾਣਿਕਤਾ**:
   - ਜੇ ਲਾਗੂ ਹੋਵੇ ਤਾਂ `npm run build` ਚਲਾਓ
   - ਕੋਈ ਨਿਰਮਾਣ ਗਲਤੀਆਂ ਨਹੀਂ ਹੋਣ ਦਿਓ

3. **ਲਿੰਕ ਜਾਂਚ**:
   - ਸਾਰੇ ਮਾਰਕਡਾਉਨ ਲਿੰਕ ਟੈਸਟ ਕਰੋ
   - ਚਿੱਤਰ ਰੇਫਰੰਸ ਕੰਮ ਕਰਦੇ ਹਨ ਜਾਂ ਨਹੀਂ ਵੇਖੋ

4. **ਸਮੱਗਰੀ ਸਮੀਖਿਆ**:
   - ਵਿਆਕਰਨ ਅਤੇ ਸਪੈਲਿੰਗ ਲਈ ਪ੍ਰੂਫਰੀਡ ਕਰੋ
   - ਕੋਡ ਉਦਾਹਰਨ ਸਹੀ ਅਤੇ ਸਿੱਖਣਯੋਗ ਹੋਣ ਯਕੀਨੀ ਬਣਾਓ
   - ਅਨੁਵਾਦ ਮੂਲ ਅਰਥ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦੇ ਹਨ

### Contribution Requirements

- Microsoft CLA ਨਾਲ ਸਹਿਮਤੀ ਜਤਾਓ (ਪਹਿਲੀ PR 'ਤੇ ਸਵੈਚਾਲਿਤ ਜਾਂਚ)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ਦੀ ਪਾਲਣਾ ਕਰੋ
- ਵਿਸਥਾਰ ਲਈ [CONTRIBUTING.md](./CONTRIBUTING.md) ਵੇਖੋ
- ਜੇ ਲੋੜ ਹੋਵੇ ਤਾਂ PR ਵੇਰਣ ਵਿੱਚ ਇਸ਼ੂ ਨੰਬਰ ਉਲਲੇਖ ਕਰੋ

### Review Process

- PR maintainers ਅਤੇ ਕਮਿਊਨਿਟੀ ਵੱਲੋਂ ਸਮੀਖਿਆ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ
- ਸਿੱਖਣਯੋਗਤਾ ਨੂੰ ਪ੍ਰਾਥਮਿਕਤਾ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ
- ਕੋਡ ਉਦਾਹਰਨ ਮੌਜੂਦਾ ਸਰਵੋਤਮ ਅਭਿਆਸਾਂ ਨੂੰ ਫਾਲੋ ਕਰਦੇ ਹੋਣ
- ਅਨੁਵਾਦ ਸਹੀਅਤ ਅਤੇ ਸਾਂਸਕ੍ਰਿਤਿਕ ਅਨੁਕੂਲਤਾ ਲਈ ਸਮੀਖਿਆ ਕੀਤੇ ਜਾਂਦੇ ਹਨ

## Translation System

### Automated Translation

- GitHub Actions ਵਿੱਚ co-op-translator ਵਰਕਫਲੋ ਵਰਤਦਾ ਹੈ
- 50+ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦ ਕਰਦਾ ਹੈ
- ਮੁੱਖ ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ ਸੋਰਸ ਫਾਈਲਾਂ
- `translations/{language-code}/` ਡਾਇਰੈਕਟਰੀਆਂ ਵਿੱਚ ਅਨੁਵਾਦਿਤ ਫਾਈਲਾਂ

### Adding Manual Translation Improvements

1. `translations/{language-code}/` ਵਿੱਚ ਫਾਈਲ ਲੱਭੋ
2. ਢਾਂਚਾ ਬਰਕਰਾਰ ਰੱਖਦਿਆਂ ਸੁਧਾਰ ਕਰੋ
3. ਕੋਡ ਉਦਾਹਰਨ ਕਾਰਗਰ ਰਹਿਣ ਇਹ ਯਕੀਨੀ ਬਣਾਓ
4. ਸਥਾਨਕਕ੍ਰਿਤ ਕੁਈਜ਼ ਸਮੱਗਰੀ ਟੈਸਟ ਕਰੋ

### Translation Metadata

ਅਨੁਵਾਦਿਤ ਫਾਈਲਾਂ ਵਿੱਚ ਮੈਟਾਡੇਟਾ ਹੈਡਰ ਹੁੰਦਾ ਹੈ:
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

**Quiz app fail to start**:
- Node.js ਦਾ ਵਰਜਨ ਜਾਂਚੋ (v14+ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ)
- `node_modules` ਅਤੇ `package-lock.json` ਮਿਟਾਓ, ਫਿਰ `npm install` ਚਲਾਓ
- ਪੋਰਟ ਟਕਰਾਅ ਦੀ ਜਾਂਚ ਕਰੋ (ਡਿਫਾਲਟ: Vite ਪੋਰਟ 5173 ਵਰਤਦਾ ਹੈ)

**API server won't start**:
- Node.js ਦਾ ਵਰਜਨ ਘੱਟੋ-ਘੱਟ (node >=10) ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ
- ਪੋਰਟ ਪਹਿਲਾਂ ਤੋਂ ਵਰਤਿਆ ਜਾ ਰਿਹਾ ਹੈ ਜਾਂ ਨਹੀਂ ਚੈੱਕ ਕਰੋ
- ਸਾਰੀਆਂ ਡਿਪੈਂਡੈਂਸੀਜ਼ ਨੂੰ `npm install` ਨਾਲ ਇੰਸਟਾਲ ਕਰੋ

**Browser extension won't load**:
- manifest.json ਦੀ ਸਹੀ ਜ਼ਾਂਚ ਕਰੋ
- ਬ੍ਰਾਊਜ਼ਰ ਕਨਸੋਲ ਵਿੱਚ ਗਲਤੀਆਂ ਵੇਖੋ
- ਬ੍ਰਾਊਜ਼ਰ ਵਿਸ਼ੇਸ਼ ਐਕਸਟੈਂਸ਼ਨ ਇੰਸਟਾਲੇਸ਼ਨ ਨਿਰਦੇਸ਼ਨਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ

**Python chat project issues**:
- OpenAI ਪੈਕੇਜ ਇੰਸਟਾਲ ਕਰੋ: `pip install openai`
- GITHUB_TOKEN ਵਾਤਾਵਰਣ ਚਰ ਦਾ ਸੈੱਟ ਹੋਣਾ ਜਾਂਚੋ
- GitHub Models ਦੀ ਪ੍ਰਾਪਤੀ ਅਧਿਕਾਰ ਸਹੀ ਹਨ ਜਾਂ ਨਹੀਂ ਵੇਖੋ

**Docsify not serving docs**:
- docsify-cli ਗਲੋਬਲੀ ਇੰਸਟਾਲ ਕਰੋ: `npm install -g docsify-cli`
- ਗ੍ਰਹਿ ਮੁੱਖ ਡਾਇਰੈਕਟਰੀ ਤੋਂ ਚਲਾਓ
- ਯਕੀਨ ਬਨਾਓ ਕਿ `docs/_sidebar.md` ਮੌਜੂਦ ਹੈ

### Development Environment Tips

- HTML ਪਰਿਯੋਜਨਾਵਾਂ ਲਈ VS Code Live Server ਐਕਸਟੈਂਸ਼ਨ ਵਰਤੋਂ
- ESLint ਅਤੇ Prettier ਐਕਸਟੈਂਸ਼ਨ ਕੁਨਫਿਗਰ ਕਰੋ ਸੰਗਤਫਾਰਮਟਿੰਗ ਲਈ
- JavaScript ਡਿਬੱਗਿੰਗ ਲਈ ਬ੍ਰਾਊਜ਼ਰ DevTools ਵਰਤੋਂ
- Vue ਪ੍ਰਾਜੈਕਟਾਂ ਲਈ Vue DevTools ਬ੍ਰਾਊਜ਼ਰ ਐਕਸਟੈਂਸ਼ਨ ਇੰਸਟਾਲ ਕਰੋ

### Performance Considerations

- ਵੱਡੀ ਗਿਣਤੀ ਅਨੁਵਾਦਿਤ ਫਾਈਲਾਂ (50+ ਭਾਸ਼ਾਵਾਂ) ਨਾਲ ਪੂਰਨ ਕਲੋਨ ਵੱਡੇ ਹੁੰਦੇ ਹਨ
- ਸਿਰਫ ਸਮੱਗਰੀ 'ਤੇ ਕੰਮ ਕਰਨ ਲਈ shallow clone ਵਰਤੋਂ: `git clone --depth 1`
- ਅੰਗਰੇਜ਼ੀ ਸਮੱਗਰੀ ਤੇ ਕੰਮ ਦੌਰਾਨ ਅਨੁਵਾਦਾਂ ਨੂੰ ਖੋਜ ਤੋਂ ਬਾਹਰ ਰੱਖੋ
- ਪਹਿਲੀ ਵਾਰੀ ਨਿਰਮਾਣ ਪ੍ਰਕਿਰਿਆ ਧੀਮੀ ਹੋ ਸਕਦੀ ਹੈ (npm install, Vite build)

## Security Considerations

### Environment Variables

- API ਚਾਬੀਆਂ ਕਦੇ ਵੀ ਗ੍ਰਹਿ ਵਿੱਚ ਕਮਿਟ ਨਾ ਕਰੋ
- `.env` ਫਾਈਲਾਂ ਵਰਤੋਂ (ਜੇਹੜੀਆਂ `.gitignore` ਵਿੱਚ ਹਨ)
- ਪਰਿਯੋਜਨਾ README ਵਿੱਚ ਜਰੂਰੀ ਵਾਤਾਵਰਣ ਚਰ ਦਸਤਾਵੇਜ਼ਕਰਨ

### Python Projects

- ਵਰਚੁਅਲ ਵਾਤਾਵਰਣ ਵਰਤੋਂ: `python -m venv venv`
- ਡਿਪੈਂਡੈਂਸੀਜ਼ ਨੂੰ ਅੱਪਡੇਟ ਰੱਖੋ
- GitHub ਟੋਕਨ ਘੱਟੋ-ਘੱਟ ਅਧਿਕਾਰਾਂ ਵਾਲੇ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ

### GitHub Models Access

- GitHub Models ਲਈ ਨਿੱਜੀ ਐਕਸੈਸ ਟੋਕਨ (PAT) ਲਾਜ਼ਮੀ
- ਟੋਕਨ ਵਾਤਾਵਰਣ ਚਰ ਵਜੋਂ ਸੁਰੱਖਿਅਤ ਕਰਨਾ
- ਕਦੇ ਵੀ ਟੋਕਨ ਜਾਂ ਸੰਜੋਗ ਕਮਿਟ ਨਾ ਕਰੋ

## Additional Notes

### Target Audience

- ਨਵੇਂ ਵੀ ਸ਼ੁਰੂਆਤੀ ਵੈੱਬ ਵਿਕਾਸ ਵਿੱਚ
- ਵਿਦਿਆਰਥੀ ਅਤੇ ਖੁਦ ਸਿੱਖਣ ਵਾਲੇ
- ਅਧਿਆਪਕ ਜੋ ਕਲਾਸਰੂਮ ਵਿੱਚ ਪਾਠਕ੍ਰਮ ਵਰਤਦੇ ਹਨ
- ਸਮੱਗਰੀ ਪੁहुੰਚਯੋਗਤਾ ਅਤੇ ধੀਮੇ-ধੀਮੇ ਕੌਸ਼ਲ ਵਿਕਾਸ ਲਈ ਤਿਆਰ

### Educational Philosophy

- ਪ੍ਰਾਜੈਕਟ-ਅਧਾਰਿਤ ਸਿੱਖਣ ਦਾ ਅਫ਼ਰੀਕਾ
- ਅਕਸਰ ਸਿੱਖਿਆ ਜਾਂਚ (ਕੁਈਜ਼)
- ਅਮਲੀ ਕੋਡਿੰਗ ਅਭਿਆਸ
- ਅਸਲੀ ਦੁਨੀਆਂ ਦੀਆਂ ਉਦਾਹਰਨਾਂ
- ਫ੍ਰੇਮਵਰਕਾਂ ਤੋਂ ਪਹਿਲਾਂ ਬੁਨਿਆਦੀ ਧਿਆਨ

### Repository Maintenance

- ਸਿੱਖਣ ਵਾਲਿਆਂ ਅਤੇ ਯੋਗਦਾਨकर्तਿਆਂ ਦੀ ਸਰਗਰਮ ਕਮਿਊਨਿਟੀ
- ਡਿਪੈਂਡੈਂਸੀਜ਼ ਅਤੇ ਸਮੱਗਰੀ ਦੇ ਨਿਯਮਿਤ ਅੱਪਡੇਟ
- maintainers ਵੱਲੋਂ ਇਸ਼ੂ ਅਤੇ ਚਰਚਾਵਾਂ ਦੀ ਨਿਗਰਾਨੀ
- ਅਨੁਵਾਦ ਅਪਡੇਟ GitHub Actions ਰਾਹੀਂ ਸਵੈਚਾਲਿਤ

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ਦੀ ਸਿਫਾਰਸ਼
- ਵਾਧੂ ਕੋਰਸ: ਜਨੇਰੇਟਿਵ AI, ਡਾਟਾ ਸਾਇੰਸ, ML, IoT ਪਾਠਕ੍ਰਮ ਉਪਲਬਧ

### Working with Specific Projects

ਵੱਖ-ਵੱਖ ਪਰਿਯੋਜਨਾਵਾਂ ਲਈ ਵਿਸਥਾਰ ਵਿੱਚ ਨਿਰਦੇਸ਼ਾਂ ਲਈ, README ਫਾਈਲਾਂ ਵਿੱਚ ਵੇਖੋ:
- `quiz-app/README.md` - Vue 3 ਕੁਈਜ਼ ਐਪਲੀਕੇਸ਼ਨ
- `7-bank-project/README.md` - ਪ੍ਰਮਾਣੀਕਰਨ ਸਹਿਤ ਬੈਂਕਿੰਗ ਐਪ
- `5-browser-extension/README.md` - ਬਰਾਊਜ਼ਰ ਐਕਸਟੈਂਸ਼ਨ ਵਿਕਾਸ
- `6-space-game/README.md` - ਕੈਨਵਾਸ-ਅਧਾਰਿਤ ਗੇਮ ਵਿਕਾਸ
- `9-chat-project/README.md` - AI ਚੈਟ ਸਹਾਇਕ ਪ੍ਰਾਜੈਕਟ

### Monorepo Structure

ਇਹ ਰਵਾਇਤੀ ਮੋਨੋਰੇਪੋ ਨਹੀਂ ਹੈ, ਪਰ ਇਸ ਵਿੱਚ ਕਈ ਖੁਦਮੁਖਤਿਆਰ ਪਰਿਯੋਜਨਾ ਹਨ:
- ਹਰ ਇਕ ਪਾਠ ਖੁਦਮੁਖਤਿਆਰ ਹੈ
- ਪਰਿਯੋਜਨਾਵਾਂ ਸਾਂਝਾ ਡਿਪੈਂਡੈਂਸੀ ਨਹੀਂ ਕਰਦੀਆਂ
- ਇੱਕ-ਇਕ ਸਰਕਾਰੀ ਪ੍ਰੋਜੈਕਟਾਂ 'ਤੇ ਕੰਮ ਕਰੋ ਬਿਨਾਂ ਦੂਜਿਆਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕੀਤੇ
- ਪੂਰਾ ਪਾਠਕ੍ਰਮ ਅਨੁਭਵ ਲਈ ਪੂਰਾ ਗ੍ਰਹਿ ਕਲੋਨ ਕਰੋ

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ਡਿਸਕਲੇਮਰ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਨਾਲ ਅਨੁਵਾਦਿਤ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦ ਕਿ ਅਸੀਂ ਸਹੀਤਾ ਲਈ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਵਿੱਚ ਰੱਖੋ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸਮਰੱਥਤਾਵਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਮੂਲ ਦਸਤਾਵੇਜ਼ ਆਪਣੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਪ੍ਰਭਾਵਸ਼ালী ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਕ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਅਸੀਂ ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਕਾਰਨ ਪੈਦਾ ਹੋਣ ਵਾਲੀਆਂ ਕਿਸੇ ਭੀ ਗਲਤਫਹਮੀ ਜਾਂ ਗਲਤ ਸਮਝ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।
<!-- CO-OP TRANSLATOR DISCLAIMER END -->