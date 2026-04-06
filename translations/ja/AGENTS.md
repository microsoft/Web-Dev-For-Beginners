# AGENTS.md

## プロジェクト概要

これは初心者向けにウェブ開発の基礎を教えるための教育カリキュラムリポジトリです。カリキュラムはMicrosoft Cloud Advocatesによって作成された包括的な12週間コースで、JavaScript、CSS、HTMLを扱う24の実践的なレッスンが含まれています。

### 主な構成要素

- <strong>教育コンテンツ</strong>: プロジェクトベースのモジュールに整理された24の構造化されたレッスン
- <strong>実践的プロジェクト</strong>: テラリウム、タイピングゲーム、ブラウザー拡張機能、スペースゲーム、バンキングアプリ、コードエディター、AIチャットアシスタント
- <strong>インタラクティブクイズ</strong>: 各レッスン前後に3問ずつの48のクイズ
- <strong>多言語対応</strong>: GitHub Actionsによる50以上の言語の自動翻訳対応
- <strong>技術スタック</strong>: HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト用）

### アーキテクチャ

- レッスンベース構造の教育リポジトリ
- 各レッスンフォルダーにはREADME、コード例、ソリューションが含まれる
- 独立したプロジェクトは個別のディレクトリに（quiz-app、各種レッスンプロジェクト）
- GitHub Actions（co-op-translator）を用いた翻訳システム
- Docsifyで提供されるドキュメントおよびPDF形式での提供もあり

## セットアップコマンド

このリポジトリは主に教育コンテンツの閲覧用です。特定のプロジェクトを扱う場合は以下を参照してください。

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
npm start          # APIサーバーを起動する
npm run lint       # ESLintを実行する
npm run format     # Prettierでフォーマットする
```

### ブラウザー拡張機能プロジェクト

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

### チャットプロジェクト（Pythonバックエンド）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN環境変数を設定する
python api.py
```

## 開発ワークフロー

### コンテンツ寄稿者向け

1. リポジトリをGitHubアカウントで<strong>フォーク</strong>する
2. フォークをローカルに<strong>クローン</strong>する
3. 変更用に<strong>新しいブランチ</strong>を作成する
4. レッスンコンテンツやコード例を編集する
5. 関連プロジェクトディレクトリでコード変更をテストする
6. 貢献ガイドラインに沿ってプルリクエストを提出する

### 学習者向け

1. リポジトリをフォークまたはクローンする
2. レッスンディレクトリを順に移動する
3. 各レッスンのREADMEを読む
4. https://ff-quizzes.netlify.app/web/ でレッスン前クイズを完了する
5. レッスンフォルダーのコード例に取り組む
6. 課題とチャレンジを完了する
7. レッスン後のクイズを受験する

### ライブ開発

- <strong>ドキュメント</strong>: ルートで `docsify serve` を実行（ポート3000）
- <strong>クイズアプリ</strong>: quiz-appディレクトリで `npm run dev` 実行
- <strong>プロジェクト</strong>: HTMLプロジェクトはVS CodeのLive Server拡張を使用
- **APIプロジェクト**: 該当APIディレクトリで `npm start` 実行

## テスト手順

### クイズアプリのテスト

```bash
cd quiz-app
npm run lint       # コードスタイルの問題をチェックする
npm run build      # ビルドが成功するか確認する
```

### バンクAPIのテスト

```bash
cd 7-bank-project/api
npm run lint       # コードスタイルの問題をチェックする
node server.js     # サーバーがエラーなく起動することを確認する
```

### 一般的なテスト方針

- 本リポジトリは包括的な自動テストを含みません
- 手動テストは以下に重点を置く：
  - コード例がエラーなく動作すること
  - ドキュメント内リンクが正しく機能すること
  - プロジェクトが正常にビルドできること
  - 例がベストプラクティスに従っていること

### 提出前チェック

- package.jsonのあるディレクトリで `npm run lint` を実行
- マークダウンのリンクが有効か確認
- ブラウザやNode.jsでコード例を検証
- 翻訳が正しい構造を維持していることを確認

## コードスタイルガイドライン

### JavaScript

