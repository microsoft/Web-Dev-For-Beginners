# AGENTS.md

## Project Overview

Dis na educational curriculum repository wey dem use teach web development fundamentals to beginners. Di curriculum na one complete 12-week course wey Microsoft Cloud Advocates develop, wey get 24 hands-on lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons wey arrange inside project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes with 3 questions each (pre/post-lesson assessments)
- **Multi-language Support**: Automated translations for 50+ languages via GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository wey get lesson-based structure
- Each lesson folder get README, code examples, and solutions
- Standalone projects dey inside separate directories (quiz-app, various lesson projects)
- Translation system wey use GitHub Actions (co-op-translator)
- Documentation serve through Docsify and e de available as PDF

## Setup Commands

Dis repository na mainly for educational content consumption. To wok with specific projects:

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
# Follow di browser-specific instructions for loading extension
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
3. **Create new branch** for your changes
4. Change lesson content or code examples
5. Test any code changes for the correct project directories
6. Submit pull requests wey follow contribution guidelines

### For Learners

1. Fork or clone di repository
2. Go lesson directories one by one
3. Read README files for each lesson
4. Complete pre-lesson quizzes for https://ff-quizzes.netlify.app/web/
5. Work through code examples for lesson folders
6. Finish assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (port 3000)
- **Quiz App**: Run `npm run dev` inside quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` for correct API directories

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
npm run lint       # Check for code style wahala
node server.js     # Confirm say server dey start without gbege
```

### General Testing Approach

- Dis na educational repository without full automated tests
- Manual testing dey focus on:
  - Code examples run without error
  - Links for documentation dey work well
  - Project builds complete successfully
  - Examples dey follow best practices

### Pre-submission Checks

- Run `npm run lint` inside directories wey get package.json
- Confirm markdown links dey valid
- Test code examples for browser or Node.js
- Check say translations still get correct structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations wey projects provide
- Use meaningful variable and function names to help understanding
- Add comments wey explain concepts for learners
- Format with Prettier if e dey configured

### HTML/CSS

- Use semantic HTML5 elements
- Responsive design principles
- Clear class naming styles
- Comments wey explain CSS techniques for learners

### Python

- Follow PEP 8 style guidelines
- Use clear, educational code examples
- Add Type hints if e fit help learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks with language specified
- Links to extra resources
- Screenshots and images inside `images/` folders
- Alt text for images for accessibility

### File Organization

- Lessons numbered one-after-another (1-getting-started-lessons, 2-js-basics, etc.)
- Each project get `solution/` and normally `start/` or `your-work/` folders
- Images dey for lesson-specific `images/` folders
- Translations dey inside `translations/{language-code}/` folders

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Di quiz-app configure for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Dey make dist/ folder
# Dey deploy wit GitHub Actions workflow wen dem push for main branch
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
npm install -g docsify-cli    # Install Docsify for everywhere for your system
docsify serve                 # Run am for localhost:3000
```

### Project-specific Builds

Each project directory fit get im own build process:
- Vue projects: `npm run build` dey create production bundles
- Static projects: No build step, just serve files directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey show di area of change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo for terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` for affected project directories
   - Fix all linting errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e necessary
   - Make sure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Confirm image references work

4. **Content Review**:
   - Proofread for grammar and spelling
   - Ensure code examples correct and educational
   - Confirm translations maintain original meaning

### Contribution Requirements

- Agree to Microsoft CLA (e dey automatic on first PR)
- Follow [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Check [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
- Reference issue numbers inside PR description if necessary

### Review Process

- PRs go through review by maintainers and community
- Educational clarity dey priority
- Code examples suppose follow current best practices
- Translations go through review for correctness and cultural appropriateness

## Translation System

### Automated Translation

- E dey use GitHub Actions with co-op-translator workflow
- E dey translate to 50+ languages automatically
- Source files dey main directories
- Translated files dey inside `translations/{language-code}/` folders

### Adding Manual Translation Improvements

1. Find file inside `translations/{language-code}/`
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
- Delete `node_modules` and `package-lock.json`, run `npm install` again
- Check port conflicts (Vite normally use port 5173)

**API server no fit start**:
- Confirm Node.js version at least (node >=10)
- Check if port dey already in use
- Make sure all dependencies install with `npm install`

**Browser extension no dey load**:
- Confirm manifest.json proper format
- Check browser console for errors
- Follow browser-specific extension installation instructions

**Python chat project wahala**:
- Confirm OpenAI package install: `pip install openai`
- Confirm GITHUB_TOKEN environment variable set
- Check GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run am from repository root directory
- Confirm say `docs/_sidebar.md` dey

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions for consistent formatting
- Use browser DevTools to debug JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Big number of translated files (50+ languages) mean full clones big
- Use shallow clone if you dey work only on content: `git clone --depth 1`
- Exclude translations from searches if you dey work on English content
- Build processes fit slow for first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys no suppose commit inside repository
- Use `.env` files (dem already dey `.gitignore`)
- Document which environment variables project READMEs need

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens suppose get minimal permissions

### GitHub Models Access

- Personal Access Tokens (PAT) necessary for GitHub Models
- Tokens suppose dey stored as environment variables
- No ever commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners for web development
- Students and self-learners
- Teachers wey dey use curriculum for classrooms
- Content design for accessibility and gradual skill building

### Educational Philosophy

- Project-based learning approach
- Frequent knowledge checks (quizzes)
- Hands-on coding exercises
- Real-world application examples
- Focus on fundamentals before frameworks

### Repository Maintenance

- Active community of learners and contributors
- Regular updates to dependencies and content
- Issues and discussions dey monitored by maintainers
- Translation updates automatic with GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommended for learners
- Additional courses: Generative AI, Data Science, ML, IoT curricula dey available

### Working with Specific Projects

For detailed instructions about each project, check README files inside:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Even though e no traditional monorepo, dis repository get plenty independent projects:
- Each lesson self-contained
- Projects no dey share dependencies
- Work on individual projects without affecting others
- Clone whole repo to get full curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even tho we dey try make am correct, abeg sabi say automated translation fit get mistake or no too correct. Di original document wey pure for im own language na di main correct source. For important tin dem, e better make person wey sabi do professional translation make am. We no go follow any wahala or mistake Wey fit show because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->