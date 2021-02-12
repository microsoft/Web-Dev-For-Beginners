# 銀行 API

> 銀行 API は [Node.js](https://nodejs.org/ja/) + [Express](https://expressjs.com/ja/) で構築されています。

API はすでにあなたのために構築されており、演習の一部ではありません。

しかし、このような API の構築方法に興味があるのであれば、このシリーズのビデオを見ることができます: https://aka.ms/NodeBeginner (ビデオ 17 から 21 では、この API を正確にカバーしています)。

また、こちらのインタラクティブなチュートリアルもご覧ください: https://aka.ms/learn/express-api

## サーバーの実行

[Node.js](https://nodejs.org/ja/) がインストールされていることを確認してください。

1. このリポジトリを Git でクローンします
2. `api` フォルダでターミナルを開き、`npm install` を実行します
3. `npm start` を実行します

サーバーは `5000` ポートで待ち受けを開始するはずです。

> 注意: すべてのエントリはメモリに保存され、永続化されないので、サーバを停止するとすべてのデータが失われます。

## API の詳細

ルート                                        | 説明
---------------------------------------------|------------------------------------
GET    /api/                                 | サーバー情報を取得します
POST   /api/accounts/                        | アカウントを作成します。例: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | 指定したアカウントのすべてのデータを取得します
DELETE /api/accounts/:user                   | 指定したアカウントを削除します
POST   /api/accounts/:user/transactions      | トランザクションを追加します。例: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | 指定されたトランザクションを削除します

