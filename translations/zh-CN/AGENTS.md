# AGENTS.md

## 项目概述

这是一个面向初学者教授网页开发基础知识的教育课程仓库。该课程是由微软云推广者开发的为期12周的综合课程，包含24个涵盖JavaScript、CSS和HTML的实践课程。

### 关键组成部分

- **教育内容**：24节结构化课程，按项目模块组织
- **实践项目**：生态瓶项目、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器及 AI 聊天助手
- **互动测验**：48个测验，每个3个问题（课前/课后评估）
- **多语言支持**：通过 GitHub Actions 自动翻译为50多种语言
- **技术栈**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于 AI 项目）

### 架构

- 以课程为基础结构的教育仓库
- 每节课程文件夹包含 README、代码示例和解决方案
- 独立项目存放在单独目录中（quiz-app、各种课程项目）
- 使用 GitHub Actions（co-op-translator）实现翻译系统
- 文档通过 Docsify 提供，并可导出为 PDF

## 设置命令

此仓库主要用于教育内容的学习。针对特定项目的操作：

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

### 银行项目 API（Node.js + Express）

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
# 遵循浏览器特定的扩展加载说明
```

### 太空游戏项目

```bash
cd 6-space-game/solution
npm install
# 在浏览器中打开 index.html 或使用实时服务器
```

### 聊天项目（Python 后端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 设置 GITHUB_TOKEN 环境变量
python api.py
```

## 开发工作流程

### 内容贡献者

1. **Fork 仓库**到你的 GitHub 账户
2. **克隆你的 Fork**到本地
3. **创建新的分支**进行更改
4. 修改课程内容或代码示例
5. 在相关项目目录测试代码修改
6. 提交符合贡献指南的拉取请求

### 学习者

1. Fork 或克隆仓库
2. 按顺序浏览课程目录
3. 阅读每节课程的 README 文件
4. 在 https://ff-quizzes.netlify.app/web/ 完成课前测验
5. 完成课程文件夹中的代码示例
6. 完成作业和挑战
7. 参加课后测验

### 实时开发

- **文档**：在根目录运行 `docsify serve`（端口3000）
- **测验应用**：在 quiz-app 目录运行 `npm run dev`
- **项目**：使用 VS Code Live Server 扩展运行 HTML 项目
- **API 项目**：在对应 API 目录运行 `npm start`

## 测试说明

### 测验应用测试

```bash
cd quiz-app
npm run lint       # 检查代码风格问题
npm run build      # 验证构建是否成功
```

### 银行 API 测试

```bash
cd 7-bank-project/api
npm run lint       # 检查代码风格问题
node server.js     # 验证服务器启动无错误
```

### 一般测试方法

- 这是教育仓库，无全面自动测试
- 手动测试重点：
  - 代码示例无错误运行
  - 文档链接正确
  - 项目构建成功
  - 示例符合最佳实践

### 提交前检查

- 在包含 package.json 的目录运行 `npm run lint`
- 验证 markdown 链接有效
- 浏览器或 Node.js 中测试代码示例
- 确认翻译结构无误

## 代码风格指南

### JavaScript

- 使用现代 ES6+ 语法
- 遵循项目提供的标准 ESLint 配置
- 使用有意义的变量名和函数名，便于教学
- 添加注释解释概念，方便学习者
- 按配置使用 Prettier 格式化

### HTML/CSS

- 使用语义化 HTML5 元素
- 响应式设计原则
- 清晰的类命名规范
- 使用注释解释 CSS 技巧，便于理解

### Python

- 遵循 PEP 8 规范
- 提供清晰易懂的代码示例
- 在有助学习的地方使用类型提示

### Markdown 文档

- 清晰的标题层级
- 代码块指定语言
- 链接附带额外资源
- 在 `images/` 目录中存放截图和图片
- 图片附带 alt 文本便于无障碍访问

### 文件组织

- 课程按照数字顺序编号（1-getting-started-lessons，2-js-basics 等）
- 每个项目包含 `solution/` 及通常的 `start/` 或 `your-work/` 目录
- 图片存放在对应课程的 `images/` 文件夹
- 翻译文件存放结构为 `translations/{language-code}/`

## 构建与部署

### 测验应用部署（Azure 静态网页应用）

quiz-app 已配置为 Azure 静态网页应用部署：

```bash
cd quiz-app
npm run build      # 创建 dist/ 文件夹
# 通过 GitHub Actions 工作流在推送到 main 时部署
```

Azure 静态网页应用配置：
- **应用位置**：`/quiz-app`
- **输出位置**：`dist`
- **工作流**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文档 PDF 生成

```bash
npm install                    # 安装 docsify-to-pdf
npm run convert               # 从 docs 生成 PDF
```

### Docsify 文档

```bash
npm install -g docsify-cli    # 全局安装 Docsify
docsify serve                 # 在 localhost:3000 上提供服务
```

### 项目特定构建

各项目目录可能有自己的构建流程：
- Vue 项目：`npm run build` 生成生产包
- 静态项目：无构建步骤，直接提供文件

## 拉取请求指南

### 标题格式

