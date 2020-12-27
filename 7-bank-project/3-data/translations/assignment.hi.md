# Refactor and comment your code

## Instructions

As your codebase grows, it's important to refactor your code frequently to keep it readable and maintainable over time. Add comments and refactor your `app.js` to improve the code quality:

- Extract constants, like the server API base URL
- Factorize similar code: for example you can create a `sendRequest()` function to regroup the code used in both `createAccount()` and `getAccount()`
- Reorganize the code to make it easier to read, and add comments

## Rubric

| Criteria | Exemplary                                                                                                                                                     | Adequate                                                                                          | Needs Improvement                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Code is commented, well-organized in different sections and easy to read. Constants are extracted and a factorized `sendRequest()` function has been created. | Code is clean but can still be improved with more comments, constant extraction or factorization. | Code is messy, not commented, constants are not extracted and code is not factorized. |
