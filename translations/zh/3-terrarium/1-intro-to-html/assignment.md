<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T11:50:29+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "zh"
}
-->
# HTML 练习作业：构建博客原型

## 学习目标

通过设计和编码一个完整的博客主页结构，应用您的 HTML 知识。这个实践作业将强化语义 HTML 概念、无障碍最佳实践以及专业代码组织技能，这些技能将在您的整个网页开发旅程中使用。

**完成此作业后，您将能够：**
- 练习在编码前规划网站布局
- 适当地应用语义 HTML 元素
- 创建可访问的、结构良好的标记
- 培养带有注释和组织的专业编码习惯

## 项目要求

### 第 1 部分：设计规划（视觉原型）

**创建您的博客主页的视觉原型，包括：**
- 带有网站标题和导航的页眉
- 具有至少 2-3 篇博客文章预览的主内容区
- 包含附加信息的侧边栏（关于部分、最近帖子、分类）
- 带有联系信息或链接的页脚

**原型创建选项：**
- **手绘草图**：使用纸和铅笔，然后拍照或扫描您的设计
- **数字工具**：Figma、Adobe XD、Canva、PowerPoint 或任何绘图应用
- **线框工具**：Balsamiq、MockFlow 或类似的线框软件

**在您的原型部分标注您计划使用的 HTML 元素**（例如，“页眉 - `<header>`”、“博客文章 - `<article>`”）。

### 第 2 部分：HTML 元素规划

**创建一个列表，将您的原型的每个部分映射到特定的 HTML 元素：**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**必须包含的元素：**
您的 HTML 必须至少包含以下列表中 10 种不同的语义元素：
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### 第 3 部分：HTML 实现

**编码您的博客主页，遵循以下标准：**

1. **文档结构**：包含正确的 DOCTYPE、html、head 和 body 元素
2. **语义标记**：根据用途使用 HTML 元素
3. **无障碍**：为图片加入恰当的 alt 文本和有意义的链接文本
4. **代码质量**：使用一致的缩进和有意义的注释
5. **内容**：包含真实的博客内容（您可以使用占位文本）

**示例 HTML 结构：**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### 第 4 部分：反思

**写一个简短的反思（3-5 句），内容包括：**
- 哪些 HTML 元素是您最有信心使用的？
- 规划或编码过程中遇到了哪些挑战？
- 语义 HTML 如何帮助您组织内容？
- 下一次 HTML 项目中您会有什么不同的做法？

## 提交清单

**提交前，请确保您已完成：**
- [ ] 带有标注 HTML 元素的视觉原型
- [ ] 完整的 HTML 文件，具有正确的文档结构
- [ ] 至少使用了 10 种不同且恰当的语义 HTML 元素
- [ ] 有意义的注释，解释您的代码结构
- [ ] 有效的 HTML 语法（在浏览器中测试）
- [ ] 针对提示问题的书面反思

## 评估标准

| 评估标准 | 优秀 (4) | 良好 (3) | 发展中 (2) | 初学者 (1) |
|----------|----------|----------|------------|------------|
| **规划与设计** | 详尽且标注清晰的原型，展示了对布局和 HTML 语义结构的深刻理解 | 清晰的原型，大部分部分都有恰当标注 | 基本原型，有一些标注，表现出一般理解 | 原型内容少或不清晰，缺乏正确的部分识别 |
| **语义 HTML 使用** | 适当使用 10 种以上语义元素，表现出对 HTML 结构和无障碍的深刻理解 | 正确使用 8-9 种语义元素，显示良好的语义标记理解 | 使用 6-7 种语义元素，对适当使用有一些混淆 | 使用少于 6 种元素或误用语义元素 |
| **代码质量与组织** | 代码组织异常良好，缩进正确，有全面的注释，且 HTML 语法完美 | 代码组织良好，有良好缩进和有用注释，语法有效 | 代码大致有序，有少量注释，存在轻微语法问题 | 组织差，极少注释，存在多处语法错误 |
| **无障碍与最佳实践** | 极佳的无障碍考虑，有意义的 alt 文本，恰当的标题层级，遵循所有现代 HTML 最佳实践 | 良好的无障碍特性，恰当使用标题和 alt 文本，遵循大多数最佳实践 | 有一些无障碍考虑，基本的 alt 文本和标题结构 | 无障碍特性有限，标题结构差，不遵循最佳实践 |
| **反思与学习** | 有深刻见解的反思，展现了对 HTML 概念和学习过程的深刻理解和分析 | 良好的反思，显示了对关键概念的理解和一定的自我认知 | 基本反思，对 HTML 概念或学习过程的见解有限 | 反思很少或缺失，几乎没有对学习内容的理解 |

## 学习资源

**必备参考资料：**
- [MDN HTML 元素参考](https://developer.mozilla.org/docs/Web/HTML/Element) - 全面 HTML 元素指南
- [HTML5 语义元素](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - 理解语义标记
- [网页无障碍指导原则](https://www.w3.org/WAI/WCAG21/quickref/) - 创建无障碍网页内容
- [HTML 校验器](https://validator.w3.org/) - 检查您的 HTML 语法

**成功技巧：**
- 在编写任何代码之前先开始制作原型
- 使用浏览器的开发者工具检查您的 HTML 结构
- 测试您的页面在不同屏幕尺寸下的显示（即使没有 CSS）
- 大声朗读您的 HTML 以检查结构是否逻辑通顺
- 考虑屏幕阅读器如何解释您的页面结构

> 💡 **记住**：本作业关注 HTML 结构和语义。不要担心视觉样式 —— 那是 CSS 的工作！您的页面可能看起来很普通，但应结构良好且有意义。

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。虽然我们力求准确，但请注意，自动翻译可能存在错误或不准确之处。原始文本应被视为权威来源。对于重要信息，建议采用专业人工翻译。我们不对因使用本翻译内容而引起的任何误解或错误解释承担责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->