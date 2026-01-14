<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T13:17:10+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "hk"
}
-->
# 運行代碼

## 設置

建立虛擬環境

```sh
python -m venv venv
source ./venv/bin/activate
```

## 安裝依賴

```sh
pip install openai fastapi uvicorn python-dotenv
```

## 運行 API

```sh
# 方法 1：直接執行
python api.py

# 方法 2：使用 uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## 測試 API

訪問互動式 API 文件：`http://localhost:5000/docs`

## 運行前端

確保你在 frontend 資料夾內

找到 *app.js*，將 `BASE_URL` 改為你的後端 URL

運行它

```
npx http-server -p 8000
```

試著在聊天中輸入訊息，你應該會看到回應（前提是你在 Codespace 中運行此程式或已設定存取權杖）。

## 設置存取權杖（如果你不是在 Codespace 中執行）

請參閱 [設定 PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件由 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們力求準確，但請注意自動翻譯可能包含錯誤或不準確之處。原本文檔的母語版本應視為權威來源。對於重要資訊，建議使用專業人工翻譯。我們不負責因使用本翻譯而產生的任何誤解或錯誤詮釋。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->