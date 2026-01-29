# CSS Refactoring Assignment

## Objective

Transform your terrarium project to use modern CSS layout techniques! Refactor the current absolute positioning approach to implement **Flexbox** or **CSS Grid** for a more maintainable, responsive design. Dis assignment dey challenge you to apply modern CSS standards while you still dey keep the fine look wey your terrarium get.

Knowing wen and how to use different layout methods na important skill for modern web development. Dis exercise go join old style positioning techniques with current CSS layout systems.

## Assignment Instructions

### Phase 1: Analysis and Planning
1. **Review your current terrarium code** - Find out which elements dey use absolute positioning now
2. **Choose your layout method** - Decide if Flexbox or CSS Grid go better for your design goals
3. **Sketch your new layout structure** - Plan how containers and plant elements go arrange

### Phase 2: Implementation
1. **Create a new version** of your terrarium project for another folder
2. **Update the HTML structure** as e suppose be to fit your chosen layout method
3. **Refactor the CSS** make e use Flexbox or CSS Grid instead of absolute positioning
4. **Maintain visual consistency** - Make sure your plants and terrarium jar still dey the same places
5. **Implement responsive behavior** - Your layout go fit change well well for different screen sizes

### Phase 3: Testing and Documentation
1. **Cross-browser testing** - Check say your design dey work well for Chrome, Firefox, Edge, and Safari
2. **Responsive testing** - Look your layout for mobile, tablet, and desktop screen sizes
3. **Documentation** - Add comments for your CSS wey talk about your layout choices
4. **Screenshots** - Take picture of your terrarium for different browsers and screen sizes

## Technical Requirements

### Layout Implementation
- **Choose ONE**: Make you use either Flexbox OR CSS Grid (no mix for same elements)
- **Responsive Design**: Use relative units (`rem`, `em`, `%`, `vw`, `vh`) no be fixed pixels
- **Accessibility**: Keep correct semantic HTML structure and alt text
- **Code Quality**: Use consistent naming style and arrange CSS well well

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

1. **Updated HTML file** wey get better semantic structure
2. **Refactored CSS file** wey use modern layout techniques
3. **Screenshot collection** wey show cross-browser compatibility:
   - Desktop view (1920x1080)
   - Tablet view (768x1024) 
   - Mobile view (375x667)
   - At least 2 different browsers
4. **README.md file** wey show:
   - Wetin you choose (Flexbox or Grid) and why you choose am
   - Wahala wey you face during refactoring
   - Browser compatibility notes
   - How to run your code

## Assessment Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|---------------|---------------|
| **Layout Implementation** | Correct Flexbox/Grid use with advanced features; full responsivity | Good implementation with good responsive behavior | Basic implementation with small responsive wahala | Incomplete or wrong layout implementation |
| **Code Quality** | Clean, well-organized CSS with correct comments and consistent naming | Good organization plus some comments | Okay organization with few comments | Bad organization; hard to sabi |
| **Cross-Browser Compatibility** | Perfect for all browsers wey dem need plus screenshots | Good compatibility with small differences mentioned | Some compatibility wahala wey no spoil function | Big compatibility wahala or no testing |
| **Responsive Design** | Strong mobile-first with smooth breakpoints | Good responsive behavior with correct breakpoints | Basic responsive features with small problems | Limited or broken responsive behavior |
| **Documentation** | Detailed README with full explanations and insights | Good documentation covering everything | Basic documentation with small explanation | No or incomplete documentation |

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

🌟 **Advanced Layouts**: Use both Flexbox AND Grid for different parts of your design
🌟 **Animation Integration**: Add CSS transitions or animations to work with your new layout
🌟 **Dark Mode**: Use CSS custom property theme switcher
🌟 **Container Queries**: Use new container query techniques for responsiveness at component level

> 💡 **Remember**: The goal no be just to make e work, but to sabi WHY your chosen layout method na the best solution for dis design challenge!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**: Dis document na translate wey AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) help do. Even though we try make am correct, e good make you sabi say automated translation fit get errors or mistake. Original document wey dey im correct language na the main one wey you suppose trust. If na serious matter, better make person wey sabi do professional translation check am. We no go responsible for any kondo or wrong understanding wey fit happen because of this translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->