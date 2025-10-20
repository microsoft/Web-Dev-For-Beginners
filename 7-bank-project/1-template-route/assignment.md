# Improve the Routing

## Instructions

Now that you've built a basic routing system, it's time to enhance it with professional features that improve user experience and provide better developer tools. Real-world applications need more than just template switching \u2013 they require dynamic page titles, lifecycle hooks, and extensible architectures.

In this assignment, you'll extend your routing implementation with two essential features that are commonly found in production web applications. These enhancements will make your banking app feel more polished and provide a foundation for future functionality.

The routes declaration contains currently only the template ID to use. But when displaying a new page, a bit more is needed sometimes. Let's improve our routing implementation with two additional features:

### Feature 1: Dynamic Page Titles
**Objective:** Give titles to each template and update the window title with this new title when the template changes.

**Why this matters:**
- **Improves** user experience by showing descriptive browser tab titles
- **Enhances** accessibility for screen readers and assistive technologies  
- **Provides** better bookmarking and browser history context
- **Follows** professional web development best practices

**Implementation approach:**
- **Extend** the routes object to include title information for each route
- **Modify** the `updateRoute()` function to update `document.title` dynamically
- **Test** that titles change correctly when navigating between screens

### Feature 2: Route Lifecycle Hooks  
**Objective:** Add an option to run some code after the template changes. We want to print `'Dashboard is shown'` in the developer console every time the dashboard page is displayed.

**Why this matters:**
- **Enables** custom logic execution when specific routes load
- **Provides** hooks for analytics, logging, or initialization code
- **Creates** a foundation for more complex route behaviors
- **Demonstrates** the observer pattern in web development

**Implementation approach:**
- **Add** an optional callback function property to route configurations
- **Execute** the callback function (if present) after template rendering completes
- **Ensure** the feature works for any route with a defined callback
- **Test** that the console message appears when visiting the dashboard

## Rubric

| Criteria | Exemplary                                                                                                                          | Adequate                                                                                                                                                                                  | Needs Improvement                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | The two features are implemented and working. Title and code addition also work for a new route added in the `routes` declaration. | The two features work, but the behavior is hardcoded and not configurable via the `routes` declaration. Adding a third route with title and code addition does not work or works partially. | One of the features is missing or not working properly. |