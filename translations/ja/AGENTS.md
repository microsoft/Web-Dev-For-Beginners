# AGENTS.md

## プロジェクト概要

これは初心者に対してウェブ開発の基礎を教えるための教育カリキュラムリポジトリです。カリキュラムはMicrosoft Cloud Advocatesによって開発された包括的な12週間のコースで、JavaScript、CSS、HTMLをカバーする24の実践的なレッスンが含まれています。

### 主要コンポーネント

- **教育コンテンツ**：プロジェクトベースのモジュールに整理された24の構造化されたレッスン
- **実践プロジェクト**：テラリウム、タイピングゲーム、ブラウザー拡張機能、スペースゲーム、バンキングアプリ、コードエディタ、AIチャットアシスタント
- **インタラクティブクイズ**：レッスン前後評価用の3問ずつ計48のクイズ
- **多言語対応**：GitHub Actionsを用いた50以上の言語への自動翻訳
- **技術スタック**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AIプロジェクト用）

### アーキテクチャ

- レッスンベースの構造を持つ教育リポジトリ
- 各レッスンフォルダにはREADME、コード例、解答が含まれる
- quiz-appや他の様々なレッスンプロジェクトは独立したディレクトリ
- GitHub Actions（co-op-translator）を使った翻訳システム
- Docsifyによるドキュメント提供とPDF形式での利用可能

## セットアップコマンド

このリポジトリは主に教育コンテンツの利用を目的としています。特定プロジェクトで作業する場合：

### メインリポジトリセットアップ

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App セットアップ（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 開発サーバーを起動
npm run build      # 本番用にビルド
npm run lint       # ESLint を実行
```

### バンクプロジェクト API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # APIサーバーを起動する
npm run lint       # ESLintを実行する
npm run format     # Prettierでフォーマットする
```

### ブラウザー拡張プロジェクト

```bash
cd 5-browser-extension/solution
npm install
# ブラウザ固有の拡張機能の読み込み手順に従う
```

### スペースゲームプロジェクト

```bash
cd 6-space-game/solution
npm install
# index.htmlをブラウザで開くか、Live Serverを使用してください
```

### チャットプロジェクト（Python バックエンド）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 環境変数を設定する
python api.py
```

## 開発ワークフロー

### コンテンツ寄稿者向け

1. リポジトリを自身のGitHubアカウントにフォークする
2. フォークをローカルにクローンする
3. 変更用の新しいブランチを作成する
4. レッスン内容やコード例を変更する
5. 関連するプロジェクトディレクトリでコード変更をテストする
6. コントリビューションガイドラインに従いプルリクエストを送る

### 学習者向け

1. リポジトリをフォークまたはクローンする
2. レッスンディレクトリを順に進む
3. 各レッスンのREADMEを読む
4. https://ff-quizzes.netlify.app/web/ でレッスン前クイズを完了する
5. レッスンフォルダ内のコード例を実践する
6. 課題やチャレンジに取り組む
7. レッスン後クイズを受ける

### ライブ開発

- **ドキュメンテーション**：リポジトリルートで `docsify serve` を実行（ポート3000）
- **クイズアプリ**：quiz-appディレクトリで `npm run dev`
- **プロジェクト**：HTMLプロジェクトはVS CodeのLive Server拡張を利用
- **APIプロジェクト**：各APIディレクトリで `npm start`

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
node server.js     # サーバーがエラーなく起動することを確認する
```

### 一般的なテスト方針

- 本リポジトリは包括的な自動テストはありません
- 手動テストでは以下を重視：
  - コード例がエラーなく実行されること
  - ドキュメント内リンクが正しく動作すること
  - プロジェクトのビルドが正常に完了すること
  - コード例がベストプラクティスに沿っていること

### 提出前のチェック

- package.jsonがあるディレクトリで `npm run lint` を実行
- マークダウンリンクの有効性を確認
- ブラウザやNode.jsでコード例をテスト
- 翻訳が構造を保持していることをチェック

## コードスタイルガイドライン

### JavaScript

- モダンなES6+構文を使用
- 各プロジェクト提供の標準ESLint設定に準拠
- 教育的に分かりやすい意味のある変数名、関数名を使う
- 学習者向けに概念を説明するコメントを追加
- Prettierが設定されている場合は整形を行う

