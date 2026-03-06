# AGENTS.md

## Project Overview

これは初心者にウェブ開発の基礎を教えるための教育用カリキュラムリポジトリです。Microsoft Cloud Advocatesによって開発された12週間の包括的なコースで、JavaScript、CSS、およびHTMLをカバーする24の実践的なレッスンが含まれています。

### Key Components

- **Educational Content**: プロジェクトベースのモジュールに整理された24の構造化されたレッスン
- **Practical Projects**: テラリウム、タイピングゲーム、ブラウザ拡張機能、スペースゲーム、バンキングアプリ、コードエディター、AIチャットアシスタント
- **Interactive Quizzes**: 各3問のクイズ48回（レッスン前後の評価）
- **Multi-language Support**: GitHub Actionsによる50以上の言語の自動翻訳
- **Technologies**: HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト用）

### Architecture

- レッスンベースの構造を持つ教育用リポジトリ
- 各レッスンフォルダーにはREADME、コード例、解決策を含む
- 独立したプロジェクトは別ディレクトリに配置（quiz-app、各種レッスンプロジェクト）
- GitHub Actionsを使った翻訳システム（co-op-translator）
- Docsifyを通じたドキュメント提供およびPDF形式での利用可能

## Setup Commands

このリポジトリは主に教育コンテンツの利用を目的としています。特定プロジェクトに取り組む場合は以下を参照してください：

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 開発サーバーを起動する
npm run build      # 本番用にビルドする
npm run lint       # ESLintを実行する
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # APIサーバーを起動する
npm run lint       # ESLintを実行する
npm run format     # Prettierでフォーマットする
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# ブラウザ固有の拡張機能読み込み手順に従ってください
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# ブラウザでindex.htmlを開くか、Live Serverを使用してください
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 環境変数を設定する
python api.py
```

## Development Workflow

### For Content Contributors

1. **リポジトリをフォーク**してGitHubアカウントにコピー
2. **フォークをローカルにクローン**
3. **変更用の新しいブランチを作成**
4. レッスンの内容またはコード例を編集
5. 関連プロジェクトディレクトリでコードをテスト
6. 貢献ガイドラインに従ってプルリクエストを提出

### For Learners

1. リポジトリをフォークまたはクローン
2. レッスンディレクトリを順に進む
3. 各レッスンのREADMEを読む
4. https://ff-quizzes.netlify.app/web/ で事前クイズを完了
5. レッスンフォルダ内のコード例を実行
6. 課題やチャレンジを終える
7. 事後クイズを受ける

### Live Development

- **Documentation**: ルートで `docsify serve` を実行（ポート3000）
- **Quiz App**: quiz-appディレクトリ内で `npm run dev` を実行
- **Projects**: HTMLプロジェクトはVS Code Live Server拡張機能を利用
- **API Projects**: 各APIディレクトリで `npm start` を実行

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # コードスタイルの問題をチェックする
npm run build      # ビルドが成功することを確認する
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # コードスタイルの問題をチェックする
node server.js     # サーバーがエラーなく起動するか確認する
```

### General Testing Approach

- 教育用リポジトリのため包括的な自動テストは無し
- 手動テストの主なポイント：
  - エラーなくコード例が実行されること
  - ドキュメントのリンクが正しく機能すること
  - プロジェクトのビルドが成功すること
  - コード例がベストプラクティスに準拠していること

### Pre-submission Checks

- package.jsonがあるディレクトリで `npm run lint` を実行
- Markdownリンクの有効性を検証
- ブラウザやNode.jsでコード例をテスト
- 翻訳が正しい構造を維持していることを確認

## Code Style Guidelines

### JavaScript

- モダンES6以降の構文を使用
- プロジェクトに提供された標準のESLint設定に従う
- 教育用に意味のある変数名、関数名を使用
- 学習者向けにコンセプトを説明するコメントを追加
- 設定された場合はPrettierでフォーマット

### HTML/CSS

- セマンティックなHTML5要素を使用
- レスポンシブデザインの原則
- 明確なクラス命名規則
- 学習者向けにCSS技術の説明コメントを付加

### Python

- PEP 8スタイルガイドラインを遵守
- 分かりやすく教育的なコード例
- 学習に役立つ場合は型ヒントを使用

### Markdown Documentation

- 明確な見出し階層
- 言語指定をしたコードブロック
- 追加リソースへのリンク
- `images/`ディレクトリ内のスクリーンショットや画像
- アクセシビリティのための画像の代替テキスト

### File Organization

- レッスンは連番で管理（1-getting-started-lessons、2-js-basicsなど）
- 各プロジェクトに `solution/` と多くの場合 `start/` または `your-work/` ディレクトリあり
- 画像はレッスンごとの `images/` フォルダに格納
- 翻訳は `translations/{language-code}/` 構造

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-appはAzure Static Web Apps向けに設定されています：

```bash
cd quiz-app
npm run build      # dist/ フォルダを作成します
# main ブランチへのプッシュ時に GitHub Actions ワークフローを通じてデプロイします
```

