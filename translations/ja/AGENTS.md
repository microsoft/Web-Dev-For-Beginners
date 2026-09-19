# AGENTS.md

## プロジェクト概要

初心者にウェブ開発の基礎を教えるための教育用カリキュラムリポジトリです。このカリキュラムはMicrosoft Cloud Advocatesによって開発された包括的な12週間コースで、JavaScript、CSS、HTMLをカバーする24の実践的なレッスンで構成されています。

### 主要コンポーネント

- <strong>教育コンテンツ</strong>: プロジェクトベースのモジュールに整理された24の構造化されたレッスン
- <strong>実践プロジェクト</strong>: テラリウム、タイピングゲーム、ブラウザ拡張、スペースゲーム、バンキングアプリ、コードエディター、AIチャットアシスタント
- <strong>インタラクティブクイズ</strong>: 各3問の48クイズ（レッスン前後の評価用）
- <strong>多言語対応</strong>: GitHub Actionsによる50以上の言語への自動翻訳
- <strong>技術スタック</strong>: HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト用）

### アーキテクチャ

- レッスンベース構造を持つ教育リポジトリ
- 各レッスンフォルダーにREADME、コード例、ソリューションを含む
- 独立したプロジェクトは別ディレクトリに配置（quiz-app、各種レッスンプロジェクト）
- GitHub Actions（co-op-translator）を使った翻訳システム
- Docsifyでドキュメント提供およびPDF形式も利用可能

## セットアップコマンド

このリポジトリは主に教育コンテンツの消費を目的としています。特定のプロジェクトを扱う場合：

### メインリポジトリセットアップ

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App セットアップ（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 開発サーバーを起動する
npm run build      # 本番用にビルドする
npm run lint       # ESLintを実行する
```

### 銀行プロジェクトAPI（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # APIサーバーを起動する
npm run lint       # ESLintを実行する
npm run format     # Prettierでフォーマットする
```

### ブラウザ拡張プロジェクト

```bash
cd 5-browser-extension/solution
npm install
# ブラウザ固有の拡張機能読み込み手順に従ってください
```

### スペースゲームプロジェクト

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

1. GitHubアカウントにリポジトリを<strong>フォーク</strong>
2. フォークをローカルに<strong>クローン</strong>
3. 変更用に<strong>新しいブランチを作成</strong>
4. レッスン内容やコード例を編集
5. 関連するプロジェクトディレクトリでコード変更をテスト
6. 貢献ガイドラインに従ってプルリクエストを提出

### 学習者向け

1. リポジトリをフォークまたはクローン
2. レッスンディレクトリに順に移動
3. 各レッスンのREADMEを読む
4. https://ff-quizzes.netlify.app/web/ でレッスン前クイズを完了
5. レッスンフォルダー内のコード例を進める
6. 課題やチャレンジを完了
7. レッスン後クイズを受験

### ライブ開発

- <strong>ドキュメント</strong>: ルートで `docsify serve` （ポート3000）
- **Quiz App**: quiz-appディレクトリで `npm run dev`
- <strong>プロジェクト</strong>: HTMLプロジェクトにVS Code Live Server拡張を使用
- **APIプロジェクト**: 各APIディレクトリで `npm start`

## テスト手順

### Quiz App テスト

```bash
cd quiz-app
npm run lint       # コードスタイルの問題をチェックする
npm run build      # ビルドが成功するか確認する
```

### 銀行APIテスト

```bash
cd 7-bank-project/api
npm run lint       # コードスタイルの問題をチェックする
node server.js     # サーバーがエラーなく起動することを確認する
```

### 一般的なテストアプローチ

- 包括的な自動テストはない教育用リポジトリ
- 手動テストは主に以下に焦点を当てる：
  - コード例がエラーなく実行されること
  - ドキュメント内リンクが正しく機能すること
  - プロジェクトのビルドが成功すること
  - 例がベストプラクティスに従っていること

### 提出前チェック

- package.jsonがあるディレクトリで `npm run lint` を実行
- マークダウンリンクが有効か確認
- ブラウザやNode.jsでコード例をテスト
- 翻訳が構造を保っていることをチェック

## コードスタイルガイドライン

### JavaScript

