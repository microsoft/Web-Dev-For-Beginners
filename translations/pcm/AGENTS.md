# AGENTS.md

## Project Overview

Dis na wan educational curriculum repository wey dem use teach web development fundamentals to beginners. Di curriculum na one complete 12-week course wey Microsoft Cloud Advocates develop, e get 24 hands-on lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons wey dem organize into project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes wey get 3 questions each (pre/post-lesson assessments)
- **Multi-language Support**: Automated translations for 50+ languages via GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository wey get lesson-based structure
- Each lesson folder get README, code examples, and solutions
- Standalone projects dey for separate directories (quiz-app, various lesson projects)
- Translation system dey use GitHub Actions (co-op-translator)
- Documentation dey serve through Docsify and e dey available as PDF

## Setup Commands

Dis repository mainly for educational content consumption. If you wan work with specific projects:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Begin development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start di API server
npm run lint       # Run ESLint
npm run format     # Format am wit Prettier
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# Follow how for put extension for browser wey you dey use
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

1. **Fork di repository** to your GitHub account
2. **Clone your fork** for your local machine
3. **Create wan new branch** for your changes
4. Change lesson content or code examples
5. Test any code changes inside the relevant project directories
6. Submit pull requests wey follow contribution guidelines

### For Learners

1. Fork or clone di repository
2. waka go lesson directories one by one
3. Read README files for each lesson
4. Complete pre-lesson quizzes at https://ff-quizzes.netlify.app/web/
5. Work through code examples inside lesson folders
6. Complete assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (port 3000)
- **Quiz App**: Run `npm run dev` inside quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` for the correct API folders

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check for code style wahala
npm run build      # Make sure build go succeed
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check for code style wahala
node server.js     # Make sure server start without any gbege
```

### General Testing Approach

- Dis na educational repository wey no get full automated tests
- Manual testing dey focus on:
  - Code examples wey run without wahala
  - Links for documentation dey work well
  - Project builds complete normally
  - Examples follow best practices

### Pre-submission Checks

- Run `npm run lint` for directories wey get package.json
- Check say markdown links dey valid
- Test code examples inside browser or Node.js
- Make sure translations keep proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint rules wey projects provide
- Use meaningful variable and function names for educational clarity
- Add comments wey explain concepts for learners
- Format with Prettier where e dey setup

### HTML/CSS

- Semantic HTML5 elements
- Responsive design principles
- Clear class naming conventions
- Comments wey dey explain CSS techniques for learners

### Python

- PEP 8 style guide
- Clear, educational code examples
- Type hints where e fit help learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks wey get language tag
- Links to extra resources
- Screenshots and images for `images/` folders
- Alt text for images so e go accessible

### File Organization

- Lessons dey number one by one (1-getting-started-lessons, 2-js-basics, etc.)
- Each project get `solution/` and often `start/` or `your-work/` directories
- Images dey store inside lesson-specific `images/` folders
- Translations for `translations/{language-code}/` folder structure

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

The quiz-app dey setup for Azure Static Web Apps deployment:

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
docsify serve                 # Make e dey serve for localhost:3000
```

### Project-specific Builds

Each project directory fit get im own build process:
- Vue projects: `npm run build` go create production bundles
- Static projects: No build step, serve files directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey show the area wey you change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo inside terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` for the project directories weh change dey
   - Fix every linting errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e dey apply
   - Make sure no build error dey

3. **Link Validation**:
   - Test every markdown links
   - Verify image references dey work

4. **Content Review**:
   - Proofread for spelling and grammar
   - Make sure code examples dey correct and educational
   - Verify say translations keep di original meaning

### Contribution Requirements

- Agree to Microsoft CLA (automatic check for first PR)
- Follow the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Check [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines
- Reference issue numbers for PR description if e apply

### Review Process

- PRs dey review by maintainers and community
- Educational clarity na priority
- Code examples suppose follow latest best practices
- Translations go check for accuracy and cultural fit

## Translation System

### Automated Translation

- Use GitHub Actions with co-op-translator workflow
- Translate go more than 50 languages automatically
- Source files dey main directories
- Translated files dey `translations/{language-code}/` directories

### Adding Manual Translation Improvements

1. Find file for `translations/{language-code}/`
2. Make improvements, keep structure safe
3. Make sure code examples still dey work well
4. Test any local quiz content

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
- Check if port dey busy (default: Vite dey use port 5173)

**API server no dey start**:
- Check Node.js version (node >=10)
- Check if port don already use
- Make sure all dependencies install with `npm install`

**Browser extension no dey load**:
- Check manifest.json make e correct
- Check browser console for errors
- Follow browser-specific extension install instructions

**Python chat project wahala**:
- Make sure OpenAI package install: `pip install openai`
- Confirm GITHUB_TOKEN environment variable dey set
- Check GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run from repository root
- Check say `docs/_sidebar.md` dey

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions for consistent style
- Use browser DevTools for debugging JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) mean full clones go big
- Use shallow clone if you only dey work on content: `git clone --depth 1`
- Exclude translations from search when working on English content
- Build processes fit slow for first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys make sure no dey commit to repository
- Use `.env` files (wey dey `.gitignore` already)
- Document required environment variables for project READMEs

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies up to date
- GitHub tokens suppose get minimal permissions only

### GitHub Models Access

- Personal Access Tokens (PAT) dey needed for GitHub Models
- Tokens suppose dey store as environment variables
- No commit tokens or credentials

## Additional Notes

### Target Audience

- Absolute beginners to web development
- Students and people wey dey learn by themselves
- Teachers wey dey use curriculum for classroom
- Content dey designed for accessibility and gradual skill building

### Educational Philosophy

- Project-based learning style
- Frequent knowledge checks (quizzes)
- Hands-on coding exercises
- Real-world application examples
- Focus on fundamentals before framework waka

### Repository Maintenance

- Active community of learners and contributors
- Regular updates to content and dependencies
- Issues and discussions dey managed by maintainers
- Translation updates automatic by GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) wey dey recommended for learners
- Extra courses: Generative AI, Data Science, ML, IoT curricula dey available

### Working with Specific Projects

For detailed instructions on each project, see README files for:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking app with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Even though e no be traditional monorepo, this repository get many independent projects:
- Each lesson na self-contained
- Projects no dey share dependencies
- You fit work on individual projects without wahala
- Clone entire repo for full curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even tho we dey try make am correct, abeg sabi say automated translation fit get mistake or no too correct. Di original document for im own language na di correct one to trust. For important tin dem, e better make professional human translation do am. We no responsible for any misunderstanding or wrong meaning wey fit come from using dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->