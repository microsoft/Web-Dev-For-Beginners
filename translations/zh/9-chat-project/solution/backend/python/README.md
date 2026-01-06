<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T12:03:23+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "zh"
}
-->
# 运行代码

## 设置

创建虚拟环境

```sh
python -m venv venv
source ./venv/bin/activate
```

## 安装依赖

```sh
pip install openai fastapi uvicorn python-dotenv
```

## 运行 API

```sh
# 方法1：直接执行
python api.py

# 方法2：使用uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## 测试 API

访问交互式 API 文档：`http://localhost:5000/docs`

## 运行前端

确保你处于 frontend 文件夹内

找到 *app.js*，将 `BASE_URL` 更改为你的后端 URL

运行它

```
npx http-server -p 8000
```

尝试在聊天中输入消息，你应该能看到响应（前提是在 Codespace 中运行或已设置访问令牌）。

## 设置访问令牌（如果你不是在 Codespace 中运行）

参见 [设置 PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免责声明**：  
本文件使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。虽然我们力求准确，但请注意，自动翻译可能包含错误或不准确之处。原文的母语版本应被视为权威来源。对于重要信息，建议使用专业人工翻译。对于因使用本翻译而产生的任何误解或误释，我们概不负责。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->