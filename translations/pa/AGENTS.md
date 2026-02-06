# AGENTS.md

## Project Overview

ਇਹ ਬਿਗਿਨਰਜ਼ ਲਈ ਵੈੱਬ ਵਿਕਾਸ ਦੀਆਂ ਬੁਨਿਆਦਾਂ ਸਿਖਾਉਣ ਲਈ ਇੱਕ ਸਿੱਖਿਆਤਮਕ ਕਰੀਕੁਲਮ ਰੈਪੋਜ਼ਟਰੀ ਹੈ। ਕਰੀਕੁਲਮ ਮਾਇਕਰੋਸਾਫਟ ਕਲਾਉਡ ਐਡਵੋਕੇਟਸ ਵੱਲੋਂ ਵਿਕਸਿਤ ਇੱਕ ਸਮਗ੍ਰ 12-ਹਫ਼ਤਿਆਂ ਦਾ ਕੋਰਸ ਹੈ, ਜਿਸ ਵਿੱਚ ਜਾਵਾਸਕ੍ਰਿਪਟ, CSS, ਅਤੇ HTML ਨੂੰ ਕਵਰ ਕਰਨ ਵਾਲੇ 24 ਹੈਂਡ-ਆਨ ਪਾਠ ਸ਼ਾਮਲ ਹਨ।

### Key Components

- **ਸਿੱਖਿਆਤਮਕ ਸਮੱਗਰੀ**: 24 ਸੰਰਚਿਤ ਪਾਠ ਪ੍ਰਾਜੈਕਟ-ਆਧਾਰਿਤ ਮੌਡਿਊਲਾਂ ਵਿੱਚ ਵੰਡੇ ਹੋਏ
- **ਵਿਆਵਹਾਰਿਕ ਪ੍ਰਾਜੈਕਟਸ**: ਟੈਰਾਰਿਯਮ, ਟਾਈਪਿੰਗ ਗੇਮ, ਬ੍ਰਾਊਜ਼ਰ ਐਕਸਟੈਨਸ਼ਨ, ਸਪੇਸ ਗੇਮ, ਬੈਂਕਿੰਗ ਐਪ, ਕੋਡ ਐਡੀਟਰ, ਅਤੇ ਏਆਈ ਚੈਟ ਸਹਾਇਕ
- **ਇੰਟਰਐਕਟਿਵ ਕਵਿਜ਼**: 48 ਕਵਿਜ਼, ਹਰ ਇੱਕ ਵਿੱਚ 3 ਪ੍ਰਸ਼ਨ (ਪ੍ਰੀ/ਪੋਸਟ-ਪਾਠ ਮੁਲਾਂਕਣ)
- **ਬਹੁ-ਭਾਸ਼ਾਈ ਸਹਾਇਤਾ**: GitHub ਐਕਸ਼ਨਜ਼ ਦੁਆਰਾ 50+ ਭਾਸ਼ਾਵਾਂ ਲਈ ਆਟੋਮੈਟਿਕ ਅਨੁਵਾਦ
- **ਟੈਕਨੋਲੋਜੀਜ਼**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (ਏਆਈ ਪ੍ਰਾਜੈਕਟਸ ਲਈ)

### Architecture

- ਪਾਠ-ਆਧਾਰਿਤ ਸੰਰਚਨਾ ਨਾਲ ਸਿੱਖਿਆਤਮਕ ਰੈਪੋਜ਼ਟਰੀ
- ਹਰੇਕ ਪਾਠ ਫੋਲਡਰ ਵਿੱਚ README, ਕੋਡ ਉਦਾਹਰਨਾਂ, ਅਤੇ ਹੱਲ ਹੋਂਦੇ ਹਨ
- ਅਲੱਗ ਡਾਇਰੈਕਟਰੀਜ਼ ਵਿੱਚ ਸਵਤੰਤਰ ਪ੍ਰਾਜੈਕਟ (quiz-app, ਵੱਖ-ਵੱਖ ਪਾਠ ਪ੍ਰਾਜੈਕਟ)
- GitHub ਐਕਸ਼ਨਜ਼ ਦੀ ਵਰਤੋਂ ਨਾਲ ਅਨੁਵਾਦ ਪদ্ধਤੀ (co-op-translator)
- ਡਾਕਯੂਮੇਂਟੇਸ਼ਨ Docsify ਰਾਹੀਂ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ PDF ਰੂਪ ਵਿੱਚ ਉਪਲਬਧ

## Setup Commands