使用明确描述更改范围的标题：
- `[Quiz-app] 为第 X 课添加新测验`
- `[Lesson-3] 修正生态瓶项目中的拼写错误`
- `[Translation] 添加第5课的西班牙语翻译`
- `[Docs] 更新安装说明`

### 必须检查项

提交 PR 前：

1. **代码质量**：
   - 在受影响项目目录运行 `npm run lint`
   - 修复所有 lint 错误和警告

2. **构建验证**：
   - 如适用，运行 `npm run build`
   - 确保无构建错误

3. **链接验证**：
   - 测试所有 markdown 链接
   - 确认图片引用有效

4. **内容审核**：
   - 校对拼写和语法
   - 确保代码示例正确且有教育意义
   - 核实翻译保持原意

### 贡献要求

- 同意微软 CLA（首次 PR 自动检查）
- 遵守 [微软开源行为准则](https://opensource.microsoft.com/codeofconduct/)
- 详见 [CONTRIBUTING.md](./CONTRIBUTING.md) 指南
- PR 描述中引用相关 issue（如有）

### 审查流程

- PR 由维护者和社区审核
- 优先保证教育清晰度
- 代码示例应遵循当前最佳实践
- 翻译审核准确且符合文化背景

## 翻译系统

### 自动翻译

- 利用 GitHub Actions 和 co-op-translator 工作流
- 自动翻译成50多种语言
- 源文件位于主目录
- 翻译文件保存在 `translations/{language-code}/` 目录

### 添加手动翻译改进

1. 定位到 `translations/{language-code}/` 目录文件
2. 在保持结构的情况下进行改进
3. 确保代码示例功能正常
4. 测试本地化测验内容

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

## 调试与故障排除

### 常见问题

**测验应用无法启动**：
- 检查 Node.js 版本（建议 v14+）
- 删除 `node_modules` 和 `package-lock.json`，重新运行 `npm install`
- 检查端口冲突（默认：Vite 使用5173端口）

**API 服务器无法启动**：
- 确认 Node.js 版本符合最低要求（node >=10）
- 检查端口是否被占用
- 确保依赖已通过 `npm install` 安装

**浏览器扩展无法加载**：
- 确认 manifest.json 格式正确
- 查看浏览器控制台错误
- 按照浏览器特定扩展安装说明操作

**Python 聊天项目问题**：
- 确保安装 OpenAI 包：`pip install openai`
- 确认 GITHUB_TOKEN 环境变量已设置
- 检查 GitHub Models 访问权限

**Docsify 未能提供文档**：
- 全局安装 docsify-cli：`npm install -g docsify-cli`
- 在仓库根目录运行
- 确认存在 `docs/_sidebar.md`

### 开发环境建议

- 使用带 Live Server 扩展的 VS Code 运行 HTML 项目
- 安装 ESLint 和 Prettier 扩展保持一致格式
- 利用浏览器开发工具调试 JavaScript
- Vue 项目安装 Vue DevTools 浏览器扩展

### 性能考虑

- 多语言（50+）翻译文件数量大，全量克隆较大
- 只处理内容时可使用浅克隆：`git clone --depth 1`
- 在处理英文内容时排除翻译目录搜索
- 初次运行（npm install、Vite 构建）可能较慢

## 安全注意事项

### 环境变量

- API 密钥绝不可提交到仓库
- 使用 `.env` 文件（已列入 `.gitignore`）
- 在项目 README 中记录必需的环境变量

### Python 项目

- 使用虚拟环境：`python -m venv venv`
- 保持依赖更新
- GitHub 令牌应具备最小权限

### GitHub Models 访问

- 需要个人访问令牌 (PAT)
- 令牌应存储为环境变量
- 切勿提交令牌或凭证

## 其他说明

### 目标受众

- 完全的网页开发初学者
- 学生及自学者
- 在课堂使用课程的教师
- 内容针对无障碍和逐步技能提升设计

### 教育理念

- 基于项目的学习方法
- 频繁知识检测（测验）
- 实践编码练习
- 真实场景应用示例
- 强调基础知识，先于框架学习

### 仓库维护

- 活跃的学习者和贡献者社区
- 定期更新依赖和内容
- 维护者监控 issue 和讨论
- 通过 GitHub Actions 自动更新翻译

### 相关资源

- [Microsoft Learn 模块](https://docs.microsoft.com/learn/)
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)
- 推荐学习者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 额外课程：生成式 AI、数据科学、机器学习、物联网课程可用

### 特定项目操作指南

查看以下 README 获取详细项目说明：
- `quiz-app/README.md` - Vue 3 测验应用
- `7-bank-project/README.md` - 带身份验证的银行应用
- `5-browser-extension/README.md` - 浏览器扩展开发
- `6-space-game/README.md` - 基于 Canvas 的游戏开发
- `9-chat-project/README.md` - AI 聊天助手项目

### 单体仓库结构

虽非传统单体仓库，本仓库包含多个独立项目：
- 每节课程自包含
- 项目之间不共享依赖
- 可独立开发项目，互不影响
- 克隆完整仓库可体验全课程

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：
本文件由 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻译而成。尽管我们力求准确，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文件应被视为权威版本。对于重要信息，建议使用专业人工翻译。因使用本翻译内容而产生的任何误解或误释，我们概不负责。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->