# AGENTS.md

## 项目概述

这是一个面向初学者教授网页开发基础的教育课程仓库。课程由微软云倡导者开发，是一个为期12周的综合课程，包含24个涵盖JavaScript、CSS和HTML的动手课程。

### 主要组件

- **教育内容**：24个结构化课程，组织为基于项目的模块
- **实用项目**：养殖箱、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器和AI聊天助理
- **互动测验**：48个测验，每个包含3个问题（课前/课后评估）
- **多语言支持**：通过GitHub Actions自动翻译成50多种语言
- **技术栈**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于AI项目）

### 架构

- 以课程为基础结构的教育仓库  
- 每个课程文件夹包含README、代码示例和解决方案  
- 独立项目位于单独目录（quiz-app，各种课程项目）  
- 使用GitHub Actions的翻译系统（co-op-translator）  
- 通过Docsify提供文档并提供PDF格式  

## 设置命令

该仓库主要用于教育内容的学习。针对具体项目的操作如下：

### 主仓库设置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 测验应用设置（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 启动开发服务器
npm run build      # 生产环境构建
npm run lint       # 运行 ESLint
```

### 银行项目API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # 启动API服务器
npm run lint       # 运行ESLint
npm run format     # 使用Prettier格式化
```

### 浏览器扩展项目

```bash
cd 5-browser-extension/solution
npm install
# 遵循针对浏览器的特定扩展加载说明
```

### 太空游戏项目

```bash
cd 6-space-game/solution
npm install
# 在浏览器中打开 index.html 或使用实时服务器
```

