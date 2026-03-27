# AGENTS.md

## Project Overview

Dis na educational curriculum repository wey dem use teach web development fundamentals to pipul wey never sabi before. Di curriculum na beta 12-week course wey Microsoft Cloud Advocates develop, e get 24 hands-on lessons wey dey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons wey dem organize inside project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes wey get 3 questions each (before and after lesson assessments)
- **Multi-language Support**: Automatic translations for 50+ languages using GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository get lesson-based structure
- Every lesson folder get README, code examples, and solutions
- Standalone projects dey for separate directories (quiz-app, different lesson projects)
- Translation system wey use GitHub Actions (co-op-translator)
- Documentation dey serve via Docsify and e dey available as PDF

## Setup Commands

Dis repository na mainly for educational content consumption. If you wan work with particular projects:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start de development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start di API server
npm run lint       # Run ESLint
npm run format     # Arrange wit Prettier
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
# Set GITHUB_TOKEN environment variable na im
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork di repository** go your GitHub account
2. **Clone your fork** for your local machine
3. **Create new branch** for the changes wey you wan do
4. Make changes to lesson content or code examples
5. Test any code changes inside the project directories wey concern am
6. Submit pull requests based on contribution guidelines

### For Learners

1. Fork or clone di repository
2. Go through lesson directories one by one
3. Read README files for each lesson
4. Do pre-lesson quizzes for https://ff-quizzes.netlify.app/web/
5. Work through code examples inside lesson folders
6. Complete assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (port 3000)
- **Quiz App**: Run `npm run dev` inside quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` inside the API directories wey concern am

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
node server.js     # Make sure server start without gbege
```

### General Testing Approach

- Na educational repository dis, e no get full automated tests
- Manual testing dey focus on:
  - Code examples dey run without error
  - Links for documentation dey work well
  - Projects dey build successful
  - Examples follow beta practices

### Pre-submission Checks

- Run `npm run lint` inside directories wey get package.json
- Make sure markdown links dey valid
- Test code examples for browser or Node.js
- Make sure translations keep proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations wey dey projects
- Use correct variable and function names so that e clear for education
- Add comments to explain concepts for learners
- Use Prettier for formatting where e configure

### HTML/CSS

- Use semantic HTML5 elements
- Responsive design principles
- Clear class naming conventions
- Comments to explain CSS techniques for learners

### Python

- Follow PEP 8 style guidelines
- Clear and educational code examples
- Use type hints when e go help learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks with language specification
- Links to extra resources
- Screenshots and images dey for `images/` directories
- Alt text for images for accessibility

### File Organization

- Lessons dey numbered in order (1-getting-started-lessons, 2-js-basics, etc.)
- Every project get `solution/` and sometimes `start/` or `your-work/` directories
- Images dey for lesson-specific `images/` folders
- Translations dey inside `translations/{language-code}/` folder structure

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Di quiz-app e configure for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Dey create dist/ folder
# Dey deploy with GitHub Actions workflow when you push to main
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
npm install -g docsify-cli    # Install Docsify everywhere for your system
docsify serve                 # Run am for localhost:3000
```

### Project-specific Builds

Every project directory fit get im own build process:
- Vue projects: run `npm run build` to create production bundles
- Static projects: no build step, just serve files directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey show the area wey you change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` in affected project directories
   - Fix all linting errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e dey needed
   - Make sure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Verify image references dey work

4. **Content Review**:
   - Check for spelling and grammar
   - Make sure code examples dey correct and educational
   - Verify translations dey keep original meaning

### Contribution Requirements

- Agree to Microsoft CLA (automatic check for first PR)
- Follow the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Check [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines
- Reference issue numbers inside PR description if e dey

### Review Process

- PRs go dey reviewed by maintainers and community
- Educational clarity na priority
- Code examples suppose follow current best practices
- Translations go dey reviewed for accuracy and cultural fit

## Translation System

### Automated Translation

- Use GitHub Actions with co-op-translator workflow
- Translates to 50+ languages automatically
- Source files dey main directories
- Translated files dey inside `translations/{language-code}/` folders

### Adding Manual Translation Improvements

1. Find file inside `translations/{language-code}/`
2. Make improvements but no disturb structure
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
- Check Node.js version (v14+ recommended)
- Delete `node_modules` and `package-lock.json`, run `npm install` again
- Check if port dey in use (Vite default dey port 5173)

**API server no fit start**:
- Make sure Node.js version pass minimum (node >=10)
- Check if port already dey used
- Make sure all dependencies install finish with `npm install`

**Browser extension no dey load**:
- Check manifest.json well make e correct
- Check browser console for errors
- Follow browser-specific extension installation instructions

**Python chat project wahala**:
- Make sure OpenAI package install: `pip install openai`
- Check say GITHUB_TOKEN environment variable dey set
- Check GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run am from repository root directory
- Check that `docs/_sidebar.md` dey there

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions for consistent formatting
- Use browser DevTools for debugging JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) mean full clones dey big
- Use shallow clone if na only content you dey work on: `git clone --depth 1`
- Exclude translations from searches when you dey do English content
- Build processes fit slow for first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys no suppose ever commit go repository
- Use `.env` files (dem dey already inside `.gitignore`)
- Document the environment variables wey project README dem require

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies up to date
- GitHub tokens suppose get only minimal needed permissions

### GitHub Models Access

- Personal Access Tokens (PAT) dey required for GitHub Models
- Tokens suppose store as environment variables
- No ever commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners to web development
- Students and self-learners
- Teachers wey dey use curriculum for classroom
- Content designed for accessibility and gradual skill building

### Educational Philosophy

- Project-based learning way
- Frequent knowledge checks (quizzes)
- Hands-on coding exercises
- Real-world application examples
- Focus on fundamentals before frameworks

### Repository Maintenance

- Active community of learners and contributors
- Regular updates to dependencies and content
- Issues and discussions dey monitored by maintainers
- Translation updates dey automated via GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) wey people recommend for learners
- Other courses: Generative AI, Data Science, ML, IoT curricula dey available

### Working with Specific Projects

For detailed instructions on individual projects, check README files inside:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Although dis no be traditional monorepo, dis repository get plenty independent projects:
- Every lesson dey self-contained
- Projects no dey share dependencies
- You fit work on projects separately without affecting others
- Clone full repo if you want the complete curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate by AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg sabi say automated translations fit get mistakes or wrong parts. Di original document wey dey im correct language na im be di real correct source. For important matter, make you use professional human translation. We no go take any blame if person no understand well or interpret am wrong because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->