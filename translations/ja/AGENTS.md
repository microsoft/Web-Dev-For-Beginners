<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:18:51+00:00",
  "source_file": "AGENTS.md",
  "language_code": "ja"
}
-->
# AGENTS.md

## プロジェクト概要

このリポジトリは、初心者向けにウェブ開発の基礎を教える教育カリキュラムです。Microsoft Cloud Advocatesによって開発された包括的な12週間のコースで、JavaScript、CSS、HTMLを扱う24の実践的なレッスンが含まれています。

### 主な構成要素

- **教育コンテンツ**: プロジェクトベースのモジュールに整理された24の構造化されたレッスン
- **実践プロジェクト**: テラリウム、タイピングゲーム、ブラウザ拡張機能、スペースゲーム、銀行アプリ、コードエディタ、AIチャットアシスタント
- **インタラクティブクイズ**: 各レッスンの前後に3問ずつの48のクイズ
- **多言語対応**: GitHub Actionsを使用した50以上の言語への自動翻訳
- **使用技術**: HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト用）

### アーキテクチャ

- レッスンベースの構造を持つ教育リポジトリ
- 各レッスンフォルダにはREADME、コード例、解答が含まれる
- 独立したプロジェクトは別ディレクトリに配置（quiz-app、各レッスンプロジェクト）
- GitHub Actionsを使用した翻訳システム（co-op-translator）
- Docsifyで提供され、PDFとしても利用可能なドキュメント

## セットアップコマンド

このリポジトリは主に教育コンテンツの利用を目的としています。特定のプロジェクトを操作する場合:

### メインリポジトリのセットアップ

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### クイズアプリのセットアップ (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### 銀行プロジェクトAPI (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### ブラウザ拡張機能プロジェクト

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### スペースゲームプロジェクト

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### チャットプロジェクト (Pythonバックエンド)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## 開発ワークフロー

### コンテンツ貢献者向け

1. **リポジトリをフォーク**してGitHubアカウントにコピー
2. **フォークをローカルにクローン**
3. **変更用の新しいブランチを作成**
4. レッスンコンテンツやコード例を変更
5. 関連するプロジェクトディレクトリでコード変更をテスト
6. 貢献ガイドラインに従ってプルリクエストを送信

### 学習者向け

1. リポジトリをフォークまたはクローン
2. レッスンディレクトリを順番に進む
3. 各レッスンのREADMEファイルを読む
4. https://ff-quizzes.netlify.app/web/ で事前クイズを完了
5. レッスンフォルダ内のコード例を実践
6. 課題やチャレンジを完了
7. レッスン後のクイズを受ける

### ライブ開発

- **ドキュメント**: ルートで`docsify serve`を実行 (ポート3000)
- **クイズアプリ**: quiz-appディレクトリで`npm run dev`を実行
- **プロジェクト**: HTMLプロジェクトにはVS Code Live Server拡張機能を使用
- **APIプロジェクト**: 該当するAPIディレクトリで`npm start`を実行

## テスト手順

### クイズアプリのテスト

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### 銀行APIのテスト

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### 一般的なテストアプローチ

- このリポジトリは教育目的であり、包括的な自動テストは含まれていません
- 手動テストの焦点:
  - コード例がエラーなく実行されること
  - ドキュメント内のリンクが正しく動作すること
  - プロジェクトのビルドが正常に完了すること
  - 例がベストプラクティスに従っていること

### 提出前のチェック

- `npm run lint`をpackage.jsonがあるディレクトリで実行
- Markdownリンクが有効であることを確認
- ブラウザまたはNode.jsでコード例をテスト
- 翻訳が適切な構造を維持していることを確認

## コードスタイルガイドライン

### JavaScript

- 最新のES6+構文を使用
- プロジェクトで提供される標準ESLint設定に従う
- 教育的な明確さのために意味のある変数名と関数名を使用
- 学習者向けに概念を説明するコメントを追加
- Prettierを使用してフォーマット（設定されている場合）

### HTML/CSS

- セマンティックHTML5要素
- レスポンシブデザインの原則
- 明確なクラス命名規則
- 学習者向けにCSS技術を説明するコメント

### Python

- PEP 8スタイルガイドライン
- 明確で教育的なコード例
- 学習に役立つ場合は型ヒントを追加

### Markdownドキュメント

- 明確な見出し階層
- 言語指定付きのコードブロック
- 追加リソースへのリンク
- `images/`ディレクトリ内のスクリーンショットと画像
- アクセシビリティのための画像の代替テキスト

### ファイル構成

- レッスンは順番に番号付け（1-getting-started-lessons, 2-js-basicsなど）
- 各プロジェクトには`solution/`としばしば`start/`または`your-work/`ディレクトリが含まれる
- 画像はレッスン固有の`images/`フォルダに保存
- 翻訳は`translations/{language-code}/`構造に保存

## ビルドとデプロイ

### クイズアプリのデプロイ (Azure Static Web Apps)

クイズアプリはAzure Static Web Appsデプロイ用に設定されています:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Appsの設定:
- **アプリの場所**: `/quiz-app`
- **出力場所**: `dist`
- **ワークフロー**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### ドキュメントPDF生成

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsifyドキュメント

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### プロジェクト固有のビルド

各プロジェクトディレクトリには独自のビルドプロセスがある場合があります:
- Vueプロジェクト: `npm run build`でプロダクションバンドルを作成
- 静的プロジェクト: ビルドステップなし、ファイルを直接提供

## プルリクエストガイドライン

### タイトル形式

変更内容を明確に示すタイトルを使用:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### 必須チェック

PRを送信する前に:

1. **コード品質**:
   - 該当するプロジェクトディレクトリで`npm run lint`を実行
   - すべてのリントエラーと警告を修正

