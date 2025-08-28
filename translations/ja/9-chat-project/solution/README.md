<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-28T18:55:55+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "ja"
}
-->
# コードを実行する

## セットアップ

仮想環境を作成する

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## 依存関係をインストールする

```sh
pip install openai flask flask-cors 
```

## APIを実行する

```sh
python api.py
```

## フロントエンドを実行する

フロントエンドフォルダに移動してください

*app.js* を見つけ、`BASE_URL` をバックエンドのURLに変更してください

実行する

```
npx http-server -p 8000
```

チャットでメッセージを入力してみてください。応答が表示されるはずです（Codespaceで実行している場合、またはアクセストークンを設定している場合）。

## アクセストークンを設定する（Codespaceで実行していない場合）

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) を参照してください

---

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確さが含まれる可能性があります。元の言語で記載された原文が正式な情報源と見なされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当社は一切の責任を負いません。