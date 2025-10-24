<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T15:01:48+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ja"
}
-->
# コードを実行する

## セットアップ

仮想環境を作成する

```sh
python -m venv venv
source ./venv/bin/activate
```

## 依存関係をインストールする

```sh
pip install openai fastapi uvicorn python-dotenv
```

## APIを実行する

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## APIをテストする

インタラクティブなAPIドキュメントにアクセスしてください: `http://localhost:5000/docs`

## フロントエンドを実行する

フロントエンドフォルダにいることを確認してください

*app.js* を見つけて、`BASE_URL` をバックエンドURLに変更してください

実行する

```
npx http-server -p 8000
```

チャットにメッセージを入力してみてください。応答が表示されるはずです（Codespaceで実行している場合、またはアクセストークンを設定している場合）。

## アクセストークンを設定する（Codespaceで実行していない場合）

[パーソナルアクセストークンの設定](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) を参照してください

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は責任を負いません。