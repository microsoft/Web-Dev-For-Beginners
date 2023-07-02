# Work a bit more with the DOM

## Instructions

Research the DOM a little more by 'adopting' a DOM element. Visit the MDN's [list of DOM interfaces](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) and pick one. Find it being used on a web site in the web, and write an explanation of how it is used.

## Assignment
The Document.querySelector() method returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

It's a very common method used in many websites to manipulate the DOM.

Example Usage

Consider the following code snippet from a hypothetical website:

```
let myButton = document.querySelector('#myButton');

myButton.addEventListener('click', function() {
  console.log('Button was clicked!');
});
```


In this example, document.querySelector('#myButton') is used to select the first HTML element in the document with an ID of myButton. This might be a button like <button id="myButton">Click me</button>.

After the button is selected and stored in the myButton variable, an event listener is added to it. This listener waits for a click event and, when one occurs, it logs a message to the console.

This kind of code is very common in websites where interactivity is required. The querySelector() method provides an easy way to select elements based on their CSS selectors and perform actions on them.


## Rubric

| Criteria | Exemplary                                     | Adequate                                         | Needs Improvement       |
| -------- | --------------------------------------------- | ------------------------------------------------ | ----------------------- |
|          | Paragraph write-up is presented, with example | Paragraph write-up is presented, without example | No writeup is presented |
