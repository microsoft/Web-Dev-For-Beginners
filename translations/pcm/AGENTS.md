# AGENTS.md

## Project Overview

Dis na one educational curriculum repository wey dem use teach beginners how dem go sabi web development fundamentals well-well. Di curriculum na correct 12-week course wey Microsoft Cloud Advocates develop, e get 24 hands-on lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons wey dem organize inside project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes wey each get 3 questions (dem fit use am before and after lesson)
- **Multi-language Support**: Automatic translations for more than 50 languages through GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository wey get lesson-based structure
- Every lesson folder get README, code examples, and solutions
- Standalone projects dey for separate directories (quiz-app, different lesson projects)
- Translation system wey use GitHub Actions (co-op-translator)
- Documentation dey serve through Docsify and dem fit download am as PDF

## Setup Commands

Dis repository na primarily for educational content use. If you wan work with specific projects:

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
# Follow di browser-specific way wey you suppose take load extension dem
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
# Set GITHUB_TOKEN environment variable na so
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork di repository** go your own GitHub account
2. **Clone your fork** for your local machine
3. **Create one new branch** for di changes wey you wan do
4. Make changes for lesson content or code examples
5. Test any code changes for di correct project directories
6. Submit pull requests according to how contribution suppose be

### For Learners

1. Fork or clone di repository
2. Enter lesson directories in order without skipping
3. Read README files for every lesson
4. Do pre-lesson quizzes inside https://ff-quizzes.netlify.app/web/
5. Work through di code examples for lesson folders
6. Finish assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (e dey use port 3000)
- **Quiz App**: Run `npm run dev` for quiz-app directory
- **Projects**: Use VS Code Live Server extension to serve HTML projects
- **API Projects**: Run `npm start` inside correct API directories

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check for code style wahala
npm run build      # Make sure say build dey successful
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check for code style wahala
node server.js     # Make sure say server dey start without gbege
```

### General Testing Approach

- Dis one na educational repository wey no get full automatic tests
- Manual testing dey focus on:
  - Code examples dey run without wahala
  - Links for documentation dey work well
  - Project builds dey finish properly
  - Examples dey follow correct way wey suppose be

### Pre-submission Checks

- Run `npm run lint` for directories wey get package.json
- Make sure markdown links dey valid
- Test code examples for browser or Node.js
- Check say translations keep di correct structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations wey projects get
- Use meaningful variable and function names for easy understanding
- Add comments wey explain concepts give learners
- Format code with Prettier if e dey configured

### HTML/CSS

- Use correct HTML5 semantic elements
- Follow responsive design principles
- Clear class naming wey dey easy understand
- Comments wey explain CSS methods for learners

### Python

- Follow PEP 8 style guidelines
- Clear, educational code examples
- Use type hints where e go help learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks with language tag
- Links to more resources
- Screenshots and images inside `images/` folders
- Alt text dey for images to help accessibility

### File Organization

- Lessons numbered one-one (1-getting-started-lessons, 2-js-basics, etc.)
- Every project get `solution/` and sometimes `start/` or `your-work/` folders
- Images dey inside lesson-specific `images/` folders
- Translations dey inside `translations/{language-code}/` folder structure

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Di quiz-app configure for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # De create dist/ folder
# De deploy wit GitHub Actions workflow wen you push to main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Mek PDF from docs
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Make you install Docsify for everywhere
docsify serve                 # Serve for localhost:3000
```

### Project-specific Builds

Every project directory fit get im own build process:
- Vue projects: `npm run build` dey create production bundles
- Static projects: No build step, files just dey serve directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey show which part you change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo for terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` for affected project folders
   - Fix all linting errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e necessary
   - Make sure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Verify say image references dey work

4. **Content Review**:
   - Check for spelling and grammar
   - Make sure code examples dey correct and educational
   - Verify translations keep original meaning

### Contribution Requirements

- Agree with Microsoft CLA (automatic check for the first PR)
- Follow [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Read [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions
- Reference issue numbers inside PR description if e dey

### Review Process

- PRs dey reviewed by maintainers and community
- Educational clarity dey very important
- Code examples must follow current best practices
- Translations dey reviewed for accuracy and cultural fit

## Translation System

### Automated Translation

- Dem dey use GitHub Actions with co-op-translator workflow
- Dem dey translate to more than 50 languages automatically
- Source files dey main directories
- Translated files dey inside `translations/{language-code}/` directories

### Adding Manual Translation Improvements

1. Find file for `translations/{language-code}/`
2. Improve am but keep di structure
3. Make sure code examples still dey work well
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
- Check Node.js version (v14+ na di recommendation)
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check for port conflicts (default: Vite dey use port 5173)

**API server no dey start**:
- Confirm Node.js version don reach minimum (node >=10)
- Check if port don already dey use
- Make sure all dependencies don install with `npm install`

**Browser extension no dey load**:
- Check manifest.json make e dey correct format
- Look browser console for errors
- Follow browser specific instruction to install extension

**Python chat project wahala**:
- Confirm say OpenAI package don install: `pip install openai`
- Check GITHUB_TOKEN environment variable dey set
- Verify GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run inside repository root directory
- Check say `docs/_sidebar.md` dey

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions to maintain formatting style
- Use browser DevTools to debug JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) mean big clones
- Use shallow clone if na only content you dey work on: `git clone --depth 1`
- Exclude translations from search when you dey work on English content
- Build processes fit slow for first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys no suppose ever enter repository
- Use `.env` files (dem already dey `.gitignore`)
- Document which environment variables needed for projects READMEs

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens must get minimal permissions

### GitHub Models Access

- Personal Access Tokens (PAT) na im you go use for GitHub Models
- Keep tokens as environment variables
- Never commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners for web development
- Students and people wey dey learn by themselves
- Teachers wey dey use curriculum for classrooms
- Content design dey accessible and skills dey build gradually

### Educational Philosophy

- Project-based learning method
- Frequent quizzes for check knowledge
- Hands-on coding exercises
- Real-world application examples
- Focus on fundamentals before dem start framework

### Repository Maintenance

- Active community of learners and contributors
- Regular updates to dependencies and content
- Maintainers dey monitor issues and discussions
- Translation updates dey automatic with GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) wey dey recommended for learners
- Other courses: Generative AI, Data Science, ML, IoT curricula dey available

### Working with Specific Projects

For detailed instructions about individual projects, check README files for:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking app with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Even though e no be traditional monorepo, dis repository get plenty independent projects:
- Every lesson self-contained
- Projects no dey share dependencies
- You fit work on single projects without affect others
- Clone whole repo if you want full curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document dem translate am wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). We dey try make am correct, but abeg make you sabi say automated translation fit get some errors or mistakes. Di original document wey e dey for im own language na di correct source. For important info, make person wey sabi do professional human translation handle am. We no go responsible for any misunderstanding or wrong interpretation wey fit happen because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->