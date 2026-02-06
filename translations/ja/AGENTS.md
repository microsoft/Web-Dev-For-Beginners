# AGENTS.md

## プロジェクト概要

これは、初心者にウェブ開発の基本を教えるための教育カリキュラムリポジトリです。このカリキュラムは、Microsoft Cloud Advocatesによって開発された包括的な12週間のコースで、JavaScript、CSS、HTMLをカバーする24の実践的なレッスンが含まれています。

### 主な構成要素

- **教育コンテンツ**: プロジェクトベースのモジュールに編成された24の構造化されたレッスン
- **実践プロジェクト**: テラリウム、タイピングゲーム、ブラウザー拡張機能、スペースゲーム、バンキングアプリ、コードエディター、AIチャットアシスタント
- **インタラクティブクイズ**: 各レッスン前後の評価として3問×48クイズ
- **多言語対応**: GitHub Actionsによる50以上の言語への自動翻訳
- **技術スタック**: HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト向け）

### アーキテクチャ

- レッスンベースの構造を持つ教育用リポジトリ
- 各レッスンフォルダにはREADME、コード例、解答例を含む
- 独立したプロジェクトは別ディレクトリ（quiz-app、各種レッスンプロジェクト）
- GitHub Actions（co-op-translator）を用いた翻訳システム
- Docsifyで提供され、PDFでも利用可能なドキュメント

## セットアップコマンド

このリポジトリは主に教育コンテンツの閲覧用です。特定のプロジェクトを扱う場合は以下を参照してください。

### メインリポジトリセットアップ

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### クイズアプリセットアップ (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 開発サーバーを起動する
npm run build      # 本番用にビルドする
npm run lint       # ESLintを実行する
```

### バンクプロジェクトAPI (Node.js + Express)

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

### スペースゲームプロジェクト

```bash
cd 6-space-game/solution
npm install
# index.htmlをブラウザで開くか、Live Serverを使用してください
```

### チャットプロジェクト (Pythonバックエンド)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 環境変数を設定する
python api.py
```

## 開発ワークフロー

### コンテンツ寄稿者向け

1. **リポジトリをフォーク**し、ご自身のGitHubアカウントに
2. **フォークしたリポジトリをクローン**
3. **変更用の新しいブランチを作成**
4. レッスンコンテンツやコード例を編集
5. 関連プロジェクトディレクトリでコード変更をテスト
6. 寄稿ガイドラインに従いプルリクエストを提出

### 学習者向け

1. リポジトリをフォークまたはクローン
2. レッスンディレクトリを順に進む
3. 各レッスンのREADMEを読む
4. https://ff-quizzes.netlify.app/web/ でレッスン前クイズに挑戦
5. レッスンフォルダ内のコード例を実施
6. 課題やチャレンジを完了
7. レッスン後クイズに挑戦

### ライブ開発

- **ドキュメント**: ルートで `docsify serve` を実行（ポート3000）
- **クイズアプリ**: quiz-appディレクトリで `npm run dev`
- **プロジェクト**: HTMLプロジェクトはVS Code Live Server拡張使用推奨
- **APIプロジェクト**: それぞれのAPIディレクトリで `npm start`

## テスト手順

### クイズアプリテスト

```bash
cd quiz-app
npm run lint       # コードスタイルの問題をチェックする
npm run build      # ビルドが成功することを確認する
```

### バンクAPIテスト

```bash
cd 7-bank-project/api
npm run lint       # コードスタイルの問題をチェックする
node server.js     # エラーなしでサーバーが起動するか確認する
```

### 一般的なテストアプローチ

- 本リポジトリは包括的な自動テストを備えていません
- 手動テストは以下に焦点を当てています：
  - コード例がエラーなく動作すること
  - ドキュメント内のリンクが正常に機能すること
  - プロジェクトのビルドが成功すること
  - 例がベストプラクティスに従っていること

### プルリク前チェック

- package.jsonのあるディレクトリで `npm run lint` を実行
- マークダウンリンクの検証
- ブラウザまたはNode.jsでコード例をテスト
- 翻訳が正しい構造を維持しているか確認

## コードスタイルガイドライン

### JavaScript

