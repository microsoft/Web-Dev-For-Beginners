# Improve the routing

## Instructions

The routes declaration contains currently only the template ID to use. But when displaying a new page, a bit more is needed sometimes. Let's improve our routing implementation with two additional features:

- Give titles to each template and update the window title with this new title when the template changes.
- Add an option to run some code after the template changes. We want to print `'Dashboard is shown'` in the developer console every time the dashboard page is displayed. 

## Rubric

| Criteria | Exemplary                                                                                                                          | Adequate                                                                                                                                                                                  | Needs Improvement                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | The two features are implemented and working. Title and code addition also work for a new route added in the `routes` declaration. | The two features work, but the behavior is hardcoded and not configurable via the `routes` declaration. Adding a third route with title and code addition does not work or works partially. | One of the features is missing or not working properly. |