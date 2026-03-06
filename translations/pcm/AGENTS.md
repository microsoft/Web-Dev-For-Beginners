# AGENTS.md

## Project Overview

Dis na educational curriculum repository wey dey teach web development basics to beginners. Di curriculum na comprehensive 12-week course wey Microsoft Cloud Advocates develop, e get 24 hand-on lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons wey dem arrange inside project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes wit 3 questions each (before and after lesson assessments)
- **Multi-language Support**: Automated translations for 50+ languages through GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository wit lesson-based structure
- Every lesson folder get README, code examples, and solutions
- Standalone projects dey separate directories (quiz-app, various lesson projects)
- Translation system dey use GitHub Actions (co-op-translator)
- Documentation dey served via Docsify and e available as PDF

## Setup Commands

Dis repository na mainly for educational content use. For work wit specific projects:

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
npm start          # Start di API server
npm run lint       # Run ESLint
npm run format     # Format wit Prettier
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
# Open index.html for browser or use Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork di repository** go your GitHub account
2. **Clone your fork** for your local machine
3. **Create new branch** for your changes
4. Make changes for lesson content or code examples
5. Test any code changes for relevant project directories
6. Submit pull requests follow contribution guidelines

### For Learners

1. Fork or clone di repository
2. Go lesson directories one by one
3. Read README files for every lesson
4. Complete pre-lesson quizzes for https://ff-quizzes.netlify.app/web/
5. Work through code examples for lesson folders
6. Complete assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (port 3000)
- **Quiz App**: Run `npm run dev` for quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` for respective API directories

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check for code style wahala
npm run build      # Make sure say build go succeed
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check for code style mata
node server.js     # Make sure say server start without wahala
```

### General Testing Approach

- Dis na educational repository wey no get full automated tests
- Manual testing focus on:
  - Code examples run without errors
  - Links for documentation dey work correct
  - Project builds finish well
  - Examples follow best practices

### Pre-submission Checks

- Run `npm run lint` for directories wey get package.json
- Make sure markdown links valid
- Test code examples for browser or Node.js
- Check sey translations keep the proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configs wey dey projects
- Use meaningful variable and function names for educational clarity
- Add comments wey explain concepts for learners
- Format using Prettier if e dey configured

### HTML/CSS

- Semantic HTML5 elements
- Responsive design principles
- Clear class naming conventions
- Comments wey explain CSS techniques for learners

### Python

- PEP 8 style guidelines
- Clear, educational code examples
- Type hints where e fit help learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks wey get language specification
- Links to extra resources
- Screenshots and images inside `images/` folders
- Alt text for images for accessibility

### File Organization

- Lessons number one by one (1-getting-started-lessons, 2-js-basics, and so on)
- Every project get `solution/` and most times `start/` or `your-work/` folders
- Images dey inside lesson-specific `images/` folders
- Translations dey `translations/{language-code}/` folder arrangement

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Di quiz-app configured for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Dey create dist/ folder
# Dey deploy wit GitHub Actions workflow wen dem push for main
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
npm install -g docsify-cli    # Install Docsify for everywhere for di system
docsify serve                 # Run am for localhost:3000
```

### Project-specific Builds

Every project directory fit get im own build process:
- Vue projects: `npm run build` dey create production bundles
- Static projects: No build step, dem just serve files directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey show the change area:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo for terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` for projects wey di change affect
   - Fix all lint errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e dey necessary
   - Make sure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Confirm image references dey work

4. **Content Review**:
   - Proofread grammar and spelling
   - Make sure code examples correct and educational
   - Confirm translations keep original meaning

### Contribution Requirements

- Agree to Microsoft CLA (di check na automatic for first PR)
- Follow [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines
- Mention issue numbers for PR description if e apply

### Review Process

- PR dem dey reviewed by maintainers and community
- Educational clarity na top priority
- Code examples suppose follow correct best practices
- Translations dey reviewed for accuracy and cultural fit

## Translation System

### Automated Translation

- Uses GitHub Actions wit co-op-translator workflow
- Translates automatically to 50+ languages
- Source files dey main directories
- Translated files dey `translations/{language-code}/` directories

### Adding Manual Translation Improvements

1. Find di file for `translations/{language-code}/`
2. Make improvements but keep structure
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

**Quiz app no dey start**:
- Check Node.js version (v14+ na recommended)
- Delete `node_modules` and `package-lock.json`, run `npm install` again
- Check for port conflicts (default: Vite dey use port 5173)

**API server no go start**:
- Confirm Node.js version dey okay (node >=10)
- Check if port don already dey used
- Make sure all dependencies install with `npm install`

**Browser extension no go load**:
- Make sure manifest.json get correct format
- Check browser console for errors
- Follow browser-specific extension installation instructions

**Python chat project wahala**:
- Make sure OpenAI package install: `pip install openai`
- Confirm sey GITHUB_TOKEN environment variable dey set
- Check GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run from repository root directory
- Check sey `docs/_sidebar.md` dey

### Development Environment Tips

- Use VS Code wit Live Server extension for HTML projects
- Install ESLint and Prettier extensions for consistent formatting
- Use browser DevTools for debugging JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) go make full clones big
- Use shallow clone if you dey only work on content: `git clone --depth 1`
- Exclude translations from searches when you dey work on English content
- Build processes fit be slow for first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys no suppose ever commit to repository
- Use `.env` files (dem don already put am for `.gitignore`)
- Document the required environment variables in project READMEs

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens suppose get only minimum permissions

### GitHub Models Access

- Personal Access Tokens (PAT) na requirement for GitHub Models
- Store tokens as environment variables
- Never commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners to web development
- Students and self-learners
- Teachers wey dey use di curriculum for classrooms
- Content dey designed for accessibility and gradual skill building

### Educational Philosophy

- Project-based learning approach
- Frequent knowledge checks (quizzes)
- Hands-on coding exercises
- Real-world example applications
- Focus on fundamentals before frameworks

### Repository Maintenance

- Active community of learners and contributors
- Regular updates to dependencies and content
- Issues and discussions dey monitored by maintainers
- Translation updates automated with GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommended for learners
- Additional courses: Generative AI, Data Science, ML, IoT curricula dey available

### Working with Specific Projects

For detailed instructions on individual projects, check README files for:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application wit authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Even though no be traditional monorepo, dis repository get many independent projects:
- Every lesson na self-contained
- Projects no dey share dependencies
- You fit work on individual projects without affecting others
- Clone di whole repo if you want full curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg sabi say automated translations fit get mistakes or no be 100% accurate. Di original document wey e be for im own language na di correct one. For important info, e better make human professional translate am. We no go take any blame if person no understand well or if dem misunderstand tins wey come from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->