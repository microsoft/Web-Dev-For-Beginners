# AGENTS.md

## プロジェクト概要

これは初心者にウェブ開発の基礎を教えるための教育カリキュラムリポジトリです。カリキュラムはMicrosoft Cloud Advocatesによって開発された包括的な12週間のコースで、JavaScript、CSS、HTMLをカバーする24の実践的なレッスンで構成されています。

### 主な構成要素

- **教育コンテンツ**：プロジェクトベースのモジュールに整理された24の構造化されたレッスン
- **実践プロジェクト**：テラリウム、タイピングゲーム、ブラウザ拡張機能、スペースゲーム、銀行アプリ、コードエディター、AIチャットアシスタント
- **インタラクティブクイズ**：それぞれ3問の質問を含む48のクイズ（レッスン前後の評価）
- **多言語サポート**：GitHub Actionsを利用した50以上の言語への自動翻訳
- **技術スタック**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト用）

### アーキテクチャ

- レッスンベースの教育リポジトリ構造
- 各レッスンフォルダーにはREADME、コード例、解答例を含む
- 独立したプロジェクトは個別ディレクトリに配置（quiz-app、各種レッスンプロジェクト）
- GitHub Actionsを使用した翻訳システム（co-op-translator）
- Docsifyでドキュメントを配信し、PDFとしても利用可能

## セットアップコマンド

このリポジトリは主に教育コンテンツの利用を目的としています。特定プロジェクトで作業する場合：

