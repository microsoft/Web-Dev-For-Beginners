<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2026-01-08T16:34:34+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "pcm"
}
-->
# Style Your Bank App wit Modern CSS

## Project Overview

Change your functional banking application to one wey fine to look, professional web app using modern CSS techniques. You go create one system wey go make design dey solid, improve user experience plus still keep accessibility and responsive design principles.

Dis assignment dey make you use contemporary web design style, do consistent visual identity, and create interface wey users go find attractive and easy to waka.

## Instructions

### Step 1: Setup Your Stylesheet

**Create your CSS foundation:**

1. **Create** one new file wey go be `styles.css` for your project root
2. **Link** the stylesheet inside your `index.html` file:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Start** with CSS reset and modern defaults:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Step 2: Design System Requirements

**Put these important design elements:**

#### Color Palette
- **Primary color**: Choose one professional color for buttons and highlights
- **Secondary color**: Complementary color for accents and secondary actions
- **Neutral colors**: Grays for text, borders, and backgrounds
- **Success/Error colors**: Green for success states, red for errors

#### Typography
- **Heading hierarchy**: Clear difference between H1, H2, and H3 elements
- **Body text**: Font size wey you fit read well (minimum 16px) and correct line height
- **Form labels**: Clear, accessible text styling

#### Layout and Spacing
- **Consistent spacing**: Use one spacing scale (8px, 16px, 24px, 32px)
- **Grid system**: Organized layout for forms and content sections
- **Responsive design**: Mobile-first approach with breakpoints

### Step 3: Component Styling

**Style these particular components:**

#### Forms
- **Input fields**: Professional borders, focus states, and validation styling
- **Buttons**: Hover effects, disabled states, and loading indicators
- **Labels**: Clear positioning and required field indicators
- **Error messages**: Visible error styling and helpful messaging

#### Navigation
- **Header**: Clean, branded navigation area
- **Links**: Clear hover states and active indicators
- **Logo/Title**: Distinctive branding element

#### Content Areas
- **Sections**: Clear visual separation between different areas
- **Cards**: If you dey use card-based layouts, include shadows and borders
- **Backgrounds**: Correct use of white space and subtle backgrounds

### Step 4: Enhanced Features (Optional)

**Think about adding these advanced features:**
- **Dark mode**: Toggle between light and dark themes
- **Animations**: Subtle transitions and micro-interactions
- **Loading states**: Visual feedback during form submissions
- **Responsive images**: Optimized images for different screen sizes

## Design Inspiration

**Modern banking app characteristics:**
- **Clean, minimal design** wit plenty white space
- **Professional color schemes** (blues, greens, or sophisticated neutrals)
- **Clear visual hierarchy** wit prominent call-to-action buttons
- **Accessible contrast ratios** wey meet WCAG guidelines
- **Mobile-responsive layouts** wey work well on all devices

## Technical Requirements

### CSS Organization
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Accessibility Requirements
- **Color contrast**: Make sure say e get at least 4.5:1 ratio for normal text
- **Focus indicators**: Visible focus states for keyboard navigation
- **Form labels**: Properly linked with inputs
- **Responsive design**: Fit work for screens from 320px to 1920px wide

## Evaluation Rubric

| Criteria | Exemplary (A) | Proficient (B) | Developing (C) | Needs Improvement (F) |
|----------|---------------|----------------|----------------|----------------------|
| **Design System** | Implements comprehensive design system with consistent colors, typography, and spacing throughout | Uses consistent styling with clear design patterns and good visual hierarchy | Basic styling applied with some consistency issues or missing design elements | Minimal styling with inconsistent or conflicting design choices |
| **User Experience** | Creates intuitive, professional interface with excellent usability and visual appeal | Provides good user experience with clear navigation and readable content | Basic usability with some UX improvements needed | Poor usability, difficult to navigate or read |
| **Technical Implementation** | Uses modern CSS techniques, organized code structure, and follows best practices | Implements CSS effectively with good organization and appropriate techniques | CSS works correctly but may lack organization or modern approaches | Poor CSS implementation with technical issues or browser compatibility problems |
| **Responsive Design** | Fully responsive design that works beautifully across all device sizes | Good responsive behavior with minor issues on some screen sizes | Basic responsive implementation with some layout issues | Not responsive or significant problems on mobile devices |
| **Accessibility** | Meets WCAG guidelines with excellent keyboard navigation and screen reader support | Good accessibility practices with proper contrast and focus indicators | Basic accessibility considerations with some missing elements | Poor accessibility, difficult for users with disabilities |

## Submission Guidelines

**Put inside your submission:**
- **styles.css**: Your complete stylesheet
- **Updated HTML**: Any HTML changes wey you do
- **Screenshots**: Images wey dey show your design for desktop and mobile
- **README**: Brief description of your design choices and color palette

**Bonus points for:**
- **CSS custom properties** for mother way you fit maintain theming
- **Advanced CSS features** like Grid, Flexbox, or CSS animations
- **Performance considerations** like optimized CSS and small file size
- **Cross-browser testing** to make sure e fit work for different browsers

> 💡 **Pro Tip**: Start wit mobile design first, then improve for bigger screens. Dis mobile-first approach dey make sure your app work well for all devices and follow modern web development best practices.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document na wetin AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) translate. Even though we try make am correct, abeg sabi say automated translation fit get wahala or mistakes. The original document for im own language na the correct one wey you suppose trust. If na important info, better make human professional translate am. We no go take blame if person no understand well or if dem use am wrong.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->