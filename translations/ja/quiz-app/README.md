# クイズアプリ

これらのクイズは、データサイエンスカリキュラムの講義前後に行うクイズです。カリキュラムは https://aka.ms/webdev-beginners で確認できます。

## 翻訳されたクイズセットを追加する

翻訳されたクイズを追加するには、`assets/translations` フォルダ内に対応するクイズ構造を作成してください。元のクイズは `assets/translations/en` にあります。クイズはいくつかのグループに分かれています。適切なクイズセクションに番号を合わせるようにしてください。このカリキュラムには合計40個のクイズがあり、番号は0から始まります。

<details>
<summary>翻訳ファイルの構造は以下の通りです:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

翻訳を編集した後、翻訳フォルダ内の `index.js` ファイルを編集して、`en` の規約に従ってすべてのファイルをインポートしてください。

例えば、翻訳されたJSONファイルが `ex.json` にある場合、ローカリゼーションキーを 'ex' に設定し、以下のようにインポートしてください。

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## クイズアプリをローカルで実行する

### 必要条件

- GitHubアカウント
- [Node.jsとGit](https://nodejs.org/)

### インストールとセットアップ

1. この[テンプレート](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft)からリポジトリを作成します。

1. 新しいリポジトリをクローンし、quiz-appディレクトリに移動します。

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npmパッケージと依存関係をインストールします。

   ```bash
   npm install
   ```

### アプリをビルドする

1. ソリューションをビルドするには、以下を実行します:

   ```bash
   npm run build
   ```

### アプリを起動する

1. ソリューションを実行するには、以下を実行します:

    ```bash
    npm run dev
    ```

### [オプション] コードのリント

1. コードがリントされていることを確認するには、以下を実行します:

    ```bash
    npm run lint
    ```

## クイズアプリをAzureにデプロイする

### 必要条件
- Azureサブスクリプション。無料でサインアップするには[こちら](https://aka.ms/azure-free)をご覧ください。

    _このクイズアプリをデプロイするための費用見積もり: 無料_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

上記のリンクからAzureにサインインした後、サブスクリプションとリソースグループを選択してください:

- 静的Webアプリの詳細: 名前を入力し、ホスティングプランを選択します。
- GitHubログイン: デプロイメントソースをGitHubに設定し、ログインしてフォームの必要なフィールドを入力します:
    - *Organization* – 組織を選択します。
    - *Repository* – Web Dev for Beginnersカリキュラムリポジトリを選択します。
    - *Branch* - ブランチ（main）を選択します。
- ビルドプリセット: Azure Static Web Appsは、アプリケーションで使用されているフレームワークを検出するアルゴリズムを使用します。
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- デプロイメント: 「Review + Create」をクリックし、「Create」をクリックします。

    デプロイが完了すると、リポジトリの *.github* ディレクトリにワークフローファイルが作成されます。このワークフローファイルには、アプリをAzureに再デプロイするイベントの指示が含まれています。例えば、_ブランチ **main** への**プッシュ**_などです。

    <details>
    <summary>ワークフローファイルの例</summary>
    GitHub Actionsワークフローファイルの例は以下の通りです:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- デプロイ後: デプロイが完了したら、「Go to Deployment」をクリックし、「View app in browser」をクリックします。

GitHub Action（ワークフロー）が正常に実行された後、ライブページを更新してアプリケーションを表示してください。

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知おきください。元の言語で記載された文書が公式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。