# AGENTS.md

## 项目概述

这是一个面向初学者教授网页开发基础的教育课程仓库。该课程是由微软云倡导者开发的为期12周的综合课程，包含24个实践性课程，涵盖JavaScript、CSS和HTML。

### 关键组成部分

- **教育内容**：24个结构化课程，组织成基于项目的模块
- **实践项目**：生态瓶、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器和AI聊天助手
- **互动测验**：48个测验，每个包含3个问题（课前/课后评估）
- **多语言支持**：通过GitHub Actions自动翻译为50多种语言
- **技术栈**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于AI项目）

### 架构

- 以课程为基础结构的教育仓库
- 每个课程文件夹包含README、代码示例和解决方案
- 独立项目位于单独目录（quiz-app，各种课程项目）
- 使用GitHub Actions（co-op-translator）的翻译系统
- 通过Docsify提供文档并支持PDF格式

## 设置命令

本仓库主要用于教育内容的学习。若要使用具体项目：

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
npm run build      # 构建生产版本
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

### 内容贡献者

1. **Fork仓库**到您的GitHub账户
2. **克隆您的Fork**到本地
3. **创建新分支**进行更改
4. 修改课程内容或代码示例
5. 在相关项目目录测试代码更改
6. 按贡献指南提交拉取请求

### 学习者

1. Fork或克隆仓库
2. 顺序进入课程目录
3. 阅读每课的README文件
4. 在 https://ff-quizzes.netlify.app/web/ 完成课前测验
5. 学习课程文件夹中的代码示例
6. 完成作业和挑战
7. 参加课后测验

### 实时开发

- **文档服务**：在根目录运行 `docsify serve`（端口3000）
- **测验应用**：在quiz-app目录运行 `npm run dev`
- **项目**：HTML项目使用VS Code Live Server扩展
- **API项目**：在对应API目录运行 `npm start`

## 测试说明

### 测验应用测试

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

### 常规测试方法

- 这是一个以教育为主的仓库，没有全面自动化测试
- 手动测试重点：
  - 代码示例无错误运行
  - 文档中的链接正确有效
  - 项目构建成功完成
  - 示例遵循最佳实践

### 提交前检查

- 在含package.json的目录运行 `npm run lint`
- 验证Markdown链接有效
- 在浏览器或Node.js中测试代码示例
- 确认翻译结构正确无误

## 代码风格指南

### JavaScript

- 使用现代ES6+语法
- 遵循项目中提供的标准ESLint配置
- 使用有意义的变量和函数名，便于教学理解
- 添加注释解释概念
- 使用配置的Prettier格式化代码

### HTML/CSS

- 采用语义化HTML5元素
- 响应式设计原则
- 清晰的类命名规范
- 添加解释CSS技术的注释，利于教学

### Python

- 遵循PEP 8编码规范
- 清晰且教育性的代码示例
- 在适用处添加类型提示，方便学习

### Markdown文档

- 清晰的标题层级
- 带语言标注的代码块
- 链接至额外资源
- 在`images/`目录中存放截图和图片
- 为图片添加alt文本，确保无障碍

### 文件组织

- 课程按顺序编号（1-getting-started-lessons, 2-js-basics等）
- 每个项目有`solution/`，通常还有`start/`或`your-work/`目录
- 图片存放在对应课程的`images/`文件夹
- 翻译文件位于 `translations/{language-code}/` 结构

## 构建与部署

### 测验应用部署（Azure静态网页应用）

quiz-app配置为Azure静态网页应用部署：

```bash
cd quiz-app
npm run build      # 创建 dist/ 文件夹
# 在推送到 main 时通过 GitHub Actions 工作流部署
```

Azure静态网页应用配置：
- **应用位置**: `/quiz-app`
- **输出位置**: `dist`
- **工作流**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文档PDF生成

```bash
npm install                    # 安装 docsify-to-pdf
npm run convert               # 从 docs 生成 PDF
```

### Docsify文档

```bash
npm install -g docsify-cli    # 全局安装 Docsify
docsify serve                 # 在 localhost:3000 上服务
```

### 项目特定构建

各项目目录可能有自己的构建过程：
- Vue项目：`npm run build`生成生产包
- 静态项目：无需构建步骤，直接提供文件

## 拉取请求指南

### 标题格式

使用清晰描述更改领域的标题：
- `[Quiz-app] 为第X课添加新测验`
- `[Lesson-3] 修复生态瓶项目拼写错误`
- `[Translation] 为第5课添加西班牙语翻译`
- `[Docs] 更新设置说明`

### 必需检查项

提交PR前：

1. **代码质量**：
   - 运行受影响项目目录中的 `npm run lint`
   - 修正所有lint错误和警告