- モダンなES6+構文を使用
- プロジェクト内の標準ESLint設定に従う
- 教育目的でわかりやすい変数・関数名を使用
- 学習者向けに概念を説明するコメントを追加
- Prettierでフォーマット（設定されている場合）

### HTML/CSS

- セマンティックなHTML5要素を使用
- レスポンシブデザインの原則を守る
- 明確なクラス命名規則
- CSS手法を説明するコメントを付加

### Python

- PEP 8スタイルガイドに準拠
- わかりやすく教育的なコード例
- 学習を助ける型ヒントを適宜使用

### Markdownドキュメント

- 明確な見出し階層
- 言語指定付きコードブロック
- 追加リソースへのリンク
- `images/` ディレクトリ内のスクリーンショットや画像
- アクセシビリティ対応のための代替テキスト

### ファイル構成

- レッスンは番号付きで順番に並ぶ（1-getting-started-lessons、2-js-basicsなど）
- 各プロジェクトは `solution/` と、しばしば `start/` や `your-work/` ディレクトリを持つ
- 画像は各レッスン固有の `images/` フォルダーに保存
- 翻訳は `translations/{language-code}/` 構造で管理

## ビルドとデプロイ

### クイズアプリのデプロイ（Azure Static Web Apps）

quiz-appはAzure Static Web Apps用の設定済み：

```bash
cd quiz-app
npm run build      # dist/フォルダを作成する
# mainにプッシュされたときにGitHub Actionsワークフローを介してデプロイする
```

Azure Static Web Apps構成:
- <strong>アプリロケーション</strong>: `/quiz-app`
- <strong>出力先</strong>: `dist`
- <strong>ワークフロー</strong>: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### ドキュメントPDF生成

```bash
npm install                    # docsify-to-pdf をインストールする
npm run convert               # docs から PDF を生成する
```

### Docsifyドキュメント

```bash
npm install -g docsify-cli    # Docsifyをグローバルにインストールする
docsify serve                 # localhost:3000でサービスを開始する
```

### プロジェクトごとのビルド

各プロジェクトディレクトリには独自のビルド処理がある場合がある：
- Vueプロジェクト：`npm run build` で本番用バンドル生成
- 静的プロジェクト：ビルド不要でファイルを直接提供

## プルリクエストガイドライン

### タイトル形式

変更内容がわかりやすい明確なタイトルを使用:
- `[Quiz-app] レッスンXの新しいクイズ追加`
- `[Lesson-3] テラリウムプロジェクトのタイプミス修正`
- `[Translation] レッスン5のスペイン語翻訳追加`
- `[Docs] セットアップ手順の更新`

### 必須チェック

PR提出前に以下を実施：

1. <strong>コード品質</strong>:
   - 該当プロジェクトディレクトリで `npm run lint` 実行
   - すべてのリンティングエラーと警告を修正

2. <strong>ビルド確認</strong>:
   - 必要に応じて `npm run build` 実行
   - ビルドエラーなしを確認

3. <strong>リンク検証</strong>:
   - すべてのマークダウンリンクをテスト
   - 画像の参照が正しいことを確認

4. <strong>コンテンツレビュー</strong>:
   - スペルと文法の校正
   - コード例が正しく教育的であること確認
   - 翻訳が原文の意味を忠実に反映していることを検証

### 貢献条件

- Microsoft CLAへの同意（初回PR時に自動チェック）
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)の遵守
- 詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照
- PR説明に課題番号記載（該当する場合）

### レビュー過程

- メンテナとコミュニティによるレビュー
- 教育のわかりやすさを最優先
- コード例は最新のベストプラクティスに合致させる
- 翻訳は正確さと文化的適切さもチェック

## 翻訳システム

### 自動翻訳

- GitHub Actionsのco-op-translatorワークフローを利用
- 50以上の言語へ自動翻訳
- ソースファイルはメインディレクトリ
- 翻訳ファイルは `translations/{language-code}/` に格納

### 手動翻訳改善の追加

1. `translations/{language-code}/` 内のファイルを見つける
2. 構造を維持しつつ改善を加える
3. コード例の動作が維持されていることを確認
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

<strong>クイズアプリが起動しない</strong>:
- Node.jsのバージョンを確認（v14以上推奨）
- `node_modules` と `package-lock.json` を削除し、`npm install` を再実行
- ポート競合の確認（デフォルトはViteのポート5173）

