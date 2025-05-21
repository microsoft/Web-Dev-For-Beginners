# Security Audit Report

## Introduction

This security audit was performed on the Web-Dev-For-Beginners repository, which contains various code examples and projects for learning web development. The repository includes JavaScript, HTML, and CSS code across multiple small projects including a quiz application, a browser extension, and a banking application API.

**Methodology**: The audit was conducted using static code analysis, dependency scanning, and manual review. Security best practices from OWASP, NIST, and Azure Well-Architected Framework were used as reference.

## Detailed Findings

### 1. Source-code Vulnerabilities

#### 1.1 CORS Misconfiguration

- **Description**: Overly permissive CORS configuration in the bank API project allowing any localhost or 127.x.x.x connection.
- **Severity**: Medium
- **File/Location**: `/7-bank-project/api/server.js` (line 30)
- **Code snippet**:
```javascript
app.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/}));
app.options('*', cors());
```
- **Recommendation**: Restrict CORS to specific origins needed for the application. For a learning environment, clearly document that this configuration is not suitable for production. See [OWASP CORS Guidelines](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html).

#### 1.2 Insecure Data Storage

- **Description**: Browser extension stores API keys in localStorage, which is not secure for sensitive information.
- **Severity**: Medium
- **File/Location**: `/5-browser-extension/solution/src/index.js` (lines 71-72)
- **Code snippet**:
```javascript
localStorage.setItem('apiKey', apiKey);
localStorage.setItem('region', region);
```
- **Recommendation**: For educational purposes, include a comment highlighting the security implications of storing sensitive data in localStorage. For production extensions, suggest using the Chrome extension secure storage API. Reference: [MDN Web Storage Security](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#security).

#### 1.3 Overly Permissive Host Permissions

- **Description**: Browser extension requests permissions to all URLs, which violates the principle of least privilege.
- **Severity**: High
- **File/Location**: `/5-browser-extension/solution/dist/manifest.json` (line 5)
- **Code snippet**:
```json
"host_permissions": ["<all_urls>"],
```
- **Recommendation**: Restrict permissions to only the API domain needed for functionality (e.g., "https://api.co2signal.com/*"). See [Google's extension permission best practices](https://developer.chrome.com/docs/extensions/mv3/security/).

#### 1.4 Lack of Input Validation

- **Description**: Insufficient input validation in the bank API project for user-provided data in transaction creation.
- **Severity**: Medium
- **File/Location**: `/7-bank-project/api/server.js` (lines 121-135)
- **Code snippet**:
```javascript
// Check mandatory requests parameters
if (!req.body.date || !req.body.object || !req.body.amount) {
  return res.status(400).json({ error: 'Missing parameters' });
}

// Convert amount to number if needed
let amount = req.body.amount;
if (amount && typeof amount !== 'number') {
  amount = parseFloat(amount);
}

// Check that amount is a valid number
if (amount && isNaN(amount)) {
  return res.status(400).json({ error: 'Amount must be a number' });
}
```
- **Recommendation**: Implement more robust input validation, including checking for proper date format, and sanitizing the object field to prevent XSS. See [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html).

### 2. Dependency Risks

#### 2.1 Outdated Dependencies

- **Description**: Several dependencies in the projects are outdated and may contain known vulnerabilities.
- **Severity**: Medium
- **File/Location**: Various package.json files
- **Recommendation**: Implement regular dependency updates using tools like npm audit. Implement a GitHub Action to automatically check for vulnerable dependencies using tools like Dependabot. See [GitHub Dependabot documentation](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates).

### 3. Configuration and Secrets Management

#### 3.1 Hardcoded API Tokens in GitHub Workflows

- **Description**: GitHub Actions workflow contains references to API tokens and uses them in an insecure manner.
- **Severity**: Medium
- **File/Location**: `/quiz-app/README.md` and `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`
- **Code snippet**:
```yaml
azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_ASHY_RIVER_0DEBB7803 }}
```
- **Recommendation**: Add documentation about proper secrets management in GitHub Actions, including avoiding printing secrets in logs and using secret masking. Reference: [GitHub Actions secrets documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

#### 3.2 Lack of Secure API Key Storage Guidelines

- **Description**: No clear guidance on securely handling API keys in the browser extension project.
- **Severity**: Low
- **File/Location**: `/5-browser-extension/1-about-browsers/README.md`
- **Recommendation**: Add security best practices section in the README.md file explaining secure ways to store API keys in browser extensions. Reference: [Chrome extension secure storage](https://developer.chrome.com/docs/extensions/reference/storage/).

### 4. Identity & Access Control

#### 4.1 No Authentication in Banking API

- **Description**: The banking API has no authentication mechanism, allowing anyone to access or modify account data.
- **Severity**: High
- **File/Location**: `/7-bank-project/api/server.js`
- **Recommendation**: For an educational application, add comments explaining the security implications and how authentication should be implemented in a real-world scenario. Reference: [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).

### 5. Cloud Posture

#### 5.1 No HTTPS Enforcement

- **Description**: The banking API has no HTTPS enforcement, allowing unencrypted communication.
- **Severity**: Medium
- **File/Location**: `/7-bank-project/api/server.js`
- **Recommendation**: Add comments about the importance of HTTPS in production and provide a code example showing how to enforce HTTPS in Express. Reference: [OWASP Transport Layer Protection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html).

## Key Findings Table

| Severity | Issue | File/Location | Recommendation |
|----------|-------|--------------|----------------|
| High | Overly Permissive Host Permissions | /5-browser-extension/solution/dist/manifest.json | Restrict permissions to only necessary APIs |
| High | No Authentication in Banking API | /7-bank-project/api/server.js | Add educational comments about proper auth implementation |
| Medium | CORS Misconfiguration | /7-bank-project/api/server.js | Restrict CORS to specific origins |
| Medium | Insecure Data Storage | /5-browser-extension/solution/src/index.js | Use secure storage APIs and add educational notes |
| Medium | Lack of Input Validation | /7-bank-project/api/server.js | Implement robust input validation |
| Medium | Outdated Dependencies | Various package.json files | Implement dependency scanning |
| Medium | Hardcoded API Tokens | GitHub workflows and READMEs | Add secure secrets management guidance |
| Medium | No HTTPS Enforcement | /7-bank-project/api/server.js | Add educational comments about HTTPS importance |
| Low | Lack of API Key Storage Guidelines | /5-browser-extension documentation | Add security best practices section |

## Conclusion & Prioritized Action List

This security audit has identified several security issues across the Web-Dev-For-Beginners repository. While most issues are understandable in an educational context, adding proper documentation about security best practices would significantly enhance the learning experience and prepare students for secure coding in production environments.

### Prioritized Action List:

1. Restrict overly permissive host permissions in browser extension
2. Add educational comments about authentication in the banking API
3. Fix CORS configuration in banking API
4. Implement more robust input validation in banking API
5. Add secure storage examples for browser extension
6. Add security best practices documentation for API key management
7. Add educational comments about HTTPS importance
8. Implement dependency scanning
9. Add secure secrets management guidance for GitHub Actions