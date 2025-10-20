# Code Refactoring and Documentation Assignment

## Learning Objectives

By completing this assignment, you will practice essential software development skills that professional developers use daily. You'll learn to organize code for maintainability, reduce duplication through abstraction, and document your work for future developers (including yourself!).

Clean, well-documented code is crucial for real-world web development projects where multiple developers collaborate and codebases evolve over time.

## Assignment Overview

Your banking app's `app.js` file has grown significantly with login, registration, and dashboard functionality. It's time to refactor this code using professional development practices to improve readability, maintainability, and reduce duplication.

## Instructions

Transform your current `app.js` code by implementing these three core refactoring techniques:

### 1. Extract Configuration Constants

**Task**: Create a configuration section at the top of your file with reusable constants.

**Implementation guidance:**
- Extract the server API base URL (currently hardcoded in multiple places)
- Create constants for error messages that appear in multiple functions
- Consider extracting route paths and element IDs that are used repeatedly

**Example structure:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Create a Unified Request Function

**Task**: Build a reusable `sendRequest()` function that eliminates duplicate code between `createAccount()` and `getAccount()`.

**Requirements:**
- Handle both GET and POST requests
- Include proper error handling
- Support different URL endpoints
- Accept optional request body data

**Function signature guidance:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Add Professional Code Documentation

**Task**: Document your code with clear, helpful comments that explain the "why" behind your logic.

**Documentation standards:**
- Add function documentation explaining purpose, parameters, and return values
- Include inline comments for complex logic or business rules
- Group related functions together with section headers
- Explain any non-obvious code patterns or browser-specific workarounds

**Example documentation style:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Success Criteria

Your refactored code should demonstrate these professional development practices:

### Exemplary Implementation
- ✅ **Constants**: All magic strings and URLs are extracted into clearly named constants
- ✅ **DRY Principle**: Common request logic is consolidated into a reusable `sendRequest()` function
- ✅ **Documentation**: Functions have clear JSDoc comments explaining purpose and parameters
- ✅ **Organization**: Code is logically grouped with section headers and consistent formatting
- ✅ **Error Handling**: Improved error handling using the new request function

### Adequate Implementation
- ✅ **Constants**: Most repeated values are extracted, with minor hardcoded values remaining
- ✅ **Factorization**: Basic `sendRequest()` function created but may not handle all edge cases
- ✅ **Comments**: Key functions are documented, though some explanations could be more complete
- ✅ **Readability**: Code is generally well-organized with some areas for improvement

### Needs Improvement
- ❌ **Constants**: Many magic strings and URLs remain hardcoded throughout the file
- ❌ **Duplication**: Significant code duplication remains between similar functions
- ❌ **Documentation**: Missing or inadequate comments that don't explain the code's purpose
- ❌ **Organization**: Code lacks clear structure and logical grouping

## Testing Your Refactored Code

After refactoring, ensure your banking app still functions correctly:

1. **Test all user flows**: Registration, login, dashboard display, and error handling
2. **Verify API calls**: Confirm that your `sendRequest()` function works for both account creation and retrieval
3. **Check error scenarios**: Test with invalid credentials and network errors
4. **Review console output**: Ensure no new errors were introduced during refactoring

## Submission Guidelines

Submit your refactored `app.js` file with:
- Clear section headers organizing different functionality
- Consistent code formatting and indentation
- Complete JSDoc documentation for all functions
- A brief comment at the top explaining your refactoring approach

**Bonus Challenge**: Create a simple code documentation file (`CODE_STRUCTURE.md`) that explains your app's architecture and how the different functions work together.

## Real-World Connection

This assignment mirrors the type of code maintenance that professional developers perform regularly. In industry settings:
- **Code reviews** evaluate readability and maintainability like this assignment
- **Technical debt** accumulates when code isn't regularly refactored and documented
- **Team collaboration** depends on clear, well-documented code that new team members can understand
- **Bug fixes** are much easier in well-organized codebases with proper abstractions

The skills you're practicing here - extracting constants, eliminating duplication, and writing clear documentation - are fundamental to professional software development.