- モダンなES6+構文を使用
- プロジェクト提供の標準ESLint設定に従う
- 教育的な明確さのため意味のある変数・関数名を使う
- 学習者向けに概念を説明するコメントを追加
- 設定されている場合はPrettierで整形

### HTML/CSS

- セマンティックなHTML5要素
- レスポンシブデザインの原則
- 明瞭なクラス名命名規則
- 学習者向けにCSS技術を説明するコメント

### Python

- PEP 8スタイルガイドライン
- 明確で教育的なコード例
- 学習補助のための型ヒントを適宜使用

### Markdownドキュメント

- 明確な見出し階層
- 言語指定のコードブロック
- 追加リソースへのリンク
- `images/`ディレクトリ内のスクリーンショットと画像
- 画像のアクセシビリティのための代替テキスト

### ファイル構成

- レッスンは連番付き（1-getting-started-lessons、2-js-basicsなど）
- 各プロジェクトに `solution/` と多くは `start/` や `your-work/` ディレクトリ
- レッスン専用 `images/` フォルダに画像を保存
- 翻訳は `translations/{language-code}/` 構造で管理

## ビルドとデプロイ

### Quiz App デプロイメント（Azure Static Web Apps）

quiz-appはAzure Static Web Apps向けに構成済み：

```bash
cd quiz-app
npm run build      # dist/ フォルダーを作成します
# main ブランチへのプッシュ時に GitHub Actions ワークフローを通じてデプロイします
```

Azure Static Web Apps設定：
- <strong>アプリ位置</strong>: `/quiz-app`
- <strong>出力先</strong>: `dist`
- <strong>ワークフロー</strong>: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### ドキュメントPDF生成

```bash
npm install                    # docsify-to-pdfをインストールする
npm run convert               # docsからPDFを生成する
```

### Docsifyドキュメント

```bash
npm install -g docsify-cli    # Docsifyをグローバルにインストールする
docsify serve                 # localhost:3000でサーブする
```

### プロジェクト別ビルド

各プロジェクトディレクトリに独自のビルドプロセスがある場合も：
- Vueプロジェクトは `npm run build` で本番バンドルを作成
- 静的プロジェクトはビルド不要で直接ファイル提供

## プルリクエストガイドライン

### タイトル形式

変更箇所を示す明確で説明的なタイトルを使用：
- `[Quiz-app] レッスンX用の新クイズ追加`
- `[Lesson-3] テラリウムプロジェクトの誤字修正`
- `[Translation] レッスン5のスペイン語翻訳追加`
- `[Docs] セットアップ手順の更新`

### 必須チェック

PR提出前に：

1. <strong>コード品質</strong>：
   - 影響を受けるプロジェクトディレクトリで `npm run lint` 実行
   - すべてのリンティングエラーと警告を修正

2. <strong>ビルド確認</strong>：
   - 該当する場合は `npm run build` を実行
   - ビルドエラーがないことを確認

3. <strong>リンク検証</strong>：
   - すべてのマークダウンリンクをテスト
   - 画像参照が機能するか確認

4. <strong>コンテンツレビュー</strong>：
   - スペルと文法の校正
   - コード例が正しく教育的であることを確認
   - 翻訳が元の意味を維持しているか確認

### 貢献条件

- Microsoft CLAに同意（最初のPRで自動チェック）
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)を遵守
- 詳細は[CONTRIBUTING.md](./CONTRIBUTING.md)を参照
- PR説明に関連Issue番号を記載（該当する場合）

### レビュー手順

- PRはメンテナとコミュニティがレビュー
- 教育上の明快さを優先
- コード例は現行ベストプラクティスに準拠
- 翻訳は正確さと文化適合性をチェック

## 翻訳システム

### 自動翻訳

- GitHub Actionsとco-op-translatorワークフローを使用
- 50以上の言語に自動翻訳
- ソースファイルはメインディレクトリ
- 翻訳ファイルは `translations/{language-code}/` に配置

### 手動翻訳改善の追加

1. `translations/{language-code}/` で対象ファイルを探す
2. 構造を保ちながら改善を実施
3. コード例が機能することを確認
4. ローカライズされたクイズ内容もテスト

### 翻訳メタデータ

