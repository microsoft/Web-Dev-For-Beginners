# AGENTS.md

## 项目概述

这是一个面向初学者的网页开发基础教学课程仓库。该课程由微软云推广者开发，是一个为期12周的综合课程，包含24个涵盖JavaScript、CSS和HTML的实践课程。

### 关键组成部分

- **教学内容**：24个结构化课程，按项目模块组织
- **实践项目**：生态瓶、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器和AI聊天助手
- **互动测验**：48个测验，每个包含3个问题（课前/课后评估）
- **多语言支持**：通过GitHub Actions自动翻译至50多种语言
- **技术栈**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于AI项目）

### 架构

- 基于课程结构的教育仓库
- 每个课程文件夹包含README、代码示例和解决方案
- 独立项目位于单独目录（quiz-app，各种课程项目）
- 使用GitHub Actions（co-op-translator）进行翻译系统
- 通过Docsify托管文档，并提供PDF格式

## 安装命令

本仓库主要用于学习内容浏览。针对具体项目操作：

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
npm run build      # 构建生产环境
npm run lint       # 运行 ESLint
```

### 银行项目API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # 启动 API 服务器
npm run lint       # 运行 ESLint
npm run format     # 使用 Prettier 格式化
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

### 聊天项目（Python后端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 设置 GITHUB_TOKEN 环境变量
python api.py
```

## 开发工作流程

### 内容贡献者指南

1. **Fork 仓库** 到你的GitHub账户
2. **克隆你的fork**到本地
3. **新建分支**用于变更
4. 修改课程内容或代码示例
5. 在相关项目目录测试代码更改
6. 提交PR并遵循贡献指南

### 学习者指导

1. Fork或克隆仓库
2. 按顺序进入课程目录
3. 阅读每个课程的README文件
4. 在 https://ff-quizzes.netlify.app/web/ 完成课前测验
5. 按课件操作代码示例
6. 完成作业和挑战
7. 参加课后测验

### 实时开发

