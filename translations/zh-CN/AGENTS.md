# AGENTS.md

## 项目概述

这是一个面向初学者教授网页开发基础的教学课程代码库。该课程由微软云推广者开发，是一个为期12周的综合课程，包括24个涵盖JavaScript、CSS和HTML的实践课程。

### 主要组成部分

- <strong>教学内容</strong>：24节结构化课程，组织成基于项目的模块
- <strong>实践项目</strong>：生态瓶、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器和AI聊天助手
- <strong>互动测验</strong>：48个测验，每个包含3个问题（课前/课后评估）
- <strong>多语言支持</strong>：通过GitHub Actions自动翻译50多种语言
- <strong>技术栈</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于AI项目）

### 架构

- 基于课程结构的教育代码库
- 每节课的文件夹包含README、代码示例和解决方案
- 独立项目放在单独目录（quiz-app，各个课程项目）
- 使用GitHub Actions（co-op-translator）进行翻译系统
- 文档通过Docsify服务并提供PDF版本

## 安装命令

该代码库主要用于学习内容浏览。若要使用特定项目：

### 主代码库设置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App 设置（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 启动开发服务器
npm run build      # 生成生产版本
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
# 遵循特定浏览器的扩展加载说明
```

### 太空游戏项目

```bash
cd 6-space-game/solution
npm install
# 在浏览器中打开 index.html 或使用 Live Server
```

### 聊天项目（Python后端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 设置 GITHUB_TOKEN 环境变量
python api.py
```

## 开发工作流程

### 内容贡献者指南

1. <strong>Fork代码库</strong>到你的GitHub账号
2. <strong>克隆你的fork</strong>到本地
3. <strong>创建新分支</strong>进行修改
4. 修改课程内容或代码示例
5. 在相关项目目录测试代码更改
6. 按贡献指南提交拉取请求

### 学习者指引

1. Fork或克隆代码库
2. 按顺序进入课程目录
3. 阅读每节课的README文件
4. 在 https://ff-quizzes.netlify.app/web/ 完成课前测验
5. 通过代码示例学习各课程内容
6. 完成作业和挑战
7. 参与课后测验

### 实时开发

- <strong>文档</strong>：在根目录运行 `docsify serve`（端口3000）
- **Quiz App**：在 quiz-app 目录运行 `npm run dev`
- <strong>项目</strong>：使用VS Code Live Server扩展运行HTML项目
- **API项目**：在各API目录运行 `npm start`

## 测试说明

### Quiz App 测试

```bash
cd quiz-app
npm run lint       # 检查代码风格问题
npm run build      # 验证构建成功
```

### 银行API测试

```bash
cd 7-bank-project/api
npm run lint       # 检查代码风格问题
node server.js     # 验证服务器启动无错误
```

### 一般测试方法

- 这是教育代码库，没有完整自动化测试
- 手动测试重点：
  - 代码示例无错误运行
  - 文档链接正常
  - 项目可成功构建
  - 示例遵循最佳实践

### 提交前检查

- 在有 package.json 的目录运行 `npm run lint`
- 验证markdown链接有效
- 在浏览器或Node.js中测试代码示例
- 确认翻译保留正确结构

## 代码风格指南

### JavaScript

- 使用现代ES6+语法
- 遵循项目中提供的ESLint标准配置
- 使用有意义的变量和函数名，便于教学理解
- 添加注释解释概念
- 在配置Prettier的地方格式化代码

### HTML/CSS

- 使用语义化HTML5元素
- 采用响应式设计原则
- 规范的类命名
- 注释CSS技术以便教学

### Python

- 遵循PEP 8风格指南
- 清晰、教学友好的代码示例
- 在有助于学习的地方使用类型提示

### Markdown文档

- 清晰的标题层级结构
- 指定语言的代码块
- 额外资源链接
- 放在 `images/` 目录内的截图和图片
- 图片的替代文本，方便无障碍访问

### 文件组织

- 课程编号有序，例如 1-getting-started-lessons，2-js-basics 等
- 每个项目含有 `solution/` 文件夹，通常还有 `start/` 或 `your-work/`
- 图片存储在课程对应的 `images/` 文件夹
- 翻译文件存放于 `translations/{language-code}/` 结构

## 构建与部署

### Quiz App 部署（Azure Static Web Apps）

quiz-app 已配置为部署到 Azure Static Web Apps：

```bash
cd quiz-app
npm run build      # 创建 dist/ 文件夹
# 在推送到 main 时通过 GitHub Actions 工作流进行部署
```

Azure Static Web Apps 配置：
- <strong>应用位置</strong>：`/quiz-app`
- <strong>输出位置</strong>：`dist`
- <strong>工作流</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文档PDF生成

```bash
npm install                    # 安装 docsify-to-pdf
npm run convert               # 从 docs 生成 PDF
```

### Docsify 文档

```bash
npm install -g docsify-cli    # 全局安装 Docsify
docsify serve                 # 在 localhost:3000 上提供服务
```

### 各项目特定构建

每个项目目录可能有自己的构建流程：
- Vue项目：运行 `npm run build` 生成生产包
- 静态项目：无构建步骤，直接提供文件

