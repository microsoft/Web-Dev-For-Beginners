# AGENTS.md

## 项目概述

这是一个面向初学者教授网页开发基础知识的教育课程仓库。该课程是由微软云推广人员开发的为期12周的综合课程，包含24个涵盖JavaScript、CSS和HTML的实践课程。

### 关键组成部分

- <strong>教育内容</strong>：24个结构化课程，按项目模块组织
- <strong>实用项目</strong>：生态瓶、打字游戏、浏览器扩展、太空游戏、银行应用、代码编辑器和AI聊天助手
- <strong>互动测验</strong>：48个测验，每个含3个问题（课前/课后评估）
- <strong>多语言支持</strong>：通过GitHub Actions实现50多种语言的自动翻译
- <strong>技术栈</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用于AI项目）

### 架构

- 以课程为基础结构的教育仓库
- 每个课程文件夹包含README、代码示例和解决方案
- 独立项目位于单独目录（quiz-app，各种课程项目）
- 使用GitHub Actions的翻译系统（co-op-translator）
- 通过Docsify提供文档并支持PDF格式

## 安装命令

该仓库主要用于学习内容使用。对于特定项目的使用：

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
npm run build      # 构建生产环境
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
# 遵循浏览器特定的扩展加载说明
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

## 开发流程

### 对内容贡献者

1. <strong>Fork该仓库</strong>到你的GitHub账户
2. <strong>克隆你的Fork</strong>到本地
3. <strong>创建新分支</strong>进行更改
4. 修改课程内容或代码示例
5. 在相关项目目录测试代码更改
6. 根据贡献指南提交Pull Request

### 对学习者

1. Fork或克隆仓库
2. 按顺序进入课程目录
3. 阅读各课程README文件
4. 访问 https://ff-quizzes.netlify.app/web/ 完成课前测验
5. 完成课程文件夹中的代码示例
6. 完成作业和挑战
7. 参加课后测验

### 实时开发

