# AGENTS.md

## Project Overview

This is an educational curriculum repository for teaching web development fundamentals to beginners. The curriculum is a comprehensive 12-week course developed by Microsoft Cloud Advocates, featuring 24 hands-on lessons covering JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons organized into project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes with 3 questions each (pre/post-lesson assessments)
- **Multi-language Support**: Automated translations for 50+ languages via GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Educational repository with lesson-based structure
- Each lesson folder contains README, code examples, and solutions
- Standalone projects in separate directories (quiz-app, various lesson projects)
- Translation system using GitHub Actions (co-op-translator)
- Documentation served via Docsify and available as PDF

## Setup Commands

This repository is primarily for educational content consumption. For working with specific projects:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
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
# Open index.html in browser or use Live Server
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

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally
3. **Create a new branch** for your changes
4. Make changes to lesson content or code examples
5. Test any code changes in relevant project directories
6. Submit pull requests following contribution guidelines

### For Learners

1. Fork or clone the repository
2. Navigate to lesson directories sequentially
3. Read README files for each lesson
4. Complete pre-lesson quizzes at https://ff-quizzes.netlify.app/web/
5. Work through code examples in lesson folders
6. Complete assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` in root (port 3000)
- **Quiz App**: Run `npm run dev` in quiz-app directory
- **Projects**: Use VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` in respective API directories

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### General Testing Approach

- This is an educational repository without comprehensive automated tests
- Manual testing focuses on:
  - Code examples run without errors
  - Links in documentation work correctly
  - Project builds complete successfully
  - Examples follow best practices

### Pre-submission Checks

- Run `npm run lint` in directories with package.json
- Verify markdown links are valid
- Test code examples in browser or Node.js
- Check that translations maintain proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations provided in projects
- Use meaningful variable and function names for educational clarity
- Add comments explaining concepts for learners
- Format using Prettier where configured

### HTML/CSS

- Semantic HTML5 elements
- Responsive design principles
- Clear class naming conventions
- Comments explaining CSS techniques for learners

### Python

- PEP 8 style guidelines
- Clear, educational code examples
- Type hints where helpful for learning

### Markdown Documentation

- Clear heading hierarchy
- Code blocks with language specification
- Links to additional resources
- Screenshots and images in `images/` directories
- Alt text for images for accessibility

### File Organization

- Lessons numbered sequentially (1-getting-started-lessons, 2-js-basics, etc.)
- Each project has `solution/` and often `start/` or `your-work/` directories
- Images stored in lesson-specific `images/` folders
- Translations in `translations/{language-code}/` structure

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

The quiz-app is configured for Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Project-specific Builds

Each project directory may have its own build process:
- Vue projects: `npm run build` creates production bundles
- Static projects: No build step, serve files directly

## Pull Request Guidelines

### Title Format

Use clear, descriptive titles indicating the area of change:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Before submitting a PR:

1. **Code Quality**:
   - Run `npm run lint` in affected project directories
   - Fix all linting errors and warnings

2. **Build Verification**:
   - Run `npm run build` if applicable
   - Ensure no build errors

3. **Link Validation**:
   - Test all markdown links
   - Verify image references work

4. **Content Review**:
   - Proofread for spelling and grammar
   - Ensure code examples are correct and educational
   - Verify translations maintain original meaning

### Contribution Requirements

- Agree to Microsoft CLA (automated check on first PR)
- Follow the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
- Reference issue numbers in PR description if applicable

### Review Process

- PRs reviewed by maintainers and community
- Educational clarity is prioritized
- Code examples should follow current best practices
- Translations reviewed for accuracy and cultural appropriateness

## Translation System

### Automated Translation

- Uses GitHub Actions with co-op-translator workflow
- Translates to 50+ languages automatically
- Source files in main directories
- Translated files in `translations/{language-code}/` directories

### Adding Manual Translation Improvements

1. Locate file in `translations/{language-code}/`
2. Make improvements while preserving structure
3. Ensure code examples remain functional
4. Test any localized quiz content

### Translation Metadata

Translated files include metadata header:
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

**Quiz app fails to start**:
- Check Node.js version (v14+ recommended)
- Delete `node_modules` and `package-lock.json`, run `npm install` again
- Check for port conflicts (default: Vite uses port 5173)

**API server won't start**:
- Verify Node.js version meets minimum (node >=10)
- Check if port is already in use
- Ensure all dependencies installed with `npm install`

**Browser extension won't load**:
- Verify manifest.json is properly formatted
- Check browser console for errors
- Follow browser-specific extension installation instructions

**Python chat project issues**:
- Ensure OpenAI package installed: `pip install openai`
- Verify GITHUB_TOKEN environment variable is set
- Check GitHub Models access permissions

**Docsify not serving docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run from repository root directory
- Check that `docs/_sidebar.md` exists

### Development Environment Tips

- Use VS Code with Live Server extension for HTML projects
- Install ESLint and Prettier extensions for consistent formatting
- Use browser DevTools for debugging JavaScript
- For Vue projects, install Vue DevTools browser extension

### Performance Considerations

- Large number of translated files (50+ languages) means full clones are large
- Use shallow clone if only working on content: `git clone --depth 1`
- Exclude translations from searches when working on English content
- Build processes may be slow on first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys should never be committed to repository
- Use `.env` files (already in `.gitignore`)
- Document required environment variables in project READMEs

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens should have minimal required permissions

### GitHub Models Access

- Personal Access Tokens (PAT) required for GitHub Models
- Tokens should be stored as environment variables
- Never commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners to web development
- Students and self-learners
- Teachers using the curriculum in classrooms
- Content is designed for accessibility and gradual skill building

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

For detailed instructions on individual projects, refer to the README files in:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

While not a traditional monorepo, this repository contains multiple independent projects:
- Each lesson is self-contained
- Projects don't share dependencies
- Work on individual projects without affecting others
- Clone entire repo for the full curriculum experience
