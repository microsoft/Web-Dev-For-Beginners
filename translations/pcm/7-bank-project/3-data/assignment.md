<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2026-01-08T17:28:04+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "pcm"
}
-->
# Code Refactoring and Documentation Assignment

## Learning Objectives

By completing dis assignment, you go practice important software development skills wey professional developers dey use every day. You go learn how to organize code make e dey easy to maintain, reduce repetition through abstraction, and write documentation for your work so future developers (including yourself!) fit understand.

Clean, well-documented code dey very important for real-world web development projects wey multiple developers dey collaborate and codebases dey change over time.

## Assignment Overview

Your banking app `app.js` file don grow well well with login, registration, and dashboard functionalities. Na time to refactor this code using professional development methods to improve how e dey read, maintain, and to reduce duplication.

## Instructions

Transform your current `app.js` code by implementing these three core refactoring techniques:

### 1. Extract Configuration Constants

**Task**: Create one configuration section for the top of your file with reusable constants.

**Implementation guidance:**
- Extract the server API base URL (wey you don hardcode for multiple places)
- Make constants for error messages wey dey appear for many functions
- Fit consider extracting route paths and element IDs wey you dey use too many times

**Example structure:**
```javascript
// Konfigureshon konstants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Create a Unified Request Function

**Task**: Build one reusable function wey be `sendRequest()` wey go kill duplicate code between `createAccount()` and `getAccount()`.

**Requirements:**
- Fit handle both GET and POST requests
- Get proper error handling
- Support different URL endpoints
- Accept optional request body data

**Function signature guidance:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation dey here
}
```

### 3. Add Professional Code Documentation

**Task**: Make documentation for your code with clear, helpful comments wey go explain the "why" behind your logic.

**Documentation standards:**
- Add function documentation wey explain purpose, parameters, and return values
- Put inline comments for complex logic or business rules
- Group related functions together with section headers
- Explain any code wey no obvious or browser-specific workarounds

**Example documentation style:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Make e no submit form automatically, make JavaScript handle am
  event.preventDefault();
  
  // How you go do am...
}
```

## Success Criteria

Your refactored code suppose show these professional development practices:

### Exemplary Implementation
- ✅ **Constants**: All magic strings and URLs don extract into clearly named constants
- ✅ **DRY Principle**: Common request logic don consolidate inside one reusable `sendRequest()` function
- ✅ **Documentation**: Functions get clear JSDoc comments wey explain purpose and parameters
- ✅ **Organization**: Code dey logically grouped with section headers and consistent formatting
- ✅ **Error Handling**: Improved error handling through the new request function

### Adequate Implementation
- ✅ **Constants**: Most repeated values don extract, but small hardcoded values still dey
- ✅ **Factorization**: Basic `sendRequest()` function don create but maybe e no cover all edge cases
- ✅ **Comments**: Key functions get documentation, but some explanations fit dey more detailed
- ✅ **Readability**: Code generally well-organized but some areas fit improve

### Needs Improvement
- ❌ **Constants**: Plenty magic strings and URLs still hardcode everywhere inside the file
- ❌ **Duplication**: Plenty code duplication still dey between similar functions
- ❌ **Documentation**: Comments dey missing or no clear to explain code purpose
- ❌ **Organization**: Code no get clear structure or logical grouping

## Testing Your Refactored Code

After you don refactor, make sure say your banking app still dey work well:

1. **Test all user flows**: Registration, login, dashboard display, and error handling
2. **Verify API calls**: Confirm say your `sendRequest()` function dey work for both account creation and retrieval
3. **Check error scenarios**: Test with invalid credentials and network errors
4. **Review console output**: Make sure no new errors don appear during refactoring

## Submission Guidelines

Submit your refactored `app.js` file with:
- Clear section headers wey organize different functionality
- Consistent code formatting and indentation
- Complete JSDoc documentation for all functions
- One short comment for the top wey explain your refactoring approach

**Bonus Challenge**: Create one simple code documentation file (`CODE_STRUCTURE.md`) wey go explain your app architecture and how different functions dey work together.

## Real-World Connection

This assignment na like the kind code maintenance wey professional developers dey do regularly. For industry:
- **Code reviews** dey check readability and maintainability like dis assignment
- **Technical debt** dey increase when code no dey refactor and document regularly
- **Team collaboration** depend on clear, well-documented code wey new team members fit understand
- **Bug fixes** easy well well for well-organized codebase wey get proper abstraction

The skills you dey practice here - extracting constants, killing duplication, and writing clear documentation - na the basic things for professional software development.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis document don translate wit AI translation service wey dem dey call [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg sabi say automated translation fit get mistake or no too correct. Di original document wey dey dia for e original language na di correct one. If na serious tin, e better make human professional translate am. We no go take blame if pesin no understand well or misinterpret tins from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->