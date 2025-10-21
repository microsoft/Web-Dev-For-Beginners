# Adopt an API

## Overview

APIs open up endless possibilities for creative web development! In this assignment, you'll choose an external API and build a browser extension that solves a real problem or provides valuable functionality to users.

## Instructions

### Step 1: Choose Your API
Select an API from this curated [list of free public APIs](https://github.com/public-apis/public-apis). Consider these categories:

**Popular options for beginners:**
- **Entertainment**: [Dog CEO API](https://dog.ceo/dog-api/) for random dog pictures
- **Weather**: [OpenWeatherMap](https://openweathermap.org/api) for current weather data
- **Quotes**: [Quotable API](https://quotable.io/) for inspirational quotes
- **News**: [NewsAPI](https://newsapi.org/) for current headlines
- **Fun Facts**: [Numbers API](http://numbersapi.com/) for interesting number facts

### Step 2: Plan Your Extension
Before coding, answer these planning questions:
- What problem does your extension solve?
- Who is your target user?
- What data will you store in local storage?
- How will you handle API failures or rate limits?

### Step 3: Build Your Extension
Your extension should include:

**Required Features:**
- Form inputs for any required API parameters
- API integration with proper error handling
- Local storage for user preferences or API keys
- Clean, responsive user interface
- Loading states and user feedback

**Code Requirements:**
- Use modern JavaScript (ES6+) features
- Implement async/await for API calls
- Include proper error handling with try/catch blocks
- Add meaningful comments explaining your code
- Follow consistent code formatting

### Step 4: Test and Polish
- Test your extension with various inputs
- Handle edge cases (no internet, invalid API responses)
- Ensure your extension works after browser restart
- Add user-friendly error messages

## Bonus Challenges

Take your extension to the next level:
- Add multiple API endpoints for richer functionality
- Implement data caching to reduce API calls
- Create keyboard shortcuts for common actions
- Add data export/import features
- Implement user customization options

## Submission Requirements

1. **Working browser extension** that successfully integrates with your chosen API
2. **README file** explaining:
   - Which API you chose and why
   - How to install and use your extension
   - Any API keys or setup required
   - Screenshots of your extension in action
3. **Clean, commented code** following modern JavaScript practices

## Rubric

| Criteria | Exemplary (90-100%) | Proficient (80-89%) | Developing (70-79%) | Beginning (60-69%) |
|----------|---------------------|---------------------|---------------------|--------------------|
| **API Integration** | Flawless API integration with comprehensive error handling and edge case management | Successful API integration with basic error handling | API works but has limited error handling | API integration has significant issues |
| **Code Quality** | Clean, well-commented modern JavaScript following best practices | Good code structure with adequate comments | Code works but needs better organization | Poor code quality with minimal comments |
| **User Experience** | Polished interface with excellent loading states and user feedback | Good interface with basic user feedback | Basic interface that functions adequately | Poor user experience with confusing interface |
| **Local Storage** | Sophisticated use of local storage with data validation and management | Proper implementation of local storage for key features | Basic local storage implementation | Minimal or incorrect use of local storage |
| **Documentation** | Comprehensive README with setup instructions and screenshots | Good documentation covering most requirements | Basic documentation missing some details | Poor or missing documentation |

## Getting Started Tips

1. **Start simple**: Choose an API that doesn't require complex authentication
2. **Read the docs**: Thoroughly understand your chosen API's endpoints and responses
3. **Plan your UI**: Sketch your extension's interface before coding
4. **Test frequently**: Build incrementally and test each feature as you add it
5. **Handle errors**: Always assume API calls might fail and plan accordingly

## Resources

- [Browser Extension Documentation](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API Guide](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Local Storage Tutorial](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON Parsing and Handling](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Have fun building something useful and creative! 🚀