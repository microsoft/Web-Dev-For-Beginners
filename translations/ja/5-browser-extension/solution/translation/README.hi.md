<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-23T23:50:38+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "ja"
}
-->
# カーボントリガーブラウザー拡張機能: 完成したコード

電力使用量を追跡するためにtmrowのCO2 Signal APIを利用し、ブラウザー拡張機能を作成しました。この拡張機能は、あなたの地域での電力使用状況がどれほど負荷がかかっているかをブラウザー内で通知します。この情報を基に、活動内容を決定する手助けをします。

![拡張機能のスクリーンショット](../../../../../5-browser-extension/extension-screenshot.png)

## 始め方

まず、[npm](https://npmjs.com)をインストールしてください。そして、このコードをコンピューターの任意のフォルダーにダウンロードします。

必要なパッケージをすべてインストールします:

```
npm install
```

Webpackを使って拡張機能をビルドします:

```
npm run build
```

Edgeにインストールするには、ブラウザーの右上にある「三点メニュー」をクリックして拡張機能パネルを探します。そこから「未梱包の拡張機能を読み込む」を選択してください。プロンプトが表示されたら「dist」フォルダーを開き、拡張機能をロードします。この拡張機能を使用するには、CO2 Signal APIのAPIキー（[こちらでメールを通じて取得](https://www.co2snal.com/)できます。このページのボックスにメールアドレスを入力してください）と、[地域コード](http://api.electricitymap.org/v3/zones)が必要です。[Electricity Map](https://www.electricitymap.org/map)で確認できます。（例: ボストンの場合、「US-NEISO」を使用します。）

![インストール手順](../../../../../5-browser-extension/install-on-edge.png)

APIキーと地域コードを拡張機能のインターフェースに入力すると、ブラウザー拡張機能バーに表示されるカラードットが地域のエネルギー使用状況を反映するようになります。このドットは、エネルギー負荷の高い活動がどの程度適切かを示す指標となります。この「ドット」システムのアイデアは、カリフォルニアの排出量を可視化する[Energy Lollipop拡張機能](https://energylollipop.com/)から得ました。

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当社は責任を負いません。