# AGENTS.md

## Project Overview

Dis na one educational curriculum repository wey dey teach web development basics to beginners dem. Di curriculum na full 12-week course wey Microsoft Cloud Advocates develop, get 24 practical lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 organized lessons put inside project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes get 3 questions each (before and after lesson assessments)
- **Multi-language Support**: Automatic translations for more than 50 languages with GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository wey get lesson-based structure
- Each lesson folder get README, code examples, and solutions
- Standalone projects dey different directories (quiz-app, different lesson projects)
- Translation system dey use GitHub Actions (co-op-translator)
- Documentation dey serve with Docsify and e dey available as PDF

## Setup Commands

Dis repository na mostly for educational content use. If you wan work with specific projects:

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
npm run format     # Make e fine wit Prettier
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# Follow di browser-specific extension loading instructions
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
3. **Create new branch** for your changes dem
4. Change lesson content or code examples
5. Test any code changes for project directories wey concern am
6. Submit pull requests based on how to contribute guideline dem

### For Learners

1. Fork or clone di repository
2. Enter lesson directories one by one
3. Read README files wey dey each lesson
4. Finish pre-lesson quizzes for https://ff-quizzes.netlify.app/web/
5. Work through code examples wey dey lesson folders
6. Finish assignments and challenges dem
7. Do post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (port 3000)
- **Quiz App**: Run `npm run dev` inside quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` inside correct API directories

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check for code style wahala
npm run build      # Make sure say build work fine
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check for code style wahala
node server.js     # Make sure server start no get error
```

### General Testing Approach

- Dis na educational repository wey no get full automated tests
- Manual testing focus on:
  - Code examples dey run without wahala
  - Links inside documentation dey work well
  - Project get successful builds
  - Examples dey follow correct way dem

### Pre-submission Checks

- Run `npm run lint` inside directories wey get package.json
- Check say markdown links valid
- Test code examples for browser or Node.js
- Check say translations still keep proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configs wey projects give
- Use meaningful variable and function names so e go dey clear for learners
- Add comments to explain concepts for learners
- Format with Prettier if e dey set

### HTML/CSS

- Use semantic HTML5 elements
- Responsive design principles
- Clear class naming style
- Comments to explain CSS techniques for learners

### Python

- PEP 8 style
- Clear, educational code examples
- Type hints where e fit help learners

### Markdown Documentation

- Clear heading order
- Code blocks with language specification
- Links to more resources
- Screenshots and images dey `images/` directories
- Alt text for images for accessibility

### File Organization

- Lessons get number sequence (1-getting-started-lessons, 2-js-basics, etc.)
- Each project get `solution/` and sometimes `start/` or `your-work/` directories
- Images dey inside lesson-specific `images/` folders
- Translations dey `translations/{language-code}/` folders

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Quiz-app don set up for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Dey create dist/ folder
# Dey deploy through GitHub Actions workflow wen e push go main
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
npm install -g docsify-cli    # Install Docsify everywhere for system
docsify serve                 # Run am for localhost:3000
```

### Project-specific Builds

Every project directory fit get their own build process:
- Vue projects: `npm run build` go create production bundles
- Static projects: No build step, serve files direct

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey talk which area you change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo for terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` for project directories wey you change
   - Fix all lint errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e concern you
   - Confirm say no build error

3. **Link Validation**:
   - Test all markdown links
   - Confirm image references dey work

4. **Content Review**:
   - Proofread spelling and grammar
   - Confirm code examples correct and educational
   - Confirm translations keep original meaning

### Contribution Requirements

- You must agree to Microsoft CLA (automatic check on your first PR)
- Follow the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines
- Put issue numbers for PR description if e concern am

### Review Process

- Maintainers and community go review PRs
- Educational clarity na priority
- Code examples must follow correct best practices
- Translations go get accuracy and cultural check

## Translation System

### Automated Translation

- Uses GitHub Actions with co-op-translator workflow
- Translate to over 50 languages automatically
- Source files dey main directories
- Translated files dey `translations/{language-code}/` folders

### Adding Manual Translation Improvements

1. Find file for `translations/{language-code}/`
2. Make improvements but keep structure proper
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
- Check Node.js version (v14+ na better)
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check if port dey busy (Vite dey use port 5173 by default)

**API server no start**:
- Check Node.js version >=10
- Make sure port no busy
- Ensure all dependencies dey install with `npm install`

**Browser extension no load**:
- Confirm manifest.json correct format
- Check browser console for errors
- Follow browser-specific extension install instruction

**Python chat project wahala**:
- Make sure OpenAI package install: `pip install openai`
- Confirm GITHUB_TOKEN environment variable set
- Check GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run from root directory of repo
- Confirm `docs/_sidebar.md` dey

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions for consistent format
- Use browser DevTools for debug JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) mean big full clones
- Use shallow clone if you dey work only on content: `git clone --depth 1`
- Exclude translations from searches if you dey work on English content
- Build fit slow first time (npm install, Vite build)

## Security Considerations

### Environment Variables

- No put API keys for repository commit
- Use `.env` files (dem dey already `.gitignore`)
- Document needed environment variables for project READMEs

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens get to get minimal permissions

### GitHub Models Access

- Personal Access Tokens (PAT) needed for GitHub Models
- Store tokens as environment variables
- Never commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners for web development
- Students and self-learners
- Teachers use this curriculum for classroom
- Content designed for accessibility and gradual skill build up

### Educational Philosophy

- Project-based learning way
- Frequent knowledge checks (quizzes)
- Hands-on coding exercises
- Real-world application examples
- Focus on fundamentals before frameworks

### Repository Maintenance

- Active community of learners and contributors
- Regular updates to dependencies and content
- Maintainers dey monitor issues and discussions
- Translation updates automatic with GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommended for learners
- Additional courses: Generative AI, Data Science, ML, IoT curricula available

### Working with Specific Projects

For detailed instructions for each project, check README files inside:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking app with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Though e no be traditional monorepo, dis repository get many independent projects:
- Each lesson dey self-contained
- Projects no dey share dependencies
- You fit work for one project without disturb others
- Clone whole repo if you want full curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**: Dis document na translation we dem use AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) do am. Even though we dey try make am correct, abeg sabi say machine translation fit get some errors or mistakes. The original document wey dey im own language na di correct one to trust. If na important info, make you use professional human translation. We no go responsible for any wahala or misunderstanding wey fit happen because you use dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->