- 最新のES6+構文を使用
- 各プロジェクトの標準ESLint設定に従う
- 教育目的で意味の明確な変数・関数名を使用
- 学習者向けに概念説明のコメントを付記
- Prettierでフォーマット（設定がある場合）

### HTML/CSS

- セマンティックHTML5要素の使用
- レスポンシブデザイン原則
- 明確なクラス名付け規則
- CSS技術の説明コメントを追加

### Python

- PEP 8スタイルガイドライン準拠
- 教育的で分かりやすいコード例
- 学習に役立つ場合はタイプヒントを使用

### Markdownドキュメント

- 明確な見出し階層
- 言語指定されたコードブロック
- 追加リソースへのリンク
- `images/`フォルダ内のスクリーンショットや画像
- 画像のアクセシビリティ用altテキスト

### ファイル構成

- レッスンは連番付け（1-getting-started-lessons、2-js-basicsなど）
- 各プロジェクトに `solution/` と多くの場合 `start/` または `your-work/` ディレクトリあり
- 画像はレッスン固有の `images/` フォルダーに保存
- 翻訳は `translations/{language-code}/` フォルダ構造

## ビルドとデプロイ

### クイズアプリのデプロイ（Azure Static Web Apps）

quiz-appはAzure Static Web Apps用に構成されています：

```bash
cd quiz-app
npm run build      # dist/ フォルダーを作成します
# main ブランチへのプッシュ時に GitHub Actions ワークフローを通じてデプロイします
```

Azure Static Web Appsの構成：
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### ドキュメントPDF生成

```bash
npm install                    # docsify-to-pdf をインストールする
npm run convert               # docs から PDF を生成する
```

### Docsifyドキュメント

```bash
npm install -g docsify-cli    # Docsifyをグローバルにインストールする
docsify serve                 # localhost:3000でサーブする
```

### プロジェクト別ビルド

各プロジェクトディレクトリに固有のビルド手順がある場合があります：
- Vueプロジェクト：`npm run build` で本番用バンドル作成
- 静的プロジェクト：ビルド不要で直接ファイル提供

## プルリクエストガイドライン

### タイトルフォーマット

変更箇所が分かりやすい明確なタイトルを使用：
- `[Quiz-app] レッスンXの新クイズを追加`
- `[Lesson-3] テラリウムプロジェクトのタイプミス修正`
- `[Translation] レッスン5のスペイン語翻訳を追加`
- `[Docs] セットアップ手順を更新`

### 必須チェック

PR提出前に以下を確認：

1. **コード品質**：
   - 変更対象プロジェクトディレクトリで `npm run lint`
   - すべてのエラーと警告を修正

2. **ビルド確認**：
   - 必要に応じて `npm run build` 実行
   - ビルドエラーなしを確認

3. **リンク検証**：
   - すべてのマークダウンリンクをテスト
   - 画像参照の動作確認

4. **コンテンツレビュー**：
   - 誤字脱字チェック
   - コード例が正確で教育的であること
   - 翻訳が原文の意味を維持していること

### 寄稿要件

- Microsoft CLAに同意（初回PRで自動チェック）
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) に従う
- 詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照
- 可能な場合はPR説明にIssue番号を記載

### レビュー手順

- 守備者とコミュニティによるレビュー
- 教育的明瞭さを最優先
- コード例は最新のベストプラクティスに準拠
- 翻訳は正確さと文化的適切さをチェック

## 翻訳システム

### 自動翻訳

- GitHub Actionsのco-op-translatorワークフローを使用
- 50以上の言語に自動翻訳
- ソースファイルはメインディレクトリ
- 翻訳ファイルは `translations/{language-code}/` 配下

### 手動翻訳改善の追加

1. `translations/{language-code}/` 内のファイルを特定
2. 構造を維持したまま改善
3. コード例は機能したままであることを確認
4. ローカライズされたクイズもテスト

### 翻訳メタデータ

翻訳ファイルにはメタデータヘッダーを含みます：
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

**クイズアプリが起動しない場合**：
- Node.jsバージョンを確認（v14以上推奨）
- `node_modules` と `package-lock.json` を削除し、`npm install` を再実行
- ポート競合がないか確認（既定はViteのポート5173）

