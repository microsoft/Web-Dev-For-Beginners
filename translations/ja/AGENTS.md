# AGENTS.md

## プロジェクト概要

これは初心者向けのWeb開発の基礎を教えるための教育カリキュラムリポジトリです。このカリキュラムはMicrosoft Cloud Advocatesによって開発された包括的な12週間コースで、JavaScript、CSS、HTMLをカバーする24の実践的なレッスンを含みます。

### 主な構成要素

- **教育コンテンツ**: プロジェクトベースのモジュールに整理された24の構造化されたレッスン
- **実践プロジェクト**: テラリウム、タイピングゲーム、ブラウザ拡張機能、スペースゲーム、バンキングアプリ、コードエディター、AIチャットアシスタント
- **インタラクティブクイズ**: 各3問の48のクイズ（レッスン前後の評価用）
- **多言語サポート**: GitHub Actionsを使用した50以上の言語への自動翻訳
- **技術スタック**: HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト向け）

### アーキテクチャ

- レッスンベースの構造をもつ教育リポジトリ
- 各レッスンフォルダーにはREADME、コード例、解答が含まれる
- 独立したプロジェクトは別ディレクトリに配置（quiz-app、各レッスンプロジェクト等）
- GitHub Actions（co-op-translator）による翻訳システム
- Docsifyを通じて文書配信、PDF版も提供

## セットアップコマンド

このリポジトリは主に教育コンテンツの利用を目的としています。特定のプロジェクトで作業する場合は次の通りです：

### メインリポジトリのセットアップ

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### クイズアプリのセットアップ（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 開発サーバーを起動する
npm run build      # 本番用にビルドする
npm run lint       # ESLintを実行する
```

### バンクプロジェクトAPI（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # APIサーバーを起動
npm run lint       # ESLintを実行
npm run format     # Prettierでフォーマット
```

### ブラウザ拡張機能プロジェクト

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

