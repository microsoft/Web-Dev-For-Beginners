<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:20:55+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "zh"
}
-->
# AI框架

市面上有许多AI框架可以显著加快项目开发的速度。在本项目中，我们将重点了解这些框架解决的问题，并亲自构建一个这样的项目。

## 为什么选择框架

在使用AI时，有不同的方式和选择这些方式的不同原因，以下是一些例子：

- **无SDK**：大多数AI模型允许通过例如HTTP请求直接与模型交互。这种方式可行，并且如果没有SDK选项时可能是唯一选择。
- **SDK**：使用SDK通常是推荐的方式，因为它可以减少与模型交互时需要编写的代码量。通常SDK仅限于特定模型，如果使用不同的模型，可能需要编写新的代码来支持这些额外的模型。
- **框架**：框架通常将事情提升到另一个层次。如果需要使用不同的模型，框架通常提供一个统一的API，区别通常在于初始设置。此外，框架还引入了有用的抽象，例如在AI领域，它们可以处理工具、记忆、工作流、代理等，同时减少代码编写量。由于框架通常具有一定的主观性，如果你接受它的工作方式，它会非常有帮助，但如果你尝试做一些框架未设计的定制化内容，可能会有所不足。有时框架可能过于简化，导致你无法学习某些重要主题，这可能会在后续影响性能。

总的来说，选择适合工作的工具。

## 介绍

在本课程中，我们将学习：

- 使用常见的AI框架。
- 解决常见问题，例如聊天对话、工具使用、记忆和上下文。
- 利用这些知识构建AI应用。

## 第一个提示

在我们的第一个应用示例中，我们将学习如何连接到AI模型并使用提示进行查询。

### 使用Python

在这个示例中，我们将使用Langchain连接到GitHub模型。我们可以使用一个名为`ChatOpenAI`的类，并为其提供`api_key`、`base_url`和`model`字段。令牌会自动在GitHub Codespaces中填充，如果你在本地运行应用，则需要设置个人访问令牌才能正常工作。

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

在这段代码中，我们：

- 调用`ChatOpenAI`创建一个客户端。
- 使用`llm.invoke`和提示生成响应。
- 使用`print(response.content)`打印响应。

你应该会看到类似以下的响应：

```text
The capital of France is Paris.
```

## 聊天对话

在上一节中，你看到了我们如何使用通常称为零次提示的方法，即单个提示后跟一个响应。

然而，通常你会发现自己需要维护一个由多个消息组成的对话，这些消息在你和AI助手之间交换。

### 使用Python

在Langchain中，我们可以将对话存储在一个列表中。`HumanMessage`表示用户的消息，而`SystemMessage`是用于设置AI“个性”的消息。在下面的示例中，你会看到我们指示AI扮演皮卡德舰长的角色，并让用户提出“告诉我关于你的信息”作为提示。

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

完整的代码示例如下：

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

你应该会看到类似以下的结果：

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

为了保持对话的状态，你可以将聊天的响应添加到对话中，这样对话就会被记住，以下是实现方式：

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

从上述对话中可以看到，我们两次调用了LLM，第一次对话仅包含两条消息，第二次对话则添加了更多消息。

实际上，如果你运行这段代码，你会看到第二次响应类似于：

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

我就当你是可能吧 ;)

## 流式响应

TODO

## 提示模板

TODO

## 结构化输出

TODO

## 工具调用

工具是我们赋予LLM额外技能的方式。其核心思想是告诉LLM它可以使用哪些函数，如果提示与某个工具的描述匹配，就会调用该工具。

### 使用Python

让我们添加一些工具，如下所示：

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

在这里，我们创建了一个名为`add`的工具的描述。通过继承`TypedDict`并添加像`a`和`b`这样的成员（类型为`Annotated`），这可以转换为LLM可以理解的模式。函数的创建是一个字典，用于确保当识别到特定工具时我们知道该做什么。

接下来我们看看如何使用这个工具调用LLM：

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

在这里，我们使用`bind_tools`绑定我们的`tools`数组，因此LLM `llm_with_tools`现在知道这个工具。

为了使用这个新的LLM，我们可以输入以下代码：

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

现在，当我们调用具有工具的新的LLM的`invoke`时，可能会填充`tool_calls`属性。如果是这样，任何识别到的工具都会有一个`name`和`args`属性，用于标识应该调用哪个工具以及参数是什么。完整代码如下：

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

运行这段代码，你应该会看到类似以下的输出：

```text
TOOL CALL:  15
CONTENT: 
```

这个输出的意思是，LLM分析了提示“3 + 12是多少”，认为应该调用`add`工具，并且它知道这一点是因为工具的名称、描述和成员字段描述。答案是15，因为我们的代码使用了字典`functions`来调用它：

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### 一个更有趣的工具：调用Web API

添加两个数字的工具很有趣，因为它说明了工具调用的工作原理，但通常工具会做一些更有趣的事情，例如调用Web API。让我们用以下代码实现这一点：

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

现在，如果你运行这段代码，你会得到类似以下的响应：

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

以下是完整代码：

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

向量化内容，通过余弦相似性进行比较

https://python.langchain.com/docs/how_to/embed_text/

### 文档加载器

支持PDF和CSV

## 构建应用

TODO

## 作业

## 总结

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档为权威来源。对于关键信息，建议使用专业人工翻译。我们对因使用此翻译而引起的任何误解或误读不承担责任。