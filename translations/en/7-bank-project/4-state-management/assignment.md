<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-28T11:20:45+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "en"
}
-->
# Implement "Add transaction" dialog

## Instructions

Our banking app is still missing a key feature: the ability to add new transactions.  
Using everything you've learned in the previous four lessons, implement an "Add transaction" dialog:

- Add an "Add transaction" button to the dashboard page.
- Either create a new page with an HTML template or use JavaScript to show/hide the dialog HTML without leaving the dashboard page (you can use the [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) attribute for this, or CSS classes).
- Ensure you address [keyboard and screen reader accessibility](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) for the dialog.
- Implement an HTML form to collect input data.
- Convert the form data into JSON and send it to the API.
- Update the dashboard page with the new data.

Refer to the [server API specifications](../api/README.md) to identify the API you need to call and the expected JSON format.

Here's an example of the result after completing the task:

![Screenshot showing an example "Add transaction" dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.en.png)

## Rubric

| Criteria | Outstanding                                                                                     | Satisfactory                                                                                                           | Needs Improvement                           |
| -------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Adding a transaction is fully implemented, adhering to all best practices covered in the lessons. | Adding a transaction is implemented but does not fully follow the best practices covered in the lessons or works only partially. | Adding a transaction does not work at all. |

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we strive for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.