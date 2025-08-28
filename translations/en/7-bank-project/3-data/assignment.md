<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-28T11:15:56+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "en"
}
-->
# Refactor and comment your code

## Instructions

As your codebase grows, it's essential to refactor your code regularly to ensure it remains readable and maintainable over time. Add comments and refactor your `app.js` to enhance the quality of the code:

- Extract constants, such as the server API base URL.
- Consolidate similar code: for instance, you can create a `sendRequest()` function to centralize the code used in both `createAccount()` and `getAccount()`.
- Reorganize the code to improve readability, and include comments.

## Rubric

| Criteria | Outstanding                                                                                                                                                   | Satisfactory                                                                                     | Needs Improvement                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Code is well-commented, organized into clear sections, and easy to follow. Constants are extracted, and a consolidated `sendRequest()` function has been created. | Code is clean but could benefit from additional comments, constant extraction, or consolidation. | Code is disorganized, lacks comments, constants are not extracted, and code is not consolidated. |

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.