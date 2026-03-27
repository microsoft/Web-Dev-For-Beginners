# AGENTS.md

## プロジェクト概要

これは初心者にウェブ開発の基礎を教えるための教育カリキュラムリポジトリです。カリキュラムは Microsoft Cloud Advocates によって開発された包括的な12週間のコースで、JavaScript、CSS、HTML を扱う24の実践的なレッスンを特徴としています。

### 主なコンポーネント

- <strong>教育コンテンツ</strong>: プロジェクトベースのモジュールに構成された24の体系的なレッスン
- <strong>実践プロジェクト</strong>: テラリウム、タイピングゲーム、ブラウザー拡張機能、宇宙ゲーム、銀行アプリ、コードエディター、AIチャットアシスタント
- <strong>インタラクティブクイズ</strong>: 各3問の48のクイズ（レッスン前後の評価）
- <strong>多言語対応</strong>: GitHub Actions による50以上の言語の自動翻訳
- <strong>技術スタック</strong>: HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト用）

### アーキテクチャ

- レッスンベースの構造をもつ教育リポジトリ
- 各レッスンフォルダーに README、コード例、解答例を含む
- 独立したプロジェクトは別ディレクトリに配置（quiz-app、各種レッスンプロジェクト）
- GitHub Actions（co-op-translator）を用いた翻訳システム
- Docsify でドキュメント配信および PDF での提供

## セットアップコマンド

このリポジトリは主に教育コンテンツの参照用です。特定のプロジェクトに取り組む際は以下を参照してください。

### メインリポジトリセットアップ

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### クイズアプリセットアップ (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 開発サーバーを起動
npm run build      # 本番用にビルド
npm run lint       # ESLintを実行
```

### 銀行プロジェクトAPI (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # APIサーバーを起動する
npm run lint       # ESLintを実行する
npm run format     # Prettierでフォーマットする
```

### ブラウザー拡張機能プロジェクト

```bash
cd 5-browser-extension/solution
npm install
# ブラウザ固有の拡張機能読み込み手順に従ってください
```

### 宇宙ゲームプロジェクト

```bash
cd 6-space-game/solution
npm install
# ブラウザでindex.htmlを開くか、Live Serverを使用してください
```