2. **ビルド確認**:
   - 該当する場合は`npm run build`を実行
   - ビルドエラーがないことを確認

3. **リンク検証**:
   - すべてのMarkdownリンクをテスト
   - 画像参照が正しく動作することを確認

4. **コンテンツレビュー**:
   - スペルと文法を校正
   - コード例が正確で教育的であることを確認
   - 翻訳が元の意味を維持していることを確認

### 貢献要件

- Microsoft CLAに同意（最初のPRで自動チェック）
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)に従う
- 詳細なガイドラインは[CONTRIBUTING.md](./CONTRIBUTING.md)を参照
- 該当する場合はPR説明に問題番号を記載

### レビュープロセス

- メンテナーとコミュニティによるPRレビュー
- 教育的な明確さを優先
- コード例は最新のベストプラクティスに従うべき
- 翻訳は正確性と文化的適切性を確認

## 翻訳システム

### 自動翻訳

- GitHub Actionsとco-op-translatorワークフローを使用
- 50以上の言語に自動翻訳
- メインディレクトリ内のソースファイル
- 翻訳ファイルは`translations/{language-code}/`ディレクトリに保存

### 手動翻訳改善の追加

1. `translations/{language-code}/`内のファイルを見つける
2. 構造を維持しながら改善を行う
3. コード例が機能することを確認
4. ローカライズされたクイズコンテンツをテスト

### 翻訳メタデータ

翻訳ファイルにはメタデータヘッダーが含まれる:
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

**クイズアプリが起動しない**:
- Node.jsのバージョンを確認 (推奨: v14以上)
- `node_modules`と`package-lock.json`を削除し、再度`npm install`を実行
- ポート競合を確認 (デフォルト: Viteはポート5173を使用)

**APIサーバーが起動しない**:
- Node.jsのバージョンが最低要件を満たしていることを確認 (node >=10)
- ポートがすでに使用されていないか確認
- `npm install`ですべての依存関係がインストールされていることを確認

**ブラウザ拡張機能が読み込まれない**:
- manifest.jsonが正しくフォーマットされていることを確認
- ブラウザコンソールでエラーを確認
- ブラウザ固有の拡張機能インストール手順に従う

**Pythonチャットプロジェクトの問題**:
- OpenAIパッケージがインストールされていることを確認: `pip install openai`
- GITHUB_TOKEN環境変数が設定されていることを確認
- GitHub Modelsのアクセス権限を確認

**Docsifyがドキュメントを提供しない**:
- docsify-cliをグローバルにインストール: `npm install -g docsify-cli`
- リポジトリのルートディレクトリから実行
- `docs/_sidebar.md`が存在することを確認

### 開発環境のヒント

- HTMLプロジェクトにはVS CodeのLive Server拡張機能を使用
- 一貫したフォーマットのためにESLintとPrettier拡張機能をインストール
- JavaScriptのデバッグにはブラウザのDevToolsを使用
- VueプロジェクトにはVue DevToolsブラウザ拡張機能をインストール

### パフォーマンスの考慮事項

- 翻訳ファイルが多い（50以上の言語）ため、完全なクローンはサイズが大きい
- コンテンツのみを操作する場合は浅いクローンを使用: `git clone --depth 1`
- 英語コンテンツを操作する際は翻訳を検索から除外
- 初回実行時のビルドプロセスは遅い場合がある（npm install、Vite build）

## セキュリティの考慮事項

### 環境変数

- APIキーはリポジトリにコミットしない
- `.env`ファイルを使用（すでに`.gitignore`に含まれている）
- 必要な環境変数はプロジェクトREADMEに記載

### Pythonプロジェクト

- 仮想環境を使用: `python -m venv venv`
- 依存関係を最新に保つ
- GitHubトークンは最小限の必要な権限を持つべき

### GitHub Modelsのアクセス

- GitHub Modelsには個人アクセストークン（PAT）が必要
- トークンは環境変数として保存
- トークンや資格情報をコミットしない

## 追加の注意事項

### 対象読者

- ウェブ開発初心者
- 学生や自己学習者
- 教室でカリキュラムを使用する教師
- コンテンツはアクセシビリティと段階的なスキル構築を重視

### 教育哲学

- プロジェクトベースの学習アプローチ
- 頻繁な知識チェック（クイズ）
- 実践的なコーディング演習
- 実世界の応用例
- フレームワークよりも基礎に重点を置く

### リポジトリの維持管理

- 学習者と貢献者の活発なコミュニティ
- 依存関係とコンテンツの定期的な更新
- メンテナーによる問題とディスカッションの監視
- GitHub Actionsによる翻訳の自動更新

### 関連リソース

- [Microsoft Learnモジュール](https://docs.microsoft.com/learn/)
- [Student Hubリソース](https://docs.microsoft.com/learn/student-hub/)
- 学習者向けに推奨される[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- その他のコース: 生成AI、データサイエンス、ML、IoTカリキュラムが利用可能

### 特定のプロジェクトの操作

個々のプロジェクトに関する詳細な手順は以下のREADMEファイルを参照:
- `quiz-app/README.md` - Vue 3クイズアプリケーション
- `7-bank-project/README.md` - 認証付き銀行アプリケーション
- `5-browser-extension/README.md` - ブラウザ拡張機能開発
- `6-space-game/README.md` - Canvasベースのゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタントプロジェクト

### モノレポ構造

従来のモノレポではありませんが、このリポジトリには複数の独立したプロジェクトが含まれています:
- 各レッスンは自己完結型
- プロジェクトは依存関係を共有しない
- 個々のプロジェクトで作業しても他に影響を与えない
- カリキュラム全体を体験するにはリポジトリ全体をクローン

---

**免責事項**:  
この文書は、AI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源とみなしてください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。