- **文档**：根目录运行 `docsify serve` （端口3000）
- **测验应用**：在quiz-app目录运行 `npm run dev`
- **项目**：使用VS Code Live Server扩展启动HTML项目
- **API项目**：运行各自API目录中的 `npm start`

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
node server.js     # 验证服务器启动无误
```

### 常规测试方法

- 本仓库为教育用途，无全面自动化测试
- 手动测试侧重于：
  - 代码示例能正常运行无报错
  - 文档中的链接有效
  - 项目构建成功
  - 示例符合最佳实践

### 提交前检查

- 在含package.json目录运行 `npm run lint`
- 验证Markdown链接有效
- 在浏览器或Node.js中测试代码示例
- 确认翻译结构完整

## 代码风格指南

### JavaScript

- 使用现代ES6+语法
- 遵循项目中的ESLint标准配置
- 变量和函数命名应清晰易懂，便于教学
- 添加注释解释概念
- 使用配置好的Prettier进行格式化

### HTML/CSS

- 语义化的HTML5元素
- 响应式设计原则
- 清晰的类命名规范
- CSS注释帮助学习者理解技术细节

### Python

- 遵循PEP 8规范
- 清晰易懂的教学代码示例
- 在适当位置添加类型提示

### Markdown文档

- 结构清晰的标题层级
- 指定语言的代码块
- 提供额外资源链接
- 在 `images/` 目录中包含截图和图片
- 图片提供alt文本以增强无障碍访问

### 文件组织

- 课程按序号命名（1-getting-started-lessons，2-js-basics 等）
- 每个项目包含 `solution/` ，通常还有 `start/` 或 `your-work/` 目录
- 图片存放在对应课程的 `images/` 文件夹
- 翻译文件位于 `translations/{language-code}/` 结构内

## 构建与部署

### 测验应用部署（Azure 静态网页应用）

quiz-app 配置用于 Azure 静态网页应用部署：

```bash
cd quiz-app
npm run build      # 创建 dist/ 文件夹
# 在推送到 main 时通过 GitHub Actions 工作流程进行部署
```

Azure静态网页应用配置：
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

### 各项目构建

各项目目录可能有独立构建流程：
- Vue项目：`npm run build`生成生产包
- 静态项目：无构建步骤，直接服务文件

## Pull Request指南

### 标题格式

使用清晰描述变更区域的标题：
- `[Quiz-app] 新增第X课测验`
- `[Lesson-3] 修正生态瓶项目中的错字`
- `[Translation] 为第5课添加西班牙语翻译`
- `[Docs] 更新安装说明`

### 必要检查

提交PR前：

1. **代码质量**：
   - 在相关项目中运行 `npm run lint`
   - 修复所有lint错误和警告

2. **构建验证**：
   - 如有，运行 `npm run build`
   - 确保无构建错误

3. **链接校验**：
   - 测试所有Markdown链接
   - 验证图片引用正常

4. **内容审查**：
   - 拼写和语法检查
   - 确认代码示例正确且具教学意义
   - 翻译保持原意准确

### 贡献要求

- 同意微软CLA（自动检查首次PR时）
- 遵守[微软开源行为准则](https://opensource.microsoft.com/codeofconduct/)
- 详见 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 若有，PR描述中引用关联Issue号

### 审核流程

- 维护者与社区共同审核PR
- 优先考虑教学清晰度
- 代码示例应遵循当前最佳实践
- 翻译需确保准确和文化适应性

## 翻译系统

### 自动翻译

- 使用GitHub Actions和co-op-translator工作流
- 自动支持50多种语言翻译
- 源文件位于主目录
- 翻译文件存放于 `translations/{language-code}/`

### 手动翻译改进

1. 在 `translations/{language-code}/` 找到对应文件
2. 改进时保持文件结构完整
3. 确保代码示例保持可用
4. 测试本地化测验内容

### 翻译元数据

翻译文件带有元数据头部：
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
- 检查Node.js版本（推荐v14以上）
- 删除 `node_modules` 和 `package-lock.json`，重新运行 `npm install`
- 检查端口冲突（Vite默认使用5173端口）

**API服务器无法启动**：
- 验证Node.js版本满足最低要求（node >=10）
- 端口是否已被占用
- 确保所有依赖已安装（npm install）

**浏览器扩展无法加载**：
- 确认manifest.json格式正确
- 浏览器控制台检查错误信息
- 遵循浏览器特定的扩展安装说明

**Python聊天项目问题**：
- 确保安装OpenAI包：`pip install openai`
- 环境变量GITHUB_TOKEN已设置
- 检查GitHub Models访问权限

**Docsify无法提供文档服务**：
- 全局安装docsify-cli：`npm install -g docsify-cli`
- 在仓库根目录运行
- 确认 `docs/_sidebar.md` 存在

### 开发环境建议

- 使用VS Code配合Live Server扩展进行HTML项目开发
- 安装ESLint和Prettier扩展保持代码格式统一
- 使用浏览器开发者工具调试JavaScript
- Vue项目建议安装Vue DevTools浏览器扩展

### 性能考虑

- 由于50多种语言的翻译文件较多，完整克隆体积较大
- 仅操作内容时建议浅克隆：`git clone --depth 1`
- 工作时排除翻译文件的搜索以提升效率
- 初次运行npm install和Vite构建速度较慢

## 安全注意事项

### 环境变量

- API密钥绝不可提交至代码仓库
- 使用 `.env` 文件（已添加至 `.gitignore`）
- 相关环境变量在项目README中说明

### Python项目

- 使用虚拟环境：`python -m venv venv`
- 保持依赖更新
- GitHub令牌需最低权限原则

### GitHub Models访问

- 需要个人访问令牌（PAT）
- 令牌需存储为环境变量
- 切勿提交令牌或凭据

## 附加说明

### 目标受众

- 完全的网页开发初学者
- 学生和自学者
- 在课堂使用该课程的教师
- 内容设计注重无障碍和循序渐进

### 教育理念

- 项目驱动学习
- 经常性知识检测（测验）
- 动手编码练习
- 真实世界应用案例
- 强调基础知识先于框架

### 仓库维护

- 活跃的学习者与贡献者社区
- 定期更新依赖和内容
- 维护者监控问题和讨论
- 通过GitHub Actions自动更新翻译

### 相关资源

- [Microsoft Learn模块](https://docs.microsoft.com/learn/)
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)
- 推荐学习者使用[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 还有生成式AI、数据科学、机器学习、物联网课程

### 具体项目操作

详细说明请参阅以下README文件：
- `quiz-app/README.md` - Vue 3测验应用
- `7-bank-project/README.md` - 带身份验证的银行应用
- `5-browser-extension/README.md` - 浏览器扩展开发
- `6-space-game/README.md` - 基于Canvas的游戏开发
- `9-chat-project/README.md` - AI聊天助手项目

### Monorepo结构

本仓库不是传统monorepo，但包含多个独立项目：
- 每个课程独立完整
- 项目依赖不共享
- 可单独开发，不影响其他项目
- 克隆整个仓库可体验完整课程体系

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件使用 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保准确性，但请注意自动翻译可能存在错误或不准确之处。原始文件的母语版本应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们不对因使用本翻译而产生的任何误解或误释承担责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->