ਇਹ ਰੈਪੋਜ਼ਟਰੀ ਮੁੱਖ ਤੌਰ 'ਤੇ ਸਿੱਖਣ ਵਾਲੀ ਸਮੱਗਰੀ ਲਈ ਹੈ। ਵਿਸ਼ੇਸ਼ ਪ੍ਰਾਜੈਕਟਸ ਲਈ ਕੰਮ ਕਰਨ ਲਈ:

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
# ਬ੍ਰਾਊਜ਼ਰ-ਖਾਸ ਐਕਸਟੈਂਸ਼ਨ ਲੋਡ ਕਰਨ ਦੇ ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪਾਲਨਾ ਕਰੋ
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ index.html ਖੋਲ੍ਹੋ ਜਾਂ ਲਾਈਵ ਸਰਵਰ ਦੀ ਵਰਤੋਂ ਕਰੋ
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ਵਾਤਾਵਰਣ ਚਰ ਵਰ ਬਦਲੋ ਸੈੱਟ ਕਰੋ
python api.py
```

## Development Workflow

### For Content Contributors

1. **ਰੈਪੋਜ਼ਟਰੀ ਨੂੰ ਫੋਰਕ ਕਰੋ** ਆਪਣੇ GitHub ਖਾਤੇ ਵਿੱਚ
2. **ਆਪਣੇ ਫੋਰਕ ਨੂੰ ਕਲੋਨ ਕਰੋ** ਸਥਾਨਕ ਤੌਰ 'ਤੇ
3. **ਤਬਦੀਲੀਆਂ ਲਈ ਨਵੀਂ ਬ੍ਰਾਂਚ ਬਣਾਓ**
4. ਪਾਠ ਸਮੱਗਰੀ ਜਾਂ ਕੋਡ ਉਦਾਹਰਨਾਂ ਵਿੱਚ ਤਬਦੀਲੀ ਕਰੋ
5. ਸੰਬੰਧਿਤ ਪ੍ਰਾਜੈਕਟ ਡਾਇਰੈਕਟਰੀਜ਼ ਵਿੱਚ ਕੋਈ ਵੀ ਕੋਡ ਤਬਦੀਲੀਆਂ ਟੈਸਟ ਕਰੋ
6. ਯੋਗਦਾਨ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਪੁਲ ਰਿਕਵੇਸਟ ਸਬਮਿਟ ਕਰੋ

### For Learners

1. ਰੈਪੋਜ਼ਟਰੀ ਨੂੰ ਫੋਰਕ ਜਾਂ ਕਲੋਨ ਕਰੋ
2. ਕ੍ਰਮਵਾਰ ਪਾਠ ਡਾਇਰੈਕਟਰੀਜ਼ ਵਿੱਚ ਜਾਓ
3. ਹਰ ਪਾਠ ਲਈ README ਫਾਇਲਾਂ ਪੜ੍ਹੋ
4. https://ff-quizzes.netlify.app/web/ 'ਤੇ ਪ੍ਰੀ-ਪਾਠ ਕਵਿਜ਼ ਪੂਰੇ ਕਰੋ
5. ਪਾਠ ਫੋਲਡਰਾਂ ਵਿੱਚ ਕੋਡ ਉਦਾਹਰਨਾਂ 'ਤੇ ਕੰਮ ਕਰੋ
6. ਅਸਾਈਨਮੈਂਟਸ ਅਤੇ ਚੈਲੈਂਜ ਪੂਰੇ ਕਰੋ
7. ਪੋਸਟ-ਪਾਠ ਕਵਿਜ਼ ਲਓ

### Live Development

- **ਡਾਕਯੂਮੇਂਟੇਸ਼ਨ**: ਰੂਟ ਵਿੱਚ `docsify serve` ਚਲਾਓ (ਪੋਰਟ 3000)
- **ਕਵਿਜ਼ ਐਪ**: quiz-app ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ `npm run dev` ਚਲਾਓ
- **ਪ੍ਰਾਜੈਕਟਸ**: HTML ਪ੍ਰਾਜੈਕਟਸ ਲਈ VS ਕੋਡ ਲਾਈਵ ਸਰਵਰ ਐਕਸਟੈਂਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰੋ
- **API ਪ੍ਰਾਜੈਕਟਸ**: ਸੰਬੰਧਿਤ API ਡਾਇਰੈਕਟਰੀਜ਼ ਵਿੱਚ `npm start` ਚਲਾਓ

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # ਕੋਡ ਸਟਾਈਲ ਮਸਲਿਆਂ ਦੀ ਜਾਂਚ ਕਰੋ
npm run build      # ਬਣਤਰ ਸਫਲ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # ਕੋਡ ਸਟਾਈਲ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ ਚੈਕ ਕਰੋ
node server.js     # ਸਰਵਰ ਦੀ ਬਿਨਾਂ ਗਲਤੀਆਂ ਸ਼ੁਰੂਆਤ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ
```