## 拉取请求指南

### 标题格式

使用清晰且描述性标题说明修改区域：
- `[Quiz-app] 新增第X课测验`
- `[Lesson-3] 修正生态瓶项目中的拼写错误`
- `[Translation] 添加第5课西班牙语翻译`
- `[Docs] 更新安装说明`

### 必须检查项

提交PR前：

1. <strong>代码质量</strong>：
   - 在相关项目目录运行 `npm run lint`
   - 解决所有lint错误和警告

2. <strong>构建验证</strong>：
   - 若适用，运行 `npm run build`
   - 确保无构建错误

3. <strong>链接有效性</strong>：
   - 测试所有markdown链接
   - 确认图片引用正常

4. <strong>内容审查</strong>：
   - 校对拼写和语法
   - 确认代码示例正确且适合教学
   - 确认翻译保持原意

### 贡献要求

- 同意微软CLA（首次PR自动检查）
- 遵守[微软开源行为准则](https://opensource.microsoft.com/codeofconduct/)
- 详规见 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 若有，PR描述中引用issue编号

### 审核流程

- 由维护者和社区审核PR
- 优先保证教学清晰度
- 代码示例应遵循最新最佳实践
- 翻译需审校准确且文化适配

## 翻译系统

### 自动翻译

- 使用GitHub Actions与co-op-translator工作流
- 自动翻译成50多种语言
- 源文件保存在主目录
- 翻译文件在 `translations/{language-code}/` 目录

### 添加人工翻译改进

1. 定位到 `translations/{language-code}/` 文件
2. 在保留结构的前提下进行改进
3. 确保代码示例仍然可用
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

**Quiz app 启动失败**：
- 检查Node.js版本（建议v14+）
- 删除 `node_modules` 和 `package-lock.json`，重新运行 `npm install`
- 检查端口冲突（默认Vite使用5173端口）

**API服务器无法启动**：
- 确认Node.js版本符合最低要求（node >=10）
- 检查端口是否被占用
- 确保运行了 `npm install` 安装所有依赖

<strong>浏览器扩展加载失败</strong>：
- 验证 manifest.json 格式正确
- 查看浏览器控制台是否有错误
- 参考浏览器特定扩展安装说明

**Python聊天项目问题**：
- 确保已安装OpenAI包：`pip install openai`
- 确认已设置 GITHUB_TOKEN 环境变量
- 检查GitHub Models访问权限

**Docsify不提供文档服务**：
- 全局安装 docsify-cli：`npm install -g docsify-cli`
- 从仓库根目录运行
- 确认 `docs/_sidebar.md` 文件存在

### 开发环境建议

- 使用带有Live Server扩展的VS Code处理HTML项目
- 安装ESLint和Prettier扩展实现统一格式
- 使用浏览器开发工具调试JavaScript
- Vue项目安装Vue DevTools浏览器扩展

### 性能考虑

- 有大量翻译文件（50+语言），完整克隆体积较大
- 如只修改内容，建议使用浅克隆：`git clone --depth 1`
- 处理英语内容时排除翻译文件搜索
- 构建流程首次运行可能较慢（npm安装、Vite构建）

## 安全注意事项

### 环境变量

- API密钥绝不可提交到仓库
- 使用 `.env` 文件（已列入 `.gitignore`）
- 项目README中说明必要的环境变量

### Python项目

- 使用虚拟环境：`python -m venv venv`
- 保持依赖更新
- GitHub令牌需最低权限原则

### GitHub Models访问

- 需要个人访问令牌（PAT）
- 将令牌存储为环境变量
- 切勿提交令牌或凭据

## 其他说明

### 目标群体

- 完全初学者的网页开发学习者
- 学生和自学者
- 在课堂上使用该课程的教师
- 内容注重无障碍性和循序渐进技能建设

### 教学理念

- 基于项目的学习方法
- 频繁的知识检测（测验）
- 实践编码练习
- 真实应用案例示范
- 先掌握基础，再学框架

### 代码库维护

- 活跃的学习者和贡献者社区
- 定期更新依赖和课程内容
- 维护者监控issue和讨论
- 通过GitHub Actions自动更新翻译

### 相关资源

- [微软Learn学习模块](https://docs.microsoft.com/learn/)
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)
- 推荐学习者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他课程：生成式AI、数据科学、机器学习、物联网课程

### 具体项目使用

查看各项目 README 获取详细说明：
- `quiz-app/README.md` - Vue 3测验应用
- `7-bank-project/README.md` - 带身份验证的银行应用
- `5-browser-extension/README.md` - 浏览器扩展开发
- `6-space-game/README.md` - 基于Canvas的游戏开发
- `9-chat-project/README.md` - AI聊天助手项目

### Monorepo结构

虽然不是传统monorepo，该代码库包含多个独立项目：
- 每节课内容独立完整
- 各项目不共享依赖
- 可独立开发各个项目，互不影响
- 克隆整个代码库体验完整课程内容

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件使用 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻译而成。虽然我们力求准确，但请注意自动翻译可能包含错误或不准确之处。原始语言的原始文件应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用本翻译而引起的任何误解或误释承担责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->