### チャットプロジェクト（Pythonバックエンド）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 環境変数を設定する
python api.py
```

## 開発ワークフロー

### コンテンツ寄稿者向け

1. リポジトリをGitHubアカウントに**フォーク**する
2. フォークをローカルに**クローン**する
3. 変更用に**新しいブランチ**を作成する
4. レッスンコンテンツやコード例を編集する
5. 関連プロジェクトディレクトリ内でコード変更をテストする
6. コントリビューションガイドラインに従ってプルリクエストを送る

### 学習者向け

1. リポジトリをフォークまたはクローンする
2. レッスンディレクトリを順に進む
3. 各レッスンのREADMEファイルを読む
4. https://ff-quizzes.netlify.app/web/ でレッスン前のクイズを完了する
5. レッスンフォルダ内のコード例を進める
6. 課題やチャレンジを完了する
7. レッスン後のクイズを受ける

### ライブ開発

- **ドキュメント**: ルートディレクトリで `docsify serve` を実行（ポート3000）
- **クイズアプリ**: quiz-appディレクトリで `npm run dev` を実行
- **プロジェクト**: HTMLプロジェクトにはVS Code Live Server拡張を使用
- **APIプロジェクト**: 各APIディレクトリで `npm start` を実行

## テスト手順

### クイズアプリのテスト

```bash
cd quiz-app
npm run lint       # コードスタイルの問題をチェックする
npm run build      # ビルドが成功することを確認する
```

### バンクAPIのテスト

```bash
cd 7-bank-project/api
npm run lint       # コードスタイルの問題をチェックする
node server.js     # サーバーがエラーなく起動することを確認する
```

### 一般的なテスト方針

- 包括的な自動テストはなく教育用リポジトリです
- 手動テストでは次を重点的に行います：
  - コード例がエラーなく動作すること
  - ドキュメント内リンクが正しく機能すること
  - プロジェクトのビルドが正常に完了すること
  - コード例がベストプラクティスに従っていること

### 提出前チェック

- package.jsonのあるディレクトリで`npm run lint`を実行
- マークダウンリンクの有効性を確認
- ブラウザまたはNode.jsでコード例をテスト
- 翻訳が構造を維持しているか確認

## コードスタイルガイドライン

### JavaScript

- 最新のES6+構文を使用
- プロジェクトに提供された標準ESLint設定に従う
- 教育のために意味のある変数・関数名を使う
- 学習者向けにコンセプトを説明するコメントを追加
- 設定されている場合はPrettierで整形

### HTML/CSS

- セマンティックなHTML5要素を使用
- レスポンシブデザインの原則を適用
- 明確なクラス命名規則
- CSS技術について学習者向けにコメントを付与

### Python

- PEP 8スタイルガイドラインに従う
- 分かりやすく教育的なコード例
- 学習支援として型ヒントを使用

### Markdownドキュメント

- 明確な見出し階層
- 言語指定ありのコードブロック
- 追加リソースへのリンク
- `images/`ディレクトリ内のスクリーンショットや画像
- アクセシビリティのための画像のaltテキスト

### ファイル構成

- レッスンは連番（1-getting-started-lessons、2-js-basicsなど）
- 各プロジェクトに`solution/`や`start/`、`your-work/`ディレクトリを配置
- 画像はレッスンごとの`images/`フォルダに保存
- 翻訳は`translations/{language-code}/`構造で管理

## ビルドとデプロイ

### クイズアプリのデプロイ（Azure Static Web Apps）

quiz-appはAzure Static Web Appsデプロイ向けに構成されています：

```bash
cd quiz-app
npm run build      # dist/ フォルダを作成する
# main へのプッシュ時に GitHub Actions ワークフローを通じてデプロイする
```

Azure Static Web Appsの設定：
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

各プロジェクトディレクトリに独自のビルドプロセスがある場合あり：
- Vueプロジェクト：`npm run build`で本番用バンドルを作成
- 静的プロジェクト：ビルド不要でファイル直接配信

## プルリクエストガイドライン

### タイトル形式

変更箇所が分かりやすい明確なタイトルを使う：
- `[Quiz-app] レッスンXの新クイズ追加`
- `[Lesson-3] Terrariumプロジェクトのタイプミス修正`
- `[Translation] レッスン5のスペイン語翻訳追加`
- `[Docs] セットアップ手順更新`

### 必須チェック

PR提出前に：

1. **コード品質**：
   - 該当プロジェクトディレクトリで`npm run lint`実行
   - すべての警告・エラーを修正

2. **ビルド検証**：
   - 適用可能なら`npm run build`を実行
   - ビルドエラーなしを確認

3. **リンク検証**：
   - 全マークダウンリンクをテスト
   - 画像参照が正しいか確認

4. **内容レビュー**：
   - スペルや文法の校正
   - コード例が正しく教育的であることの確認
   - 翻訳が原文の意味を維持しているかチェック

### コントリビューション要件

- Microsoft CLAに同意（初回PRで自動チェック）
- [Microsoft OSS行動規範](https://opensource.microsoft.com/codeofconduct/)を遵守
- 詳細は[CONTRIBUTING.md](./CONTRIBUTING.md)参照
- 必要に応じてPR説明にイシュー番号を記載

### レビュー手順

- PRはメンテナとコミュニティによるレビュー
- 教育的明確さを重視
- コード例は現行のベストプラクティスに準拠
- 翻訳は正確かつ文化的に適切であることを確認

## 翻訳システム

### 自動翻訳

- GitHub Actionsでco-op-translatorワークフローを使用
- 50以上の言語へ自動翻訳
- ソースファイルはメインディレクトリに配置
- 翻訳ファイルは`translations/{language-code}/`に配置

### 手動翻訳の改善追加

1. `translations/{language-code}/`内のファイルを特定
2. 構造を維持しつつ改善を加える
3. コード例が機能する状態を保つ
4. ローカライズされたクイズ内容をテスト

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

**クイズアプリが起動しない場合**：
- Node.jsのバージョンを確認（v14以上推奨）
- `node_modules`と`package-lock.json`を削除し再度 `npm install`
- ポート競合を確認（デフォルトはViteのポート5173）

**APIサーバーが起動しない場合**：
- Node.jsのバージョンが必要条件 (node >=10) を満たすか確認
- ポートが既に使用中でないかチェック
- 依存関係が全て`npm install`でインストール済みか確認

**ブラウザ拡張機能が読み込まれない場合**：
- manifest.json の形式が正しいか確認
- ブラウザコンソールのエラーをチェック
- ブラウザ固有の拡張インストール手順に従う

**Pythonチャットプロジェクトの問題**：
- OpenAIパッケージがインストールされているか確認：`pip install openai`
- GITHUB_TOKEN環境変数が設定されているか確認
- GitHub Modelsへのアクセス許可を確認

**Docsifyがドキュメントを提供しない**：
- docsify-cliをグローバルインストール：`npm install -g docsify-cli`
- リポジトリのルートディレクトリで実行
- `docs/_sidebar.md`が存在するかチェック

### 開発環境のヒント

- HTMLプロジェクトにはVS CodeのLive Server拡張を利用
- ESLintとPrettier拡張をインストールして一貫したフォーマットを維持
- JavaScriptのデバッグにブラウザのDevToolsを活用
- VueプロジェクトにはVue DevToolsブラウザ拡張をインストール

### パフォーマンスに関する注意

- 50以上の言語の翻訳ファイルが多いためフルクローンは大容量
- コンテンツのみ作業するなら浅いクローンを使用：`git clone --depth 1`
- 英語コンテンツ作業時は翻訳ファイルを検索から除外推奨
- 初回実行時のビルド処理は遅い場合あり（npm install、Viteビルド）

## セキュリティに関する注意点

### 環境変数

- APIキーはリポジトリに絶対コミットしないこと
- `.env`ファイルを利用（既に`.gitignore`に設定済み）
- 必須の環境変数はプロジェクトREADMEに記載

### Pythonプロジェクト

- 仮想環境を使用推奨：`python -m venv venv`
- 依存関係は常に最新に保つ
- GitHubトークンは必要最小限の権限で管理

### GitHub Modelsアクセス

- GitHub Models利用には個人アクセストークン（PAT）が必要
- トークンは環境変数として管理
- トークンや資格情報を絶対にコミットしない

## 追加ノート

### 対象ユーザー

- Web開発の完全な初心者
- 学生や独学者
- 教室でカリキュラムを使う教師
- アクセシビリティと段階的スキル構築を重視したコンテンツ

### 教育哲学

- プロジェクトベースの学習アプローチ
- 頻繁な知識チェック（クイズ）
- ハンズオンコーディング演習
- 実世界の応用例
- フレームワーク以前の基礎重視

### リポジトリ運用

- 活発な学習者とコントリビューターコミュニティ
- 依存関係とコンテンツの定期的な更新
- イシュー・ディスカッションはメンテナが監視
- 翻訳更新はGitHub Actionsで自動化

### 関連リソース

- [Microsoft Learnモジュール](https://docs.microsoft.com/learn/)
- [Student Hubリソース](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)（学習者に推奨）
- 追加コース：生成AI、データサイエンス、機械学習、IoTカリキュラムなど

### 各プロジェクトの作業

個別プロジェクトの詳細手順はそれぞれのREADMEを参照：
- `quiz-app/README.md` - Vue 3クイズアプリ
- `7-bank-project/README.md` - 認証付きバンキングアプリ
- `5-browser-extension/README.md` - ブラウザ拡張機能開発
- `6-space-game/README.md` - Canvasベースゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタントプロジェクト

### モノレポ構成

伝統的なモノレポではありませんが複数独立プロジェクトを含む：
- 各レッスンは自己完結型
- プロジェクト間で依存関係を共有しない
- それぞれ別個に作業可能
- フルカリキュラム体験のためにはリポジトリ全体をクローン

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**：  
本書類はAI翻訳サービス「Co-op Translator」（https://github.com/Azure/co-op-translator）を使用して翻訳されました。正確性に努めておりますが、自動翻訳には誤りや不正確な部分が含まれる場合があります。原文の言語による文書を権威ある情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨いたします。本翻訳の利用により生じた誤解や誤訳について、一切の責任を負いかねますのでご了承ください。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->