# AGENTS.md

## Project Overview

Dis na wan educational curriculum repository wey dem take teach web development fundamentals to beginners. Di curriculum na wan full 12-week course wey Microsoft Cloud Advocates develop, e get 24 hands-on lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons wey dem organize inside project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes wey get 3 questions each (pre/post-lesson assessments)
- **Multi-language Support**: Automated translations for 50+ languages through GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository with lesson-based structure
- Each lesson folder get README, code examples, and solutions
- Standalone projects dey for different directories (quiz-app, different lesson projects)
- Translation system wey use GitHub Actions (co-op-translator)
- Documentation dey inside Docsify and e still dey available as PDF

## Setup Commands

Dis repository na mainly for educational content consumption. If you wan work with specific projects:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start di development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Strat API saba
npm run lint       # Run ESLint
npm run format     # Make e fine wit Prettier
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions for how to put di extension inside di browser
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# Open index.html for browser or use Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable na
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork di repository** go your GitHub account
2. **Clone your fork** for your local machine
3. **Create new branch** for di changes wey you wan do
4. Change lesson content or code examples
5. Test any code changes inside di relevant project directories
6. Submit pull requests as per contribution guidelines

### For Learners

1. Fork or clone di repository
2. waka go lesson directories one after di other
3. Read README files for each lesson
4. Complete pre-lesson quizzes for https://ff-quizzes.netlify.app/web/
5. Work through code examples inside lesson folders
6. Complete assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (port 3000)
- **Quiz App**: Run `npm run dev` inside quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` for respective API directories

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check whether code get style wahala
npm run build      # Make sure say build succeed
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check if code style get problem
node server.js     # Make sure server fit start without wahala
```

### General Testing Approach

- Dis na educational repository wey no get full automated tests
- Manual testing focus for:
  - Code examples wey run without errors
  - Links for documentation dey work correct
  - Project builds complete well
  - Examples follow best practices

### Pre-submission Checks

- Run `npm run lint` for directories with package.json
- Check markdown links whether dem valid
- Test code examples for browser or Node.js
- Make sure translations hold correct structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations wey projects provide
- Use meaningful variable and function names wey fit educational clarity
- Add comments wey go explain concepts for learners
- Format code with Prettier where e dey configured

### HTML/CSS

- Semantic HTML5 elements
- Responsive design principles
- Clear class naming conventions
- Comments wey explain CSS techniques for learners

### Python

- PEP 8 style guidelines
- Clear, educational code examples
- Use type hints if e help learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks get language specification
- Links to more resources
- Screenshots and images inside `images/` directories
- Alt text for images for accessibility

### File Organization

- Lessons dey number in order (1-getting-started-lessons, 2-js-basics, etc.)
- Each project get `solution/` and most times `start/` or `your-work/` directories
- Images dey inside lesson-specific `images/` folders
- Translations dey for `translations/{language-code}/` structure

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

The quiz-app dey configured for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Dey create dist/ folder
# Dey deploy wit GitHub Actions workflow wen you push to main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Make PDF from docs
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Install Docsify for everywhere
docsify serve                 # Run for localhost:3000
```

### Project-specific Builds

Each project directory fit get im own build process:
- Vue projects: `npm run build` dey create production bundles
- Static projects: No build step, just serve files directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey dey show area wey you change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo for terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` inside projects you change
   - Fix all linting errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e apply
   - Make sure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Check if images dem work

4. **Content Review**:
   - Proofread for spelling and grammar
   - Make sure code examples correct and dey educational
   - Confirm translations maintain original meaning

### Contribution Requirements

- Agree to Microsoft CLA (automatic check on first PR)
- Follow [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines
- Mention issue numbers for PR description if e dey

### Review Process

- PRs go reviewed by maintainers and community
- Educational clarity dey priority
- Code examples suppose follow current best practices
- Translations go reviewed for accuracy and cultural fit

## Translation System

### Automated Translation

- E dey use GitHub Actions with co-op-translator workflow
- E dey translate to 50+ languages automatically
- Source files dey main directories
- Translated files dey `translations/{language-code}/` directories

### Adding Manual Translation Improvements

1. Find file for `translations/{language-code}/`
2. Make improvements but keep original structure
3. Make sure code examples still dey work
4. Test any localized quiz content

### Translation Metadata

Translated files get metadata header:
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

**Quiz app no fit start**:
- Check Node.js version (v14+ recommended)
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check for port conflicts (default: Vite use port 5173)

**API server no go start**:
- Confirm Node.js version get minimum (node >=10)
- Check if port dey already busy
- Make sure all dependencies install with `npm install`

**Browser extension no dey load**:
- Confirm manifest.json well formatted
- Check browser console for errors
- Follow browser-specific extension installation instructions

**Python chat project get wahala**:
- Confirm OpenAI package install: `pip install openai`
- Confirm GITHUB_TOKEN environment variable set
- Check GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run from repository root directory
- Check if `docs/_sidebar.md` dey

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions for steady formatting
- Use browser DevTools for JavaScript debugging
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) mean full clones large
- Use shallow clone if you dey work on content only: `git clone --depth 1`
- Exclude translations from searches if you dey work on English content
- Build processes fit slow for first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys no suppose ever commit to repository
- Use `.env` files (dem already inside `.gitignore`)
- Document required environment variables for project READMEs

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens need minimal permissions needed

### GitHub Models Access

- Personal Access Tokens (PAT) dey required for GitHub Models
- Tokens suppose dey stored as environment variables
- No ever commit tokens or credentials

## Additional Notes

### Target Audience

- Absolute beginners to web development
- Students and self-learners
- Teachers wey dey use the curriculum for classrooms
- Content designed for accessibility and gradual skill building

### Educational Philosophy

- Project-based learning approach
- Frequent knowledge checks (quizzes)
- Hands-on coding exercises
- Real-world application examples
- Focus on fundamentals before frameworks

### Repository Maintenance

- Active community of learners and contributors
- Regular updates to dependencies and content
- Issues and discussions monitored by maintainers
- Translation updates automated via GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommended for learners
- Additional courses: Generative AI, Data Science, ML, IoT curricula available

### Working with Specific Projects

For detailed instructions on individual projects, check README files inside:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Although e no be normal monorepo, dis repository get many independent projects:
- Each lesson dey self-contained
- Projects no dey share dependencies
- Fit work on individual projects no wahala with others
- Clone whole repo to get full curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis dokument dem don use AI translation service wey dem call [Co-op Translator](https://github.com/Azure/co-op-translator) translate am. Even though we dey try make am correct, abeg sabi say automated translation fit get some mistake or small wahala. Di ogbonge dokument for dia original language na im be di correct one. If na serious matter, e better make person wey sabi human translation do am. We no go follow any misunderstanding or wrong meaning wey fit show from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->