### 聊天项目（Python后端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 设置 GITHUB_TOKEN 环境变量
python api.py
```

## 开发工作流

### 对内容贡献者

1. **Fork该仓库** 到你的GitHub账号  
2. **克隆你的Fork** 到本地  
3. **创建新的分支** 用于修改  
4. 修改课程内容或代码示例  
5. 在相关项目目录测试代码修改  
6. 遵守贡献指南提交拉取请求（PR）

### 对学习者

1. Fork或克隆该仓库  
2. 按顺序访问课程目录  
3. 阅读每课的README文件  
4. 完成 https://ff-quizzes.netlify.app/web/ 上的课前测验  
5. 使用课程文件夹中的代码示例学习  
6. 完成作业和挑战  
7. 参加课后测验  

### 实时开发

- **文档服务**：在根目录运行 `docsify serve` （默认端口3000）  
- **测验应用**：在quiz-app目录中运行 `npm run dev`  
- **项目**：HTML项目用VS Code Live Server扩展  
- **API项目**：在对应API目录运行 `npm start`  

## 测试说明

### 测验应用测试

```bash
cd quiz-app
npm run lint       # 检查代码风格问题
npm run build      # 验证构建是否成功
```

### 银行API测试

```bash
cd 7-bank-project/api
npm run lint       # 检查代码风格问题
node server.js     # 验证服务器是否无错误启动
```

### 常规测试方法

- 本仓库为教育仓库，无全面自动测试  
- 手动测试重点：  
  - 代码示例无错误运行  
  - 文档中的链接有效  
  - 项目构建成功  
  - 示例符合最佳实践  

### 提交前检查

- 在带有package.json的目录运行 `npm run lint`  
- 验证markdown链接有效  
- 在浏览器或Node.js中测试代码示例  
- 确保翻译文件结构正确  

## 代码风格指南

### JavaScript

- 使用现代ES6+语法  
- 遵守各项目内的标准ESLint配置  
- 使用有意义的变量和函数名以便教学  
- 添加注释解释概念  
- 配置了Prettier的地方使用其格式化  

### HTML/CSS

- 语义化HTML5元素  
- 响应式设计原则  
- 清晰的类命名规范  
- 注释说明CSS技巧以供学习  

### Python

- 遵守PEP 8风格指南  
- 清晰、教学性的代码示例  
- 适当使用类型提示辅助学习  

### Markdown文档

- 清晰的标题层次结构  
- 语言标记的代码块  
- 链接到额外资源  
- `images/`目录中的截图和图片  
- 图片用alt文本提升无障碍  

### 文件组织

- 课程依序编号（1-getting-started-lessons, 2-js-basics等）  
- 每个项目有`solution/`，常常还有`start/`或`your-work/`目录  
- 图片存放在课程特定的`images/`文件夹  
- 翻译存储在`translations/{language-code}/`目录结构  

## 构建与部署

### 测验应用部署（Azure Static Web Apps）

quiz-app配置用于Azure Static Web Apps部署：

```bash
cd quiz-app
npm run build      # 创建 dist/ 文件夹
# 在推送到 main 时通过 GitHub Actions 工作流进行部署
```

Azure Static Web Apps 配置：
- **应用位置**：`/quiz-app`  
- **输出位置**：`dist`  
- **工作流**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文档PDF生成

```bash
npm install                    # 安装 docsify-to-pdf
npm run convert               # 从 docs 生成 PDF
```

### Docsify文档

```bash
npm install -g docsify-cli    # 全局安装 Docsify
docsify serve                 # 在 localhost:3000 上提供服务
```

### 项目特定构建

各项目目录可能有自己的构建流程：  
- Vue项目：`npm run build` 生成生产包  
- 静态项目：无构建步骤，直接提供文件  

## 拉取请求指南

### 标题格式

使用清晰描述改动范围的标题：  
- `[Quiz-app] 添加课程X的新测验`  
- `[Lesson-3] 修正养殖箱项目中的拼写错误`  
- `[Translation] 添加课程5的西班牙语翻译`  
- `[Docs] 更新设置说明`  

### 必需检查

提交PR前：  

1. **代码质量**：  
   - 在受影响项目目录运行 `npm run lint`  
   - 解决所有lint错误和警告  

2. **构建验证**：  
   - 运行 `npm run build`（如果适用）  
   - 确保无构建错误  

3. **链接校验**：  
   - 测试所有markdown链接  
   - 验证图片引用有效  

4. **内容审核**：  
   - 校对拼写和语法  
   - 确保代码示例正确且具有教学意义  
   - 核对翻译准确无误  

### 贡献要求

- 同意微软CLA（首次PR自动检查）  
- 遵守 [微软开源行为准则](https://opensource.microsoft.com/codeofconduct/)  
- 见 [CONTRIBUTING.md](./CONTRIBUTING.md) 获取详细指导  
- PR描述中引用相关issue编号（如适用）  

### 审核流程

- PR由维护者和社区评审  
- 优先保证教学清晰度  
- 代码示例应遵循最新最佳实践  
- 翻译需审查准确性和文化适宜性  

## 翻译系统

### 自动翻译

- 使用GitHub Actions和co-op-translator工作流  
- 自动翻译成50多种语言  
- 源文件位于主目录  
- 翻译文件存于`translations/{language-code}/`目录  

### 添加人工翻译改进

1. 定位到 `translations/{language-code}/` 下的文件  
2. 保持结构的同时进行改进  
3. 确保代码示例仍能正常运行  
4. 测试本地化的测验内容  

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

## 调试与故障排查

### 常见问题

**测验应用启动失败**：  
- 检查Node.js版本（建议v14及以上）  
- 删除 `node_modules` 和 `package-lock.json`，重新运行 `npm install`  
- 检查端口冲突（默认：Vite使用5173端口）  

**API服务器无法启动**：  
- 确保Node.js版本符合最低要求（node >=10）  
- 检查端口是否已被占用  
- 保证所有依赖已通过 `npm install` 安装  

**浏览器扩展无法加载**：  
- 确认manifest.json格式正确  
- 检查浏览器控制台错误  
- 按浏览器特定扩展安装说明操作  

**Python聊天项目问题**：  
- 确保已安装OpenAI包：`pip install openai`  
- 验证GITHUB_TOKEN环境变量是否设置  
- 检查GitHub模型访问权限  

**Docsify未提供文档服务**：  
- 全局安装docsify-cli：`npm install -g docsify-cli`  
- 从仓库根目录运行  
- 确认存在 `docs/_sidebar.md`  

### 开发环境提示

- HTML项目使用VS Code Live Server扩展  
- 安装ESLint和Prettier扩展保持格式一致  
- 使用浏览器开发者工具调试JavaScript  
- Vue项目安装Vue DevTools浏览器扩展  

### 性能考虑

- 50多种语言的翻译文件众多，完整克隆体积较大  
- 仅处理内容时使用浅克隆：`git clone --depth 1`  
- 处理英文内容时排除翻译搜索  
- 第一次运行构建较慢（npm install、Vite构建）  

## 安全注意事项

### 环境变量

- API密钥绝不可提交到仓库  
- 使用 `.env` 文件（已在 `.gitignore` 中）  
- 项目README中记录所需环境变量  

### Python项目

- 使用虚拟环境：`python -m venv venv`  
- 保持依赖更新  
- GitHub令牌权限应最小化  

### GitHub模型访问

- 需要个人访问令牌（PAT）  
- 令牌存储为环境变量  
- 绝不可提交令牌或凭证  

## 其他说明

### 目标受众

- 完全的网页开发初学者  
- 学生及自学者  
- 教师在课堂使用此课程  
- 内容注重无障碍和逐步技能提升  

### 教学理念

- 基于项目的学习方式  
- 频繁的知识检测（测验）  
- 动手编码练习  
- 真实案例应用  
- 先注重基础，再涉及框架  

### 仓库维护

- 活跃的学习者和贡献者社区  
- 定期更新依赖和内容  
- 维护者监控Issue和讨论  
- 翻译更新自动化通过GitHub Actions  

### 相关资源

- [微软学习模块](https://docs.microsoft.com/learn/)  
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)  
- 推荐学习者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)  
- 额外课程：生成式AI、数据科学、机器学习、物联网课程可用  

### 具体项目说明

详细项目说明请参见各自README：  
- `quiz-app/README.md` — Vue 3测验应用  
- `7-bank-project/README.md` — 具认证的银行应用  
- `5-browser-extension/README.md` — 浏览器扩展开发  
- `6-space-game/README.md` — 基于Canvas的游戏开发  
- `9-chat-project/README.md` — AI聊天助理项目  

### 单仓库结构

虽非传统monorepo，但此仓库包含多个独立项目：  
- 每个课程独立  
- 项目间无共享依赖  
- 可单独开发项目，不影响其他  
- 克隆完整仓库体验整个课程体系  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件使用 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们力求准确，但请注意自动翻译可能包含错误或不准确之处。应以原始语言的原文作为权威来源。对于重要信息，建议使用专业人工翻译。我们不对因使用本翻译而产生的任何误解或误释承担责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->