2. **构建验证**：
   - 如适用，运行 `npm run build`
   - 确保无构建错误

3. **链接验证**：
   - 测试所有Markdown链接
   - 验证图片引用有效

4. **内容审核**：
   - 校对拼写和语法
   - 确认代码示例正确且具教学性
   - 验证翻译保持原意

### 贡献要求

- 同意微软CLA（首次PR自动检查）
- 遵守[微软开源行为守则](https://opensource.microsoft.com/codeofconduct/)
- 详见[CONTRIBUTING.md](./CONTRIBUTING.md)指导
- PR描述中引用相关问题编号（如有）

### 审核流程

- PR由维护者和社区共同审核
- 优先确保教育清晰度
- 代码示例应遵循当前最佳实践
- 翻译需确保准确和文化适应

## 翻译系统

### 自动翻译

- 使用GitHub Actions和co-op-translator工作流
- 自动翻译为50多种语言
- 源文件位于主目录
- 翻译文件存放在 `translations/{language-code}/` 目录

### 添加人工翻译改进

1. 定位到 `translations/{language-code}/` 下的文件
2. 保持结构完整进行改进
3. 确保代码示例仍然可用
4. 测试任何本地化测验内容

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

**测验应用启动失败**：
- 检查Node.js版本（建议v14+）
- 删除 `node_modules` 和 `package-lock.json`，重装依赖 `npm install`
- 检查端口冲突（默认Vite使用端口5173）

**API服务器无法启动**：
- 确认Node.js版本满足最低要求（node >=10）
- 检查端口是否被占用
- 确保所有依赖已通过 `npm install` 安装

**浏览器扩展无法加载**：
- 确认manifest.json格式正确
- 浏览器控制台查看错误
- 按浏览器特定扩展安装说明操作

**Python聊天项目问题**：
- 确保安装OpenAI包：`pip install openai`
- 确认设置了GITHUB_TOKEN环境变量
- 检查GitHub模型访问权限

**Docsify无法提供文档**：
- 全局安装docsify-cli：`npm install -g docsify-cli`
- 从仓库根目录运行
- 确认存在 `docs/_sidebar.md`

### 开发环境提示

- 对HTML项目使用VS Code和Live Server扩展
- 安装ESLint和Prettier扩展，保持格式统一
- 使用浏览器开发者工具调试JavaScript
- Vue项目安装Vue DevTools浏览器扩展

### 性能考虑

- 50多种语言的翻译文件数量庞大，完整克隆体积较大
- 若仅处理内容，使用浅克隆：`git clone --depth 1`
- 编辑英文内容时排除翻译目录搜索
- 首次运行构建过程可能较慢（npm install，Vite构建）

## 安全注意事项

### 环境变量

- API密钥绝不能提交到仓库
- 使用 `.env` 文件（已加入 `.gitignore`）
- 必要环境变量在项目README中注明

### Python项目

- 使用虚拟环境：`python -m venv venv`
- 保持依赖更新
- GitHub Token应具有最小必要权限

### GitHub模型访问

- 需要个人访问令牌（PAT）
- 令牌应作为环境变量存储
- 绝不提交令牌或凭据

## 附加说明

### 目标用户

- 完全的网页开发初学者
- 学生和自学者
- 课堂内使用此课程的教师
- 内容设计注重可访问性和渐进式技能培养

### 教育理念

- 基于项目的学习方法
- 频繁的知识检测（测验）
- 动手编码练习
- 真实世界的应用示例
- 重基础，先掌握基础再学框架

### 仓库维护

- 活跃的学习者与贡献者社区
- 定期更新依赖与内容
- 问题和讨论由维护者监控
- 翻译更新自动化通过GitHub Actions完成

### 相关资源

- [Microsoft Learn模块](https://docs.microsoft.com/learn/)
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)
- 推荐学习者使用[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 还有生成式AI、数据科学、机器学习、物联网等课程

### 具体项目使用

具体项目说明详见各目录下README：
- `quiz-app/README.md` - Vue 3测验应用
- `7-bank-project/README.md` - 带身份验证的银行应用
- `5-browser-extension/README.md` - 浏览器扩展开发
- `6-space-game/README.md` - 基于Canvas的游戏开发
- `9-chat-project/README.md` - AI聊天助手项目

### 单仓库结构

虽非传统monorepo，但本仓库包含多个独立项目：
- 每堂课自成体系
- 项目间无依赖共享
- 可独立开发各项目，不影响其他
- 克隆完整仓库可获得完整课程体验

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件使用 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们力求准确，但请注意，自动翻译可能包含错误或不准确之处。原文的母语版本应被视为权威来源。对于重要信息，建议采用专业人工翻译。我们不对因使用本翻译而产生的任何误解或曲解承担责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->