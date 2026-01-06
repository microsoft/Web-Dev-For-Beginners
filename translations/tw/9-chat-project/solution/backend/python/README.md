<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T14:29:33+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "tw"
}
-->
# 執行程式碼

## 設定環境

建立虛擬環境

```sh
python -m venv venv
source ./venv/bin/activate
```

## 安裝相依性

```sh
pip install openai fastapi uvicorn python-dotenv
```

## 執行 API

```sh
# 方法一：直接執行
python api.py

# 方法二：使用 uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## 測試 API

造訪互動式 API 文件：`http://localhost:5000/docs`

## 執行前端

請確認您位於 frontend 資料夾中

找到 *app.js*，將 `BASE_URL` 改為您的後端 URL

執行它

```
npx http-server -p 8000
```

嘗試在聊天中輸入訊息，您應該會看到回應（前提是您在 Codespace 執行此程式或已設定了存取權杖）。

## 設定存取權杖（如果您不是在 Codespace 執行）

請參考 [設定 PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件係使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應視為權威來源。對於重要資訊，建議尋求專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤釋負任何責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->