- <strong>文档</strong>：在根目录运行 `docsify serve`（端口3000）
- <strong>测验应用</strong>：在quiz-app目录运行 `npm run dev`
- <strong>项目</strong>：HTML项目使用VS Code Live Server扩展
- **API项目**：在相应API目录运行 `npm start`

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
node server.js     # 验证服务器启动是否无错误
```

### 常规测试方法

- 这是一个教育用仓库，没有全面的自动化测试
- 手动测试重点：
  - 代码示例无错误运行
  - 文档中的链接正常
  - 项目能成功构建
  - 示例遵循最佳实践

### 提交前检查

- 在含package.json的目录运行 `npm run lint`
- 验证markdown链接有效
- 在浏览器或Node.js中测试代码示例
- 确保翻译保持正确结构

## 代码风格指南

### JavaScript

- 使用现代ES6+语法
- 遵守项目中标准的ESLint配置
- 变量和函数命名有意义，便于教学理解
- 添加注释解释概念，帮助学习者
- 在配置处使用Prettier格式化

### HTML/CSS

- 使用语义化HTML5元素
- 响应式设计原则
- 清晰的类命名规范
- 注释说明CSS技术，方便学习者理解

### Python

- 遵循PEP 8风格指南
- 提供清晰、易懂的示例代码
- 需要时添加类型提示以辅助学习

### Markdown文档

- 清晰的标题层级结构
- 带语言标注的代码块
- 链接额外资源
- `images/`目录下的截图和图片
- 图片配备辅助访问的alt文字

### 文件组织

- 课程按顺序编号（1-getting-started-lessons，2-js-basics等）
- 每个项目有 `solution/`，通常还有 `start/` 或 `your-work/` 目录
- 图片保存在各课程对应的 `images/` 文件夹
- 翻译文件存放在 `translations/{语言代码}/` 结构下

## 构建与部署

### 测验应用部署（Azure静态网页应用）

quiz-app配置为Azure静态网页应用部署：

```bash
cd quiz-app
npm run build      # 创建 dist/ 文件夹
# 在推送到 main 时通过 GitHub Actions 工作流部署
```

Azure静态网页应用配置：
- <strong>应用位置</strong>：`/quiz-app`
- <strong>输出位置</strong>：`dist`
- <strong>工作流</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文档PDF生成

```bash
npm install                    # 安装 docsify-to-pdf
npm run convert               # 从文档生成 PDF
```

### Docsify文档

```bash
npm install -g docsify-cli    # 全局安装 Docsify
docsify serve                 # 在 localhost:3000 上提供服务
```

### 项目特定构建

各项目目录可能有自己的构建流程：
- Vue项目：`npm run build`生成生产包
- 静态项目：无构建步骤，直接提供文件

## Pull Request指引

### 标题格式

使用清晰且描述性标题表明变更范围：
- `[Quiz-app] 添加第X课新测验`
- `[Lesson-3] 修正生态瓶项目中的错别字`
- `[Translation] 添加第5课西班牙语翻译`
- `[Docs] 更新设置说明`

### 提交前必需检查

1. <strong>代码质量</strong>：
   - 在涉及的项目目录执行 `npm run lint`
   - 修复所有lint错误和警告

2. <strong>构建验证</strong>：
   - 如适用，运行 `npm run build`
   - 确保无构建错误

3. <strong>链接校验</strong>：
   - 测试所有markdown链接
   - 确认图片引用正常

4. <strong>内容校对</strong>：
   - 校查拼写及语法
   - 确认代码示例正确且具有教学意义
   - 验证翻译保持原意

### 贡献要求

- 同意微软CLA（首次PR时自动检查）
- 遵守[微软开源行为准则](https://opensource.microsoft.com/codeofconduct/)
- 详见[CONTRIBUTING.md](./CONTRIBUTING.md)获取细节指南
- PR描述中引用相关issue编号（如有）

### 审核流程

- PR由维护者和社区审核
- 重点确保教育内容清晰
- 代码示例需遵循当前最佳实践
- 审核翻译准确性和文化适宜性

## 翻译系统

### 自动翻译

- 采用GitHub Actions 和 co-op-translator工作流
- 自动翻译成50多种语言
- 源文件在主目录
- 翻译文件置于 `translations/{语言代码}/` 目录

### 手动翻译改进

1. 找到 `translations/{语言代码}/` 目录下的文件
2. 保持结构完成改进
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

## 调试与故障排查

### 常见问题

<strong>测验应用启动失败</strong>：
- 检查Node.js版本（推荐v14+）
- 删除 `node_modules` 和 `package-lock.json`，重新运行 `npm install`
- 检查端口冲突（默认：Vite使用端口5173）

**API服务器无法启动**：
- 确认Node.js版本满足最低要求（node >=10）
- 检查端口是否被占用
- 确认所有依赖安装完成（`npm install`）

<strong>浏览器扩展无法加载</strong>：
- 检查manifest.json格式正确
- 查看浏览器控制台错误
- 遵守浏览器特有的扩展安装说明

**Python聊天项目问题**：
- 确保安装OpenAI包：`pip install openai`
- 确认设置GITHUB_TOKEN环境变量
- 检查GitHub Models访问权限

**Docsify未能提供文档**：
- 全局安装docsify-cli：`npm install -g docsify-cli`
- 从仓库根目录运行
- 确认存在 `docs/_sidebar.md`

### 开发环境提示

- 使用VS Code并结合Live Server扩展运行HTML项目
- 安装ESLint和Prettier扩展保持格式一致
- 利用浏览器开发者工具调试JavaScript
- Vue项目安装Vue DevTools浏览器扩展

### 性能注意事项

- 多语言翻译文件数量众多（50+），完全克隆体积较大
- 若仅处理内容，使用浅克隆：`git clone --depth 1`
- 处理英文内容时排除翻译文件搜索
- 构建过程首次运行可能较慢（npm install，Vite构建）

## 安全注意事项

### 环境变量

- API密钥绝不提交到仓库
- 使用 `.env` 文件（已加入 `.gitignore`）
- 在项目README中记录必需环境变量

### Python项目

- 使用虚拟环境：`python -m venv venv`
- 保持依赖更新
- GitHub令牌需仅授予最小必要权限

### GitHub Models访问

- 需个人访问令牌（PAT）
- 令牌作为环境变量存储
- 绝不提交令牌或凭据

## 其他说明

### 目标受众

- 完全零基础网页开发者
- 学生和自学者
- 在课堂中使用本课程的教师
- 内容设计注重无障碍及技能渐进提升

### 教育理念

- 基于项目的学习方法
- 频繁知识检测（测验）
- 实践编程练习
- 真实应用案例
- 先打好基础核心，再学习框架

### 仓库维护

- 活跃的学习者和贡献者社区
- 定期更新依赖和内容
- 维护者持续监控问题和讨论
- 翻译更新通过GitHub Actions自动化

### 相关资源

- [微软Learn模块](https://docs.microsoft.com/learn/)
- [学生中心资源](https://docs.microsoft.com/learn/student-hub/)
- 推荐学习者使用[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 还有生成式AI、数据科学、机器学习、物联网课程可选

### 特定项目使用

详见项目README：
- `quiz-app/README.md` - Vue 3测验应用
- `7-bank-project/README.md` - 带身份验证的银行应用
- `5-browser-extension/README.md` - 浏览器扩展开发
- `6-space-game/README.md` - Canvas画布游戏开发
- `9-chat-project/README.md` - AI聊天助手项目

### Monorepo结构

虽然不是传统的monorepo，该仓库包含多个独立项目：
- 每个课程独立自成体系
- 项目之间不共享依赖
- 可单独开发项目不影响其他
- 克隆整个仓库体验完整课程体系

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文档已使用 AI 翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们力求准确，但请注意自动翻译可能包含错误或不准确之处。原始语言版本的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。因使用本翻译而产生的任何误解或误释，我们不承担任何责任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->