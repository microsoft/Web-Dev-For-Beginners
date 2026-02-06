# ブラウザー拡張機能の作成

ブラウザー拡張機能を作成することは、アプリのパフォーマンスについて考えながら、異なる種類のウェブ資産を構築する楽しく興味深い方法です。このモジュールでは、ブラウザーの仕組みやブラウザー拡張機能のデプロイ方法、フォームの作成、APIの呼び出し、ローカルストレージの使用方法、ウェブサイトのパフォーマンスを評価して改善する方法について学びます。

Edge、Chrome、Firefoxで動作するブラウザー拡張機能を作成します。この拡張機能は、特定のタスクに特化したミニウェブサイトのようなもので、[C02 Signal API](https://www.co2signal.com)を使用して指定された地域の電力使用量と炭素強度を確認し、その地域のカーボンフットプリントを示すデータを返します。

この拡張機能は、ユーザーがAPIキーと地域コードをフォームに入力することで、アドホックに呼び出すことができます。これにより、地域の電力使用状況を把握し、ユーザーの電力使用に関する意思決定に影響を与えるデータを提供します。例えば、地域の電力使用量が高い時間帯には、衣類乾燥機（炭素排出量が多い活動）の使用を遅らせる方が望ましい場合があります。

### トピック

1. [ブラウザーについて](1-about-browsers/README.md)
2. [フォームとローカルストレージ](2-forms-browsers-local-storage/README.md)
3. [バックグラウンドタスクとパフォーマンス](3-background-tasks-and-performance/README.md)

### クレジット

![緑色のブラウザー拡張機能](../../../5-browser-extension/extension-screenshot.png)

## クレジット

このウェブカーボントリガーのアイデアは、MicrosoftのGreen Cloud Advocacyチームのリードであり、[Green Principles](https://principles.green/)の著者であるAsim Hussainによって提供されました。元々は[ウェブサイトプロジェクト](https://github.com/jlooper/green)として始まりました。

ブラウザー拡張機能の構造は、[Adebola AdeniranのCOVID拡張機能](https://github.com/onedebos/covtension)に影響を受けています。

「ドット」アイコンシステムのコンセプトは、カリフォルニア州の排出量を対象とした[Energy Lollipop](https://energylollipop.com/)ブラウザー拡張機能のアイコン構造に触発されました。

これらのレッスンは[Jen Looper](https://www.twitter.com/jenlooper)によって♥️を込めて書かれました。

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は一切の責任を負いません。