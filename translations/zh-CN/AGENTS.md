# AGENTS.md

## 项目概述

这是一个面向初学者教授 Web 开发基础的教育课程仓库。该课程是由微软云倡导者开发的一个综合性 12 周课程，包含 24 个涵盖 JavaScript、CSS 和 HTML 的实践课题。

### 关键组成部分

- **教育内容**：24 节结构化课程，按项目模块组织
- **实践项目**：生态缸、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器和 AI 聊天助手
- **互动测验**：48 个测验，每个包含 3 个问题（课前/课后评估）
- **多语言支持**：通过 GitHub Actions 自动翻译至 50 多种语言
- **技术栈**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于 AI 项目）

### 架构

- 以课程为基础结构的教育仓库
- 每节课文件夹包含 README、代码示例和解决方案
- 独立项目分别存放在单独目录（quiz-app，各种课程项目）
- 使用 GitHub Actions（co-op-translator）进行翻译系统
- 文档通过 Docsify 提供，并可生成 PDF

## 安装命令

此仓库主要用于教育内容的学习。若需操作特定项目：

### 主仓库安装

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 测验应用安装（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 启动开发服务器
npm run build      # 生成生产环境构建
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
# 遵循特定浏览器的扩展加载说明
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

## 开发流程

### 内容贡献者指引

1. **Fork 仓库** 到你的 GitHub 账户
2. **本地克隆你的 Fork**
3. **创建新分支** 用于更改
4. 修改课程内容或代码示例
5. 在相关项目目录中测试代码修改
6. 按贡献指南提交拉取请求

### 学习者指引

1. Fork 或克隆仓库
2. 按顺序进入课程目录
3. 阅读每节课程的 README 文件
4. 完成课前测验：https://ff-quizzes.netlify.app/web/
5. 按课程目录进行代码练习
6. 完成作业和挑战
7. 参加课后测验

### 实时开发

- **文档**：在根目录运行 `docsify serve`（端口 3000）
- **测验应用**：在 quiz-app 目录运行 `npm run dev`
- **项目**：HTML 项目使用 VS Code Live Server 插件
- **API 项目**：在对应 API 目录运行 `npm start`

## 测试说明

### 测验应用测试

```bash
cd quiz-app
npm run lint       # 检查代码风格问题
npm run build      # 验证构建成功
```

### 银行 API 测试

```bash
cd 7-bank-project/api
npm run lint       # 检查代码风格问题
node server.js     # 验证服务器是否无错误启动
```

### 通用测试方法

- 这是一个教育仓库，没有完整的自动化测试
- 手动测试重点包括：
  - 代码示例无报错运行
  - 文档中的链接工作正常
  - 项目构建成功完成
  - 示例符合最佳实践

### 提交前检查

- 在含 package.json 的目录运行 `npm run lint`
- 验证 markdown 链接有效
- 在浏览器或 Node.js 中测试代码示例
- 确认翻译保持结构完整

## 代码规范指南

### JavaScript

- 使用现代 ES6+ 语法
- 遵循项目中提供的标准 ESLint 配置
- 使用有意义的变量和函数名，便于教学
- 添加注释解释概念，帮助学习者理解
- 配置 Prettier 的地方使用其格式化

### HTML/CSS

- 使用语义化 HTML5 元素
- 遵循响应式设计原则
- 清晰的类命名规范
- 添加注释解释 CSS 技巧，方便学习

### Python

- 遵循 PEP 8 风格指南
- 代码简明易懂，适合教学
- 适当使用类型提示，方便学习

### Markdown 文档

- 清晰的标题层级
- 代码块注明语言
- 提供相关资源链接
- 在 `images/` 目录中放置截图和图片
- 图片包含 alt 文本以便无障碍访问

### 文件组织

- 课程按序号命名（1-getting-started-lessons，2-js-basics 等）
- 每个项目包含 `solution/`，通常还有 `start/` 或 `your-work/` 等目录
- 课程特定图片放在该课程的 `images/` 文件夹
- 翻译文件存放于 `translations/{language-code}/` 结构中

## 构建与部署

### 测验应用部署（Azure 静态 Web 应用）

quiz-app 配置用于 Azure 静态 Web 应用部署：

```bash
cd quiz-app
npm run build      # 创建 dist/ 文件夹
# 在推送到 main 时通过 GitHub Actions 工作流部署
```