### チャットプロジェクト（Pythonバックエンド）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 環境変数を設定する
python api.py
```

## 開発ワークフロー

### コンテンツ寄稿者向け

1. リポジトリを GitHub のアカウントに <strong>フォーク</strong> する
2. フォークしたリポジトリをローカルに <strong>クローン</strong> する
3. 変更用の <strong>新しいブランチ</strong> を作成する
4. レッスンの内容やコード例を編集する
5. 関連プロジェクトディレクトリでコード変更をテストする
6. 貢献ガイドラインに従いプルリクエストを提出する

### 学習者向け

1. リポジトリをフォークまたはクローンする
2. レッスンディレクトリを順番に進む
3. 各レッスンの README を読む
4. https://ff-quizzes.netlify.app/web/ でレッスン前クイズを受ける
5. レッスンフォルダ内のコード例を実践する
6. 課題やチャレンジを完了する
7. レッスン後クイズを受ける

### ライブ開発

- <strong>ドキュメント</strong>: ルートで `docsify serve` を実行（ポート3000）
- <strong>クイズアプリ</strong>: quiz-appディレクトリで `npm run dev` を実行
- <strong>プロジェクト</strong>: VS Code Live Server 拡張機能を使用（HTMLプロジェクト用）
- **APIプロジェクト**: 各APIディレクトリで `npm start` を実行

## テスト手順

### クイズアプリテスト

```bash
cd quiz-app
npm run lint       # コードスタイルの問題をチェックする
npm run build      # ビルドが成功することを確認する
```

### 銀行APIテスト

```bash
cd 7-bank-project/api
npm run lint       # コードスタイルの問題を確認する
node server.js     # エラーなくサーバーが起動するか検証する
```

### 一般的なテスト方針

- 包括的な自動テストはない教育リポジトリです
- 手動テストは以下に着目:
  - コード例がエラーなく実行できるか
  - ドキュメント内のリンクが正しく動作するか
  - プロジェクトビルドが正常に完了するか
  - 例がベストプラクティスに沿っているか

### 提出前チェック

- package.json のあるディレクトリで `npm run lint` を実行
- Markdownリンクの有効性を検証
- ブラウザまたは Node.js でコード例をテスト
- 翻訳が正しい構造を保持していることを確認

## コードスタイルガイドライン

### JavaScript

- 最新の ES6+ 構文を使用
- プロジェクトで提供される標準 ESLint 設定を遵守
- 教育上わかりやすい変数名・関数名を使用
- 概念説明のコメントを追加
- Prettier でフォーマット（設定がある場合）

### HTML/CSS

- セマンティックなHTML5要素
- レスポンシブデザインの原則
- 明確なクラス命名規則
- CSS技術についての説明コメント

### Python

- PEP 8 スタイルガイドに準拠
- 教育的にわかりやすいコード例
- 学習支援のための型ヒントも活用

### Markdownドキュメント

- 明確な見出し階層
- 言語指定のコードブロック
- 追加リソースへのリンク
- `images/` ディレクトリのスクリーンショット、画像
- アクセシビリティのための代替テキスト

### ファイル構成

- レッスンは順番に番号付け（1-getting-started-lessons、2-js-basics 等）
- 各プロジェクトに `solution/`、多くは `start/` または `your-work/` ディレクトリ
- 画像はレッスン固有の `images/` フォルダに格納
- 翻訳は `translations/{language-code}/` 構造

## ビルドとデプロイ

### クイズアプリのデプロイ (Azure Static Web Apps)

quiz-app は Azure Static Web Apps 用に設定済み：

```bash
cd quiz-app
npm run build      # dist/フォルダを作成します
# mainブランチへのプッシュ時にGitHub Actionsワークフローを通じてデプロイします
```

Azure Static Web Apps の設定:
- <strong>アプリの場所</strong>: `/quiz-app`
- <strong>出力場所</strong>: `dist`
- <strong>ワークフロー</strong>: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### ドキュメントPDF生成

```bash
npm install                    # docsify-to-pdf をインストールする
npm run convert               # docs から PDF を生成する
```

### Docsifyドキュメント

```bash
npm install -g docsify-cli    # Docsify をグローバルにインストールする
docsify serve                 # localhost:3000 でサーブする
```

### プロジェクト別ビルド

各プロジェクトディレクトリに特有のビルドプロセスあり:
- Vue プロジェクト: `npm run build` で本番バンドル作成
- 静的プロジェクト: ビルド不要、ファイルを直接配信

## プルリクエストガイドライン

### タイトル形式

変更箇所をわかりやすく明示：
- `[Quiz-app] レッスンX用の新しいクイズ追加`
- `[Lesson-3] テラリウムプロジェクトのタイプミス修正`
- `[Translation] レッスン5のスペイン語翻訳追加`
- `[Docs] セットアップ手順更新`

### 必須チェック

PR提出前に実施：

1. <strong>コード品質</strong>:
   - 関連プロジェクトで `npm run lint` を実行
   - 全ての警告・エラーを修正

2. <strong>ビルド確認</strong>:
   - 該当する場合 `npm run build` を実行
   - ビルドエラーなしを確保

3. <strong>リンク検証</strong>:
   - 全Markdownリンクをテスト
   - 画像参照の動作確認

4. <strong>内容レビュー</strong>:
   - スペル・文法の校正
   - コード例の正確さと教育的妥当性
   - 翻訳が原文の意味を維持しているか確認

### 貢献条件

- Microsoft CLA に同意（初PR時に自動チェック）
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) を遵守
- 詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) 参照
- PR説明に関連issue番号を記載（該当時）

### レビュー体制

- PRはメンテナとコミュニティでレビュー
- 教育的な明瞭さを優先
- コード例は最新のベストプラクティスに沿うこと
- 翻訳は正確性と文化的適合性を重視してレビュー

## 翻訳システム

### 自動翻訳

- GitHub Actions と co-op-translator ワークフローを使用
- 50以上の言語へ自動翻訳
- ソースファイルはメインディレクトリ内
- 翻訳ファイルは `translations/{language-code}/` に保管

### 手動翻訳改善の追加

1. `translations/{language-code}/`内のファイルを特定
2. 構造を崩さず改善を加える
3. コード例が動作し続けるように注意
4. ローカライズされたクイズ内容もテスト

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

<strong>クイズアプリが起動しない</strong>:
- Node.js のバージョンを確認（v14以上推奨）
- `node_modules` と `package-lock.json` を削除し `npm install` を再実行
- ポート競合（デフォルト Vite ポート 5173）をチェック

**APIサーバーが起動しない**:
- Node.js バージョンは最低 node >=10 であることを確認
- ポートが既に使われていないかチェック
- 依存関係は `npm install` 済みか確認

<strong>ブラウザー拡張機能が読み込まれない</strong>:
- manifest.json が正しくフォーマットされているか確認
- ブラウザのコンソールでエラーを確認
- ブラウザ固有の拡張機能インストール手順に従う

**Pythonチャットプロジェクトの問題**:
- OpenAI パッケージがインストールされていること: `pip install openai`
- GITHUB_TOKEN 環境変数が設定済みか確認
- GitHub Models へのアクセス権限をチェック

**Docsify がドキュメントを配信しない**:
- docsify-cli をグローバルにインストール: `npm install -g docsify-cli`
- リポジトリルートで起動
- `docs/_sidebar.md` が存在しているか確認

### 開発環境のヒント

- HTMLプロジェクトには VS Code の Live Server 拡張機能を使用
- 一貫したフォーマットのため ESLint と Prettier 拡張をインストール
- JavaScript のデバッグにはブラウザの DevTools を活用
- Vueプロジェクトには Vue DevTools ブラウザ拡張をインストール

### パフォーマンス上の注意

- 50以上の言語の大量翻訳ファイルによってフルクローンは大きくなる
- コンテンツのみ作業時は浅いクローンで: `git clone --depth 1`
- 英語コンテンツ作業時は翻訳ファイルを検索外にすると高速化
- 初回のビルドプロセスは遅い場合あり（npm install、Viteビルド）

## セキュリティ上の考慮点

### 環境変数

- APIキーは決してリポジトリにコミットしない
- `.env` ファイルを使用（既に `.gitignore` に設定）
- 必要な環境変数はプロジェクトのREADMEに記載

### Pythonプロジェクト

- 仮想環境を使用: `python -m venv venv`
- 依存関係は常に最新に保つ
- GitHub トークンは最小限の権限を付与

### GitHub Modelsアクセス

- GitHub Models のための個人アクセストークン（PAT）が必要
- トークンは環境変数として管理
- トークンや認証情報は絶対にコミットしない

## その他の注意点

### 対象ユーザー

- ウェブ開発の完全初心者
- 学生や独学者
- 教室でカリキュラムを使う教師
- アクセシビリティに配慮しスキルを段階的に積み上げられる内容

### 教育方針

- プロジェクトベースの学習アプローチ
- 頻繁な理解度チェック（クイズ）
- 実際に手を動かすコーディング演習
- 実世界の応用例を示す
- フレームワークより基礎を重視

### リポジトリのメンテナンス

- 学習者や貢献者の活発なコミュニティ
- 依存関係とコンテンツの定期的な更新
- メンテナが課題や議論を監視
- GitHub Actions による翻訳更新の自動化

### 関連リソース

- [Microsoft Learn モジュール](https://docs.microsoft.com/learn/)
- [Student Hub リソース](https://docs.microsoft.com/learn/student-hub/)
- 学習者に推奨される [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- ジェネレーティブ AI、データサイエンス、ML、IoT の追加コースも利用可能

### 特定プロジェクトの利用

各プロジェクトの詳細は以下の README ファイルを参照：
- `quiz-app/README.md` - Vue 3 クイズアプリケーション
- `7-bank-project/README.md` - 認証付き銀行アプリ
- `5-browser-extension/README.md` - ブラウザー拡張機能開発
- `6-space-game/README.md` - Canvasベースのゲーム
- `9-chat-project/README.md` - AIチャットアシスタントプロジェクト

### モノレポ構造

伝統的なモノレポではありませんが、複数の独立プロジェクトを含むリポジトリです：
- 各レッスンは独立型
- プロジェクト同士で依存性は共有しない
- 個別プロジェクトに集中可能
- カリキュラム全体体験には全リポジトリのクローンが推奨される

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**:  
本書類は AI 翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確さを期していますが、自動翻訳には誤りや不正確な部分が含まれる場合があることをご理解ください。原文のネイティブ言語による資料が権威ある情報源とみなされるべきです。重要な情報については、専門の人間翻訳を推奨します。本翻訳の使用により生じた誤解や誤訳について、当方は一切の責任を負いません。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->