**APIサーバーが起動しない場合**：
- Node.jsのバージョンが最低限（node >=10）を満たしているか
- ポートがすでに使用されていないか確認
- すべての依存関係が `npm install` でインストールされていること

**ブラウザー拡張機能が読み込まれない場合**：
- manifest.jsonが正しいフォーマットか確認
- ブラウザのコンソールでエラーをチェック
- ブラウザ固有の拡張インストール手順に従う

**Pythonチャットプロジェクトの問題**：
- OpenAIパッケージがインストール済みか `pip install openai`
- GITHUB_TOKEN環境変数が設定済みか
- GitHub Modelsへのアクセス権を確認

**Docsifyがドキュメントを配信しない場合**：
- docsify-cliをグローバルにインストール： `npm install -g docsify-cli`
- リポジトリルートで実行
- `docs/_sidebar.md` が存在するか確認

### 開発環境のヒント

- HTMLプロジェクトにはVS CodeのLive Server拡張を使用
- ESLintとPrettier拡張をインストールしてコード整形を統一
- ブラウザのDevToolsでJavaScriptをデバッグ
- VueプロジェクトにはVue DevToolsブラウザ拡張を使用

### パフォーマンス関連

- 50以上の言語の翻訳ファイルがあるため、完全クローンは大きい
- コンテンツ作業のみなら浅いクローン推奨：`git clone --depth 1`
- 英語コンテンツ作業時は翻訳を検索対象から除外推奨
- 初回のビルド処理（npm installやViteビルド）は遅いことがある

## セキュリティに関する注意

### 環境変数

- APIキーはリポジトリにコミットしない
- `.env`ファイルを使用（.gitignoreに含まれている）
- 必要な環境変数はプロジェクトのREADMEに記載

### Pythonプロジェクト

- 仮想環境の使用を推奨： `python -m venv venv`
- 依存関係は最新に保つ
- GitHubトークンは最小限の権限で管理

### GitHub Modelsアクセス

- GitHub Modelsには個人アクセストークン（PAT）が必要
- トークンは環境変数として管理
- トークンや認証情報は決してコミットしない

## 付加情報

### 対象ユーザー

- ウェブ開発完全初心者
- 学生や独学者
- 教室でカリキュラムを使う教師
- アクセシビリティと段階的な学習設計のコンテンツ

### 教育理念

- プロジェクトベースの学習手法
- 頻繁な知識確認（クイズ）
- 実践的なコーディング演習
- 現実世界の応用例
- フレームワークより基礎の重視

### リポジトリのメンテナンス

- 活発な学習者と寄稿者のコミュニティ
- 依存関係とコンテンツは定期的に更新
- イシューやディスカッションは管理者監視
- 翻訳更新はGitHub Actionsで自動化

### 関連リソース

- [Microsoft Learn モジュール](https://docs.microsoft.com/learn/)
- [Student Hub リソース](https://docs.microsoft.com/learn/student-hub/)
- 学習者に推奨される[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- その他コース：生成AI、データサイエンス、ML、IoTカリキュラム

### 個別プロジェクトの利用方法

各プロジェクトの詳細は以下のREADMEを参照してください：
- `quiz-app/README.md` - Vue 3クイズアプリケーション
- `7-bank-project/README.md` - 認証付きバンキングアプリケーション
- `5-browser-extension/README.md` - ブラウザー拡張機能開発
- `6-space-game/README.md` - Canvasベースのゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタントプロジェクト

### モノレポ構造について

伝統的なモノレポではありませんが、本リポジトリは複数の独立プロジェクトを含みます：
- 各レッスンは自己完結型
- プロジェクト間で依存関係を共有しない
- 個別プロジェクトに影響なく作業可能
- 全カリキュラム体験用にリポジトリ全体をクローン可能

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**：  
本書類はAI翻訳サービス「Co-op Translator」（https://github.com/Azure/co-op-translator）を使用して翻訳されています。正確性を期しておりますが、自動翻訳には誤りや不正確な部分が含まれる場合があります。原文の言語による文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。本翻訳の利用により生じた誤解や誤訳について、当方は一切の責任を負いかねます。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->