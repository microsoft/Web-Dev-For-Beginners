# 银行 API

> 使用 [Node.js](https://nodejs.org) + [Express](https://expressjs.com/) 构建的银行 API。

该 API 已经为您构建完成，不是练习的一部分。

不过，如果您有兴趣学习如何构建这样的 API，可以观看以下系列视频：https://aka.ms/NodeBeginner（第 17 到 21 集涵盖了这个 API 的具体内容）。

您还可以查看这个交互式教程：https://aka.ms/learn/express-api

## 启动服务器

确保您已安装 [Node.js](https://nodejs.org)。

1. Git 克隆此仓库 [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)。
2. 打开终端并导航到 `Web-Dev-For-Beginners/7-bank-project/api` 文件夹。
3. 运行 `npm install` 并等待依赖包安装完成（根据您的网络质量，可能需要一些时间）。
4. 安装完成后，运行 `npm start`，即可启动服务器。

服务器应开始监听端口 `5000`。
*此服务器将与主银行应用程序的服务器终端（监听端口 `3000`）一起运行，请勿关闭。*

> 注意：所有条目都存储在内存中，不会持久化，因此当服务器停止时，所有数据都会丢失。

## API 详情

路由                                        | 描述
---------------------------------------------|------------------------------------
GET    /api/                                 | 获取服务器信息
POST   /api/accounts/                        | 创建账户，例如：`{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | 获取指定账户的所有数据
DELETE /api/accounts/:user                   | 删除指定账户
POST   /api/accounts/:user/transactions      | 添加交易，例如：`{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | 删除指定交易

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原文档的原始语言版本为权威来源。对于关键信息，建议使用专业人工翻译。我们对因使用本翻译而引起的任何误解或误读不承担责任。