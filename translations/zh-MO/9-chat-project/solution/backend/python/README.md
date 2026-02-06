# 執行程式碼

## 設置

建立虛擬環境

```sh
python -m venv venv
source ./venv/bin/activate
```

## 安裝依賴項

```sh
pip install openai fastapi uvicorn python-dotenv
```

## 執行 API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## 測試 API

訪問互動式 API 文件：`http://localhost:5000/docs`

## 執行前端

確保你位於前端文件夾中

找到 *app.js*，將 `BASE_URL` 更改為你的後端 URL

執行

```
npx http-server -p 8000
```

嘗試在聊天中輸入訊息，你應該會看到回應（前提是你在 Codespace 中運行或已設置訪問權杖）。

## 設置訪問權杖（如果你不是在 Codespace 中運行）

請參閱 [設置 PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或誤釋不承擔責任。