### HTML/CSS

- セマンティックなHTML5要素を使用
- レスポンシブデザイン原則を適用
- 明確なクラス命名規則
- CSS技法を説明するコメントを記述

### Python

- PEP 8スタイルガイドに従う
- 分かりやすい教育的コード例
- 学習の助けとなる型ヒントを適宜使用

### マークダウンドキュメント

- 明確な見出し階層
- 言語指定されたコードブロック
- 追加リソースへのリンク
- `images/` ディレクトリ内のスクリーンショット等の画像
- 画像にはアクセシビリティのための代替テキストを設定

### ファイル構成

- レッスンは連番付き（1-getting-started-lessons、2-js-basicsなど）
- 各プロジェクトには `solution/` と多くは `start/` や `your-work/` ディレクトリを含む
- 画像はレッスン別の `images/` フォルダに保存
- 翻訳ファイルは `translations/{language-code}/` 構造で配置

## ビルドとデプロイ

### クイズアプリのデプロイ（Azure Static Web Apps）

quiz-appはAzure Static Web Apps向けに設定されています：

```bash
cd quiz-app
npm run build      # dist/ フォルダーを作成します
# main ブランチへのプッシュ時に GitHub Actions ワークフローでデプロイします
```

Azure Static Web Apps設定：
- **アプリ位置**：`/quiz-app`
- **出力位置**：`dist`
- **ワークフロー**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### ドキュメントPDF生成

```bash
npm install                    # docsify-to-pdf をインストールする
npm run convert               # docs から PDF を生成する
```

### Docsifyドキュメント

```bash
npm install -g docsify-cli    # Docsifyをグローバルにインストールする
docsify serve                 # localhost:3000でサービスを提供する
```

### プロジェクト別ビルド

各プロジェクトディレクトリには独自のビルド手順がある場合あり：
- Vueプロジェクト：`npm run build` でプロダクションバンドル生成
- 静的プロジェクト：ビルド不要、ファイルを直接提供

## プルリクエストガイドライン

### タイトル形式

明確で変更内容がわかるタイトルを使用：
- `[Quiz-app] レッスンXの新クイズ追加`
- `[Lesson-3] テラリウムプロジェクトの誤字修正`
- `[Translation] レッスン5のスペイン語翻訳追加`
- `[Docs] セットアップ手順の更新`

### 必須チェック

PR提出前に以下を実行：

1. **コード品質**：
   - 影響を受けるプロジェクトディレクトリで `npm run lint`
   - すべての警告・エラーを修正

2. **ビルド検証**：
   - 必要に応じて `npm run build`
   - ビルドエラーがないことを確認

3. **リンク検証**：
   - 全マークダウンリンクの検証
   - 画像参照の動作確認

4. **コンテンツレビュー**：
   - 誤字脱字の校正
   - コード例が正確で教育的であること
   - 翻訳が原文の意味を保っていること

### 寄稿条件