**APIサーバーが起動しない**:
- Node.jsバージョンが最小要件(node >=10)を満たしているか
- ポートが使用中でないか確認
- すべての依存を `npm install` でインストール済みか

<strong>ブラウザー拡張機能が読み込めない</strong>:
- manifest.jsonの適切なフォーマットを確認
- ブラウザコンソールのエラーを確認
- ブラウザ固有のインストール手順に従う

**Pythonチャットプロジェクトの問題**:
- OpenAIパッケージのインストールを確認: `pip install openai`
- GITHUB_TOKEN環境変数が設定されていることを確認
- GitHub Modelsのアクセス権を確認

**Docsifyがドキュメントを提供しない**:
- docsify-cliをグローバルにインストール: `npm install -g docsify-cli`
- リポジトリルートで実行
- `docs/_sidebar.md` が存在することを確認

### 開発環境のヒント

- HTMLプロジェクトはVS CodeのLive Server拡張を利用
- ESLintとPrettier拡張をインストールして一貫性あるフォーマット
- JavaScriptデバッグにはブラウザのDevToolsを使用
- VueプロジェクトではVue DevToolsのブラウザ拡張をインストール

### パフォーマンス考慮事項

- 翻訳ファイルが50以上あるため、フルクローンは大容量
- コンテンツ作業のみなら浅いクローンを推奨：`git clone --depth 1`
- 英語コンテンツ作業時は検索から翻訳を除外すると効果的
- 最初のビルド（npm install、Viteビルド）は時間がかかる場合あり

## セキュリティ考慮事項

### 環境変数

- APIキーはリポジトリにコミットしない
- `.env` ファイルを利用（既に `.gitignore` で除外）
- 必須環境変数をプロジェクトREADMEに記載

### Pythonプロジェクト

- 仮想環境を使用：`python -m venv venv`
- 依存を最新に保つ
- GitHubトークンは必要最小限の権限で管理

### GitHub Modelsアクセス

- GitHub Models利用には個人アクセストークン（PAT）が必要
- トークンは環境変数として管理
- トークンや認証情報を決してコミットしないこと

## 追加情報

### 対象ユーザー

- ウェブ開発の完全な初心者
- 学生や独学者
- 教室でカリキュラムを利用する教師
- アクセシブルで段階的なスキルアップを目指した内容

### 教育理念

- プロジェクトベースの学習アプローチ
- 頻繁な理解度チェック（クイズ）
- 実践的なコード演習
- 実世界の応用例を提供
- フレームワークよりも基礎の重視

### リポジトリのメンテナンス

- 積極的な学習者・貢献者コミュニティ
- 依存関係やコンテンツの定期的な更新
- メンテナによる課題管理と議論の監視
- GitHub Actionsによる翻訳の自動更新

### 関連リソース

- [Microsoft Learnモジュール](https://docs.microsoft.com/learn/)
- [Student Hubリソース](https://docs.microsoft.com/learn/student-hub/)
- 学習者向けに推奨される [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 追加コース：ジェネレーティブAI、データサイエンス、ML、IoTカリキュラムもあり

### 特定プロジェクトの扱い

各プロジェクトの詳細な手順は以下のREADMEを参照：
- `quiz-app/README.md` - Vue 3クイズアプリケーション
- `7-bank-project/README.md` - 認証付きバンキングアプリ
- `5-browser-extension/README.md` - ブラウザー拡張機能開発
- `6-space-game/README.md` - Canvasベースのゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタントプロジェクト

### モノレポ構成

本リポジトリは従来のモノレポではありませんが、複数の独立プロジェクトを含みます：
- 各レッスンは自己完結型
- プロジェクト間で依存関係を共有しない
- 個別プロジェクトで独立して作業可能
- 全カリキュラム体験にはリポジトリ全体をクローンしてください

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**:  
本書類は AI 翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性の向上に努めていますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご了承ください。原文の言語による文書が権威ある情報源と見なされるべきです。重要な情報については、専門の人間による翻訳を推奨します。本翻訳の使用により生じた誤解や解釈の相違について、当方は一切の責任を負いません。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->