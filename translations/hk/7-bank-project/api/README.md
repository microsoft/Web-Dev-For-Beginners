<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-23T23:55:32+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "hk"
}
-->
# 銀行 API

> 使用 [Node.js](https://nodejs.org) + [Express](https://expressjs.com/) 建構的銀行 API。

這個 API 已經為你建構完成，並不是練習的一部分。

不過，如果你有興趣學習如何建構這樣的 API，可以參考這系列影片：https://aka.ms/NodeBeginner（第 17 到 21 集涵蓋了這個 API 的詳細內容）。

你也可以查看這個互動式教學：https://aka.ms/learn/express-api

## 啟動伺服器

請確保你已安裝 [Node.js](https://nodejs.org)。

1. Git clone 這個倉庫 [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)。
2. 打開終端機，進入 `Web-Dev-For-Beginners/7-bank-project/api` 資料夾。
3. 執行 `npm install`，並等待套件安裝完成（根據你的網路連線品質，可能需要一些時間）。
4. 安裝完成後，執行 `npm start`，即可啟動伺服器。

伺服器應該會開始在埠號 `5000` 上監聽。
*這個伺服器會與主要的銀行應用程式伺服器（監聽埠號 `3000`）同時運行，請不要關閉它。*

> 注意：所有的資料都儲存在記憶體中，並不會被持久化，因此當伺服器停止時，所有資料都會丟失。

## API 詳細資訊

路由                                        | 描述
---------------------------------------------|------------------------------------
GET    /api/                                 | 獲取伺服器資訊
POST   /api/accounts/                        | 建立一個帳戶，例如：`{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | 獲取指定帳戶的所有資料
DELETE /api/accounts/:user                   | 刪除指定帳戶
POST   /api/accounts/:user/transactions      | 新增一筆交易，例如：`{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | 刪除指定的交易

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。如涉及關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋概不負責。