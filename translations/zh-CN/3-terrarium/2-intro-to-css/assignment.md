# CSS 重构作业

## 目标

将您的微型生态瓶项目转换为使用现代 CSS 布局技术！重构当前的绝对定位方法，改用 **Flexbox** 或 **CSS Grid** 实现更易维护、响应式的设计。此作业挑战您在保持生态瓶视觉美感的同时，应用现代 CSS 标准。

理解何时及如何使用不同的布局方法，是现代网页开发的关键技能。本练习架起传统定位技术与现代 CSS 布局系统之间的桥梁。

## 作业说明

### 阶段 1：分析与规划
1. **审查当前生态瓶代码** - 识别哪些元素当前使用绝对定位
2. **选择布局方法** - 决定 Flexbox 还是 CSS Grid 更适合您的设计目标
3. **绘制新布局结构图** - 规划容器及植物元素如何组织

### 阶段 2：实现
1. **创建生态瓶项目的新版本**，放在单独文件夹中
2. **根据需要更新 HTML 结构**，以支持所选布局方法
3. **重构 CSS**，使用 Flexbox 或 CSS Grid 替代绝对定位
4. **保持视觉一致性** - 确保植物与生态瓶罐保持相同位置
5. **实现响应式行为** - 使布局能优雅适应不同屏幕尺寸

### 阶段 3：测试与文档
1. **跨浏览器测试** - 验证设计在 Chrome、Firefox、Edge 和 Safari 中表现正常
2. **响应式测试** - 检查布局在移动设备、平板和桌面屏幕尺寸上的表现
3. **文档编写** - 在 CSS 中添加注释，说明布局设计选择
4. **截图** - 捕捉生态瓶在不同浏览器及屏幕尺寸下的效果

## 技术要求

### 布局实现
- **选择一项**：仅实现 Flexbox 或 CSS Grid（同一元素不可同时使用两者）
- **响应式设计**：使用相对单位（`rem`、`em`、`%`、`vw`、`vh`）替代固定像素
- **无障碍**：保持适当的语义 HTML 结构和替代文本
- **代码质量**：使用一致的命名规范，逻辑清晰地组织 CSS

### 需包含现代 CSS 特性
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

### 浏览器支持要求
- **Chrome/Edge**：最新 2 个版本
- **Firefox**：最新 2 个版本
- **Safari**：最新 2 个版本
- **移动浏览器**：iOS Safari、Chrome Mobile

## 交付物

1. **更新的 HTML 文件**，改进语义结构
2. **重构后的 CSS 文件**，采用现代布局技术
3. **截图集**，展示跨浏览器兼容性：
   - 桌面视图（1920x1080）
   - 平板视图（768x1024）
   - 手机视图（375x667）
   - 至少包含 2 种不同浏览器
4. **README.md 文件**，内容包括：
   - 您的布局选择（Flexbox 或 Grid）及理由
   - 重构过程中遇到的挑战
   - 浏览器兼容性说明
   - 运行代码说明

## 评估标准

| 评估项 | 优秀 (4) | 良好 (3) | 进行中 (2) | 初学 (1) |
|--------|-----------|-----------|-------------|-----------|
| **布局实现** | 熟练使用 Flexbox/Grid 及高级功能；完全响应式 | 正确实现，响应式表现良好 | 具备基本实现，响应式有轻微问题 | 实现不完整或错误 |
| **代码质量** | CSS 清晰有序，注释丰富，命名规范 | 组织良好，包含部分注释 | 组织尚可，注释有限 | 组织混乱，不易理解 |
| **跨浏览器兼容性** | 各要求浏览器表现一致，附截图证明 | 与部分浏览器兼容良好，差异注释明确 | 存在兼容性问题但不影响功能 | 主要兼容问题或缺少测试 |
| **响应式设计** | 优秀的移动优先策略，断点流畅 | 响应式表现良好，断点合理 | 基本响应式，有局部布局问题 | 响应式表现有限或有缺陷 |
| **文档** | README 详尽，解释深入，见解丰富 | 文档良好，涵盖所有必要内容 | 基础文档，解释有限 | 文档不完整或缺失 |

## 有用资源

### 布局方法指南
- 📖 [Flexbox 完整指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [CSS Grid 完整指南](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox 与 Grid 的选择](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### 浏览器测试工具
- 🛠️ [浏览器开发者工具响应式模式](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - 特性支持查询](https://caniuse.com/)
- 🛠️ [BrowserStack - 跨浏览器测试](https://www.browserstack.com/)

### 代码质量工具
- ✅ [CSS 验证器](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML 验证器](https://validator.w3.org/)
- ✅ [WebAIM 对比度检测器](https://webaim.org/resources/contrastchecker/)

## 额外挑战

🌟 **高级布局**：在设计不同部分同时使用 Flexbox 和 Grid  
🌟 **动画集成**：添加与新布局配合的 CSS 过渡或动画  
🌟 **暗模式**：实现基于 CSS 自定义属性的主题切换器  
🌟 **容器查询**：使用现代容器查询技术实现组件级响应式

> 💡 **记住**：目标不仅是让它运行，而是理解为何您选择的布局方法是本设计挑战的最佳解决方案！

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件通过 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻译完成。虽然我们力求准确，但请注意自动翻译可能存在错误或不准确之处。原始语言版本应被视为权威来源。如涉及重要信息，建议采用专业人工翻译。对于因使用本翻译而产生的任何误解或误释，我们不承担任何责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->