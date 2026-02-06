# 銀行 API

> 使用 [Node.js](https://nodejs.org) + [Express](https://expressjs.com) 建立的銀行 API。

此 API 已經為您建置完成，並非練習的一部分。

不過，如果您有興趣學習如何建立類似的 API，可以參考這系列影片：https://aka.ms/NodeBeginner（第 17 至 21 集涵蓋了這個 API 的完整內容）。

您也可以查看這個互動式教學：https://aka.ms/learn/express-api

## 啟動伺服器

請確保您已安裝 [Node.js](https://nodejs.org)。

1. Git clone 此 repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)。
2. 打開終端機並進入 `Web-Dev-For-Beginners/7-bank-project/api` 資料夾。
3. 執行 `npm install`，等待套件安裝完成（根據您的網路品質可能需要一些時間）。
4. 安裝完成後，執行 `npm start`，即可開始使用。

伺服器應該會開始在埠 `5000` 上監聽。
*此伺服器將與主要銀行應用程式伺服器（監聽埠 `3000`）一起運行，請勿關閉。*

> 注意：所有的資料都儲存在記憶體中，並不會永久保存，因此當伺服器停止時，所有資料都會丟失。

## API 詳細資訊

路由                                         | 描述
---------------------------------------------|------------------------------------
GET    /api/                                 | 獲取伺服器資訊
POST   /api/accounts/                        | 建立帳戶，例如：`{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | 獲取指定帳戶的所有資料
DELETE /api/accounts/:user                   | 移除指定帳戶
POST   /api/accounts/:user/transactions      | 新增交易，例如：`{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | 移除指定交易

**免責聲明**：  
本文檔使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始語言的文件應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。