### メインリポジトリのセットアップ

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App セットアップ (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 開発サーバーを起動する
npm run build      # 本番用にビルドする
npm run lint       # ESLintを実行する
```

### 銀行プロジェクトAPI (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # APIサーバーを起動する
npm run lint       # ESLintを実行する
npm run format     # Prettierでフォーマットする
```

### ブラウザ拡張機能プロジェクト

```bash
cd 5-browser-extension/solution
npm install
# ブラウザ固有の拡張機能の読み込み手順に従ってください
```

### スペースゲームプロジェクト

```bash
cd 6-space-game/solution
npm install
# index.html をブラウザで開くか、Live Server を使用してください
```

### チャットプロジェクト (Pythonバックエンド)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 環境変数を設定する
python api.py
```

## 開発ワークフロー

### コンテンツ提供者向け

1. GitHubアカウントにリポジトリを**フォーク**する
2. フォークしたリポジトリをローカルに**クローン**する
3. 変更用の**新しいブランチ**を作成する
4. レッスンコンテンツやコード例に変更を加える
5. 関連プロジェクトディレクトリでコード変更をテストする
6. 貢献ガイドラインに従いプルリクエストを提出する

### 学習者向け

1. リポジトリをフォークまたはクローンする
2. レッスンディレクトリを順に進む
3. 各レッスンのREADMEファイルを読む
4. https://ff-quizzes.netlify.app/web/ でレッスン前のクイズを完了する
5. レッスンフォルダ内のコード例に取り組む
6. 課題やチャレンジを完了する
7. レッスン後のクイズを受ける

### ライブ開発

- **ドキュメント**：ルートで `docsify serve` を実行 (ポート3000)
- **Quiz App**：quiz-appディレクトリで `npm run dev` を実行
- **プロジェクト**：HTMLプロジェクトはVS CodeのLive Server拡張機能を使用
- **APIプロジェクト**：該当のAPIディレクトリで `npm start` を実行

## テスト手順

### Quiz App テスト

```bash
cd quiz-app
npm run lint       # コードスタイルの問題を確認する
npm run build      # ビルドが成功することを確認する
```

### 銀行APIテスト

```bash
cd 7-bank-project/api
npm run lint       # コードスタイルの問題をチェックする
node server.js     # サーバーがエラーなく起動することを確認する
```

### 一般的なテスト方針

- 教育用リポジトリのため包括的な自動テストはなし
- 手動テストの重点：
  - コード例がエラーなく動作すること
  - ドキュメント内のリンクが正しく機能すること
  - プロジェクトのビルドが正常に完了すること
  - 例がベストプラクティスに則っていること

### 提出前チェック

- package.jsonがあるディレクトリで `npm run lint` を実行
- Markdownリンクの有効性を確認
- ブラウザまたはNode.jsでコード例をテスト
- 翻訳が正しい構造を維持していることを確認

## コードスタイルガイドライン

### JavaScript

- 最新のES6+構文を使用
- プロジェクトで提供されている標準のESLint設定に従う
- 教育的な明快さのため意味のある変数名・関数名を使用
- 学習者のために概念を説明するコメントを追加
- 設定がある場合はPrettierでフォーマット

### HTML/CSS

- セマンティックなHTML5要素
- レスポンシブデザインの原則
- 明確なクラス命名規則
- 学習者向けのCSS技術を説明するコメント

### Python

- PEP 8スタイルガイドラインに準拠
- 分かりやすく教育的なコード例
- 学習のために有用な場所には型ヒントを追加

### Markdownドキュメンテーション

- 明確な見出し階層
- 言語指定付きコードブロック
- 追加リソースへのリンク
- `images/`ディレクトリ内のスクリーンショットや画像
- アクセシビリティのための画像の代替テキスト

### ファイル構成

- レッスンは番号順（1-getting-started-lessons、2-js-basicsなど）
- 各プロジェクトに `solution/` と通常は `start/` または `your-work/` ディレクトリあり
- 画像はレッスン固有の `images/` フォルダに保存
- 翻訳ファイルは `translations/{language-code}/` 構造で管理

## ビルドおよびデプロイ

### Quiz Appのデプロイ (Azure Static Web Apps)

quiz-appはAzure Static Web Apps用に設定されています：

```bash
cd quiz-app
npm run build      # dist/ フォルダーを作成します
# main ブランチへのプッシュ時に GitHub Actions ワークフローを通じてデプロイします
```

Azure Static Web Appsの設定：
- **アプリ場所**：`/quiz-app`
- **出力場所**：`dist`
- **ワークフロー**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### ドキュメントPDF生成

```bash
npm install                    # docsify-to-pdf をインストールする
npm run convert               # docs から PDF を生成する
```

### Docsifyドキュメンテーション

```bash
npm install -g docsify-cli    # Docsifyをグローバルにインストールする
docsify serve                 # localhost:3000でサーブする
```

### プロジェクト固有のビルド

各プロジェクトディレクトリに独自のビルドプロセスがある場合：
- Vueプロジェクト：`npm run build` で本番用バンドルを作成
- 静的プロジェクト：ビルドステップなし、ファイルを直接配信

## プルリクエストガイドライン

### タイトルフォーマット

変更箇所を示す明確で説明的なタイトルを使用：
- `[Quiz-app] レッスンXの新しいクイズを追加`
- `[Lesson-3] テラリウムプロジェクトのタイプミス修正`
- `[Translation] レッスン5のスペイン語翻訳を追加`
- `[Docs] セットアップ手順の更新`

### 必須チェック

PR提出前に：

1. **コード品質**：
   - 該当プロジェクトディレクトリで `npm run lint` 実行
   - すべてのリンティングエラーと警告を修正

2. **ビルド確認**：
   - 必要に応じて `npm run build` 実行
   - ビルドエラーがないことを確認

3. **リンク検証**：
   - すべてのMarkdownリンクをテスト
   - 画像参照が機能することを確認

4. **内容レビュー**：
   - スペルと文法の校正
   - コード例が正しく教育目的に適していること
   - 翻訳が原文の意味を維持していることを確認

### 貢献条件

- Microsoft CLAに同意（最初のPRで自動チェック）
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)の遵守
- 詳細は[CONTRIBUTING.md](./CONTRIBUTING.md)参照
- 該当する場合はPR説明にIssue番号を記載

### レビュー体制

- メンテナおよびコミュニティによるレビュー
- 教育的な明快さを優先
- コード例は現行のベストプラクティスに従うこと
- 翻訳は正確さと文化的適合性を持つか確認

## 翻訳システム

### 自動翻訳

- GitHub Actionsでco-op-translatorワークフローを利用
- 50以上の言語に自動翻訳
- ソースファイルはメインディレクトリ内にあり
- 翻訳ファイルは `translations/{language-code}/` に配置

### 手動での翻訳改善追加

1. `translations/{language-code}/`内のファイルを見つける
2. 構造を維持しつつ改善を加える
3. コード例が動作し続けることを確認
4. ローカライズされたクイズコンテンツのテストを行う

### 翻訳メタデータ

翻訳ファイルにはメタデータヘッダーを含む：
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

## デバッグとトラブルシューティング

### よくある問題

**Quizアプリが起動しない**：
- Node.jsのバージョンを確認（v14以上推奨）
- `node_modules` と `package-lock.json` を削除し、`npm install` を再実行
- ポートの競合を確認（デフォルト：Viteはポート5173使用）

**APIサーバーが起動しない**：
- Node.jsのバージョンが要件を満たしているか確認（node >=10）
- ポートがすでに使用されていないかチェック
- すべての依存関係が `npm install` でインストールされているか確認

**ブラウザ拡張機能が読み込まれない**：
- manifest.json のフォーマットが正しいか確認
- ブラウザコンソールのエラーをチェック
- ブラウザ固有の拡張機能インストール手順に従う

**Pythonチャットプロジェクトの問題**：
- OpenAIパッケージがインストールされているか確認：`pip install openai`
- GITHUB_TOKEN環境変数が設定されているか確認
- GitHub Modelsへのアクセス権をチェック

**Docsifyがドキュメントを配信しない**：
- docsify-cliをグローバルにインストール：`npm install -g docsify-cli`
- リポジトリのルートディレクトリから実行
- `docs/_sidebar.md` が存在するか確認

### 開発環境のポイント

- HTMLプロジェクトにはVS CodeのLive Server拡張を利用
- 一貫したフォーマットのためESLintとPrettier拡張をインストール
- JavaScriptのデバッグにはブラウザの開発者ツールを使用
- VueプロジェクトにはVue DevToolsブラウザ拡張をインストール

### パフォーマンス上の考慮点

- 50以上の言語の翻訳ファイルがあるため、完全クローンはサイズが大きい
- コンテンツのみ作業する場合は浅いクローンを利用：`git clone --depth 1`
- 英語コンテンツ作業時は翻訳を検索から除外
- 初回実行時のビルドプロセスは遅い可能性あり（npm install、Viteビルド）

## セキュリティに関する注意事項

### 環境変数

- APIキーをリポジトリに絶対コミットしない
- `.env`ファイルを使用（既に`.gitignore`に追加済み）
- 必要な環境変数はプロジェクトのREADMEに記載

### Pythonプロジェクト

- 仮想環境を使用：`python -m venv venv`
- 依存関係は常に最新に保つ
- GitHubトークンは必要最低限の権限を付与する

### GitHub Models アクセス

- パーソナルアクセストークン（PAT）が必要
- トークンは環境変数として管理
- トークンや資格情報を絶対にコミットしない

## 追加の注意事項

### 対象ユーザー

- ウェブ開発初心者全般
- 学生や独学者
- 教育現場でカリキュラムを使う教師
- コンテンツはアクセシビリティと段階的なスキル習得を考慮して設計

### 教育哲学

- プロジェクトベースの学習アプローチ
- 頻繁な知識チェック（クイズ）
- 実践的なコーディング演習
- 現実世界の応用例
- フレームワークより基礎の習得に重点

### リポジトリのメンテナンス

- 学習者と貢献者の活発なコミュニティ
- 依存関係とコンテンツの定期的な更新
- メンテナによるIssueやディスカッションの監視
- GitHub Actionsを介した自動翻訳更新

### 関連リソース

- [Microsoft Learn モジュール](https://docs.microsoft.com/learn/)
- [Student Hub リソース](https://docs.microsoft.com/learn/student-hub/)
- 学習者向けに推奨される[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 追加コース：生成AI、データサイエンス、ML、IoTカリキュラムあり

### 各プロジェクトの作業方法

個別プロジェクトの詳細な手順は以下のREADMEを参照：
- `quiz-app/README.md` - Vue 3クイズアプリケーション
- `7-bank-project/README.md` - 認証付き銀行アプリ
- `5-browser-extension/README.md` - ブラウザ拡張機能開発
- `6-space-game/README.md` - Canvasベースゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタント

### モノレポ構造について

従来型のモノレポではありませんが、このリポジトリは複数の独立したプロジェクトを含みます：
- 各レッスンは自己完結型
- プロジェクト間で依存関係は共有しない
- 個別プロジェクトに影響なく作業可能
- フルカリキュラム体験のためにリポジトリ全体をクローン推奨

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**：  
本書類はAI翻訳サービス［Co-op Translator］(https://github.com/Azure/co-op-translator)を使用して翻訳されました。正確性を期していますが、自動翻訳には誤りや不正確な部分が含まれる場合があります。原文の言語による文書が権威ある情報源とみなされるべきです。重要な情報については、専門の翻訳者による翻訳を推奨します。本翻訳の利用により生じた誤解や解釈違いについて、一切の責任を負いかねます。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->