<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:21:45+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "tw"
}
-->
# AI 框架

市面上有許多 AI 框架，使用這些框架可以大幅縮短建立專案所需的時間。在本專案中，我們將專注於了解這些框架解決的問題，並親自建立一個相關的專案。

## 為什麼選擇框架

在使用 AI 時，有不同的方式和理由選擇這些方式，以下是一些例子：

- **無 SDK**：大多數 AI 模型允許您直接透過例如 HTTP 請求與模型互動。這種方式可行，並且在缺少 SDK 選項時可能是唯一的選擇。
- **SDK**：使用 SDK 通常是推薦的方式，因為它可以減少與模型互動所需的程式碼量。通常 SDK 只適用於特定模型，如果需要使用不同的模型，可能需要撰寫新的程式碼來支援這些額外的模型。
- **框架**：框架通常能將事情提升到另一個層次，例如需要使用不同的模型時，框架提供統一的 API，差異通常僅在於初始設定。此外，框架還提供有用的抽象，例如在 AI 領域，它們可以處理工具、記憶、工作流程、代理等，同時減少程式碼量。由於框架通常具有明確的設計理念，如果您接受它的運作方式，它會非常有幫助，但如果您嘗試做一些框架未設計的定制化操作，可能會遇到困難。有時框架可能過於簡化，導致您無法學習某些重要的主題，這可能在後期影響性能。

總的來說，選擇適合工作的工具。

## 簡介

在本課程中，我們將學習：

- 使用常見的 AI 框架。
- 解決常見問題，例如聊天對話、工具使用、記憶和上下文。
- 利用這些技術來建立 AI 應用程式。

## 第一個提示

在我們的第一個應用程式範例中，我們將學習如何連接到 AI 模型並使用提示進行查詢。

### 使用 Python

在此範例中，我們將使用 Langchain 連接到 GitHub 模型。我們可以使用名為 `ChatOpenAI` 的類別，並提供 `api_key`、`base_url` 和 `model` 等欄位。Token 是在 GitHub Codespaces 中自動填充的，如果您在本地運行應用程式，則需要設置個人訪問 Token 才能正常運作。

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# works
response  = llm.invoke("What's the capital of France?")
print(response.content)
```

在此程式碼中，我們：

- 呼叫 `ChatOpenAI` 來建立客戶端。
- 使用 `llm.invoke` 和提示來生成回應。
- 使用 `print(response.content)` 打印回應。

您應該會看到類似以下的回應：

```text
The capital of France is Paris.
```

## 聊天對話

在前一部分中，您看到我們使用了通常稱為零次提示的方式，即單一提示後跟回應。

然而，通常您會遇到需要維持多次訊息交換的對話情境，這些訊息是您與 AI 助手之間的互動。

### 使用 Python

在 Langchain 中，我們可以將對話存儲在列表中。`HumanMessage` 代表使用者的訊息，而 `SystemMessage` 是用來設定 AI 的「個性」的訊息。在以下範例中，您可以看到我們指示 AI 扮演皮卡德艦長的角色，而人類使用者則提出「告訴我關於你的事」作為提示。

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

此範例的完整程式碼如下：

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)
print(response.content)
```

您應該會看到類似以下的結果：

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

為了保持對話的狀態，您可以將聊天的回應添加到對話中，這樣對話就會被記住，以下是操作方式：

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)

print(response.content)

print("---- Next ----")

messages.append(response)
messages.append(HumanMessage(content="Now that I know about you, I'm Chris, can I be in your crew?"))

response  = llm.invoke(messages)

print(response.content)

```

從上述對話中可以看到，我們兩次呼叫 LLM，第一次的對話僅包含兩條訊息，而第二次則添加了更多訊息。

事實上，如果您運行此程式，您會看到第二次回應類似以下內容：

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

我會把這當作一個可能的答案 ;)

## 流式回應

TODO

## 提示模板

TODO

## 結構化輸出

TODO

## 工具調用

工具是我們賦予 LLM 額外技能的方式。其理念是告訴 LLM 它擁有的功能，如果提示與某個工具的描述相符，則調用該工具。

### 使用 Python

讓我們像下面這樣添加一些工具：

```python
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}
```

在這裡，我們創建了一個名為 `add` 的工具描述。透過繼承 `TypedDict` 並添加像 `a` 和 `b` 這樣的成員（類型為 `Annotated`），這可以轉換為 LLM 可理解的結構。函數的創建是一個字典，確保我們知道如果識別到特定工具時該怎麼做。

接下來讓我們看看如何使用此工具調用 LLM：

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

在這裡，我們使用 `bind_tools` 與 `tools` 陣列，從而 LLM `llm_with_tools` 現在擁有此工具的知識。

要使用這個新的 LLM，我們可以輸入以下程式碼：

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

現在當我們在這個具有工具的 LLM 上調用 `invoke` 時，可能會填充屬性 `tool_calls`。如果是這樣，任何識別到的工具都會有 `name` 和 `args` 屬性，這些屬性標識應調用的工具及其參數。完整程式碼如下：

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

運行此程式碼，您應該會看到類似以下的輸出：

```text
TOOL CALL:  15
CONTENT: 
```

此輸出的意思是 LLM 分析了提示「What is 3 + 12」，認為應調用 `add` 工具，並且它知道這一點是因為工具的名稱、描述和成員欄位描述。答案是 15，這是因為我們的程式碼使用字典 `functions` 來調用它：

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### 一個更有趣的工具：調用 Web API

添加兩個數字的工具很有趣，因為它說明了工具調用的工作原理，但通常工具會執行更有趣的操作，例如調用 Web API，讓我們使用以下程式碼來完成這項操作：

```python
class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

query = "Tell me a joke about animals"

# the rest of the code is the same
```

現在如果您運行此程式碼，您會得到類似以下的回應：

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

以下是完整程式碼：

```python
from langchain_openai import ChatOpenAI
import requests
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

tools = [add, joke]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "Tell me a joke about animals"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        # print("TOOL CALL: ", tool)
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

## 嵌入

向量化內容，通過餘弦相似度進行比較

https://python.langchain.com/docs/how_to/embed_text/

### 文件加載器

PDF 和 CSV

## 建立應用程式

TODO

## 作業

## 總結

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。