# Style Your Bank App with Modern CSS

## Project Overview

Transform your functional banking application into a visually appealing, professional-looking web app using modern CSS techniques. You'll create a cohesive design system that enhances user experience while maintaining accessibility and responsive design principles.

This assignment challenges you to apply contemporary web design patterns, implement a consistent visual identity, and create an interface that users will find both attractive and intuitive to navigate.

## Instructions

### Step 1: Setup Your Stylesheet

**Create your CSS foundation:**

1. **Create** a new file called `styles.css` in your project root
2. **Link** the stylesheet in your `index.html` file:
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

**Implement these essential design elements:**

#### Color Palette
- **Primary color**: Choose a professional color for buttons and highlights
- **Secondary color**: Complementary color for accents and secondary actions
- **Neutral colors**: Grays for text, borders, and backgrounds
- **Success/Error colors**: Green for success states, red for errors

#### Typography
- **Heading hierarchy**: Clear distinction between H1, H2, and H3 elements
- **Body text**: Readable font size (minimum 16px) and appropriate line height
- **Form labels**: Clear, accessible text styling

#### Layout and Spacing
- **Consistent spacing**: Use a spacing scale (8px, 16px, 24px, 32px)
- **Grid system**: Organized layout for forms and content sections
- **Responsive design**: Mobile-first approach with breakpoints

### Step 3: Component Styling

**Style these specific components:**

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
- **Cards**: If using card-based layouts, include shadows and borders
- **Backgrounds**: Appropriate use of white space and subtle backgrounds

### Step 4: Enhanced Features (Optional)

**Consider implementing these advanced features:**
- **Dark mode**: Toggle between light and dark themes
- **Animations**: Subtle transitions and micro-interactions
- **Loading states**: Visual feedback during form submissions
- **Responsive images**: Optimized images for different screen sizes

## Design Inspiration

**Modern banking app characteristics:**
- **Clean, minimal design** with plenty of white space
- **Professional color schemes** (blues, greens, or sophisticated neutrals)
- **Clear visual hierarchy** with prominent call-to-action buttons
- **Accessible contrast ratios** meeting WCAG guidelines
- **Mobile-responsive layouts** that work on all devices

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
- **Color contrast**: Ensure at least 4.5:1 ratio for normal text
- **Focus indicators**: Visible focus states for keyboard navigation
- **Form labels**: Properly associated with inputs
- **Responsive design**: Usable on screens from 320px to 1920px wide

## Evaluation Rubric

| Criteria | Exemplary (A) | Proficient (B) | Developing (C) | Needs Improvement (F) |
|----------|---------------|----------------|----------------|----------------------|
| **Design System** | Implements comprehensive design system with consistent colors, typography, and spacing throughout | Uses consistent styling with clear design patterns and good visual hierarchy | Basic styling applied with some consistency issues or missing design elements | Minimal styling with inconsistent or conflicting design choices |
| **User Experience** | Creates intuitive, professional interface with excellent usability and visual appeal | Provides good user experience with clear navigation and readable content | Basic usability with some UX improvements needed | Poor usability, difficult to navigate or read |
| **Technical Implementation** | Uses modern CSS techniques, organized code structure, and follows best practices | Implements CSS effectively with good organization and appropriate techniques | CSS works correctly but may lack organization or modern approaches | Poor CSS implementation with technical issues or browser compatibility problems |
| **Responsive Design** | Fully responsive design that works beautifully across all device sizes | Good responsive behavior with minor issues on some screen sizes | Basic responsive implementation with some layout issues | Not responsive or significant problems on mobile devices |
| **Accessibility** | Meets WCAG guidelines with excellent keyboard navigation and screen reader support | Good accessibility practices with proper contrast and focus indicators | Basic accessibility considerations with some missing elements | Poor accessibility, difficult for users with disabilities |

## Submission Guidelines

**Include in your submission:**
- **styles.css**: Your complete stylesheet
- **Updated HTML**: Any HTML modifications you made
- **Screenshots**: Images showing your design on desktop and mobile
- **README**: Brief description of your design choices and color palette

**Bonus points for:**
- **CSS custom properties** for maintainable theming
- **Advanced CSS features** like Grid, Flexbox, or CSS animations
- **Performance considerations** like optimized CSS and minimal file size
- **Cross-browser testing** ensuring compatibility across different browsers

> 💡 **Pro Tip**: Start with mobile design first, then enhance for larger screens. This mobile-first approach ensures your app works well on all devices and follows modern web development best practices.