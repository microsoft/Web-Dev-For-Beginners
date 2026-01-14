<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2026-01-08T17:09:20+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "pcm"
}
-->
# Improve the Routing

## Instructions

Now wey you don build a basic routing system, na time to make am beta wit professional features wey go improve user experience and give better developer tools. Real-world applications need more than just template switching – dem need dynamic page titles, lifecycle hooks, and extensible architectures.

For this assignment, you go extend your routing implementation wit two important features wey common for production web applications. These improvements go make your banking app dey feel more polished and give foundation for future functionality.

The routes declaration get only the template ID wey you go use currently. But when you dey display new page, sometimes you go need more small. Make we improve our routing implementation wit two additional features:

### Feature 1: Dynamic Page Titles
**Objective:** Give titles to each template and update the window title wit this new title when the template change.

**Why this matters:**
- **Improves** user experience by showing descriptive browser tab titles
- **Enhances** accessibility for screen readers and assistive technologies  
- **Provides** better bookmarking and browser history context
- **Follows** professional web development best practices

**Implementation approach:**
- **Extend** the routes object to include title information for each route
- **Modify** the `updateRoute()` function to update `document.title` dynamically
- **Test** say titles dey change correct when you dey navigate between screens

### Feature 2: Route Lifecycle Hooks  
**Objective:** Add option to run some code after the template don change. We want make e print `'Dashboard is shown'` for developer console anytime the dashboard page show.

**Why this matters:**
- **Enables** custom logic execution when specific routes load
- **Provides** hooks for analytics, logging, or initialization code
- **Creates** foundation for more complex route behaviors
- **Demonstrates** the observer pattern for web development

**Implementation approach:**
- **Add** optional callback function property to route configurations
- **Execute** the callback function (if e dey present) after template rendering don finish
- **Ensure** the feature dey work for any route wey get defined callback
- **Test** say the console message dey appear when you dey visit the dashboard

## Rubric

| Criteria | Exemplary                                                                                                                          | Adequate                                                                                                                                                                                  | Needs Improvement                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | The two features don implement and dey work. Title and code addition sef dey work for new route wey dem add inside `routes` declaration. | The two features dey work, but the behavior hardcoded and e no dey configurable via the `routes` declaration. Adding third route wit title and code addition no dey work or e dey work partly. | One of the features dey miss or e no dey work properly. |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis dokument don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even tho we try make am correct, abeg sabi say automated translation fit get mistake or no too clear. The original dokument wey dey inside im own language na di correct source. For important information, e better make person wey sabi translate am well do am. We no go responsible for any wrong understanding or wahala wey fit happen because of this translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->