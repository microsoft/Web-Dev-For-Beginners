<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:16:34+00:00",
  "source_file": "AGENTS.md",
  "language_code": "zh"
}
-->
# AGENTS.md

## 项目概述

这是一个用于教授初学者网页开发基础知识的教育课程库。该课程是由微软云倡导者开发的全面12周课程，包含24节动手实践课程，涵盖JavaScript、CSS和HTML。

### 主要组成部分

- **教育内容**：24节结构化课程，按项目模块组织
- **实践项目**：生态瓶、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器和AI聊天助手
- **互动测验**：48个测验，每个测验包含3个问题（课前/课后评估）
- **多语言支持**：通过GitHub Actions实现50多种语言的自动翻译
- **技术栈**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于AI项目）

### 架构

- 基于课程的教育资源库
- 每个课程文件夹包含README、代码示例和解决方案
- 独立项目存放在单独的目录中（quiz-app，各种课程项目）
- 使用GitHub Actions的翻译系统（co-op-translator）
- 文档通过Docsify提供，并可导出为PDF

## 设置命令

此资源库主要用于教育内容的学习。对于具体项目的操作：

### 主资源库设置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 测验应用设置（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### 银行项目API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### 浏览器扩展项目

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### 太空游戏项目

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### 聊天项目（Python后端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## 开发工作流程

### 对于内容贡献者

1. **Fork资源库**到你的GitHub账户
2. **克隆你的Fork**到本地
3. **创建新分支**以进行更改
4. 修改课程内容或代码示例
5. 在相关项目目录中测试代码更改
6. 按照贡献指南提交拉取请求

### 对于学习者

1. Fork或克隆资源库
2. 按顺序浏览课程目录
3. 阅读每节课程的README文件
4. 在https://ff-quizzes.netlify.app/web/完成课前测验
5. 在课程文件夹中完成代码示例
6. 完成作业和挑战
7. 进行课后测验

### 实时开发

- **文档**：在根目录运行`docsify serve`（端口3000）
- **测验应用**：在quiz-app目录运行`npm run dev`
- **项目**：使用VS Code的Live Server扩展运行HTML项目
- **API项目**：在相关API目录运行`npm start`

## 测试说明

### 测验应用测试

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### 银行API测试

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### 一般测试方法

- 这是一个教育资源库，没有全面的自动化测试
- 手动测试重点：
  - 代码示例运行无错误
  - 文档中的链接正常工作
  - 项目构建成功完成
  - 示例遵循最佳实践

### 提交前检查

- 在包含package.json的目录运行`npm run lint`
- 验证Markdown链接是否有效
- 在浏览器或Node.js中测试代码示例
- 确保翻译保持正确结构

## 代码风格指南

### JavaScript

- 使用现代ES6+语法
- 遵循项目中提供的标准ESLint配置
- 使用有意义的变量和函数名称以便于学习
- 添加注释解释概念以帮助学习者
- 在配置了Prettier的地方进行格式化

### HTML/CSS

- 使用语义化HTML5元素
- 响应式设计原则
- 清晰的类命名规范
- 添加注释解释CSS技术以帮助学习者

### Python

- 遵循PEP 8风格指南
- 提供清晰的教育代码示例
- 在有帮助的地方添加类型提示

### Markdown文档

- 清晰的标题层次结构
- 带语言说明的代码块
- 链接到额外资源
- 在`images/`目录中提供截图和图片
- 为图片添加辅助文本以提高可访问性

### 文件组织

- 课程按顺序编号（1-getting-started-lessons, 2-js-basics等）
- 每个项目有`solution/`目录，通常还有`start/`或`your-work/`目录
- 图片存储在课程特定的`images/`文件夹中
- 翻译存储在`translations/{language-code}/`结构中

## 构建和部署

### 测验应用部署（Azure Static Web Apps）

测验应用已配置为Azure Static Web Apps部署：

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps配置：
- **应用位置**：`/quiz-app`
- **输出位置**：`dist`
- **工作流**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文档PDF生成

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify文档

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### 项目特定构建

每个项目目录可能有自己的构建过程：
- Vue项目：`npm run build`生成生产包
- 静态项目：无需构建步骤，直接提供文件

## 拉取请求指南

### 标题格式

使用清晰、描述性的标题指明更改的区域：
- `[Quiz-app] 为课程X添加新测验`
- `[Lesson-3] 修复生态瓶项目中的拼写错误`
- `[Translation] 为课程5添加西班牙语翻译`
- `[Docs] 更新设置说明`

### 必需检查

提交PR之前：

1. **代码质量**：
   - 在受影响的项目目录运行`npm run lint`
   - 修复所有lint错误和警告

