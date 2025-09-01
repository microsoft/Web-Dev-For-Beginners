<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:46:09+00:00",
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
pip install openai flask flask-cors 
```

## 运行 API

```sh
python api.py
```

## 运行前端

确保你位于前端文件夹中

找到 *app.js*，将 `BASE_URL` 更改为你的后端 URL

运行前端

```
npx http-server -p 8000
```

尝试在聊天框中输入消息，你应该会看到一个响应（前提是你在 Codespace 中运行或者已经设置了访问令牌）。

## 设置访问令牌（如果你不是在 Codespace 中运行）

请参阅 [设置 PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。