翻訳ファイルにはメタデータヘッダーが含まれる：
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

**Quizアプリが起動しない：**
- Node.jsバージョンを確認（v14以上推奨）
- `node_modules` と `package-lock.json` を削除後、再度 `npm install`
- ポート競合をチェック（既定はViteの5173ポート）

**APIサーバーが起動しない：**
- Node.jsバージョンが最低要求（node >=10）を満たしているか
- ポートが既に使われていないか確認
- すべての依存関係を `npm install` でインストール

**ブラウザ拡張が読み込まれない：**
- manifest.jsonのフォーマットを確認
- ブラウザコンソールのエラーをチェック
- 各ブラウザの拡張インストール手順に従う

**Pythonチャットプロジェクトの問題：**
- OpenAIパッケージがインストールされているか: `pip install openai`
- GITHUB_TOKEN環境変数が設定されているか
- GitHub Modelsのアクセス権を確認

**Docsifyがドキュメントを提供しない：**
- docsify-cliをグローバルインストール: `npm install -g docsify-cli`
- リポジトリルートから実行
- `docs/_sidebar.md` が存在するか確認

### 開発環境のヒント

- HTMLプロジェクトはVS CodeのLive Server拡張を使用
- 一貫したフォーマットのためESLintとPrettier拡張を導入
- JavaScriptのデバッグにはブラウザの開発者ツール
- VueプロジェクトにはVue DevToolsブラウザ拡張を使用

### パフォーマンス考慮事項

- 翻訳ファイル多数（50＋言語）のため完全クローンは大容量
- コンテンツ作業のみなら浅いクローンを推奨: `git clone --depth 1`
- 英語コンテンツ作業時は翻訳ファイルを検索から除外
- 初回実行時のビルドプロセスは遅いことがある（npm install、Viteビルド）

## セキュリティ考慮事項

### 環境変数

- APIキーはリポジトリにコミットしない
- `.env`ファイルを使用（すでに`.gitignore`に登録済み）
- 必要な環境変数は各プロジェクトのREADMEに記載

### Pythonプロジェクト

- 仮想環境を使用: `python -m venv venv`
- 依存関係は常に最新に保つ
- GitHubトークンは必要最低限の権限を設定

### GitHub Modelsアクセス

- GitHub ModelsにはPersonal Access Tokens (PAT)が必要
- トークンは環境変数として管理
- トークンや資格情報は決してコミットしない

## 追加の注意事項

### 対象ユーザー

- ウェブ開発初心者全般
- 学習者や独学者
- 教室でカリキュラムを使う先生方
- アクセシビリティと段階的スキル構築を意図したコンテンツ

### 教育方針

- プロジェクトベース学習アプローチ
- 頻繁な知識確認（クイズ）
- 実践的なコーディング演習
- 現実世界の応用例
- フレームワークより基礎重視

### リポジトリメンテナンス

- 活発な学習者・貢献者コミュニティ
- 定期的な依存関係・コンテンツの更新
- メンテナによる課題管理と議論
- GitHub Actionsによる自動翻訳更新

### 関連リソース

- [Microsoft Learn モジュール](https://docs.microsoft.com/learn/)
- [Student Hub リソース](https://docs.microsoft.com/learn/student-hub/)
- 学習者向けに [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 推奨
- 追加コース: ジェネレーティブAI、データサイエンス、ML、IoTカリキュラム

### 特定プロジェクトでの作業

各プロジェクトの詳細指示はそれぞれのREADMEを参照：
- `quiz-app/README.md` - Vue 3クイズアプリ
- `7-bank-project/README.md` - 認証付きバンキングアプリ
- `5-browser-extension/README.md` - ブラウザ拡張開発
- `6-space-game/README.md` - Canvasベースゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタント

### モノレポ構造

伝統的なモノレポではないが複数独立プロジェクトを含む：
- 各レッスンは自己完結型
- プロジェクト間で依存関係共有なし
- 個別プロジェクトに影響せず作業可能
- フルカリキュラム体験のためにリポジトリ全体をクローン推奨

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**:  
本書類は AI 翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を期していますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知おきください。原文の原言語版が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。本翻訳の利用により生じる誤解や誤訳については当方は一切責任を負いません。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->