2. **构建验证**：
   - 如果适用，运行`npm run build`
   - 确保没有构建错误

3. **链接验证**：
   - 测试所有Markdown链接
   - 验证图片引用是否正常工作

4. **内容审查**：
   - 校对拼写和语法
   - 确保代码示例正确且具有教育意义
   - 验证翻译保持原意

### 贡献要求

- 同意微软CLA（首次PR时自动检查）
- 遵循[微软开源行为准则](https://opensource.microsoft.com/codeofconduct/)
- 参阅[CONTRIBUTING.md](./CONTRIBUTING.md)获取详细指南
- 在PR描述中引用问题编号（如果适用）

### 审核流程

- PR由维护者和社区审核
- 优先考虑教育清晰度
- 代码示例应遵循当前最佳实践
- 翻译需审核准确性和文化适应性

## 翻译系统

### 自动翻译

- 使用GitHub Actions和co-op-translator工作流
- 自动翻译为50多种语言
- 源文件位于主目录
- 翻译文件存储在`translations/{language-code}/`目录中

### 添加手动翻译改进

1. 在`translations/{language-code}/`中找到文件
2. 在保持结构的同时进行改进
3. 确保代码示例仍然可用
4. 测试任何本地化的测验内容

### 翻译元数据

翻译文件包含元数据头：
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## 调试和故障排除

### 常见问题

**测验应用无法启动**：
- 检查Node.js版本（推荐v14+）
- 删除`node_modules`和`package-lock.json`，重新运行`npm install`
- 检查端口冲突（默认：Vite使用端口5173）

**API服务器无法启动**：
- 验证Node.js版本是否满足最低要求（node >=10）
- 检查端口是否已被占用
- 确保所有依赖项已通过`npm install`安装

**浏览器扩展无法加载**：
- 验证manifest.json格式是否正确
- 检查浏览器控制台中的错误
- 按照浏览器特定的扩展安装说明操作

**Python聊天项目问题**：
- 确保已安装OpenAI包：`pip install openai`
- 验证是否设置了GITHUB_TOKEN环境变量
- 检查GitHub Models访问权限

**Docsify无法提供文档**：
- 全局安装docsify-cli：`npm install -g docsify-cli`
- 从资源库根目录运行
- 检查`docs/_sidebar.md`是否存在

### 开发环境提示

- 对于HTML项目，使用VS Code的Live Server扩展
- 安装ESLint和Prettier扩展以保持一致的格式
- 使用浏览器开发工具调试JavaScript
- 对于Vue项目，安装Vue DevTools浏览器扩展

### 性能考虑

- 大量翻译文件（50多种语言）导致完整克隆体积较大
- 如果只处理内容，请使用浅克隆：`git clone --depth 1`
- 在处理英文内容时排除翻译文件的搜索
- 第一次运行构建过程可能较慢（npm install, Vite build）

## 安全注意事项

### 环境变量

- API密钥绝不能提交到资源库
- 使用`.env`文件（已在`.gitignore`中）
- 在项目README中记录所需的环境变量

### Python项目

- 使用虚拟环境：`python -m venv venv`
- 保持依赖项更新
- GitHub令牌应具有最低必要权限

### GitHub Models访问

- GitHub Models需要个人访问令牌（PAT）
- 令牌应存储为环境变量
- 切勿提交令牌或凭据

## 附加说明

### 目标受众

- 完全的网页开发初学者
- 学生和自学者
- 在课堂上使用课程的教师
- 内容设计注重可访问性和逐步技能提升

### 教育理念

- 基于项目的学习方法
- 频繁的知识检查（测验）
- 动手编码练习
- 真实世界应用示例
- 在框架之前专注于基础知识

### 资源库维护

- 活跃的学习者和贡献者社区
- 定期更新依赖项和内容
- 维护者监控问题和讨论
- 通过GitHub Actions自动更新翻译

### 相关资源

- [微软学习模块](https://docs.microsoft.com/learn/)
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)
- 推荐学习者使用[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他课程：生成式AI、数据科学、机器学习、物联网课程可用

### 处理具体项目

有关单个项目的详细说明，请参阅以下README文件：
- `quiz-app/README.md` - Vue 3测验应用
- `7-bank-project/README.md` - 带认证的银行应用
- `5-browser-extension/README.md` - 浏览器扩展开发
- `6-space-game/README.md` - 基于Canvas的游戏开发
- `9-chat-project/README.md` - AI聊天助手项目

### Monorepo结构

虽然不是传统的Monorepo，但此资源库包含多个独立项目：
- 每节课程都是自包含的
- 项目之间不共享依赖项
- 可单独处理项目而不影响其他项目
- 克隆整个资源库以体验完整课程

---

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。