Azure 静态 Web 应用配置：
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
docsify serve                 # 在 localhost:3000 上托管
```

### 项目特定构建

各项目目录可能有自己的构建流程：
- Vue 项目：`npm run build` 创建生产版本
- 静态项目：无构建步骤，直接提供文件

## 拉取请求规范

### 标题格式

使用清晰描述改动范围的标题：
- `[Quiz-app] 添加第 X 课新测验`
- `[Lesson-3] 修正生态缸项目错别字`
- `[Translation] 添加第 5 课西班牙语翻译`
- `[Docs] 更新安装说明`

### 必要检查

提交 PR 前：

1. **代码质量**：
   - 在受影响项目目录运行 `npm run lint`
   - 修复所有 lint 错误和警告

2. **构建验证**：
   - 如有需要，运行 `npm run build`
   - 确保无构建错误

3. **链接验证**：
   - 测试所有 markdown 链接
   - 验证图片引用有效

4. **内容审查**：
   - 校对拼写和语法
   - 确保代码示例正确且具有教学价值
   - 校验翻译保持原始含义

### 贡献要求

- 同意微软 CLA（首次 PR 会自动检查）
- 遵循 [微软开源行为准则](https://opensource.microsoft.com/codeofconduct/)
- 详情见 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 若有相关问题，请在 PR 描述中引用

### 审核流程

- PR 由维护者和社区审查
- 以教育清晰度为优先
- 代码示例需遵循当前最佳实践
- 翻译需审校确保准确及文化适宜

## 翻译系统

### 自动翻译

- 使用 GitHub Actions 的 co-op-translator 工作流
- 自动翻译成 50 多种语言
- 源文件位于主目录
- 翻译文件存于 `translations/{language-code}/` 目录

### 添加人工翻译改进

1. 定位到 `translations/{language-code}/` 下的文件
2. 保持结构的同时进行改进
3. 确保代码示例依然可用
4. 测试本地化测验内容

### 翻译元数据

翻译文件包含元数据头部：
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

**测验应用启动失败**：
- 检查 Node.js 版本（建议 v14+）
- 删除 `node_modules` 和 `package-lock.json`，重新运行 `npm install`
- 检查端口冲突（默认：Vite 使用端口 5173）

**API 服务器无法启动**：
- 确认 Node.js 版本满足最低要求（node >=10）
- 检查端口是否被占用
- 确认依赖已通过 `npm install` 安装完整

**浏览器扩展无法加载**：
- 确认 manifest.json 格式正确
- 检查浏览器控制台是否有错误
- 遵循浏览器插件安装说明

**Python 聊天项目问题**：
- 确保已安装 OpenAI 包：`pip install openai`
- 确认 GITHUB_TOKEN 环境变量已设置
- 检查 GitHub Models 访问权限

**Docsify 无法提供文档**：
- 全局安装 docsify-cli：`npm install -g docsify-cli`
- 在仓库根目录运行
- 确认存在 `docs/_sidebar.md`

### 开发环境建议

- 使用 VS Code 及 Live Server 插件进行 HTML 项目开发
- 安装 ESLint 和 Prettier 插件以保持格式统一
- 使用浏览器开发者工具调试 JavaScript
- Vue 项目安装 Vue DevTools 浏览器插件

### 性能注意事项

- 翻译文件众多（50 多种语言），完整克隆体积较大
- 若仅工作于内容，可使用浅克隆：`git clone --depth 1`
- 在处理英文内容时可排除翻译文件搜索
- 初次运行构建可能较慢（npm install、Vite 构建）

## 安全考虑

### 环境变量

- API 密钥绝不可提交到仓库
- 使用 `.env` 文件（已在 `.gitignore` 中）
- 在项目 README 中记录必需的环境变量

### Python 项目

- 推荐使用虚拟环境：`python -m venv venv`
- 保持依赖更新
- GitHub 令牌应具备最低必要权限

### GitHub Models 访问

- 需使用个人访问令牌 (PAT)
- 令牌应存储为环境变量
- 切勿提交令牌或凭据

## 其他说明

### 目标受众

- 完全零基础的 Web 开发初学者
- 学生和自学者
- 在课堂使用此课程的教师
- 内容设计注重无障碍及逐步技能提升

### 教育理念

- 项目驱动学习方法
- 频繁知识检测（测验）
- 亲身编码实践
- 真实应用示例
- 注重基础知识，先学基础再学框架

### 仓库维护

- 活跃的学习者和贡献者社区
- 定期更新依赖和内容
- 维护人员监控问题和讨论
- 通过 GitHub Actions 自动更新翻译

### 相关资源

- [Microsoft Learn 模块](https://docs.microsoft.com/learn/)
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)
- 推荐学习者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 还提供生成式 AI、数据科学、机器学习、物联网课程

### 特定项目操作

关于各项目详细说明，请参考对应 README 文件：
- `quiz-app/README.md` - Vue 3 测验应用
- `7-bank-project/README.md` - 具有身份验证的银行应用
- `5-browser-extension/README.md` - 浏览器扩展开发
- `6-space-game/README.md` - 基于 Canvas 的游戏开发
- `9-chat-project/README.md` - AI 聊天助手项目

### Monorepo 结构

虽然不是传统的 Monorepo，本仓库包含多个独立项目：
- 每节课程独立完整
- 项目之间不共享依赖
- 可单独开发项目，互不影响
- 克隆整个仓库即可获得完整课程体验

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件由人工智能翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻译。尽管我们力求准确，但请注意自动翻译可能存在错误或不准确之处。原始文件的母语版本应被视为权威来源。对于重要信息，建议采用专业人工翻译。我们不对因使用本翻译而产生的任何误解或误释承担责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->