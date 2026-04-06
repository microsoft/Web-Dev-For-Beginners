# AGENTS.md

## Project Overview

Dis na educational curriculum repository wey teach web development fundamentals to beginners. Di curriculum na full 12-week course wey Microsoft Cloud Advocates develop, get 24 hands-on lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 arranged lessons wey follow project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes wey get 3 questions each (pre/post-lesson assessments)
- **Multi-language Support**: Automated translations for 50+ languages through GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository with lesson-based structure
- Each lesson folder get README, code examples, and solutions
- Standalone projects for different directories (quiz-app, various lesson projects)
- Translation system dey use GitHub Actions (co-op-translator)
- Documentation dey serve via Docsify and e dey available as PDF

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
npm start          # Start di API server
npm run lint       # Run ESLint
npm run format     # Format wit Prettier
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
3. **Create new branch** for your changes
4. Make changes to lesson content or code examples
5. Test any code changes for correct project directories
6. Submit pull requests wey follow contribution guidelines

### For Learners

1. Fork or clone di repository
2. Go lesson directories one by one
3. Read README files for each lesson
4. Do pre-lesson quizzes for https://ff-quizzes.netlify.app/web/
5. Work through code examples inside lesson folders
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
npm run build      # Make sure say build dey succeed
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check if code style get wahala
node server.js     # Make sure server start without yawa
```

### General Testing Approach

- Dis na educational repository wey no get full automated tests
- Manual testing focus on:
  - Code examples dey run without error
  - Links for documentation dey work well
  - Project builds dey complete successful
  - Examples dey follow best practices

### Pre-submission Checks

- Run `npm run lint` for directories wey get package.json
- Check say markdown links valid
- Test code examples for browser or Node.js
- Confirm translations get proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations from projects
- Use meaningful variable and function names to help learners understand
- Add comments to explain concepts for learners
- Format using Prettier where e dey configured

### HTML/CSS

- Use semantic HTML5 elements
- Responsive design principles
- Clear class naming conventions
- Comments to explain CSS techniques well for learners

### Python

- Follow PEP 8 style guidelines
- Clear, educational code examples
- Put type hints where e dey useful for learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks wey specify language
- Links to more resources
- Screenshots and images for `images/` directories
- Alt text for images to support accessibility

### File Organization

- Lessons dey number sequentially (1-getting-started-lessons, 2-js-basics, etc.)
- Every project get `solution/` and normally `start/` or `your-work/` directories
- Images dey inside lesson-specific `images/` folders
- Translations dey in `translations/{language-code}/` folders

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Quiz-app dey ready for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Dey create dist/ folder
# Dey deploy through GitHub Actions workflow when you push for main branch
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
docsify serve                 # Make e dey run for localhost:3000
```

### Project-specific Builds

Each project fit get him own build process:
- Vue projects: Run `npm run build` to create production bundles
- Static projects: No build step, serve files directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey show wetin you change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo for terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before you submit PR:

1. **Code Quality**:
   - Run `npm run lint` for each project directory wey changes affect
   - Fix all lint errors and warnings

2. **Build Verification**:
   - Run `npm run build` if e dey necessary
   - Make sure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Confirm image references dey work

4. **Content Review**:
   - Check for spelling and grammar mistakes
   - Confirm code examples dey correct and educational
   - Make sure translations maintain correct meaning

### Contribution Requirements

- You must agree to Microsoft CLA (automatic check for first PR)
- Follow the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed rules
- Reference issue numbers for PR description if e relate

### Review Process

- Maintainers and community go review PRs
- Educational clarity dey priority
- Code examples suppose follow current best practice
- Translations go review for accuracy and cultural fit

## Translation System

### Automated Translation

- Dey use GitHub Actions with co-op-translator workflow
- Translates automatically to 50+ languages
- Source files dey main directories
- Translated files dey `translations/{language-code}/` folders

### Adding Manual Translation Improvements

1. Find the file for `translations/{language-code}/`
2. Make improvements without changing structure
3. Check say code examples still dey work
4. Test localized quiz content

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
- Check Node.js version (v14+ na better)
- Delete `node_modules` and `package-lock.json`, run `npm install` again
- Check for port wahala (Vite by default dey use port 5173)

**API server no dey start**:
- Make sure Node.js version dey ok (node >=10)
- Check if port dey busy
- Confirm say all dependencies install with `npm install`

**Browser extension no dey load**:
- Check manifest.json format correct
- Check browser console for errors
- Follow browser-specific extension installation guide

**Python chat project problems**:
- Make sure OpenAI package install: `pip install openai`
- Confirm GITHUB_TOKEN environment variable dey set
- Check GitHub Models access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run am from repository root folder
- Check that `docs/_sidebar.md` dey

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions for uniform formatting
- Use browser DevTools for debugging JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) mean clone go big
- Use shallow clone if you just want content: `git clone --depth 1`
- When you dey work on English content, exclude translations from search
- Build fit take time first time (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys no suppose enter repository commit
- Use `.env` files (dem already inside `.gitignore`)
- Document environment variables wey project need for README

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies up to date
- GitHub tokens get to get smallest necessary permissions

### GitHub Models Access

- Personal Access Tokens (PAT) dey needed for GitHub Models
- Keep tokens as environment variables
- No ever commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners wey dey learn web development
- Students and people wey dey learn by themselves
- Teachers wey dey use curriculum for classroom
- Content designed for accessibility and gradual skill building

### Educational Philosophy

- Project-based learning style
- Frequent knowledge checks (quizzes)
- Hands-on coding exercises
- Real-world application examples
- Focus on fundamentals before frameworks

### Repository Maintenance

- Active community of learners and contributors
- Regular update to dependencies and content
- Maintainers dey monitor issues and discussions
- Translation updates dey automatic with GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommended for learners
- Other courses: Generative AI, Data Science, ML, IoT curricula dey available

### Working with Specific Projects

For detailed instructions about individual projects, check the README files inside:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking app with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Even though dis no be traditional monorepo, dis repository get plenty independent projects:
- Every lesson dey self-contained
- Projects no dey share dependencies
- You fit work on each project separately without disturbing others
- Clone whole repo if you wan complete curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis document na wetin AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) translate. Even though we dey try make am correct, make you sabi say automated translations fit get some mistakes or no too correct. The original document wey e dey for inside im own language na him be the correct source. If na important info, make person wey sabi translate am for human hand do am. We no go carry any yawa wey fit happen because of how this translation take be.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->