- Microsoft CLAに同意（初回PRで自動チェック）
- [Microsoftオープンソース行動規範](https://opensource.microsoft.com/codeofconduct/)に従う
- 詳細は[CONTRIBUTING.md](./CONTRIBUTING.md)参照
- 可能であればPR説明に関連Issue番号を記載

### レビュー手順

- メンテナとコミュニティによるレビュー
- 教育的明瞭性を重視
- コード例は最新のベストプラクティスに従うこと
- 翻訳は正確性と文化的適合性をチェック

## 翻訳システム

### 自動翻訳

- GitHub Actionsのco-op-translatorワークフローを使用
- 50以上の言語に自動翻訳
- メインディレクトリのソースファイルを翻訳
- 翻訳ファイルは `translations/{language-code}/` ディレクトリに置かれる

### 手動による翻訳改善の追加

1. `translations/{language-code}/` 内のファイルを見つける
2. 構造を保持しつつ改善を行う
3. コード例が動作する状態を維持
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

**クイズアプリが起動しない**：
- Node.jsのバージョンを確認（v14以上推奨）
- `node_modules` と `package-lock.json` を削除し、再度 `npm install` 実行
- ポート競合を確認（デフォルトはViteの5173番）

**APIサーバーが起動しない**：
- Node.jsのバージョンが最低限(node >=10)を満たすか確認
- ポート利用状況をチェック
- `npm install` で依存関係が全てインストールされているか確認

**ブラウザー拡張機能が読み込まれない**：
- manifest.jsonのフォーマットを確認
- ブラウザのコンソールログでエラーを調査
- ブラウザ固有の拡張機能インストール手順を確認

**Pythonチャットプロジェクトの問題**：
- OpenAIパッケージがインストールされているか： `pip install openai`
- GITHUB_TOKEN環境変数が設定されているか確認
- GitHub Modelsへのアクセス権限をチェック

**Docsifyがドキュメントを提供しない**：
- docsify-cliがグローバルにインストールされているか： `npm install -g docsify-cli`
- リポジトリルートで実行しているか確認
- `docs/_sidebar.md` が存在するかチェック

### 開発環境のヒント

- HTMLプロジェクトではVS CodeのLive Server拡張を使用
- 一貫した整形のためESLintとPrettier拡張をインストール
- JavaScriptのデバッグにはブラウザのDevToolsを利用
- VueプロジェクトではVue DevToolsブラウザ拡張を入れる

### パフォーマンスの注意点

- 50以上の言語の翻訳ファイルが多いため完全クローンは大容量
- コンテンツ作業のみなら浅いクローンを利用： `git clone --depth 1`
- 英語コンテンツ作業時は翻訳を検索から除外推奨
- npm installやViteビルドは初回が遅い可能性がある

## セキュリティの注意点

### 環境変数

- APIキーをリポジトリにコミットしないこと
- `.env` ファイルを使用（.gitignoreに含まれている）
- 必要な環境変数は各プロジェクトのREADMEでドキュメント化

### Pythonプロジェクト

- 仮想環境を使用： `python -m venv venv`
- 依存関係を常に最新に保つ
- GitHubトークンは必要最小限の権限に設定する

### GitHub Modelsアクセス

- GitHub Modelsにはパーソナルアクセストークン（PAT）が必要
- トークンは環境変数として保管
- トークンや認証情報は決してコミットしない

## 追加ノート

### 対象ユーザー

- ウェブ開発の完全な初心者
- 学習者や自学者
- 教室でカリキュラムを使う教師
- アクセシビリティと段階的スキル向上を意識したコンテンツ設計

### 教育方針

- プロジェクトベースの学習アプローチ
- 頻繁な知識確認（クイズ）
- 実践的なコーディング演習
- 実世界の応用例
- フレームワーク前の基礎重視

### リポジトリ運用

- 活発な学習者と寄稿者コミュニティ
- 依存関係やコンテンツは定期的に更新
- メンテナによる問題監視と議論管理
- 翻訳の更新はGitHub Actionsで自動化

### 関連リソース

- [Microsoft Learn モジュール](https://docs.microsoft.com/learn/)
- [Student Hubリソース](https://docs.microsoft.com/learn/student-hub/)
- 学習者に推奨される[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 他のコース：生成AI、データサイエンス、機械学習、IoTカリキュラムも利用可能

### 特定プロジェクトの作業方法

各プロジェクトの詳細な手順は以下のREADMEを参照：
- `quiz-app/README.md` - Vue 3クイズアプリケーション
- `7-bank-project/README.md` - 認証付きバンキングアプリ
- `5-browser-extension/README.md` - ブラウザー拡張開発
- `6-space-game/README.md` - Canvasベースゲーム開発
- `9-chat-project/README.md` - AIチャットアシスタントプロジェクト

### モノレポ構成

伝統的なモノレポではありませんが複数の独立プロジェクトを含みます：
- 各レッスンは独立済み
- プロジェクト間で依存関係共有なし
- 個別プロジェクトの作業が他に影響を与えない
- フルカリキュラム体験のためには全リポジトリのクローン推奨

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責事項**：  
本書類はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確さを目指しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご留意ください。原文が権威ある情報源として優先されるべきです。重要な情報につきましては、専門の人間による翻訳を推奨します。本翻訳の利用により発生した誤解や誤訳について、当方は一切の責任を負いかねます。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->