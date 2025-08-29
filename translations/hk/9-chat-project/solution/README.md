<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:08:09+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "hk"
}
-->
# 執行程式碼

## 設置

建立虛擬環境

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## 安裝依賴項

```sh
pip install openai flask flask-cors 
```

## 執行 API

```sh
python api.py
```

## 執行前端

確保你位於前端資料夾

找到 *app.js*，將 `BASE_URL` 更改為你的後端 URL

執行它

```
npx http-server -p 8000
```

嘗試在聊天中輸入訊息，你應該會看到回應（前提是你在 Codespace 中執行此操作或已設置存取權杖）。

## 設置存取權杖（如果你不是在 Codespace 中執行）

請參閱 [設置 PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**免責聲明**：  
此文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議使用專業的人工作翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解讀概不負責。