<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T13:28:09+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "en"
}
-->
# Creating Accessible Webpages

![All About Accessibility](../../../../translated_images/en/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/)

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
>
> \- Sir Timothy Berners-Lee, W3C Director and inventor of the World Wide Web

This quote perfectly captures the importance of building accessible websites. An application that excludes certain users is inherently discriminatory. As web developers, we should always prioritize accessibility. By focusing on it from the start, you'll be well on your way to ensuring that everyone can access the pages you create. In this lesson, you'll learn about tools that can help you ensure your web assets are accessible and how to design with accessibility in mind.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Tools to use

### Screen readers

Screen readers are among the most well-known accessibility tools.

[Screen readers](https://en.wikipedia.org/wiki/Screen_reader) are commonly used by individuals with vision impairments. Just as we ensure browsers display information correctly, we must also ensure screen readers convey the same information accurately.

At their core, screen readers audibly read a page from top to bottom. If your page is entirely text, the reader will present the information similarly to a browser. However, web pages often include links, images, colors, and other visual elements. Care must be taken to ensure this information is conveyed correctly by a screen reader.

Every web developer should become familiar with screen readers. Just as you understand how browsers work, you should also learn how screen readers operate. Fortunately, most operating systems come with built-in screen readers.

Some browsers also include tools and extensions that can read text aloud or provide basic navigation features, such as [these accessibility-focused Edge browser tools](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). While useful, these tools function differently from screen readers and should not be used as substitutes for screen reader testing.

✅ Try a screen reader and browser text reader. On Windows, [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) is included by default, and [JAWS](https://webaim.org/articles/jaws/) and [NVDA](https://www.nvaccess.org/about-nvda/) can also be installed. On macOS and iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) is pre-installed.

### Zoom

Zooming is another tool frequently used by individuals with vision impairments. 

The simplest form of zooming is static zoom, which can be controlled using `Control + plus sign (+)` or by lowering the screen resolution. This type of zoom enlarges the entire page, so using [responsive design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) is essential to ensure a good user experience at higher zoom levels.

Another type of zoom involves specialized software that magnifies specific areas of the screen and allows panning, similar to using a magnifying glass. On Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) is built in, while [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) is a third-party magnification tool with additional features and a larger user base. Both macOS and iOS include a built-in magnification tool called [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Contrast checkers

Colors on websites must be chosen carefully to accommodate users who are color-blind or have difficulty perceiving low-contrast colors.

✅ Test a website you enjoy using for its color choices with a browser extension like [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). What do you learn?

### Lighthouse

Your browser's developer tools include the Lighthouse tool, which provides an initial analysis of a website's accessibility (along with other metrics). While you shouldn't rely solely on Lighthouse, achieving a 100% score is a helpful starting point.

✅ Open Lighthouse in your browser's developer tools and analyze any website. What do you discover?

## Designing for accessibility

Accessibility is a broad topic, but there are many resources available to help you.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

While we can't cover every aspect of creating accessible websites, the following are some core principles to implement. Designing an accessible page from the beginning is **always** easier than retrofitting an existing page.

## Good display principles

### Color-safe palettes

People perceive colors differently. When choosing a color scheme for your site, ensure it's accessible to everyone. A great [tool for generating color palettes is Color Safe](http://colorsafe.co/).

✅ Identify a website with problematic color usage. Why is it an issue?

### Use the correct HTML

With CSS and JavaScript, you can make any element look like any type of control. For example, a `<span>` could be styled to look like a `<button>`, or a `<b>` could resemble a hyperlink. While this might seem convenient, it provides no context to a screen reader. Always use the appropriate HTML elements for their intended purposes. For instance, use `<a>` for hyperlinks. This practice is known as Semantic HTML.

✅ Visit a website and check if the developers are using HTML correctly. Can you find a button that should be a link? Hint: Right-click and select 'View Page Source' in your browser to inspect the code.

### Create a descriptive heading hierarchy

Screen reader users [rely heavily on headings](https://webaim.org/projects/screenreadersurvey8/#finding) to navigate and locate information on a page. Writing descriptive headings and using semantic heading tags are crucial for creating a site that's easy to navigate for screen reader users.

### Use clear visual cues

CSS allows you to customize the appearance of any element on a page. For example, you can create text boxes without outlines or hyperlinks without underlines. However, removing these visual cues can make it harder for users who rely on them to identify interactive elements.

## The importance of link text

Hyperlinks are fundamental to web navigation. Ensuring that screen readers can interpret links correctly is essential for accessibility.

### Screen readers and links

Screen readers read link text just like any other text on a page. At first glance, the examples below might seem acceptable:

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. [Click here](https://en.wikipedia.org/wiki/Little_penguin) for more information.

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. Visit https://en.wikipedia.org/wiki/Little_penguin for more information.

> **NOTE**: As you'll see, you should **never** create links like the examples above.

### The problem with using the URL

Screen readers will read the URL aloud, which can be uninformative and annoying. You've likely experienced this if your phone has ever read a text message containing a URL.

### The problem with "click here"

Screen readers can list all the links on a page. If all the links are labeled "click here," the user will hear "click here, click here, click here..."—making it impossible to distinguish between links.

### Good link text

Good link text briefly describes the destination. For example, in the case of the little penguin, the link text *little penguin* clearly indicates what the user will learn about.

> The [little penguin](https://en.wikipedia.org/wiki/Little_penguin), sometimes known as the fairy penguin, is the smallest penguin in the world.

✅ Browse the web and find pages with unclear link text. Compare them to pages with descriptive links. What do you notice?

#### Search engine notes

Using descriptive link text also helps search engines understand your site, improving navigation for everyone.

### ARIA

Consider the following table:

| Product      | Description        | Order        |
| ------------ | ------------------ | ------------ |
| Widget       | [Description](../../../../1-getting-started-lessons/3-accessibility/') | [Order](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Description](../../../../1-getting-started-lessons/3-accessibility/') | [Order](../../../../1-getting-started-lessons/3-accessibility/') |

For a browser user, the repeated "Description" and "Order" links make sense. However, a screen reader user would hear "Description" and "Order" repeated without context.

To address this, HTML includes [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) attributes, which provide additional context for screen readers.

> **NOTE**: ARIA support varies across browsers and screen readers, but most major clients support it.

You can use `aria-label` to add context to links. For example, the description link for the widget could be labeled as:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ While Semantic HTML should always be your first choice, ARIA is useful when no semantic equivalent exists (e.g., for a tree structure). The [MDN documentation on ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) is a great resource.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Images

Screen readers cannot interpret images, which is why the `alt` attribute is essential. All meaningful images should include an `alt` description. Decorative images should have an empty `alt` attribute (`alt=""`) to prevent unnecessary announcements.

✅ Search engines also rely on `alt` text, so making your images accessible benefits everyone!

## The keyboard

Some users navigate websites using only a keyboard. It's important to structure your content logically so that keyboard users can access interactive elements in the correct order. Building pages with semantic HTML and styling them with CSS usually ensures keyboard accessibility, but manual testing is essential. Learn more about [keyboard navigation strategies](https://webaim.org/techniques/keyboard/).

✅ Visit a website and try navigating it using only your keyboard. What works well? What doesn't? Why?

## Summary

A web that's only accessible to some is not truly "world-wide." The best way to ensure your sites are accessible is to incorporate accessibility best practices from the start. While it may require extra effort, adopting these practices now will ensure all your future pages are inclusive.

---

## 🚀 Challenge

Take this HTML and rewrite it to be as accessible as possible, using the strategies you've learned.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</p>
    </div>
  </body>
</html>
```

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/en/)

## Review & Self Study
Many governments have laws related to accessibility requirements. Research the accessibility laws in your country. What aspects are included, and what are not? An example is [this government website](https://accessibility.blog.gov.uk/).

## Assignment

[Analyze a non-accessible website](assignment.md)

Credits: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we strive for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.