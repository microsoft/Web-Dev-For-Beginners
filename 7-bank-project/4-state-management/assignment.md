# Implement "Add transaction" dialog

## Instructions

Our bank app is still missing one important feature: the possibility to enter new transactions.
Using everything that you've learnt in the four previous lessons, implement an "Add transaction" dialog:

- Add an "Add transaction" button in the dashboard page
- Either create a new page with an HTML template, or use JavaScript to show/hide the dialog HTML without leaving the dashboard page (you can use [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) property for that, or CSS classes)
- Implement an HTML form to receive input data
- Create JSON data from the form data and send it to the API
- Update the dashboard page with the new data

Look at the [server API specifications](../api/README.md) to see which API you need to call and what is the expected JSON format.

Here's an example result after completing the assignment:

![Screenshot showing an example "Add transation" dialog](./images/dialog.png)

## Rubric

| Criteria | Exemplary                                                                                        | Adequate                                                                                                                | Needs Improvement                           |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Adding a transaction is implemented completely following all best practices seen in the lessons. | Adding a transaction is implement, but not following the best practices seen in the lessons, or working only partially. | Adding a transaction is not working at all. |
