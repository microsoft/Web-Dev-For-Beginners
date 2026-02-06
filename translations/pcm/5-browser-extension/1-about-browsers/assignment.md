# Assignment: Restyle Your Browser Extension

## Overview

Now wey you don build di HTML structure for your carbon footprint browser extension, na time to make am fine to look and easy to use. Beta design dey improve user experience and e go make your extension dey more professional and interesting.

Your extension get basic CSS styling, but dis assignment go challenge you to create your own visual style wey go show your personal taste plus make sure e still easy to use.

## Instructions

### Part 1: Analyze the Current Design

Before you start to change am, look di CSS structure wey dey already:

1. **Locate** di CSS files inside your extension project
2. **Review** di current styling way and color scheme
3. **Identify** places wey fit improve for layout, typography, and visual hierarchy
4. **Consider** how design dey support wetin user want (easy form fill and clear data show)

### Part 2: Design Your Custom Styling

Create one solid visual design wey go include:

**Color Scheme:**
- Choose main color pallet wey go show environmental themes
- Make sure di contrast reach well for accessibility (use tools like WebAIM's contrast checker)
- Think about how colors go look for different browser themes

**Typography:**
- Pick fonts wey easy to read wey go still fine for small extension size
- Set clear hierarchy with correct font sizes and weights
- Make sure text still dey clear for both light and dark browser themes

**Layout and Spacing:**
- Improve how form elements and data display arrange for better look
- Add correct padding and margins to make e easier to read
- Think about responsive design principles wey fit different screen sizes

### Part 3: Implement Your Design

Change di CSS files to put your design for ground:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Key areas to style:**
- **Form elements**: Input fields, labels, and submit button
- **Results display**: Data container, text styling, and loading states
- **Interactive elements**: Hover effects, button states, and transitions
- **Overall layout**: Container spacing, background colors, and visual hierarchy

### Part 4: Test and Refine

1. **Build** your extension with `npm run build`
2. **Load** di updated extension for your browser
3. **Test** all visual states (form entry, loading, results display, errors)
4. **Verify** accessibility using browser developer tools
5. **Refine** your styles based on how e really perform

## Creative Challenges

### Basic Level
- Change colors and fonts to create one solid theme
- Improve spacing and alignment for the whole interface
- Add soft hover effects to interactive parts

### Intermediate Level
- Design custom icons or graphics for your extension
- Make smooth transitions between different states
- Create a unique loading animation for API calls

### Advanced Level
- Design different themes (light/dark/high-contrast)
- Make responsive design wey fit different browser window sizes
- Add micro-interactions wey go improve user experience

## Submission Guidelines

Your finished assignment suppose include:

- **Modified CSS files** wey get your custom styling
- **Screenshots** wey show your extension for different states (form, loading, results)
- **Short description** (2-3 sentences) to explain your design choices and how dem make user experience better

## Assessment Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|----------------|----------------|
| **Visual Design** | Creative, cohesive design wey go enhance usability and show strong design principles | Good design choices with consistent styling and clear visual hierarchy | Basic design improvements but get some consistency wahala | Small styling changes or inconsistent design |
| **Functionality** | All styles dey work perfectly for different states and browser environments | Styles work well but get small issues for edge cases | Most styles dey work but get some display wahala | Big styling problems wey dey affect usability |
| **Code Quality** | Clean, well-organized CSS with proper class names and efficient selectors | Good CSS structure with correct use of selectors and properties | Acceptable CSS but get some organization issues | Poor CSS structure or styling way too complex |
| **Accessibility** | Excellent color contrast, readable fonts, and consideration for users with disabilities | Good accessibility practices but get small areas wey fit improve | Basic accessibility consideration but get some problems | Limited care for accessibility needs |

## Tips for Success

> 💡 **Design Tip**: Start with small changes and build to bigger styling. Small improvements for typography and spacing fit get big impact for how people feel about am.

**Best practices to follow:**
- **Test** your extension for both light and dark browser themes
- **Use** relative units (em, rem) to make am scalable
- **Maintain** consistent spacing with CSS custom properties
- **Consider** how your design go look for users with different visual needs
- **Validate** your CSS to make sure e follow correct syntax

> ⚠️ **Common Mistake**: No sacrifice usability just to make am fine. Your extension suppose be both beautiful and functional.

**Remember to:**
- **Keep** important information easy to read
- **Make sure** buttons and interactive parts easy to click
- **Maintain** clear visual feedback when user dey do action
- **Test** your design with real data, no just placeholder text

Good luck for creating browser extension wey dey functional and fine to look!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis document don translate wit AI translation service wey dem dey call [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg make you sabi say automated translations fit get some mistakes or wrong tins. The original document wey dey the correct language na the correct source. If na important tin, better make person wey sabi translate am do am. We no go take any blame if person no understand well or if mistake happen because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->