### General Testing Approach

- ਇਹ ਸਿੱਖਿਆਤਮਕ ਰੈਪੋਜ਼ਟਰੀ ਹੈ ਜਿਸ ਵਿੱਚ ਪੂਰਨ ਆਟੋਮੇਟਿਕ ਟੈਸਟ ਨਹੀਂ ਹਨ
- ਮੈਨੂਅਲ ਟੈਸਟਿੰਗ ਫੋਕਸ:
  - ਕੋਡ ਉਦਾਹਰਨ ਬਿਨਾਂ ਗਲਤੀ ਚੱਲਣ
  - ਡਾਕਯੂਮੈਂਟੇਸ਼ਨ ਵਿੱਚ ਲਿੰਕ ਸਹੀ ਕੰਮ ਕਰਨ
  - ਪ੍ਰਾਜੈਕਟ ਦੀ ਸਫਲ ਬਣਾਵਟ
  - ਉਦਾਹਰਨਾਂ ਵਧੀਆ ਅਮਲਾਂ ਦੇ ਅਨੁਸਾਰ ਹੋਣ

### Pre-submission Checks

- ਜਿੱਥੇ package.json ਹੈ, ਉਥੇ `npm run lint` ਚਲਾਓ
- ਮਾਰਕਡਾਊਨ ਲਿੰਕਾਂ ਦੀ ਸਹੀਤਾ ਜਾਂਚੋ
- ਕੋਡ ਉਦਾਹਰਨ ਬ੍ਰਾਊਜ਼ਰ ਜਾਂ Node.js ਵਿੱਚ ਟੈਸਟ ਕਰੋ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਅਨੁਵਾਦ ਸਹੀ ਸੰਰਚਨਾ ਰੱਖਦੇ ਹਨ

## Code Style Guidelines

### JavaScript

- ਆਧੁਨਿਕ ES6+ ਸੰਟੈਕਸ ਦੀ ਵਰਤੋਂ ਕਰੋ
- ਪ੍ਰਾਜੈਕਟਸ ਵਿੱਚ ਦਿੱਤੇ ਗਏ ESLint ਸੈਟਿੰਗਜ਼ ਫਾਲੋ ਕਰੋ
- ਸਿੱਖਿਆ ਲਈ ਸਮਝਣਯੋਗ ਵੇਰੀਏਬਲ ਅਤੇ ਫੰਕਸ਼ਨ ਨਾਮ ਵਰਤੋ
- ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ ਧਾਰਾਤਮਕ ਟਿੱਪਣੀਆਂ ਸ਼ਾਮਲ ਕਰੋ
- ਜਿੱਥੇ ਸੰਰਚਿਤ, Prettier ਵਰਤ ਕੇ ਕੋਡ ਫਾਰਮੈਟ ਕਰੋ

### HTML/CSS

- ਸੈਮਾਂਟੀਕ HTML5 ਤੱਤ
- ਪ੍ਰਤਿਕ੍ਰਿਆਸ਼ੀਲ ਡਿਜ਼ਾਈਨ ਮੁਢਲੀ ਵਿਧੀ
- ਸਾਫ ਸਪਸ਼ਟ CSS ਕਲਾਸ ਨਾਮਕਰਨ
- CSS ਤਕਨੀਕਾਂ ਲਈ ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ ਟਿੱਪਣੀਆਂ

### Python

- PEP 8 ਸਟਾਈਲ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼
- ਸਪਸ਼ਟ, ਸਿੱਖਿਆਤਮਕ ਕੋਡ ਉਦਾਹਰਨ
- ਜਿੱਥੇ ਸਹਾਇਕ, ਟਾਈਪ ਹਿੰਟਸ

### Markdown Documentation

- ਸਪਸ਼ਟ ਹੈਡਿੰਗ ਹਾਇਰਾਰਕੀ
- ਭਾਸ਼ਾ-specification ਵਾਲੇ ਕੋਡ ਬਲਾਕ
- ਵਧੀਕ ਸਾਂਧਰਭ ਲਈ ਲਿੰਕ
- `images/` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਸਕ੍ਰੀਨਸ਼ਾਟ ਅਤੇ ਚਿੱਤਰ
- ਪਹੁੰਚਯੋਗਤਾ ਲਈ ਚਿੱਤਰਾਂ ਦਾ Alt ਟੈਕਸਟ

