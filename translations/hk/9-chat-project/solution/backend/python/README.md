<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:46:21+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "hk"
}
-->
# 執行程式碼

## 設置

建立虛擬環境

```sh
python -m venv venv
source ./venv/bin/activate
```

## 安裝依賴項

```sh
pip install openai flask flask-cors 
```

## 啟動 API

```sh
python api.py
```

## 啟動前端

確保你位於 frontend 資料夾內

找到 *app.js*，將 `BASE_URL` 更改為你的後端 URL

執行

```
npx http-server -p 8000
```

嘗試在聊天框中輸入訊息，你應該會看到回應（前提是你在 Codespace 中運行，或者已經設置了存取權杖）。

## 設置存取權杖（如果你不是在 Codespace 中運行）

請參閱 [設置 PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。