# AGENTS.md

## Project Overview

Dis na educational curriculum repository wey dem take teach web development fundamentals to beginners. Di curriculum na comprehensive 12-week course wey Microsoft Cloud Advocates develop, wey get 24 hands-on lessons wey cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons wey dem organize into project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes wey get 3 questions each (pre/post-lesson assessments)
- **Multi-language Support**: Automated translations for 50+ languages via GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository wey get lesson-based structure
- Each lesson folder dey contain README, code examples, and solutions
- Standalone projects dey for separate directories (quiz-app, various lesson projects)
- Translation system wey dey use GitHub Actions (co-op-translator)
- Documentation na Docsify e serve and e dey available as PDF

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
# Follow di way wey each browser de load extensions
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

1. **Fork di repository** to your GitHub account
2. **Clone your fork** locally
3. **Create new branch** for your changes
4. Make changes to lesson content or code examples
5. Test any code changes inside relevant project directories
6. Submit pull requests according to contribution guidelines

### For Learners

1. Fork or clone di repository
2. Enter lesson directories one by one
3. Read README files for each lesson
4. Complete pre-lesson quizzes for https://ff-quizzes.netlify.app/web/
5. Work through code examples inside lesson folders
6. Finish assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` for root (port 3000)
- **Quiz App**: Run `npm run dev` for quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` for each API directories

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check for code style wahala
npm run build      # Make sure build teyari fine
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check for code style wahala
node server.js     # Make sure server start fine without gbege
```

### General Testing Approach

- Dis na educational repository wey no get comprehensive automated tests
- Manual testing dey focus on:
  - Code examples run without errors
  - Links wey dey documentation dey work well
  - Project builds complete successful
  - Examples dey follow best practices

### Pre-submission Checks

- Run `npm run lint` for directories wey get package.json
- Check sey markdown links valid
- Test code examples for browser or Node.js
- Confirm translations get proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations wey dey projects
- Use meaningful variable and function names for educational clarity
- Add comments wey explain concepts for learners
- Format use Prettier where e set

### HTML/CSS

- Semantic HTML5 elements
- Responsive design principles
- Clear class naming conventions
- Comments wey explain CSS techniques for learners

### Python

- PEP 8 style guidelines
- Clear, educational code examples
- Type hints where e dey helpful for learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks wey get language specification
- Links to extra resources
- Screenshots and images for `images/` directories
- Alt text for images for accessibility

### File Organization

- Lessons dem number one by one (1-getting-started-lessons, 2-js-basics, etc.)
- Each project get `solution/` and often `start/` or `your-work/` directories
- Images they keep for lesson-specific `images/` folders
- Translations dey `translations/{language-code}/` structure

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Di quiz-app configure for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Dey create dist/ folder
# E go deploy usin GitHub Actions workflow as you push for main branch
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

Each project directory fit get him own build process:
- Vue projects: `npm run build` dey create production bundles
- Static projects: No build step, dem dey serve files direct

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles wey talk the area wey you change:
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
   - Run `npm run build` if e dey apply
   - Make sure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Confirm make image references dey work

4. **Content Review**:
   - Proofread for spelling and grammar
   - Confirm code examples dey correct and educational
   - Verify translations keep original meaning

### Contribution Requirements

- Agree to Microsoft CLA (automation go check am for first PR)
- Follow the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
- Reference issue numbers inside PR description if e relate

### Review Process

- PRs go dey reviewed by maintainers and community
- Educational clarity na priority
- Code examples suppose follow current best practices
- Translations go dey checked for accuracy and cultural correctness

## Translation System

### Automated Translation

- E dey use GitHub Actions with co-op-translator workflow
- E translate to 50+ languages automatically
- Source files dey main directories
- Translated files dey inside `translations/{language-code}/` directories

### Adding Manual Translation Improvements

1. Locate file inside `translations/{language-code}/`
2. Make improvements but keep structure intact
3. Confirm code examples still dey work well
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
- Check Node.js version (v14+ na better)
- Delete `node_modules` and `package-lock.json`, run `npm install` again
- Check if port no dey busy (default: Vite dey use port 5173)

**API server no dey start**:
- Confirm Node.js version reach minimum (node >=10)
- Check if port don already dey use
- Confirm say all dependencies don install with `npm install`

**Browser extension no dey load**:
- Confirm manifest.json dey properly format
- Check browser console for errors
- Follow browser-specific extension installation instructions

**Python chat project wahala**:
- Confirm OpenAI package install: `pip install openai`
- Check GITHUB_TOKEN environment variable dey set
- Confirm GitHub Models get access permissions

**Docsify no dey serve docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run am from repository root directory
- Check say `docs/_sidebar.md` dey there

### Development Environment Tips

- Use VS Code plus Live Server extension for HTML projects
- Install ESLint and Prettier extensions to keep formatting consistent
- Use browser DevTools to debug JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Plenty translated files (50+ languages) mean full clones go big
- Use shallow clone if na only content you wan work on: `git clone --depth 1`
- Exclude translations from searches when you dey work on English content
- Build processes fit slow for first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys no suppose ever commit to repository
- Use `.env` files (dem already inside `.gitignore`)
- Document environment variables wey project README need

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens suppose get only minimal permissions

### GitHub Models Access

- Personal Access Tokens (PAT) necessary for GitHub Models
- Tokens suppose dey stored as environment variables
- Never commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners for web development
- Students and self-learners
- Teachers wey dey use curriculum for classrooms
- Content dey designed for accessibility and gradual skill building

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
- Translation updates dey automated via GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) wey dey recommended for learners
- Extra courses: Generative AI, Data Science, ML, IoT curricula dey available

### Working with Specific Projects

For detailed instructions on individual projects, check README files inside:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Although e no be traditional monorepo, dis repository get multiple independent projects:
- Each lesson na self-contained
- Projects no dey share dependencies
- You fit work on individual projects without disturbing others
- Clone whole repo for full curriculum experience

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis document dem don translate am wit AI translation service wey dem dey call [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg make you sabi say automated translations fit get errors or no correct well. The original document wey dey the main language na im you suppose consider as the correct authority. If na important information you dey look for, e better make professional human translation do am. We no go responsible for any misunderstanding or wrong sense wey fit come from using this translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->