<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:11:50+00:00",
  "source_file": "AGENTS.md",
  "language_code": "en"
}
-->
# AGENTS.md

## Project Overview

This repository provides an educational curriculum designed to teach web development fundamentals to beginners. It is a comprehensive 12-week course created by Microsoft Cloud Advocates, featuring 24 hands-on lessons that cover JavaScript, CSS, and HTML.

### Key Components

- **Educational Content**: 24 structured lessons organized into project-based modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 quizzes with 3 questions each (pre- and post-lesson assessments)
- **Multi-language Support**: Automated translations for over 50 languages via GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI projects)

### Architecture

- Repository structured around lessons
- Each lesson folder includes a README, code examples, and solutions
- Standalone projects in separate directories (quiz-app, various lesson projects)
- Translation system powered by GitHub Actions (co-op-translator)
- Documentation served via Docsify and available as PDF

## Setup Commands

This repository is primarily intended for educational content consumption. For working with specific projects:

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
4. Modify lesson content or code examples
5. Test any code changes in relevant project directories
6. Submit pull requests following contribution guidelines

### For Learners

1. Fork or clone the repository
2. Navigate through lesson directories sequentially
3. Read the README files for each lesson
4. Complete pre-lesson quizzes at https://ff-quizzes.netlify.app/web/
5. Work through code examples in lesson folders
6. Complete assignments and challenges
7. Take post-lesson quizzes

### Live Development

- **Documentation**: Run `docsify serve` in the root directory (port 3000)
- **Quiz App**: Run `npm run dev` in the quiz-app directory
- **Projects**: Use the VS Code Live Server extension for HTML projects
- **API Projects**: Run `npm start` in the respective API directories

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
  - Ensuring code examples run without errors
  - Verifying links in documentation work correctly
  - Confirming project builds complete successfully
  - Checking that examples follow best practices

### Pre-submission Checks

- Run `npm run lint` in directories with package.json
- Verify markdown links are valid
- Test code examples in a browser or Node.js
- Ensure translations maintain proper structure

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax
- Follow standard ESLint configurations provided in projects
- Use meaningful variable and function names for educational clarity
- Add comments explaining concepts for learners
- Format using Prettier where configured

### HTML/CSS

- Use semantic HTML5 elements
- Apply responsive design principles
- Follow clear class naming conventions
- Include comments explaining CSS techniques for learners

### Python

- Adhere to PEP 8 style guidelines
- Provide clear, educational code examples
- Use type hints where helpful for learning

### Markdown Documentation

- Maintain a clear heading hierarchy
- Include code blocks with language specification
- Provide links to additional resources
- Store screenshots and images in `images/` directories
- Add alt text for images to ensure accessibility

### File Organization

- Lessons are numbered sequentially (1-getting-started-lessons, 2-js-basics, etc.)
- Each project includes `solution/` and often `start/` or `your-work/` directories
- Images are stored in lesson-specific `images/` folders
- Translations are organized in `translations/{language-code}/` directories

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

The quiz-app is configured for deployment on Azure Static Web Apps:

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
- Reference issue numbers in PR descriptions if applicable

### Review Process

- PRs are reviewed by maintainers and the community
- Educational clarity is prioritized
- Code examples should follow current best practices
- Translations are reviewed for accuracy and cultural appropriateness

## Translation System

### Automated Translation

- Powered by GitHub Actions with the co-op-translator workflow
- Automatically translates to over 50 languages
- Source files are located in main directories
- Translated files are stored in `translations/{language-code}/` directories

### Adding Manual Translation Improvements

1. Locate the file in `translations/{language-code}/`
2. Make improvements while preserving the structure
3. Ensure code examples remain functional
4. Test any localized quiz content

### Translation Metadata

Translated files include a metadata header:
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
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check for port conflicts (default: Vite uses port 5173)

**API server won't start**:
- Verify Node.js version meets the minimum requirement (node >=10)
- Check if the port is already in use
- Ensure all dependencies are installed with `npm install`

**Browser extension won't load**:
- Verify that manifest.json is properly formatted
- Check the browser console for errors
- Follow browser-specific extension installation instructions

**Python chat project issues**:
- Ensure the OpenAI package is installed: `pip install openai`
- Verify the GITHUB_TOKEN environment variable is set
- Check GitHub Models access permissions

**Docsify not serving docs**:
- Install docsify-cli globally: `npm install -g docsify-cli`
- Run from the repository root directory
- Check that `docs/_sidebar.md` exists

### Development Environment Tips

- Use VS Code with the Live Server extension for HTML projects
- Install ESLint and Prettier extensions for consistent formatting
- Use browser DevTools for debugging JavaScript
- For Vue projects, install the Vue DevTools browser extension

### Performance Considerations

- The large number of translated files (50+ languages) makes full clones sizable
- Use shallow clone if only working on content: `git clone --depth 1`
- Exclude translations from searches when working on English content
- Build processes may be slow on the first run (npm install, Vite build)

## Security Considerations

### Environment Variables

- API keys should never be committed to the repository
- Use `.env` files (already included in `.gitignore`)
- Document required environment variables in project READMEs

### Python Projects

- Use virtual environments: `python -m venv venv`
- Keep dependencies updated
- GitHub tokens should have minimal required permissions

### GitHub Models Access

- Personal Access Tokens (PAT) are required for GitHub Models
- Tokens should be stored as environment variables
- Never commit tokens or credentials

## Additional Notes

### Target Audience

- Complete beginners in web development
- Students and self-learners
- Teachers using the curriculum in classrooms
- Content is designed for accessibility and gradual skill-building

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
- Clone the entire repository for the full curriculum experience

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.