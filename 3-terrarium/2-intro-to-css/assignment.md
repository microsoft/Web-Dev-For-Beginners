# CSS Refactoring Assignment

## Objective

Transform your terrarium project to use modern CSS layout techniques! Refactor the current absolute positioning approach to implement **Flexbox** or **CSS Grid** for a more maintainable, responsive design. This assignment challenges you to apply modern CSS standards while maintaining the visual appeal of your terrarium.

Understanding when and how to use different layout methods is a crucial skill for modern web development. This exercise bridges traditional positioning techniques with contemporary CSS layout systems.

## Assignment Instructions

### Phase 1: Analysis and Planning
1. **Review your current terrarium code** - Identify which elements are currently using absolute positioning
2. **Choose your layout method** - Decide whether Flexbox or CSS Grid better suits your design goals
3. **Sketch your new layout structure** - Plan how containers and plant elements will be organized

### Phase 2: Implementation
1. **Create a new version** of your terrarium project in a separate folder
2. **Update the HTML structure** as needed to support your chosen layout method
3. **Refactor the CSS** to use Flexbox or CSS Grid instead of absolute positioning
4. **Maintain visual consistency** - Ensure your plants and terrarium jar appear in the same positions
5. **Implement responsive behavior** - Your layout should adapt gracefully to different screen sizes

### Phase 3: Testing and Documentation
1. **Cross-browser testing** - Verify your design works in Chrome, Firefox, Edge, and Safari
2. **Responsive testing** - Check your layout on mobile, tablet, and desktop screen sizes
3. **Documentation** - Add comments to your CSS explaining your layout choices
4. **Screenshots** - Capture your terrarium in different browsers and screen sizes

## Technical Requirements

### Layout Implementation
- **Choose ONE**: Implement either Flexbox OR CSS Grid (not both for the same elements)
- **Responsive Design**: Use relative units (`rem`, `em`, `%`, `vw`, `vh`) instead of fixed pixels
- **Accessibility**: Maintain proper semantic HTML structure and alt text
- **Code Quality**: Use consistent naming conventions and organize CSS logically

### Modern CSS Features to Include
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Browser Support Requirements
- **Chrome/Edge**: Latest 2 versions
- **Firefox**: Latest 2 versions  
- **Safari**: Latest 2 versions
- **Mobile browsers**: iOS Safari, Chrome Mobile

## Deliverables

1. **Updated HTML file** with improved semantic structure
2. **Refactored CSS file** using modern layout techniques
3. **Screenshot collection** showing cross-browser compatibility:
   - Desktop view (1920x1080)
   - Tablet view (768x1024) 
   - Mobile view (375x667)
   - At least 2 different browsers
4. **README.md file** documenting:
   - Your layout choice (Flexbox vs Grid) and reasoning
   - Challenges faced during refactoring
   - Browser compatibility notes
   - Instructions for running your code

## Assessment Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|---------------|---------------|
| **Layout Implementation** | Masterful use of Flexbox/Grid with advanced features; fully responsive | Correct implementation with good responsive behavior | Basic implementation with minor responsive issues | Incomplete or incorrect layout implementation |
| **Code Quality** | Clean, well-organized CSS with meaningful comments and consistent naming | Good organization with some comments | Adequate organization with minimal comments | Poor organization; difficult to understand |
| **Cross-Browser Compatibility** | Perfect consistency across all required browsers with screenshots | Good compatibility with minor differences documented | Some compatibility issues that don't break functionality | Major compatibility problems or missing testing |
| **Responsive Design** | Exceptional mobile-first approach with smooth breakpoints | Good responsive behavior with appropriate breakpoints | Basic responsive features with some layout issues | Limited or broken responsive behavior |
| **Documentation** | Comprehensive README with detailed explanations and insights | Good documentation covering all required elements | Basic documentation with minimal explanations | Incomplete or missing documentation |

## Helpful Resources

### Layout Method Guides
- 📖 [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Choose the Right Tool](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Browser Testing Tools
- 🛠️ [Browser DevTools Responsive Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Feature Support](https://caniuse.com/)
- 🛠️ [BrowserStack - Cross-browser Testing](https://www.browserstack.com/)

### Code Quality Tools
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Bonus Challenges

🌟 **Advanced Layouts**: Implement both Flexbox AND Grid in different parts of your design
🌟 **Animation Integration**: Add CSS transitions or animations that work with your new layout
🌟 **Dark Mode**: Implement a CSS custom properties-based theme switcher
🌟 **Container Queries**: Use modern container query techniques for component-level responsiveness

> 💡 **Remember**: The goal isn't just to make it work, but to understand WHY your chosen layout method is the best solution for this particular design challenge!