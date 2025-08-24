<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-23T23:52:24+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "ja"
}
-->
# Carbon Triggerブラウザ拡張機能: 完成したコード

tmrowのC02 Signal APIを使用して電力消費を追跡し、地域の電力消費に関するリマインダーをブラウザ内で直接表示するブラウザ拡張機能を作成します。このアドホックな拡張機能を使用することで、これらの情報に基づいて活動を判断する助けになります。

![拡張機能のスクリーンショット](../../../../../5-browser-extension/extension-screenshot.png)

## 始める

[npm](https://npmjs.com)がインストールされている必要があります。このコードをコンピュータのフォルダにダウンロードしてください。

必要なパッケージをすべてインストールします：

```
npm install
```

Webpackで拡張機能をビルドします：

```
npm run build
```

Edgeにインストールするには、ブラウザの右上にある「三点メニュー」を使用して拡張機能パネルを見つけます。そこから「解凍された拡張機能を読み込む」を選択して新しい拡張機能を読み込みます。プロンプトで「dist」フォルダを開くと、拡張機能が読み込まれます。使用するには、CO2 Signal APIのAPIキーが必要です（[こちらのページでメールで取得](https://www.co2signal.com/) - ページのボックスにメールアドレスを入力してください）と、[電力マップ](https://www.electricitymap.org/map)に対応する[地域コード](http://api.electricitymap.org/v3/zones)が必要です（例えば、ボストンでは「US-NEISO」を使用します）。

![インストール](../../../../../5-browser-extension/install-on-edge.png)

APIキーと地域コードを拡張機能のインターフェースに入力すると、ブラウザの拡張機能バーにある色付きの点が地域の電力消費を反映して変化し、エネルギー消費の多い活動を行うべきかどうかの指標を提供します。この「点」システムのコンセプトは、カリフォルニア州の排出量に関する[Energy Lollipop拡張機能](https://energylollipop.com/)から着想を得ています。

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は一切の責任を負いません。