### File Organization

- ਪਾਠਾਂ ਨੂੰ ਕ੍ਰਮਵਾਰ ਨੰਬਰ ਦਿੱਤੇ ਗਏ (1-getting-started-lessons, 2-js-basics, ਆਦਿ)
- ਹਰ ਪ੍ਰਾਜੈਕਟ ਵਿੱਚ `solution/` ਅਤੇ ਅਕਸਰ `start/` ਜਾਂ `your-work/` ਡਾਇਰੈਕਟਰੀਜ਼
- ਪਾਠ-ਅਨੁਸਾਰ `images/` ਫੋਲਡਰ ਵਿੱਚ ਚਿੱਤਰ ਸਟੋਰ
- ਅਨੁਵਾਦ `translations/{language-code}/` ਢਾਂਚੇ ਵਿੱਚ

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app ਅਜੂਰ ਸਟੈਟਿਕ ਵੈੱਬ ਐਪਸ ਡਿਪਲੋਇਮੈਂਟ ਲਈ ਕਨਫਿਗਰਡ ਹੈ:

```bash
cd quiz-app
npm run build      # dist/ ਫੋਲਡਰ ਬਣਾਉਂਦਾ ਹੈ
# ਮukh push ਤੇ GitHub Actions ਵਰਕਫਲੋ ਰਾਹੀਂ ਡਿਪਲੋਏ ਕਰਦਾ ਹੈ
```

