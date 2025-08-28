<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-28T11:22:44+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "en"
}
-->
# Improve the routing

## Instructions

The route declarations currently only specify the template ID to use. However, when displaying a new page, additional functionality is sometimes required. Let's enhance our routing implementation with two new features:

- Assign titles to each template and update the browser's window title with the new title whenever the template changes.
- Include an option to execute some code after the template changes. For example, we want to log `'Dashboard is shown'` in the developer console every time the dashboard page is displayed.

## Rubric

| Criteria | Outstanding                                                                                                                       | Satisfactory                                                                                                                                                                             | Needs Improvement                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Both features are implemented and functional. Titles and code execution also work for any new route added to the `routes` declaration. | Both features work, but the behavior is hardcoded and cannot be configured through the `routes` declaration. Adding a third route with title and code execution either doesn't work or works partially. | One of the features is missing or not functioning correctly. |

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the definitive source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.