<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-23T23:55:53+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "ja"
}
-->
# 銀行API

> [Node.js](https://nodejs.org) + [Express](https://expressjs.com/) で構築された銀行API。

このAPIはすでに構築済みで、演習の一部ではありません。

ただし、このようなAPIの構築方法を学びたい場合は、以下のビデオシリーズを参照してください: https://aka.ms/NodeBeginner （ビデオの17～21がこのAPIをカバーしています）。

また、こちらのインタラクティブなチュートリアルも参考にしてください: https://aka.ms/learn/express-api

## サーバーの起動

[Node.js](https://nodejs.org) がインストールされていることを確認してください。

1. このリポジトリ [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners) をGitクローンします。
2. ターミナルを開き、`Web-Dev-For-Beginners/7-bank-project/api` フォルダに移動します。
3. `npm install` を実行し、パッケージのインストールが完了するのを待ちます（インターネット接続の品質によっては時間がかかる場合があります）。
4. インストールが完了したら、`npm start` を実行すれば準備完了です。

サーバーはポート `5000` でリッスンを開始します。
*このサーバーはメインの銀行アプリサーバー（ポート `3000` でリッスン中）と一緒に動作しますので、閉じないでください。*

> 注意: すべてのエントリはメモリ内に保存され、永続化されません。そのため、サーバーを停止するとすべてのデータが失われます。

## APIの詳細

ルート                                        | 説明
---------------------------------------------|------------------------------------
GET    /api/                                 | サーバー情報を取得
POST   /api/accounts/                        | アカウントを作成、例: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | 指定されたアカウントのすべてのデータを取得
DELETE /api/accounts/:user                   | 指定されたアカウントを削除
POST   /api/accounts/:user/transactions      | トランザクションを追加、例: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | 指定されたトランザクションを削除

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当社は責任を負いません。