Azure Static Web Appsの設定：
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdfをインストールする
npm run convert               # docsからPDFを生成する
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsifyをグローバルにインストールする
docsify serve                 # localhost:3000で提供する
```

### Project-specific Builds

各プロジェクトディレクトリには独自のビルドプロセスがある場合があります：
- Vueプロジェクト： `npm run build` で本番用バンドル作成
- 静的プロジェクト： ビルドなしで直接ファイルを提供

## Pull Request Guidelines

### Title Format

変更内容が分かりやすいタイトルを使用：
- `[Quiz-app] レッスンX用新規クイズ追加`
- `[Lesson-3] テラリウムプロジェクトの誤字修正`
- `[Translation] レッスン5のスペイン語翻訳追加`
- `[Docs] セットアップ手順更新`

### Required Checks

PR提出前に：

1. **コード品質**：
   - 影響のあるプロジェクトディレクトリで `npm run lint` 実行
   - すべての警告・エラーを修正

2. **ビルド確認**：
   - 該当する場合は `npm run build` 実行
   - ビルドエラーなしを確認

3. **リンク検証**：
   - すべてのMarkdownリンクをテスト
   - 画像参照が機能するか確認

4. **内容チェック**：
   - スペルや文法の校正
   - コード例が正しく教育的であること
   - 翻訳が原文の意味を維持していること

### Contribution Requirements

- Microsoft CLAに同意（最初のPR時に自動チェック）
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)に従う
- 詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照
- PR説明に関連Issue番号を記載（該当時）

### Review Process

- PRはメンテナーおよびコミュニティがレビュー
- 教育上の分かりやすさを優先
- コード例は最新のベストプラクティスに準拠していること
- 翻訳は正確さと文化的適合性を確認

## Translation System

### Automated Translation

- GitHub Actionsのco-op-translatorワークフローを利用
- 50以上の言語に自動翻訳
- ソースファイルは主要ディレクトリに配置
- 翻訳ファイルは `translations/{language-code}/` に配置

### Adding Manual Translation Improvements

1. `translations/{language-code}/`内のファイルを見つける
2. 構造を維持しつつ改善を行う
3. コード例が動作し続けることを保証
4. ローカライズしたクイズ内容をテスト

### Translation Metadata

翻訳ファイルにはメタデータヘッダーが含まれます：
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

## Debugging and Troubleshooting

### Common Issues

**Quiz appが起動しない場合**：
- Node.jsバージョンを確認（v14+推奨）
- `node_modules` と `package-lock.json` を削除して再度 `npm install`
- ポート競合を確認（デフォルトはViteのポート5173）

**APIサーバーが起動しない場合**：
- Node.jsバージョンが要件(node >=10)を満たしているか確認
- ポートが既に使用中でないかチェック
- 依存パッケージを `npm install` でインストール済みか確認

**ブラウザ拡張機能が読み込まれない場合**：
- manifest.jsonの形式が正しいか検証
- ブラウザのコンソールでエラーを確認
- ブラウザごとの拡張機能インストール手順に従う

**Pythonチャットプロジェクトの問題**：
- OpenAIパッケージがインストール済みか確認：`pip install openai`
- GITHUB_TOKEN環境変数が設定されているか確認
- GitHub Modelsのアクセス権をチェック

**Docsifyがドキュメントを配信しない場合**：
- docsify-cliをグローバルにインストール：`npm install -g docsify-cli`
- リポジトリルートから実行
- `docs/_sidebar.md` が存在するか確認

### Development Environment Tips

- HTMLプロジェクトはVS CodeのLive Server拡張機能を使用
- 一貫したフォーマットのためESLintとPrettier拡張をインストール
- JavaScriptのデバッグにブラウザのDevToolsを活用
- VueプロジェクトにはVue DevToolsブラウザ拡張をインストール

### Performance Considerations

- 50以上の言語の大量翻訳ファイルによりフルクローンは大きい
- コンテンツのみ作業する場合は浅いクローンを使用：`git clone --depth 1`
- 英語コンテンツ作業時は翻訳を検索対象から除外
- 初回実行時はnpm installやViteビルドで遅延が発生することもある

## Security Considerations

### Environment Variables

- APIキーをリポジトリにコミットしてはいけません
- `.env` ファイルを使用（`.gitignore` に含まれています）
- 必要な環境変数はプロジェクトのREADMEに記述

### Python Projects

- 仮想環境を使用する：`python -m venv venv`
- 依存関係を最新に保つ
- GitHubトークンは最小権限で管理

### GitHub Models Access

- GitHub ModelsにはPersonal Access Tokens（PAT）が必要
- トークンは環境変数として管理
- トークンや認証情報を絶対にコミットしない

## Additional Notes

### Target Audience

- ウェブ開発の完全初心者
- 学習者および自主学習者
- 教室でカリキュラムを使用する教師
- アクセシビリティと段階的なスキルアップを重視した内容

### Educational Philosophy

- プロジェクトベースの学習アプローチ
- 頻繁な知識チェック（クイズ）
- 実践的なコーディング演習
- 実世界の応用例
- フレームワーク前の基礎重視

### Repository Maintenance

- 活発な学習者と貢献者コミュニティ
- 依存関係やコンテンツの定期更新
- メンテナーによる課題と議論の監視
- GitHub Actionsを利用した翻訳更新の自動化

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- 学習者に推奨される [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- その他のコース：生成AI、データサイエンス、機械学習、IoTカリキュラムなど

### Working with Specific Projects

個別プロジェクトの詳細な手順は以下のREADMEを参照：
- `quiz-app/README.md` - Vue 3のクイズアプリ
- `7-bank-project/README.md` - 認証付きバンキングアプリ
- `5-browser-extension/README.md` - ブラウザ拡張機能開発
- `6-space-game/README.md` - Canvasベースのゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタントプロジェクト

### Monorepo Structure

伝統的なモノレポではないものの、このリポジトリは複数の独立プロジェクトを含みます：
- 各レッスンは自己完結型
- プロジェクト間で依存関係を共有しない
- 個別プロジェクトを他に影響なく作業可能
- カリキュラム全体を体験するにはリポジトリ全体をクローンしてください

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**：  
この文書は、AI翻訳サービス「Co-op Translator」（https://github.com/Azure/co-op-translator）を使用して翻訳されています。正確性を期しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。原文が正式な情報源となります。重要な情報については、専門の人間による翻訳をお勧めします。本翻訳の利用により生じたいかなる誤解や誤訳についても、当方は責任を負いかねます。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->