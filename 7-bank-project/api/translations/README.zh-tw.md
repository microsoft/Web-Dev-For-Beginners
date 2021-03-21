# 銀行 API (Bank API)

> 由 [Node.js](https://nodejs.org) 與 [Express](https://expressjs.com/) 建立而成。

這套 API 已經建好而不在本次課程的範疇內。

然而，如果你想學習如何建立 API，你可以追蹤這一系列的影片：https://aka.ms/NodeBeginner (影片 17 到 21 為這套 API)。

你也可以看看這套互動式教學： https://aka.ms/learn/express-api

## 運行伺服器

確保你的 [Node.js](https://nodejs.org) 已經安裝完成。

1. Git clone 這個數據庫.
2. 在資料夾 `api` 中開啟終端機，執行 `npm install`。
3. 執行 `npm start`。

伺服器應該要在連接埠 `5000` 上監聽訊息。

> 筆記：所有儲存的資料不是永久保存的，伺服器終止時會遺失所有資料。

## API 項目

路由                                         | 描述
---------------------------------------------|------------------------------------
GET    /api/                                 | 取得伺服器資訊
POST   /api/accounts/                        | 建立新的帳戶，範例： `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | 取得特定帳戶的所有資料
DELETE /api/accounts/:user                   | 移除特定帳戶
POST   /api/accounts/:user/transactions      | 建立新的交易明細，範例： `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | 移除特定交易明細