ਅਜੂਰ ਸਟੈਟਿਕ ਵੈੱਬ ਐਪਸ ਕਨਫਿਗਰੇਸ਼ਨ:
- **ਐਪ locatie**: `/quiz-app`
- **ਆਉਟਪੁੱਟ locatie**: `dist`
- **ਵਰਕਫਲੋ**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf ਸਥਾਪਤ ਕਰੋ
npm run convert               # docs ਤੋਂ PDF ਬਣਾਓ
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # ਡੌਕਸਿਫਾਈ ਨੂੰ ਗਲੋਬਲੀ ਇੰਸਟਾਲ ਕਰੋ
docsify serve                 # ਲੋਕਲਹੋਸਟ:3000 ‘ਤੇ ਸਰਵ ਕਰੋ
```

### Project-specific Builds

ਹਰ ਇੱਕ ਪ੍ਰਾਜੈਕਟ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਆਪਣਾ ਬਿਲਡ ਪ੍ਰਕਿਰਿਆ ਹੋ ਸਕਦੀ ਹੈ:
- Vue ਪ੍ਰਾਜੈਕਟ: `npm run build` ਪ੍ਰੋਡਕਸ਼ਨ ਬੰਡਲ ਬਣਾਉਂਦਾ ਹੈ
- ਸਟੈਟਿਕ ਪ੍ਰਾਜੈਕਟ: ਕੋਈ ਬਿਲਡ ਸਟੈਪ ਨਹੀਂ, ਸਿੱਧੇ ਫਾਈਲਾਂ ਸਰਵ ਕਰਨ

## Pull Request Guidelines

### Title Format

ਸਪਸ਼ਟ ਅਤੇ ਵੇਰਵਾ ਵਾਲੇ ਸਿਰਲੇਖ ਵਰਤੋਂ ਜੋ ਬਦਲਾਅ ਅੰਤਰਗਤ ਖੇਤਰ ਦਰਸਾਉਂਦੇ ਹਨ:
- `[Quiz-app] ਲੈਸਨ X ਲਈ ਨਵਾਂ ਕਵਿਜ਼ ਸ਼ਾਮਲ ਕਰੋ`
- `[Lesson-3] ਟੈਰਾਰਿਯਮ ਪ੍ਰਾਜੈਕਟ ਵਿੱਚ ਟਾਇਪੋ ਠੀਕ ਕਰੋ`
- `[Translation] ਲੈਸਨ 5 ਲਈ ਸਪੈਨਿਸ਼ ਅਨੁਵਾਦ ਸ਼ਾਮਲ ਕਰੋ`
- `[Docs] ਸੈਟਅੱਪ ਨਿਰਦੇਸ਼ ਅੱਪਡੇਟ ਕਰੋ`

### Required Checks

ਪੂਲ ਰਿਕਵੇਸਟ ਵਿੱਚ ਜਮ੍ਹਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ:

1. **ਕੋਡ ਕੁਆਲਿਟੀ**:
   - ਪ੍ਰਭਾਵਿਤ ਪ੍ਰਾਜੈਕਟ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ `npm run lint` ਚਲਾਓ
   - ਸਾਰੇ ਲਿੰਟਿੰਗ ਗਲਤੀਆਂ ਅਤੇ ਚੇਤਾਵਨੀਆਂ ਠੀਕ ਕਰੋ

2. **ਬਿਲਡ ਵੈਰੀਫਿਕੇਸ਼ਨ**:
   - ਜੇ ਲਾਗੂ ਹੋਵੇ ਤਾਂ `npm run build` ਚਲਾਓ
   - ਕੋਈ ਬਿਲਡ ਗਲਤੀਆਂ ਨਾ ਹੋਣ

3. **ਲਿੰਕ ਵੈਰੀਫਿਕੇਸ਼ਨ**:
   - ਸਾਰੇ ਮਾਰਕਡਾਊਨ ਲਿੰਕ ਟੈਸਟ ਕਰੋ
   - ਚਿੱਤਰ ਸੰਦਰਭ ਸਹੀ ਕੰਮ ਕਰਦੇ ਹਨ ਇਸ ਦੀ ਜਾਂਚ ਕਰੋ

4. **ਸਮੱਗਰੀ ਸਮੀਖਿਆ**:
   - ਸਪੈਲਿੰਗ ਅਤੇ ਗ੍ਰੈਮਰ ਦੀ ਜਾਂਚ ਕਰੋ
   - ਕੋਡ ਉਦਾਹਰਨ ਸਹੀ ਅਤੇ ਸਿੱਖਣ ਯੋਗ ਹੋਣ
   - ਅਨੁਵਾਦ ਮੁਢਲਾ ਅਰਥ ਬਰਕਰਾਰ ਰੱਖਦੇ ਹੋਣ

### Contribution Requirements

- Microsoft CLA ਨਾਲ ਸਹਿਮਤ ਹੋਵੋ (ਪਹਿਲੀ PR 'ਤੇ ਆਟੋਮੈਟਿਕ ਚੈਕ)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) ਦੀ ਪਾਲਣਾ ਕਰੋ
- ਵਿਸਥਾਰ ਲਈ [CONTRIBUTING.md](./CONTRIBUTING.md) ਦੇਖੋ
- ਜੇ ਲਾਗੂ ਹੋਵੇ ਤਾਂ PR ਵੇਰਵੇ ਵਿੱਚ ਸਮੱਸਿਆ ਨੰਬਰ ਦਰਜ ਕਰੋ

### Review Process

- PR ਦੀ ਸਮੀਖਿਆ ਮੇਨਟੇਨੇਰ ਅਤੇ ਕਮਿਊਨਿਟੀ ਕਰਦੀ ਹੈ
- ਸਿੱਖਿਆਤਮਕ ਸਪਸ਼ਟਤਾ ਨੂੰ ਤਰਜੀਹ
- ਕੋਡ ਉਦਾਹਰਨ ਅੱਜ ਦੀਆਂ ਵਧੀਆਂ ਪ੍ਰਣਾਲੀਆਂ ਨੂੰ ਮੰਨਣਗੇ
- ਅਨੁਵਾਦ ਸਹੀਤਾ ਅਤੇ ਸਾਂਸਕ੍ਰਿਤਿਕ ਯੋਗਤਾ ਲਈ ਸਮੀਖਿਆ ਕੀਤੀ ਜਾਂਦੀ ਹੈ

## Translation System

### Automated Translation

- GitHub ਐਕਸ਼ਨਜ਼ ਦੇ ਨਾਲ co-op-translator ਵਰਕਫਲੋ ਵਰਤਦਾ ਹੈ
- 50+ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸਵਚਾਲਿਤ ਅਨੁਵਾਦ ਕਰਦਾ ਹੈ
- ਸੋਰਸ ਫਾਈਲਾਂ ਮੁੱਖ ਡਾਇਰੈਕਟਰੀਜ਼ ਵਿੱਚ
- ਅਨੁਵਾਦਿਤ ਫਾਈਲਾਂ `translations/{language-code}/` ਡਾਇਰੈਕਟਰੀਜ਼ ਵਿੱਚ

### Adding Manual Translation Improvements

1. `translations/{language-code}/` ਵਿੱਚ ਫਾਈਲ ਲੱਭੋ
2. ਸਾਂਚਾ ਬਰਕਰਾਰ ਰੱਖਦਿਆਂ ਸੁਧਾਰ ਕਰੋ
3. ਕੋਡ ਉਦਾਹਰਨ ਸੰਚਾਲਿਤ ਰਹਿਣ ਤਾਂ ਕਿ ਕੋਡ ਕੰਮ ਕਰਦਾ ਰਹੇ
4. ਸਥਾਨਕ ਕਵਿਜ਼ ਸਮੱਗਰੀ ਦੀ ਜਾਂਚ ਕਰੋ

### Translation Metadata

ਅਨੁਵਾਦ ਕੀਤੀਆਂ ਫਾਈਲਾਂ ਵਿੱਚ ਮੈਟਾਡੇਟਾ ਹੈਡਰ ਸ਼ਾਮਲ ਹੈ:
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

**ਕਵਿਜ਼ ਐਪ ਸਟਾਰਟ ਨਹੀਂ ਹੁੰਦਾ**:
- Node.js ਦਾ ਵਰਜਨ ਚੈੱਕ ਕਰੋ (v14+ ਸਿਫਾਰਸ਼ੀਦਾ)
- `node_modules` ਅਤੇ `package-lock.json` ਡਿਲੀਟ ਕਰਕੇ `npm install` ਚਲਾਓ
- ਪੋਰਟ ਟਕਰਾਅ ਦੀ ਜਾਂਚ ਕਰੋ (ਡਿਫੌਲਟ: Vite ਪੋਰਟ 5173 ਵਰਤਦਾ ਹੈ)

**API ਸਰਵਰ ਸਟਾਰਟ ਨਹੀਂ ਹੁੰਦਾ**:
- Node.js ਵਰਜਨ (node >=10) ਯਕੀਨੀ ਬਣਾਓ
- ਪੋਰਟ ਪਹਿਲਾਂ ਤੋਂ ਵਰਤੀ ਜਾ ਰਹੀ ਹੈ ਜਾਂ ਨਹੀਂ ਜਾਂਚੋ
- ਸਾਰੇ ਨਿਰਭਰਤਾ `npm install` ਨਾਲ ਇੰਸਟਾਲ ਹੋਏ ਹਨ ਜਾਂ ਨਹੀਂ ਜਾਂਚੋ

**ਬ੍ਰਾਊਜ਼ਰ ਐਕਸਟੈਨਸ਼ਨ ਲੋਡ ਨਹੀਂ ਹੁੰਦੀ**:
- manifest.json ਸਹੀ ਫਾਰਮੈਟ ਵਿੱਚ ਹੈ ਯਕੀਨ ਕਰੋ
- ਬ੍ਰਾਊਜ਼ਰ ਕੰਸੋਲ ਵਿੱਚ ਗਲਤੀਆਂ ਚੈੱਕ ਕਰੋ
- ਬ੍ਰਾਊਜ਼ਰ-ਵਿਸ਼ੇਸ਼ ਐਕਸਟੈਂਸ਼ਨ ਇੰਸਟਾਲੇਸ਼ਨ ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ

**ਪਾਇਥਨ ਚੈਟ ਪ੍ਰਾਜੈਕਟ ਦਿੱਕਤਾਂ**:
- OpenAI ਪੈਕੇਜ ਇੰਸਟਾਲ ਕਰੋ: `pip install openai`
- GITHUB_TOKEN ਵਾਤਾਵਰਣ ਭੈਰੀਅਬਲ ਸੈੱਟ ਹੈ ਜਾਂ ਨਹੀਂ ਜਾਂਚੋ
- GitHub ਮਾਡਲਜ਼ ਦੀ ਐਕਸੇਸ ਅਧਿਕਾਰ ਜਾਂਚੋ

**Docsify ਡਾਕੂਮੈਂਟ ਸਰਵ ਨਹੀਂ ਕਰ ਰਹੀ**:
- docsify-cli ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਇੰਸਟਾਲ ਕਰੋ: `npm install -g docsify-cli`
- ਰੈਪੋਜ਼ਟਰੀ ਰੂਟ ਡਾਇਰੈਕਟਰੀ ਤੋਂ ਚਲਾਓ
- ਚੈੱਕ ਕਰੋ ਕਿ `docs/_sidebar.md` ਮੌਜੂਦ ਹੈ

### Development Environment Tips

- HTML ਪ੍ਰਾਜੈਕਟਸ ਲਈ VS ਕੋਡ ਲਾਈਵ ਸਰਵਰ ਐਕਸਟੈਂਸ਼ਨ ਵਰਤੋਂ
- ESLint ਅਤੇ Prettier ਐਕਸਟੈਂਸ਼ਨ ਇੰਸਟਾਲ ਕਰੋ ਤਾਕਿ ਕੋਡ ਫਾਰਮੈਟ ਸਥਿਰ ਰਹੇ
- ਜਾਵਾਸਕ੍ਰਿਪਟ ਡਿਬੱਗਿੰਗ ਲਈ ਬ੍ਰਾਊਜ਼ਰ ਡਿਵਟੂਲਜ਼ ਦੀ ਵਰਤੋਂ ਕਰੋ
- Vue ਪ੍ਰਾਜੈਕਟਸ ਲਈ Vue DevTools ਬ੍ਰਾਊਜ਼ਰ ਐਕਸਟੈਂਸ਼ਨ ਇੰਸਟਾਲ ਕਰੋ

### Performance Considerations

- ਬਹੁਤ ਸਾਰੀਆਂ ਅਨੁਵਾਦੀਤ ਫਾਈਲਾਂ (50+ ਭਾਸ਼ਾਵਾਂ) ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਸੰਪੂਰਨ ਕਲੋਨ ਵੱਡਾ ਹੁੰਦਾ ਹੈ
- ਸਿਰਫ ਸਮੱਗਰੀ 'ਤੇ ਕੰਮ ਕਰਨ ਲਈ shallow clone ਵਰਤੋ: `git clone --depth 1`
- ਅੰਗ੍ਰੇਜ਼ੀ ਸਮੱਗਰੀ 'ਤੇ ਕੰਮ ਕਰਦਿਆਂ ਅਨੁਵਾਦਾਂ ਨੂੰ ਖੋਜ ਤੋਂ ਬਾਹਰ ਰੱਖੋ
- ਪਹਿਲੀ ਵਾਰ ਚੱਲਾਉਂਦੇ ਸਮੇਂ npm install ਅਤੇ Vite build ਥੋੜ੍ਹਾ ਹੌਲੀ ਹੋ ਸਕਦੇ ਹਨ

## Security Considerations

### Environment Variables

- API keys ਕਦੇ ਵੀ ਰੈਪੋਜ਼ਟਰੀ 'ਚ ਕਮਿਟ ਨਾ ਕਰੋ
- `.env` ਫਾਈਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ (ਜੋ `.gitignore` ਵਿੱਚ ਹਨ)
- ਲੋੜੀਂਦੇ ਵਾਤਾਵਰਣ ਭੈਰੀਅਬਲ ਪ੍ਰਾਜੈਕਟ README ਵਿੱਚ ਦਸਤਾਵੇਜ਼ ਕਰੋ

### Python Projects

- ਵਰਚੁਅਲ ਵਾਤਾਵਰਣ ਦੀ ਵਰਤੋਂ: `python -m venv venv`
- ਨਿਰਭਰਤਾ ਆਪਡੇਟ ਰੱਖੋ
- GitHub ਟੋਕਨਜ਼ 'ਚ ਘੱਟੋ-ਘੱਟ ਲੋੜੀਂਦੇ ਅਧਿਕਾਰ ਹੋਣ

### GitHub Models Access

- GitHub ਮਾਡਲਜ਼ ਲਈ Personal Access Tokens (PAT) ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ
- ਟੋਕਨਜ਼ ਨੂੰ ਵਾਤਾਵਰਣ ਭੈਰੀਅਬਲ ਵਜੋਂ ਸਟੋਰ ਕਰੋ
- ਕਦੇ ਵੀ ਟੋਕਨ ਜਾਂ ਪਾਸਵਰਡ ਕਮਿਟ ਨਾ ਕਰੋ

## Additional Notes

### Target Audience

- ਵੈੱਬ ਵਿਕਾਸ ਵਿੱਚ ਬਿਲਕੁਲ ਨਵੇਂ
- ਵਿਦਿਆਰਥੀ ਅਤੇ ਖੁਦ ਸਿੱਖਣ ਵਾਲੇ
- ਕਲਾਸਰੂਮ ਵਿੱਚ ਕਰੀਕੁਲਮ ਵਰਤਣ ਵਾਲੇ ਅਧਿਆਪਕ
- ਸਿਹਤਮੰਦ ਪਹੁੰਚ ਅਤੇ ਧੀਰੇ-ਧੀਰੇ ਕੌਸ਼ਲ ਵਿਕਾਸ ਲਈ ਬਣਾਇਆ ਗਿਆ ਸਮੱਗਰੀ

### Educational Philosophy

- ਪ੍ਰਾਜੈਕਟ-ਆਧਾਰਿਤ ਸਿੱਖਣਾ
- ਨਿਯਮਤ ਗਿਆਨ ਸੰਭਾਲ (ਕਵਿਜ਼)
- ਹੈਂਡ-ਆਨ ਕੋਡਿੰਗ ਅਭਿਆਸ
- ਅਸਲੀ ਦੁਨੀਆ ਦੇ ਉਦੇਸ਼ਾਂ ਦੇ ਉਦਾਹਰਨ
- ਫਰੇਮਵਰਕ ਤੋਂ ਪਹਿਲਾਂ ਬੁਨਿਆਦੀ ਗੱਲਾਂ ਉੱਤੇ ਧਿਆਨ

### Repository Maintenance

- ਸਖਤ ਪਰਿਵਾਰ ਵਾਲੀ ਕਮਿਊਨਿਟੀ
- ਨਿਰਭਰਤਾ ਅਤੇ ਸਮੱਗਰੀ ਵਿੱਚ ਨਿਯਮਤ ਅੱਪਡੇਟ
- ਮੇਨਟੇਨੇਰਾਂ ਦੁਆਰਾ ਮੁੱਦੇ ਅਤੇ ਚਰਚਾਂ ਦੀ ਸੈਰ
- GitHub ਐਕਸ਼ਨਜ਼ ਦੁਆਰਾ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦ ਅੱਪਡੇਟ

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ਦੀ ਸਿਫਾਰਸ਼
- ਵਾਧੂ ਕੋਰਸ: ਜਨਰੇਟਿਵ ਏਆਈ, ਡੇਟਾ ਸਾਇੰਸ, ਐਮਐਲ, ਆਈਓਟੀ ਕਰੀਕੁਲਮ ਉਪਲਬਧ

### Working with Specific Projects

ਵਿਸ਼ੇਸ਼ ਪ੍ਰਾਜੈਕਟਸ 'ਤੇ ਵਿਸਥਾਰ ਲਈ README ਫਾਈਲਾਂ ਦਾ ਸੰਦਰਭ ਲਓ:
- `quiz-app/README.md` - Vue 3 ਕਵਿਜ਼ ਐਪਲੀਕੇਸ਼ਨ
- `7-bank-project/README.md` - ਪ੍ਰਮਾਣਿਕਤਾ ਨਾਲ ਬੈਂਕਿੰਗ ਐਪਲੀਕੇਸ਼ਨ
- `5-browser-extension/README.md` - ਬ੍ਰਾਊਜ਼ਰ ਐਕਸਟੈਂਸ਼ਨ ਵਿਕਾਸ
- `6-space-game/README.md` - ਕੈਨਵਾਸ-ਅਧਾਰਿਤ ਗੇਮ ਵਿਕਾਸ
- `9-chat-project/README.md` - ਏਆਈ ਚੈਟ ਸਹਾਇਕ ਪ੍ਰਾਜੈਕਟ

### Monorepo Structure

ਇਹ ਪ੍ਰੰਪਰਾ ਵਾਲਾ ਮੋਨੋਰੇਪੋ ਨਹੀਂ ਹੈ, ਪਰ ਇਸ ਰੈਪੋਜ਼ਟਰੀ ਵਿੱਚ ਕਈ ਸਵਤੰਤਰ ਪ੍ਰਾਜੈਕਟ ਹਨ:
- ਹਰ ਪਾਠ ਸਵਤੰਤਰ ਹੈ
- ਪ੍ਰਾਜੈਕਟਸ ਨਿਰਭਰਤਾਵਾਂ ਸਾਂਝੀਆਂ ਨਹੀਂ ਕਰਦੇ
- ਇਕੱਲੇ ਪ੍ਰਾਜੈਕਟਾਂ 'ਤੇ ਕੰਮ ਕਰੋ ਬਿਨਾ ਹੋਰਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕੀਤੇ
- ਪੂਰਾ ਕਰੀਕੁਲਮ ਅਨੁਭਵ ਲਈ ਸਾਰੀ ਰੈਪੋਜ਼ਟਰੀ ਕਲੋਨ ਕਰੋ

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ਇਨਕਾਰ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦਿਤ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦੋਂ ਕਿ ਅਸੀਂ ਸਹੀਤਾ ਲਈ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਵਿੱਚ ਰੱਖੋ ਕਿ ਆਟੋਮੈਟਿਕ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੂਚਿਤਤਾਵਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਮੂਲ ਦਸਤਾਵੇਜ਼ ਆਪਣੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਅਧਿਕਾਰਕ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਜਰੂਰੀ ਜਾਣਕਾਰੀ ਲਈ ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫ਼ਾਰਿਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੀਆਂ ਕਿਸੇ ਵੀ ਗਲਤਫ਼ਹਮੀਆਂ ਜਾਂ ਭ੍ਰਮਾਂ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।
<!-- CO-OP TRANSLATOR DISCLAIMER END -->